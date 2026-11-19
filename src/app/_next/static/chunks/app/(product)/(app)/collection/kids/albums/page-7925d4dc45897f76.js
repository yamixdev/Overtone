(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4602],
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
        4370: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => r });
            var s = i(67174);
            let r = {
                main: (0, s.u)('/'),
                chart: (0, s.u)('/chart'),
                chartPodcasts: (0, s.u)('/chart/podcasts'),
                collection: (0, s.u)('/collection'),
                collectionAlbums: (0, s.u)('/collection/albums'),
                collectionArtists: (0, s.u)('/collection/artists'),
                collectionClips: (0, s.u)('/collection/clips'),
                collectionDislikes: (0, s.u)('/collection/dislikes'),
                collectionKids: (0, s.u)('/collection/kids'),
                collectionKidsAlbums: (0, s.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, s.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, s.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, s.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, s.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, s.u)('/collection/multivibes'),
                collectionVibes: (0, s.u)('/collection/vibes'),
                collectionPlaylists: (0, s.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, s.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, s.u)('/collection/playlists/liked'),
                collectionShelf: (0, s.u)('/collection/shelf'),
                collectionShelfLiked: (0, s.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, s.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, s.u)('/collection/shelf/recently-played'),
                concerts: (0, s.u)('/concerts'),
                kids: (0, s.u)('/kids'),
                mixes: (0, s.u)('/mixes'),
                musicHistory: (0, s.u)('/music-history'),
                muzmarket: (0, s.u)('/muzmarket'),
                mymusic: (0, s.u)('/mymusic'),
                mymusicDownloadsTracks: (0, s.u)('/mymusic/downloads/tracks'),
                multivibe: (0, s.u)('/multivibe'),
                nonMusic: (0, s.u)('/non-music'),
                pay: (0, s.u)('/pay'),
                userSlides: (0, s.u)('/slides/user'),
                search: (0, s.u)('/search'),
                searchHistory: (0, s.u)('/search/history'),
                settings: (0, s.u)('/settings'),
                video: (0, s.u)('/video'),
            };
        },
        9020: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 57328)), Promise.resolve().then(i.bind(i, 91312)));
        },
        10079: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => Z });
            var s = i(88800),
                r = i(65724),
                n = i(84961),
                a = i(53548),
                l = i(2058),
                o = i(97234),
                c = i(91177),
                d = i(70598),
                u = i(46482),
                m = i(17392),
                _ = i(18593),
                p = i(61691),
                h = i(29993),
                C = i(79070),
                A = i(29832),
                b = i(52300),
                x = i(7555),
                y = i(29504),
                g = i(60757),
                E = i(29008),
                N = i(92966),
                k = i(56651),
                O = i(13946),
                v = i(43443),
                T = i(5407),
                L = i(57934),
                P = i(84384),
                I = i(4795),
                f = i(87762),
                j = i(32414),
                S = i(78940),
                R = i(55693),
                D = i(39079),
                M = i(72288),
                w = i(52726),
                B = i(86298),
                U = i(81877),
                F = i(90224),
                z = i(49738),
                H = i(91292),
                K = i(56862),
                Y = i(16704),
                X = i(56446),
                V = i(36207),
                G = i(41918);
            let q = { mainAxis: -26, alignmentAxis: -16 },
                W = { isEnabled: !0, width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' };
            var $ = i(95756),
                J = i(28304),
                Q = i.n(J);
            let Z = (0, n.PA)((e) => {
                let {
                        className: t,
                        children: i,
                        album: n,
                        contentLinesCount: J,
                        withLikesCount: Z,
                        withChart: ee,
                        withAddition: et = !0,
                        withArtistName: ei = !0,
                        releaseDateFormatter: es = j.s,
                    } = e,
                    er = (0, c.D)(),
                    {
                        user: en,
                        trailer: ea,
                        settings: { isMobile: el },
                        albumCPA: { isPlusCPAEnabled: eo },
                        paywall: { modal: ec },
                    } = (0, M.g)(),
                    { from: ed, utmLink: eu } = (0, P.f)({ contextId: n.id, contextType: _.K.Album, utmForPageIds: n.artistIds }),
                    { formatMessage: em, formatDate: e_ } = (0, l.A)(),
                    { sendLikeSearchFeedback: ep, sendNavigateSearchFeedback: eh, sendPlaySearchFeedback: eC } = (0, R.z)(),
                    [eA, eb] = (0, a.useState)(!1),
                    [ex, ey] = (0, a.useState)(!1),
                    [eg, eE] = (0, a.useState)(!1),
                    eN = (0, d.S)(),
                    ek = (0, u.g)(),
                    eO = (0, N.K)(n),
                    ev = (0, k.A)(n),
                    eT = (0, S.Z)(n.url),
                    [eL, eP] = (0, a.useState)(!1),
                    eI = (0, L.F)(),
                    [ef, ej] = (0, a.useState)(!1),
                    eS = (0, T.P)(),
                    { pageAlbumId: eR } = (0, f.T)(),
                    eD = eo({ pageAlbumId: eR, albumId: n.id, isNonMusic: n.isNonMusic }),
                    eM = (0, I.N)(),
                    ew = n.isAvailableOnlyForPlus && !n.isUnsafeLegal && !n.isLegalRejected,
                    eB = ew && !el,
                    eU = n.isAvailable || eB || n.isAudiobook,
                    eF = (0, h.c)((e) => {
                        if ((e.stopPropagation(), eS())) return void e.preventDefault();
                        (ea.openAlbumTrailer(n.id), eI(o.DomainObjectType.Album, String(n.id)));
                    }),
                    ez = n.type === p._.SINGLE ? em({ id: 'entity-names.single' }) : void 0,
                    eH = n.releaseDate ? e_(n.releaseDate, es()) : void 0,
                    eK = ((e) => {
                        let t = e.filter((e) => !!e).join(' \xb7 ');
                        return 0 === t.length ? null : t;
                    })([null != eH ? eH : n.year, ez]),
                    eY = (0, E.r)(n.type),
                    eX = (0, a.useMemo)(() => {
                        var e;
                        let t = n.isLiked ? em({ id: 'entity-names.has-your-like' }) : '';
                        return ''
                            .concat(eY, ' ')
                            .concat(n.title, ' ')
                            .concat(null != (e = n.version) ? e : '', ' ')
                            .concat(t);
                    }, [eY, em, n.title, n.isLiked, n.version]),
                    { isPlaying: eV, togglePlay: eG } = (0, D.D)({
                        playContextParams: { contextData: { type: _.K.Album, meta: { id: n.id }, from: ed, utmLink: eu }, loadContextMeta: !0 },
                    }),
                    eq = (0, g.c)({ album: n, callback: eT }),
                    eW = (0, g.c)({ album: n, callback: eG }),
                    e$ = (0, h.c)((e) => {
                        (eN({ to: o.AppScreen.AlbumScreen }), null == eh || eh(), eq(e));
                    }),
                    eJ = (0, h.c)(() => {
                        if (!eS()) {
                            if (eM) return void ec.open();
                            (ex || eV || (ey(!0), null == eC || eC()), eW(), eV || ek());
                        }
                    }),
                    eQ = (0, h.c)(() => {
                        (eA || n.isLiked || (eb(!0), null == ep || ep()), eO());
                    }),
                    eZ = (0, h.c)((e) => {
                        (eE(e), eP(e));
                    }),
                    e0 = (0, a.useMemo)(() => {
                        var e;
                        return (0, s.jsxs)(y.HL, {
                            className: (0, r.$)(Q().title, { [Q().title_withVersion]: n.version, [Q().title_withChart]: ee }),
                            variant: 'div',
                            type: 'entity',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 2,
                            'aria-hidden': !0,
                            'data-test-id': m.Kq.album.ALBUM_TITLE,
                            children: [
                                (0, s.jsx)(H.N, {
                                    'aria-label': ''.concat(n.title, ' ').concat(null != (e = n.version) ? e : ''),
                                    className: Q().titleLink,
                                    href: n.url,
                                    tabIndex: -1,
                                    onClick: e$,
                                    'data-test-id': m.Kq.album.ALBUM_TITLE_LINK,
                                    children: n.title,
                                }),
                                n.version &&
                                    (0, s.jsx)(y.HL, {
                                        className: Q().version,
                                        variant: 'span',
                                        'data-test-id': m.Kq.album.ALBUM_VERSION,
                                        children: ' '.concat(n.version),
                                    }),
                            ],
                        });
                    }, [n.title, n.url, n.version, e$, ee]),
                    e8 = (0, a.useMemo)(() => {
                        var e;
                        return (0, s.jsx)(H.N, {
                            className: Q().srTitleLink,
                            href: n.url,
                            onClick: e$,
                            children: ''.concat(n.title, ' ').concat(null != (e = n.version) ? e : ''),
                        });
                    }, [n.title, n.url, n.version, e$]),
                    e9 = (0, a.useMemo)(() => {
                        var e;
                        if (null == n || null == (e = n.trailer) ? void 0 : e.isAvailable)
                            return (0, s.jsx)(
                                V.n,
                                {
                                    children: (0, s.jsx)(
                                        X.k,
                                        { className: (0, r.$)(Q().trailerButton, Q().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eF },
                                        n.getKey('TrailerButton'),
                                    ),
                                },
                                n.getKey('AlbumCardTrailerTooltip'),
                            );
                    }, [n, eF]),
                    e2 = (0, a.useMemo)(
                        () =>
                            (0, s.jsx)(
                                $.x,
                                {
                                    album: n,
                                    onOpenChange: eZ,
                                    open: eg,
                                    className: (0, r.$)(Q().menuButton, Q().control),
                                    icon: (0, s.jsx)(b.I, { size: 'xxs', variant: 'more' }),
                                    size: 's',
                                    variant: G.z.CARD,
                                    'data-test-id': m.Kq.album.ALBUM_CONTEXT_MENU_BUTTON,
                                },
                                n.getKey('AlbumContextMenu'),
                            ),
                        [n, eZ, eg],
                    ),
                    e4 = (0, a.useCallback)(
                        () =>
                            (0, s.jsx)(
                                Y.D,
                                {
                                    className: (0, r.$)(Q().playButton, Q().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                    onClick: eJ,
                                    isPlaying: eV,
                                    disabled: eB,
                                },
                                n.getKey('PlayButton'),
                            ),
                        [eB, n, eV, eJ],
                    ),
                    e1 = (0, a.useMemo)(
                        () =>
                            eB
                                ? (0, s.jsx)(w.S, {
                                      className: Q().buyPlusPopover,
                                      buttonText: em({ id: 'interface-actions.more-details' }),
                                      isNested: !0,
                                      placement: 'top-start',
                                      isOpened: ef,
                                      onOpenChange: ej,
                                      textVariant: 'album',
                                      albumTextVariant: n.type,
                                      arrowProps: W,
                                      offsetOptions: q,
                                      renderChildren: e4,
                                  })
                                : e4(),
                        [eB, ef, ej, em, e4, n.type],
                    ),
                    e7 = (0, C.L)(() => {
                        if (eB) return;
                        let e = !eD && !en.isAuthorized;
                        return (0, s.jsx)(
                            z.c,
                            {
                                className: (0, r.$)(Q().likeButton, Q().control),
                                isLiked: n.isLiked,
                                onClick: eQ,
                                variant: 'default',
                                size: 's',
                                iconSize: 'xxs',
                                disabled: e,
                            },
                            n.getKey('LikeButton'),
                        );
                    }),
                    e6 = (0, a.useMemo)(() => {
                        if (!eB)
                            return (0, s.jsx)(
                                K.O,
                                { onClick: ev, isPinned: n.isPinned, className: (0, r.$)(Q().pinButton, Q().control), withRipple: !1, isDisabled: eB },
                                n.getKey('PinButton'),
                            );
                    }, [n, eB, ev]),
                    e3 = (0, a.useMemo)(() => {
                        if (n.isAvailable || eB)
                            return (0, s.jsx)(A.hg, {
                                isVisible: eg || eL || ef,
                                className: Q().controls,
                                playControl: e1,
                                likeControl: e7,
                                menuControl: e2,
                                pinControl: e6,
                                trailerControl: e9,
                            });
                    }, [n, eg, eL, e2, e9, ef, e1, e7, e6, eB]),
                    e5 = (0, a.useMemo)(
                        () =>
                            (0, s.jsx)(x.t, {
                                className: Q().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': m.Kq.album.ALBUM_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: Q().coverBlock,
                                    onClick: e$,
                                    children: [
                                        (0, s.jsx)(U.B, {
                                            className: Q().image,
                                            src: n.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eX,
                                            withAvatarReplace: !0,
                                            isAvailable: eU,
                                            'aria-hidden': !0,
                                        }),
                                        ew && (0, s.jsx)(b.I, { variant: 'plusBadge', className: Q().plusBadge }),
                                        e3,
                                    ],
                                }),
                            }),
                        [e$, n.coverUri, eU, eX, e3, ew],
                    );
                return (0, s.jsxs)(A.MN, {
                    ref: er,
                    className: (0, r.$)(Q().root, { [Q().root_withChart]: ee }, t),
                    'aria-label': eX,
                    explicitMarkComponent:
                        n.explicitDisclaimer &&
                        (0, s.jsx)(
                            F.N,
                            { className: Q().explicitMark, getDescriptionTexts: n.getDescriptionTexts, variant: n.explicitDisclaimer },
                            n.getKey('AlbumCardExplicitMarkIcon'),
                        ),
                    title: e0,
                    srTitle: e8,
                    contentLinesCount: J,
                    view: e5,
                    description:
                        ei &&
                        (0, s.jsx)(
                            O.i,
                            { className: Q().artists, artists: n.artists, lineClamp: 1, linkClassName: Q().artistLink, captionSize: 's' },
                            n.getKey('description'),
                        ),
                    chart:
                        ee &&
                        n.chart &&
                        (0, s.jsx)(v.t, { withIcon: !0, className: Q().chart, position: n.chart.position, progress: n.chart.progress }, n.getKey('chart')),
                    'data-test-id': m.Kq.album.ALBUM_ITEM,
                    children: [
                        et &&
                            eK &&
                            (0, s.jsx)(y.HL, { className: Q().addition, variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: eK }),
                        Z &&
                            !!n.actualLikesCount &&
                            (0, s.jsx)(B.x, {
                                className: Q().likeTextButton,
                                ariaLabel: em({ id: 'entity-names.likes-counter' }, { counter: n.actualLikesCount }),
                                likesCount: n.actualLikesCount,
                                isLiked: n.isLiked,
                                handleLikeClick: eO,
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
            var s;
            (i.d(t, { _: () => s }),
                (function (e) {
                    ((e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new'));
                })(s || (s = {})));
        },
        17017: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { Z: () => s }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(s || (s = {})));
        },
        19840: (e, t, i) => {
            'use strict';
            (i.d(t, { G: () => r }), i(46606));
            var s = i(91136);
            class r extends s.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        25883: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => l });
            var s = i(88800),
                r = i(84961),
                n = i(33719),
                a = i(5048);
            let l = (0, r.PA)((e) => {
                let { album: t, closeToast: i } = e,
                    r = (0, a.b)(t.type);
                return (0, s.jsx)(n.k, {
                    closeToast: i,
                    entityVariant: r,
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
            i.d(t, { c: () => a, r: () => l });
            var s = i(53548),
                r = i(2058),
                n = i(61691),
                a = (function (e) {
                    return ((e.PIN = 'pin'), e);
                })({});
            let l = (e, t) => {
                let { formatMessage: i } = (0, r.A)();
                return (0, s.useMemo)(() => {
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
        32414: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => s });
            let s = () => ({ year: 'numeric', month: 'long', day: 'numeric' });
        },
        41918: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => s });
            var s = (function (e) {
                return ((e.PAGE = 'PAGE'), (e.CARD = 'CARD'), e);
            })({});
        },
        43443: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => p });
            var s = i(88800),
                r = i(65724),
                n = i(84961),
                a = i(53548),
                l = i(2058),
                o = i(17392),
                c = i(13607),
                d = i(52300),
                u = i(29504),
                m = i(3099),
                _ = i.n(m);
            let p = (0, n.PA)((e) => {
                let {
                        progress: t,
                        withIcon: i,
                        withCrownIcon: n,
                        position: m,
                        weight: p = 'normal',
                        isDisliked: h,
                        isDisabled: C,
                        className: A,
                        positionClassName: b,
                    } = e,
                    { formatMessage: x } = (0, l.A)(),
                    y = t || i,
                    g = (0, a.useMemo)(() => {
                        if (n) return 'crown';
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
                    }, [t, n]),
                    E = (0, a.useMemo)(() => {
                        switch (t) {
                            case c._.UP:
                                return x({ id: 'entity-names.chart-up' });
                            case c._.DOWN:
                                return x({ id: 'entity-names.chart-down' });
                            case c._.NEW:
                                return x({ id: 'entity-names.chart-new' });
                            default:
                                return x({ id: 'entity-names.chart-same' });
                        }
                    }, [x, t]),
                    N = n ? 'crown' : t;
                return (0, s.jsxs)('div', {
                    className: (0, r.$)(_().root, A),
                    'data-test-id': o.OA.chart.CHART_PROGRESS,
                    children: [
                        (0, s.jsx)(u.HL, {
                            variant: 'div',
                            weight: p,
                            type: 'entity',
                            size: 'm',
                            className: (0, r.$)(_().position, b, { [_().position_disliked]: h, [_().position_disabled]: C }),
                            'data-test-id': o.OA.chart.CHART_PROGRESS_POSITION,
                            children: m,
                        }),
                        y &&
                            (0, s.jsx)(d.I, {
                                variant: g,
                                size: 'xxs',
                                'aria-label': E,
                                className: (0, r.$)(_().progress, _()['progress_'.concat(N)], { [_().progress_disliked]: h, [_().progress_disabled]: C }),
                                'data-test-id': o.OA.chart.CHART_PROGRESS_ICON,
                            }),
                    ],
                });
            });
        },
        46606: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { X: () => s }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(s || (s = {})));
        },
        53080: (e) => {
            e.exports = {
                root: 'CollectionKidsAlbumsPage_root__Fjk4C',
                scrollContainer: 'CollectionKidsAlbumsPage_scrollContainer__OWiCy',
                important: 'CollectionKidsAlbumsPage_important__1ghiQ',
                footer: 'CollectionKidsAlbumsPage_footer__9niUH',
                item: 'CollectionKidsAlbumsPage_item__A5TuB',
                content: 'CollectionKidsAlbumsPage_content__6w_jh',
            };
        },
        56651: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var s = i(88800),
                r = i(96706),
                n = i(53548),
                a = i(2058),
                l = i(29595),
                o = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(25883);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: m } = (0, a.A)(),
                    [_, p] = (0, n.useState)(!1);
                return (0, n.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, s.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (_) return;
                    let n = { ...(0, r.HO)(e), url: e.url, isPinned: !e.isPinned };
                    p(!0);
                    let a = await e.togglePin();
                    (p(!1),
                        a
                            ? i((0, s.jsx)(u.l, { album: n }), { containerId: l.u.INFO })
                            : i((0, s.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, m, i, _, t.isAuthorized]);
            };
        },
        59724: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => u });
            var s = i(88800),
                r = i(53548),
                n = i(8383),
                a = i(24709),
                l = i(88966);
            let o = new WeakMap();
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
                    let i =
                        o.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                i = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                s = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                i();
                                            } finally {
                                                ((t = !1), e.length > 0 && s());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (i(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), s());
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
            var d = i(97234);
            let u = (0, a.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let i = (0, l.N)(),
                        a = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === d.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [o, u] = (0, r.useState)(() => {
                            let e = new c(i.createScreenSession().screenViewUuid, i);
                            return { client: i, input: t, isReady: a, scope: a ? i.createScreenScope(t, e) : null, session: e };
                        });
                    if (o.client !== i || o.input.pageId !== t.pageId || o.input.skeletonId !== t.skeletonId) {
                        let r = new c(i.createScreenSession().screenViewUuid, i),
                            l = { client: i, input: t, isReady: a, scope: a ? i.createScreenScope(t, r) : null, session: r };
                        return (u(l), (0, s.jsx)(n.k, { value: l, children: e }));
                    }
                    if (
                        o.isReady !== a ||
                        o.input.mainObjectType !== t.mainObjectType ||
                        o.input.mainObjectId !== t.mainObjectId ||
                        o.input.displayReasonId !== t.displayReasonId ||
                        o.input.pageIdForFrom !== t.pageIdForFrom ||
                        o.input.pagePlacement !== t.pagePlacement ||
                        o.input.pageStyle !== t.pageStyle
                    ) {
                        let r = { ...o, input: t, isReady: a, scope: a ? i.createScreenScope(t, o.session) : null };
                        return (u(r), (0, s.jsx)(n.k, { value: r, children: e }));
                    }
                    return (0, s.jsx)(n.k, { value: o, children: e });
                },
            );
        },
        60266: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => a });
            var s = i(88800);
            i(30282);
            var r = i(11006),
                n = i.n(r);
            let a = (e) => {
                let { children: t } = e;
                return (0, s.jsx)('footer', { className: n().empty });
            };
        },
        60757: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => r });
            var s = i(58217);
            let r = (e) => {
                let { album: t, callback: i, shouldHistoryBack: r } = e;
                return (0, s.l)({ entity: t, callback: i, modalBehavior: void 0 === r ? void 0 : { shouldHistoryBack: r }, preventDefaultWhenSafe: !0 });
            };
        },
        62293: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => r });
            var s = i(97956);
            let r = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: r, userRegion: n } = e;
                return 'ru' === n && t(s.z.WebNextFooterDisclaimer, 'on') ? i() : r();
            };
        },
        66610: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => o });
            var s = i(53548),
                r = i(24709),
                n = i(88966),
                a = i(87138),
                l = i(46457);
            let o = (0, r.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, n.N)(),
                    t = (0, a.w)(),
                    i = (0, s.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, l.c)((e) => {
                    t?.object && i && i.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        69629: (e) => {
            var t = Object.prototype.hasOwnProperty;
            function i(e) {
                return '[Throws: ' + (e ? e.message : '?') + ']';
            }
            function s(e) {
                var s = [];
                return (function e(r) {
                    if (null === r || 'object' != typeof r) return r;
                    if (-1 !== s.indexOf(r)) return '[Circular]';
                    if ((s.push(r), 'function' == typeof r.toJSON))
                        try {
                            var n = e(r.toJSON());
                            return (s.pop(), n);
                        } catch (e) {
                            return i(e);
                        }
                    if (Array.isArray(r)) {
                        var a = r.map(e);
                        return (s.pop(), a);
                    }
                    var l = Object.keys(r).reduce(function (s, n) {
                        return (
                            (s[n] = e(
                                (function (e, s) {
                                    if (t.call(e, s))
                                        try {
                                            return e[s];
                                        } catch (e) {
                                            return i(e);
                                        }
                                    return e[s];
                                })(r, n),
                            )),
                            s
                        );
                    }, {});
                    return (s.pop(), l);
                })(e);
            }
            ((e.exports = function (e, t, i) {
                return JSON.stringify(s(e), t, i);
            }),
                (e.exports.ensureProperties = s));
        },
        84218: (e) => {
            e.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        86298: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => m });
            var s = i(88800),
                r = i(65724),
                n = i(2058),
                a = i(17392),
                l = i(96817),
                o = i(52300),
                c = i(29504),
                d = i(84218),
                u = i.n(d);
            let m = (e) => {
                let { className: t, isLiked: i, likesCount: d, handleLikeClick: m, ariaLabel: _ } = e,
                    { formatNumber: p } = (0, n.A)();
                return (0, s.jsx)(l.$, {
                    className: (0, r.$)(u().root, t),
                    onClick: m,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, s.jsx)(o.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': _,
                    'data-test-id': a.S7.CARD_LIKES,
                    children: (0, s.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: p(d) }),
                });
            };
        },
        86790: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => O });
            var s = i(88800),
                r = i(65724),
                n = i(84961),
                a = i(2058),
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
                    let { formatMessage: t, language: i, tld: s, year: r } = e;
                    return {
                        year: r,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, s, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, s, i) },
                    };
                };
            var m = i(62293),
                _ = i(99839);
            let p = (e) => e(new Date(), (0, _.m)());
            var h = i(51611),
                C = i(72288),
                A = i(11006),
                b = i.n(A),
                x = i(17392),
                y = i(29504),
                g = i(91292);
            let E = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('div', {
                        className: (0, r.$)(b().copyrights, t),
                        'data-test-id': x.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, s.jsxs)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: b().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, s.jsx)(g.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, r.$)(b().copyrightLink, b().yandexMusicLink),
                                        'data-test-id': x.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(y.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, s.jsx)(g.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: b().copyrightLink,
                                'data-test-id': x.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                N = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, s.jsxs)('div', {
                        className: b().links,
                        children: [
                            (0, s.jsx)('ol', {
                                className: b().list,
                                'data-test-id': x.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: r } = e;
                                    return (0, s.jsx)(
                                        'li',
                                        {
                                            className: b().item,
                                            children: (0, s.jsx)(g.N, { target: '_blank', href: r, className: b().link, 'data-test-id': x.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, s.jsx)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: b().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': x.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                k = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('footer', {
                        className: (0, r.$)(b().root, b().important, t),
                        'data-test-id': x.S7.FOOTER,
                        children: [(0, s.jsx)(N, { links: i.links, disclaimer: i.disclaimer }), (0, s.jsx)(E, { data: i.copyrights })],
                    });
                };
            (0, n.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, C.g)(),
                    { formatDate: r, formatMessage: n } = (0, a.A)(),
                    { language: l } = (0, h.h)(),
                    o = u({ formatMessage: n, language: l, tld: i.tld, year: p(r) });
                return (0, s.jsx)(E, { className: t, data: o });
            });
            let O = (0, n.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: n, location: _, user: A } = (0, C.g)(),
                    { formatDate: x, formatMessage: y } = (0, a.A)(),
                    { isEnabled: g } = null != (t = (0, o.P)()) ? t : {},
                    { language: E } = (0, h.h)(),
                    N = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: s, language: r, tld: n, userRegion: a, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: s, language: r, userRegion: n } = e,
                                    a = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, s, r) },
                                    l = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, s, r) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, s, r) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, s, r) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, s, r) },
                                    _ = [a, o, u];
                                return (i && 'ru' === n && _.push(l), _.push(m), _);
                            })({ formatMessage: i, isWebApplication: s, language: r, tld: n, userRegion: a }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: a,
                            }),
                            copyrights: u({ formatMessage: i, language: r, tld: n, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => n.checkExperiment(e, t),
                        formatMessage: y,
                        isWebApplication: l.$3,
                        tld: _.tld,
                        language: E,
                        userRegion: A.account.data.userSessionRegionIso,
                        year: p(x),
                    });
                return (0, s.jsx)(k, { className: (0, r.$)({ [b().root_withOffsetForDeeplink]: g }, i), data: N });
            });
        },
        89916: (e, t, i) => {
            'use strict';
            i.d(t, { GX: () => n.G, X1: () => s.X, m5: () => r.m });
            var s = i(46606),
                r = i(91136),
                n = i(19840);
            i(17017);
        },
        91136: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => r });
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: r = {}, ...n } = t,
                        a = e || 'Internal error';
                    (super(a, n), (this.message = a), (this.code = i), (this.data = r), (this.stack = Error(a).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
            class r extends s {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(e, { code: t, ...i }), Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        91312: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionKidsAlbumsPage: () => f });
            var s = i(88800),
                r = i(65724),
                n = i(84961),
                a = i(53548),
                l = i(2058),
                o = i(88969),
                c = i(97234),
                d = i(59724),
                u = i(17392),
                m = i(29504),
                _ = i(32596),
                p = i(10079),
                h = i(69630),
                C = i(98427),
                A = i(46422),
                b = i(44230),
                x = i(37670),
                y = i(72288),
                g = i(54320),
                E = i(86790),
                N = i(60266),
                k = i(93317),
                O = i(37770),
                v = i(79418),
                T = i(71104),
                L = i(45654),
                P = i(53080),
                I = i.n(P);
            let f = (0, n.PA)(() => {
                let {
                        settings: { isMobile: e },
                        collection: {
                            kids: { albums: t },
                        },
                    } = (0, y.g)(),
                    { contentScrollRef: i, setContentScrollRef: n } = (0, b.g)(),
                    P = (0, A.W)(),
                    { formatMessage: f } = (0, l.A)(),
                    j = (0, a.useCallback)(
                        (e) => {
                            t.getData({ page: e, pageSize: T.c });
                        },
                        [t],
                    );
                (0, g.X)(t.pagesLoader, j);
                let S = (0, a.useMemo)(() => ({ Footer: () => (0, s.jsx)(N.A, { children: (0, s.jsx)(E.w, { className: I().footer }) }) }), []),
                    R = t.isShimmerVisible ? 20 : t.items.length;
                return ((0, a.useEffect)(
                    () => () => {
                        t.reset();
                    },
                    [t],
                ),
                (0, x.J)(t.isResolved),
                t.isNeededToLoad && (0, a.use)(t.getData({ pageSize: T.c })),
                t.isRejected)
                    ? (0, s.jsx)(_.SomethingWentWrong, {})
                    : t.isEmpty
                      ? (0, s.jsx)(L.i, { title: f({ id: 'kids.albums-and-podcasts' }) })
                      : (0, s.jsx)(d.a, {
                            pageId: c.AppScreen.CollectionKidsAlbums,
                            pageIdForFrom: C.b.COLLECTION_KIDS_ALBUMS,
                            children: (0, s.jsx)(h.h, {
                                scrollElement: i,
                                outerTitle: f({ id: 'kids.albums-and-podcasts' }),
                                children: (0, s.jsxs)('div', {
                                    className: I().root,
                                    'data-test-id': u.Xk.collection.COLLECTION_KIDS_ALBUMS_PAGE,
                                    children: [
                                        (0, s.jsx)(k.Y, {
                                            variant: k.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: P.canBack,
                                            children: (0, s.jsx)(m.DZ, {
                                                variant: 'h2',
                                                weight: 'bold',
                                                size: e ? 'm' : 'xl',
                                                lineClamp: 2,
                                                children: (0, s.jsx)(o.A, { id: 'kids.albums-and-podcasts' }),
                                            }),
                                        }),
                                        (0, s.jsx)(v.$, {
                                            className: (0, r.$)(I().scrollContainer, I().important),
                                            listClassName: I().content,
                                            itemClassName: I().item,
                                            customComponents: S,
                                            itemContentCallback: (e) => {
                                                let i = t.items[e],
                                                    r = f({ id: 'loading-messages.entity-is-loading' }, { entityName: f({ id: 'entity-names.album' }) });
                                                return i
                                                    ? (0, s.jsx)(p.a, { album: i, contentLinesCount: 4, withLikesCount: !0 }, i.id)
                                                    : (0, s.jsx)(O.V, { 'aria-label': r, linesCount: 4 });
                                            },
                                            initialItemCount: R,
                                            totalCount: R,
                                            onGetDataByPage: j,
                                            pageSize: T.c,
                                            totalRequests: t.requestsCount,
                                            handleRef: n,
                                            context: { listAriaLabel: f({ id: 'entity-names.albums' }) },
                                            isMobileLayout: e,
                                            useWindowScroll: e,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
        },
        94144: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r, P: () => n });
            var s = i(53548);
            let r = (0, s.createContext)(null),
                n = () => (0, s.useContext)(r);
        },
        95756: (e, t, i) => {
            'use strict';

            i.d(t, { x: () => V });
            // for PulseSync WebHost: BEGIN imports for native addon context menu items
            var pulseSyncMenuJsx = i(88800),
                pulseSyncMenuItems = i(19934),
                pulseSyncMenuIcons = i(52300);
            // for PulseSync WebHost: END imports for native addon context menu items
            var s = i(88800),
                r = i(84961),
                n = i(53548),
                a = i(2058),
                l = i(97234),
                o = i(17392),
                c = i(18593),
                d = i(29993),
                u = i(19934),
                m = i(18143),
                _ = i(29595),
                p = i(74965),
                h = i(72288),
                C = i(66943),
                A = i(92966),
                b = i(56651),
                x = i(48749),
                y = i(22505),
                g = i(5407),
                E = i(64284),
                N = i(98427),
                k = i(57934),
                O = i(84384),
                v = i(9618),
                T = i(87762),
                L = i(95210),
                P = i(47964),
                I = i(46936),
                f = i(97956),
                j = i(98953),
                S = i(32721),
                R = i(18130),
                D = i(88969),
                M = i(52300);
            let w = (0, r.PA)((e) => {
                let { isFinished: t, onClick: i, className: r } = e,
                    { user: a } = (0, h.g)(),
                    l = (0, n.useMemo)(
                        () => (t ? (0, s.jsx)(D.A, { id: 'interface-actions.mark-all-non-listened' }) : (0, s.jsx)(D.A, { id: 'interface-actions.mark-all-listened' })),
                        [t],
                    );
                return (0, s.jsx)(u.Dr, {
                    className: r,
                    onClick: i,
                    icon: (0, s.jsx)(M.I, { variant: 'check', size: 'xxs' }),
                    disabled: !a.isAuthorized,
                    'data-test-id': o.S7.CONTEXT_MENU_MARK_ALL_LISTENED_BUTTON,
                    children: l,
                });
            });
            var B = i(93091),
                U = i(27817),
                F = i(74064),
                z = i(44988),
                H = i(15425),
                K = i(81066),
                Y = i(18278),
                X = i(41918);
            // for PulseSync: BEGIN download-to-file action in the album context menu
            var pulseSyncMst = i(5120);
            let pulseSyncDownloadAlbumToFile = (0, r.PA)((e) => {
                let { album: t } = e,
                    i = (0, n.useCallback)(async () => {
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
                return (0, s.jsx)(u.Dr, {
                    onClick: i,
                    disabled: !t?.id,
                    icon: (0, s.jsx)(M.I, {
                        variant: 'download',
                        size: 'xxs',
                    }),
                    children: 'Скачать в файл',
                });
            });
            // for PulseSync: END download-to-file action in the album context menu
            let V = (0, r.PA)((e) => {
                // for PulseSync WebHost: BEGIN refresh the album menu when native addon slots change
                let [, pulseSyncSetAlbumMenuRevision] = (0, n.useState)(0);
                (0, n.useEffect)(() => {
                    const onNativeSlotChange = (event) => {
                        if (event.detail === 'albumContextMenu') pulseSyncSetAlbumMenuRevision((revision) => revision + 1);
                    };
                    document.addEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                    pulseSyncSetAlbumMenuRevision((revision) => revision + 1);
                    return () => document.removeEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                }, []);
                // for PulseSync WebHost: END refresh the album menu when native addon slots change
                var t, i;
                let { album: r, children: D, onOpenChange: M, open: V, wrapperClassName: G, variant: q, ...W } = e,
                    { shouldShowBuySubscriptionModal: $, showBuySubscriptionModal: J } = (0, v.q)(),
                    {
                        settings: { isMobile: Q },
                        trailer: Z,
                        user: ee,
                        experiments: et,
                        albumCPA: { isPlusCPAEnabled: ei, isPlusCPAPlayerBarEnabled: es },
                    } = (0, h.g)(),
                    er = (0, A.K)(r),
                    en = (0, b.A)(r),
                    ea = (0, k.F)(),
                    el = ''.concat(E.U.ALBUM, '-').concat(r.id),
                    eo = r.isNonMusic && q === X.z.PAGE,
                    ec = et.checkExperiment(f.z.WebEditorsFeatures, 'on'),
                    ed = !r.isNonMusic && !et.checkExperiment(f.z.WebNextProductWithoutRecommendation, 'on'),
                    { formatMessage: eu } = (0, a.A)(),
                    em = (0, g.P)(),
                    { pageAlbumId: e_ } = (0, T.T)(),
                    ep = ei({ pageAlbumId: e_, albumId: r.id, isNonMusic: r.isNonMusic }),
                    eh = es(r.id, r.isNonMusic),
                    eC = (() => {
                        let { user: e, album: t, fullscreenPlayer: i } = (0, h.g)(),
                            { notify: r } = (0, p.l)(),
                            { formatMessage: l } = (0, a.A)();
                        return (0, n.useCallback)(async () => {
                            var n, a;
                            if (!t) return;
                            let o = i.modal.isOpened ? _.u.FULLSCREEN_ERROR : _.u.ERROR;
                            return e.isAuthorized
                                ? (await t.setListeningFinishedStatus()) !== m.T.OK
                                    ? void r((0, s.jsx)(C.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: o })
                                    : void (null == (a = t.meta) || a.updateFinished(!(null == (n = t.meta) ? void 0 : n.listeningFinished)))
                                : void r((0, s.jsx)(C.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o });
                        }, [l, r, t, e.isAuthorized, i.modal.isOpened]);
                    })(),
                    { shareLink: eA, pathname: eb } = (0, R.b)('/album/:albumId', { params: { albumId: r.id } }),
                    ex = (0, x.A)({ entityVariant: I.D.ALBUM, urlParams: { id: r.id } }),
                    { isPlaying: ey, togglePlay: eg } = (0, P.B)({
                        seeds: null != (i = null == r ? void 0 : r.seeds) ? i : [],
                        pageIdForFrom: N.b.RADIO,
                        blockIdForFrom: el,
                        parentContextId: r.id,
                    }),
                    { utmLink: eE } = (0, O.f)({ blockId: E.U.ALBUM, contextType: c.K.Album, contextId: null == r ? void 0 : r.id }),
                    eN = (0, d.c)(() => {
                        if ($ && ee.isAuthorized) return void J();
                        !em() && (ey || eg());
                    }),
                    ek = (0, d.c)(() => {
                        if ($ && !eh) return void J();
                        em() || (Z.setUtmLink(eE), Z.openAlbumTrailer(r.id), ea(l.DomainObjectType.Album, String(r.id)));
                    });
                (0, L.N)(V);
                let eO = (0, n.useMemo)(() => {
                        if (!Q) return (0, s.jsx)(U.L, { onClick: en, isPinned: r.isPinned });
                    }, [r.isPinned, en, Q]),
                    ev = (0, n.useMemo)(() => {
                        let e = !ep && !ee.isAuthorized;
                        return r.isNonMusic
                            ? (0, s.jsx)(z.U, { onClick: er, isLiked: r.isLiked, albumType: r.type })
                            : (0, s.jsx)(B.T, { onClick: er, isLiked: r.isLiked, disabled: e });
                    }, [r.isLiked, r.type, er, r.isNonMusic, ee.isAuthorized, ep]),
                    eT = (0, n.useMemo)(() => {
                        var e;
                        if (!r.isNonMusic && (null == (e = r.trailer) ? void 0 : e.isAvailable)) return (0, s.jsx)(H.N, { onClick: ek, disabled: !r.isAvailable });
                    }, [r.isAvailable, null == (t = r.trailer) ? void 0 : t.isAvailable, r.isNonMusic, ek]),
                    eL = (0, n.useMemo)(() => {
                        if (ed) return (0, s.jsx)(K.C, { onClick: eN, disabled: !r.isAvailable || (eh && Q), variant: S.I.ALBUM, onOpenMenuChange: M });
                    }, [r.isAvailable, eN, ed, M, eh, Q]),
                    eP = { variant: j.Y.ALBUM, id: r.id, title: r.title, path: eb, albumArtistName: r.artistName, albumArtistId: r.artistId };
                // for PulseSync WebHost: BEGIN album context and native addon menu item rendering
                let pulseSyncInjectAlbumMenuItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('albumContextMenu', items, {
                        eventDetail: {
                            id: String(r.id),
                            url: eb,
                            ...(r.title
                                ? {
                                      title: String(r.title),
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
                                        (activate(), M(!1));
                                    },
                                    children: label,
                                    'data-pulsesync-addon-menu-item': '',
                                },
                                key,
                            );
                        },
                    }) ?? items;
                // for PulseSync WebHost: END album context and native addon menu item rendering
                return (0, s.jsxs)(u.W1, {
                    isMobile: Q,
                    offsetOptions: 10,
                    open: V,
                    onOpenChange: M,
                    ariaLabel: eu({ id: 'interface-actions.context-menu' }),
                    wrapperClassName: G,
                    containerDataTestId: o.Kq.album.ALBUM_CONTEXT_MENU,
                    ...W,
                    // for PulseSync WebHost: BEGIN inject native addon items into the album context menu
                    children: pulseSyncInjectAlbumMenuItems([
                        Q && (0, s.jsx)(Y.C, { getDescriptionTexts: r.getDescriptionTexts, entityId: r.id }),
                        ec && (0, s.jsx)(y.d, { entityVariant: I.D.ARTIST, adminUrl: ex }),
                        eO,
                        ev,
                        eT,
                        eL,
                        // for PulseSync: BEGIN insert the album download-to-file menu action
                        (0, s.jsx)(pulseSyncDownloadAlbumToFile, { album: r }),
                        // for PulseSync: END insert the album download-to-file menu action
                        D,
                        eo && (0, s.jsx)(w, { onClick: eC, isFinished: r.listeningFinished }),
                        (0, s.jsx)(F.H, { shareLink: eA, entityMeta: eP }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the album context menu
                });
            });
        },
        99839: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => s });
            let s = () => ({ year: 'numeric' });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7191, 9904, 3078, 1833, 8194, 1191, 8655, 8767, 2513, 6706, 4771, 2662, 6904, 1898, 2058, 3578, 8628, 4378, 9780, 8283, 9332, 5151, 2837, 4732, 9087,
                3979, 6719, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 6374, 2088, 8979, 6317, 763, 2670, 7358,
            ],
            () => e((e.s = 9020)),
        ),
            (_N_E = e.O()));
    },
]);
