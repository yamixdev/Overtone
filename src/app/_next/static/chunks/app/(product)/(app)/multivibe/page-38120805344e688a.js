(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8764],
    {
        4086: (e, t, o) => {
            'use strict';
            o.d(t, {
                $$: () => eu,
                $5: () => ep,
                $8: () => O,
                $I: () => h,
                $Y: () => eP,
                A4: () => m,
                CN: () => er,
                CR: () => p,
                DP: () => I,
                DT: () => ek,
                DV: () => e_,
                E: () => g,
                EN: () => i,
                Ez: () => em,
                GB: () => _,
                GV: () => x,
                Hm: () => l,
                JM: () => el,
                K1: () => Y,
                LC: () => ey,
                Lb: () => v,
                Lk: () => ea,
                N1: () => eN,
                NN: () => V,
                O9: () => U,
                OP: () => R,
                Oo: () => D,
                P0: () => A,
                P1: () => ec,
                PL: () => eC,
                QG: () => w,
                RD: () => eB,
                RG: () => eU,
                S1: () => r,
                SD: () => G,
                SX: () => eg,
                TD: () => ev,
                TK: () => n,
                Tq: () => eb,
                U2: () => k,
                UB: () => eD,
                Ut: () => K,
                V3: () => E,
                V4: () => L,
                VR: () => ez,
                W5: () => ex,
                WA: () => X,
                X4: () => P,
                X8: () => B,
                Xc: () => eo,
                Zf: () => s,
                Zi: () => eI,
                Zl: () => es,
                _1: () => N,
                aE: () => q,
                by: () => eS,
                c9: () => et,
                cZ: () => ei,
                dA: () => eM,
                dh: () => eT,
                en: () => J,
                eu: () => $,
                ff: () => eE,
                gd: () => eR,
                gu: () => a,
                iP: () => ew,
                jQ: () => ee,
                ki: () => Q,
                mD: () => c,
                mr: () => d,
                nM: () => Z,
                ni: () => ej,
                ok: () => j,
                oo: () => C,
                qN: () => W,
                qT: () => eh,
                qt: () => T,
                re: () => en,
                ro: () => H,
                s_: () => eA,
                sv: () => ed,
                tz: () => y,
                u2: () => ef,
                uM: () => eL,
                vH: () => M,
                vg: () => eO,
                wH: () => z,
                wK: () => f,
                xF: () => S,
                y$: () => u,
                yq: () => F,
                zj: () => b,
            });
            let i = 'AfterTrackResource',
                s = 'Logger',
                r = 'TechMetricsLogger',
                c = 'OtelSdk',
                n = 'ModelActionsLogger',
                l = 'HttpClient',
                a = 'HttpBeaconClient',
                u = 'Slam',
                d = 'UgcUploadHttpClient',
                R = 'BaseResourceHttpClient',
                m = 'ResourceHttpClient',
                p = 'ResourceBeaconClient',
                h = 'AccountResource',
                _ = 'OutageNoticeResource',
                N = 'UsersResource',
                E = 'LandingResource',
                f = 'LandingBlocksResource',
                v = 'Landing3Resource',
                y = 'AlbumResource',
                g = 'SlidesResource',
                T = 'MusicExternalApiPrefixUrl',
                x = 'MusicResourceFactory',
                L = 'PublicConfig',
                S = 'ServerConfig',
                A = 'TokenConfig',
                C = 'Storage',
                I = 'CookieStorage',
                k = 'LocalStorage',
                O = 'LibraryResource',
                b = 'LumenResource',
                D = 'TracksResource',
                M = 'SessionStorage',
                P = 'TopResource',
                U = 'ArtistsResource',
                w = 'Authorization',
                z = 'RedAlertResource',
                j = 'RotorResource',
                B = 'WaveResource',
                F = 'SearchResource',
                V = 'SearchPlaylistResource',
                W = 'PlaylistResource',
                H = 'PlaylistsResource',
                Z = 'PinResource',
                K = 'MetatagsResource',
                Y = 'TagResource',
                $ = 'FeedResource',
                G = 'Wizard3Resource',
                X = 'CONTAINER_USER_ID_TOKEN',
                q = 'PinsResource',
                Q = 'MusicHistoryResource',
                J = 'ChartResource',
                ee = 'ClipsResource',
                et = 'DynamicPagesResource',
                eo = 'CONTAINER_I18N_STORAGE',
                ei = 'LyricViewsResource',
                es = 'NonMusicResource',
                er = 'DonationResource',
                ec = 'LoaderResource',
                en = 'PrefixlessResource',
                el = 'StreamsResource',
                ea = 'FiltersResource',
                eu = 'UgcResource',
                ed = 'CollectionResource',
                eR = 'AdsResource',
                em = 'PersonalResource',
                ep = 'AvailabilityResource',
                eh = 'GetFileInfoResource',
                e_ = 'ResourcesFileInfoResource',
                eN = 'DisclaimersResource',
                eE = 'DisclaimerDictionary',
                ef = 'FamilyResource',
                ev = 'ChildrenLandingResource',
                ey = 'TelemetryResource',
                eg = 'Env',
                eT = 'PromoResource',
                ex = 'RumResource',
                eL = 'AcqOffers',
                eS = 'Ynison',
                eA = 'YnisonNewConnector',
                eC = 'LabelsResource',
                eI = 'RequestExecutionContext',
                ek = 'ConcertsResource',
                eO = 'YaMetrikaController',
                eb = 'RumTransport',
                eD = 'YaMetrikaTransport',
                eM = 'WordsResource',
                eP = 'WheelResource',
                eU = 'MocksInitializer',
                ew = 'CacheWorker',
                ez = 'NetworkMonitorFactory',
                ej = 'SkeletonSdk',
                eB = 'TagSandbox';
        },
        4370: (e, t, o) => {
            'use strict';
            o.d(t, { Z: () => s });
            var i = o(67174);
            let s = {
                main: (0, i.u)('/'),
                chart: (0, i.u)('/chart'),
                chartPodcasts: (0, i.u)('/chart/podcasts'),
                collection: (0, i.u)('/collection'),
                collectionAlbums: (0, i.u)('/collection/albums'),
                collectionArtists: (0, i.u)('/collection/artists'),
                collectionClips: (0, i.u)('/collection/clips'),
                collectionDislikes: (0, i.u)('/collection/dislikes'),
                collectionKids: (0, i.u)('/collection/kids'),
                collectionKidsAlbums: (0, i.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, i.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, i.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, i.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, i.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, i.u)('/collection/multivibes'),
                collectionVibes: (0, i.u)('/collection/vibes'),
                collectionPlaylists: (0, i.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, i.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, i.u)('/collection/playlists/liked'),
                collectionShelf: (0, i.u)('/collection/shelf'),
                collectionShelfLiked: (0, i.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, i.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, i.u)('/collection/shelf/recently-played'),
                concerts: (0, i.u)('/concerts'),
                kids: (0, i.u)('/kids'),
                mixes: (0, i.u)('/mixes'),
                musicHistory: (0, i.u)('/music-history'),
                muzmarket: (0, i.u)('/muzmarket'),
                mymusic: (0, i.u)('/mymusic'),
                mymusicDownloadsTracks: (0, i.u)('/mymusic/downloads/tracks'),
                multivibe: (0, i.u)('/multivibe'),
                nonMusic: (0, i.u)('/non-music'),
                pay: (0, i.u)('/pay'),
                userSlides: (0, i.u)('/slides/user'),
                search: (0, i.u)('/search'),
                searchHistory: (0, i.u)('/search/history'),
                settings: (0, i.u)('/settings'),
                video: (0, i.u)('/video'),
            };
        },
        7628: (e, t, o) => {
            'use strict';
            o.d(t, { H: () => m });
            var i = o(88800),
                s = o(88969),
                r = o(58390),
                c = o(17392),
                n = o(29993),
                l = o(96817),
                a = o(29504),
                u = o(99890),
                d = o(4086),
                R = o(41928);
            let m = (e) => {
                let { size: t = 'm', variant: o = 'default', color: m = 'primary', withRipple: p = !0, buttonText: h, isBlock: _, key: N, className: E } = e,
                    f = (0, r.useRouter)(),
                    v = (0, R.N)().get(d.QG),
                    y = (0, n.c)(() => {
                        v.authorizationUrl && ((0, u.uV)({ stage: 'attempt-start', trigger: 'user' }), f.push(v.authorizationUrl));
                    });
                return (0, i.jsx)(
                    l.$,
                    {
                        onClick: y,
                        className: E,
                        isBlock: _,
                        color: m,
                        variant: o,
                        size: t,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': c.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, i.jsx)(a.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(s.A, { id: 'authorization.enter-button' }) }),
                    },
                    N,
                );
            };
        },
        8910: (e, t, o) => {
            Promise.resolve().then(o.bind(o, 51546));
        },
        34303: (e, t, o) => {
            'use strict';
            o.d(t, { K: () => i });
            var i = (function (e) {
                return (
                    (e.TAB = 'tab'),
                    (e.URL = 'url'),
                    (e.ACTIVE_TAB = 'activeTab'),
                    (e.BLOCK = 'block'),
                    (e.IDS = 'ids'),
                    (e.ACTIVE_INDEX = 'activeIndex'),
                    (e.SORT = 'sort'),
                    (e.OPEN_TRAILER = 'openTrailer'),
                    (e.DEEPLINK = 'deeplink'),
                    (e.SEEDS = 'seeds'),
                    (e.STATION_ID = 'stationId'),
                    (e.OPEN_PLAYER = 'openPlayer'),
                    (e.SCREEN = 'screen'),
                    (e.CLID = 'clid'),
                    (e.UTM_SOURCE = 'utm_source'),
                    (e.YCLID = 'yclid'),
                    (e.UTM_CAMPAIGN = 'utm_campaign'),
                    (e.UTM_MEDIUM = 'utm_medium'),
                    (e.REF_ID = 'ref_id'),
                    (e.LUMEN_AWAKE_PARAM = 'shouldAwakeLumen'),
                    (e.BEST_PLAY = 'bestPlay'),
                    (e.TEXT = 'text'),
                    e
                );
            })({});
        },
        41928: (e, t, o) => {
            'use strict';
            o.d(t, { B: () => r, N: () => c });
            var i = o(53548),
                s = o(39499);
            let r = (0, i.createContext)(null);
            function c() {
                let e = (0, i.useContext)(r);
                if (null === e) throw new s.t('Container cannot be null, please add a context provider', { code: 'E_CONTEXT_CONTAINER_NULL' });
                return e;
            }
        },
        42674: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        48820: (e, t, o) => {
            'use strict';
            o.d(t, { WithWebNextWaveForTwo: () => n });
            var i = o(84961),
                s = o(58390),
                r = o(4370),
                c = o(72288);
            let n = (0, i.PA)((e) => {
                let { children: t } = e,
                    { multivibe: o } = (0, c.g)();
                return (o.isEnabled || (0, s.redirect)(r.Z.main.href), t);
            });
        },
        51546: (e, t, o) => {
            'use strict';
            (o.r(t), o.d(t, { default: () => E }));
            var i = o(88800),
                s = o(58390),
                r = o(57328),
                c = o(48820),
                n = o(84961),
                l = o(53548),
                a = o(67879),
                u = o(29993),
                d = o(79179),
                R = o(4370),
                m = o(72288),
                p = o(68986),
                h = o(34303),
                _ = o(87396);
            let N = (0, n.PA)((e) => {
                    let { roomId: t = null } = e,
                        o = (0, s.useRouter)(),
                        { multivibe: r } = (0, m.g)(),
                        { hasPlus: c, isPaywallBlocking: n } = (0, d.S)(),
                        [N, E] = (0, l.useState)(!1),
                        f = (0, u.c)(async (e) => {
                            var t;
                            if ((await r.getRoomById({ roomId: e }), r.isGetRoomByIdRejected && r.errorName !== a.z.ROOM_NOT_FOUND)) {
                                (E(!0), r.resetErrorName());
                                return;
                            }
                            let i = r.invitationRoom;
                            if ((null == i ? void 0 : i.isEnabled) && (null == (t = i.wave) ? void 0 : t.seedsId)) {
                                let e = new URLSearchParams();
                                (e.set(h.K.DEEPLINK, p.v.PLAY_VIBE), e.set(h.K.SEEDS, i.wave.seedsId), o.replace(''.concat(R.Z.main.href, '?').concat(e.toString())));
                                return;
                            }
                            (r.inviteModal.open(), o.replace(R.Z.main.href));
                        });
                    return ((0, l.useEffect)(() => {
                        if (c) {
                            if (!t) {
                                (r.promoModal.open(), o.replace(R.Z.main.href));
                                return;
                            }
                            f(t);
                        }
                    }, [f, c, r.promoModal, t, o]),
                    N && (0, s.notFound)(),
                    n)
                        ? null
                        : (0, i.jsx)(_.MainSuspenseLoader, {});
                }),
                E = () => {
                    let e = (0, s.useSearchParams)().get('roomId');
                    return (0, i.jsx)(c.WithWebNextWaveForTwo, {
                        children: (0, i.jsx)(r.WithAuth, { withRedirectToMainPage: !1, children: (0, i.jsx)(N, { roomId: e }) }),
                    });
                };
        },
        57328: (e, t, o) => {
            'use strict';
            o.d(t, { WithAuth: () => h });
            var i = o(88800),
                s = o(84961),
                r = o(58390),
                c = o(65724),
                n = o(88969),
                l = o(29504),
                a = o(7628),
                u = o(42674),
                d = o.n(u);
            let R = (0, s.PA)(() =>
                (0, i.jsxs)('div', {
                    className: d().root,
                    children: [
                        (0, i.jsx)(l.DZ, {
                            className: (0, c.$)(d().title, d().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, i.jsx)(n.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, i.jsx)(l.HL, {
                            className: (0, c.$)(d().text, d().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, i.jsx)(n.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, i.jsx)(a.H, { size: 'l', className: d().button }),
                    ],
                }),
            );
            var m = o(4370),
                p = o(72288);
            let h = (0, s.PA)((e) => {
                let { children: t, withRedirectToMainPage: o } = e,
                    { user: s } = (0, p.g)();
                return s.isAuthorized ? t : (o && (0, r.redirect)(m.Z.main.href), (0, i.jsx)(R, {}));
            });
        },
        60932: (e) => {
            e.exports = {
                icon: 'MainSuspenseLoader_icon__MceTD',
                'animate-pop': 'MainSuspenseLoader_animate-pop__vkpff',
                heartbeat: 'MainSuspenseLoader_heartbeat__6RDpM',
            };
        },
        67879: (e, t, o) => {
            'use strict';
            var i;
            (o.d(t, { z: () => i }),
                (function (e) {
                    ((e.NOT_FOUND = 'NOT_FOUND'),
                        (e.INVALID_SEEDS = 'INVALID_SEEDS'),
                        (e.ROOM_DUPLICATION = 'ROOM_DUPLICATION'),
                        (e.ROOM_NOT_FOUND = 'ROOM_NOT_FOUND'),
                        (e.ROOM_LIMIT_EXCEEDED = 'ROOM_LIMIT_EXCEEDED'));
                })(i || (i = {})));
        },
        68986: (e, t, o) => {
            'use strict';
            o.d(t, { v: () => i });
            var i = (function (e) {
                return ((e.PLAY_VIBE = 'play-vibe'), e);
            })({});
        },
        79179: (e, t, o) => {
            'use strict';
            o.d(t, { S: () => n });
            var i = o(53548),
                s = o(58390),
                r = o(4370),
                c = o(72288);
            let n = () => {
                let e = (0, s.useRouter)(),
                    { user: t, paywall: o, multivibe: n } = (0, c.g)(),
                    [l, a] = (0, i.useState)(!1),
                    u = !n.isEnabled,
                    d = t.hasPlus,
                    R = o.modal.isOpened,
                    m = !d && l && !R,
                    p = l && R;
                return (
                    (0, i.useEffect)(() => {
                        if (u || m) return void e.replace(r.Z.main.href);
                        l || d || R || (o.openModal(), a(!0));
                    }, [d, u, R, l, o, e, m]),
                    { hasPlus: d, isPaywallBlocking: p }
                );
            };
        },
        87396: (e, t, o) => {
            'use strict';
            o.d(t, { MainSuspenseLoader: () => n });
            var i = o(88800),
                s = o(52300),
                r = o(60932),
                c = o.n(r);
            let n = (e) => {
                let { style: t } = e,
                    o = {
                        display: 'flex',
                        position: 'fixed',
                        insetBlockStart: 0,
                        insetInlineEnd: 0,
                        insetBlockEnd: 0,
                        insetInlineStart: 0,
                        zIndex: 'var(--ym-z-index-loader)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        background: 'var(--ym-background-color-primary-enabled-basic)',
                        ...t,
                    };
                return (0, i.jsx)('div', {
                    style: o,
                    children: (0, i.jsx)(s.I, {
                        variant: 'musicLogo',
                        style: { width: '100%', maxWidth: '100px', color: 'var(--ym-logo-color-primary-variant)' },
                        className: c().icon,
                    }),
                });
            };
        },
        99890: (e, t, o) => {
            'use strict';
            o.d(t, { C8: () => r, UC: () => c, dM: () => n, uV: () => l });
            var i = o(89916),
                s = o(66363);
            let r = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                c = (e) => (e.uid ? 'authorized' : 'no-uid'),
                n = (e) => {
                    if (!(e instanceof i.m5) || !(0, s.Nh)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, s.Nh)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                l = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
    },
    (e) => {
        (e.O(0, [7191, 6706, 2662, 2058, 827, 4732, 9087, 3979, 6363, 763, 2670, 7358], () => e((e.s = 8910))), (_N_E = e.O()));
    },
]);
