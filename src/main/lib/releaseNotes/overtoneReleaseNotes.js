'use strict';
const { gt, parse, rcompare } = require('semver');
const { config } = require('../../config.js');
const { StoreKeys } = require('../../types/store.js');
const store = require('../store.js');
const notes = require('./overtoneReleaseNotes.json');

const currentVersion = config.modification.version;
const parsedVersion = parse(currentVersion);
const baseVersion = parsedVersion && `${parsedVersion.major}.${parsedVersion.minor}.${parsedVersion.patch}`;
const currentNotes =
    notes.find(({ version }) => version === currentVersion) ??
    (parsedVersion?.prerelease[0] === 'beta' ? notes.find(({ version }) => version === baseVersion) : undefined);
const entries = parsedVersion
    ? notes.filter((note) => note === currentNotes || !gt(note.version, currentVersion)).sort((left, right) => rcompare(left.version, right.version))
    : [];

const getSeenVersions = () => {
    const seen = store.get(StoreKeys.SEEN_OVERTONE_RELEASE_NOTES);
    return Array.isArray(seen) ? seen : [];
};

const getOvertoneReleaseNotes = () => ({
    entries,
    currentVersion,
    showOnStartup: Boolean(currentNotes) && !getSeenVersions().includes(currentVersion),
});

const markOvertoneReleaseNotesSeen = (version) => {
    if (version !== currentVersion || !currentNotes) return;
    const seen = getSeenVersions();
    if (!seen.includes(version)) store.set(StoreKeys.SEEN_OVERTONE_RELEASE_NOTES, [...seen, version]);
};

module.exports = { getOvertoneReleaseNotes, markOvertoneReleaseNotesSeen };
