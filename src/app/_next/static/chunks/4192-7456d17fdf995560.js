(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4192, 9027],
    {
        6087: (e, t, n) => {
            'use strict';
            n.d(t, { default: () => s.a });
            var i = n(76124),
                s = n.n(i);
        },
        14567: (e, t) => {
            (e.exports = function (e, t, i, s) {
                return JSON.stringify(e, n(t, s), i);
            }).getSerialize = n;
            function n(e, t) {
                var n = [],
                    i = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return n[0] === t ? '[Circular ~]' : '[Circular ~.' + i.slice(0, n.indexOf(t)).join('.') + ']';
                        }),
                    function (s, o) {
                        if (n.length > 0) {
                            var l = n.indexOf(this);
                            (~l ? n.splice(l + 1) : n.push(this), ~l ? i.splice(l, 1 / 0, s) : i.push(s), ~n.indexOf(o) && (o = t.call(this, s, o)));
                        } else n.push(o);
                        return null == e ? o : e.call(this, s, o);
                    }
                );
            }
        },
        20603: (e, t, n) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorageInstance', {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                }));
            let i = (0, n(94177).createAsyncLocalStorage)();
        },
        23570: (e, t, n) => {
            'use strict';
            ((t.U0 = function (e, t) {
                let { skeletonId: n = '', mainObjectType: o = s.DomainObjectType.NonApplicable, mainObjectId: l = '' } = t,
                    r = (0, i.makeMetaParams)(2),
                    a = { ...t, skeletonId: n, mainObjectType: o, mainObjectId: l, _meta: r };
                e.trackEvent('Sidebar.Opened', a);
            }),
                (t.dL = function (e, t) {
                    let { skeletonId: n = '', mainObjectType: o = s.DomainObjectType.NonApplicable, mainObjectId: l = '' } = t,
                        r = (0, i.makeMetaParams)(1),
                        a = { ...t, skeletonId: n, mainObjectType: o, mainObjectId: l, _meta: r };
                    e.trackEvent('Sidebar.ActionPerformed', a);
                }),
                (t.qi = function (e, t) {
                    let { skeletonId: n = '', mainObjectType: o = s.DomainObjectType.NonApplicable, mainObjectId: l = '' } = t,
                        r = (0, i.makeMetaParams)(1),
                        a = { ...t, skeletonId: n, mainObjectType: o, mainObjectId: l, _meta: r };
                    e.trackEvent('Sidebar.Navigated', a);
                }),
                (t.cV = function (e, t) {
                    let { skeletonId: n = '', mainObjectType: o = s.DomainObjectType.NonApplicable, mainObjectId: l = '' } = t,
                        r = (0, i.makeMetaParams)(1),
                        a = { ...t, skeletonId: n, mainObjectType: o, mainObjectId: l, _meta: r };
                    e.trackEvent('Sidebar.Started', a);
                }));
            let i = n(8198),
                s = n(97234);
        },
        23877: (e, t, n) => {
            'use strict';
            var i;
            (n.d(t, { Q: () => s, c: () => i }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(i || (i = {})));
            let s = { [i.ERROR]: 'error', [i.WARNING]: 'warn', [i.INFO]: 'info', [i.DEBUG]: 'debug', [i.TRACE]: 'trace' };
        },
        37531: (e, t, n) => {
            'use strict';
            function i(e) {
                let { reason: t, children: n } = e;
                return n;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                }),
                n(36271));
        },
        44084: (e, t, n) => {
            'use strict';
            n.d(t, { r: () => o });
            var i = n(23877),
                s = n(74021);
            class o extends s.q {
                disableLogToConsole;
                constructor(e) {
                    (super(e), (this.disableLogToConsole = e.disableLogToConsole));
                }
                info(e, t) {
                    this.maxLogLevel >= i.c.INFO && this.logToConsole(i.c.INFO, e, t);
                }
                debug(e, t) {
                    this.maxLogLevel >= i.c.DEBUG && this.logToConsole(i.c.DEBUG, e, t);
                }
                trace(e, t) {
                    this.maxLogLevel >= i.c.TRACE && this.logToConsole(i.c.TRACE, e, t);
                }
                warn(e, t) {
                    (this.maxLogLevel >= i.c.WARNING && this.logToConsole(i.c.WARNING, e, t), this.sendToErrorBooster(i.c.WARNING, e, t));
                }
                error(e, t) {
                    (this.maxLogLevel >= i.c.ERROR && this.logToConsole(i.c.ERROR, e, t), this.sendToErrorBooster(i.c.ERROR, e, t));
                }
                log(e, t) {
                    this.logToConsole(i.c.INFO, e, t);
                }
                logToConsole(e, t, n) {
                    if (this.disableLogToConsole) return;
                    let s = i.Q[e];
                    console[s](...this.formatMessage(e, t, n));
                }
                sendToErrorBooster(e, t, n) {
                    window.Ya.Rum.logError({ message: t, level: e, additional: { data: n ? this.obfuscateData({ ...this.additionalData, ...n }) : {} } });
                }
            }
        },
        46384: (e, t, n) => {
            'use strict';
            n.d(t, { F: () => u });
            var i = n(88800),
                s = n(53548),
                o = n(24709),
                l = n(8383),
                r = n(66368),
                a = n(88966);
            let c = (e, t, n) => {
                    let i = e.createBlockViewSession(),
                        s = !1;
                    return { claimLoadedSession: () => (s ? null : ((s = !0), i)), client: e, identity: t, loadedSession: i, screenSession: n };
                },
                u = (0, o.B)(
                    { kind: 'provider', requiredProps: ['blockId', 'blockType', 'blockPosX', 'blockPosY', 'objectsCount'], scope: 'block' },
                    ({ blockId: e, blockIdForFrom: t, blockPosX: n, blockPosY: o, blockType: u, children: d, objectsCount: h }) => {
                        let f = (0, a.N)(),
                            m = (0, s.useContext)(l.k)?.session,
                            p = [e, u, n, o].join(':'),
                            [g, b] = (0, s.useState)(() => c(f, p, m));
                        (g.client !== f || g.identity !== p || g.screenSession !== m) && b(c(f, p, m));
                        let v = (0, s.useMemo)(
                            () => ({
                                claimLoadedSession: g.claimLoadedSession,
                                loadedSession: g.loadedSession,
                                scope: { blockId: e, blockIdForFrom: t, blockPosX: n, blockPosY: o, blockType: u, objectsCount: h },
                            }),
                            [e, t, n, o, u, h, g.claimLoadedSession, g.loadedSession],
                        );
                        return (0, i.jsx)(r.p, { value: v, children: d });
                    },
                );
        },
        56949: (e, t, n) => {
            'use strict';
            n.d(t, { Te: () => O, XW: () => w });
            var i = n(53548),
                s = n(53405);
            function o(e, t, n) {
                let i,
                    s = n.initialDeps ?? [];
                function o() {
                    var o, l, r, a;
                    let c, u;
                    n.key && (null == (o = n.debug) ? void 0 : o.call(n)) && (c = Date.now());
                    let d = e();
                    if (!(d.length !== s.length || d.some((e, t) => s[t] !== e))) return i;
                    if (
                        ((s = d),
                        n.key && (null == (l = n.debug) ? void 0 : l.call(n)) && (u = Date.now()),
                        (i = t(...d)),
                        n.key && (null == (r = n.debug) ? void 0 : r.call(n)))
                    ) {
                        let e = Math.round((Date.now() - c) * 100) / 100,
                            t = Math.round((Date.now() - u) * 100) / 100,
                            i = t / 16,
                            s = (e, t) => {
                                for (e = String(e); e.length < t;) e = ' ' + e;
                                return e;
                            };
                        console.info(
                            `%c⏱ ${s(t, 5)} /${s(e, 5)} ms`,
                            `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * i, 120))}deg 100% 31%);`,
                            null == n ? void 0 : n.key,
                        );
                    }
                    return (null == (a = null == n ? void 0 : n.onChange) || a.call(n, i), i);
                }
                return (
                    (o.updateDeps = (e) => {
                        s = e;
                    }),
                    o
                );
            }
            function l(e, t) {
                if (void 0 !== e) return e;
                throw Error(`Unexpected undefined${t ? `: ${t}` : ''}`);
            }
            let r = (e, t, n) => {
                    let i;
                    return function (...s) {
                        (e.clearTimeout(i), (i = e.setTimeout(() => t.apply(this, s), n)));
                    };
                },
                a = (e) => e,
                c = (e) => {
                    let t = Math.max(e.startIndex - e.overscan, 0),
                        n = Math.min(e.endIndex + e.overscan, e.count - 1),
                        i = [];
                    for (let e = t; e <= n; e++) i.push(e);
                    return i;
                },
                u = (e, t) => {
                    let n = e.scrollElement;
                    if (!n) return;
                    let i = e.targetWindow;
                    if (!i) return;
                    let s = (e) => {
                        let { width: n, height: i } = e;
                        t({ width: Math.round(n), height: Math.round(i) });
                    };
                    if ((s(n.getBoundingClientRect()), !i.ResizeObserver)) return () => {};
                    let o = new i.ResizeObserver((t) => {
                        let i = () => {
                            let e = t[0];
                            if (null == e ? void 0 : e.borderBoxSize) {
                                let t = e.borderBoxSize[0];
                                if (t) return void s({ width: t.inlineSize, height: t.blockSize });
                            }
                            s(n.getBoundingClientRect());
                        };
                        e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
                    });
                    return (
                        o.observe(n, { box: 'border-box' }),
                        () => {
                            o.unobserve(n);
                        }
                    );
                },
                d = { passive: !0 },
                h = (e, t) => {
                    let n = e.scrollElement;
                    if (!n) return;
                    let i = () => {
                        t({ width: n.innerWidth, height: n.innerHeight });
                    };
                    return (
                        i(),
                        n.addEventListener('resize', i, d),
                        () => {
                            n.removeEventListener('resize', i);
                        }
                    );
                },
                f = 'undefined' == typeof window || 'onscrollend' in window,
                m = (e, t) => {
                    let n = e.scrollElement;
                    if (!n) return;
                    let i = e.targetWindow;
                    if (!i) return;
                    let s = 0,
                        o =
                            e.options.useScrollendEvent && f
                                ? () => void 0
                                : r(
                                      i,
                                      () => {
                                          t(s, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        l = (i) => () => {
                            let { horizontal: l, isRtl: r } = e.options;
                            ((s = l ? n.scrollLeft * ((r && -1) || 1) : n.scrollTop), o(), t(s, i));
                        },
                        a = l(!0),
                        c = l(!1);
                    (c(), n.addEventListener('scroll', a, d));
                    let u = e.options.useScrollendEvent && f;
                    return (
                        u && n.addEventListener('scrollend', c, d),
                        () => {
                            (n.removeEventListener('scroll', a), u && n.removeEventListener('scrollend', c));
                        }
                    );
                },
                p = (e, t) => {
                    let n = e.scrollElement;
                    if (!n) return;
                    let i = e.targetWindow;
                    if (!i) return;
                    let s = 0,
                        o =
                            e.options.useScrollendEvent && f
                                ? () => void 0
                                : r(
                                      i,
                                      () => {
                                          t(s, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        l = (i) => () => {
                            ((s = n[e.options.horizontal ? 'scrollX' : 'scrollY']), o(), t(s, i));
                        },
                        a = l(!0),
                        c = l(!1);
                    (c(), n.addEventListener('scroll', a, d));
                    let u = e.options.useScrollendEvent && f;
                    return (
                        u && n.addEventListener('scrollend', c, d),
                        () => {
                            (n.removeEventListener('scroll', a), u && n.removeEventListener('scrollend', c));
                        }
                    );
                },
                g = (e, t, n) => {
                    if (null == t ? void 0 : t.borderBoxSize) {
                        let e = t.borderBoxSize[0];
                        if (e) return Math.round(e[n.options.horizontal ? 'inlineSize' : 'blockSize']);
                    }
                    return Math.round(e.getBoundingClientRect()[n.options.horizontal ? 'width' : 'height']);
                },
                b = (e, { adjustments: t = 0, behavior: n }, i) => {
                    var s, o;
                    null == (o = null == (s = i.scrollElement) ? void 0 : s.scrollTo) || o.call(s, { [i.options.horizontal ? 'left' : 'top']: e + t, behavior: n });
                },
                v = (e, { adjustments: t = 0, behavior: n }, i) => {
                    var s, o;
                    null == (o = null == (s = i.scrollElement) ? void 0 : s.scrollTo) || o.call(s, { [i.options.horizontal ? 'left' : 'top']: e + t, behavior: n });
                };
            class E {
                constructor(e) {
                    ((this.unsubs = []),
                        (this.scrollElement = null),
                        (this.targetWindow = null),
                        (this.isScrolling = !1),
                        (this.scrollToIndexTimeoutId = null),
                        (this.measurementsCache = []),
                        (this.itemSizeCache = new Map()),
                        (this.pendingMeasuredCacheIndexes = []),
                        (this.scrollRect = null),
                        (this.scrollOffset = null),
                        (this.scrollDirection = null),
                        (this.scrollAdjustments = 0),
                        (this.elementsCache = new Map()),
                        (this.observer = (() => {
                            let e = null,
                                t = () =>
                                    e ||
                                    (this.targetWindow && this.targetWindow.ResizeObserver
                                        ? (e = new this.targetWindow.ResizeObserver((e) => {
                                              e.forEach((e) => {
                                                  let t = () => {
                                                      this._measureElement(e.target, e);
                                                  };
                                                  this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(t) : t();
                                              });
                                          }))
                                        : null);
                            return {
                                disconnect: () => {
                                    var n;
                                    (null == (n = t()) || n.disconnect(), (e = null));
                                },
                                observe: (e) => {
                                    var n;
                                    return null == (n = t()) ? void 0 : n.observe(e, { box: 'border-box' });
                                },
                                unobserve: (e) => {
                                    var n;
                                    return null == (n = t()) ? void 0 : n.unobserve(e);
                                },
                            };
                        })()),
                        (this.range = null),
                        (this.setOptions = (e) => {
                            (Object.entries(e).forEach(([t, n]) => {
                                void 0 === n && delete e[t];
                            }),
                                (this.options = {
                                    debug: !1,
                                    initialOffset: 0,
                                    overscan: 1,
                                    paddingStart: 0,
                                    paddingEnd: 0,
                                    scrollPaddingStart: 0,
                                    scrollPaddingEnd: 0,
                                    horizontal: !1,
                                    getItemKey: a,
                                    rangeExtractor: c,
                                    onChange: () => {},
                                    measureElement: g,
                                    initialRect: { width: 0, height: 0 },
                                    scrollMargin: 0,
                                    gap: 0,
                                    indexAttribute: 'data-index',
                                    initialMeasurementsCache: [],
                                    lanes: 1,
                                    isScrollingResetDelay: 150,
                                    enabled: !0,
                                    isRtl: !1,
                                    useScrollendEvent: !1,
                                    useAnimationFrameWithResizeObserver: !1,
                                    ...e,
                                }));
                        }),
                        (this.notify = (e) => {
                            var t, n;
                            null == (n = (t = this.options).onChange) || n.call(t, this, e);
                        }),
                        (this.maybeNotify = o(
                            () => (this.calculateRange(), [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]),
                            (e) => {
                                this.notify(e);
                            },
                            {
                                key: !1,
                                debug: () => this.options.debug,
                                initialDeps: [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null],
                            },
                        )),
                        (this.cleanup = () => {
                            (this.unsubs.filter(Boolean).forEach((e) => e()),
                                (this.unsubs = []),
                                this.observer.disconnect(),
                                (this.scrollElement = null),
                                (this.targetWindow = null));
                        }),
                        (this._didMount = () => () => {
                            this.cleanup();
                        }),
                        (this._willUpdate = () => {
                            var e;
                            let t = this.options.enabled ? this.options.getScrollElement() : null;
                            if (this.scrollElement !== t) {
                                if ((this.cleanup(), !t)) return void this.maybeNotify();
                                ((this.scrollElement = t),
                                    this.scrollElement && 'ownerDocument' in this.scrollElement
                                        ? (this.targetWindow = this.scrollElement.ownerDocument.defaultView)
                                        : (this.targetWindow = (null == (e = this.scrollElement) ? void 0 : e.window) ?? null),
                                    this.elementsCache.forEach((e) => {
                                        this.observer.observe(e);
                                    }),
                                    this._scrollToOffset(this.getScrollOffset(), { adjustments: void 0, behavior: void 0 }),
                                    this.unsubs.push(
                                        this.options.observeElementRect(this, (e) => {
                                            ((this.scrollRect = e), this.maybeNotify());
                                        }),
                                    ),
                                    this.unsubs.push(
                                        this.options.observeElementOffset(this, (e, t) => {
                                            ((this.scrollAdjustments = 0),
                                                (this.scrollDirection = t ? (this.getScrollOffset() < e ? 'forward' : 'backward') : null),
                                                (this.scrollOffset = e),
                                                (this.isScrolling = t),
                                                this.maybeNotify());
                                        }),
                                    ));
                            }
                        }),
                        (this.getSize = () =>
                            this.options.enabled
                                ? ((this.scrollRect = this.scrollRect ?? this.options.initialRect), this.scrollRect[this.options.horizontal ? 'width' : 'height'])
                                : ((this.scrollRect = null), 0)),
                        (this.getScrollOffset = () =>
                            this.options.enabled
                                ? ((this.scrollOffset =
                                      this.scrollOffset ?? ('function' == typeof this.options.initialOffset ? this.options.initialOffset() : this.options.initialOffset)),
                                  this.scrollOffset)
                                : ((this.scrollOffset = null), 0)),
                        (this.getFurthestMeasurement = (e, t) => {
                            let n = new Map(),
                                i = new Map();
                            for (let s = t - 1; s >= 0; s--) {
                                let t = e[s];
                                if (n.has(t.lane)) continue;
                                let o = i.get(t.lane);
                                if ((null == o || t.end > o.end ? i.set(t.lane, t) : t.end < o.end && n.set(t.lane, !0), n.size === this.options.lanes)) break;
                            }
                            return i.size === this.options.lanes
                                ? Array.from(i.values()).sort((e, t) => (e.end === t.end ? e.index - t.index : e.end - t.end))[0]
                                : void 0;
                        }),
                        (this.getMeasurementOptions = o(
                            () => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled],
                            (e, t, n, i, s) => ((this.pendingMeasuredCacheIndexes = []), { count: e, paddingStart: t, scrollMargin: n, getItemKey: i, enabled: s }),
                            { key: !1 },
                        )),
                        (this.getMeasurements = o(
                            () => [this.getMeasurementOptions(), this.itemSizeCache],
                            ({ count: e, paddingStart: t, scrollMargin: n, getItemKey: i, enabled: s }, o) => {
                                if (!s) return ((this.measurementsCache = []), this.itemSizeCache.clear(), []);
                                0 === this.measurementsCache.length &&
                                    ((this.measurementsCache = this.options.initialMeasurementsCache),
                                    this.measurementsCache.forEach((e) => {
                                        this.itemSizeCache.set(e.key, e.size);
                                    }));
                                let l = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
                                this.pendingMeasuredCacheIndexes = [];
                                let r = this.measurementsCache.slice(0, l);
                                for (let s = l; s < e; s++) {
                                    let e = i(s),
                                        l = 1 === this.options.lanes ? r[s - 1] : this.getFurthestMeasurement(r, s),
                                        a = l ? l.end + this.options.gap : t + n,
                                        c = o.get(e),
                                        u = 'number' == typeof c ? c : this.options.estimateSize(s),
                                        d = a + u,
                                        h = l ? l.lane : s % this.options.lanes;
                                    r[s] = { index: s, start: a, size: u, end: d, key: e, lane: h };
                                }
                                return ((this.measurementsCache = r), r);
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.calculateRange = o(
                            () => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes],
                            (e, t, n, i) =>
                                (this.range =
                                    e.length > 0 && t > 0
                                        ? (function ({ measurements: e, outerSize: t, scrollOffset: n, lanes: i }) {
                                              let s = e.length - 1,
                                                  o = S(0, s, (t) => e[t].start, n),
                                                  l = o;
                                              if (1 === i) for (; l < s && e[l].end < n + t;) l++;
                                              else if (i > 1) {
                                                  let r = Array(i).fill(0);
                                                  for (; l < s && r.some((e) => e < n + t);) {
                                                      let t = e[l];
                                                      ((r[t.lane] = t.end), l++);
                                                  }
                                                  let a = Array(i).fill(n + t);
                                                  for (; o > 0 && a.some((e) => e >= n);) {
                                                      let t = e[o];
                                                      ((a[t.lane] = t.start), o--);
                                                  }
                                                  ((o = Math.max(0, o - (o % i))), (l = Math.min(s, l + (i - 1 - (l % i)))));
                                              }
                                              return { startIndex: o, endIndex: l };
                                          })({ measurements: e, outerSize: t, scrollOffset: n, lanes: i })
                                        : null),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualIndexes = o(
                            () => {
                                let e = null,
                                    t = null,
                                    n = this.calculateRange();
                                return (
                                    n && ((e = n.startIndex), (t = n.endIndex)),
                                    this.maybeNotify.updateDeps([this.isScrolling, e, t]),
                                    [this.options.rangeExtractor, this.options.overscan, this.options.count, e, t]
                                );
                            },
                            (e, t, n, i, s) => (null === i || null === s ? [] : e({ startIndex: i, endIndex: s, overscan: t, count: n })),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.indexFromElement = (e) => {
                            let t = this.options.indexAttribute,
                                n = e.getAttribute(t);
                            return n ? parseInt(n, 10) : (console.warn(`Missing attribute name '${t}={index}' on measured element.`), -1);
                        }),
                        (this._measureElement = (e, t) => {
                            let n = this.indexFromElement(e),
                                i = this.measurementsCache[n];
                            if (!i) return;
                            let s = i.key,
                                o = this.elementsCache.get(s);
                            (o !== e && (o && this.observer.unobserve(o), this.observer.observe(e), this.elementsCache.set(s, e)),
                                e.isConnected && this.resizeItem(n, this.options.measureElement(e, t, this)));
                        }),
                        (this.resizeItem = (e, t) => {
                            let n = this.measurementsCache[e];
                            if (!n) return;
                            let i = t - (this.itemSizeCache.get(n.key) ?? n.size);
                            0 !== i &&
                                ((void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange
                                    ? this.shouldAdjustScrollPositionOnItemSizeChange(n, i, this)
                                    : n.start < this.getScrollOffset() + this.scrollAdjustments) &&
                                    this._scrollToOffset(this.getScrollOffset(), { adjustments: (this.scrollAdjustments += i), behavior: void 0 }),
                                this.pendingMeasuredCacheIndexes.push(n.index),
                                (this.itemSizeCache = new Map(this.itemSizeCache.set(n.key, t))),
                                this.notify(!1));
                        }),
                        (this.measureElement = (e) => {
                            if (!e)
                                return void this.elementsCache.forEach((e, t) => {
                                    e.isConnected || (this.observer.unobserve(e), this.elementsCache.delete(t));
                                });
                            this._measureElement(e, void 0);
                        }),
                        (this.getVirtualItems = o(
                            () => [this.getVirtualIndexes(), this.getMeasurements()],
                            (e, t) => {
                                let n = [];
                                for (let i = 0, s = e.length; i < s; i++) {
                                    let s = t[e[i]];
                                    n.push(s);
                                }
                                return n;
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualItemForOffset = (e) => {
                            let t = this.getMeasurements();
                            if (0 !== t.length) return l(t[S(0, t.length - 1, (e) => l(t[e]).start, e)]);
                        }),
                        (this.getOffsetForAlignment = (e, t, n = 0) => {
                            let i = this.getSize(),
                                s = this.getScrollOffset();
                            ('auto' === t && (t = e >= s + i ? 'end' : 'start'), 'center' === t ? (e += (n - i) / 2) : 'end' === t && (e -= i));
                            let o = this.options.horizontal ? 'scrollWidth' : 'scrollHeight';
                            return Math.max(
                                Math.min(
                                    (this.scrollElement
                                        ? 'document' in this.scrollElement
                                            ? this.scrollElement.document.documentElement[o]
                                            : this.scrollElement[o]
                                        : 0) - i,
                                    e,
                                ),
                                0,
                            );
                        }),
                        (this.getOffsetForIndex = (e, t = 'auto') => {
                            e = Math.max(0, Math.min(e, this.options.count - 1));
                            let n = this.measurementsCache[e];
                            if (!n) return;
                            let i = this.getSize(),
                                s = this.getScrollOffset();
                            if ('auto' === t)
                                if (n.end >= s + i - this.options.scrollPaddingEnd) t = 'end';
                                else {
                                    if (!(n.start <= s + this.options.scrollPaddingStart)) return [s, t];
                                    t = 'start';
                                }
                            let o = 'end' === t ? n.end + this.options.scrollPaddingEnd : n.start - this.options.scrollPaddingStart;
                            return [this.getOffsetForAlignment(o, t, n.size), t];
                        }),
                        (this.isDynamicMode = () => this.elementsCache.size > 0),
                        (this.cancelScrollToIndex = () => {
                            null !== this.scrollToIndexTimeoutId &&
                                this.targetWindow &&
                                (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), (this.scrollToIndexTimeoutId = null));
                        }),
                        (this.scrollToOffset = (e, { align: t = 'start', behavior: n } = {}) => {
                            (this.cancelScrollToIndex(),
                                'smooth' === n && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'),
                                this._scrollToOffset(this.getOffsetForAlignment(e, t), { adjustments: void 0, behavior: n }));
                        }),
                        (this.scrollToIndex = (e, { align: t = 'auto', behavior: n } = {}) => {
                            ((e = Math.max(0, Math.min(e, this.options.count - 1))),
                                this.cancelScrollToIndex(),
                                'smooth' === n && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'));
                            let i = this.getOffsetForIndex(e, t);
                            if (!i) return;
                            let [s, o] = i;
                            (this._scrollToOffset(s, { adjustments: void 0, behavior: n }),
                                'smooth' !== n &&
                                    this.isDynamicMode() &&
                                    this.targetWindow &&
                                    (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
                                        if (((this.scrollToIndexTimeoutId = null), this.elementsCache.has(this.options.getItemKey(e)))) {
                                            let [t] = l(this.getOffsetForIndex(e, o));
                                            1 > Math.abs(t - this.getScrollOffset()) || this.scrollToIndex(e, { align: o, behavior: n });
                                        } else this.scrollToIndex(e, { align: o, behavior: n });
                                    })));
                        }),
                        (this.scrollBy = (e, { behavior: t } = {}) => {
                            (this.cancelScrollToIndex(),
                                'smooth' === t && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'),
                                this._scrollToOffset(this.getScrollOffset() + e, { adjustments: void 0, behavior: t }));
                        }),
                        (this.getTotalSize = () => {
                            var e;
                            let t,
                                n = this.getMeasurements();
                            if (0 === n.length) t = this.options.paddingStart;
                            else if (1 === this.options.lanes) t = (null == (e = n[n.length - 1]) ? void 0 : e.end) ?? 0;
                            else {
                                let e = Array(this.options.lanes).fill(null),
                                    i = n.length - 1;
                                for (; i > 0 && e.some((e) => null === e);) {
                                    let t = n[i];
                                    (null === e[t.lane] && (e[t.lane] = t.end), i--);
                                }
                                t = Math.max(...e.filter((e) => null !== e));
                            }
                            return Math.max(t - this.options.scrollMargin + this.options.paddingEnd, 0);
                        }),
                        (this._scrollToOffset = (e, { adjustments: t, behavior: n }) => {
                            this.options.scrollToFn(e, { behavior: n, adjustments: t }, this);
                        }),
                        (this.measure = () => {
                            ((this.itemSizeCache = new Map()), this.notify(!1));
                        }),
                        this.setOptions(e));
                }
            }
            let S = (e, t, n, i) => {
                    for (; e <= t;) {
                        let s = ((e + t) / 2) | 0,
                            o = n(s);
                        if (o < i) e = s + 1;
                        else {
                            if (!(o > i)) return s;
                            t = s - 1;
                        }
                    }
                    return e > 0 ? e - 1 : 0;
                },
                y = 'undefined' != typeof document ? i.useLayoutEffect : i.useEffect;
            function x(e) {
                let t = i.useReducer(() => ({}), {})[1],
                    n = {
                        ...e,
                        onChange: (n, i) => {
                            var o;
                            (i ? (0, s.flushSync)(t) : t(), null == (o = e.onChange) || o.call(e, n, i));
                        },
                    },
                    [o] = i.useState(() => new E(n));
                return (o.setOptions(n), y(() => o._didMount(), []), y(() => o._willUpdate()), o);
            }
            function O(e) {
                return x({ observeElementRect: u, observeElementOffset: m, scrollToFn: v, ...e });
            }
            function w(e) {
                return x({
                    getScrollElement: () => ('undefined' != typeof document ? window : null),
                    observeElementRect: h,
                    observeElementOffset: p,
                    scrollToFn: b,
                    initialOffset: () => ('undefined' != typeof document ? window.scrollY : 0),
                    ...e,
                });
            }
        },
        57249: (e, t, n) => {
            'use strict';
            e.exports = n.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        60527: (e, t, n) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                }));
            let i = n(88800),
                s = n(53548),
                o = n(37531);
            function l(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            n(68326);
            let r = { loader: () => Promise.resolve(l(() => null)), loading: null, ssr: !0 },
                a = function (e) {
                    let t = { ...r, ...e },
                        n = (0, s.lazy)(() => t.loader().then(l)),
                        a = t.loading;
                    function c(e) {
                        let l = a ? (0, i.jsx)(a, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            r = !t.ssr || !!t.loading,
                            c = r ? s.Suspense : s.Fragment,
                            u = t.ssr
                                ? (0, i.jsxs)(i.Fragment, { children: [null, (0, i.jsx)(n, { ...e })] })
                                : (0, i.jsx)(o.BailoutToCSR, { reason: 'next/dynamic', children: (0, i.jsx)(n, { ...e }) });
                        return (0, i.jsx)(c, { ...(r ? { fallback: l } : {}), children: u });
                    }
                    return ((c.displayName = 'LoadableComponent'), c);
                };
        },
        66610: (e, t, n) => {
            'use strict';
            n.d(t, { D: () => a });
            var i = n(53548),
                s = n(24709),
                o = n(88966),
                l = n(87138),
                r = n(46457);
            let a = (0, s.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, o.N)(),
                    t = (0, l.w)(),
                    n = (0, i.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, r.c)((e) => {
                    t?.object && n && n.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        68326: (e, t, n) => {
            'use strict';
            function i(e) {
                let { moduleIds: t } = e;
                return null;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                }),
                n(88800),
                n(53405),
                n(96669),
                n(86900));
        },
        74021: (e, t, n) => {
            'use strict';
            n.d(t, { q: () => a });
            var i = n(14567),
                s = n(243),
                o = n(62151),
                l = n(33396);
            let r = () => 'SECRET';
            class a {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: n }) {
                    ((this.maxLogLevel = t), (this.secureFields = n), (this.additionalData = e));
                }
                formatMessage(e, t, n = {}, s) {
                    let o,
                        r = String(t instanceof Error && t.stack ? t.stack : t),
                        a = (0, l.A)({ ...this.additionalData, ...n });
                    return (Object.keys(a).length && (o = this.obfuscateData(a)), s) ? `${r} ${i(o)}` : [r, o];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, s.A)(e, t) && (0, o.A)(e, t, r());
                    return e;
                }
            }
        },
        76124: (e, t, n) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return s;
                    },
                }));
            let i = n(70405)._(n(60527));
            function s(e, t) {
                var n;
                let s = {};
                'function' == typeof e && (s.loader = e);
                let o = { ...s, ...t };
                return (0, i.default)({ ...o, modules: null == (n = o.loadableGenerated) ? void 0 : n.modules });
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        90852: (e, t, n) => {
            'use strict';
            n.d(t, { B: () => c });
            var i = n(88800),
                s = n(53548),
                o = n(24709),
                l = n(66368),
                r = n(37556),
                a = n(88966);
            let c = (0, o.B)(
                { kind: 'provider', requiredProps: ['objectType', 'objectId', 'objectPosX', 'objectPosY'], pendingProps: ['objectId'], scope: 'object' },
                ({ children: e, objectId: t, objectPosX: n, objectPosY: o, objectType: c }) => {
                    let u = (0, a.N)(),
                        d = (0, s.useContext)(l.p)?.loadedSession,
                        h = [c, t, n, o].join(':'),
                        [f, m] = (0, s.useState)(() => ({ client: u, identity: h, blockSession: d, viewSession: u.createBlockViewSession() }));
                    (f.client !== u || f.identity !== h || f.blockSession !== d) &&
                        m({ client: u, identity: h, blockSession: d, viewSession: u.createBlockViewSession() });
                    let p = (0, s.useMemo)(
                        () => ({ activeViewSession: null, scope: { objectId: t, objectPosX: n, objectPosY: o, objectType: c }, viewSession: f.viewSession }),
                        [t, n, o, c, f.viewSession],
                    );
                    return (0, i.jsx)(r.l, { value: p, children: e });
                },
            );
        },
        92893: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => h });
            var i = n(62571),
                s = n(21970),
                o = n(45628),
                l = n(53548),
                r = n(15028);
            function a(e, t) {
                var n = Object.create(null);
                return (
                    e &&
                        l.Children.map(e, function (e) {
                            return e;
                        }).forEach(function (e) {
                            n[e.key] = t && (0, l.isValidElement)(e) ? t(e) : e;
                        }),
                    n
                );
            }
            function c(e, t, n) {
                return null != n[t] ? n[t] : e.props[t];
            }
            var u =
                    Object.values ||
                    function (e) {
                        return Object.keys(e).map(function (t) {
                            return e[t];
                        });
                    },
                d = (function (e) {
                    function t(t, n) {
                        var i = e.call(this, t, n) || this,
                            s = i.handleExited.bind(
                                (function (e) {
                                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return e;
                                })(i),
                            );
                        return ((i.state = { contextValue: { isMounting: !0 }, handleExited: s, firstRender: !0 }), i);
                    }
                    (0, o.A)(t, e);
                    var n = t.prototype;
                    return (
                        (n.componentDidMount = function () {
                            ((this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } }));
                        }),
                        (n.componentWillUnmount = function () {
                            this.mounted = !1;
                        }),
                        (t.getDerivedStateFromProps = function (e, t) {
                            var n,
                                i,
                                s = t.children,
                                o = t.handleExited;
                            return {
                                children: t.firstRender
                                    ? a(e.children, function (t) {
                                          return (0, l.cloneElement)(t, {
                                              onExited: o.bind(null, t),
                                              in: !0,
                                              appear: c(t, 'appear', e),
                                              enter: c(t, 'enter', e),
                                              exit: c(t, 'exit', e),
                                          });
                                      })
                                    : (Object.keys(
                                          (i = (function (e, t) {
                                              function n(n) {
                                                  return n in t ? t[n] : e[n];
                                              }
                                              ((e = e || {}), (t = t || {}));
                                              var i,
                                                  s = Object.create(null),
                                                  o = [];
                                              for (var l in e) l in t ? o.length && ((s[l] = o), (o = [])) : o.push(l);
                                              var r = {};
                                              for (var a in t) {
                                                  if (s[a])
                                                      for (i = 0; i < s[a].length; i++) {
                                                          var c = s[a][i];
                                                          r[s[a][i]] = n(c);
                                                      }
                                                  r[a] = n(a);
                                              }
                                              for (i = 0; i < o.length; i++) r[o[i]] = n(o[i]);
                                              return r;
                                          })(s, (n = a(e.children)))),
                                      ).forEach(function (t) {
                                          var r = i[t];
                                          if ((0, l.isValidElement)(r)) {
                                              var a = t in s,
                                                  u = t in n,
                                                  d = s[t],
                                                  h = (0, l.isValidElement)(d) && !d.props.in;
                                              u && (!a || h)
                                                  ? (i[t] = (0, l.cloneElement)(r, { onExited: o.bind(null, r), in: !0, exit: c(r, 'exit', e), enter: c(r, 'enter', e) }))
                                                  : u || !a || h
                                                    ? u &&
                                                      a &&
                                                      (0, l.isValidElement)(d) &&
                                                      (i[t] = (0, l.cloneElement)(r, {
                                                          onExited: o.bind(null, r),
                                                          in: d.props.in,
                                                          exit: c(r, 'exit', e),
                                                          enter: c(r, 'enter', e),
                                                      }))
                                                    : (i[t] = (0, l.cloneElement)(r, { in: !1 }));
                                          }
                                      }),
                                      i),
                                firstRender: !1,
                            };
                        }),
                        (n.handleExited = function (e, t) {
                            var n = a(this.props.children);
                            e.key in n ||
                                (e.props.onExited && e.props.onExited(t),
                                this.mounted &&
                                    this.setState(function (t) {
                                        var n = (0, s.A)({}, t.children);
                                        return (delete n[e.key], { children: n });
                                    }));
                        }),
                        (n.render = function () {
                            var e = this.props,
                                t = e.component,
                                n = e.childFactory,
                                s = (0, i.A)(e, ['component', 'childFactory']),
                                o = this.state.contextValue,
                                a = u(this.state.children).map(n);
                            return (delete s.appear, delete s.enter, delete s.exit, null === t)
                                ? l.createElement(r.A.Provider, { value: o }, a)
                                : l.createElement(r.A.Provider, { value: o }, l.createElement(t, s, a));
                        }),
                        t
                    );
                })(l.Component);
            ((d.propTypes = {}),
                (d.defaultProps = {
                    component: 'div',
                    childFactory: function (e) {
                        return e;
                    },
                }));
            let h = d;
        },
        94177: (e, t) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
                })(t, {
                    bindSnapshot: function () {
                        return l;
                    },
                    createAsyncLocalStorage: function () {
                        return o;
                    },
                    createSnapshot: function () {
                        return r;
                    },
                }));
            let n = Object.defineProperty(Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available'), '__NEXT_ERROR_CODE', {
                value: 'E504',
                enumerable: !1,
                configurable: !0,
            });
            class i {
                disable() {
                    throw n;
                }
                getStore() {}
                run() {
                    throw n;
                }
                exit() {
                    throw n;
                }
                enterWith() {
                    throw n;
                }
                static bind(e) {
                    return e;
                }
            }
            let s = 'undefined' != typeof globalThis && globalThis.AsyncLocalStorage;
            function o() {
                return s ? new s() : new i();
            }
            function l(e) {
                return s ? s.bind(e) : i.bind(e);
            }
            function r() {
                return s
                    ? s.snapshot()
                    : function (e, ...t) {
                          return e(...t);
                      };
            }
        },
        96669: (e, t, n) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorage', {
                    enumerable: !0,
                    get: function () {
                        return i.workAsyncStorageInstance;
                    },
                }));
            let i = n(20603);
        },
    },
]);
