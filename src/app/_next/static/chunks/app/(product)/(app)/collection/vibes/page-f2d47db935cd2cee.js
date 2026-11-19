(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2157],
    {
        989: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => a });
            let n = new Set(Object.values(i(22983).y)),
                a = (e) => {
                    let t = null == e ? void 0 : e.toLowerCase();
                    return ((e) => 'string' == typeof e && n.has(e))(t) ? t : void 0;
                };
        },
        1344: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => a });
            let n = [
                    { queryKey: 'utm_campaign', resultKey: 'utmCampaign' },
                    { queryKey: 'utm_medium', resultKey: 'utmMedium' },
                    { queryKey: 'utm_source', resultKey: 'utmSource' },
                    { queryKey: 'utm_term', resultKey: 'utmTerm' },
                    { queryKey: 'yclid', resultKey: 'yclid' },
                ],
                a = (e) =>
                    n.reduce((t, i) => {
                        let { queryKey: n, resultKey: a } = i;
                        return ('string' == typeof e[n] && (t[a] = e[n]), t);
                    }, {});
        },
        3927: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => d });
            var n,
                a,
                o = i(5120);
            !(function (e) {
                ((e.ENABLED = 'ENABLED'), (e.DISABLED = 'DISABLED'), (e.DRAFT = 'DRAFT'));
            })(n || (n = {}));
            var r = i(27506),
                s = i(41814);
            !(function (e) {
                ((e.ACTIVE = 'ACTIVE'), (e.INACTIVE_EXIT = 'INACTIVE_EXIT'), (e.INACTIVE_SUBSCRIPTION = 'INACTIVE_SUBSCRIPTION'));
            })(a || (a = {}));
            var l = i(63425);
            let c = o.gK.model('VibeRoomMember', { uid: o.gK.maybe(o.gK.number), name: o.gK.string, cover: l.$, status: o.gK.maybe(o.gK.string) }).views((e) => ({
                    get isActive() {
                        return e.status === a.ACTIVE;
                    },
                })),
                d = o.gK
                    .model('VibeRoom', {
                        id: o.gK.string,
                        name: o.gK.maybe(o.gK.string),
                        owner: c,
                        members: o.gK.array(c),
                        wave: o.gK.maybe(s.G),
                        status: o.gK.maybe(o.gK.string),
                    })
                    .views((e) => ({
                        get isDisabled() {
                            return e.status === n.DISABLED;
                        },
                        get isDraft() {
                            return e.status === n.DRAFT;
                        },
                        get isEnabled() {
                            return e.status === n.ENABLED;
                        },
                    }))
                    .actions((e) => ({
                        getKey: (t) => ''.concat(t, '_').concat(e.id),
                        editRoom: (0, o.L3)(function* (t) {
                            var i;
                            let { roomId: n, name: a } = t,
                                s = a.trim();
                            if ((null == (i = e.name) ? void 0 : i.trim()) === s) return r.F.OK;
                            let { waveResource: l, modelActionsLogger: c } = (0, o._$)(e);
                            try {
                                return (yield l.editRoom({ roomId: n, name: s }), (e.name = s), r.F.OK);
                            } catch (e) {
                                return (c.error(e), r.F.ERROR);
                            }
                        }),
                        exitRoom: (0, o.L3)(function* (t) {
                            let { roomId: i } = t,
                                { waveResource: n, modelActionsLogger: a } = (0, o._$)(e);
                            try {
                                return (yield n.exitRoom({ roomId: i }), r.F.OK);
                            } catch (e) {
                                return (a.error(e), r.F.ERROR);
                            }
                        }),
                    }));
        },
        4044: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        4370: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => a });
            var n = i(67174);
            let a = {
                main: (0, n.u)('/'),
                chart: (0, n.u)('/chart'),
                chartPodcasts: (0, n.u)('/chart/podcasts'),
                collection: (0, n.u)('/collection'),
                collectionAlbums: (0, n.u)('/collection/albums'),
                collectionArtists: (0, n.u)('/collection/artists'),
                collectionClips: (0, n.u)('/collection/clips'),
                collectionDislikes: (0, n.u)('/collection/dislikes'),
                collectionKids: (0, n.u)('/collection/kids'),
                collectionKidsAlbums: (0, n.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, n.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, n.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, n.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, n.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, n.u)('/collection/multivibes'),
                collectionVibes: (0, n.u)('/collection/vibes'),
                collectionPlaylists: (0, n.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, n.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, n.u)('/collection/playlists/liked'),
                collectionShelf: (0, n.u)('/collection/shelf'),
                collectionShelfLiked: (0, n.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, n.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, n.u)('/collection/shelf/recently-played'),
                concerts: (0, n.u)('/concerts'),
                kids: (0, n.u)('/kids'),
                mixes: (0, n.u)('/mixes'),
                musicHistory: (0, n.u)('/music-history'),
                muzmarket: (0, n.u)('/muzmarket'),
                mymusic: (0, n.u)('/mymusic'),
                mymusicDownloadsTracks: (0, n.u)('/mymusic/downloads/tracks'),
                multivibe: (0, n.u)('/multivibe'),
                nonMusic: (0, n.u)('/non-music'),
                pay: (0, n.u)('/pay'),
                userSlides: (0, n.u)('/slides/user'),
                search: (0, n.u)('/search'),
                searchHistory: (0, n.u)('/search/history'),
                settings: (0, n.u)('/settings'),
                video: (0, n.u)('/video'),
            };
        },
        5407: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => p });
            var n = i(88800),
                a = i(29993),
                o = i(88969),
                r = i(29504),
                s = i(59304),
                l = i(51028),
                c = i.n(l);
            let d = () =>
                (0, n.jsx)(s.$, {
                    message: (0, n.jsx)(r.HL, { variant: 'div', size: 'm', className: c().notification, children: (0, n.jsx)(o.A, { id: 'ads.continue-ad' }) }),
                    coverRadius: 's',
                });
            var u = i(29595),
                _ = i(74965),
                m = i(72288);
            let p = () => {
                let { notify: e } = (0, _.l)(),
                    { advert: t } = (0, m.g)();
                return (0, a.c)(() => (t.isAdvertShown && e((0, n.jsx)(d, {}), { containerId: u.u.INFO }), !!t.isAdvertShown));
            };
        },
        7227: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => r });
            var n = i(5120),
                a = i(989),
                o = i(93512);
            let r = (e, t) => (0, n.wg)({ title: e.name, seeds: e.seeds, description: e.description, type: (0, a.a)(e.type), agent: (0, o.K)(t) });
        },
        7628: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => m });
            var n = i(88800),
                a = i(88969),
                o = i(58390),
                r = i(17392),
                s = i(29993),
                l = i(96817),
                c = i(29504),
                d = i(99890),
                u = i(4086),
                _ = i(41928);
            let m = (e) => {
                let { size: t = 'm', variant: i = 'default', color: m = 'primary', withRipple: p = !0, buttonText: g, isBlock: f, key: v, className: y } = e,
                    b = (0, o.useRouter)(),
                    A = (0, _.N)().get(u.QG),
                    L = (0, s.c)(() => {
                        A.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), b.push(A.authorizationUrl));
                    });
                return (0, n.jsx)(
                    l.$,
                    {
                        onClick: L,
                        className: y,
                        isBlock: f,
                        color: m,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': r.S7.UNAUTHORIZED_BUTTON,
                        children: g || (0, n.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, n.jsx)(a.A, { id: 'authorization.enter-button' }) }),
                    },
                    v,
                );
            };
        },
        9492: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => p });
            var n = i(88800),
                a = i(65724),
                o = i(53548),
                r = i(2058),
                s = i(88969),
                l = i(96817),
                c = i(52300),
                d = i(29504),
                u = i(59304),
                _ = i(4044),
                m = i.n(_);
            let p = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    _ = (0, o.useRef)(null),
                    { formatMessage: p } = (0, r.A)();
                (0, o.useEffect)(() => {
                    var e;
                    null == (e = _.current) || e.focus();
                }, []);
                let g = (0, o.useMemo)(
                    () =>
                        (0, n.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, n.jsx)(d.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, n.jsx)(s.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, n.jsx)(l.$, {
                                    ref: _,
                                    className: m().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': p({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, n.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [p, t],
                );
                return (0, n.jsx)(u.$, { className: (0, a.$)(m().root, m().important), message: g, closeToast: i });
            };
        },
        9590: (e) => {
            e.exports = {
                root: 'EntityCardShimmer_root__Sh7ah',
                subcover: 'EntityCardShimmer_subcover__ESt3R',
                cover: 'EntityCardShimmer_cover__BXtjT',
                cover_round: 'EntityCardShimmer_cover_round__Ci3zW',
                cover_withSubcover: 'EntityCardShimmer_cover_withSubcover__v9l5y',
                infoContainer: 'EntityCardShimmer_infoContainer__22kYk',
                infoContainer_centered: 'EntityCardShimmer_infoContainer_centered__cxlPO',
                title: 'EntityCardShimmer_title__GQ2jX',
                title_withSubcover: 'EntityCardShimmer_title_withSubcover__lBHBC',
                content_linesCount_1: 'EntityCardShimmer_content_linesCount_1__JHlue',
                content_linesCount_2: 'EntityCardShimmer_content_linesCount_2__CMvO5',
                content_linesCount_3: 'EntityCardShimmer_content_linesCount_3__mPzav',
                content_linesCount_4: 'EntityCardShimmer_content_linesCount_4__8KtHO',
            };
        },
        9630: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => a, e: () => o });
            var n = i(53548);
            let a = (0, n.createContext)(null);
            function o() {
                return (0, n.useContext)(a);
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
        12893: (e) => {
            e.exports = {
                collectionLink: 'BaseNotificationLike_collectionLink__HDZIi',
                collectionTitle: 'BaseNotificationLike_collectionTitle__42dz9',
                entityLink: 'BaseNotificationLike_entityLink__PW80J',
                entityTitle: 'BaseNotificationLike_entityTitle__Eyv0h',
                text: 'BaseNotificationLike_text__Jvlq8',
                image: 'BaseNotificationLike_image__8wD5H',
            };
        },
        14912: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => a });
            var n = i(53548);
            let a = () =>
                (0, n.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        15077: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => n });
            var n = (function (e) {
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
            var n = i(35412),
                a = i(28166),
                o = i(97261);
            let r = [n.cy.HTTP, n.cy.HTTPS, n.cy.MAILTO, n.cy.TEL, a.Lz],
                s = (e, t, i) => {
                    let s;
                    try {
                        s = new URL(t);
                    } catch (e) {
                        return null;
                    }
                    let l = (0, n.Rj)(e, { allowedProtocols: new Set([...r, s.protocol]), baseUrl: s.href });
                    return l.isAllowed
                        ? l.url.protocol === a.Lz
                            ? { type: o.I.DEEPLINK, href: e }
                            : '_blank' !== i && ((e, t) => e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port)(l.url, s)
                              ? { type: o.I.INTERNAL, href: e }
                              : { type: o.I.EXTERNAL, href: e }
                        : null;
                };
        },
        16704: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => m });
            var n = i(88800),
                a = i(84961),
                o = i(53548),
                r = i(2058),
                s = i(46482),
                l = i(17392),
                c = i(29993),
                d = i(96817),
                u = i(52300);
            let _ = (0, a.PA)((e) => {
                    let {
                            iconSize: t,
                            className: i,
                            size: a,
                            variant: o = 'default',
                            isPlaying: _ = !1,
                            onClick: m,
                            iconClassName: p,
                            disabled: g,
                            color: f,
                            buttonVariant: v = 'text',
                            children: y,
                            radius: b = 'round',
                            withHover: A,
                            withRipple: L = !1,
                            ariaDescribedBy: E,
                            forwardRef: T,
                            tabIndex: h,
                            ariaHidden: I,
                            shouldSendAnalyticsOnPlayClick: S,
                        } = e,
                        x = (0, s.g)(),
                        { formatMessage: N } = (0, r.A)(),
                        C = ''.concat(_ ? 'pause' : 'play').concat('filled' === o ? '_filled' : ''),
                        R = _ ? l.S7.PAUSE_BUTTON : l.S7.PLAY_BUTTON,
                        O = N(_ ? { id: 'player-actions.pause' } : { id: 'player-actions.play' }),
                        P = (0, c.c)((e) => {
                            (e.stopPropagation(), e.preventDefault(), null == m || m(e), S && !_ && x());
                        });
                    return (0, n.jsx)(d.$, {
                        className: i,
                        variant: v,
                        color: f,
                        radius: b,
                        size: a,
                        flexIcon: !0,
                        withRipple: L,
                        'aria-label': O,
                        onClick: P,
                        icon: (0, n.jsx)(u.I, { variant: C, size: t, className: p }),
                        disabled: g,
                        withHover: A,
                        'aria-describedby': E,
                        ref: T,
                        tabIndex: h,
                        'aria-hidden': I,
                        'data-test-id': R,
                        children: y,
                    });
                }),
                m = (0, o.forwardRef)((e, t) => (0, n.jsx)(_, { forwardRef: t, ...e }));
        },
        16818: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => l });
            var n = i(53647),
                a = i(4086),
                o = i(41928),
                r = i(65523),
                s = i(57448);
            let l = () => {
                let e = (0, o.N)(),
                    t = e.get(a.oo),
                    i = e.get(a.QG),
                    l = e.get(a.uM),
                    c = e.get(a.ff),
                    d = e.get(a.V4),
                    u = e.get(a.P0),
                    _ = (0, s.f)(),
                    m = (0, r.U)(),
                    p = (0, o.N)().get(a.TK),
                    g = e.get(a.ni),
                    f = e.get(a.RD),
                    v = new n.si(),
                    y = new n.fW();
                return {
                    ..._,
                    acqOffers: l,
                    disclaimerDictionary: c,
                    logger: m,
                    modelActionsLogger: p,
                    localStorage: v,
                    sessionStorage: y,
                    containerStorage: t,
                    authorization: i,
                    config: d,
                    clientSafeConfig: u,
                    landingSdk: g,
                    tagSandbox: f,
                };
            };
        },
        18766: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 57328)), Promise.resolve().then(i.bind(i, 49855)));
        },
        20552: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionNotFoundPage: () => r });
            var n = i(88800),
                a = i(84961),
                o = i(64462);
            let r = (0, a.PA)(() => (0, n.jsx)(o.NotFound, {}));
        },
        21416: (e, t, i) => {
            'use strict';
            i.d(t, { y: () => s });
            var n = {
                    5881: (e, t, i) => {
                        function n() {
                            for (var e, t, i = 0, n = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            n,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (n = e(t[i])) && (a && (a += ' '), (a += n));
                                            else for (i in t) t[i] && (a && (a += ' '), (a += i));
                                        return a;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (i.r(t), i.d(t, { clsx: () => n, default: () => a }));
                        let a = n;
                    },
                    2059: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => n }));
                        let n = {
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
                        function n(e, t, n) {
                            var a = null;
                            if ((void 0 !== n && (a = '' + n), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var o in ((n = {}), t)) 'key' !== o && (n[o] = t[o]);
                            else n = t;
                            return { $$typeof: i, type: e, key: a, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    7279: function (e, t, i) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Spinner = void 0));
                        let a = i(4377),
                            o = i(5881),
                            r = n(i(2059));
                        t.Spinner = (e) => {
                            let { className: t, thicknessSizeRatio: i = 0.1, paddingSizeRatio: n = 0.08, size: s, ...l } = e,
                                c = 100 * i,
                                d = 50 - c / 2 - 100 * n,
                                u = ((3 * Math.PI) / 2) * d;
                            return (0, a.jsxs)('svg', {
                                viewBox: '0 0 '.concat(100, ' ').concat(100),
                                className: (0, o.clsx)(r.default.root, r.default['root_size_'.concat(s)], t),
                                'aria-hidden': !0,
                                ...l,
                                children: [
                                    (0, a.jsx)('defs', {
                                        children: (0, a.jsx)('mask', {
                                            id: 'mask',
                                            maskContentUnits: 'userSpaceOnUse',
                                            children: (0, a.jsx)('circle', {
                                                cx: 50,
                                                cy: 50,
                                                r: d,
                                                stroke: 'white',
                                                strokeLinecap: 'round',
                                                strokeWidth: c,
                                                strokeDasharray: u,
                                                fill: 'none',
                                            }),
                                        }),
                                    }),
                                    (0, a.jsx)('foreignObject', {
                                        x: '0',
                                        y: '0',
                                        width: 100,
                                        height: 100,
                                        mask: 'url(#mask)',
                                        children: (0, a.jsx)('div', { className: r.default.gradient }),
                                    }),
                                ],
                            });
                        };
                    },
                },
                a = {};
            function o(e) {
                var t = a[e];
                if (void 0 !== t) return t.exports;
                var i = (a[e] = { exports: {} });
                return (n[e].call(i.exports, i, i.exports, o), i.exports);
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
            i.d(t, { Q: () => u });
            var n = i(88800),
                a = i(84961),
                o = i(53548),
                r = i(50408),
                s = i(47969),
                l = i(53360),
                c = i(15324),
                d = i.n(c);
            let u = (0, a.PA)((e) => {
                let {
                        count: t,
                        rowGap: i,
                        columnGap: a,
                        getEstimateRowSize: c,
                        minColumnCount: u = 2,
                        minColumnWidth: _,
                        maxColumnWidth: m,
                        maxColumnCount: p,
                        renderItemByIndex: g,
                        onChangeRange: f,
                    } = e,
                    [v, y] = (0, r.d)(),
                    {
                        virtualizer: b,
                        rowResizeObserver: A,
                        columnCount: L,
                        indices: E,
                    } = (0, s.L)({
                        count: t,
                        rowGap: i,
                        columnGap: a,
                        getEstimateRowSize: c,
                        minColumnCount: u,
                        minColumnWidth: _,
                        maxColumnWidth: m,
                        maxColumnCount: p,
                        containerRef: v,
                    });
                (0, o.useEffect)(() => {
                    !b.isScrolling && b.range && (null == f || f(b.range, L));
                }, [f, b.isScrolling, b.range, L]);
                let T = { '--virtual-grid-height': ''.concat(b.getTotalSize(), 'px'), '--virtual-grid-column-count': L, '--virtual-grid-column-gap': ''.concat(a, 'px') };
                return (0, n.jsx)('div', {
                    ref: y,
                    style: T,
                    className: d().root,
                    children: b
                        .getVirtualItems()
                        .map((e) =>
                            (0, n.jsx)(
                                l.U,
                                {
                                    className: d().row,
                                    columnClassName: d().column,
                                    virtualItem: e,
                                    resizeObserver: A,
                                    indices: E,
                                    renderItemByIndex: g,
                                    scrollMargin: b.options.scrollMargin,
                                },
                                e.key,
                            ),
                        ),
                });
            });
        },
        21737: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => s });
            var n = i(5120),
                a = i(7227),
                o = i(51231);
            let r = (e) => (0, n.wg)({ uid: e.uid, name: e.name, cover: (0, o.p)(e.cover), status: e.status }),
                s = (e) =>
                    (0, n.wg)({
                        id: e.id,
                        name: e.name,
                        owner: r(e.owner),
                        members: e.members.filter((t) => t.uid !== e.owner.uid).map(r),
                        wave: e.wave ? (0, a.l)(e.wave) : void 0,
                        status: e.status,
                    });
        },
        22983: (e, t, i) => {
            'use strict';
            var n;
            (i.d(t, { y: () => n }),
                (function (e) {
                    ((e.DEFAULT = 'default'), (e.MIX = 'mix'), (e.Q2V = 'q2v'), (e.MULTIVIBE = 'multivibe'));
                })(n || (n = {})));
        },
        26827: (e) => {
            e.exports = {
                root: 'NotFound_root__47ZX6',
                root_desktop: 'NotFound_root_desktop___QqSb',
                container: 'NotFound_container__h1XeE',
                navigation: 'NotFound_navigation__q8rIW',
                content: 'NotFound_content__3kry_',
                icon: 'NotFound_icon___Wa9y',
                title: 'NotFound_title__akG_o',
                important: 'NotFound_important__z1LWl',
                text: 'NotFound_text__oxDZv',
                button: 'NotFound_button__jF4uH',
            };
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
            i.d(t, { F: () => n });
            var n = (function (e) {
                return ((e.OK = 'ok'), (e.ERROR = 'error'), e);
            })({});
        },
        27817: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => u });
            var n = i(88800),
                a = i(84961),
                o = i(53548),
                r = i(88969),
                s = i(17392),
                l = i(52300),
                c = i(19934),
                d = i(72288);
            let u = (0, a.PA)((e) => {
                let { isPinned: t, onClick: i, disabled: a, className: u, iconClassName: _ } = e,
                    { user: m } = (0, d.g)(),
                    p = t ? 'unpin' : 'pin',
                    g = t ? s.S7.CONTEXT_MENU_UNPIN_BUTTON : s.S7.CONTEXT_MENU_PIN_BUTTON,
                    f = (0, o.useMemo)(() => (t ? (0, n.jsx)(r.A, { id: 'interface-actions.unpin' }) : (0, n.jsx)(r.A, { id: 'interface-actions.pin' })), [t]);
                return (0, n.jsx)(c.Dr, {
                    className: u,
                    onClick: i,
                    icon: (0, n.jsx)(l.I, { className: _, variant: p, size: 'xxs' }),
                    'data-test-id': g,
                    disabled: a || !m.isAuthorized,
                    children: f,
                });
            });
        },
        28166: (e, t, i) => {
            'use strict';
            i.d(t, { Lz: () => n, ov: () => a });
            let n = ''.concat('yandexmusic', ':'),
                a = ''.concat(n, '//');
        },
        33719: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => A });
            var n = i(88800),
                a = i(65724),
                o = i(53548),
                r = i(17392),
                s = i(90688),
                l = i(73170),
                c = i(29504),
                d = i(2058),
                u = i(88969),
                _ = i(29993),
                m = i(15077),
                p = i(72288),
                g = i(97956),
                f = i(91292),
                v = i(59304),
                y = i(95641),
                b = i.n(y);
            let A = (e) => {
                let {
                        closeToast: t,
                        className: i,
                        coverUri: y,
                        entityTitle: A,
                        entityDescription: L,
                        entityVariant: E,
                        entityUrl: T,
                        customCover: h,
                        radius: I,
                        isPinned: S,
                    } = e,
                    x = (() => {
                        let { formatMessage: e } = (0, d.A)(),
                            { experiments: t } = (0, p.g)();
                        return (0, _.c)((i) => {
                            let { entityVariant: a, values: o, entityTitle: r, entityDescription: s } = i;
                            switch (a) {
                                case m.c.ALBUM:
                                    return {
                                        caption: (0, n.jsx)(u.A, { id: 'notifications-info.album-pinned-in-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.album-pinned-in-menu' }, { entity: r }),
                                    };
                                case m.c.AUDIOBOOK:
                                    return {
                                        caption: (0, n.jsx)(u.A, { id: 'notifications-info.audiobook-pinned-in-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.audiobook-pinned-in-menu' }, { entity: r }),
                                    };
                                case m.c.FAIRY_TALE:
                                    return {
                                        caption: (0, n.jsx)(u.A, { id: 'notifications-info.fairytale-pinned-in-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.fairytale-pinned-in-menu' }, { entity: r }),
                                    };
                                case m.c.PODCAST:
                                    return {
                                        caption: (0, n.jsx)(u.A, { id: 'notifications-info.podcast-pinned-in-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.podcast-pinned-in-menu' }, { entity: r }),
                                    };
                                case m.c.PLAYLIST:
                                    return {
                                        caption: (0, n.jsx)(u.A, { id: 'notifications-info.playlist-pinned-in-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.playlist-pinned-in-menu' }, { entity: r }),
                                    };
                                case m.c.ARTIST:
                                    return {
                                        caption: (0, n.jsx)(u.A, { id: 'notifications-info.artist-pinned-in-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.artist-pinned-in-menu' }, { entity: r }),
                                    };
                                case m.c.VIBE:
                                    if (!t.checkExperiment(g.z.WebNextVibeDescription, 'on'))
                                        return {
                                            caption: (0, n.jsx)(u.A, { id: 'notifications-info.my-vibe-pinned-in-menu', values: o }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-pinned-in-menu' }, { entity: r }),
                                        };
                                    return {
                                        caption: (0, n.jsx)(u.A, { id: 'notifications-info.entity-pinned-in-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.entity-pinned-in-menu' }, { entity: r, description: s }),
                                    };
                            }
                        });
                    })(),
                    N = (() => {
                        let { formatMessage: e } = (0, d.A)(),
                            { experiments: t } = (0, p.g)();
                        return (0, _.c)((i) => {
                            let { entityVariant: a, values: o, entityTitle: r, entityDescription: s } = i;
                            switch (a) {
                                case m.c.ALBUM:
                                    return {
                                        caption: (0, n.jsx)(u.A, { id: 'notifications-info.album-unpinned-from-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.album-unpinned-from-menu' }, { entity: r }),
                                    };
                                case m.c.AUDIOBOOK:
                                    return {
                                        caption: (0, n.jsx)(u.A, { id: 'notifications-info.audiobook-unpinned-from-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.audiobook-unpinned-from-menu' }, { entity: r }),
                                    };
                                case m.c.FAIRY_TALE:
                                    return {
                                        caption: (0, n.jsx)(u.A, { id: 'notifications-info.fairytale-unpinned-from-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.fairytale-unpinned-from-menu' }, { entity: r }),
                                    };
                                case m.c.PODCAST:
                                    return {
                                        caption: (0, n.jsx)(u.A, { id: 'notifications-info.podcast-unpinned-from-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.podcast-unpinned-from-menu' }, { entity: r }),
                                    };
                                case m.c.PLAYLIST:
                                    return {
                                        caption: (0, n.jsx)(u.A, { id: 'notifications-info.playlist-unpinned-from-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.playlist-unpinned-from-menu' }, { entity: r }),
                                    };
                                case m.c.ARTIST:
                                    return {
                                        caption: (0, n.jsx)(u.A, { id: 'notifications-info.artist-unpinned-from-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.artist-unpinned-from-menu' }, { entity: r }),
                                    };
                                case m.c.VIBE:
                                    if (!t.checkExperiment(g.z.WebNextVibeDescription, 'on'))
                                        return {
                                            caption: (0, n.jsx)(u.A, { id: 'notifications-info.my-vibe-unpinned-from-menu', values: o }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-unpinned-from-menu' }, { entity: r }),
                                        };
                                    return {
                                        caption: (0, n.jsx)(u.A, { id: 'notifications-info.entity-unpinned-from-menu', values: o }),
                                        ariaLabel: e({ id: 'notifications-info.entity-unpinned-from-menu' }, { entity: r, description: s }),
                                    };
                            }
                        });
                    })(),
                    C = (0, o.useMemo)(
                        () =>
                            T
                                ? (0, n.jsx)(f.N, {
                                      className: b().link,
                                      href: T,
                                      title: A,
                                      children: (0, n.jsxs)(c.HL, {
                                          className: b().title,
                                          variant: 'span',
                                          type: 'controls',
                                          size: 'm',
                                          lineClamp: 1,
                                          children: ['\xa0', A, '\xa0'],
                                      }),
                                  })
                                : (0, n.jsxs)(c.HL, {
                                      className: b().title,
                                      variant: 'span',
                                      type: 'controls',
                                      size: 'm',
                                      lineClamp: 1,
                                      title: A,
                                      children: ['\xa0', A, '\xa0'],
                                  }),
                        [A, T],
                    ),
                    R = (0, o.useMemo)(
                        () => h || (0, n.jsx)(s._V, { className: b().image, src: y, size: 100, fit: 'cover', withAvatarReplace: !0, 'aria-hidden': !0 }),
                        [y, h],
                    ),
                    O = (0, o.useMemo)(() => {
                        let e = { entity: C, description: L };
                        return S
                            ? x({ entityVariant: E, values: e, entityTitle: A, entityDescription: L })
                            : N({ entityVariant: E, values: e, entityTitle: A, entityDescription: L });
                    }, [C, L, S, N, E, A, x]);
                return (0, n.jsx)(v.$, {
                    className: (0, a.$)(b().root, { [b().root_withLongText]: E === m.c.AUDIOBOOK }, i),
                    closeToast: t,
                    cover: R,
                    message: (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(l.q, { children: (0, n.jsx)('p', { role: 'alert', 'aria-label': O.ariaLabel }) }),
                            (0, n.jsx)(c.HL, {
                                className: b().text,
                                variant: 'div',
                                type: 'controls',
                                size: 'm',
                                'data-test-id': r.S7.BASE_NOTIFICATION_PIN_TEXT,
                                'aria-hidden': !0,
                                children: O.caption,
                            }),
                        ],
                    }),
                    coverRadius: I,
                });
            };
        },
        34303: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => n });
            var n = (function (e) {
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
        34945: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => l });
            var n = i(88800),
                a = i(65724),
                o = i(17392),
                r = i(97811),
                s = i.n(r);
            let l = (e) => {
                let { className: t, stopAnimation: i } = e;
                return (0, n.jsx)('div', { className: (0, a.$)(s().root, { [s().root_stopAnimation]: i }, t), 'data-test-id': o.S7.PLAYING_ANIMATION });
            };
        },
        34961: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => f, s: () => v });
            var n = i(88800),
                a = i(84961),
                o = i(58390),
                r = i(53548),
                s = i(35412),
                l = i(39499),
                c = i(89108),
                d = i(70003),
                u = i(72288),
                _ = i(16818);
            (0, a.eO)(!1);
            let m = (0, r.createContext)(null),
                p = (e) => {
                    let { children: t, store: i, storeKey: a } = e,
                        o = (0, r.useMemo)(() => ({ store: i, storeKey: a }), [i, a]);
                    return (0, n.jsx)(m.Provider, { value: o, children: t });
                },
                g = (e) => {
                    let { nonce: t, patchKey: i, patchesRef: a } = e;
                    return (
                        (0, o.useServerInsertedHTML)(() => {
                            let e = a.current;
                            return ((a.current = []), 0 === e.length)
                                ? null
                                : (0, n.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, s.Gr)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(i, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                f = (e) => {
                    let { createStore: t, patchKey: i } = e,
                        a = () => {
                            var e, t;
                            let n = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[i]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[i], n);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: o, nonce: r } = e,
                                s = (0, _.Y)(),
                                l = (0, u.g)(),
                                { store: m, patchesRef: f } = (0, d.m)({
                                    createStore: () => t({ ...s, rootStore: l }),
                                    getPendingPatchBatches: a,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(g, { nonce: r, patchKey: i, patchesRef: f }), (0, n.jsx)(p, { store: m, storeKey: i, children: o })],
                            });
                        },
                    };
                };
            function v(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = (0, r.useContext)(m);
                if (!i || i.storeKey !== e) {
                    var n;
                    if (!t) return null;
                    throw new l.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (n = null == i ? void 0 : i.storeKey) ? n : 'null', expectedStoreKey: e },
                    });
                }
                return i.store;
            }
        },
        37670: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => o });
            var n = i(53548);
            i(30282);
            var a = i(58390);
            let o = (e) => {
                let t = (0, a.usePathname)(),
                    [i, o] = (0, n.useState)(!1);
                ((0, n.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, n.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !i && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), o(!0));
                    }, [e, i, t]));
            };
        },
        37770: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => c });
            var n = i(88800),
                a = i(65724),
                o = i(17392),
                r = i(19994),
                s = i(9590),
                l = i.n(s);
            let c = (e) => {
                let {
                    isActive: t,
                    className: i,
                    shimmerClassName: s,
                    round: c,
                    'aria-label': d,
                    centered: u,
                    withInfo: _ = !0,
                    linesCount: m = 3,
                    withSubcover: p,
                    radius: g = 'l',
                } = e;
                return (0, n.jsxs)('div', {
                    'aria-label': d,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, a.$)(l().root, i),
                    'data-test-id': o.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        p && (0, n.jsx)(r.W, { isActive: t, className: l().subcover, radius: 'l' }),
                        (0, n.jsx)(r.W, { isActive: t, className: (0, a.$)(l().cover, s, { [l().cover_round]: c, [l().cover_withSubcover]: p }), radius: g }),
                        _ &&
                            (0, n.jsx)('div', {
                                className: (0, a.$)(l().infoContainer, l()['content_linesCount_'.concat(m)], { [l().infoContainer_centered]: u }),
                                children: (0, n.jsx)(r.W, { isActive: t, className: (0, a.$)(l().title, { [l().title_withSubcover]: p }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        38860: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => o });
            var n = i(53548),
                a = i(41168);
            let o = () => (0, n.useContext)(a.P);
        },
        39267: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => y });
            var n = i(88800),
                a = i(65724),
                o = i(84961),
                r = i(53548),
                s = i(2058),
                l = i(17392),
                c = i(7555),
                d = i(21416),
                u = i(72288),
                _ = i(81877),
                m = i(16704),
                p = i(34945),
                g = i(11325),
                f = i.n(g);
            let v = (0, o.PA)((e) => {
                    let {
                            className: t,
                            isAvailable: i,
                            isDisliked: o,
                            coverUri: r,
                            title: g,
                            onPlayButtonClick: v,
                            isPlaying: y,
                            isCurrent: b,
                            radius: A,
                            isPlayButtonLoading: L,
                            isLoading: E,
                            shouldShowControl: T = !0,
                            ariaDescribedBy: h,
                            ignoreDislikedStyles: I,
                            entityCoverStyle: S,
                            forwardRef: x,
                            playButtonIconSize: N = 'xs',
                            alt: C,
                            withLoadingIndicator: R,
                            coverClassName: O,
                            entityCoverClassName: P,
                            controlClassName: j,
                            fallbackIconSize: k = 'xs',
                        } = e,
                        { formatMessage: w } = (0, s.A)(),
                        {
                            settings: { isMobile: K },
                        } = (0, u.g)();
                    return (0, n.jsx)('div', {
                        className: (0, a.$)(f().root, t, { [f().root_disabled]: !i, [f().root_current]: b, [f().root_disliked]: o && !I, [f().root_playing]: y }),
                        'data-test-id': l.S7.PLAY_BUTTON_WITH_COVER,
                        children: (0, n.jsxs)(c.t, {
                            className: (0, a.$)(f().cover, O),
                            radius: A,
                            children: [
                                (0, n.jsx)(_.B, {
                                    className: (0, a.$)(f().coverImage, P),
                                    src: r,
                                    size: 100,
                                    alt: null != C ? C : w({ id: 'entity-names.track-name' }, { trackName: g }),
                                    fit: 'cover',
                                    withAvatarReplace: !0,
                                    isAvailable: i,
                                    fallbackIconSize: k,
                                    style: S,
                                    withLoadingIndicator: R,
                                }),
                                T &&
                                    (0, n.jsxs)('div', {
                                        className: (0, a.$)(f().control, j),
                                        children: [
                                            !E && (0, n.jsx)(p.P, { stopAnimation: !y, className: f().playingAnimation }),
                                            E && K && (0, n.jsx)(d.y, { size: 'xs', className: f().spinner }),
                                            !K &&
                                                (0, n.jsx)(m.D, {
                                                    ref: x,
                                                    variant: 'filled',
                                                    className: (0, a.$)(f().playButton, { [f().playButton_loading]: L }),
                                                    iconClassName: f().playButtonIcon,
                                                    isPlaying: y,
                                                    onClick: v,
                                                    iconSize: N,
                                                    ariaDescribedBy: h,
                                                    disabled: !i,
                                                }),
                                        ],
                                    }),
                            ],
                        }),
                    });
                }),
                y = (0, r.forwardRef)((e, t) => (0, n.jsx)(v, { forwardRef: t, ...e }));
        },
        41168: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => n });
            let n = (0, i(53548).createContext)(null);
        },
        41814: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => u });
            var n = i(5120),
                a = i(80989),
                o = i(22983),
                r = i(50633),
                s = i(97956),
                l = i(90420),
                c = i(63425);
            let d = n.gK.model('VibeAgent', { animationUri: n.gK.string, cover: c.$, entityType: n.gK.maybe(n.gK.string) }),
                u = n.gK
                    .model('Vibe', {
                        title: n.gK.optional(n.gK.string, ''),
                        description: n.gK.maybe(n.gK.string),
                        seeds: n.gK.array(n.gK.string),
                        imageUrl: n.gK.maybe(n.gK.string),
                        animationUrl: n.gK.maybe(n.gK.string),
                        backgroundImageUrl: n.gK.maybe(n.gK.string),
                        backgroundColor: n.gK.maybe(n.gK.string),
                        type: n.gK.maybe(n.gK.string),
                        colors: n.gK.maybe(n.gK.model({ average: n.gK.maybe(n.gK.string), waveText: n.gK.maybe(n.gK.string) })),
                        agent: n.gK.maybe(d),
                    })
                    .views((e) => {
                        let t = {
                            get stationId() {
                                var i;
                                return null != (i = e.seeds[0]) ? i : '';
                            },
                            get seedsId() {
                                return e.seeds.join(',');
                            },
                            get context() {
                                if (e.seeds) {
                                    if (t.stationId !== l.M1) return e.title;
                                    else if (e.seeds.length > 1) return e.title;
                                }
                                return null;
                            },
                            get pinId() {
                                return (0, a.f)(e.seeds);
                            },
                            get isPinned() {
                                if (!(0, n._n)(e)) return !1;
                                let { pinsCollection: t } = (0, r.M)(e);
                                return t.isPinned(this.pinId);
                            },
                            get isLikeEnabled() {
                                return e.seeds.length > 0 && e.seeds.every((e) => e !== l.M1 && e !== l.yx && !e.startsWith('playlist:'));
                            },
                            get isShareEnabled() {
                                return t.isLikeEnabled && t.stationType !== l.q7 && t.stationType !== l.N7;
                            },
                            get isLiked() {
                                if (!(0, n._n)(e)) return !1;
                                let { library: t } = (0, r.M)(e);
                                return t.isVibeLiked(e.seeds);
                            },
                            get stationType() {
                                var c, d;
                                return null != (d = null == (c = t.stationId) ? void 0 : c.split(':')[0]) ? d : '';
                            },
                            get isMix() {
                                return e.type === o.y.MIX;
                            },
                            get isQ2V() {
                                return e.type === o.y.Q2V;
                            },
                            get shouldShowAgent() {
                                if (!(0, n._n)(e)) return !1;
                                let { experiments: t } = (0, r.M)(e);
                                return t.checkExperiment(s.z.WebNextWaveAgentExperiment, 'on');
                            },
                            get cover() {
                                return (0, n.wg)({ uri: e.imageUrl, color: e.backgroundColor });
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getKey: (t) => ''.concat(t, '_').concat(e.seeds[0]),
                        togglePin: (0, n.L3)(function* () {
                            if (!(0, n._n)(e)) return;
                            let { pinsCollection: t, user: i } = (0, r.M)(e);
                            if (i.isAuthorized) return yield t.toggleVibePin({ seeds: e.seeds }, e.pinId);
                        }),
                        toggleLike: (0, n.L3)(function* () {
                            if (!(0, n._n)(e) || !e.isLikeEnabled) return;
                            let { library: t, user: i } = (0, r.M)(e);
                            if (i.isAuthorized) return yield t.toggleVibeLike({ seeds: [...e.seeds] });
                        }),
                        getDescription() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                            if (!(0, n._n)(e)) return t;
                            let { experiments: i } = (0, r.M)(e);
                            return i.checkExperiment(s.z.WebNextVibeDescription, 'on') && void 0 !== (null == e ? void 0 : e.description) ? e.description : t;
                        },
                    }));
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
        42729: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => A });
            var n = i(88800),
                a = i(65724),
                o = i(84961),
                r = i(53548),
                s = i(17392),
                l = i(29993),
                c = i(73170),
                d = i(29504),
                u = i(2058),
                _ = i(88969),
                m = i(15077),
                p = i(72288),
                g = i(81877),
                f = i(91292),
                v = i(59304),
                y = i(12893),
                b = i.n(y);
            let A = (0, o.PA)((e) => {
                let {
                        closeToast: t,
                        entityVariant: i,
                        entityUrl: o,
                        collectionUrl: y,
                        entityTitle: A,
                        coverUri: L,
                        customCover: E,
                        isLiked: T,
                        className: h,
                        withLink: I = !0,
                    } = e,
                    { fullscreenPlayer: S, fullscreenVideoPlayer: x } = (0, p.g)(),
                    N = i === m.c.ARTIST,
                    C = (() => {
                        let { formatMessage: e } = (0, u.A)();
                        return (0, r.useCallback)(
                            (t) => {
                                let { entityVariant: i, values: a, entityTitle: o } = t;
                                switch (i) {
                                    case m.c.VIBE:
                                        return {
                                            caption: (0, n.jsx)(_.A, { id: 'notifications-info.my-vibe-added-to-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-added-to-collection-aria-label' }),
                                        };
                                    case m.c.TRACK:
                                        return {
                                            caption: (0, n.jsx)(_.A, { id: 'notifications-info.track-added-to-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.track-added-to-collection-aria-label' }, { entity: o }),
                                        };
                                    case m.c.PLAYLIST:
                                        return {
                                            caption: (0, n.jsx)(_.A, { id: 'notifications-info.playlist-added-to-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.playlist-added-to-collection-aria-label' }, { entity: o }),
                                        };
                                    case m.c.ALBUM:
                                        return {
                                            caption: (0, n.jsx)(_.A, { id: 'notifications-info.album-added-to-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.album-added-to-collection-aria-label' }, { entity: o }),
                                        };
                                    case m.c.FAIRY_TALE:
                                        return {
                                            caption: (0, n.jsx)(_.A, { id: 'notifications-info.fairytale-added-to-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.fairytale-added-to-collection-aria-label' }, { entity: o }),
                                        };
                                    case m.c.ARTIST:
                                        return {
                                            caption: (0, n.jsx)(_.A, { id: 'notifications-info.artist-added-to-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.artist-added-to-collection-aria-label' }, { entity: o }),
                                        };
                                    case m.c.PODCAST:
                                        return {
                                            caption: (0, n.jsx)(_.A, { id: 'notifications-info.podcast-added-to-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.podcast-added-to-collection-aria-label' }, { entity: o }),
                                        };
                                    case m.c.PODCAST_EPISODE:
                                        return {
                                            caption: (0, n.jsx)(_.A, { id: 'notifications-info.podcast-episode-added-to-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.podcast-episode-added-to-collection-aria-label' }, { entity: o }),
                                        };
                                    case m.c.AUDIOBOOK:
                                        return {
                                            caption: (0, n.jsx)(_.A, { id: 'notifications-info.audiobook-added-to-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.audiobook-added-to-collection-aria-label' }, { entity: o }),
                                        };
                                    case m.c.AUDIOBOOK_EPISODE:
                                        return {
                                            caption: (0, n.jsx)(_.A, { id: 'notifications-info.audiobook-episode-added-to-shelf', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.audiobook-episode-added-to-shelf-aria-label' }, { entity: o }),
                                        };
                                    case m.c.CLIP:
                                        return {
                                            caption: (0, n.jsx)(_.A, { id: 'notifications-info.clip-added-to-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.clip-added-to-collection-aria-label' }, { entity: o }),
                                        };
                                }
                            },
                            [e],
                        );
                    })(),
                    R = (() => {
                        let { formatMessage: e } = (0, u.A)();
                        return (0, r.useCallback)(
                            (t) => {
                                let { entityVariant: i, values: a, entityTitle: o } = t;
                                switch (i) {
                                    case m.c.VIBE:
                                        return {
                                            caption: (0, n.jsx)(_.A, { id: 'notifications-info.my-vibe-removed-from-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-removed-from-collection-aria-label' }),
                                        };
                                    case m.c.TRACK:
                                        return {
                                            caption: (0, n.jsx)(_.A, { id: 'notifications-info.track-removed-from-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.track-removed-to-collection-aria-label' }, { entity: o }),
                                        };
                                    case m.c.PLAYLIST:
                                        return {
                                            caption: (0, n.jsx)(_.A, { id: 'notifications-info.playlist-removed-from-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.playlist-removed-from-collection-aria-label' }, { entity: o }),
                                        };
                                    case m.c.ALBUM:
                                        return {
                                            caption: (0, n.jsx)(_.A, { id: 'notifications-info.album-removed-from-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.album-removed-from-collection-aria-label' }, { entity: o }),
                                        };
                                    case m.c.FAIRY_TALE:
                                        return {
                                            caption: (0, n.jsx)(_.A, { id: 'notifications-info.fairytale-removed-from-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.fairytale-removed-from-collection-aria-label' }, { entity: o }),
                                        };
                                    case m.c.ARTIST:
                                        return {
                                            caption: (0, n.jsx)(_.A, { id: 'notifications-info.artist-removed-from-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.artist-removed-from-collection-aria-label' }, { entity: o }),
                                        };
                                    case m.c.PODCAST:
                                        return {
                                            caption: (0, n.jsx)(_.A, { id: 'notifications-info.podcast-removed-from-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.podcast-remove-from-collection-aria-label' }, { entity: o }),
                                        };
                                    case m.c.PODCAST_EPISODE:
                                        return {
                                            caption: (0, n.jsx)(_.A, { id: 'notifications-info.podcast-episode-removed-from-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.podcast-episode-removed-from-collection-aria-label' }, { entity: o }),
                                        };
                                    case m.c.AUDIOBOOK:
                                        return {
                                            caption: (0, n.jsx)(_.A, { id: 'notifications-info.audiobook-removed-from-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.audiobook-removed-from-collection-aria-label' }, { entity: o }),
                                        };
                                    case m.c.AUDIOBOOK_EPISODE:
                                        return {
                                            caption: (0, n.jsx)(_.A, { id: 'notifications-info.audiobook-episode-removed-from-shelf', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.audiobook-episode-removed-from-shelf-aria-label' }, { entity: o }),
                                        };
                                    case m.c.CLIP:
                                        return {
                                            caption: (0, n.jsx)(_.A, { id: 'notifications-info.clip-removed-from-collection', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.clip-removed-from-collection-aria-label' }, { entity: o }),
                                        };
                                }
                            },
                            [e],
                        );
                    })(),
                    O = (0, l.c)(() => {
                        (S.modal.isOpened && S.modal.close(), x.modal.isOpened && x.modal.close());
                    }),
                    P = (0, r.useMemo)(
                        () =>
                            o && A && I
                                ? (0, n.jsx)(f.N, {
                                      className: b().entityLink,
                                      href: o,
                                      onClick: O,
                                      children: (0, n.jsxs)(d.HL, {
                                          className: b().entityTitle,
                                          variant: 'span',
                                          type: 'controls',
                                          size: 'm',
                                          lineClamp: 1,
                                          children: ['\xa0', A, '\xa0'],
                                      }),
                                  })
                                : A
                                  ? (0, n.jsxs)(d.HL, {
                                        className: b().entityTitle,
                                        variant: 'span',
                                        type: 'controls',
                                        size: 'm',
                                        lineClamp: 1,
                                        title: A,
                                        children: ['\xa0', A, '\xa0'],
                                    })
                                  : void 0,
                        [A, o, O, I],
                    ),
                    j = (0, r.useMemo)(() => {
                        let e = {
                            entity: P,
                            collection: (e) =>
                                I
                                    ? (0, n.jsx)(f.N, {
                                          className: b().collectionLink,
                                          href: y,
                                          onClick: O,
                                          children: (0, n.jsxs)(d.HL, {
                                              className: b().collectionTitle,
                                              variant: 'span',
                                              type: 'controls',
                                              size: 'm',
                                              lineClamp: 1,
                                              children: ['\xa0', e, '\xa0'],
                                          }),
                                      })
                                    : (0, n.jsxs)(d.HL, {
                                          className: b().collectionTitle,
                                          variant: 'span',
                                          type: 'controls',
                                          size: 'm',
                                          lineClamp: 1,
                                          children: ['\xa0', e, '\xa0'],
                                      }),
                        };
                        return T ? C({ entityVariant: i, values: e, entityTitle: A }) : R({ entityVariant: i, values: e, entityTitle: A });
                    }, [y, i, O, T, P, A, C, R, I]);
                return (0, n.jsx)(v.$, {
                    className: (0, a.$)(b().root, h),
                    message: (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(c.q, { children: (0, n.jsx)('p', { role: 'alert', 'aria-label': j.ariaLabel }) }),
                            (0, n.jsx)(d.HL, {
                                className: b().text,
                                variant: 'div',
                                type: 'controls',
                                size: 'm',
                                'data-test-id': s.S7.BASE_NOTIFICATION_LIKE_TEXT,
                                'aria-hidden': !0,
                                children: j.caption,
                            }),
                        ],
                    }),
                    cover: null != E ? E : (0, n.jsx)(g.B, { className: b().image, src: L, size: 100, fit: 'cover', alt: A, withAvatarReplace: !0 }),
                    coverRadius: N ? 'round' : 's',
                    closeToast: t,
                });
            });
        },
        47969: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => c });
            var n = i(35802),
                a = i(79070),
                o = i(61013),
                r = i(53548);
            let s = (e) => {
                let { minColumnWidth: t, maxColumnWidth: i, containerWidth: n, totalCount: a, columnGap: o, minColumnCount: r, maxColumnCount: s } = e,
                    l = Math.max(1, Math.floor((n + o) / (t + o))),
                    c = Math.max(r, Math.floor((n + o) / ((i + t) * 0.5 + o)));
                for (let e = r; e <= l; e++) {
                    let a = (n - (e - 1) * o) / e;
                    if (a >= t && a <= i) {
                        c = e;
                        break;
                    }
                }
                return { rowCount: Math.ceil(a / (c = s ? Math.min(c, s) : c)), columnCount: c };
            };
            var l = i(10270);
            let c = (e) => {
                let {
                        count: t,
                        getEstimateRowSize: i,
                        rowGap: c,
                        columnGap: d,
                        minColumnWidth: u,
                        maxColumnWidth: _,
                        minColumnCount: m,
                        maxColumnCount: p,
                        containerRef: g,
                    } = e,
                    { rowCount: f, columnCount: v } = ((e) => {
                        let { containerRef: t, minColumnCount: i, maxColumnWidth: n, minColumnWidth: a, totalCount: l, columnGap: c, maxColumnCount: d } = e,
                            [u, _] = (0, r.useState)({ rowCount: 0, columnCount: 0 }),
                            m = (0, r.useRef)(null),
                            p = (0, r.useMemo)(
                                () =>
                                    (0, o.A)(
                                        (e) => {
                                            _(
                                                s({
                                                    minColumnWidth: a,
                                                    maxColumnWidth: n,
                                                    containerWidth: e.contentRect.width,
                                                    totalCount: l,
                                                    columnGap: c,
                                                    minColumnCount: i,
                                                    maxColumnCount: d,
                                                }),
                                            );
                                        },
                                        100,
                                        { trailing: !0 },
                                    ),
                                [c, d, n, i, a, l],
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
                                                minColumnWidth: a,
                                                maxColumnWidth: n,
                                                containerWidth: t.getBoundingClientRect().width,
                                                totalCount: l,
                                                columnGap: c,
                                                minColumnCount: i,
                                                maxColumnCount: d,
                                            }),
                                        ),
                                        m.current.observe(t)),
                                    () => {
                                        var e;
                                        null == (e = m.current) || e.disconnect();
                                    }
                                ),
                                [c, t, p, d, n, i, a, l],
                            ),
                            u
                        );
                    })({ totalCount: t, columnGap: null != d ? d : 0, minColumnCount: m, maxColumnWidth: _, minColumnWidth: u, maxColumnCount: p, containerRef: g }),
                    { virtualizer: y, resizeObserver: b } = (0, l.r)({ count: f, getEstimateSize: i, gap: c, containerRef: g, useVirtualizerMeasurement: !1 }),
                    A = (0, n.A)(
                        Array.from({ length: t }, (e, t) => t),
                        v,
                    ),
                    L = (0, a.L)(() => {
                        var e, t;
                        if (!y.range) return null;
                        let i = null == (e = A[y.range.startIndex]) ? void 0 : e.at(0),
                            n = null == (t = A[y.range.endIndex]) ? void 0 : t.at(-1);
                        return void 0 !== i && void 0 !== n ? { startIndex: i, endIndex: n } : null;
                    });
                return { virtualizer: y, rowResizeObserver: b, indices: A, columnCount: v, visibleRange: L };
            };
        },
        49397: (e) => {
            e.exports = { root: 'BaseNotificationError_root__FfGUZ', message: 'BaseNotificationError_message___W_xy' };
        },
        49738: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => v });
            var n = i(88800),
                a = i(65724),
                o = i(84961),
                r = i(53548),
                s = i(2058),
                l = i(97234),
                c = i(66610),
                d = i(17392),
                u = i(81883),
                _ = i(96817),
                m = i(52300),
                p = i(90958),
                g = i.n(p);
            let f = (0, o.PA)((e) => {
                    let {
                            className: t,
                            variant: i = 'text',
                            iconSize: o,
                            isLiked: r = !1,
                            onClick: p,
                            iconClassName: f,
                            withRipple: v = !1,
                            size: y = 's',
                            forwardRef: b,
                            children: A,
                            color: L,
                            disabled: E = !1,
                            'aria-label': T,
                        } = e,
                        h = (0, c.D)(),
                        { formatMessage: I } = (0, s.A)(),
                        {
                            scaleAnimation: S,
                            unscaleAnimation: x,
                            handleAnimationEnd: N,
                            handleClick: C,
                        } = (0, u.C)({
                            shouldStartFromUnscale: r,
                            onClick: (e) => {
                                (null == p || p(e), h({ actionType: r ? l.ActionType.Unlike : l.ActionType.Like, userInteractionType: l.UserInteractionType.Tap }));
                            },
                        }),
                        R = r ? 'liked' : 'like';
                    return (0, n.jsx)(_.$, {
                        className: (0, a.$)(g().root, { [g().animation_scaled]: S, [g().animation_unscaled]: x }, t),
                        color: L,
                        onAnimationEnd: N,
                        withRipple: v,
                        variant: i,
                        size: y,
                        radius: 'xxxl',
                        'aria-label': T || I({ id: 'interface-actions.like' }),
                        'aria-pressed': r,
                        onClick: C,
                        icon: (0, n.jsx)(m.I, { size: o, className: (0, a.$)(g().icon, f), variant: R }),
                        ref: b,
                        disabled: E,
                        'data-test-id': d.S7.LIKE_BUTTON,
                        children: A,
                    });
                }),
                v = (0, r.forwardRef)((e, t) => (0, n.jsx)(f, { forwardRef: t, ...e }));
        },
        49855: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionVibesPage: () => eO });
            var n,
                a = i(88800),
                o = i(65724),
                r = i(84961),
                s = i(53548),
                l = i(57074),
                c = i(2058),
                d = i(88969),
                u = i(97234),
                _ = i(36740),
                m = i(81862),
                p = i(59724),
                g = i(17392),
                f = i(29504),
                v = i(32596),
                y = i(69630),
                b = i(98427),
                A = i(46422),
                L = i(44230),
                E = i(37670),
                T = i(34961),
                h = i(53892),
                I = i(72288),
                S = i(97956),
                x = i(93317),
                N = i(63807),
                C = i(56248),
                R = i(87366),
                O = i(76099),
                P = i(5120);
            !(function (e) {
                ((e.ALL = 'all'), (e.LIKED = 'liked'), (e.ROOMS = 'rooms'));
            })(n || (n = {}));
            var j = i(67780),
                k = i(50633),
                w = i(27506),
                K = i(74773),
                M = i(59497),
                D = i(67311),
                B = i(21737),
                V = i(7227);
            let U = (e) => (e.type === j.H.WAVE_ROOM ? { type: e.type, room: (0, B.Q)(e.data.room) } : { type: e.type, vibe: (0, V.l)(e.data.wave, e.data.agent) });
            var F = i(41814),
                z = i(3927);
            let G = P.gK.union(
                    P.gK.model('CollectionVibesPageLikedItem', { type: P.gK.literal(j.H.LIKED_WAVE), vibe: F.G }),
                    P.gK.model('CollectionVibesPageRoomItem', { type: P.gK.literal(j.H.WAVE_ROOM), room: z.b }),
                ),
                W = P.gK.model({
                    pagesLoader: P.gK.optional(
                        P.gK
                            .compose(
                                P.gK.model('CursorPageLoader', {
                                    items: P.gK.maybeNull(P.gK.array(G)),
                                    nextPageToken: P.gK.maybe(P.gK.string),
                                    initialRequestLoading: P.gK.optional(M.X, { loadingState: K.G.IDLE }),
                                    requestLoading: P.gK.optional(M.X, { loadingState: K.G.IDLE }),
                                    requestsCount: P.gK.optional(P.gK.number, 0),
                                }),
                                D.p,
                            )
                            .views((e) => {
                                let t = {
                                    get isSomePageResolved() {
                                        return e.initialRequestLoading.isResolved;
                                    },
                                    get isNeedToMakeInitialRequest() {
                                        return e.initialRequestLoading.isNeededToLoad;
                                    },
                                    get isInitialRequestRejected() {
                                        return e.initialRequestLoading.isRejected;
                                    },
                                    get hasMorePages() {
                                        return !t.isSomePageResolved || void 0 !== e.nextPageToken;
                                    },
                                    get isEmpty() {
                                        var i;
                                        return t.isSomePageResolved && !t.hasMorePages && !(null == (i = e.items) ? void 0 : i.length);
                                    },
                                    get rejectedPagesCount() {
                                        return t.isSomePageResolved && e.requestLoading.isRejected ? 1 : 0;
                                    },
                                };
                                return t;
                            })
                            .actions((e) => {
                                let t,
                                    i = 0,
                                    n = new Set();
                                return {
                                    startRequest() {
                                        if ((0, P._n)(e) && e.hasMorePages && !e.requestLoading.isLoading && !e.requestLoading.isRejected)
                                            return (
                                                (t = ++i),
                                                (e.requestLoading.loadingState = K.G.PENDING),
                                                e.isSomePageResolved || (e.initialRequestLoading.loadingState = K.G.PENDING),
                                                void 0 === e.nextPageToken ? { requestId: t } : { requestId: t, pageToken: e.nextPageToken }
                                            );
                                    },
                                    setItems(i, a) {
                                        let { requestId: o, nextPageToken: r, responseStatus: s } = a;
                                        return (
                                            !!(0, P._n)(e) &&
                                            void 0 !== t &&
                                            o === t &&
                                            (s === w.F.ERROR || !i || (void 0 !== r && n.has(r))
                                                ? ((e.requestLoading.loadingState = K.G.REJECT),
                                                  e.isSomePageResolved || (e.initialRequestLoading.loadingState = K.G.REJECT))
                                                : (e.items ? e.items.push(...i) : (e.items = (0, P.wg)(i)),
                                                  (e.nextPageToken = r),
                                                  void 0 !== r && n.add(r),
                                                  (e.initialRequestLoading.loadingState = K.G.RESOLVE),
                                                  (e.requestLoading.loadingState = K.G.RESOLVE)),
                                            (t = void 0),
                                            (e.requestsCount += 1),
                                            !0)
                                        );
                                    },
                                    resetRejectedPagesState() {
                                        e.requestLoading.isRejected &&
                                            ((e.requestLoading.loadingState = K.G.IDLE), e.isInitialRequestRejected && (e.initialRequestLoading.loadingState = K.G.IDLE));
                                    },
                                    reset() {
                                        ((t = void 0),
                                            n.clear(),
                                            (e.nextPageToken = void 0),
                                            (e.initialRequestLoading.loadingState = K.G.IDLE),
                                            (e.requestLoading.loadingState = K.G.IDLE),
                                            (e.requestsCount = 0),
                                            e.destroyItems([e.items]));
                                    },
                                };
                            }),
                        {},
                    ),
                    initialChainComplete: !1,
                }),
                Y = P.gK
                    .model('CollectionVibesPage', {
                        filter: P.gK.optional(P.gK.enumeration(Object.values(n)), n.ALL),
                        tabs: P.gK.optional(P.gK.model({ [n.ALL]: P.gK.optional(W, {}), [n.LIKED]: P.gK.optional(W, {}), [n.ROOMS]: P.gK.optional(W, {}) }), {}),
                        exitedRoomIds: P.gK.array(P.gK.string),
                    })
                    .views((e) => ({
                        get activeTab() {
                            return e.tabs[e.filter];
                        },
                        getItems(t) {
                            var i, n;
                            let { library: a } = (0, k.M)(e),
                                o = null !== a.vibes.revision,
                                r = new Set();
                            return null !=
                                (n =
                                    null == (i = t.pagesLoader.items)
                                        ? void 0
                                        : i.filter((t) => {
                                              let i = t.type === j.H.WAVE_ROOM ? t.room.getKey(t.type) : ''.concat(t.type, '_').concat(t.vibe.pinId);
                                              return !r.has(i) && ((r.add(i), t.type === j.H.WAVE_ROOM) ? !e.exitedRoomIds.includes(t.room.id) : !o || t.vibe.isLiked);
                                          }))
                                ? n
                                : [];
                        },
                    }))
                    .views((e) => ({
                        get items() {
                            return e.getItems(e.activeTab);
                        },
                        get pagesLoader() {
                            return e.activeTab.pagesLoader;
                        },
                        get isShimmerVisible() {
                            return !e.activeTab.initialChainComplete && !e.activeTab.pagesLoader.requestLoading.isRejected;
                        },
                        get isRejected() {
                            return !e.activeTab.initialChainComplete && e.activeTab.pagesLoader.requestLoading.isRejected;
                        },
                        get isResolved() {
                            return e.activeTab.initialChainComplete;
                        },
                        get isNeededToLoad() {
                            return e.activeTab.pagesLoader.isNeedToMakeInitialRequest;
                        },
                        get isLoading() {
                            return e.activeTab.pagesLoader.requestLoading.isLoading;
                        },
                        get hasMorePages() {
                            return e.activeTab.pagesLoader.hasMorePages;
                        },
                        get isLoadMoreRejected() {
                            return e.activeTab.initialChainComplete && e.activeTab.pagesLoader.rejectedPagesCount > 0;
                        },
                    }))
                    .views((e) => ({
                        get isEmpty() {
                            return e.isResolved && !e.hasMorePages && 0 === e.items.length;
                        },
                    }))
                    .actions((e) => {
                        let t = {
                            getData: (0, P.L3)(function* () {
                                let { collectionResource: t, modelActionsLogger: i } = (0, P._$)(e),
                                    { filter: n, activeTab: a } = e,
                                    { pagesLoader: o } = a,
                                    r = o.startRequest();
                                if (r)
                                    try {
                                        let i = yield t.getWaves({ filter: n, size: 20, ...(void 0 === r.pageToken ? {} : { pageToken: r.pageToken }) });
                                        if (!(0, P._n)(e)) return;
                                        o.setItems(i.content.map(U), { requestId: r.requestId, nextPageToken: i.nextPageToken }) &&
                                            !o.requestLoading.isRejected &&
                                            (e.getItems(a).length > 0 || !o.hasMorePages) &&
                                            (a.initialChainComplete = !0);
                                    } catch (t) {
                                        if (!(0, P._n)(e)) return;
                                        o.setItems(null, { requestId: r.requestId, responseStatus: w.F.ERROR }) && i.error(t);
                                    }
                            }),
                            retry: (0, P.L3)(function* () {
                                (e.pagesLoader.resetRejectedPagesState(), yield t.getData());
                            }),
                            setFilter(t) {
                                e.filter !== t && ((e.filter = t), e.activeTab.initialChainComplete || e.pagesLoader.resetRejectedPagesState());
                            },
                            removeRoom(t) {
                                e.exitedRoomIds.includes(t) || e.exitedRoomIds.push(t);
                            },
                            reset() {
                                for (let t of Object.values(e.tabs)) (t.pagesLoader.reset(), (t.initialChainComplete = !1));
                                (e.exitedRoomIds.clear(), (e.filter = n.ALL));
                            },
                        };
                        return t;
                    }),
                { pageStoreProvider: H } = (0, T.W)({ createStore: (e) => Y.create({}, e), patchKey: h.n.COLLECTION_VIBES });
            var q = i(29993),
                $ = i(29595),
                X = i(74965),
                Q = i(9492),
                Z = i(58390),
                J = i(53202),
                ee = i(4370),
                et = i(34303),
                ei = i(67174),
                en = i(14912);
            let ea = [n.ALL, n.LIKED, n.ROOMS];
            var eo = i(20552),
                er = i(94242),
                es = i.n(er),
                el = i(46384),
                ec = i(90852),
                ed = i(79070),
                eu = i(66719),
                e_ = i(98225),
                em = i(24672),
                ep = i(76830),
                eg = i(84200),
                ef = i(21576),
                ev = i(88102),
                ey = i(64284),
                eb = i(37770),
                eA = i(43378),
                eL = i(90688),
                eE = i(73531),
                eT = i(30664),
                eh = i(70322);
            let eI = { src: '/_next/static/media/empty-vibes.bfc24508.png' },
                eS = (0, r.PA)((e) => {
                    let { filter: t } = e,
                        {
                            collection: { vibeRooms: i },
                            user: o,
                        } = (0, I.g)(),
                        { formatMessage: r } = (0, c.A)(),
                        s = t === n.ROOMS,
                        l = (0, ed.L)(() =>
                            s
                                ? (0, a.jsx)(eT.t, { className: es().roomImage, withTopSpace: !1 })
                                : (0, a.jsx)(eL._V, { src: eI.src, className: es().emptyImage, alt: '', 'aria-hidden': !0, fit: 'contain' }),
                        ),
                        u = (0, ed.L)(() =>
                            s
                                ? (0, a.jsx)(d.A, { id: 'error-messages.empty-collection-vibe-rooms-title' })
                                : (0, a.jsx)(d.A, { id: 'error-messages.empty-collection-vibes-title' }),
                        ),
                        _ = (0, ed.L)(() =>
                            s && i.isEnabled
                                ? o.hasPlus
                                    ? (0, a.jsx)(eE.M, { title: r({ id: 'interface-actions.copy-link' }) })
                                    : (0, a.jsx)(eh.h, { text: r({ id: 'interface-actions.create' }) })
                                : null,
                        );
                    return (0, a.jsxs)('div', {
                        className: es().empty,
                        'data-test-id': g.Xk.collection.COLLECTION_VIBES_PAGE_EMPTY,
                        children: [
                            l,
                            (0, a.jsx)(f.HL, {
                                className: es().emptyTitle,
                                variant: 'div',
                                size: 'l',
                                weight: 'bold',
                                'data-test-id': g.Xk.collection.COLLECTION_VIBES_PAGE_EMPTY_TITLE,
                                children: u,
                            }),
                            _ && (0, a.jsx)('div', { className: es().createRoomButton, children: _ }),
                        ],
                    });
                }),
                ex = (0, r.PA)((e) => {
                    let { filter: t, isShimmerVisible: i, setContentScrollRef: o, activeTab: r, tabElementId: l, children: d } = e,
                        {
                            collection: { vibeRooms: _ },
                            user: m,
                            settings: { isMobile: p },
                        } = (0, I.g)(),
                        f = (0, T.s)(h.n.COLLECTION_VIBES),
                        { formatMessage: v } = (0, c.A)(),
                        y = t === n.ROOMS,
                        b = y && p,
                        A = y && _.isEnabled && m.hasPlus,
                        L = f.items.length + Number(A),
                        E = v({ id: 'loading-messages.entity-is-loading' }, { entityName: v({ id: 'entity-names.my-vibe' }) }),
                        S = (0, s.useRef)(void 0);
                    (0, s.useEffect)(() => {
                        S.current = void 0;
                    }, [t]);
                    let x = (0, q.c)((e, n) => {
                        S.current = { range: e, columnCount: n };
                        let a = (e.endIndex + 1) * n;
                        f.filter !== t || i || !f.hasMorePages || f.isLoading || f.isLoadMoreRejected || !(a >= L - n) || f.getData();
                    });
                    (0, s.useEffect)(() => {
                        f.filter !== t ||
                            f.isRejected ||
                            !f.hasMorePages ||
                            f.isLoading ||
                            f.isLoadMoreRejected ||
                            (0 === f.items.length ? f.getData() : S.current && x(S.current.range, S.current.columnCount));
                    }, [t, x, f, f.filter, f.hasMorePages, f.isLoadMoreRejected, f.isLoading, f.isRejected, f.items.length, f.pagesLoader.requestsCount]);
                    let N = (0, s.useCallback)(
                            (e, t, i) => {
                                var n, o;
                                if (A && 0 === e) return (0, a.jsx)(ep.f, { withMobileLayout: b });
                                let r = f.items[e - Number(A)];
                                if (!r)
                                    return y
                                        ? (0, a.jsx)(eA.P, { isActive: !0, 'aria-label': E, withMobileLayout: b })
                                        : (0, a.jsx)(eb.V, { isActive: !0, round: !0, centered: !0, 'aria-label': E });
                                let s = r.type === j.H.WAVE_ROOM,
                                    l = s ? ey.U.WAVE_FOR_TWO : ey.U.LIKED_WAVES,
                                    c = s ? (null != (o = null == (n = r.room.wave) ? void 0 : n.seedsId) ? o : '') : r.vibe.seedsId,
                                    d = s ? r.room.getKey(r.type) : r.vibe.getKey(r.vibe.pinId),
                                    _ = (0, ed.L)(() =>
                                        s
                                            ? (0, a.jsx)(ev.E, { room: r.room, withMobileLayout: b, onRoomSuccessExit: f.removeRoom })
                                            : (0, a.jsx)(eg.y, { vibe: r.vibe, additionalsLinesCount: 3 }),
                                    );
                                return (0, a.jsx)(
                                    el.F,
                                    {
                                        blockId: l,
                                        blockType: l,
                                        blockPosX: 1,
                                        blockPosY: 1,
                                        objectsCount: 1,
                                        children: (0, a.jsx)(ec.B, {
                                            objectType: u.DomainObjectType.Wave,
                                            objectId: c,
                                            objectPosX: i + 1,
                                            objectPosY: t + 1,
                                            children: _,
                                        }),
                                    },
                                    d,
                                );
                            },
                            [y, E, f, A, b],
                        ),
                        C = (0, q.c)(() => 315),
                        R = (0, ed.L)(() => (b ? { minColumnCount: 1, maxColumnCount: 1 } : { minColumnCount: 2, maxColumnCount: 7 })),
                        O = (0, ed.L)(() => (i ? 3 + Number(A) : f.isLoading ? L + 3 : L)),
                        P = (0, ed.L)(() =>
                            f.isEmpty
                                ? (0, a.jsx)(eS, { filter: t })
                                : (0, a.jsx)(
                                      ef.Q,
                                      {
                                          count: O,
                                          ...R,
                                          rowGap: 24,
                                          columnGap: 24,
                                          getEstimateRowSize: C,
                                          minColumnWidth: 170,
                                          maxColumnWidth: 270,
                                          onChangeRange: x,
                                          renderItemByIndex: N,
                                      },
                                      t,
                                  ),
                        ),
                        k = (0, ed.L)(() =>
                            l
                                ? (0, a.jsx)(e_.Kp, { className: es().content, name: r, value: r, elementId: l, 'aria-busy': i, children: P })
                                : (0, a.jsx)('div', { className: es().content, 'aria-busy': i, children: P }),
                        );
                    return (0, a.jsxs)(eu.N, {
                        ref: o,
                        className: es().scroll,
                        containerClassName: es().container,
                        'data-test-id': g.Xk.collection.COLLECTION_VIBES_PAGE_CONTENT,
                        children: [d, k, y && (0, a.jsx)(em.j, { className: es().footer })],
                    });
                }),
                eN = (0, l.YK)({ all: { id: 'collection.vibes-all' }, liked: { id: 'collection.vibes-liked' }, rooms: { id: 'collection.vibes-rooms' } }),
                eC = [
                    { title: eN.all, testId: g.Xk.collection.COLLECTION_VIBES_PAGE_ALL_TAB },
                    { title: eN.liked, testId: g.Xk.collection.COLLECTION_VIBES_PAGE_LIKED_TAB },
                    { title: eN.rooms, testId: g.Xk.collection.COLLECTION_VIBES_PAGE_ROOMS_TAB },
                ],
                eR = (0, r.PA)(() => {
                    let e = (0, T.s)(h.n.COLLECTION_VIBES),
                        {
                            collection: { vibeRooms: t },
                        } = (0, I.g)(),
                        i = t.isEnabled,
                        r = (0, A.W)(),
                        { setContentScrollRef: l } = (0, L.g)(),
                        { isScrolling: u } = (0, s.useContext)(N.B),
                        { formatMessage: p } = (0, c.A)(),
                        y = (0, s.useId)(),
                        b = p({ id: 'entity-names.my-vibe' }),
                        {
                            filter: S,
                            activeTab: P,
                            onTabChange: j,
                        } = ((e) => {
                            let t = (0, Z.useSearchParams)(),
                                i = (0, en.X)(),
                                a = (0, T.s)(h.n.COLLECTION_VIBES),
                                o = (0, J.M)();
                            (0, s.useLayoutEffect)(() => {
                                if (!e) return void a.setFilter(n.LIKED);
                                let i = t.get(et.K.TAB),
                                    o = i === n.LIKED || i === n.ROOMS ? i : n.ALL;
                                a.setFilter(o);
                            }, [e, t, a]);
                            let r = (0, q.c)((r) => {
                                    let s = ea[r];
                                    if (!e || !s) return;
                                    let l = a.filter !== s;
                                    a.setFilter(s);
                                    let { href: c } = (0, ei.u)(ee.Z.collectionVibes.href, { query: { ...Object.fromEntries(t.entries()), [et.K.TAB]: s } });
                                    (i(c), l && o({ tabId: s, tabPos: r + 1, isTabSelectedByDefault: s === n.ALL }));
                                }),
                                l = e ? a.filter : n.LIKED;
                            return { filter: l, activeTab: ea.indexOf(l), onTabChange: r };
                        })(i),
                        k = e.isShimmerVisible,
                        [w, K] = (0, s.useState)(e.isResolved),
                        M = !w && k;
                    if (
                        ((0, _.u)(),
                        (0, s.useEffect)(() => {
                            e.isResolved && K(!0);
                        }, [e.isResolved]),
                        (0, s.useEffect)(() => {
                            e.isNeededToLoad && e.getData();
                        }, [S, e]),
                        (0, s.useEffect)(() => () => e.reset(), [e]),
                        ((e) => {
                            let { notify: t, dismiss: i } = (0, X.l)(),
                                n = (0, q.c)(() => {
                                    e.retry();
                                });
                            (0, s.useEffect)(() => {
                                if (!e.isLoadMoreRejected) return;
                                let o = t((0, a.jsx)(Q.L, { reloadBlocks: n }), { containerId: $.u.ERROR, autoClose: !1 });
                                return () => i({ notificationId: o });
                            }, [i, n, t, e.filter, e.isLoadMoreRejected]);
                        })(e),
                        (0, E.J)(e.isResolved),
                        e.isRejected)
                    )
                        return (0, a.jsx)(v.SomethingWentWrong, {});
                    let D = (0, a.jsx)('div', {
                        className: (0, o.$)(es().root, { [es().root_withoutTabs]: !i }),
                        'data-test-id': g.Xk.collection.COLLECTION_VIBES_PAGE,
                        children: (0, a.jsx)(ex, {
                            filter: S,
                            isShimmerVisible: k,
                            setContentScrollRef: l,
                            activeTab: P,
                            tabElementId: i ? y : void 0,
                            children: (0, a.jsx)(x.Y, {
                                variant: x.V.STICKY,
                                className: es().header,
                                stickyClassName: (0, o.$)(es().headerContainer, { [es().headerContainer_idle]: !u }),
                                stickyChild: (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsxs)('div', {
                                            className: es().title,
                                            children: [
                                                r.canBack && (0, a.jsx)(C.L, { withForwardControl: !1, shouldFocusOnMount: !1 }),
                                                (0, a.jsx)(f.DZ, {
                                                    variant: 'h2',
                                                    weight: 'bold',
                                                    size: u ? 's' : 'xl',
                                                    lineClamp: 1,
                                                    children: (0, a.jsx)(d.A, { id: 'entity-names.my-vibe' }),
                                                }),
                                            ],
                                        }),
                                        i &&
                                            (0, a.jsx)(O.wI, {
                                                className: es().tabs,
                                                isShimmerVisible: M,
                                                shimmer: (0, a.jsx)(O.zr, { className: es().tabs, count: eC.length, isActive: !0 }),
                                                value: P,
                                                onTabChange: j,
                                                elementId: y,
                                                'aria-label': b,
                                                children: eC.map((e, t) => {
                                                    let { title: i, testId: n } = e;
                                                    return (0, a.jsx)(R.o, { className: es().tab, value: t, title: p(i), 'data-test-id': n }, n);
                                                }),
                                            }),
                                    ],
                                }),
                            }),
                        }),
                    });
                    return i ? (0, a.jsx)(m.h, { tabId: S, tabPos: P + 1, isTabSelectedByDefault: 0 === P, children: D }) : D;
                }),
                eO = (0, r.PA)(() => {
                    let { experiments: e } = (0, I.g)(),
                        { contentScrollRef: t } = (0, L.g)();
                    return e.checkExperiment(S.z.WebNextWaveLikesAndShares, 'on')
                        ? (0, a.jsx)(p.a, {
                              pageId: u.AppScreen.CollectionWavesScreen,
                              pageIdForFrom: b.b.OWN_COLLECTION,
                              children: (0, a.jsx)(H, { children: (0, a.jsx)(y.h, { scrollElement: t, children: (0, a.jsx)(eR, {}) }) }),
                          })
                        : (0, a.jsx)(eo.CollectionNotFoundPage, {});
                });
        },
        50633: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => a });
            var n = i(5120);
            let a = (e) => {
                let t = (0, n.Zn)(e);
                if (((e) => 'object' == typeof e && null !== e && 'isRootModel' in e && !0 === e.isRootModel)(t)) return t;
                let { rootStore: i } = (0, n._$)(e);
                return i || t;
            };
        },
        51028: (e) => {
            e.exports = { notification: 'NotificationAd_notification__DNmdu' };
        },
        51516: (e) => {
            e.exports = { root: 'VirtualGridRow_root___UfbI' };
        },
        53360: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => c });
            var n = i(88800),
                a = i(65724),
                o = i(84961),
                r = i(53548),
                s = i(51516),
                l = i.n(s);
            let c = (0, o.PA)((e) => {
                let { indices: t, virtualItem: i, renderItemByIndex: o, columnClassName: s, className: c, resizeObserver: d, scrollMargin: u } = e,
                    _ = (0, r.useRef)(null),
                    m = t[i.index],
                    p = { '--virtual-grid-row-vertical-offset': ''.concat(i.start - u, 'px') };
                return (
                    (0, r.useEffect)(() => {
                        let e = _.current;
                        if (e)
                            return (
                                null == d || d.observe(e),
                                () => {
                                    null == d || d.unobserve(e);
                                }
                            );
                    }, [d]),
                    (0, n.jsx)('div', {
                        'data-index': i.index,
                        ref: _,
                        style: p,
                        className: (0, a.$)(l().root, c),
                        children: null == m ? void 0 : m.map((e, t) => (0, n.jsx)('div', { className: s, children: o(e, i.index, t) }, ''.concat(i.key, '_').concat(e))),
                    })
                );
            });
        },
        53647: (e, t, i) => {
            'use strict';
            i.d(t, { V8: () => o, si: () => s, fW: () => _, MJ: () => u, jU: () => p, Bx: () => m });
            var n = i(77451);
            function a(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return (console.error(e), null);
                }
            }
            class o {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    try {
                        let r = (0, n.Jt)(e);
                        if (t) {
                            var i, o;
                            return null != (o = null == (i = a(r)) ? void 0 : i.value) ? o : null;
                        }
                        return null != r ? r : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, i) {
                    let a = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let o = a ? JSON.stringify({ value: t }) : t;
                        (0, n.hZ)(e, o, i);
                    } catch (e) {
                        console.error(e);
                    }
                }
                has(e) {
                    return null !== this.get(e, !1);
                }
                remove(e) {
                    try {
                        (0, n.TF)(e);
                    } catch (e) {}
                }
            }
            function r(e) {
                try {
                    var t;
                    return null != (t = window[e]) ? t : null;
                } catch (e) {
                    return null;
                }
            }
            class s {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        i = r('localStorage');
                    if (!i) return null;
                    try {
                        var n;
                        let o = i.getItem(e) || void 0;
                        if (!t) return o;
                        let r = a(o);
                        if (!r) return null;
                        let s = null != (n = null == r ? void 0 : r.value) ? n : null;
                        if ((null == r ? void 0 : r.expires) && Date.now() > new Date(r.expires).getTime()) return (this.remove(e), null);
                        return s;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, i) {
                    if ('number' == typeof (null == i ? void 0 : i.expires)) {
                        let e = new Date();
                        (e.setMilliseconds(e.getMilliseconds() + 864e5 * i.expires), (i.expires = e));
                    }
                    let n = r('localStorage');
                    if (n)
                        try {
                            n.setItem(e, JSON.stringify({ value: t, ...i }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = r('localStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            var l = i(9519),
                c = i(39499);
            class d extends c.t {
                constructor(e, t, { code: i = 'E_STORAGE', ...n } = {}) {
                    (super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: i, ...n }),
                        (0, l._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, d.prototype));
                }
            }
            class u {
                get(e) {
                    throw new d(this.platform, this.type);
                }
                set(e, t, i) {
                    throw new d(this.platform, this.type);
                }
                has(e) {
                    throw new d(this.platform, this.type);
                }
                remove(e) {
                    throw new d(this.platform, this.type);
                }
                constructor(e, t) {
                    ((0, l._)(this, 'platform', ''), (0, l._)(this, 'type', ''), (this.platform = e), (this.type = t));
                }
            }
            class _ {
                get(e) {
                    let t = r('sessionStorage');
                    if (!t) return null;
                    try {
                        var i, n, o;
                        let r = null != (n = t.getItem(e)) ? n : void 0;
                        return null != (o = null == (i = a(r)) ? void 0 : i.value) ? o : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let i = r('sessionStorage');
                    if (i)
                        try {
                            i.setItem(e, JSON.stringify({ value: t }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = r('sessionStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            function m(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let i = 'object' != typeof t ? t : t.name,
                            n = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            a = e.get(i);
                        null != a && e.set(i, a, n);
                    });
            }
            function p(e) {
                let { name: t, group: i, value: n } = e;
                return n && 0 !== Object.keys(n).length
                    ? n.title
                        ? { [t]: { group: i, value: { ...n, title: i } } }
                        : { [t]: { group: i, value: { title: i, value: n } } }
                    : { [t]: { group: i, value: { title: i } } };
            }
        },
        53892: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            let n = {
                MIXES: 'pages/mixes',
                TAG: 'pages/tag',
                GENRES: 'pages/genres',
                PROMOLANDING: 'pages/promolanding',
                MUSIC_HISTORY: 'pages/music-history',
                POST: 'pages/post',
                PLAYLIST_PERSONAL: 'pages/playlist-personal',
                MY_MUSIC: 'pages/my-music',
                FAVORITE_TRACKS: 'pages/favorite-tracks',
                COLLECTION_VIBES: 'pages/collection-vibes',
                CONCERTS_DETAILS: 'pages/concerts-details',
                LANDING_PROMO_PREVIEW: 'pages/landing-promo-preview',
                LABEL: 'pages/label',
                GENRE: 'pages/genre',
                CHART: 'pages/chart',
            };
        },
        55693: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => r });
            var n = i(53548),
                a = i(63765),
                o = i(91087);
            let r = () => {
                let { sendSearchFeedback: e, id: t, type: i, blockPosition: r, position: s } = (0, n.useContext)(o.N) || {};
                if (void 0 === t || void 0 === i || void 0 === r || void 0 === s) return {};
                let l = null == e ? void 0 : e.bind(null, { feedbackType: a.n.LIKE, id: t, type: i, blockPosition: r, position: s });
                return {
                    sendLikeSearchFeedback: l,
                    sendNavigateSearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: a.n.NAVIGATE, id: t, type: i, blockPosition: r, position: s }),
                    sendPlaySearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: a.n.PLAY, id: t, type: i, blockPosition: r, position: s }),
                };
            };
        },
        56862: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => g });
            var n = i(88800),
                a = i(65724),
                o = i(84961),
                r = i(53548),
                s = i(2058),
                l = i(17392),
                c = i(81883),
                d = i(96817),
                u = i(52300),
                _ = i(72288),
                m = i(27262),
                p = i.n(m);
            let g = (0, o.PA)((e) => {
                let { isPinned: t, onClick: i, className: o, size: m = 's', iconSize: g = 'xxs', withScaleAnimation: f = !0, withRipple: v, isDisabled: y } = e,
                    { user: b } = (0, _.g)(),
                    { formatMessage: A } = (0, s.A)(),
                    { scaleAnimation: L, unscaleAnimation: E, handleAnimationEnd: T, handleClick: h } = (0, c.C)({ shouldStartFromUnscale: t, onClick: i, isEnabled: f }),
                    I = t ? 'pin_filled' : 'pin',
                    S = (0, r.useMemo)(() => (t ? A({ id: 'interface-actions.unpin' }) : A({ id: 'interface-actions.pin' })), [A, t]);
                return (0, n.jsx)(d.$, {
                    className: (0, a.$)(p().root, { [p().animation_scaled]: L, [p().animation_unscaled]: E }, o),
                    onAnimationEnd: T,
                    variant: 'default',
                    color: 'secondary',
                    onClick: h,
                    'aria-label': S,
                    'aria-pressed': t,
                    size: m,
                    withRipple: v,
                    radius: 'round',
                    disabled: y || !b.isAuthorized,
                    icon: (0, n.jsx)(u.I, { className: p().icon, variant: I, size: g }),
                    'data-test-id': l.S7.PIN_BUTTON,
                });
            });
        },
        57328: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => g });
            var n = i(88800),
                a = i(84961),
                o = i(58390),
                r = i(65724),
                s = i(88969),
                l = i(29504),
                c = i(7628),
                d = i(42674),
                u = i.n(d);
            let _ = (0, a.PA)(() =>
                (0, n.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, n.jsx)(l.DZ, {
                            className: (0, r.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, n.jsx)(s.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, n.jsx)(l.HL, {
                            className: (0, r.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, n.jsx)(s.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, n.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = i(4370),
                p = i(72288);
            let g = (0, a.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: a } = (0, p.g)();
                return a.isAuthorized ? t : (i && (0, o.redirect)(m.Z.main.href), (0, n.jsx)(_, {}));
            });
        },
        59497: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => o });
            var n = i(5120),
                a = i(74773);
            let o = n.gK.model('LoadingState', { loadingState: n.gK.enumeration(Object.values(a.G)) }).views((e) => ({
                get isNeededToLoad() {
                    return e.loadingState === a.G.IDLE;
                },
                get isLoading() {
                    return e.loadingState === a.G.PENDING;
                },
                get isResolved() {
                    return e.loadingState === a.G.RESOLVE;
                },
                get isRejected() {
                    return e.loadingState === a.G.REJECT;
                },
            }));
        },
        63425: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => a });
            var n = i(5120);
            let a = n.gK.model('Cover', { uri: n.gK.maybe(n.gK.string), color: n.gK.maybe(n.gK.string), videoUrl: n.gK.maybe(n.gK.string) });
        },
        63765: (e, t, i) => {
            'use strict';
            var n, a;
            (i.d(t, { n: () => a, o: () => n }),
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
                })(n || (n = {})),
                (function (e) {
                    ((e.PLAY = 'play'), (e.FRIDGE = 'fridge'), (e.NAVIGATE = 'navigate'), (e.LIKE = 'like'));
                })(a || (a = {})));
        },
        64284: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => n });
            var n = (function (e) {
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
        64462: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { NotFound: () => R }));
            var n = i(88800),
                a = i(65724),
                o = i(84961),
                r = i(88969);
            i(30282);
            var s = i(97234),
                l = i(36740),
                c = i(59724),
                d = i(17392),
                u = i(96817),
                _ = i(52300),
                m = i(66719),
                p = i(29504),
                g = i(98427),
                f = i(53548),
                v = i(59714),
                y = i(43054),
                b = i(18117);
            let A = (0, i(24709).n)({ event: 'Screen.Navigated', kind: 'hook', requiredScopes: [] }, function (e) {
                var t;
                let i = null == (t = (0, y.s)()) ? void 0 : t.evgenInstance,
                    { hash: n } = (0, b.g)();
                return {
                    handleNavigateToMain: (0, f.useCallback)(() => {
                        if (!i || !n) return;
                        let t = {
                            hash: n,
                            pageId: s.AppScreen.PageNotFoundScreen,
                            pageStyle: s.PageStyles.Fullscreen,
                            pagePlacement: s.PagePlacements.Fullscreen,
                            mainObjectType: s.DomainObjectType.NonApplicable,
                            mainObjectId: s.DomainObjectType.NonApplicable,
                            from: s.AppScreen.PageNotFoundScreen,
                            to: s.AppScreen.MainScreen,
                            entityType: s.EntityTypes.Error,
                            entityId: s.EntityTypes.Error,
                        };
                        (Object.values(t).some((e) => void 0 === e) || (0, v.Mu)(i, t), e());
                    }, [i, n, e]),
                };
            });
            var L = i(44230),
                E = i(4370),
                T = i(78940),
                h = i(95210),
                I = i(56248),
                S = i(72288),
                x = i(26827),
                N = i.n(x);
            let C = (0, o.PA)((e) => {
                    let { className: t, title: i, description: o, iconVariant: s = 'musicLogo', iconClassName: c, iconSize: g } = e,
                        { contentRef: v, setContentScrollRef: y } = (0, L.g)(),
                        b = (0, T.Z)(E.Z.main.href);
                    (0, l.u)();
                    let { handleNavigateToMain: x } = A(b);
                    return (
                        (0, h.N)(!0),
                        !(function () {
                            let { location: e } = (0, S.g)();
                            (0, f.useEffect)(
                                () => (
                                    e.setNotFound(!0),
                                    () => {
                                        e.setNotFound(!1);
                                    }
                                ),
                                [e],
                            );
                        })(),
                        (0, n.jsxs)(m.N, {
                            className: (0, a.$)(N().root, { [N().root_desktop]: !v }, t),
                            containerClassName: N().container,
                            ref: y,
                            'data-test-id': d.e8.notFound.NOT_FOUND,
                            children: [
                                (0, n.jsx)(I.L, { withBackwardFallback: '/', className: N().navigation, withForwardControl: !1 }),
                                (0, n.jsxs)('div', {
                                    className: N().content,
                                    children: [
                                        (0, n.jsx)(_.I, { className: (0, a.$)(N().icon, c), variant: s, size: g }),
                                        (0, n.jsx)(p.DZ, {
                                            className: (0, a.$)(N().title, N().important),
                                            variant: 'h3',
                                            size: 'xs',
                                            'data-test-id': d.e8.notFound.NOT_FOUND_TITLE,
                                            children: i || (0, n.jsx)(r.A, { id: 'page-error.page-does-not-exist' }),
                                        }),
                                        (0, n.jsx)(p.HL, {
                                            className: (0, a.$)(N().text, N().important),
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'normal',
                                            children: o || (0, n.jsx)(r.A, { id: 'page-error.page-does-not-exist-description' }),
                                        }),
                                        (0, n.jsx)(u.$, {
                                            onClick: x,
                                            className: N().button,
                                            role: 'link',
                                            color: 'secondary',
                                            size: 'l',
                                            radius: 'xxxl',
                                            children: (0, n.jsx)(p.HL, {
                                                type: 'controls',
                                                variant: 'span',
                                                size: 'm',
                                                children: (0, n.jsx)(r.A, { id: 'navigation.page-main' }),
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                }),
                R = (e) =>
                    (0, n.jsx)(c.a, {
                        pageId: s.AppScreen.PageNotFoundScreen,
                        pageIdForFrom: g.b.PAGE_NOT_FOUND_SCREEN,
                        pageStyle: s.PageStyles.Fullscreen,
                        pagePlacement: s.PagePlacements.Fullscreen,
                        mainObjectType: s.DomainObjectType.NonApplicable,
                        mainObjectId: s.DomainObjectType.NonApplicable,
                        children: (0, n.jsx)(C, { ...e }),
                    });
        },
        66943: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => d });
            var n = i(88800),
                a = i(65724),
                o = i(73170),
                r = i(29504),
                s = i(59304),
                l = i(49397),
                c = i.n(l);
            let d = (e) => {
                let { error: t, closeToast: i, className: l } = e;
                return (0, n.jsx)(s.$, {
                    className: (0, a.$)(c().root, l),
                    message: (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(o.q, { children: (0, n.jsx)('p', { role: 'alert', 'aria-label': t }) }),
                            (0, n.jsx)(r.HL, { className: c().message, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: t }),
                        ],
                    }),
                    closeToast: i,
                });
            };
        },
        67311: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => a });
            var n = i(5120);
            let a = n.gK.model('ModelDestroyManager').actions(() => ({
                destroyItems(e) {
                    (e.forEach((e) => {
                        e && (0, n.Yo)(e);
                    }),
                        queueMicrotask(() => {
                            e.forEach((e) => {
                                e && (0, n.zr)(e);
                            });
                        }));
                },
            }));
        },
        67780: (e, t, i) => {
            'use strict';
            var n;
            (i.d(t, { H: () => n }),
                (function (e) {
                    ((e.LIKED_WAVE = 'liked_wave_item'), (e.WAVE_ROOM = 'wave_room_item'));
                })(n || (n = {})));
        },
        70003: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => o });
            var n = i(5120),
                a = i(53548);
            let o = (e) => {
                let { createStore: t, getPendingPatchBatches: i, patchesUpdatedEventName: o } = e,
                    r = (0, a.useRef)([]),
                    [s] = (0, a.useState)(() => {
                        let e = t();
                        for (let t of i()) (0, n.X6)(e, t);
                        return e;
                    });
                return (
                    (0, a.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of i()) (0, n.X6)(s, e);
                        };
                        return (e(), window.addEventListener(o, e), () => window.removeEventListener(o, e));
                    }, [i, o, s]),
                    { store: s, patchesRef: r }
                );
            };
        },
        70322: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => _ });
            var n = i(88800),
                a = i(65724),
                o = i(17392),
                r = i(29993),
                s = i(96817),
                l = i(29504),
                c = i(72288),
                d = i(72858),
                u = i.n(d);
            let _ = (e) => {
                let { className: t, text: i, analyticsNavigatedCallback: d } = e,
                    {
                        settings: { isMobile: _ },
                        paywall: m,
                    } = (0, c.g)(),
                    p = (0, r.c)((e) => {
                        (m.openModal(), e.stopPropagation(), null == d || d());
                    });
                return _
                    ? (0, n.jsx)(s.$, {
                          onClick: p,
                          className: (0, a.$)(u().root, t),
                          color: 'plus',
                          size: 'l',
                          radius: 'xxxl',
                          children: (0, n.jsx)(l.HL, { className: u().title, weight: 'bold', variant: 'div', size: 'l', children: i }),
                      })
                    : (0, n.jsx)(s.$, {
                          onClick: p,
                          className: (0, a.$)(u().root, t),
                          color: 'plus',
                          size: 'm',
                          radius: 'xxxl',
                          'data-test-id': o.S7.PLUS_PAYWALL_BUTTON,
                          children: (0, n.jsx)(l.HL, { className: u().title, weight: 'bold', variant: 'div', size: 'm', children: i }),
                      });
            };
        },
        72858: (e) => {
            e.exports = { root: 'PlusPaywallButton_root__ftsxl', title: 'PlusPaywallButton_title__8PpX0', subtitle: 'PlusPaywallButton_subtitle__brC59' };
        },
        73170: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => c });
            var n,
                a = i(53548),
                o = {
                    5881: (e, t, i) => {
                        function n() {
                            for (var e, t, i = 0, n = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            n,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (n = e(t[i])) && (a && (a += ' '), (a += n));
                                            else for (i in t) t[i] && (a && (a += ' '), (a += i));
                                        return a;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (i.r(t), i.d(t, { clsx: () => n, default: () => a }));
                        let a = n;
                    },
                    7319: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => n }));
                        let n = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var a = null;
                            if ((void 0 !== n && (a = '' + n), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var o in ((n = {}), t)) 'key' !== o && (n[o] = t[o]);
                            else n = t;
                            return { $$typeof: i, type: e, key: a, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    5531: function (e, t, i) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let a = i(4377),
                            o = i(5881),
                            r = i(810),
                            s = n(i(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: i, children: n, ...l } = e,
                                c = (0, o.clsx)(s.default.root, { [s.default.focusable]: i }, t);
                            return (0, r.isValidElement)(n)
                                ? (0, r.cloneElement)(n, { ...l, className: (0, o.clsx)(c, n.props.className) })
                                : (0, a.jsx)('span', { className: c, ...l, children: n });
                        };
                    },
                    810: (e) => {
                        e.exports = n || (n = i.t(a, 2));
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
        78940: (e, t, i) => {
            'use strict';
            (i.d(t, { Z: () => l }), i(30282));
            var n = i(58390),
                a = i(29993),
                o = i(67174),
                r = i(15947),
                s = i(97261);
            let l = (e) => {
                let t = (0, n.useRouter)(),
                    { href: i, target: l } = (0, o.u)(e);
                return (0, a.c)((e) => {
                    let n = (0, r.U)(i, window.location.href, l);
                    if (!n) {
                        null == e || e.preventDefault();
                        return;
                    }
                    (null != e && e.metaKey) ||
                        (null != e && e.ctrlKey) ||
                        (null != e && e.shiftKey) ||
                        (n.type === s.I.EXTERNAL || n.type === s.I.DEEPLINK
                            ? ((e) => {
                                  let { target: t, rel: i } = (0, o.u)(e, { options: { isExternalLink: !0 } });
                                  window.open(e, t, i);
                              })(n.href)
                            : t.push(n.href));
                });
            };
        },
        79070: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => a });
            var n = {};
            (Object.defineProperty(n, '__esModule', { value: !0 }), (n.useReturnValue = void 0), (n.useReturnValue = (e) => e()), n.__esModule);
            var a = n.useReturnValue;
        },
        79390: (e, t, i) => {
            'use strict';
            var n;
            (i.d(t, { f: () => n }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(n || (n = {})));
        },
        81877: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => l });
            var n = i(88800),
                a = i(53548),
                o = i(17392),
                r = i(90688);
            let s = (e) => {
                    let { isAvailable: t = !0, className: i, fallbackIconSize: a, forwardRef: s, ...l } = e;
                    return t
                        ? (0, n.jsx)(r._V, { ref: s, className: i, fallbackIconSize: a, ...l, 'data-test-id': o.S7.ENTITY_COVER_IMAGE })
                        : (0, n.jsx)(r.Ab, { className: i, iconSize: a, iconVariant: 'unavailable', 'data-test-id': o.S7.ENTITY_COVER_FALLBACK_IMAGE });
                },
                l = (0, a.forwardRef)((e, t) => (0, n.jsx)(s, { forwardRef: t, ...e }));
        },
        81883: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => c });
            var n,
                a = i(53548),
                o = {
                    1676: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useToggle = void 0));
                        let n = i(810);
                        t.useToggle = (e) => {
                            let [t, i] = (0, n.useState)(e);
                            (0, n.useEffect)(() => {
                                i(e);
                            }, [e]);
                            let a = (0, n.useCallback)(() => {
                                    i((e) => !e);
                                }, []),
                                o = (0, n.useCallback)(() => {
                                    i(!0);
                                }, []),
                                r = (0, n.useCallback)(() => {
                                    i(!1);
                                }, []);
                            return { state: t, toggle: a, setState: i, toggleTrue: o, toggleFalse: r };
                        };
                    },
                    810: (e) => {
                        e.exports = n || (n = i.t(a, 2));
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
                    let { isEnabled: n = !0, onClick: a, shouldStartFromUnscale: o } = i,
                        { state: r, toggleFalse: s, toggleTrue: l } = (0, t.useToggle)(!1),
                        { state: c, toggleFalse: d, toggleTrue: u } = (0, t.useToggle)(!1),
                        _ = (0, e.useCallback)(
                            (e) => {
                                (null == a || a(e), n && (o ? u() : l()), e.stopPropagation(), e.preventDefault());
                            },
                            [n, a, o, l, u],
                        );
                    return {
                        handleAnimationEnd: (0, e.useCallback)(() => {
                            (s(), d());
                        }, [s, d]),
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
            i.d(t, { f: () => u });
            var n = i(53548);
            i(30282);
            var a = i(93940),
                o = i(58390),
                r = i(64284),
                s = i(18593),
                l = i(98427),
                c = i(1344);
            let d = [r.U.TRAILER],
                u = (e) => {
                    let t = ((e) => {
                            let t = null == e ? void 0 : e.pageId,
                                i = null == e ? void 0 : e.blockId,
                                o = null == e ? void 0 : e.pageEntityId,
                                { screen: r, block: s } = (0, a.j)(),
                                l = null == r ? void 0 : r.pageIdForFrom,
                                c = null == r ? void 0 : r.mainObjectId,
                                d = null == s ? void 0 : s.blockId;
                            return (0, n.useMemo)(() => ({ pageId: null != t ? t : l, blockId: null != i ? i : d, pageEntityId: null != o ? o : c }), [i, d, t, o, l, c]);
                        })(e),
                        i = ((e) => {
                            let { pageId: t, blockId: i } = e;
                            return (0, n.useMemo)(() => {
                                let e = ['desktop'];
                                return (t && e.push(t.toLowerCase()), i && e.push(i.toLowerCase()), e.push('default'), e.join('-'));
                            }, [i, t]);
                        })(t),
                        r = ((e) => {
                            let { pageId: t, blockId: i, pageEntityId: a, contextType: r, contextId: u, utmForPageIds: _ } = e,
                                m = (0, o.useSearchParams)();
                            return (0, n.useMemo)(
                                () =>
                                    ((e) => {
                                        let { searchParams: t, pageId: i, pageEntityId: n, utmForPageIds: a, contextId: o, contextType: r, blockId: u } = e,
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
                                        return !m || !_ || !n || d.includes(u)
                                            ? null
                                            : (Array.isArray(a) ? a.map((e) => String(e)).includes(String(n)) : !!o && m === r && String(o) === String(n)) && _
                                              ? (0, c.Z)(_)
                                              : null;
                                    })({ searchParams: m, pageId: t, pageEntityId: a, utmForPageIds: _, contextId: u, contextType: r, blockId: i }),
                                [m, t, a, u, r, i, _],
                            );
                        })({
                            ...t,
                            contextType: null == e ? void 0 : e.contextType,
                            contextId: null == e ? void 0 : e.contextId,
                            utmForPageIds: null == e ? void 0 : e.utmForPageIds,
                        });
                    return (0, n.useMemo)(() => ({ from: i, utmLink: r || void 0 }), [i, r]);
                };
        },
        89108: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => a, s: () => n });
            let n = 'yMusicStatePatchesUpdated',
                a = 'yMusicPageStatePatchesUpdated';
        },
        90958: (e) => {
            e.exports = {
                animation_scaled: 'LikeButton_animation_scaled___NgPW',
                scale: 'LikeButton_scale__Gv0fD',
                animation_unscaled: 'LikeButton_animation_unscaled__YdYoQ',
                unscale: 'LikeButton_unscale__4Kprg',
            };
        },
        91087: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => n });
            let n = (0, i(53548).createContext)(null);
        },
        93091: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => l });
            var n = i(88800),
                a = i(88969),
                o = i(17392),
                r = i(52300),
                s = i(19934);
            let l = (e) => {
                let { isLiked: t, onClick: i, disabled: l, className: c, iconClassName: d } = e;
                return (0, n.jsx)(s.Dr, {
                    className: c,
                    onClick: i,
                    disabled: l,
                    icon: (0, n.jsx)(r.I, { className: d, variant: t ? 'liked' : 'like', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    'data-test-id': o.S7.CONTEXT_MENU_LIKE_BUTTON,
                    children: (0, n.jsx)(a.A, { id: 'interface-actions.like' }),
                });
            };
        },
        94242: (e) => {
            e.exports = {
                root: 'CollectionVibesPage_root__3F0YV',
                root_withoutTabs: 'CollectionVibesPage_root_withoutTabs__zQANf',
                scroll: 'CollectionVibesPage_scroll__tiTFo',
                footer: 'CollectionVibesPage_footer__IPcjh',
                header: 'CollectionVibesPage_header__uLzN_',
                headerContainer: 'CollectionVibesPage_headerContainer__TmUJV',
                title: 'CollectionVibesPage_title__DV5Qx',
                headerContainer_idle: 'CollectionVibesPage_headerContainer_idle__Qx6Qu',
                tabs: 'CollectionVibesPage_tabs__SZ9bS',
                tab: 'CollectionVibesPage_tab__GnXQM',
                content: 'CollectionVibesPage_content__e9KWU',
                container: 'CollectionVibesPage_container__yWaKJ',
                empty: 'CollectionVibesPage_empty__P5k7l',
                emptyImage: 'CollectionVibesPage_emptyImage__IhaHq',
                roomImage: 'CollectionVibesPage_roomImage__kTlku',
                emptyTitle: 'CollectionVibesPage_emptyTitle__kpNUp',
                createRoomButton: 'CollectionVibesPage_createRoomButton__ok57X',
            };
        },
        95210: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => o });
            var n = i(53548),
                a = i(38860);
            let o = (e) => {
                let t = (0, n.useRef)(!1),
                    i = (0, a.z)();
                (0, n.useEffect)(() => {
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
            i.d(t, { I: () => n });
            var n = (function (e) {
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
            i.d(t, { b: () => n });
            var n = (function (e) {
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
                7191, 9904, 6582, 4292, 7064, 2803, 3078, 918, 1833, 8194, 1829, 917, 6706, 4771, 1311, 5201, 2662, 6904, 1898, 2058, 3578, 8628, 4378, 9780, 8283, 9027,
                1574, 4732, 9087, 3979, 6719, 1928, 9091, 9124, 900, 9934, 2470, 6374, 4322, 5823, 1960, 5638, 8244, 763, 2670, 7358,
            ],
            () => e((e.s = 18766)),
        ),
            (_N_E = e.O()));
    },
]);
