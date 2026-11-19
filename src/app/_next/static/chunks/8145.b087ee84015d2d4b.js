'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8145],
    {
        8145: (e, t, r) => {
            (r.r(t), r.d(t, { createDesktopContainer: () => e9 }));
            var o = r(98283),
                i = r(30282),
                s = r(77348),
                n = r(40441),
                a = r(8819),
                u = r(32813),
                l = r(54264),
                g = r(75994),
                c = r(44084),
                d = r(52028),
                h = r(27253),
                p = r(10285),
                m = r(42668),
                G = r(9519),
                f = r(55532);
            class v extends f.X {
                async getOutageNotice(e) {
                    return (
                        await this.httpClient.get(
                            'v1/apps/music/properties/outage-notice',
                            this.createHttpOptions({ timeoutKey: 'getOutageNotice', signal: null == e ? void 0 : e.signal }, { withoutHeaders: !0 }),
                        )
                    ).json();
                }
                constructor(e, t) {
                    (super(e, t), (0, G._)(this, 'httpClient', void 0), (0, G._)(this, 'config', void 0), (this.httpClient = e), (this.config = t));
                }
            }
            var w = r(77584),
                k = r(33850),
                y = r(86057),
                R = r(82740),
                V = r(32030),
                P = r(44928),
                C = r(7527),
                U = r(30868),
                b = r(25454),
                L = r(94899),
                A = r(46414),
                D = r(29636),
                O = r(27822),
                S = r(7809),
                z = r(64966),
                E = r(54300),
                x = r(82556),
                _ = r(24041),
                T = r(66880),
                M = r(58309),
                q = r(97860),
                B = r(96614),
                H = r(51751),
                N = r(63111),
                Z = r(61624),
                F = r(93452),
                I = r(87671),
                W = r(85281),
                X = r(2410),
                Y = r(28800),
                $ = r(60520),
                Q = r(39964),
                K = r(80500),
                j = r(83692),
                J = r(35486),
                ee = r(63744),
                et = r(95212),
                er = r(27114),
                eo = r(7588),
                ei = r(48018),
                es = r(5993),
                en = r(11551),
                ea = r(8868),
                eu = r(9176),
                el = r(92360),
                eg = r(78572),
                ec = r(14372),
                ed = r(22e3),
                eh = r(20049),
                ep = r(66363),
                em = r(31015),
                eG = r(70030),
                ef = r(96820),
                ev = r(53647),
                ew = r(70844),
                ek = r(31556),
                ey = r(8438),
                eR = r(15253),
                eV = r(32808),
                eP = r(4370),
                eC = r(99890),
                eU = r(44698);
            let eb = (e) => (void 0 === e ? 'missing' : e ? 'present' : 'empty');
            class eL extends eU.P {
                check() {
                    if (!this.dataIsLoaded) return;
                    let e = this.passportLogin,
                        t = this.token,
                        r = this.tokenOwnerLogin,
                        o = this.isOAuthPage ? 'oauth' : 'product',
                        i = e && r ? (e === r ? 'match' : 'mismatch') : 'unavailable',
                        s = (s) => ({
                            stage: 'authorization-decision',
                            page: o,
                            token: t ? 'present' : 'missing',
                            passportLogin: eb(e),
                            tokenOwnerLogin: eb(r),
                            loginComparison: i,
                            decision: s,
                        });
                    if (!e && t) {
                        (this.reportAuthorizationDecision(s('remove-token-reload'), 'passport-login-missing'), this.removeToken(), this.reloadPage());
                        return;
                    }
                    if (!t && e && !this.isOAuthPage) {
                        (this.reportAuthorizationDecision(s('redirect-authorization'), 'missing-token'), this.redirectToAuthorizationUrl());
                        return;
                    }
                    if ('string' == typeof e && 'string' == typeof r && e && r && e !== r) {
                        (this.reportAuthorizationDecision(s('redirect-oauth'), 'login-mismatch'), this.redirectToOAuthUrl());
                        return;
                    }
                    this.reportAuthorizationDecision(s('continue'));
                }
                get isOAuthPage() {
                    return window.location.pathname.endsWith('/oauth');
                }
                getRedirectUri() {
                    let e = ''.concat(this.pathname).concat(this.searchParams ? '?'.concat(this.searchParams) : '');
                    e.charAt(0) === eP.Z.main.href && (e = e.substring(1));
                    let t = new URLSearchParams({ redirectUri: e, language: this.language });
                    return ''.concat(origin, '/oauth?').concat(t.toString());
                }
                get oauthUrl() {
                    let {
                            oauthCredentials: { host: e, clientId: t },
                        } = this.config,
                        r = (0, p.r)(e, eV.r.RU, m.B),
                        o = new URL(''.concat(r, '/authorize')),
                        i = this.getRedirectUri();
                    return (
                        o.searchParams.append('response_type', 'token'),
                        o.searchParams.append('display', 'popup'),
                        o.searchParams.append('scope', 'music:content'),
                        o.searchParams.append('scope', 'music:read'),
                        o.searchParams.append('scope', 'music:write'),
                        o.searchParams.append('client_id', t),
                        o.searchParams.append('redirect_uri', i),
                        o.searchParams.append('state', this.oauthState),
                        o.searchParams.append('origin', this.passportOrigin),
                        o.searchParams.append('language', this.language),
                        o.toString()
                    );
                }
                get authorizationUrl() {
                    let e = this.getPassportHostWithTld(eV.r.RU, m.B);
                    if (!e) return;
                    let t = new URL(''.concat(e, '/auth'));
                    return (
                        t.searchParams.append('noreturn', '1'),
                        t.searchParams.append('origin', this.passportOrigin),
                        t.searchParams.append('language', this.language),
                        t.searchParams.append('retpath', this.oauthUrl),
                        t.toString()
                    );
                }
                getAuthorizationUrlWithParams(e) {
                    let t = this.getPassportHostWithTld(this.tld, m.B);
                    if (t) return ''.concat(t, '/auth?').concat(e.toString());
                }
                get childPageUrl() {
                    let e = this.getPassportHostWithTld(this.tld, m.B);
                    if (!e) return;
                    let t = new URLSearchParams({ origin: this.passportOrigin, retpath: this.oauthUrl, language: this.language });
                    return ''.concat(e, '/auth/child/restrict?').concat(t.toString());
                }
                reloadPage() {
                    window.location.reload();
                }
                redirectToOAuthUrl() {
                    this.oauthUrl && this.redirect(this.oauthUrl);
                }
                redirectToAuthorizationUrl() {
                    this.authorizationUrl && this.redirect(this.authorizationUrl);
                }
                redirectToChildPageUrl() {
                    this.childPageUrl && this.redirect(this.childPageUrl);
                }
                setTokenOwnerLogin(e) {
                    this.tokenOwnerLogin = e;
                }
                setDataIsLoaded() {
                    this.dataIsLoaded = !0;
                }
                setToken(e) {
                    let t = (0, eC.C8)(e.expiresIn),
                        r = this.oauthState;
                    if (!e.state || !r)
                        return (
                            (0, eC.uV)({ stage: 'token-storage', state: 'missing', write: 'skipped', readback: 'not-attempted', ttl: t, result: 'state-missing' }),
                            'state-missing'
                        );
                    if (e.state !== r)
                        return (
                            (0, eC.uV)({ stage: 'token-storage', state: 'mismatch', write: 'skipped', readback: 'not-attempted', ttl: t, result: 'state-mismatch' }),
                            'state-mismatch'
                        );
                    this.storage.set(eR.c.Oauth, e.token, { expires: Math.floor(e.expiresIn / 86400) });
                    let o = !!this.storage.get(eR.c.Oauth),
                        i = o ? 'stored' : 'readback-missing';
                    return ((0, eC.uV)({ stage: 'token-storage', state: 'match', write: 'attempted', readback: o ? 'present' : 'missing', ttl: t, result: i }), i);
                }
                get token() {
                    if (this.passportLogin) return this.storage.get(eR.c.Oauth) || void 0;
                }
                removeToken() {
                    this.storage.remove(eR.c.Oauth);
                }
                updateOauthState() {
                    let e = Math.round(1e11 * Math.random()).toString(16);
                    this.storage.set(eR.c.OauthState, e, { expires: 1 });
                }
                get oauthState() {
                    return this.storage.get(eR.c.OauthState) || '';
                }
                reportAuthorizationDecision(e, t) {
                    let r = JSON.stringify(e);
                    this.reportedAuthorizationDecisions.has(r) ||
                        (this.reportedAuthorizationDecisions.add(r), t && (0, eC.uV)({ stage: 'attempt-start', trigger: t }), (0, eC.uV)(e));
                }
                constructor(e, t, r) {
                    (super(e, t),
                        (0, G._)(this, 'language', void 0),
                        (0, G._)(this, 'dataIsLoaded', void 0),
                        (0, G._)(this, 'tokenOwnerLogin', void 0),
                        (0, G._)(this, 'reportedAuthorizationDecisions', void 0),
                        (this.language = r),
                        (this.dataIsLoaded = !1),
                        (this.reportedAuthorizationDecisions = new Set()),
                        this.oauthState || this.updateOauthState(),
                        this.check());
                }
            }
            class eA extends eL {
                get token() {
                    return this.storage.get(eR.c.Oauth) || void 0;
                }
                loadDataFromElectron() {
                    Promise.allSettled([this.loadPassportLogin(), this.loadYandexUid()]).then(() => {
                        (this.setDataIsLoaded(), this.check());
                    });
                }
                async loadPassportLogin() {
                    if (window.musicDesktop) {
                        let e = await window.musicDesktop.authorization.getPassportLogin();
                        return ((this.passportLoginFromElectron = e), e);
                    }
                    return Promise.resolve(void 0);
                }
                async loadYandexUid() {
                    if (window.musicDesktop) {
                        let e = await window.musicDesktop.authorization.getYandexUid();
                        return ((this.yadexUidFromElectron = e), e);
                    }
                    return Promise.resolve(void 0);
                }
                get passportLogin() {
                    return this.passportLoginFromElectron;
                }
                get yandexUid() {
                    return this.yadexUidFromElectron;
                }
                constructor(e, t, r) {
                    (super(e, t, r), (0, G._)(this, 'passportLoginFromElectron', void 0), (0, G._)(this, 'yadexUidFromElectron', void 0), this.loadDataFromElectron());
                }
            }
            var eD = r(55267),
                eO = r(3629),
                eS = r(23405),
                ez = r(72694);
            class eE {
                onChangeLanguage() {
                    window.location.reload();
                }
            }
            var ex = r(83602),
                e_ = r(66059),
                eT = r(42953),
                eM = r(70787),
                eq = r(12149),
                eB = r(83210),
                eH = r(223),
                eN = r(8193),
                eZ = r(43540),
                eF = r(4086),
                eI = r(71575),
                eW = r(3744),
                eX = r(80643),
                eY = r(87123),
                e$ = r(64965),
                eQ = r(74527),
                eK = r(83620),
                ej = r(85230),
                eJ = r(47720);
            let e0 = (e) => {
                let { authorization: t, cacheController: r, httpClient: o, i18nStorage: i, prefixUrl: s, publicConfig: n } = e,
                    a = i.getLanguage(),
                    u = n.resources.musicExternalApi,
                    l = {
                        prefixUrl: s,
                        retryPolicyConfig: u.retryPolicyConfig,
                        timeouts: u.timeouts.accountResource,
                        params: { common: { oauth: t.token, client: (0, ej._)(), device: (0, eJ.h)(), language: a } },
                    };
                return r ? new ef.wV(o, l, { cacheController: r }) : new eK.Q(o, l);
            };
            var e4 = r(72882),
                e8 = r(39968);
            function e2(e) {
                let {
                        authorization: t,
                        httpClientFactory: r,
                        i18nStorage: o,
                        platformSecret: i,
                        prefixUrl: s,
                        publicConfig: n,
                        slam: a,
                        storage: u,
                        useResourcesFileInfo: l = !1,
                    } = e,
                    g = r(),
                    c = o.getLanguage(),
                    d = n.resources.musicExternalApi,
                    h = {
                        prefixUrl: s,
                        retryPolicyConfig: d.retryPolicyConfig,
                        timeouts: d.timeouts[l ? 'resourcesResource' : 'getFileInfoResource'],
                        params: { common: { oauth: t.token, client: (0, ej._)(), device: (0, eJ.h)(), language: c } },
                    },
                    p = a.repositoryContainer.fileStorage,
                    m = a.repositoryContainer.tracksRepository,
                    G = a.repositoryContainer.usersTracksRepository;
                return p && m && G
                    ? new (l ? ef.mK : ef.d7)(g, h, {
                          fileStorage: p,
                          tracksRepository: m,
                          usersTracksRepository: G,
                          hooks: a.hooks,
                          variables: {
                              get uid() {
                                  return u.get(eR.c.YmUid);
                              },
                              secretKey: i,
                          },
                      })
                    : new (l ? e4.K : e8.v)(g, h);
            }
            let e1 = (e) => {
                let { resource: t, resourceName: r, slam: o } = e,
                    i = o.cacheController;
                return i ? (0, ef._2)({ resource: t, cacheController: i, config: { common: { resourceName: r }, enabled: !0, priority: ef.OU.HIGH, ttl: 6048e5 } }) : t;
            };
            var e3 = r(71625),
                e5 = r(54020);
            let e6 = (e, t) => {
                let r = e.get(eF.oo),
                    o = e.get(eF.U2),
                    i = e.get(eF.Zf),
                    s = o.get(eR.c.YnisonDeviceId);
                s || ((s = (0, e5.A)()), o.set(eR.c.YnisonDeviceId, s));
                let n = {
                        info: { app_name: 'Desktop', app_version: (0, eB.B)() || '', title: 'Music Desktop App', device_id: s, type: e3.bq.WEB_DESKTOP },
                        volumeGranularity: 20,
                        get defaultVolume() {
                            var a;
                            return null != (a = r.get(eR.c.YmPlayerVolume)) ? a : void 0;
                        },
                    },
                    u = e.get(eF.WA).getPassportUid(),
                    l = e.get(eF.QG),
                    g = e.get(eF.V4),
                    c = e.get(eF.UB),
                    d = e.get(eF.Tq),
                    h = [new e3.zT(c)];
                return (
                    d && h.push(new e3.qP(d)),
                    new e3.Jd({
                        logger: i,
                        deviceConfig: n,
                        multiAuthUserId: u,
                        oauth: l.token,
                        ynisonConnectionConfig: g.ynisonConnectionConfig,
                        metricsTransport: h,
                        variables: {
                            newConnector: t,
                            isShadow: !0,
                            // for PulseSync: BEGIN resolve the local playback account without connecting to Ynison
                            get puid() {
                                return e.get(eF.WA).getPassportUid();
                            },
                            // for PulseSync: END resolve the local playback account without connecting to Ynison
                        },
                    })
                );
            };
            var e7 = r(10466);
            async function e9(e) {
                let { tld: t, env: G, publicConfig: f, customApiPrefixUrl: eV } = e,
                    eP = (0, eq.u)(),
                    eC = (0, i.u0)(f, t, eV),
                    eU = (0, i.Ef)(f, eP),
                    eb = await (0, eS.B)(G),
                    eL = {},
                    eK = new n.Dt()
                        .registerMany({
                            [eF.SX]: (0, n.Gr)(() => G),
                            [eF.S1]: (0, n.Gr)(() => (0, eX.k)()),
                            // for PulseSync: BEGIN enable desktop mocks only when configuration contains rules
                            [eF.V4]: (0, n.Gr)((e) => {
                                const storage = e.get(eF.U2);
                                let configuration = storage.get(h.L) ?? storage.get(h.L, false);
                                let hasMocks = false;

                                try {
                                    if (typeof configuration === 'string') {
                                        const trimmed = configuration.trim();
                                        // An external URL is an explicitly configured source of mock rules.
                                        if (/^https?:\/\//i.test(trimmed)) {
                                            hasMocks = true;
                                        } else if (trimmed) {
                                            configuration = JSON.parse(trimmed);
                                        }
                                    }
                                    if (!hasMocks && configuration && !Array.isArray(configuration) &&
                                        typeof configuration === 'object' && 'value' in configuration) {
                                        configuration = configuration.value;
                                        if (typeof configuration === 'string') {
                                            const trimmed = configuration.trim();
                                            if (/^https?:\/\//i.test(trimmed)) {
                                                hasMocks = true;
                                            } else {
                                                configuration = JSON.parse(trimmed);
                                            }
                                        }
                                    }
                                    if (!hasMocks) {
                                        hasMocks = Array.isArray(configuration) && configuration.some(
                                            (rule) => rule && typeof rule.url === 'string' && rule.url.trim().length > 0
                                        );
                                    }
                                } catch (_) {
                                    hasMocks = false;
                                }

                                return {
                                    ...f,
                                    mocks: { ...f.mocks, enabled: hasMocks },
                                };
                            }),
                            // for PulseSync: END enable desktop mocks only when configuration contains rules
                            [eF.xF]: (0, n.Gr)(() => null),
                            [eF.qt]: (0, n.Gr)(() => eC),
                            [eF.P0]: (0, n.Gr)(() => new s.q(eb)),
                            [eF.Zi]: (0, n.Gr)(() => new ez.Y(eL)),
                        })
                        .register(
                            eF.WA,
                            (0, n.Gr)((e) => {
                                let t = e.get(eF.Zi);
                                return new eZ.V(t);
                            }),
                        )
                        .registerMany({
                            [eF.Zf]: (0, n.Gr)((e) => {
                                let t = e.get(eF.P0).get(eO.qV);
                                return new c.r({
                                    maxLogLevel: g.cm.DEBUG,
                                    secureFields: ep.xW,
                                    disableLogToConsole: !t,
                                    additionalData: {
                                        get puid() {
                                            return e.get(eF.WA).getPassportUid();
                                        },
                                    },
                                });
                            }),
                            [eF.iP]: (0, n.Gr)(() => {
                                let e = (0, em.wS)('/service-worker-cache.js');
                                return (e.initialize(), e);
                            }),
                            [eF.RG]: (0, n.Gr)(async (e) => {
                                let {
                                    mocks: { enabled: o, mocksProviderUrl: i, urlCapturePattern: s },
                                } = e.get(eF.V4);
                                if (!o) return () => Promise.resolve(null);
                                let { initMocks: n } = await Promise.all([r.e(8019), r.e(3037)]).then(r.bind(r, 33037)),
                                    a = e.get(eF.U2),
                                    u = e.get(eF.Zf),
                                    // for PulseSync: BEGIN use the desktop mock worker and read saved rules
                                    l = '/mockServiceWorker.js',
                                    g = () => {
                                        return a.get(h.L) ?? a.get(h.L, !1) ?? null;
                                    },
                                    // for PulseSync: END use the desktop mock worker and read saved rules
                                    c = s || ''.concat(eC, '/*');
                                return () =>
                                    n({
                                        getMocksConfiguration: g,
                                        log: (e, t) => u.debug('[Mocks] | desktop: '.concat(e), t),
                                        mocksProviderUrl: i,
                                        serviceWorkerUrl: l,
                                        urlCapturePattern: (0, p.r)(c, t, m.B),
                                    }).catch((e) => u.debug('[Mocks] | desktop: initialization failed. '.concat(e)));
                            }),
                            [eF.TK]: (0, n.Gr)((e) =>
                                (0, e_.b)(
                                    new c.r({
                                        maxLogLevel: g.cm.DEBUG,
                                        secureFields: ep.xW,
                                        disableLogToConsole: 'development' !== e.get(eF.SX),
                                        additionalData: {
                                            get puid() {
                                                return e.get(eF.WA).getPassportUid();
                                            },
                                        },
                                    }),
                                ),
                            ),
                            [eF.oo]: (0, n.Gr)(() => new ev.si()),
                            [eF.DP]: (0, n.Gr)(() => new ev.MJ('client desktop', 'cookie')),
                            [eF.U2]: (0, n.Gr)(() => new ev.si()),
                            [eF.vH]: (0, n.Gr)(() => new ev.fW()),
                            [eF.Xc]: (0, n.Gr)((e) => {
                                let t = e.get(eF.oo),
                                    r = e.get(eF.Zf);
                                return new ex.E({
                                    isBuildTypeDesktop: !0,
                                    logger: r,
                                    changeLanguageHandler: new eE(),
                                    storage: {
                                        get: () => t.get(eR.c.SavedUserLanguage),
                                        set(e) {
                                            t.set(eR.c.SavedUserLanguage, e);
                                        },
                                    },
                                });
                            }),
                        })
                        .registerMany({
                            [eF.y$]: (0, n.Gr)((e) => {
                                let t = e.get(eF.Zf),
                                    r = e.get(eF.oo),
                                    o = new ef.Mz({
                                        config: { useEntitiesStorage: !0, useFileStorage: !0, useResponseCacheStorage: !0 },
                                        plugins: [new ef.wK({ logger: t })],
                                    });
                                return (
                                    o.createCacheController({
                                        repositoryContainer: o.repositoryContainer,
                                        variables: {
                                            get uid() {
                                                return r.get(eR.c.YmUid);
                                            },
                                            get isOffline() {
                                                return !!o.network.status.isOffline;
                                            },
                                        },
                                    }),
                                    o
                                );
                            }),
                            [eF.Hm]: (0, n.P9)(
                                () =>
                                    function () {
                                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return new u.Q(e);
                                    },
                            ),
                            [eF.gu]: (0, n.P9)(
                                () =>
                                    function () {
                                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return new a.S(e);
                                    },
                            ),
                        })
                        .registerMany({
                            [eF.QG]: (0, n.Gr)((e) => new eA(e.get(eF.oo), e.get(eF.V4), e.get(eF.Xc).getLanguage())),
                            [eF.OP]: (0, n.P9)(
                                (e) =>
                                    function () {
                                        var t, r, o, i, s;
                                        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            a = arguments.length > 1 ? arguments[1] : void 0,
                                            u = e.get(eF.Zf),
                                            l = e.get(eF.U2),
                                            g = new ep.NS(u),
                                            {
                                                resources: { musicExternalApi: c },
                                            } = e.get(eF.V4);
                                        ((n.timeout = c.defaultTimeout),
                                            (n.hooks = {
                                                afterResponse: [...((null == n || null == (t = n.hooks) ? void 0 : t.afterResponse) || [])],
                                                beforeError: [g.beforeErrorHook, ...((null == n || null == (r = n.hooks) ? void 0 : r.beforeError) || [])],
                                                beforeRequest: [eh.xW, ...((null == n || null == (o = n.hooks) ? void 0 : o.beforeRequest) || [])],
                                                afterTimeout: [g.beforeErrorHook, ...((null == n || null == (i = n.hooks) ? void 0 : i.afterTimeout) || [])],
                                                beforeRetry: [eh.ie, g.beforeRetryHook, ...((null == n || null == (s = n.hooks) ? void 0 : s.beforeRetry) || [])],
                                            }));
                                        let d = a(n);
                                        return (0, ef.sY)(d, {
                                            get isOffline() {
                                                var h;
                                                return null != (h = (0, eH.Q)(e.get(eF.y$))) ? h : (0, eM.g)(l);
                                            },
                                        });
                                    },
                            ),
                        })
                        .registerMany({
                            [eF.A4]: (0, n.P9)(
                                (e) =>
                                    function () {
                                        var t;
                                        let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.get(eF.OP),
                                            i = e.get(eF.QG),
                                            s = e.get(eF.Hm),
                                            n = e.get(eF.Xc),
                                            a = e.get(eF.V4),
                                            u = e0({ authorization: i, cacheController: null, httpClient: o({}, s), i18nStorage: n, prefixUrl: eC, publicConfig: a });
                                        return (
                                            (r.hooks = { beforeError: [(0, eD.o)(i, u), ...((null == r || null == (t = r.hooks) ? void 0 : t.beforeError) || [])] }),
                                            o(r, s)
                                        );
                                    },
                            ),
                        })
                        .register(
                            eF.CR,
                            (0, n.P9)(
                                (e) =>
                                    function () {
                                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return e.get(eF.A4)(t, e.get(eF.gu));
                                    },
                            ),
                        )
                        .register(
                            eF.GV,
                            (0, n.P9)((e) => {
                                let t = e.get(eF.QG),
                                    r = e.get(eF.qt),
                                    o = e.get(eF.Xc);
                                return ((e) => {
                                    let { authorization: t, createDefaultHttpClient: r, defaultPrefixUrl: o, i18nStorage: i, publicConfig: s } = e;
                                    return (e, n, a) => {
                                        var u, l, g;
                                        let c = s.resources.musicExternalApi,
                                            d = null != (u = null == a ? void 0 : a.prefixUrl) ? u : o,
                                            h = i.getLanguage(),
                                            p = null == a ? void 0 : a.httpClient;
                                        return (
                                            void 0 === p && (p = r()),
                                            new e(p, {
                                                prefixUrl: d,
                                                retryPolicyConfig: c.retryPolicyConfig,
                                                timeouts: c.timeouts[n],
                                                params: {
                                                    common: {
                                                        ...((null == a ? void 0 : a.oauth) === null
                                                            ? {}
                                                            : { oauth: null != (l = null == a ? void 0 : a.oauth) ? l : t.token }),
                                                        client: (0, ej._)(),
                                                        ...((null == a ? void 0 : a.device) === null
                                                            ? {}
                                                            : { device: null != (g = null == a ? void 0 : a.device) ? g : (0, eJ.h)() }),
                                                        language: h,
                                                    },
                                                },
                                            })
                                        );
                                    };
                                })({ authorization: t, createDefaultHttpClient: () => e.get(eF.A4)(), defaultPrefixUrl: r, i18nStorage: o, publicConfig: e.get(eF.V4) });
                            }),
                        )
                        .registerMany({
                            [eF.GB]: (0, n.Gr)((e) => {
                                let t = e.get(eF.GV),
                                    r = e.get(eF.Hm),
                                    o = e.get(eF.V4),
                                    i = r({ credentials: 'omit' });
                                return t(v, 'outageNoticeResource', { prefixUrl: o.resources.outageNotice.prefixUrl, httpClient: i, oauth: null, device: null });
                            }),
                            [eF.$I]: (0, n.Gr)((e) => {
                                let t = e.get(eF.QG),
                                    r = e.get(eF.A4),
                                    o = e.get(eF.Xc),
                                    i = e.get(eF.qt),
                                    s = e.get(eF.V4);
                                return e0({
                                    authorization: t,
                                    cacheController: e.get(eF.y$).cacheController,
                                    httpClient: r(),
                                    i18nStorage: o,
                                    prefixUrl: i,
                                    publicConfig: s,
                                });
                            }),
                            [eF._1]: (0, n.Gr)((e) => e.get(eF.GV)(w.d, 'usersResource')),
                            [eF.V3]: (0, n.Gr)((e) => {
                                let t = e.get(eF.QG),
                                    r = e.get(eF.A4),
                                    o = e.get(eF.Xc),
                                    i = e.get(eF.qt);
                                return ((e) => {
                                    let { authorization: t, httpClientFactory: r, i18nStorage: o, prefixUrl: i, publicConfig: s, slam: n } = e,
                                        a = r(),
                                        u = o.getLanguage(),
                                        l = s.resources.musicExternalApi,
                                        g = {
                                            prefixUrl: i,
                                            retryPolicyConfig: l.retryPolicyConfig,
                                            timeouts: l.timeouts.landingResource,
                                            params: { common: { oauth: t.token, client: (0, ej._)(), device: (0, eJ.h)(), language: u } },
                                        };
                                    return new ef.o7(a, g, {
                                        hooks: n.hooks,
                                        variables: {
                                            get tracksController() {
                                                return n.tracksController;
                                            },
                                            get cacheController() {
                                                var c;
                                                return null != (c = n.cacheController) ? c : null;
                                            },
                                        },
                                    });
                                })({ authorization: t, httpClientFactory: r, i18nStorage: o, prefixUrl: i, publicConfig: e.get(eF.V4), slam: e.get(eF.y$) });
                            }),
                            [eF.Lb]: (0, n.Gr)((e) => e.get(eF.GV)(k.H, 'landing3Resource')),
                            [eF.tz]: (0, n.Gr)((e) => e.get(eF.GV)(y.B, 'albumsResource')),
                            [eF.$8]: (0, n.Gr)((e) => e.get(eF.GV)(R.w, 'libraryResource')),
                            [eF.Oo]: (0, n.Gr)((e) => e.get(eF.GV)(V.L, 'tracksResource')),
                            [eF.$5]: (0, n.Gr)((e) => e.get(eF.GV)(P._, 'availabilityResource')),
                            [eF.qT]: (0, n.Gr)((e) => {
                                let t = e.get(eF.QG),
                                    r = e.get(eF.A4),
                                    o = e.get(eF.Xc),
                                    i = e.get(eF.qt),
                                    s = e.get(eF.V4);
                                return e2({
                                    authorization: t,
                                    httpClientFactory: r,
                                    i18nStorage: o,
                                    platformSecret: eU,
                                    prefixUrl: i,
                                    publicConfig: s,
                                    slam: e.get(eF.y$),
                                    storage: e.get(eF.oo),
                                });
                            }),
                            [eF.DV]: (0, n.Gr)((e) =>
                                e2({
                                    authorization: e.get(eF.QG),
                                    httpClientFactory: e.get(eF.A4),
                                    i18nStorage: e.get(eF.Xc),
                                    platformSecret: eU,
                                    prefixUrl: e.get(eF.qt),
                                    publicConfig: e.get(eF.V4),
                                    slam: e.get(eF.y$),
                                    storage: e.get(eF.oo),
                                    useResourcesFileInfo: !0,
                                }),
                            ),
                            [eF.X4]: (0, n.Gr)((e) => e.get(eF.GV)(C.a, 'topResource')),
                            [eF.O9]: (0, n.Gr)((e) => e.get(eF.GV)(U.b, 'artistsResource')),
                            [eF.E]: (0, n.Gr)((e) => e.get(eF.GV)(b.V, 'slidesResource')),
                            [eF.wH]: (0, n.Gr)((e) => e.get(eF.GV)(L.c, 'redAlertResource')),
                            [eF.ok]: (0, n.Gr)((e) => e.get(eF.GV)(A.Z, 'rotorResource')),
                            [eF.X8]: (0, n.Gr)((e) => e.get(eF.GV)(D.w, 'waveResource')),
                            [eF.yq]: (0, n.Gr)((e) => e.get(eF.GV)(O.p, 'searchResource')),
                            [eF.NN]: (0, n.Gr)((e) => e.get(eF.GV)(S.v, 'searchResource')),
                            [eF.qN]: (0, n.Gr)((e) => e.get(eF.GV)(z.T, 'playlistResource')),
                            [eF.ro]: (0, n.Gr)((e) => e.get(eF.GV)(E.e, 'playlistsResource')),
                            [eF.nM]: (0, n.Gr)((e) => e.get(eF.GV)(x.o, 'pinResource')),
                            [eF.Ut]: (0, n.Gr)((e) => e.get(eF.GV)(_.$, 'metatagsResource')),
                            [eF.K1]: (0, n.Gr)((e) => e.get(eF.GV)(T.p, 'tagResource')),
                            [eF.eu]: (0, n.Gr)((e) => e.get(eF.GV)(M.D, 'feedResource')),
                            [eF.SD]: (0, n.Gr)((e) => e.get(eF.GV)(q.F, 'wizard3Resource')),
                            [eF.aE]: (0, n.Gr)((e) => {
                                let t = e.get(eF.GV),
                                    r = e.get(eF.y$);
                                return e1({ resource: t(B.l, 'pinsResource'), resourceName: B.l.constructor.name, slam: r });
                            }),
                            [eF.ki]: (0, n.Gr)((e) => e.get(eF.GV)(H.I, 'musicHistoryResource')),
                            [eF.c9]: (0, n.Gr)((e) => e.get(eF.GV)(N.s, 'dynamicPagesResource')),
                            [eF.en]: (0, n.Gr)((e) => e.get(eF.GV)(Z.B, 'chartResource')),
                            [eF.jQ]: (0, n.Gr)((e) => e.get(eF.GV)(F._, 'clipsResource')),
                            [eF.cZ]: (0, n.Gr)((e) => e.get(eF.GV)(I.c, 'lyricViewsResource')),
                            [eF.Zl]: (0, n.Gr)((e) => e.get(eF.GV)(W.D, 'nonMusicResource')),
                            [eF.CN]: (0, n.Gr)((e) => e.get(eF.GV)(X.N, 'donationResource')),
                            [eF.JM]: (0, n.Gr)((e) => e.get(eF.GV)(Y.c, 'streamsResource')),
                            [eF.P1]: (0, n.Gr)((e) => e.get(eF.GV)($.S, 'loaderResource')),
                            [eF.re]: (0, n.Gr)((e) => {
                                let t = e.get(eF.GV),
                                    r = e.get(eF.A4)({ credentials: 'omit' });
                                return t(Q.s, 'prefixlessResource', { httpClient: r, oauth: null, prefixUrl: '' });
                            }),
                            [eF.Lk]: (0, n.Gr)((e) => e.get(eF.GV)(K.g, 'filtersResource')),
                            [eF.uM]: (0, n.Gr)((e) => {
                                var t;
                                let { acqOffers: r } = e.get(eF.V4),
                                    { rumSettings: s } = (0, i.$5)(),
                                    { brand: n, service: a, environment: u, appVersion: l } = r,
                                    { platform: g, page: c } = s,
                                    d = e.get(eF.QG),
                                    h = e.get(eF.Xc).getLanguage(),
                                    p = e.get(eF.A4),
                                    m = d.token || null,
                                    G = p({ credentials: 'omit' }),
                                    f = e.get(eF.Zf),
                                    { request_id: v, puid: w } = null != (t = e.get(eF.Zi).getStore()) ? t : {};
                                return new o.mZ({
                                    brand: n,
                                    service: a,
                                    environment: u,
                                    appVersion: l,
                                    etld: 'yandex.net',
                                    platform: 'Desktop',
                                    lang: h,
                                    oAuthToken: m,
                                    authMethod: 'oauth',
                                    requester: (0, e7.n)(G, f),
                                    puid: (null == w ? void 0 : w.toString()) || null,
                                    rumOptions: { platform: g, page: c, requestId: v },
                                });
                            }),
                            [eF.$$]: (0, n.Gr)((e) => e.get(eF.GV)(j.E, 'ugcResource', { device: null })),
                            [eF.sv]: (0, n.Gr)((e) => e.get(eF.GV)(J.L, 'collectionResource')),
                            [eF.gd]: (0, n.Gr)((e) => e.get(eF.GV)(ee.z, 'adsResource')),
                            [eF.EN]: (0, n.Gr)((e) => e.get(eF.GV)(et._, 'afterTrackResource')),
                            [eF.Ez]: (0, n.Gr)((e) => e.get(eF.GV)(er.l, 'personalResource')),
                            [eF.N1]: (0, n.Gr)((e) => {
                                let t = e.get(eF.GV),
                                    r = e.get(eF.y$);
                                return e1({ resource: t(eo.H, 'disclaimersResource'), resourceName: eo.H.constructor.name, slam: r });
                            }),
                            [eF.u2]: (0, n.Gr)((e) => e.get(eF.GV)(ei.J, 'familyResource')),
                            [eF.TD]: (0, n.Gr)((e) => e.get(eF.GV)(es.L, 'childrenLandingResource')),
                            [eF.wK]: (0, n.Gr)((e) => e.get(eF.GV)(en.u, 'landingBlocksResource')),
                            [eF.dh]: (0, n.Gr)((e) => e.get(eF.GV)(ea.q, 'promoResource')),
                            [eF.LC]: (0, n.Gr)((e) => {
                                let t = e.get(eF.CR),
                                    r = e.get(eF.V4),
                                    o = t({ credentials: 'include' }),
                                    i = r.resources.musicExternalApi;
                                return (0, eQ._)({ httpClient: o, musicExternalApi: i, publicConfig: r });
                            }),
                            [eF.W5]: (0, n.Gr)((e) => {
                                let t = e.get(eF.CR),
                                    r = e.get(eF.V4),
                                    o = t({ credentials: 'include' });
                                return (0, e$.Z)({ httpClient: o, publicConfig: r });
                            }),
                            [eF.PL]: (0, n.Gr)((e) => e.get(eF.GV)(eu.w, 'labelsResource')),
                            [eF.DT]: (0, n.Gr)((e) => e.get(eF.GV)(el.O, 'concertsResource')),
                            [eF.dA]: (0, n.Gr)((e) => e.get(eF.GV)(eg.Q, 'wordsResource')),
                            [eF.$Y]: (0, n.Gr)((e) => e.get(eF.GV)(ec.C, 'wheelResource')),
                            [eF.VR]: (0, n.P9)((e) => () => {
                                let t = e.get(eF.A4),
                                    r = e.get(eF.V4),
                                    o = (0, eY.i)({ httpClientFactory: t, publicConfig: r });
                                return (0, eT.P)({ probe: (e) => o.ping({ signal: e }) });
                            }),
                            [eF.zj]: (0, n.Gr)((e) => e.get(eF.GV)(ed.U, 'lumenResource')),
                            [eF.RD]: (0, n.Gr)((e) => (0, eN.L)(e.get(eF.Zf))),
                            [eF.vg]: (0, n.Gr)(() => (0, ew.a)()),
                        })
                        .register(
                            eF.ff,
                            (0, n.Gr)((e) => {
                                let t = e.get(eF.N1);
                                return (0, eW.Y)(t);
                            }),
                        )
                        .registerMany({
                            [eF.mD]: (0, n.Gr)((e) => (0, eI.s)({ environment: G, appVersion: (0, eB.B)(), rumResource: e.get(eF.W5) })),
                            [eF.UB]: (0, n.Gr)((e) => {
                                let t = e.get(eF.vg);
                                return new d.BP(t);
                            }),
                            [eF.Tq]: (0, n.Gr)((e) => {
                                var t;
                                let r = e.get(eF.W5);
                                return (null == (t = window.Ya) ? void 0 : t.Rum) ? new d.GY((0, ey.y)(), r, window.Ya.Rum) : null;
                            }),
                        });
                return eK
                    .register(
                        eF.by,
                        (0, n.Gr)(() => e6(eK, !1)),
                    )
                    .register(
                        eF.s_,
                        (0, n.Gr)(() => e6(eK, !0)),
                    )
                    .register(
                        eF.ni,
                        (0, n.Gr)((e) => {
                            let t = e.get(eF.Zf);
                            return new l.SU({
                                skeletonFactory: new ek.F6({
                                    landingResource: e.get(eF.V3),
                                    artistsResource: e.get(eF.O9),
                                    tabIdQueryParamController: new ek.ET(),
                                    config: { nodesConfig: { tabConfig: { addLoadAndShowBlocks: !1 } } },
                                }),
                                visibilityControllerParams: {
                                    visibilityConfig: { type: 'listVisibility', virtualizedMetadataLoader: new eG.yq({ resizeObserverAdapter: new eG.u2() }) },
                                },
                                plugins: [new ek.X({ logger: t })],
                            });
                        }),
                    );
            }
        },
        32808: (e, t, r) => {
            var o;
            (r.d(t, { r: () => o }),
                (function (e) {
                    ((e.RU = 'ru'), (e.COM = 'com'), (e.KZ = 'kz'), (e.BY = 'by'), (e.UZ = 'uz'));
                })(o || (o = {})));
        },
        47720: (e, t, r) => {
            r.d(t, { h: () => i });
            var o = r(30282);
            let i = () => {
                if (void 0 === window.musicDesktop || !o.NN) return;
                let e = Object.entries(window.musicDesktop.runtime.deviceInfo);
                if (0 !== e.length)
                    return e
                        .map((e) => {
                            let [t, r] = e;
                            return ''.concat(t, '=').concat(String(r));
                        })
                        .join('; ');
            };
        },
        70787: (e, t, r) => {
            r.d(t, { g: () => i });
            var o = r(15253);
            let i = (e) => {
                let t = e.get(o.c.OfflineMode);
                return 'boolean' == typeof t && t;
            };
        },
    },
]);
