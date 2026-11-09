'use strict';

const { matchesAllowedUrl } = require('../handlers/handleHeadersReceived/corsHandler.js');
const { isLocalAddonId } = require('./isolatedAddonExecution.js');
const worlds = new Map();
const senders = new Set();
const ISOLATED_ORIGIN = /^https:\/\/addon-\d+\.pulsesync\.invalid$/;

function registerAddonNetworkPolicy(sender, worldId, addon, getSnapshot) {
    const origin = `https://addon-${worldId}.pulsesync.invalid`;
    const key = `${sender.id}:${origin}`;
    worlds.set(key, { senderId: sender.id, addon, getSnapshot });
    if (!senders.has(sender.id)) {
        senders.add(sender.id);
        sender.once('destroyed', () => {
            senders.delete(sender.id);
            for (const key of worlds.keys()) if (key.startsWith(`${sender.id}:`)) worlds.delete(key);
        });
    }
    return origin;
}

function findCurrentAddon(policy) {
    const current = policy.getSnapshot()?.addons?.find((addon) => addon.id === policy.addon.id);
    return current?.code === policy.addon.code ? current : null;
}

function mayAllowLocalAddonNetworkRequest(senderId, value) {
    for (const policy of worlds.values()) {
        if (policy.senderId !== senderId || !isLocalAddonId(policy.addon.id)) continue;
        if (findCurrentAddon(policy)?.allowedUrls?.some((rule) => matchesAllowedUrl(value, rule))) return true;
    }
    return false;
}

function checkAddonNetworkRequest(senderId, origin, value) {
    if (typeof origin !== 'string' || !ISOLATED_ORIGIN.test(origin)) return undefined;
    const policy = worlds.get(`${senderId}:${origin}`);
    const current = policy && findCurrentAddon(policy);
    if (!current) return false;
    try {
        const target = new URL(value);
        if (target.origin === 'http://localhost:2007' && /^\/assets(?:\/|$)/.test(target.pathname)) {
            return !isLocalAddonId(current.id) && target.searchParams.get('id') === current.id;
        }
    } catch {
        return false;
    }
    const rules = current.securityManifest?.allowedUrls ?? current.allowedUrls ?? [];
    return rules.some((rule) => matchesAllowedUrl(value, rule));
}

module.exports = { registerAddonNetworkPolicy, checkAddonNetworkRequest, mayAllowLocalAddonNetworkRequest };
