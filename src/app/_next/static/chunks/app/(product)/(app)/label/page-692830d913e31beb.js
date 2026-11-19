(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9995],
    {
        5699: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => $ }));
            var a = i(88800),
                r = i(53548),
                s = i(58390),
                l = i(65724),
                n = i(84961),
                o = i(2058),
                d = i(88969),
                c = i(97234),
                u = i(59724),
                _ = i(17392),
                m = i(29993),
                h = i(96817),
                x = i(52300),
                g = i(66719),
                v = i(29504),
                k = i(33169),
                b = i(32596),
                f = i(74929),
                p = i(21256),
                T = i(69630),
                j = i(98427),
                A = i(44230),
                N = i(37670),
                C = i(29595),
                L = i(74965),
                S = i(34961),
                P = i(53892),
                B = i(72288),
                I = i(98953),
                R = i(18130),
                y = i(66943),
                O = i(47934),
                w = i(49343),
                E = i(86790),
                H = i(60266),
                z = i(93317),
                W = i(64709),
                F = i(24378),
                D = i.n(F);
            let U = (0, n.PA)((e) => {
                var t, i, n, F;
                let { labelId: U, preloadedLabel: K } = e,
                    V = (0, S.s)(P.n.LABEL),
                    {
                        settings: { isMobile: M },
                    } = (0, B.g)(),
                    { formatMessage: $ } = (0, o.A)(),
                    { contentScrollRef: q, setContentScrollRef: X } = (0, A.g)(),
                    { notify: Y } = (0, L.l)(),
                    { shareLink: J } = (0, R.b)('/label/:labelId', { params: { labelId: null != (i = V.id) ? i : '' } }),
                    Z = (0, r.useRef)(null),
                    G = (0, r.useRef)(0);
                (0, W.Q)({ id: Number(V.id), name: null != (n = V.name) ? n : '', type: null != (F = V.type) ? F : '' }, W.T.ROOT);
                let Q = (0, m.c)(async () => {
                        (await window.navigator.clipboard.writeText(J),
                            Y((0, a.jsx)(w.D, { entityVariant: I.Y.LABEL, entityTitle: V.name || '' }), { containerId: C.u.INFO }));
                    }),
                    ee = (0, r.useMemo)(
                        () =>
                            M
                                ? (0, a.jsx)(h.$, {
                                      className: D().button,
                                      onClick: Q,
                                      icon: (0, a.jsx)(x.I, { variant: 'share', size: 'xxs' }),
                                      size: 'l',
                                      radius: 'xxxl',
                                      'data-test-id': _.Xk.label.SHARE_COPY_LINK_BUTTON,
                                  })
                                : (0, a.jsx)(h.$, {
                                      className: D().button,
                                      onClick: Q,
                                      icon: (0, a.jsx)(x.I, { variant: 'share', size: 'xxs' }),
                                      size: 'l',
                                      radius: 'xxxl',
                                      'data-test-id': _.Xk.label.SHARE_COPY_LINK_BUTTON,
                                      children: (0, a.jsx)(d.A, { id: 'interface-actions.share' }),
                                  }),
                        [M, Q],
                    ),
                    et = V.isPublisher ? $({ id: 'entity-names.publisher' }) : $({ id: 'entity-names.label' }),
                    ei = V.isPublisher ? $({ id: 'entity-names.non-music-releases' }) : $({ id: 'entity-names.releases' });
                return ((0, r.useEffect)(
                    () => () => {
                        V.reset();
                    },
                    [V],
                ),
                V.isNotFound && (0, s.notFound)(),
                (0, r.useEffect)(
                    () => () => {
                        G.current = 0;
                    },
                    [V],
                ),
                (0, r.useEffect)(() => {
                    V.isRejected &&
                        G &&
                        !(G.current > 0) &&
                        (Y((0, a.jsx)(y.h, { error: $({ id: 'error-messages.error-load-part-page' }) }), { containerId: C.u.ERROR }), G.current++);
                }, [V.isRejected, Y, $]),
                (0, N.J)(V.isResolved),
                V.isNeededToLoad && (0, r.use)(V.getData({ labelId: Number(U), preloadedLabel: K })),
                V.isRejected && !V.isNotFound)
                    ? (0, a.jsx)(b.SomethingWentWrong, {})
                    : (0, a.jsx)(u.a, {
                          pageId: c.AppScreen.Label,
                          pageIdForFrom: j.b.LABEL,
                          children: (0, a.jsxs)(T.h, {
                              scrollElement: q,
                              children: [
                                  (0, a.jsx)(z.Y, { innerHeaderRef: Z }),
                                  (0, a.jsxs)(g.N, {
                                      className: D().root,
                                      containerClassName: D().content,
                                      ref: X,
                                      'data-test-id': _.Xk.label.LABEL_PAGE,
                                      children: [
                                          (0, a.jsxs)('div', {
                                              className: D().header,
                                              children: [
                                                  (0, a.jsx)(v.HL, { variant: 'div', type: 'text', size: 'm', weight: 'medium', children: et }),
                                                  (0, a.jsx)(k.R, { className: D().title, title: V.name || '', headingVariant: 'h1' }),
                                                  ee,
                                              ],
                                          }),
                                          V.hasAlbums &&
                                              V.albums &&
                                              (0, a.jsx)(f.p, {
                                                  isShimmerVisible: V.isLoading,
                                                  isShimmerActive: !0,
                                                  className: D().carouselContainer,
                                                  headerClassName: (0, l.$)(D().carouselBlock, D().carouselBlockHeader),
                                                  containerClassName: D().carouselBlock,
                                                  title: ei,
                                                  viewAllActionLink: V.albumsUrl,
                                                  albums: V.albums,
                                                  headingVariant: 'h2',
                                                  'data-test-id': _.Xk.label.RELEASES_CAROUSEL,
                                              }),
                                          V.hasArtists &&
                                              (0, a.jsx)(O.O, {
                                                  isShimmerVisible: V.isLoading,
                                                  isShimmerActive: !0,
                                                  isShimmerCentered: !0,
                                                  isShimmerRounded: !0,
                                                  headerClassName: (0, l.$)(D().carouselBlockHeader, D().carouselBlock),
                                                  containerClassName: D().carouselBlock,
                                                  viewAllActionLink: V.artistsUrl,
                                                  title: $({ id: 'entity-names.artists' }),
                                                  headingVariant: 'h2',
                                                  'data-test-id': _.Xk.label.ARTISTS_CAROUSEL,
                                                  children: null == (t = V.artists) ? void 0 : t.map((e) => (0, a.jsx)(p.a, { artist: e, contentLinesCount: 3 }, e.id)),
                                              }),
                                          (0, a.jsx)(H.A, { children: (0, a.jsx)(E.w, { className: D().footer }) }),
                                      ],
                                  }),
                              ],
                          }),
                      });
            });
            var K = i(19994);
            let V = () => {
                let { contentScrollRef: e, setContentScrollRef: t } = (0, A.g)(),
                    {
                        settings: { isMobile: i },
                    } = (0, B.g)();
                return (0, a.jsxs)(T.h, {
                    scrollElement: e,
                    children: [
                        (0, a.jsx)(z.Y, {}),
                        (0, a.jsxs)(g.N, {
                            className: D().root,
                            containerClassName: D().content,
                            ref: t,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: D().header,
                                    children: [
                                        (0, a.jsx)(K.W, { className: D().shimmerLabelText, radius: 's' }),
                                        (0, a.jsx)(K.W, { className: D().shimmerPageTitle, radius: 'l' }),
                                        (0, a.jsx)(K.W, { className: D().shimmerButton, radius: i ? 'round' : 'xxxl' }),
                                    ],
                                }),
                                (0, a.jsx)(O.O, {
                                    isShimmerVisible: !0,
                                    isShimmerActive: !0,
                                    showHeaderShimmer: !0,
                                    className: D().carouselContainer,
                                    headerClassName: (0, l.$)(D().carouselBlockHeader, D().carouselBlock),
                                    containerClassName: D().carouselBlock,
                                }),
                                (0, a.jsx)(O.O, {
                                    isShimmerVisible: !0,
                                    isShimmerActive: !0,
                                    showHeaderShimmer: !0,
                                    isShimmerCentered: !0,
                                    isShimmerRounded: !0,
                                    headerClassName: (0, l.$)(D().carouselBlockHeader, D().carouselBlock),
                                    containerClassName: D().carouselBlock,
                                }),
                            ],
                        }),
                    ],
                });
            };
            var M = i(21438);
            let $ = () => {
                let e = (0, s.useSearchParams)().get('labelId');
                return ((e && (0, M.L)(e)) || (0, s.notFound)(), (0, a.jsx)(r.Suspense, { fallback: (0, a.jsx)(V, {}), children: (0, a.jsx)(U, { labelId: e }) }));
            };
        },
        21256: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => D });
            var a = i(88800),
                r = i(65724),
                s = i(84961),
                l = i(53548),
                n = i(2058),
                o = i(97234),
                d = i(91177),
                c = i(70598),
                u = i(46482),
                _ = i(17392),
                m = i(18593),
                h = i(29993),
                x = i(79070),
                g = i(29832),
                v = i(52300),
                k = i(7555),
                b = i(29504),
                f = i(91959),
                p = i(64207),
                T = i(77455),
                j = i(5407),
                A = i(57934),
                N = i(84384),
                C = i(4795),
                L = i(78940),
                S = i(55693),
                P = i(39079),
                B = i(72288),
                I = i(81877),
                R = i(49738),
                y = i(91292),
                O = i(56862),
                w = i(16704),
                E = i(56446),
                H = i(36207),
                z = i(43161),
                W = i(93434),
                F = i.n(W);
            let D = (0, s.PA)((e) => {
                let { artist: t, className: i, children: s, contentLinesCount: W, topTitleElement: D, bottomTitleElement: U } = e,
                    K = (0, d.D)(),
                    {
                        trailer: V,
                        user: M,
                        paywall: { modal: $ },
                    } = (0, B.g)(),
                    { from: q, utmLink: X } = (0, N.f)({ contextId: t.id, contextType: m.K.Artist }),
                    { formatMessage: Y } = (0, n.A)(),
                    [J, Z] = (0, l.useState)(!1),
                    [G, Q] = (0, l.useState)(!1),
                    [ee, et] = (0, l.useState)(!1),
                    { sendLikeSearchFeedback: ei, sendNavigateSearchFeedback: ea, sendPlaySearchFeedback: er } = (0, S.z)(),
                    es = (0, c.S)(),
                    el = (0, u.g)(),
                    en = (0, p.K)(t),
                    eo = (0, T.A)(t),
                    { id: ed, name: ec, coverUri: eu, isLiked: e_ } = t,
                    em = (0, L.Z)(t.url),
                    [eh, ex] = (0, l.useState)(!1),
                    eg = (0, A.F)(),
                    ev = (0, j.P)(),
                    ek = (0, h.c)((e) => {
                        if ((e.stopPropagation(), ev())) return void e.preventDefault();
                        (V.openArtistTrailer(t.id), eg(o.DomainObjectType.Artist, t.id));
                    }),
                    eb = (0, l.useMemo)(() => {
                        let e = Y({ id: 'entity-names.artist-name' }, { artistName: ec }),
                            t = e_ ? Y({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [ec, e_, Y]),
                    { isPlaying: ef, togglePlay: ep } = (0, P.D)({
                        playContextParams: { contextData: { type: m.K.Artist, meta: { id: Number(ed) }, from: q, utmLink: X }, loadContextMeta: !0 },
                    }),
                    eT = (0, f.S)({ artist: t, callback: em }),
                    ej = (0, f.S)({ artist: t, callback: ep }),
                    eA = (0, h.c)((e) => {
                        (null == ea || ea(), es({ to: o.AppScreen.ArtistScreen }), eT(e));
                    }),
                    eN = (0, C.N)(),
                    eC = (0, h.c)(() => {
                        if (!ev()) {
                            if (eN) return void $.open();
                            (J || ef || (Z(!0), null == er || er()), ej(), ef || el());
                        }
                    }),
                    eL = (0, h.c)(() => {
                        (G || e_ || (Q(!0), null == ei || ei()), en());
                    }),
                    eS = (0, h.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eP = (0, h.c)((e) => {
                        (et(e), ex(e));
                    }),
                    eB = (0, l.useMemo)(
                        () =>
                            (0, a.jsx)(
                                z.g,
                                {
                                    artist: t,
                                    onOpenChange: eP,
                                    open: ee,
                                    onClick: eS,
                                    className: (0, r.$)(F().menuButton, F().control),
                                    size: 's',
                                    icon: (0, a.jsx)(v.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': _.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eS, eP, ee],
                    ),
                    eI = (0, l.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, a.jsx)(
                                H.n,
                                {
                                    children: (0, a.jsx)(E.k, {
                                        className: (0, r.$)(F().trailerButton, F().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: ek,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, ek]),
                    eR = (0, l.useMemo)(
                        () =>
                            (0, a.jsx)(
                                O.O,
                                { onClick: eo, isPinned: t.isPinned, className: (0, r.$)(F().pinButton, F().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, eo],
                    ),
                    ey = (0, x.L)(() => {
                        if (t.isAvailable)
                            return (0, a.jsx)(
                                g.hg,
                                {
                                    isVisible: ee || eh,
                                    className: F().controls,
                                    radius: 'round',
                                    playControl: (0, a.jsx)(
                                        w.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, r.$)(F().playButton, F().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eC,
                                            isPlaying: ef,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, a.jsx)(
                                        R.c,
                                        {
                                            className: (0, r.$)(F().likeButton, F().control),
                                            isLiked: e_,
                                            onClick: eL,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !M.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eB,
                                    pinControl: eR,
                                    trailerControl: eI,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eO = (0, l.useMemo)(
                        () =>
                            (0, a.jsx)(k.t, {
                                className: F().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': _.Kq.artist.ARTIST_CARD,
                                children: (0, a.jsxs)('div', {
                                    className: F().coverBlock,
                                    onClick: eA,
                                    children: [
                                        (0, a.jsx)(I.B, {
                                            className: F().image,
                                            src: eu,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eb,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        ey,
                                    ],
                                }),
                            }),
                        [eA, eu, eb, t.isAvailable, ey],
                    );
                return (0, a.jsx)(g.MN, {
                    ref: K,
                    className: (0, r.$)(F().root, i),
                    textPosition: 'center',
                    'aria-label': eb,
                    title: (0, a.jsxs)(a.Fragment, {
                        children: [
                            D,
                            (0, a.jsx)(b.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, a.jsx)(y.N, {
                                    className: F().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': eb,
                                    onClick: eA,
                                    'data-test-id': _.Kq.artist.ARTIST_TITLE,
                                    children: ec,
                                }),
                            }),
                            U,
                        ],
                    }),
                    srTitle: (0, a.jsx)(y.N, { className: F().srTitleLink, href: t.url, onClick: eA, children: eb }),
                    contentLinesCount: W,
                    view: eO,
                    'data-test-id': _.Kq.artist.ARTIST_ITEM,
                    children: s,
                });
            });
        },
        24378: (e) => {
            e.exports = {
                root: 'LabelPage_root__jquyP',
                content: 'LabelPage_content__9st_X',
                header: 'LabelPage_header__G2xY_',
                title: 'LabelPage_title__BNxeX',
                button: 'LabelPage_button__JXw3C',
                shimmerLabelText: 'LabelPage_shimmerLabelText__rog2x',
                shimmerPageTitle: 'LabelPage_shimmerPageTitle__rSKGh',
                shimmerButton: 'LabelPage_shimmerButton__9ZaQr',
                carouselBlock: 'LabelPage_carouselBlock__zPJmW',
                carouselBlockHeader: 'LabelPage_carouselBlockHeader__dvYqJ',
                carouselContainer: 'LabelPage_carouselContainer__bRVMp',
                footer: 'LabelPage_footer__lvKmF',
            };
        },
        28127: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 5699));
        },
        33169: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => T });
            // for PulseSync WebHost: BEGIN imports for native addon header title items
            var pulseSyncHeaderReact = i(53548),
                pulseSyncHeaderJsx = i(88800),
                pulseSyncHeaderText = i(29504),
                pulseSyncHeaderIcon = i(52300);

            // for PulseSync WebHost: END imports for native addon header title items
            var a = i(88800),
                r = i(65724),
                s = i(84961),
                l = i(53548),
                n = i(2058),
                o = i(17392),
                d = i(29993),
                c = i(79070),
                u = i(96817),
                _ = i(52300),
                m = i(29504),
                h = i(63807);
            let x = (e) => {
                let { children: t, title: i, className: r } = e,
                    { setTitleElement: s, setTitle: n } = (0, l.useContext)(h.B),
                    o = (0, l.useRef)(null);
                return (
                    (0, l.useEffect)(() => {
                        ((null == o ? void 0 : o.current) && s(o), i && n(i));
                    }, [o, i, s, n]),
                    (0, l.useEffect)(
                        () => () => {
                            n('');
                        },
                        [n],
                    ),
                    (0, a.jsx)('div', { ref: o, className: r, children: t })
                );
            };
            var g = i(78940),
                v = i(72288),
                k = i(91292),
                b = i(59378),
                f = i(48100),
                p = i.n(f);
            let T = (0, s.PA)((e) => {
                // for PulseSync WebHost: BEGIN refresh header titles when native addon slots change
                let [, pulseSyncSetHeaderSlotRevision] = (0, pulseSyncHeaderReact.useState)(0);
                (0, pulseSyncHeaderReact.useEffect)(() => {
                    const onNativeSlotChange = (e) => {
                        if (e.detail === 'headerTitleItems') pulseSyncSetHeaderSlotRevision((e) => e + 1);
                    };
                    document.addEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                    return () => document.removeEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                }, []);

                // for PulseSync WebHost: END refresh header titles when native addon slots change
                let {
                        title: t = '',
                        'aria-labelledby': i,
                        canChange: s = !1,
                        onChange: h,
                        maxTitleLength: f,
                        version: T = '',
                        onVersionClick: j,
                        className: A,
                        headingVariant: N = 'h2',
                        withHeadingClamp: C = !0,
                        link: L,
                        onTitleLinkClick: S,
                    } = e,
                    {
                        settings: { isMobile: P },
                    } = (0, v.g)(),
                    { formatMessage: B } = (0, n.A)(),
                    [I, R] = (0, l.useState)(!1),
                    y = (0, l.useRef)(null),
                    O = t.length + T.length > 25,
                    w = (0, g.Z)(null != L ? L : ''),
                    E = (0, d.c)((e) => {
                        (null == S || S(), w(e));
                    }),
                    H = (0, l.useMemo)(
                        () =>
                            P
                                ? { font: p().font_mobile, iconLink: p().arrowWrapper_mobile }
                                : O
                                  ? { font: p().font_long, iconLink: p().arrowWrapper_long }
                                  : { font: p().font_short, iconLink: p().arrowWrapper_short },
                        [P, O],
                    ),
                    z = !P && s && I,
                    W = (0, l.useCallback)(() => {
                        var e;
                        (R(!0), null == (e = y.current) || e.focus());
                    }, []),
                    F = (0, l.useCallback)(
                        (e) => {
                            (R(!1), null == h || h(e));
                        },
                        [h],
                    ),
                    D = (0, c.L)(() =>
                        (0, a.jsx)('span', {
                            className: (0, r.$)(p().arrowWrapper, H.iconLink),
                            children: (0, a.jsx)(_.I, { className: p().titleWithLinkIcon, size: 'xs', variant: 'arrowRight' }),
                        }),
                    ),
                    U = (0, c.L)(() =>
                        (0, a.jsxs)(m.DZ, {
                            variant: N,
                            id: i,
                            lineClamp: P && C ? 2 : void 0,
                            className: (0, r.$)(p().heading, { [p().heading_withVersion]: T }),
                            'data-test-id': o.e8.pageHeader.ENTITY_TITLE,
                            children: [
                                (0, a.jsx)(m.HL, { className: (0, r.$)(p().font, H.font, p().title), variant: 'span', children: t }),
                                T &&
                                    (0, a.jsx)(m.HL, {
                                        onClick: j,
                                        className: (0, r.$)(p().font, H.font, p().version, { [p().version_withOtherVersions]: j }),
                                        variant: 'span',
                                        'data-test-id': o.e8.pageHeader.ENTITY_VERSION,
                                        children: ' '.concat(T),
                                    }),
                                L && !P && D,
                            ],
                        }),
                    ),
                    K = (0, c.L)(() =>
                        L
                            ? (0, a.jsxs)(k.N, {
                                  className: p().titleWithLink,
                                  containerClassName: p().linkContainer,
                                  textClassName: p().linkText,
                                  href: L,
                                  onClick: E,
                                  children: [U, P && D],
                              })
                            : U,
                    );
                // for PulseSync WebHost: BEGIN render native addon items beside header titles
                const pulseSyncInjectHeaderTitleItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('headerTitleItems', items, {
                        eventDetail: null,
                        renderItem: ({ key, payload, positionIndex }) => {
                            const text = String(payload?.text ?? '').trim(),
                                icon = String(payload?.icon ?? '').trim(),
                                label = String(payload?.label ?? text).trim();
                            if (!text && !icon) return null;
                            return (0, pulseSyncHeaderJsx.jsxs)(
                                pulseSyncHeaderText.HL,
                                {
                                    variant: 'span',
                                    type: 'text',
                                    size: 's',
                                    weight: 'medium',
                                    ...(label
                                        ? {
                                              'aria-label': label,
                                          }
                                        : {}),
                                    'data-pulsesync-addon-header-item': 'title',
                                    children: [
                                        icon &&
                                            (0, pulseSyncHeaderJsx.jsx)(pulseSyncHeaderIcon.I, {
                                                variant: icon,
                                                size: 'xxs',
                                            }),
                                        text,
                                    ],
                                },
                                key,
                            );
                        },
                    }) ?? items;
                // for PulseSync WebHost: END render native addon items beside header titles
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        !z &&
                            (0, a.jsxs)('div', {
                                className: (0, r.$)(p().root, A),
                                // for PulseSync WebHost: BEGIN inject native addon items into the header title
                                children: pulseSyncInjectHeaderTitleItems([
                                    (0, a.jsx)(x, { title: t, className: p().stickyTitle, children: K }),
                                    s &&
                                        (0, a.jsx)('div', {
                                            className: (0, r.$)(p().editButton, { [p().editButton_centered]: !O && !P }),
                                            children: (0, a.jsx)(u.$, {
                                                onClick: W,
                                                'aria-label': B({ id: 'playlist-actions.change-title' }),
                                                icon: (0, a.jsx)(_.I, { size: 'xxs', variant: 'pencil' }),
                                                size: 's',
                                                radius: 'round',
                                                'data-test-id': o.e8.pageHeader.EDIT_TITLE_BUTTON,
                                            }),
                                        }),
                                ]),
                                // for PulseSync WebHost: END inject native addon items into the header title
                            }),
                        z &&
                            (0, a.jsx)('div', {
                                className: p().textFieldContainer,
                                children: (0, a.jsx)(b.A, {
                                    text: t,
                                    className: (0, r.$)(p().font, H.font, p().textField, p().title, { [p().textField_long]: O && !P }),
                                    onChangeFinish: F,
                                    maxTextLength: f,
                                    minTextLength: 1,
                                    placeholder: B({ id: 'playlist-actions.enter-title' }),
                                    shouldFinishOnKeyPress: !0,
                                    withOutline: !0,
                                }),
                            }),
                    ],
                });
            });
        },
        34970: (e) => {
            e.exports = { root: 'TextField_root__RO2Hk', root_textarea: 'TextField_root_textarea__N0PF_', root_outline: 'TextField_root_outline__8JfQF' };
        },
        42592: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => o });
            var a = i(53548),
                r = i(24709),
                s = i(18117),
                l = i(88966),
                n = i(87138);
            let o = (0, r.n)({ event: 'LandingBlock.Loaded', kind: 'hook', requiredScopes: ['screen', 'block'] }, ({ enabled: e = !0 } = {}) => {
                let t = (0, a.useRef)(!1),
                    i = (0, l.N)(),
                    { hash: r } = (0, s.g)(),
                    o = (0, n.w)(),
                    d = (0, a.useMemo)(() => (o ? i.createBlockReporter(o.snapshot) : null), [i, o]);
                (0, a.useEffect)(() => {
                    e && o && d && !t.current && d.loaded({ objectsCount: o.snapshot.block.objectsCount, viewUuid: o.block.loadedSession.start() }) && (t.current = !0);
                }, [e, r, d, o]);
            });
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
                d = i(29993),
                c = i(52300),
                u = i(19934),
                _ = i(96706),
                m = i(53548),
                h = i(79390),
                x = i(29595),
                g = i(74965),
                v = i(72288),
                k = i(66943),
                b = i(7555),
                f = i(73170),
                p = i(29504),
                T = i(59304),
                j = i(81877),
                A = i(85074),
                N = i.n(A);
            let C = (e) => {
                let { coverUri: t, title: i, isDisliked: r, closeToast: l } = e,
                    { formatMessage: n } = (0, s.A)(),
                    o = n(r ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, a.jsx)(T.$, {
                    closeToast: l,
                    message: (0, a.jsxs)('div', {
                        className: N().message,
                        children: [
                            (0, a.jsx)(f.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, a.jsx)(b.t, {
                                className: N().cover,
                                radius: 'round',
                                children: (0, a.jsx)(j.B, { className: N().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, a.jsx)(p.HL, { className: N().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var L = i(64207),
                S = i(77455),
                P = i(48749),
                B = i(22505),
                I = i(5407),
                R = i(64284),
                y = i(98427),
                O = i(57934),
                w = i(84384),
                E = i(9618),
                H = i(95210),
                z = i(47964),
                W = i(46936),
                F = i(97956),
                D = i(98953),
                U = i(32721),
                K = i(18130),
                V = i(56117),
                M = i(93091),
                $ = i(27817),
                q = i(74064),
                X = i(15425),
                Y = i(81066),
                J = i(64546);
            let Z = (0, r.PA)((e) => {
                var t, i, r;
                let { artist: b, onOpenChange: f, open: p, ...T } = e,
                    { shouldShowBuySubscriptionModal: j, showBuySubscriptionModal: A } = (0, E.q)(),
                    {
                        settings: { isMobile: N },
                        modals: { artistAboutModal: Z },
                        trailer: G,
                        user: Q,
                        experiments: ee,
                    } = (0, v.g)(),
                    et = (0, S.A)(b),
                    ei = (0, L.K)(b),
                    ea = ((e) => {
                        let { user: t } = (0, v.g)(),
                            { notify: i } = (0, g.l)(),
                            [r, l] = (0, m.useState)(!1),
                            { formatMessage: n } = (0, s.A)();
                        return (0, d.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, a.jsx)(k.h, { error: n({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: x.u.ERROR });
                            if (r) return;
                            let s = { ...(0, _.HO)(e), isDisliked: !e.isDisliked };
                            l(!0);
                            let o = await e.toggleDislike();
                            (l(!1),
                                o === h.f.OK
                                    ? i((0, a.jsx)(C, { coverUri: s.coverUri, title: s.name, isDisliked: s.isDisliked }), { containerId: x.u.INFO })
                                    : i((0, a.jsx)(k.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: x.u.ERROR }));
                        });
                    })(b),
                    er = (0, O.F)(),
                    es = ''.concat(R.U.ARTIST, '-').concat(null == b ? void 0 : b.id),
                    { formatMessage: el } = (0, s.A)(),
                    { utmLink: en } = (0, w.f)({ blockId: R.U.ARTIST, contextType: o.K.Artist, contextId: null == b ? void 0 : b.id }),
                    { shareLink: eo, pathname: ed } = (0, K.b)('/artist/:artistId', { params: { artistId: null != (i = null == b ? void 0 : b.id) ? i : '' } }),
                    ec = (0, P.A)({ entityVariant: W.D.ARTIST, urlParams: { id: null == b ? void 0 : b.id } }),
                    { isPlaying: eu, togglePlay: e_ } = (0, z.B)({
                        seeds: null != (r = null == b ? void 0 : b.seeds) ? r : [],
                        pageIdForFrom: y.b.RADIO,
                        blockIdForFrom: es,
                        parentContextId: null == b ? void 0 : b.id,
                    }),
                    em = (0, I.P)(),
                    eh = el((null == b ? void 0 : b.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    ex = (0, d.c)(() => {
                        if (j && Q.isAuthorized) return void A();
                        eu || e_();
                    }),
                    eg = (0, d.c)(() => {
                        if (!em()) {
                            if (j) return void A();
                            (null == b ? void 0 : b.id) && (G.setUtmLink(en), G.openArtistTrailer(b.id), er(l.DomainObjectType.Artist, b.id));
                        }
                    }),
                    ev = (0, d.c)(() => {
                        Z.open(null == b ? void 0 : b.id);
                    });
                (0, H.N)(p);
                let ek = { variant: D.Y.ARTIST, id: null == b ? void 0 : b.id, title: null == b ? void 0 : b.name, path: ed },
                    eb = ee.checkExperiment(F.z.WebEditorsFeatures, 'on'),
                    ef = null == b || null == (t = b.trailer) ? void 0 : t.isAvailable,
                    ep = ee.checkExperiment(F.z.WebNextArtistInfo, 'on'),
                    eT = !ee.checkExperiment(F.z.WebNextProductWithoutRecommendation, 'on');
                return (0, a.jsxs)(u.W1, {
                    isMobile: N,
                    offsetOptions: 10,
                    open: p,
                    onOpenChange: f,
                    ariaLabel: el({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: n.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...T,
                    children: [
                        eb && (0, a.jsx)(J.WithOffline, { fallback: (0, a.jsx)(B.d, { entityVariant: W.D.ARTIST, adminUrl: ec }) }),
                        !N && (0, a.jsx)(J.WithOffline, { fallback: (0, a.jsx)($.L, { onClick: et, isPinned: null == b ? void 0 : b.isPinned }) }),
                        (0, a.jsx)(J.WithOffline, {
                            fallback: (0, a.jsx)(M.T, {
                                onClick: ei,
                                isLiked: null == b ? void 0 : b.isLiked,
                                disabled: !Q.isAuthorized || !(null == b ? void 0 : b.isAvailable),
                            }),
                        }),
                        ef && (0, a.jsx)(J.WithOffline, { fallback: (0, a.jsx)(X.N, { onClick: eg }) }),
                        eT &&
                            (0, a.jsx)(J.WithOffline, {
                                fallback: (0, a.jsx)(Y.C, { onClick: ex, disabled: !(null == b ? void 0 : b.isAvailable), variant: U.I.ARTIST, onOpenMenuChange: f }),
                            }),
                        (0, a.jsx)(q.H, { disabled: !b, shareLink: eo, entityMeta: ek }),
                        ep &&
                            (0, a.jsx)(J.WithOffline, {
                                fallback: (0, a.jsx)(u.Dr, {
                                    onClick: ev,
                                    icon: (0, a.jsx)(c.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': n.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: eh,
                                }),
                            }),
                        (0, a.jsx)(J.WithOffline, {
                            fallback: (0, a.jsx)(V.D, { onClick: ea, isDisliked: null == b ? void 0 : b.isDisliked, disabled: !(null == b ? void 0 : b.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        48100: (e) => {
            e.exports = {
                root: 'PageHeaderTitle_root__ESu2q',
                editButton: 'PageHeaderTitle_editButton__KF4eh',
                editButton_centered: 'PageHeaderTitle_editButton_centered__W9EwU',
                textField: 'PageHeaderTitle_textField__LXJ3X',
                textField_long: 'PageHeaderTitle_textField_long__ReeJz',
                title: 'PageHeaderTitle_title__caKyB',
                version: 'PageHeaderTitle_version__g5BeO',
                version_withOtherVersions: 'PageHeaderTitle_version_withOtherVersions__Amfwk',
                heading: 'PageHeaderTitle_heading__UADXi',
                heading_withVersion: 'PageHeaderTitle_heading_withVersion__jw12r',
                textFieldContainer: 'PageHeaderTitle_textFieldContainer__FSD_B',
                font_long: 'PageHeaderTitle_font_long__q9Leq',
                font_short: 'PageHeaderTitle_font_short__76VRG',
                font_mobile: 'PageHeaderTitle_font_mobile__M1__v',
                stickyTitle: 'PageHeaderTitle_stickyTitle__CL1m4',
                titleWithLinkIcon: 'PageHeaderTitle_titleWithLinkIcon__mBP_B',
                titleWithLink: 'PageHeaderTitle_titleWithLink__pJZN5',
                linkContainer: 'PageHeaderTitle_linkContainer__KUyIF',
                linkText: 'PageHeaderTitle_linkText__rSUmw',
                arrowWrapper: 'PageHeaderTitle_arrowWrapper__cadS3',
                arrowWrapper_long: 'PageHeaderTitle_arrowWrapper_long__xhAjB',
                arrowWrapper_short: 'PageHeaderTitle_arrowWrapper_short__45ema',
                arrowWrapper_mobile: 'PageHeaderTitle_arrowWrapper_mobile__iYnjq',
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
        56117: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => c });
            var a = i(88800),
                r = i(84961),
                s = i(88969),
                l = i(17392),
                n = i(52300),
                o = i(19934),
                d = i(72288);
            let c = (0, r.PA)((e) => {
                let { isDisliked: t, onClick: i, disabled: r, className: c } = e,
                    { user: u } = (0, d.g)();
                return (0, a.jsx)(o.Dr, {
                    onClick: i,
                    className: c,
                    icon: (0, a.jsx)(n.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: r || !u.isAuthorized,
                    'data-test-id': l.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, a.jsx)(s.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        59378: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => d });
            var a = i(88800),
                r = i(65724),
                s = i(84961),
                l = i(53548),
                n = i(34970),
                o = i.n(n);
            let d = (0, s.PA)((e) => {
                let {
                        className: t,
                        text: i = '',
                        maxTextLength: s,
                        minTextLength: n,
                        variant: d = 'input',
                        shouldFinishOnKeyPress: c = !1,
                        placeholder: u,
                        onChangeFinish: _,
                        withOutline: m = !1,
                        readOnly: h = !1,
                        'aria-label': x,
                        'data-test-id': g,
                    } = e,
                    [v, k] = (0, l.useState)(i),
                    b = (0, l.useRef)(!1),
                    f = (0, l.useRef)(null),
                    p = (0, l.useCallback)((e) => {
                        k(e.target.value);
                    }, []),
                    T = (0, l.useCallback)(
                        (e) => {
                            if (c && ['Enter', 'Escape'].includes(e.key)) {
                                var t;
                                ('Escape' === e.key && (b.current = !0), null == (t = e.currentTarget) || t.blur());
                            }
                        },
                        [c],
                    ),
                    j = (0, l.useCallback)(() => {
                        let e = v.trim();
                        b.current || (n && e.length < n) ? ((b.current = !1), null == _ || _(i)) : null == _ || _(e);
                    }, [v, b, n, _, i]);
                ((0, l.useEffect)(() => {
                    f.current && ((f.current.selectionStart = f.current.value.length), (f.current.selectionEnd = f.current.value.length));
                }, []),
                    (0, l.useLayoutEffect)(() => {
                        let e = f.current;
                        if (e) {
                            e.style.height = '0px';
                            let t = e.scrollHeight;
                            e.style.height = ''.concat(t, 'px');
                        }
                    }, [f, v]));
                let A = (0, l.useMemo)(() => ('textarea' === d ? (e) => (0, a.jsx)('textarea', { ref: f, rows: 6, ...e }) : (e) => (0, a.jsx)('input', { ...e })), [d]);
                return (0, a.jsx)(A, {
                    className: (0, r.$)(o().root, t, { [o().root_textarea]: 'textarea' === d, [o().root_outline]: m }),
                    type: 'text',
                    value: v,
                    readOnly: h,
                    maxLength: s,
                    onBlur: j,
                    onChange: p,
                    onKeyDown: T,
                    placeholder: u,
                    'aria-label': x,
                    autoFocus: !0,
                    'data-test-id': g,
                });
            });
        },
        64207: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => m });
            var a = i(88800),
                r = i(96706),
                s = i(53548),
                l = i(2058),
                n = i(79390),
                o = i(29595),
                d = i(74965),
                c = i(72288),
                u = i(66943),
                _ = i(54243);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, d.l)(),
                    [m, h] = (0, s.useState)(!1),
                    { formatMessage: x } = (0, l.A)();
                return (0, s.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, a.jsx)(u.h, { error: x({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let s = { ...(0, r.HO)(e), isLiked: !e.isLiked };
                    h(!0);
                    let l = await e.toggleLike();
                    (h(!1),
                        l === n.f.OK
                            ? i((0, a.jsx)(_.T, { artist: s }), { containerId: o.u.INFO })
                            : i((0, a.jsx)(u.h, { error: x({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, m, x, i]);
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
        74929: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => u });
            var a = i(88800),
                r = i(53548),
                s = i(97234),
                l = i(42592),
                n = i(90852),
                o = i(47934),
                d = i(10079);
            let c = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: r,
                        title: c,
                        description: u,
                        albums: _,
                        className: m,
                        containerClassName: h,
                        headerClassName: x,
                        viewAllActionLink: g,
                        headingRef: v,
                        headingVariant: k,
                        shouldSendAnalyticsOnLoaded: b,
                        ...f
                    } = e;
                    return (
                        (0, l.W)({ enabled: !!b && !i }),
                        (0, a.jsx)(o.O, {
                            isShimmerVisible: i,
                            isShimmerActive: r,
                            className: m,
                            headerClassName: x,
                            containerClassName: h,
                            ref: t,
                            title: c,
                            description: u,
                            viewAllActionLink: g,
                            headingRef: v,
                            headingVariant: k,
                            ...f,
                            children:
                                null == _
                                    ? void 0
                                    : _.map((e, t) =>
                                          (0, a.jsx)(
                                              n.B,
                                              {
                                                  objectType: s.DomainObjectType.Album,
                                                  objectId: String(e.id),
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  children: (0, a.jsx)(d.a, {
                                                      album: e,
                                                      contentLinesCount: 3,
                                                      withAddition: !e.isNonMusic,
                                                      withLikesCount: e.isNonMusic,
                                                  }),
                                              },
                                              e.id,
                                          ),
                                      ),
                        })
                    );
                },
                u = (0, r.forwardRef)((e, t) => (0, a.jsx)(c, { forwardRef: t, ...e }));
        },
        77455: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => _ });
            var a = i(88800),
                r = i(96706),
                s = i(53548),
                l = i(2058),
                n = i(29595),
                o = i(74965),
                d = i(72288),
                c = i(66943),
                u = i(64247);
            let _ = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: _ } = (0, l.A)(),
                    [m, h] = (0, s.useState)(!1);
                return (0, s.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, a.jsx)(c.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (m) return;
                    let s = { ...(0, r.HO)(e), isPinned: !e.isPinned };
                    h(!0);
                    let l = await e.togglePin();
                    (h(!1),
                        l
                            ? i((0, a.jsx)(u.l, { artist: s }), { containerId: n.u.INFO })
                            : i((0, a.jsx)(c.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [e, t.isAuthorized, m, _, i]);
            };
        },
        85074: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        90852: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => d });
            var a = i(88800),
                r = i(53548),
                s = i(24709),
                l = i(66368),
                n = i(37556),
                o = i(88966);
            let d = (0, s.B)(
                { kind: 'provider', requiredProps: ['objectType', 'objectId', 'objectPosX', 'objectPosY'], pendingProps: ['objectId'], scope: 'object' },
                ({ children: e, objectId: t, objectPosX: i, objectPosY: s, objectType: d }) => {
                    let c = (0, o.N)(),
                        u = (0, r.useContext)(l.p)?.loadedSession,
                        _ = [d, t, i, s].join(':'),
                        [m, h] = (0, r.useState)(() => ({ client: c, identity: _, blockSession: u, viewSession: c.createBlockViewSession() }));
                    (m.client !== c || m.identity !== _ || m.blockSession !== u) &&
                        h({ client: c, identity: _, blockSession: u, viewSession: c.createBlockViewSession() });
                    let x = (0, r.useMemo)(
                        () => ({ activeViewSession: null, scope: { objectId: t, objectPosX: i, objectPosY: s, objectType: d }, viewSession: m.viewSession }),
                        [t, i, s, d, m.viewSession],
                    );
                    return (0, a.jsx)(n.l, { value: x, children: e });
                },
            );
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
    },
    (e) => {
        (e.O(
            0,
            [
                9904, 917, 7191, 3078, 1833, 8194, 1191, 8655, 8099, 6706, 4771, 1311, 2662, 6904, 1898, 2058, 3578, 8628, 4378, 9780, 8283, 9332, 2837, 9202, 4732, 9087,
                3979, 6719, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 6374, 2088, 8979, 3300, 8466, 763, 2670, 7358,
            ],
            () => e((e.s = 28127)),
        ),
            (_N_E = e.O()));
    },
]);
