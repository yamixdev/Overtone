(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1574],
    {
        4653: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => i });
            var n = r(95982),
                a = Object.defineProperty,
                o = (e, t, r) => (
                    ((e, t, r) => (t in e ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)))(e, 'symbol' != typeof t ? t + '' : t, r),
                    r
                );
            class i {
                constructor({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: t }) {
                    (o(this, 'brandLangs'),
                        o(this, 'brandDefaultLang'),
                        o(this, 'regionLangs'),
                        o(this, 'enableWideLanguageSelectWithBrandLangs'),
                        (this.brandLangs = e.langs),
                        (this.brandDefaultLang = e.defaultLang),
                        (this.regionLangs = e.regionLangs),
                        (this.enableWideLanguageSelectWithBrandLangs = t));
                }
                static parseAcceptLanguage(e) {
                    return n.parse(e).map(({ code: e }) => e);
                }
                getLang({ regionIsoName: e, urlLang: t, cookieLang: r, acceptLangs: n }) {
                    var a, o, i;
                    let s = e ? (null == (a = this.regionLangs) ? void 0 : a[e]) : void 0,
                        c = this.enableWideLanguageSelectWithBrandLangs ? this.brandLangs : null != (o = null == s ? void 0 : s.langs) ? o : this.brandLangs,
                        l = null != (i = null == s ? void 0 : s.defaultLang) ? i : this.brandDefaultLang;
                    return this.selectLang({ supportedLangs: c, defaultLang: l, urlLang: t, cookieLang: r, acceptLangs: n });
                }
                intersect(e, t) {
                    let r = new Set(t);
                    return e.filter((e) => r.has(e));
                }
                selectLang({ supportedLangs: e, defaultLang: t, urlLang: r, cookieLang: n, acceptLangs: a }) {
                    if ('string' == typeof r && e.includes(r)) return r;
                    let o = null != a ? a : [],
                        i = n ? [n, ...o] : o,
                        s = this.intersect(i, e)[0];
                    return void 0 !== s ? s : t;
                }
            }
        },
        17017: (e, t, r) => {
            'use strict';
            var n;
            (r.d(t, { Z: () => n }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(n || (n = {})));
        },
        19840: (e, t, r) => {
            'use strict';
            (r.d(t, { G: () => a }), r(46606));
            var n = r(91136);
            class a extends n.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, a.prototype));
                }
            }
        },
        36740: (e, t, r) => {
            'use strict';
            r.d(t, { u: () => p });
            var n = r(53548),
                a = r(59714),
                o = r(24709),
                i = r(23480),
                s = r(94126),
                c = r(8383),
                l = r(18117),
                u = r(93940),
                d = r(46457);
            let p = (0, o.n)({ event: 'Screen.Opened/Closed', kind: 'hook', requiredScopes: ['screen'] }, () => {
                let e = (0, n.useContext)(i.I),
                    { hash: t } = (0, l.g)(),
                    { screen: r, tab: o } = (0, u.j)(),
                    p = (0, n.useContext)(c.k)?.session,
                    { current: f } = (0, n.useRef)(Symbol()),
                    h = !!r,
                    m = (n) => {
                        if (!e || !p || !r?.pageId || void 0 === t || !h) return !1;
                        let i = {
                            hash: t,
                            pageId: r.pageId,
                            pageStyle: r.pageStyle,
                            pagePlacement: r.pagePlacement,
                            mainObjectType: r.mainObjectType,
                            mainObjectId: r.mainObjectId,
                            skeletonId: r.skeletonId,
                            viewUuid: r.screenViewUuid,
                            ...(o ?? s.Ve),
                        };
                        return (n ? p.open(f, () => (0, a.Fn)(e, i)) : p.close(f, () => (0, a.PO)(e, i)), !0);
                    },
                    [g, b] = (0, n.useState)(() => ({ session: p, send: m, opened: !1 })),
                    v = g;
                (g.session !== p && b((v = { session: p, send: m, opened: !1 })),
                    (0, n.useInsertionEffect)(() => {
                        h && void 0 !== t && (v.send = m);
                    }, [v, t, h, m]));
                let y = (0, d.c)((e, t) => {
                    e.send(t) && (e.opened = t);
                });
                ((0, n.useEffect)(
                    () => (
                        y(v, !0),
                        () => {
                            (v.opened && y(v, !1), v.session?.release(f));
                        }
                    ),
                    [f, v, y],
                ),
                    (0, n.useEffect)(() => {
                        y(v, !0);
                    }, [v, t, h, y]));
            });
        },
        42824: (e, t, r) => {
            'use strict';
            (r.d(t, { s: () => w }), r(4653));
            function n(e, t, r) {
                return ((t = i(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e);
            }
            function a(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        var r = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                        if (null != r) {
                            var n,
                                a,
                                o,
                                i,
                                s = [],
                                c = !0,
                                l = !1;
                            try {
                                if (((o = (r = r.call(e)).next), 0 === t)) {
                                    if (Object(r) !== r) return;
                                    c = !1;
                                } else for (; !(c = (n = o.call(r)).done) && (s.push(n.value), s.length !== t); c = !0);
                            } catch (e) {
                                ((l = !0), (a = e));
                            } finally {
                                try {
                                    if (!c && null != r.return && ((i = r.return()), Object(i) !== i)) return;
                                } finally {
                                    if (l) throw a;
                                }
                            }
                            return s;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (e) {
                            if ('string' == typeof e) return o(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            if (('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r)) return Array.from(e);
                            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return o(e, t);
                        }
                    })(e, t) ||
                    (function () {
                        throw TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function i(e) {
                var t = (function (e, t) {
                    if ('object' != typeof e || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || 'default');
                        if ('object' != typeof n) return n;
                        throw TypeError('@@toPrimitive must return a primitive value.');
                    }
                    return ('string' === t ? String : Number)(e);
                })(e, 'string');
                return 'symbol' == typeof t ? t : String(t);
            }
            function s(e, t) {
                var r,
                    n,
                    a = l(e, t, 'get');
                return ((r = e), (n = a).get ? n.get.call(r) : n.value);
            }
            function c(e, t, r) {
                var n = l(e, t, 'set');
                return (
                    (function (e, t, r) {
                        if (t.set) t.set.call(e, r);
                        else {
                            if (!t.writable) throw TypeError('attempted to set read only private field');
                            t.value = r;
                        }
                    })(e, n, r),
                    r
                );
            }
            function l(e, t, r) {
                if (!t.has(e)) throw TypeError('attempted to ' + r + ' private field on non-instance');
                return t.get(e);
            }
            function u(e, t, r) {
                if (!t.has(e)) throw TypeError('attempted to get private field on non-instance');
                return r;
            }
            function d(e, t) {
                if (t.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
            }
            function p(e, t, r) {
                (d(e, t), t.set(e, r));
            }
            function f(e, t) {
                (d(e, t), t.add(e));
            }
            var h = [
                ' daum[ /]',
                ' deusu/',
                ' yadirectfetcher',
                '(?:^| )site',
                '(?:^|[^g])news',
                '@[a-z]',
                '\\(at\\)[a-z]',
                '\\(github\\.com/',
                '\\[at\\][a-z]',
                '^12345',
                '^<',
                '^[\\w \\.\\-\\(\\)]+(/v?\\d+(\\.\\d+)?(\\.\\d{1,10})?)?$',
                '^[^ ]{50,}$',
                '^active',
                '^ad muncher',
                '^amaya',
                '^anglesharp/',
                '^anonymous',
                '^avsdevicesdk/',
                '^axios/',
                '^bidtellect/',
                '^biglotron',
                '^btwebclient/',
                '^castro',
                '^clamav[ /]',
                '^client/',
                '^cobweb/',
                '^coccoc',
                '^custom',
                '^ddg[_-]android',
                '^discourse',
                '^dispatch/\\d',
                '^downcast/',
                '^duckduckgo',
                '^facebook',
                '^fdm[ /]\\d',
                '^getright/',
                '^gozilla/',
                '^hatena',
                '^hobbit',
                '^hotzonu',
                '^hwcdn/',
                '^jeode/',
                '^jetty/',
                '^jigsaw',
                '^linkdex',
                '^lwp[-: ]',
                '^metauri',
                '^microsoft bits',
                '^movabletype',
                '^mozilla/\\d\\.\\d \\(compatible;?\\)$',
                '^mozilla/\\d\\.\\d \\w*$',
                '^navermailapp',
                '^netsurf',
                '^offline explorer',
                '^php',
                '^postman',
                '^postrank',
                '^python',
                '^read',
                '^reed',
                '^restsharp/',
                '^snapchat',
                '^space bison',
                '^svn',
                '^swcd ',
                '^taringa',
                '^test certificate info',
                '^thumbor/',
                '^tumblr/',
                '^user-agent:mozilla',
                '^valid',
                '^venus/fedoraplanet',
                '^w3c',
                '^webbandit/',
                '^webcopier',
                '^wget',
                '^whatsapp',
                '^xenu link sleuth',
                '^yahoo',
                '^yandex',
                '^zdm/\\d',
                '^zoom marketplace/',
                '^{{.*}}$',
                'adbeat\\.com',
                'appinsights',
                'archive',
                'ask jeeves/teoma',
                'bit\\.ly/',
                'bluecoat drtr',
                'bot',
                'browsex',
                'burpcollaborator',
                'capture',
                'catch',
                'check',
                'chrome-lighthouse',
                'chromeframe',
                'cloud',
                'crawl',
                'cryptoapi',
                'dareboost',
                'datanyze',
                'dataprovider',
                'dejaclick',
                'dmbrowser',
                'download',
                'evc-batch/',
                'feed',
                'firephp',
                'freesafeip',
                'gomezagent',
                'google',
                'headlesschrome/',
                'http',
                'httrack',
                'hubspot marketing grader',
                'hydra',
                'ibisbrowser',
                'images',
                'inspect',
                'iplabel',
                'ips-agent',
                'java',
                'library',
                'mail\\.ru/',
                'manager',
                'monitor',
                'morningscore/',
                'neustar wpm',
                'nutch',
                'offbyone',
                'optimize',
                'pageburst',
                'pagespeed',
                'perl',
                'phantom',
                'pingdom',
                'powermarks',
                'preview',
                'proxy',
                'ptst[ /]\\d',
                'reader',
                'rexx;',
                'rigor',
                'rss',
                'scan',
                'scrape',
                'search',
                'serp ?reputation ?management',
                'server',
                'sogou',
                'sparkler/',
                'speedcurve',
                'spider',
                'splash',
                'statuscake',
                'stumbleupon\\.com',
                'supercleaner',
                'synapse',
                'synthetic',
                'torrent',
                'tracemyfile',
                'transcoder',
                'trendsmapresolver',
                'twingly recon',
                'url',
                'virtuoso',
                'wappalyzer',
                'webglance',
                'webkit2png',
                'websitemetadataretriever',
                'whatcms/',
                'wordpress',
                'zgrab',
            ];
            !(function (e) {
                try {
                    RegExp('(?<! cu)bot').test('dangerbot');
                } catch (t) {
                    return e;
                }
                [
                    ['bot', '(?<! cu)bot'],
                    ['google', '(?<! (?:channel/|google/))google(?!(app|/google| pixel))'],
                    ['http', '(?<!(?:lib))http'],
                    ['java', 'java(?!;)'],
                    ['search', '(?<! ya(?:yandex)?)search'],
                ].forEach(function (t) {
                    var r = a(t, 2),
                        n = r[0],
                        o = r[1],
                        i = e.lastIndexOf(n);
                    ~i && e.splice(i, 1, o);
                });
            })(h);
            var m = new WeakMap(),
                g = new WeakMap(),
                b = new WeakSet(),
                v = new WeakSet();
            function y() {
                c(this, g, RegExp(s(this, m).join('|'), 'i'));
            }
            function O(e) {
                return s(this, m).indexOf(e.toLowerCase());
            }
            new ((function () {
                var e;
                function t(e) {
                    var r = this;
                    if (!(this instanceof t)) throw TypeError('Cannot call a class as a function');
                    return (
                        f(this, v),
                        f(this, b),
                        p(this, m, { writable: !0, value: void 0 }),
                        p(this, g, { writable: !0, value: void 0 }),
                        c(this, m, e || h.slice()),
                        u(this, b, y).call(this),
                        Object.defineProperties(
                            function (e) {
                                return r.test(e);
                            },
                            Object.entries(Object.getOwnPropertyDescriptors(t.prototype)).reduce(function (e, t) {
                                var o = a(t, 2),
                                    i = o[0],
                                    s = o[1];
                                return (
                                    'function' == typeof s.value && Object.assign(e, n({}, i, { value: r[i].bind(r) })),
                                    'function' == typeof s.get &&
                                        Object.assign(
                                            e,
                                            n({}, i, {
                                                get: function () {
                                                    return r[i];
                                                },
                                            }),
                                        ),
                                    e
                                );
                            }, {}),
                        )
                    );
                }
                return (
                    (e = [
                        {
                            key: 'pattern',
                            get: function () {
                                return new RegExp(s(this, g));
                            },
                        },
                        {
                            key: 'test',
                            value: function (e) {
                                return !!e && s(this, g).test(e);
                            },
                        },
                        {
                            key: 'find',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                                    t = e.match(s(this, g));
                                return t && t[0];
                            },
                        },
                        {
                            key: 'matches',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                                return s(this, m).filter(function (t) {
                                    return RegExp(t, 'i').test(e);
                                });
                            },
                        },
                        {
                            key: 'clear',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                                this.exclude(this.matches(e));
                            },
                        },
                        {
                            key: 'extend',
                            value: function () {
                                var e = this,
                                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                                ([].push.apply(
                                    s(this, m),
                                    t
                                        .filter(function (t) {
                                            return -1 === u(e, v, O).call(e, t);
                                        })
                                        .map(function (e) {
                                            return e.toLowerCase();
                                        }),
                                ),
                                    u(this, b, y).call(this));
                            },
                        },
                        {
                            key: 'exclude',
                            value: function () {
                                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = e.length; t--;) {
                                    var r = u(this, v, O).call(this, e[t]);
                                    r > -1 && s(this, m).splice(r, 1);
                                }
                                u(this, b, y).call(this);
                            },
                        },
                        {
                            key: 'spawn',
                            value: function (e) {
                                return new t(e || s(this, m));
                            },
                        },
                    ]),
                    (function (e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            ((n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in n && (n.writable = !0), Object.defineProperty(e, i(n.key), n));
                        }
                    })(t.prototype, e),
                    Object.defineProperty(t, 'prototype', { writable: !1 }),
                    t
                );
            })())();
            let w = 'funtech-lang';
        },
        46482: (e, t, r) => {
            'use strict';
            r.d(t, { g: () => c });
            var n = r(53548),
                a = r(24709),
                o = r(88966),
                i = r(87138),
                s = r(46457);
            let c = (0, a.n)({ event: 'LandingBlock.Started', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, o.N)(),
                    t = (0, i.w)(),
                    r = (0, n.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, s.c)(() => {
                    r?.started();
                });
            });
        },
        46606: (e, t, r) => {
            'use strict';
            var n;
            (r.d(t, { X: () => n }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(n || (n = {})));
        },
        53202: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => d });
            var n = r(53548),
                a = r(77573),
                o = r(24709),
                i = r(94126),
                s = r(23480),
                c = r(18117),
                l = r(93940),
                u = r(46457);
            let d = (0, o.n)({ event: 'Tab.Opened', kind: 'hook', requiredScopes: ['screen'] }, () => {
                let e = (0, n.useContext)(s.I),
                    { hash: t } = (0, c.g)(),
                    { screen: r, tab: o } = (0, l.j)();
                return (0, u.c)(({ tabId: n = o?.tabId ?? i.w, tabPos: s = o?.tabPos ?? i.Vn, isTabSelectedByDefault: c = o?.isTabSelectedByDefault ?? i.p6 } = {}) => {
                    e &&
                        r?.pageId &&
                        void 0 !== t &&
                        (0, a.TV)(e, {
                            hash: t,
                            pageId: r.pageId,
                            skeletonId: r.skeletonId,
                            mainObjectId: r.mainObjectId,
                            mainObjectType: r.mainObjectType,
                            tabId: n,
                            tabPos: s,
                            isTabSelectedByDefault: c,
                        });
                });
            });
        },
        57074: (e, t, r) => {
            'use strict';
            r.d(t, { YK: () => d });
            var n,
                a,
                o = r(88092),
                i = r(53548),
                s = r(2058);
            (!(function (e) {
                ((e.formatDate = 'FormattedDate'),
                    (e.formatTime = 'FormattedTime'),
                    (e.formatNumber = 'FormattedNumber'),
                    (e.formatList = 'FormattedList'),
                    (e.formatDisplayName = 'FormattedDisplayName'));
            })(n || (n = {})),
                (function (e) {
                    ((e.formatDate = 'FormattedDateParts'),
                        (e.formatTime = 'FormattedTimeParts'),
                        (e.formatNumber = 'FormattedNumberParts'),
                        (e.formatList = 'FormattedListParts'));
                })(a || (a = {})));
            var c = function (e) {
                var t = (0, s.A)(),
                    r = e.value,
                    n = e.children,
                    a = (0, o.__rest)(e, ['value', 'children']);
                return n(t.formatNumberToParts(r, a));
            };
            function l(e) {
                var t = function (t) {
                    var r = (0, s.A)(),
                        n = t.value,
                        a = t.children,
                        i = (0, o.__rest)(t, ['value', 'children']),
                        c = 'string' == typeof n ? new Date(n || 0) : n;
                    return a('formatDate' === e ? r.formatDateToParts(c, i) : r.formatTimeToParts(c, i));
                };
                return ((t.displayName = a[e]), t);
            }
            function u(e) {
                var t = function (t) {
                    var r = (0, s.A)(),
                        n = t.value,
                        a = t.children,
                        c = (0, o.__rest)(t, ['value', 'children']),
                        l = r[e](n, c);
                    if ('function' == typeof a) return a(l);
                    var u = r.textComponent || i.Fragment;
                    return i.createElement(u, null, l);
                };
                return ((t.displayName = n[e]), t);
            }
            function d(e) {
                return e;
            }
            ((c.displayName = 'FormattedNumberParts'),
                (c.displayName = 'FormattedNumberParts'),
                u('formatDate'),
                u('formatTime'),
                u('formatNumber'),
                u('formatList'),
                u('formatDisplayName'),
                l('formatDate'),
                l('formatTime'));
        },
        59724: (e, t, r) => {
            'use strict';
            r.d(t, { a: () => d });
            var n = r(88800),
                a = r(53548),
                o = r(8383),
                i = r(24709),
                s = r(88966);
            let c = new WeakMap();
            class l {
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
                    let r =
                        c.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                r = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                n = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                r();
                                            } finally {
                                                ((t = !1), e.length > 0 && n());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (r(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), n());
                                },
                            };
                        })();
                    (c.set(t, r), (this.queue = r));
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
            var u = r(97234);
            let d = (0, i.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let r = (0, s.N)(),
                        i = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === u.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [c, d] = (0, a.useState)(() => {
                            let e = new l(r.createScreenSession().screenViewUuid, r);
                            return { client: r, input: t, isReady: i, scope: i ? r.createScreenScope(t, e) : null, session: e };
                        });
                    if (c.client !== r || c.input.pageId !== t.pageId || c.input.skeletonId !== t.skeletonId) {
                        let a = new l(r.createScreenSession().screenViewUuid, r),
                            s = { client: r, input: t, isReady: i, scope: i ? r.createScreenScope(t, a) : null, session: a };
                        return (d(s), (0, n.jsx)(o.k, { value: s, children: e }));
                    }
                    if (
                        c.isReady !== i ||
                        c.input.mainObjectType !== t.mainObjectType ||
                        c.input.mainObjectId !== t.mainObjectId ||
                        c.input.displayReasonId !== t.displayReasonId ||
                        c.input.pageIdForFrom !== t.pageIdForFrom ||
                        c.input.pagePlacement !== t.pagePlacement ||
                        c.input.pageStyle !== t.pageStyle
                    ) {
                        let a = { ...c, input: t, isReady: i, scope: i ? r.createScreenScope(t, c.session) : null };
                        return (d(a), (0, n.jsx)(o.k, { value: a, children: e }));
                    }
                    return (0, n.jsx)(o.k, { value: c, children: e });
                },
            );
        },
        69629: (e) => {
            var t = Object.prototype.hasOwnProperty;
            function r(e) {
                return '[Throws: ' + (e ? e.message : '?') + ']';
            }
            function n(e) {
                var n = [];
                return (function e(a) {
                    if (null === a || 'object' != typeof a) return a;
                    if (-1 !== n.indexOf(a)) return '[Circular]';
                    if ((n.push(a), 'function' == typeof a.toJSON))
                        try {
                            var o = e(a.toJSON());
                            return (n.pop(), o);
                        } catch (e) {
                            return r(e);
                        }
                    if (Array.isArray(a)) {
                        var i = a.map(e);
                        return (n.pop(), i);
                    }
                    var s = Object.keys(a).reduce(function (n, o) {
                        return (
                            (n[o] = e(
                                (function (e, n) {
                                    if (t.call(e, n))
                                        try {
                                            return e[n];
                                        } catch (e) {
                                            return r(e);
                                        }
                                    return e[n];
                                })(a, o),
                            )),
                            n
                        );
                    }, {});
                    return (n.pop(), s);
                })(e);
            }
            ((e.exports = function (e, t, r) {
                return JSON.stringify(n(e), t, r);
            }),
                (e.exports.ensureProperties = n));
        },
        70598: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => c });
            var n = r(53548),
                a = r(24709),
                o = r(88966),
                i = r(87138),
                s = r(46457);
            let c = (0, a.n)({ event: 'LandingBlock.Navigated', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, o.N)(),
                    t = (0, i.w)(),
                    r = (0, n.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, s.c)((e) => {
                    t?.object &&
                        r &&
                        r.navigated({ ...e, from: e.from ?? t.snapshot.screen.pageId, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        77451: (e, t, r) => {
            'use strict';
            r.d(t, { Jt: () => o, TF: () => s, hZ: () => i });
            var n = function () {
                return (n =
                    Object.assign ||
                    function (e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var a in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e;
                    }).apply(this, arguments);
            };
            function a(e, t) {
                if (!t) return '';
                var r = '; ' + e;
                return !0 === t ? r : r + '=' + t;
            }
            function o(e) {
                return (function (e) {
                    for (var t = {}, r = e ? e.split('; ') : [], n = 0; n < r.length; n++) {
                        var a = r[n].split('='),
                            o = a.slice(1).join('=');
                        '"' === o[0] && (o = o.slice(1, -1));
                        try {
                            t[decodeURIComponent(a[0])] = o.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function i(e, t, r) {
                var o;
                document.cookie =
                    ((o = n({ path: '/' }, r)),
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
                                a('Expires', e.expires ? e.expires.toUTCString() : '') +
                                a('Domain', e.domain) +
                                a('Path', e.path) +
                                a('Secure', e.secure) +
                                a('SameSite', e.sameSite)
                            );
                        })(o));
            }
            function s(e, t) {
                i(e, '', n(n({}, t), { expires: -1 }));
            }
        },
        77573: (e, t, r) => {
            'use strict';
            ((t.TV = function (e, t) {
                let { skeletonId: r = '', mainObjectType: o = a.DomainObjectType.NonApplicable, mainObjectId: i = '' } = t,
                    s = (0, n.makeMetaParams)(1),
                    c = { ...t, skeletonId: r, mainObjectType: o, mainObjectId: i, _meta: s };
                e.trackEvent('Tab.Opened', c);
            }),
                (t.hc = function (e, t) {
                    let { skeletonId: r = '', mainObjectType: o = a.DomainObjectType.NonApplicable, mainObjectId: i = '' } = t,
                        s = (0, n.makeMetaParams)(1),
                        c = { ...t, skeletonId: r, mainObjectType: o, mainObjectId: i, _meta: s };
                    e.trackEvent('Tab.Loaded', c);
                }));
            let n = r(8198),
                a = r(97234);
        },
        81862: (e, t, r) => {
            'use strict';
            r.d(t, { h: () => s });
            var n = r(88800),
                a = r(53548),
                o = r(24709),
                i = r(30958);
            let s = (0, o.B)(
                { kind: 'provider', requiredProps: ['tabId', 'tabPos', 'isTabSelectedByDefault'], scope: 'tab' },
                ({ children: e, isTabSelectedByDefault: t, tabId: r, tabPos: o }) => {
                    let s = (0, a.useMemo)(() => ({ isTabSelectedByDefault: t, tabId: r, tabPos: o }), [t, r, o]);
                    return (0, n.jsx)(i.F, { value: s, children: e });
                },
            );
        },
        87138: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => u });
            var n = r(53548),
                a = r(66368),
                o = r(84837),
                i = r(37556),
                s = r(8383),
                c = r(30958),
                l = r(94126);
            let u = () => {
                let e = (0, n.useContext)(s.k),
                    t = e?.isReady ? e.scope : null,
                    r = (0, n.useContext)(c.F) ?? l.Ve,
                    u = (0, n.useContext)(o.S),
                    d = (0, n.useContext)(a.p),
                    p = (0, n.useContext)(i.l),
                    f = (0, n.useMemo)(() => (t && d ? { block: d.scope, filter: u, object: p?.scope ?? null, screen: t, tab: r } : null), [d, u, p, t, r]);
                return (0, n.useMemo)(() => (d && f ? { block: d, object: p, snapshot: f } : null), [d, p, f]);
            };
        },
        89916: (e, t, r) => {
            'use strict';
            r.d(t, { GX: () => o.G, X1: () => n.X, m5: () => a.m });
            var n = r(46606),
                a = r(91136),
                o = r(19840);
            r(17017);
        },
        91136: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => a });
            class n extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: r = 'E_INTERNAL', data: a = {}, ...o } = t,
                        i = e || 'Internal error';
                    (super(i, o), (this.message = i), (this.code = r), (this.data = a), (this.stack = Error(i).stack), Object.setPrototypeOf(this, n.prototype));
                }
            }
            class a extends n {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...r } = {}) {
                    (super(e, { code: t, ...r }), Object.setPrototypeOf(this, a.prototype));
                }
            }
        },
        91177: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => c });
            var n = r(53548),
                a = r(24709),
                o = r(88966),
                i = r(87138),
                s = r(46457);
            let c = (0, a.n)({ event: 'LandingBlock.Showed/Hidden', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, (e = {}) => {
                let { createObserver: t, delayMs: r = 1e3, enabled: a = !0, onVisibilityChange: c, threshold: l = 0.8 } = e,
                    u = (0, o.N)(),
                    d = (0, i.w)(),
                    p = d?.object,
                    f = d?.block.claimLoadedSession,
                    h = !!d,
                    m = (0, s.c)((e, t) => (d && d.object === e && d.block.claimLoadedSession === t ? u.createBlockReporter(d.snapshot) : null)),
                    g = (0, n.useRef)(t),
                    b = (0, n.useRef)(c),
                    [v, y] = (0, n.useState)(null),
                    O = (0, s.c)((e) => y(e));
                ((g.current = t), (b.current = c));
                let w = !!t;
                return (
                    (0, n.useEffect)(() => {
                        if (!a || !v || !p || 'string' != typeof p.scope.objectId || !f || !h || (!w && !v.ownerDocument.defaultView?.IntersectionObserver)) return;
                        let e = !1,
                            t = null,
                            n = null,
                            o = null,
                            i = () => {
                                o && (clearTimeout(o), (o = null));
                                let e = t?.hide();
                                (p.activeViewSession === t && (p.activeViewSession = null), (t = null), e && (n?.hidden({ viewUuid: e }), b.current?.(!1)), (n = null));
                            },
                            s = (
                                g.current ??
                                ((e, t, r) => {
                                    let n = r.ownerDocument.defaultView?.IntersectionObserver;
                                    if (!n) throw Error('IntersectionObserver is not available');
                                    return new n(e, t);
                                })
                            )(
                                (a) => {
                                    e ||
                                        a.forEach((e) => {
                                            if (!(e.isIntersecting && e.intersectionRatio >= l)) return void i();
                                            o ||
                                                t?.isVisible ||
                                                (o = setTimeout(() => {
                                                    o = null;
                                                    let e = m(p, f);
                                                    if (!e) return;
                                                    ((t ??= f() ?? p.viewSession), (p.activeViewSession = t));
                                                    let r = t.show();
                                                    r && ((n = e), e.showed({ viewUuid: r }), b.current?.(!0));
                                                }, r));
                                        });
                                },
                                { threshold: l },
                                v,
                            );
                        return (
                            s.observe(v),
                            () => {
                                ((e = !0), i(), s.unobserve(v), s.disconnect());
                            }
                        );
                    }, [v, f, p, r, a, w, l, h, m]),
                    O
                );
            });
        },
        95982: (e) => {
            var t = /((([a-zA-Z]+(-[a-zA-Z0-9]+){0,2})|\*)(;q=[0-1](\.[0-9]+)?)?)*/g;
            function r(e) {
                return (e || '')
                    .match(t)
                    .map(function (e) {
                        if (e) {
                            var t = e.split(';'),
                                r = t[0].split('-'),
                                n = 3 === r.length;
                            return { code: r[0], script: n ? r[1] : null, region: n ? r[2] : r[1], quality: t[1] ? parseFloat(t[1].split('=')[1]) : 1 };
                        }
                    })
                    .filter(function (e) {
                        return e;
                    })
                    .sort(function (e, t) {
                        return t.quality - e.quality;
                    });
            }
            ((e.exports.parse = r),
                (e.exports.pick = function (e, t, n) {
                    if (((n = n || {}), !e || !e.length || !t)) return null;
                    'string' == typeof t && (t = r(t));
                    for (
                        var a = e.map(function (e) {
                                var t = e.split('-'),
                                    r = 3 === t.length;
                                return { code: t[0], script: r ? t[1] : null, region: r ? t[2] : t[1] };
                            }),
                            o = 0;
                        o < t.length;
                        o++
                    )
                        for (
                            var i = t[o],
                                s = i.code.toLowerCase(),
                                c = i.region ? i.region.toLowerCase() : i.region,
                                l = i.script ? i.script.toLowerCase() : i.script,
                                u = 0;
                            u < a.length;
                            u++
                        ) {
                            var d = a[u].code.toLowerCase(),
                                p = a[u].script ? a[u].script.toLowerCase() : a[u].script,
                                f = a[u].region ? a[u].region.toLowerCase() : a[u].region;
                            if (s === d && (n.loose || !l || l === p) && (n.loose || !c || c === f)) return e[u];
                        }
                    return null;
                }));
        },
    },
]);
