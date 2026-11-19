(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5160],
    {
        202: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => n });
            var a = i(39499),
                r = i(29993);
            let n = (e) => {
                let { format: t, onSuccess: i, onError: n } = e;
                return {
                    startClipboardWrite: (0, r.c)(() => {
                        let e = () => void 0,
                            r = () => void 0,
                            o = !1,
                            s = new Promise((t, i) => {
                                ((e = t), (r = i));
                            }),
                            l = (async (e) => {
                                try {
                                    (await window.navigator.clipboard.write([e]), null == i || i());
                                } catch (e) {
                                    o || null == n || n(e);
                                }
                            })(new ClipboardItem({ 'text/plain': (async () => new Blob([await s], { type: 'text/plain' }))() }));
                        return {
                            copy: (i) => (e(t(i)), l),
                            cancel: () => {
                                ((o = !0), r(new a.t('Clipboard write cancelled')));
                            },
                        };
                    }),
                };
            };
        },
        1401: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => d });
            var a = i(88800),
                r = i(52300),
                n = i(15077),
                o = i(42729),
                s = i(14307),
                l = i.n(s);
            let d = (e) => {
                let { vibe: t, closeToast: i } = e;
                return (0, a.jsx)(o.O, {
                    className: l().root,
                    closeToast: i,
                    entityVariant: n.c.VIBE,
                    customCover: (0, a.jsx)(r.I, { variant: 'vibe', size: 'xxs' }),
                    collectionUrl: '/collection',
                    isLiked: t.isLiked,
                });
            };
        },
        2147: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => d });
            var a = i(88800),
                r = i(79390),
                n = i(29993),
                o = i(25555),
                s = i(72288),
                l = i(1401);
            let d = function (e) {
                let { showNotificationOnMobile: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { user: i, paywall: d } = (0, s.g)(),
                    c = (0, o.I)({
                        action: async () => (await (null == e ? void 0 : e.toggleLike())) === r.f.OK,
                        notification: (0, a.jsx)(l.T, { vibe: { isLiked: !(null == e ? void 0 : e.isLiked) } }),
                        showNotificationOnMobile: t,
                    });
                return (0, n.c)(async () => {
                    if (e) {
                        if (i.isAuthorized && !i.hasPlus && !e.isLiked) return void d.openModal();
                        await c();
                    }
                });
            };
        },
        3451: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 82474));
        },
        4795: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => n });
            var a = i(72288),
                r = i(97956);
            let n = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: n },
                    experiments: o,
                } = (0, a.g)();
                return (
                    !(null == n ? void 0 : n.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = o.getExperiment(r.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        7665: (e) => {
            e.exports = { ndaLabel: 'ShareVibeMenuItem_ndaLabel__LZvFN' };
        },
        8655: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => a });
            var a = (function (e) {
                return ((e.Dark = 'dark'), (e.Light = 'light'), e);
            })({});
        },
        12342: (e) => {
            e.exports = {
                root: 'SearchHistoryPage_root__Wbvyf',
                title: 'SearchHistoryPage_title__gnJuo',
                header: 'SearchHistoryPage_header__YdTG5',
                scrollContainer: 'SearchHistoryPage_scrollContainer__ScAez',
                scrollContent: 'SearchHistoryPage_scrollContent__5AXWC',
                content: 'SearchHistoryPage_content__iPgVO',
                desktopItem: 'SearchHistoryPage_desktopItem__Xv9C_',
                items: 'SearchHistoryPage_items___okS8',
                emptyHistory: 'SearchHistoryPage_emptyHistory__gzfUu',
            };
        },
        14307: (e) => {
            e.exports = { root: 'NotificationLike_root__DM13k' };
        },
        14329: (e) => {
            e.exports = {
                root: 'NotificationPin_root__DBEub',
                view: 'NotificationPin_view__daGc_',
                image: 'NotificationPin_image__o5F7B',
                multivibeContainer: 'NotificationPin_multivibeContainer__ZbXhn',
                multivibeCover: 'NotificationPin_multivibeCover__n_5EZ',
                multivibeAvatar: 'NotificationPin_multivibeAvatar__4P5gm',
                multivibeControl: 'NotificationPin_multivibeControl__iOOyQ',
            };
        },
        14661: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { n: () => a }),
                (function (e) {
                    ((e.ALL = 'all'),
                        (e.TRACK = 'track'),
                        (e.ALBUM = 'album'),
                        (e.ARTIST = 'artist'),
                        (e.PLAYLIST = 'playlist'),
                        (e.WAVE = 'wave'),
                        (e.GENRE = 'genre'),
                        (e.USER = 'user'),
                        (e.UGC_TRACK = 'ugc_track'),
                        (e.PODCAST = 'podcast'),
                        (e.PODCAST_EPISODE = 'podcast_episode'),
                        (e.VIDEO = 'video'),
                        (e.LYRICS = 'lyrics'),
                        (e.CLIP = 'clip'),
                        (e.BOOK = 'book'),
                        (e.CONCERT = 'concert'));
                })(a || (a = {})));
        },
        15232: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => A });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                o = i(53548),
                s = i(2058),
                l = i(58390),
                d = i(17392),
                c = i(79070),
                u = i(17610),
                m = i(29504),
                _ = i(13946),
                f = i(55693),
                p = i(72288),
                v = i(24548),
                h = i(85587),
                x = i(90224),
                y = i(91292),
                g = i(7608),
                b = i(6667),
                T = i(85463),
                C = i(65462),
                j = i.n(C);
            let A = (0, n.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: n,
                        albumArtists: C,
                        withExplicitMark: A,
                        withSecondaryColor: N,
                        captionSize: k = 'm',
                        explicitSize: P = 'xxxs',
                        withAllArtistsTitle: I,
                        textClassName: S,
                        artistsClassName: E,
                        ignoreDislikedStyles: O,
                        withCustomTooltip: L = !0,
                        hasLineClamp: R = !0,
                        withSavingQueryParams: w,
                        beforeTitle: M,
                        withArtistLink: D,
                        variant: z,
                        withTrackLink: B,
                        afterTitle: U,
                        withContextMenuArtists: V,
                    } = e,
                    { formatMessage: H } = (0, s.A)(),
                    { sendNavigateSearchFeedback: F } = (0, f.z)(),
                    {
                        settings: { isMobile: Y },
                        slam: K,
                    } = (0, p.g)(),
                    W = (0, b.$)({ withCustomTooltip: L }),
                    $ = (0, l.useSearchParams)(),
                    q = (0, g.B)(n, {
                        isMobile: Y,
                        isOfflineModeEnabled: K.isOfflineModeEnabled,
                        albumArtists: C,
                        withTrackLink: B,
                        withArtistLink: D,
                        variant: z,
                        withExplicitMark: A,
                        query: w ? Object.fromEntries($) : void 0,
                    }),
                    {
                        displayTitle: G,
                        ariaLabel: X,
                        tooltipText: Z,
                        titleAttribute: Q,
                        versionTitleAttribute: J,
                        isTooltipEnabled: ee,
                    } = ((e, t, i, a) => {
                        var r, n;
                        let { canEnableCustomTooltip: o, isMobile: s } = i,
                            l = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, a),
                            d = t.shouldShowRemovedTitle ? l : ''.concat(l, ' ').concat(null != (r = t.version) ? r : ''),
                            c = a({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: l,
                            ariaLabel: ''.concat(c, ' ').concat(null != (n = e.version) ? n : ''),
                            tooltipText: d,
                            isTooltipEnabled: o && !s,
                            titleAttribute: !o && (t.shouldShowRemovedTitle || t.link) ? d : void 0,
                            versionTitleAttribute: o ? void 0 : t.version,
                        };
                    })(n, q, { canEnableCustomTooltip: W, isMobile: Y }, H),
                    et = (0, T.O)({ track: n, onNavigate: F, withSavingQueryParams: w, entityType: h.n.TRACK }),
                    ei = (0, o.useCallback)(
                        (e) =>
                            (0, a.jsx)(u.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: Z,
                                hoverSettings: v.V,
                                children: (0, a.jsx)(m.HL, {
                                    className: (0, r.$)(j().text, j().title),
                                    type: 'entity',
                                    size: k,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: G,
                                }),
                            }),
                        [k, G, Z, ee],
                    ),
                    ea = (0, c.L)(() =>
                        q.shouldShowRemovedTitle
                            ? (0, a.jsx)(u.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: Z,
                                  hoverSettings: v.V,
                                  children: (0, a.jsx)(m.HL, {
                                      className: (0, r.$)(j().text, j().title),
                                      type: 'entity',
                                      size: k,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: Q,
                                      children: G,
                                  }),
                              })
                            : q.link
                              ? (0, a.jsx)(y.N, {
                                    onClick: et,
                                    className: j().albumLink,
                                    href: q.link.href,
                                    'aria-label': X,
                                    title: Q,
                                    'data-test-id': d.Kq.track.TRACK_TITLE,
                                    children: ei(),
                                })
                              : ei({ 'data-test-id': d.Kq.track.TRACK_TITLE }),
                    ),
                    er = (0, o.useMemo)(() => +!!R, [R]);
                return (0, a.jsx)('div', {
                    className: (0, r.$)(j().root, { [j().root_disabled]: !n.isAvailable, [j().root_disliked]: n.isDisliked && !O, [j().root_withSecondaryColor]: N }, t),
                    children: (0, a.jsxs)('div', {
                        className: j().metaContainer,
                        children: [
                            (0, a.jsxs)('div', {
                                className: (0, r.$)(j().titleContainer, { [j().titleContainer_withVersion]: n.version }, i),
                                children: [
                                    (0, a.jsxs)(m.HL, {
                                        className: (0, r.$)(j().text, S),
                                        type: 'entity',
                                        size: k,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            M,
                                            ea,
                                            q.version &&
                                                (0, a.jsxs)(m.HL, {
                                                    className: (0, r.$)(j().text, j().version),
                                                    type: 'entity',
                                                    size: k,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: J,
                                                    'data-test-id': d.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', q.version],
                                                }),
                                        ],
                                    }),
                                    q.explicitMark &&
                                        (0, a.jsx)(x.N, {
                                            containerClassName: j().explicitMarkContainer,
                                            getDescriptionTexts: n.getDescriptionTexts,
                                            size: P,
                                            variant: q.explicitMark,
                                            className: j().explicitMark,
                                            trackId: n.id,
                                        }),
                                    U,
                                ],
                            }),
                            q.artists.length > 0 &&
                                (0, a.jsx)(_.i, {
                                    className: (0, r.$)(j().text, { [j().artists]: R }, E, S),
                                    withAllArtistsTitle: I,
                                    linkClassName: (0, r.$)(j().text, j().link),
                                    captionClassName: (0, r.$)(j().text, j().artistCaption),
                                    artists: q.artists,
                                    withLink: q.withArtistLink,
                                    lineClamp: er,
                                    captionSize: k,
                                    withContextMenu: V,
                                }),
                        ],
                    }),
                });
            });
        },
        15253: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => r });
            var a = i(42824),
                r = (function (e) {
                    return (
                        (e.Theme = 'theme'),
                        (e.AllowAnalyticsLogs = 'AllowAnalyticsLogs'),
                        (e.NavbarCollapsed = 'navbarCollapsed'),
                        (e.SessionHistoryState = 'sessionHistoryState'),
                        (e.SessionId = 'Session_id'),
                        (e.YmPlayerRepeatMode = 'ymPlayerRepeatMode'),
                        (e.YmPlayerVolume = 'ymPlayerVolume'),
                        (e.YmPlayerPrevVolume = 'ymPlayerPrevVolume'),
                        (e.YmPlayerShuffle = 'ymPlayerShuffle'),
                        (e.YmPlayerQuality = 'ymPlayerQuality'),
                        (e.YmUid = 'ymUid'),
                        (e.YandexLogin = 'yandex_login'),
                        (e.YandexUid = 'yandexuid'),
                        (e.Oauth = 'oauth'),
                        (e.OauthState = 'oauthState'),
                        (e.ForcedLoginAttempt = 'forcedLoginAttempt'),
                        (e.ArtistDonationButtonOnbordingShowed = 'ArtistDonationButtonOnbordingShowed'),
                        (e.TrailerButtonOnbordingShowed = 'TrailerButtonOnbordingShowed'),
                        (e.ConcertsTabOnboardingShowed = 'ConcertsTabOnboardingShowed'),
                        (e[(e.SavedUserLanguage = a.s)] = 'SavedUserLanguage'),
                        (e.ExEx = 'ExEx'),
                        (e.EqualizerConfig = 'EqualizerConfig'),
                        (e.EnableMetricsPluginDebugMode = 'EnableMetricsPluginDebugMode'),
                        (e.EnableYnisonMetricsDebugMode = 'EnableYnisonMetricsDebugMode'),
                        (e.OverwrittenExperiments = 'overwrittenExperiments'),
                        (e.Offer = 'offer'),
                        (e.OfflineMode = 'offlineMode'),
                        (e.NavbarDownloadBarIsHidden = 'navbarDownloadBarIsHidden'),
                        (e.OfflineDegradation = 'offlineDegradation'),
                        (e.DesktopPaywall = 'desktopPaywall'),
                        (e.LiteVersionMode = 'liteVersionMode'),
                        (e.DownloadMobileApp = 'downloadMobileApp'),
                        (e.MainPageEntryPointPlayedAnimations = 'mainPageEntryPointPlayedAnimations'),
                        (e.HideDeeplinkAndOnelink = 'hideDeeplinkAndOnelink'),
                        (e.YnisonDeviceId = 'ynisonDeviceId'),
                        (e.CrossFadeMode = 'crossFadeMode'),
                        (e.CustomPlayerThumbConfig = 'CustomPlayerThumbConfig'),
                        (e.BuySubscriptionParams = 'buySubscriptionParams'),
                        (e.EnableCrossfadeDebugMode = 'EnableCrossfadeDebugMode'),
                        (e.EnableBurstDebounceDebugMode = 'EnableBurstDebounceDebugMode'),
                        (e.ConcertLocation = 'concertLocation'),
                        e
                    );
                })({});
        },
        16112: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => N });
            var a = i(88800),
                r = i(96706),
                n = i(53548),
                o = i(2058),
                s = i(42078),
                l = i(29595),
                d = i(74965),
                c = i(72288),
                u = i(66943),
                m = i(65724),
                _ = i(84961),
                f = i(17392),
                p = i(79070),
                v = i(90688),
                h = i(97956),
                x = i(90420),
                y = i(15077),
                g = i(33719),
                b = i(55211),
                T = i(14329),
                C = i.n(T);
            let j = (0, _.PA)((e) => {
                let { vibe: t, closeToast: i } = e,
                    { experiments: r } = (0, c.g)(),
                    n = r.checkExperiment(h.z.WebNextWaveAgentExperiment, 'on'),
                    o = t.type === x.q7,
                    s = (0, p.L)(() => {
                        var e;
                        return n && t.agent
                            ? (0, a.jsx)(b.n, {
                                  agent: t.agent,
                                  shouldShowControl: !1,
                                  className: (0, m.$)(C().view, { [C().multivibeContainer]: o }),
                                  coverClassName: (0, m.$)({ [C().multivibeCover]: o }),
                                  entityCoverClassName: (0, m.$)({ [C().multivibeAvatar]: o }),
                                  controlClassName: (0, m.$)({ [C().multivibeControl]: o }),
                              })
                            : (0, a.jsx)(v._V, {
                                  className: C().image,
                                  src: t.backgroundImageUrl,
                                  size: 100,
                                  fit: 'cover',
                                  withAvatarReplace: !0,
                                  'aria-hidden': !0,
                                  style: { backgroundColor: null == (e = t.colors) ? void 0 : e.average },
                                  withLoadingIndicator: !1,
                                  'data-test-id': f.S7.BASE_NOTIFICATION_PIN_VIBE_COVER,
                              });
                    }),
                    l = n && t.agent ? void 0 : 'round';
                return (0, a.jsx)(g.k, {
                    closeToast: i,
                    entityVariant: y.c.VIBE,
                    entityTitle: t.title,
                    entityDescription: t.getDescription(),
                    isPinned: t.isPinned,
                    customCover: s,
                    radius: l,
                    className: C().root,
                });
            });
            var A = i(93512);
            let N = (e) => {
                let { user: t, pinsCollection: i } = (0, c.g)(),
                    { notify: m } = (0, d.l)(),
                    { formatMessage: _ } = (0, o.A)(),
                    [f, p] = (0, n.useState)(!1);
                return (0, n.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void m((0, a.jsx)(u.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (f) return;
                    let n = { ...(0, r.HO)(e), isPinned: !e.isPinned, getDescription: e.getDescription },
                        o = (0, r.HO)(i.get(e.pinId));
                    p(!0);
                    let d = await e.togglePin();
                    (p(!1),
                        o &&
                            o.type === s._.WAVE_ITEM &&
                            o.data.backgroundImageUrl &&
                            ((n.backgroundImageUrl = o.data.backgroundImageUrl), (n.colors = o.data.colors), (n.agent = o.data.agent)),
                        d &&
                            'object' == typeof d &&
                            'data' in d &&
                            (d.data.backgroundImageUrl && (n.backgroundImageUrl = d.data.backgroundImageUrl),
                            d.data.colors && (n.colors = { average: d.data.colors.average, waveText: d.data.colors.waveText }),
                            d.data.agent && (n.agent = (0, A.K)(d.data.agent))),
                        d
                            ? m((0, a.jsx)(j, { vibe: n }), { containerId: l.u.INFO })
                            : m((0, a.jsx)(u.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [_, m, f, i, t.isAuthorized, e]);
            };
        },
        19994: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => s });
            var a = {
                    5881: (e, t, i) => {
                        function a() {
                            for (var e, t, i = 0, a = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            a,
                                            r = '';
                                        if ('string' == typeof t || 'number' == typeof t) r += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (a = e(t[i])) && (r && (r += ' '), (r += a));
                                            else for (i in t) t[i] && (r && (r += ' '), (r += i));
                                        return r;
                                    })(e)) &&
                                    (a && (a += ' '), (a += t));
                            return a;
                        }
                        (i.r(t), i.d(t, { clsx: () => a, default: () => r }));
                        let r = a;
                    },
                    7998: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = {
                            root: 'JD1RZC0EtdwegdYvGm6W',
                            root_active: 'K4G7ASZk9TWzXzAWMZKF',
                            'gradient-horizontal': 'GTZfWL5aq48rDurR2xQI',
                            root_radius_xs: 'PyJ4CgcZYC2CpTwW_q0e',
                            root_radius_s: 'Ig8cmdGxncIa4g0mjlzw',
                            root_radius_m: 'lJbeO5iovzBwUTpu7hFA',
                            root_radius_l: 'Gc3Wyk8uCohdTadkf7NR',
                            root_radius_xl: 'iKi9AOB1TOi3ZWzmbCkq',
                            root_radius_xxl: 'nYTL841hItMUZhvJq_ob',
                            root_radius_xxxl: 'LXGqiB6_V45plhG242mA',
                            root_radius_round: 'psTzstoF82tSOz1JHMB3',
                        };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function a(e, t, a) {
                            var r = null;
                            if ((void 0 !== a && (r = '' + a), void 0 !== t.key && (r = '' + t.key), 'key' in t))
                                for (var n in ((a = {}), t)) 'key' !== n && (a[n] = t[n]);
                            else a = t;
                            return { $$typeof: i, type: e, key: r, ref: void 0 !== (t = a.ref) ? t : null, props: a };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = a), (t.jsxs = a));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    7141: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Shimmer = void 0));
                        let r = i(4377),
                            n = i(5881),
                            o = a(i(7998));
                        t.Shimmer = function (e) {
                            let { isActive: t, className: i, radius: a = 'm', width: s, height: l, children: d, ...c } = e,
                                u = {};
                            return (
                                void 0 !== s && (u.width = 'string' == typeof s ? s : ''.concat(s, 'px')),
                                void 0 !== l && (u.height = 'string' == typeof l ? l : ''.concat(l, 'px')),
                                (0, r.jsx)('div', {
                                    className: (0, n.clsx)(o.default.root, o.default['root_radius_'.concat(a)], { [o.default.root_active]: t }, i),
                                    'aria-live': t ? 'polite' : 'off',
                                    'aria-busy': t,
                                    ...c,
                                    style: u,
                                    children: d,
                                })
                            );
                        };
                    },
                },
                r = {};
            function n(e) {
                var t = r[e];
                if (void 0 !== t) return t.exports;
                var i = (r[e] = { exports: {} });
                return (a[e].call(i.exports, i, i.exports, n), i.exports);
            }
            ((n.d = (e, t) => {
                for (var i in t) n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (n.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var o = {};
            (() => {
                (Object.defineProperty(o, 'X', { value: !0 }), (o.q = void 0));
                var e = n(7141);
                Object.defineProperty(o, 'q', {
                    enumerable: !0,
                    get: function () {
                        return e.Shimmer;
                    },
                });
            })();
            var s = o.q;
            o.X;
        },
        21284: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { h: () => a }),
                (function (e) {
                    ((e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), (e.ARTIST = 'artist'));
                })(a || (a = {})));
        },
        21869: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => f });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                o = i(97234),
                s = i(91177),
                l = i(66610),
                d = i(29993),
                c = i(72288),
                u = i(93091),
                m = i(27817),
                _ = i(16112);
            let f = (0, n.PA)((e) => {
                let { vibe: t, onLikeClick: i, className: n, iconClassName: f, likeActiveClassName: p } = e,
                    {
                        user: v,
                        settings: { isMobile: h },
                    } = (0, c.g)(),
                    x = (0, s.D)(),
                    y = (0, l.D)(),
                    g = (0, _.A)(t),
                    b = (0, d.c)(() => {
                        (y({ actionType: t.isLiked ? o.ActionType.Unlike : o.ActionType.Like, userInteractionType: o.UserInteractionType.Tap }), i());
                    });
                return (0, a.jsxs)('div', {
                    ref: x,
                    children: [
                        !h && (0, a.jsx)(m.L, { className: n, iconClassName: f, onClick: g, isPinned: t.isPinned }),
                        (0, a.jsx)(u.T, { className: (0, r.$)(n, t.isLiked && p), iconClassName: f, onClick: b, isLiked: t.isLiked, disabled: !v.isAuthorized }),
                    ],
                });
            });
        },
        25555: (e, t, i) => {
            'use strict';
            i.d(t, { I: () => u });
            var a = i(88800),
                r = i(53548),
                n = i(2058),
                o = i(29993),
                s = i(66943),
                l = i(29595),
                d = i(74965),
                c = i(72288);
            let u = (e) => {
                let { action: t, notification: i, showNotificationOnMobile: u = !1 } = e,
                    {
                        user: m,
                        settings: { isMobile: _ },
                    } = (0, c.g)(),
                    { formatMessage: f } = (0, n.A)(),
                    { notify: p } = (0, d.l)(),
                    v = (0, r.useRef)(!1);
                return (0, o.c)(async () => {
                    if (!m.isAuthorized) return void p((0, a.jsx)(s.h, { error: f({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (!v.current) {
                        v.current = !0;
                        try {
                            (await t())
                                ? (!_ || u) && p(i, { containerId: l.u.INFO })
                                : p((0, a.jsx)(s.h, { error: f({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR });
                        } finally {
                            v.current = !1;
                        }
                    }
                });
            };
        },
        27817: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => u });
            var a = i(88800),
                r = i(84961),
                n = i(53548),
                o = i(88969),
                s = i(17392),
                l = i(52300),
                d = i(19934),
                c = i(72288);
            let u = (0, r.PA)((e) => {
                let { isPinned: t, onClick: i, disabled: r, className: u, iconClassName: m } = e,
                    { user: _ } = (0, c.g)(),
                    f = t ? 'unpin' : 'pin',
                    p = t ? s.S7.CONTEXT_MENU_UNPIN_BUTTON : s.S7.CONTEXT_MENU_PIN_BUTTON,
                    v = (0, n.useMemo)(() => (t ? (0, a.jsx)(o.A, { id: 'interface-actions.unpin' }) : (0, a.jsx)(o.A, { id: 'interface-actions.pin' })), [t]);
                return (0, a.jsx)(d.Dr, {
                    className: u,
                    onClick: i,
                    icon: (0, a.jsx)(l.I, { className: m, variant: f, size: 'xxs' }),
                    'data-test-id': p,
                    disabled: r || !_.isAuthorized,
                    children: v,
                });
            });
        },
        29008: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => o, r: () => s });
            var a = i(53548),
                r = i(2058),
                n = i(61691),
                o = (function (e) {
                    return ((e.PIN = 'pin'), e);
                })({});
            let s = (e, t) => {
                let { formatMessage: i } = (0, r.A)();
                return (0, a.useMemo)(() => {
                    switch (e) {
                        case n._.SINGLE:
                            return i({ id: 'entity-names.single' });
                        case n._.PODCAST:
                            return i({ id: 'entity-names.podcast' });
                        case n._.AUDIOBOOK:
                            if ('pin' === t) return i({ id: 'entity-names.book' });
                            return i({ id: 'entity-names.audio' });
                        case n._.FAIRY_TALE:
                            return i({ id: 'entity-names.fairy-tale' });
                        default:
                            return i({ id: 'entity-names.album' });
                    }
                }, [e, i, t]);
            };
        },
        29832: (e, t, i) => {
            'use strict';
            i.d(t, { MN: () => c, hg: () => d });
            var a,
                r = i(53548),
                n = {
                    5881: (e, t, i) => {
                        function a() {
                            for (var e, t, i = 0, a = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            a,
                                            r = '';
                                        if ('string' == typeof t || 'number' == typeof t) r += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (a = e(t[i])) && (r && (r += ' '), (r += a));
                                            else for (i in t) t[i] && (r && (r += ' '), (r += i));
                                        return r;
                                    })(e)) &&
                                    (a && (a += ' '), (a += t));
                            return a;
                        }
                        (i.r(t), i.d(t, { clsx: () => a, default: () => r }));
                        let r = a;
                    },
                    8765: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = {
                            root: 'KL50tMDvfAdw_9MzcVht',
                            bottom: 'bL0wE1Bui8zpIZbvMVL3',
                            top: 'P6gOmyFtXyetUz0dqhF3',
                            bottom_left: 'RvWjZle1erRBXzJEF9Zj',
                            bottom_right: 'bBh7lvgdfF7bqNqlK78Q',
                            label: 'FgncHYHPDU14dLddn0wF',
                            controls: 'PBhQ1krUFiAybu_BS2YE',
                            controls_radius_default: 'cSCPJSa6Lx6OnpM4ljX9',
                            controls_radius_round: 'kHUOlGxOaBwL4P3jEBXU',
                            controls_visible: 'QZC5vQL9p11QsEkdkTtZ',
                        };
                    },
                    3550: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = {
                            root: 'laBJlJAaqEVS0i_4Ot3l',
                            titleContainer: 'LmhA6nlLyzxwYIX31gYa',
                            wrapper: 'IO4kvpDGNI2J0CHwcKSf',
                            content: 'l8SktNpJd30JWp1owp_b',
                            content_left: 'Mb33JzAWx9EjbQAeScFt',
                            description: 'kbcBH9meMfY6Du_xQNnI',
                            content_center: 'Dp41JRuLGzwV3MHBYHMC',
                            content_right: 'eOsuNCgUirwAw16iUKLu',
                            title: 'FAmeEGy52GX1k0xZuPDn',
                            content_linesCount_1: 'Cfj1Wkh1bvQMCfk1mZwK',
                            content_linesCount_2: 'lV4OXsCTURC5K1s9Q5mx',
                            content_linesCount_3: 'PVBDIXF2RTUThmbNT9sV',
                            content_linesCount_4: 'ND4XIwkIYtNoU89EOISr',
                        };
                    },
                    4353: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = { root: 'LizdJ2L0HW7JWOvPrfly' };
                    },
                    7319: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    1246: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = {
                            root_controls_xxs: 'tRaaBpDMg9Qu8v6gKjtn',
                            root_entity_xxs: 'M9zvtlcpLUVn6DKdcHhj',
                            root_text_xxs: 'ln0PYYwDmFnfYxCDJsFU',
                            root_controls_xs: 'n5AeWEsJC3_AYXcbK4Lt',
                            root_entity_xs: '__hrMKGmNbw54T54IUyh',
                            root_text_xs: 'SehSa7OyRpC2nzYTVb2Q',
                            root_controls_s: '_oBLf5gprWsKjCw4Ce58',
                            root_entity_s: 'mxSPe5xpZnie9gpIqacd',
                            root_text_s: 'Ai2iRN9elHpk_u5splD6',
                            root_controls_m: 'tk7ahHRDYXJMMB879KUA',
                            root_entity_m: 'Z_WIr2W8JU4MPQek3hgR',
                            root_text_m: 'g3qWNP6xl__7qxNmtrvd',
                            root_controls_l: 'grvxapJE3vGArOKDWf6n',
                            root_entity_l: 'Esj5A1UeSi4xV4tZ839D',
                            root_text_l: 'V3WU123oO65AxsprotU9',
                            root_weight_normal: 'ZYV27jeWd30QDXu4GhaH',
                            root_weight_medium: '_3_Mxw7Si7j2g4kWjlpR',
                            root_weight_bold: 'Vi7Rd0SZWqD17F0872TB',
                        };
                    },
                    2445: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = {
                            root_size_xs: 'qJJ288377iHlWN_RXeEE',
                            root_size_s: '_sd8Q9d_Ttn0Ufe4ISWS',
                            root_size_m: 'Ctk8dbecq31Qh7isOJPQ',
                            root_size_l: 'M_Djh6ppIkCO3A2k_BTA',
                            root_size_xl: 'dtxlzGQMPAbM2MEndXWX',
                            root_size_xxl: 'IUb9XLplTAoZqne9rNUL',
                            root_size_xxxl: 'ZYZamUwql_rfFR4RpI2B',
                            root_size_xxxxl: 'ZBZyxow5njdq8z5dnRPY',
                            root_size_xxxxxl: 'WdvQQNwdDNCdRSwRkAtT',
                            root_weight_bold: 'nSU6fV9y80WrZEfafvww',
                            root_weight_black: 'KBeGPPK4DinQzAP41Y_N',
                        };
                    },
                    61: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function a(e, t, a) {
                            var r = null;
                            if ((void 0 !== a && (r = '' + a), void 0 !== t.key && (r = '' + t.key), 'key' in t))
                                for (var n in ((a = {}), t)) 'key' !== n && (a[n] = t[n]);
                            else a = t;
                            return { $$typeof: i, type: e, key: r, ref: void 0 !== (t = a.ref) ? t : null, props: a };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = a), (t.jsxs = a));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    7742: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CardControls = void 0));
                        let r = i(4377),
                            n = i(5881),
                            o = i(8532),
                            s = a(i(8765));
                        t.CardControls = (e) => {
                            let {
                                    className: t,
                                    playControl: i,
                                    likeControl: a,
                                    menuControl: l,
                                    pinControl: d,
                                    trailerControl: c,
                                    isVisible: u,
                                    radius: m = 'default',
                                    bottomContainerClassName: _,
                                    labelText: f,
                                } = e,
                                p = c || i,
                                v = l || a;
                            return (0, r.jsxs)('div', {
                                className: (0, n.clsx)(
                                    s.default.root,
                                    s.default.controls,
                                    { [s.default.controls_visible]: u },
                                    s.default['controls_radius_'.concat(m)],
                                    t,
                                ),
                                children: [
                                    (0, r.jsx)('div', { className: s.default.top, children: d }),
                                    (0, r.jsxs)('div', {
                                        className: (0, n.clsx)(s.default.bottom, _),
                                        children: [
                                            p && (0, r.jsxs)('div', { className: s.default.bottom_left, children: [c, i] }),
                                            v && (0, r.jsxs)('div', { className: s.default.bottom_right, children: [l, a] }),
                                        ],
                                    }),
                                    !!f && (0, r.jsx)(o.Label, { className: s.default.label, children: f }),
                                ],
                            });
                        };
                    },
                    7093: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.EntityCard = void 0));
                        let r = i(4377),
                            n = i(810),
                            o = i(5881),
                            s = i(8903),
                            l = i(6530),
                            d = a(i(3550)),
                            c = (e) => {
                                let {
                                    forwardRef: t,
                                    view: i,
                                    className: a,
                                    textPosition: n = 'left',
                                    contentLinesCount: c = 2,
                                    title: u,
                                    description: m,
                                    explicitMarkComponent: _,
                                    chart: f,
                                    children: p,
                                    srTitle: v,
                                    wrapperClassName: h,
                                    ...x
                                } = e;
                                return (0, r.jsxs)('div', {
                                    className: (0, o.clsx)(d.default.root, a),
                                    ref: t,
                                    ...x,
                                    children: [
                                        (0, r.jsx)(l.SROnly, { children: null != v ? v : u }),
                                        (0, r.jsx)('div', { className: d.default.viewContainer, children: i }),
                                        (0, r.jsxs)('div', {
                                            className: (0, o.clsx)(d.default.wrapper, h),
                                            children: [
                                                f,
                                                (0, r.jsxs)('div', {
                                                    className: (0, o.clsx)(
                                                        d.default.content,
                                                        d.default['content_'.concat(n)],
                                                        d.default['content_linesCount_'.concat(c)],
                                                    ),
                                                    children: [
                                                        u &&
                                                            (0, r.jsxs)('div', {
                                                                className: d.default.titleContainer,
                                                                children: [
                                                                    (0, r.jsx)(s.Caption, {
                                                                        className: d.default.title,
                                                                        variant: 'div',
                                                                        type: 'entity',
                                                                        size: 's',
                                                                        weight: 'medium',
                                                                        lineClamp: 2,
                                                                        children: u,
                                                                    }),
                                                                    _,
                                                                ],
                                                            }),
                                                        m,
                                                        p,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                });
                            };
                        t.EntityCard = (0, n.forwardRef)((e, t) => (0, r.jsx)(c, { forwardRef: t, ...e }));
                    },
                    2018: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        let r = i(4377),
                            n = i(5881),
                            o = i(8903),
                            s = a(i(4353));
                        t.Label = (e) => {
                            let { children: t, className: i, size: a = 's', ...l } = e;
                            return (0, r.jsx)(o.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: a,
                                lineClamp: 1,
                                className: (0, n.clsx)(s.default.root, i),
                                ...l,
                                children: t,
                            });
                        };
                    },
                    8532: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        var a = i(2018);
                        Object.defineProperty(t, 'Label', {
                            enumerable: !0,
                            get: function () {
                                return a.Label;
                            },
                        });
                    },
                    5531: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let r = i(4377),
                            n = i(5881),
                            o = i(810),
                            s = a(i(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: i, children: a, ...l } = e,
                                d = (0, n.clsx)(s.default.root, { [s.default.focusable]: i }, t);
                            return (0, o.isValidElement)(a)
                                ? (0, o.cloneElement)(a, { ...l, className: (0, n.clsx)(d, a.props.className) })
                                : (0, r.jsx)('span', { className: d, ...l, children: a });
                        };
                    },
                    6530: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        var a = i(5531);
                        Object.defineProperty(t, 'SROnly', {
                            enumerable: !0,
                            get: function () {
                                return a.SROnly;
                            },
                        });
                    },
                    3412: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let r = i(4377),
                            n = i(5881),
                            o = i(810),
                            s = i(5987),
                            l = a(i(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: i, type: a = 'text', size: o = 's', className: d, children: c, weight: u = 'medium', ...m } = e;
                            return (0, r.jsx)(s.Typography, {
                                variant: i,
                                ref: t,
                                className: (0, n.clsx)(l.default.root, l.default['root_'.concat(a, '_').concat(o)], l.default['root_weight_'.concat(u)], d),
                                ...m,
                                children: c,
                            });
                        }),
                            (t.Caption = (0, o.forwardRef)((e, i) => (0, r.jsx)(t.CaptionComponent, { forwardRef: i, ...e }))));
                    },
                    1641: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0));
                        let r = i(4377),
                            n = i(5881),
                            o = i(810),
                            s = i(5987),
                            l = a(i(2445));
                        ((t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: i, weight: a = 'bold', size: o = 's', className: d, children: c, ...u } = e;
                            return (0, r.jsx)(s.Typography, {
                                variant: i,
                                ref: t,
                                className: (0, n.clsx)(l.default.root, l.default['root_size_'.concat(o)], l.default['root_weight_'.concat(a)], d),
                                ...u,
                                children: c,
                            });
                        }),
                            (t.Heading = (0, o.forwardRef)((e, i) => (0, r.jsx)(t.HeadingComponent, { forwardRef: i, ...e }))));
                    },
                    5987: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let r = i(4377),
                            n = i(5881),
                            o = i(810),
                            s = a(i(61));
                        function l(e) {
                            let { forwardRef: t, style: i, className: a, children: o, variant: l, lineClamp: d, ...c } = e,
                                u = d && 'string' == typeof o ? o : void 0;
                            return (0, r.jsx)(l, {
                                style: { ...i, WebkitLineClamp: d },
                                ref: t,
                                title: u,
                                className: (0, n.clsx)(
                                    s.default.root,
                                    { [s.default.root_clamp]: d && d > 0, [s.default.root_clamp_oneline]: d && 1 === d, [s.default.root_clamp_multiline]: d && d > 1 },
                                    a,
                                ),
                                ...c,
                                children: o,
                            });
                        }
                        ((t.TypographyComponent = l), (t.Typography = (0, o.forwardRef)((e, t) => (0, r.jsx)(l, { forwardRef: t, ...e }))));
                    },
                    8903: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.Caption = void 0));
                        var a = i(3412);
                        Object.defineProperty(t, 'Caption', {
                            enumerable: !0,
                            get: function () {
                                return a.Caption;
                            },
                        });
                        var r = i(1641);
                        Object.defineProperty(t, 'Heading', {
                            enumerable: !0,
                            get: function () {
                                return r.Heading;
                            },
                        });
                    },
                    810: (e) => {
                        e.exports = a || (a = i.t(r, 2));
                    },
                },
                o = {};
            function s(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var i = (o[e] = { exports: {} });
                return (n[e].call(i.exports, i, i.exports, s), i.exports);
            }
            ((s.d = (e, t) => {
                for (var i in t) s.o(t, i) && !s.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, 'X$', { value: !0 }), (l.kk = l.m7 = void 0));
                var e = s(7093);
                Object.defineProperty(l, 'm7', {
                    enumerable: !0,
                    get: function () {
                        return e.EntityCard;
                    },
                });
                var t = s(7742);
                Object.defineProperty(l, 'kk', {
                    enumerable: !0,
                    get: function () {
                        return t.CardControls;
                    },
                });
            })();
            var d = l.kk,
                c = l.m7;
            l.X$;
        },
        30832: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => o });
            var a = i(88800),
                r = i(15077),
                n = i(42729);
            let o = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, a.jsx)(n.O, {
                    entityVariant: r.c.PLAYLIST,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    closeToast: i,
                    coverUri: t.coverUri,
                });
            };
        },
        31510: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => a });
            let a = (e) => ({ uri: e.uri, color: e.color });
        },
        32138: (e, t, i) => {
            'use strict';
            i.d(t, { d: () => r });
            var a = i(72288);
            let r = (e, t, i) => {
                let {
                    settings: { isMobile: r },
                } = (0, a.g)();
                return !!(r && e && (((null == t ? void 0 : t.endPositionSec) && t.endPositionSec > 0) || (null == t ? void 0 : t.hasEverFinished) || (i && i > 0)));
            };
        },
        32947: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => r, L: () => n });
            let a = (e, t) => e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
            var r = (function (e) {
                return ((e.TODAY = 'today'), (e.YESTERDAY = 'yesterday'), (e.DATE = 'date'), (e.DATE_WITH_YEAR = 'date-with-year'), e);
            })({});
            let n = (e) => {
                let t = new Date();
                if (a(t, e)) return 'today';
                let i = new Date();
                return (i.setDate(i.getDate() - 1), a(i, e)) ? 'yesterday' : t.getFullYear() !== e.getFullYear() ? 'date-with-year' : 'date';
            };
        },
        33719: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => g });
            var a = i(88800),
                r = i(65724),
                n = i(53548),
                o = i(17392),
                s = i(90688),
                l = i(73170),
                d = i(29504),
                c = i(2058),
                u = i(88969),
                m = i(29993),
                _ = i(15077),
                f = i(72288),
                p = i(97956),
                v = i(91292),
                h = i(59304),
                x = i(95641),
                y = i.n(x);
            let g = (e) => {
                let {
                        closeToast: t,
                        className: i,
                        coverUri: x,
                        entityTitle: g,
                        entityDescription: b,
                        entityVariant: T,
                        entityUrl: C,
                        customCover: j,
                        radius: A,
                        isPinned: N,
                    } = e,
                    k = (() => {
                        let { formatMessage: e } = (0, c.A)(),
                            { experiments: t } = (0, f.g)();
                        return (0, m.c)((i) => {
                            let { entityVariant: r, values: n, entityTitle: o, entityDescription: s } = i;
                            switch (r) {
                                case _.c.ALBUM:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.album-pinned-in-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.album-pinned-in-menu' }, { entity: o }),
                                    };
                                case _.c.AUDIOBOOK:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.audiobook-pinned-in-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.audiobook-pinned-in-menu' }, { entity: o }),
                                    };
                                case _.c.FAIRY_TALE:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.fairytale-pinned-in-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.fairytale-pinned-in-menu' }, { entity: o }),
                                    };
                                case _.c.PODCAST:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.podcast-pinned-in-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.podcast-pinned-in-menu' }, { entity: o }),
                                    };
                                case _.c.PLAYLIST:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.playlist-pinned-in-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.playlist-pinned-in-menu' }, { entity: o }),
                                    };
                                case _.c.ARTIST:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.artist-pinned-in-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.artist-pinned-in-menu' }, { entity: o }),
                                    };
                                case _.c.VIBE:
                                    if (!t.checkExperiment(p.z.WebNextVibeDescription, 'on'))
                                        return {
                                            caption: (0, a.jsx)(u.A, { id: 'notifications-info.my-vibe-pinned-in-menu', values: n }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-pinned-in-menu' }, { entity: o }),
                                        };
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.entity-pinned-in-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.entity-pinned-in-menu' }, { entity: o, description: s }),
                                    };
                            }
                        });
                    })(),
                    P = (() => {
                        let { formatMessage: e } = (0, c.A)(),
                            { experiments: t } = (0, f.g)();
                        return (0, m.c)((i) => {
                            let { entityVariant: r, values: n, entityTitle: o, entityDescription: s } = i;
                            switch (r) {
                                case _.c.ALBUM:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.album-unpinned-from-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.album-unpinned-from-menu' }, { entity: o }),
                                    };
                                case _.c.AUDIOBOOK:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.audiobook-unpinned-from-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.audiobook-unpinned-from-menu' }, { entity: o }),
                                    };
                                case _.c.FAIRY_TALE:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.fairytale-unpinned-from-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.fairytale-unpinned-from-menu' }, { entity: o }),
                                    };
                                case _.c.PODCAST:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.podcast-unpinned-from-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.podcast-unpinned-from-menu' }, { entity: o }),
                                    };
                                case _.c.PLAYLIST:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.playlist-unpinned-from-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.playlist-unpinned-from-menu' }, { entity: o }),
                                    };
                                case _.c.ARTIST:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.artist-unpinned-from-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.artist-unpinned-from-menu' }, { entity: o }),
                                    };
                                case _.c.VIBE:
                                    if (!t.checkExperiment(p.z.WebNextVibeDescription, 'on'))
                                        return {
                                            caption: (0, a.jsx)(u.A, { id: 'notifications-info.my-vibe-unpinned-from-menu', values: n }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-unpinned-from-menu' }, { entity: o }),
                                        };
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.entity-unpinned-from-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.entity-unpinned-from-menu' }, { entity: o, description: s }),
                                    };
                            }
                        });
                    })(),
                    I = (0, n.useMemo)(
                        () =>
                            C
                                ? (0, a.jsx)(v.N, {
                                      className: y().link,
                                      href: C,
                                      title: g,
                                      children: (0, a.jsxs)(d.HL, {
                                          className: y().title,
                                          variant: 'span',
                                          type: 'controls',
                                          size: 'm',
                                          lineClamp: 1,
                                          children: ['\xa0', g, '\xa0'],
                                      }),
                                  })
                                : (0, a.jsxs)(d.HL, {
                                      className: y().title,
                                      variant: 'span',
                                      type: 'controls',
                                      size: 'm',
                                      lineClamp: 1,
                                      title: g,
                                      children: ['\xa0', g, '\xa0'],
                                  }),
                        [g, C],
                    ),
                    S = (0, n.useMemo)(
                        () => j || (0, a.jsx)(s._V, { className: y().image, src: x, size: 100, fit: 'cover', withAvatarReplace: !0, 'aria-hidden': !0 }),
                        [x, j],
                    ),
                    E = (0, n.useMemo)(() => {
                        let e = { entity: I, description: b };
                        return N
                            ? k({ entityVariant: T, values: e, entityTitle: g, entityDescription: b })
                            : P({ entityVariant: T, values: e, entityTitle: g, entityDescription: b });
                    }, [I, b, N, P, T, g, k]);
                return (0, a.jsx)(h.$, {
                    className: (0, r.$)(y().root, { [y().root_withLongText]: T === _.c.AUDIOBOOK }, i),
                    closeToast: t,
                    cover: S,
                    message: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(l.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': E.ariaLabel }) }),
                            (0, a.jsx)(d.HL, {
                                className: y().text,
                                variant: 'div',
                                type: 'controls',
                                size: 'm',
                                'data-test-id': o.S7.BASE_NOTIFICATION_PIN_TEXT,
                                'aria-hidden': !0,
                                children: E.caption,
                            }),
                        ],
                    }),
                    coverRadius: A,
                });
            };
        },
        33786: (e) => {
            e.exports = { root: 'NdaLabel_root__WeDgT', root_small: 'NdaLabel_root_small__1vy_B', text: 'NdaLabel_text__sfQ_Y' };
        },
        34970: (e) => {
            e.exports = { root: 'TextField_root__RO2Hk', root_textarea: 'TextField_root_textarea__N0PF_', root_outline: 'TextField_root_outline__8JfQF' };
        },
        35402: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => s });
            var a = i(13758),
                r = i(57249),
                n = i(6087),
                o = i(49124);
            let s = n.default.default(
                () =>
                    Promise.resolve()
                        .then(i.bind(i, 13758))
                        .then((e) => e.DotLottieWorkerReact),
                { ssr: !1 },
            );
            {
                let e = o.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/undefined/music/vundefined' : window.location.origin;
                (0, a.setWasmUrl)(new URL(r, e).href);
            }
        },
        36303: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => n });
            var a = i(2058),
                r = i(48987);
            let n = (e, t) => {
                let { formatMessage: i } = (0, a.A)(),
                    { hours: n, minutes: o, seconds: s } = (0, r.e)(e),
                    { hours: l, minutes: d, seconds: c } = (0, r.e)(t);
                return i(
                    { id: 'non-music.non-music-progress' },
                    { progress: Math.round((e / t) * 100), beginHours: n, beginMinutes: o, beginSeconds: s, endHours: l, endMinutes: d, endSeconds: c },
                );
            };
        },
        37717: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => p });
            var a = i(88800),
                r = i(53548),
                n = i(2058),
                o = i(88969),
                s = i(58390),
                l = i(29993),
                d = i(29595),
                c = i(74965),
                u = i(4370),
                m = i(72288),
                _ = i(59304),
                f = i(66943);
            let p = (e) => {
                let { user: t, search: i } = (0, m.g)(),
                    { formatMessage: p } = (0, n.A)(),
                    { notify: v } = (0, c.l)(),
                    h = (0, s.useRouter)();
                return (
                    (0, r.useEffect)(() => {
                        i.isEmptyHistory && h.push(u.Z.search.href);
                    }, [i.isEmptyHistory, h]),
                    (0, l.c)(() => {
                        try {
                            (t.account.data.uid && i.clearHistory({ userId: t.account.data.uid }),
                                v((0, a.jsx)(_.$, { message: (0, a.jsx)(o.A, { id: 'search.cleared-history' }) }), { containerId: d.u.INFO }),
                                e && e(),
                                h.push(u.Z.search.href));
                        } catch (e) {
                            v((0, a.jsx)(f.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: d.u.ERROR });
                        }
                    })
                );
            };
        },
        38514: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => r });
            var a = i(67174);
            let r = (e) => (0, a.u)('/album/:albumId', { params: { albumId: e } });
        },
        40887: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => u });
            var a = i(88800),
                r = i(53548),
                n = i(2058),
                o = i(29993),
                s = i(29595),
                l = i(74965),
                d = i(27506),
                c = i(66943);
            let u = (e) => {
                let { room: t, onRoomSuccessExit: i } = e,
                    [u, m] = (0, r.useState)(!1),
                    { notify: _ } = (0, l.l)(),
                    f = (0, r.useRef)(!1),
                    { formatMessage: p } = (0, n.A)();
                return {
                    exitVibeRoom: (0, o.c)(async () => {
                        t &&
                            !f.current &&
                            (m(!0),
                            (f.current = !0),
                            (await t.exitRoom({ roomId: t.id })) === d.F.ERROR
                                ? _((0, a.jsx)(c.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: s.u.ERROR })
                                : i(t.id),
                            m(!1),
                            (f.current = !1));
                    }),
                    isPending: u,
                };
            };
        },
        41867: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        42078: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { _: () => a }),
                (function (e) {
                    ((e.ALBUM_ITEM = 'album_item'),
                        (e.ARTIST_ITEM = 'artist_item'),
                        (e.PLAYLIST_ITEM = 'playlist_item'),
                        (e.TRACK_ITEM = 'track_item'),
                        (e.LIKED_PLAYLIST_ITEM = 'liked_playlist_item'),
                        (e.PERSONAL_PLAYLIST_ITEM = 'personal_playlist_item'),
                        (e.WAVE_ITEM = 'wave_item'),
                        (e.WAVE_AGENT_ITEM = 'wave_agent_item'),
                        (e.MIX = 'mix'),
                        (e.MIX_CARD_ITEM = 'mix_card_item'),
                        (e.LIKED_ALBUM_ITEM = 'liked_album_item'),
                        (e.PRESAVED_ALBUM_ITEM = 'presaved_album_item'),
                        (e.CHART_ALBUM_ITEM = 'chart_album_item'),
                        (e.NON_MUSIC_ALBUM_ITEM = 'non_music_album_item'),
                        (e.MENU_ITEM = 'menu_item'),
                        (e.DONATION_ITEM = 'donation_item'),
                        (e.CLIP = 'clip'),
                        (e.CLIP_ITEM = 'clip_item'),
                        (e.CONCERT_ITEM = 'concert_item'),
                        (e.QUERY_TO_VIBE_ITEM = 'q2v_item'));
                })(a || (a = {})));
        },
        43966: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => d });
            var a = i(88800),
                r = i(65724),
                n = i(88969),
                o = i(29504),
                s = i(33786),
                l = i.n(s);
            let d = (e) => {
                let { className: t, size: i = 'm' } = e;
                return (0, a.jsx)('span', {
                    className: (0, r.$)(l().root, { [l().root_small]: 's' === i }, t),
                    children: (0, a.jsx)(o.HL, {
                        variant: 'span',
                        size: 's' === i ? 'xs' : 'm',
                        weight: 'bold',
                        className: l().text,
                        children: (0, a.jsx)(n.A, { id: 'multivibe.nda' }),
                    }),
                });
            };
        },
        44230: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => r, g: () => n });
            var a = i(53548);
            let r = (0, a.createContext)({
                    contentRef: null,
                    defaultLayoutRef: null,
                    contentRootRef: null,
                    contentScrollRef: null,
                    sideBannerRef: null,
                    playlistStickyFiltersRef: null,
                    playlistStaticFiltersRef: null,
                    compositePlayerBarRef: null,
                    paywallRef: null,
                    setDefaultLayoutRef: () => {},
                    setContentRef: () => {},
                    setContentRootRef: () => {},
                    setSideBannerRef: () => {},
                    setContentScrollRef: () => {},
                    setPlaylistStickyFiltersRef: () => {},
                    setPlaylistStaticFiltersRef: () => {},
                    setCompositePlayerBarRef: () => {},
                    setPaywallRef: () => {},
                }),
                n = () => (0, a.useContext)(r);
        },
        45347: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => T });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                o = i(53548),
                s = i(17392),
                l = i(21284),
                d = i(29993),
                c = i(79070),
                u = i(78275),
                m = i(90688),
                _ = i(19994),
                f = i(69704),
                p = i(35402),
                v = i(35412);
            let h = (e, t, i) => {
                let a = (a) => {
                    let r = (a + e / 30) % 12,
                        n = t * Math.min(i, 1 - i);
                    return i - n * Math.max(-1, Math.min(r - 3, 9 - r, 1));
                };
                return [a(0), a(8), a(4)];
            };
            var x = i(8655);
            let y = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
                return Math.min(i, Math.max(t, e)) / 100;
            };
            var g = i(68817),
                b = i.n(g);
            let T = (0, n.PA)((e) => {
                let { agent: t, isPlaying: i, className: n } = e,
                    [g, T] = (0, o.useState)(null),
                    { state: C, toggleTrue: j } = (0, u.e)(!1),
                    { state: A, toggleTrue: N, toggleFalse: k } = (0, u.e)(!1),
                    { theme: P } = (0, f.W)(),
                    I = (0, o.useRef)(null),
                    S = t.entityType === l.h.ARTIST,
                    E = t.entityType === l.h.ALBUM || t.entityType === l.h.TRACK || t.entityType === l.h.PLAYLIST,
                    O = t.cover.color,
                    L = t.cover.uri,
                    R = (0, d.c)(async () => {
                        if (C) {
                            if (!O) return void N();
                            if (P) {
                                k();
                                let {
                                        color: e,
                                        glow1: i,
                                        glow2: a,
                                    } = ((e) => {
                                        let { averageColor: t, theme: i, custom: a } = e,
                                            { h: r, s: n, l: o } = (0, v.g8)(t);
                                        if (a) {
                                            if (i === x.S.Dark) {
                                                let e = y(n + 5, 50, 100);
                                                return { color: h(r, e, y(o - 40, 12, 25)), glow1: h(r, e, y(o - 5, 45, 60)), glow2: h(r, e, y(o + 35, 80, 90)) };
                                            }
                                            let e = y(n - 2, 50, 100);
                                            return { color: h(r, e, y(o + 43, 80, 95)), glow1: h(r, e, y(o + 5, 45, 75)), glow2: h(r, e, y(o, 35, 55)) };
                                        }
                                        return { color: h(r, (n > 25 ? Math.min(n + 25, 60) : n) / 100, (o > 20 ? Math.min(o + 15, 60) : o) / 100) };
                                    })({ averageColor: O, theme: P, custom: !t.entityType }),
                                    r = JSON.stringify({
                                        rules: [
                                            { id: 'color', type: 'Color', value: e },
                                            { id: 'glow_1', type: 'Color', value: i },
                                            { id: 'glow_2', type: 'Color', value: a },
                                        ],
                                    });
                                (await (null == g ? void 0 : g.setThemeData(r)), N());
                            }
                        }
                    }),
                    w = (0, d.c)(() => {
                        (j(), R());
                    });
                ((0, o.useEffect)(() => {
                    i ? null == g || g.play() : null == g || g.pause();
                }, [g, i]),
                    (0, o.useEffect)(() => {
                        R();
                    }, [O, R, P, C]),
                    (0, o.useEffect)(() => {
                        if (g)
                            return (
                                g.setUseFrameInterpolation(!1),
                                g.setRenderConfig({ devicePixelRatio: 0.1 }),
                                g.addEventListener('load', w),
                                () => {
                                    g.removeEventListener('load', w);
                                }
                            );
                    }, [g, w]));
                let M = !C || !A,
                    D = (0, c.L)(() => {
                        if (!I.current) return;
                        let e = S ? 0.029 : 0.036;
                        return { '--blur-size': ''.concat(I.current.clientWidth * e, 'px') };
                    });
                return (0, a.jsxs)('div', {
                    ref: I,
                    className: (0, r.$)(b().root, n, { [b().root_loading]: M }),
                    style: D,
                    'data-test-id': M ? s.OA.vibe.VIBE_AGENT_LOADING_CARD : void 0,
                    children: [
                        (0, a.jsxs)('div', {
                            className: (0, r.$)(b().cover, { [b().cover_round]: S, [b().cover_square]: E, [b().cover_loading]: M }),
                            children: [
                                t.entityType &&
                                    L &&
                                    (0, a.jsx)(m._V, { src: L, size: 200, fit: 'cover', withAvatarReplace: !0, className: b().image, withLoadingIndicator: !1 }),
                                (0, a.jsx)(p.j, { src: t.animationUri, loop: !0, dotLottieRefCallback: T, className: b().animation }),
                            ],
                        }),
                        (0, a.jsx)(_.W, { className: (0, r.$)(b().shimmer, { [b().shimmer_loading]: M }), isActive: !0, radius: S ? 'round' : 'm' }),
                    ],
                });
            });
        },
        46079: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => a });
            let a = (0, i(53548).createContext)({ isPrefetchDisabled: !0, isPrefetchOnHover: !1 });
        },
        47513: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => n });
            var a = i(53548),
                r = i(2058);
            let n = (e) => {
                let { formatMessage: t } = (0, r.A)();
                return (0, a.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let a = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(a, ' ').concat(i);
                }, [t, e]);
            };
        },
        48215: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => L });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                o = i(53548),
                s = i(2058),
                l = i(58390),
                d = i(17392),
                c = i(29993),
                u = i(79070),
                m = i(17610),
                _ = i(29504),
                f = i(66264),
                p = i(58217),
                v = i(78940),
                h = i(72288),
                x = i(24548),
                y = i(85587),
                g = i(90224),
                b = i(91292),
                T = i(32947),
                C = i(62837),
                j = i(38514),
                A = i(69553),
                N = i(6667),
                k = i(85463),
                P = i(32138),
                I = i(65462),
                S = i.n(I),
                E = i(87724),
                O = i.n(E);
            let L = (0, n.PA)((e) => {
                var t, i, n, I, E, L, R;
                let {
                        track: w,
                        className: M,
                        withPodcastName: D,
                        withDate: z,
                        withSecondaryColor: B = !1,
                        withListeningProgress: U = !1,
                        captionSize: V = 'm',
                        explicitSize: H = 'xs',
                        withExplicitMark: F,
                        titleContainerClassName: Y,
                        textClassName: K,
                        playContextParams: W,
                        withTimeLeftText: $ = !0,
                        ignoreDislikedStyles: q,
                        withCustomTooltip: G = !0,
                        withSavingQueryParams: X,
                        beforeTitle: Z,
                        afterTitle: Q,
                        titleLineClamp: J = 1,
                        podcastMetaClassName: ee,
                        progressClassName: et,
                        withAlbumTitleLink: ei,
                    } = e,
                    {
                        fullscreenPlayer: ea,
                        sonataState: er,
                        slam: en,
                        settings: { isMobile: eo },
                    } = (0, h.g)(),
                    { formatMessage: es, formatDate: el } = (0, s.A)(),
                    ed = (0, N.$)({ withCustomTooltip: G }),
                    ec = (0, l.useSearchParams)(),
                    eu = (0, v.Z)(null != (L = null == (t = w.mainAlbum) ? void 0 : t.url) ? L : ''),
                    em = !!(U && W && w.shouldRememberPosition && w.streamProgress && w.durationMs),
                    e_ =
                        w.id === (null == (i = er.entityMeta) ? void 0 : i.id) &&
                        (null == (I = er.entityMeta) || null == (n = I.streamProgress) ? void 0 : n.endPositionSec),
                    ef = (0, P.d)(em, w.streamProgress, e_),
                    ep = ((e, t) => {
                        let {
                                isMobile: i,
                                isOfflineModeEnabled: a,
                                mainAlbum: r,
                                shouldHidePodcastInfo: n,
                                withPodcastName: o,
                                withDate: s,
                                withExplicitMark: l,
                                withAlbumTitleLink: d,
                                query: c,
                            } = t,
                            u = (0, A.q)(e, { isMobile: i, isOfflineModeEnabled: a, query: c }),
                            m = (null == l || l) && e.disclaimers ? (0, C.DQ)(e.disclaimers) : null,
                            _ = null != o && o && !n ? r : null,
                            f = _ && (null == d || d) ? (0, j.L)(_.id) : null,
                            p = (null == s || s) && !n ? e.pubDate : void 0,
                            v = e.pubDate ? new Date(e.pubDate) : new Date(),
                            h = (0, T.L)(v),
                            x = !!(p && [T.r.TODAY, T.r.YESTERDAY].includes(h));
                        return { ...u, explicitMark: m, album: _, albumLink: f, pubDate: p, dateType: h, isSoonDate: x };
                    })(w, {
                        isMobile: eo,
                        isOfflineModeEnabled: en.isOfflineModeEnabled,
                        mainAlbum: w.mainAlbum,
                        shouldHidePodcastInfo: ef,
                        withPodcastName: D,
                        withDate: z,
                        withExplicitMark: F,
                        withAlbumTitleLink: ei,
                        query: X ? Object.fromEntries(ec) : void 0,
                    }),
                    ev = ((e, t, i, a, r) => {
                        var n, o;
                        let { canEnableCustomTooltip: s, isMobile: l } = r,
                            d = t.shouldShowRemovedTitle ? i({ id: 'track-title.podcast-not-found' }) : t.title,
                            c = i({ id: 'entity-names.podcast-name' }, { podcastName: e.title }),
                            u = ''.concat(c, ' ').concat(null != (o = e.version) ? o : ''),
                            m = t.album ? i({ id: 'entity-names.podcast-name' }, { podcastName: t.album.title }) : void 0,
                            _ = null;
                        if (t.pubDate)
                            switch (t.dateType) {
                                case T.r.TODAY:
                                    _ = i({ id: 'interface-actions.date-today' });
                                    break;
                                case T.r.YESTERDAY:
                                    _ = i({ id: 'interface-actions.date-yesterday' });
                                    break;
                                case T.r.DATE_WITH_YEAR:
                                    _ = a(t.pubDate, { month: 'long', day: 'numeric', year: 'numeric' });
                                    break;
                                default:
                                    _ = a(t.pubDate, { month: 'long', day: 'numeric' });
                            }
                        return {
                            displayTitle: d,
                            ariaLabel: u,
                            titleAttribute: s || t.shouldShowRemovedTitle ? void 0 : d,
                            versionTitleAttribute: s ? void 0 : t.version,
                            isTooltipEnabled: s && !l,
                            albumAriaLabel: m,
                            albumTitleAttribute: s || null == (n = t.album) ? void 0 : n.title,
                            dateText: _,
                            withSecondaryInfo: !!(t.album || t.pubDate),
                        };
                    })(w, ep, es, el, { canEnableCustomTooltip: ed, isMobile: eo }),
                    eh = (0, p.l)({ entity: null != (R = w.mainAlbum) ? R : null, entityType: y.n.PODCAST, callback: eu }),
                    ex = (0, c.c)((e) => {
                        (ea.modal.isOpened && ea.modal.close(), eh(e));
                    }),
                    ey = (0, k.O)({ track: w, withSavingQueryParams: X, entityType: y.n.PODCAST }),
                    eg = (0, o.useCallback)(
                        (e) =>
                            (0, a.jsx)(m.m_, {
                                enabled: ev.isTooltipEnabled,
                                offsetOptions: 4,
                                placement: 'top',
                                text: ev.displayTitle,
                                hoverSettings: x.V,
                                children: (0, a.jsx)(_.HL, {
                                    className: S().title,
                                    type: 'entity',
                                    size: V,
                                    variant: 'span',
                                    title: ev.titleAttribute,
                                    ...e,
                                    children: ev.displayTitle,
                                }),
                            }),
                        [ev.isTooltipEnabled, ev.titleAttribute, V, ev.displayTitle],
                    ),
                    eb = null == (E = ep.link) ? void 0 : E.href,
                    eT = (0, o.useMemo)(
                        () =>
                            ep.shouldShowRemovedTitle
                                ? (0, a.jsx)(m.m_, {
                                      enabled: ev.isTooltipEnabled,
                                      offsetOptions: 4,
                                      placement: 'top',
                                      text: ev.displayTitle,
                                      hoverSettings: x.V,
                                      children: (0, a.jsx)('span', { children: ev.displayTitle }),
                                  })
                                : void 0 !== eb
                                  ? (0, a.jsx)(b.N, {
                                        onClick: ey,
                                        className: S().albumLink,
                                        href: eb,
                                        'aria-label': ev.ariaLabel,
                                        title: ev.titleAttribute,
                                        'data-test-id': d.Kq.track.TRACK_TITLE,
                                        children: eg(),
                                    })
                                  : eg({ 'data-test-id': d.Kq.track.TRACK_TITLE }),
                        [ev.isTooltipEnabled, ep.shouldShowRemovedTitle, eb, ev.displayTitle, eg, ev.titleAttribute, ey, ev.ariaLabel],
                    ),
                    eC = (0, u.L)(() => {
                        let e = ep.album;
                        if (!e) return;
                        let t = (0, a.jsx)(m.m_, {
                            enabled: ev.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: e.title,
                            hoverSettings: x.V,
                            children: (0, a.jsx)(_.HL, { variant: 'span', type: 'entity', size: V, className: S().albumTitle, children: e.title }),
                        });
                        return ep.albumLink
                            ? (0, a.jsx)(b.N, {
                                  'aria-label': ev.albumAriaLabel,
                                  className: S().link,
                                  href: ep.albumLink.href,
                                  title: ev.albumTitleAttribute,
                                  onClick: ex,
                                  'data-test-id': d.Kq.track.TRACK_PARENT_PODCAST_TITLE,
                                  children: t,
                              })
                            : (0, a.jsx)('span', { 'data-test-id': d.Kq.track.TRACK_PARENT_PODCAST_TITLE, children: t });
                    });
                return (0, a.jsx)('div', {
                    className: (0, r.$)(S().root, { [S().root_disabled]: !w.isAvailable, [S().root_disliked]: w.isDisliked && !q, [S().root_withSecondaryColor]: B }, M),
                    children: (0, a.jsxs)('div', {
                        className: (0, r.$)(S().metaContainer, O().podcastMetaContainer, ee),
                        children: [
                            em &&
                                W &&
                                w.streamProgress &&
                                (0, a.jsx)(f.B, {
                                    className: (0, r.$)(O().progress, et, {
                                        [O().progress_withPreviousInfo]: ep.album || ep.pubDate,
                                        [O().progress_disabled]: !w.isAvailable || w.isDisliked,
                                    }),
                                    id: w.id,
                                    albumId: w.albumId,
                                    streamProgress: w.streamProgress,
                                    durationMs: w.durationMs || 0,
                                    playContextParams: W,
                                    withTimeLeftText: $,
                                }),
                            (0, a.jsxs)('div', {
                                className: (0, r.$)(S().titleContainer, Y, O().podcastTitleContainer),
                                children: [
                                    (0, a.jsxs)(_.HL, {
                                        className: (0, r.$)(S().text, K),
                                        type: 'entity',
                                        size: V,
                                        variant: 'div',
                                        lineClamp: J,
                                        children: [
                                            Z,
                                            eT,
                                            ep.version &&
                                                (0, a.jsxs)(_.HL, {
                                                    className: (0, r.$)(S().text, S().version),
                                                    type: 'entity',
                                                    size: V,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: ev.versionTitleAttribute,
                                                    'data-test-id': d.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', ep.version],
                                                }),
                                        ],
                                    }),
                                    ep.explicitMark &&
                                        (0, a.jsx)(g.N, {
                                            containerClassName: S().explicitMarkContainer,
                                            getDescriptionTexts: w.getDescriptionTexts,
                                            variant: ep.explicitMark,
                                            className: S().explicitMark,
                                            size: H,
                                            trackId: w.id,
                                        }),
                                    Q,
                                ],
                            }),
                            ev.withSecondaryInfo &&
                                (0, a.jsxs)(_.HL, {
                                    type: 'entity',
                                    size: V,
                                    variant: 'div',
                                    lineClamp: 1,
                                    className: (0, r.$)(S().text, O().podcastName, K),
                                    children: [
                                        eC,
                                        null !== ev.dateText &&
                                            (0, a.jsx)(_.HL, {
                                                variant: 'span',
                                                type: 'entity',
                                                size: V,
                                                className: (0, r.$)({
                                                    [O().dateWithName]: !!ep.album,
                                                    [O().soonDate]: ep.isSoonDate,
                                                    [O().dateDisabled]: !w.isAvailable,
                                                    [O().dateDisliked]: w.isDisliked && !q,
                                                }),
                                                children: ev.dateText,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                });
            });
        },
        51105: (e) => {
            e.exports = { message: 'ShareVibeSuccessNotification_message__edF4z', icon: 'ShareVibeSuccessNotification_icon__zjcuv' };
        },
        51231: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => n });
            var a = i(5120),
                r = i(31510);
            let n = (e) => {
                let t = (0, r.e)(e);
                return (0, a.wg)(t);
            };
        },
        54243: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => s });
            var a = i(88800),
                r = i(4370),
                n = i(15077),
                o = i(42729);
            let s = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, a.jsx)(o.O, {
                    closeToast: i,
                    entityVariant: n.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: r.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        55211: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => c });
            var a = i(88800),
                r = i(65724),
                n = i(21284),
                o = i(79070),
                s = i(39267),
                l = i(85925),
                d = i.n(l);
            let c = (e) => {
                let {
                        agent: t,
                        isPlaying: i,
                        isCurrent: l,
                        onPlayButtonClick: c,
                        shouldShowControl: u = !0,
                        playButtonIconSize: m,
                        alt: _,
                        className: f,
                        coverClassName: p,
                        entityCoverClassName: v,
                        controlClassName: h,
                        fallbackIconSize: x,
                    } = e,
                    y = (0, o.L)(() => {
                        if (t.entityType) return t.entityType === n.h.ARTIST ? 'round' : 'xs';
                    });
                return (0, a.jsx)(s.q, {
                    isAvailable: !0,
                    coverUri: t.cover.uri,
                    className: (0, r.$)(d().root, d()['root_radius_'.concat(y)], { [d().root_withShadow]: !!t.entityType }, f),
                    radius: y,
                    onPlayButtonClick: c,
                    isPlaying: i,
                    isCurrent: l,
                    alt: _,
                    withLoadingIndicator: !1,
                    shouldShowControl: u,
                    playButtonIconSize: m,
                    fallbackIconSize: x,
                    coverClassName: p,
                    entityCoverClassName: v,
                    controlClassName: h,
                });
            };
        },
        56446: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var a = i(88800),
                r = i(53548),
                n = i(2058),
                o = i(17392),
                s = i(96817),
                l = i(52300),
                d = i(39318);
            let c = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: r,
                            radius: c,
                            iconSize: u,
                            disabled: m,
                            onClick: _,
                            iconClassName: f,
                            className: p,
                            forwardRef: v,
                            style: h,
                            children: x,
                        } = e,
                        { formatMessage: y } = (0, n.A)(),
                        g = y({ id: 'trailer.button-aria-label' });
                    return (0, a.jsx)(s.$, {
                        className: p,
                        color: 'secondary',
                        radius: c,
                        size: r,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': g,
                        onClick: _,
                        ref: v,
                        icon: (0, a.jsx)(l.I, { variant: 'trailer', size: u, className: f }),
                        disabled: m,
                        'data-intersection-property-id': d.N,
                        style: h,
                        'data-test-id': o.S7.TRAILER_BUTTON,
                        children: x,
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, a.jsx)(c, { forwardRef: t, ...e }));
        },
        56475: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => u });
            var a = i(88800),
                r = i(53548),
                n = i(2058),
                o = i(29993),
                s = i(29595),
                l = i(74965),
                d = i(27506),
                c = i(66943);
            let u = (e) => {
                let [t, i] = (0, r.useState)(!1),
                    { notify: u } = (0, l.l)(),
                    m = (0, r.useRef)(!1),
                    { formatMessage: _ } = (0, n.A)();
                return {
                    editVibeRoom: (0, o.c)(async (t) => {
                        e &&
                            !m.current &&
                            (i(!0),
                            (m.current = !0),
                            (await e.editRoom({ roomId: e.id, name: t })) === d.F.ERROR &&
                                u((0, a.jsx)(c.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: s.u.ERROR }),
                            i(!1),
                            (m.current = !1));
                    }),
                    isPending: t,
                };
            };
        },
        57448: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => n });
            var a = i(4086),
                r = i(41928);
            let n = () => {
                let e = (0, r.N)(),
                    t = e.get(a.$I),
                    i = e.get(a.EN),
                    n = e.get(a.N1),
                    o = e.get(a._1),
                    s = e.get(a.V3),
                    l = e.get(a.Lb),
                    d = e.get(a.wK),
                    c = e.get(a.tz),
                    u = e.get(a.$8),
                    m = e.get(a.Oo),
                    _ = e.get(a.X4),
                    f = e.get(a.O9),
                    p = e.get(a.E),
                    v = e.get(a.wH),
                    h = e.get(a.ok),
                    x = e.get(a.X8),
                    y = e.get(a.yq),
                    g = e.get(a.NN),
                    b = e.get(a.qN),
                    T = e.get(a.ro),
                    C = e.get(a.nM),
                    j = e.get(a.Ut),
                    A = e.get(a.K1),
                    N = e.get(a.eu),
                    k = e.get(a.SD),
                    P = e.get(a.aE),
                    I = e.get(a.ki),
                    S = e.get(a.c9),
                    E = e.get(a.en),
                    O = e.get(a.jQ),
                    L = e.get(a.cZ),
                    R = e.get(a.Zl),
                    w = e.get(a.CN),
                    M = e.get(a.P1),
                    D = e.get(a.zj),
                    z = e.get(a.re),
                    B = e.get(a.JM),
                    U = e.get(a.Lk),
                    V = e.get(a.$$),
                    H = e.get(a.sv),
                    F = e.get(a.gd),
                    Y = e.get(a.Ez),
                    K = e.get(a.u2),
                    W = e.get(a.TD),
                    $ = e.get(a.dh),
                    q = e.get(a.LC),
                    G = e.get(a.PL),
                    X = e.get(a.DT);
                return {
                    accountResource: t,
                    afterTrackResource: i,
                    disclaimersResource: n,
                    usersResource: o,
                    landingResource: s,
                    landing3Resource: l,
                    landingBlocksResource: d,
                    albumResource: c,
                    libraryResource: u,
                    tracksResource: m,
                    topResource: _,
                    artistsResource: f,
                    slidesResource: p,
                    redAlertResource: v,
                    rotorResource: h,
                    waveResource: x,
                    searchResource: y,
                    searchPlaylistResource: g,
                    playlistResource: b,
                    playlistsResource: T,
                    pinResource: C,
                    metatagsResource: j,
                    tagResource: A,
                    feedResource: N,
                    wizard3Resource: k,
                    pinsResource: P,
                    musicHistoryResource: I,
                    dynamicPagesResource: S,
                    chartResource: E,
                    clipsResource: O,
                    lyricViewsResource: L,
                    nonMusicResource: R,
                    donationResource: w,
                    loaderResource: M,
                    lumenResource: D,
                    prefixlessResource: z,
                    streamsResource: B,
                    filtersResource: U,
                    ugcResource: V,
                    collectionResource: H,
                    adsResource: F,
                    personalResource: Y,
                    familyResource: K,
                    childrenLandingResource: W,
                    promoResource: $,
                    telemetryResource: q,
                    labelsResource: G,
                    concertsResource: X,
                    wordsResource: e.get(a.dA),
                    wheelResource: e.get(a.$Y),
                };
            };
        },
        59378: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => d });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                o = i(53548),
                s = i(34970),
                l = i.n(s);
            let d = (0, n.PA)((e) => {
                let {
                        className: t,
                        text: i = '',
                        maxTextLength: n,
                        minTextLength: s,
                        variant: d = 'input',
                        shouldFinishOnKeyPress: c = !1,
                        placeholder: u,
                        onChangeFinish: m,
                        withOutline: _ = !1,
                        readOnly: f = !1,
                        'aria-label': p,
                        'data-test-id': v,
                    } = e,
                    [h, x] = (0, o.useState)(i),
                    y = (0, o.useRef)(!1),
                    g = (0, o.useRef)(null),
                    b = (0, o.useCallback)((e) => {
                        x(e.target.value);
                    }, []),
                    T = (0, o.useCallback)(
                        (e) => {
                            if (c && ['Enter', 'Escape'].includes(e.key)) {
                                var t;
                                ('Escape' === e.key && (y.current = !0), null == (t = e.currentTarget) || t.blur());
                            }
                        },
                        [c],
                    ),
                    C = (0, o.useCallback)(() => {
                        let e = h.trim();
                        y.current || (s && e.length < s) ? ((y.current = !1), null == m || m(i)) : null == m || m(e);
                    }, [h, y, s, m, i]);
                ((0, o.useEffect)(() => {
                    g.current && ((g.current.selectionStart = g.current.value.length), (g.current.selectionEnd = g.current.value.length));
                }, []),
                    (0, o.useLayoutEffect)(() => {
                        let e = g.current;
                        if (e) {
                            e.style.height = '0px';
                            let t = e.scrollHeight;
                            e.style.height = ''.concat(t, 'px');
                        }
                    }, [g, h]));
                let j = (0, o.useMemo)(() => ('textarea' === d ? (e) => (0, a.jsx)('textarea', { ref: g, rows: 6, ...e }) : (e) => (0, a.jsx)('input', { ...e })), [d]);
                return (0, a.jsx)(j, {
                    className: (0, r.$)(l().root, t, { [l().root_textarea]: 'textarea' === d, [l().root_outline]: _ }),
                    type: 'text',
                    value: h,
                    readOnly: f,
                    maxLength: n,
                    onBlur: C,
                    onChange: b,
                    onKeyDown: T,
                    placeholder: u,
                    'aria-label': p,
                    autoFocus: !0,
                    'data-test-id': v,
                });
            });
        },
        60208: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => n });
            var a = i(4086),
                r = i(41928);
            let n = () => (0, r.N)().get(a.SX);
        },
        60757: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => r });
            var a = i(58217);
            let r = (e) => {
                let { album: t, callback: i, shouldHistoryBack: r } = e;
                return (0, a.l)({ entity: t, callback: i, modalBehavior: void 0 === r ? void 0 : { shouldHistoryBack: r }, preventDefaultWhenSafe: !0 });
            };
        },
        64207: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => _ });
            var a = i(88800),
                r = i(96706),
                n = i(53548),
                o = i(2058),
                s = i(79390),
                l = i(29595),
                d = i(74965),
                c = i(72288),
                u = i(66943),
                m = i(54243);
            let _ = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, d.l)(),
                    [_, f] = (0, n.useState)(!1),
                    { formatMessage: p } = (0, o.A)();
                return (0, n.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, a.jsx)(u.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (_) return;
                    let n = { ...(0, r.HO)(e), isLiked: !e.isLiked };
                    f(!0);
                    let o = await e.toggleLike();
                    (f(!1),
                        o === s.f.OK
                            ? i((0, a.jsx)(m.T, { artist: n }), { containerId: l.u.INFO })
                            : i((0, a.jsx)(u.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, t.isAuthorized, _, p, i]);
            };
        },
        65453: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => d });
            var a,
                r = i(53548),
                n = {
                    5881: (e, t, i) => {
                        function a() {
                            for (var e, t, i = 0, a = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            a,
                                            r = '';
                                        if ('string' == typeof t || 'number' == typeof t) r += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (a = e(t[i])) && (r && (r += ' '), (r += a));
                                            else for (i in t) t[i] && (r && (r += ' '), (r += i));
                                        return r;
                                    })(e)) &&
                                    (a && (a += ' '), (a += t));
                            return a;
                        }
                        (i.r(t), i.d(t, { clsx: () => a, default: () => r }));
                        let r = a;
                    },
                    7354: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = {
                            root: 'buOTZq_TKQOVyjMLrXvB',
                            block: 'BSPmaubc8UL2KHOMLV4A',
                            iconContainer: 'VUb2BxfgkGQhG1RDQGwF',
                            iconOnly: 'WhDaA5aAfZSjxalYb_Ex',
                            flexIcon: 'vIGeuYz4Cf60Cnuq3WKA',
                            icon_position_left: 'GoUQfg7mJlSkcbAZ28Rj',
                            icon_position_right: 'TXa2RKc_Hf0QPdmUDMwI',
                        };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function a(e, t, a) {
                            var r = null;
                            if ((void 0 !== a && (r = '' + a), void 0 !== t.key && (r = '' + t.key), 'key' in t))
                                for (var n in ((a = {}), t)) 'key' !== n && (a[n] = t[n]);
                            else a = t;
                            return { $$typeof: i, type: e, key: r, ref: void 0 !== (t = a.ref) ? t : null, props: a };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = a), (t.jsxs = a));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    3616: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Link = void 0));
                        let r = i(4377),
                            n = i(810),
                            o = i(5881),
                            s = a(i(7354)),
                            l = (e) => {
                                let {
                                        component: t = (0, r.jsx)('a', {}),
                                        block: i,
                                        target: a,
                                        rel: l,
                                        href: d,
                                        forwardRef: c,
                                        iconPosition: u = 'left',
                                        flexIcon: m,
                                        icon: _,
                                        className: f,
                                        children: p,
                                        textClassName: v = '',
                                        containerClassName: h,
                                        ...x
                                    } = e,
                                    y = (0, n.useId)(),
                                    g = !n.Children.count(p),
                                    b = 'left' === u,
                                    T = null;
                                if (void 0 !== _) {
                                    var C;
                                    T = (0, n.cloneElement)(_, {
                                        className: (0, o.clsx)(
                                            s.default.icon,
                                            { [s.default['icon_position_'.concat(u)]]: !g && u },
                                            null == (C = _.props) ? void 0 : C.className,
                                        ),
                                        key: y,
                                    });
                                }
                                let j = (0, n.useMemo)(
                                    () =>
                                        _
                                            ? (0, r.jsxs)('div', {
                                                  className: (0, o.clsx)(s.default.iconContainer, h),
                                                  children: [b && T, !g && (0, r.jsx)('span', { className: v, children: p }), !b && T],
                                              })
                                            : p,
                                    [p, h, _, b, g, T, v],
                                );
                                return (0, n.cloneElement)(
                                    t,
                                    {
                                        ref: c,
                                        target: a,
                                        rel: '_blank' === a && void 0 === l ? 'noopener noreferrer' : l,
                                        href: d,
                                        className: (0, o.clsx)(s.default.root, { [s.default.block]: i, [s.default.flexIcon]: _ && m, [s.default.iconOnly]: _ && g }, f),
                                        ...x,
                                        ...t.props,
                                    },
                                    j,
                                );
                            };
                        t.Link = (0, n.forwardRef)((e, t) => (0, r.jsx)(l, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = a || (a = i.t(r, 2));
                    },
                },
                o = {};
            function s(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var i = (o[e] = { exports: {} });
                return (n[e].call(i.exports, i, i.exports, s), i.exports);
            }
            ((s.d = (e, t) => {
                for (var i in t) s.o(t, i) && !s.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, 'X', { value: !0 }), (l.r = void 0));
                var e = s(3616);
                Object.defineProperty(l, 'r', {
                    enumerable: !0,
                    get: function () {
                        return e.Link;
                    },
                });
            })();
            var d = l.r;
            l.X;
        },
        65523: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => s });
            var a = i(4086),
                r = i(41928),
                n = i(44084);
            let o = new WeakMap(),
                s = () =>
                    ((e) => {
                        if (e instanceof n.r) return e;
                        let t = o.get(e);
                        if (t) return t;
                        let i = {
                            log: (t, i) => e.info(t, i),
                            trace: (t, i) => e.trace(t, i),
                            debug: (t, i) => e.debug(t, i),
                            info: (t, i) => e.info(t, i),
                            warn: (t, i) => e.warn(t, i),
                            error: (t, i) => e.error(t, i),
                            fatal: (t, i) => e.fatal(t, i),
                            child: (t) => e.child(t),
                        };
                        return (o.set(e, i), i);
                    })((0, r.N)().get(a.Zf));
        },
        66264: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => g });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                o = i(53548),
                s = i(88969),
                l = i(17392),
                d = i(68254),
                c = i(52300),
                u = i(29504),
                m = i(7123),
                _ = i(39079),
                f = i(9630),
                p = i(72288),
                v = i(36303),
                h = i(91106),
                x = i(92152),
                y = i.n(x);
            let g = (0, n.PA)((e) => {
                var t, i, n, x, g, b, T, C, j;
                let { className: A, id: N, albumId: k, streamProgress: P, durationMs: I, playContextParams: S, withTimeLeftText: E = !0, isFinishedLabelHidden: O } = e,
                    L = (0, f.e)(),
                    { sonataState: R, album: w } = (0, p.g)(),
                    M = Math.floor(I / 1e3),
                    [D, z] = (0, o.useState)(!1),
                    B = (0, h.$)(),
                    { isPlaying: U, isCurrent: V } = (0, _.D)({ playContextParams: S, entityId: k ? ''.concat(N, ':').concat(k) : N });
                ((0, o.useEffect)(() => {
                    if (!V) return void z(!1);
                    let e =
                        null == L
                            ? void 0
                            : L.state.playerState.status.onChange(() => {
                                  (null == L ? void 0 : L.state.playerState.status.value) === m.MT.BUFFERING && z(!0);
                              });
                    return () => {
                        null == e || e();
                    };
                }, [L, P, V, U]),
                    (0, o.useEffect)(() => {
                        var e;
                        (null == w || null == (e = w.meta) ? void 0 : e.listeningFinished)
                            ? (P.updateEndPositionSec(0), P.updateEverFinished(!0))
                            : (null == w ? void 0 : w.allTracksUnfinished) && P.updateEverFinished(!1);
                    }, [P, null == w ? void 0 : w.allTracksUnfinished, null == w || null == (t = w.meta) ? void 0 : t.listeningFinished]),
                    (0, o.useEffect)(() => {
                        var e, t;
                        (V &&
                            (null == R || null == (e = R.entityMeta) ? void 0 : e.streamProgress) &&
                            P &&
                            R.entityMeta.streamProgress.hasEverFinished !== P.hasEverFinished &&
                            P.updateEverFinished(!!R.entityMeta.streamProgress.hasEverFinished),
                            M - ((null == P ? void 0 : P.endPositionSec) || 0) < 1 &&
                                ((null == R || null == (t = R.entityMeta) ? void 0 : t.streamProgress) &&
                                    V &&
                                    (R.entityMeta.streamProgress.updateEverFinished(!0), R.entityMeta.streamProgress.updateEndPositionSec(0)),
                                null == P || P.updateEverFinished(!0)));
                    }, [
                        V,
                        null == R || null == (i = R.entityMeta) ? void 0 : i.streamProgress,
                        null == R || null == (x = R.entityMeta) || null == (n = x.streamProgress) ? void 0 : n.hasEverFinished,
                        P,
                        P.hasEverFinished,
                        P.endPositionSec,
                        M,
                    ]),
                    (0, o.useEffect)(() => {
                        if (!V) return;
                        let e =
                            null == L
                                ? void 0
                                : L.state.playerState.progress.onChange(() => {
                                      var e;
                                      let t = L.state.playerState.progress.value,
                                          i = null == R || null == (e = R.entityMeta) ? void 0 : e.streamProgress;
                                      (0 !== t.position && D && P.updateEndPositionSec(t.position),
                                          V &&
                                              parseInt(''.concat(null == i ? void 0 : i.endPositionSec), 10) !== parseInt(''.concat(t.position), 10) &&
                                              (null == i || i.updateEndPositionSec(t.position)));
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [L, P, V, U, D, N, null == R ? void 0 : R.entityMeta]));
                let H = (V && (null == R || null == (b = R.entityMeta) || null == (g = b.streamProgress) ? void 0 : g.endPositionSec)) || P.endPositionSec,
                    F = (0, v.m)(null != H ? H : 0, M),
                    Y = (0, o.useMemo)(() => {
                        var e, t, i;
                        if (
                            ((V && (null == R || null == (t = R.entityMeta) || null == (e = t.streamProgress) ? void 0 : e.hasEverFinished)) ||
                                (null == P ? void 0 : P.hasEverFinished) ||
                                (null == w || null == (i = w.meta) ? void 0 : i.listeningFinished)) &&
                            !O
                        )
                            return (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(u.HL, {
                                        lineClamp: 1,
                                        variant: 'div',
                                        className: (0, r.$)(y().text, { [y().text_withoutTimeLeft]: !E }),
                                        'data-test-id': l.OA.track.LISTENING_PROGRESS_FINISHED_TEXT,
                                        children: (0, a.jsx)(s.A, { id: 'time.finished' }),
                                    }),
                                    (0, a.jsx)(c.I, {
                                        size: 'xxs',
                                        variant: 'check',
                                        className: y().checkIcon,
                                        'data-test-id': l.OA.track.LISTENING_PROGRESS_FINISHED_ICON,
                                    }),
                                ],
                            });
                        if (!H || 0 === H) return;
                        let n = M - H,
                            o = B(n);
                        return (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(u.HL, {
                                    lineClamp: 1,
                                    variant: 'div',
                                    className: (0, r.$)(y().text, { [y().text_withoutTimeLeft]: !E }),
                                    'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_TEXT,
                                    children: o,
                                }),
                                n > 1 || O
                                    ? (0, a.jsx)(d.q, {
                                          'aria-valuetext': F,
                                          'aria-busy': V && U,
                                          value: H,
                                          max: M,
                                          'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_PROGRESS,
                                      })
                                    : (0, a.jsx)(c.I, {
                                          size: 'xxs',
                                          variant: 'check',
                                          className: y().checkIcon,
                                          'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_ICON,
                                      }),
                            ],
                        });
                    }, [
                        M,
                        null == P ? void 0 : P.hasEverFinished,
                        E,
                        B,
                        V,
                        U,
                        null == R || null == (C = R.entityMeta) || null == (T = C.streamProgress) ? void 0 : T.hasEverFinished,
                        null == w || null == (j = w.meta) ? void 0 : j.listeningFinished,
                        O,
                        H,
                        F,
                    ]);
                return (0, a.jsx)('div', { className: (0, r.$)(y().root, A), 'data-test-id': l.OA.track.LISTENING_PROGRESS, children: Y });
            });
        },
        68817: (e) => {
            e.exports = {
                root: 'VibeCardView_root__bt_Xt',
                root_loading: 'VibeCardView_root_loading__J8fOe',
                cover: 'VibeCardView_cover__fBDH_',
                cover_round: 'VibeCardView_cover_round__LPs63',
                cover_square: 'VibeCardView_cover_square__C45qF',
                cover_loading: 'VibeCardView_cover_loading__kpdrp',
                shimmer: 'VibeCardView_shimmer__Rp6yh',
                shimmer_loading: 'VibeCardView_shimmer_loading__74dZm',
                animation: 'VibeCardView_animation__x3VEI',
                image: 'VibeCardView_image__5fXOh',
            };
        },
        69704: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => r, W: () => n });
            var a = i(53548);
            let r = (0, a.createContext)({ theme: null, setTheme: () => {} }),
                n = () => (0, a.useContext)(r);
        },
        70134: (e, t, i) => {
            'use strict';
            i.d(t, { u: () => R });
            var a = i(88800),
                r = i(84961),
                n = i(88969),
                o = i(17392),
                s = i(52300),
                l = i(19934),
                d = i(72288),
                c = i(43966),
                u = i(53548),
                m = i(2058),
                _ = i(35412),
                f = i(97234),
                p = i(66610),
                v = i(39499),
                h = i(29993),
                x = i(4086),
                y = i(41928),
                g = i(65523),
                b = i(29595),
                T = i(74965),
                C = i(57448),
                j = i(72131),
                A = i(202),
                N = i(66943),
                k = i(29504),
                P = i(59304),
                I = i(51105),
                S = i.n(I);
            let E = (e) => {
                let { closeToast: t } = e;
                return (0, a.jsx)(P.$, {
                    closeToast: t,
                    cover: (0, a.jsx)(s.I, { className: S().icon, size: 'xs', variant: 'chain' }),
                    coverRadius: 's',
                    message: (0, a.jsx)(k.HL, {
                        className: S().message,
                        variant: 'div',
                        type: 'controls',
                        size: 'm',
                        children: (0, a.jsx)(n.A, { id: 'shared-vibe.link-successfully-copied', values: { b: (e) => (0, a.jsx)('b', { children: e }) } }),
                    }),
                });
            };
            var O = i(7665),
                L = i.n(O);
            let R = (0, r.PA)((e) => {
                let { vibe: t, className: i, iconClassName: r } = e,
                    { sharedVibe: k } = (0, d.g)(),
                    { shareVibe: P } = ((e) => {
                        let { vibe: t } = e,
                            { user: i, paywall: r, slam: n } = (0, d.g)(),
                            { waveResource: o } = (0, C.f)(),
                            { notify: s } = (0, T.l)(),
                            { formatMessage: l } = (0, m.A)(),
                            c = (0, g.U)(),
                            k = (0, y.N)().get(x.V4),
                            P = (0, j._)(k.webHost),
                            I = (0, u.useRef)(!1),
                            S = (0, p.D)(),
                            O = (0, h.c)((e) => {
                                (e && c.error(new v.t('Failed to share a vibe', { cause: e })),
                                    s((0, a.jsx)(N.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: b.u.ERROR }));
                            }),
                            { startClipboardWrite: L } = (0, A.$)({
                                format: (e) => (0, _.no)('/myvibe/:shareId', { params: { shareId: e }, options: { host: 'https://'.concat(P) } }).href,
                                onSuccess: () => {
                                    s((0, a.jsx)(E, {}), { containerId: b.u.INFO });
                                },
                                onError: O,
                            });
                        return {
                            shareVibe: (0, h.c)(async () => {
                                let e;
                                if (!I.current) {
                                    if (!i.isAuthorized)
                                        return void s((0, a.jsx)(N.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: b.u.ERROR });
                                    if (!i.hasPlus) return void r.openModal();
                                    if (n.networkStatus.isOffline || n.isOfflineModeEnabled) return void O();
                                    ((I.current = !0), S({ actionType: f.ActionType.Share, userInteractionType: f.UserInteractionType.Tap }));
                                    try {
                                        e = L();
                                        let { shareId: i } = await o.createShare({ seeds: [...t.seeds] });
                                        await e.copy(i);
                                    } catch (t) {
                                        (null == e || e.cancel(), O(t));
                                    } finally {
                                        I.current = !1;
                                    }
                                }
                            }),
                        };
                    })({ vibe: t });
                return t.isShareEnabled
                    ? (0, a.jsxs)(l.Dr, {
                          className: i,
                          icon: (0, a.jsx)(s.I, { className: r, variant: 'share', size: 'xxs' }),
                          onClick: P,
                          'data-test-id': o.S7.CONTEXT_MENU_SHARE_BUTTON,
                          children: [(0, a.jsx)(n.A, { id: 'interface-actions.share' }), k.isNdaLabelEnabled && (0, a.jsx)(c.g, { className: L().ndaLabel, size: 's' })],
                      })
                    : null;
            });
        },
        71344: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => p });
            var a = i(88800),
                r = i(97234),
                n = i(90852),
                o = i(14661),
                s = i(63765),
                l = i(46811),
                d = i(27639),
                c = i(4196),
                u = i(58378),
                m = i(91198),
                _ = i(67665),
                f = i(91087);
            let p = (e) => {
                let { renderVibeControls: t, item: i, index: p, pageId: v, sendSearchFeedback: h, blockPosition: x = 0, objectPosX: y, objectPosY: g } = e;
                switch (i.type) {
                    case o.n.PODCAST_EPISODE:
                        return (0, a.jsx)(
                            n.B,
                            {
                                objectType: r.DomainObjectType.PodcastEpisode,
                                objectId: i.data.id,
                                objectPosX: y,
                                objectPosY: g,
                                children: (0, a.jsx)(u.c, { pageId: v, track: i.data }),
                            },
                            i.data.id,
                        );
                    case o.n.UGC_TRACK:
                        return (0, a.jsx)(u.c, { pageId: v, track: i.data });
                    case o.n.TRACK:
                        return (0, a.jsx)(
                            n.B,
                            {
                                objectType: r.DomainObjectType.Track,
                                objectId: i.data.id,
                                objectPosX: y,
                                objectPosY: g,
                                children: (0, a.jsx)(f.N.Provider, {
                                    value: { sendSearchFeedback: h, id: i.data.entityId, type: s.o.TRACK, blockPosition: x, position: p },
                                    children: (0, a.jsx)(u.c, { pageId: v, track: i.data }),
                                }),
                            },
                            i.data.id,
                        );
                    case o.n.ARTIST:
                        return (0, a.jsx)(
                            n.B,
                            {
                                objectType: r.DomainObjectType.Artist,
                                objectId: i.data.id,
                                objectPosX: y,
                                objectPosY: g,
                                children: (0, a.jsx)(f.N.Provider, {
                                    value: { sendSearchFeedback: h, id: i.data.id, type: s.o.ARTIST, blockPosition: x, position: p },
                                    children: (0, a.jsx)(d.c, { pageId: v, artist: i.data }),
                                }),
                            },
                            i.data.id,
                        );
                    case o.n.PLAYLIST:
                        return (0, a.jsx)(
                            n.B,
                            {
                                objectType: r.DomainObjectType.Playlist,
                                objectId: i.data.id,
                                objectPosX: y,
                                objectPosY: g,
                                children: (0, a.jsx)(f.N.Provider, {
                                    value: { sendSearchFeedback: h, id: i.data.id, type: s.o.PLAYLIST, blockPosition: x, position: p },
                                    children: (0, a.jsx)(c.v, { pageId: v, playlist: i.data }),
                                }),
                            },
                            i.data.id,
                        );
                    case o.n.PODCAST:
                        return (0, a.jsx)(
                            n.B,
                            {
                                objectType: r.DomainObjectType.Podcast,
                                objectId: String(i.data.id),
                                objectPosX: y,
                                objectPosY: g,
                                children: (0, a.jsx)(
                                    f.N.Provider,
                                    {
                                        value: { sendSearchFeedback: h, id: i.data.id, type: s.o.PODCAST, blockPosition: x, position: p },
                                        children: (0, a.jsx)(l.M, { pageId: v, album: i.data }),
                                    },
                                    i.data.id,
                                ),
                            },
                            i.data.id,
                        );
                    case o.n.ALBUM:
                        return (0, a.jsx)(
                            n.B,
                            {
                                objectType: r.DomainObjectType.Album,
                                objectId: String(i.data.id),
                                objectPosX: y,
                                objectPosY: g,
                                children: (0, a.jsx)(
                                    f.N.Provider,
                                    {
                                        value: { sendSearchFeedback: h, id: i.data.id, type: s.o.ALBUM, blockPosition: x, position: p },
                                        children: (0, a.jsx)(l.M, { pageId: v, album: i.data }),
                                    },
                                    i.data.id,
                                ),
                            },
                            i.data.id,
                        );
                    case o.n.WAVE: {
                        let e = i.data;
                        return (0, a.jsx)(
                            n.B,
                            {
                                objectType: r.DomainObjectType.Wave,
                                objectId: e.stationId,
                                objectPosX: y,
                                objectPosY: g,
                                children: (0, a.jsx)(f.N.Provider, {
                                    value: { sendSearchFeedback: h, id: e.seedsId, type: s.o.WAVE, blockPosition: x, position: p },
                                    children: (0, a.jsx)(_.H, { vibe: e, controls: t(e), cover: e.cover, description: e.description, agentVariant: m.h.SMALL }),
                                }),
                            },
                            e.stationId,
                        );
                    }
                    default:
                        return null;
                }
            };
        },
        73805: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => R });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                o = i(53548),
                s = i(2058),
                l = i(97234),
                d = i(17392),
                c = i(29993),
                u = i(52300),
                m = i(17610),
                _ = i(29504),
                f = i(42174),
                p = i(96817);
            let v = (e) => {
                let { className: t, variant: i = 'text', onClick: r, iconClassName: n, iconSize: l, size: c = 's', ariaLabel: m } = e,
                    { formatMessage: _ } = (0, s.A)(),
                    f = null != m ? m : _({ id: 'play-queue.delete-from-queue' }),
                    v = (0, o.useCallback)(
                        (e) => {
                            (null == r || r(), e.stopPropagation());
                        },
                        [r],
                    );
                return (0, a.jsx)(p.$, {
                    className: t,
                    withRipple: !1,
                    variant: i,
                    size: c,
                    radius: 'round',
                    'aria-label': f,
                    onClick: v,
                    icon: (0, a.jsx)(u.I, { size: l, className: n, variant: 'bucket' }),
                    'data-test-id': d.OA.track.REMOVE_BUTTON,
                });
            };
            var h = i(5407),
                x = i(57934),
                y = i(55693),
                g = i(72288),
                b = i(49738),
                T = i(56446),
                C = i(64546),
                j = i(29831),
                A = i(30123),
                N = i(54965),
                k = i(1829),
                P = i(82092),
                I = i.n(P),
                S = i(79262),
                E = i(41867),
                O = i.n(E);
            let L = (0, n.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: i } = (0, s.A)();
                    return t.isDownloaded
                        ? (0, a.jsx)(u.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': i({ id: 'offline.track-downloaded' }),
                              'data-test-id': d.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, a.jsx)(S.A, { value: t.downloadingProgress, size: 16, className: O().downloadingProgress, progressBarClassName: O().progress })
                          : null;
                }),
                R = (0, n.PA)((e) => {
                    var t;
                    let {
                            className: i,
                            track: n,
                            withLightning: p,
                            ignoreDislikedStyles: P,
                            onLikeClick: S,
                            utmLink: E,
                            withSecondaryColor: O,
                            handleRemove: R,
                            withTrailer: w = !0,
                            likeIconSize: M = 'xxs',
                            removeButtonAriaLabel: D,
                            hideControls: z,
                        } = e,
                        { user: B, trailer: U } = (0, g.g)(),
                        { formatMessage: V } = (0, s.A)(),
                        { sendLikeSearchFeedback: H } = (0, y.z)(),
                        [F, Y] = (0, o.useState)(!1),
                        [K, W] = (0, o.useState)(!1),
                        $ = (0, h.P)(),
                        q = (0, f.K)(n),
                        {
                            duration: G,
                            lightning: X,
                            ugc: Z,
                        } = ((e, t, i) => {
                            var a;
                            let { withLightning: r, isUGC: n } = t,
                                o = ((e) =>
                                    'number' != typeof e
                                        ? null
                                        : ((e) => {
                                              let t = Math.round((e || 0) / A.k7);
                                              return (0, N.E)(t);
                                          })(e))(e.durationMs);
                            return {
                                duration: null !== o ? { text: o, ariaLabel: (0, j.j)(Math.round((null != (a = e.durationMs) ? a : 0) / 1e3), i) } : null,
                                lightning: r ? { label: i({ id: 'entity-names.popular-among-users' }) } : null,
                                ugc: n ? { label: i({ id: 'ugc.track-description' }) } : null,
                            };
                        })(n, { withLightning: p, isUGC: n.isUGC }, V),
                        Q = (0, x.F)(),
                        J = B.hasPlus,
                        ee = !n.isRemoved && n.isAvailable && !z,
                        et = (0, c.c)(async () => {
                            (F || n.isLiked || (Y(!0), null == H || H()), await q(), null == S || S(n.isLiked));
                        }),
                        ei = (0, c.c)((e) => {
                            e.stopPropagation();
                        }),
                        ea = (0, c.c)((e) => {
                            if ((e.stopPropagation(), $())) return void e.preventDefault();
                            (U.openTrackTrailer(n.id), Q(l.DomainObjectType.Track, n.id));
                        }),
                        er = (0, o.useMemo)(() => {
                            if (ee)
                                return (0, a.jsx)('div', {
                                    onClick: ei,
                                    children: (0, a.jsx)(k._, {
                                        track: n,
                                        open: K,
                                        onOpenChange: W,
                                        placement: 'bottom',
                                        icon: (0, a.jsx)(u.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: E,
                                        className: (0, r.$)(I().contextMenu, { [I().contextMenu_visible]: K }),
                                        handleRemove: R,
                                        withTrailer: w,
                                        'data-test-id': d.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ei, R, K, ee, w, n, E]);
                    return (0, a.jsxs)('div', {
                        className: (0, r.$)(I().root, I().controls, i, {
                            [I().controls_dislikedControls]: n.isDisliked,
                            [I().controls_dislikedColors]: n.isDisliked && !P,
                            [I().controls_disabled]: !n.isAvailable,
                            [I().root_withSecondaryColor]: O,
                        }),
                        children: [
                            X && (0, a.jsx)(u.I, { 'aria-label': X.label, size: 'xxs', className: I().lightning, variant: 'lightning' }),
                            Z &&
                                (0, a.jsxs)(m.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, a.jsx)(u.I, {
                                            'aria-label': Z.label,
                                            size: 'xxs',
                                            className: I().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': d.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, a.jsx)(m.ZI, { children: Z.label }),
                                    ],
                                }),
                            J && (0, a.jsx)('div', { className: (0, r.$)(I().item, I().downloadIcon), children: (0, a.jsx)(L, { track: n }) }),
                            R && !z && (0, a.jsx)(v, { size: 'xs', iconSize: 'xxs', className: (0, r.$)(I().item, I().removeButton), onClick: R, ariaLabel: D }),
                            ee &&
                                (0, a.jsx)(C.WithOffline, {
                                    fallback: (0, a.jsx)(b.c, {
                                        size: 'xs',
                                        iconSize: M,
                                        className: (0, r.$)(I().item, I().likeIcon),
                                        isLiked: n.isLiked,
                                        onClick: et,
                                        disabled: !B.isAuthorized,
                                    }),
                                }),
                            (null == (t = n.trailer) ? void 0 : t.isAvailable) &&
                                n.isAvailable &&
                                (0, a.jsx)(C.WithOffline, {
                                    fallback: (0, a.jsx)(T.k, {
                                        className: (0, r.$)(I().item, I().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: ea,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, a.jsxs)('div', {
                                className: (0, r.$)(I().item, I().contextMenuWrapper),
                                children: [
                                    null !== G &&
                                        (0, a.jsx)(_.HL, {
                                            variant: 'span',
                                            className: (0, r.$)(I().duration, { [I().duration_hidden]: K && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': G.ariaLabel,
                                            role: 'text',
                                            'data-test-id': d.Kq.track.TRACK_DURATION,
                                            children: (0, a.jsx)('span', { 'aria-hidden': 'true', children: G.text }),
                                        }),
                                    er,
                                ],
                            }),
                        ],
                    });
                });
        },
        78275: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => l });
            var a,
                r = i(53548),
                n = {
                    810: (e) => {
                        e.exports = a || (a = i.t(r, 2));
                    },
                },
                o = {},
                s = {};
            ((() => {
                (Object.defineProperty(s, '__esModule', { value: !0 }), (s.useToggle = void 0));
                let e = (function e(t) {
                    var i = o[t];
                    if (void 0 !== i) return i.exports;
                    var a = (o[t] = { exports: {} });
                    return (n[t](a, a.exports, e), a.exports);
                })(810);
                s.useToggle = (t) => {
                    let [i, a] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        a(t);
                    }, [t]);
                    let r = (0, e.useCallback)(() => {
                            a((e) => !e);
                        }, []),
                        n = (0, e.useCallback)(() => {
                            a(!0);
                        }, []),
                        o = (0, e.useCallback)(() => {
                            a(!1);
                        }, []);
                    return { state: i, toggle: r, setState: a, toggleTrue: n, toggleFalse: o };
                };
            })(),
                s.__esModule);
            var l = s.useToggle;
        },
        82092: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'CommonControlsBar_root__N8b0F',
                root_withSecondaryColor: 'CommonControlsBar_root_withSecondaryColor__4Y1P_',
                item: 'CommonControlsBar_item__qGErG',
                contextMenu: 'CommonControlsBar_contextMenu__EAq_c',
                contextMenu_visible: 'CommonControlsBar_contextMenu_visible__M0ry0',
                contextMenuWrapper: 'CommonControlsBar_contextMenuWrapper__XjkaL',
                lightning: 'CommonControlsBar_lightning__o7wrY',
                ugcIcon: 'CommonControlsBar_ugcIcon__OV0Cl',
                lightning_withOffset: 'CommonControlsBar_lightning_withOffset__LGvUS',
                duration: 'CommonControlsBar_duration__un38A',
                duration_hidden: 'CommonControlsBar_duration_hidden__noQ4S',
                alwaysVisibleDuration: 'CommonControlsBar_alwaysVisibleDuration__3V6gl',
                controls: 'CommonControlsBar_controls__QrogT',
                trailerIcon: 'CommonControlsBar_trailerIcon__ZHSBo',
                removeButton: 'CommonControlsBar_removeButton__35xHY',
                controls_disabled: 'CommonControlsBar_controls_disabled__0RmLo',
                explicitMark: 'CommonControlsBar_explicitMark__3I_Op',
                controls_dislikedControls: 'CommonControlsBar_controls_dislikedControls__mMjKC',
                likeIcon: 'CommonControlsBar_likeIcon__YqgZY',
                controls_dislikedColors: 'CommonControlsBar_controls_dislikedColors__h5lev',
                downloadIcon: 'CommonControlsBar_downloadIcon__2mM6m',
                popover: 'CommonControlsBar_popover__6bmNd',
            };
        },
        82474: (e, t, i) => {
            'use strict';
            i.d(t, { SearchHistoryPage: () => A });
            var a = i(88800),
                r = i(55482),
                n = i(84961),
                o = i(53548),
                s = i(2058),
                l = i(88969),
                d = i(58390),
                c = i(17392),
                u = i(79070),
                m = i(96817),
                _ = i(52300),
                f = i(66719),
                p = i(29504),
                v = i(71344),
                h = i(37717),
                x = i(39631),
                y = i(98427),
                g = i(46422),
                b = i(44230),
                T = i(72288),
                C = i(12342),
                j = i.n(C);
            let A = (0, n.PA)(() => {
                let e = (0, x._)(),
                    {
                        search: t,
                        user: i,
                        settings: { isMobile: n },
                    } = (0, T.g)(),
                    { setContentScrollRef: C } = (0, b.g)(),
                    { formatMessage: A } = (0, s.A)(),
                    N = (0, g.W)(),
                    k = (0, o.useRef)(!1),
                    P = (0, o.useRef)(null),
                    I = (0, h.t)(() => {
                        k.current = !0;
                    }),
                    S = t.historyPage.items.length;
                (i.isAuthorized && (0, d.notFound)(),
                    (0, o.useEffect)(() => {
                        P.current && N.canBack && P.current.focus();
                    }, [N.canBack]),
                    (0, o.useEffect)(
                        () => () => {
                            (null == k ? void 0 : k.current) ? (t.resetHistoryItems(), (k.current = !1)) : t.resetHistoryStateRequest();
                        },
                        [t],
                    ));
                let E = (0, o.useMemo)(
                        () =>
                            (0, r.A)(() => {
                                null == N || N.back();
                            }, 200),
                        [N],
                    ),
                    O = (0, u.L)(() =>
                        S
                            ? (0, a.jsx)('div', {
                                  className: j().items,
                                  children: t.historyPage.items.reduce((t, i, a) => {
                                      let r = (0, v.G)({ item: i, index: a, pageId: y.b.SEARCH, objectPosX: 1, objectPosY: t.length + 1, renderVibeControls: e });
                                      return ((0, o.isValidElement)(r) && t.push(r), t);
                                  }, []),
                              })
                            : (0, a.jsx)(p.HL, {
                                  className: j().emptyHistory,
                                  variant: 'div',
                                  size: 'm',
                                  type: 'text',
                                  children: (0, a.jsx)(l.A, { id: 'search.history-empty' }),
                              }),
                    );
                return (
                    t.isHistoryReady && i.account.data.uid && (0, o.use)(t.getHistory({ userId: i.account.data.uid })),
                    (0, a.jsx)('div', {
                        className: j().root,
                        'data-test-id': c.Xk.search.SEARCH_HISTORY_PAGE,
                        children: (0, a.jsxs)(f.N, {
                            className: j().scrollContent,
                            containerClassName: j().scrollContainer,
                            ref: C,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: j().header,
                                    children: [
                                        (0, a.jsxs)('div', {
                                            className: j().title,
                                            children: [
                                                N.canBack &&
                                                    (0, a.jsx)(m.$, {
                                                        ref: P,
                                                        'aria-label': A({ id: 'navigation.go-back' }),
                                                        radius: 'round',
                                                        disabled: !N.canBack,
                                                        size: 's',
                                                        icon: (0, a.jsx)(_.I, { size: 'xxs', variant: 'arrowLeft' }),
                                                        onClick: E,
                                                    }),
                                                (0, a.jsx)(p.DZ, { variant: 'h2', size: n ? 'm' : 'xl', children: (0, a.jsx)(l.A, { id: 'search.history' }) }),
                                            ],
                                        }),
                                        (0, a.jsx)(m.$, {
                                            'aria-label': A({ id: 'search.clear-history' }),
                                            radius: 'xxxl',
                                            variant: 'outline',
                                            disabled: !S,
                                            size: n ? 's' : 'default',
                                            onClick: I,
                                            children: (0, a.jsx)(p.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                type: 'text',
                                                children: (0, a.jsx)(l.A, { id: 'search.clear-history' }),
                                            }),
                                        }),
                                    ],
                                }),
                                !t.isHistoryLoading && O,
                            ],
                        }),
                    })
                );
            });
        },
        85902: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => _ });
            var a = i(88800),
                r = i(96706),
                n = i(53548),
                o = i(2058),
                s = i(79390),
                l = i(29595),
                d = i(74965),
                c = i(72288),
                u = i(66943),
                m = i(30832);
            let _ = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, d.l)(),
                    [_, f] = (0, n.useState)(!1),
                    { formatMessage: p } = (0, o.A)();
                return (0, n.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, a.jsx)(u.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (_) return;
                    let n = { ...(0, r.HO)(e), url: e.url, isLiked: !e.isLiked };
                    f(!0);
                    let o = await e.toggleLike();
                    (f(!1),
                        o === s.f.OK
                            ? i((0, a.jsx)(m.T, { playlist: n }), { containerId: l.u.INFO })
                            : i((0, a.jsx)(u.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [t.isAuthorized, _, e, p, i]);
            };
        },
        85925: (e) => {
            e.exports = {
                root: 'VibeSmallView_root__6IYFM',
                root_radius_xs: 'VibeSmallView_root_radius_xs__hrEG3',
                root_radius_round: 'VibeSmallView_root_radius_round__t4uAR',
                root_withShadow: 'VibeSmallView_root_withShadow__HU7NP',
            };
        },
        87724: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                dateWithName: 'PodcastMeta_dateWithName__cKy0o',
                podcastMetaContainer: 'PodcastMeta_podcastMetaContainer__pFASj',
                podcastTitleContainer: 'PodcastMeta_podcastTitleContainer__p9Zja',
                podcastName: 'PodcastMeta_podcastName__iQeNK',
                progress: 'PodcastMeta_progress__5DqlO',
                progress_disabled: 'PodcastMeta_progress_disabled__KX04q',
                progress_withPreviousInfo: 'PodcastMeta_progress_withPreviousInfo__eOrCi',
                soonDate: 'PodcastMeta_soonDate__zGuG9',
                dateDisabled: 'PodcastMeta_dateDisabled__DxjtJ',
                dateDisliked: 'PodcastMeta_dateDisliked__95MlL',
            };
        },
        89718: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => m });
            var a = i(88800),
                r = i(84961),
                n = i(88969),
                o = i(17392),
                s = i(52300),
                l = i(19934),
                d = i(21416),
                c = i(72288),
                u = i(27817);
            let m = (0, r.PA)((e) => {
                var t;
                let { room: i, onRenameClick: r, isRenamePending: m, onPinClick: _, onExitClick: f, isExitPending: p, className: v } = e,
                    {
                        settings: { isMobile: h },
                    } = (0, c.g)(),
                    x = !(null == i ? void 0 : i.isDisabled) && !h,
                    y = !(null == i ? void 0 : i.isDisabled) && !h;
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        x && (0, a.jsx)(u.L, { className: v, onClick: _, isPinned: null == (t = i.wave) ? void 0 : t.isPinned }),
                        y &&
                            (0, a.jsx)(l.Dr, {
                                className: v,
                                icon: (0, a.jsx)(s.I, { variant: 'edit', size: 'xxs' }),
                                onClick: r,
                                disabled: m,
                                spinner: m ? (0, a.jsx)(d.y, { size: 'xs' }) : void 0,
                                'data-test-id': o.OA.vibe.VIBE_ROOM_CONTEXT_MENU_RENAME_BUTTON,
                                children: (0, a.jsx)(n.A, { id: 'interface-actions.rename' }),
                            }),
                        (0, a.jsx)(l.Dr, {
                            className: v,
                            icon: (0, a.jsx)(s.I, { variant: 'bucket', size: 'xxs' }),
                            onClick: f,
                            disabled: p,
                            spinner: p ? (0, a.jsx)(d.y, { size: 'xs' }) : void 0,
                            'data-test-id': o.OA.vibe.VIBE_ROOM_CONTEXT_MENU_EXIT_BUTTON,
                            children: (0, a.jsx)(n.A, { id: 'interface-actions.delete-multivibe' }),
                        }),
                    ],
                });
            });
        },
        91106: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => n });
            var a = i(53548),
                r = i(2058);
            let n = () => {
                let { formatMessage: e } = (0, r.A)();
                return (0, a.useCallback)(
                    function (t) {
                        let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            a = Math.floor(t / 60),
                            r = function (t) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    a = e({ id: 'time.minutes-left' }, { minutes: t });
                                return i ? ''.concat(e({ id: 'time.left' }, { time: t }), ' ').concat(a) : a;
                            };
                        if (t < 1) return e({ id: 'time.finished' });
                        if (t < 60)
                            return (function (t) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    a = e({ id: 'time.seconds-left' }, { seconds: t });
                                return i ? ''.concat(e({ id: 'time.left' }, { time: t }), ' ').concat(a) : a;
                            })(Math.floor(t), i);
                        if (a < 60) return r(a, i);
                        let n = Math.floor(a / 60),
                            o = a % 60,
                            s = (function (t) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return i ? e({ id: 'time.hours-left' }, { hours: t }) : e({ id: 'time.hours' }, { hours: t });
                            })(n, i);
                        return o > 0 ? ''.concat(s, ' ').concat(r(o)) : s;
                    },
                    [e],
                );
            };
        },
        91292: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => _ });
            var a = i(88800),
                r = i(53548),
                n = i(12389),
                o = i.n(n),
                s = i(29993),
                l = i(65453),
                d = i(46079),
                c = i(67174);
            let u = (e) => {
                    let [t, i] = (0, r.useState)(!1),
                        n = (0, s.c)(() => {
                            i(!0);
                        });
                    return (0, a.jsx)(o(), { prefetch: t, ...e, onMouseEnter: n });
                },
                m = (e) => {
                    let { forwardedRef: t, href: i, component: n, ...s } = e,
                        { isPrefetchDisabled: m, isPrefetchOnHover: _ } = (0, r.useContext)(d.j),
                        { href: f, target: p, rel: v } = (0, c.u)(null != i ? i : ''),
                        h = (0, r.isValidElement)(n)
                            ? n
                            : (function (e, t, i) {
                                  return e ? (t ? (0, a.jsx)(o(), { prefetch: !1 }) : i ? (0, a.jsx)(u, { href: e }) : (0, a.jsx)(o(), {})) : (0, a.jsx)('a', {});
                              })(i, m, _);
                    return (0, a.jsx)(l.N, { ref: t, component: h, href: i ? f : void 0, target: p, rel: v, ...s });
                },
                _ = (0, r.forwardRef)((e, t) => (0, a.jsx)(m, { ...e, forwardedRef: t }));
        },
        91959: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => r });
            var a = i(58217);
            let r = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: r } = e;
                return (0, a.l)({ entity: t, callback: i, modalBehavior: void 0 === r ? void 0 : { shouldHistoryBack: r }, preventDefaultWhenSafe: !0 });
            };
        },
        92152: (e) => {
            e.exports = {
                root: 'ListeningProgress_root__Rvlcn',
                text_withoutTimeLeft: 'ListeningProgress_text_withoutTimeLeft__eAmOF',
                checkIcon: 'ListeningProgress_checkIcon___yh49',
            };
        },
        93512: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => r });
            var a = i(51231);
            let r = (e) => {
                var t;
                if (e) return { animationUri: e.animationUri, cover: (0, a.p)(e.cover), entityType: null == (t = e.entity) ? void 0 : t.type };
            };
        },
        95641: (e) => {
            e.exports = {
                root_withLongText: 'BaseNotificationPin_root_withLongText__BKqhi',
                title: 'BaseNotificationPin_title__46xmX',
                link: 'BaseNotificationPin_link__4EvPj',
                capitalizedEntity: 'BaseNotificationPin_capitalizedEntity__HePYm',
                text: 'BaseNotificationPin_text__LF3L_',
                image: 'BaseNotificationPin_image__O7ptT',
            };
        },
        95993: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => n });
            var a = i(58217),
                r = i(85587);
            let n = (e) => {
                let { track: t, callback: i, disclaimerRejectHandler: n } = e;
                return (0, a.l)({ entity: t, entityType: r.n.TRACK, callback: i, onReject: n, preventDefaultWhenSafe: !1 });
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7191, 9904, 3078, 8194, 1833, 918, 1191, 1041, 2803, 964, 6706, 4771, 1311, 5201, 2662, 6904, 1898, 2058, 3578, 8628, 4378, 9780, 9332, 2837, 9027, 4732,
                9087, 3979, 6719, 1928, 9091, 9124, 9934, 7670, 4441, 6374, 8979, 818, 1401, 763, 2670, 7358,
            ],
            () => e((e.s = 3451)),
        ),
            (_N_E = e.O()));
    },
]);
