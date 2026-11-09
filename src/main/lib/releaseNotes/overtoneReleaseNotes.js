'use strict';
const { gt, rcompare, valid } = require('semver');
const { config } = require('../../config.js');
const { StoreKeys } = require('../../types/store.js');
const store = require('../store.js');
const notes = require('./overtoneReleaseNotes.json');

const currentVersion = config.modification.version;
const entries = valid(currentVersion) ? notes.filter(({ version }) => !gt(version, currentVersion)).sort((left, right) => rcompare(left.version, right.version)) : [];
const hasCurrentNotes = entries.some(({ version }) => version === currentVersion);

const getSeenVersions = () => {
    const seen = store.get(StoreKeys.SEEN_OVERTONE_RELEASE_NOTES);
    return Array.isArray(seen) ? seen : [];
};

const getOvertoneReleaseNotes = () => ({
    entries,
    currentVersion,
    showOnStartup: hasCurrentNotes && !getSeenVersions().includes(currentVersion),
});

const markOvertoneReleaseNotesSeen = (version) => {
    if (version !== currentVersion || !hasCurrentNotes) return;
    const seen = getSeenVersions();
    if (!seen.includes(version)) store.set(StoreKeys.SEEN_OVERTONE_RELEASE_NOTES, [...seen, version]);
};

module.exports = { getOvertoneReleaseNotes, markOvertoneReleaseNotesSeen };
