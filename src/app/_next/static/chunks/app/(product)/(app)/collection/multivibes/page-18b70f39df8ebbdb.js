(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9754],
    {
        188: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => n });
            var a = i(18593);
            function n(e) {
                return (null == e ? void 0 : e.data.type) === a.K.Vibe;
            }
        },
        202: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => o });
            var a = i(39499),
                n = i(29993);
            let o = (e) => {
                let { format: t, onSuccess: i, onError: o } = e;
                return {
                    startClipboardWrite: (0, n.c)(() => {
                        let e = () => void 0,
                            n = () => void 0,
                            r = !1,
                            s = new Promise((t, i) => {
                                ((e = t), (n = i));
                            }),
                            l = (async (e) => {
                                try {
                                    (await window.navigator.clipboard.write([e]), null == i || i());
                                } catch (e) {
                                    r || null == o || o(e);
                                }
                            })(new ClipboardItem({ 'text/plain': (async () => new Blob([await s], { type: 'text/plain' }))() }));
                        return {
                            copy: (i) => (e(t(i)), l),
                            cancel: () => {
                                ((r = !0), n(new a.t('Clipboard write cancelled')));
                            },
                        };
                    }),
                };
            };
        },
        1344: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => n });
            let a = [
                    { queryKey: 'utm_campaign', resultKey: 'utmCampaign' },
                    { queryKey: 'utm_medium', resultKey: 'utmMedium' },
                    { queryKey: 'utm_source', resultKey: 'utmSource' },
                    { queryKey: 'utm_term', resultKey: 'utmTerm' },
                    { queryKey: 'yclid', resultKey: 'yclid' },
                ],
                n = (e) =>
                    a.reduce((t, i) => {
                        let { queryKey: a, resultKey: n } = i;
                        return ('string' == typeof e[a] && (t[n] = e[a]), t);
                    }, {});
        },
        4370: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => n });
            var a = i(67174);
            let n = {
                main: (0, a.u)('/'),
                chart: (0, a.u)('/chart'),
                chartPodcasts: (0, a.u)('/chart/podcasts'),
                collection: (0, a.u)('/collection'),
                collectionAlbums: (0, a.u)('/collection/albums'),
                collectionArtists: (0, a.u)('/collection/artists'),
                collectionClips: (0, a.u)('/collection/clips'),
                collectionDislikes: (0, a.u)('/collection/dislikes'),
                collectionKids: (0, a.u)('/collection/kids'),
                collectionKidsAlbums: (0, a.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, a.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, a.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, a.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, a.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, a.u)('/collection/multivibes'),
                collectionVibes: (0, a.u)('/collection/vibes'),
                collectionPlaylists: (0, a.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, a.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, a.u)('/collection/playlists/liked'),
                collectionShelf: (0, a.u)('/collection/shelf'),
                collectionShelfLiked: (0, a.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, a.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, a.u)('/collection/shelf/recently-played'),
                concerts: (0, a.u)('/concerts'),
                kids: (0, a.u)('/kids'),
                mixes: (0, a.u)('/mixes'),
                musicHistory: (0, a.u)('/music-history'),
                muzmarket: (0, a.u)('/muzmarket'),
                mymusic: (0, a.u)('/mymusic'),
                mymusicDownloadsTracks: (0, a.u)('/mymusic/downloads/tracks'),
                multivibe: (0, a.u)('/multivibe'),
                nonMusic: (0, a.u)('/non-music'),
                pay: (0, a.u)('/pay'),
                userSlides: (0, a.u)('/slides/user'),
                search: (0, a.u)('/search'),
                searchHistory: (0, a.u)('/search/history'),
                settings: (0, a.u)('/settings'),
                video: (0, a.u)('/video'),
            };
        },
        5407: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => p });
            var a = i(88800),
                n = i(29993),
                o = i(88969),
                r = i(29504),
                s = i(59304),
                l = i(51028),
                c = i.n(l);
            let u = () =>
                (0, a.jsx)(s.$, {
                    message: (0, a.jsx)(r.HL, { variant: 'div', size: 'm', className: c().notification, children: (0, a.jsx)(o.A, { id: 'ads.continue-ad' }) }),
                    coverRadius: 's',
                });
            var d = i(29595),
                _ = i(74965),
                m = i(72288);
            let p = () => {
                let { notify: e } = (0, _.l)(),
                    { advert: t } = (0, m.g)();
                return (0, n.c)(() => (t.isAdvertShown && e((0, a.jsx)(u, {}), { containerId: d.u.INFO }), !!t.isAdvertShown));
            };
        },
        7628: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => m });
            var a = i(88800),
                n = i(88969),
                o = i(58390),
                r = i(17392),
                s = i(29993),
                l = i(96817),
                c = i(29504),
                u = i(99890),
                d = i(4086),
                _ = i(41928);
            let m = (e) => {
                let { size: t = 'm', variant: i = 'default', color: m = 'primary', withRipple: p = !0, buttonText: v, isBlock: f, key: y, className: b } = e,
                    g = (0, o.useRouter)(),
                    A = (0, _.N)().get(d.QG),
                    I = (0, s.c)(() => {
                        A.authorizationUrl && ((0, u.uV)({ stage: 'attempt-start', trigger: 'user' }), g.push(A.authorizationUrl));
                    });
                return (0, a.jsx)(
                    l.$,
                    {
                        onClick: I,
                        className: b,
                        isBlock: f,
                        color: m,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': r.S7.UNAUTHORIZED_BUTTON,
                        children: v || (0, a.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, a.jsx)(n.A, { id: 'authorization.enter-button' }) }),
                    },
                    y,
                );
            };
        },
        8962: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => o });
            var a = i(51235),
                n = i(80989);
            let o = (e, t) => (0, a.A)((0, n.f)(e), (0, n.f)(t));
        },
        9630: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => n, e: () => o });
            var a = i(53548);
            let n = (0, a.createContext)(null);
            function o() {
                return (0, a.useContext)(n);
            }
        },
        11325: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'PlayButtonWithCover_root__s6Orw',
                coverImage: 'PlayButtonWithCover_coverImage__DhS1R',
                cover: 'PlayButtonWithCover_cover__5__Ms',
                playingAnimation: 'PlayButtonWithCover_playingAnimation__HWuOW',
                control: 'PlayButtonWithCover_control__iZy3t',
                playButton: 'PlayButtonWithCover_playButton__rV9pQ',
                playButton_loading: 'PlayButtonWithCover_playButton_loading__bqydK',
                'applying-setting': 'PlayButtonWithCover_applying-setting__ZvViA',
                root_current: 'PlayButtonWithCover_root_current__2QYEm',
                root_playing: 'PlayButtonWithCover_root_playing__tAgph',
                root_disabled: 'PlayButtonWithCover_root_disabled__EHoIx',
                root_disliked: 'PlayButtonWithCover_root_disliked__FoWzV',
                spinner: 'PlayButtonWithCover_spinner__ryn04',
                playButtonIcon: 'PlayButtonWithCover_playButtonIcon__DRjkN',
            };
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
        15077: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => a });
            var a = (function (e) {
                return (
                    (e.ARTIST = 'artist'),
                    (e.ALBUM = 'album'),
                    (e.PLAYLIST = 'playlist'),
                    (e.TRACK = 'track'),
                    (e.VIBE = 'vibe'),
                    (e.PODCAST = 'podcast'),
                    (e.PODCAST_EPISODE = 'podcast-episode'),
                    (e.AUDIOBOOK = 'audiobook'),
                    (e.AUDIOBOOK_EPISODE = 'audiobook-episode'),
                    (e.FAIRY_TALE = 'fairy-tale'),
                    (e.CLIP = 'clip'),
                    e
                );
            })({});
        },
        15324: (e) => {
            e.exports = { root: 'VirtualGrid_root__nSEzJ', column: 'VirtualGrid_column__P8hJp', row: 'VirtualGrid_row__PL5V_' };
        },
        15947: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => s });
            var a = i(35412),
                n = i(28166),
                o = i(97261);
            let r = [a.cy.HTTP, a.cy.HTTPS, a.cy.MAILTO, a.cy.TEL, n.Lz],
                s = (e, t, i) => {
                    let s;
                    try {
                        s = new URL(t);
                    } catch (e) {
                        return null;
                    }
                    let l = (0, a.Rj)(e, { allowedProtocols: new Set([...r, s.protocol]), baseUrl: s.href });
                    return l.isAllowed
                        ? l.url.protocol === n.Lz
                            ? { type: o.I.DEEPLINK, href: e }
                            : '_blank' !== i && ((e, t) => e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port)(l.url, s)
                              ? { type: o.I.INTERNAL, href: e }
                              : { type: o.I.EXTERNAL, href: e }
                        : null;
                };
        },
        16112: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => S });
            var a = i(88800),
                n = i(96706),
                o = i(53548),
                r = i(2058),
                s = i(42078),
                l = i(29595),
                c = i(74965),
                u = i(72288),
                d = i(66943),
                _ = i(65724),
                m = i(84961),
                p = i(17392),
                v = i(79070),
                f = i(90688),
                y = i(97956),
                b = i(90420),
                g = i(15077),
                A = i(33719),
                I = i(55211),
                T = i(14329),
                x = i.n(T);
            let E = (0, m.PA)((e) => {
                let { vibe: t, closeToast: i } = e,
                    { experiments: n } = (0, u.g)(),
                    o = n.checkExperiment(y.z.WebNextWaveAgentExperiment, 'on'),
                    r = t.type === b.q7,
                    s = (0, v.L)(() => {
                        var e;
                        return o && t.agent
                            ? (0, a.jsx)(I.n, {
                                  agent: t.agent,
                                  shouldShowControl: !1,
                                  className: (0, _.$)(x().view, { [x().multivibeContainer]: r }),
                                  coverClassName: (0, _.$)({ [x().multivibeCover]: r }),
                                  entityCoverClassName: (0, _.$)({ [x().multivibeAvatar]: r }),
                                  controlClassName: (0, _.$)({ [x().multivibeControl]: r }),
                              })
                            : (0, a.jsx)(f._V, {
                                  className: x().image,
                                  src: t.backgroundImageUrl,
                                  size: 100,
                                  fit: 'cover',
                                  withAvatarReplace: !0,
                                  'aria-hidden': !0,
                                  style: { backgroundColor: null == (e = t.colors) ? void 0 : e.average },
                                  withLoadingIndicator: !1,
                                  'data-test-id': p.S7.BASE_NOTIFICATION_PIN_VIBE_COVER,
                              });
                    }),
                    l = o && t.agent ? void 0 : 'round';
                return (0, a.jsx)(A.k, {
                    closeToast: i,
                    entityVariant: g.c.VIBE,
                    entityTitle: t.title,
                    entityDescription: t.getDescription(),
                    isPinned: t.isPinned,
                    customCover: s,
                    radius: l,
                    className: x().root,
                });
            });
            var h = i(93512);
            let S = (e) => {
                let { user: t, pinsCollection: i } = (0, u.g)(),
                    { notify: _ } = (0, c.l)(),
                    { formatMessage: m } = (0, r.A)(),
                    [p, v] = (0, o.useState)(!1);
                return (0, o.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void _((0, a.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (p) return;
                    let o = { ...(0, n.HO)(e), isPinned: !e.isPinned, getDescription: e.getDescription },
                        r = (0, n.HO)(i.get(e.pinId));
                    v(!0);
                    let c = await e.togglePin();
                    (v(!1),
                        r &&
                            r.type === s._.WAVE_ITEM &&
                            r.data.backgroundImageUrl &&
                            ((o.backgroundImageUrl = r.data.backgroundImageUrl), (o.colors = r.data.colors), (o.agent = r.data.agent)),
                        c &&
                            'object' == typeof c &&
                            'data' in c &&
                            (c.data.backgroundImageUrl && (o.backgroundImageUrl = c.data.backgroundImageUrl),
                            c.data.colors && (o.colors = { average: c.data.colors.average, waveText: c.data.colors.waveText }),
                            c.data.agent && (o.agent = (0, h.K)(c.data.agent))),
                        c
                            ? _((0, a.jsx)(E, { vibe: o }), { containerId: l.u.INFO })
                            : _((0, a.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [m, _, p, i, t.isAuthorized, e]);
            };
        },
        16704: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => m });
            var a = i(88800),
                n = i(84961),
                o = i(53548),
                r = i(2058),
                s = i(46482),
                l = i(17392),
                c = i(29993),
                u = i(96817),
                d = i(52300);
            let _ = (0, n.PA)((e) => {
                    let {
                            iconSize: t,
                            className: i,
                            size: n,
                            variant: o = 'default',
                            isPlaying: _ = !1,
                            onClick: m,
                            iconClassName: p,
                            disabled: v,
                            color: f,
                            buttonVariant: y = 'text',
                            children: b,
                            radius: g = 'round',
                            withHover: A,
                            withRipple: I = !1,
                            ariaDescribedBy: T,
                            forwardRef: x,
                            tabIndex: E,
                            ariaHidden: h,
                            shouldSendAnalyticsOnPlayClick: S,
                        } = e,
                        C = (0, s.g)(),
                        { formatMessage: L } = (0, r.A)(),
                        N = ''.concat(_ ? 'pause' : 'play').concat('filled' === o ? '_filled' : ''),
                        R = _ ? l.S7.PAUSE_BUTTON : l.S7.PLAY_BUTTON,
                        O = L(_ ? { id: 'player-actions.pause' } : { id: 'player-actions.play' }),
                        P = (0, c.c)((e) => {
                            (e.stopPropagation(), e.preventDefault(), null == m || m(e), S && !_ && C());
                        });
                    return (0, a.jsx)(u.$, {
                        className: i,
                        variant: y,
                        color: f,
                        radius: g,
                        size: n,
                        flexIcon: !0,
                        withRipple: I,
                        'aria-label': O,
                        onClick: P,
                        icon: (0, a.jsx)(d.I, { variant: N, size: t, className: p }),
                        disabled: v,
                        withHover: A,
                        'aria-describedby': T,
                        ref: x,
                        tabIndex: E,
                        'aria-hidden': h,
                        'data-test-id': R,
                        children: b,
                    });
                }),
                m = (0, o.forwardRef)((e, t) => (0, a.jsx)(_, { forwardRef: t, ...e }));
        },
        21284: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { h: () => a }),
                (function (e) {
                    ((e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), (e.ARTIST = 'artist'));
                })(a || (a = {})));
        },
        21416: (e, t, i) => {
            'use strict';
            i.d(t, { y: () => s });
            var a = {
                    5881: (e, t, i) => {
                        function a() {
                            for (var e, t, i = 0, a = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            a,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (a = e(t[i])) && (n && (n += ' '), (n += a));
                                            else for (i in t) t[i] && (n && (n += ' '), (n += i));
                                        return n;
                                    })(e)) &&
                                    (a && (a += ' '), (a += t));
                            return a;
                        }
                        (i.r(t), i.d(t, { clsx: () => a, default: () => n }));
                        let n = a;
                    },
                    2059: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = {
                            root: 'i0E_2NX4cuGTUSRVsza3',
                            rotate: 'SMKp_W9v6gety5k24_TU',
                            root_size_xxxs: 'OSqyMcSTAjYqzIL992Yw',
                            root_size_xxs: 'wc4asYHkCHxWpvH_vfHV',
                            root_size_xs: '_EehQphkMVEVJTlcOqgz',
                            root_size_s: 'R_2xF0Onip_K0GrDRV97',
                            root_size_m: 'tQV7pWeuTErBtRna7Fxx',
                            root_size_l: 'OJsrGLXpsIsmbj65C9AC',
                            root_size_xl: 'Vo4fBR82NKcVtfQCh508',
                            root_size_xxl: 'F45u5jR26w00BDX1OFHX',
                            gradient: 'xNNiKSvH1JTxlAkvyDlr',
                        };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function a(e, t, a) {
                            var n = null;
                            if ((void 0 !== a && (n = '' + a), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var o in ((a = {}), t)) 'key' !== o && (a[o] = t[o]);
                            else a = t;
                            return { $$typeof: i, type: e, key: n, ref: void 0 !== (t = a.ref) ? t : null, props: a };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = a), (t.jsxs = a));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    7279: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Spinner = void 0));
                        let n = i(4377),
                            o = i(5881),
                            r = a(i(2059));
                        t.Spinner = (e) => {
                            let { className: t, thicknessSizeRatio: i = 0.1, paddingSizeRatio: a = 0.08, size: s, ...l } = e,
                                c = 100 * i,
                                u = 50 - c / 2 - 100 * a,
                                d = ((3 * Math.PI) / 2) * u;
                            return (0, n.jsxs)('svg', {
                                viewBox: '0 0 '.concat(100, ' ').concat(100),
                                className: (0, o.clsx)(r.default.root, r.default['root_size_'.concat(s)], t),
                                'aria-hidden': !0,
                                ...l,
                                children: [
                                    (0, n.jsx)('defs', {
                                        children: (0, n.jsx)('mask', {
                                            id: 'mask',
                                            maskContentUnits: 'userSpaceOnUse',
                                            children: (0, n.jsx)('circle', {
                                                cx: 50,
                                                cy: 50,
                                                r: u,
                                                stroke: 'white',
                                                strokeLinecap: 'round',
                                                strokeWidth: c,
                                                strokeDasharray: d,
                                                fill: 'none',
                                            }),
                                        }),
                                    }),
                                    (0, n.jsx)('foreignObject', {
                                        x: '0',
                                        y: '0',
                                        width: 100,
                                        height: 100,
                                        mask: 'url(#mask)',
                                        children: (0, n.jsx)('div', { className: r.default.gradient }),
                                    }),
                                ],
                            });
                        };
                    },
                },
                n = {};
            function o(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var i = (n[e] = { exports: {} });
                return (a[e].call(i.exports, i, i.exports, o), i.exports);
            }
            ((o.d = (e, t) => {
                for (var i in t) o.o(t, i) && !o.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (o.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var r = {};
            (() => {
                (Object.defineProperty(r, 'X', { value: !0 }), (r.$ = void 0));
                var e = o(7279);
                Object.defineProperty(r, '$', {
                    enumerable: !0,
                    get: function () {
                        return e.Spinner;
                    },
                });
            })();
            var s = r.$;
            r.X;
        },
        21576: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => d });
            var a = i(88800),
                n = i(84961),
                o = i(53548),
                r = i(50408),
                s = i(47969),
                l = i(53360),
                c = i(15324),
                u = i.n(c);
            let d = (0, n.PA)((e) => {
                let {
                        count: t,
                        rowGap: i,
                        columnGap: n,
                        getEstimateRowSize: c,
                        minColumnCount: d = 2,
                        minColumnWidth: _,
                        maxColumnWidth: m,
                        maxColumnCount: p,
                        renderItemByIndex: v,
                        onChangeRange: f,
                    } = e,
                    [y, b] = (0, r.d)(),
                    {
                        virtualizer: g,
                        rowResizeObserver: A,
                        columnCount: I,
                        indices: T,
                    } = (0, s.L)({
                        count: t,
                        rowGap: i,
                        columnGap: n,
                        getEstimateRowSize: c,
                        minColumnCount: d,
                        minColumnWidth: _,
                        maxColumnWidth: m,
                        maxColumnCount: p,
                        containerRef: y,
                    });
                (0, o.useEffect)(() => {
                    !g.isScrolling && g.range && (null == f || f(g.range, I));
                }, [f, g.isScrolling, g.range, I]);
                let x = { '--virtual-grid-height': ''.concat(g.getTotalSize(), 'px'), '--virtual-grid-column-count': I, '--virtual-grid-column-gap': ''.concat(n, 'px') };
                return (0, a.jsx)('div', {
                    ref: b,
                    style: x,
                    className: u().root,
                    children: g
                        .getVirtualItems()
                        .map((e) =>
                            (0, a.jsx)(
                                l.U,
                                {
                                    className: u().row,
                                    columnClassName: u().column,
                                    virtualItem: e,
                                    resizeObserver: A,
                                    indices: T,
                                    renderItemByIndex: v,
                                    scrollMargin: g.options.scrollMargin,
                                },
                                e.key,
                            ),
                        ),
                });
            });
        },
        27262: (e) => {
            e.exports = {
                animation_scaled: 'PinButton_animation_scaled__Aj6LA',
                scale: 'PinButton_scale__nyvJS',
                animation_unscaled: 'PinButton_animation_unscaled__QM3sC',
                unscale: 'PinButton_unscale__a8LwS',
            };
        },
        27506: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => a });
            var a = (function (e) {
                return ((e.OK = 'ok'), (e.ERROR = 'error'), e);
            })({});
        },
        27817: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => d });
            var a = i(88800),
                n = i(84961),
                o = i(53548),
                r = i(88969),
                s = i(17392),
                l = i(52300),
                c = i(19934),
                u = i(72288);
            let d = (0, n.PA)((e) => {
                let { isPinned: t, onClick: i, disabled: n, className: d, iconClassName: _ } = e,
                    { user: m } = (0, u.g)(),
                    p = t ? 'unpin' : 'pin',
                    v = t ? s.S7.CONTEXT_MENU_UNPIN_BUTTON : s.S7.CONTEXT_MENU_PIN_BUTTON,
                    f = (0, o.useMemo)(() => (t ? (0, a.jsx)(r.A, { id: 'interface-actions.unpin' }) : (0, a.jsx)(r.A, { id: 'interface-actions.pin' })), [t]);
                return (0, a.jsx)(c.Dr, {
                    className: d,
                    onClick: i,
                    icon: (0, a.jsx)(l.I, { className: _, variant: p, size: 'xxs' }),
                    'data-test-id': v,
                    disabled: n || !m.isAuthorized,
                    children: f,
                });
            });
        },
        28166: (e, t, i) => {
            'use strict';
            i.d(t, { Lz: () => a, ov: () => n });
            let a = ''.concat('yandexmusic', ':'),
                n = ''.concat(a, '//');
        },
        31510: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => a });
            let a = (e) => ({ uri: e.uri, color: e.color });
        },
        33719: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => A });
            var a = i(88800),
                n = i(65724),
                o = i(53548),
                r = i(17392),
                s = i(90688),
                l = i(73170),
                c = i(29504),
                u = i(2058),
                d = i(88969),
                _ = i(29993),
                m = i(15077),
                p = i(72288),
                v = i(97956),
                f = i(91292),
                y = i(59304),
                b = i(95641),
                g = i.n(b);
            let A = (e) => {
                let {
                        closeToast: t,
                        className: i,
                        coverUri: b,
                        entityTitle: A,
                        entityDescription: I,
                        entityVariant: T,
                        entityUrl: x,
                        customCover: E,
                        radius: h,
                        isPinned: S,
                    } = e,
                    C = (() => {
                        let { formatMessage: e } = (0, u.A)(),
                            { experiments: t } = (0, p.g)();
                        return (0, _.c)((i) => {
                            let { entityVariant: n, values: o, entityTitle: r, entityDescription: s } = i;
                            switch (n) {
                                case m.c.ALBUM:
                                    return {
                                        caption: (0, a.jsx)(d.A, { id: 'notifications-info.album-pinned-in-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.album-pinned-in-menu' }, { entity: r }),
                                    };
                                case m.c.AUDIOBOOK:
                                    return {
                                        caption: (0, a.jsx)(d.A, { id: 'notifications-info.audiobook-pinned-in-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.audiobook-pinned-in-menu' }, { entity: r }),
                                    };
                                case m.c.FAIRY_TALE:
                                    return {
                                        caption: (0, a.jsx)(d.A, { id: 'notifications-info.fairytale-pinned-in-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.fairytale-pinned-in-menu' }, { entity: r }),
                                    };
                                case m.c.PODCAST:
                                    return {
                                        caption: (0, a.jsx)(d.A, { id: 'notifications-info.podcast-pinned-in-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.podcast-pinned-in-menu' }, { entity: r }),
                                    };
                                case m.c.PLAYLIST:
                                    return {
                                        caption: (0, a.jsx)(d.A, { id: 'notifications-info.playlist-pinned-in-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.playlist-pinned-in-menu' }, { entity: r }),
                                    };
                                case m.c.ARTIST:
                                    return {
                                        caption: (0, a.jsx)(d.A, { id: 'notifications-info.artist-pinned-in-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.artist-pinned-in-menu' }, { entity: r }),
                                    };
                                case m.c.VIBE:
                                    if (!t.checkExperiment(v.z.WebNextVibeDescription, 'on'))
                                        return {
                                            caption: (0, a.jsx)(d.A, { id: 'notifications-info.my-vibe-pinned-in-menu', values: o }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-pinned-in-menu' }, { entity: r }),
                                        };
                                    return {
                                        caption: (0, a.jsx)(d.A, { id: 'notifications-info.entity-pinned-in-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.entity-pinned-in-menu' }, { entity: r, description: s }),
                                    };
                            }
                        });
                    })(),
                    L = (() => {
                        let { formatMessage: e } = (0, u.A)(),
                            { experiments: t } = (0, p.g)();
                        return (0, _.c)((i) => {
                            let { entityVariant: n, values: o, entityTitle: r, entityDescription: s } = i;
                            switch (n) {
                                case m.c.ALBUM:
                                    return {
                                        caption: (0, a.jsx)(d.A, { id: 'notifications-info.album-unpinned-from-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.album-unpinned-from-menu' }, { entity: r }),
                                    };
                                case m.c.AUDIOBOOK:
                                    return {
                                        caption: (0, a.jsx)(d.A, { id: 'notifications-info.audiobook-unpinned-from-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.audiobook-unpinned-from-menu' }, { entity: r }),
                                    };
                                case m.c.FAIRY_TALE:
                                    return {
                                        caption: (0, a.jsx)(d.A, { id: 'notifications-info.fairytale-unpinned-from-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.fairytale-unpinned-from-menu' }, { entity: r }),
                                    };
                                case m.c.PODCAST:
                                    return {
                                        caption: (0, a.jsx)(d.A, { id: 'notifications-info.podcast-unpinned-from-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.podcast-unpinned-from-menu' }, { entity: r }),
                                    };
                                case m.c.PLAYLIST:
                                    return {
                                        caption: (0, a.jsx)(d.A, { id: 'notifications-info.playlist-unpinned-from-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.playlist-unpinned-from-menu' }, { entity: r }),
                                    };
                                case m.c.ARTIST:
                                    return {
                                        caption: (0, a.jsx)(d.A, { id: 'notifications-info.artist-unpinned-from-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.artist-unpinned-from-menu' }, { entity: r }),
                                    };
                                case m.c.VIBE:
                                    if (!t.checkExperiment(v.z.WebNextVibeDescription, 'on'))
                                        return {
                                            caption: (0, a.jsx)(d.A, { id: 'notifications-info.my-vibe-unpinned-from-menu', values: o }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-unpinned-from-menu' }, { entity: r }),
                                        };
                                    return {
                                        caption: (0, a.jsx)(d.A, { id: 'notifications-info.entity-unpinned-from-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.entity-unpinned-from-menu' }, { entity: r, description: s }),
                                    };
                            }
                        });
                    })(),
                    N = (0, o.useMemo)(
                        () =>
                            x
                                ? (0, a.jsx)(f.N, {
                                      className: g().link,
                                      href: x,
                                      title: A,
                                      children: (0, a.jsxs)(c.HL, {
                                          className: g().title,
                                          variant: 'span',
                                          type: 'controls',
                                          size: 'm',
                                          lineClamp: 1,
                                          children: ['\xa0', A, '\xa0'],
                                      }),
                                  })
                                : (0, a.jsxs)(c.HL, {
                                      className: g().title,
                                      variant: 'span',
                                      type: 'controls',
                                      size: 'm',
                                      lineClamp: 1,
                                      title: A,
                                      children: ['\xa0', A, '\xa0'],
                                  }),
                        [A, x],
                    ),
                    R = (0, o.useMemo)(
                        () => E || (0, a.jsx)(s._V, { className: g().image, src: b, size: 100, fit: 'cover', withAvatarReplace: !0, 'aria-hidden': !0 }),
                        [b, E],
                    ),
                    O = (0, o.useMemo)(() => {
                        let e = { entity: N, description: I };
                        return S
                            ? C({ entityVariant: T, values: e, entityTitle: A, entityDescription: I })
                            : L({ entityVariant: T, values: e, entityTitle: A, entityDescription: I });
                    }, [N, I, S, L, T, A, C]);
                return (0, a.jsx)(y.$, {
                    className: (0, n.$)(g().root, { [g().root_withLongText]: T === m.c.AUDIOBOOK }, i),
                    closeToast: t,
                    cover: R,
                    message: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(l.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': O.ariaLabel }) }),
                            (0, a.jsx)(c.HL, {
                                className: g().text,
                                variant: 'div',
                                type: 'controls',
                                size: 'm',
                                'data-test-id': r.S7.BASE_NOTIFICATION_PIN_TEXT,
                                'aria-hidden': !0,
                                children: O.caption,
                            }),
                        ],
                    }),
                    coverRadius: h,
                });
            };
        },
        34945: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => l });
            var a = i(88800),
                n = i(65724),
                o = i(17392),
                r = i(97811),
                s = i.n(r);
            let l = (e) => {
                let { className: t, stopAnimation: i } = e;
                return (0, a.jsx)('div', { className: (0, n.$)(s().root, { [s().root_stopAnimation]: i }, t), 'data-test-id': o.S7.PLAYING_ANIMATION });
            };
        },
        34970: (e) => {
            e.exports = { root: 'TextField_root__RO2Hk', root_textarea: 'TextField_root_textarea__N0PF_', root_outline: 'TextField_root_outline__8JfQF' };
        },
        37670: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => o });
            var a = i(53548);
            i(30282);
            var n = i(58390);
            let o = (e) => {
                let t = (0, n.usePathname)(),
                    [i, o] = (0, a.useState)(!1);
                ((0, a.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, a.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !i && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), o(!0));
                    }, [e, i, t]));
            };
        },
        38860: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => o });
            var a = i(53548),
                n = i(41168);
            let o = () => (0, a.useContext)(n.P);
        },
        39267: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => b });
            var a = i(88800),
                n = i(65724),
                o = i(84961),
                r = i(53548),
                s = i(2058),
                l = i(17392),
                c = i(7555),
                u = i(21416),
                d = i(72288),
                _ = i(81877),
                m = i(16704),
                p = i(34945),
                v = i(11325),
                f = i.n(v);
            let y = (0, o.PA)((e) => {
                    let {
                            className: t,
                            isAvailable: i,
                            isDisliked: o,
                            coverUri: r,
                            title: v,
                            onPlayButtonClick: y,
                            isPlaying: b,
                            isCurrent: g,
                            radius: A,
                            isPlayButtonLoading: I,
                            isLoading: T,
                            shouldShowControl: x = !0,
                            ariaDescribedBy: E,
                            ignoreDislikedStyles: h,
                            entityCoverStyle: S,
                            forwardRef: C,
                            playButtonIconSize: L = 'xs',
                            alt: N,
                            withLoadingIndicator: R,
                            coverClassName: O,
                            entityCoverClassName: P,
                            controlClassName: j,
                            fallbackIconSize: k = 'xs',
                        } = e,
                        { formatMessage: w } = (0, s.A)(),
                        {
                            settings: { isMobile: M },
                        } = (0, d.g)();
                    return (0, a.jsx)('div', {
                        className: (0, n.$)(f().root, t, { [f().root_disabled]: !i, [f().root_current]: g, [f().root_disliked]: o && !h, [f().root_playing]: b }),
                        'data-test-id': l.S7.PLAY_BUTTON_WITH_COVER,
                        children: (0, a.jsxs)(c.t, {
                            className: (0, n.$)(f().cover, O),
                            radius: A,
                            children: [
                                (0, a.jsx)(_.B, {
                                    className: (0, n.$)(f().coverImage, P),
                                    src: r,
                                    size: 100,
                                    alt: null != N ? N : w({ id: 'entity-names.track-name' }, { trackName: v }),
                                    fit: 'cover',
                                    withAvatarReplace: !0,
                                    isAvailable: i,
                                    fallbackIconSize: k,
                                    style: S,
                                    withLoadingIndicator: R,
                                }),
                                x &&
                                    (0, a.jsxs)('div', {
                                        className: (0, n.$)(f().control, j),
                                        children: [
                                            !T && (0, a.jsx)(p.P, { stopAnimation: !b, className: f().playingAnimation }),
                                            T && M && (0, a.jsx)(u.y, { size: 'xs', className: f().spinner }),
                                            !M &&
                                                (0, a.jsx)(m.D, {
                                                    ref: C,
                                                    variant: 'filled',
                                                    className: (0, n.$)(f().playButton, { [f().playButton_loading]: I }),
                                                    iconClassName: f().playButtonIcon,
                                                    isPlaying: b,
                                                    onClick: y,
                                                    iconSize: L,
                                                    ariaDescribedBy: E,
                                                    disabled: !i,
                                                }),
                                        ],
                                    }),
                            ],
                        }),
                    });
                }),
                b = (0, r.forwardRef)((e, t) => (0, a.jsx)(y, { forwardRef: t, ...e }));
        },
        41168: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => a });
            let a = (0, i(53548).createContext)(null);
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
        42674: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        47964: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => A });
            var a = i(88800),
                n = i(53548),
                o = i(2058),
                r = i(188),
                s = i(18593),
                l = i(80989),
                c = i(29993),
                u = i(7123),
                d = i(66943),
                _ = i(84384),
                m = i(29595),
                p = i(74965),
                v = i(72288),
                f = i(90420);
            let y = 'radio';
            var b = i(8962),
                g = i(9630);
            let A = (e) => {
                var t, i;
                let { seeds: A = [f.M1], pageIdForFrom: I, blockIdForFrom: T, onPlayInterrupted: x, parentContextId: E } = e,
                    { from: h } = (0, _.f)(
                        ((e, t) =>
                            !t || (null == e ? void 0 : e.includes(y)) || t.includes(y)
                                ? { pageId: e, blockId: t }
                                : { pageId: e, blockId: ''.concat(t, '-').concat(y) })(I, T),
                    ),
                    { formatMessage: S } = (0, o.A)(),
                    C = (0, g.e)(),
                    { notify: L } = (0, p.l)(),
                    { sonataState: N, vibe: R, fullscreenPlayer: O, user: P, freeAccess: j } = (0, v.g)(),
                    [k, w] = (0, n.useState)(null),
                    M = (0, c.c)(() => (O.modal.isOpened ? m.u.FULLSCREEN_ERROR : m.u.ERROR));
                ((0, n.useEffect)(() => {
                    let e =
                        null == C
                            ? void 0
                            : C.state.currentContext.onChange(() => {
                                  (0, r.i)(C.state.currentContext.value) ? w(C.state.currentContext.value) : w(null);
                              });
                    return () => {
                        null == e || e();
                    };
                }, [C]),
                    (0, n.useEffect)(() => {
                        let e =
                            null == k
                                ? void 0
                                : k.observableActiveSession.onChange(() => {
                                      var e, t;
                                      (null == k || null == (e = k.observableActiveSession.value) ? void 0 : e.wave) &&
                                          R.setVibe(null == k || null == (t = k.observableActiveSession.value) ? void 0 : t.wave);
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [k, R]));
                let B = (0, c.c)(async (e) => {
                        try {
                            await (null == C
                                ? void 0
                                : C.playContext({
                                      contextData: {
                                          type: s.K.Vibe,
                                          meta: { id: (0, l.f)(e) },
                                          seeds: e,
                                          from: h,
                                          includeTracksInResponse: !0,
                                          interactive: !0,
                                          parentContextId: E,
                                      },
                                      loadContextMeta: !0,
                                  }));
                        } catch (e) {
                            L((0, a.jsx)(d.h, { error: S({ id: 'vibe-errors.start-vibe' }) }), { containerId: M() });
                        }
                    }),
                    D = (0, c.c)(async (e) => {
                        if (C && k)
                            try {
                                await k.setSettings({ seeds: e, queueState: C.state.queueState, interactive: !0, from: h });
                            } catch (e) {
                                L((0, a.jsx)(d.h, { error: S({ id: 'vibe-errors.apply-vibe-setting' }) }), { containerId: M() });
                            }
                    }),
                    U = (0, c.c)(async (e) => {
                        if (C)
                            try {
                                await C.restartContext({ playAfterRestart: e });
                            } catch (e) {
                                L((0, a.jsx)(d.h, { error: S({ id: 'error-messages.something-went-wrong' }) }), { containerId: M() });
                            }
                    }),
                    V = !!k,
                    z = V && (0, b._)(null != (i = null == (t = R.meta) ? void 0 : t.seeds) ? i : [], A),
                    K = z && N.status === u.MT.PLAYING,
                    Y = z && N.status === u.MT.PAUSED;
                (0, n.useEffect)(() => {
                    K && R.setIsApplying(!1);
                }, [K, R]);
                let W = (0, c.c)(async () => {
                        if (!K && (j.isFreeWebUser || !P.isAuthorized)) {
                            null == x || x();
                            return;
                        }
                        (R.setIsApplying(!0), await B(A), R.setIsApplying(!1));
                    }),
                    F = (0, c.c)(async (e, t) => {
                        var i;
                        R.setIsApplying(!0);
                        let a = [];
                        if (R.meta && Array.isArray(null == (i = R.meta) ? void 0 : i.seeds))
                            if (R.meta.seeds.includes(e)) a = R.meta.seeds.filter((t) => t !== e);
                            else if (t) a = [e, ...R.meta.seeds.filter((e) => e.includes('setting'))];
                            else {
                                let t = e.split(':')[0];
                                a = t
                                    ? ['settingDiversity', 'settingMoodEnergy', 'settingLanguage'].includes(t)
                                        ? [...R.meta.seeds.filter((e) => !e.startsWith(''.concat(t, ':'))), e]
                                        : [...R.meta.seeds, e]
                                    : [...R.meta.seeds];
                            }
                        else a = [e];
                        (k ? (await D(a), await U(!0)) : await B(a), R.setIsApplying(!1));
                    });
                return {
                    isVibeContext: V,
                    isPlaying: K,
                    isPaused: Y,
                    isCurrent: z,
                    togglePlay: W,
                    resetContext: (0, c.c)(async function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [f.M1];
                        (R.setIsApplying(!0), k ? (await D(e), await U(!0)) : await B(e), R.setIsApplying(!1));
                    }),
                    applySetting: F,
                    // for PulseSync: BEGIN play native wave seeds through the authorized playback flow
                    playSeeds: (0, c.c)(async (e) => {
                        let t = Array.isArray(e) && e.length > 0 ? e : A;
                        if (j.isFreeWebUser || !P.isAuthorized) {
                            null == x || x();
                            return;
                        }
                        (R.setIsApplying(!0), k ? (await D(t), await U(!0)) : await B(t), R.setIsApplying(!1));
                    }),
                    // for PulseSync: END play native wave seeds through the authorized playback flow
                };
            };
        },
        47969: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => c });
            var a = i(35802),
                n = i(79070),
                o = i(61013),
                r = i(53548);
            let s = (e) => {
                let { minColumnWidth: t, maxColumnWidth: i, containerWidth: a, totalCount: n, columnGap: o, minColumnCount: r, maxColumnCount: s } = e,
                    l = Math.max(1, Math.floor((a + o) / (t + o))),
                    c = Math.max(r, Math.floor((a + o) / ((i + t) * 0.5 + o)));
                for (let e = r; e <= l; e++) {
                    let n = (a - (e - 1) * o) / e;
                    if (n >= t && n <= i) {
                        c = e;
                        break;
                    }
                }
                return { rowCount: Math.ceil(n / (c = s ? Math.min(c, s) : c)), columnCount: c };
            };
            var l = i(10270);
            let c = (e) => {
                let {
                        count: t,
                        getEstimateRowSize: i,
                        rowGap: c,
                        columnGap: u,
                        minColumnWidth: d,
                        maxColumnWidth: _,
                        minColumnCount: m,
                        maxColumnCount: p,
                        containerRef: v,
                    } = e,
                    { rowCount: f, columnCount: y } = ((e) => {
                        let { containerRef: t, minColumnCount: i, maxColumnWidth: a, minColumnWidth: n, totalCount: l, columnGap: c, maxColumnCount: u } = e,
                            [d, _] = (0, r.useState)({ rowCount: 0, columnCount: 0 }),
                            m = (0, r.useRef)(null),
                            p = (0, r.useMemo)(
                                () =>
                                    (0, o.A)(
                                        (e) => {
                                            _(
                                                s({
                                                    minColumnWidth: n,
                                                    maxColumnWidth: a,
                                                    containerWidth: e.contentRect.width,
                                                    totalCount: l,
                                                    columnGap: c,
                                                    minColumnCount: i,
                                                    maxColumnCount: u,
                                                }),
                                            );
                                        },
                                        100,
                                        { trailing: !0 },
                                    ),
                                [c, u, a, i, n, l],
                            );
                        return (
                            (0, r.useLayoutEffect)(
                                () => (
                                    m.current && m.current.disconnect(),
                                    (m.current = new ResizeObserver((e) => {
                                        e.forEach(p);
                                    })),
                                    t &&
                                        (_(
                                            s({
                                                minColumnWidth: n,
                                                maxColumnWidth: a,
                                                containerWidth: t.getBoundingClientRect().width,
                                                totalCount: l,
                                                columnGap: c,
                                                minColumnCount: i,
                                                maxColumnCount: u,
                                            }),
                                        ),
                                        m.current.observe(t)),
                                    () => {
                                        var e;
                                        null == (e = m.current) || e.disconnect();
                                    }
                                ),
                                [c, t, p, u, a, i, n, l],
                            ),
                            d
                        );
                    })({ totalCount: t, columnGap: null != u ? u : 0, minColumnCount: m, maxColumnWidth: _, minColumnWidth: d, maxColumnCount: p, containerRef: v }),
                    { virtualizer: b, resizeObserver: g } = (0, l.r)({ count: f, getEstimateSize: i, gap: c, containerRef: v, useVirtualizerMeasurement: !1 }),
                    A = (0, a.A)(
                        Array.from({ length: t }, (e, t) => t),
                        y,
                    ),
                    I = (0, n.L)(() => {
                        var e, t;
                        if (!b.range) return null;
                        let i = null == (e = A[b.range.startIndex]) ? void 0 : e.at(0),
                            a = null == (t = A[b.range.endIndex]) ? void 0 : t.at(-1);
                        return void 0 !== i && void 0 !== a ? { startIndex: i, endIndex: a } : null;
                    });
                return { virtualizer: b, rowResizeObserver: g, indices: A, columnCount: y, visibleRange: I };
            };
        },
        48820: (e, t, i) => {
            'use strict';
            i.d(t, { WithWebNextWaveForTwo: () => s });
            var a = i(84961),
                n = i(58390),
                o = i(4370),
                r = i(72288);
            let s = (0, a.PA)((e) => {
                let { children: t } = e,
                    { multivibe: i } = (0, r.g)();
                return (i.isEnabled || (0, n.redirect)(o.Z.main.href), t);
            });
        },
        49397: (e) => {
            e.exports = { root: 'BaseNotificationError_root__FfGUZ', message: 'BaseNotificationError_message___W_xy' };
        },
        51028: (e) => {
            e.exports = { notification: 'NotificationAd_notification__DNmdu' };
        },
        51231: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => o });
            var a = i(5120),
                n = i(31510);
            let o = (e) => {
                let t = (0, n.e)(e);
                return (0, a.wg)(t);
            };
        },
        51516: (e) => {
            e.exports = { root: 'VirtualGridRow_root___UfbI' };
        },
        53360: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => c });
            var a = i(88800),
                n = i(65724),
                o = i(84961),
                r = i(53548),
                s = i(51516),
                l = i.n(s);
            let c = (0, o.PA)((e) => {
                let { indices: t, virtualItem: i, renderItemByIndex: o, columnClassName: s, className: c, resizeObserver: u, scrollMargin: d } = e,
                    _ = (0, r.useRef)(null),
                    m = t[i.index],
                    p = { '--virtual-grid-row-vertical-offset': ''.concat(i.start - d, 'px') };
                return (
                    (0, r.useEffect)(() => {
                        let e = _.current;
                        if (e)
                            return (
                                null == u || u.observe(e),
                                () => {
                                    null == u || u.unobserve(e);
                                }
                            );
                    }, [u]),
                    (0, a.jsx)('div', {
                        'data-index': i.index,
                        ref: _,
                        style: p,
                        className: (0, n.$)(l().root, c),
                        children: null == m ? void 0 : m.map((e, t) => (0, a.jsx)('div', { className: s, children: o(e, i.index, t) }, ''.concat(i.key, '_').concat(e))),
                    })
                );
            });
        },
        55211: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => u });
            var a = i(88800),
                n = i(65724),
                o = i(21284),
                r = i(79070),
                s = i(39267),
                l = i(85925),
                c = i.n(l);
            let u = (e) => {
                let {
                        agent: t,
                        isPlaying: i,
                        isCurrent: l,
                        onPlayButtonClick: u,
                        shouldShowControl: d = !0,
                        playButtonIconSize: _,
                        alt: m,
                        className: p,
                        coverClassName: v,
                        entityCoverClassName: f,
                        controlClassName: y,
                        fallbackIconSize: b,
                    } = e,
                    g = (0, r.L)(() => {
                        if (t.entityType) return t.entityType === o.h.ARTIST ? 'round' : 'xs';
                    });
                return (0, a.jsx)(s.q, {
                    isAvailable: !0,
                    coverUri: t.cover.uri,
                    className: (0, n.$)(c().root, c()['root_radius_'.concat(g)], { [c().root_withShadow]: !!t.entityType }, p),
                    radius: g,
                    onPlayButtonClick: u,
                    isPlaying: i,
                    isCurrent: l,
                    alt: m,
                    withLoadingIndicator: !1,
                    shouldShowControl: d,
                    playButtonIconSize: _,
                    fallbackIconSize: b,
                    coverClassName: v,
                    entityCoverClassName: f,
                    controlClassName: y,
                });
            };
        },
        55693: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => r });
            var a = i(53548),
                n = i(63765),
                o = i(91087);
            let r = () => {
                let { sendSearchFeedback: e, id: t, type: i, blockPosition: r, position: s } = (0, a.useContext)(o.N) || {};
                if (void 0 === t || void 0 === i || void 0 === r || void 0 === s) return {};
                let l = null == e ? void 0 : e.bind(null, { feedbackType: n.n.LIKE, id: t, type: i, blockPosition: r, position: s });
                return {
                    sendLikeSearchFeedback: l,
                    sendNavigateSearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: n.n.NAVIGATE, id: t, type: i, blockPosition: r, position: s }),
                    sendPlaySearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: n.n.PLAY, id: t, type: i, blockPosition: r, position: s }),
                };
            };
        },
        56862: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => v });
            var a = i(88800),
                n = i(65724),
                o = i(84961),
                r = i(53548),
                s = i(2058),
                l = i(17392),
                c = i(81883),
                u = i(96817),
                d = i(52300),
                _ = i(72288),
                m = i(27262),
                p = i.n(m);
            let v = (0, o.PA)((e) => {
                let { isPinned: t, onClick: i, className: o, size: m = 's', iconSize: v = 'xxs', withScaleAnimation: f = !0, withRipple: y, isDisabled: b } = e,
                    { user: g } = (0, _.g)(),
                    { formatMessage: A } = (0, s.A)(),
                    { scaleAnimation: I, unscaleAnimation: T, handleAnimationEnd: x, handleClick: E } = (0, c.C)({ shouldStartFromUnscale: t, onClick: i, isEnabled: f }),
                    h = t ? 'pin_filled' : 'pin',
                    S = (0, r.useMemo)(() => (t ? A({ id: 'interface-actions.unpin' }) : A({ id: 'interface-actions.pin' })), [A, t]);
                return (0, a.jsx)(u.$, {
                    className: (0, n.$)(p().root, { [p().animation_scaled]: I, [p().animation_unscaled]: T }, o),
                    onAnimationEnd: x,
                    variant: 'default',
                    color: 'secondary',
                    onClick: E,
                    'aria-label': S,
                    'aria-pressed': t,
                    size: m,
                    withRipple: y,
                    radius: 'round',
                    disabled: b || !g.isAuthorized,
                    icon: (0, a.jsx)(d.I, { className: p().icon, variant: h, size: v }),
                    'data-test-id': l.S7.PIN_BUTTON,
                });
            });
        },
        57328: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => v });
            var a = i(88800),
                n = i(84961),
                o = i(58390),
                r = i(65724),
                s = i(88969),
                l = i(29504),
                c = i(7628),
                u = i(42674),
                d = i.n(u);
            let _ = (0, n.PA)(() =>
                (0, a.jsxs)('div', {
                    className: d().root,
                    children: [
                        (0, a.jsx)(l.DZ, {
                            className: (0, r.$)(d().title, d().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, a.jsx)(s.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, a.jsx)(l.HL, {
                            className: (0, r.$)(d().text, d().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, a.jsx)(s.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, a.jsx)(c.H, { size: 'l', className: d().button }),
                    ],
                }),
            );
            var m = i(4370),
                p = i(72288);
            let v = (0, n.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: n } = (0, p.g)();
                return n.isAuthorized ? t : (i && (0, o.redirect)(m.Z.main.href), (0, a.jsx)(_, {}));
            });
        },
        59378: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => c });
            var a = i(88800),
                n = i(65724),
                o = i(84961),
                r = i(53548),
                s = i(34970),
                l = i.n(s);
            let c = (0, o.PA)((e) => {
                let {
                        className: t,
                        text: i = '',
                        maxTextLength: o,
                        minTextLength: s,
                        variant: c = 'input',
                        shouldFinishOnKeyPress: u = !1,
                        placeholder: d,
                        onChangeFinish: _,
                        withOutline: m = !1,
                        readOnly: p = !1,
                        'aria-label': v,
                        'data-test-id': f,
                    } = e,
                    [y, b] = (0, r.useState)(i),
                    g = (0, r.useRef)(!1),
                    A = (0, r.useRef)(null),
                    I = (0, r.useCallback)((e) => {
                        b(e.target.value);
                    }, []),
                    T = (0, r.useCallback)(
                        (e) => {
                            if (u && ['Enter', 'Escape'].includes(e.key)) {
                                var t;
                                ('Escape' === e.key && (g.current = !0), null == (t = e.currentTarget) || t.blur());
                            }
                        },
                        [u],
                    ),
                    x = (0, r.useCallback)(() => {
                        let e = y.trim();
                        g.current || (s && e.length < s) ? ((g.current = !1), null == _ || _(i)) : null == _ || _(e);
                    }, [y, g, s, _, i]);
                ((0, r.useEffect)(() => {
                    A.current && ((A.current.selectionStart = A.current.value.length), (A.current.selectionEnd = A.current.value.length));
                }, []),
                    (0, r.useLayoutEffect)(() => {
                        let e = A.current;
                        if (e) {
                            e.style.height = '0px';
                            let t = e.scrollHeight;
                            e.style.height = ''.concat(t, 'px');
                        }
                    }, [A, y]));
                let E = (0, r.useMemo)(() => ('textarea' === c ? (e) => (0, a.jsx)('textarea', { ref: A, rows: 6, ...e }) : (e) => (0, a.jsx)('input', { ...e })), [c]);
                return (0, a.jsx)(E, {
                    className: (0, n.$)(l().root, t, { [l().root_textarea]: 'textarea' === c, [l().root_outline]: m }),
                    type: 'text',
                    value: y,
                    readOnly: p,
                    maxLength: o,
                    onBlur: x,
                    onChange: I,
                    onKeyDown: T,
                    placeholder: d,
                    'aria-label': v,
                    autoFocus: !0,
                    'data-test-id': f,
                });
            });
        },
        63765: (e, t, i) => {
            'use strict';
            var a, n;
            (i.d(t, { n: () => n, o: () => a }),
                (function (e) {
                    ((e.ARTIST = 'artist'),
                        (e.ALBUM = 'album'),
                        (e.TRACK = 'track'),
                        (e.PLAYLIST = 'playlist'),
                        (e.USER = 'user'),
                        (e.VIDEO = 'video'),
                        (e.CLIP = 'clip'),
                        (e.PODCAST = 'podcast'),
                        (e.PODCAST_EPISODE = 'podcast_episode'),
                        (e.WAVE = 'wave'),
                        (e.GENRE = 'genre'),
                        (e.SEARCH_PAGE = 'search-page'));
                })(a || (a = {})),
                (function (e) {
                    ((e.PLAY = 'play'), (e.FRIDGE = 'fridge'), (e.NAVIGATE = 'navigate'), (e.LIKE = 'like'));
                })(n || (n = {})));
        },
        64284: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => a });
            var a = (function (e) {
                return (
                    (e.TRACK = 'track'),
                    (e.TRACK_LIST = 'track_list'),
                    (e.ALBUM = 'album'),
                    (e.PLAYLIST = 'playlist'),
                    (e.ARTIST = 'artist'),
                    (e.RUP = 'rup'),
                    (e.MAIN = 'main'),
                    (e.RADIO = 'radio'),
                    (e.DISCOGRAPHY = 'discography'),
                    (e.CAROUSEL = 'carousel'),
                    (e.ALBUMS = 'albums'),
                    (e.COMPILATIONS = 'compilations'),
                    (e.PLAYLISTS = 'playlists'),
                    (e.ARTISTS = 'artists'),
                    (e.CLIPS = 'clips'),
                    (e.BLOCK = 'block'),
                    (e.DISCOVERY = 'discovery'),
                    (e.SIMILAR = 'similar'),
                    (e.SEARCH = 'search'),
                    (e.HISTORY = 'history'),
                    (e.DEFAULT = 'default'),
                    (e.PODCAST = 'podcast'),
                    (e.AUDIOBOOK = 'audiobook'),
                    (e.FILTERED = 'filtered'),
                    (e.SUGGESTED = 'suggested'),
                    (e.TRAILER = 'trailer'),
                    (e.DONATY = 'donaty'),
                    (e.BEST_RESULTS = 'best_results'),
                    (e.OPEN_BEST_RESULTS = 'open_best_results'),
                    (e.WHEEL = 'wheel'),
                    (e.Q2V = 'q2v'),
                    (e.VIBE_CONTEXT_MENU = 'context_share'),
                    (e.SHARED_VIBE = 'shared_wave'),
                    (e.WAVE_FOR_TWO = 'wave_for_two'),
                    (e.LIKED_WAVES = 'liked_waves'),
                    e
                );
            })({});
        },
        64974: (e) => {
            e.exports = {
                root: 'CollectionVibeRoomsPage_root__rXIRS',
                container: 'CollectionVibeRoomsPage_container__EjxoE',
                shimmerGrid: 'CollectionVibeRoomsPage_shimmerGrid__vgYVO',
                gridContent: 'CollectionVibeRoomsPage_gridContent__Og3pw',
                emptyContent: 'CollectionVibeRoomsPage_emptyContent___1jjx',
                footer: 'CollectionVibeRoomsPage_footer__LaC0Q',
                multivibeCoBrand: 'CollectionVibeRoomsPage_multivibeCoBrand__qm6aU',
                onboardingImage: 'CollectionVibeRoomsPage_onboardingImage__lde_N',
                multivibeImage: 'CollectionVibeRoomsPage_multivibeImage__NFs_8',
                emptyContentTitle: 'CollectionVibeRoomsPage_emptyContentTitle__Hv_Vp',
            };
        },
        65523: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => s });
            var a = i(4086),
                n = i(41928),
                o = i(44084);
            let r = new WeakMap(),
                s = () =>
                    ((e) => {
                        if (e instanceof o.r) return e;
                        let t = r.get(e);
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
                        return (r.set(e, i), i);
                    })((0, n.N)().get(a.Zf));
        },
        66943: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => u });
            var a = i(88800),
                n = i(65724),
                o = i(73170),
                r = i(29504),
                s = i(59304),
                l = i(49397),
                c = i.n(l);
            let u = (e) => {
                let { error: t, closeToast: i, className: l } = e;
                return (0, a.jsx)(s.$, {
                    className: (0, n.$)(c().root, l),
                    message: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(o.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': t }) }),
                            (0, a.jsx)(r.HL, { className: c().message, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: t }),
                        ],
                    }),
                    closeToast: i,
                });
            };
        },
        72131: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => r });
            var a = i(10285),
                n = i(42668),
                o = i(72288);
            let r = (e) => {
                let { location: t } = (0, o.g)();
                return (0, a.r)(e, t.tld, n.B);
            };
        },
        73170: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => c });
            var a,
                n = i(53548),
                o = {
                    5881: (e, t, i) => {
                        function a() {
                            for (var e, t, i = 0, a = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            a,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (a = e(t[i])) && (n && (n += ' '), (n += a));
                                            else for (i in t) t[i] && (n && (n += ' '), (n += i));
                                        return n;
                                    })(e)) &&
                                    (a && (a += ' '), (a += t));
                            return a;
                        }
                        (i.r(t), i.d(t, { clsx: () => a, default: () => n }));
                        let n = a;
                    },
                    7319: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function a(e, t, a) {
                            var n = null;
                            if ((void 0 !== a && (n = '' + a), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var o in ((a = {}), t)) 'key' !== o && (a[o] = t[o]);
                            else a = t;
                            return { $$typeof: i, type: e, key: n, ref: void 0 !== (t = a.ref) ? t : null, props: a };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = a), (t.jsxs = a));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    5531: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let n = i(4377),
                            o = i(5881),
                            r = i(810),
                            s = a(i(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: i, children: a, ...l } = e,
                                c = (0, o.clsx)(s.default.root, { [s.default.focusable]: i }, t);
                            return (0, r.isValidElement)(a)
                                ? (0, r.cloneElement)(a, { ...l, className: (0, o.clsx)(c, a.props.className) })
                                : (0, n.jsx)('span', { className: c, ...l, children: a });
                        };
                    },
                    810: (e) => {
                        e.exports = a || (a = i.t(n, 2));
                    },
                },
                r = {};
            function s(e) {
                var t = r[e];
                if (void 0 !== t) return t.exports;
                var i = (r[e] = { exports: {} });
                return (o[e].call(i.exports, i, i.exports, s), i.exports);
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
                (Object.defineProperty(l, '__esModule', { value: !0 }), (l.SROnly = void 0));
                var e = s(5531);
                Object.defineProperty(l, 'SROnly', {
                    enumerable: !0,
                    get: function () {
                        return e.SROnly;
                    },
                });
            })();
            var c = l.SROnly;
            l.__esModule;
        },
        78275: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => l });
            var a,
                n = i(53548),
                o = {
                    810: (e) => {
                        e.exports = a || (a = i.t(n, 2));
                    },
                },
                r = {},
                s = {};
            ((() => {
                (Object.defineProperty(s, '__esModule', { value: !0 }), (s.useToggle = void 0));
                let e = (function e(t) {
                    var i = r[t];
                    if (void 0 !== i) return i.exports;
                    var a = (r[t] = { exports: {} });
                    return (o[t](a, a.exports, e), a.exports);
                })(810);
                s.useToggle = (t) => {
                    let [i, a] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        a(t);
                    }, [t]);
                    let n = (0, e.useCallback)(() => {
                            a((e) => !e);
                        }, []),
                        o = (0, e.useCallback)(() => {
                            a(!0);
                        }, []),
                        r = (0, e.useCallback)(() => {
                            a(!1);
                        }, []);
                    return { state: i, toggle: n, setState: a, toggleTrue: o, toggleFalse: r };
                };
            })(),
                s.__esModule);
            var l = s.useToggle;
        },
        78476: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 57328)), Promise.resolve().then(i.bind(i, 48820)), Promise.resolve().then(i.bind(i, 90036)));
        },
        78940: (e, t, i) => {
            'use strict';
            (i.d(t, { Z: () => l }), i(30282));
            var a = i(58390),
                n = i(29993),
                o = i(67174),
                r = i(15947),
                s = i(97261);
            let l = (e) => {
                let t = (0, a.useRouter)(),
                    { href: i, target: l } = (0, o.u)(e);
                return (0, n.c)((e) => {
                    let a = (0, r.U)(i, window.location.href, l);
                    if (!a) {
                        null == e || e.preventDefault();
                        return;
                    }
                    (null != e && e.metaKey) ||
                        (null != e && e.ctrlKey) ||
                        (null != e && e.shiftKey) ||
                        (a.type === s.I.EXTERNAL || a.type === s.I.DEEPLINK
                            ? ((e) => {
                                  let { target: t, rel: i } = (0, o.u)(e, { options: { isExternalLink: !0 } });
                                  window.open(e, t, i);
                              })(a.href)
                            : t.push(a.href));
                });
            };
        },
        79070: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => n });
            var a = {};
            (Object.defineProperty(a, '__esModule', { value: !0 }), (a.useReturnValue = void 0), (a.useReturnValue = (e) => e()), a.__esModule);
            var n = a.useReturnValue;
        },
        79179: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => s });
            var a = i(53548),
                n = i(58390),
                o = i(4370),
                r = i(72288);
            let s = () => {
                let e = (0, n.useRouter)(),
                    { user: t, paywall: i, multivibe: s } = (0, r.g)(),
                    [l, c] = (0, a.useState)(!1),
                    u = !s.isEnabled,
                    d = t.hasPlus,
                    _ = i.modal.isOpened,
                    m = !d && l && !_,
                    p = l && _;
                return (
                    (0, a.useEffect)(() => {
                        if (u || m) return void e.replace(o.Z.main.href);
                        l || d || _ || (i.openModal(), c(!0));
                    }, [d, u, _, l, i, e, m]),
                    { hasPlus: d, isPaywallBlocking: p }
                );
            };
        },
        80989: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => a });
            let a = (e) => String([...e].sort());
        },
        81877: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => l });
            var a = i(88800),
                n = i(53548),
                o = i(17392),
                r = i(90688);
            let s = (e) => {
                    let { isAvailable: t = !0, className: i, fallbackIconSize: n, forwardRef: s, ...l } = e;
                    return t
                        ? (0, a.jsx)(r._V, { ref: s, className: i, fallbackIconSize: n, ...l, 'data-test-id': o.S7.ENTITY_COVER_IMAGE })
                        : (0, a.jsx)(r.Ab, { className: i, iconSize: n, iconVariant: 'unavailable', 'data-test-id': o.S7.ENTITY_COVER_FALLBACK_IMAGE });
                },
                l = (0, n.forwardRef)((e, t) => (0, a.jsx)(s, { forwardRef: t, ...e }));
        },
        81883: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => c });
            var a,
                n = i(53548),
                o = {
                    1676: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useToggle = void 0));
                        let a = i(810);
                        t.useToggle = (e) => {
                            let [t, i] = (0, a.useState)(e);
                            (0, a.useEffect)(() => {
                                i(e);
                            }, [e]);
                            let n = (0, a.useCallback)(() => {
                                    i((e) => !e);
                                }, []),
                                o = (0, a.useCallback)(() => {
                                    i(!0);
                                }, []),
                                r = (0, a.useCallback)(() => {
                                    i(!1);
                                }, []);
                            return { state: t, toggle: n, setState: i, toggleTrue: o, toggleFalse: r };
                        };
                    },
                    810: (e) => {
                        e.exports = a || (a = i.t(n, 2));
                    },
                },
                r = {};
            function s(e) {
                var t = r[e];
                if (void 0 !== t) return t.exports;
                var i = (r[e] = { exports: {} });
                return (o[e](i, i.exports, s), i.exports);
            }
            var l = {};
            ((() => {
                (Object.defineProperty(l, 'X', { value: !0 }), (l.l = void 0));
                let e = s(810),
                    t = s(1676);
                l.l = (i) => {
                    let { isEnabled: a = !0, onClick: n, shouldStartFromUnscale: o } = i,
                        { state: r, toggleFalse: s, toggleTrue: l } = (0, t.useToggle)(!1),
                        { state: c, toggleFalse: u, toggleTrue: d } = (0, t.useToggle)(!1),
                        _ = (0, e.useCallback)(
                            (e) => {
                                (null == n || n(e), a && (o ? d() : l()), e.stopPropagation(), e.preventDefault());
                            },
                            [a, n, o, l, d],
                        );
                    return {
                        handleAnimationEnd: (0, e.useCallback)(() => {
                            (s(), u());
                        }, [s, u]),
                        handleClick: _,
                        scaleAnimation: r,
                        unscaleAnimation: c,
                    };
                };
            })(),
                l.X);
            var c = l.l;
        },
        84384: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => d });
            var a = i(53548);
            i(30282);
            var n = i(93940),
                o = i(58390),
                r = i(64284),
                s = i(18593),
                l = i(98427),
                c = i(1344);
            let u = [r.U.TRAILER],
                d = (e) => {
                    let t = ((e) => {
                            let t = null == e ? void 0 : e.pageId,
                                i = null == e ? void 0 : e.blockId,
                                o = null == e ? void 0 : e.pageEntityId,
                                { screen: r, block: s } = (0, n.j)(),
                                l = null == r ? void 0 : r.pageIdForFrom,
                                c = null == r ? void 0 : r.mainObjectId,
                                u = null == s ? void 0 : s.blockId;
                            return (0, a.useMemo)(() => ({ pageId: null != t ? t : l, blockId: null != i ? i : u, pageEntityId: null != o ? o : c }), [i, u, t, o, l, c]);
                        })(e),
                        i = ((e) => {
                            let { pageId: t, blockId: i } = e;
                            return (0, a.useMemo)(() => {
                                let e = ['desktop'];
                                return (t && e.push(t.toLowerCase()), i && e.push(i.toLowerCase()), e.push('default'), e.join('-'));
                            }, [i, t]);
                        })(t),
                        r = ((e) => {
                            let { pageId: t, blockId: i, pageEntityId: n, contextType: r, contextId: d, utmForPageIds: _ } = e,
                                m = (0, o.useSearchParams)();
                            return (0, a.useMemo)(
                                () =>
                                    ((e) => {
                                        let { searchParams: t, pageId: i, pageEntityId: a, utmForPageIds: n, contextId: o, contextType: r, blockId: d } = e,
                                            _ = t && Object.fromEntries(t),
                                            m = ((e) => {
                                                switch (e) {
                                                    case l.b.ALBUM:
                                                    case l.b.PROMOLANDING_ALBUM:
                                                    case l.b.AUDIOBOOK:
                                                    case l.b.PODCAST:
                                                        return s.K.Album;
                                                    case l.b.ARTIST:
                                                    case l.b.ARTIST_TRACKS:
                                                    case l.b.ARTIST_ALBUMS:
                                                    case l.b.ARTIST_DISCOGRAPHY:
                                                        return s.K.Artist;
                                                    case l.b.PLAYLIST:
                                                        return s.K.Playlist;
                                                    default:
                                                        return null;
                                                }
                                            })(i);
                                        return !m || !_ || !a || u.includes(d)
                                            ? null
                                            : (Array.isArray(n) ? n.map((e) => String(e)).includes(String(a)) : !!o && m === r && String(o) === String(a)) && _
                                              ? (0, c.Z)(_)
                                              : null;
                                    })({ searchParams: m, pageId: t, pageEntityId: n, utmForPageIds: _, contextId: d, contextType: r, blockId: i }),
                                [m, t, n, d, r, i, _],
                            );
                        })({
                            ...t,
                            contextType: null == e ? void 0 : e.contextType,
                            contextId: null == e ? void 0 : e.contextId,
                            utmForPageIds: null == e ? void 0 : e.utmForPageIds,
                        });
                    return (0, a.useMemo)(() => ({ from: i, utmLink: r || void 0 }), [i, r]);
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
        90036: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionVibeRoomsPage: () => z });
            var a = i(88800),
                n = i(84961),
                o = i(53548),
                r = i(88969),
                s = i(97234),
                l = i(59724),
                c = i(17392),
                u = i(29504),
                d = i(32596),
                _ = i(69630),
                m = i(79179),
                p = i(98427),
                v = i(46422),
                f = i(44230),
                y = i(37670),
                b = i(72288),
                g = i(93317),
                A = i(2058),
                I = i(36740),
                T = i(46384),
                x = i(90852),
                E = i(29993),
                h = i(79070),
                S = i(90688),
                C = i(66719),
                L = i(73531),
                N = i(24672),
                R = i(30664),
                O = i(76830),
                P = i(21576),
                j = i(67174),
                k = i(91292),
                w = i(43378),
                M = i(88102);
            let B = (0, n.PA)((e) => {
                let { room: t } = e,
                    {
                        collection: { vibeRooms: i },
                    } = (0, b.g)(),
                    n = (0, E.c)(() => {
                        i.deleteRoomFromItems(t.id);
                    });
                return (0, a.jsx)(M.E, { room: t, contentLinesCount: 3, withMobileLayout: !0, onRoomSuccessExit: n });
            });
            var D = i(64974),
                U = i.n(D);
            let V = (0, n.PA)((e) => {
                    let { setContentScrollRef: t } = e,
                        {
                            collection: { vibeRooms: i },
                            settings: { isMobile: n },
                            multivibe: o,
                        } = (0, b.g)(),
                        { formatMessage: l } = (0, A.A)(),
                        d = l({ id: 'loading-messages.entity-is-loading' }, { entityName: l({ id: 'page.vibe-rooms' }) }),
                        _ = (0, E.c)(() => 315),
                        m = o.isOnboardingEnabled,
                        { href: p } = (0, j.u)('/slides/special/:campaignId', { params: { campaignId: 'wave_for_two' } });
                    (0, I.u)();
                    let v = (0, E.c)(() => void 0),
                        f = (0, E.c)(() => (i.isResolved ? i.items.length + 1 : 4)),
                        y = (0, E.c)((e) => {
                            var t, n;
                            if (!i.isResolved) return (0, a.jsx)(w.P, { isActive: !0, 'aria-label': d, withMobileLayout: !0 });
                            if (0 === e)
                                return (0, a.jsx)(T.F, {
                                    blockId: '',
                                    blockType: '',
                                    blockPosX: 1,
                                    blockPosY: 1,
                                    objectsCount: 1,
                                    children: (0, a.jsx)(x.B, {
                                        objectType: s.DomainObjectType.Shortcut,
                                        objectId: '',
                                        objectPosX: 1,
                                        objectPosY: 1,
                                        children: (0, a.jsx)(O.f, { withMobileLayout: !0 }),
                                    }),
                                });
                            let o = e - 1,
                                r = i.items[o];
                            return r
                                ? (0, a.jsx)(T.F, {
                                      blockId: '',
                                      blockType: '',
                                      blockPosX: 1,
                                      blockPosY: 1,
                                      objectsCount: 1,
                                      children: (0, a.jsx)(x.B, {
                                          objectType: s.DomainObjectType.Wave,
                                          objectId: null != (n = null == (t = r.wave) ? void 0 : t.seedsId) ? n : '',
                                          objectPosX: e,
                                          objectPosY: 1,
                                          children: (0, a.jsx)(B, { room: r }, r.id),
                                      }),
                                  })
                                : (0, a.jsx)(w.P, { isActive: !0, 'aria-label': d, withMobileLayout: !0 });
                        }),
                        g = (0, h.L)(() =>
                            (0, a.jsxs)('div', {
                                className: U().emptyContent,
                                'data-test-id': c.Xk.collection.COLLECTION_VIBE_ROOMS_PAGE_EMPTY,
                                children: [
                                    (0, a.jsx)(R.t, { className: U().multivibeImage }),
                                    (0, a.jsx)(u.HL, {
                                        className: U().emptyContentTitle,
                                        variant: 'div',
                                        size: 'l',
                                        weight: 'bold',
                                        'data-test-id': c.Xk.collection.COLLECTION_VIBE_ROOMS_PAGE_EMPTY_TITLE,
                                        children: (0, a.jsx)(r.A, { id: 'error-messages.empty-collection-vibe-rooms-title' }),
                                    }),
                                    (0, a.jsx)(L.M, { title: l({ id: 'interface-actions.copy-link' }) }),
                                ],
                            }),
                        ),
                        M = (0, h.L)(() =>
                            (0, a.jsx)('div', {
                                className: U().shimmerGrid,
                                children: Array.from({ length: 4 }, (e, t) => (0, a.jsx)(w.P, { isActive: !0, 'aria-label': d, withMobileLayout: !0 }, t)),
                            }),
                        ),
                        D = (0, h.L)(() =>
                            i.isLoading
                                ? M
                                : (0, a.jsx)(P.Q, {
                                      minColumnCount: n ? 1 : 2,
                                      maxColumnCount: n ? 1 : 7,
                                      count: f(),
                                      rowGap: 16,
                                      columnGap: 16,
                                      getEstimateRowSize: _,
                                      minColumnWidth: 170,
                                      maxColumnWidth: 270,
                                      onChangeRange: v,
                                      renderItemByIndex: y,
                                  }),
                        ),
                        V = (0, h.L)(() => (i.isResolved && i.isEmptyItems ? g : (0, a.jsx)('div', { className: U().gridContent, children: D }))),
                        z = (0, h.L)(() =>
                            m
                                ? (0, a.jsxs)(k.N, {
                                      className: U().footer,
                                      href: p,
                                      'aria-label': l({ id: 'page.vibe-rooms-onboarding' }),
                                      children: [
                                          (0, a.jsx)(S._V, {
                                              className: U().onboardingImage,
                                              src: 'avatars.mds.yandex.net/get-music-misc/28592/img.6ac5050b5a32a672b2cdb08e/%%',
                                              size: 28,
                                              alt: '',
                                              'aria-hidden': !0,
                                              fit: 'cover',
                                              withAvatarReplace: !0,
                                              withAspectRatio: !0,
                                              withFallback: !1,
                                          }),
                                          (0, a.jsx)(N.j, { className: U().multivibeCoBrand }),
                                      ],
                                  })
                                : (0, a.jsx)('div', { className: U().footer, children: (0, a.jsx)(N.j, { className: U().multivibeCoBrand }) }),
                        );
                    return (0, a.jsxs)(C.N, {
                        ref: t,
                        className: U().root,
                        containerClassName: U().container,
                        'data-test-id': c.Xk.collection.COLLECTION_VIBE_ROOMS_PAGE_CONTENT,
                        children: [V, z],
                    });
                }),
                z = (0, n.PA)(() => {
                    let {
                            collection: { vibeRooms: e },
                        } = (0, b.g)(),
                        { contentScrollRef: t, setContentScrollRef: i } = (0, f.g)(),
                        n = (0, v.W)(),
                        { hasPlus: A, isPaywallBlocking: I } = (0, m.S)();
                    return ((0, o.useEffect)(() => {
                        if (A)
                            return (
                                e.isNeededToLoad && e.getData(),
                                () => {
                                    e.reset();
                                }
                            );
                    }, [A, e]),
                    (0, y.J)(e.isResolved),
                    I)
                        ? null
                        : e.isRejected
                          ? (0, a.jsx)(d.SomethingWentWrong, {})
                          : (0, a.jsx)(l.a, {
                                pageId: s.AppScreen.MultivibeScreen,
                                pageIdForFrom: p.b.COLLECTION_VIBE_ROOMS,
                                pageStyle: s.PageStyles.Fullscreen,
                                pagePlacement: s.PagePlacements.Fullscreen,
                                children: (0, a.jsx)(_.h, {
                                    scrollElement: t,
                                    children: (0, a.jsxs)('div', {
                                        className: U().root,
                                        'data-test-id': c.Xk.collection.COLLECTION_VIBE_ROOMS_PAGE,
                                        children: [
                                            (0, a.jsx)(g.Y, {
                                                variant: g.V.TEXT,
                                                withForwardControl: !1,
                                                withBackwardControl: n.canBack,
                                                children: (0, a.jsx)(u.DZ, {
                                                    variant: 'h2',
                                                    weight: 'bold',
                                                    size: 'xl',
                                                    lineClamp: 1,
                                                    children: (0, a.jsx)(r.A, { id: 'page.vibe-rooms' }),
                                                }),
                                            }),
                                            (0, a.jsx)(V, { setContentScrollRef: i }),
                                        ],
                                    }),
                                }),
                            });
                });
        },
        90420: (e, t, i) => {
            'use strict';
            i.d(t, { M1: () => a, N7: () => s, UM: () => n, q7: () => r, yx: () => o });
            let a = 'user:onyourwave',
                n = ['activity'],
                o = 'diversity:reshuffle',
                r = 'multivibe',
                s = 'user';
        },
        91087: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => a });
            let a = (0, i(53548).createContext)(null);
        },
        93512: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => n });
            var a = i(51231);
            let n = (e) => {
                var t;
                if (e) return { animationUri: e.animationUri, cover: (0, a.p)(e.cover), entityType: null == (t = e.entity) ? void 0 : t.type };
            };
        },
        95210: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => o });
            var a = i(53548),
                n = i(38860);
            let o = (e) => {
                let t = (0, a.useRef)(!1),
                    i = (0, n.z)();
                (0, a.useEffect)(() => {
                    (e && (null == i || i.disable(), (t.current = !0)), !e && t.current && (null == i || i.enable(), (t.current = !1)));
                }, [e, i]);
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
        97261: (e, t, i) => {
            'use strict';
            i.d(t, { I: () => a });
            var a = (function (e) {
                return ((e.INTERNAL = 'internal'), (e.EXTERNAL = 'external'), (e.DEEPLINK = 'deeplink'), e);
            })({});
        },
        97811: (e) => {
            e.exports = {
                root: 'PlayingAnimation_root__YrWz7',
                'bubble-out': 'PlayingAnimation_bubble-out__k2fBS',
                root_stopAnimation: 'PlayingAnimation_root_stopAnimation__qOw_g',
            };
        },
        98427: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => a });
            var a = (function (e) {
                return (
                    (e.ALBUM = 'album'),
                    (e.PLAYLIST = 'playlist'),
                    (e.ARTIST = 'artist'),
                    (e.ARTIST_TRACKS = 'artist_tracks'),
                    (e.ARTIST_SIMILAR = 'artist_similar'),
                    (e.ARTIST_ALBUMS = 'artist_albums'),
                    (e.ARTIST_DISCOGRAPHY = 'artist_discography'),
                    (e.ARTIST_COMPILATIONS = 'artist_compilations'),
                    (e.ARTIST_CONCERTS = 'artist_concerts_screen'),
                    (e.ARTIST_CLIPS = 'artist_clips'),
                    (e.CHART = 'chart'),
                    (e.CHART_PODCASTS = 'chart_podcasts'),
                    (e.CHART_PODCASTS_CATEGORY = 'chart_podcasts_category'),
                    (e.HOME = 'home'),
                    (e.SEARCH = 'search'),
                    (e.SIDEBAR = 'sidebar'),
                    (e.OWN_COLLECTION = 'own_collection'),
                    (e.OWN_ALBUMS = 'own_albums'),
                    (e.OWN_DISLIKES = 'own_dislikes'),
                    (e.OWN_PODCASTS = 'own_podcasts'),
                    (e.OWN_ARTISTS = 'own_artists'),
                    (e.OWN_PLAYLISTS = 'own_playlists'),
                    (e.OWN_TRACKS = 'own_tracks'),
                    (e.OWN_CLIPS = 'own_clips'),
                    (e.RADIO = 'radio'),
                    (e.GENRE = 'genre'),
                    (e.GENRE_ALBUMS = 'genre_albums'),
                    (e.GENRE_ARTISTS = 'genre_artists'),
                    (e.GENRE_PLAYLISTS = 'genre_playlists'),
                    (e.TAG = 'tag'),
                    (e.POST = 'post'),
                    (e.HISTORY = 'history'),
                    (e.FAMILIAR_YOU = 'familiar_you'),
                    (e.PODCAST = 'podcast'),
                    (e.AUDIOBOOK = 'audiobook'),
                    (e.NON_MUSIC = 'non_music'),
                    (e.NON_MUSIC_CATEGORY_PLAYLISTS = 'non_music_category_playlists'),
                    (e.NON_MUSIC_ALBUMS = 'non_music_albums'),
                    (e.LANDING = 'landing'),
                    (e.ENTITIES = 'entities'),
                    (e.TRAILER = 'trailer'),
                    (e.TRACK = 'track'),
                    (e.TRACK_SCREEN = 'track_screen'),
                    (e.PLAYER = 'player'),
                    (e.KIDS = 'kids'),
                    (e.KIDS_EDITORIAL_PLAYLISTS = 'kids_editorial_playlists'),
                    (e.KIDS_EDITORIAL_ALBUMS = 'kids_editorial_albums'),
                    (e.DOWNLOADS_TRACKS = 'downloads_tracks'),
                    (e.TRAILER_OF_THE_YEAR = 'trailer_of_the_year'),
                    (e.COLLECTION_KIDS = 'collection_kids'),
                    (e.COLLECTION_KIDS_ALBUMS = 'collection_kids_albums'),
                    (e.COLLECTION_KIDS_PLAYLISTS = 'collection_kids_playlists'),
                    (e.COLLECTION_KIDS_TRACKS = 'collection_kids_tracks'),
                    (e.COLLECTION_VIBE_ROOMS = 'multivibe_screen'),
                    (e.VIDEO_PLAYER = 'video_player'),
                    (e.LABEL = 'label'),
                    (e.LABEL_ALBUMS = 'label_albums'),
                    (e.LABEL_ARTISTS = 'label_artists'),
                    (e.PAYWALL = 'paywall'),
                    (e.CONCERTS = 'concerts'),
                    (e.CONCERT_LOCATION_SELECTOR = 'concert_location_selector'),
                    (e.PROMOLANDING_ALBUM = 'promolanding_album'),
                    (e.CONCERT = 'concert_screen'),
                    (e.PAGE_NOT_FOUND_SCREEN = 'page_not_found_screen'),
                    (e.SLIDES_SCREEN = 'slides_screen'),
                    (e.WAVE_LANDING_SCREEN = 'wave_landing_screen'),
                    (e.FACT_SCREEN = 'fact_screen'),
                    (e.LUMEN_FACT_SCREEN = 'lumen_fact_screen'),
                    (e.LUMEN_AWAKENING_SCREEN = 'lumen_awakening_screen'),
                    (e.MULTIVIBE_SENDING_INVITATION_SCREEN = 'multivibe_sending_invitation_screen'),
                    (e.MULTIVIBE_ACTION_SCREEN = 'multivibe_action_screen'),
                    (e.MULTIVIBE_LIMIT_SCREEN = 'multivibe_limit_screen'),
                    (e.MULTIVIBE_UNIFIED_SCREEN = 'multivibe_unified_screen'),
                    e
                );
            })({});
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7191, 9904, 1829, 2803, 3078, 918, 1833, 2431, 6706, 4771, 1311, 2662, 6904, 1898, 2058, 3578, 8628, 4378, 9780, 8283, 4763, 4732, 9087, 3979, 6719, 1928,
                9091, 9124, 900, 9934, 2470, 1960, 5638, 8244, 763, 2670, 7358,
            ],
            () => e((e.s = 78476)),
        ),
            (_N_E = e.O()));
    },
]);
