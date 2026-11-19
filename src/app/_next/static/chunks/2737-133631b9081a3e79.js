(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1643, 2737, 2837, 9202],
    {
        14567: (e, t) => {
            (e.exports = function (e, t, s, n) {
                return JSON.stringify(e, i(t, n), s);
            }).getSerialize = i;
            function i(e, t) {
                var i = [],
                    s = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return i[0] === t ? '[Circular ~]' : '[Circular ~.' + s.slice(0, i.indexOf(t)).join('.') + ']';
                        }),
                    function (n, r) {
                        if (i.length > 0) {
                            var o = i.indexOf(this);
                            (~o ? i.splice(o + 1) : i.push(this), ~o ? s.splice(o, 1 / 0, n) : s.push(n), ~i.indexOf(r) && (r = t.call(this, n, r)));
                        } else i.push(r);
                        return null == e ? r : e.call(this, n, r);
                    }
                );
            }
        },
        14965: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => s });
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: n = {}, ...r } = t,
                        o = e || 'Internal error';
                    (super(o, r), (this.message = o), (this.code = i), (this.data = n), (this.stack = Error(o).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        23877: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { Q: () => n, c: () => s }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(s || (s = {})));
            let n = { [s.ERROR]: 'error', [s.WARNING]: 'warn', [s.INFO]: 'info', [s.DEBUG]: 'debug', [s.TRACE]: 'trace' };
        },
        27794: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => y });
            var s,
                n,
                r = i(88092),
                o = i(68436);
            function l(e, t) {
                var i = t && t.cache ? t.cache : d,
                    s = t && t.serializer ? t.serializer : c;
                return (
                    t && t.strategy
                        ? t.strategy
                        : function (e, t) {
                              var i,
                                  s,
                                  n = 1 === e.length ? a : u;
                              return ((i = t.cache.create()), (s = t.serializer), n.bind(this, e, i, s));
                          }
                )(e, { cache: i, serializer: s });
            }
            function a(e, t, i, s) {
                var n = null == s || 'number' == typeof s || 'boolean' == typeof s ? s : i(s),
                    r = t.get(n);
                return (void 0 === r && ((r = e.call(this, s)), t.set(n, r)), r);
            }
            function u(e, t, i) {
                var s = Array.prototype.slice.call(arguments, 3),
                    n = i(s),
                    r = t.get(n);
                return (void 0 === r && ((r = e.apply(this, s)), t.set(n, r)), r);
            }
            var c = function () {
                return JSON.stringify(arguments);
            };
            function h() {
                this.cache = Object.create(null);
            }
            ((h.prototype.get = function (e) {
                return this.cache[e];
            }),
                (h.prototype.set = function (e, t) {
                    this.cache[e] = t;
                }));
            var d = {
                    create: function () {
                        return new h();
                    },
                },
                m = {
                    variadic: function (e, t) {
                        var i, s;
                        return ((i = t.cache.create()), (s = t.serializer), u.bind(this, e, i, s));
                    },
                    monadic: function (e, t) {
                        var i, s;
                        return ((i = t.cache.create()), (s = t.serializer), a.bind(this, e, i, s));
                    },
                };
            !(function (e) {
                ((e.MISSING_VALUE = 'MISSING_VALUE'), (e.INVALID_VALUE = 'INVALID_VALUE'), (e.MISSING_INTL_API = 'MISSING_INTL_API'));
            })(s || (s = {}));
            var p = (function (e) {
                    function t(t, i, s) {
                        var n = e.call(this, t) || this;
                        return ((n.code = i), (n.originalMessage = s), n);
                    }
                    return (
                        (0, r.__extends)(t, e),
                        (t.prototype.toString = function () {
                            return '[formatjs Error: '.concat(this.code, '] ').concat(this.message);
                        }),
                        t
                    );
                })(Error),
                f = (function (e) {
                    function t(t, i, n, r) {
                        return (
                            e.call(
                                this,
                                'Invalid values for "'.concat(t, '": "').concat(i, '". Options are "').concat(Object.keys(n).join('", "'), '"'),
                                s.INVALID_VALUE,
                                r,
                            ) || this
                        );
                    }
                    return ((0, r.__extends)(t, e), t);
                })(p),
                g = (function (e) {
                    function t(t, i, n) {
                        return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(i), s.INVALID_VALUE, n) || this;
                    }
                    return ((0, r.__extends)(t, e), t);
                })(p),
                v = (function (e) {
                    function t(t, i) {
                        return (
                            e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(i, '"'), s.MISSING_VALUE, i) || this
                        );
                    }
                    return ((0, r.__extends)(t, e), t);
                })(p);
            function b(e) {
                return {
                    create: function () {
                        return {
                            get: function (t) {
                                return e[t];
                            },
                            set: function (t, i) {
                                e[t] = i;
                            },
                        };
                    },
                };
            }
            !(function (e) {
                ((e[(e.literal = 0)] = 'literal'), (e[(e.object = 1)] = 'object'));
            })(n || (n = {}));
            var y = (function () {
                function e(t, i, a, u) {
                    var c,
                        h,
                        d = this;
                    if (
                        (void 0 === i && (i = e.defaultLocale),
                        (this.formatterCache = { number: {}, dateTime: {}, pluralRules: {} }),
                        (this.format = function (e) {
                            var t = d.formatToParts(e);
                            if (1 === t.length) return t[0].value;
                            var i = t.reduce(function (e, t) {
                                return (e.length && t.type === n.literal && 'string' == typeof e[e.length - 1] ? (e[e.length - 1] += t.value) : e.push(t.value), e);
                            }, []);
                            return i.length <= 1 ? i[0] || '' : i;
                        }),
                        (this.formatToParts = function (e) {
                            return (function e(t, i, r, l, a, u, c) {
                                if (1 === t.length && (0, o.isLiteralElement)(t[0])) return [{ type: n.literal, value: t[0].value }];
                                for (var h = [], d = 0; d < t.length; d++) {
                                    var m = t[d];
                                    if ((0, o.isLiteralElement)(m)) {
                                        h.push({ type: n.literal, value: m.value });
                                        continue;
                                    }
                                    if ((0, o.isPoundElement)(m)) {
                                        'number' == typeof u && h.push({ type: n.literal, value: r.getNumberFormat(i).format(u) });
                                        continue;
                                    }
                                    var b = m.value;
                                    if (!(a && b in a)) throw new v(b, c);
                                    var y = a[b];
                                    if ((0, o.isArgumentElement)(m)) {
                                        ((y && 'string' != typeof y && 'number' != typeof y) || (y = 'string' == typeof y || 'number' == typeof y ? String(y) : ''),
                                            h.push({ type: 'string' == typeof y ? n.literal : n.object, value: y }));
                                        continue;
                                    }
                                    if ((0, o.isDateElement)(m)) {
                                        var E = 'string' == typeof m.style ? l.date[m.style] : (0, o.isDateTimeSkeleton)(m.style) ? m.style.parsedOptions : void 0;
                                        h.push({ type: n.literal, value: r.getDateTimeFormat(i, E).format(y) });
                                        continue;
                                    }
                                    if ((0, o.isTimeElement)(m)) {
                                        var E = 'string' == typeof m.style ? l.time[m.style] : (0, o.isDateTimeSkeleton)(m.style) ? m.style.parsedOptions : l.time.medium;
                                        h.push({ type: n.literal, value: r.getDateTimeFormat(i, E).format(y) });
                                        continue;
                                    }
                                    if ((0, o.isNumberElement)(m)) {
                                        var E = 'string' == typeof m.style ? l.number[m.style] : (0, o.isNumberSkeleton)(m.style) ? m.style.parsedOptions : void 0;
                                        (E && E.scale && (y *= E.scale || 1), h.push({ type: n.literal, value: r.getNumberFormat(i, E).format(y) }));
                                        continue;
                                    }
                                    if ((0, o.isTagElement)(m)) {
                                        var I = m.children,
                                            O = m.value,
                                            S = a[O];
                                        if ('function' != typeof S) throw new g(O, 'function', c);
                                        var w = S(
                                            e(I, i, r, l, a, u).map(function (e) {
                                                return e.value;
                                            }),
                                        );
                                        (Array.isArray(w) || (w = [w]),
                                            h.push.apply(
                                                h,
                                                w.map(function (e) {
                                                    return { type: 'string' == typeof e ? n.literal : n.object, value: e };
                                                }),
                                            ));
                                    }
                                    if ((0, o.isSelectElement)(m)) {
                                        var T = m.options[y] || m.options.other;
                                        if (!T) throw new f(m.value, y, Object.keys(m.options), c);
                                        h.push.apply(h, e(T.value, i, r, l, a));
                                        continue;
                                    }
                                    if ((0, o.isPluralElement)(m)) {
                                        var T = m.options['='.concat(y)];
                                        if (!T) {
                                            if (!Intl.PluralRules)
                                                throw new p(
                                                    'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                                                    s.MISSING_INTL_API,
                                                    c,
                                                );
                                            var _ = r.getPluralRules(i, { type: m.pluralType }).select(y - (m.offset || 0));
                                            T = m.options[_] || m.options.other;
                                        }
                                        if (!T) throw new f(m.value, y, Object.keys(m.options), c);
                                        h.push.apply(h, e(T.value, i, r, l, a, y - (m.offset || 0)));
                                        continue;
                                    }
                                }
                                return h.length < 2
                                    ? h
                                    : h.reduce(function (e, t) {
                                          var i = e[e.length - 1];
                                          return (i && i.type === n.literal && t.type === n.literal ? (i.value += t.value) : e.push(t), e);
                                      }, []);
                            })(d.ast, d.locales, d.formatters, d.formats, e, void 0, d.message);
                        }),
                        (this.resolvedOptions = function () {
                            var e;
                            return { locale: (null == (e = d.resolvedLocale) ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(d.locales)[0] };
                        }),
                        (this.getAst = function () {
                            return d.ast;
                        }),
                        (this.locales = i),
                        (this.resolvedLocale = e.resolveLocale(i)),
                        'string' == typeof t)
                    ) {
                        if (((this.message = t), !e.__parse)) throw TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
                        var y = u || {},
                            E = (y.formatters, (0, r.__rest)(y, ['formatters']));
                        this.ast = e.__parse(t, (0, r.__assign)((0, r.__assign)({}, E), { locale: this.resolvedLocale }));
                    } else this.ast = t;
                    if (!Array.isArray(this.ast)) throw TypeError('A message must be provided as a String or AST.');
                    ((this.formats =
                        ((c = e.formats),
                        a
                            ? Object.keys(c).reduce(
                                  function (e, t) {
                                      var i, s;
                                      return (
                                          (e[t] =
                                              ((i = c[t]),
                                              (s = a[t])
                                                  ? (0, r.__assign)(
                                                        (0, r.__assign)((0, r.__assign)({}, i || {}), s || {}),
                                                        Object.keys(i).reduce(function (e, t) {
                                                            return ((e[t] = (0, r.__assign)((0, r.__assign)({}, i[t]), s[t] || {})), e);
                                                        }, {}),
                                                    )
                                                  : i)),
                                          e
                                      );
                                  },
                                  (0, r.__assign)({}, c),
                              )
                            : c)),
                        (this.formatters =
                            (u && u.formatters) ||
                            (void 0 === (h = this.formatterCache) && (h = { number: {}, dateTime: {}, pluralRules: {} }),
                            {
                                getNumberFormat: l(
                                    function () {
                                        for (var e, t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
                                        return new ((e = Intl.NumberFormat).bind.apply(e, (0, r.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: b(h.number), strategy: m.variadic },
                                ),
                                getDateTimeFormat: l(
                                    function () {
                                        for (var e, t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
                                        return new ((e = Intl.DateTimeFormat).bind.apply(e, (0, r.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: b(h.dateTime), strategy: m.variadic },
                                ),
                                getPluralRules: l(
                                    function () {
                                        for (var e, t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
                                        return new ((e = Intl.PluralRules).bind.apply(e, (0, r.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: b(h.pluralRules), strategy: m.variadic },
                                ),
                            })));
                }
                return (
                    Object.defineProperty(e, 'defaultLocale', {
                        get: function () {
                            return (e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (e.memoizedDefaultLocale = null),
                    (e.resolveLocale = function (e) {
                        if (void 0 !== Intl.Locale) {
                            var t = Intl.NumberFormat.supportedLocalesOf(e);
                            return new Intl.Locale(t.length > 0 ? t[0] : 'string' == typeof e ? e : e[0]);
                        }
                    }),
                    (e.__parse = o.parse),
                    (e.formats = {
                        number: { integer: { maximumFractionDigits: 0 }, currency: { style: 'currency' }, percent: { style: 'percent' } },
                        date: {
                            short: { month: 'numeric', day: 'numeric', year: '2-digit' },
                            medium: { month: 'short', day: 'numeric', year: 'numeric' },
                            long: { month: 'long', day: 'numeric', year: 'numeric' },
                            full: { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' },
                        },
                        time: {
                            short: { hour: 'numeric', minute: 'numeric' },
                            medium: { hour: 'numeric', minute: 'numeric', second: 'numeric' },
                            long: { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' },
                            full: { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' },
                        },
                    }),
                    e
                );
            })();
        },
        42592: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => a });
            var s = i(53548),
                n = i(24709),
                r = i(18117),
                o = i(88966),
                l = i(87138);
            let a = (0, n.n)({ event: 'LandingBlock.Loaded', kind: 'hook', requiredScopes: ['screen', 'block'] }, ({ enabled: e = !0 } = {}) => {
                let t = (0, s.useRef)(!1),
                    i = (0, o.N)(),
                    { hash: n } = (0, r.g)(),
                    a = (0, l.w)(),
                    u = (0, s.useMemo)(() => (a ? i.createBlockReporter(a.snapshot) : null), [i, a]);
                (0, s.useEffect)(() => {
                    e && a && u && !t.current && u.loaded({ objectsCount: a.snapshot.block.objectsCount, viewUuid: a.block.loadedSession.start() }) && (t.current = !0);
                }, [e, n, u, a]);
            });
        },
        44084: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => r });
            var s = i(23877),
                n = i(74021);
            class r extends n.q {
                disableLogToConsole;
                constructor(e) {
                    (super(e), (this.disableLogToConsole = e.disableLogToConsole));
                }
                info(e, t) {
                    this.maxLogLevel >= s.c.INFO && this.logToConsole(s.c.INFO, e, t);
                }
                debug(e, t) {
                    this.maxLogLevel >= s.c.DEBUG && this.logToConsole(s.c.DEBUG, e, t);
                }
                trace(e, t) {
                    this.maxLogLevel >= s.c.TRACE && this.logToConsole(s.c.TRACE, e, t);
                }
                warn(e, t) {
                    (this.maxLogLevel >= s.c.WARNING && this.logToConsole(s.c.WARNING, e, t), this.sendToErrorBooster(s.c.WARNING, e, t));
                }
                error(e, t) {
                    (this.maxLogLevel >= s.c.ERROR && this.logToConsole(s.c.ERROR, e, t), this.sendToErrorBooster(s.c.ERROR, e, t));
                }
                log(e, t) {
                    this.logToConsole(s.c.INFO, e, t);
                }
                logToConsole(e, t, i) {
                    if (this.disableLogToConsole) return;
                    let n = s.Q[e];
                    console[n](...this.formatMessage(e, t, i));
                }
                sendToErrorBooster(e, t, i) {
                    window.Ya.Rum.logError({ message: t, level: e, additional: { data: i ? this.obfuscateData({ ...this.additionalData, ...i }) : {} } });
                }
            }
        },
        45700: (e, t) => {
            'use strict';
            var i, s;
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.createNumberElement =
                    t.createLiteralElement =
                    t.isDateTimeSkeleton =
                    t.isNumberSkeleton =
                    t.isTagElement =
                    t.isPoundElement =
                    t.isPluralElement =
                    t.isSelectElement =
                    t.isTimeElement =
                    t.isDateElement =
                    t.isNumberElement =
                    t.isArgumentElement =
                    t.isLiteralElement =
                    t.SKELETON_TYPE =
                    t.TYPE =
                        void 0),
                (function (e) {
                    ((e[(e.literal = 0)] = 'literal'),
                        (e[(e.argument = 1)] = 'argument'),
                        (e[(e.number = 2)] = 'number'),
                        (e[(e.date = 3)] = 'date'),
                        (e[(e.time = 4)] = 'time'),
                        (e[(e.select = 5)] = 'select'),
                        (e[(e.plural = 6)] = 'plural'),
                        (e[(e.pound = 7)] = 'pound'),
                        (e[(e.tag = 8)] = 'tag'));
                })(i || (t.TYPE = i = {})),
                (function (e) {
                    ((e[(e.number = 0)] = 'number'), (e[(e.dateTime = 1)] = 'dateTime'));
                })(s || (t.SKELETON_TYPE = s = {})),
                (t.isLiteralElement = function (e) {
                    return e.type === i.literal;
                }),
                (t.isArgumentElement = function (e) {
                    return e.type === i.argument;
                }),
                (t.isNumberElement = function (e) {
                    return e.type === i.number;
                }),
                (t.isDateElement = function (e) {
                    return e.type === i.date;
                }),
                (t.isTimeElement = function (e) {
                    return e.type === i.time;
                }),
                (t.isSelectElement = function (e) {
                    return e.type === i.select;
                }),
                (t.isPluralElement = function (e) {
                    return e.type === i.plural;
                }),
                (t.isPoundElement = function (e) {
                    return e.type === i.pound;
                }),
                (t.isTagElement = function (e) {
                    return e.type === i.tag;
                }),
                (t.isNumberSkeleton = function (e) {
                    return !!(e && 'object' == typeof e && e.type === s.number);
                }),
                (t.isDateTimeSkeleton = function (e) {
                    return !!(e && 'object' == typeof e && e.type === s.dateTime);
                }),
                (t.createLiteralElement = function (e) {
                    return { type: i.literal, value: e };
                }),
                (t.createNumberElement = function (e, t) {
                    return { type: i.number, value: e, style: t };
                }));
        },
        46384: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => c });
            var s = i(88800),
                n = i(53548),
                r = i(24709),
                o = i(8383),
                l = i(66368),
                a = i(88966);
            let u = (e, t, i) => {
                    let s = e.createBlockViewSession(),
                        n = !1;
                    return { claimLoadedSession: () => (n ? null : ((n = !0), s)), client: e, identity: t, loadedSession: s, screenSession: i };
                },
                c = (0, r.B)(
                    { kind: 'provider', requiredProps: ['blockId', 'blockType', 'blockPosX', 'blockPosY', 'objectsCount'], scope: 'block' },
                    ({ blockId: e, blockIdForFrom: t, blockPosX: i, blockPosY: r, blockType: c, children: h, objectsCount: d }) => {
                        let m = (0, a.N)(),
                            p = (0, n.useContext)(o.k)?.session,
                            f = [e, c, i, r].join(':'),
                            [g, v] = (0, n.useState)(() => u(m, f, p));
                        (g.client !== m || g.identity !== f || g.screenSession !== p) && v(u(m, f, p));
                        let b = (0, n.useMemo)(
                            () => ({
                                claimLoadedSession: g.claimLoadedSession,
                                loadedSession: g.loadedSession,
                                scope: { blockId: e, blockIdForFrom: t, blockPosX: i, blockPosY: r, blockType: c, objectsCount: d },
                            }),
                            [e, t, i, r, c, d, g.claimLoadedSession, g.loadedSession],
                        );
                        return (0, s.jsx)(l.p, { value: b, children: h });
                    },
                );
        },
        56949: (e, t, i) => {
            'use strict';
            i.d(t, { Te: () => S, XW: () => w });
            var s = i(53548),
                n = i(53405);
            function r(e, t, i) {
                let s,
                    n = i.initialDeps ?? [];
                function r() {
                    var r, o, l, a;
                    let u, c;
                    i.key && (null == (r = i.debug) ? void 0 : r.call(i)) && (u = Date.now());
                    let h = e();
                    if (!(h.length !== n.length || h.some((e, t) => n[t] !== e))) return s;
                    if (
                        ((n = h),
                        i.key && (null == (o = i.debug) ? void 0 : o.call(i)) && (c = Date.now()),
                        (s = t(...h)),
                        i.key && (null == (l = i.debug) ? void 0 : l.call(i)))
                    ) {
                        let e = Math.round((Date.now() - u) * 100) / 100,
                            t = Math.round((Date.now() - c) * 100) / 100,
                            s = t / 16,
                            n = (e, t) => {
                                for (e = String(e); e.length < t;) e = ' ' + e;
                                return e;
                            };
                        console.info(
                            `%c⏱ ${n(t, 5)} /${n(e, 5)} ms`,
                            `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * s, 120))}deg 100% 31%);`,
                            null == i ? void 0 : i.key,
                        );
                    }
                    return (null == (a = null == i ? void 0 : i.onChange) || a.call(i, s), s);
                }
                return (
                    (r.updateDeps = (e) => {
                        n = e;
                    }),
                    r
                );
            }
            function o(e, t) {
                if (void 0 !== e) return e;
                throw Error(`Unexpected undefined${t ? `: ${t}` : ''}`);
            }
            let l = (e, t, i) => {
                    let s;
                    return function (...n) {
                        (e.clearTimeout(s), (s = e.setTimeout(() => t.apply(this, n), i)));
                    };
                },
                a = (e) => e,
                u = (e) => {
                    let t = Math.max(e.startIndex - e.overscan, 0),
                        i = Math.min(e.endIndex + e.overscan, e.count - 1),
                        s = [];
                    for (let e = t; e <= i; e++) s.push(e);
                    return s;
                },
                c = (e, t) => {
                    let i = e.scrollElement;
                    if (!i) return;
                    let s = e.targetWindow;
                    if (!s) return;
                    let n = (e) => {
                        let { width: i, height: s } = e;
                        t({ width: Math.round(i), height: Math.round(s) });
                    };
                    if ((n(i.getBoundingClientRect()), !s.ResizeObserver)) return () => {};
                    let r = new s.ResizeObserver((t) => {
                        let s = () => {
                            let e = t[0];
                            if (null == e ? void 0 : e.borderBoxSize) {
                                let t = e.borderBoxSize[0];
                                if (t) return void n({ width: t.inlineSize, height: t.blockSize });
                            }
                            n(i.getBoundingClientRect());
                        };
                        e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(s) : s();
                    });
                    return (
                        r.observe(i, { box: 'border-box' }),
                        () => {
                            r.unobserve(i);
                        }
                    );
                },
                h = { passive: !0 },
                d = (e, t) => {
                    let i = e.scrollElement;
                    if (!i) return;
                    let s = () => {
                        t({ width: i.innerWidth, height: i.innerHeight });
                    };
                    return (
                        s(),
                        i.addEventListener('resize', s, h),
                        () => {
                            i.removeEventListener('resize', s);
                        }
                    );
                },
                m = 'undefined' == typeof window || 'onscrollend' in window,
                p = (e, t) => {
                    let i = e.scrollElement;
                    if (!i) return;
                    let s = e.targetWindow;
                    if (!s) return;
                    let n = 0,
                        r =
                            e.options.useScrollendEvent && m
                                ? () => void 0
                                : l(
                                      s,
                                      () => {
                                          t(n, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        o = (s) => () => {
                            let { horizontal: o, isRtl: l } = e.options;
                            ((n = o ? i.scrollLeft * ((l && -1) || 1) : i.scrollTop), r(), t(n, s));
                        },
                        a = o(!0),
                        u = o(!1);
                    (u(), i.addEventListener('scroll', a, h));
                    let c = e.options.useScrollendEvent && m;
                    return (
                        c && i.addEventListener('scrollend', u, h),
                        () => {
                            (i.removeEventListener('scroll', a), c && i.removeEventListener('scrollend', u));
                        }
                    );
                },
                f = (e, t) => {
                    let i = e.scrollElement;
                    if (!i) return;
                    let s = e.targetWindow;
                    if (!s) return;
                    let n = 0,
                        r =
                            e.options.useScrollendEvent && m
                                ? () => void 0
                                : l(
                                      s,
                                      () => {
                                          t(n, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        o = (s) => () => {
                            ((n = i[e.options.horizontal ? 'scrollX' : 'scrollY']), r(), t(n, s));
                        },
                        a = o(!0),
                        u = o(!1);
                    (u(), i.addEventListener('scroll', a, h));
                    let c = e.options.useScrollendEvent && m;
                    return (
                        c && i.addEventListener('scrollend', u, h),
                        () => {
                            (i.removeEventListener('scroll', a), c && i.removeEventListener('scrollend', u));
                        }
                    );
                },
                g = (e, t, i) => {
                    if (null == t ? void 0 : t.borderBoxSize) {
                        let e = t.borderBoxSize[0];
                        if (e) return Math.round(e[i.options.horizontal ? 'inlineSize' : 'blockSize']);
                    }
                    return Math.round(e.getBoundingClientRect()[i.options.horizontal ? 'width' : 'height']);
                },
                v = (e, { adjustments: t = 0, behavior: i }, s) => {
                    var n, r;
                    null == (r = null == (n = s.scrollElement) ? void 0 : n.scrollTo) || r.call(n, { [s.options.horizontal ? 'left' : 'top']: e + t, behavior: i });
                },
                b = (e, { adjustments: t = 0, behavior: i }, s) => {
                    var n, r;
                    null == (r = null == (n = s.scrollElement) ? void 0 : n.scrollTo) || r.call(n, { [s.options.horizontal ? 'left' : 'top']: e + t, behavior: i });
                };
            class y {
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
                                    var i;
                                    (null == (i = t()) || i.disconnect(), (e = null));
                                },
                                observe: (e) => {
                                    var i;
                                    return null == (i = t()) ? void 0 : i.observe(e, { box: 'border-box' });
                                },
                                unobserve: (e) => {
                                    var i;
                                    return null == (i = t()) ? void 0 : i.unobserve(e);
                                },
                            };
                        })()),
                        (this.range = null),
                        (this.setOptions = (e) => {
                            (Object.entries(e).forEach(([t, i]) => {
                                void 0 === i && delete e[t];
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
                                    rangeExtractor: u,
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
                            var t, i;
                            null == (i = (t = this.options).onChange) || i.call(t, this, e);
                        }),
                        (this.maybeNotify = r(
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
                            let i = new Map(),
                                s = new Map();
                            for (let n = t - 1; n >= 0; n--) {
                                let t = e[n];
                                if (i.has(t.lane)) continue;
                                let r = s.get(t.lane);
                                if ((null == r || t.end > r.end ? s.set(t.lane, t) : t.end < r.end && i.set(t.lane, !0), i.size === this.options.lanes)) break;
                            }
                            return s.size === this.options.lanes
                                ? Array.from(s.values()).sort((e, t) => (e.end === t.end ? e.index - t.index : e.end - t.end))[0]
                                : void 0;
                        }),
                        (this.getMeasurementOptions = r(
                            () => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled],
                            (e, t, i, s, n) => ((this.pendingMeasuredCacheIndexes = []), { count: e, paddingStart: t, scrollMargin: i, getItemKey: s, enabled: n }),
                            { key: !1 },
                        )),
                        (this.getMeasurements = r(
                            () => [this.getMeasurementOptions(), this.itemSizeCache],
                            ({ count: e, paddingStart: t, scrollMargin: i, getItemKey: s, enabled: n }, r) => {
                                if (!n) return ((this.measurementsCache = []), this.itemSizeCache.clear(), []);
                                0 === this.measurementsCache.length &&
                                    ((this.measurementsCache = this.options.initialMeasurementsCache),
                                    this.measurementsCache.forEach((e) => {
                                        this.itemSizeCache.set(e.key, e.size);
                                    }));
                                let o = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
                                this.pendingMeasuredCacheIndexes = [];
                                let l = this.measurementsCache.slice(0, o);
                                for (let n = o; n < e; n++) {
                                    let e = s(n),
                                        o = 1 === this.options.lanes ? l[n - 1] : this.getFurthestMeasurement(l, n),
                                        a = o ? o.end + this.options.gap : t + i,
                                        u = r.get(e),
                                        c = 'number' == typeof u ? u : this.options.estimateSize(n),
                                        h = a + c,
                                        d = o ? o.lane : n % this.options.lanes;
                                    l[n] = { index: n, start: a, size: c, end: h, key: e, lane: d };
                                }
                                return ((this.measurementsCache = l), l);
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.calculateRange = r(
                            () => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes],
                            (e, t, i, s) =>
                                (this.range =
                                    e.length > 0 && t > 0
                                        ? (function ({ measurements: e, outerSize: t, scrollOffset: i, lanes: s }) {
                                              let n = e.length - 1,
                                                  r = E(0, n, (t) => e[t].start, i),
                                                  o = r;
                                              if (1 === s) for (; o < n && e[o].end < i + t;) o++;
                                              else if (s > 1) {
                                                  let l = Array(s).fill(0);
                                                  for (; o < n && l.some((e) => e < i + t);) {
                                                      let t = e[o];
                                                      ((l[t.lane] = t.end), o++);
                                                  }
                                                  let a = Array(s).fill(i + t);
                                                  for (; r > 0 && a.some((e) => e >= i);) {
                                                      let t = e[r];
                                                      ((a[t.lane] = t.start), r--);
                                                  }
                                                  ((r = Math.max(0, r - (r % s))), (o = Math.min(n, o + (s - 1 - (o % s)))));
                                              }
                                              return { startIndex: r, endIndex: o };
                                          })({ measurements: e, outerSize: t, scrollOffset: i, lanes: s })
                                        : null),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualIndexes = r(
                            () => {
                                let e = null,
                                    t = null,
                                    i = this.calculateRange();
                                return (
                                    i && ((e = i.startIndex), (t = i.endIndex)),
                                    this.maybeNotify.updateDeps([this.isScrolling, e, t]),
                                    [this.options.rangeExtractor, this.options.overscan, this.options.count, e, t]
                                );
                            },
                            (e, t, i, s, n) => (null === s || null === n ? [] : e({ startIndex: s, endIndex: n, overscan: t, count: i })),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.indexFromElement = (e) => {
                            let t = this.options.indexAttribute,
                                i = e.getAttribute(t);
                            return i ? parseInt(i, 10) : (console.warn(`Missing attribute name '${t}={index}' on measured element.`), -1);
                        }),
                        (this._measureElement = (e, t) => {
                            let i = this.indexFromElement(e),
                                s = this.measurementsCache[i];
                            if (!s) return;
                            let n = s.key,
                                r = this.elementsCache.get(n);
                            (r !== e && (r && this.observer.unobserve(r), this.observer.observe(e), this.elementsCache.set(n, e)),
                                e.isConnected && this.resizeItem(i, this.options.measureElement(e, t, this)));
                        }),
                        (this.resizeItem = (e, t) => {
                            let i = this.measurementsCache[e];
                            if (!i) return;
                            let s = t - (this.itemSizeCache.get(i.key) ?? i.size);
                            0 !== s &&
                                ((void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange
                                    ? this.shouldAdjustScrollPositionOnItemSizeChange(i, s, this)
                                    : i.start < this.getScrollOffset() + this.scrollAdjustments) &&
                                    this._scrollToOffset(this.getScrollOffset(), { adjustments: (this.scrollAdjustments += s), behavior: void 0 }),
                                this.pendingMeasuredCacheIndexes.push(i.index),
                                (this.itemSizeCache = new Map(this.itemSizeCache.set(i.key, t))),
                                this.notify(!1));
                        }),
                        (this.measureElement = (e) => {
                            if (!e)
                                return void this.elementsCache.forEach((e, t) => {
                                    e.isConnected || (this.observer.unobserve(e), this.elementsCache.delete(t));
                                });
                            this._measureElement(e, void 0);
                        }),
                        (this.getVirtualItems = r(
                            () => [this.getVirtualIndexes(), this.getMeasurements()],
                            (e, t) => {
                                let i = [];
                                for (let s = 0, n = e.length; s < n; s++) {
                                    let n = t[e[s]];
                                    i.push(n);
                                }
                                return i;
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualItemForOffset = (e) => {
                            let t = this.getMeasurements();
                            if (0 !== t.length) return o(t[E(0, t.length - 1, (e) => o(t[e]).start, e)]);
                        }),
                        (this.getOffsetForAlignment = (e, t, i = 0) => {
                            let s = this.getSize(),
                                n = this.getScrollOffset();
                            ('auto' === t && (t = e >= n + s ? 'end' : 'start'), 'center' === t ? (e += (i - s) / 2) : 'end' === t && (e -= s));
                            let r = this.options.horizontal ? 'scrollWidth' : 'scrollHeight';
                            return Math.max(
                                Math.min(
                                    (this.scrollElement
                                        ? 'document' in this.scrollElement
                                            ? this.scrollElement.document.documentElement[r]
                                            : this.scrollElement[r]
                                        : 0) - s,
                                    e,
                                ),
                                0,
                            );
                        }),
                        (this.getOffsetForIndex = (e, t = 'auto') => {
                            e = Math.max(0, Math.min(e, this.options.count - 1));
                            let i = this.measurementsCache[e];
                            if (!i) return;
                            let s = this.getSize(),
                                n = this.getScrollOffset();
                            if ('auto' === t)
                                if (i.end >= n + s - this.options.scrollPaddingEnd) t = 'end';
                                else {
                                    if (!(i.start <= n + this.options.scrollPaddingStart)) return [n, t];
                                    t = 'start';
                                }
                            let r = 'end' === t ? i.end + this.options.scrollPaddingEnd : i.start - this.options.scrollPaddingStart;
                            return [this.getOffsetForAlignment(r, t, i.size), t];
                        }),
                        (this.isDynamicMode = () => this.elementsCache.size > 0),
                        (this.cancelScrollToIndex = () => {
                            null !== this.scrollToIndexTimeoutId &&
                                this.targetWindow &&
                                (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), (this.scrollToIndexTimeoutId = null));
                        }),
                        (this.scrollToOffset = (e, { align: t = 'start', behavior: i } = {}) => {
                            (this.cancelScrollToIndex(),
                                'smooth' === i && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'),
                                this._scrollToOffset(this.getOffsetForAlignment(e, t), { adjustments: void 0, behavior: i }));
                        }),
                        (this.scrollToIndex = (e, { align: t = 'auto', behavior: i } = {}) => {
                            ((e = Math.max(0, Math.min(e, this.options.count - 1))),
                                this.cancelScrollToIndex(),
                                'smooth' === i && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'));
                            let s = this.getOffsetForIndex(e, t);
                            if (!s) return;
                            let [n, r] = s;
                            (this._scrollToOffset(n, { adjustments: void 0, behavior: i }),
                                'smooth' !== i &&
                                    this.isDynamicMode() &&
                                    this.targetWindow &&
                                    (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
                                        if (((this.scrollToIndexTimeoutId = null), this.elementsCache.has(this.options.getItemKey(e)))) {
                                            let [t] = o(this.getOffsetForIndex(e, r));
                                            1 > Math.abs(t - this.getScrollOffset()) || this.scrollToIndex(e, { align: r, behavior: i });
                                        } else this.scrollToIndex(e, { align: r, behavior: i });
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
                                i = this.getMeasurements();
                            if (0 === i.length) t = this.options.paddingStart;
                            else if (1 === this.options.lanes) t = (null == (e = i[i.length - 1]) ? void 0 : e.end) ?? 0;
                            else {
                                let e = Array(this.options.lanes).fill(null),
                                    s = i.length - 1;
                                for (; s > 0 && e.some((e) => null === e);) {
                                    let t = i[s];
                                    (null === e[t.lane] && (e[t.lane] = t.end), s--);
                                }
                                t = Math.max(...e.filter((e) => null !== e));
                            }
                            return Math.max(t - this.options.scrollMargin + this.options.paddingEnd, 0);
                        }),
                        (this._scrollToOffset = (e, { adjustments: t, behavior: i }) => {
                            this.options.scrollToFn(e, { behavior: i, adjustments: t }, this);
                        }),
                        (this.measure = () => {
                            ((this.itemSizeCache = new Map()), this.notify(!1));
                        }),
                        this.setOptions(e));
                }
            }
            let E = (e, t, i, s) => {
                    for (; e <= t;) {
                        let n = ((e + t) / 2) | 0,
                            r = i(n);
                        if (r < s) e = n + 1;
                        else {
                            if (!(r > s)) return n;
                            t = n - 1;
                        }
                    }
                    return e > 0 ? e - 1 : 0;
                },
                I = 'undefined' != typeof document ? s.useLayoutEffect : s.useEffect;
            function O(e) {
                let t = s.useReducer(() => ({}), {})[1],
                    i = {
                        ...e,
                        onChange: (i, s) => {
                            var r;
                            (s ? (0, n.flushSync)(t) : t(), null == (r = e.onChange) || r.call(e, i, s));
                        },
                    },
                    [r] = s.useState(() => new y(i));
                return (r.setOptions(i), I(() => r._didMount(), []), I(() => r._willUpdate()), r);
            }
            function S(e) {
                return O({ observeElementRect: c, observeElementOffset: p, scrollToFn: b, ...e });
            }
            function w(e) {
                return O({
                    getScrollElement: () => ('undefined' != typeof document ? window : null),
                    observeElementRect: d,
                    observeElementOffset: f,
                    scrollToFn: v,
                    initialOffset: () => ('undefined' != typeof document ? window.scrollY : 0),
                    ...e,
                });
            }
        },
        59724: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => h });
            var s = i(88800),
                n = i(53548),
                r = i(8383),
                o = i(24709),
                l = i(88966);
            let a = new WeakMap();
            class u {
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
                    let i =
                        a.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                i = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                s = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                i();
                                            } finally {
                                                ((t = !1), e.length > 0 && s());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (i(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), s());
                                },
                            };
                        })();
                    (a.set(t, i), (this.queue = i));
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
            var c = i(97234);
            let h = (0, o.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let i = (0, l.N)(),
                        o = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === c.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [a, h] = (0, n.useState)(() => {
                            let e = new u(i.createScreenSession().screenViewUuid, i);
                            return { client: i, input: t, isReady: o, scope: o ? i.createScreenScope(t, e) : null, session: e };
                        });
                    if (a.client !== i || a.input.pageId !== t.pageId || a.input.skeletonId !== t.skeletonId) {
                        let n = new u(i.createScreenSession().screenViewUuid, i),
                            l = { client: i, input: t, isReady: o, scope: o ? i.createScreenScope(t, n) : null, session: n };
                        return (h(l), (0, s.jsx)(r.k, { value: l, children: e }));
                    }
                    if (
                        a.isReady !== o ||
                        a.input.mainObjectType !== t.mainObjectType ||
                        a.input.mainObjectId !== t.mainObjectId ||
                        a.input.displayReasonId !== t.displayReasonId ||
                        a.input.pageIdForFrom !== t.pageIdForFrom ||
                        a.input.pagePlacement !== t.pagePlacement ||
                        a.input.pageStyle !== t.pageStyle
                    ) {
                        let n = { ...a, input: t, isReady: o, scope: o ? i.createScreenScope(t, a.session) : null };
                        return (h(n), (0, s.jsx)(r.k, { value: n, children: e }));
                    }
                    return (0, s.jsx)(r.k, { value: a, children: e });
                },
            );
        },
        62837: (e, t, i) => {
            'use strict';
            i.d(t, { AS: () => d, Yw: () => s, JU: () => n, DQ: () => f, Ve: () => g });
            var s,
                n,
                r = i(43297),
                o = (function () {
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
                            var i = this;
                            void 0 === t && (t = { skipFirstChange: !1 });
                            var s = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (n) {
                                    if (n !== i.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && s) {
                                            s = !1;
                                            return;
                                        }
                                        (i.prevValueByListener.set(e, n), e(n));
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
                        var i = this;
                        void 0 === t && (t = { skipFirstChange: !1 });
                        var s = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (n) {
                                if (n !== i.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && s) {
                                        s = !1;
                                        return;
                                    }
                                    (i.prevValueByListener.set(e, n), e(n));
                                }
                            })
                        );
                    }));
            })();
            var l = i(14965);
            class a extends l.t {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    (super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, a.prototype));
                }
            }
            class u extends l.t {
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
                        Object.setPrototypeOf(this, u.prototype));
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
            })(s || (s = {}));
            let c = (e) => {
                    let t = [];
                    for (let i of e) {
                        let [e, s] = i.split(':');
                        e && s && t.push({ type: e, id: s });
                    }
                    return t;
                },
                h = (e, t) => c(e).filter((e) => e.type === t);
            class d {
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
                        (this.itemsObservable = new o(null)),
                        (this.isLoadingObservable = new o(!1)),
                        (this.errorObservable = new o(null)),
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
                            let t = e instanceof Error ? e : new a(e);
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
                    throw new u(e, !0);
                }
                async resolveByType(e, t) {
                    let i = h(e, t);
                    return (await Promise.all(i.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = c(e),
                        i = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        s = {};
                    for (let e of i)
                        if (e) {
                            let t = s[e.disclaimerType] ?? [];
                            (t.push(e.disclaimerItem), (s[e.disclaimerType] = t));
                        }
                    return s;
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
            })(n || (n = {}));
            let m = new Map([
                    [s.EXPLICIT_ICON, n.E],
                    [s.AGE_18_ICON, n.AGE_18],
                    [s.AGE_16_ICON, n.AGE_16],
                    [s.AGE_12_ICON, n.AGE_12],
                    [s.EXCLAMATION_ICON, n.EXCLAMATION],
                    // for PulseSync: BEGIN map the substituted-track icon to its label
                    [s.SUBSTITUTED_ICON, n.SUBSTITUTED],
                    // for PulseSync: END map the substituted-track icon to its label
                ]),
                p = [s.EXPLICIT_ICON, s.AGE_18_ICON, s.AGE_16_ICON, s.AGE_12_ICON, s.SUBSTITUTED_ICON, s.EXCLAMATION_ICON],
                f = (e) => {
                    let t = ((e, t) => {
                        for (let i of t) {
                            let t = h(e, i)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, p);
                    if (null === t) return null;
                    let i = m.get(t.type);
                    return void 0 !== i ? i : null;
                },
                g = (e, t) => h(e, t).length > 0;
        },
        66610: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => a });
            var s = i(53548),
                n = i(24709),
                r = i(88966),
                o = i(87138),
                l = i(46457);
            let a = (0, n.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, r.N)(),
                    t = (0, o.w)(),
                    i = (0, s.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, l.c)((e) => {
                    t?.object && i && i.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        68436: (e, t, i) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }), (t._Parser = t.parse = void 0));
            var s = i(88092);
            ((t.parse = function () {
                throw Error("You're trying to format an uncompiled message with react-intl without parser, please import from 'react-intl' instead");
            }),
                s.__exportStar(i(45700), t),
                (t._Parser = void 0));
        },
        74021: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => a });
            var s = i(14567),
                n = i(243),
                r = i(62151),
                o = i(33396);
            let l = () => 'SECRET';
            class a {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: i }) {
                    ((this.maxLogLevel = t), (this.secureFields = i), (this.additionalData = e));
                }
                formatMessage(e, t, i = {}, n) {
                    let r,
                        l = String(t instanceof Error && t.stack ? t.stack : t),
                        a = (0, o.A)({ ...this.additionalData, ...i });
                    return (Object.keys(a).length && (r = this.obfuscateData(a)), n) ? `${l} ${s(r)}` : [l, r];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, n.A)(e, t) && (0, r.A)(e, t, l());
                    return e;
                }
            }
        },
        88349: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => s });
            let s = (e) => {
                let t = e?.split(':')[0];
                return (t?.includes('.') && t?.split('.').pop()) || '';
            };
        },
        90852: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => u });
            var s = i(88800),
                n = i(53548),
                r = i(24709),
                o = i(66368),
                l = i(37556),
                a = i(88966);
            let u = (0, r.B)(
                { kind: 'provider', requiredProps: ['objectType', 'objectId', 'objectPosX', 'objectPosY'], pendingProps: ['objectId'], scope: 'object' },
                ({ children: e, objectId: t, objectPosX: i, objectPosY: r, objectType: u }) => {
                    let c = (0, a.N)(),
                        h = (0, n.useContext)(o.p)?.loadedSession,
                        d = [u, t, i, r].join(':'),
                        [m, p] = (0, n.useState)(() => ({ client: c, identity: d, blockSession: h, viewSession: c.createBlockViewSession() }));
                    (m.client !== c || m.identity !== d || m.blockSession !== h) &&
                        p({ client: c, identity: d, blockSession: h, viewSession: c.createBlockViewSession() });
                    let f = (0, n.useMemo)(
                        () => ({ activeViewSession: null, scope: { objectId: t, objectPosX: i, objectPosY: r, objectType: u }, viewSession: m.viewSession }),
                        [t, i, r, u, m.viewSession],
                    );
                    return (0, s.jsx)(l.l, { value: f, children: e });
                },
            );
        },
    },
]);
