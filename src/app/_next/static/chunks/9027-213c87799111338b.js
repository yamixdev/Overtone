(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9027],
    {
        6087: (e, t, s) => {
            'use strict';
            s.d(t, { default: () => i.a });
            var n = s(76124),
                i = s.n(n);
        },
        14567: (e, t) => {
            (e.exports = function (e, t, n, i) {
                return JSON.stringify(e, s(t, i), n);
            }).getSerialize = s;
            function s(e, t) {
                var s = [],
                    n = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return s[0] === t ? '[Circular ~]' : '[Circular ~.' + n.slice(0, s.indexOf(t)).join('.') + ']';
                        }),
                    function (i, o) {
                        if (s.length > 0) {
                            var l = s.indexOf(this);
                            (~l ? s.splice(l + 1) : s.push(this), ~l ? n.splice(l, 1 / 0, i) : n.push(i), ~s.indexOf(o) && (o = t.call(this, i, o)));
                        } else s.push(o);
                        return null == e ? o : e.call(this, i, o);
                    }
                );
            }
        },
        20603: (e, t, s) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorageInstance', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }));
            let n = (0, s(94177).createAsyncLocalStorage)();
        },
        23877: (e, t, s) => {
            'use strict';
            var n;
            (s.d(t, { Q: () => i, c: () => n }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(n || (n = {})));
            let i = { [n.ERROR]: 'error', [n.WARNING]: 'warn', [n.INFO]: 'info', [n.DEBUG]: 'debug', [n.TRACE]: 'trace' };
        },
        37531: (e, t, s) => {
            'use strict';
            function n(e) {
                let { reason: t, children: s } = e;
                return s;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }),
                s(36271));
        },
        44084: (e, t, s) => {
            'use strict';
            s.d(t, { r: () => o });
            var n = s(23877),
                i = s(74021);
            class o extends i.q {
                disableLogToConsole;
                constructor(e) {
                    (super(e), (this.disableLogToConsole = e.disableLogToConsole));
                }
                info(e, t) {
                    this.maxLogLevel >= n.c.INFO && this.logToConsole(n.c.INFO, e, t);
                }
                debug(e, t) {
                    this.maxLogLevel >= n.c.DEBUG && this.logToConsole(n.c.DEBUG, e, t);
                }
                trace(e, t) {
                    this.maxLogLevel >= n.c.TRACE && this.logToConsole(n.c.TRACE, e, t);
                }
                warn(e, t) {
                    (this.maxLogLevel >= n.c.WARNING && this.logToConsole(n.c.WARNING, e, t), this.sendToErrorBooster(n.c.WARNING, e, t));
                }
                error(e, t) {
                    (this.maxLogLevel >= n.c.ERROR && this.logToConsole(n.c.ERROR, e, t), this.sendToErrorBooster(n.c.ERROR, e, t));
                }
                log(e, t) {
                    this.logToConsole(n.c.INFO, e, t);
                }
                logToConsole(e, t, s) {
                    if (this.disableLogToConsole) return;
                    let i = n.Q[e];
                    console[i](...this.formatMessage(e, t, s));
                }
                sendToErrorBooster(e, t, s) {
                    window.Ya.Rum.logError({ message: t, level: e, additional: { data: s ? this.obfuscateData({ ...this.additionalData, ...s }) : {} } });
                }
            }
        },
        46384: (e, t, s) => {
            'use strict';
            s.d(t, { F: () => u });
            var n = s(88800),
                i = s(53548),
                o = s(24709),
                l = s(8383),
                r = s(66368),
                a = s(88966);
            let h = (e, t, s) => {
                    let n = e.createBlockViewSession(),
                        i = !1;
                    return { claimLoadedSession: () => (i ? null : ((i = !0), n)), client: e, identity: t, loadedSession: n, screenSession: s };
                },
                u = (0, o.B)(
                    { kind: 'provider', requiredProps: ['blockId', 'blockType', 'blockPosX', 'blockPosY', 'objectsCount'], scope: 'block' },
                    ({ blockId: e, blockIdForFrom: t, blockPosX: s, blockPosY: o, blockType: u, children: c, objectsCount: d }) => {
                        let f = (0, a.N)(),
                            m = (0, i.useContext)(l.k)?.session,
                            g = [e, u, s, o].join(':'),
                            [p, b] = (0, i.useState)(() => h(f, g, m));
                        (p.client !== f || p.identity !== g || p.screenSession !== m) && b(h(f, g, m));
                        let v = (0, i.useMemo)(
                            () => ({
                                claimLoadedSession: p.claimLoadedSession,
                                loadedSession: p.loadedSession,
                                scope: { blockId: e, blockIdForFrom: t, blockPosX: s, blockPosY: o, blockType: u, objectsCount: d },
                            }),
                            [e, t, s, o, u, d, p.claimLoadedSession, p.loadedSession],
                        );
                        return (0, n.jsx)(r.p, { value: v, children: c });
                    },
                );
        },
        56949: (e, t, s) => {
            'use strict';
            s.d(t, { Te: () => O, XW: () => x });
            var n = s(53548),
                i = s(53405);
            function o(e, t, s) {
                let n,
                    i = s.initialDeps ?? [];
                function o() {
                    var o, l, r, a;
                    let h, u;
                    s.key && (null == (o = s.debug) ? void 0 : o.call(s)) && (h = Date.now());
                    let c = e();
                    if (!(c.length !== i.length || c.some((e, t) => i[t] !== e))) return n;
                    if (
                        ((i = c),
                        s.key && (null == (l = s.debug) ? void 0 : l.call(s)) && (u = Date.now()),
                        (n = t(...c)),
                        s.key && (null == (r = s.debug) ? void 0 : r.call(s)))
                    ) {
                        let e = Math.round((Date.now() - h) * 100) / 100,
                            t = Math.round((Date.now() - u) * 100) / 100,
                            n = t / 16,
                            i = (e, t) => {
                                for (e = String(e); e.length < t;) e = ' ' + e;
                                return e;
                            };
                        console.info(
                            `%c⏱ ${i(t, 5)} /${i(e, 5)} ms`,
                            `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * n, 120))}deg 100% 31%);`,
                            null == s ? void 0 : s.key,
                        );
                    }
                    return (null == (a = null == s ? void 0 : s.onChange) || a.call(s, n), n);
                }
                return (
                    (o.updateDeps = (e) => {
                        i = e;
                    }),
                    o
                );
            }
            function l(e, t) {
                if (void 0 !== e) return e;
                throw Error(`Unexpected undefined${t ? `: ${t}` : ''}`);
            }
            let r = (e, t, s) => {
                    let n;
                    return function (...i) {
                        (e.clearTimeout(n), (n = e.setTimeout(() => t.apply(this, i), s)));
                    };
                },
                a = (e) => e,
                h = (e) => {
                    let t = Math.max(e.startIndex - e.overscan, 0),
                        s = Math.min(e.endIndex + e.overscan, e.count - 1),
                        n = [];
                    for (let e = t; e <= s; e++) n.push(e);
                    return n;
                },
                u = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let n = e.targetWindow;
                    if (!n) return;
                    let i = (e) => {
                        let { width: s, height: n } = e;
                        t({ width: Math.round(s), height: Math.round(n) });
                    };
                    if ((i(s.getBoundingClientRect()), !n.ResizeObserver)) return () => {};
                    let o = new n.ResizeObserver((t) => {
                        let n = () => {
                            let e = t[0];
                            if (null == e ? void 0 : e.borderBoxSize) {
                                let t = e.borderBoxSize[0];
                                if (t) return void i({ width: t.inlineSize, height: t.blockSize });
                            }
                            i(s.getBoundingClientRect());
                        };
                        e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(n) : n();
                    });
                    return (
                        o.observe(s, { box: 'border-box' }),
                        () => {
                            o.unobserve(s);
                        }
                    );
                },
                c = { passive: !0 },
                d = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let n = () => {
                        t({ width: s.innerWidth, height: s.innerHeight });
                    };
                    return (
                        n(),
                        s.addEventListener('resize', n, c),
                        () => {
                            s.removeEventListener('resize', n);
                        }
                    );
                },
                f = 'undefined' == typeof window || 'onscrollend' in window,
                m = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let n = e.targetWindow;
                    if (!n) return;
                    let i = 0,
                        o =
                            e.options.useScrollendEvent && f
                                ? () => void 0
                                : r(
                                      n,
                                      () => {
                                          t(i, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        l = (n) => () => {
                            let { horizontal: l, isRtl: r } = e.options;
                            ((i = l ? s.scrollLeft * ((r && -1) || 1) : s.scrollTop), o(), t(i, n));
                        },
                        a = l(!0),
                        h = l(!1);
                    (h(), s.addEventListener('scroll', a, c));
                    let u = e.options.useScrollendEvent && f;
                    return (
                        u && s.addEventListener('scrollend', h, c),
                        () => {
                            (s.removeEventListener('scroll', a), u && s.removeEventListener('scrollend', h));
                        }
                    );
                },
                g = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let n = e.targetWindow;
                    if (!n) return;
                    let i = 0,
                        o =
                            e.options.useScrollendEvent && f
                                ? () => void 0
                                : r(
                                      n,
                                      () => {
                                          t(i, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        l = (n) => () => {
                            ((i = s[e.options.horizontal ? 'scrollX' : 'scrollY']), o(), t(i, n));
                        },
                        a = l(!0),
                        h = l(!1);
                    (h(), s.addEventListener('scroll', a, c));
                    let u = e.options.useScrollendEvent && f;
                    return (
                        u && s.addEventListener('scrollend', h, c),
                        () => {
                            (s.removeEventListener('scroll', a), u && s.removeEventListener('scrollend', h));
                        }
                    );
                },
                p = (e, t, s) => {
                    if (null == t ? void 0 : t.borderBoxSize) {
                        let e = t.borderBoxSize[0];
                        if (e) return Math.round(e[s.options.horizontal ? 'inlineSize' : 'blockSize']);
                    }
                    return Math.round(e.getBoundingClientRect()[s.options.horizontal ? 'width' : 'height']);
                },
                b = (e, { adjustments: t = 0, behavior: s }, n) => {
                    var i, o;
                    null == (o = null == (i = n.scrollElement) ? void 0 : i.scrollTo) || o.call(i, { [n.options.horizontal ? 'left' : 'top']: e + t, behavior: s });
                },
                v = (e, { adjustments: t = 0, behavior: s }, n) => {
                    var i, o;
                    null == (o = null == (i = n.scrollElement) ? void 0 : i.scrollTo) || o.call(i, { [n.options.horizontal ? 'left' : 'top']: e + t, behavior: s });
                };
            class S {
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
                                    var s;
                                    (null == (s = t()) || s.disconnect(), (e = null));
                                },
                                observe: (e) => {
                                    var s;
                                    return null == (s = t()) ? void 0 : s.observe(e, { box: 'border-box' });
                                },
                                unobserve: (e) => {
                                    var s;
                                    return null == (s = t()) ? void 0 : s.unobserve(e);
                                },
                            };
                        })()),
                        (this.range = null),
                        (this.setOptions = (e) => {
                            (Object.entries(e).forEach(([t, s]) => {
                                void 0 === s && delete e[t];
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
                                    rangeExtractor: h,
                                    onChange: () => {},
                                    measureElement: p,
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
                            var t, s;
                            null == (s = (t = this.options).onChange) || s.call(t, this, e);
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
                            let s = new Map(),
                                n = new Map();
                            for (let i = t - 1; i >= 0; i--) {
                                let t = e[i];
                                if (s.has(t.lane)) continue;
                                let o = n.get(t.lane);
                                if ((null == o || t.end > o.end ? n.set(t.lane, t) : t.end < o.end && s.set(t.lane, !0), s.size === this.options.lanes)) break;
                            }
                            return n.size === this.options.lanes
                                ? Array.from(n.values()).sort((e, t) => (e.end === t.end ? e.index - t.index : e.end - t.end))[0]
                                : void 0;
                        }),
                        (this.getMeasurementOptions = o(
                            () => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled],
                            (e, t, s, n, i) => ((this.pendingMeasuredCacheIndexes = []), { count: e, paddingStart: t, scrollMargin: s, getItemKey: n, enabled: i }),
                            { key: !1 },
                        )),
                        (this.getMeasurements = o(
                            () => [this.getMeasurementOptions(), this.itemSizeCache],
                            ({ count: e, paddingStart: t, scrollMargin: s, getItemKey: n, enabled: i }, o) => {
                                if (!i) return ((this.measurementsCache = []), this.itemSizeCache.clear(), []);
                                0 === this.measurementsCache.length &&
                                    ((this.measurementsCache = this.options.initialMeasurementsCache),
                                    this.measurementsCache.forEach((e) => {
                                        this.itemSizeCache.set(e.key, e.size);
                                    }));
                                let l = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
                                this.pendingMeasuredCacheIndexes = [];
                                let r = this.measurementsCache.slice(0, l);
                                for (let i = l; i < e; i++) {
                                    let e = n(i),
                                        l = 1 === this.options.lanes ? r[i - 1] : this.getFurthestMeasurement(r, i),
                                        a = l ? l.end + this.options.gap : t + s,
                                        h = o.get(e),
                                        u = 'number' == typeof h ? h : this.options.estimateSize(i),
                                        c = a + u,
                                        d = l ? l.lane : i % this.options.lanes;
                                    r[i] = { index: i, start: a, size: u, end: c, key: e, lane: d };
                                }
                                return ((this.measurementsCache = r), r);
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.calculateRange = o(
                            () => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes],
                            (e, t, s, n) =>
                                (this.range =
                                    e.length > 0 && t > 0
                                        ? (function ({ measurements: e, outerSize: t, scrollOffset: s, lanes: n }) {
                                              let i = e.length - 1,
                                                  o = y(0, i, (t) => e[t].start, s),
                                                  l = o;
                                              if (1 === n) for (; l < i && e[l].end < s + t;) l++;
                                              else if (n > 1) {
                                                  let r = Array(n).fill(0);
                                                  for (; l < i && r.some((e) => e < s + t);) {
                                                      let t = e[l];
                                                      ((r[t.lane] = t.end), l++);
                                                  }
                                                  let a = Array(n).fill(s + t);
                                                  for (; o > 0 && a.some((e) => e >= s);) {
                                                      let t = e[o];
                                                      ((a[t.lane] = t.start), o--);
                                                  }
                                                  ((o = Math.max(0, o - (o % n))), (l = Math.min(i, l + (n - 1 - (l % n)))));
                                              }
                                              return { startIndex: o, endIndex: l };
                                          })({ measurements: e, outerSize: t, scrollOffset: s, lanes: n })
                                        : null),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualIndexes = o(
                            () => {
                                let e = null,
                                    t = null,
                                    s = this.calculateRange();
                                return (
                                    s && ((e = s.startIndex), (t = s.endIndex)),
                                    this.maybeNotify.updateDeps([this.isScrolling, e, t]),
                                    [this.options.rangeExtractor, this.options.overscan, this.options.count, e, t]
                                );
                            },
                            (e, t, s, n, i) => (null === n || null === i ? [] : e({ startIndex: n, endIndex: i, overscan: t, count: s })),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.indexFromElement = (e) => {
                            let t = this.options.indexAttribute,
                                s = e.getAttribute(t);
                            return s ? parseInt(s, 10) : (console.warn(`Missing attribute name '${t}={index}' on measured element.`), -1);
                        }),
                        (this._measureElement = (e, t) => {
                            let s = this.indexFromElement(e),
                                n = this.measurementsCache[s];
                            if (!n) return;
                            let i = n.key,
                                o = this.elementsCache.get(i);
                            (o !== e && (o && this.observer.unobserve(o), this.observer.observe(e), this.elementsCache.set(i, e)),
                                e.isConnected && this.resizeItem(s, this.options.measureElement(e, t, this)));
                        }),
                        (this.resizeItem = (e, t) => {
                            let s = this.measurementsCache[e];
                            if (!s) return;
                            let n = t - (this.itemSizeCache.get(s.key) ?? s.size);
                            0 !== n &&
                                ((void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange
                                    ? this.shouldAdjustScrollPositionOnItemSizeChange(s, n, this)
                                    : s.start < this.getScrollOffset() + this.scrollAdjustments) &&
                                    this._scrollToOffset(this.getScrollOffset(), { adjustments: (this.scrollAdjustments += n), behavior: void 0 }),
                                this.pendingMeasuredCacheIndexes.push(s.index),
                                (this.itemSizeCache = new Map(this.itemSizeCache.set(s.key, t))),
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
                                let s = [];
                                for (let n = 0, i = e.length; n < i; n++) {
                                    let i = t[e[n]];
                                    s.push(i);
                                }
                                return s;
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualItemForOffset = (e) => {
                            let t = this.getMeasurements();
                            if (0 !== t.length) return l(t[y(0, t.length - 1, (e) => l(t[e]).start, e)]);
                        }),
                        (this.getOffsetForAlignment = (e, t, s = 0) => {
                            let n = this.getSize(),
                                i = this.getScrollOffset();
                            ('auto' === t && (t = e >= i + n ? 'end' : 'start'), 'center' === t ? (e += (s - n) / 2) : 'end' === t && (e -= n));
                            let o = this.options.horizontal ? 'scrollWidth' : 'scrollHeight';
                            return Math.max(
                                Math.min(
                                    (this.scrollElement
                                        ? 'document' in this.scrollElement
                                            ? this.scrollElement.document.documentElement[o]
                                            : this.scrollElement[o]
                                        : 0) - n,
                                    e,
                                ),
                                0,
                            );
                        }),
                        (this.getOffsetForIndex = (e, t = 'auto') => {
                            e = Math.max(0, Math.min(e, this.options.count - 1));
                            let s = this.measurementsCache[e];
                            if (!s) return;
                            let n = this.getSize(),
                                i = this.getScrollOffset();
                            if ('auto' === t)
                                if (s.end >= i + n - this.options.scrollPaddingEnd) t = 'end';
                                else {
                                    if (!(s.start <= i + this.options.scrollPaddingStart)) return [i, t];
                                    t = 'start';
                                }
                            let o = 'end' === t ? s.end + this.options.scrollPaddingEnd : s.start - this.options.scrollPaddingStart;
                            return [this.getOffsetForAlignment(o, t, s.size), t];
                        }),
                        (this.isDynamicMode = () => this.elementsCache.size > 0),
                        (this.cancelScrollToIndex = () => {
                            null !== this.scrollToIndexTimeoutId &&
                                this.targetWindow &&
                                (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), (this.scrollToIndexTimeoutId = null));
                        }),
                        (this.scrollToOffset = (e, { align: t = 'start', behavior: s } = {}) => {
                            (this.cancelScrollToIndex(),
                                'smooth' === s && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'),
                                this._scrollToOffset(this.getOffsetForAlignment(e, t), { adjustments: void 0, behavior: s }));
                        }),
                        (this.scrollToIndex = (e, { align: t = 'auto', behavior: s } = {}) => {
                            ((e = Math.max(0, Math.min(e, this.options.count - 1))),
                                this.cancelScrollToIndex(),
                                'smooth' === s && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'));
                            let n = this.getOffsetForIndex(e, t);
                            if (!n) return;
                            let [i, o] = n;
                            (this._scrollToOffset(i, { adjustments: void 0, behavior: s }),
                                'smooth' !== s &&
                                    this.isDynamicMode() &&
                                    this.targetWindow &&
                                    (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
                                        if (((this.scrollToIndexTimeoutId = null), this.elementsCache.has(this.options.getItemKey(e)))) {
                                            let [t] = l(this.getOffsetForIndex(e, o));
                                            1 > Math.abs(t - this.getScrollOffset()) || this.scrollToIndex(e, { align: o, behavior: s });
                                        } else this.scrollToIndex(e, { align: o, behavior: s });
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
                                s = this.getMeasurements();
                            if (0 === s.length) t = this.options.paddingStart;
                            else if (1 === this.options.lanes) t = (null == (e = s[s.length - 1]) ? void 0 : e.end) ?? 0;
                            else {
                                let e = Array(this.options.lanes).fill(null),
                                    n = s.length - 1;
                                for (; n > 0 && e.some((e) => null === e);) {
                                    let t = s[n];
                                    (null === e[t.lane] && (e[t.lane] = t.end), n--);
                                }
                                t = Math.max(...e.filter((e) => null !== e));
                            }
                            return Math.max(t - this.options.scrollMargin + this.options.paddingEnd, 0);
                        }),
                        (this._scrollToOffset = (e, { adjustments: t, behavior: s }) => {
                            this.options.scrollToFn(e, { behavior: s, adjustments: t }, this);
                        }),
                        (this.measure = () => {
                            ((this.itemSizeCache = new Map()), this.notify(!1));
                        }),
                        this.setOptions(e));
                }
            }
            let y = (e, t, s, n) => {
                    for (; e <= t;) {
                        let i = ((e + t) / 2) | 0,
                            o = s(i);
                        if (o < n) e = i + 1;
                        else {
                            if (!(o > n)) return i;
                            t = i - 1;
                        }
                    }
                    return e > 0 ? e - 1 : 0;
                },
                E = 'undefined' != typeof document ? n.useLayoutEffect : n.useEffect;
            function w(e) {
                let t = n.useReducer(() => ({}), {})[1],
                    s = {
                        ...e,
                        onChange: (s, n) => {
                            var o;
                            (n ? (0, i.flushSync)(t) : t(), null == (o = e.onChange) || o.call(e, s, n));
                        },
                    },
                    [o] = n.useState(() => new S(s));
                return (o.setOptions(s), E(() => o._didMount(), []), E(() => o._willUpdate()), o);
            }
            function O(e) {
                return w({ observeElementRect: u, observeElementOffset: m, scrollToFn: v, ...e });
            }
            function x(e) {
                return w({
                    getScrollElement: () => ('undefined' != typeof document ? window : null),
                    observeElementRect: d,
                    observeElementOffset: g,
                    scrollToFn: b,
                    initialOffset: () => ('undefined' != typeof document ? window.scrollY : 0),
                    ...e,
                });
            }
        },
        57249: (e, t, s) => {
            'use strict';
            e.exports = s.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        60527: (e, t, s) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                }));
            let n = s(88800),
                i = s(53548),
                o = s(37531);
            function l(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            s(68326);
            let r = { loader: () => Promise.resolve(l(() => null)), loading: null, ssr: !0 },
                a = function (e) {
                    let t = { ...r, ...e },
                        s = (0, i.lazy)(() => t.loader().then(l)),
                        a = t.loading;
                    function h(e) {
                        let l = a ? (0, n.jsx)(a, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            r = !t.ssr || !!t.loading,
                            h = r ? i.Suspense : i.Fragment,
                            u = t.ssr
                                ? (0, n.jsxs)(n.Fragment, { children: [null, (0, n.jsx)(s, { ...e })] })
                                : (0, n.jsx)(o.BailoutToCSR, { reason: 'next/dynamic', children: (0, n.jsx)(s, { ...e }) });
                        return (0, n.jsx)(h, { ...(r ? { fallback: l } : {}), children: u });
                    }
                    return ((h.displayName = 'LoadableComponent'), h);
                };
        },
        66610: (e, t, s) => {
            'use strict';
            s.d(t, { D: () => a });
            var n = s(53548),
                i = s(24709),
                o = s(88966),
                l = s(87138),
                r = s(46457);
            let a = (0, i.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, o.N)(),
                    t = (0, l.w)(),
                    s = (0, n.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, r.c)((e) => {
                    t?.object && s && s.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        68326: (e, t, s) => {
            'use strict';
            function n(e) {
                let { moduleIds: t } = e;
                return null;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }),
                s(88800),
                s(53405),
                s(96669),
                s(86900));
        },
        74021: (e, t, s) => {
            'use strict';
            s.d(t, { q: () => a });
            var n = s(14567),
                i = s(243),
                o = s(62151),
                l = s(33396);
            let r = () => 'SECRET';
            class a {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: s }) {
                    ((this.maxLogLevel = t), (this.secureFields = s), (this.additionalData = e));
                }
                formatMessage(e, t, s = {}, i) {
                    let o,
                        r = String(t instanceof Error && t.stack ? t.stack : t),
                        a = (0, l.A)({ ...this.additionalData, ...s });
                    return (Object.keys(a).length && (o = this.obfuscateData(a)), i) ? `${r} ${n(o)}` : [r, o];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, i.A)(e, t) && (0, o.A)(e, t, r());
                    return e;
                }
            }
        },
        76124: (e, t, s) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                }));
            let n = s(70405)._(s(60527));
            function i(e, t) {
                var s;
                let i = {};
                'function' == typeof e && (i.loader = e);
                let o = { ...i, ...t };
                return (0, n.default)({ ...o, modules: null == (s = o.loadableGenerated) ? void 0 : s.modules });
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        90852: (e, t, s) => {
            'use strict';
            s.d(t, { B: () => h });
            var n = s(88800),
                i = s(53548),
                o = s(24709),
                l = s(66368),
                r = s(37556),
                a = s(88966);
            let h = (0, o.B)(
                { kind: 'provider', requiredProps: ['objectType', 'objectId', 'objectPosX', 'objectPosY'], pendingProps: ['objectId'], scope: 'object' },
                ({ children: e, objectId: t, objectPosX: s, objectPosY: o, objectType: h }) => {
                    let u = (0, a.N)(),
                        c = (0, i.useContext)(l.p)?.loadedSession,
                        d = [h, t, s, o].join(':'),
                        [f, m] = (0, i.useState)(() => ({ client: u, identity: d, blockSession: c, viewSession: u.createBlockViewSession() }));
                    (f.client !== u || f.identity !== d || f.blockSession !== c) &&
                        m({ client: u, identity: d, blockSession: c, viewSession: u.createBlockViewSession() });
                    let g = (0, i.useMemo)(
                        () => ({ activeViewSession: null, scope: { objectId: t, objectPosX: s, objectPosY: o, objectType: h }, viewSession: f.viewSession }),
                        [t, s, o, h, f.viewSession],
                    );
                    return (0, n.jsx)(r.l, { value: g, children: e });
                },
            );
        },
        94177: (e, t) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var s in t) Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
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
            let s = Object.defineProperty(Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available'), '__NEXT_ERROR_CODE', {
                value: 'E504',
                enumerable: !1,
                configurable: !0,
            });
            class n {
                disable() {
                    throw s;
                }
                getStore() {}
                run() {
                    throw s;
                }
                exit() {
                    throw s;
                }
                enterWith() {
                    throw s;
                }
                static bind(e) {
                    return e;
                }
            }
            let i = 'undefined' != typeof globalThis && globalThis.AsyncLocalStorage;
            function o() {
                return i ? new i() : new n();
            }
            function l(e) {
                return i ? i.bind(e) : n.bind(e);
            }
            function r() {
                return i
                    ? i.snapshot()
                    : function (e, ...t) {
                          return e(...t);
                      };
            }
        },
        96669: (e, t, s) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorage', {
                    enumerable: !0,
                    get: function () {
                        return n.workAsyncStorageInstance;
                    },
                }));
            let n = s(20603);
        },
    },
]);
