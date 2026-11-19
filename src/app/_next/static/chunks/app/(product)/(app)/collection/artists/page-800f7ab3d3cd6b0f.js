(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6363, 8336],
    {
        1698: (e, t, s) => {
            'use strict';
            s.d(t, { e: () => o });
            var i = s(88800),
                r = s(37770);
            let o = (e) => {
                let {
                    isActive: t,
                    itemClassName: s,
                    round: o,
                    centered: a,
                    withInfo: n,
                    count: l = 10,
                    shimmerClassName: c,
                    linesCount: d,
                    'aria-label': u,
                    withSubcover: m,
                } = e;
                return Array.from(Array(l).keys()).map((e) =>
                    (0, i.jsx)(
                        r.V,
                        { isActive: t, linesCount: d, className: s, round: o, centered: a, withInfo: n, withSubcover: m, 'aria-label': u, shimmerClassName: c },
                        e,
                    ),
                );
            };
        },
        3099: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'Chart_root__ODed_',
                position: 'Chart_position__7UNY9',
                position_disliked: 'Chart_position_disliked__HzjC7',
                position_disabled: 'Chart_position_disabled__poZzD',
                progress: 'Chart_progress__sGj4s',
                progress_up: 'Chart_progress_up__y083c',
                progress_same: 'Chart_progress_same__Cnbdb',
                progress_down: 'Chart_progress_down__lv_ae',
                progress_crown: 'Chart_progress_crown__o__Zm',
                progress_new: 'Chart_progress_new__7DobI',
                progress_disliked: 'Chart_progress_disliked__maVAk',
                progress_disabled: 'Chart_progress_disabled__JoFqG',
                positionShimmer: 'Chart_positionShimmer__6Abak',
            };
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
        4370: (e, t, s) => {
            'use strict';
            s.d(t, { Z: () => r });
            var i = s(67174);
            let r = {
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
        7628: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => _ });
            var i = s(88800),
                r = s(88969),
                o = s(58390),
                a = s(17392),
                n = s(29993),
                l = s(96817),
                c = s(29504),
                d = s(99890),
                u = s(4086),
                m = s(41928);
            let _ = (e) => {
                let { size: t = 'm', variant: s = 'default', color: _ = 'primary', withRipple: p = !0, buttonText: h, isBlock: x, key: g, className: v } = e,
                    A = (0, o.useRouter)(),
                    T = (0, m.N)().get(u.QG),
                    C = (0, n.c)(() => {
                        T.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), A.push(T.authorizationUrl));
                    });
                return (0, i.jsx)(
                    l.$,
                    {
                        onClick: C,
                        className: v,
                        isBlock: x,
                        color: _,
                        variant: s,
                        size: t,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': a.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, i.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(r.A, { id: 'authorization.enter-button' }) }),
                    },
                    g,
                );
            };
        },
        9492: (e, t, s) => {
            'use strict';
            s.d(t, { L: () => p });
            var i = s(88800),
                r = s(65724),
                o = s(53548),
                a = s(2058),
                n = s(88969),
                l = s(96817),
                c = s(52300),
                d = s(29504),
                u = s(59304),
                m = s(4044),
                _ = s.n(m);
            let p = (e) => {
                let { reloadBlocks: t, closeToast: s } = e,
                    m = (0, o.useRef)(null),
                    { formatMessage: p } = (0, a.A)();
                (0, o.useEffect)(() => {
                    var e;
                    null == (e = m.current) || e.focus();
                }, []);
                let h = (0, o.useMemo)(
                    () =>
                        (0, i.jsxs)('div', {
                            className: _().message,
                            children: [
                                (0, i.jsx)(d.HL, {
                                    className: _().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, i.jsx)(n.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, i.jsx)(l.$, {
                                    ref: m,
                                    className: _().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': p({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, i.jsx)(c.I, { variant: 'reset', size: 'xxs', className: _().icon }),
                                }),
                            ],
                        }),
                    [p, t],
                );
                return (0, i.jsx)(u.$, { className: (0, r.$)(_().root, _().important), message: h, closeToast: s });
            };
        },
        11006: (e) => {
            e.exports = {
                root: 'Footer_root__ugyur',
                root_withOffsetForDeeplink: 'Footer_root_withOffsetForDeeplink__qcs6U',
                important: 'Footer_important__mCXZp',
                links: 'Footer_links__3kOY7',
                list: 'Footer_list__0sCXQ',
                copyrights: 'Footer_copyrights__IsnbJ',
                link: 'Footer_link__av50q',
                copyrightLink: 'Footer_copyrightLink__6NOkg',
                yandexMusicLink: 'Footer_yandexMusicLink__k7ILf',
                explicitText: 'Footer_explicitText__Px3wr',
                text: 'Footer_text__lMPwl',
                empty: 'Footer_empty__RR_zf',
            };
        },
        13607: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { _: () => i }),
                (function (e) {
                    ((e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new'));
                })(i || (i = {})));
        },
        16434: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        17017: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { Z: () => i }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(i || (i = {})));
        },
        18130: (e, t, s) => {
            'use strict';
            (s.d(t, { b: () => c }), s(30282));
            var i = s(35412),
                r = s(4086),
                o = s(41928),
                a = s(72131),
                n = (function (e) {
                    return ((e.SOURCE = 'utm_source'), (e.MEDIUM = 'utm_medium'), e);
                })(n || {});
            let l = { utm_source: 'desktop', utm_medium: 'copy_link' },
                c = function (e) {
                    for (var t = arguments.length, s = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) s[n - 1] = arguments[n];
                    let [c] = s,
                        { params: d } = null != c ? c : {},
                        u = { ...l, ...(null == c ? void 0 : c.query) },
                        m = (0, o.N)().get(r.V4),
                        _ = (0, a._)(m.webHost),
                        { href: p } = (0, i.no)(String(e), { params: d, query: u, options: { host: 'https://'.concat(_) } }),
                        { href: h } = (0, i.no)(String(e), { params: d, query: u });
                    return { shareLink: p, pathname: h };
                };
        },
        19840: (e, t, s) => {
            'use strict';
            (s.d(t, { G: () => r }), s(46606));
            var i = s(91136);
            class r extends i.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        19981: (e, t, s) => {
            'use strict';
            s.d(t, { U: () => i });
            let i = (e, t) => {
                let s = e / 60;
                return s <= 45 ? t({ id: 'time.minutes-left' }, { minutes: Math.round(s) }) : t({ id: 'time.hours' }, { hours: Math.round((s / 60) * 2) / 2 });
            };
        },
        21256: (e, t, s) => {
            'use strict';
            s.d(t, { a: () => B });
            var i = s(88800),
                r = s(65724),
                o = s(84961),
                a = s(53548),
                n = s(2058),
                l = s(97234),
                c = s(91177),
                d = s(70598),
                u = s(46482),
                m = s(17392),
                _ = s(18593),
                p = s(29993),
                h = s(79070),
                x = s(29832),
                g = s(52300),
                v = s(7555),
                A = s(29504),
                T = s(91959),
                C = s(64207),
                f = s(77455),
                k = s(5407),
                N = s(57934),
                y = s(84384),
                b = s(4795),
                j = s(78940),
                E = s(55693),
                O = s(39079),
                S = s(72288),
                R = s(81877),
                I = s(49738),
                P = s(91292),
                L = s(56862),
                w = s(16704),
                D = s(56446),
                M = s(36207),
                H = s(43161),
                z = s(93434),
                U = s.n(z);
            let B = (0, o.PA)((e) => {
                let { artist: t, className: s, children: o, contentLinesCount: z, topTitleElement: B, bottomTitleElement: F } = e,
                    q = (0, c.D)(),
                    {
                        trailer: X,
                        user: Y,
                        paywall: { modal: V },
                    } = (0, S.g)(),
                    { from: K, utmLink: W } = (0, y.f)({ contextId: t.id, contextType: _.K.Artist }),
                    { formatMessage: $ } = (0, n.A)(),
                    [G, Z] = (0, a.useState)(!1),
                    [J, Q] = (0, a.useState)(!1),
                    [ee, et] = (0, a.useState)(!1),
                    { sendLikeSearchFeedback: es, sendNavigateSearchFeedback: ei, sendPlaySearchFeedback: er } = (0, E.z)(),
                    eo = (0, d.S)(),
                    ea = (0, u.g)(),
                    en = (0, C.K)(t),
                    el = (0, f.A)(t),
                    { id: ec, name: ed, coverUri: eu, isLiked: em } = t,
                    e_ = (0, j.Z)(t.url),
                    [ep, eh] = (0, a.useState)(!1),
                    ex = (0, N.F)(),
                    eg = (0, k.P)(),
                    ev = (0, p.c)((e) => {
                        if ((e.stopPropagation(), eg())) return void e.preventDefault();
                        (X.openArtistTrailer(t.id), ex(l.DomainObjectType.Artist, t.id));
                    }),
                    eA = (0, a.useMemo)(() => {
                        let e = $({ id: 'entity-names.artist-name' }, { artistName: ed }),
                            t = em ? $({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [ed, em, $]),
                    { isPlaying: eT, togglePlay: eC } = (0, O.D)({
                        playContextParams: { contextData: { type: _.K.Artist, meta: { id: Number(ec) }, from: K, utmLink: W }, loadContextMeta: !0 },
                    }),
                    ef = (0, T.S)({ artist: t, callback: e_ }),
                    ek = (0, T.S)({ artist: t, callback: eC }),
                    eN = (0, p.c)((e) => {
                        (null == ei || ei(), eo({ to: l.AppScreen.ArtistScreen }), ef(e));
                    }),
                    ey = (0, b.N)(),
                    eb = (0, p.c)(() => {
                        if (!eg()) {
                            if (ey) return void V.open();
                            (G || eT || (Z(!0), null == er || er()), ek(), eT || ea());
                        }
                    }),
                    ej = (0, p.c)(() => {
                        (J || em || (Q(!0), null == es || es()), en());
                    }),
                    eE = (0, p.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eO = (0, p.c)((e) => {
                        (et(e), eh(e));
                    }),
                    eS = (0, a.useMemo)(
                        () =>
                            (0, i.jsx)(
                                H.g,
                                {
                                    artist: t,
                                    onOpenChange: eO,
                                    open: ee,
                                    onClick: eE,
                                    className: (0, r.$)(U().menuButton, U().control),
                                    size: 's',
                                    icon: (0, i.jsx)(g.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': m.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eE, eO, ee],
                    ),
                    eR = (0, a.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, i.jsx)(
                                M.n,
                                {
                                    children: (0, i.jsx)(D.k, {
                                        className: (0, r.$)(U().trailerButton, U().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: ev,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, ev]),
                    eI = (0, a.useMemo)(
                        () =>
                            (0, i.jsx)(
                                L.O,
                                { onClick: el, isPinned: t.isPinned, className: (0, r.$)(U().pinButton, U().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, el],
                    ),
                    eP = (0, h.L)(() => {
                        if (t.isAvailable)
                            return (0, i.jsx)(
                                x.hg,
                                {
                                    isVisible: ee || ep,
                                    className: U().controls,
                                    radius: 'round',
                                    playControl: (0, i.jsx)(
                                        w.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, r.$)(U().playButton, U().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eb,
                                            isPlaying: eT,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, i.jsx)(
                                        I.c,
                                        {
                                            className: (0, r.$)(U().likeButton, U().control),
                                            isLiked: em,
                                            onClick: ej,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !Y.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eS,
                                    pinControl: eI,
                                    trailerControl: eR,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eL = (0, a.useMemo)(
                        () =>
                            (0, i.jsx)(v.t, {
                                className: U().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': m.Kq.artist.ARTIST_CARD,
                                children: (0, i.jsxs)('div', {
                                    className: U().coverBlock,
                                    onClick: eN,
                                    children: [
                                        (0, i.jsx)(R.B, {
                                            className: U().image,
                                            src: eu,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eA,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eP,
                                    ],
                                }),
                            }),
                        [eN, eu, eA, t.isAvailable, eP],
                    );
                return (0, i.jsx)(x.MN, {
                    ref: q,
                    className: (0, r.$)(U().root, s),
                    textPosition: 'center',
                    'aria-label': eA,
                    title: (0, i.jsxs)(i.Fragment, {
                        children: [
                            B,
                            (0, i.jsx)(A.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, i.jsx)(P.N, {
                                    className: U().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': eA,
                                    onClick: eN,
                                    'data-test-id': m.Kq.artist.ARTIST_TITLE,
                                    children: ed,
                                }),
                            }),
                            F,
                        ],
                    }),
                    srTitle: (0, i.jsx)(P.N, { className: U().srTitleLink, href: t.url, onClick: eN, children: eA }),
                    contentLinesCount: z,
                    view: eL,
                    'data-test-id': m.Kq.artist.ARTIST_ITEM,
                    children: o,
                });
            });
        },
        35387: (e, t, s) => {
            (Promise.resolve().then(s.bind(s, 57328)), Promise.resolve().then(s.bind(s, 60761)));
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
        43161: (e, t, s) => {
            'use strict';
            s.d(t, { g: () => Z });
            var i = s(88800),
                r = s(84961),
                o = s(2058),
                a = s(97234),
                n = s(17392),
                l = s(18593),
                c = s(29993),
                d = s(52300),
                u = s(19934),
                m = s(96706),
                _ = s(53548),
                p = s(79390),
                h = s(29595),
                x = s(74965),
                g = s(72288),
                v = s(66943),
                A = s(7555),
                T = s(73170),
                C = s(29504),
                f = s(59304),
                k = s(81877),
                N = s(85074),
                y = s.n(N);
            let b = (e) => {
                let { coverUri: t, title: s, isDisliked: r, closeToast: a } = e,
                    { formatMessage: n } = (0, o.A)(),
                    l = n(r ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, i.jsx)(f.$, {
                    closeToast: a,
                    message: (0, i.jsxs)('div', {
                        className: y().message,
                        children: [
                            (0, i.jsx)(T.q, { children: (0, i.jsx)('p', { role: 'alert', 'aria-label': l }) }),
                            (0, i.jsx)(A.t, {
                                className: y().cover,
                                radius: 'round',
                                children: (0, i.jsx)(k.B, { className: y().image, src: t, alt: s, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, i.jsx)(C.HL, { className: y().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: l }),
                        ],
                    }),
                });
            };
            var j = s(64207),
                E = s(77455),
                O = s(48749),
                S = s(22505),
                R = s(5407),
                I = s(64284),
                P = s(98427),
                L = s(57934),
                w = s(84384),
                D = s(9618),
                M = s(95210),
                H = s(47964),
                z = s(46936),
                U = s(97956),
                B = s(98953),
                F = s(32721),
                q = s(18130),
                X = s(56117),
                Y = s(93091),
                V = s(27817),
                K = s(74064),
                W = s(15425),
                $ = s(81066),
                G = s(64546);
            let Z = (0, r.PA)((e) => {
                var t, s, r;
                let { artist: A, onOpenChange: T, open: C, ...f } = e,
                    { shouldShowBuySubscriptionModal: k, showBuySubscriptionModal: N } = (0, D.q)(),
                    {
                        settings: { isMobile: y },
                        modals: { artistAboutModal: Z },
                        trailer: J,
                        user: Q,
                        experiments: ee,
                    } = (0, g.g)(),
                    et = (0, E.A)(A),
                    es = (0, j.K)(A),
                    ei = ((e) => {
                        let { user: t } = (0, g.g)(),
                            { notify: s } = (0, x.l)(),
                            [r, a] = (0, _.useState)(!1),
                            { formatMessage: n } = (0, o.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void s((0, i.jsx)(v.h, { error: n({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: h.u.ERROR });
                            if (r) return;
                            let o = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            a(!0);
                            let l = await e.toggleDislike();
                            (a(!1),
                                l === p.f.OK
                                    ? s((0, i.jsx)(b, { coverUri: o.coverUri, title: o.name, isDisliked: o.isDisliked }), { containerId: h.u.INFO })
                                    : s((0, i.jsx)(v.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: h.u.ERROR }));
                        });
                    })(A),
                    er = (0, L.F)(),
                    eo = ''.concat(I.U.ARTIST, '-').concat(null == A ? void 0 : A.id),
                    { formatMessage: ea } = (0, o.A)(),
                    { utmLink: en } = (0, w.f)({ blockId: I.U.ARTIST, contextType: l.K.Artist, contextId: null == A ? void 0 : A.id }),
                    { shareLink: el, pathname: ec } = (0, q.b)('/artist/:artistId', { params: { artistId: null != (s = null == A ? void 0 : A.id) ? s : '' } }),
                    ed = (0, O.A)({ entityVariant: z.D.ARTIST, urlParams: { id: null == A ? void 0 : A.id } }),
                    { isPlaying: eu, togglePlay: em } = (0, H.B)({
                        seeds: null != (r = null == A ? void 0 : A.seeds) ? r : [],
                        pageIdForFrom: P.b.RADIO,
                        blockIdForFrom: eo,
                        parentContextId: null == A ? void 0 : A.id,
                    }),
                    e_ = (0, R.P)(),
                    ep = ea((null == A ? void 0 : A.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    eh = (0, c.c)(() => {
                        if (k && Q.isAuthorized) return void N();
                        eu || em();
                    }),
                    ex = (0, c.c)(() => {
                        if (!e_()) {
                            if (k) return void N();
                            (null == A ? void 0 : A.id) && (J.setUtmLink(en), J.openArtistTrailer(A.id), er(a.DomainObjectType.Artist, A.id));
                        }
                    }),
                    eg = (0, c.c)(() => {
                        Z.open(null == A ? void 0 : A.id);
                    });
                (0, M.N)(C);
                let ev = { variant: B.Y.ARTIST, id: null == A ? void 0 : A.id, title: null == A ? void 0 : A.name, path: ec },
                    eA = ee.checkExperiment(U.z.WebEditorsFeatures, 'on'),
                    eT = null == A || null == (t = A.trailer) ? void 0 : t.isAvailable,
                    eC = ee.checkExperiment(U.z.WebNextArtistInfo, 'on'),
                    ef = !ee.checkExperiment(U.z.WebNextProductWithoutRecommendation, 'on');
                return (0, i.jsxs)(u.W1, {
                    isMobile: y,
                    offsetOptions: 10,
                    open: C,
                    onOpenChange: T,
                    ariaLabel: ea({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: n.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...f,
                    children: [
                        eA && (0, i.jsx)(G.WithOffline, { fallback: (0, i.jsx)(S.d, { entityVariant: z.D.ARTIST, adminUrl: ed }) }),
                        !y && (0, i.jsx)(G.WithOffline, { fallback: (0, i.jsx)(V.L, { onClick: et, isPinned: null == A ? void 0 : A.isPinned }) }),
                        (0, i.jsx)(G.WithOffline, {
                            fallback: (0, i.jsx)(Y.T, {
                                onClick: es,
                                isLiked: null == A ? void 0 : A.isLiked,
                                disabled: !Q.isAuthorized || !(null == A ? void 0 : A.isAvailable),
                            }),
                        }),
                        eT && (0, i.jsx)(G.WithOffline, { fallback: (0, i.jsx)(W.N, { onClick: ex }) }),
                        ef &&
                            (0, i.jsx)(G.WithOffline, {
                                fallback: (0, i.jsx)($.C, { onClick: eh, disabled: !(null == A ? void 0 : A.isAvailable), variant: F.I.ARTIST, onOpenMenuChange: T }),
                            }),
                        (0, i.jsx)(K.H, { disabled: !A, shareLink: el, entityMeta: ev }),
                        eC &&
                            (0, i.jsx)(G.WithOffline, {
                                fallback: (0, i.jsx)(u.Dr, {
                                    onClick: eg,
                                    icon: (0, i.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': n.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: ep,
                                }),
                            }),
                        (0, i.jsx)(G.WithOffline, {
                            fallback: (0, i.jsx)(X.D, { onClick: ei, isDisliked: null == A ? void 0 : A.isDisliked, disabled: !(null == A ? void 0 : A.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        43443: (e, t, s) => {
            'use strict';
            s.d(t, { t: () => p });
            var i = s(88800),
                r = s(65724),
                o = s(84961),
                a = s(53548),
                n = s(2058),
                l = s(17392),
                c = s(13607),
                d = s(52300),
                u = s(29504),
                m = s(3099),
                _ = s.n(m);
            let p = (0, o.PA)((e) => {
                let {
                        progress: t,
                        withIcon: s,
                        withCrownIcon: o,
                        position: m,
                        weight: p = 'normal',
                        isDisliked: h,
                        isDisabled: x,
                        className: g,
                        positionClassName: v,
                    } = e,
                    { formatMessage: A } = (0, n.A)(),
                    T = t || s,
                    C = (0, a.useMemo)(() => {
                        if (o) return 'crown';
                        switch (t) {
                            case c._.UP:
                                return 'chartUp';
                            case c._.DOWN:
                                return 'chartDown';
                            case c._.NEW:
                                return 'chartNew';
                            default:
                                return 'chartSame';
                        }
                    }, [t, o]),
                    f = (0, a.useMemo)(() => {
                        switch (t) {
                            case c._.UP:
                                return A({ id: 'entity-names.chart-up' });
                            case c._.DOWN:
                                return A({ id: 'entity-names.chart-down' });
                            case c._.NEW:
                                return A({ id: 'entity-names.chart-new' });
                            default:
                                return A({ id: 'entity-names.chart-same' });
                        }
                    }, [A, t]),
                    k = o ? 'crown' : t;
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(_().root, g),
                    'data-test-id': l.OA.chart.CHART_PROGRESS,
                    children: [
                        (0, i.jsx)(u.HL, {
                            variant: 'div',
                            weight: p,
                            type: 'entity',
                            size: 'm',
                            className: (0, r.$)(_().position, v, { [_().position_disliked]: h, [_().position_disabled]: x }),
                            'data-test-id': l.OA.chart.CHART_PROGRESS_POSITION,
                            children: m,
                        }),
                        T &&
                            (0, i.jsx)(d.I, {
                                variant: C,
                                size: 'xxs',
                                'aria-label': f,
                                className: (0, r.$)(_().progress, _()['progress_'.concat(k)], { [_().progress_disliked]: h, [_().progress_disabled]: x }),
                                'data-test-id': l.OA.chart.CHART_PROGRESS_ICON,
                            }),
                    ],
                });
            });
        },
        43662: (e) => {
            e.exports = {
                root: 'CollectionArtistsPage_root__EH25F',
                scrollContainer: 'CollectionArtistsPage_scrollContainer__tT6NQ',
                important: 'CollectionArtistsPage_important__MG_XV',
                footer: 'CollectionArtistsPage_footer__aZrx3',
                item: 'CollectionArtistsPage_item___cy_9',
                contentBlock: 'CollectionArtistsPage_contentBlock__5QDcr',
                contentBlock_withMarginTop: 'CollectionArtistsPage_contentBlock_withMarginTop__e4_VX',
                gridLayout: 'CollectionArtistsPage_gridLayout__00brJ',
                subTitle: 'CollectionArtistsPage_subTitle__My70z',
            };
        },
        46384: (e, t, s) => {
            'use strict';
            s.d(t, { F: () => d });
            var i = s(88800),
                r = s(53548),
                o = s(24709),
                a = s(8383),
                n = s(66368),
                l = s(88966);
            let c = (e, t, s) => {
                    let i = e.createBlockViewSession(),
                        r = !1;
                    return { claimLoadedSession: () => (r ? null : ((r = !0), i)), client: e, identity: t, loadedSession: i, screenSession: s };
                },
                d = (0, o.B)(
                    { kind: 'provider', requiredProps: ['blockId', 'blockType', 'blockPosX', 'blockPosY', 'objectsCount'], scope: 'block' },
                    ({ blockId: e, blockIdForFrom: t, blockPosX: s, blockPosY: o, blockType: d, children: u, objectsCount: m }) => {
                        let _ = (0, l.N)(),
                            p = (0, r.useContext)(a.k)?.session,
                            h = [e, d, s, o].join(':'),
                            [x, g] = (0, r.useState)(() => c(_, h, p));
                        (x.client !== _ || x.identity !== h || x.screenSession !== p) && g(c(_, h, p));
                        let v = (0, r.useMemo)(
                            () => ({
                                claimLoadedSession: x.claimLoadedSession,
                                loadedSession: x.loadedSession,
                                scope: { blockId: e, blockIdForFrom: t, blockPosX: s, blockPosY: o, blockType: d, objectsCount: m },
                            }),
                            [e, t, s, o, d, m, x.claimLoadedSession, x.loadedSession],
                        );
                        return (0, i.jsx)(n.p, { value: v, children: u });
                    },
                );
        },
        46606: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { X: () => i }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(i || (i = {})));
        },
        49343: (e, t, s) => {
            'use strict';
            s.d(t, { D: () => m });
            var i = s(88800),
                r = s(53548),
                o = s(88969),
                a = s(52300),
                n = s(29504),
                l = s(59304),
                c = s(57585),
                d = s.n(c);
            let u = {
                    track: (0, i.jsx)(o.A, { id: 'notifications-info.track-link' }),
                    artist: (0, i.jsx)(o.A, { id: 'notifications-info.artist-link' }),
                    album: (0, i.jsx)(o.A, { id: 'notifications-info.album-link' }),
                    playlist: (0, i.jsx)(o.A, { id: 'notifications-info.playlist-link' }),
                    clip: (0, i.jsx)(o.A, { id: 'notifications-info.clip-link' }),
                    label: (0, i.jsx)(o.A, { id: 'notifications-info.label-link' }),
                    concert: (0, i.jsx)(o.A, { id: 'notifications-info.concert-link' }),
                },
                m = (e) => {
                    let { entityVariant: t, entityTitle: s, closeToast: c } = e,
                        m = (0, r.useMemo)(
                            () =>
                                (0, i.jsxs)(n.HL, {
                                    className: d().message,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: [
                                        u[t],
                                        '\xa0',
                                        (0, i.jsx)(n.HL, { className: d().title, variant: 'span', type: 'controls', size: 'm', lineClamp: 1, children: s }),
                                        '\xa0',
                                        (0, i.jsx)(o.A, { id: 'notifications-info.copied' }),
                                    ],
                                }),
                            [t, s],
                        );
                    return (0, i.jsx)(l.$, {
                        closeToast: c,
                        cover: (0, i.jsx)(a.I, { className: d().icon, size: 'xs', variant: 'chain' }),
                        message: m,
                        coverRadius: 's',
                    });
                };
        },
        49826: (e) => {
            e.exports = {
                subTitle: 'CollectionArtistsPageTopArtists_subTitle__xJdoJ',
                gridLayout: 'CollectionArtistsPageTopArtists_gridLayout__H2AR_',
                chart: 'CollectionArtistsPageTopArtists_chart__inbPE',
                position: 'CollectionArtistsPageTopArtists_position__YDoRC',
                listenTime: 'CollectionArtistsPageTopArtists_listenTime__NqxRf',
            };
        },
        54243: (e, t, s) => {
            'use strict';
            s.d(t, { T: () => n });
            var i = s(88800),
                r = s(4370),
                o = s(15077),
                a = s(42729);
            let n = (e) => {
                let { artist: t, closeToast: s } = e;
                return (0, i.jsx)(a.O, {
                    closeToast: s,
                    entityVariant: o.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: r.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        54320: (e, t, s) => {
            'use strict';
            s.d(t, { X: () => d });
            var i = s(88800),
                r = s(53548),
                o = s(29993),
                a = s(9492),
                n = s(29595),
                l = s(74965),
                c = s(74773);
            let d = (e, t) => {
                let { notify: s, dismiss: d } = (0, l.l)(),
                    u = (0, r.useRef)(void 0),
                    m = (0, o.c)(() => {
                        var s;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let i = [...(null != (s = e.lastRejectedPagesList) ? s : [])].reverse().filter((t) => {
                            var s;
                            return (null == (s = e.pageStates) ? void 0 : s[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            i.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, r.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = s((0, i.jsx)(a.L, { reloadBlocks: m }), { containerId: n.u.ERROR, autoClose: !1 }));
                }, [d, m, s, e.rejectedPagesCount]);
            };
        },
        56117: (e, t, s) => {
            'use strict';
            s.d(t, { D: () => d });
            var i = s(88800),
                r = s(84961),
                o = s(88969),
                a = s(17392),
                n = s(52300),
                l = s(19934),
                c = s(72288);
            let d = (0, r.PA)((e) => {
                let { isDisliked: t, onClick: s, disabled: r, className: d } = e,
                    { user: u } = (0, c.g)();
                return (0, i.jsx)(l.Dr, {
                    onClick: s,
                    className: d,
                    icon: (0, i.jsx)(n.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: r || !u.isAuthorized,
                    'data-test-id': a.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, i.jsx)(o.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        57328: (e, t, s) => {
            'use strict';
            s.d(t, { WithAuth: () => h });
            var i = s(88800),
                r = s(84961),
                o = s(58390),
                a = s(65724),
                n = s(88969),
                l = s(29504),
                c = s(7628),
                d = s(42674),
                u = s.n(d);
            let m = (0, r.PA)(() =>
                (0, i.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, i.jsx)(l.DZ, {
                            className: (0, a.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, i.jsx)(n.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, i.jsx)(l.HL, {
                            className: (0, a.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, i.jsx)(n.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, i.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var _ = s(4370),
                p = s(72288);
            let h = (0, r.PA)((e) => {
                let { children: t, withRedirectToMainPage: s } = e,
                    { user: r } = (0, p.g)();
                return r.isAuthorized ? t : (s && (0, o.redirect)(_.Z.main.href), (0, i.jsx)(m, {}));
            });
        },
        57585: (e) => {
            e.exports = { message: 'NotificationCopy_message__zVlYi', icon: 'NotificationCopy_icon__FTmM9', title: 'NotificationCopy_title__UEiU0' };
        },
        59724: (e, t, s) => {
            'use strict';
            s.d(t, { a: () => u });
            var i = s(88800),
                r = s(53548),
                o = s(8383),
                a = s(24709),
                n = s(88966);
            let l = new WeakMap();
            class c {
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
                    let s =
                        l.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                s = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                i = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                s();
                                            } finally {
                                                ((t = !1), e.length > 0 && i());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (s(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), i());
                                },
                            };
                        })();
                    (l.set(t, s), (this.queue = s));
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
            var d = s(97234);
            let u = (0, a.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let s = (0, n.N)(),
                        a = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === d.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [l, u] = (0, r.useState)(() => {
                            let e = new c(s.createScreenSession().screenViewUuid, s);
                            return { client: s, input: t, isReady: a, scope: a ? s.createScreenScope(t, e) : null, session: e };
                        });
                    if (l.client !== s || l.input.pageId !== t.pageId || l.input.skeletonId !== t.skeletonId) {
                        let r = new c(s.createScreenSession().screenViewUuid, s),
                            n = { client: s, input: t, isReady: a, scope: a ? s.createScreenScope(t, r) : null, session: r };
                        return (u(n), (0, i.jsx)(o.k, { value: n, children: e }));
                    }
                    if (
                        l.isReady !== a ||
                        l.input.mainObjectType !== t.mainObjectType ||
                        l.input.mainObjectId !== t.mainObjectId ||
                        l.input.displayReasonId !== t.displayReasonId ||
                        l.input.pageIdForFrom !== t.pageIdForFrom ||
                        l.input.pagePlacement !== t.pagePlacement ||
                        l.input.pageStyle !== t.pageStyle
                    ) {
                        let r = { ...l, input: t, isReady: a, scope: a ? s.createScreenScope(t, l.session) : null };
                        return (u(r), (0, i.jsx)(o.k, { value: r, children: e }));
                    }
                    return (0, i.jsx)(o.k, { value: l, children: e });
                },
            );
        },
        60266: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => a });
            var i = s(88800);
            s(30282);
            var r = s(11006),
                o = s.n(r);
            let a = (e) => {
                let { children: t } = e;
                return (0, i.jsx)('footer', { className: o().empty });
            };
        },
        60761: (e, t, s) => {
            'use strict';
            s.d(t, { CollectionArtistsPage: () => U });
            var i = s(88800),
                r = s(65724),
                o = s(84961),
                a = s(53548),
                n = s(2058),
                l = s(88969),
                c = s(97234),
                d = s(46384),
                u = s(90852),
                m = s(59724),
                _ = s(17392),
                p = s(29504),
                h = s(21256),
                x = s(69630),
                g = s(98427),
                v = s(46422),
                A = s(44230),
                T = s(37670),
                C = s(72288),
                f = s(54320),
                k = s(86790),
                N = s(60266),
                y = s(93317),
                b = s(37770),
                j = s(79418),
                E = s(43662),
                O = s.n(E),
                S = s(52300),
                R = s(67228),
                I = s.n(R);
            let P = (e) => {
                let { className: t } = e;
                return (0, i.jsxs)('div', {
                    className: I().root,
                    children: [
                        (0, i.jsxs)('div', {
                            className: (0, r.$)(I().emptyContent, t),
                            children: [
                                (0, i.jsx)(S.I, { className: I().emptyContentIcon, size: 'l', variant: 'album' }),
                                (0, i.jsx)(p.DZ, {
                                    className: I().emptyContentTitle,
                                    variant: 'h3',
                                    size: 'xs',
                                    children: (0, i.jsx)(l.A, { id: 'error-messages.empty-collection-artists-title' }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(N.A, { children: (0, i.jsx)(k.w, { className: I().footer }) }),
                    ],
                });
            };
            var L = s(19981),
                w = s(43443),
                D = s(1698),
                M = s(49826),
                H = s.n(M);
            let z = (0, o.PA)(() => {
                    let { collection: e } = (0, C.g)(),
                        { formatMessage: t } = (0, n.A)(),
                        s = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.artist' }) }),
                        r = (0, a.useMemo)(
                            () =>
                                e.artists.topArtists.isResolved
                                    ? e.artists.topArtists.items.map((e, s) => {
                                          var r;
                                          let o = e.listenTimeSeconds ? (0, L.U)(e.listenTimeSeconds, t) : null;
                                          return (0, i.jsx)(
                                              u.B,
                                              {
                                                  objectType: c.DomainObjectType.Artist,
                                                  objectId: e.artist.id,
                                                  objectPosX: s + 1,
                                                  objectPosY: 1,
                                                  children: (0, i.jsx)(
                                                      h.a,
                                                      {
                                                          topTitleElement:
                                                              e.top &&
                                                              (0, i.jsx)(
                                                                  w.t,
                                                                  {
                                                                      className: H().chart,
                                                                      position: e.top.position,
                                                                      progress: e.top.progress,
                                                                      weight: 'bold',
                                                                      positionClassName: H().position,
                                                                      withIcon: 0 === s,
                                                                      withCrownIcon: 0 === s,
                                                                  },
                                                                  e.getKey('ArtistTop'),
                                                              ),
                                                          bottomTitleElement: o
                                                              ? (0, i.jsx)(p.HL, {
                                                                    className: H().listenTime,
                                                                    variant: 'div',
                                                                    type: 'entity',
                                                                    size: 's',
                                                                    weight: 'medium',
                                                                    lineClamp: 1,
                                                                    'data-test-id': _.Xk.collection.COLLECTION_TOP_ARTISTS_LISTEN_TIME,
                                                                    children: o,
                                                                })
                                                              : void 0,
                                                          artist: e.artist,
                                                          contentLinesCount: 4,
                                                      },
                                                      null == (r = e.artist) ? void 0 : r.id,
                                                  ),
                                              },
                                              e.artist.id,
                                          );
                                      })
                                    : (0, i.jsx)(D.e, { linesCount: 4, count: 3, isActive: !0, 'aria-label': s, round: !0, centered: !0 }),
                            [t, s, e.artists.topArtists.isResolved, e.artists.topArtists.items],
                        );
                    return (0, i.jsxs)(d.F, {
                        blockId: 'collection_artists_top',
                        blockType: 'ARTISTS_TOP',
                        blockPosX: 1,
                        blockPosY: 1,
                        blockIdForFrom: 'collection_artists_top',
                        objectsCount: e.artists.topArtists.items.length,
                        children: [
                            (0, i.jsx)(p.DZ, {
                                size: 's',
                                weight: 'bold',
                                variant: 'h2',
                                className: H().subTitle,
                                'data-test-id': _.Xk.collection.COLLECTION_TOP_ARTISTS_HEADING,
                                children: (0, i.jsx)(l.A, { id: 'entity-names.top-artists' }),
                            }),
                            (0, i.jsx)('div', { className: H().gridLayout, 'data-test-id': _.Xk.collection.COLLECTION_TOP_ARTISTS_GRID, children: r }),
                        ],
                    });
                }),
                U = (0, o.PA)(() => {
                    let {
                            user: e,
                            collection: t,
                            settings: { isMobile: s },
                            library: o,
                        } = (0, C.g)(),
                        { formatMessage: E } = (0, n.A)(),
                        { contentScrollRef: S, setContentScrollRef: R } = (0, A.g)(),
                        I = (0, v.W)();
                    ((0, T.J)(t.artists.isResolved),
                        (0, a.useEffect)(
                            () => () => {
                                t.artists.reset();
                            },
                            [t.artists],
                        ));
                    let L = (0, a.useCallback)(
                        (s) => {
                            e.account.data.uid && t.artists.getData({ userId: e.account.data.uid, page: s, pageSize: 20 });
                        },
                        [t.artists, e.account.data.uid],
                    );
                    (0, f.X)(t.artists.pagesLoader, L);
                    let w = E({ id: 'loading-messages.entity-is-loading' }, { entityName: E({ id: 'entity-names.artist' }) }),
                        D = (0, a.useCallback)(
                            (e) => {
                                var s;
                                let r = null == (s = t.artists.items) ? void 0 : s[e];
                                return r
                                    ? (0, i.jsx)(d.F, {
                                          blockId: 'collection_artist',
                                          blockType: 'ARTIST',
                                          blockPosX: e + 1,
                                          blockPosY: 1,
                                          blockIdForFrom: r.id,
                                          objectsCount: t.artists.items.length,
                                          children: (0, i.jsx)(u.B, {
                                              objectType: c.DomainObjectType.Artist,
                                              objectId: r.id,
                                              objectPosX: 1,
                                              objectPosY: 1,
                                              children: (0, i.jsx)(h.a, { artist: r, contentLinesCount: 3 }, r.id),
                                          }),
                                      })
                                    : (0, i.jsx)(b.V, { isActive: !0, 'aria-label': w, round: !0, centered: !0 });
                            },
                            [t.artists.items, w],
                        ),
                        M = t.artists.topArtists.items.length || !t.artists.topArtists.isResolved,
                        H = (0, a.useMemo)(
                            () =>
                                M
                                    ? () =>
                                          (0, i.jsxs)('div', {
                                              className: (0, r.$)(O().contentBlock, O().contentBlock_withMarginTop),
                                              children: [
                                                  (0, i.jsx)(z, {}),
                                                  (t.artists.items.length > 0 || !t.artists.isResolved) &&
                                                      (0, i.jsx)(p.DZ, {
                                                          size: 's',
                                                          weight: 'bold',
                                                          variant: 'h2',
                                                          className: O().subTitle,
                                                          children: (0, i.jsx)(l.A, { id: 'entity-names.liked-artist' }),
                                                      }),
                                              ],
                                          })
                                    : null,
                            [M, t.artists.items.length, t.artists.isResolved],
                        ),
                        U = (0, a.useMemo)(() => ({ Header: H, Footer: () => (0, i.jsx)(N.A, { children: (0, i.jsx)(k.w, { className: O().footer }) }) }), [H]),
                        B = t.artists.isShimmerVisible ? 10 : t.artists.items.length,
                        F = (0, a.useMemo)(
                            () =>
                                0 === t.artists.items.length && 0 === t.artists.topArtists.items.length && t.artists.isResolved
                                    ? (0, i.jsx)(P, {})
                                    : (0, i.jsx)(j.$, {
                                          className: (0, r.$)(O().scrollContainer, O().important),
                                          customComponents: U,
                                          itemContentCallback: D,
                                          initialItemCount: B,
                                          totalCount: B,
                                          onGetDataByPage: L,
                                          pageSize: 20,
                                          totalRequests: t.artists.requestsCount,
                                          listClassName: (0, r.$)(O().contentBlock, O().gridLayout, { [O().contentBlock_withMarginTop]: !M }),
                                          itemClassName: O().item,
                                          handleRef: R,
                                          context: { listAriaLabel: E({ id: 'collection.liked-artists-list' }) },
                                          isMobileLayout: s,
                                          useWindowScroll: s,
                                      }),
                            [t.artists.items.length, t.artists.topArtists.items.length, t.artists.isResolved, t.artists.requestsCount, U, E, L, s, D, B, R, M],
                        );
                    if (e.account.data.uid && t.artists.isNeededToLoad) {
                        let s = [t.artists.getData({ userId: e.account.data.uid }), t.artists.getDataTopArtists(), o.getData()];
                        (0, a.use)(Promise.allSettled(s));
                    }
                    return (0, i.jsx)(m.a, {
                        pageId: c.AppScreen.CollectionArtistsScreen,
                        pageIdForFrom: g.b.OWN_ARTISTS,
                        children: (0, i.jsx)(x.h, {
                            scrollElement: S,
                            outerTitle: E({ id: 'entity-names.artists' }),
                            children: (0, i.jsxs)('div', {
                                className: O().root,
                                'data-test-id': _.Xk.collection.COLLECTION_ARTISTS_PAGE,
                                children: [
                                    (0, i.jsx)(y.Y, {
                                        variant: y.V.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: I.canBack,
                                        children: (0, i.jsx)(p.DZ, {
                                            id: 'collection-artists-header',
                                            variant: 'h1',
                                            weight: 'bold',
                                            size: 'xl',
                                            lineClamp: 1,
                                            children: (0, i.jsx)(l.A, { id: 'entity-names.artists' }),
                                        }),
                                    }),
                                    F,
                                ],
                            }),
                        }),
                    });
                });
        },
        62293: (e, t, s) => {
            'use strict';
            s.d(t, { v: () => r });
            var i = s(97956);
            let r = (e) => {
                let { checkExperiment: t, getDisclaimerContent: s, getExplicitContent: r, userRegion: o } = e;
                return 'ru' === o && t(i.z.WebNextFooterDisclaimer, 'on') ? s() : r();
            };
        },
        64207: (e, t, s) => {
            'use strict';
            s.d(t, { K: () => _ });
            var i = s(88800),
                r = s(96706),
                o = s(53548),
                a = s(2058),
                n = s(79390),
                l = s(29595),
                c = s(74965),
                d = s(72288),
                u = s(66943),
                m = s(54243);
            let _ = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: s } = (0, c.l)(),
                    [_, p] = (0, o.useState)(!1),
                    { formatMessage: h } = (0, a.A)();
                return (0, o.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void s((0, i.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (_) return;
                    let o = { ...(0, r.HO)(e), isLiked: !e.isLiked };
                    p(!0);
                    let a = await e.toggleLike();
                    (p(!1),
                        a === n.f.OK
                            ? s((0, i.jsx)(m.T, { artist: o }), { containerId: l.u.INFO })
                            : s((0, i.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, t.isAuthorized, _, h, s]);
            };
        },
        64247: (e, t, s) => {
            'use strict';
            s.d(t, { l: () => a });
            var i = s(88800),
                r = s(15077),
                o = s(33719);
            let a = (e) => {
                let { artist: t, closeToast: s } = e;
                return (0, i.jsx)(o.k, {
                    closeToast: s,
                    entityVariant: r.c.ARTIST,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.name,
                    isPinned: t.isPinned,
                    radius: 'round',
                });
            };
        },
        66363: (e, t, s) => {
            'use strict';
            s.d(t, { NS: () => o, Nh: () => r, xW: () => a });
            var i = s(9519);
            let r = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
            class o {
                getHeaders(e) {
                    return e instanceof Headers ? Object.fromEntries(e.entries()) : e;
                }
                getUrl(e) {
                    return new URL(e || 'https://unknown');
                }
                constructor(e) {
                    ((0, i._)(this, 'logger', void 0),
                        (0, i._)(this, 'beforeRequestHook', (e) => {
                            let t = this.getUrl(e.url);
                            this.logger.info('[Resource] Request started '.concat(e.method, ' ').concat(t.origin, ' ').concat(t.pathname).concat(t.search), {
                                request: { method: e.method, url: e.url, headers: this.getHeaders(e.headers), body: e.json },
                            });
                        }),
                        (0, i._)(this, 'beforeRetryHook', (e, t) => {
                            let s = e.cause;
                            if (r(s)) {
                                var i, o, a, n, l, c, d, u, m, _, p, h, x, g;
                                let r = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (i = s.request) ? void 0 : i.method) || (null == (o = s.options) ? void 0 : o.method),
                                        url: (null == (a = s.request) ? void 0 : a.url) || (null == (n = s.options) ? void 0 : n.url),
                                        headers: this.getHeaders((null == (l = s.request) ? void 0 : l.headers) || (null == (c = s.options) ? void 0 : c.headers)),
                                        body: (null == (d = s.request) ? void 0 : d.json) || (null == (u = s.options) ? void 0 : u.json),
                                        retries: t,
                                    },
                                };
                                void 0 !== s.response &&
                                    (r.response = {
                                        statusCode: s.response.statusCode,
                                        headers: this.getHeaders(s.response.headers),
                                        time: null == (g = s.response.timings) || null == (x = g.phases) ? void 0 : x.total,
                                    });
                                let v = this.getUrl((null == (m = s.request) ? void 0 : m.url) || (null == (_ = s.options) ? void 0 : _.url));
                                this.logger.warn(
                                    '[Resource] Retry request '
                                        .concat((null == (p = s.request) ? void 0 : p.method) || (null == (h = s.options) ? void 0 : h.method), ' ')
                                        .concat(v.origin, ' ')
                                        .concat(v.pathname)
                                        .concat(v.search),
                                    r,
                                );
                            } else
                                this.logger.warn('[Resource] Retry request (unknown)', {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                });
                        }),
                        (0, i._)(this, 'afterResponseHook', (e) => {
                            if ((e.statusCode || e.status) >= 200 && 299 >= (e.statusCode || e.status)) {
                                var t, s;
                                let i = this.getUrl(e.url);
                                this.logger.info(
                                    '[Resource] Request resolved '
                                        .concat(e.statusCode, ' ')
                                        .concat(e.request.method, ' ')
                                        .concat(i.origin, ' ')
                                        .concat(i.pathname)
                                        .concat(i.search),
                                    {
                                        request: { method: e.request.method, url: e.url, headers: this.getHeaders(e.request.headers), body: e.request.body },
                                        response: {
                                            statusCode: e.statusCode || e.status,
                                            headers: this.getHeaders(e.headers),
                                            time: null == (s = e.timings) || null == (t = s.phases) ? void 0 : t.total,
                                        },
                                    },
                                );
                            }
                            return e;
                        }),
                        (0, i._)(this, 'beforeErrorHook', (e) => {
                            let t = e.cause;
                            if (r(t)) {
                                var s, i, o, a, n, l, c, d, u, m, _, p, h, x;
                                let r = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (s = t.request) ? void 0 : s.method) || (null == (i = t.options) ? void 0 : i.method),
                                        url: (null == (o = t.request) ? void 0 : o.url) || (null == (a = t.options) ? void 0 : a.url),
                                        headers: this.getHeaders((null == (n = t.request) ? void 0 : n.headers) || (null == (l = t.options) ? void 0 : l.headers)),
                                        body: (null == (c = t.request) ? void 0 : c.json) || (null == (d = t.options) ? void 0 : d.json),
                                    },
                                };
                                void 0 !== t.response &&
                                    (r.response = {
                                        statusCode: t.response.statusCode || t.response.status,
                                        headers: this.getHeaders(t.response.headers),
                                        time: null == (x = t.response.timings) || null == (h = x.phases) ? void 0 : h.total,
                                    });
                                let g = this.getUrl((null == (u = t.request) ? void 0 : u.url) || (null == (m = t.options) ? void 0 : m.url));
                                this.logger.error(
                                    '[Resource] Request failed '
                                        .concat((null == (_ = t.request) ? void 0 : _.method) || (null == (p = t.options) ? void 0 : p.method), ' ')
                                        .concat(g.origin, ' ')
                                        .concat(g.pathname)
                                        .concat(g.search, ', reason: ')
                                        .concat(e.name),
                                    r,
                                );
                            } else
                                this.logger.error('[Resource] Request failed (unknown), reason: '.concat(e.name), {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                });
                            return e;
                        }),
                        (this.logger = e));
                }
            }
            (s(35412), s(69629));
            let a = [
                'request.headers.cookie',
                'request.headers.x-ya-service-ticket',
                'request.headers.x-ya-user-ticket',
                'request.headers.authorization',
                'request.headers.x-authorization',
                'request.headers.content-security-policy',
                'request.headers.x-ya-balancer-service-ticket',
                'request.headers.x-balancer-tvm-service-ticket',
                'response.headers.set-cookie',
                'response.headers.x-ya-service-ticket',
                'response.headers.x-ya-user-ticket',
                'response.headers.x-ya-balancer-service-ticket',
                'response.headers.x-balancer-tvm-service-ticket',
                'response.headers.x-authorization',
                'response.headers.content-security-policy',
            ];
        },
        66610: (e, t, s) => {
            'use strict';
            s.d(t, { D: () => l });
            var i = s(53548),
                r = s(24709),
                o = s(88966),
                a = s(87138),
                n = s(46457);
            let l = (0, r.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, o.N)(),
                    t = (0, a.w)(),
                    s = (0, i.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, n.c)((e) => {
                    t?.object && s && s.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        67228: (e) => {
            e.exports = {
                root: 'CollectionArtistsPageEmpty_root__D39tF',
                emptyContent: 'CollectionArtistsPageEmpty_emptyContent__oJc6T',
                emptyContentIcon: 'CollectionArtistsPageEmpty_emptyContentIcon__uZQwm',
                emptyContentTitle: 'CollectionArtistsPageEmpty_emptyContentTitle__Vqy_Q',
                footer: 'CollectionArtistsPageEmpty_footer__O_8aS',
            };
        },
        69629: (e) => {
            var t = Object.prototype.hasOwnProperty;
            function s(e) {
                return '[Throws: ' + (e ? e.message : '?') + ']';
            }
            function i(e) {
                var i = [];
                return (function e(r) {
                    if (null === r || 'object' != typeof r) return r;
                    if (-1 !== i.indexOf(r)) return '[Circular]';
                    if ((i.push(r), 'function' == typeof r.toJSON))
                        try {
                            var o = e(r.toJSON());
                            return (i.pop(), o);
                        } catch (e) {
                            return s(e);
                        }
                    if (Array.isArray(r)) {
                        var a = r.map(e);
                        return (i.pop(), a);
                    }
                    var n = Object.keys(r).reduce(function (i, o) {
                        return (
                            (i[o] = e(
                                (function (e, i) {
                                    if (t.call(e, i))
                                        try {
                                            return e[i];
                                        } catch (e) {
                                            return s(e);
                                        }
                                    return e[i];
                                })(r, o),
                            )),
                            i
                        );
                    }, {});
                    return (i.pop(), n);
                })(e);
            }
            ((e.exports = function (e, t, s) {
                return JSON.stringify(i(e), t, s);
            }),
                (e.exports.ensureProperties = i));
        },
        74064: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => x });
            var i = s(88800),
                r = s(2058),
                o = s(88969),
                a = s(17392),
                n = s(29993),
                l = s(52300),
                c = s(19934),
                d = s(29595),
                u = s(74965),
                m = s(72288),
                _ = s(98953),
                p = s(64546),
                h = s(49343);
            let x = (e) => {
                let { shareLink: t, entityMeta: s, disabled: x, className: g, iconClassName: v, menuClassName: A, withSubmenu: T = !0, withNotification: C = !0 } = e,
                    { settings: f, shareIframe: k, fullscreenPlayer: N, fullscreenVideoPlayer: y } = (0, m.g)(),
                    { formatMessage: b } = (0, r.A)(),
                    { notify: j } = (0, u.l)(),
                    E = (0, n.c)(async () => {
                        if ((await window.navigator.clipboard.writeText(t), C)) {
                            let e = N.modal.isOpened || (!f.isMobile && y.modal.isOpened);
                            j((0, i.jsx)(h.D, { entityVariant: s.variant, entityTitle: s.title }), { containerId: e ? d.u.FULLSCREEN_INFO : d.u.INFO });
                        }
                    }),
                    O = (0, n.c)(() => {
                        s.id && k.openModal(s);
                    }),
                    S = s.id && s.variant !== _.Y.ARTIST && s.variant !== _.Y.CLIP;
                return T
                    ? (0, i.jsxs)(c.W1, {
                          offsetOptions: 3,
                          isMobile: f.isMobile,
                          className: g,
                          menuClassName: A,
                          label: b({ id: 'interface-actions.share' }),
                          icon: (0, i.jsx)(l.I, { className: v, variant: 'share', size: 'xxs' }),
                          disabled: x,
                          submenuProps: { 'data-test-id': a.S7.CONTEXT_MENU_SHARE },
                          'data-test-id': a.S7.CONTEXT_MENU_SHARE_BUTTON,
                          children: [
                              (0, i.jsx)(c.Dr, {
                                  onClick: E,
                                  icon: (0, i.jsx)(l.I, { variant: 'chain', size: 'xxs' }),
                                  'data-test-id': a.S7.CONTEXT_MENU_SHARE_COPY_LINK_BUTTON,
                                  children: (0, i.jsx)(o.A, { id: 'interface-actions.copy-link' }),
                              }),
                              S &&
                                  (0, i.jsx)(p.WithOffline, {
                                      fallback: (0, i.jsx)(c.Dr, {
                                          onClick: O,
                                          icon: (0, i.jsx)(l.I, { variant: 'code', size: 'xxs' }),
                                          'data-test-id': a.S7.CONTEXT_MENU_SHARE_IFRAME_BUTTON,
                                          children: (0, i.jsx)(o.A, { id: 'interface-actions.copy-iframe' }),
                                      }),
                                  }),
                          ],
                      })
                    : (0, i.jsx)(c.Dr, {
                          className: g,
                          onClick: E,
                          icon: (0, i.jsx)(l.I, { className: v, variant: 'share', size: 'xxs' }),
                          disabled: x,
                          'data-test-id': a.S7.CONTEXT_MENU_SHARE_BUTTON,
                          children: (0, i.jsx)(o.A, { id: 'interface-actions.share' }),
                      });
            };
        },
        77455: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => m });
            var i = s(88800),
                r = s(96706),
                o = s(53548),
                a = s(2058),
                n = s(29595),
                l = s(74965),
                c = s(72288),
                d = s(66943),
                u = s(64247);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: s } = (0, l.l)(),
                    { formatMessage: m } = (0, a.A)(),
                    [_, p] = (0, o.useState)(!1);
                return (0, o.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void s((0, i.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (_) return;
                    let o = { ...(0, r.HO)(e), isPinned: !e.isPinned };
                    p(!0);
                    let a = await e.togglePin();
                    (p(!1),
                        a
                            ? s((0, i.jsx)(u.l, { artist: o }), { containerId: n.u.INFO })
                            : s((0, i.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [e, t.isAuthorized, _, m, s]);
            };
        },
        79418: (e, t, s) => {
            'use strict';
            s.d(t, { $: () => x });
            var i = s(88800),
                r = s(65724),
                o = s(61013),
                a = s(53548);
            let n = (e) => {
                    let { style: t, forwardRef: s, context: r, ...o } = e,
                        a = (null == r ? void 0 : r.listAriaLabel) || void 0,
                        n = (null == r ? void 0 : r.listRole) || 'region';
                    return (0, i.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: n, 'aria-label': a, style: { ...t }, ref: s, ...o });
                },
                l = (0, a.forwardRef)((e, t) => (0, i.jsx)(n, { forwardRef: t, ...e }));
            var c = s(16434),
                d = s.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: s, withFooter: o, withHeader: a, withForceScroll: n, ...l } = e;
                    return (0, i.jsx)('div', {
                        className: (0, r.$)(d().scroller, { [d().scroller_withFooter]: o, [d().scroller_withHeader]: a, [d().scroller_withForceScroll]: n }),
                        style: { ...t },
                        ref: s,
                        ...l,
                        tabIndex: -1,
                    });
                },
                m = (0, a.forwardRef)((e, t) => (0, i.jsx)(u, { forwardRef: t, ...e }));
            var _ = s(55482),
                p = s(75151);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: s,
                            onRangeHandler: r,
                            debounceDurationInMs: o = 100,
                            totalCount: n = 0,
                            shouldTriggerRangeChangedOn: l = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [m, h] = (0, a.useState)(null),
                        x = (0, a.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == r || r(e), l.length > 0 && h(e), t && s)) {
                                        let i = Math.floor(e.endIndex / t) + 1,
                                            r = Math.floor(e.startIndex / t);
                                        for (let e = r; e < i; e++) s(e);
                                    }
                                }, o),
                            [o, r, t, s, l],
                        );
                    (0, a.useEffect)(() => {
                        l.length > 0 && m && x(m);
                    }, l);
                    let g = (0, a.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, o);
                    }, [c, o]);
                    return (0, i.jsx)(p.sN, { ref: d, rangeChanged: x, totalCount: n, endReached: g, ...u });
                },
                x = (e) => {
                    let {
                            className: t,
                            customComponents: s,
                            onGetDataByPage: n,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: _,
                            listClassName: p,
                            overscan: x = 700,
                            pageSize: g = 20,
                            totalCount: v,
                            totalRequests: A,
                            debounceDurationInMs: T,
                            initialItemCount: C,
                            minInitialItemCount: f = 20,
                            handleRef: k,
                            alwaysShowScrollbar: N = !1,
                            testId: y,
                            isMobileLayout: b = !1,
                            shouldTriggerRangeChangedOn: j,
                            ...E
                        } = e,
                        [O, S] = (0, a.useState)(!1),
                        R = (0, a.useMemo)(
                            () =>
                                (0, o.A)((e) => {
                                    S(e);
                                }, 100),
                            [],
                        ),
                        I = (0, a.useMemo)(() => {
                            var e, t;
                            return b
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == s ? void 0 : s.List) ? e : l,
                                      Item: null == s ? void 0 : s.Item,
                                      ScrollSeekPlaceholder: null == s ? void 0 : s.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == s ? void 0 : s.List) ? t : l,
                                      Item: null == s ? void 0 : s.Item,
                                      Header: null == s ? void 0 : s.Header,
                                      Footer: null == s ? void 0 : s.Footer,
                                      ScrollSeekPlaceholder: null == s ? void 0 : s.ScrollSeekPlaceholder,
                                  };
                        }, [s, A, b]),
                        P = C ? Math.min(C, f) : void 0;
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(d().root, { [d().root_scrolling]: O || N, [d().root_notScrolling]: !O && !N }, t),
                        'data-test-id': y,
                        children: [
                            b && (null == s ? void 0 : s.Header) && s.Header(),
                            (0, i.jsx)(h, {
                                overscan: x,
                                components: I,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: R,
                                itemContent: _,
                                scrollerRef: k,
                                totalCount: v,
                                pageSize: g,
                                onPageHandler: n,
                                onRangeHandler: c,
                                debounceDurationInMs: T,
                                initialItemCount: P,
                                shouldTriggerRangeChangedOn: j,
                                ...E,
                            }),
                            b && (null == s ? void 0 : s.Footer) && s.Footer(),
                        ],
                    });
                };
        },
        81066: (e, t, s) => {
            'use strict';
            s.d(t, { C: () => p });
            var i = s(88800),
                r = s(84961),
                o = s(53548),
                a = s(88969),
                n = s(17392),
                l = s(52300),
                c = s(19934),
                d = s(73170),
                u = s(72288),
                m = s(52726);
            let _ = {
                    album: (0, i.jsx)(a.A, { id: 'vibe-actions.vibe-by-album' }),
                    artist: (0, i.jsx)(a.A, { id: 'vibe-actions.vibe-by-artist' }),
                    playlist: (0, i.jsx)(a.A, { id: 'vibe-actions.vibe-by-playlist' }),
                    track: (0, i.jsx)(a.A, { id: 'vibe-actions.vibe-by-track' }),
                },
                p = (0, r.PA)((e) => {
                    let { variant: t, className: s, onClick: r, disabled: a, onOpenMenuChange: p } = e,
                        {
                            settings: { isMobile: h },
                            user: x,
                            freeAccess: g,
                        } = (0, u.g)(),
                        v = g.isVibeStartRestricted && !h,
                        A = (0, o.useCallback)(
                            (e) => {
                                let { isPopoverEnabled: o, popoverText: u } = e;
                                return (0, i.jsxs)(c.Dr, {
                                    onClick: r,
                                    disabled: a || o || !x.isAuthorized,
                                    className: s,
                                    icon: (0, i.jsx)(l.I, { variant: 'vibe', size: 'xxs' }),
                                    'data-test-id': n.S7.CONTEXT_MENU_VIBE_BUTTON,
                                    children: [_[t], ' ', (0, i.jsx)(d.q, { children: u })],
                                });
                            },
                            [r, a, s, t, x.isAuthorized],
                        );
                    return (0, i.jsx)(m.S, {
                        isNested: !0,
                        isEnabled: v,
                        placement: 'right',
                        textVariant: 'vibe',
                        vibeTextVariant: t,
                        renderChildren: A,
                        onOpenMenuChange: p,
                    });
                });
        },
        85074: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        86790: (e, t, s) => {
            'use strict';
            s.d(t, { w: () => y });
            var i = s(88800),
                r = s(65724),
                o = s(84961),
                a = s(2058),
                n = s(30282),
                l = s(94144),
                c = (function (e) {
                    return (
                        (e.YANDEX = 'YANDEX'),
                        (e.YANDEX_PROJECTS = 'YANDEX_PROJECTS'),
                        (e.COPYRIGHT_HOLDER = 'COPYRIGHT_HOLDER'),
                        (e.AGREEMENT = 'AGREEMENT'),
                        (e.RECOMMENDATION_RULES = 'RECOMMENDATION_RULES'),
                        (e.HELP = 'HELP'),
                        (e.PRIVACY_POLICY = 'PRIVACY_POLICY'),
                        e
                    );
                })({});
            let d = (e, t, s) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(s);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(s);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(s);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(s);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(s);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: s, tld: i, year: r } = e;
                    return {
                        year: r,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, i, s) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, i, s) },
                    };
                };
            var m = s(62293),
                _ = s(99839);
            let p = (e) => e(new Date(), (0, _.m)());
            var h = s(51611),
                x = s(72288),
                g = s(11006),
                v = s.n(g),
                A = s(17392),
                T = s(29504),
                C = s(91292);
            let f = (e) => {
                    let { className: t, data: s } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(v().copyrights, t),
                        'data-test-id': A.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(T.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: v().text,
                                children: [
                                    '\xa9 ',
                                    s.year,
                                    ' \xa0',
                                    (0, i.jsx)(C.N, {
                                        target: '_blank',
                                        href: s.yandexMusic.url,
                                        className: (0, r.$)(v().copyrightLink, v().yandexMusicLink),
                                        'data-test-id': A.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: s.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(T.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(C.N, {
                                target: '_blank',
                                href: s.yandexProjects.url,
                                className: v().copyrightLink,
                                'data-test-id': A.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: s.yandexProjects.title,
                            }),
                        ],
                    });
                },
                k = (e) => {
                    let { disclaimer: t, links: s } = e;
                    return (0, i.jsxs)('div', {
                        className: v().links,
                        children: [
                            (0, i.jsx)('ol', {
                                className: v().list,
                                'data-test-id': A.S7.FOOTER_LINKS_LIST,
                                children: s.map((e) => {
                                    let { id: t, title: s, url: r } = e;
                                    return (0, i.jsx)(
                                        'li',
                                        {
                                            className: v().item,
                                            children: (0, i.jsx)(C.N, { target: '_blank', href: r, className: v().link, 'data-test-id': A.S7.FOOTER_LINK, children: s }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, i.jsx)(T.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: v().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': A.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                N = (e) => {
                    let { className: t, data: s } = e;
                    return (0, i.jsxs)('footer', {
                        className: (0, r.$)(v().root, v().important, t),
                        'data-test-id': A.S7.FOOTER,
                        children: [(0, i.jsx)(k, { links: s.links, disclaimer: s.disclaimer }), (0, i.jsx)(f, { data: s.copyrights })],
                    });
                };
            (0, o.PA)((e) => {
                let { className: t } = e,
                    { location: s } = (0, x.g)(),
                    { formatDate: r, formatMessage: o } = (0, a.A)(),
                    { language: n } = (0, h.h)(),
                    l = u({ formatMessage: o, language: n, tld: s.tld, year: p(r) });
                return (0, i.jsx)(f, { className: t, data: l });
            });
            let y = (0, o.PA)((e) => {
                var t;
                let { className: s } = e,
                    { experiments: o, location: _, user: g } = (0, x.g)(),
                    { formatDate: A, formatMessage: T } = (0, a.A)(),
                    { isEnabled: C } = null != (t = (0, l.P)()) ? t : {},
                    { language: f } = (0, h.h)(),
                    k = ((e) => {
                        let { checkExperiment: t, formatMessage: s, isWebApplication: i, language: r, tld: o, userRegion: a, year: n } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: s, tld: i, language: r, userRegion: o } = e,
                                    a = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, i, r) },
                                    n = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, i, r) },
                                    l = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, i, r) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, i, r) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, i, r) },
                                    _ = [a, l, u];
                                return (s && 'ru' === o && _.push(n), _.push(m), _);
                            })({ formatMessage: s, isWebApplication: i, language: r, tld: o, userRegion: a }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => s({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => s({ id: 'footer.explicit-content' }),
                                userRegion: a,
                            }),
                            copyrights: u({ formatMessage: s, language: r, tld: o, year: n }),
                        };
                    })({
                        checkExperiment: (e, t) => o.checkExperiment(e, t),
                        formatMessage: T,
                        isWebApplication: n.$3,
                        tld: _.tld,
                        language: f,
                        userRegion: g.account.data.userSessionRegionIso,
                        year: p(A),
                    });
                return (0, i.jsx)(N, { className: (0, r.$)({ [v().root_withOffsetForDeeplink]: C }, s), data: k });
            });
        },
        89916: (e, t, s) => {
            'use strict';
            s.d(t, { GX: () => o.G, X1: () => i.X, m5: () => r.m });
            var i = s(46606),
                r = s(91136),
                o = s(19840);
            s(17017);
        },
        90852: (e, t, s) => {
            'use strict';
            s.d(t, { B: () => c });
            var i = s(88800),
                r = s(53548),
                o = s(24709),
                a = s(66368),
                n = s(37556),
                l = s(88966);
            let c = (0, o.B)(
                { kind: 'provider', requiredProps: ['objectType', 'objectId', 'objectPosX', 'objectPosY'], pendingProps: ['objectId'], scope: 'object' },
                ({ children: e, objectId: t, objectPosX: s, objectPosY: o, objectType: c }) => {
                    let d = (0, l.N)(),
                        u = (0, r.useContext)(a.p)?.loadedSession,
                        m = [c, t, s, o].join(':'),
                        [_, p] = (0, r.useState)(() => ({ client: d, identity: m, blockSession: u, viewSession: d.createBlockViewSession() }));
                    (_.client !== d || _.identity !== m || _.blockSession !== u) &&
                        p({ client: d, identity: m, blockSession: u, viewSession: d.createBlockViewSession() });
                    let h = (0, r.useMemo)(
                        () => ({ activeViewSession: null, scope: { objectId: t, objectPosX: s, objectPosY: o, objectType: c }, viewSession: _.viewSession }),
                        [t, s, o, c, _.viewSession],
                    );
                    return (0, i.jsx)(n.l, { value: h, children: e });
                },
            );
        },
        91136: (e, t, s) => {
            'use strict';
            s.d(t, { m: () => r });
            class i extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: s = 'E_INTERNAL', data: r = {}, ...o } = t,
                        a = e || 'Internal error';
                    (super(a, o), (this.message = a), (this.code = s), (this.data = r), (this.stack = Error(a).stack), Object.setPrototypeOf(this, i.prototype));
                }
            }
            class r extends i {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...s } = {}) {
                    (super(e, { code: t, ...s }), Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        91959: (e, t, s) => {
            'use strict';
            s.d(t, { S: () => r });
            var i = s(58217);
            let r = (e) => {
                let { artist: t, callback: s, shouldHistoryBack: r } = e;
                return (0, i.l)({ entity: t, callback: s, modalBehavior: void 0 === r ? void 0 : { shouldHistoryBack: r }, preventDefaultWhenSafe: !0 });
            };
        },
        93434: (e) => {
            e.exports = {
                controls: 'ArtistCard_controls__jsqqI',
                cover: 'ArtistCard_cover__29ShU',
                root: 'ArtistCard_root__x67BK',
                srTitleLink: 'ArtistCard_srTitleLink__jzfOW',
                coverBlock: 'ArtistCard_coverBlock__dBL4x',
                image: 'ArtistCard_image__pONJx',
                titleLink: 'ArtistCard_titleLink__G8Puz',
                playButton: 'ArtistCard_playButton__XZoTr',
                likeButton: 'ArtistCard_likeButton__LU9TL',
                menuButton: 'ArtistCard_menuButton__EynXG',
                pinButton: 'ArtistCard_pinButton__G_VOi',
                trailerButton: 'ArtistCard_trailerButton__a2NHm',
                control: 'ArtistCard_control___qv5j',
            };
        },
        94144: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => r, P: () => o });
            var i = s(53548);
            let r = (0, i.createContext)(null),
                o = () => (0, i.useContext)(r);
        },
        98953: (e, t, s) => {
            'use strict';
            s.d(t, { Y: () => i });
            var i = (function (e) {
                return (
                    (e.ALBUM = 'album'),
                    (e.ARTIST = 'artist'),
                    (e.PLAYLIST = 'playlist'),
                    (e.TRACK = 'track'),
                    (e.CLIP = 'clip'),
                    (e.LABEL = 'label'),
                    (e.CONCERT = 'concert'),
                    e
                );
            })({});
        },
        99839: (e, t, s) => {
            'use strict';
            s.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
        99890: (e, t, s) => {
            'use strict';
            s.d(t, { C8: () => o, UC: () => a, dM: () => n, uV: () => l });
            var i = s(89916),
                r = s(66363);
            let o = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                a = (e) => (e.uid ? 'authorized' : 'no-uid'),
                n = (e) => {
                    if (!(e instanceof i.m5) || !(0, r.Nh)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, r.Nh)(e.cause)) return;
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
        (e.O(
            0,
            [
                7191, 9904, 3078, 1191, 8194, 8655, 1833, 6706, 4771, 2662, 6904, 1898, 2058, 3578, 8628, 4378, 9780, 8283, 9332, 5151, 4732, 9087, 3979, 1928, 9091,
                9124, 900, 9934, 2470, 7670, 4441, 6374, 2088, 763, 2670, 7358,
            ],
            () => e((e.s = 35387)),
        ),
            (_N_E = e.O()));
    },
]);
