(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1156],
    {
        1698: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => s });
            var a = i(88800),
                r = i(37770);
            let s = (e) => {
                let {
                    isActive: t,
                    itemClassName: i,
                    round: s,
                    centered: l,
                    withInfo: n,
                    count: o = 10,
                    shimmerClassName: c,
                    linesCount: d,
                    'aria-label': u,
                    withSubcover: m,
                } = e;
                return Array.from(Array(o).keys()).map((e) =>
                    (0, a.jsx)(
                        r.V,
                        { isActive: t, linesCount: d, className: i, round: s, centered: l, withInfo: n, withSubcover: m, 'aria-label': u, shimmerClassName: c },
                        e,
                    ),
                );
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
        9492: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => x });
            var a = i(88800),
                r = i(65724),
                s = i(53548),
                l = i(2058),
                n = i(88969),
                o = i(96817),
                c = i(52300),
                d = i(29504),
                u = i(59304),
                m = i(4044),
                _ = i.n(m);
            let x = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    m = (0, s.useRef)(null),
                    { formatMessage: x } = (0, l.A)();
                (0, s.useEffect)(() => {
                    var e;
                    null == (e = m.current) || e.focus();
                }, []);
                let v = (0, s.useMemo)(
                    () =>
                        (0, a.jsxs)('div', {
                            className: _().message,
                            children: [
                                (0, a.jsx)(d.HL, {
                                    className: _().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, a.jsx)(n.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, a.jsx)(o.$, {
                                    ref: m,
                                    className: _().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': x({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, a.jsx)(c.I, { variant: 'reset', size: 'xxs', className: _().icon }),
                                }),
                            ],
                        }),
                    [x, t],
                );
                return (0, a.jsx)(u.$, { className: (0, r.$)(_().root, _().important), message: v, closeToast: i });
            };
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
        18130: (e, t, i) => {
            'use strict';
            (i.d(t, { b: () => c }), i(30282));
            var a = i(35412),
                r = i(4086),
                s = i(41928),
                l = i(72131),
                n = (function (e) {
                    return ((e.SOURCE = 'utm_source'), (e.MEDIUM = 'utm_medium'), e);
                })(n || {});
            let o = { utm_source: 'desktop', utm_medium: 'copy_link' },
                c = function (e) {
                    for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
                    let [c] = i,
                        { params: d } = null != c ? c : {},
                        u = { ...o, ...(null == c ? void 0 : c.query) },
                        m = (0, s.N)().get(r.V4),
                        _ = (0, l._)(m.webHost),
                        { href: x } = (0, a.no)(String(e), { params: d, query: u, options: { host: 'https://'.concat(_) } }),
                        { href: v } = (0, a.no)(String(e), { params: d, query: u });
                    return { shareLink: x, pathname: v };
                };
        },
        21256: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => F });
            var a = i(88800),
                r = i(65724),
                s = i(84961),
                l = i(53548),
                n = i(2058),
                o = i(97234),
                c = i(91177),
                d = i(70598),
                u = i(46482),
                m = i(17392),
                _ = i(18593),
                x = i(29993),
                v = i(79070),
                h = i(29832),
                f = i(52300),
                A = i(7555),
                b = i(29504),
                j = i(91959),
                g = i(64207),
                p = i(77455),
                N = i(5407),
                C = i(57934),
                T = i(84384),
                k = i(4795),
                S = i(78940),
                I = i(55693),
                R = i(39079),
                y = i(72288),
                L = i(81877),
                E = i(49738),
                O = i(91292),
                P = i(56862),
                B = i(16704),
                z = i(56446),
                w = i(36207),
                D = i(43161),
                M = i(93434),
                U = i.n(M);
            let F = (0, s.PA)((e) => {
                let { artist: t, className: i, children: s, contentLinesCount: M, topTitleElement: F, bottomTitleElement: H } = e,
                    K = (0, c.D)(),
                    {
                        trailer: V,
                        user: W,
                        paywall: { modal: X },
                    } = (0, y.g)(),
                    { from: q, utmLink: $ } = (0, T.f)({ contextId: t.id, contextType: _.K.Artist }),
                    { formatMessage: Y } = (0, n.A)(),
                    [J, Z] = (0, l.useState)(!1),
                    [G, Q] = (0, l.useState)(!1),
                    [ee, et] = (0, l.useState)(!1),
                    { sendLikeSearchFeedback: ei, sendNavigateSearchFeedback: ea, sendPlaySearchFeedback: er } = (0, I.z)(),
                    es = (0, d.S)(),
                    el = (0, u.g)(),
                    en = (0, g.K)(t),
                    eo = (0, p.A)(t),
                    { id: ec, name: ed, coverUri: eu, isLiked: em } = t,
                    e_ = (0, S.Z)(t.url),
                    [ex, ev] = (0, l.useState)(!1),
                    eh = (0, C.F)(),
                    ef = (0, N.P)(),
                    eA = (0, x.c)((e) => {
                        if ((e.stopPropagation(), ef())) return void e.preventDefault();
                        (V.openArtistTrailer(t.id), eh(o.DomainObjectType.Artist, t.id));
                    }),
                    eb = (0, l.useMemo)(() => {
                        let e = Y({ id: 'entity-names.artist-name' }, { artistName: ed }),
                            t = em ? Y({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [ed, em, Y]),
                    { isPlaying: ej, togglePlay: eg } = (0, R.D)({
                        playContextParams: { contextData: { type: _.K.Artist, meta: { id: Number(ec) }, from: q, utmLink: $ }, loadContextMeta: !0 },
                    }),
                    ep = (0, j.S)({ artist: t, callback: e_ }),
                    eN = (0, j.S)({ artist: t, callback: eg }),
                    eC = (0, x.c)((e) => {
                        (null == ea || ea(), es({ to: o.AppScreen.ArtistScreen }), ep(e));
                    }),
                    eT = (0, k.N)(),
                    ek = (0, x.c)(() => {
                        if (!ef()) {
                            if (eT) return void X.open();
                            (J || ej || (Z(!0), null == er || er()), eN(), ej || el());
                        }
                    }),
                    eS = (0, x.c)(() => {
                        (G || em || (Q(!0), null == ei || ei()), en());
                    }),
                    eI = (0, x.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eR = (0, x.c)((e) => {
                        (et(e), ev(e));
                    }),
                    ey = (0, l.useMemo)(
                        () =>
                            (0, a.jsx)(
                                D.g,
                                {
                                    artist: t,
                                    onOpenChange: eR,
                                    open: ee,
                                    onClick: eI,
                                    className: (0, r.$)(U().menuButton, U().control),
                                    size: 's',
                                    icon: (0, a.jsx)(f.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': m.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eI, eR, ee],
                    ),
                    eL = (0, l.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, a.jsx)(
                                w.n,
                                {
                                    children: (0, a.jsx)(z.k, {
                                        className: (0, r.$)(U().trailerButton, U().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: eA,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, eA]),
                    eE = (0, l.useMemo)(
                        () =>
                            (0, a.jsx)(
                                P.O,
                                { onClick: eo, isPinned: t.isPinned, className: (0, r.$)(U().pinButton, U().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, eo],
                    ),
                    eO = (0, v.L)(() => {
                        if (t.isAvailable)
                            return (0, a.jsx)(
                                h.hg,
                                {
                                    isVisible: ee || ex,
                                    className: U().controls,
                                    radius: 'round',
                                    playControl: (0, a.jsx)(
                                        B.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, r.$)(U().playButton, U().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: ek,
                                            isPlaying: ej,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, a.jsx)(
                                        E.c,
                                        {
                                            className: (0, r.$)(U().likeButton, U().control),
                                            isLiked: em,
                                            onClick: eS,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !W.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: ey,
                                    pinControl: eE,
                                    trailerControl: eL,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eP = (0, l.useMemo)(
                        () =>
                            (0, a.jsx)(A.t, {
                                className: U().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': m.Kq.artist.ARTIST_CARD,
                                children: (0, a.jsxs)('div', {
                                    className: U().coverBlock,
                                    onClick: eC,
                                    children: [
                                        (0, a.jsx)(L.B, {
                                            className: U().image,
                                            src: eu,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eb,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eO,
                                    ],
                                }),
                            }),
                        [eC, eu, eb, t.isAvailable, eO],
                    );
                return (0, a.jsx)(h.MN, {
                    ref: K,
                    className: (0, r.$)(U().root, i),
                    textPosition: 'center',
                    'aria-label': eb,
                    title: (0, a.jsxs)(a.Fragment, {
                        children: [
                            F,
                            (0, a.jsx)(b.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, a.jsx)(O.N, {
                                    className: U().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': eb,
                                    onClick: eC,
                                    'data-test-id': m.Kq.artist.ARTIST_TITLE,
                                    children: ed,
                                }),
                            }),
                            H,
                        ],
                    }),
                    srTitle: (0, a.jsx)(O.N, { className: U().srTitleLink, href: t.url, onClick: eC, children: eb }),
                    contentLinesCount: M,
                    view: eP,
                    'data-test-id': m.Kq.artist.ARTIST_ITEM,
                    children: s,
                });
            });
        },
        37740: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 90387));
        },
        43161: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => Z });
            var a = i(88800),
                r = i(84961),
                s = i(2058),
                l = i(97234),
                n = i(17392),
                o = i(18593),
                c = i(29993),
                d = i(52300),
                u = i(19934),
                m = i(96706),
                _ = i(53548),
                x = i(79390),
                v = i(29595),
                h = i(74965),
                f = i(72288),
                A = i(66943),
                b = i(7555),
                j = i(73170),
                g = i(29504),
                p = i(59304),
                N = i(81877),
                C = i(85074),
                T = i.n(C);
            let k = (e) => {
                let { coverUri: t, title: i, isDisliked: r, closeToast: l } = e,
                    { formatMessage: n } = (0, s.A)(),
                    o = n(r ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, a.jsx)(p.$, {
                    closeToast: l,
                    message: (0, a.jsxs)('div', {
                        className: T().message,
                        children: [
                            (0, a.jsx)(j.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, a.jsx)(b.t, {
                                className: T().cover,
                                radius: 'round',
                                children: (0, a.jsx)(N.B, { className: T().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, a.jsx)(g.HL, { className: T().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var S = i(64207),
                I = i(77455),
                R = i(48749),
                y = i(22505),
                L = i(5407),
                E = i(64284),
                O = i(98427),
                P = i(57934),
                B = i(84384),
                z = i(9618),
                w = i(95210),
                D = i(47964),
                M = i(46936),
                U = i(97956),
                F = i(98953),
                H = i(32721),
                K = i(18130),
                V = i(56117),
                W = i(93091),
                X = i(27817),
                q = i(74064),
                $ = i(15425),
                Y = i(81066),
                J = i(64546);
            let Z = (0, r.PA)((e) => {
                var t, i, r;
                let { artist: b, onOpenChange: j, open: g, ...p } = e,
                    { shouldShowBuySubscriptionModal: N, showBuySubscriptionModal: C } = (0, z.q)(),
                    {
                        settings: { isMobile: T },
                        modals: { artistAboutModal: Z },
                        trailer: G,
                        user: Q,
                        experiments: ee,
                    } = (0, f.g)(),
                    et = (0, I.A)(b),
                    ei = (0, S.K)(b),
                    ea = ((e) => {
                        let { user: t } = (0, f.g)(),
                            { notify: i } = (0, h.l)(),
                            [r, l] = (0, _.useState)(!1),
                            { formatMessage: n } = (0, s.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, a.jsx)(A.h, { error: n({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: v.u.ERROR });
                            if (r) return;
                            let s = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            l(!0);
                            let o = await e.toggleDislike();
                            (l(!1),
                                o === x.f.OK
                                    ? i((0, a.jsx)(k, { coverUri: s.coverUri, title: s.name, isDisliked: s.isDisliked }), { containerId: v.u.INFO })
                                    : i((0, a.jsx)(A.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: v.u.ERROR }));
                        });
                    })(b),
                    er = (0, P.F)(),
                    es = ''.concat(E.U.ARTIST, '-').concat(null == b ? void 0 : b.id),
                    { formatMessage: el } = (0, s.A)(),
                    { utmLink: en } = (0, B.f)({ blockId: E.U.ARTIST, contextType: o.K.Artist, contextId: null == b ? void 0 : b.id }),
                    { shareLink: eo, pathname: ec } = (0, K.b)('/artist/:artistId', { params: { artistId: null != (i = null == b ? void 0 : b.id) ? i : '' } }),
                    ed = (0, R.A)({ entityVariant: M.D.ARTIST, urlParams: { id: null == b ? void 0 : b.id } }),
                    { isPlaying: eu, togglePlay: em } = (0, D.B)({
                        seeds: null != (r = null == b ? void 0 : b.seeds) ? r : [],
                        pageIdForFrom: O.b.RADIO,
                        blockIdForFrom: es,
                        parentContextId: null == b ? void 0 : b.id,
                    }),
                    e_ = (0, L.P)(),
                    ex = el((null == b ? void 0 : b.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    ev = (0, c.c)(() => {
                        if (N && Q.isAuthorized) return void C();
                        eu || em();
                    }),
                    eh = (0, c.c)(() => {
                        if (!e_()) {
                            if (N) return void C();
                            (null == b ? void 0 : b.id) && (G.setUtmLink(en), G.openArtistTrailer(b.id), er(l.DomainObjectType.Artist, b.id));
                        }
                    }),
                    ef = (0, c.c)(() => {
                        Z.open(null == b ? void 0 : b.id);
                    });
                (0, w.N)(g);
                let eA = { variant: F.Y.ARTIST, id: null == b ? void 0 : b.id, title: null == b ? void 0 : b.name, path: ec },
                    eb = ee.checkExperiment(U.z.WebEditorsFeatures, 'on'),
                    ej = null == b || null == (t = b.trailer) ? void 0 : t.isAvailable,
                    eg = ee.checkExperiment(U.z.WebNextArtistInfo, 'on'),
                    ep = !ee.checkExperiment(U.z.WebNextProductWithoutRecommendation, 'on');
                return (0, a.jsxs)(u.W1, {
                    isMobile: T,
                    offsetOptions: 10,
                    open: g,
                    onOpenChange: j,
                    ariaLabel: el({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: n.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...p,
                    children: [
                        eb && (0, a.jsx)(J.WithOffline, { fallback: (0, a.jsx)(y.d, { entityVariant: M.D.ARTIST, adminUrl: ed }) }),
                        !T && (0, a.jsx)(J.WithOffline, { fallback: (0, a.jsx)(X.L, { onClick: et, isPinned: null == b ? void 0 : b.isPinned }) }),
                        (0, a.jsx)(J.WithOffline, {
                            fallback: (0, a.jsx)(W.T, {
                                onClick: ei,
                                isLiked: null == b ? void 0 : b.isLiked,
                                disabled: !Q.isAuthorized || !(null == b ? void 0 : b.isAvailable),
                            }),
                        }),
                        ej && (0, a.jsx)(J.WithOffline, { fallback: (0, a.jsx)($.N, { onClick: eh }) }),
                        ep &&
                            (0, a.jsx)(J.WithOffline, {
                                fallback: (0, a.jsx)(Y.C, { onClick: ev, disabled: !(null == b ? void 0 : b.isAvailable), variant: H.I.ARTIST, onOpenMenuChange: j }),
                            }),
                        (0, a.jsx)(q.H, { disabled: !b, shareLink: eo, entityMeta: eA }),
                        eg &&
                            (0, a.jsx)(J.WithOffline, {
                                fallback: (0, a.jsx)(u.Dr, {
                                    onClick: ef,
                                    icon: (0, a.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': n.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: ex,
                                }),
                            }),
                        (0, a.jsx)(J.WithOffline, {
                            fallback: (0, a.jsx)(V.D, { onClick: ea, isDisliked: null == b ? void 0 : b.isDisliked, disabled: !(null == b ? void 0 : b.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        49343: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => m });
            var a = i(88800),
                r = i(53548),
                s = i(88969),
                l = i(52300),
                n = i(29504),
                o = i(59304),
                c = i(57585),
                d = i.n(c);
            let u = {
                    track: (0, a.jsx)(s.A, { id: 'notifications-info.track-link' }),
                    artist: (0, a.jsx)(s.A, { id: 'notifications-info.artist-link' }),
                    album: (0, a.jsx)(s.A, { id: 'notifications-info.album-link' }),
                    playlist: (0, a.jsx)(s.A, { id: 'notifications-info.playlist-link' }),
                    clip: (0, a.jsx)(s.A, { id: 'notifications-info.clip-link' }),
                    label: (0, a.jsx)(s.A, { id: 'notifications-info.label-link' }),
                    concert: (0, a.jsx)(s.A, { id: 'notifications-info.concert-link' }),
                },
                m = (e) => {
                    let { entityVariant: t, entityTitle: i, closeToast: c } = e,
                        m = (0, r.useMemo)(
                            () =>
                                (0, a.jsxs)(n.HL, {
                                    className: d().message,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: [
                                        u[t],
                                        '\xa0',
                                        (0, a.jsx)(n.HL, { className: d().title, variant: 'span', type: 'controls', size: 'm', lineClamp: 1, children: i }),
                                        '\xa0',
                                        (0, a.jsx)(s.A, { id: 'notifications-info.copied' }),
                                    ],
                                }),
                            [t, i],
                        );
                    return (0, a.jsx)(o.$, {
                        closeToast: c,
                        cover: (0, a.jsx)(l.I, { className: d().icon, size: 'xs', variant: 'chain' }),
                        message: m,
                        coverRadius: 's',
                    });
                };
        },
        50660: (e) => {
            e.exports = {
                root: 'LabelArtistsPage_root__smTJJ',
                scrollContainer: 'LabelArtistsPage_scrollContainer__alDjs',
                important: 'LabelArtistsPage_important__pOZpi',
                shimmerScrollContainer: 'LabelArtistsPage_shimmerScrollContainer__Znpy2',
                footer: 'LabelArtistsPage_footer__JU2P3',
                item: 'LabelArtistsPage_item__kol2m',
                content: 'LabelArtistsPage_content__4hjcX',
                shimmerTitle: 'LabelArtistsPage_shimmerTitle__hXk1g',
            };
        },
        54243: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => n });
            var a = i(88800),
                r = i(4370),
                s = i(15077),
                l = i(42729);
            let n = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, a.jsx)(l.O, {
                    closeToast: i,
                    entityVariant: s.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: r.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        54320: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => d });
            var a = i(88800),
                r = i(53548),
                s = i(29993),
                l = i(9492),
                n = i(29595),
                o = i(74965),
                c = i(74773);
            let d = (e, t) => {
                let { notify: i, dismiss: d } = (0, o.l)(),
                    u = (0, r.useRef)(void 0),
                    m = (0, s.c)(() => {
                        var i;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let a = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            a.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, r.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, a.jsx)(l.L, { reloadBlocks: m }), { containerId: n.u.ERROR, autoClose: !1 }));
                }, [d, m, i, e.rejectedPagesCount]);
            };
        },
        56117: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => d });
            var a = i(88800),
                r = i(84961),
                s = i(88969),
                l = i(17392),
                n = i(52300),
                o = i(19934),
                c = i(72288);
            let d = (0, r.PA)((e) => {
                let { isDisliked: t, onClick: i, disabled: r, className: d } = e,
                    { user: u } = (0, c.g)();
                return (0, a.jsx)(o.Dr, {
                    onClick: i,
                    className: d,
                    icon: (0, a.jsx)(n.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: r || !u.isAuthorized,
                    'data-test-id': l.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, a.jsx)(s.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        57585: (e) => {
            e.exports = { message: 'NotificationCopy_message__zVlYi', icon: 'NotificationCopy_icon__FTmM9', title: 'NotificationCopy_title__UEiU0' };
        },
        64207: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => _ });
            var a = i(88800),
                r = i(96706),
                s = i(53548),
                l = i(2058),
                n = i(79390),
                o = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                m = i(54243);
            let _ = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [_, x] = (0, s.useState)(!1),
                    { formatMessage: v } = (0, l.A)();
                return (0, s.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, a.jsx)(u.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (_) return;
                    let s = { ...(0, r.HO)(e), isLiked: !e.isLiked };
                    x(!0);
                    let l = await e.toggleLike();
                    (x(!1),
                        l === n.f.OK
                            ? i((0, a.jsx)(m.T, { artist: s }), { containerId: o.u.INFO })
                            : i((0, a.jsx)(u.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, _, v, i]);
            };
        },
        64247: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => l });
            var a = i(88800),
                r = i(15077),
                s = i(33719);
            let l = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, a.jsx)(s.k, {
                    closeToast: i,
                    entityVariant: r.c.ARTIST,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.name,
                    isPinned: t.isPinned,
                    radius: 'round',
                });
            };
        },
        74064: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => h });
            var a = i(88800),
                r = i(2058),
                s = i(88969),
                l = i(17392),
                n = i(29993),
                o = i(52300),
                c = i(19934),
                d = i(29595),
                u = i(74965),
                m = i(72288),
                _ = i(98953),
                x = i(64546),
                v = i(49343);
            let h = (e) => {
                let { shareLink: t, entityMeta: i, disabled: h, className: f, iconClassName: A, menuClassName: b, withSubmenu: j = !0, withNotification: g = !0 } = e,
                    { settings: p, shareIframe: N, fullscreenPlayer: C, fullscreenVideoPlayer: T } = (0, m.g)(),
                    { formatMessage: k } = (0, r.A)(),
                    { notify: S } = (0, u.l)(),
                    I = (0, n.c)(async () => {
                        if ((await window.navigator.clipboard.writeText(t), g)) {
                            let e = C.modal.isOpened || (!p.isMobile && T.modal.isOpened);
                            S((0, a.jsx)(v.D, { entityVariant: i.variant, entityTitle: i.title }), { containerId: e ? d.u.FULLSCREEN_INFO : d.u.INFO });
                        }
                    }),
                    R = (0, n.c)(() => {
                        i.id && N.openModal(i);
                    }),
                    y = i.id && i.variant !== _.Y.ARTIST && i.variant !== _.Y.CLIP;
                return j
                    ? (0, a.jsxs)(c.W1, {
                          offsetOptions: 3,
                          isMobile: p.isMobile,
                          className: f,
                          menuClassName: b,
                          label: k({ id: 'interface-actions.share' }),
                          icon: (0, a.jsx)(o.I, { className: A, variant: 'share', size: 'xxs' }),
                          disabled: h,
                          submenuProps: { 'data-test-id': l.S7.CONTEXT_MENU_SHARE },
                          'data-test-id': l.S7.CONTEXT_MENU_SHARE_BUTTON,
                          children: [
                              (0, a.jsx)(c.Dr, {
                                  onClick: I,
                                  icon: (0, a.jsx)(o.I, { variant: 'chain', size: 'xxs' }),
                                  'data-test-id': l.S7.CONTEXT_MENU_SHARE_COPY_LINK_BUTTON,
                                  children: (0, a.jsx)(s.A, { id: 'interface-actions.copy-link' }),
                              }),
                              y &&
                                  (0, a.jsx)(x.WithOffline, {
                                      fallback: (0, a.jsx)(c.Dr, {
                                          onClick: R,
                                          icon: (0, a.jsx)(o.I, { variant: 'code', size: 'xxs' }),
                                          'data-test-id': l.S7.CONTEXT_MENU_SHARE_IFRAME_BUTTON,
                                          children: (0, a.jsx)(s.A, { id: 'interface-actions.copy-iframe' }),
                                      }),
                                  }),
                          ],
                      })
                    : (0, a.jsx)(c.Dr, {
                          className: f,
                          onClick: I,
                          icon: (0, a.jsx)(o.I, { className: A, variant: 'share', size: 'xxs' }),
                          disabled: h,
                          'data-test-id': l.S7.CONTEXT_MENU_SHARE_BUTTON,
                          children: (0, a.jsx)(s.A, { id: 'interface-actions.share' }),
                      });
            };
        },
        77455: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var a = i(88800),
                r = i(96706),
                s = i(53548),
                l = i(2058),
                n = i(29595),
                o = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(64247);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: m } = (0, l.A)(),
                    [_, x] = (0, s.useState)(!1);
                return (0, s.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, a.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (_) return;
                    let s = { ...(0, r.HO)(e), isPinned: !e.isPinned };
                    x(!0);
                    let l = await e.togglePin();
                    (x(!1),
                        l
                            ? i((0, a.jsx)(u.l, { artist: s }), { containerId: n.u.INFO })
                            : i((0, a.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [e, t.isAuthorized, _, m, i]);
            };
        },
        79418: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => h });
            var a = i(88800),
                r = i(65724),
                s = i(61013),
                l = i(53548);
            let n = (e) => {
                    let { style: t, forwardRef: i, context: r, ...s } = e,
                        l = (null == r ? void 0 : r.listAriaLabel) || void 0,
                        n = (null == r ? void 0 : r.listRole) || 'region';
                    return (0, a.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: n, 'aria-label': l, style: { ...t }, ref: i, ...s });
                },
                o = (0, l.forwardRef)((e, t) => (0, a.jsx)(n, { forwardRef: t, ...e }));
            var c = i(16434),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: s, withHeader: l, withForceScroll: n, ...o } = e;
                    return (0, a.jsx)('div', {
                        className: (0, r.$)(d().scroller, { [d().scroller_withFooter]: s, [d().scroller_withHeader]: l, [d().scroller_withForceScroll]: n }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                m = (0, l.forwardRef)((e, t) => (0, a.jsx)(u, { forwardRef: t, ...e }));
            var _ = i(55482),
                x = i(75151);
            let v = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: r,
                            debounceDurationInMs: s = 100,
                            totalCount: n = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [m, v] = (0, l.useState)(null),
                        h = (0, l.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == r || r(e), o.length > 0 && v(e), t && i)) {
                                        let a = Math.floor(e.endIndex / t) + 1,
                                            r = Math.floor(e.startIndex / t);
                                        for (let e = r; e < a; e++) i(e);
                                    }
                                }, s),
                            [s, r, t, i, o],
                        );
                    (0, l.useEffect)(() => {
                        o.length > 0 && m && h(m);
                    }, o);
                    let f = (0, l.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, s);
                    }, [c, s]);
                    return (0, a.jsx)(x.sN, { ref: d, rangeChanged: h, totalCount: n, endReached: f, ...u });
                },
                h = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: n,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: _,
                            listClassName: x,
                            overscan: h = 700,
                            pageSize: f = 20,
                            totalCount: A,
                            totalRequests: b,
                            debounceDurationInMs: j,
                            initialItemCount: g,
                            minInitialItemCount: p = 20,
                            handleRef: N,
                            alwaysShowScrollbar: C = !1,
                            testId: T,
                            isMobileLayout: k = !1,
                            shouldTriggerRangeChangedOn: S,
                            ...I
                        } = e,
                        [R, y] = (0, l.useState)(!1),
                        L = (0, l.useMemo)(
                            () =>
                                (0, s.A)((e) => {
                                    y(e);
                                }, 100),
                            [],
                        ),
                        E = (0, l.useMemo)(() => {
                            var e, t;
                            return k
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : o,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : o,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, b, k]),
                        O = g ? Math.min(g, p) : void 0;
                    return (0, a.jsxs)('div', {
                        className: (0, r.$)(d().root, { [d().root_scrolling]: R || C, [d().root_notScrolling]: !R && !C }, t),
                        'data-test-id': T,
                        children: [
                            k && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, a.jsx)(v, {
                                overscan: h,
                                components: E,
                                listClassName: x,
                                itemClassName: u,
                                isScrolling: L,
                                itemContent: _,
                                scrollerRef: N,
                                totalCount: A,
                                pageSize: f,
                                onPageHandler: n,
                                onRangeHandler: c,
                                debounceDurationInMs: j,
                                initialItemCount: O,
                                shouldTriggerRangeChangedOn: S,
                                ...I,
                            }),
                            k && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        81066: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => x });
            var a = i(88800),
                r = i(84961),
                s = i(53548),
                l = i(88969),
                n = i(17392),
                o = i(52300),
                c = i(19934),
                d = i(73170),
                u = i(72288),
                m = i(52726);
            let _ = {
                    album: (0, a.jsx)(l.A, { id: 'vibe-actions.vibe-by-album' }),
                    artist: (0, a.jsx)(l.A, { id: 'vibe-actions.vibe-by-artist' }),
                    playlist: (0, a.jsx)(l.A, { id: 'vibe-actions.vibe-by-playlist' }),
                    track: (0, a.jsx)(l.A, { id: 'vibe-actions.vibe-by-track' }),
                },
                x = (0, r.PA)((e) => {
                    let { variant: t, className: i, onClick: r, disabled: l, onOpenMenuChange: x } = e,
                        {
                            settings: { isMobile: v },
                            user: h,
                            freeAccess: f,
                        } = (0, u.g)(),
                        A = f.isVibeStartRestricted && !v,
                        b = (0, s.useCallback)(
                            (e) => {
                                let { isPopoverEnabled: s, popoverText: u } = e;
                                return (0, a.jsxs)(c.Dr, {
                                    onClick: r,
                                    disabled: l || s || !h.isAuthorized,
                                    className: i,
                                    icon: (0, a.jsx)(o.I, { variant: 'vibe', size: 'xxs' }),
                                    'data-test-id': n.S7.CONTEXT_MENU_VIBE_BUTTON,
                                    children: [_[t], ' ', (0, a.jsx)(d.q, { children: u })],
                                });
                            },
                            [r, l, i, t, h.isAuthorized],
                        );
                    return (0, a.jsx)(m.S, {
                        isNested: !0,
                        isEnabled: A,
                        placement: 'right',
                        textVariant: 'vibe',
                        vibeTextVariant: t,
                        renderChildren: b,
                        onOpenMenuChange: x,
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
        90387: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => D }));
            var a = i(88800),
                r = i(53548),
                s = i(58390),
                l = i(65724),
                n = i(84961),
                o = i(2058),
                c = i(97234),
                d = i(59724),
                u = i(17392),
                m = i(29993),
                _ = i(29504),
                x = i(32596),
                v = i(21256),
                h = i(69630),
                f = i(98427),
                A = i(46422),
                b = i(44230),
                j = i(37670),
                g = i(34961),
                p = i(53892),
                N = i(72288),
                C = i(54320),
                T = i(86790),
                k = i(60266),
                S = i(93317),
                I = i(37770),
                R = i(79418),
                y = i(64709),
                L = i(50660),
                E = i.n(L);
            let O = (0, n.PA)((e) => {
                let { labelId: t, preloadedLabel: i, preloadedArtists: n } = e,
                    { id: L, name: O, type: P, artistsSubpage: B, reset: z, isNeededToLoad: w, getData: D } = (0, g.s)(p.n.LABEL),
                    {
                        settings: { isMobile: M },
                    } = (0, N.g)(),
                    { formatMessage: U } = (0, o.A)(),
                    { contentScrollRef: F, setContentScrollRef: H } = (0, b.g)(),
                    K = (0, A.W)(),
                    V = U({ id: 'page.label-artists-header' }, { labelName: O }),
                    W = (0, m.c)((e) => {
                        B.getData({ labelId: Number(t), page: e, pageSize: 20 });
                    });
                ((0, C.X)(B.pagesLoader, W),
                    (0, r.useEffect)(
                        () => () => {
                            (z(), B.reset());
                        },
                        [z, B],
                    ),
                    B.isNotFound && (0, s.notFound)(),
                    (0, y.Q)({ id: Number(L), name: null != O ? O : '', type: null != P ? P : '' }, y.T.ARTISTS),
                    (0, j.J)(B.isResolved));
                let X = (0, r.useMemo)(() => ({ Footer: () => (0, a.jsx)(k.A, { children: (0, a.jsx)(T.w, { className: E().footer }) }) }), []),
                    q = U({ id: 'entity-names.label-artists-list' }),
                    $ = [];
                if (
                    (B.isNeededToLoad && $.push(B.getData({ labelId: Number(t), page: 0, pageSize: 20, preloadedArtists: n })),
                    w && $.push(D({ labelId: Number(t), preloadedLabel: i, withLabelEntities: !1 })),
                    $.length && (0, r.use)(Promise.allSettled($)),
                    B.isRejected && !B.isNotFound)
                )
                    return (0, a.jsx)(x.SomethingWentWrong, {});
                let Y = B.isShimmerVisible ? 20 : B.totalCount;
                return (0, a.jsx)(d.a, {
                    pageId: c.AppScreen.LabelArtists,
                    pageIdForFrom: f.b.LABEL_ARTISTS,
                    children: (0, a.jsx)(h.h, {
                        scrollElement: F,
                        outerTitle: V,
                        children: (0, a.jsxs)('div', {
                            className: E().root,
                            'data-test-id': u.Xk.label.LABEL_ARTISTS_PAGE,
                            children: [
                                (0, a.jsx)(S.Y, {
                                    variant: S.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: K.canBack,
                                    className: E().header,
                                    children: (0, a.jsx)(_.DZ, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: V }),
                                }),
                                (0, a.jsx)(R.$, {
                                    className: (0, l.$)(E().scrollContainer, E().important),
                                    listClassName: E().content,
                                    itemClassName: E().item,
                                    customComponents: X,
                                    itemContentCallback: (e) => {
                                        let t = B.items[e],
                                            i = U({ id: 'loading-messages.entity-is-loading' }, { entityName: U({ id: 'entity-names.artist' }) });
                                        return t
                                            ? (0, a.jsx)(v.a, { artist: t, contentLinesCount: 4 }, t.id)
                                            : (0, a.jsx)(I.V, { 'aria-label': i, round: !0, centered: !0, linesCount: 4 });
                                    },
                                    totalCount: Y,
                                    initialItemCount: Y,
                                    onGetDataByPage: W,
                                    pageSize: 20,
                                    totalRequests: B.requestsCount,
                                    handleRef: H,
                                    context: { listAriaLabel: q },
                                    isMobileLayout: M,
                                    useWindowScroll: M,
                                }),
                            ],
                        }),
                    }),
                });
            });
            var P = i(19994),
                B = i(1698);
            let z = () => {
                let e = (0, A.W)(),
                    { formatMessage: t } = (0, o.A)(),
                    i = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.artist' }) });
                return (0, a.jsx)(h.h, {
                    scrollElement: null,
                    children: (0, a.jsxs)('div', {
                        className: E().root,
                        children: [
                            (0, a.jsx)(S.Y, {
                                variant: S.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: e.canBack,
                                children: (0, a.jsx)(P.W, { className: E().shimmerTitle, radius: 'l' }),
                            }),
                            (0, a.jsx)('div', {
                                className: (0, l.$)(E().scrollContainer, E().important, E().shimmerScrollContainer),
                                children: (0, a.jsx)('div', {
                                    className: E().content,
                                    children: (0, a.jsx)(B.e, {
                                        isActive: !0,
                                        itemClassName: E().item,
                                        'aria-label': i,
                                        round: !0,
                                        centered: !0,
                                        linesCount: 4,
                                        count: 20,
                                    }),
                                }),
                            }),
                        ],
                    }),
                });
            };
            var w = i(21438);
            let D = () => {
                let e = (0, s.useSearchParams)().get('labelId');
                return ((e && (0, w.L)(e)) || (0, s.notFound)(), (0, a.jsx)(r.Suspense, { fallback: (0, a.jsx)(z, {}), children: (0, a.jsx)(O, { labelId: e }) }));
            };
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
        98953: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => a });
            var a = (function (e) {
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
    },
    (e) => {
        (e.O(
            0,
            [
                9904, 7191, 3078, 1191, 8194, 8655, 8917, 6706, 4771, 1311, 2662, 6904, 1898, 2058, 3578, 8628, 4378, 9780, 8283, 9332, 5151, 9202, 4732, 9087, 3979,
                1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 6374, 2088, 8466, 763, 2670, 7358,
            ],
            () => e((e.s = 37740)),
        ),
            (_N_E = e.O()));
    },
]);
