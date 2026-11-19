(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9029],
    {
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
            i.d(t, { L: () => _ });
            var a = i(88800),
                r = i(65724),
                s = i(53548),
                n = i(2058),
                l = i(88969),
                o = i(96817),
                c = i(52300),
                d = i(29504),
                u = i(59304),
                m = i(4044),
                x = i.n(m);
            let _ = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    m = (0, s.useRef)(null),
                    { formatMessage: _ } = (0, n.A)();
                (0, s.useEffect)(() => {
                    var e;
                    null == (e = m.current) || e.focus();
                }, []);
                let v = (0, s.useMemo)(
                    () =>
                        (0, a.jsxs)('div', {
                            className: x().message,
                            children: [
                                (0, a.jsx)(d.HL, {
                                    className: x().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, a.jsx)(l.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, a.jsx)(o.$, {
                                    ref: m,
                                    className: x().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': _({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, a.jsx)(c.I, { variant: 'reset', size: 'xxs', className: x().icon }),
                                }),
                            ],
                        }),
                    [_, t],
                );
                return (0, a.jsx)(u.$, { className: (0, r.$)(x().root, x().important), message: v, closeToast: i });
            };
        },
        10270: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => c });
            var a = i(56949),
                r = i(53548),
                s = i(29993),
                n = i(44230),
                l = i(72288);
            let o = { width: 400, height: 400 },
                c = (e) => {
                    let { count: t, getEstimateSize: i, getItemKey: c, gap: d, containerRef: u, overscan: m = 2, useVirtualizerMeasurement: x } = e,
                        {
                            settings: { isMobile: _ },
                        } = (0, l.g)(),
                        { contentScrollRef: v } = (0, n.g)(),
                        p = (0, r.useRef)(new Map()),
                        g = (0, r.useRef)(void 0),
                        h = {
                            count: t,
                            gap: d,
                            getItemKey: c,
                            estimateSize: (e) => {
                                let t = p.current.get(String(e));
                                return null != t ? t : i(e);
                            },
                            overscan: m,
                            initialRect: o,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, i, a) => {
                                if (!t) return 0;
                                let r = t.getBoundingClientRect().top;
                                return e && 1 ? r + window.scrollY : !e && i ? r - (a ? i.getBoundingClientRect().top + i.clientTop : 0) + i.scrollTop : 0;
                            })(_, u, v, x),
                        },
                        f = (0, a.XW)(h),
                        A = (0, a.Te)({ ...h, getScrollElement: () => v, initialOffset: null == v ? void 0 : v.scrollTop }),
                        N = _ ? f : A;
                    x &&
                        (N.shouldAdjustScrollPositionOnItemSizeChange = (e) => {
                            let { scrollElement: t } = N;
                            if (!t) return !1;
                            let i = 'scrollY' in t ? t.scrollY : t.scrollTop;
                            return e.start < i && e.end <= i;
                        });
                    let T = (0, s.c)(() => {
                        N.measure();
                    });
                    return (
                        (0, r.useEffect)(() => {
                            x ||
                                g.current ||
                                (g.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    (e.forEach((e) => {
                                        let i = e.target.getAttribute('data-index');
                                        if (e.target && i) {
                                            let a = e.contentRect.height;
                                            a && a !== p.current.get(i) && (p.current.set(i, e.contentRect.height), (t = !0));
                                        }
                                    }),
                                        t && T());
                                }));
                        }, [T, x]),
                        { virtualizer: N, resizeObserver: g.current }
                    );
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
        15324: (e) => {
            e.exports = { root: 'VirtualGrid_root__nSEzJ', column: 'VirtualGrid_column__P8hJp', row: 'VirtualGrid_row__PL5V_' };
        },
        18130: (e, t, i) => {
            'use strict';
            (i.d(t, { b: () => c }), i(30282));
            var a = i(35412),
                r = i(4086),
                s = i(41928),
                n = i(72131),
                l = (function (e) {
                    return ((e.SOURCE = 'utm_source'), (e.MEDIUM = 'utm_medium'), e);
                })(l || {});
            let o = { utm_source: 'desktop', utm_medium: 'copy_link' },
                c = function (e) {
                    for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++) i[l - 1] = arguments[l];
                    let [c] = i,
                        { params: d } = null != c ? c : {},
                        u = { ...o, ...(null == c ? void 0 : c.query) },
                        m = (0, s.N)().get(r.V4),
                        x = (0, n._)(m.webHost),
                        { href: _ } = (0, a.no)(String(e), { params: d, query: u, options: { host: 'https://'.concat(x) } }),
                        { href: v } = (0, a.no)(String(e), { params: d, query: u });
                    return { shareLink: _, pathname: v };
                };
        },
        21256: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => F });
            var a = i(88800),
                r = i(65724),
                s = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(97234),
                c = i(91177),
                d = i(70598),
                u = i(46482),
                m = i(17392),
                x = i(18593),
                _ = i(29993),
                v = i(79070),
                p = i(29832),
                g = i(52300),
                h = i(7555),
                f = i(29504),
                A = i(91959),
                N = i(64207),
                T = i(77455),
                C = i(5407),
                k = i(57934),
                E = i(84384),
                j = i(4795),
                R = i(78940),
                I = i(55693),
                b = i(39079),
                O = i(72288),
                y = i(81877),
                S = i(49738),
                L = i(91292),
                P = i(56862),
                M = i(16704),
                D = i(56446),
                z = i(36207),
                w = i(43161),
                B = i(93434),
                U = i.n(B);
            let F = (0, s.PA)((e) => {
                let { artist: t, className: i, children: s, contentLinesCount: B, topTitleElement: F, bottomTitleElement: H } = e,
                    Y = (0, c.D)(),
                    {
                        trailer: X,
                        user: G,
                        paywall: { modal: W },
                    } = (0, O.g)(),
                    { from: K, utmLink: V } = (0, E.f)({ contextId: t.id, contextType: x.K.Artist }),
                    { formatMessage: $ } = (0, l.A)(),
                    [q, J] = (0, n.useState)(!1),
                    [Z, Q] = (0, n.useState)(!1),
                    [ee, et] = (0, n.useState)(!1),
                    { sendLikeSearchFeedback: ei, sendNavigateSearchFeedback: ea, sendPlaySearchFeedback: er } = (0, I.z)(),
                    es = (0, d.S)(),
                    en = (0, u.g)(),
                    el = (0, N.K)(t),
                    eo = (0, T.A)(t),
                    { id: ec, name: ed, coverUri: eu, isLiked: em } = t,
                    ex = (0, R.Z)(t.url),
                    [e_, ev] = (0, n.useState)(!1),
                    ep = (0, k.F)(),
                    eg = (0, C.P)(),
                    eh = (0, _.c)((e) => {
                        if ((e.stopPropagation(), eg())) return void e.preventDefault();
                        (X.openArtistTrailer(t.id), ep(o.DomainObjectType.Artist, t.id));
                    }),
                    ef = (0, n.useMemo)(() => {
                        let e = $({ id: 'entity-names.artist-name' }, { artistName: ed }),
                            t = em ? $({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [ed, em, $]),
                    { isPlaying: eA, togglePlay: eN } = (0, b.D)({
                        playContextParams: { contextData: { type: x.K.Artist, meta: { id: Number(ec) }, from: K, utmLink: V }, loadContextMeta: !0 },
                    }),
                    eT = (0, A.S)({ artist: t, callback: ex }),
                    eC = (0, A.S)({ artist: t, callback: eN }),
                    ek = (0, _.c)((e) => {
                        (null == ea || ea(), es({ to: o.AppScreen.ArtistScreen }), eT(e));
                    }),
                    eE = (0, j.N)(),
                    ej = (0, _.c)(() => {
                        if (!eg()) {
                            if (eE) return void W.open();
                            (q || eA || (J(!0), null == er || er()), eC(), eA || en());
                        }
                    }),
                    eR = (0, _.c)(() => {
                        (Z || em || (Q(!0), null == ei || ei()), el());
                    }),
                    eI = (0, _.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eb = (0, _.c)((e) => {
                        (et(e), ev(e));
                    }),
                    eO = (0, n.useMemo)(
                        () =>
                            (0, a.jsx)(
                                w.g,
                                {
                                    artist: t,
                                    onOpenChange: eb,
                                    open: ee,
                                    onClick: eI,
                                    className: (0, r.$)(U().menuButton, U().control),
                                    size: 's',
                                    icon: (0, a.jsx)(g.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': m.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eI, eb, ee],
                    ),
                    ey = (0, n.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, a.jsx)(
                                z.n,
                                {
                                    children: (0, a.jsx)(D.k, {
                                        className: (0, r.$)(U().trailerButton, U().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: eh,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, eh]),
                    eS = (0, n.useMemo)(
                        () =>
                            (0, a.jsx)(
                                P.O,
                                { onClick: eo, isPinned: t.isPinned, className: (0, r.$)(U().pinButton, U().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, eo],
                    ),
                    eL = (0, v.L)(() => {
                        if (t.isAvailable)
                            return (0, a.jsx)(
                                p.hg,
                                {
                                    isVisible: ee || e_,
                                    className: U().controls,
                                    radius: 'round',
                                    playControl: (0, a.jsx)(
                                        M.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, r.$)(U().playButton, U().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: ej,
                                            isPlaying: eA,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, a.jsx)(
                                        S.c,
                                        {
                                            className: (0, r.$)(U().likeButton, U().control),
                                            isLiked: em,
                                            onClick: eR,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !G.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eO,
                                    pinControl: eS,
                                    trailerControl: ey,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eP = (0, n.useMemo)(
                        () =>
                            (0, a.jsx)(h.t, {
                                className: U().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': m.Kq.artist.ARTIST_CARD,
                                children: (0, a.jsxs)('div', {
                                    className: U().coverBlock,
                                    onClick: ek,
                                    children: [
                                        (0, a.jsx)(y.B, {
                                            className: U().image,
                                            src: eu,
                                            size: 200,
                                            fit: 'cover',
                                            alt: ef,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eL,
                                    ],
                                }),
                            }),
                        [ek, eu, ef, t.isAvailable, eL],
                    );
                return (0, a.jsx)(p.MN, {
                    ref: Y,
                    className: (0, r.$)(U().root, i),
                    textPosition: 'center',
                    'aria-label': ef,
                    title: (0, a.jsxs)(a.Fragment, {
                        children: [
                            F,
                            (0, a.jsx)(f.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, a.jsx)(L.N, {
                                    className: U().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': ef,
                                    onClick: ek,
                                    'data-test-id': m.Kq.artist.ARTIST_TITLE,
                                    children: ed,
                                }),
                            }),
                            H,
                        ],
                    }),
                    srTitle: (0, a.jsx)(L.N, { className: U().srTitleLink, href: t.url, onClick: ek, children: ef }),
                    contentLinesCount: B,
                    view: eP,
                    'data-test-id': m.Kq.artist.ARTIST_ITEM,
                    children: s,
                });
            });
        },
        21576: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => u });
            var a = i(88800),
                r = i(84961),
                s = i(53548),
                n = i(50408),
                l = i(47969),
                o = i(53360),
                c = i(15324),
                d = i.n(c);
            let u = (0, r.PA)((e) => {
                let {
                        count: t,
                        rowGap: i,
                        columnGap: r,
                        getEstimateRowSize: c,
                        minColumnCount: u = 2,
                        minColumnWidth: m,
                        maxColumnWidth: x,
                        maxColumnCount: _,
                        renderItemByIndex: v,
                        onChangeRange: p,
                    } = e,
                    [g, h] = (0, n.d)(),
                    {
                        virtualizer: f,
                        rowResizeObserver: A,
                        columnCount: N,
                        indices: T,
                    } = (0, l.L)({
                        count: t,
                        rowGap: i,
                        columnGap: r,
                        getEstimateRowSize: c,
                        minColumnCount: u,
                        minColumnWidth: m,
                        maxColumnWidth: x,
                        maxColumnCount: _,
                        containerRef: g,
                    });
                (0, s.useEffect)(() => {
                    !f.isScrolling && f.range && (null == p || p(f.range, N));
                }, [p, f.isScrolling, f.range, N]);
                let C = { '--virtual-grid-height': ''.concat(f.getTotalSize(), 'px'), '--virtual-grid-column-count': N, '--virtual-grid-column-gap': ''.concat(r, 'px') };
                return (0, a.jsx)('div', {
                    ref: h,
                    style: C,
                    className: d().root,
                    children: f
                        .getVirtualItems()
                        .map((e) =>
                            (0, a.jsx)(
                                o.U,
                                {
                                    className: d().row,
                                    columnClassName: d().column,
                                    virtualItem: e,
                                    resizeObserver: A,
                                    indices: T,
                                    renderItemByIndex: v,
                                    scrollMargin: f.options.scrollMargin,
                                },
                                e.key,
                            ),
                        ),
                });
            });
        },
        25354: (e, t, i) => {
            'use strict';
            i.d(t, { El: () => l, I7: () => o, K$: () => n, cM: () => d, fZ: () => r, tA: () => s, vX: () => a, xi: () => c });
            let a = 16,
                r = 16,
                s = 315,
                n = 170,
                l = 270,
                o = 7,
                c = 30,
                d = 30;
        },
        29201: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r });
            var a = i(35396);
            let r = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, a.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        35396: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { C: () => s }),
                (function (e) {
                    // for PulseSync: BEGIN substituted-track enum extension
                    ((e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        ((e.EXCLAMATION_ICON = 'exclamationIcon'), (e.SUBSTITUTED_ICON = 'substitutedIcon')));
                    // for PulseSync: END substituted-track enum extension
                })(a || (a = {})));
            let r = new Set(Object.values(a)),
                s = (e) => 'string' == typeof e && r.has(e);
        },
        43161: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => J });
            var a = i(88800),
                r = i(84961),
                s = i(2058),
                n = i(97234),
                l = i(17392),
                o = i(18593),
                c = i(29993),
                d = i(52300),
                u = i(19934),
                m = i(96706),
                x = i(53548),
                _ = i(79390),
                v = i(29595),
                p = i(74965),
                g = i(72288),
                h = i(66943),
                f = i(7555),
                A = i(73170),
                N = i(29504),
                T = i(59304),
                C = i(81877),
                k = i(85074),
                E = i.n(k);
            let j = (e) => {
                let { coverUri: t, title: i, isDisliked: r, closeToast: n } = e,
                    { formatMessage: l } = (0, s.A)(),
                    o = l(r ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, a.jsx)(T.$, {
                    closeToast: n,
                    message: (0, a.jsxs)('div', {
                        className: E().message,
                        children: [
                            (0, a.jsx)(A.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, a.jsx)(f.t, {
                                className: E().cover,
                                radius: 'round',
                                children: (0, a.jsx)(C.B, { className: E().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, a.jsx)(N.HL, { className: E().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var R = i(64207),
                I = i(77455),
                b = i(48749),
                O = i(22505),
                y = i(5407),
                S = i(64284),
                L = i(98427),
                P = i(57934),
                M = i(84384),
                D = i(9618),
                z = i(95210),
                w = i(47964),
                B = i(46936),
                U = i(97956),
                F = i(98953),
                H = i(32721),
                Y = i(18130),
                X = i(56117),
                G = i(93091),
                W = i(27817),
                K = i(74064),
                V = i(15425),
                $ = i(81066),
                q = i(64546);
            let J = (0, r.PA)((e) => {
                var t, i, r;
                let { artist: f, onOpenChange: A, open: N, ...T } = e,
                    { shouldShowBuySubscriptionModal: C, showBuySubscriptionModal: k } = (0, D.q)(),
                    {
                        settings: { isMobile: E },
                        modals: { artistAboutModal: J },
                        trailer: Z,
                        user: Q,
                        experiments: ee,
                    } = (0, g.g)(),
                    et = (0, I.A)(f),
                    ei = (0, R.K)(f),
                    ea = ((e) => {
                        let { user: t } = (0, g.g)(),
                            { notify: i } = (0, p.l)(),
                            [r, n] = (0, x.useState)(!1),
                            { formatMessage: l } = (0, s.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, a.jsx)(h.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: v.u.ERROR });
                            if (r) return;
                            let s = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            n(!0);
                            let o = await e.toggleDislike();
                            (n(!1),
                                o === _.f.OK
                                    ? i((0, a.jsx)(j, { coverUri: s.coverUri, title: s.name, isDisliked: s.isDisliked }), { containerId: v.u.INFO })
                                    : i((0, a.jsx)(h.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: v.u.ERROR }));
                        });
                    })(f),
                    er = (0, P.F)(),
                    es = ''.concat(S.U.ARTIST, '-').concat(null == f ? void 0 : f.id),
                    { formatMessage: en } = (0, s.A)(),
                    { utmLink: el } = (0, M.f)({ blockId: S.U.ARTIST, contextType: o.K.Artist, contextId: null == f ? void 0 : f.id }),
                    { shareLink: eo, pathname: ec } = (0, Y.b)('/artist/:artistId', { params: { artistId: null != (i = null == f ? void 0 : f.id) ? i : '' } }),
                    ed = (0, b.A)({ entityVariant: B.D.ARTIST, urlParams: { id: null == f ? void 0 : f.id } }),
                    { isPlaying: eu, togglePlay: em } = (0, w.B)({
                        seeds: null != (r = null == f ? void 0 : f.seeds) ? r : [],
                        pageIdForFrom: L.b.RADIO,
                        blockIdForFrom: es,
                        parentContextId: null == f ? void 0 : f.id,
                    }),
                    ex = (0, y.P)(),
                    e_ = en((null == f ? void 0 : f.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    ev = (0, c.c)(() => {
                        if (C && Q.isAuthorized) return void k();
                        eu || em();
                    }),
                    ep = (0, c.c)(() => {
                        if (!ex()) {
                            if (C) return void k();
                            (null == f ? void 0 : f.id) && (Z.setUtmLink(el), Z.openArtistTrailer(f.id), er(n.DomainObjectType.Artist, f.id));
                        }
                    }),
                    eg = (0, c.c)(() => {
                        J.open(null == f ? void 0 : f.id);
                    });
                (0, z.N)(N);
                let eh = { variant: F.Y.ARTIST, id: null == f ? void 0 : f.id, title: null == f ? void 0 : f.name, path: ec },
                    ef = ee.checkExperiment(U.z.WebEditorsFeatures, 'on'),
                    eA = null == f || null == (t = f.trailer) ? void 0 : t.isAvailable,
                    eN = ee.checkExperiment(U.z.WebNextArtistInfo, 'on'),
                    eT = !ee.checkExperiment(U.z.WebNextProductWithoutRecommendation, 'on');
                return (0, a.jsxs)(u.W1, {
                    isMobile: E,
                    offsetOptions: 10,
                    open: N,
                    onOpenChange: A,
                    ariaLabel: en({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: l.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...T,
                    children: [
                        ef && (0, a.jsx)(q.WithOffline, { fallback: (0, a.jsx)(O.d, { entityVariant: B.D.ARTIST, adminUrl: ed }) }),
                        !E && (0, a.jsx)(q.WithOffline, { fallback: (0, a.jsx)(W.L, { onClick: et, isPinned: null == f ? void 0 : f.isPinned }) }),
                        (0, a.jsx)(q.WithOffline, {
                            fallback: (0, a.jsx)(G.T, {
                                onClick: ei,
                                isLiked: null == f ? void 0 : f.isLiked,
                                disabled: !Q.isAuthorized || !(null == f ? void 0 : f.isAvailable),
                            }),
                        }),
                        eA && (0, a.jsx)(q.WithOffline, { fallback: (0, a.jsx)(V.N, { onClick: ep }) }),
                        eT &&
                            (0, a.jsx)(q.WithOffline, {
                                fallback: (0, a.jsx)($.C, { onClick: ev, disabled: !(null == f ? void 0 : f.isAvailable), variant: H.I.ARTIST, onOpenMenuChange: A }),
                            }),
                        (0, a.jsx)(K.H, { disabled: !f, shareLink: eo, entityMeta: eh }),
                        eN &&
                            (0, a.jsx)(q.WithOffline, {
                                fallback: (0, a.jsx)(u.Dr, {
                                    onClick: eg,
                                    icon: (0, a.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': l.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: e_,
                                }),
                            }),
                        (0, a.jsx)(q.WithOffline, {
                            fallback: (0, a.jsx)(X.D, { onClick: ea, isDisliked: null == f ? void 0 : f.isDisliked, disabled: !(null == f ? void 0 : f.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        47969: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => c });
            var a = i(35802),
                r = i(79070),
                s = i(61013),
                n = i(53548);
            let l = (e) => {
                let { minColumnWidth: t, maxColumnWidth: i, containerWidth: a, totalCount: r, columnGap: s, minColumnCount: n, maxColumnCount: l } = e,
                    o = Math.max(1, Math.floor((a + s) / (t + s))),
                    c = Math.max(n, Math.floor((a + s) / ((i + t) * 0.5 + s)));
                for (let e = n; e <= o; e++) {
                    let r = (a - (e - 1) * s) / e;
                    if (r >= t && r <= i) {
                        c = e;
                        break;
                    }
                }
                return { rowCount: Math.ceil(r / (c = l ? Math.min(c, l) : c)), columnCount: c };
            };
            var o = i(10270);
            let c = (e) => {
                let {
                        count: t,
                        getEstimateRowSize: i,
                        rowGap: c,
                        columnGap: d,
                        minColumnWidth: u,
                        maxColumnWidth: m,
                        minColumnCount: x,
                        maxColumnCount: _,
                        containerRef: v,
                    } = e,
                    { rowCount: p, columnCount: g } = ((e) => {
                        let { containerRef: t, minColumnCount: i, maxColumnWidth: a, minColumnWidth: r, totalCount: o, columnGap: c, maxColumnCount: d } = e,
                            [u, m] = (0, n.useState)({ rowCount: 0, columnCount: 0 }),
                            x = (0, n.useRef)(null),
                            _ = (0, n.useMemo)(
                                () =>
                                    (0, s.A)(
                                        (e) => {
                                            m(
                                                l({
                                                    minColumnWidth: r,
                                                    maxColumnWidth: a,
                                                    containerWidth: e.contentRect.width,
                                                    totalCount: o,
                                                    columnGap: c,
                                                    minColumnCount: i,
                                                    maxColumnCount: d,
                                                }),
                                            );
                                        },
                                        100,
                                        { trailing: !0 },
                                    ),
                                [c, d, a, i, r, o],
                            );
                        return (
                            (0, n.useLayoutEffect)(
                                () => (
                                    x.current && x.current.disconnect(),
                                    (x.current = new ResizeObserver((e) => {
                                        e.forEach(_);
                                    })),
                                    t &&
                                        (m(
                                            l({
                                                minColumnWidth: r,
                                                maxColumnWidth: a,
                                                containerWidth: t.getBoundingClientRect().width,
                                                totalCount: o,
                                                columnGap: c,
                                                minColumnCount: i,
                                                maxColumnCount: d,
                                            }),
                                        ),
                                        x.current.observe(t)),
                                    () => {
                                        var e;
                                        null == (e = x.current) || e.disconnect();
                                    }
                                ),
                                [c, t, _, d, a, i, r, o],
                            ),
                            u
                        );
                    })({ totalCount: t, columnGap: null != d ? d : 0, minColumnCount: x, maxColumnWidth: m, minColumnWidth: u, maxColumnCount: _, containerRef: v }),
                    { virtualizer: h, resizeObserver: f } = (0, o.r)({ count: p, getEstimateSize: i, gap: c, containerRef: v, useVirtualizerMeasurement: !1 }),
                    A = (0, a.A)(
                        Array.from({ length: t }, (e, t) => t),
                        g,
                    ),
                    N = (0, r.L)(() => {
                        var e, t;
                        if (!h.range) return null;
                        let i = null == (e = A[h.range.startIndex]) ? void 0 : e.at(0),
                            a = null == (t = A[h.range.endIndex]) ? void 0 : t.at(-1);
                        return void 0 !== i && void 0 !== a ? { startIndex: i, endIndex: a } : null;
                    });
                return { virtualizer: h, rowResizeObserver: f, indices: A, columnCount: g, visibleRange: N };
            };
        },
        49343: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => m });
            var a = i(88800),
                r = i(53548),
                s = i(88969),
                n = i(52300),
                l = i(29504),
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
                                (0, a.jsxs)(l.HL, {
                                    className: d().message,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: [
                                        u[t],
                                        '\xa0',
                                        (0, a.jsx)(l.HL, { className: d().title, variant: 'span', type: 'controls', size: 'm', lineClamp: 1, children: i }),
                                        '\xa0',
                                        (0, a.jsx)(s.A, { id: 'notifications-info.copied' }),
                                    ],
                                }),
                            [t, i],
                        );
                    return (0, a.jsx)(o.$, {
                        closeToast: c,
                        cover: (0, a.jsx)(n.I, { className: d().icon, size: 'xs', variant: 'chain' }),
                        message: m,
                        coverRadius: 's',
                    });
                };
        },
        51516: (e) => {
            e.exports = { root: 'VirtualGridRow_root___UfbI' };
        },
        53360: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => c });
            var a = i(88800),
                r = i(65724),
                s = i(84961),
                n = i(53548),
                l = i(51516),
                o = i.n(l);
            let c = (0, s.PA)((e) => {
                let { indices: t, virtualItem: i, renderItemByIndex: s, columnClassName: l, className: c, resizeObserver: d, scrollMargin: u } = e,
                    m = (0, n.useRef)(null),
                    x = t[i.index],
                    _ = { '--virtual-grid-row-vertical-offset': ''.concat(i.start - u, 'px') };
                return (
                    (0, n.useEffect)(() => {
                        let e = m.current;
                        if (e)
                            return (
                                null == d || d.observe(e),
                                () => {
                                    null == d || d.unobserve(e);
                                }
                            );
                    }, [d]),
                    (0, a.jsx)('div', {
                        'data-index': i.index,
                        ref: m,
                        style: _,
                        className: (0, r.$)(o().root, c),
                        children: null == x ? void 0 : x.map((e, t) => (0, a.jsx)('div', { className: l, children: s(e, i.index, t) }, ''.concat(i.key, '_').concat(e))),
                    })
                );
            });
        },
        54099: (e) => {
            e.exports = {
                root: 'GenreArtistsPage_root__PgtIz',
                container: 'GenreArtistsPage_container__NruTu',
                shimmerTitle: 'GenreArtistsPage_shimmerTitle__K2uY9',
                footer: 'GenreArtistsPage_footer__fYaCO',
            };
        },
        54243: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => l });
            var a = i(88800),
                r = i(4370),
                s = i(15077),
                n = i(42729);
            let l = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, a.jsx)(n.O, {
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
                n = i(9492),
                l = i(29595),
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
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, a.jsx)(n.L, { reloadBlocks: m }), { containerId: l.u.ERROR, autoClose: !1 }));
                }, [d, m, i, e.rejectedPagesCount]);
            };
        },
        55470: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => K }));
            var a = i(88800),
                r = i(53548),
                s = i(58390),
                n = i(84961),
                l = i(2058),
                o = i(97234),
                c = i(59724),
                d = i(17392),
                u = i(29993),
                m = i(66719),
                x = i(29504),
                _ = i(32596),
                v = i(21256),
                p = i(69630),
                g = i(21576),
                h = i(98427),
                f = i(46422),
                A = i(44230),
                N = i(37670),
                T = i(34961),
                C = i(53892),
                k = i(54320),
                E = i(86790),
                j = i(60266),
                R = i(93317),
                I = i(37770),
                b = i(25354),
                O = i(30144),
                y = i(72288),
                S = i(324),
                L = i(46511),
                P = i(13012),
                M = i(57297),
                D = i(2218),
                z = i(77863),
                w = i(45383),
                B = i(40883);
            async function U(e, t) {
                let { locale: i, fullUrl: a, url: r, tld: s, host: n } = t,
                    l = await (0, L.W)(i),
                    o = e.title.fullTitle,
                    c = l({ id: 'metadata.genre-title' }, { genreTitle: o }),
                    d = 'artists' in e ? e.artists : void 0,
                    u = (0, B.f)({ genreTitle: o, artists: d, messageFormatter: l }),
                    m = new URL(''.concat('', '/meta/og-image.png'), 'https://'.concat(n)).href;
                return {
                    title: c,
                    description: u,
                    openGraph: (0, M.i)({
                        ogTitle: (0, P.N)(o),
                        ogDescription: u,
                        fullUrl: null != a ? a : '',
                        locale: i,
                        siteName: l({ id: 'metadata.yandex-music' }),
                        ogImage: m,
                    }),
                    twitter: (0, D.H)({ cardType: z.W.APP, title: c, url: null != r ? r : '', appName: l({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, S.X)({
                        additional: { tld: s, url: null != r ? r : '', fullUrl: null != a ? a : '', host: n },
                        appName: l({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, w.S)('/genre/:metatagId/artists', t.tld, { params: { metatagId: e.id } }),
                };
            }
            var F = i(59918),
                H = i(54099),
                Y = i.n(H);
            let X = (0, n.PA)((e) => {
                let { metatagId: t, preloadedMeta: i } = e,
                    { artistsSubpage: n } = (0, T.s)(C.n.GENRE),
                    { formatMessage: S } = (0, l.A)(),
                    { contentScrollRef: L, setContentScrollRef: P } = (0, A.g)(),
                    M = (0, f.W)(),
                    D = (0, u.c)(() => b.tA),
                    z = (0, u.c)(() => (n.isShimmerVisible ? b.xi : n.totalCount)),
                    w = (0, r.useCallback)(
                        (e) => {
                            t && n.getData({ metatagId: t, page: e, pageSize: b.cM });
                        },
                        [n, t],
                    ),
                    B = ((e) => {
                        let { pageSize: t, callback: i } = e;
                        return (0, u.c)((e, a) => {
                            if (!i) return;
                            let r = Math.floor((e.startIndex * a) / t),
                                s = Math.ceil((e.endIndex * a) / t);
                            for (let e = r; e <= s; e++) i(e);
                        });
                    })({ pageSize: b.cM, callback: w });
                (0, k.X)(n.pagesLoader, w);
                let H = (0, u.c)((e) => {
                    let t = n.items[e],
                        i = S({ id: 'loading-messages.entity-is-loading' }, { entityName: S({ id: 'entity-names.artist' }) });
                    return t ? (0, a.jsx)(v.a, { artist: t, contentLinesCount: 3 }, t.id) : (0, a.jsx)(I.V, { 'aria-label': i, round: !0, centered: !0 });
                });
                return ((0, r.useEffect)(
                    () => () => {
                        n.reset();
                    },
                    [n],
                ),
                n.isNotFound && (0, s.notFound)(),
                (0, N.J)(n.isResolved),
                ((e) => {
                    let { fullscreenVideoPlayer: t } = (0, y.g)(),
                        i = null == e ? void 0 : e.fullTitle,
                        a = null == e ? void 0 : e.isResolved,
                        s = null == e ? void 0 : e.pagesLoader.isInitialRequestRejected,
                        n = (0, r.useCallback)(
                            (t) =>
                                s
                                    ? {}
                                    : e && a && i
                                      ? U(
                                            ((e) => {
                                                var t, i, a;
                                                return {
                                                    id: '',
                                                    title: { title: '', fullTitle: e.fullTitle || '' },
                                                    artists: e.items.map((e) => ({ artist: (0, F.N)(e), popularTracks: [] })),
                                                    pager: {
                                                        page: (null == (t = e.pagesLoader.pager) ? void 0 : t.page) || 0,
                                                        perPage: (null == (i = e.pagesLoader.pager) ? void 0 : i.perPage) || 0,
                                                        total: (null == (a = e.pagesLoader.pager) ? void 0 : a.total) || 0,
                                                    },
                                                };
                                            })(e),
                                            t,
                                        )
                                      : void 0,
                            [e, i, a, s],
                        );
                    (0, O.C)(t.modal.isOpened ? null : n);
                })(n),
                t && n.isNeededToLoad && (0, r.use)(n.getData({ preloadedMeta: i, metatagId: t, page: 0, pageSize: b.cM })),
                n.isSomethingWrong)
                    ? (0, a.jsx)(_.SomethingWentWrong, {})
                    : (0, a.jsx)(c.a, {
                          pageId: o.AppScreen.GenreArtists,
                          pageIdForFrom: h.b.GENRE_ARTISTS,
                          children: (0, a.jsx)(p.h, {
                              scrollElement: L,
                              outerTitle: n.fullTitle,
                              children: (0, a.jsxs)('div', {
                                  className: Y().root,
                                  'data-test-id': d.Xk.genre.GENRE_ARTISTS_PAGE,
                                  children: [
                                      (0, a.jsx)(R.Y, {
                                          variant: R.V.TEXT,
                                          withForwardControl: !1,
                                          withBackwardControl: M.canBack,
                                          children: (0, a.jsx)(x.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: n.fullTitle }),
                                      }),
                                      (0, a.jsxs)(m.N, {
                                          ref: P,
                                          className: Y().root,
                                          containerClassName: Y().container,
                                          children: [
                                              (0, a.jsx)(g.Q, {
                                                  maxColumnCount: b.I7,
                                                  count: z(),
                                                  rowGap: b.fZ,
                                                  columnGap: b.vX,
                                                  getEstimateRowSize: D,
                                                  minColumnWidth: b.K$,
                                                  maxColumnWidth: b.El,
                                                  onChangeRange: B,
                                                  renderItemByIndex: H,
                                              }),
                                              (0, a.jsx)(j.A, { children: (0, a.jsx)(E.w, { className: Y().footer }) }),
                                          ],
                                      }),
                                  ],
                              }),
                          }),
                      });
            });
            var G = i(19994);
            let W = () => {
                    let e = (0, f.W)(),
                        { contentScrollRef: t, setContentScrollRef: i } = (0, A.g)(),
                        { formatMessage: r } = (0, l.A)(),
                        s = r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.artist' }) }),
                        n = (0, u.c)(() => (0, a.jsx)(I.V, { 'aria-label': s, round: !0, centered: !0 })),
                        o = (0, u.c)(() => b.tA),
                        c = (0, u.c)(() => void 0);
                    return (0, a.jsx)(p.h, {
                        scrollElement: t,
                        children: (0, a.jsxs)('div', {
                            className: Y().root,
                            children: [
                                (0, a.jsx)(R.Y, {
                                    variant: R.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, a.jsx)(G.W, { className: Y().shimmerTitle, radius: 'l' }),
                                }),
                                (0, a.jsx)(m.N, {
                                    ref: i,
                                    className: Y().root,
                                    containerClassName: Y().container,
                                    children: (0, a.jsx)(g.Q, {
                                        maxColumnCount: b.I7,
                                        count: b.xi,
                                        rowGap: b.fZ,
                                        columnGap: b.vX,
                                        getEstimateRowSize: o,
                                        minColumnWidth: b.K$,
                                        maxColumnWidth: b.El,
                                        onChangeRange: c,
                                        renderItemByIndex: n,
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                K = () => {
                    let e = (0, s.useSearchParams)().get('metatagId');
                    return (e || (0, s.notFound)(), (0, a.jsx)(r.Suspense, { fallback: (0, a.jsx)(W, {}), children: (0, a.jsx)(X, { metatagId: e }) }));
                };
        },
        56117: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => d });
            var a = i(88800),
                r = i(84961),
                s = i(88969),
                n = i(17392),
                l = i(52300),
                o = i(19934),
                c = i(72288);
            let d = (0, r.PA)((e) => {
                let { isDisliked: t, onClick: i, disabled: r, className: d } = e,
                    { user: u } = (0, c.g)();
                return (0, a.jsx)(o.Dr, {
                    onClick: i,
                    className: d,
                    icon: (0, a.jsx)(l.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: r || !u.isAuthorized,
                    'data-test-id': n.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, a.jsx)(s.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        57585: (e) => {
            e.exports = { message: 'NotificationCopy_message__zVlYi', icon: 'NotificationCopy_icon__FTmM9', title: 'NotificationCopy_title__UEiU0' };
        },
        59918: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => s });
            var a = i(27169),
                r = i(29201);
            let s = (e) => {
                var t, i, s, n, l;
                return e
                    ? {
                          id: e.id,
                          decomposed:
                              (null == (t = e.decomposed)
                                  ? void 0
                                  : t.map((e) => {
                                        var t;
                                        return {
                                            id: e.id,
                                            name: e.name,
                                            various: e.various || !1,
                                            composer: e.isComposer || !1,
                                            item: e.separator,
                                            available: null == (t = e.isAvailable) || t,
                                            disclaimers: (0, r.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '', type: a.Q.PIC, prefix: '', custom: !1 },
                          ogImage: '',
                          derivedColors: { accent: '', average: e.averageColor || '', miniPlayer: '', waveText: '' },
                          available: e.isAvailable,
                          disclaimers: (0, r.H)(e.disclaimers),
                          counts: {
                              directAlbums: (null == (i = e.counts) ? void 0 : i.albums) || 0,
                              alsoAlbums: (null == (s = e.counts) ? void 0 : s.compilations) || 0,
                              tracks: (null == (n = e.counts) ? void 0 : n.tracks) || 0,
                              alsoTracks: 0,
                          },
                          trailer: { available: !!(null == (l = e.trailer) ? void 0 : l.isAvailable) },
                          hasPromotions: !1,
                          genres: [],
                          links: [],
                          ticketsAvailable: !1,
                          ratings: { week: 0, month: 0, day: 0 },
                          composer: e.isComposer || !1,
                          various: e.various || !1,
                      }
                    : {
                          id: '',
                          name: '',
                          various: !1,
                          composer: !1,
                          decomposed: [],
                          ogImage: '',
                          hasPromotions: !1,
                          genres: [],
                          ticketsAvailable: !1,
                          links: [],
                          ratings: { week: 0, month: 0, day: 0 },
                          counts: { directAlbums: 0, alsoAlbums: 0, tracks: 0, alsoTracks: 0 },
                          available: !1,
                          disclaimers: [],
                      };
            };
        },
        60266: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => n });
            var a = i(88800);
            i(30282);
            var r = i(11006),
                s = i.n(r);
            let n = (e) => {
                let { children: t } = e;
                return (0, a.jsx)('footer', { className: s().empty });
            };
        },
        62293: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => r });
            var a = i(97956);
            let r = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: r, userRegion: s } = e;
                return 'ru' === s && t(a.z.WebNextFooterDisclaimer, 'on') ? i() : r();
            };
        },
        64207: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => x });
            var a = i(88800),
                r = i(96706),
                s = i(53548),
                n = i(2058),
                l = i(79390),
                o = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                m = i(54243);
            let x = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [x, _] = (0, s.useState)(!1),
                    { formatMessage: v } = (0, n.A)();
                return (0, s.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, a.jsx)(u.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (x) return;
                    let s = { ...(0, r.HO)(e), isLiked: !e.isLiked };
                    _(!0);
                    let n = await e.toggleLike();
                    (_(!1),
                        n === l.f.OK
                            ? i((0, a.jsx)(m.T, { artist: s }), { containerId: o.u.INFO })
                            : i((0, a.jsx)(u.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, x, v, i]);
            };
        },
        64247: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => n });
            var a = i(88800),
                r = i(15077),
                s = i(33719);
            let n = (e) => {
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
        67695: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 55470));
        },
        74064: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => p });
            var a = i(88800),
                r = i(2058),
                s = i(88969),
                n = i(17392),
                l = i(29993),
                o = i(52300),
                c = i(19934),
                d = i(29595),
                u = i(74965),
                m = i(72288),
                x = i(98953),
                _ = i(64546),
                v = i(49343);
            let p = (e) => {
                let { shareLink: t, entityMeta: i, disabled: p, className: g, iconClassName: h, menuClassName: f, withSubmenu: A = !0, withNotification: N = !0 } = e,
                    { settings: T, shareIframe: C, fullscreenPlayer: k, fullscreenVideoPlayer: E } = (0, m.g)(),
                    { formatMessage: j } = (0, r.A)(),
                    { notify: R } = (0, u.l)(),
                    I = (0, l.c)(async () => {
                        if ((await window.navigator.clipboard.writeText(t), N)) {
                            let e = k.modal.isOpened || (!T.isMobile && E.modal.isOpened);
                            R((0, a.jsx)(v.D, { entityVariant: i.variant, entityTitle: i.title }), { containerId: e ? d.u.FULLSCREEN_INFO : d.u.INFO });
                        }
                    }),
                    b = (0, l.c)(() => {
                        i.id && C.openModal(i);
                    }),
                    O = i.id && i.variant !== x.Y.ARTIST && i.variant !== x.Y.CLIP;
                return A
                    ? (0, a.jsxs)(c.W1, {
                          offsetOptions: 3,
                          isMobile: T.isMobile,
                          className: g,
                          menuClassName: f,
                          label: j({ id: 'interface-actions.share' }),
                          icon: (0, a.jsx)(o.I, { className: h, variant: 'share', size: 'xxs' }),
                          disabled: p,
                          submenuProps: { 'data-test-id': n.S7.CONTEXT_MENU_SHARE },
                          'data-test-id': n.S7.CONTEXT_MENU_SHARE_BUTTON,
                          children: [
                              (0, a.jsx)(c.Dr, {
                                  onClick: I,
                                  icon: (0, a.jsx)(o.I, { variant: 'chain', size: 'xxs' }),
                                  'data-test-id': n.S7.CONTEXT_MENU_SHARE_COPY_LINK_BUTTON,
                                  children: (0, a.jsx)(s.A, { id: 'interface-actions.copy-link' }),
                              }),
                              O &&
                                  (0, a.jsx)(_.WithOffline, {
                                      fallback: (0, a.jsx)(c.Dr, {
                                          onClick: b,
                                          icon: (0, a.jsx)(o.I, { variant: 'code', size: 'xxs' }),
                                          'data-test-id': n.S7.CONTEXT_MENU_SHARE_IFRAME_BUTTON,
                                          children: (0, a.jsx)(s.A, { id: 'interface-actions.copy-iframe' }),
                                      }),
                                  }),
                          ],
                      })
                    : (0, a.jsx)(c.Dr, {
                          className: g,
                          onClick: I,
                          icon: (0, a.jsx)(o.I, { className: h, variant: 'share', size: 'xxs' }),
                          disabled: p,
                          'data-test-id': n.S7.CONTEXT_MENU_SHARE_BUTTON,
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
                n = i(2058),
                l = i(29595),
                o = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(64247);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: m } = (0, n.A)(),
                    [x, _] = (0, s.useState)(!1);
                return (0, s.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, a.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (x) return;
                    let s = { ...(0, r.HO)(e), isPinned: !e.isPinned };
                    _(!0);
                    let n = await e.togglePin();
                    (_(!1),
                        n
                            ? i((0, a.jsx)(u.l, { artist: s }), { containerId: l.u.INFO })
                            : i((0, a.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, t.isAuthorized, x, m, i]);
            };
        },
        81066: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => _ });
            var a = i(88800),
                r = i(84961),
                s = i(53548),
                n = i(88969),
                l = i(17392),
                o = i(52300),
                c = i(19934),
                d = i(73170),
                u = i(72288),
                m = i(52726);
            let x = {
                    album: (0, a.jsx)(n.A, { id: 'vibe-actions.vibe-by-album' }),
                    artist: (0, a.jsx)(n.A, { id: 'vibe-actions.vibe-by-artist' }),
                    playlist: (0, a.jsx)(n.A, { id: 'vibe-actions.vibe-by-playlist' }),
                    track: (0, a.jsx)(n.A, { id: 'vibe-actions.vibe-by-track' }),
                },
                _ = (0, r.PA)((e) => {
                    let { variant: t, className: i, onClick: r, disabled: n, onOpenMenuChange: _ } = e,
                        {
                            settings: { isMobile: v },
                            user: p,
                            freeAccess: g,
                        } = (0, u.g)(),
                        h = g.isVibeStartRestricted && !v,
                        f = (0, s.useCallback)(
                            (e) => {
                                let { isPopoverEnabled: s, popoverText: u } = e;
                                return (0, a.jsxs)(c.Dr, {
                                    onClick: r,
                                    disabled: n || s || !p.isAuthorized,
                                    className: i,
                                    icon: (0, a.jsx)(o.I, { variant: 'vibe', size: 'xxs' }),
                                    'data-test-id': l.S7.CONTEXT_MENU_VIBE_BUTTON,
                                    children: [x[t], ' ', (0, a.jsx)(d.q, { children: u })],
                                });
                            },
                            [r, n, i, t, p.isAuthorized],
                        );
                    return (0, a.jsx)(m.S, {
                        isNested: !0,
                        isEnabled: h,
                        placement: 'right',
                        textVariant: 'vibe',
                        vibeTextVariant: t,
                        renderChildren: f,
                        onOpenMenuChange: _,
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
        86790: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => E });
            var a = i(88800),
                r = i(65724),
                s = i(84961),
                n = i(2058),
                l = i(30282),
                o = i(94144),
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
            let d = (e, t, i) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(i);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(i);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(i);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: i, tld: a, year: r } = e;
                    return {
                        year: r,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, a, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, a, i) },
                    };
                };
            var m = i(62293),
                x = i(99839);
            let _ = (e) => e(new Date(), (0, x.m)());
            var v = i(51611),
                p = i(72288),
                g = i(11006),
                h = i.n(g),
                f = i(17392),
                A = i(29504),
                N = i(91292);
            let T = (e) => {
                    let { className: t, data: i } = e;
                    return (0, a.jsxs)('div', {
                        className: (0, r.$)(h().copyrights, t),
                        'data-test-id': f.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, a.jsxs)(A.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: h().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, a.jsx)(N.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, r.$)(h().copyrightLink, h().yandexMusicLink),
                                        'data-test-id': f.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(A.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, a.jsx)(N.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: h().copyrightLink,
                                'data-test-id': f.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                C = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, a.jsxs)('div', {
                        className: h().links,
                        children: [
                            (0, a.jsx)('ol', {
                                className: h().list,
                                'data-test-id': f.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: r } = e;
                                    return (0, a.jsx)(
                                        'li',
                                        {
                                            className: h().item,
                                            children: (0, a.jsx)(N.N, { target: '_blank', href: r, className: h().link, 'data-test-id': f.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, a.jsx)(A.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: h().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': f.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                k = (e) => {
                    let { className: t, data: i } = e;
                    return (0, a.jsxs)('footer', {
                        className: (0, r.$)(h().root, h().important, t),
                        'data-test-id': f.S7.FOOTER,
                        children: [(0, a.jsx)(C, { links: i.links, disclaimer: i.disclaimer }), (0, a.jsx)(T, { data: i.copyrights })],
                    });
                };
            (0, s.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, p.g)(),
                    { formatDate: r, formatMessage: s } = (0, n.A)(),
                    { language: l } = (0, v.h)(),
                    o = u({ formatMessage: s, language: l, tld: i.tld, year: _(r) });
                return (0, a.jsx)(T, { className: t, data: o });
            });
            let E = (0, s.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: s, location: x, user: g } = (0, p.g)(),
                    { formatDate: f, formatMessage: A } = (0, n.A)(),
                    { isEnabled: N } = null != (t = (0, o.P)()) ? t : {},
                    { language: T } = (0, v.h)(),
                    C = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: a, language: r, tld: s, userRegion: n, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: a, language: r, userRegion: s } = e,
                                    n = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, a, r) },
                                    l = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, a, r) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, a, r) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, a, r) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, a, r) },
                                    x = [n, o, u];
                                return (i && 'ru' === s && x.push(l), x.push(m), x);
                            })({ formatMessage: i, isWebApplication: a, language: r, tld: s, userRegion: n }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: n,
                            }),
                            copyrights: u({ formatMessage: i, language: r, tld: s, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => s.checkExperiment(e, t),
                        formatMessage: A,
                        isWebApplication: l.$3,
                        tld: x.tld,
                        language: T,
                        userRegion: g.account.data.userSessionRegionIso,
                        year: _(f),
                    });
                return (0, a.jsx)(k, { className: (0, r.$)({ [h().root_withOffsetForDeeplink]: N }, i), data: C });
            });
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
        94144: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r, P: () => s });
            var a = i(53548);
            let r = (0, a.createContext)(null),
                s = () => (0, a.useContext)(r);
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
        99839: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => a });
            let a = () => ({ year: 'numeric' });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                9904, 7191, 3078, 1191, 8194, 8655, 426, 6706, 4771, 1311, 2662, 6904, 1898, 2058, 3578, 8628, 4378, 9780, 8283, 9332, 9202, 7864, 4732, 9087, 3979, 6719,
                1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 6374, 2088, 9269, 763, 2670, 7358,
            ],
            () => e((e.s = 67695)),
        ),
            (_N_E = e.O()));
    },
]);
