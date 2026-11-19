(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6907],
    {
        14567: (e, s) => {
            (e.exports = function (e, s, o, n) {
                return JSON.stringify(e, t(s, n), o);
            }).getSerialize = t;
            function t(e, s) {
                var t = [],
                    o = [];
                return (
                    null == s &&
                        (s = function (e, s) {
                            return t[0] === s ? '[Circular ~]' : '[Circular ~.' + o.slice(0, t.indexOf(s)).join('.') + ']';
                        }),
                    function (n, i) {
                        if (t.length > 0) {
                            var r = t.indexOf(this);
                            (~r ? t.splice(r + 1) : t.push(this), ~r ? o.splice(r, 1 / 0, n) : o.push(n), ~t.indexOf(i) && (i = s.call(this, n, i)));
                        } else t.push(i);
                        return null == e ? i : e.call(this, n, i);
                    }
                );
            }
        },
        23877: (e, s, t) => {
            'use strict';
            var o;
            (t.d(s, { Q: () => n, c: () => o }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(o || (o = {})));
            let n = { [o.ERROR]: 'error', [o.WARNING]: 'warn', [o.INFO]: 'info', [o.DEBUG]: 'debug', [o.TRACE]: 'trace' };
        },
        42592: (e, s, t) => {
            'use strict';
            t.d(s, { W: () => l });
            var o = t(53548),
                n = t(24709),
                i = t(18117),
                r = t(88966),
                c = t(87138);
            let l = (0, n.n)({ event: 'LandingBlock.Loaded', kind: 'hook', requiredScopes: ['screen', 'block'] }, ({ enabled: e = !0 } = {}) => {
                let s = (0, o.useRef)(!1),
                    t = (0, r.N)(),
                    { hash: n } = (0, i.g)(),
                    l = (0, c.w)(),
                    a = (0, o.useMemo)(() => (l ? t.createBlockReporter(l.snapshot) : null), [t, l]);
                (0, o.useEffect)(() => {
                    e && l && a && !s.current && a.loaded({ objectsCount: l.snapshot.block.objectsCount, viewUuid: l.block.loadedSession.start() }) && (s.current = !0);
                }, [e, n, a, l]);
            });
        },
        44084: (e, s, t) => {
            'use strict';
            t.d(s, { r: () => i });
            var o = t(23877),
                n = t(74021);
            class i extends n.q {
                disableLogToConsole;
                constructor(e) {
                    (super(e), (this.disableLogToConsole = e.disableLogToConsole));
                }
                info(e, s) {
                    this.maxLogLevel >= o.c.INFO && this.logToConsole(o.c.INFO, e, s);
                }
                debug(e, s) {
                    this.maxLogLevel >= o.c.DEBUG && this.logToConsole(o.c.DEBUG, e, s);
                }
                trace(e, s) {
                    this.maxLogLevel >= o.c.TRACE && this.logToConsole(o.c.TRACE, e, s);
                }
                warn(e, s) {
                    (this.maxLogLevel >= o.c.WARNING && this.logToConsole(o.c.WARNING, e, s), this.sendToErrorBooster(o.c.WARNING, e, s));
                }
                error(e, s) {
                    (this.maxLogLevel >= o.c.ERROR && this.logToConsole(o.c.ERROR, e, s), this.sendToErrorBooster(o.c.ERROR, e, s));
                }
                log(e, s) {
                    this.logToConsole(o.c.INFO, e, s);
                }
                logToConsole(e, s, t) {
                    if (this.disableLogToConsole) return;
                    let n = o.Q[e];
                    console[n](...this.formatMessage(e, s, t));
                }
                sendToErrorBooster(e, s, t) {
                    window.Ya.Rum.logError({ message: s, level: e, additional: { data: t ? this.obfuscateData({ ...this.additionalData, ...t }) : {} } });
                }
            }
        },
        46384: (e, s, t) => {
            'use strict';
            t.d(s, { F: () => d });
            var o = t(88800),
                n = t(53548),
                i = t(24709),
                r = t(8383),
                c = t(66368),
                l = t(88966);
            let a = (e, s, t) => {
                    let o = e.createBlockViewSession(),
                        n = !1;
                    return { claimLoadedSession: () => (n ? null : ((n = !0), o)), client: e, identity: s, loadedSession: o, screenSession: t };
                },
                d = (0, i.B)(
                    { kind: 'provider', requiredProps: ['blockId', 'blockType', 'blockPosX', 'blockPosY', 'objectsCount'], scope: 'block' },
                    ({ blockId: e, blockIdForFrom: s, blockPosX: t, blockPosY: i, blockType: d, children: u, objectsCount: p }) => {
                        let h = (0, l.N)(),
                            g = (0, n.useContext)(r.k)?.session,
                            b = [e, d, t, i].join(':'),
                            [m, f] = (0, n.useState)(() => a(h, b, g));
                        (m.client !== h || m.identity !== b || m.screenSession !== g) && f(a(h, b, g));
                        let S = (0, n.useMemo)(
                            () => ({
                                claimLoadedSession: m.claimLoadedSession,
                                loadedSession: m.loadedSession,
                                scope: { blockId: e, blockIdForFrom: s, blockPosX: t, blockPosY: i, blockType: d, objectsCount: p },
                            }),
                            [e, s, t, i, d, p, m.claimLoadedSession, m.loadedSession],
                        );
                        return (0, o.jsx)(c.p, { value: S, children: u });
                    },
                );
        },
        59724: (e, s, t) => {
            'use strict';
            t.d(s, { a: () => u });
            var o = t(88800),
                n = t(53548),
                i = t(8383),
                r = t(24709),
                c = t(88966);
            let l = new WeakMap();
            class a {
                screenViewUuid;
                queue;
                consumers = new Set();
                loadedTabs = new Set();
                opened = !1;
                pendingOpen = !1;
                closed = !1;
                pendingClose = null;
                constructor(e, s) {
                    this.screenViewUuid = e;
                    let t =
                        l.get(s) ??
                        (() => {
                            let e = [],
                                s = !1,
                                t = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                o = () => {
                                    s ||
                                        ((s = !0),
                                        queueMicrotask(() => {
                                            try {
                                                t();
                                            } finally {
                                                ((s = !1), e.length > 0 && o());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (t(), e());
                                },
                                defer: (s) => {
                                    (e.push(s), o());
                                },
                            };
                        })();
                    (l.set(s, t), (this.queue = t));
                }
                open(e, s) {
                    ((this.pendingClose = null),
                        this.opened ||
                            this.pendingOpen ||
                            ((this.pendingOpen = !0),
                            this.queue.open(() => {
                                try {
                                    (s(), (this.opened = !0));
                                } finally {
                                    this.pendingOpen = !1;
                                }
                            })),
                        this.consumers.add(e));
                }
                close(e, s) {
                    (this.consumers.delete(e), this.closed || this.pendingClose?.scheduled || ((this.pendingClose = { send: s, scheduled: !1 }), this.scheduleClose()));
                }
                release(e) {
                    (this.consumers.delete(e), this.scheduleClose());
                }
                loadTab(e, s) {
                    this.loadedTabs.has(e) || (s(), this.loadedTabs.add(e));
                }
                scheduleClose() {
                    let e = this.pendingClose;
                    !e ||
                        e.scheduled ||
                        this.consumers.size > 0 ||
                        ((e.scheduled = !0),
                        this.queue.defer(() => {
                            this.pendingClose !== e || this.consumers.size > 0 || ((this.pendingClose = null), e.send(), (this.closed = !0));
                        }));
                }
            }
            var d = t(97234);
            let u = (0, r.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...s }) => {
                    let t = (0, c.N)(),
                        r = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === d.DomainObjectType.NonApplicable))))(
                            s,
                        ),
                        [l, u] = (0, n.useState)(() => {
                            let e = new a(t.createScreenSession().screenViewUuid, t);
                            return { client: t, input: s, isReady: r, scope: r ? t.createScreenScope(s, e) : null, session: e };
                        });
                    if (l.client !== t || l.input.pageId !== s.pageId || l.input.skeletonId !== s.skeletonId) {
                        let n = new a(t.createScreenSession().screenViewUuid, t),
                            c = { client: t, input: s, isReady: r, scope: r ? t.createScreenScope(s, n) : null, session: n };
                        return (u(c), (0, o.jsx)(i.k, { value: c, children: e }));
                    }
                    if (
                        l.isReady !== r ||
                        l.input.mainObjectType !== s.mainObjectType ||
                        l.input.mainObjectId !== s.mainObjectId ||
                        l.input.displayReasonId !== s.displayReasonId ||
                        l.input.pageIdForFrom !== s.pageIdForFrom ||
                        l.input.pagePlacement !== s.pagePlacement ||
                        l.input.pageStyle !== s.pageStyle
                    ) {
                        let n = { ...l, input: s, isReady: r, scope: r ? t.createScreenScope(s, l.session) : null };
                        return (u(n), (0, o.jsx)(i.k, { value: n, children: e }));
                    }
                    return (0, o.jsx)(i.k, { value: l, children: e });
                },
            );
        },
        66610: (e, s, t) => {
            'use strict';
            t.d(s, { D: () => l });
            var o = t(53548),
                n = t(24709),
                i = t(88966),
                r = t(87138),
                c = t(46457);
            let l = (0, n.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, i.N)(),
                    s = (0, r.w)(),
                    t = (0, o.useMemo)(() => (s ? e.createBlockReporter(s.snapshot) : null), [e, s]);
                return (0, c.c)((e) => {
                    s?.object && t && t.actionPerformed({ ...e, viewUuid: (s.object.activeViewSession ?? s.object.viewSession).start() });
                });
            });
        },
        74021: (e, s, t) => {
            'use strict';
            t.d(s, { q: () => l });
            var o = t(14567),
                n = t(243),
                i = t(62151),
                r = t(33396);
            let c = () => 'SECRET';
            class l {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: s, secureFields: t }) {
                    ((this.maxLogLevel = s), (this.secureFields = t), (this.additionalData = e));
                }
                formatMessage(e, s, t = {}, n) {
                    let i,
                        c = String(s instanceof Error && s.stack ? s.stack : s),
                        l = (0, r.A)({ ...this.additionalData, ...t });
                    return (Object.keys(l).length && (i = this.obfuscateData(l)), n) ? `${c} ${o(i)}` : [c, i];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let s of this.secureFields) void 0 !== (0, n.A)(e, s) && (0, i.A)(e, s, c());
                    return e;
                }
            }
        },
        77451: (e, s, t) => {
            'use strict';
            t.d(s, { Jt: () => i, TF: () => c, hZ: () => r });
            var o = function () {
                return (o =
                    Object.assign ||
                    function (e) {
                        for (var s, t = 1, o = arguments.length; t < o; t++)
                            for (var n in (s = arguments[t])) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
                        return e;
                    }).apply(this, arguments);
            };
            function n(e, s) {
                if (!s) return '';
                var t = '; ' + e;
                return !0 === s ? t : t + '=' + s;
            }
            function i(e) {
                return (function (e) {
                    for (var s = {}, t = e ? e.split('; ') : [], o = 0; o < t.length; o++) {
                        var n = t[o].split('='),
                            i = n.slice(1).join('=');
                        '"' === i[0] && (i = i.slice(1, -1));
                        try {
                            s[decodeURIComponent(n[0])] = i.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return s;
                })(document.cookie)[e];
            }
            function r(e, s, t) {
                var i;
                document.cookie =
                    ((i = o({ path: '/' }, t)),
                    encodeURIComponent(e)
                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                        .replace(/\(/g, '%28')
                        .replace(/\)/g, '%29') +
                        '=' +
                        encodeURIComponent(s).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) +
                        (function (e) {
                            if ('number' == typeof e.expires) {
                                var s = new Date();
                                (s.setMilliseconds(s.getMilliseconds() + 864e5 * e.expires), (e.expires = s));
                            }
                            return (
                                n('Expires', e.expires ? e.expires.toUTCString() : '') +
                                n('Domain', e.domain) +
                                n('Path', e.path) +
                                n('Secure', e.secure) +
                                n('SameSite', e.sameSite)
                            );
                        })(i));
            }
            function c(e, s) {
                r(e, '', o(o({}, s), { expires: -1 }));
            }
        },
        90852: (e, s, t) => {
            'use strict';
            t.d(s, { B: () => a });
            var o = t(88800),
                n = t(53548),
                i = t(24709),
                r = t(66368),
                c = t(37556),
                l = t(88966);
            let a = (0, i.B)(
                { kind: 'provider', requiredProps: ['objectType', 'objectId', 'objectPosX', 'objectPosY'], pendingProps: ['objectId'], scope: 'object' },
                ({ children: e, objectId: s, objectPosX: t, objectPosY: i, objectType: a }) => {
                    let d = (0, l.N)(),
                        u = (0, n.useContext)(r.p)?.loadedSession,
                        p = [a, s, t, i].join(':'),
                        [h, g] = (0, n.useState)(() => ({ client: d, identity: p, blockSession: u, viewSession: d.createBlockViewSession() }));
                    (h.client !== d || h.identity !== p || h.blockSession !== u) &&
                        g({ client: d, identity: p, blockSession: u, viewSession: d.createBlockViewSession() });
                    let b = (0, n.useMemo)(
                        () => ({ activeViewSession: null, scope: { objectId: s, objectPosX: t, objectPosY: i, objectType: a }, viewSession: h.viewSession }),
                        [s, t, i, a, h.viewSession],
                    );
                    return (0, o.jsx)(c.l, { value: b, children: e });
                },
            );
        },
    },
]);
