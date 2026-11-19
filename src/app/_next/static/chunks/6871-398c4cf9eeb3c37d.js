(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6871],
    {
        3099: (t) => {
            t.exports = {
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
        10079: (t, e, i) => {
            'use strict';
            i.d(e, { a: () => Q });
            var a = i(88800),
                s = i(65724),
                r = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(97234),
                d = i(91177),
                u = i(70598),
                c = i(46482),
                m = i(17392),
                p = i(18593),
                _ = i(61691),
                h = i(29993),
                b = i(79070),
                A = i(29832),
                g = i(52300),
                C = i(7555),
                v = i(29504),
                x = i(60757),
                k = i(29008),
                N = i(92966),
                y = i(56651),
                S = i(13946),
                L = i(43443),
                f = i(5407),
                I = i(57934),
                T = i(84384),
                M = i(4795),
                P = i(87762),
                j = i(32414),
                w = i(78940),
                O = i(55693),
                R = i(39079),
                B = i(72288),
                U = i(52726),
                E = i(86298),
                D = i(81877),
                z = i(90224),
                G = i(49738),
                K = i(91292),
                F = i(56862),
                H = i(16704),
                W = i(56446),
                V = i(36207),
                Y = i(41918);
            let $ = { mainAxis: -26, alignmentAxis: -16 },
                q = { isEnabled: !0, width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' };
            var X = i(95756),
                Z = i(28304),
                J = i.n(Z);
            let Q = (0, r.PA)((t) => {
                let {
                        className: e,
                        children: i,
                        album: r,
                        contentLinesCount: Z,
                        withLikesCount: Q,
                        withChart: tt,
                        withAddition: te = !0,
                        withArtistName: ti = !0,
                        releaseDateFormatter: ta = j.s,
                    } = t,
                    ts = (0, d.D)(),
                    {
                        user: tr,
                        trailer: tn,
                        settings: { isMobile: tl },
                        albumCPA: { isPlusCPAEnabled: to },
                        paywall: { modal: td },
                    } = (0, B.g)(),
                    { from: tu, utmLink: tc } = (0, T.f)({ contextId: r.id, contextType: p.K.Album, utmForPageIds: r.artistIds }),
                    { formatMessage: tm, formatDate: tp } = (0, l.A)(),
                    { sendLikeSearchFeedback: t_, sendNavigateSearchFeedback: th, sendPlaySearchFeedback: tb } = (0, O.z)(),
                    [tA, tg] = (0, n.useState)(!1),
                    [tC, tv] = (0, n.useState)(!1),
                    [tx, tk] = (0, n.useState)(!1),
                    tN = (0, u.S)(),
                    ty = (0, c.g)(),
                    tS = (0, N.K)(r),
                    tL = (0, y.A)(r),
                    tf = (0, w.Z)(r.url),
                    [tI, tT] = (0, n.useState)(!1),
                    tM = (0, I.F)(),
                    [tP, tj] = (0, n.useState)(!1),
                    tw = (0, f.P)(),
                    { pageAlbumId: tO } = (0, P.T)(),
                    tR = to({ pageAlbumId: tO, albumId: r.id, isNonMusic: r.isNonMusic }),
                    tB = (0, M.N)(),
                    tU = r.isAvailableOnlyForPlus && !r.isUnsafeLegal && !r.isLegalRejected,
                    tE = tU && !tl,
                    tD = r.isAvailable || tE || r.isAudiobook,
                    tz = (0, h.c)((t) => {
                        if ((t.stopPropagation(), tw())) return void t.preventDefault();
                        (tn.openAlbumTrailer(r.id), tM(o.DomainObjectType.Album, String(r.id)));
                    }),
                    tG = r.type === _._.SINGLE ? tm({ id: 'entity-names.single' }) : void 0,
                    tK = r.releaseDate ? tp(r.releaseDate, ta()) : void 0,
                    tF = ((t) => {
                        let e = t.filter((t) => !!t).join(' \xb7 ');
                        return 0 === e.length ? null : e;
                    })([null != tK ? tK : r.year, tG]),
                    tH = (0, k.r)(r.type),
                    tW = (0, n.useMemo)(() => {
                        var t;
                        let e = r.isLiked ? tm({ id: 'entity-names.has-your-like' }) : '';
                        return ''
                            .concat(tH, ' ')
                            .concat(r.title, ' ')
                            .concat(null != (t = r.version) ? t : '', ' ')
                            .concat(e);
                    }, [tH, tm, r.title, r.isLiked, r.version]),
                    { isPlaying: tV, togglePlay: tY } = (0, R.D)({
                        playContextParams: { contextData: { type: p.K.Album, meta: { id: r.id }, from: tu, utmLink: tc }, loadContextMeta: !0 },
                    }),
                    t$ = (0, x.c)({ album: r, callback: tf }),
                    tq = (0, x.c)({ album: r, callback: tY }),
                    tX = (0, h.c)((t) => {
                        (tN({ to: o.AppScreen.AlbumScreen }), null == th || th(), t$(t));
                    }),
                    tZ = (0, h.c)(() => {
                        if (!tw()) {
                            if (tB) return void td.open();
                            (tC || tV || (tv(!0), null == tb || tb()), tq(), tV || ty());
                        }
                    }),
                    tJ = (0, h.c)(() => {
                        (tA || r.isLiked || (tg(!0), null == t_ || t_()), tS());
                    }),
                    tQ = (0, h.c)((t) => {
                        (tk(t), tT(t));
                    }),
                    t0 = (0, n.useMemo)(() => {
                        var t;
                        return (0, a.jsxs)(v.HL, {
                            className: (0, s.$)(J().title, { [J().title_withVersion]: r.version, [J().title_withChart]: tt }),
                            variant: 'div',
                            type: 'entity',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 2,
                            'aria-hidden': !0,
                            'data-test-id': m.Kq.album.ALBUM_TITLE,
                            children: [
                                (0, a.jsx)(K.N, {
                                    'aria-label': ''.concat(r.title, ' ').concat(null != (t = r.version) ? t : ''),
                                    className: J().titleLink,
                                    href: r.url,
                                    tabIndex: -1,
                                    onClick: tX,
                                    'data-test-id': m.Kq.album.ALBUM_TITLE_LINK,
                                    children: r.title,
                                }),
                                r.version &&
                                    (0, a.jsx)(v.HL, {
                                        className: J().version,
                                        variant: 'span',
                                        'data-test-id': m.Kq.album.ALBUM_VERSION,
                                        children: ' '.concat(r.version),
                                    }),
                            ],
                        });
                    }, [r.title, r.url, r.version, tX, tt]),
                    t8 = (0, n.useMemo)(() => {
                        var t;
                        return (0, a.jsx)(K.N, {
                            className: J().srTitleLink,
                            href: r.url,
                            onClick: tX,
                            children: ''.concat(r.title, ' ').concat(null != (t = r.version) ? t : ''),
                        });
                    }, [r.title, r.url, r.version, tX]),
                    t9 = (0, n.useMemo)(() => {
                        var t;
                        if (null == r || null == (t = r.trailer) ? void 0 : t.isAvailable)
                            return (0, a.jsx)(
                                V.n,
                                {
                                    children: (0, a.jsx)(
                                        W.k,
                                        { className: (0, s.$)(J().trailerButton, J().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: tz },
                                        r.getKey('TrailerButton'),
                                    ),
                                },
                                r.getKey('AlbumCardTrailerTooltip'),
                            );
                    }, [r, tz]),
                    t2 = (0, n.useMemo)(
                        () =>
                            (0, a.jsx)(
                                X.x,
                                {
                                    album: r,
                                    onOpenChange: tQ,
                                    open: tx,
                                    className: (0, s.$)(J().menuButton, J().control),
                                    icon: (0, a.jsx)(g.I, { size: 'xxs', variant: 'more' }),
                                    size: 's',
                                    variant: Y.z.CARD,
                                    'data-test-id': m.Kq.album.ALBUM_CONTEXT_MENU_BUTTON,
                                },
                                r.getKey('AlbumContextMenu'),
                            ),
                        [r, tQ, tx],
                    ),
                    t4 = (0, n.useCallback)(
                        () =>
                            (0, a.jsx)(
                                H.D,
                                {
                                    className: (0, s.$)(J().playButton, J().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                    onClick: tZ,
                                    isPlaying: tV,
                                    disabled: tE,
                                },
                                r.getKey('PlayButton'),
                            ),
                        [tE, r, tV, tZ],
                    ),
                    t5 = (0, n.useMemo)(
                        () =>
                            tE
                                ? (0, a.jsx)(U.S, {
                                      className: J().buyPlusPopover,
                                      buttonText: tm({ id: 'interface-actions.more-details' }),
                                      isNested: !0,
                                      placement: 'top-start',
                                      isOpened: tP,
                                      onOpenChange: tj,
                                      textVariant: 'album',
                                      albumTextVariant: r.type,
                                      arrowProps: q,
                                      offsetOptions: $,
                                      renderChildren: t4,
                                  })
                                : t4(),
                        [tE, tP, tj, tm, t4, r.type],
                    ),
                    t6 = (0, b.L)(() => {
                        if (tE) return;
                        let t = !tR && !tr.isAuthorized;
                        return (0, a.jsx)(
                            G.c,
                            {
                                className: (0, s.$)(J().likeButton, J().control),
                                isLiked: r.isLiked,
                                onClick: tJ,
                                variant: 'default',
                                size: 's',
                                iconSize: 'xxs',
                                disabled: t,
                            },
                            r.getKey('LikeButton'),
                        );
                    }),
                    t7 = (0, n.useMemo)(() => {
                        if (!tE)
                            return (0, a.jsx)(
                                F.O,
                                { onClick: tL, isPinned: r.isPinned, className: (0, s.$)(J().pinButton, J().control), withRipple: !1, isDisabled: tE },
                                r.getKey('PinButton'),
                            );
                    }, [r, tE, tL]),
                    t1 = (0, n.useMemo)(() => {
                        if (r.isAvailable || tE)
                            return (0, a.jsx)(A.hg, {
                                isVisible: tx || tI || tP,
                                className: J().controls,
                                playControl: t5,
                                likeControl: t6,
                                menuControl: t2,
                                pinControl: t7,
                                trailerControl: t9,
                            });
                    }, [r, tx, tI, t2, t9, tP, t5, t6, t7, tE]),
                    t3 = (0, n.useMemo)(
                        () =>
                            (0, a.jsx)(C.t, {
                                className: J().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': m.Kq.album.ALBUM_CARD,
                                children: (0, a.jsxs)('div', {
                                    className: J().coverBlock,
                                    onClick: tX,
                                    children: [
                                        (0, a.jsx)(D.B, {
                                            className: J().image,
                                            src: r.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: tW,
                                            withAvatarReplace: !0,
                                            isAvailable: tD,
                                            'aria-hidden': !0,
                                        }),
                                        tU && (0, a.jsx)(g.I, { variant: 'plusBadge', className: J().plusBadge }),
                                        t1,
                                    ],
                                }),
                            }),
                        [tX, r.coverUri, tD, tW, t1, tU],
                    );
                return (0, a.jsxs)(A.MN, {
                    ref: ts,
                    className: (0, s.$)(J().root, { [J().root_withChart]: tt }, e),
                    'aria-label': tW,
                    explicitMarkComponent:
                        r.explicitDisclaimer &&
                        (0, a.jsx)(
                            z.N,
                            { className: J().explicitMark, getDescriptionTexts: r.getDescriptionTexts, variant: r.explicitDisclaimer },
                            r.getKey('AlbumCardExplicitMarkIcon'),
                        ),
                    title: t0,
                    srTitle: t8,
                    contentLinesCount: Z,
                    view: t3,
                    description:
                        ti &&
                        (0, a.jsx)(
                            S.i,
                            { className: J().artists, artists: r.artists, lineClamp: 1, linkClassName: J().artistLink, captionSize: 's' },
                            r.getKey('description'),
                        ),
                    chart:
                        tt &&
                        r.chart &&
                        (0, a.jsx)(L.t, { withIcon: !0, className: J().chart, position: r.chart.position, progress: r.chart.progress }, r.getKey('chart')),
                    'data-test-id': m.Kq.album.ALBUM_ITEM,
                    children: [
                        te &&
                            tF &&
                            (0, a.jsx)(v.HL, { className: J().addition, variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: tF }),
                        Q &&
                            !!r.actualLikesCount &&
                            (0, a.jsx)(E.x, {
                                className: J().likeTextButton,
                                ariaLabel: tm({ id: 'entity-names.likes-counter' }, { counter: r.actualLikesCount }),
                                likesCount: r.actualLikesCount,
                                isLiked: r.isLiked,
                                handleLikeClick: tS,
                            }),
                        i,
                    ],
                });
            });
        },
        13607: (t, e, i) => {
            'use strict';
            var a;
            (i.d(e, { _: () => a }),
                (function (t) {
                    ((t.UP = 'up'), (t.DOWN = 'down'), (t.SAME = 'same'), (t.NEW = 'new'));
                })(a || (a = {})));
        },
        25883: (t, e, i) => {
            'use strict';
            i.d(e, { l: () => l });
            var a = i(88800),
                s = i(84961),
                r = i(33719),
                n = i(5048);
            let l = (0, s.PA)((t) => {
                let { album: e, closeToast: i } = t,
                    s = (0, n.b)(e.type);
                return (0, a.jsx)(r.k, {
                    closeToast: i,
                    entityVariant: s,
                    coverUri: e.coverUri,
                    entityUrl: e.url,
                    entityTitle: e.title,
                    isPinned: e.isPinned,
                    radius: 's',
                });
            });
        },
        28304: (t) => {
            t.exports = {
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
        29008: (t, e, i) => {
            'use strict';
            i.d(e, { c: () => n, r: () => l });
            var a = i(53548),
                s = i(2058),
                r = i(61691),
                n = (function (t) {
                    return ((t.PIN = 'pin'), t);
                })({});
            let l = (t, e) => {
                let { formatMessage: i } = (0, s.A)();
                return (0, a.useMemo)(() => {
                    switch (t) {
                        case r._.SINGLE:
                            return i({ id: 'entity-names.single' });
                        case r._.PODCAST:
                            return i({ id: 'entity-names.podcast' });
                        case r._.AUDIOBOOK:
                            if ('pin' === e) return i({ id: 'entity-names.book' });
                            return i({ id: 'entity-names.audio' });
                        case r._.FAIRY_TALE:
                            return i({ id: 'entity-names.fairy-tale' });
                        default:
                            return i({ id: 'entity-names.album' });
                    }
                }, [t, i, e]);
            };
        },
        32414: (t, e, i) => {
            'use strict';
            i.d(e, { s: () => a });
            let a = () => ({ year: 'numeric', month: 'long', day: 'numeric' });
        },
        41918: (t, e, i) => {
            'use strict';
            i.d(e, { z: () => a });
            var a = (function (t) {
                return ((t.PAGE = 'PAGE'), (t.CARD = 'CARD'), t);
            })({});
        },
        43443: (t, e, i) => {
            'use strict';
            i.d(e, { t: () => _ });
            var a = i(88800),
                s = i(65724),
                r = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(17392),
                d = i(13607),
                u = i(52300),
                c = i(29504),
                m = i(3099),
                p = i.n(m);
            let _ = (0, r.PA)((t) => {
                let {
                        progress: e,
                        withIcon: i,
                        withCrownIcon: r,
                        position: m,
                        weight: _ = 'normal',
                        isDisliked: h,
                        isDisabled: b,
                        className: A,
                        positionClassName: g,
                    } = t,
                    { formatMessage: C } = (0, l.A)(),
                    v = e || i,
                    x = (0, n.useMemo)(() => {
                        if (r) return 'crown';
                        switch (e) {
                            case d._.UP:
                                return 'chartUp';
                            case d._.DOWN:
                                return 'chartDown';
                            case d._.NEW:
                                return 'chartNew';
                            default:
                                return 'chartSame';
                        }
                    }, [e, r]),
                    k = (0, n.useMemo)(() => {
                        switch (e) {
                            case d._.UP:
                                return C({ id: 'entity-names.chart-up' });
                            case d._.DOWN:
                                return C({ id: 'entity-names.chart-down' });
                            case d._.NEW:
                                return C({ id: 'entity-names.chart-new' });
                            default:
                                return C({ id: 'entity-names.chart-same' });
                        }
                    }, [C, e]),
                    N = r ? 'crown' : e;
                return (0, a.jsxs)('div', {
                    className: (0, s.$)(p().root, A),
                    'data-test-id': o.OA.chart.CHART_PROGRESS,
                    children: [
                        (0, a.jsx)(c.HL, {
                            variant: 'div',
                            weight: _,
                            type: 'entity',
                            size: 'm',
                            className: (0, s.$)(p().position, g, { [p().position_disliked]: h, [p().position_disabled]: b }),
                            'data-test-id': o.OA.chart.CHART_PROGRESS_POSITION,
                            children: m,
                        }),
                        v &&
                            (0, a.jsx)(u.I, {
                                variant: x,
                                size: 'xxs',
                                'aria-label': k,
                                className: (0, s.$)(p().progress, p()['progress_'.concat(N)], { [p().progress_disliked]: h, [p().progress_disabled]: b }),
                                'data-test-id': o.OA.chart.CHART_PROGRESS_ICON,
                            }),
                    ],
                });
            });
        },
        46591: (t) => {
            t.exports = {
                root: 'ArtistAlbumsPage_root__UVZDz',
                scrollContainer: 'ArtistAlbumsPage_scrollContainer__2FrjI',
                important: 'ArtistAlbumsPage_important__Id_vh',
                footer: 'ArtistAlbumsPage_footer__6Nrct',
                item: 'ArtistAlbumsPage_item__kiegh',
                content: 'ArtistAlbumsPage_content__65D6P',
            };
        },
        47450: (t, e, i) => {
            'use strict';
            i.d(e, { r: () => Z });
            var a = i(88800),
                s = i(65724),
                r = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(58390),
                d = i(97234),
                u = i(59724),
                c = i(17392),
                m = i(63565),
                p = i(29993),
                _ = i(29504),
                h = i(32596),
                b = i(10079),
                A = i(96237),
                g = i(69630),
                C = i(91959),
                v = i(98427),
                x = i(46422),
                k = i(44230),
                N = i(37670),
                y = i(72288),
                S = i(87128),
                L = i(54320),
                f = i(19998),
                I = i(86790),
                T = i(60266),
                M = i(93317),
                P = i(37770),
                j = i(79418),
                w = i(81685),
                O = i(30144),
                R = i(324),
                B = i(53073),
                U = i(83418),
                E = i(46511),
                D = i(57297),
                z = i(2218),
                G = i(77863),
                K = i(45383),
                F = i(98774);
            async function H(t, e) {
                var i, a, s;
                if (!t) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let r = await (0, E.W)(e.locale),
                    n = r({ id: 'metadata.artist-albums-title' }, { artistName: t.artist.name }),
                    l = r({ id: 'metadata.artist-albums-description' }, { artistName: t.artist.name });
                return {
                    robots: (0, F.G)(t.artist),
                    title: n,
                    description: l,
                    openGraph: (0, D.i)({
                        ogTitle: n,
                        ogDescription: l,
                        ogType: 'website',
                        fullUrl: null != (i = e.fullUrl) ? i : '',
                        locale: e.locale,
                        customImage: (0, U.v)({ host: e.host }),
                        siteName: r({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, z.H)({ cardType: G.W.SUMMARY_LARGE_IMAGE, title: n, description: l }),
                    facebook: (0, B.k)(),
                    appLinks: (0, R.X)({
                        additional: { ...e, url: null != (a = e.url) ? a : '', fullUrl: null != (s = e.fullUrl) ? s : '', host: e.host },
                        appName: r({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, K.S)('/artist/:artistId/albums', e.tld, { params: { artistId: t.artist.id } }),
                };
            }
            async function W(t, e) {
                var i, a, s;
                if (!t) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let r = await (0, E.W)(e.locale),
                    n = r({ id: 'metadata.artist-compilations-title' }, { artistName: t.artist.name }),
                    l = r({ id: 'metadata.artist-compilations-description' }, { artistName: t.artist.name });
                return {
                    robots: (0, F.G)(t.artist),
                    title: n,
                    description: l,
                    openGraph: (0, D.i)({
                        ogTitle: n,
                        ogDescription: l,
                        ogType: 'website',
                        fullUrl: null != (i = e.fullUrl) ? i : '',
                        locale: e.locale,
                        customImage: (0, U.v)({ host: e.host }),
                        siteName: r({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, z.H)({ cardType: G.W.SUMMARY_LARGE_IMAGE, title: n, description: l }),
                    facebook: (0, B.k)(),
                    appLinks: (0, R.X)({
                        additional: { ...e, url: null != (a = e.url) ? a : '', fullUrl: null != (s = e.fullUrl) ? s : '', host: e.host },
                        appName: r({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, K.S)('/artist/:artistId/compilations', e.tld, { params: { artistId: t.artist.id } }),
                };
            }
            async function V(t, e) {
                var i, a, s;
                if (!t) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let r = await (0, E.W)(e.locale),
                    n = r({ id: 'metadata.artist-discography-title' }, { artistName: t.artist.name }),
                    l = r({ id: 'metadata.artist-discography-description' }, { artistName: t.artist.name });
                return {
                    robots: (0, F.G)(t.artist),
                    title: n,
                    description: l,
                    openGraph: (0, D.i)({
                        ogTitle: n,
                        ogDescription: l,
                        ogType: 'website',
                        fullUrl: null != (i = e.fullUrl) ? i : '',
                        locale: e.locale,
                        customImage: (0, U.v)({ host: e.host }),
                        siteName: r({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, z.H)({ cardType: G.W.SUMMARY_LARGE_IMAGE, title: n, description: l }),
                    facebook: (0, B.k)(),
                    appLinks: (0, R.X)({
                        additional: { ...e, url: null != (a = e.url) ? a : '', fullUrl: null != (s = e.fullUrl) ? s : '', host: e.host },
                        appName: r({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, K.S)('/artist/:artistId/discography', e.tld, { params: { artistId: t.artist.id } }),
                };
            }
            var Y = i(27342),
                $ = i(63512),
                q = i(46591),
                X = i.n(q);
            let Z = (0, r.PA)((t) => {
                var e, i, r;
                let { artistId: R, variant: B, preloadedArtist: U, preloadedAlbums: E } = t,
                    {
                        artist: D,
                        disclaimerModalState: z,
                        settings: { isMobile: G },
                    } = (0, y.g)(),
                    { formatMessage: K } = (0, l.A)(),
                    { contentScrollRef: F, setContentScrollRef: q } = (0, k.g)(),
                    Z = (0, x.W)(),
                    J = D.albumsSubpage.isShimmerVisible ? A.r3 : D.albumsSubpage.items.length,
                    Q = (0, p.c)((t) => {
                        D.albumsSubpage.getData({ artistId: R, page: t, pageSize: A.r3, sort: { sortBy: m.g.YEAR } });
                    });
                (0, L.X)(D.albumsSubpage.pagesLoader, Q);
                let tt = (0, C.S)({ artist: null == (e = D.meta) ? void 0 : e.artist, shouldHistoryBack: !0 });
                ((0, $.G)(R),
                    (0, n.useEffect)(() => {
                        var t;
                        (null == (t = D.meta) ? void 0 : t.artist.isUnsafeLegal) && tt();
                    }, [null == (i = D.meta) ? void 0 : i.artist.isUnsafeLegal, tt]),
                    (0, Y._)(D, R),
                    (0, n.useEffect)(
                        () => () => {
                            D.albumsSubpage.reset();
                        },
                        [D, D.albumsSubpage],
                    ),
                    D.albumsSubpage.isNotFound && (0, o.notFound)(),
                    (0, N.J)(D.albumsSubpage.isResolved),
                    ((t, e) => {
                        var i;
                        let { fullscreenVideoPlayer: a } = (0, y.g)(),
                            s = null == t || null == (i = t.meta) ? void 0 : i.artist,
                            r = null == t ? void 0 : t.infoLoadingState.isLoading,
                            l = null == t ? void 0 : t.infoLoadingState.isRejected,
                            o = (0, n.useCallback)(
                                (t) => {
                                    if (l) return {};
                                    if (!s || r) return;
                                    let i = (0, w.E)(s);
                                    switch (e) {
                                        case S.h.ALBUMS:
                                            return H({ artist: i }, t);
                                        case S.h.COMPILATIONS:
                                            return W({ artist: i }, t);
                                        case S.h.DISCOGRAPHY:
                                            return V({ artist: i }, t);
                                    }
                                },
                                [s, r, l, e],
                            );
                        (0, O.C)(a.modal.isOpened ? null : o);
                    })(D, B));
                let te = (0, n.useMemo)(() => ({ Footer: () => (0, a.jsx)(T.A, { children: (0, a.jsx)(I.w, { className: X().footer }) }) }), []),
                    ti = (0, n.useMemo)(() => {
                        switch (B) {
                            case S.h.DISCOGRAPHY:
                                return K({ id: 'page.artist-discography-header' }, { artistName: D.commonSubPage.artistName });
                            case S.h.COMPILATIONS:
                                return K({ id: 'page.artist-compilations-header' }, { artistName: D.commonSubPage.artistName });
                            default:
                                return K({ id: 'page.artist-albums-header' }, { artistName: D.commonSubPage.artistName });
                        }
                    }, [D.commonSubPage.artistName, K, B]),
                    ta = (0, n.useMemo)(() => {
                        switch (B) {
                            case S.h.DISCOGRAPHY:
                                return K({ id: 'entity-names.artist-studio-albums-list' });
                            case S.h.COMPILATIONS:
                                return K({ id: 'entity-names.artist-compilations-list' });
                            default:
                                return K({ id: 'entity-names.artist-albums-list' });
                        }
                    }, [K, B]),
                    ts = (0, n.useMemo)(() => {
                        switch (B) {
                            case S.h.DISCOGRAPHY:
                                return v.b.ARTIST_DISCOGRAPHY;
                            case S.h.COMPILATIONS:
                                return v.b.ARTIST_COMPILATIONS;
                            default:
                                return v.b.ARTIST_ALBUMS;
                        }
                    }, [B]),
                    tr = [];
                return (R &&
                    D.albumsSubpage.isNeededToLoad &&
                    (D.albumsSubpage.setVariant(B),
                    tr.push(D.albumsSubpage.getData({ artistId: R, page: 0, pageSize: A.r3, sort: { sortBy: m.g.YEAR }, preloadedAlbums: E }))),
                R && D.infoLoadingState.isNeededToLoad && tr.push(D.getInfo({ artistId: R, preloadedArtist: U })),
                tr.length && (0, n.use)(Promise.allSettled(tr)),
                null == (r = D.meta) ? void 0 : r.artist.isLegalRejected)
                    ? (0, a.jsx)(f.M, { modalState: z })
                    : D.albumsSubpage.isRejected && !D.albumsSubpage.isNotFound
                      ? (0, a.jsx)(h.SomethingWentWrong, {})
                      : (0, a.jsx)(u.a, {
                            pageId: d.AppScreen.ArtistScreen,
                            pageIdForFrom: ts,
                            mainObjectId: R,
                            mainObjectType: d.DomainObjectType.Artist,
                            children: (0, a.jsx)(g.h, {
                                scrollElement: F,
                                outerTitle: ti,
                                children: (0, a.jsxs)('div', {
                                    className: X().root,
                                    'data-test-id': c.Xk.artist.ARTIST_ALBUMS_PAGE,
                                    children: [
                                        (0, a.jsx)(M.Y, {
                                            variant: M.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: Z.canBack,
                                            children: (0, a.jsx)(_.DZ, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: ti }),
                                        }),
                                        (0, a.jsx)(j.$, {
                                            className: (0, s.$)(X().scrollContainer, X().important),
                                            listClassName: X().content,
                                            itemClassName: X().item,
                                            customComponents: te,
                                            itemContentCallback: (t) => {
                                                let e = D.albumsSubpage.items[t],
                                                    i = K({ id: 'loading-messages.entity-is-loading' }, { entityName: K({ id: 'entity-names.playlist' }) });
                                                return e
                                                    ? (0, a.jsx)(b.a, { album: e, contentLinesCount: 4 }, e.id)
                                                    : (0, a.jsx)(P.V, { 'aria-label': i, linesCount: 4 });
                                            },
                                            totalCount: J,
                                            onGetDataByPage: Q,
                                            pageSize: A.r3,
                                            totalRequests: D.albumsSubpage.requestsCount,
                                            handleRef: q,
                                            context: { listAriaLabel: ta },
                                            isMobileLayout: G,
                                            useWindowScroll: G,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
        },
        56651: (t, e, i) => {
            'use strict';
            i.d(e, { A: () => m });
            var a = i(88800),
                s = i(96706),
                r = i(53548),
                n = i(2058),
                l = i(29595),
                o = i(74965),
                d = i(72288),
                u = i(66943),
                c = i(25883);
            let m = (t) => {
                let { user: e } = (0, d.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: m } = (0, n.A)(),
                    [p, _] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!e.isAuthorized) return void i((0, a.jsx)(u.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (p) return;
                    let r = { ...(0, s.HO)(t), url: t.url, isPinned: !t.isPinned };
                    _(!0);
                    let n = await t.togglePin();
                    (_(!1),
                        n
                            ? i((0, a.jsx)(c.l, { album: r }), { containerId: l.u.INFO })
                            : i((0, a.jsx)(u.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [t, m, i, p, e.isAuthorized]);
            };
        },
        60757: (t, e, i) => {
            'use strict';
            i.d(e, { c: () => s });
            var a = i(58217);
            let s = (t) => {
                let { album: e, callback: i, shouldHistoryBack: s } = t;
                return (0, a.l)({ entity: e, callback: i, modalBehavior: void 0 === s ? void 0 : { shouldHistoryBack: s }, preventDefaultWhenSafe: !0 });
            };
        },
        63565: (t, e, i) => {
            'use strict';
            var a;
            (i.d(e, { g: () => a }),
                (function (t) {
                    ((t.RATING = 'rating'), (t.YEAR = 'year'));
                })(a || (a = {})));
        },
        66610: (t, e, i) => {
            'use strict';
            i.d(e, { D: () => o });
            var a = i(53548),
                s = i(24709),
                r = i(88966),
                n = i(87138),
                l = i(46457);
            let o = (0, s.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let t = (0, r.N)(),
                    e = (0, n.w)(),
                    i = (0, a.useMemo)(() => (e ? t.createBlockReporter(e.snapshot) : null), [t, e]);
                return (0, l.c)((t) => {
                    e?.object && i && i.actionPerformed({ ...t, viewUuid: (e.object.activeViewSession ?? e.object.viewSession).start() });
                });
            });
        },
        84218: (t) => {
            t.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        86298: (t, e, i) => {
            'use strict';
            i.d(e, { x: () => m });
            var a = i(88800),
                s = i(65724),
                r = i(2058),
                n = i(17392),
                l = i(96817),
                o = i(52300),
                d = i(29504),
                u = i(84218),
                c = i.n(u);
            let m = (t) => {
                let { className: e, isLiked: i, likesCount: u, handleLikeClick: m, ariaLabel: p } = t,
                    { formatNumber: _ } = (0, r.A)();
                return (0, a.jsx)(l.$, {
                    className: (0, s.$)(c().root, e),
                    onClick: m,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, a.jsx)(o.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: c().icon }),
                    'aria-label': p,
                    'data-test-id': n.S7.CARD_LIKES,
                    children: (0, a.jsx)(d.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: _(u) }),
                });
            };
        },
        87128: (t, e, i) => {
            'use strict';
            i.d(e, { h: () => a });
            var a = (function (t) {
                return ((t.DISCOGRAPHY = 'discography'), (t.ALBUMS = 'albums'), (t.COMPILATIONS = 'compilations'), t);
            })({});
        },
        95756: (t, e, i) => {
            'use strict';

            i.d(e, { x: () => V });
            // for PulseSync WebHost: BEGIN imports for native addon context menu items
            var pulseSyncMenuJsx = i(88800),
                pulseSyncMenuItems = i(19934),
                pulseSyncMenuIcons = i(52300);
            // for PulseSync WebHost: END imports for native addon context menu items
            var a = i(88800),
                s = i(84961),
                r = i(53548),
                n = i(2058),
                l = i(97234),
                o = i(17392),
                d = i(18593),
                u = i(29993),
                c = i(19934),
                m = i(18143),
                p = i(29595),
                _ = i(74965),
                h = i(72288),
                b = i(66943),
                A = i(92966),
                g = i(56651),
                C = i(48749),
                v = i(22505),
                x = i(5407),
                k = i(64284),
                N = i(98427),
                y = i(57934),
                S = i(84384),
                L = i(9618),
                f = i(87762),
                I = i(95210),
                T = i(47964),
                M = i(46936),
                P = i(97956),
                j = i(98953),
                w = i(32721),
                O = i(18130),
                R = i(88969),
                B = i(52300);
            let U = (0, s.PA)((t) => {
                let { isFinished: e, onClick: i, className: s } = t,
                    { user: n } = (0, h.g)(),
                    l = (0, r.useMemo)(
                        () => (e ? (0, a.jsx)(R.A, { id: 'interface-actions.mark-all-non-listened' }) : (0, a.jsx)(R.A, { id: 'interface-actions.mark-all-listened' })),
                        [e],
                    );
                return (0, a.jsx)(c.Dr, {
                    className: s,
                    onClick: i,
                    icon: (0, a.jsx)(B.I, { variant: 'check', size: 'xxs' }),
                    disabled: !n.isAuthorized,
                    'data-test-id': o.S7.CONTEXT_MENU_MARK_ALL_LISTENED_BUTTON,
                    children: l,
                });
            });
            var E = i(93091),
                D = i(27817),
                z = i(74064),
                G = i(44988),
                K = i(15425),
                F = i(81066),
                H = i(18278),
                W = i(41918);
            // for PulseSync: BEGIN download-to-file action in the album context menu
            var pulseSyncMst = i(5120);
            let pulseSyncDownloadAlbumToFile = (0, s.PA)((e) => {
                let { album: t } = e,
                    i = (0, r.useCallback)(async () => {
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
                return (0, a.jsx)(c.Dr, {
                    onClick: i,
                    disabled: !t?.id,
                    icon: (0, a.jsx)(B.I, {
                        variant: 'download',
                        size: 'xxs',
                    }),
                    children: 'Скачать в файл',
                });
            });
            // for PulseSync: END download-to-file action in the album context menu
            let V = (0, s.PA)((t) => {
                // for PulseSync WebHost: BEGIN refresh the album menu when native addon slots change
                let [, pulseSyncSetAlbumMenuRevision] = (0, r.useState)(0);
                (0, r.useEffect)(() => {
                    const onNativeSlotChange = (event) => {
                        if (event.detail === 'albumContextMenu') pulseSyncSetAlbumMenuRevision((revision) => revision + 1);
                    };
                    document.addEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                    pulseSyncSetAlbumMenuRevision((revision) => revision + 1);
                    return () => document.removeEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                }, []);
                // for PulseSync WebHost: END refresh the album menu when native addon slots change
                var e, i;
                let { album: s, children: R, onOpenChange: B, open: V, wrapperClassName: Y, variant: $, ...q } = t,
                    { shouldShowBuySubscriptionModal: X, showBuySubscriptionModal: Z } = (0, L.q)(),
                    {
                        settings: { isMobile: J },
                        trailer: Q,
                        user: tt,
                        experiments: te,
                        albumCPA: { isPlusCPAEnabled: ti, isPlusCPAPlayerBarEnabled: ta },
                    } = (0, h.g)(),
                    ts = (0, A.K)(s),
                    tr = (0, g.A)(s),
                    tn = (0, y.F)(),
                    tl = ''.concat(k.U.ALBUM, '-').concat(s.id),
                    to = s.isNonMusic && $ === W.z.PAGE,
                    td = te.checkExperiment(P.z.WebEditorsFeatures, 'on'),
                    tu = !s.isNonMusic && !te.checkExperiment(P.z.WebNextProductWithoutRecommendation, 'on'),
                    { formatMessage: tc } = (0, n.A)(),
                    tm = (0, x.P)(),
                    { pageAlbumId: tp } = (0, f.T)(),
                    t_ = ti({ pageAlbumId: tp, albumId: s.id, isNonMusic: s.isNonMusic }),
                    th = ta(s.id, s.isNonMusic),
                    tb = (() => {
                        let { user: t, album: e, fullscreenPlayer: i } = (0, h.g)(),
                            { notify: s } = (0, _.l)(),
                            { formatMessage: l } = (0, n.A)();
                        return (0, r.useCallback)(async () => {
                            var r, n;
                            if (!e) return;
                            let o = i.modal.isOpened ? p.u.FULLSCREEN_ERROR : p.u.ERROR;
                            return t.isAuthorized
                                ? (await e.setListeningFinishedStatus()) !== m.T.OK
                                    ? void s((0, a.jsx)(b.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: o })
                                    : void (null == (n = e.meta) || n.updateFinished(!(null == (r = e.meta) ? void 0 : r.listeningFinished)))
                                : void s((0, a.jsx)(b.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o });
                        }, [l, s, e, t.isAuthorized, i.modal.isOpened]);
                    })(),
                    { shareLink: tA, pathname: tg } = (0, O.b)('/album/:albumId', { params: { albumId: s.id } }),
                    tC = (0, C.A)({ entityVariant: M.D.ALBUM, urlParams: { id: s.id } }),
                    { isPlaying: tv, togglePlay: tx } = (0, T.B)({
                        seeds: null != (i = null == s ? void 0 : s.seeds) ? i : [],
                        pageIdForFrom: N.b.RADIO,
                        blockIdForFrom: tl,
                        parentContextId: s.id,
                    }),
                    { utmLink: tk } = (0, S.f)({ blockId: k.U.ALBUM, contextType: d.K.Album, contextId: null == s ? void 0 : s.id }),
                    tN = (0, u.c)(() => {
                        if (X && tt.isAuthorized) return void Z();
                        !tm() && (tv || tx());
                    }),
                    ty = (0, u.c)(() => {
                        if (X && !th) return void Z();
                        tm() || (Q.setUtmLink(tk), Q.openAlbumTrailer(s.id), tn(l.DomainObjectType.Album, String(s.id)));
                    });
                (0, I.N)(V);
                let tS = (0, r.useMemo)(() => {
                        if (!J) return (0, a.jsx)(D.L, { onClick: tr, isPinned: s.isPinned });
                    }, [s.isPinned, tr, J]),
                    tL = (0, r.useMemo)(() => {
                        let t = !t_ && !tt.isAuthorized;
                        return s.isNonMusic
                            ? (0, a.jsx)(G.U, { onClick: ts, isLiked: s.isLiked, albumType: s.type })
                            : (0, a.jsx)(E.T, { onClick: ts, isLiked: s.isLiked, disabled: t });
                    }, [s.isLiked, s.type, ts, s.isNonMusic, tt.isAuthorized, t_]),
                    tf = (0, r.useMemo)(() => {
                        var t;
                        if (!s.isNonMusic && (null == (t = s.trailer) ? void 0 : t.isAvailable)) return (0, a.jsx)(K.N, { onClick: ty, disabled: !s.isAvailable });
                    }, [s.isAvailable, null == (e = s.trailer) ? void 0 : e.isAvailable, s.isNonMusic, ty]),
                    tI = (0, r.useMemo)(() => {
                        if (tu) return (0, a.jsx)(F.C, { onClick: tN, disabled: !s.isAvailable || (th && J), variant: w.I.ALBUM, onOpenMenuChange: B });
                    }, [s.isAvailable, tN, tu, B, th, J]),
                    tT = { variant: j.Y.ALBUM, id: s.id, title: s.title, path: tg, albumArtistName: s.artistName, albumArtistId: s.artistId };
                // for PulseSync WebHost: BEGIN album context and native addon menu item rendering
                let pulseSyncInjectAlbumMenuItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('albumContextMenu', items, {
                        eventDetail: {
                            id: String(s.id),
                            url: tg,
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
                                        (activate(), B(!1));
                                    },
                                    children: label,
                                    'data-pulsesync-addon-menu-item': '',
                                },
                                key,
                            );
                        },
                    }) ?? items;
                // for PulseSync WebHost: END album context and native addon menu item rendering
                return (0, a.jsxs)(c.W1, {
                    isMobile: J,
                    offsetOptions: 10,
                    open: V,
                    onOpenChange: B,
                    ariaLabel: tc({ id: 'interface-actions.context-menu' }),
                    wrapperClassName: Y,
                    containerDataTestId: o.Kq.album.ALBUM_CONTEXT_MENU,
                    ...q,
                    // for PulseSync WebHost: BEGIN inject native addon items into the album context menu
                    children: pulseSyncInjectAlbumMenuItems([
                        J && (0, a.jsx)(H.C, { getDescriptionTexts: s.getDescriptionTexts, entityId: s.id }),
                        td && (0, a.jsx)(v.d, { entityVariant: M.D.ARTIST, adminUrl: tC }),
                        tS,
                        tL,
                        tf,
                        tI,
                        // for PulseSync: BEGIN insert the album download-to-file menu action
                        (0, a.jsx)(pulseSyncDownloadAlbumToFile, { album: s }),
                        // for PulseSync: END insert the album download-to-file menu action
                        R,
                        to && (0, a.jsx)(U, { onClick: tb, isFinished: s.listeningFinished }),
                        (0, a.jsx)(z.H, { shareLink: tA, entityMeta: tT }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the album context menu
                });
            });
        },
    },
]);
