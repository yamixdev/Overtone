(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4219],
    {
        14567: (e, t) => {
            (e.exports = function (e, t, o, s) {
                return JSON.stringify(e, r(t, s), o);
            }).getSerialize = r;
            function r(e, t) {
                var r = [],
                    o = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return r[0] === t ? '[Circular ~]' : '[Circular ~.' + o.slice(0, r.indexOf(t)).join('.') + ']';
                        }),
                    function (s, n) {
                        if (r.length > 0) {
                            var i = r.indexOf(this);
                            (~i ? r.splice(i + 1) : r.push(this), ~i ? o.splice(i, 1 / 0, s) : o.push(s), ~r.indexOf(n) && (n = t.call(this, s, n)));
                        } else r.push(n);
                        return null == e ? n : e.call(this, s, n);
                    }
                );
            }
        },
        22834: () => {},
        23877: (e, t, r) => {
            'use strict';
            var o;
            (r.d(t, { Q: () => s, c: () => o }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(o || (o = {})));
            let s = { [o.ERROR]: 'error', [o.WARNING]: 'warn', [o.INFO]: 'info', [o.DEBUG]: 'debug', [o.TRACE]: 'trace' };
        },
        44084: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => n });
            var o = r(23877),
                s = r(74021);
            class n extends s.q {
                disableLogToConsole;
                constructor(e) {
                    (super(e), (this.disableLogToConsole = e.disableLogToConsole));
                }
                info(e, t) {
                    this.maxLogLevel >= o.c.INFO && this.logToConsole(o.c.INFO, e, t);
                }
                debug(e, t) {
                    this.maxLogLevel >= o.c.DEBUG && this.logToConsole(o.c.DEBUG, e, t);
                }
                trace(e, t) {
                    this.maxLogLevel >= o.c.TRACE && this.logToConsole(o.c.TRACE, e, t);
                }
                warn(e, t) {
                    (this.maxLogLevel >= o.c.WARNING && this.logToConsole(o.c.WARNING, e, t), this.sendToErrorBooster(o.c.WARNING, e, t));
                }
                error(e, t) {
                    (this.maxLogLevel >= o.c.ERROR && this.logToConsole(o.c.ERROR, e, t), this.sendToErrorBooster(o.c.ERROR, e, t));
                }
                log(e, t) {
                    this.logToConsole(o.c.INFO, e, t);
                }
                logToConsole(e, t, r) {
                    if (this.disableLogToConsole) return;
                    let s = o.Q[e];
                    console[s](...this.formatMessage(e, t, r));
                }
                sendToErrorBooster(e, t, r) {
                    window.Ya.Rum.logError({ message: t, level: e, additional: { data: r ? this.obfuscateData({ ...this.additionalData, ...r }) : {} } });
                }
            }
        },
        61365: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 70433));
        },
        69629: (e) => {
            var t = Object.prototype.hasOwnProperty;
            function r(e) {
                return '[Throws: ' + (e ? e.message : '?') + ']';
            }
            function o(e) {
                var o = [];
                return (function e(s) {
                    if (null === s || 'object' != typeof s) return s;
                    if (-1 !== o.indexOf(s)) return '[Circular]';
                    if ((o.push(s), 'function' == typeof s.toJSON))
                        try {
                            var n = e(s.toJSON());
                            return (o.pop(), n);
                        } catch (e) {
                            return r(e);
                        }
                    if (Array.isArray(s)) {
                        var i = s.map(e);
                        return (o.pop(), i);
                    }
                    var a = Object.keys(s).reduce(function (o, n) {
                        return (
                            (o[n] = e(
                                (function (e, o) {
                                    if (t.call(e, o))
                                        try {
                                            return e[o];
                                        } catch (e) {
                                            return r(e);
                                        }
                                    return e[o];
                                })(s, n),
                            )),
                            o
                        );
                    }, {});
                    return (o.pop(), a);
                })(e);
            }
            ((e.exports = function (e, t, r) {
                return JSON.stringify(o(e), t, r);
            }),
                (e.exports.ensureProperties = o));
        },
        70433: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => f }));
            var o = r(88800),
                s = r(53548),
                n = r(75994),
                i = r(44084),
                a = r(66363);
            let l = new i.r({ maxLogLevel: n.cm.DEBUG, secureFields: a.xW, disableLogToConsole: !0 }),
                c = (e) => {
                    let { error: t, logPrefix: r, assetPrefix: n } = e;
                    return (
                        (0, s.useEffect)(() => {
                            l.error('['.concat(r, '] ').concat(t.message), { additional: t, type: 'error-boundary' });
                        }, [t, r]),
                        (0, o.jsxs)('html', {
                            children: [
                                (0, o.jsxs)('head', {
                                    children: [
                                        (0, o.jsx)('link', {
                                            rel: 'preload',
                                            as: 'font',
                                            href: ''.concat(n, '/fonts/YSText-Regular.woff2'),
                                            type: 'font/woff2',
                                            crossOrigin: '',
                                        }),
                                        (0, o.jsx)('link', {
                                            rel: 'preload',
                                            as: 'font',
                                            href: ''.concat(n, '/fonts/YSText-Medium.woff2'),
                                            type: 'font/woff2',
                                            crossOrigin: '',
                                        }),
                                        (0, o.jsx)('link', {
                                            rel: 'preload',
                                            as: 'font',
                                            href: ''.concat(n, '/fonts/YSText-Bold.woff2'),
                                            type: 'font/woff2',
                                            crossOrigin: '',
                                        }),
                                        (0, o.jsx)('link', {
                                            rel: 'preload',
                                            as: 'font',
                                            href: ''.concat(n, '/fonts/YSMusic-HeadlineBold.woff2'),
                                            type: 'font/woff2',
                                            crossOrigin: '',
                                        }),
                                        (0, o.jsx)('link', { rel: 'stylesheet', href: ''.concat(n, '/styles/fonts.css') }),
                                    ],
                                }),
                                (0, o.jsx)('body', {
                                    className: 'ym-font-music',
                                    children: (0, o.jsx)('div', {
                                        style: { display: 'grid', placeItems: 'center', height: '100dvh', textAlign: 'center', margin: '0.5rem' },
                                        children: '\xabApplication error: a client-side exception has occurred (see the browser console for more information)\xbb',
                                    }),
                                }),
                            ],
                        })
                    );
                };
            function f(e) {
                let { error: t } = e;
                return (0, o.jsx)(c, { error: t, logPrefix: 'Desktop application fatal error', assetPrefix: '' });
            }
            r(22834);
        },
        74021: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => l });
            var o = r(14567),
                s = r(243),
                n = r(62151),
                i = r(33396);
            let a = () => 'SECRET';
            class l {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: r }) {
                    ((this.maxLogLevel = t), (this.secureFields = r), (this.additionalData = e));
                }
                formatMessage(e, t, r = {}, s) {
                    let n,
                        a = String(t instanceof Error && t.stack ? t.stack : t),
                        l = (0, i.A)({ ...this.additionalData, ...r });
                    return (Object.keys(l).length && (n = this.obfuscateData(l)), s) ? `${a} ${o(n)}` : [a, n];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, s.A)(e, t) && (0, n.A)(e, t, a());
                    return e;
                }
            }
        },
        75994: (e, t, r) => {
            'use strict';
            r.d(t, { cm: () => o.c });
            var o = r(23877);
            r(74021);
        },
    },
    (e) => {
        (e.O(0, [4389, 4146, 8703, 2662, 6904, 6363, 763, 2670, 7358], () => e((e.s = 61365))), (_N_E = e.O()));
    },
]);
