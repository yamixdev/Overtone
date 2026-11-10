'use strict';

function queueComponentInstall(component, operation, verifyLatest = false) {
    const active = component.installing;
    if (active?.verifyLatest) {
        return verifyLatest ? active.promise : active.promise.catch(() => queueComponentInstall(component, operation));
    }
    if (active && !verifyLatest) return active.promise;

    const next = { verifyLatest };
    const previous = active ? active.promise.catch(() => {}) : Promise.resolve();
    next.promise = previous.then(operation).finally(() => {
        if (component.installing === next) component.installing = null;
    });
    component.installing = next;
    return next.promise;
}

module.exports = { queueComponentInstall };
