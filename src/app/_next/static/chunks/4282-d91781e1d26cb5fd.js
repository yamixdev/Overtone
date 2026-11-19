(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4282],
    {
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
        10079: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => Q });
            var r = i(88800),
                s = i(65724),
                a = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(97234),
                d = i(91177),
                c = i(70598),
                u = i(46482),
                _ = i(17392),
                m = i(18593),
                p = i(61691),
                h = i(29993),
                g = i(79070),
                C = i(29832),
                x = i(52300),
                A = i(7555),
                b = i(29504),
                v = i(60757),
                N = i(29008),
                k = i(92966),
                y = i(56651),
                L = i(13946),
                O = i(43443),
                f = i(5407),
                E = i(57934),
                j = i(84384),
                S = i(4795),
                I = i(87762),
                R = i(32414),
                M = i(78940),
                T = i(55693),
                P = i(39079),
                w = i(72288),
                D = i(52726),
                F = i(86298),
                B = i(81877),
                z = i(90224),
                U = i(49738),
                H = i(91292),
                Y = i(56862),
                K = i(16704),
                V = i(56446),
                G = i(36207),
                X = i(41918);
            let q = { mainAxis: -26, alignmentAxis: -16 },
                $ = { isEnabled: !0, width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' };
            var W = i(95756),
                J = i(28304),
                Z = i.n(J);
            let Q = (0, a.PA)((e) => {
                let {
                        className: t,
                        children: i,
                        album: a,
                        contentLinesCount: J,
                        withLikesCount: Q,
                        withChart: ee,
                        withAddition: et = !0,
                        withArtistName: ei = !0,
                        releaseDateFormatter: er = R.s,
                    } = e,
                    es = (0, d.D)(),
                    {
                        user: ea,
                        trailer: en,
                        settings: { isMobile: el },
                        albumCPA: { isPlusCPAEnabled: eo },
                        paywall: { modal: ed },
                    } = (0, w.g)(),
                    { from: ec, utmLink: eu } = (0, j.f)({ contextId: a.id, contextType: m.K.Album, utmForPageIds: a.artistIds }),
                    { formatMessage: e_, formatDate: em } = (0, l.A)(),
                    { sendLikeSearchFeedback: ep, sendNavigateSearchFeedback: eh, sendPlaySearchFeedback: eg } = (0, T.z)(),
                    [eC, ex] = (0, n.useState)(!1),
                    [eA, eb] = (0, n.useState)(!1),
                    [ev, eN] = (0, n.useState)(!1),
                    ek = (0, c.S)(),
                    ey = (0, u.g)(),
                    eL = (0, k.K)(a),
                    eO = (0, y.A)(a),
                    ef = (0, M.Z)(a.url),
                    [eE, ej] = (0, n.useState)(!1),
                    eS = (0, E.F)(),
                    [eI, eR] = (0, n.useState)(!1),
                    eM = (0, f.P)(),
                    { pageAlbumId: eT } = (0, I.T)(),
                    eP = eo({ pageAlbumId: eT, albumId: a.id, isNonMusic: a.isNonMusic }),
                    ew = (0, S.N)(),
                    eD = a.isAvailableOnlyForPlus && !a.isUnsafeLegal && !a.isLegalRejected,
                    eF = eD && !el,
                    eB = a.isAvailable || eF || a.isAudiobook,
                    ez = (0, h.c)((e) => {
                        if ((e.stopPropagation(), eM())) return void e.preventDefault();
                        (en.openAlbumTrailer(a.id), eS(o.DomainObjectType.Album, String(a.id)));
                    }),
                    eU = a.type === p._.SINGLE ? e_({ id: 'entity-names.single' }) : void 0,
                    eH = a.releaseDate ? em(a.releaseDate, er()) : void 0,
                    eY = ((e) => {
                        let t = e.filter((e) => !!e).join(' \xb7 ');
                        return 0 === t.length ? null : t;
                    })([null != eH ? eH : a.year, eU]),
                    eK = (0, N.r)(a.type),
                    eV = (0, n.useMemo)(() => {
                        var e;
                        let t = a.isLiked ? e_({ id: 'entity-names.has-your-like' }) : '';
                        return ''
                            .concat(eK, ' ')
                            .concat(a.title, ' ')
                            .concat(null != (e = a.version) ? e : '', ' ')
                            .concat(t);
                    }, [eK, e_, a.title, a.isLiked, a.version]),
                    { isPlaying: eG, togglePlay: eX } = (0, P.D)({
                        playContextParams: { contextData: { type: m.K.Album, meta: { id: a.id }, from: ec, utmLink: eu }, loadContextMeta: !0 },
                    }),
                    eq = (0, v.c)({ album: a, callback: ef }),
                    e$ = (0, v.c)({ album: a, callback: eX }),
                    eW = (0, h.c)((e) => {
                        (ek({ to: o.AppScreen.AlbumScreen }), null == eh || eh(), eq(e));
                    }),
                    eJ = (0, h.c)(() => {
                        if (!eM()) {
                            if (ew) return void ed.open();
                            (eA || eG || (eb(!0), null == eg || eg()), e$(), eG || ey());
                        }
                    }),
                    eZ = (0, h.c)(() => {
                        (eC || a.isLiked || (ex(!0), null == ep || ep()), eL());
                    }),
                    eQ = (0, h.c)((e) => {
                        (eN(e), ej(e));
                    }),
                    e0 = (0, n.useMemo)(() => {
                        var e;
                        return (0, r.jsxs)(b.HL, {
                            className: (0, s.$)(Z().title, { [Z().title_withVersion]: a.version, [Z().title_withChart]: ee }),
                            variant: 'div',
                            type: 'entity',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 2,
                            'aria-hidden': !0,
                            'data-test-id': _.Kq.album.ALBUM_TITLE,
                            children: [
                                (0, r.jsx)(H.N, {
                                    'aria-label': ''.concat(a.title, ' ').concat(null != (e = a.version) ? e : ''),
                                    className: Z().titleLink,
                                    href: a.url,
                                    tabIndex: -1,
                                    onClick: eW,
                                    'data-test-id': _.Kq.album.ALBUM_TITLE_LINK,
                                    children: a.title,
                                }),
                                a.version &&
                                    (0, r.jsx)(b.HL, {
                                        className: Z().version,
                                        variant: 'span',
                                        'data-test-id': _.Kq.album.ALBUM_VERSION,
                                        children: ' '.concat(a.version),
                                    }),
                            ],
                        });
                    }, [a.title, a.url, a.version, eW, ee]),
                    e8 = (0, n.useMemo)(() => {
                        var e;
                        return (0, r.jsx)(H.N, {
                            className: Z().srTitleLink,
                            href: a.url,
                            onClick: eW,
                            children: ''.concat(a.title, ' ').concat(null != (e = a.version) ? e : ''),
                        });
                    }, [a.title, a.url, a.version, eW]),
                    e9 = (0, n.useMemo)(() => {
                        var e;
                        if (null == a || null == (e = a.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                G.n,
                                {
                                    children: (0, r.jsx)(
                                        V.k,
                                        { className: (0, s.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: ez },
                                        a.getKey('TrailerButton'),
                                    ),
                                },
                                a.getKey('AlbumCardTrailerTooltip'),
                            );
                    }, [a, ez]),
                    e2 = (0, n.useMemo)(
                        () =>
                            (0, r.jsx)(
                                W.x,
                                {
                                    album: a,
                                    onOpenChange: eQ,
                                    open: ev,
                                    className: (0, s.$)(Z().menuButton, Z().control),
                                    icon: (0, r.jsx)(x.I, { size: 'xxs', variant: 'more' }),
                                    size: 's',
                                    variant: X.z.CARD,
                                    'data-test-id': _.Kq.album.ALBUM_CONTEXT_MENU_BUTTON,
                                },
                                a.getKey('AlbumContextMenu'),
                            ),
                        [a, eQ, ev],
                    ),
                    e4 = (0, n.useCallback)(
                        () =>
                            (0, r.jsx)(
                                K.D,
                                {
                                    className: (0, s.$)(Z().playButton, Z().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                    onClick: eJ,
                                    isPlaying: eG,
                                    disabled: eF,
                                },
                                a.getKey('PlayButton'),
                            ),
                        [eF, a, eG, eJ],
                    ),
                    e1 = (0, n.useMemo)(
                        () =>
                            eF
                                ? (0, r.jsx)(D.S, {
                                      className: Z().buyPlusPopover,
                                      buttonText: e_({ id: 'interface-actions.more-details' }),
                                      isNested: !0,
                                      placement: 'top-start',
                                      isOpened: eI,
                                      onOpenChange: eR,
                                      textVariant: 'album',
                                      albumTextVariant: a.type,
                                      arrowProps: $,
                                      offsetOptions: q,
                                      renderChildren: e4,
                                  })
                                : e4(),
                        [eF, eI, eR, e_, e4, a.type],
                    ),
                    e7 = (0, g.L)(() => {
                        if (eF) return;
                        let e = !eP && !ea.isAuthorized;
                        return (0, r.jsx)(
                            U.c,
                            {
                                className: (0, s.$)(Z().likeButton, Z().control),
                                isLiked: a.isLiked,
                                onClick: eZ,
                                variant: 'default',
                                size: 's',
                                iconSize: 'xxs',
                                disabled: e,
                            },
                            a.getKey('LikeButton'),
                        );
                    }),
                    e6 = (0, n.useMemo)(() => {
                        if (!eF)
                            return (0, r.jsx)(
                                Y.O,
                                { onClick: eO, isPinned: a.isPinned, className: (0, s.$)(Z().pinButton, Z().control), withRipple: !1, isDisabled: eF },
                                a.getKey('PinButton'),
                            );
                    }, [a, eF, eO]),
                    e5 = (0, n.useMemo)(() => {
                        if (a.isAvailable || eF)
                            return (0, r.jsx)(C.hg, {
                                isVisible: ev || eE || eI,
                                className: Z().controls,
                                playControl: e1,
                                likeControl: e7,
                                menuControl: e2,
                                pinControl: e6,
                                trailerControl: e9,
                            });
                    }, [a, ev, eE, e2, e9, eI, e1, e7, e6, eF]),
                    e3 = (0, n.useMemo)(
                        () =>
                            (0, r.jsx)(A.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': _.Kq.album.ALBUM_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: eW,
                                    children: [
                                        (0, r.jsx)(B.B, {
                                            className: Z().image,
                                            src: a.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eV,
                                            withAvatarReplace: !0,
                                            isAvailable: eB,
                                            'aria-hidden': !0,
                                        }),
                                        eD && (0, r.jsx)(x.I, { variant: 'plusBadge', className: Z().plusBadge }),
                                        e5,
                                    ],
                                }),
                            }),
                        [eW, a.coverUri, eB, eV, e5, eD],
                    );
                return (0, r.jsxs)(C.MN, {
                    ref: es,
                    className: (0, s.$)(Z().root, { [Z().root_withChart]: ee }, t),
                    'aria-label': eV,
                    explicitMarkComponent:
                        a.explicitDisclaimer &&
                        (0, r.jsx)(
                            z.N,
                            { className: Z().explicitMark, getDescriptionTexts: a.getDescriptionTexts, variant: a.explicitDisclaimer },
                            a.getKey('AlbumCardExplicitMarkIcon'),
                        ),
                    title: e0,
                    srTitle: e8,
                    contentLinesCount: J,
                    view: e3,
                    description:
                        ei &&
                        (0, r.jsx)(
                            L.i,
                            { className: Z().artists, artists: a.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                            a.getKey('description'),
                        ),
                    chart:
                        ee &&
                        a.chart &&
                        (0, r.jsx)(O.t, { withIcon: !0, className: Z().chart, position: a.chart.position, progress: a.chart.progress }, a.getKey('chart')),
                    'data-test-id': _.Kq.album.ALBUM_ITEM,
                    children: [
                        et &&
                            eY &&
                            (0, r.jsx)(b.HL, { className: Z().addition, variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: eY }),
                        Q &&
                            !!a.actualLikesCount &&
                            (0, r.jsx)(F.x, {
                                className: Z().likeTextButton,
                                ariaLabel: e_({ id: 'entity-names.likes-counter' }, { counter: a.actualLikesCount }),
                                likesCount: a.actualLikesCount,
                                isLiked: a.isLiked,
                                handleLikeClick: eL,
                            }),
                        i,
                    ],
                });
            });
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
        13607: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { _: () => r }),
                (function (e) {
                    ((e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new'));
                })(r || (r = {})));
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
        25883: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => l });
            var r = i(88800),
                s = i(84961),
                a = i(33719),
                n = i(5048);
            let l = (0, s.PA)((e) => {
                let { album: t, closeToast: i } = e,
                    s = (0, n.b)(t.type);
                return (0, r.jsx)(a.k, {
                    closeToast: i,
                    entityVariant: s,
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
        29008: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => n, r: () => l });
            var r = i(53548),
                s = i(2058),
                a = i(61691),
                n = (function (e) {
                    return ((e.PIN = 'pin'), e);
                })({});
            let l = (e, t) => {
                let { formatMessage: i } = (0, s.A)();
                return (0, r.useMemo)(() => {
                    switch (e) {
                        case a._.SINGLE:
                            return i({ id: 'entity-names.single' });
                        case a._.PODCAST:
                            return i({ id: 'entity-names.podcast' });
                        case a._.AUDIOBOOK:
                            if ('pin' === t) return i({ id: 'entity-names.book' });
                            return i({ id: 'entity-names.audio' });
                        case a._.FAIRY_TALE:
                            return i({ id: 'entity-names.fairy-tale' });
                        default:
                            return i({ id: 'entity-names.album' });
                    }
                }, [e, i, t]);
            };
        },
        32353: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => r, u: () => s });
            var r = (function (e) {
                    return ((e[(e.Mobile = 768)] = 'Mobile'), (e[(e.Desktop = 1440)] = 'Desktop'), e);
                })({}),
                s = (function (e) {
                    return ((e.Mobile = 'Mobile'), (e.Desktop = 'Desktop'), e);
                })({});
        },
        32414: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => r });
            let r = () => ({ year: 'numeric', month: 'long', day: 'numeric' });
        },
        41918: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => r });
            var r = (function (e) {
                return ((e.PAGE = 'PAGE'), (e.CARD = 'CARD'), e);
            })({});
        },
        43443: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => p });
            var r = i(88800),
                s = i(65724),
                a = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(17392),
                d = i(13607),
                c = i(52300),
                u = i(29504),
                _ = i(3099),
                m = i.n(_);
            let p = (0, a.PA)((e) => {
                let {
                        progress: t,
                        withIcon: i,
                        withCrownIcon: a,
                        position: _,
                        weight: p = 'normal',
                        isDisliked: h,
                        isDisabled: g,
                        className: C,
                        positionClassName: x,
                    } = e,
                    { formatMessage: A } = (0, l.A)(),
                    b = t || i,
                    v = (0, n.useMemo)(() => {
                        if (a) return 'crown';
                        switch (t) {
                            case d._.UP:
                                return 'chartUp';
                            case d._.DOWN:
                                return 'chartDown';
                            case d._.NEW:
                                return 'chartNew';
                            default:
                                return 'chartSame';
                        }
                    }, [t, a]),
                    N = (0, n.useMemo)(() => {
                        switch (t) {
                            case d._.UP:
                                return A({ id: 'entity-names.chart-up' });
                            case d._.DOWN:
                                return A({ id: 'entity-names.chart-down' });
                            case d._.NEW:
                                return A({ id: 'entity-names.chart-new' });
                            default:
                                return A({ id: 'entity-names.chart-same' });
                        }
                    }, [A, t]),
                    k = a ? 'crown' : t;
                return (0, r.jsxs)('div', {
                    className: (0, s.$)(m().root, C),
                    'data-test-id': o.OA.chart.CHART_PROGRESS,
                    children: [
                        (0, r.jsx)(u.HL, {
                            variant: 'div',
                            weight: p,
                            type: 'entity',
                            size: 'm',
                            className: (0, s.$)(m().position, x, { [m().position_disliked]: h, [m().position_disabled]: g }),
                            'data-test-id': o.OA.chart.CHART_PROGRESS_POSITION,
                            children: _,
                        }),
                        b &&
                            (0, r.jsx)(c.I, {
                                variant: v,
                                size: 'xxs',
                                'aria-label': N,
                                className: (0, s.$)(m().progress, m()['progress_'.concat(k)], { [m().progress_disliked]: h, [m().progress_disabled]: g }),
                                'data-test-id': o.OA.chart.CHART_PROGRESS_ICON,
                            }),
                    ],
                });
            });
        },
        49161: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => j });
            var r = i(88800),
                s = i(65724),
                a = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(58390),
                d = i(97234),
                c = i(59724),
                u = i(17392),
                _ = i(29504),
                m = i(10079),
                p = i(69630),
                h = i(98427),
                g = i(46422),
                C = i(32353),
                x = i(44230),
                A = i(37670),
                b = i(72288),
                v = i(86790),
                N = i(60266),
                k = i(93317),
                y = i(37770),
                L = i(79418),
                O = i(77741),
                f = i(79023),
                E = i.n(f);
            let j = (0, a.PA)((e) => {
                var t, i;
                let { id: a, variant: f } = e,
                    {
                        nonMusic: { albums: j },
                        settings: S,
                    } = (0, b.g)(),
                    { formatMessage: I } = (0, l.A)(),
                    { contentScrollRef: R, setContentScrollRef: M } = (0, x.g)(),
                    T = (0, g.W)(),
                    P = S.layout === C.u.Mobile;
                ((j.isNotFound || !a) && (0, o.notFound)(),
                    (0, A.J)(j.isResolved),
                    (0, n.useEffect)(
                        () => () => {
                            j.reset();
                        },
                        [j],
                    ));
                let w = (0, n.useCallback)(
                        (e) => {
                            j.getAlbumsByRange(e.startIndex, e.endIndex);
                        },
                        [j],
                    ),
                    D = (0, n.useMemo)(() => ({ Footer: () => (0, r.jsx)(N.A, { children: (0, r.jsx)(v.w, { className: E().footer }) }) }), []),
                    F = j.isLoading ? 20 : null != (i = null == (t = j.albums) ? void 0 : t.length) ? i : 0;
                return (
                    a && j.isNeededToLoad && (f === O.x.EDITORIAL ? (0, n.use)(j.getEditorialAlbums({ id: a })) : (0, n.use)(j.getCategoryAlbums({ id: a }))),
                    (0, r.jsx)(c.a, {
                        pageId: d.AppScreen.NonMusicAlbums,
                        pageIdForFrom: h.b.NON_MUSIC_ALBUMS,
                        children: (0, r.jsx)(p.h, {
                            scrollElement: R,
                            outerTitle: j.title,
                            children: (0, r.jsxs)('div', {
                                className: E().root,
                                'data-test-id': u.Xk.nonMusic.NON_MUSIC_ALBUMS_PAGE,
                                children: [
                                    (0, r.jsx)(k.Y, {
                                        variant: k.V.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: T.canBack,
                                        children: (0, r.jsx)(_.DZ, {
                                            id: 'collection-artists-header',
                                            variant: 'h2',
                                            weight: 'bold',
                                            size: 'xl',
                                            lineClamp: 1,
                                            children: j.title,
                                        }),
                                    }),
                                    (0, r.jsx)(L.$, {
                                        className: (0, s.$)(E().scrollContainer, E().important),
                                        customComponents: D,
                                        itemContentCallback: (e) => {
                                            var t, i;
                                            let s = null == (i = j.albums) || null == (t = i[e]) ? void 0 : t.data,
                                                a = I({ id: 'loading-messages.entity-is-loading' }, { entityName: I({ id: 'entity-names.album' }) });
                                            return s
                                                ? (0, r.jsx)(m.a, { withLikesCount: !0, album: s, contentLinesCount: 3 }, s.id)
                                                : (0, r.jsx)(y.V, { 'aria-label': a }, e);
                                        },
                                        totalCount: F,
                                        onGetDataByRange: w,
                                        totalRequests: j.requestsCount,
                                        listClassName: E().content,
                                        itemClassName: E().item,
                                        handleRef: M,
                                        context: { listAriaLabel: I({ id: 'mixes.albums-list' }, { genreName: j.title || '' }) },
                                        isMobileLayout: P,
                                        useWindowScroll: P,
                                    }),
                                ],
                            }),
                        }),
                    })
                );
            });
        },
        56651: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => _ });
            var r = i(88800),
                s = i(96706),
                a = i(53548),
                n = i(2058),
                l = i(29595),
                o = i(74965),
                d = i(72288),
                c = i(66943),
                u = i(25883);
            let _ = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: _ } = (0, n.A)(),
                    [m, p] = (0, a.useState)(!1);
                return (0, a.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, r.jsx)(c.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (m) return;
                    let a = { ...(0, s.HO)(e), url: e.url, isPinned: !e.isPinned };
                    p(!0);
                    let n = await e.togglePin();
                    (p(!1),
                        n
                            ? i((0, r.jsx)(u.l, { album: a }), { containerId: l.u.INFO })
                            : i((0, r.jsx)(c.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, _, i, m, t.isAuthorized]);
            };
        },
        59724: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => u });
            var r = i(88800),
                s = i(53548),
                a = i(8383),
                n = i(24709),
                l = i(88966);
            let o = new WeakMap();
            class d {
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
                    let i =
                        o.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                i = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                r = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                i();
                                            } finally {
                                                ((t = !1), e.length > 0 && r());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (i(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), r());
                                },
                            };
                        })();
                    (o.set(t, i), (this.queue = i));
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
            var c = i(97234);
            let u = (0, n.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let i = (0, l.N)(),
                        n = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === c.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [o, u] = (0, s.useState)(() => {
                            let e = new d(i.createScreenSession().screenViewUuid, i);
                            return { client: i, input: t, isReady: n, scope: n ? i.createScreenScope(t, e) : null, session: e };
                        });
                    if (o.client !== i || o.input.pageId !== t.pageId || o.input.skeletonId !== t.skeletonId) {
                        let s = new d(i.createScreenSession().screenViewUuid, i),
                            l = { client: i, input: t, isReady: n, scope: n ? i.createScreenScope(t, s) : null, session: s };
                        return (u(l), (0, r.jsx)(a.k, { value: l, children: e }));
                    }
                    if (
                        o.isReady !== n ||
                        o.input.mainObjectType !== t.mainObjectType ||
                        o.input.mainObjectId !== t.mainObjectId ||
                        o.input.displayReasonId !== t.displayReasonId ||
                        o.input.pageIdForFrom !== t.pageIdForFrom ||
                        o.input.pagePlacement !== t.pagePlacement ||
                        o.input.pageStyle !== t.pageStyle
                    ) {
                        let s = { ...o, input: t, isReady: n, scope: n ? i.createScreenScope(t, o.session) : null };
                        return (u(s), (0, r.jsx)(a.k, { value: s, children: e }));
                    }
                    return (0, r.jsx)(a.k, { value: o, children: e });
                },
            );
        },
        60266: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => n });
            var r = i(88800);
            i(30282);
            var s = i(11006),
                a = i.n(s);
            let n = (e) => {
                let { children: t } = e;
                return (0, r.jsx)('footer', { className: a().empty });
            };
        },
        60757: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => s });
            var r = i(58217);
            let s = (e) => {
                let { album: t, callback: i, shouldHistoryBack: s } = e;
                return (0, r.l)({ entity: t, callback: i, modalBehavior: void 0 === s ? void 0 : { shouldHistoryBack: s }, preventDefaultWhenSafe: !0 });
            };
        },
        62293: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => s });
            var r = i(97956);
            let s = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: s, userRegion: a } = e;
                return 'ru' === a && t(r.z.WebNextFooterDisclaimer, 'on') ? i() : s();
            };
        },
        66610: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => o });
            var r = i(53548),
                s = i(24709),
                a = i(88966),
                n = i(87138),
                l = i(46457);
            let o = (0, s.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, a.N)(),
                    t = (0, n.w)(),
                    i = (0, r.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, l.c)((e) => {
                    t?.object && i && i.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        77741: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => r });
            var r = (function (e) {
                return ((e.CATEGORY = 'category'), (e.EDITORIAL = 'editorial'), e);
            })({});
        },
        79023: (e) => {
            e.exports = {
                root: 'NonMusicAlbumsPage_root__jlDXa',
                scrollContainer: 'NonMusicAlbumsPage_scrollContainer__XNRsu',
                important: 'NonMusicAlbumsPage_important__Rk8LT',
                footer: 'NonMusicAlbumsPage_footer__LJCIL',
                item: 'NonMusicAlbumsPage_item__YArCS',
                content: 'NonMusicAlbumsPage_content__phVa7',
            };
        },
        79418: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => g });
            var r = i(88800),
                s = i(65724),
                a = i(61013),
                n = i(53548);
            let l = (e) => {
                    let { style: t, forwardRef: i, context: s, ...a } = e,
                        n = (null == s ? void 0 : s.listAriaLabel) || void 0,
                        l = (null == s ? void 0 : s.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: l, 'aria-label': n, style: { ...t }, ref: i, ...a });
                },
                o = (0, n.forwardRef)((e, t) => (0, r.jsx)(l, { forwardRef: t, ...e }));
            var d = i(16434),
                c = i.n(d);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: a, withHeader: n, withForceScroll: l, ...o } = e;
                    return (0, r.jsx)('div', {
                        className: (0, s.$)(c().scroller, { [c().scroller_withFooter]: a, [c().scroller_withHeader]: n, [c().scroller_withForceScroll]: l }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                _ = (0, n.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
            var m = i(55482),
                p = i(75151);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: s,
                            debounceDurationInMs: a = 100,
                            totalCount: l = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: d,
                            virtuosoRef: c,
                            ...u
                        } = e,
                        [_, h] = (0, n.useState)(null),
                        g = (0, n.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == s || s(e), o.length > 0 && h(e), t && i)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            s = Math.floor(e.startIndex / t);
                                        for (let e = s; e < r; e++) i(e);
                                    }
                                }, a),
                            [a, s, t, i, o],
                        );
                    (0, n.useEffect)(() => {
                        o.length > 0 && _ && g(_);
                    }, o);
                    let C = (0, n.useMemo)(() => {
                        if (d)
                            return (0, m.A)((e) => {
                                d(e);
                            }, a);
                    }, [d, a]);
                    return (0, r.jsx)(p.sN, { ref: c, rangeChanged: g, totalCount: l, endReached: C, ...u });
                },
                g = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: l,
                            onGetDataByRange: d,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: p,
                            overscan: g = 700,
                            pageSize: C = 20,
                            totalCount: x,
                            totalRequests: A,
                            debounceDurationInMs: b,
                            initialItemCount: v,
                            minInitialItemCount: N = 20,
                            handleRef: k,
                            alwaysShowScrollbar: y = !1,
                            testId: L,
                            isMobileLayout: O = !1,
                            shouldTriggerRangeChangedOn: f,
                            ...E
                        } = e,
                        [j, S] = (0, n.useState)(!1),
                        I = (0, n.useMemo)(
                            () =>
                                (0, a.A)((e) => {
                                    S(e);
                                }, 100),
                            [],
                        ),
                        R = (0, n.useMemo)(() => {
                            var e, t;
                            return O
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : o,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : o,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, A, O]),
                        M = v ? Math.min(v, N) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, s.$)(c().root, { [c().root_scrolling]: j || y, [c().root_notScrolling]: !j && !y }, t),
                        'data-test-id': L,
                        children: [
                            O && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, r.jsx)(h, {
                                overscan: g,
                                components: R,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: I,
                                itemContent: m,
                                scrollerRef: k,
                                totalCount: x,
                                pageSize: C,
                                onPageHandler: l,
                                onRangeHandler: d,
                                debounceDurationInMs: b,
                                initialItemCount: M,
                                shouldTriggerRangeChangedOn: f,
                                ...E,
                            }),
                            O && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        84218: (e) => {
            e.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        86298: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => _ });
            var r = i(88800),
                s = i(65724),
                a = i(2058),
                n = i(17392),
                l = i(96817),
                o = i(52300),
                d = i(29504),
                c = i(84218),
                u = i.n(c);
            let _ = (e) => {
                let { className: t, isLiked: i, likesCount: c, handleLikeClick: _, ariaLabel: m } = e,
                    { formatNumber: p } = (0, a.A)();
                return (0, r.jsx)(l.$, {
                    className: (0, s.$)(u().root, t),
                    onClick: _,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, r.jsx)(o.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': m,
                    'data-test-id': n.S7.CARD_LIKES,
                    children: (0, r.jsx)(d.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: p(c) }),
                });
            };
        },
        86790: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => L });
            var r = i(88800),
                s = i(65724),
                a = i(84961),
                n = i(2058),
                l = i(30282),
                o = i(94144),
                d = (function (e) {
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
            let c = (e, t, i) => {
                    switch (e) {
                        case d.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case d.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(i);
                        case d.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                        case d.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                        case d.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case d.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(i);
                        case d.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(i);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: i, tld: r, year: s } = e;
                    return {
                        year: s,
                        yandexMusic: { id: d.YANDEX, title: t({ id: 'footer.yandex-music' }), url: c(d.YANDEX, r, i) },
                        yandexProjects: { id: d.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: c(d.YANDEX_PROJECTS, r, i) },
                    };
                };
            var _ = i(62293),
                m = i(99839);
            let p = (e) => e(new Date(), (0, m.m)());
            var h = i(51611),
                g = i(72288),
                C = i(11006),
                x = i.n(C),
                A = i(17392),
                b = i(29504),
                v = i(91292);
            let N = (e) => {
                    let { className: t, data: i } = e;
                    return (0, r.jsxs)('div', {
                        className: (0, s.$)(x().copyrights, t),
                        'data-test-id': A.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, r.jsxs)(b.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: x().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, r.jsx)(v.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, s.$)(x().copyrightLink, x().yandexMusicLink),
                                        'data-test-id': A.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(b.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, r.jsx)(v.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: x().copyrightLink,
                                'data-test-id': A.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                k = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, r.jsxs)('div', {
                        className: x().links,
                        children: [
                            (0, r.jsx)('ol', {
                                className: x().list,
                                'data-test-id': A.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: s } = e;
                                    return (0, r.jsx)(
                                        'li',
                                        {
                                            className: x().item,
                                            children: (0, r.jsx)(v.N, { target: '_blank', href: s, className: x().link, 'data-test-id': A.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, r.jsx)(b.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: x().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': A.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                y = (e) => {
                    let { className: t, data: i } = e;
                    return (0, r.jsxs)('footer', {
                        className: (0, s.$)(x().root, x().important, t),
                        'data-test-id': A.S7.FOOTER,
                        children: [(0, r.jsx)(k, { links: i.links, disclaimer: i.disclaimer }), (0, r.jsx)(N, { data: i.copyrights })],
                    });
                };
            (0, a.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, g.g)(),
                    { formatDate: s, formatMessage: a } = (0, n.A)(),
                    { language: l } = (0, h.h)(),
                    o = u({ formatMessage: a, language: l, tld: i.tld, year: p(s) });
                return (0, r.jsx)(N, { className: t, data: o });
            });
            let L = (0, a.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: a, location: m, user: C } = (0, g.g)(),
                    { formatDate: A, formatMessage: b } = (0, n.A)(),
                    { isEnabled: v } = null != (t = (0, o.P)()) ? t : {},
                    { language: N } = (0, h.h)(),
                    k = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: r, language: s, tld: a, userRegion: n, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: r, language: s, userRegion: a } = e,
                                    n = { id: d.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: c(d.COPYRIGHT_HOLDER, r, s) },
                                    l = { id: d.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: c(d.PRIVACY_POLICY, r, s) },
                                    o = { id: d.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: c(d.AGREEMENT, r, s) },
                                    u = { id: d.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: c(d.RECOMMENDATION_RULES, r, s) },
                                    _ = { id: d.HELP, title: t({ id: 'footer.links-help' }), url: c(d.HELP, r, s) },
                                    m = [n, o, u];
                                return (i && 'ru' === a && m.push(l), m.push(_), m);
                            })({ formatMessage: i, isWebApplication: r, language: s, tld: a, userRegion: n }),
                            disclaimer: (0, _.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: n,
                            }),
                            copyrights: u({ formatMessage: i, language: s, tld: a, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => a.checkExperiment(e, t),
                        formatMessage: b,
                        isWebApplication: l.$3,
                        tld: m.tld,
                        language: N,
                        userRegion: C.account.data.userSessionRegionIso,
                        year: p(A),
                    });
                return (0, r.jsx)(y, { className: (0, s.$)({ [x().root_withOffsetForDeeplink]: v }, i), data: k });
            });
        },
        94144: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => s, P: () => a });
            var r = i(53548);
            let s = (0, r.createContext)(null),
                a = () => (0, r.useContext)(s);
        },
        95756: (e, t, i) => {
            'use strict';

            i.d(t, { x: () => G });
            // for PulseSync WebHost: BEGIN imports for native addon context menu items
            var pulseSyncMenuJsx = i(88800),
                pulseSyncMenuItems = i(19934),
                pulseSyncMenuIcons = i(52300);
            // for PulseSync WebHost: END imports for native addon context menu items
            var r = i(88800),
                s = i(84961),
                a = i(53548),
                n = i(2058),
                l = i(97234),
                o = i(17392),
                d = i(18593),
                c = i(29993),
                u = i(19934),
                _ = i(18143),
                m = i(29595),
                p = i(74965),
                h = i(72288),
                g = i(66943),
                C = i(92966),
                x = i(56651),
                A = i(48749),
                b = i(22505),
                v = i(5407),
                N = i(64284),
                k = i(98427),
                y = i(57934),
                L = i(84384),
                O = i(9618),
                f = i(87762),
                E = i(95210),
                j = i(47964),
                S = i(46936),
                I = i(97956),
                R = i(98953),
                M = i(32721),
                T = i(18130),
                P = i(88969),
                w = i(52300);
            let D = (0, s.PA)((e) => {
                let { isFinished: t, onClick: i, className: s } = e,
                    { user: n } = (0, h.g)(),
                    l = (0, a.useMemo)(
                        () => (t ? (0, r.jsx)(P.A, { id: 'interface-actions.mark-all-non-listened' }) : (0, r.jsx)(P.A, { id: 'interface-actions.mark-all-listened' })),
                        [t],
                    );
                return (0, r.jsx)(u.Dr, {
                    className: s,
                    onClick: i,
                    icon: (0, r.jsx)(w.I, { variant: 'check', size: 'xxs' }),
                    disabled: !n.isAuthorized,
                    'data-test-id': o.S7.CONTEXT_MENU_MARK_ALL_LISTENED_BUTTON,
                    children: l,
                });
            });
            var F = i(93091),
                B = i(27817),
                z = i(74064),
                U = i(44988),
                H = i(15425),
                Y = i(81066),
                K = i(18278),
                V = i(41918);
            // for PulseSync: BEGIN download-to-file action in the album context menu
            var pulseSyncMst = i(5120);
            let pulseSyncDownloadAlbumToFile = (0, s.PA)((e) => {
                let { album: t } = e,
                    i = (0, a.useCallback)(async () => {
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
                return (0, r.jsx)(u.Dr, {
                    onClick: i,
                    disabled: !t?.id,
                    icon: (0, r.jsx)(w.I, {
                        variant: 'download',
                        size: 'xxs',
                    }),
                    children: 'Скачать в файл',
                });
            });
            // for PulseSync: END download-to-file action in the album context menu
            let G = (0, s.PA)((e) => {
                // for PulseSync WebHost: BEGIN refresh the album menu when native addon slots change
                let [, pulseSyncSetAlbumMenuRevision] = (0, a.useState)(0);
                (0, a.useEffect)(() => {
                    const onNativeSlotChange = (event) => {
                        if (event.detail === 'albumContextMenu') pulseSyncSetAlbumMenuRevision((revision) => revision + 1);
                    };
                    document.addEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                    pulseSyncSetAlbumMenuRevision((revision) => revision + 1);
                    return () => document.removeEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                }, []);
                // for PulseSync WebHost: END refresh the album menu when native addon slots change
                var t, i;
                let { album: s, children: P, onOpenChange: w, open: G, wrapperClassName: X, variant: q, ...$ } = e,
                    { shouldShowBuySubscriptionModal: W, showBuySubscriptionModal: J } = (0, O.q)(),
                    {
                        settings: { isMobile: Z },
                        trailer: Q,
                        user: ee,
                        experiments: et,
                        albumCPA: { isPlusCPAEnabled: ei, isPlusCPAPlayerBarEnabled: er },
                    } = (0, h.g)(),
                    es = (0, C.K)(s),
                    ea = (0, x.A)(s),
                    en = (0, y.F)(),
                    el = ''.concat(N.U.ALBUM, '-').concat(s.id),
                    eo = s.isNonMusic && q === V.z.PAGE,
                    ed = et.checkExperiment(I.z.WebEditorsFeatures, 'on'),
                    ec = !s.isNonMusic && !et.checkExperiment(I.z.WebNextProductWithoutRecommendation, 'on'),
                    { formatMessage: eu } = (0, n.A)(),
                    e_ = (0, v.P)(),
                    { pageAlbumId: em } = (0, f.T)(),
                    ep = ei({ pageAlbumId: em, albumId: s.id, isNonMusic: s.isNonMusic }),
                    eh = er(s.id, s.isNonMusic),
                    eg = (() => {
                        let { user: e, album: t, fullscreenPlayer: i } = (0, h.g)(),
                            { notify: s } = (0, p.l)(),
                            { formatMessage: l } = (0, n.A)();
                        return (0, a.useCallback)(async () => {
                            var a, n;
                            if (!t) return;
                            let o = i.modal.isOpened ? m.u.FULLSCREEN_ERROR : m.u.ERROR;
                            return e.isAuthorized
                                ? (await t.setListeningFinishedStatus()) !== _.T.OK
                                    ? void s((0, r.jsx)(g.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: o })
                                    : void (null == (n = t.meta) || n.updateFinished(!(null == (a = t.meta) ? void 0 : a.listeningFinished)))
                                : void s((0, r.jsx)(g.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o });
                        }, [l, s, t, e.isAuthorized, i.modal.isOpened]);
                    })(),
                    { shareLink: eC, pathname: ex } = (0, T.b)('/album/:albumId', { params: { albumId: s.id } }),
                    eA = (0, A.A)({ entityVariant: S.D.ALBUM, urlParams: { id: s.id } }),
                    { isPlaying: eb, togglePlay: ev } = (0, j.B)({
                        seeds: null != (i = null == s ? void 0 : s.seeds) ? i : [],
                        pageIdForFrom: k.b.RADIO,
                        blockIdForFrom: el,
                        parentContextId: s.id,
                    }),
                    { utmLink: eN } = (0, L.f)({ blockId: N.U.ALBUM, contextType: d.K.Album, contextId: null == s ? void 0 : s.id }),
                    ek = (0, c.c)(() => {
                        if (W && ee.isAuthorized) return void J();
                        !e_() && (eb || ev());
                    }),
                    ey = (0, c.c)(() => {
                        if (W && !eh) return void J();
                        e_() || (Q.setUtmLink(eN), Q.openAlbumTrailer(s.id), en(l.DomainObjectType.Album, String(s.id)));
                    });
                (0, E.N)(G);
                let eL = (0, a.useMemo)(() => {
                        if (!Z) return (0, r.jsx)(B.L, { onClick: ea, isPinned: s.isPinned });
                    }, [s.isPinned, ea, Z]),
                    eO = (0, a.useMemo)(() => {
                        let e = !ep && !ee.isAuthorized;
                        return s.isNonMusic
                            ? (0, r.jsx)(U.U, { onClick: es, isLiked: s.isLiked, albumType: s.type })
                            : (0, r.jsx)(F.T, { onClick: es, isLiked: s.isLiked, disabled: e });
                    }, [s.isLiked, s.type, es, s.isNonMusic, ee.isAuthorized, ep]),
                    ef = (0, a.useMemo)(() => {
                        var e;
                        if (!s.isNonMusic && (null == (e = s.trailer) ? void 0 : e.isAvailable)) return (0, r.jsx)(H.N, { onClick: ey, disabled: !s.isAvailable });
                    }, [s.isAvailable, null == (t = s.trailer) ? void 0 : t.isAvailable, s.isNonMusic, ey]),
                    eE = (0, a.useMemo)(() => {
                        if (ec) return (0, r.jsx)(Y.C, { onClick: ek, disabled: !s.isAvailable || (eh && Z), variant: M.I.ALBUM, onOpenMenuChange: w });
                    }, [s.isAvailable, ek, ec, w, eh, Z]),
                    ej = { variant: R.Y.ALBUM, id: s.id, title: s.title, path: ex, albumArtistName: s.artistName, albumArtistId: s.artistId };
                // for PulseSync WebHost: BEGIN album context and native addon menu item rendering
                let pulseSyncInjectAlbumMenuItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('albumContextMenu', items, {
                        eventDetail: {
                            id: String(s.id),
                            url: ex,
                            ...(s.title
                                ? {
                                      title: String(s.title),
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
                                        (activate(), w(!1));
                                    },
                                    children: label,
                                    'data-pulsesync-addon-menu-item': '',
                                },
                                key,
                            );
                        },
                    }) ?? items;
                // for PulseSync WebHost: END album context and native addon menu item rendering
                return (0, r.jsxs)(u.W1, {
                    isMobile: Z,
                    offsetOptions: 10,
                    open: G,
                    onOpenChange: w,
                    ariaLabel: eu({ id: 'interface-actions.context-menu' }),
                    wrapperClassName: X,
                    containerDataTestId: o.Kq.album.ALBUM_CONTEXT_MENU,
                    ...$,
                    // for PulseSync WebHost: BEGIN inject native addon items into the album context menu
                    children: pulseSyncInjectAlbumMenuItems([
                        Z && (0, r.jsx)(K.C, { getDescriptionTexts: s.getDescriptionTexts, entityId: s.id }),
                        ed && (0, r.jsx)(b.d, { entityVariant: S.D.ARTIST, adminUrl: eA }),
                        eL,
                        eO,
                        ef,
                        eE,
                        // for PulseSync: BEGIN insert the album download-to-file menu action
                        (0, r.jsx)(pulseSyncDownloadAlbumToFile, { album: s }),
                        // for PulseSync: END insert the album download-to-file menu action
                        P,
                        eo && (0, r.jsx)(D, { onClick: eg, isFinished: s.listeningFinished }),
                        (0, r.jsx)(z.H, { shareLink: eC, entityMeta: ej }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the album context menu
                });
            });
        },
        99839: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => r });
            let r = () => ({ year: 'numeric' });
        },
    },
]);
