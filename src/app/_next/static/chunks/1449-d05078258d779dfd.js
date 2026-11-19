'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [146, 1449, 2837, 4378],
    {
        8198: (e, t) => {
            var n;
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.MiniappConfig = void 0),
                (t.makeMetaParams = function (e) {
                    return { event: { version: e } };
                }),
                (t.createEvgenAnalytics = function (e, t, n) {
                    return {
                        trackEvent: (a, s) => {
                            let r = { ...s, ...t.getGlobalParams(), ...n.getPlatformParams() };
                            e.trackEvent(a, r);
                        },
                    };
                }),
                !(function (e) {
                    ((e.Music = 'music'), (e.NotApplicable = 'not_applicable'));
                })(n || (t.MiniappConfig = n = {})));
        },
        8383: (e, t, n) => {
            n.d(t, { k: () => a });
            let a = (0, n(53548).createContext)(null);
        },
        14955: (e, t, n) => {
            n.d(t, { I: () => d });
            var a = n(53548),
                s = n(59714),
                r = n(24709),
                i = n(23480),
                o = n(94126),
                l = n(18117),
                c = n(93940),
                u = n(46457);
            let d = (0, r.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, () => {
                let e = (0, a.useContext)(i.I),
                    { hash: t } = (0, l.g)(),
                    { screen: n, tab: r } = (0, c.j)();
                return (0, u.c)((a) => {
                    e &&
                        n &&
                        void 0 !== t &&
                        (0, s.rw)(e, {
                            ...a,
                            hash: t,
                            pageId: n.pageId,
                            pageStyle: n.pageStyle,
                            pagePlacement: n.pagePlacement,
                            skeletonId: n.skeletonId,
                            mainObjectType: n.mainObjectType,
                            mainObjectId: n.mainObjectId,
                            ...(r ?? o.Ve),
                        });
                });
            });
        },
        14965: (e, t, n) => {
            n.d(t, { t: () => a });
            class a extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: n = 'E_INTERNAL', data: s = {}, ...r } = t,
                        i = e || 'Internal error';
                    (super(i, r), (this.message = i), (this.code = n), (this.data = s), (this.stack = Error(i).stack), Object.setPrototypeOf(this, a.prototype));
                }
            }
        },
        17017: (e, t, n) => {
            var a;
            (n.d(t, { Z: () => a }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(a || (a = {})));
        },
        18117: (e, t, n) => {
            n.d(t, { g: () => r });
            var a = n(53548),
                s = n(48211);
            let r = () => ({ hash: (0, a.useContext)(s.m) });
        },
        19840: (e, t, n) => {
            (n.d(t, { G: () => s }), n(46606));
            var a = n(91136);
            class s extends a.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        23480: (e, t, n) => {
            n.d(t, { I: () => a });
            let a = (0, n(53548).createContext)(null);
        },
        24709: (e, t, n) => {
            n.d(t, { B: () => s, n: () => a });
            let a = (e, t) => Object.assign(t, { analyticsCoverageMetadata: e }),
                s = (e, t) => Object.assign(t, { analyticsCoverageMetadata: e });
        },
        30958: (e, t, n) => {
            n.d(t, { F: () => a });
            let a = (0, n(53548).createContext)(null);
        },
        36740: (e, t, n) => {
            n.d(t, { u: () => p });
            var a = n(53548),
                s = n(59714),
                r = n(24709),
                i = n(23480),
                o = n(94126),
                l = n(8383),
                c = n(18117),
                u = n(93940),
                d = n(46457);
            let p = (0, r.n)({ event: 'Screen.Opened/Closed', kind: 'hook', requiredScopes: ['screen'] }, () => {
                let e = (0, a.useContext)(i.I),
                    { hash: t } = (0, c.g)(),
                    { screen: n, tab: r } = (0, u.j)(),
                    p = (0, a.useContext)(l.k)?.session,
                    { current: m } = (0, a.useRef)(Symbol()),
                    O = !!n,
                    h = (a) => {
                        if (!e || !p || !n?.pageId || void 0 === t || !O) return !1;
                        let i = {
                            hash: t,
                            pageId: n.pageId,
                            pageStyle: n.pageStyle,
                            pagePlacement: n.pagePlacement,
                            mainObjectType: n.mainObjectType,
                            mainObjectId: n.mainObjectId,
                            skeletonId: n.skeletonId,
                            viewUuid: n.screenViewUuid,
                            ...(r ?? o.Ve),
                        };
                        return (a ? p.open(m, () => (0, s.Fn)(e, i)) : p.close(m, () => (0, s.PO)(e, i)), !0);
                    },
                    [b, v] = (0, a.useState)(() => ({ session: p, send: h, opened: !1 })),
                    g = b;
                (b.session !== p && v((g = { session: p, send: h, opened: !1 })),
                    (0, a.useInsertionEffect)(() => {
                        O && void 0 !== t && (g.send = h);
                    }, [g, t, O, h]));
                let E = (0, d.c)((e, t) => {
                    e.send(t) && (e.opened = t);
                });
                ((0, a.useEffect)(
                    () => (
                        E(g, !0),
                        () => {
                            (g.opened && E(g, !1), g.session?.release(m));
                        }
                    ),
                    [m, g, E],
                ),
                    (0, a.useEffect)(() => {
                        E(g, !0);
                    }, [g, t, O, E]));
            });
        },
        37556: (e, t, n) => {
            n.d(t, { l: () => a });
            let a = (0, n(53548).createContext)(null);
        },
        42592: (e, t, n) => {
            n.d(t, { W: () => l });
            var a = n(53548),
                s = n(24709),
                r = n(18117),
                i = n(88966),
                o = n(87138);
            let l = (0, s.n)({ event: 'LandingBlock.Loaded', kind: 'hook', requiredScopes: ['screen', 'block'] }, ({ enabled: e = !0 } = {}) => {
                let t = (0, a.useRef)(!1),
                    n = (0, i.N)(),
                    { hash: s } = (0, r.g)(),
                    l = (0, o.w)(),
                    c = (0, a.useMemo)(() => (l ? n.createBlockReporter(l.snapshot) : null), [n, l]);
                (0, a.useEffect)(() => {
                    e && l && c && !t.current && c.loaded({ objectsCount: l.snapshot.block.objectsCount, viewUuid: l.block.loadedSession.start() }) && (t.current = !0);
                }, [e, s, c, l]);
            });
        },
        43054: (e, t, n) => {
            n.d(t, { s: () => r });
            var a = n(53548),
                s = n(23480);
            let r = () => {
                let e = (0, a.useContext)(s.I);
                return (0, a.useMemo)(() => (e ? { evgenInstance: e } : null), [e]);
            };
        },
        46606: (e, t, n) => {
            var a;
            (n.d(t, { X: () => a }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(a || (a = {})));
        },
        48211: (e, t, n) => {
            n.d(t, { m: () => a });
            let a = (0, n(53548).createContext)(void 0);
        },
        59714: (e, t, n) => {
            ((t.w5 = function (e, t) {
                let {
                        skeletonId: n = '',
                        mainObjectType: r = s.DomainObjectType.NonApplicable,
                        mainObjectId: i = '',
                        tabId: o = '',
                        tabPos: l = 0,
                        isTabSelectedByDefault: c = !1,
                        viewUuid: u = '',
                    } = t,
                    d = (0, a.makeMetaParams)(1),
                    p = { ...t, skeletonId: n, mainObjectType: r, mainObjectId: i, tabId: o, tabPos: l, isTabSelectedByDefault: c, viewUuid: u, _meta: d };
                e.trackEvent('Screen.Opened', p);
            }),
                (t.Fn = function (e, t) {
                    let {
                            pageStyle: n = s.PageStyles.Fullscreen,
                            pagePlacement: r = s.PagePlacements.Fullscreen,
                            skeletonId: i = '',
                            mainObjectType: o = s.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: c = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: d = !1,
                            viewUuid: p = '',
                        } = t,
                        m = (0, a.makeMetaParams)(3),
                        O = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: r,
                            skeletonId: i,
                            mainObjectType: o,
                            mainObjectId: l,
                            tabId: c,
                            tabPos: u,
                            isTabSelectedByDefault: d,
                            viewUuid: p,
                            _meta: m,
                        };
                    e.trackEvent('Screen.Opened', O);
                }),
                (t.XB = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: r = s.DomainObjectType.NonApplicable,
                            mainObjectId: i = '',
                            tabId: o = '',
                            tabPos: l = 0,
                            isTabSelectedByDefault: c = !1,
                        } = t,
                        u = (0, a.makeMetaParams)(1),
                        d = { ...t, skeletonId: n, mainObjectType: r, mainObjectId: i, tabId: o, tabPos: l, isTabSelectedByDefault: c, _meta: u };
                    e.trackEvent('Screen.Closed', d);
                }),
                (t.Ig = function (e, t) {
                    let {
                            pageStyle: n = s.PageStyles.Fullscreen,
                            pagePlacement: r = s.PagePlacements.Fullscreen,
                            skeletonId: i = '',
                            mainObjectType: o = s.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: c = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: d = !1,
                        } = t,
                        p = (0, a.makeMetaParams)(3),
                        m = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: r,
                            skeletonId: i,
                            mainObjectType: o,
                            mainObjectId: l,
                            tabId: c,
                            tabPos: u,
                            isTabSelectedByDefault: d,
                            _meta: p,
                        };
                    e.trackEvent('Screen.Closed', m);
                }),
                (t.PO = function (e, t) {
                    let {
                            pageStyle: n = s.PageStyles.Fullscreen,
                            pagePlacement: r = s.PagePlacements.Fullscreen,
                            skeletonId: i = '',
                            mainObjectType: o = s.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: c = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: d = !1,
                            viewUuid: p = '',
                        } = t,
                        m = (0, a.makeMetaParams)(4),
                        O = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: r,
                            skeletonId: i,
                            mainObjectType: o,
                            mainObjectId: l,
                            tabId: c,
                            tabPos: u,
                            isTabSelectedByDefault: d,
                            viewUuid: p,
                            _meta: m,
                        };
                    e.trackEvent('Screen.Closed', O);
                }),
                (t.e7 = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: r = s.DomainObjectType.NonApplicable,
                            mainObjectId: i = '',
                            tabId: o = '',
                            tabPos: l = 0,
                            isTabSelectedByDefault: c = !1,
                        } = t,
                        u = (0, a.makeMetaParams)(1),
                        d = { ...t, skeletonId: n, mainObjectType: r, mainObjectId: i, tabId: o, tabPos: l, isTabSelectedByDefault: c, _meta: u };
                    e.trackEvent('Screen.Started', d);
                }),
                (t.BP = function (e, t) {
                    let {
                            entityPosX: n = 1,
                            entityPosY: r = 1,
                            objectPosX: i = 0,
                            objectPosY: o = 0,
                            streamStartTrigger: l = s.StreamStartTriggers.UserAction,
                            pageStyle: c = s.PageStyles.Fullscreen,
                            pagePlacement: u = s.PagePlacements.Fullscreen,
                            skeletonId: d = '',
                            mainObjectType: p = s.DomainObjectType.NonApplicable,
                            mainObjectId: m = '',
                            tabId: O = '',
                            tabPos: h = 0,
                            isTabSelectedByDefault: b = !1,
                        } = t,
                        v = (0, a.makeMetaParams)(5),
                        g = {
                            ...t,
                            entityPosX: n,
                            entityPosY: r,
                            objectPosX: i,
                            objectPosY: o,
                            streamStartTrigger: l,
                            pageStyle: c,
                            pagePlacement: u,
                            skeletonId: d,
                            mainObjectType: p,
                            mainObjectId: m,
                            tabId: O,
                            tabPos: h,
                            isTabSelectedByDefault: b,
                            _meta: v,
                        };
                    e.trackEvent('Screen.Started', g);
                }),
                (t.Mu = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: r = s.DomainObjectType.NonApplicable,
                            mainObjectId: i = '',
                            tabId: o = '',
                            tabPos: l = 0,
                            isTabSelectedByDefault: c = !1,
                        } = t,
                        u = (0, a.makeMetaParams)(1),
                        d = { ...t, skeletonId: n, mainObjectType: r, mainObjectId: i, tabId: o, tabPos: l, isTabSelectedByDefault: c, _meta: u };
                    e.trackEvent('Screen.Navigated', d);
                }),
                (t.ID = function (e, t) {
                    let {
                            pageStyle: n = s.PageStyles.Fullscreen,
                            pagePlacement: r = s.PagePlacements.Fullscreen,
                            skeletonId: i = '',
                            mainObjectType: o = s.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: c = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: d = !1,
                            deepLink: p = '',
                        } = t,
                        m = (0, a.makeMetaParams)(4),
                        O = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: r,
                            skeletonId: i,
                            mainObjectType: o,
                            mainObjectId: l,
                            tabId: c,
                            tabPos: u,
                            isTabSelectedByDefault: d,
                            deepLink: p,
                            _meta: m,
                        };
                    e.trackEvent('Screen.Navigated', O);
                }),
                (t.bv = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: r = s.DomainObjectType.NonApplicable,
                            mainObjectId: i = '',
                            tabId: o = '',
                            tabPos: l = 0,
                            isTabSelectedByDefault: c = !1,
                        } = t,
                        u = (0, a.makeMetaParams)(1),
                        d = { ...t, skeletonId: n, mainObjectType: r, mainObjectId: i, tabId: o, tabPos: l, isTabSelectedByDefault: c, _meta: u };
                    e.trackEvent('Screen.ActionPerformed', d);
                }),
                (t.rw = function (e, t) {
                    let {
                            pageStyle: n = s.PageStyles.Fullscreen,
                            pagePlacement: r = s.PagePlacements.Fullscreen,
                            skeletonId: i = '',
                            mainObjectType: o = s.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: c = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: d = !1,
                        } = t,
                        p = (0, a.makeMetaParams)(4),
                        m = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: r,
                            skeletonId: i,
                            mainObjectType: o,
                            mainObjectId: l,
                            tabId: c,
                            tabPos: u,
                            isTabSelectedByDefault: d,
                            _meta: p,
                        };
                    e.trackEvent('Screen.ActionPerformed', m);
                }),
                (t.z5 = function (e, t) {
                    let {
                            pageStyle: n = s.PageStyles.Fullscreen,
                            pagePlacement: r = s.PagePlacements.Fullscreen,
                            skeletonId: i = '',
                            mainObjectType: o = s.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                        } = t,
                        c = (0, a.makeMetaParams)(1),
                        u = { ...t, pageStyle: n, pagePlacement: r, skeletonId: i, mainObjectType: o, mainObjectId: l, _meta: c };
                    e.trackEvent('Screen.ErrorRaised', u);
                }));
            let a = n(8198),
                s = n(97234);
        },
        59724: (e, t, n) => {
            n.d(t, { a: () => d });
            var a = n(88800),
                s = n(53548),
                r = n(8383),
                i = n(24709),
                o = n(88966);
            let l = new WeakMap();
            class c {
                screenViewUuid;
                queue;
                consumers = new Set();
                loadedTabs = new Set();
                opened = !1;
                pendingOpen = !1;
                closed = !1;
                pendingClose = null;
                constructor(e, t) {
                    this.screenViewUuid = e;
                    let n =
                        l.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                n = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                a = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                n();
                                            } finally {
                                                ((t = !1), e.length > 0 && a());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (n(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), a());
                                },
                            };
                        })();
                    (l.set(t, n), (this.queue = n));
                }
                open(e, t) {
                    ((this.pendingClose = null),
                        this.opened ||
                            this.pendingOpen ||
                            ((this.pendingOpen = !0),
                            this.queue.open(() => {
                                try {
                                    (t(), (this.opened = !0));
                                } finally {
                                    this.pendingOpen = !1;
                                }
                            })),
                        this.consumers.add(e));
                }
                close(e, t) {
                    (this.consumers.delete(e), this.closed || this.pendingClose?.scheduled || ((this.pendingClose = { send: t, scheduled: !1 }), this.scheduleClose()));
                }
                release(e) {
                    (this.consumers.delete(e), this.scheduleClose());
                }
                loadTab(e, t) {
                    this.loadedTabs.has(e) || (t(), this.loadedTabs.add(e));
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
            var u = n(97234);
            let d = (0, i.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let n = (0, o.N)(),
                        i = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === u.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [l, d] = (0, s.useState)(() => {
                            let e = new c(n.createScreenSession().screenViewUuid, n);
                            return { client: n, input: t, isReady: i, scope: i ? n.createScreenScope(t, e) : null, session: e };
                        });
                    if (l.client !== n || l.input.pageId !== t.pageId || l.input.skeletonId !== t.skeletonId) {
                        let s = new c(n.createScreenSession().screenViewUuid, n),
                            o = { client: n, input: t, isReady: i, scope: i ? n.createScreenScope(t, s) : null, session: s };
                        return (d(o), (0, a.jsx)(r.k, { value: o, children: e }));
                    }
                    if (
                        l.isReady !== i ||
                        l.input.mainObjectType !== t.mainObjectType ||
                        l.input.mainObjectId !== t.mainObjectId ||
                        l.input.displayReasonId !== t.displayReasonId ||
                        l.input.pageIdForFrom !== t.pageIdForFrom ||
                        l.input.pagePlacement !== t.pagePlacement ||
                        l.input.pageStyle !== t.pageStyle
                    ) {
                        let s = { ...l, input: t, isReady: i, scope: i ? n.createScreenScope(t, l.session) : null };
                        return (d(s), (0, a.jsx)(r.k, { value: s, children: e }));
                    }
                    return (0, a.jsx)(r.k, { value: l, children: e });
                },
            );
        },
        62837: (e, t, n) => {
            n.d(t, { AS: () => p, Yw: () => a, JU: () => s, DQ: () => h, Ve: () => b });
            var a,
                s,
                r = n(43297),
                i = (function () {
                    function e(e) {
                        ((this.observableValue = (0, r.vP)(e)), (this.prevValueByListener = new Map()));
                    }
                    return (
                        Object.defineProperty(e.prototype, 'value', {
                            get: function () {
                                return this.observableValue.value;
                            },
                            set: function (e) {
                                this.observableValue.value = e;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.onChange = function (e, t) {
                            var n = this;
                            void 0 === t && (t = { skipFirstChange: !1 });
                            var a = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (s) {
                                    if (s !== n.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && a) {
                                            a = !1;
                                            return;
                                        }
                                        (n.prevValueByListener.set(e, s), e(s));
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    ((this.observableValue = (0, r.EW)(e)), (this.prevValueByListener = new Map()));
                }
                (Object.defineProperty(e.prototype, 'value', {
                    get: function () {
                        return this.observableValue.value;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                    (e.prototype.onChange = function (e, t) {
                        var n = this;
                        void 0 === t && (t = { skipFirstChange: !1 });
                        var a = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (s) {
                                if (s !== n.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && a) {
                                        a = !1;
                                        return;
                                    }
                                    (n.prevValueByListener.set(e, s), e(s));
                                }
                            })
                        );
                    }));
            })();
            var o = n(14965);
            class l extends o.t {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    (super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, l.prototype));
                }
            }
            class c extends o.t {
                name = 'DisclaimerNotFoundError';
                disclaimerId;
                retryAttempted;
                constructor(e, t) {
                    (super(`Disclaimer with id "${e}" not found${t ? ' after retry' : ''}`, {
                        code: 'E_DISCLAIMER_NOT_FOUND',
                        data: { disclaimerId: e, retryAttempted: t },
                    }),
                        (this.disclaimerId = e),
                        (this.retryAttempted = t),
                        Object.setPrototypeOf(this, c.prototype));
                }
            }
            !(function (t) {
                // for PulseSync: BEGIN substituted-track enum extension
                ((t.MODAL = 'modal'),
                    (t.FOREIGN_AGENT = 'foreignAgent'),
                    (t.INFORMATIONAL = 'informational'),
                    (t.AGE_18 = 'age18'),
                    (t.EXPLICIT = 'explicit'),
                    (t.DESCRIPTION_TEXT = 'descriptionText'),
                    (t.AGE_12_ICON = 'age12Icon'),
                    (t.AGE_16_ICON = 'age16Icon'),
                    (t.AGE_18_ICON = 'age18Icon'),
                    (t.EXPLICIT_ICON = 'explicitIcon'),
                    ((t.EXCLAMATION_ICON = 'exclamationIcon'), (t.SUBSTITUTED_ICON = 'substitutedIcon')));
                // for PulseSync: END substituted-track enum extension
            })(a || (a = {}));
            let u = (e) => {
                    let t = [];
                    for (let n of e) {
                        let [e, a] = n.split(':');
                        e && a && t.push({ type: e, id: a });
                    }
                    return t;
                },
                d = (e, t) => u(e).filter((e) => e.type === t);
            class p {
                items;
                isLoading;
                error;
                dataSource;
                itemsObservable;
                isLoadingObservable;
                errorObservable;
                loadingPromise;
                isDestroyed;
                constructor(e) {
                    ((this.dataSource = e.dataSource),
                        (this.itemsObservable = new i(null)),
                        (this.isLoadingObservable = new i(!1)),
                        (this.errorObservable = new i(null)),
                        (this.loadingPromise = null),
                        (this.isDestroyed = !1),
                        (this.items = this.itemsObservable),
                        (this.isLoading = this.isLoadingObservable),
                        (this.error = this.errorObservable));
                }
                async load() {
                    if (this.isDestroyed) return;
                    if (this.loadingPromise) return void (await this.loadingPromise);
                    ((this.isLoadingObservable.value = !0), (this.errorObservable.value = null));
                    let e = this.dataSource
                        .loadAll()
                        .then((e) => {
                            this.isDestroyed || ((this.itemsObservable.value = e), (this.isLoadingObservable.value = !1));
                        })
                        .catch((e) => {
                            let t = e instanceof Error ? e : new l(e);
                            throw (!1 === this.isDestroyed && ((this.errorObservable.value = t), (this.isLoadingObservable.value = !1)), t);
                        })
                        .finally(() => {
                            this.loadingPromise = null;
                        });
                    ((this.loadingPromise = e), await e);
                }
                async getById(e) {
                    let t = this.findItemById(e);
                    return t || (await this.load(), this.findItemById(e));
                }
                async getByIdOrThrow(e) {
                    let t = await this.getById(e);
                    if (void 0 !== t) return t;
                    throw new c(e, !0);
                }
                async resolveByType(e, t) {
                    let n = d(e, t);
                    return (await Promise.all(n.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = u(e),
                        n = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        a = {};
                    for (let e of n)
                        if (e) {
                            let t = a[e.disclaimerType] ?? [];
                            (t.push(e.disclaimerItem), (a[e.disclaimerType] = t));
                        }
                    return a;
                }
                destroy() {
                    ((this.isDestroyed = !0),
                        (this.loadingPromise = null),
                        (this.itemsObservable.value = null),
                        (this.isLoadingObservable.value = !1),
                        (this.errorObservable.value = null));
                }
                findItemById(e) {
                    let t = this.itemsObservable.value;
                    if (null !== t) return t.find((t) => t.id === e);
                }
            }
            !(function (t) {
                // for PulseSync: BEGIN substituted-track enum extension
                ((t.E = 'e'), (t.AGE_12 = '12+'), (t.AGE_16 = '16+'), (t.AGE_18 = '18+'), ((t.EXCLAMATION = '!'), (t.SUBSTITUTED = 'substituted')));
                // for PulseSync: END substituted-track enum extension
            })(s || (s = {}));
            let m = new Map([
                    [a.EXPLICIT_ICON, s.E],
                    [a.AGE_18_ICON, s.AGE_18],
                    [a.AGE_16_ICON, s.AGE_16],
                    [a.AGE_12_ICON, s.AGE_12],
                    [a.EXCLAMATION_ICON, s.EXCLAMATION],
                    // for PulseSync: BEGIN map the substituted-track icon to its label
                    [a.SUBSTITUTED_ICON, s.SUBSTITUTED],
                    // for PulseSync: END map the substituted-track icon to its label
                ]),
                O = [a.EXPLICIT_ICON, a.AGE_18_ICON, a.AGE_16_ICON, a.AGE_12_ICON, a.SUBSTITUTED_ICON, a.EXCLAMATION_ICON],
                h = (e) => {
                    let t = ((e, t) => {
                        for (let n of t) {
                            let t = d(e, n)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, O);
                    if (null === t) return null;
                    let n = m.get(t.type);
                    return void 0 !== n ? n : null;
                },
                b = (e, t) => d(e, t).length > 0;
        },
        66368: (e, t, n) => {
            n.d(t, { p: () => a });
            let a = (0, n(53548).createContext)(null);
        },
        77451: (e, t, n) => {
            n.d(t, { Jt: () => r, TF: () => o, hZ: () => i });
            var a = function () {
                return (a =
                    Object.assign ||
                    function (e) {
                        for (var t, n = 1, a = arguments.length; n < a; n++)
                            for (var s in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                        return e;
                    }).apply(this, arguments);
            };
            function s(e, t) {
                if (!t) return '';
                var n = '; ' + e;
                return !0 === t ? n : n + '=' + t;
            }
            function r(e) {
                return (function (e) {
                    for (var t = {}, n = e ? e.split('; ') : [], a = 0; a < n.length; a++) {
                        var s = n[a].split('='),
                            r = s.slice(1).join('=');
                        '"' === r[0] && (r = r.slice(1, -1));
                        try {
                            t[decodeURIComponent(s[0])] = r.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function i(e, t, n) {
                var r;
                document.cookie =
                    ((r = a({ path: '/' }, n)),
                    encodeURIComponent(e)
                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                        .replace(/\(/g, '%28')
                        .replace(/\)/g, '%29') +
                        '=' +
                        encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) +
                        (function (e) {
                            if ('number' == typeof e.expires) {
                                var t = new Date();
                                (t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires), (e.expires = t));
                            }
                            return (
                                s('Expires', e.expires ? e.expires.toUTCString() : '') +
                                s('Domain', e.domain) +
                                s('Path', e.path) +
                                s('Secure', e.secure) +
                                s('SameSite', e.sameSite)
                            );
                        })(r));
            }
            function o(e, t) {
                i(e, '', a(a({}, t), { expires: -1 }));
            }
        },
        84837: (e, t, n) => {
            n.d(t, { S: () => a });
            let a = (0, n(53548).createContext)(null);
        },
        88969: (e, t, n) => {
            n.d(t, { A: () => c });
            var a = n(88092),
                s = n(53548),
                r = n(84014),
                i = n(2058);
            function o(e) {
                var t = (0, i.A)(),
                    n = t.formatMessage,
                    a = t.textComponent,
                    r = void 0 === a ? s.Fragment : a,
                    o = e.id,
                    l = e.description,
                    c = e.defaultMessage,
                    u = e.values,
                    d = e.children,
                    p = e.tagName,
                    m = void 0 === p ? r : p,
                    O = n({ id: o, description: l, defaultMessage: c }, u, { ignoreTag: e.ignoreTag });
                return 'function' == typeof d ? d(Array.isArray(O) ? O : [O]) : m ? s.createElement(m, null, O) : s.createElement(s.Fragment, null, O);
            }
            o.displayName = 'FormattedMessage';
            var l = s.memo(o, function (e, t) {
                var n = e.values,
                    s = (0, a.__rest)(e, ['values']),
                    i = t.values,
                    o = (0, a.__rest)(t, ['values']);
                return (0, r.bN)(i, n) && (0, r.bN)(s, o);
            });
            l.displayName = 'MemoizedFormattedMessage';
            let c = l;
        },
        89916: (e, t, n) => {
            n.d(t, { GX: () => r.G, X1: () => a.X, m5: () => s.m });
            var a = n(46606),
                s = n(91136),
                r = n(19840);
            n(17017);
        },
        91136: (e, t, n) => {
            n.d(t, { m: () => s });
            class a extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: n = 'E_INTERNAL', data: s = {}, ...r } = t,
                        i = e || 'Internal error';
                    (super(i, r), (this.message = i), (this.code = n), (this.data = s), (this.stack = Error(i).stack), Object.setPrototypeOf(this, a.prototype));
                }
            }
            class s extends a {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...n } = {}) {
                    (super(e, { code: t, ...n }), Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        93940: (e, t, n) => {
            n.d(t, { j: () => c });
            var a = n(53548),
                s = n(66368),
                r = n(84837),
                i = n(37556),
                o = n(8383),
                l = n(30958);
            let c = () => {
                let e = (0, a.useContext)(s.p),
                    t = (0, a.useContext)(r.S),
                    n = (0, a.useContext)(i.l),
                    c = (0, a.useContext)(o.k),
                    u = c?.isReady ? c.scope : null,
                    d = (0, a.useContext)(l.F),
                    p = e?.scope ?? null,
                    m = n?.scope ?? null;
                return (0, a.useMemo)(() => ({ block: p, filter: t, object: m, screen: u, tab: d }), [p, t, m, u, d]);
            };
        },
    },
]);
