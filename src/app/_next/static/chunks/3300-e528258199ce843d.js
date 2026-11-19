(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3300],
    {
        2350: (e) => {
            e.exports = {
                root: 'CarouselBlock_root__aeOla',
                controls: 'CarouselBlock_controls__vsHCR',
                shimmerTitle: 'CarouselBlock_shimmerTitle__ZXIRx',
                item: 'CarouselBlock_item__DatZ2',
                important: 'CarouselBlock_important__AARmP',
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
        10079: (e, t, r) => {
            'use strict';
            r.d(t, { a: () => Q });
            var i = r(88800),
                a = r(65724),
                s = r(84961),
                l = r(53548),
                n = r(2058),
                o = r(97234),
                c = r(91177),
                u = r(70598),
                d = r(46482),
                _ = r(17392),
                m = r(18593),
                h = r(61691),
                p = r(29993),
                v = r(79070),
                f = r(29832),
                C = r(52300),
                b = r(7555),
                g = r(29504),
                x = r(60757),
                k = r(29008),
                A = r(92966),
                y = r(56651),
                N = r(13946),
                j = r(43443),
                L = r(5407),
                T = r(57934),
                S = r(84384),
                O = r(4795),
                R = r(87762),
                B = r(32414),
                w = r(78940),
                P = r(55693),
                E = r(39079),
                I = r(72288),
                M = r(52726),
                D = r(86298),
                z = r(81877),
                U = r(90224),
                H = r(49738),
                K = r(91292),
                F = r(56862),
                W = r(16704),
                $ = r(56446),
                V = r(36207),
                X = r(41918);
            let G = { mainAxis: -26, alignmentAxis: -16 },
                Z = { isEnabled: !0, width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' };
            var q = r(95756),
                Y = r(28304),
                J = r.n(Y);
            let Q = (0, s.PA)((e) => {
                let {
                        className: t,
                        children: r,
                        album: s,
                        contentLinesCount: Y,
                        withLikesCount: Q,
                        withChart: ee,
                        withAddition: et = !0,
                        withArtistName: er = !0,
                        releaseDateFormatter: ei = B.s,
                    } = e,
                    ea = (0, c.D)(),
                    {
                        user: es,
                        trailer: el,
                        settings: { isMobile: en },
                        albumCPA: { isPlusCPAEnabled: eo },
                        paywall: { modal: ec },
                    } = (0, I.g)(),
                    { from: eu, utmLink: ed } = (0, S.f)({ contextId: s.id, contextType: m.K.Album, utmForPageIds: s.artistIds }),
                    { formatMessage: e_, formatDate: em } = (0, n.A)(),
                    { sendLikeSearchFeedback: eh, sendNavigateSearchFeedback: ep, sendPlaySearchFeedback: ev } = (0, P.z)(),
                    [ef, eC] = (0, l.useState)(!1),
                    [eb, eg] = (0, l.useState)(!1),
                    [ex, ek] = (0, l.useState)(!1),
                    eA = (0, u.S)(),
                    ey = (0, d.g)(),
                    eN = (0, A.K)(s),
                    ej = (0, y.A)(s),
                    eL = (0, w.Z)(s.url),
                    [eT, eS] = (0, l.useState)(!1),
                    eO = (0, T.F)(),
                    [eR, eB] = (0, l.useState)(!1),
                    ew = (0, L.P)(),
                    { pageAlbumId: eP } = (0, R.T)(),
                    eE = eo({ pageAlbumId: eP, albumId: s.id, isNonMusic: s.isNonMusic }),
                    eI = (0, O.N)(),
                    eM = s.isAvailableOnlyForPlus && !s.isUnsafeLegal && !s.isLegalRejected,
                    eD = eM && !en,
                    ez = s.isAvailable || eD || s.isAudiobook,
                    eU = (0, p.c)((e) => {
                        if ((e.stopPropagation(), ew())) return void e.preventDefault();
                        (el.openAlbumTrailer(s.id), eO(o.DomainObjectType.Album, String(s.id)));
                    }),
                    eH = s.type === h._.SINGLE ? e_({ id: 'entity-names.single' }) : void 0,
                    eK = s.releaseDate ? em(s.releaseDate, ei()) : void 0,
                    eF = ((e) => {
                        let t = e.filter((e) => !!e).join(' \xb7 ');
                        return 0 === t.length ? null : t;
                    })([null != eK ? eK : s.year, eH]),
                    eW = (0, k.r)(s.type),
                    e$ = (0, l.useMemo)(() => {
                        var e;
                        let t = s.isLiked ? e_({ id: 'entity-names.has-your-like' }) : '';
                        return ''
                            .concat(eW, ' ')
                            .concat(s.title, ' ')
                            .concat(null != (e = s.version) ? e : '', ' ')
                            .concat(t);
                    }, [eW, e_, s.title, s.isLiked, s.version]),
                    { isPlaying: eV, togglePlay: eX } = (0, E.D)({
                        playContextParams: { contextData: { type: m.K.Album, meta: { id: s.id }, from: eu, utmLink: ed }, loadContextMeta: !0 },
                    }),
                    eG = (0, x.c)({ album: s, callback: eL }),
                    eZ = (0, x.c)({ album: s, callback: eX }),
                    eq = (0, p.c)((e) => {
                        (eA({ to: o.AppScreen.AlbumScreen }), null == ep || ep(), eG(e));
                    }),
                    eY = (0, p.c)(() => {
                        if (!ew()) {
                            if (eI) return void ec.open();
                            (eb || eV || (eg(!0), null == ev || ev()), eZ(), eV || ey());
                        }
                    }),
                    eJ = (0, p.c)(() => {
                        (ef || s.isLiked || (eC(!0), null == eh || eh()), eN());
                    }),
                    eQ = (0, p.c)((e) => {
                        (ek(e), eS(e));
                    }),
                    e0 = (0, l.useMemo)(() => {
                        var e;
                        return (0, i.jsxs)(g.HL, {
                            className: (0, a.$)(J().title, { [J().title_withVersion]: s.version, [J().title_withChart]: ee }),
                            variant: 'div',
                            type: 'entity',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 2,
                            'aria-hidden': !0,
                            'data-test-id': _.Kq.album.ALBUM_TITLE,
                            children: [
                                (0, i.jsx)(K.N, {
                                    'aria-label': ''.concat(s.title, ' ').concat(null != (e = s.version) ? e : ''),
                                    className: J().titleLink,
                                    href: s.url,
                                    tabIndex: -1,
                                    onClick: eq,
                                    'data-test-id': _.Kq.album.ALBUM_TITLE_LINK,
                                    children: s.title,
                                }),
                                s.version &&
                                    (0, i.jsx)(g.HL, {
                                        className: J().version,
                                        variant: 'span',
                                        'data-test-id': _.Kq.album.ALBUM_VERSION,
                                        children: ' '.concat(s.version),
                                    }),
                            ],
                        });
                    }, [s.title, s.url, s.version, eq, ee]),
                    e8 = (0, l.useMemo)(() => {
                        var e;
                        return (0, i.jsx)(K.N, {
                            className: J().srTitleLink,
                            href: s.url,
                            onClick: eq,
                            children: ''.concat(s.title, ' ').concat(null != (e = s.version) ? e : ''),
                        });
                    }, [s.title, s.url, s.version, eq]),
                    e2 = (0, l.useMemo)(() => {
                        var e;
                        if (null == s || null == (e = s.trailer) ? void 0 : e.isAvailable)
                            return (0, i.jsx)(
                                V.n,
                                {
                                    children: (0, i.jsx)(
                                        $.k,
                                        { className: (0, a.$)(J().trailerButton, J().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eU },
                                        s.getKey('TrailerButton'),
                                    ),
                                },
                                s.getKey('AlbumCardTrailerTooltip'),
                            );
                    }, [s, eU]),
                    e1 = (0, l.useMemo)(
                        () =>
                            (0, i.jsx)(
                                q.x,
                                {
                                    album: s,
                                    onOpenChange: eQ,
                                    open: ex,
                                    className: (0, a.$)(J().menuButton, J().control),
                                    icon: (0, i.jsx)(C.I, { size: 'xxs', variant: 'more' }),
                                    size: 's',
                                    variant: X.z.CARD,
                                    'data-test-id': _.Kq.album.ALBUM_CONTEXT_MENU_BUTTON,
                                },
                                s.getKey('AlbumContextMenu'),
                            ),
                        [s, eQ, ex],
                    ),
                    e9 = (0, l.useCallback)(
                        () =>
                            (0, i.jsx)(
                                W.D,
                                {
                                    className: (0, a.$)(J().playButton, J().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                    onClick: eY,
                                    isPlaying: eV,
                                    disabled: eD,
                                },
                                s.getKey('PlayButton'),
                            ),
                        [eD, s, eV, eY],
                    ),
                    e4 = (0, l.useMemo)(
                        () =>
                            eD
                                ? (0, i.jsx)(M.S, {
                                      className: J().buyPlusPopover,
                                      buttonText: e_({ id: 'interface-actions.more-details' }),
                                      isNested: !0,
                                      placement: 'top-start',
                                      isOpened: eR,
                                      onOpenChange: eB,
                                      textVariant: 'album',
                                      albumTextVariant: s.type,
                                      arrowProps: Z,
                                      offsetOptions: G,
                                      renderChildren: e9,
                                  })
                                : e9(),
                        [eD, eR, eB, e_, e9, s.type],
                    ),
                    e7 = (0, v.L)(() => {
                        if (eD) return;
                        let e = !eE && !es.isAuthorized;
                        return (0, i.jsx)(
                            H.c,
                            {
                                className: (0, a.$)(J().likeButton, J().control),
                                isLiked: s.isLiked,
                                onClick: eJ,
                                variant: 'default',
                                size: 's',
                                iconSize: 'xxs',
                                disabled: e,
                            },
                            s.getKey('LikeButton'),
                        );
                    }),
                    e5 = (0, l.useMemo)(() => {
                        if (!eD)
                            return (0, i.jsx)(
                                F.O,
                                { onClick: ej, isPinned: s.isPinned, className: (0, a.$)(J().pinButton, J().control), withRipple: !1, isDisabled: eD },
                                s.getKey('PinButton'),
                            );
                    }, [s, eD, ej]),
                    e6 = (0, l.useMemo)(() => {
                        if (s.isAvailable || eD)
                            return (0, i.jsx)(f.hg, {
                                isVisible: ex || eT || eR,
                                className: J().controls,
                                playControl: e4,
                                likeControl: e7,
                                menuControl: e1,
                                pinControl: e5,
                                trailerControl: e2,
                            });
                    }, [s, ex, eT, e1, e2, eR, e4, e7, e5, eD]),
                    e3 = (0, l.useMemo)(
                        () =>
                            (0, i.jsx)(b.t, {
                                className: J().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': _.Kq.album.ALBUM_CARD,
                                children: (0, i.jsxs)('div', {
                                    className: J().coverBlock,
                                    onClick: eq,
                                    children: [
                                        (0, i.jsx)(z.B, {
                                            className: J().image,
                                            src: s.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: e$,
                                            withAvatarReplace: !0,
                                            isAvailable: ez,
                                            'aria-hidden': !0,
                                        }),
                                        eM && (0, i.jsx)(C.I, { variant: 'plusBadge', className: J().plusBadge }),
                                        e6,
                                    ],
                                }),
                            }),
                        [eq, s.coverUri, ez, e$, e6, eM],
                    );
                return (0, i.jsxs)(f.MN, {
                    ref: ea,
                    className: (0, a.$)(J().root, { [J().root_withChart]: ee }, t),
                    'aria-label': e$,
                    explicitMarkComponent:
                        s.explicitDisclaimer &&
                        (0, i.jsx)(
                            U.N,
                            { className: J().explicitMark, getDescriptionTexts: s.getDescriptionTexts, variant: s.explicitDisclaimer },
                            s.getKey('AlbumCardExplicitMarkIcon'),
                        ),
                    title: e0,
                    srTitle: e8,
                    contentLinesCount: Y,
                    view: e3,
                    description:
                        er &&
                        (0, i.jsx)(
                            N.i,
                            { className: J().artists, artists: s.artists, lineClamp: 1, linkClassName: J().artistLink, captionSize: 's' },
                            s.getKey('description'),
                        ),
                    chart:
                        ee &&
                        s.chart &&
                        (0, i.jsx)(j.t, { withIcon: !0, className: J().chart, position: s.chart.position, progress: s.chart.progress }, s.getKey('chart')),
                    'data-test-id': _.Kq.album.ALBUM_ITEM,
                    children: [
                        et &&
                            eF &&
                            (0, i.jsx)(g.HL, { className: J().addition, variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: eF }),
                        Q &&
                            !!s.actualLikesCount &&
                            (0, i.jsx)(D.x, {
                                className: J().likeTextButton,
                                ariaLabel: e_({ id: 'entity-names.likes-counter' }, { counter: s.actualLikesCount }),
                                likesCount: s.actualLikesCount,
                                isLiked: s.isLiked,
                                handleLikeClick: eN,
                            }),
                        r,
                    ],
                });
            });
        },
        13607: (e, t, r) => {
            'use strict';
            var i;
            (r.d(t, { _: () => i }),
                (function (e) {
                    ((e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new'));
                })(i || (i = {})));
        },
        16782: (e) => {
            e.exports = {
                root: 'BlockHeader_root__j3mbg',
                titleIcon: 'BlockHeader_titleIcon__GQFEK',
                start: 'BlockHeader_start__ZrGP5',
                coverContainer: 'BlockHeader_coverContainer__lATZT',
                cover: 'BlockHeader_cover__koOXq',
                textContainer: 'BlockHeader_textContainer___2wn9',
                title: 'BlockHeader_title__5xlx6',
                description: 'BlockHeader_description__hAk9D',
                description_widthLimit: 'BlockHeader_description_widthLimit__CXxK1',
                linkContainer: 'BlockHeader_linkContainer__EuW_L',
                linkText: 'BlockHeader_linkText__Or6VB',
                heading: 'BlockHeader_heading__4iqvS',
                heading_notAvailable: 'BlockHeader_heading_notAvailable__r_dm1',
                shimmerCover: 'BlockHeader_shimmerCover__m2PJl',
                textShimmerContainer: 'BlockHeader_textShimmerContainer__hT_Zo',
                shimmerTitle: 'BlockHeader_shimmerTitle__kAkgm',
                shimmerDescription: 'BlockHeader_shimmerDescription__Bya4z',
            };
        },
        18486: (e, t, r) => {
            'use strict';
            r.d(t, { T: () => b });
            var i = r(88800),
                a = r(65724),
                s = r(53548),
                l = r(97234),
                n = r(42592),
                o = r(70598),
                c = r(17392),
                u = r(52300),
                d = r(90688),
                _ = r(7555),
                m = r(19994),
                h = r(29504),
                p = r(91292),
                v = r(16782),
                f = r.n(v);
            let C = (e) => {
                    let {
                        className: t,
                        coverUrl: r,
                        labeledForId: v,
                        subTitle: C,
                        title: b,
                        description: g,
                        viewAllActionLink: x,
                        controls: k,
                        titleSize: A = 'm',
                        coverBackgroundColor: y,
                        coverRadius: N = 's',
                        titleClassName: j,
                        titleLineClamp: L,
                        fallbackIconVariant: T,
                        available: S = !0,
                        onViewAllAction: O,
                        titleChildren: R,
                        children: B,
                        headingRef: w,
                        coverContainerClassName: P,
                        headingVariant: E = 'h3',
                        withDescriptionWidthLimit: I = !0,
                        isShimmerVisible: M,
                        isShimmerActive: D,
                        withCover: z,
                        withDescription: U,
                        forwardRef: H,
                        shimmerCoverClassName: K,
                        shouldSendAnalyticsOnLoaded: F,
                        ...W
                    } = e;
                    (0, n.W)({ enabled: !!F });
                    let $ = (0, s.useRef)(null),
                        V = r || z,
                        X = g || U,
                        G = (0, s.useCallback)(() => {
                            $.current && 'focus' in $.current && $.current.focus();
                        }, []),
                        Z = (0, o.S)(),
                        q = (0, s.useCallback)(() => {
                            O ? O() : Z({ to: l.AppScreen.Link });
                        }, [Z, O]),
                        Y = (0, s.useMemo)(
                            () =>
                                b && x && S
                                    ? (0, i.jsxs)(p.N, {
                                          className: f().title,
                                          containerClassName: f().linkContainer,
                                          textClassName: f().linkText,
                                          icon: (0, i.jsx)(u.I, { className: f().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: x,
                                          onClick: q,
                                          'data-test-id': c.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, i.jsx)(h.DZ, {
                                                  id: v,
                                                  className: (0, a.$)(f().heading, j),
                                                  variant: E,
                                                  size: A,
                                                  weight: 'bold',
                                                  lineClamp: L,
                                                  ref: w,
                                                  children: b,
                                              }),
                                              R,
                                          ],
                                      })
                                    : (0, i.jsxs)('div', {
                                          className: f().title,
                                          children: [
                                              (0, i.jsx)(h.DZ, {
                                                  id: v,
                                                  className: (0, a.$)(f().heading, j, { [f().heading_notAvailable]: !S }),
                                                  variant: E,
                                                  size: A,
                                                  weight: 'bold',
                                                  lineClamp: L,
                                                  ref: w,
                                                  'data-test-id': c.S7.BLOCK_HEADER_TITLE,
                                                  children: b,
                                              }),
                                              R,
                                          ],
                                      }),
                            [S, q, w, E, v, b, j, L, A, x, R],
                        ),
                        J = (0, s.useMemo)(() => (U && M ? (0, i.jsx)(m.W, { isActive: D, className: f().shimmerDescription }) : g), [U, M, g, D]),
                        Q = (0, s.useMemo)(
                            () =>
                                z && M
                                    ? (0, i.jsx)(m.W, { isActive: D, className: (0, a.$)(f().shimmerCover, K), radius: 's' })
                                    : (0, i.jsx)(d._V, {
                                          src: r,
                                          fallbackIconVariant: T,
                                          style: { backgroundColor: y },
                                          className: f().cover,
                                          ref: $,
                                          onClick: G,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': c.S7.BLOCK_HEADER_COVER,
                                      }),
                            [y, r, T, G, D, M, K, z],
                        );
                    return (0, i.jsxs)('div', {
                        className: (0, a.$)(f().root, t),
                        ref: H,
                        ...W,
                        'data-test-id': c.S7.BLOCK_HEADER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: f().start,
                                children: [
                                    V && (0, i.jsx)(_.t, { radius: N, className: (0, a.$)(f().coverContainer, P), children: Q }),
                                    (0, i.jsxs)('div', {
                                        className: f().textContainer,
                                        children: [
                                            C,
                                            Y,
                                            X &&
                                                (0, i.jsx)(h.HL, {
                                                    id: ''.concat(v, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: I ? 2 : void 0,
                                                    className: (0, a.$)(f().description, { [f().description_widthLimit]: I }),
                                                    'data-test-id': c.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: J,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            k || B,
                        ],
                    });
                },
                b = (0, s.forwardRef)((e, t) => (0, i.jsx)(C, { forwardRef: t, ...e }));
        },
        25883: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => n });
            var i = r(88800),
                a = r(84961),
                s = r(33719),
                l = r(5048);
            let n = (0, a.PA)((e) => {
                let { album: t, closeToast: r } = e,
                    a = (0, l.b)(t.type);
                return (0, i.jsx)(s.k, {
                    closeToast: r,
                    entityVariant: a,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.title,
                    isPinned: t.isPinned,
                    radius: 's',
                });
            });
        },
        28304: (e) => {
            e.exports = {
                controls: 'AlbumCard_controls__yuO40',
                cover: 'AlbumCard_cover__zXmdl',
                root: 'AlbumCard_root__vP6k4',
                srTitleLink: 'AlbumCard_srTitleLink__TxBNz',
                root_withChart: 'AlbumCard_root_withChart__J2SZv',
                artists: 'AlbumCard_artists__phKco',
                likeTextButton: 'AlbumCard_likeTextButton__2AQd9',
                coverBlock: 'AlbumCard_coverBlock__94ZzY',
                image: 'AlbumCard_image__Mm55s',
                titleLink: 'AlbumCard_titleLink__u_WLG',
                title: 'AlbumCard_title__8YvhT',
                title_withVersion: 'AlbumCard_title_withVersion__NClAp',
                title_withChart: 'AlbumCard_title_withChart__PVOiJ',
                chart: 'AlbumCard_chart__gASdj',
                version: 'AlbumCard_version__h2aJz',
                artistLink: 'AlbumCard_artistLink__uPR_2',
                playButton: 'AlbumCard_playButton__mYK9R',
                likeButton: 'AlbumCard_likeButton__9B9C0',
                menuButton: 'AlbumCard_menuButton__pxkA6',
                pinButton: 'AlbumCard_pinButton__Mdi_E',
                trailerButton: 'AlbumCard_trailerButton__typHh',
                control: 'AlbumCard_control__qx7Xh',
                plusBadge: 'AlbumCard_plusBadge__i0FkP',
                buyPlusPopover: 'AlbumCard_buyPlusPopover__Kb79C',
            };
        },
        29008: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => l, r: () => n });
            var i = r(53548),
                a = r(2058),
                s = r(61691),
                l = (function (e) {
                    return ((e.PIN = 'pin'), e);
                })({});
            let n = (e, t) => {
                let { formatMessage: r } = (0, a.A)();
                return (0, i.useMemo)(() => {
                    switch (e) {
                        case s._.SINGLE:
                            return r({ id: 'entity-names.single' });
                        case s._.PODCAST:
                            return r({ id: 'entity-names.podcast' });
                        case s._.AUDIOBOOK:
                            if ('pin' === t) return r({ id: 'entity-names.book' });
                            return r({ id: 'entity-names.audio' });
                        case s._.FAIRY_TALE:
                            return r({ id: 'entity-names.fairy-tale' });
                        default:
                            return r({ id: 'entity-names.album' });
                    }
                }, [e, r, t]);
            };
        },
        31764: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => _ });
            var i = r(88800),
                a = r(65724),
                s = r(53548),
                l = r(17392),
                n = r(88021),
                o = r(96817),
                c = r(52300),
                u = r(89544),
                d = r.n(u);
            let _ = (e) => {
                let {
                        carouselRef: t,
                        backwardControlClassName: r,
                        forwardControlClassName: u,
                        className: _,
                        withSecondaryColor: m,
                        buttonSize: h = 'xxxs',
                        buttonVariant: p = 'outline',
                    } = e,
                    { swipeBackward: v, swipeForward: f, shouldBackwardButtonBeDisabled: C, shouldForwardButtonBeDisabled: b, shouldHideControls: g } = (0, n.Y)(t),
                    x = (0, s.useCallback)(
                        (e) => {
                            (v(), e.stopPropagation());
                        },
                        [v],
                    ),
                    k = (0, s.useCallback)(
                        (e) => {
                            (f(), e.stopPropagation());
                        },
                        [f],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, a.$)(d().root, _),
                    'data-test-id': l.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, i.jsx)(o.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, a.$)(d().control, r, { [d().control_hidden]: g, [d().control_withSecondaryColor]: m }),
                            onClick: x,
                            size: h,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: C,
                            'data-test-id': l.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, i.jsx)(o.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, a.$)(d().control, u, { [d().control_hidden]: g, [d().control_withSecondaryColor]: m }),
                            onClick: k,
                            size: h,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: b,
                            'data-test-id': l.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        32414: (e, t, r) => {
            'use strict';
            r.d(t, { s: () => i });
            let i = () => ({ year: 'numeric', month: 'long', day: 'numeric' });
        },
        35962: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => s });
            var i = r(88800),
                a = r(37770);
            let s = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Array.from({ length: 9 }, (t, r) => (0, i.jsx)(a.V, { ...e }, r));
            };
        },
        41918: (e, t, r) => {
            'use strict';
            r.d(t, { z: () => i });
            var i = (function (e) {
                return ((e.PAGE = 'PAGE'), (e.CARD = 'CARD'), e);
            })({});
        },
        43443: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => h });
            var i = r(88800),
                a = r(65724),
                s = r(84961),
                l = r(53548),
                n = r(2058),
                o = r(17392),
                c = r(13607),
                u = r(52300),
                d = r(29504),
                _ = r(3099),
                m = r.n(_);
            let h = (0, s.PA)((e) => {
                let {
                        progress: t,
                        withIcon: r,
                        withCrownIcon: s,
                        position: _,
                        weight: h = 'normal',
                        isDisliked: p,
                        isDisabled: v,
                        className: f,
                        positionClassName: C,
                    } = e,
                    { formatMessage: b } = (0, n.A)(),
                    g = t || r,
                    x = (0, l.useMemo)(() => {
                        if (s) return 'crown';
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
                    }, [t, s]),
                    k = (0, l.useMemo)(() => {
                        switch (t) {
                            case c._.UP:
                                return b({ id: 'entity-names.chart-up' });
                            case c._.DOWN:
                                return b({ id: 'entity-names.chart-down' });
                            case c._.NEW:
                                return b({ id: 'entity-names.chart-new' });
                            default:
                                return b({ id: 'entity-names.chart-same' });
                        }
                    }, [b, t]),
                    A = s ? 'crown' : t;
                return (0, i.jsxs)('div', {
                    className: (0, a.$)(m().root, f),
                    'data-test-id': o.OA.chart.CHART_PROGRESS,
                    children: [
                        (0, i.jsx)(d.HL, {
                            variant: 'div',
                            weight: h,
                            type: 'entity',
                            size: 'm',
                            className: (0, a.$)(m().position, C, { [m().position_disliked]: p, [m().position_disabled]: v }),
                            'data-test-id': o.OA.chart.CHART_PROGRESS_POSITION,
                            children: _,
                        }),
                        g &&
                            (0, i.jsx)(u.I, {
                                variant: x,
                                size: 'xxs',
                                'aria-label': k,
                                className: (0, a.$)(m().progress, m()['progress_'.concat(A)], { [m().progress_disliked]: p, [m().progress_disabled]: v }),
                                'data-test-id': o.OA.chart.CHART_PROGRESS_ICON,
                            }),
                    ],
                });
            });
        },
        47934: (e, t, r) => {
            'use strict';
            r.d(t, { O: () => C });
            var i = r(88800),
                a = r(65724),
                s = r(53548),
                l = r(35412),
                n = r(97234),
                o = r(90852),
                c = r(79070),
                u = r(53323),
                d = r(19994),
                _ = r(18486),
                m = r(31764),
                h = r(35962),
                p = r(2350),
                v = r.n(p);
            let f = (e) => {
                    let {
                            forwardRef: t,
                            shimmerClassName: r,
                            isShimmerVisible: p,
                            isShimmerActive: f,
                            isShimmerWithSubcover: C,
                            isShimmerCentered: b,
                            isShimmerRounded: g,
                            title: x,
                            description: k,
                            coverUrl: A,
                            viewAllActionLink: y,
                            titleChildren: N,
                            headerChildren: j,
                            children: L,
                            className: T,
                            containerClassName: S,
                            headerClassName: O,
                            itemClassName: R,
                            showHeaderShimmer: B = !1,
                            showShimmerInfo: w = !0,
                            showControls: P = !0,
                            headingRef: E,
                            headingVariant: I,
                            customShimmer: M,
                            ...D
                        } = e,
                        z = (0, s.useId)(),
                        U = (0, s.useRef)(null),
                        H = (0, s.useMemo)(
                            () =>
                                B && p
                                    ? (0, i.jsx)('div', { className: O, children: (0, i.jsx)(d.W, { isActive: f, className: v().shimmerTitle, radius: 'l' }) })
                                    : x || k || N || j
                                      ? (0, i.jsx)(o.B, {
                                            objectType: n.DomainObjectType.Shortcut,
                                            objectId: String(y),
                                            objectPosX: 1,
                                            objectPosY: 1,
                                            children: (0, i.jsx)(_.T, {
                                                className: O,
                                                labeledForId: z,
                                                title: x,
                                                description: k,
                                                coverUrl: A,
                                                viewAllActionLink: y,
                                                controls: P && (0, i.jsx)(m.X, { className: v().controls, carouselRef: U }),
                                                headingRef: E,
                                                headingVariant: I,
                                                withDescription: !!k,
                                                titleChildren: N,
                                                children: j,
                                            }),
                                        })
                                      : void 0,
                            [A, k, O, E, I, z, f, p, P, B, x, N, j, y],
                        ),
                        K = (0, c.L)(() => M || (0, h.k)({ className: r, isActive: f, withInfo: w, withSubcover: C, centered: b, round: g }));
                    return (0, i.jsxs)('section', {
                        ref: t,
                        className: (0, a.$)(v().root, T),
                        ...(0, l.OZ)(D),
                        children: [
                            H,
                            (0, i.jsx)(u.F, {
                                className: S,
                                ref: U,
                                itemClassName: (0, a.$)(v().item, v().important, R),
                                'aria-labelledby': ''.concat(z, ' ').concat(z, '-description'),
                                children: p ? K : L,
                            }),
                        ],
                    });
                },
                C = (0, s.forwardRef)((e, t) => (0, i.jsx)(f, { forwardRef: t, ...e }));
        },
        53323: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => u });
            var i,
                a = r(87819),
                s = r(53548),
                l = {
                    5881: (e, t, r) => {
                        function i() {
                            for (var e, t, r = 0, i = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            i,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (i = e(t[r])) && (a && (a += ' '), (a += i));
                                            else for (r in t) t[r] && (a && (a += ' '), (a += r));
                                        return a;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (r.r(t), r.d(t, { clsx: () => i, default: () => a }));
                        let a = i;
                    },
                    2876: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = { root: 'IZnFMW4gXBshJODnvB1P', item: 'VJ9IexhAEuYSCyGiMfN4' };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var a = null;
                            if ((void 0 !== i && (a = '' + i), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var s in ((i = {}), t)) 'key' !== s && (i[s] = t[s]);
                            else i = t;
                            return { $$typeof: r, type: e, key: a, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    792: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useCallbackRef = void 0));
                        let i = r(810);
                        t.useCallbackRef = function (e) {
                            let t = (0, i.useRef)({
                                stableFn: function () {
                                    for (var e = arguments.length, r = Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                                    return t.current.callback(...r);
                                },
                                callback: e,
                            });
                            return (
                                (0, i.useInsertionEffect)(() => {
                                    t.current.callback = e;
                                }),
                                t.current.stableFn
                            );
                        };
                    },
                    597: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useIntersectionObserver = t.createIntersectionObserver = t.getElementNameByDataAttribute = t.isInViewportNow = t.defaultOptions = void 0));
                        let i = r(810),
                            { innerWidth: a = 0, innerHeight: s = 0 } = window;
                        function l(e) {
                            let { top: t, right: r, bottom: i, left: l } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= s) || (i >= 0 && i <= s)) && ((l >= 0 && l <= a) || (r >= 0 && r <= a));
                        }
                        function n(e) {
                            var t, r;
                            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (r = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, i)) ? r : e.attributes[0];
                        }
                        function o(e, t) {
                            let r = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, r);
                                });
                            }, t);
                            return r;
                        }
                        ((t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = l),
                            (t.getElementNameByDataAttribute = n),
                            (t.createIntersectionObserver = o),
                            (t.useIntersectionObserver = function (e, r, a) {
                                let [{ freezeOnceVisible: s, preflightCheck: c, ...u }, d = !1] =
                                        'boolean' == typeof r || void 0 === r ? [t.defaultOptions, r] : [{ ...t.defaultOptions, ...r }, a],
                                    [_, m] = (0, i.useState)({}),
                                    h = (0, i.useRef)(new Set()),
                                    p = (0, i.useMemo)(
                                        () =>
                                            d
                                                ? null
                                                : o((e) => {
                                                      let t = n(e.target);
                                                      if (t && p) {
                                                          if (h.current.has(t)) return;
                                                          (m((r) => ({ ...r, [t]: { isIntersecting: e.isIntersecting } })),
                                                              s && e.isIntersecting && (h.current.add(t), p.unobserve(e.target)));
                                                      }
                                                  }, u),
                                        [d],
                                    );
                                return (
                                    (0, i.useLayoutEffect)(
                                        () => (
                                            p &&
                                                !d &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let t = !1;
                                                        if (c && (t = l(e.current))) {
                                                            let t = n(e.current);
                                                            m((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                                                        }
                                                        t || p.observe(e.current);
                                                    }
                                                }),
                                            () => {
                                                p && p.disconnect();
                                            }
                                        ),
                                        [d, p, e.length],
                                    ),
                                    _
                                );
                            }));
                    },
                    4012: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useMergeRefs = void 0));
                        var i = r(1964);
                        Object.defineProperty(t, 'useMergeRefs', {
                            enumerable: !0,
                            get: function () {
                                return i.useMergeRefs;
                            },
                        });
                    },
                    1676: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useToggle = void 0));
                        let i = r(810);
                        t.useToggle = (e) => {
                            let [t, r] = (0, i.useState)(e);
                            (0, i.useEffect)(() => {
                                r(e);
                            }, [e]);
                            let a = (0, i.useCallback)(() => {
                                    r((e) => !e);
                                }, []),
                                s = (0, i.useCallback)(() => {
                                    r(!0);
                                }, []),
                                l = (0, i.useCallback)(() => {
                                    r(!1);
                                }, []);
                            return { state: t, toggle: a, setState: r, toggleTrue: s, toggleFalse: l };
                        };
                    },
                    1258: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.AutoScrollCarousel = void 0));
                        let i = r(4377),
                            a = r(810),
                            s = r(792),
                            l = r(597),
                            n = r(4012),
                            o = r(1676),
                            c = r(7962),
                            u = r(2134),
                            d = r(7262);
                        t.AutoScrollCarousel = (e) => {
                            let {
                                    ref: t,
                                    children: r,
                                    autoplay: { enabled: _, delay: m, stopOnMouseEnter: h, stopOnFocusIn: p, stopOnInteraction: v },
                                    onPointerEnter: f,
                                    onPointerLeave: C,
                                    onPointerDown: b,
                                    onPointerUp: g,
                                    onPointerCancel: x,
                                    onFocus: k,
                                    onBlur: A,
                                    onScroll: y,
                                    onScrollEnd: N,
                                    ...j
                                } = e,
                                { state: L, toggleTrue: T, toggleFalse: S } = (0, o.useToggle)(!1),
                                { state: O, toggleTrue: R, toggleFalse: B } = (0, o.useToggle)(!1),
                                { state: w, setState: P, toggleFalse: E } = (0, o.useToggle)(!1),
                                { state: I, setState: M } = (0, o.useToggle)(!1),
                                { state: D, setState: z } = (0, o.useToggle)(!1),
                                { state: U, toggleTrue: H, toggleFalse: K } = (0, o.useToggle)(!1),
                                { state: F, toggleTrue: W } = (0, o.useToggle)(!1),
                                { state: $, setState: V } = (0, o.useToggle)(!1),
                                X = (0, a.useRef)(null),
                                G = (0, n.useMergeRefs)([X, t]),
                                Z = (0, d.useScrollEndFallback)(K),
                                q = a.Children.count(r),
                                Y = _ && q > 1 && I && D && !$ && !((h && w) || (p && L) || (v && F) || O || U),
                                J = (0, s.useCallbackRef)((e) => {
                                    (P('mouse' === e.pointerType), null == f || f(e));
                                }),
                                Q = (0, s.useCallbackRef)((e) => {
                                    (E(), B(), null == C || C(e));
                                }),
                                ee = (0, s.useCallbackRef)((e) => {
                                    (R(), W(), null == b || b(e));
                                }),
                                et = (0, s.useCallbackRef)((e) => {
                                    (B(), null == g || g(e));
                                }),
                                er = (0, s.useCallbackRef)((e) => {
                                    (B(), null == x || x(e));
                                }),
                                ei = (0, s.useCallbackRef)((e) => {
                                    (O || T(), null == k || k(e));
                                }),
                                ea = (0, s.useCallbackRef)((e) => {
                                    (e.currentTarget.contains(e.relatedTarget) || S(), null == A || A(e));
                                }),
                                es = (0, s.useCallbackRef)((e) => {
                                    (H(), Z(e.currentTarget), null == y || y(e));
                                }),
                                el = (0, s.useCallbackRef)((e) => {
                                    (K(), null == N || N(e));
                                });
                            return (
                                (0, a.useEffect)(() => {
                                    let e = matchMedia('(prefers-reduced-motion: reduce)'),
                                        t = () => V(e.matches);
                                    return (t(), e.addEventListener('change', t), () => e.removeEventListener('change', t));
                                }, [V]),
                                (0, a.useEffect)(() => {
                                    let e = X.current;
                                    if (!e) return;
                                    let t = (0, l.createIntersectionObserver)((e) => {
                                        M(e.isIntersecting && e.intersectionRatio > 0);
                                    });
                                    return (t.observe(e), () => t.disconnect());
                                }, [X, M]),
                                (0, a.useEffect)(() => {
                                    let e = () => z('visible' === document.visibilityState);
                                    return (document.addEventListener('visibilitychange', e), e(), () => document.removeEventListener('visibilitychange', e));
                                }, [z]),
                                (0, a.useEffect)(() => {
                                    let e = X.current;
                                    if (!e || !Y) return;
                                    let t = setInterval(() => {
                                        let r = (0, u.getNextCarouselScrollPosition)(e);
                                        void 0 !== r && (clearInterval(t), H(), e.scrollTo({ left: r, behavior: 'smooth' }));
                                    }, m);
                                    return () => clearInterval(t);
                                }, [X, m, Y, q, H]),
                                (0, i.jsx)(c.CarouselBase, {
                                    ref: G,
                                    ...j,
                                    onPointerEnter: J,
                                    onPointerLeave: Q,
                                    onPointerDown: ee,
                                    onPointerUp: et,
                                    onPointerCancel: er,
                                    onFocus: ei,
                                    onBlur: ea,
                                    onScroll: es,
                                    onScrollEnd: el,
                                    children: r,
                                })
                            );
                        };
                    },
                    2134: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getNextCarouselScrollPosition = void 0),
                            (t.getNextCarouselScrollPosition = (e) => {
                                let t = e.scrollWidth - e.clientWidth;
                                if (t <= 1) return;
                                let r = getComputedStyle(e),
                                    i = parseFloat(r.scrollPaddingLeft) || 0,
                                    a = parseFloat(r.scrollPaddingRight) || 0,
                                    s = e.getBoundingClientRect().left + e.clientLeft,
                                    l = 0;
                                for (let r of e.children) {
                                    let n = r.getBoundingClientRect(),
                                        o = getComputedStyle(r).scrollSnapAlign,
                                        c = n.left - s + e.scrollLeft,
                                        u = Math.max(0, Math.min(t, 'center' === o ? c + n.width / 2 - (e.clientWidth + i - a) / 2 : c - i));
                                    if (u > e.scrollLeft + 1) {
                                        l = u;
                                        break;
                                    }
                                }
                                if (!(1 >= Math.abs(l - e.scrollLeft))) return l;
                            }));
                    },
                    7262: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useScrollEndFallback = void 0));
                        let i = r(810),
                            a = r(792);
                        t.useScrollEndFallback = (e) => {
                            let t = (0, i.useRef)(void 0),
                                r = (0, a.useCallbackRef)(e);
                            return (
                                (0, i.useEffect)(() => () => clearTimeout(t.current), []),
                                (0, a.useCallbackRef)((e) => {
                                    'onscrollend' in e || (clearTimeout(t.current), (t.current = setTimeout(r, 200)));
                                })
                            );
                        };
                    },
                    4014: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Carousel = void 0));
                        let i = r(4377),
                            a = r(1258),
                            s = r(7962);
                        t.Carousel = (e) => {
                            let { autoplay: t, ...r } = e;
                            return t ? (0, i.jsx)(a.AutoScrollCarousel, { ...r, autoplay: t }) : (0, i.jsx)(s.CarouselBase, { ...r });
                        };
                    },
                    7962: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CarouselBase = void 0));
                        let a = r(4377),
                            s = r(5881),
                            l = r(810),
                            n = i(r(2876));
                        t.CarouselBase = (e) => {
                            let { className: t, itemClassName: r, children: i, ref: o, role: c, ...u } = e;
                            return (0, a.jsx)('ol', {
                                ref: o,
                                className: (0, s.clsx)(n.default.root, t),
                                ...u,
                                role: null != c ? c : 'list',
                                children: l.Children.map(i, (e) => (0, a.jsx)('li', { className: (0, s.clsx)(n.default.item, r), children: e })),
                            });
                        };
                    },
                    1964: (e) => {
                        e.exports = a;
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(s, 2));
                    },
                },
                n = {};
            function o(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var r = (n[e] = { exports: {} });
                return (l[e].call(r.exports, r, r.exports, o), r.exports);
            }
            ((o.d = (e, t) => {
                for (var r in t) o.o(t, r) && !o.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (o.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var c = {};
            (() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                var e = o(4014);
                Object.defineProperty(c, 'l', {
                    enumerable: !0,
                    get: function () {
                        return e.Carousel;
                    },
                });
            })();
            var u = c.l;
            c.X;
        },
        56651: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => _ });
            var i = r(88800),
                a = r(96706),
                s = r(53548),
                l = r(2058),
                n = r(29595),
                o = r(74965),
                c = r(72288),
                u = r(66943),
                d = r(25883);
            let _ = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: r } = (0, o.l)(),
                    { formatMessage: _ } = (0, l.A)(),
                    [m, h] = (0, s.useState)(!1);
                return (0, s.useCallback)(async () => {
                    if (!t.isAuthorized) return void r((0, i.jsx)(u.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (m) return;
                    let s = { ...(0, a.HO)(e), url: e.url, isPinned: !e.isPinned };
                    h(!0);
                    let l = await e.togglePin();
                    (h(!1),
                        l
                            ? r((0, i.jsx)(d.l, { album: s }), { containerId: n.u.INFO })
                            : r((0, i.jsx)(u.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [e, _, r, m, t.isAuthorized]);
            };
        },
        60757: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => a });
            var i = r(58217);
            let a = (e) => {
                let { album: t, callback: r, shouldHistoryBack: a } = e;
                return (0, i.l)({ entity: t, callback: r, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        84218: (e) => {
            e.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        86298: (e, t, r) => {
            'use strict';
            r.d(t, { x: () => _ });
            var i = r(88800),
                a = r(65724),
                s = r(2058),
                l = r(17392),
                n = r(96817),
                o = r(52300),
                c = r(29504),
                u = r(84218),
                d = r.n(u);
            let _ = (e) => {
                let { className: t, isLiked: r, likesCount: u, handleLikeClick: _, ariaLabel: m } = e,
                    { formatNumber: h } = (0, s.A)();
                return (0, i.jsx)(n.$, {
                    className: (0, a.$)(d().root, t),
                    onClick: _,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, i.jsx)(o.I, { variant: r ? 'likedVariant' : 'likeVariant', size: 'xxs', className: d().icon }),
                    'aria-label': m,
                    'data-test-id': l.S7.CARD_LIKES,
                    children: (0, i.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: h(u) }),
                });
            };
        },
        88021: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => u });
            var i,
                a = r(14022),
                s = r(53548),
                l = {
                    352: (e) => {
                        e.exports = a;
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(s, 2));
                    },
                },
                n = {};
            function o(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var r = (n[e] = { exports: {} });
                return (l[e](r, r.exports, o), r.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                let e = o(810),
                    t = o(352);
                c.l = (r) => {
                    let [i, a] = (0, e.useState)(!0),
                        [s, l] = (0, e.useState)(!0),
                        n = () => {
                            let e = null == r ? void 0 : r.current;
                            e && (a(0 === e.scrollLeft), l(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    ((0, e.useEffect)(() => {
                        n();
                    }, [r, n]),
                        (0, e.useEffect)(() => {
                            let e = null == r ? void 0 : r.current;
                            return (
                                null == e || e.addEventListener('scroll', n),
                                window.addEventListener('resize', n),
                                () => {
                                    (null == e || e.removeEventListener('scroll', n), window.removeEventListener('resize', n));
                                }
                            );
                        }, [r, n]));
                    let o = (0, e.useMemo)(
                        () =>
                            (0, t.throttle)(
                                () => {
                                    r && r.current && (r.current.scrollLeft += r.current.offsetWidth / 2);
                                },
                                420,
                                { trailing: !1 },
                            ),
                        [r],
                    );
                    return {
                        swipeBackward: (0, e.useMemo)(
                            () =>
                                (0, t.throttle)(
                                    () => {
                                        r && r.current && (r.current.scrollLeft -= r.current.offsetWidth / 2);
                                    },
                                    420,
                                    { trailing: !1 },
                                ),
                            [r],
                        ),
                        swipeForward: o,
                        shouldBackwardButtonBeDisabled: i,
                        shouldForwardButtonBeDisabled: s,
                        shouldHideControls: i && s,
                    };
                };
            })(),
                c.X);
            var u = c.l;
        },
        89544: (e) => {
            e.exports = {
                root: 'CarouselControls_root__E_hwc',
                control: 'CarouselControls_control__L8t4i',
                control_hidden: 'CarouselControls_control_hidden__pLrn6',
                control_withSecondaryColor: 'CarouselControls_control_withSecondaryColor__KqSEN',
            };
        },
        95756: (e, t, r) => {
            'use strict';

            r.d(t, { x: () => V });
            // for PulseSync WebHost: BEGIN imports for native addon context menu items
            var pulseSyncMenuJsx = r(88800),
                pulseSyncMenuItems = r(19934),
                pulseSyncMenuIcons = r(52300);
            // for PulseSync WebHost: END imports for native addon context menu items
            var i = r(88800),
                a = r(84961),
                s = r(53548),
                l = r(2058),
                n = r(97234),
                o = r(17392),
                c = r(18593),
                u = r(29993),
                d = r(19934),
                _ = r(18143),
                m = r(29595),
                h = r(74965),
                p = r(72288),
                v = r(66943),
                f = r(92966),
                C = r(56651),
                b = r(48749),
                g = r(22505),
                x = r(5407),
                k = r(64284),
                A = r(98427),
                y = r(57934),
                N = r(84384),
                j = r(9618),
                L = r(87762),
                T = r(95210),
                S = r(47964),
                O = r(46936),
                R = r(97956),
                B = r(98953),
                w = r(32721),
                P = r(18130),
                E = r(88969),
                I = r(52300);
            let M = (0, a.PA)((e) => {
                let { isFinished: t, onClick: r, className: a } = e,
                    { user: l } = (0, p.g)(),
                    n = (0, s.useMemo)(
                        () => (t ? (0, i.jsx)(E.A, { id: 'interface-actions.mark-all-non-listened' }) : (0, i.jsx)(E.A, { id: 'interface-actions.mark-all-listened' })),
                        [t],
                    );
                return (0, i.jsx)(d.Dr, {
                    className: a,
                    onClick: r,
                    icon: (0, i.jsx)(I.I, { variant: 'check', size: 'xxs' }),
                    disabled: !l.isAuthorized,
                    'data-test-id': o.S7.CONTEXT_MENU_MARK_ALL_LISTENED_BUTTON,
                    children: n,
                });
            });
            var D = r(93091),
                z = r(27817),
                U = r(74064),
                H = r(44988),
                K = r(15425),
                F = r(81066),
                W = r(18278),
                $ = r(41918);
            // for PulseSync: BEGIN download-to-file action in the album context menu
            var pulseSyncMst = r(5120);
            let pulseSyncDownloadAlbumToFile = (0, a.PA)((e) => {
                let { album: t } = e,
                    pulseSyncMigration_i_1 = (0, s.useCallback)(async () => {
                        try {
                            let { albumResource: e, modelActionsLogger: i } = (0, pulseSyncMst._$)(t),
                                r = await e.getAlbumWithTracksIds({
                                    albumId: t.id,
                                    resumeStream: !1,
                                }),
                                s = (r?.volumes || [])
                                    .flat()
                                    .map((e) => (e?.id ? ''.concat(e.id, ':').concat(t.id) : null))
                                    .filter(Boolean),
                                a = Array.isArray(t.artists)
                                    ? t.artists
                                          .map((e) => e.name)
                                          .filter(Boolean)
                                          .join(', ')
                                    : t.artistName,
                                n = [t.title];
                            (['album', 'single'].includes(t.type ?? 'album') && a && n.unshift(a),
                                s.length && window.musicDesktop?.pulsesync.downloads.tracks?.(s, t.type ?? 'album', n.join(' — ')));
                        } catch (e) {
                            try {
                                (0, pulseSyncMst._$)(t).modelActionsLogger.error(e);
                            } catch {}
                        }
                    }, [t]);
                return (0, i.jsx)(d.Dr, {
                    onClick: pulseSyncMigration_i_1,
                    disabled: !t?.id,
                    icon: (0, i.jsx)(I.I, {
                        variant: 'download',
                        size: 'xxs',
                    }),
                    children: 'Скачать в файл',
                });
            });
            // for PulseSync: END download-to-file action in the album context menu
            let V = (0, a.PA)((e) => {
                // for PulseSync WebHost: BEGIN refresh the album menu when native addon slots change
                let [, pulseSyncSetAlbumMenuRevision] = (0, s.useState)(0);
                (0, s.useEffect)(() => {
                    const onNativeSlotChange = (event) => {
                        if (event.detail === 'albumContextMenu') pulseSyncSetAlbumMenuRevision((revision) => revision + 1);
                    };
                    document.addEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                    pulseSyncSetAlbumMenuRevision((revision) => revision + 1);
                    return () => document.removeEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                }, []);
                // for PulseSync WebHost: END refresh the album menu when native addon slots change
                var t, r;
                let { album: a, children: E, onOpenChange: I, open: V, wrapperClassName: X, variant: G, ...Z } = e,
                    { shouldShowBuySubscriptionModal: q, showBuySubscriptionModal: Y } = (0, j.q)(),
                    {
                        settings: { isMobile: J },
                        trailer: Q,
                        user: ee,
                        experiments: et,
                        albumCPA: { isPlusCPAEnabled: er, isPlusCPAPlayerBarEnabled: ei },
                    } = (0, p.g)(),
                    ea = (0, f.K)(a),
                    es = (0, C.A)(a),
                    el = (0, y.F)(),
                    en = ''.concat(k.U.ALBUM, '-').concat(a.id),
                    eo = a.isNonMusic && G === $.z.PAGE,
                    ec = et.checkExperiment(R.z.WebEditorsFeatures, 'on'),
                    eu = !a.isNonMusic && !et.checkExperiment(R.z.WebNextProductWithoutRecommendation, 'on'),
                    { formatMessage: ed } = (0, l.A)(),
                    e_ = (0, x.P)(),
                    { pageAlbumId: em } = (0, L.T)(),
                    eh = er({ pageAlbumId: em, albumId: a.id, isNonMusic: a.isNonMusic }),
                    ep = ei(a.id, a.isNonMusic),
                    ev = (() => {
                        let { user: e, album: t, fullscreenPlayer: r } = (0, p.g)(),
                            { notify: a } = (0, h.l)(),
                            { formatMessage: n } = (0, l.A)();
                        return (0, s.useCallback)(async () => {
                            var s, l;
                            if (!t) return;
                            let o = r.modal.isOpened ? m.u.FULLSCREEN_ERROR : m.u.ERROR;
                            return e.isAuthorized
                                ? (await t.setListeningFinishedStatus()) !== _.T.OK
                                    ? void a((0, i.jsx)(v.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: o })
                                    : void (null == (l = t.meta) || l.updateFinished(!(null == (s = t.meta) ? void 0 : s.listeningFinished)))
                                : void a((0, i.jsx)(v.h, { error: n({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o });
                        }, [n, a, t, e.isAuthorized, r.modal.isOpened]);
                    })(),
                    { shareLink: ef, pathname: eC } = (0, P.b)('/album/:albumId', { params: { albumId: a.id } }),
                    eb = (0, b.A)({ entityVariant: O.D.ALBUM, urlParams: { id: a.id } }),
                    { isPlaying: eg, togglePlay: ex } = (0, S.B)({
                        seeds: null != (r = null == a ? void 0 : a.seeds) ? r : [],
                        pageIdForFrom: A.b.RADIO,
                        blockIdForFrom: en,
                        parentContextId: a.id,
                    }),
                    { utmLink: ek } = (0, N.f)({ blockId: k.U.ALBUM, contextType: c.K.Album, contextId: null == a ? void 0 : a.id }),
                    eA = (0, u.c)(() => {
                        if (q && ee.isAuthorized) return void Y();
                        !e_() && (eg || ex());
                    }),
                    ey = (0, u.c)(() => {
                        if (q && !ep) return void Y();
                        e_() || (Q.setUtmLink(ek), Q.openAlbumTrailer(a.id), el(n.DomainObjectType.Album, String(a.id)));
                    });
                (0, T.N)(V);
                let eN = (0, s.useMemo)(() => {
                        if (!J) return (0, i.jsx)(z.L, { onClick: es, isPinned: a.isPinned });
                    }, [a.isPinned, es, J]),
                    ej = (0, s.useMemo)(() => {
                        let e = !eh && !ee.isAuthorized;
                        return a.isNonMusic
                            ? (0, i.jsx)(H.U, { onClick: ea, isLiked: a.isLiked, albumType: a.type })
                            : (0, i.jsx)(D.T, { onClick: ea, isLiked: a.isLiked, disabled: e });
                    }, [a.isLiked, a.type, ea, a.isNonMusic, ee.isAuthorized, eh]),
                    eL = (0, s.useMemo)(() => {
                        var e;
                        if (!a.isNonMusic && (null == (e = a.trailer) ? void 0 : e.isAvailable)) return (0, i.jsx)(K.N, { onClick: ey, disabled: !a.isAvailable });
                    }, [a.isAvailable, null == (t = a.trailer) ? void 0 : t.isAvailable, a.isNonMusic, ey]),
                    eT = (0, s.useMemo)(() => {
                        if (eu) return (0, i.jsx)(F.C, { onClick: eA, disabled: !a.isAvailable || (ep && J), variant: w.I.ALBUM, onOpenMenuChange: I });
                    }, [a.isAvailable, eA, eu, I, ep, J]),
                    eS = { variant: B.Y.ALBUM, id: a.id, title: a.title, path: eC, albumArtistName: a.artistName, albumArtistId: a.artistId };
                // for PulseSync WebHost: BEGIN album context and native addon menu item rendering
                let pulseSyncInjectAlbumMenuItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('albumContextMenu', items, {
                        eventDetail: {
                            id: String(a.id),
                            url: eC,
                            ...(a.title
                                ? {
                                      title: String(a.title),
                                  }
                                : {}),
                        },
                        renderItem: ({ key, payload, activate }) => {
                            const label = String(payload?.label ?? '').trim(),
                                icon = String(payload?.icon ?? '').trim();
                            if (!label || !icon) return null;
                            return (0, pulseSyncMenuJsx.jsx)(
                                pulseSyncMenuItems.Dr,
                                {
                                    icon: (0, pulseSyncMenuJsx.jsx)(pulseSyncMenuIcons.I, {
                                        variant: icon,
                                        size: 'xxs',
                                    }),
                                    onClick: () => {
                                        (activate(), I(!1));
                                    },
                                    children: label,
                                    'data-pulsesync-addon-menu-item': '',
                                },
                                key,
                            );
                        },
                    }) ?? items;
                // for PulseSync WebHost: END album context and native addon menu item rendering
                return (0, i.jsxs)(d.W1, {
                    isMobile: J,
                    offsetOptions: 10,
                    open: V,
                    onOpenChange: I,
                    ariaLabel: ed({ id: 'interface-actions.context-menu' }),
                    wrapperClassName: X,
                    containerDataTestId: o.Kq.album.ALBUM_CONTEXT_MENU,
                    ...Z,
                    // for PulseSync WebHost: BEGIN inject native addon items into the album context menu
                    children: pulseSyncInjectAlbumMenuItems([
                        J && (0, i.jsx)(W.C, { getDescriptionTexts: a.getDescriptionTexts, entityId: a.id }),
                        ec && (0, i.jsx)(g.d, { entityVariant: O.D.ARTIST, adminUrl: eb }),
                        eN,
                        ej,
                        eL,
                        eT,
                        // for PulseSync: BEGIN insert the album download-to-file menu action
                        (0, i.jsx)(pulseSyncDownloadAlbumToFile, { album: a }),
                        // for PulseSync: END insert the album download-to-file menu action
                        E,
                        eo && (0, i.jsx)(M, { onClick: ev, isFinished: a.listeningFinished }),
                        (0, i.jsx)(U.H, { shareLink: ef, entityMeta: eS }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the album context menu
                });
            });
        },
    },
]);
