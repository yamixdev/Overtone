'use strict';

const { matchesAllowedUrl } = require('../handlers/handleHeadersReceived/corsHandler.js');
const { isLocalAddonId } = require('./isolatedAddonExecution.js');
const worlds = new Map();
const senders = new Set();
const ISOLATED_ORIGIN = /^https:\/\/addon-\d+\.pulsesync\.invalid$/;
const MAX_TEXT_BYTES = 2 * 1024 * 1024;

function closePolicy(policy) {
    for (const controller of policy?.requests.values() ?? []) controller.abort();
}

function registerAddonNetworkPolicy(sender, worldId, addon, getSnapshot) {
    const origin = `https://addon-${worldId}.pulsesync.invalid`;
    const key = `${sender.id}:${origin}`;
    closePolicy(worlds.get(key));
    worlds.set(key, { senderId: sender.id, addon, getSnapshot, requests: new Map() });
    if (!senders.has(sender.id)) {
        senders.add(sender.id);
        sender.once('destroyed', () => {
            senders.delete(sender.id);
            for (const [key, policy] of worlds) {
                if (policy.senderId !== sender.id) continue;
                closePolicy(policy);
                worlds.delete(key);
            }
        });
    }
    return origin;
}

function findCurrentAddon(policy) {
    const current = policy.getSnapshot()?.addons?.find((addon) => addon.id === policy.addon.id);
    return current?.code === policy.addon.code ? current : null;
}

async function readResponseText(response) {
    const decoder = new TextDecoder();
    let size = 0;
    let text = '';
    for await (const chunk of response) {
        size += chunk.byteLength;
        if (size > MAX_TEXT_BYTES) throw new Error('Addon response exceeds the text size limit');
        text += decoder.decode(chunk, { stream: true });
    }
    return text + decoder.decode();
}

function requestText(makeRequest, target, accept, isAllowed, signal) {
    return new Promise((resolve, reject) => {
        let redirects = 0;
        const request = makeRequest({ url: target.href, credentials: 'omit', redirect: 'manual' });
        const fail = (error) => {
            signal.removeEventListener('abort', abort);
            reject(error);
            request.abort();
        };
        const abort = () => fail(signal.reason);

        if (accept) request.setHeader('Accept', accept);
        signal.addEventListener('abort', abort, { once: true });
        request.on('error', (error) => {
            signal.removeEventListener('abort', abort);
            reject(error);
        });
        request.on('redirect', (_status, _method, url) => {
            try {
                if (++redirects > 5) throw new Error('Too many addon redirects');
                target = new URL(url);
                if (!isAllowed(target)) throw new Error('Addon redirect is outside the allowed URLs');
                request.followRedirect();
            } catch (error) {
                fail(error);
            }
        });
        request.once('response', async (response) => {
            try {
                const { statusCode: status, statusMessage: statusText } = response;
                const ok = status >= 200 && status < 300;
                const text = ok ? await readResponseText(response) : '';
                signal.throwIfAborted();
                if (!isAllowed(target)) throw new Error('Addon URL permission changed');
                resolve({ status, statusText, text });
                if (!ok) request.abort();
            } catch (error) {
                fail(error);
            } finally {
                signal.removeEventListener('abort', abort);
            }
        });
        request.end();
    });
}

async function readLocalAddonText(senderId, payload, makeRequest) {
    const { worldId, requestId } = payload ?? {};
    if (!Number.isSafeInteger(worldId) || typeof requestId !== 'string' || !/^[a-f0-9-]{36}$/.test(requestId)) throw new TypeError('Invalid addon request');
    const policy = worlds.get(`${senderId}:https://addon-${worldId}.pulsesync.invalid`);
    if (payload.cancel === true) {
        policy?.requests.get(requestId)?.abort();
        return null;
    }
    if (!policy || !isLocalAddonId(policy.addon.id) || !findCurrentAddon(policy)) throw new Error('Addon is inactive');

    const isAllowed = (target) => {
        const current = findCurrentAddon(policy);
        if (!current) throw new Error('Addon is inactive');
        const rules = current.securityManifest?.allowedUrls ?? current.allowedUrls ?? [];
        return target.protocol === 'https:' && rules.some((rule) => matchesAllowedUrl(target.href, rule));
    };
    if (typeof payload.url !== 'string' || payload.url.length > 8192) throw new TypeError('Invalid addon URL');
    const target = new URL(payload.url);
    if (!isAllowed(target)) return null;
    if (policy.requests.has(requestId) || policy.requests.size >= 8) throw new Error('Too many pending addon requests');
    const accept = typeof payload.accept === 'string' && payload.accept.length <= 256 ? payload.accept : '';

    const controller = new AbortController();
    const signal = AbortSignal.any([controller.signal, AbortSignal.timeout(20_000)]);
    policy.requests.set(requestId, controller);
    try {
        return await requestText(makeRequest, target, accept, isAllowed, signal);
    } finally {
        policy.requests.delete(requestId);
    }
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

module.exports = { registerAddonNetworkPolicy, checkAddonNetworkRequest, mayAllowLocalAddonNetworkRequest, readLocalAddonText };
