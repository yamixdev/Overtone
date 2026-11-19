(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6360],
    {
        1698: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => r });
            var s = i(88800),
                a = i(37770);
            let r = (e) => {
                let {
                    isActive: t,
                    itemClassName: i,
                    round: r,
                    centered: n,
                    withInfo: l,
                    count: o = 10,
                    shimmerClassName: c,
                    linesCount: d,
                    'aria-label': u,
                    withSubcover: _,
                } = e;
                return Array.from(Array(o).keys()).map((e) =>
                    (0, s.jsx)(
                        a.V,
                        { isActive: t, linesCount: d, className: i, round: r, centered: n, withInfo: l, withSubcover: _, 'aria-label': u, shimmerClassName: c },
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
        4370: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => a });
            var s = i(67174);
            let a = {
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
        6322: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => n });
            var s = i(88800),
                a = i(15077),
                r = i(33719);
            let n = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, s.jsx)(r.k, {
                    closeToast: i,
                    entityVariant: a.c.PLAYLIST,
                    entityUrl: t.url,
                    coverUri: t.coverUri,
                    entityTitle: t.title,
                    isPinned: t.isPinned,
                    radius: 's',
                });
            };
        },
        10079: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => Q });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(97234),
                c = i(91177),
                d = i(70598),
                u = i(46482),
                _ = i(17392),
                m = i(18593),
                p = i(61691),
                A = i(29993),
                h = i(79070),
                C = i(29832),
                x = i(52300),
                k = i(7555),
                T = i(29504),
                L = i(60757),
                v = i(29008),
                I = i(92966),
                S = i(56651),
                y = i(13946),
                b = i(43443),
                E = i(5407),
                N = i(57934),
                g = i(84384),
                O = i(4795),
                R = i(87762),
                P = i(32414),
                j = i(78940),
                f = i(55693),
                M = i(39079),
                U = i(72288),
                B = i(52726),
                D = i(86298),
                w = i(81877),
                z = i(90224),
                K = i(49738),
                Y = i(91292),
                H = i(56862),
                F = i(16704),
                V = i(56446),
                W = i(36207),
                X = i(41918);
            let G = { mainAxis: -26, alignmentAxis: -16 },
                q = { isEnabled: !0, width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' };
            var $ = i(95756),
                J = i(28304),
                Z = i.n(J);
            let Q = (0, r.PA)((e) => {
                let {
                        className: t,
                        children: i,
                        album: r,
                        contentLinesCount: J,
                        withLikesCount: Q,
                        withChart: ee,
                        withAddition: et = !0,
                        withArtistName: ei = !0,
                        releaseDateFormatter: es = P.s,
                    } = e,
                    ea = (0, c.D)(),
                    {
                        user: er,
                        trailer: en,
                        settings: { isMobile: el },
                        albumCPA: { isPlusCPAEnabled: eo },
                        paywall: { modal: ec },
                    } = (0, U.g)(),
                    { from: ed, utmLink: eu } = (0, g.f)({ contextId: r.id, contextType: m.K.Album, utmForPageIds: r.artistIds }),
                    { formatMessage: e_, formatDate: em } = (0, l.A)(),
                    { sendLikeSearchFeedback: ep, sendNavigateSearchFeedback: eA, sendPlaySearchFeedback: eh } = (0, f.z)(),
                    [eC, ex] = (0, n.useState)(!1),
                    [ek, eT] = (0, n.useState)(!1),
                    [eL, ev] = (0, n.useState)(!1),
                    eI = (0, d.S)(),
                    eS = (0, u.g)(),
                    ey = (0, I.K)(r),
                    eb = (0, S.A)(r),
                    eE = (0, j.Z)(r.url),
                    [eN, eg] = (0, n.useState)(!1),
                    eO = (0, N.F)(),
                    [eR, eP] = (0, n.useState)(!1),
                    ej = (0, E.P)(),
                    { pageAlbumId: ef } = (0, R.T)(),
                    eM = eo({ pageAlbumId: ef, albumId: r.id, isNonMusic: r.isNonMusic }),
                    eU = (0, O.N)(),
                    eB = r.isAvailableOnlyForPlus && !r.isUnsafeLegal && !r.isLegalRejected,
                    eD = eB && !el,
                    ew = r.isAvailable || eD || r.isAudiobook,
                    ez = (0, A.c)((e) => {
                        if ((e.stopPropagation(), ej())) return void e.preventDefault();
                        (en.openAlbumTrailer(r.id), eO(o.DomainObjectType.Album, String(r.id)));
                    }),
                    eK = r.type === p._.SINGLE ? e_({ id: 'entity-names.single' }) : void 0,
                    eY = r.releaseDate ? em(r.releaseDate, es()) : void 0,
                    eH = ((e) => {
                        let t = e.filter((e) => !!e).join(' \xb7 ');
                        return 0 === t.length ? null : t;
                    })([null != eY ? eY : r.year, eK]),
                    eF = (0, v.r)(r.type),
                    eV = (0, n.useMemo)(() => {
                        var e;
                        let t = r.isLiked ? e_({ id: 'entity-names.has-your-like' }) : '';
                        return ''
                            .concat(eF, ' ')
                            .concat(r.title, ' ')
                            .concat(null != (e = r.version) ? e : '', ' ')
                            .concat(t);
                    }, [eF, e_, r.title, r.isLiked, r.version]),
                    { isPlaying: eW, togglePlay: eX } = (0, M.D)({
                        playContextParams: { contextData: { type: m.K.Album, meta: { id: r.id }, from: ed, utmLink: eu }, loadContextMeta: !0 },
                    }),
                    eG = (0, L.c)({ album: r, callback: eE }),
                    eq = (0, L.c)({ album: r, callback: eX }),
                    e$ = (0, A.c)((e) => {
                        (eI({ to: o.AppScreen.AlbumScreen }), null == eA || eA(), eG(e));
                    }),
                    eJ = (0, A.c)(() => {
                        if (!ej()) {
                            if (eU) return void ec.open();
                            (ek || eW || (eT(!0), null == eh || eh()), eq(), eW || eS());
                        }
                    }),
                    eZ = (0, A.c)(() => {
                        (eC || r.isLiked || (ex(!0), null == ep || ep()), ey());
                    }),
                    eQ = (0, A.c)((e) => {
                        (ev(e), eg(e));
                    }),
                    e0 = (0, n.useMemo)(() => {
                        var e;
                        return (0, s.jsxs)(T.HL, {
                            className: (0, a.$)(Z().title, { [Z().title_withVersion]: r.version, [Z().title_withChart]: ee }),
                            variant: 'div',
                            type: 'entity',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 2,
                            'aria-hidden': !0,
                            'data-test-id': _.Kq.album.ALBUM_TITLE,
                            children: [
                                (0, s.jsx)(Y.N, {
                                    'aria-label': ''.concat(r.title, ' ').concat(null != (e = r.version) ? e : ''),
                                    className: Z().titleLink,
                                    href: r.url,
                                    tabIndex: -1,
                                    onClick: e$,
                                    'data-test-id': _.Kq.album.ALBUM_TITLE_LINK,
                                    children: r.title,
                                }),
                                r.version &&
                                    (0, s.jsx)(T.HL, {
                                        className: Z().version,
                                        variant: 'span',
                                        'data-test-id': _.Kq.album.ALBUM_VERSION,
                                        children: ' '.concat(r.version),
                                    }),
                            ],
                        });
                    }, [r.title, r.url, r.version, e$, ee]),
                    e8 = (0, n.useMemo)(() => {
                        var e;
                        return (0, s.jsx)(Y.N, {
                            className: Z().srTitleLink,
                            href: r.url,
                            onClick: e$,
                            children: ''.concat(r.title, ' ').concat(null != (e = r.version) ? e : ''),
                        });
                    }, [r.title, r.url, r.version, e$]),
                    e9 = (0, n.useMemo)(() => {
                        var e;
                        if (null == r || null == (e = r.trailer) ? void 0 : e.isAvailable)
                            return (0, s.jsx)(
                                W.n,
                                {
                                    children: (0, s.jsx)(
                                        V.k,
                                        { className: (0, a.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: ez },
                                        r.getKey('TrailerButton'),
                                    ),
                                },
                                r.getKey('AlbumCardTrailerTooltip'),
                            );
                    }, [r, ez]),
                    e4 = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(
                                $.x,
                                {
                                    album: r,
                                    onOpenChange: eQ,
                                    open: eL,
                                    className: (0, a.$)(Z().menuButton, Z().control),
                                    icon: (0, s.jsx)(x.I, { size: 'xxs', variant: 'more' }),
                                    size: 's',
                                    variant: X.z.CARD,
                                    'data-test-id': _.Kq.album.ALBUM_CONTEXT_MENU_BUTTON,
                                },
                                r.getKey('AlbumContextMenu'),
                            ),
                        [r, eQ, eL],
                    ),
                    e7 = (0, n.useCallback)(
                        () =>
                            (0, s.jsx)(
                                F.D,
                                {
                                    className: (0, a.$)(Z().playButton, Z().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                    onClick: eJ,
                                    isPlaying: eW,
                                    disabled: eD,
                                },
                                r.getKey('PlayButton'),
                            ),
                        [eD, r, eW, eJ],
                    ),
                    e2 = (0, n.useMemo)(
                        () =>
                            eD
                                ? (0, s.jsx)(B.S, {
                                      className: Z().buyPlusPopover,
                                      buttonText: e_({ id: 'interface-actions.more-details' }),
                                      isNested: !0,
                                      placement: 'top-start',
                                      isOpened: eR,
                                      onOpenChange: eP,
                                      textVariant: 'album',
                                      albumTextVariant: r.type,
                                      arrowProps: q,
                                      offsetOptions: G,
                                      renderChildren: e7,
                                  })
                                : e7(),
                        [eD, eR, eP, e_, e7, r.type],
                    ),
                    e5 = (0, h.L)(() => {
                        if (eD) return;
                        let e = !eM && !er.isAuthorized;
                        return (0, s.jsx)(
                            K.c,
                            {
                                className: (0, a.$)(Z().likeButton, Z().control),
                                isLiked: r.isLiked,
                                onClick: eZ,
                                variant: 'default',
                                size: 's',
                                iconSize: 'xxs',
                                disabled: e,
                            },
                            r.getKey('LikeButton'),
                        );
                    }),
                    e1 = (0, n.useMemo)(() => {
                        if (!eD)
                            return (0, s.jsx)(
                                H.O,
                                { onClick: eb, isPinned: r.isPinned, className: (0, a.$)(Z().pinButton, Z().control), withRipple: !1, isDisabled: eD },
                                r.getKey('PinButton'),
                            );
                    }, [r, eD, eb]),
                    e6 = (0, n.useMemo)(() => {
                        if (r.isAvailable || eD)
                            return (0, s.jsx)(C.hg, {
                                isVisible: eL || eN || eR,
                                className: Z().controls,
                                playControl: e2,
                                likeControl: e5,
                                menuControl: e4,
                                pinControl: e1,
                                trailerControl: e9,
                            });
                    }, [r, eL, eN, e4, e9, eR, e2, e5, e1, eD]),
                    e3 = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(k.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': _.Kq.album.ALBUM_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: e$,
                                    children: [
                                        (0, s.jsx)(w.B, {
                                            className: Z().image,
                                            src: r.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eV,
                                            withAvatarReplace: !0,
                                            isAvailable: ew,
                                            'aria-hidden': !0,
                                        }),
                                        eB && (0, s.jsx)(x.I, { variant: 'plusBadge', className: Z().plusBadge }),
                                        e6,
                                    ],
                                }),
                            }),
                        [e$, r.coverUri, ew, eV, e6, eB],
                    );
                return (0, s.jsxs)(C.MN, {
                    ref: ea,
                    className: (0, a.$)(Z().root, { [Z().root_withChart]: ee }, t),
                    'aria-label': eV,
                    explicitMarkComponent:
                        r.explicitDisclaimer &&
                        (0, s.jsx)(
                            z.N,
                            { className: Z().explicitMark, getDescriptionTexts: r.getDescriptionTexts, variant: r.explicitDisclaimer },
                            r.getKey('AlbumCardExplicitMarkIcon'),
                        ),
                    title: e0,
                    srTitle: e8,
                    contentLinesCount: J,
                    view: e3,
                    description:
                        ei &&
                        (0, s.jsx)(
                            y.i,
                            { className: Z().artists, artists: r.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                            r.getKey('description'),
                        ),
                    chart:
                        ee &&
                        r.chart &&
                        (0, s.jsx)(b.t, { withIcon: !0, className: Z().chart, position: r.chart.position, progress: r.chart.progress }, r.getKey('chart')),
                    'data-test-id': _.Kq.album.ALBUM_ITEM,
                    children: [
                        et &&
                            eH &&
                            (0, s.jsx)(T.HL, { className: Z().addition, variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: eH }),
                        Q &&
                            !!r.actualLikesCount &&
                            (0, s.jsx)(D.x, {
                                className: Z().likeTextButton,
                                ariaLabel: e_({ id: 'entity-names.likes-counter' }, { counter: r.actualLikesCount }),
                                likesCount: r.actualLikesCount,
                                isLiked: r.isLiked,
                                handleLikeClick: ey,
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
        17657: (e) => {
            e.exports = {
                root: 'PlaylistCard_root__i3pR4',
                srTitleLink: 'PlaylistCard_srTitleLink__Gg2Dy',
                controls: 'PlaylistCard_controls__Ej8Rz',
                cover: 'PlaylistCard_cover__tpK5L',
                coverBlock: 'PlaylistCard_coverBlock__1slsN',
                image: 'PlaylistCard_image__Li6oy',
                titleLink: 'PlaylistCard_titleLink__H8qEc',
                artists: 'PlaylistCard_artists__HtVIF',
                artistLink: 'PlaylistCard_artistLink__jx3KB',
                playButton: 'PlaylistCard_playButton__eaduk',
                likeButton: 'PlaylistCard_likeButton__RYXJz',
                menuButton: 'PlaylistCard_menuButton__jFcWr',
                pinButton: 'PlaylistCard_pinButton__jhWnL',
                trailerButton: 'PlaylistCard_trailerButton__Qjg_U',
                control: 'PlaylistCard_control__73YUq',
            };
        },
        21256: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => K });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(97234),
                c = i(91177),
                d = i(70598),
                u = i(46482),
                _ = i(17392),
                m = i(18593),
                p = i(29993),
                A = i(79070),
                h = i(29832),
                C = i(52300),
                x = i(7555),
                k = i(29504),
                T = i(91959),
                L = i(64207),
                v = i(77455),
                I = i(5407),
                S = i(57934),
                y = i(84384),
                b = i(4795),
                E = i(78940),
                N = i(55693),
                g = i(39079),
                O = i(72288),
                R = i(81877),
                P = i(49738),
                j = i(91292),
                f = i(56862),
                M = i(16704),
                U = i(56446),
                B = i(36207),
                D = i(43161),
                w = i(93434),
                z = i.n(w);
            let K = (0, r.PA)((e) => {
                let { artist: t, className: i, children: r, contentLinesCount: w, topTitleElement: K, bottomTitleElement: Y } = e,
                    H = (0, c.D)(),
                    {
                        trailer: F,
                        user: V,
                        paywall: { modal: W },
                    } = (0, O.g)(),
                    { from: X, utmLink: G } = (0, y.f)({ contextId: t.id, contextType: m.K.Artist }),
                    { formatMessage: q } = (0, l.A)(),
                    [$, J] = (0, n.useState)(!1),
                    [Z, Q] = (0, n.useState)(!1),
                    [ee, et] = (0, n.useState)(!1),
                    { sendLikeSearchFeedback: ei, sendNavigateSearchFeedback: es, sendPlaySearchFeedback: ea } = (0, N.z)(),
                    er = (0, d.S)(),
                    en = (0, u.g)(),
                    el = (0, L.K)(t),
                    eo = (0, v.A)(t),
                    { id: ec, name: ed, coverUri: eu, isLiked: e_ } = t,
                    em = (0, E.Z)(t.url),
                    [ep, eA] = (0, n.useState)(!1),
                    eh = (0, S.F)(),
                    eC = (0, I.P)(),
                    ex = (0, p.c)((e) => {
                        if ((e.stopPropagation(), eC())) return void e.preventDefault();
                        (F.openArtistTrailer(t.id), eh(o.DomainObjectType.Artist, t.id));
                    }),
                    ek = (0, n.useMemo)(() => {
                        let e = q({ id: 'entity-names.artist-name' }, { artistName: ed }),
                            t = e_ ? q({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [ed, e_, q]),
                    { isPlaying: eT, togglePlay: eL } = (0, g.D)({
                        playContextParams: { contextData: { type: m.K.Artist, meta: { id: Number(ec) }, from: X, utmLink: G }, loadContextMeta: !0 },
                    }),
                    ev = (0, T.S)({ artist: t, callback: em }),
                    eI = (0, T.S)({ artist: t, callback: eL }),
                    eS = (0, p.c)((e) => {
                        (null == es || es(), er({ to: o.AppScreen.ArtistScreen }), ev(e));
                    }),
                    ey = (0, b.N)(),
                    eb = (0, p.c)(() => {
                        if (!eC()) {
                            if (ey) return void W.open();
                            ($ || eT || (J(!0), null == ea || ea()), eI(), eT || en());
                        }
                    }),
                    eE = (0, p.c)(() => {
                        (Z || e_ || (Q(!0), null == ei || ei()), el());
                    }),
                    eN = (0, p.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eg = (0, p.c)((e) => {
                        (et(e), eA(e));
                    }),
                    eO = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(
                                D.g,
                                {
                                    artist: t,
                                    onOpenChange: eg,
                                    open: ee,
                                    onClick: eN,
                                    className: (0, a.$)(z().menuButton, z().control),
                                    size: 's',
                                    icon: (0, s.jsx)(C.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': _.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eN, eg, ee],
                    ),
                    eR = (0, n.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, s.jsx)(
                                B.n,
                                {
                                    children: (0, s.jsx)(U.k, {
                                        className: (0, a.$)(z().trailerButton, z().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: ex,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, ex]),
                    eP = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(
                                f.O,
                                { onClick: eo, isPinned: t.isPinned, className: (0, a.$)(z().pinButton, z().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, eo],
                    ),
                    ej = (0, A.L)(() => {
                        if (t.isAvailable)
                            return (0, s.jsx)(
                                h.hg,
                                {
                                    isVisible: ee || ep,
                                    className: z().controls,
                                    radius: 'round',
                                    playControl: (0, s.jsx)(
                                        M.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, a.$)(z().playButton, z().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eb,
                                            isPlaying: eT,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, s.jsx)(
                                        P.c,
                                        {
                                            className: (0, a.$)(z().likeButton, z().control),
                                            isLiked: e_,
                                            onClick: eE,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !V.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eO,
                                    pinControl: eP,
                                    trailerControl: eR,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    ef = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(x.t, {
                                className: z().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': _.Kq.artist.ARTIST_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: z().coverBlock,
                                    onClick: eS,
                                    children: [
                                        (0, s.jsx)(R.B, {
                                            className: z().image,
                                            src: eu,
                                            size: 200,
                                            fit: 'cover',
                                            alt: ek,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        ej,
                                    ],
                                }),
                            }),
                        [eS, eu, ek, t.isAvailable, ej],
                    );
                return (0, s.jsx)(h.MN, {
                    ref: H,
                    className: (0, a.$)(z().root, i),
                    textPosition: 'center',
                    'aria-label': ek,
                    title: (0, s.jsxs)(s.Fragment, {
                        children: [
                            K,
                            (0, s.jsx)(k.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, s.jsx)(j.N, {
                                    className: z().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': ek,
                                    onClick: eS,
                                    'data-test-id': _.Kq.artist.ARTIST_TITLE,
                                    children: ed,
                                }),
                            }),
                            Y,
                        ],
                    }),
                    srTitle: (0, s.jsx)(j.N, { className: z().srTitleLink, href: t.url, onClick: eS, children: ek }),
                    contentLinesCount: w,
                    view: ef,
                    'data-test-id': _.Kq.artist.ARTIST_ITEM,
                    children: r,
                });
            });
        },
        24460: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => _ });
            var s = i(88800),
                a = i(96706),
                r = i(53548),
                n = i(2058),
                l = i(29595),
                o = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(6322);
            let _ = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: _ } = (0, n.A)(),
                    [m, p] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, s.jsx)(d.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (m) return;
                    let r = { ...(0, a.HO)(e), url: e.url, isPinned: !e.isPinned };
                    p(!0);
                    let n = await e.togglePin();
                    (p(!1),
                        n
                            ? i((0, s.jsx)(u.l, { playlist: r }), { containerId: l.u.INFO })
                            : i((0, s.jsx)(d.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [t.isAuthorized, m, e, i, _]);
            };
        },
        25883: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => l });
            var s = i(88800),
                a = i(84961),
                r = i(33719),
                n = i(5048);
            let l = (0, a.PA)((e) => {
                let { album: t, closeToast: i } = e,
                    a = (0, n.b)(t.type);
                return (0, s.jsx)(r.k, {
                    closeToast: i,
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
        29008: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => n, r: () => l });
            var s = i(53548),
                a = i(2058),
                r = i(61691),
                n = (function (e) {
                    return ((e.PIN = 'pin'), e);
                })({});
            let l = (e, t) => {
                let { formatMessage: i } = (0, a.A)();
                return (0, s.useMemo)(() => {
                    switch (e) {
                        case r._.SINGLE:
                            return i({ id: 'entity-names.single' });
                        case r._.PODCAST:
                            return i({ id: 'entity-names.podcast' });
                        case r._.AUDIOBOOK:
                            if ('pin' === t) return i({ id: 'entity-names.book' });
                            return i({ id: 'entity-names.audio' });
                        case r._.FAIRY_TALE:
                            return i({ id: 'entity-names.fairy-tale' });
                        default:
                            return i({ id: 'entity-names.album' });
                    }
                }, [e, i, t]);
            };
        },
        30832: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => n });
            var s = i(88800),
                a = i(15077),
                r = i(42729);
            let n = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, s.jsx)(r.O, {
                    entityVariant: a.c.PLAYLIST,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    closeToast: i,
                    coverUri: t.coverUri,
                });
            };
        },
        32094: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => p });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                n = i(53548),
                l = i(17392),
                o = i(90688),
                c = i(7555),
                d = i(29504),
                u = i(91292),
                _ = i(97754),
                m = i.n(_);
            let p = (0, r.PA)((e) => {
                var t;
                let { className: i, title: r, weblink: _, linkClassName: p, covers: A, coverSize: h = 100, captionVariant: C = 'div' } = e,
                    x = (0, n.useMemo)(() => {
                        var e;
                        if (null == A || null == (e = A[0]) ? void 0 : e.color) return { '--subcover-background-color': A[0].color };
                    }, [A]);
                return (0, s.jsx)(u.N, {
                    href: _,
                    className: (0, a.$)(m().link, p),
                    'data-test-id': l.OA.mix.MIX_CARD,
                    children: (0, s.jsxs)(c.t, {
                        radius: 'm',
                        style: x,
                        className: (0, a.$)(m().root, i),
                        children: [
                            (0, s.jsxs)('div', {
                                className: m().plate,
                                'data-test-id': l.OA.mix.MIX_CARD_PLATE,
                                children: [
                                    (0, s.jsx)('div', { className: m().subcover, 'data-test-id': l.OA.mix.MIX_CARD_SUBCOVER }),
                                    (0, s.jsx)(o._V, {
                                        src: null == A || null == (t = A[0]) ? void 0 : t.uri,
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: m().cover,
                                        size: h,
                                        'data-test-id': l.OA.mix.MIX_CARD_COVER,
                                    }),
                                ],
                            }),
                            (0, s.jsx)('div', {
                                className: m().header,
                                children: (0, s.jsx)(d.HL, {
                                    variant: C,
                                    size: 'xs',
                                    weight: 'bold',
                                    className: m().title,
                                    lineClamp: 2,
                                    'data-test-id': l.OA.mix.MIX_CARD_HEADER,
                                    children: r,
                                }),
                            }),
                        ],
                    }),
                });
            });
        },
        32414: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => s });
            let s = () => ({ year: 'numeric', month: 'long', day: 'numeric' });
        },
        41911: (e, t, i) => {
            'use strict';
// for PulseSync: BEGIN import the download icon for playlist menu actions

            var pulseSyncPlaylistDownloadIcons = i(52300);
// for PulseSync: END import the download icon for playlist menu actions
            i.d(t, { B: () => Q });
            // for PulseSync WebHost: BEGIN imports for native addon context menu items
            var pulseSyncMenuJsx = i(88800),
                pulseSyncMenuItems = i(19934),
                pulseSyncMenuIcons = i(52300);
            // for PulseSync WebHost: END imports for native addon context menu items
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(97234),
                c = i(91177),
                d = i(70598),
                u = i(46482),
                _ = i(17392),
                m = i(18593),
                p = i(29993),
                A = i(79070),
                h = i(29832),
                C = i(52300),
                x = i(7555),
                k = i(29504),
                T = i(13946),
                L = i(85902),
                v = i(24460),
                I = i(5407),
                S = i(57934),
                y = i(84384),
                b = i(4795),
                E = i(78940),
                N = i(55693),
                g = i(39079),
                O = i(72288),
                R = i(86298),
                P = i(81877),
                j = i(49738),
                f = i(91292),
                M = i(56862),
                U = i(16704),
                B = i(56446),
                D = i(36207),
                w = i(47513),
                z = i(19934),
                K = i(48749),
                Y = i(22505),
                H = i(9618),
                F = i(95210),
                V = i(46936),
                W = i(97956),
                X = i(93091),
                G = i(27817),
                q = i(15425);
            let $ = (0, r.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: a, open: r, ...n } = e,
                    { shouldShowBuySubscriptionModal: c, showBuySubscriptionModal: d } = (0, H.q)(),
                    {
                        experiments: u,
                        settings: { isMobile: m },
                        trailer: A,
                        user: h,
                    } = (0, O.g)(),
                    C = (0, L.K)(i),
                    x = (0, v.A)(i),
                    k = (0, S.F)(),
                    { formatMessage: T } = (0, l.A)(),
                    y = (0, I.P)(),
                    b = u.checkExperiment(W.z.WebEditorsFeatures, 'on'),
                    E = (0, K.A)({ entityVariant: V.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, F.N)(r);
                let N = (0, p.c)(() => {
                    if (c) return void d();
                    y() || (A.openPlaylistTrailer(i.id), k(o.DomainObjectType.Playlist, i.id));
                });
                // for PulseSync WebHost: BEGIN playlist context and native addon menu item rendering
                let pulseSyncInjectPlaylistMenuItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('playlistContextMenu', items, {
                        eventDetail: {
                            id: String(i.kind ?? i.id),
                            uuid: String(i.uuid ?? ''),
                            url: String(i.url ?? ''),
                            ...(i.title
                                ? {
                                      title: String(i.title),
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
                                        (activate(), a?.(!1));
                                    },
                                    children: label,
                                    'data-pulsesync-addon-menu-item': '',
                                },
                                key,
                            );
                        },
                    }) ?? items;
                // for PulseSync WebHost: END playlist context and native addon menu item rendering
                return (0, s.jsxs)(z.W1, {
                    title: i.title,
                    onOpenChange: a,
                    open: r,
                    offsetOptions: 10,
                    isMobile: m,
                    ariaLabel: T({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: _.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...n,
                    // for PulseSync WebHost: BEGIN inject native addon items into the playlist context menu
                    children: pulseSyncInjectPlaylistMenuItems([
                        b && (0, s.jsx)(Y.d, { entityVariant: V.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : E }),
                        !m && (0, s.jsx)(G.L, { onClick: x, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, s.jsx)(X.T, { onClick: C, isLiked: i.isLiked, disabled: !h.isAuthorized }),
                        // for PulseSync: BEGIN download-to-file action in the playlist context menu
                        (i.tracksCount ?? 1) > 0 &&
                            (0, s.jsx)(z.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, s.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        // for PulseSync: END download-to-file action in the playlist context menu
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, s.jsx)(q.N, { onClick: N, disabled: !i.isAvailable }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the playlist context menu
                });
            });
            var J = i(17657),
                Z = i.n(J);
            let Q = (0, r.PA)((e) => {
                let { className: t, playlist: i, children: r, contentLinesCount: z, customDescription: K, onCoverMouseDown: Y } = e,
                    H = (0, c.D)(),
                    {
                        trailer: F,
                        user: V,
                        paywall: { modal: W },
                    } = (0, O.g)(),
                    { from: X, utmLink: G } = (0, y.f)({ contextId: i.uuid, contextType: m.K.Playlist }),
                    { formatMessage: q } = (0, l.A)(),
                    { sendLikeSearchFeedback: J, sendNavigateSearchFeedback: Q, sendPlaySearchFeedback: ee } = (0, N.z)(),
                    [et, ei] = (0, n.useState)(!1),
                    [es, ea] = (0, n.useState)(!1),
                    [er, en] = (0, n.useState)(!1),
                    el = (0, w.r)(i),
                    eo = (0, L.K)(i),
                    ec = (0, v.A)(i),
                    ed = (0, d.S)(),
                    eu = (0, u.g)(),
                    e_ = (0, E.Z)(i.url),
                    em = (0, S.F)(),
                    ep = (0, I.P)(),
                    eA = (0, p.c)((e) => {
                        if ((e.stopPropagation(), ep())) return void e.preventDefault();
                        (F.setUtmLink(G), F.openPlaylistTrailer(i.id), em(o.DomainObjectType.Playlist, i.id));
                    }),
                    [eh, eC] = (0, n.useState)(!1),
                    { isPlaying: ex, togglePlay: ek } = (0, g.D)({
                        playContextParams: { contextData: { type: m.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: X, utmLink: G }, loadContextMeta: !0 },
                    }),
                    eT = (0, p.c)(() => {
                        (ed({ to: o.AppScreen.PlaylistScreen }), null == Q || Q());
                    }),
                    eL = (0, p.c)((e) => {
                        (eT(), e_(e));
                    }),
                    ev = (0, b.N)(),
                    eI = (0, p.c)(() => {
                        if (!ep()) {
                            if (ev) return void W.open();
                            (et || ex || (ei(!0), null == ee || ee()), ek(), ex || eu());
                        }
                    }),
                    eS = (0, p.c)(() => {
                        (es || i.isLiked || (ea(!0), null == J || J()), eo());
                    }),
                    ey = (0, p.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eb = (0, p.c)((e) => {
                        (en(e), eC(e));
                    }),
                    eE = (0, n.useMemo)(() => {
                        var e;
                        return K
                            ? (0, s.jsx)(k.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: K }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, s.jsx)(
                                    T.i,
                                    { className: Z().artists, artists: i.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [K, i]),
                    eN = (0, A.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, s.jsx)(
                                j.c,
                                {
                                    className: (0, a.$)(Z().likeButton, Z().control),
                                    isLiked: i.isLiked,
                                    onClick: eS,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !V.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eg = (0, n.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, s.jsx)(
                                D.n,
                                {
                                    children: (0, s.jsx)(
                                        B.k,
                                        { className: (0, a.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eA },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [eA, i]),
                    eO = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(
                                M.O,
                                { onClick: ec, isPinned: i.isPinned, className: (0, a.$)(Z().pinButton, Z().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ec, i],
                    ),
                    eR = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(x.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': _.Kq.playlist.PLAYLIST_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: eL,
                                    onMouseDown: Y,
                                    children: [
                                        (0, s.jsx)(P.B, {
                                            className: Z().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: el,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, s.jsx)(h.hg, {
                                            isVisible: er || eh,
                                            className: Z().controls,
                                            playControl: (0, s.jsx)(
                                                U.D,
                                                {
                                                    className: (0, a.$)(Z().playButton, Z().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: eI,
                                                    isPlaying: ex,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eN,
                                            menuControl: (0, s.jsx)(
                                                $,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eb,
                                                    open: er,
                                                    onClick: ey,
                                                    className: (0, a.$)(Z().menuButton, Z().control),
                                                    icon: (0, s.jsx)(C.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': _.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eO,
                                            trailerControl: eg,
                                        }),
                                    ],
                                }),
                            }),
                        [eL, Y, i, el, er, eh, eI, ex, eN, eb, ey, eO, eg],
                    ),
                    eP = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, s.jsxs)(h.MN, {
                    ref: H,
                    'aria-label': el,
                    className: (0, a.$)(Z().root, t),
                    title: (0, s.jsx)(k.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': _.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, s.jsx)(f.N, { className: Z().titleLink, href: i.url, tabIndex: -1, onClick: eT, children: i.title }),
                    }),
                    srTitle: (0, s.jsx)(f.N, { className: Z().srTitleLink, href: i.url, onClick: eT, children: i.title }),
                    contentLinesCount: z,
                    view: eR,
                    description: eE,
                    'data-test-id': _.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eP &&
                            (0, s.jsx)(R.x, {
                                ariaLabel: q({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: eo,
                            }),
                        r,
                    ],
                });
            });
        },
        41918: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => s });
            var s = (function (e) {
                return ((e.PAGE = 'PAGE'), (e.CARD = 'CARD'), e);
            })({});
        },
        42078: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { _: () => s }),
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
                })(s || (s = {})));
        },
        43161: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => J });
            var s = i(88800),
                a = i(84961),
                r = i(2058),
                n = i(97234),
                l = i(17392),
                o = i(18593),
                c = i(29993),
                d = i(52300),
                u = i(19934),
                _ = i(96706),
                m = i(53548),
                p = i(79390),
                A = i(29595),
                h = i(74965),
                C = i(72288),
                x = i(66943),
                k = i(7555),
                T = i(73170),
                L = i(29504),
                v = i(59304),
                I = i(81877),
                S = i(85074),
                y = i.n(S);
            let b = (e) => {
                let { coverUri: t, title: i, isDisliked: a, closeToast: n } = e,
                    { formatMessage: l } = (0, r.A)(),
                    o = l(a ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, s.jsx)(v.$, {
                    closeToast: n,
                    message: (0, s.jsxs)('div', {
                        className: y().message,
                        children: [
                            (0, s.jsx)(T.q, { children: (0, s.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, s.jsx)(k.t, {
                                className: y().cover,
                                radius: 'round',
                                children: (0, s.jsx)(I.B, { className: y().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, s.jsx)(L.HL, { className: y().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var E = i(64207),
                N = i(77455),
                g = i(48749),
                O = i(22505),
                R = i(5407),
                P = i(64284),
                j = i(98427),
                f = i(57934),
                M = i(84384),
                U = i(9618),
                B = i(95210),
                D = i(47964),
                w = i(46936),
                z = i(97956),
                K = i(98953),
                Y = i(32721),
                H = i(18130),
                F = i(56117),
                V = i(93091),
                W = i(27817),
                X = i(74064),
                G = i(15425),
                q = i(81066),
                $ = i(64546);
            let J = (0, a.PA)((e) => {
                var t, i, a;
                let { artist: k, onOpenChange: T, open: L, ...v } = e,
                    { shouldShowBuySubscriptionModal: I, showBuySubscriptionModal: S } = (0, U.q)(),
                    {
                        settings: { isMobile: y },
                        modals: { artistAboutModal: J },
                        trailer: Z,
                        user: Q,
                        experiments: ee,
                    } = (0, C.g)(),
                    et = (0, N.A)(k),
                    ei = (0, E.K)(k),
                    es = ((e) => {
                        let { user: t } = (0, C.g)(),
                            { notify: i } = (0, h.l)(),
                            [a, n] = (0, m.useState)(!1),
                            { formatMessage: l } = (0, r.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, s.jsx)(x.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: A.u.ERROR });
                            if (a) return;
                            let r = { ...(0, _.HO)(e), isDisliked: !e.isDisliked };
                            n(!0);
                            let o = await e.toggleDislike();
                            (n(!1),
                                o === p.f.OK
                                    ? i((0, s.jsx)(b, { coverUri: r.coverUri, title: r.name, isDisliked: r.isDisliked }), { containerId: A.u.INFO })
                                    : i((0, s.jsx)(x.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: A.u.ERROR }));
                        });
                    })(k),
                    ea = (0, f.F)(),
                    er = ''.concat(P.U.ARTIST, '-').concat(null == k ? void 0 : k.id),
                    { formatMessage: en } = (0, r.A)(),
                    { utmLink: el } = (0, M.f)({ blockId: P.U.ARTIST, contextType: o.K.Artist, contextId: null == k ? void 0 : k.id }),
                    { shareLink: eo, pathname: ec } = (0, H.b)('/artist/:artistId', { params: { artistId: null != (i = null == k ? void 0 : k.id) ? i : '' } }),
                    ed = (0, g.A)({ entityVariant: w.D.ARTIST, urlParams: { id: null == k ? void 0 : k.id } }),
                    { isPlaying: eu, togglePlay: e_ } = (0, D.B)({
                        seeds: null != (a = null == k ? void 0 : k.seeds) ? a : [],
                        pageIdForFrom: j.b.RADIO,
                        blockIdForFrom: er,
                        parentContextId: null == k ? void 0 : k.id,
                    }),
                    em = (0, R.P)(),
                    ep = en((null == k ? void 0 : k.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    eA = (0, c.c)(() => {
                        if (I && Q.isAuthorized) return void S();
                        eu || e_();
                    }),
                    eh = (0, c.c)(() => {
                        if (!em()) {
                            if (I) return void S();
                            (null == k ? void 0 : k.id) && (Z.setUtmLink(el), Z.openArtistTrailer(k.id), ea(n.DomainObjectType.Artist, k.id));
                        }
                    }),
                    eC = (0, c.c)(() => {
                        J.open(null == k ? void 0 : k.id);
                    });
                (0, B.N)(L);
                let ex = { variant: K.Y.ARTIST, id: null == k ? void 0 : k.id, title: null == k ? void 0 : k.name, path: ec },
                    ek = ee.checkExperiment(z.z.WebEditorsFeatures, 'on'),
                    eT = null == k || null == (t = k.trailer) ? void 0 : t.isAvailable,
                    eL = ee.checkExperiment(z.z.WebNextArtistInfo, 'on'),
                    ev = !ee.checkExperiment(z.z.WebNextProductWithoutRecommendation, 'on');
                return (0, s.jsxs)(u.W1, {
                    isMobile: y,
                    offsetOptions: 10,
                    open: L,
                    onOpenChange: T,
                    ariaLabel: en({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: l.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...v,
                    children: [
                        ek && (0, s.jsx)($.WithOffline, { fallback: (0, s.jsx)(O.d, { entityVariant: w.D.ARTIST, adminUrl: ed }) }),
                        !y && (0, s.jsx)($.WithOffline, { fallback: (0, s.jsx)(W.L, { onClick: et, isPinned: null == k ? void 0 : k.isPinned }) }),
                        (0, s.jsx)($.WithOffline, {
                            fallback: (0, s.jsx)(V.T, {
                                onClick: ei,
                                isLiked: null == k ? void 0 : k.isLiked,
                                disabled: !Q.isAuthorized || !(null == k ? void 0 : k.isAvailable),
                            }),
                        }),
                        eT && (0, s.jsx)($.WithOffline, { fallback: (0, s.jsx)(G.N, { onClick: eh }) }),
                        ev &&
                            (0, s.jsx)($.WithOffline, {
                                fallback: (0, s.jsx)(q.C, { onClick: eA, disabled: !(null == k ? void 0 : k.isAvailable), variant: Y.I.ARTIST, onOpenMenuChange: T }),
                            }),
                        (0, s.jsx)(X.H, { disabled: !k, shareLink: eo, entityMeta: ex }),
                        eL &&
                            (0, s.jsx)($.WithOffline, {
                                fallback: (0, s.jsx)(u.Dr, {
                                    onClick: eC,
                                    icon: (0, s.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': l.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: ep,
                                }),
                            }),
                        (0, s.jsx)($.WithOffline, {
                            fallback: (0, s.jsx)(F.D, { onClick: es, isDisliked: null == k ? void 0 : k.isDisliked, disabled: !(null == k ? void 0 : k.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        43443: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => p });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(17392),
                c = i(13607),
                d = i(52300),
                u = i(29504),
                _ = i(3099),
                m = i.n(_);
            let p = (0, r.PA)((e) => {
                let {
                        progress: t,
                        withIcon: i,
                        withCrownIcon: r,
                        position: _,
                        weight: p = 'normal',
                        isDisliked: A,
                        isDisabled: h,
                        className: C,
                        positionClassName: x,
                    } = e,
                    { formatMessage: k } = (0, l.A)(),
                    T = t || i,
                    L = (0, n.useMemo)(() => {
                        if (r) return 'crown';
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
                    }, [t, r]),
                    v = (0, n.useMemo)(() => {
                        switch (t) {
                            case c._.UP:
                                return k({ id: 'entity-names.chart-up' });
                            case c._.DOWN:
                                return k({ id: 'entity-names.chart-down' });
                            case c._.NEW:
                                return k({ id: 'entity-names.chart-new' });
                            default:
                                return k({ id: 'entity-names.chart-same' });
                        }
                    }, [k, t]),
                    I = r ? 'crown' : t;
                return (0, s.jsxs)('div', {
                    className: (0, a.$)(m().root, C),
                    'data-test-id': o.OA.chart.CHART_PROGRESS,
                    children: [
                        (0, s.jsx)(u.HL, {
                            variant: 'div',
                            weight: p,
                            type: 'entity',
                            size: 'm',
                            className: (0, a.$)(m().position, x, { [m().position_disliked]: A, [m().position_disabled]: h }),
                            'data-test-id': o.OA.chart.CHART_PROGRESS_POSITION,
                            children: _,
                        }),
                        T &&
                            (0, s.jsx)(d.I, {
                                variant: L,
                                size: 'xxs',
                                'aria-label': v,
                                className: (0, a.$)(m().progress, m()['progress_'.concat(I)], { [m().progress_disliked]: A, [m().progress_disabled]: h }),
                                'data-test-id': o.OA.chart.CHART_PROGRESS_ICON,
                            }),
                    ],
                });
            });
        },
        46384: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => d });
            var s = i(88800),
                a = i(53548),
                r = i(24709),
                n = i(8383),
                l = i(66368),
                o = i(88966);
            let c = (e, t, i) => {
                    let s = e.createBlockViewSession(),
                        a = !1;
                    return { claimLoadedSession: () => (a ? null : ((a = !0), s)), client: e, identity: t, loadedSession: s, screenSession: i };
                },
                d = (0, r.B)(
                    { kind: 'provider', requiredProps: ['blockId', 'blockType', 'blockPosX', 'blockPosY', 'objectsCount'], scope: 'block' },
                    ({ blockId: e, blockIdForFrom: t, blockPosX: i, blockPosY: r, blockType: d, children: u, objectsCount: _ }) => {
                        let m = (0, o.N)(),
                            p = (0, a.useContext)(n.k)?.session,
                            A = [e, d, i, r].join(':'),
                            [h, C] = (0, a.useState)(() => c(m, A, p));
                        (h.client !== m || h.identity !== A || h.screenSession !== p) && C(c(m, A, p));
                        let x = (0, a.useMemo)(
                            () => ({
                                claimLoadedSession: h.claimLoadedSession,
                                loadedSession: h.loadedSession,
                                scope: { blockId: e, blockIdForFrom: t, blockPosX: i, blockPosY: r, blockType: d, objectsCount: _ },
                            }),
                            [e, t, i, r, d, _, h.claimLoadedSession, h.loadedSession],
                        );
                        return (0, s.jsx)(l.p, { value: x, children: u });
                    },
                );
        },
        47513: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => r });
            var s = i(53548),
                a = i(2058);
            let r = (e) => {
                let { formatMessage: t } = (0, a.A)();
                return (0, s.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let s = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(s, ' ').concat(i);
                }, [t, e]);
            };
        },
        47902: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => D }));
            var s = i(88800),
                a = i(58390),
                r = i(84961),
                n = i(53548),
                l = i(97234),
                o = i(59724),
                c = i(46384),
                d = i(65724),
                u = i(2058),
                _ = i(17392),
                m = i(82212),
                p = i(42078),
                A = i(66719),
                h = i(29504),
                C = i(10079),
                x = i(21256),
                k = i(69630),
                T = i(41911),
                L = i(32094),
                v = i(46422),
                I = i(44230),
                S = i(72288),
                y = i(86790),
                b = i(60266),
                E = i(93317),
                N = i(1698),
                g = i(62403),
                O = i.n(g);
            let R = (0, r.PA)((e) => {
                let { blockId: t, blockType: i } = e,
                    { landingBlockEntities: a } = (0, S.g)(),
                    { formatMessage: r } = (0, u.A)(),
                    { contentScrollRef: l, setContentScrollRef: o } = (0, I.g)(),
                    c = (0, v.W)(),
                    g = (0, n.useMemo)(() => {
                        if (a.isLoading) {
                            let e = r({ id: 'loading-messages.content-is-loading' }),
                                t = [m.t.COLLECTION_ARTISTS, m.t.COLLECTION_ARTISTS_AND_TOP, m.t.PERSONAL_ARTISTS, m.t.NEW_STARS_ARTISTS, m.t.EDITORIAL_ARTISTS].includes(
                                    i,
                                ),
                                a = i === m.t.MIXES_GRID;
                            return (0, s.jsx)(N.e, {
                                itemClassName: (0, d.$)({ [O().shimmerWithSubcover]: a }),
                                withSubcover: a,
                                isActive: !0,
                                'aria-label': e,
                                centered: t || a,
                                round: t,
                            });
                        }
                        return a.items.map((e) => {
                            switch (e.type) {
                                case p._.MIX_CARD_ITEM:
                                    return (0, s.jsx)(L.V, { title: e.data.title, weblink: e.data.weblink, covers: e.data.covers }, e.data.id);
                                case p._.ALBUM_ITEM:
                                    return (0, s.jsx)(C.a, { album: e.data, contentLinesCount: 3 }, e.data.id);
                                case p._.CHART_ALBUM_ITEM:
                                case p._.NON_MUSIC_ALBUM_ITEM:
                                    return (0, s.jsx)(C.a, { withChart: !0, withLikesCount: !0, album: e.data, contentLinesCount: 3 }, e.data.id);
                                case p._.ARTIST_ITEM:
                                    return (0, s.jsx)(x.a, { artist: e.data, contentLinesCount: 3 }, e.data.id);
                                case p._.PLAYLIST_ITEM:
                                    return (0, s.jsx)(T.B, { playlist: e.data, contentLinesCount: 3 }, e.data.key);
                                case p._.PERSONAL_PLAYLIST_ITEM:
                                    return (0, s.jsx)(
                                        T.B,
                                        { playlist: e.data.playlist, customDescription: e.data.description, contentLinesCount: 4 },
                                        e.data.playlist.key,
                                    );
                                case p._.LIKED_PLAYLIST_ITEM:
                                    return (0, s.jsx)(T.B, { playlist: e.data, contentLinesCount: 3 }, e.data.key);
                            }
                        });
                    }, [i, a.isLoading, a.items, r]);
                return (
                    t && a.isNeededToLoad && (0, n.use)(a.getData({ blockId: t })),
                    (0, s.jsx)(k.h, {
                        scrollElement: l,
                        outerTitle: a.title,
                        children: (0, s.jsxs)('div', {
                            className: O().root,
                            children: [
                                (0, s.jsx)(E.Y, {
                                    variant: E.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: c.canBack,
                                    children: (0, s.jsx)(h.DZ, {
                                        id: 'block-entities-header',
                                        variant: 'h1',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        children: a.title,
                                    }),
                                }),
                                (0, s.jsx)(A.N, {
                                    ref: o,
                                    className: O().scrollableContent,
                                    containerClassName: O().scrollableContainer,
                                    'data-test-id': _.e8.landing.BLOCK_ENTITY_PAGE,
                                    children: (0, s.jsxs)('div', {
                                        className: O().container,
                                        children: [
                                            (0, s.jsx)('div', { className: O().content, 'aria-labelledby': 'block-entities-header', tabIndex: 0, children: g }),
                                            (0, s.jsx)(b.A, { children: (0, s.jsx)(y.w, { className: O().footer }) }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    })
                );
            });
            var P = i(86535),
                j = i(98427),
                f = i(37670),
                M = i(74773);
            let U = {
                    'new-releases': m.t.NEW_RELEASES,
                    'editorial-new-releases': m.t.EDITORIAL_NEW_RELEASES,
                    'personal-artists': m.t.PERSONAL_ARTISTS,
                    'new-stars-artists': m.t.NEW_STARS_ARTISTS,
                    'editorial-artists': m.t.EDITORIAL_ARTISTS,
                    'new-playlists': m.t.NEW_PLAYLISTS,
                    'editorial-compilation': m.t.EDITORIAL_COMPILATION,
                    'non-music-editorial-compilation': m.t.EDITORIAL_COMPILATION,
                    'chart-albums': m.t.CHART_ALBUMS,
                    'mixes-grid': m.t.MIXES_GRID,
                    'mixes-music': m.t.MIXES_MUSIC,
                },
                B = (0, r.PA)((e) => {
                    let { blockType: t, blockId: i } = e,
                        { landingBlockEntities: r } = (0, S.g)();
                    ((0, n.useEffect)(
                        () => () => {
                            r.reset();
                        },
                        [r, t, i],
                    ),
                        (0, f.J)(r.loadingState === M.G.RESOLVE));
                    let d = U[t];
                    return (
                        (r.isNotFound || !d) && (0, a.notFound)(),
                        (0, s.jsx)(o.a, {
                            pageId: l.AppScreen.ObjectsGridScreen,
                            pageIdForFrom: j.b.ENTITIES,
                            children: (0, s.jsx)(c.F, {
                                blockId: ''.concat(P.h.DISCOVERY_BLOCK, '-').concat(i),
                                blockIdForFrom: ''.concat(P.h.DISCOVERY_BLOCK, '-').concat(i),
                                blockPosX: 1,
                                blockPosY: 1,
                                blockType: d,
                                objectsCount: r.items.length,
                                children: (0, s.jsx)(R, { blockType: d, blockId: i }),
                            }),
                        })
                    );
                }),
                D = () => {
                    let e = (0, a.useSearchParams)(),
                        t = e.get('blockType'),
                        i = e.get('blockId');
                    return ((t && i) || (0, a.notFound)(), (0, s.jsx)(B, { blockType: t, blockId: i }));
                };
        },
        54243: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => l });
            var s = i(88800),
                a = i(4370),
                r = i(15077),
                n = i(42729);
            let l = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, s.jsx)(n.O, {
                    closeToast: i,
                    entityVariant: r.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: a.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        56117: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => d });
            var s = i(88800),
                a = i(84961),
                r = i(88969),
                n = i(17392),
                l = i(52300),
                o = i(19934),
                c = i(72288);
            let d = (0, a.PA)((e) => {
                let { isDisliked: t, onClick: i, disabled: a, className: d } = e,
                    { user: u } = (0, c.g)();
                return (0, s.jsx)(o.Dr, {
                    onClick: i,
                    className: d,
                    icon: (0, s.jsx)(l.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: a || !u.isAuthorized,
                    'data-test-id': n.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, s.jsx)(r.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        56651: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => _ });
            var s = i(88800),
                a = i(96706),
                r = i(53548),
                n = i(2058),
                l = i(29595),
                o = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(25883);
            let _ = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: _ } = (0, n.A)(),
                    [m, p] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, s.jsx)(d.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (m) return;
                    let r = { ...(0, a.HO)(e), url: e.url, isPinned: !e.isPinned };
                    p(!0);
                    let n = await e.togglePin();
                    (p(!1),
                        n
                            ? i((0, s.jsx)(u.l, { album: r }), { containerId: l.u.INFO })
                            : i((0, s.jsx)(d.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, _, i, m, t.isAuthorized]);
            };
        },
        59724: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => u });
            var s = i(88800),
                a = i(53548),
                r = i(8383),
                n = i(24709),
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
            let u = (0, n.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let i = (0, l.N)(),
                        n = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === d.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [o, u] = (0, a.useState)(() => {
                            let e = new c(i.createScreenSession().screenViewUuid, i);
                            return { client: i, input: t, isReady: n, scope: n ? i.createScreenScope(t, e) : null, session: e };
                        });
                    if (o.client !== i || o.input.pageId !== t.pageId || o.input.skeletonId !== t.skeletonId) {
                        let a = new c(i.createScreenSession().screenViewUuid, i),
                            l = { client: i, input: t, isReady: n, scope: n ? i.createScreenScope(t, a) : null, session: a };
                        return (u(l), (0, s.jsx)(r.k, { value: l, children: e }));
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
                        let a = { ...o, input: t, isReady: n, scope: n ? i.createScreenScope(t, o.session) : null };
                        return (u(a), (0, s.jsx)(r.k, { value: a, children: e }));
                    }
                    return (0, s.jsx)(r.k, { value: o, children: e });
                },
            );
        },
        60266: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => n });
            var s = i(88800);
            i(30282);
            var a = i(11006),
                r = i.n(a);
            let n = (e) => {
                let { children: t } = e;
                return (0, s.jsx)('footer', { className: r().empty });
            };
        },
        60757: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => a });
            var s = i(58217);
            let a = (e) => {
                let { album: t, callback: i, shouldHistoryBack: a } = e;
                return (0, s.l)({ entity: t, callback: i, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        62293: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => a });
            var s = i(97956);
            let a = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: a, userRegion: r } = e;
                return 'ru' === r && t(s.z.WebNextFooterDisclaimer, 'on') ? i() : a();
            };
        },
        62403: (e) => {
            e.exports = {
                root: 'BlockEntities_root__sHn14',
                scrollableContent: 'BlockEntities_scrollableContent__4A0tK',
                scrollableContainer: 'BlockEntities_scrollableContainer__KXyas',
                container: 'BlockEntities_container__1XiOc',
                content: 'BlockEntities_content__bfoTn',
                shimmerWithSubcover: 'BlockEntities_shimmerWithSubcover__dYd6P',
                footer: 'BlockEntities_footer__eEuix',
            };
        },
        64207: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => m });
            var s = i(88800),
                a = i(96706),
                r = i(53548),
                n = i(2058),
                l = i(79390),
                o = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                _ = i(54243);
            let m = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [m, p] = (0, r.useState)(!1),
                    { formatMessage: A } = (0, n.A)();
                return (0, r.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, s.jsx)(u.h, { error: A({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let r = { ...(0, a.HO)(e), isLiked: !e.isLiked };
                    p(!0);
                    let n = await e.toggleLike();
                    (p(!1),
                        n === l.f.OK
                            ? i((0, s.jsx)(_.T, { artist: r }), { containerId: o.u.INFO })
                            : i((0, s.jsx)(u.h, { error: A({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, m, A, i]);
            };
        },
        64247: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => n });
            var s = i(88800),
                a = i(15077),
                r = i(33719);
            let n = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, s.jsx)(r.k, {
                    closeToast: i,
                    entityVariant: a.c.ARTIST,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.name,
                    isPinned: t.isPinned,
                    radius: 'round',
                });
            };
        },
        66610: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => o });
            var s = i(53548),
                a = i(24709),
                r = i(88966),
                n = i(87138),
                l = i(46457);
            let o = (0, a.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, r.N)(),
                    t = (0, n.w)(),
                    i = (0, s.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, l.c)((e) => {
                    t?.object && i && i.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        77455: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => _ });
            var s = i(88800),
                a = i(96706),
                r = i(53548),
                n = i(2058),
                l = i(29595),
                o = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(64247);
            let _ = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: _ } = (0, n.A)(),
                    [m, p] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, s.jsx)(d.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (m) return;
                    let r = { ...(0, a.HO)(e), isPinned: !e.isPinned };
                    p(!0);
                    let n = await e.togglePin();
                    (p(!1),
                        n
                            ? i((0, s.jsx)(u.l, { artist: r }), { containerId: l.u.INFO })
                            : i((0, s.jsx)(d.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, t.isAuthorized, m, _, i]);
            };
        },
        84218: (e) => {
            e.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        85074: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        85902: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => m });
            var s = i(88800),
                a = i(96706),
                r = i(53548),
                n = i(2058),
                l = i(79390),
                o = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                _ = i(30832);
            let m = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [m, p] = (0, r.useState)(!1),
                    { formatMessage: A } = (0, n.A)();
                return (0, r.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, s.jsx)(u.h, { error: A({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let r = { ...(0, a.HO)(e), url: e.url, isLiked: !e.isLiked };
                    p(!0);
                    let n = await e.toggleLike();
                    (p(!1),
                        n === l.f.OK
                            ? i((0, s.jsx)(_.T, { playlist: r }), { containerId: o.u.INFO })
                            : i((0, s.jsx)(u.h, { error: A({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [t.isAuthorized, m, e, A, i]);
            };
        },
        86298: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => _ });
            var s = i(88800),
                a = i(65724),
                r = i(2058),
                n = i(17392),
                l = i(96817),
                o = i(52300),
                c = i(29504),
                d = i(84218),
                u = i.n(d);
            let _ = (e) => {
                let { className: t, isLiked: i, likesCount: d, handleLikeClick: _, ariaLabel: m } = e,
                    { formatNumber: p } = (0, r.A)();
                return (0, s.jsx)(l.$, {
                    className: (0, a.$)(u().root, t),
                    onClick: _,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, s.jsx)(o.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': m,
                    'data-test-id': n.S7.CARD_LIKES,
                    children: (0, s.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: p(d) }),
                });
            };
        },
        86535: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => a });
            var s = i(64284),
                a = (function (e) {
                    return (
                        (e[(e.RUP_MAIN_RADIO = ''.concat(s.U.RUP, '_').concat(s.U.MAIN, '-').concat(s.U.RADIO))] = 'RUP_MAIN_RADIO'),
                        (e[(e.DISCOGRAPHY_CAROUSEL = ''.concat(s.U.DISCOGRAPHY, '_').concat(s.U.CAROUSEL))] = 'DISCOGRAPHY_CAROUSEL'),
                        (e[(e.ALBUMS_CAROUSEL = ''.concat(s.U.ALBUMS, '_').concat(s.U.CAROUSEL))] = 'ALBUMS_CAROUSEL'),
                        (e[(e.COMPILATIONS_CAROUSEL = ''.concat(s.U.COMPILATIONS, '_').concat(s.U.CAROUSEL))] = 'COMPILATIONS_CAROUSEL'),
                        (e[(e.PLAYLISTS_CAROUSEL = ''.concat(s.U.PLAYLISTS, '_').concat(s.U.CAROUSEL))] = 'PLAYLISTS_CAROUSEL'),
                        (e[(e.ARTISTS_CAROUSEL = ''.concat(s.U.ARTISTS, '_').concat(s.U.CAROUSEL))] = 'ARTISTS_CAROUSEL'),
                        (e[(e.CLIPS_CAROUSEL = ''.concat(s.U.CLIPS, '_').concat(s.U.CAROUSEL))] = 'CLIPS_CAROUSEL'),
                        (e[(e.DISCOVERY_BLOCK = ''.concat(s.U.DISCOVERY, '_').concat(s.U.BLOCK))] = 'DISCOVERY_BLOCK'),
                        (e[(e.PLAYLISTS_SIMILAR = ''.concat(s.U.PLAYLISTS, '_').concat(s.U.SIMILAR))] = 'PLAYLISTS_SIMILAR'),
                        (e[(e.SEARCH_HISTORY = ''.concat(s.U.SEARCH, '_').concat(s.U.HISTORY))] = 'SEARCH_HISTORY'),
                        (e[(e.PLAYLISTS_SIMILAR_PLAYLIST = ''.concat(s.U.PLAYLISTS, '_').concat(s.U.SIMILAR, '_').concat(s.U.PLAYLIST))] = 'PLAYLISTS_SIMILAR_PLAYLIST'),
                        (e[(e.SEARCH_BEST_RESULTS = ''.concat(s.U.SEARCH, '_').concat(s.U.BEST_RESULTS))] = 'SEARCH_BEST_RESULTS'),
                        (e[(e.SEARCH_OPEN_BEST_RESULTS = ''.concat(s.U.SEARCH, '_').concat(s.U.OPEN_BEST_RESULTS))] = 'SEARCH_OPEN_BEST_RESULTS'),
                        e
                    );
                })({});
        },
        86790: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => y });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
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
                    let { formatMessage: t, language: i, tld: s, year: a } = e;
                    return {
                        year: a,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, s, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, s, i) },
                    };
                };
            var _ = i(62293),
                m = i(99839);
            let p = (e) => e(new Date(), (0, m.m)());
            var A = i(51611),
                h = i(72288),
                C = i(11006),
                x = i.n(C),
                k = i(17392),
                T = i(29504),
                L = i(91292);
            let v = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('div', {
                        className: (0, a.$)(x().copyrights, t),
                        'data-test-id': k.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, s.jsxs)(T.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: x().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, s.jsx)(L.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, a.$)(x().copyrightLink, x().yandexMusicLink),
                                        'data-test-id': k.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(T.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, s.jsx)(L.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: x().copyrightLink,
                                'data-test-id': k.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                I = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, s.jsxs)('div', {
                        className: x().links,
                        children: [
                            (0, s.jsx)('ol', {
                                className: x().list,
                                'data-test-id': k.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: a } = e;
                                    return (0, s.jsx)(
                                        'li',
                                        {
                                            className: x().item,
                                            children: (0, s.jsx)(L.N, { target: '_blank', href: a, className: x().link, 'data-test-id': k.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, s.jsx)(T.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: x().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': k.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                S = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('footer', {
                        className: (0, a.$)(x().root, x().important, t),
                        'data-test-id': k.S7.FOOTER,
                        children: [(0, s.jsx)(I, { links: i.links, disclaimer: i.disclaimer }), (0, s.jsx)(v, { data: i.copyrights })],
                    });
                };
            (0, r.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, h.g)(),
                    { formatDate: a, formatMessage: r } = (0, n.A)(),
                    { language: l } = (0, A.h)(),
                    o = u({ formatMessage: r, language: l, tld: i.tld, year: p(a) });
                return (0, s.jsx)(v, { className: t, data: o });
            });
            let y = (0, r.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: r, location: m, user: C } = (0, h.g)(),
                    { formatDate: k, formatMessage: T } = (0, n.A)(),
                    { isEnabled: L } = null != (t = (0, o.P)()) ? t : {},
                    { language: v } = (0, A.h)(),
                    I = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: s, language: a, tld: r, userRegion: n, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: s, language: a, userRegion: r } = e,
                                    n = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, s, a) },
                                    l = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, s, a) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, s, a) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, s, a) },
                                    _ = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, s, a) },
                                    m = [n, o, u];
                                return (i && 'ru' === r && m.push(l), m.push(_), m);
                            })({ formatMessage: i, isWebApplication: s, language: a, tld: r, userRegion: n }),
                            disclaimer: (0, _.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: n,
                            }),
                            copyrights: u({ formatMessage: i, language: a, tld: r, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => r.checkExperiment(e, t),
                        formatMessage: T,
                        isWebApplication: l.$3,
                        tld: m.tld,
                        language: v,
                        userRegion: C.account.data.userSessionRegionIso,
                        year: p(k),
                    });
                return (0, s.jsx)(S, { className: (0, a.$)({ [x().root_withOffsetForDeeplink]: L }, i), data: I });
            });
        },
        91959: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => a });
            var s = i(58217);
            let a = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: a } = e;
                return (0, s.l)({ entity: t, callback: i, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
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
            i.d(t, { H: () => a, P: () => r });
            var s = i(53548);
            let a = (0, s.createContext)(null),
                r = () => (0, s.useContext)(a);
        },
        95756: (e, t, i) => {
            'use strict';

            i.d(t, { x: () => W });
            // for PulseSync WebHost: BEGIN imports for native addon context menu items
            var pulseSyncMenuJsx = i(88800),
                pulseSyncMenuItems = i(19934),
                pulseSyncMenuIcons = i(52300);
            // for PulseSync WebHost: END imports for native addon context menu items
            var s = i(88800),
                a = i(84961),
                r = i(53548),
                n = i(2058),
                l = i(97234),
                o = i(17392),
                c = i(18593),
                d = i(29993),
                u = i(19934),
                _ = i(18143),
                m = i(29595),
                p = i(74965),
                A = i(72288),
                h = i(66943),
                C = i(92966),
                x = i(56651),
                k = i(48749),
                T = i(22505),
                L = i(5407),
                v = i(64284),
                I = i(98427),
                S = i(57934),
                y = i(84384),
                b = i(9618),
                E = i(87762),
                N = i(95210),
                g = i(47964),
                O = i(46936),
                R = i(97956),
                P = i(98953),
                j = i(32721),
                f = i(18130),
                M = i(88969),
                U = i(52300);
            let B = (0, a.PA)((e) => {
                let { isFinished: t, onClick: i, className: a } = e,
                    { user: n } = (0, A.g)(),
                    l = (0, r.useMemo)(
                        () => (t ? (0, s.jsx)(M.A, { id: 'interface-actions.mark-all-non-listened' }) : (0, s.jsx)(M.A, { id: 'interface-actions.mark-all-listened' })),
                        [t],
                    );
                return (0, s.jsx)(u.Dr, {
                    className: a,
                    onClick: i,
                    icon: (0, s.jsx)(U.I, { variant: 'check', size: 'xxs' }),
                    disabled: !n.isAuthorized,
                    'data-test-id': o.S7.CONTEXT_MENU_MARK_ALL_LISTENED_BUTTON,
                    children: l,
                });
            });
            var D = i(93091),
                w = i(27817),
                z = i(74064),
                K = i(44988),
                Y = i(15425),
                H = i(81066),
                F = i(18278),
                V = i(41918);
            // for PulseSync: BEGIN download-to-file action in the album context menu
            var pulseSyncMst = i(5120);
            let pulseSyncDownloadAlbumToFile = (0, a.PA)((e) => {
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
                return (0, s.jsx)(u.Dr, {
                    onClick: i,
                    disabled: !t?.id,
                    icon: (0, s.jsx)(U.I, {
                        variant: 'download',
                        size: 'xxs',
                    }),
                    children: 'Скачать в файл',
                });
            });
            // for PulseSync: END download-to-file action in the album context menu
            let W = (0, a.PA)((e) => {
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
                var t, i;
                let { album: a, children: M, onOpenChange: U, open: W, wrapperClassName: X, variant: G, ...q } = e,
                    { shouldShowBuySubscriptionModal: $, showBuySubscriptionModal: J } = (0, b.q)(),
                    {
                        settings: { isMobile: Z },
                        trailer: Q,
                        user: ee,
                        experiments: et,
                        albumCPA: { isPlusCPAEnabled: ei, isPlusCPAPlayerBarEnabled: es },
                    } = (0, A.g)(),
                    ea = (0, C.K)(a),
                    er = (0, x.A)(a),
                    en = (0, S.F)(),
                    el = ''.concat(v.U.ALBUM, '-').concat(a.id),
                    eo = a.isNonMusic && G === V.z.PAGE,
                    ec = et.checkExperiment(R.z.WebEditorsFeatures, 'on'),
                    ed = !a.isNonMusic && !et.checkExperiment(R.z.WebNextProductWithoutRecommendation, 'on'),
                    { formatMessage: eu } = (0, n.A)(),
                    e_ = (0, L.P)(),
                    { pageAlbumId: em } = (0, E.T)(),
                    ep = ei({ pageAlbumId: em, albumId: a.id, isNonMusic: a.isNonMusic }),
                    eA = es(a.id, a.isNonMusic),
                    eh = (() => {
                        let { user: e, album: t, fullscreenPlayer: i } = (0, A.g)(),
                            { notify: a } = (0, p.l)(),
                            { formatMessage: l } = (0, n.A)();
                        return (0, r.useCallback)(async () => {
                            var r, n;
                            if (!t) return;
                            let o = i.modal.isOpened ? m.u.FULLSCREEN_ERROR : m.u.ERROR;
                            return e.isAuthorized
                                ? (await t.setListeningFinishedStatus()) !== _.T.OK
                                    ? void a((0, s.jsx)(h.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: o })
                                    : void (null == (n = t.meta) || n.updateFinished(!(null == (r = t.meta) ? void 0 : r.listeningFinished)))
                                : void a((0, s.jsx)(h.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o });
                        }, [l, a, t, e.isAuthorized, i.modal.isOpened]);
                    })(),
                    { shareLink: eC, pathname: ex } = (0, f.b)('/album/:albumId', { params: { albumId: a.id } }),
                    ek = (0, k.A)({ entityVariant: O.D.ALBUM, urlParams: { id: a.id } }),
                    { isPlaying: eT, togglePlay: eL } = (0, g.B)({
                        seeds: null != (i = null == a ? void 0 : a.seeds) ? i : [],
                        pageIdForFrom: I.b.RADIO,
                        blockIdForFrom: el,
                        parentContextId: a.id,
                    }),
                    { utmLink: ev } = (0, y.f)({ blockId: v.U.ALBUM, contextType: c.K.Album, contextId: null == a ? void 0 : a.id }),
                    eI = (0, d.c)(() => {
                        if ($ && ee.isAuthorized) return void J();
                        !e_() && (eT || eL());
                    }),
                    eS = (0, d.c)(() => {
                        if ($ && !eA) return void J();
                        e_() || (Q.setUtmLink(ev), Q.openAlbumTrailer(a.id), en(l.DomainObjectType.Album, String(a.id)));
                    });
                (0, N.N)(W);
                let ey = (0, r.useMemo)(() => {
                        if (!Z) return (0, s.jsx)(w.L, { onClick: er, isPinned: a.isPinned });
                    }, [a.isPinned, er, Z]),
                    eb = (0, r.useMemo)(() => {
                        let e = !ep && !ee.isAuthorized;
                        return a.isNonMusic
                            ? (0, s.jsx)(K.U, { onClick: ea, isLiked: a.isLiked, albumType: a.type })
                            : (0, s.jsx)(D.T, { onClick: ea, isLiked: a.isLiked, disabled: e });
                    }, [a.isLiked, a.type, ea, a.isNonMusic, ee.isAuthorized, ep]),
                    eE = (0, r.useMemo)(() => {
                        var e;
                        if (!a.isNonMusic && (null == (e = a.trailer) ? void 0 : e.isAvailable)) return (0, s.jsx)(Y.N, { onClick: eS, disabled: !a.isAvailable });
                    }, [a.isAvailable, null == (t = a.trailer) ? void 0 : t.isAvailable, a.isNonMusic, eS]),
                    eN = (0, r.useMemo)(() => {
                        if (ed) return (0, s.jsx)(H.C, { onClick: eI, disabled: !a.isAvailable || (eA && Z), variant: j.I.ALBUM, onOpenMenuChange: U });
                    }, [a.isAvailable, eI, ed, U, eA, Z]),
                    eg = { variant: P.Y.ALBUM, id: a.id, title: a.title, path: ex, albumArtistName: a.artistName, albumArtistId: a.artistId };
                // for PulseSync WebHost: BEGIN album context and native addon menu item rendering
                let pulseSyncInjectAlbumMenuItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('albumContextMenu', items, {
                        eventDetail: {
                            id: String(a.id),
                            url: ex,
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
                                        (activate(), U(!1));
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
                    isMobile: Z,
                    offsetOptions: 10,
                    open: W,
                    onOpenChange: U,
                    ariaLabel: eu({ id: 'interface-actions.context-menu' }),
                    wrapperClassName: X,
                    containerDataTestId: o.Kq.album.ALBUM_CONTEXT_MENU,
                    ...q,
                    // for PulseSync WebHost: BEGIN inject native addon items into the album context menu
                    children: pulseSyncInjectAlbumMenuItems([
                        Z && (0, s.jsx)(F.C, { getDescriptionTexts: a.getDescriptionTexts, entityId: a.id }),
                        ec && (0, s.jsx)(T.d, { entityVariant: O.D.ARTIST, adminUrl: ek }),
                        ey,
                        eb,
                        eE,
                        eN,
                        // for PulseSync: BEGIN insert the album download-to-file menu action
                        (0, s.jsx)(pulseSyncDownloadAlbumToFile, { album: a }),
                        // for PulseSync: END insert the album download-to-file menu action
                        M,
                        eo && (0, s.jsx)(B, { onClick: eh, isFinished: a.listeningFinished }),
                        (0, s.jsx)(z.H, { shareLink: eC, entityMeta: eg }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the album context menu
                });
            });
        },
        97754: (e) => {
            e.exports = {
                plate: 'MixesGridMixCard_plate__ONH3P',
                root: 'MixesGridMixCard_root__HHE7z',
                subcover: 'MixesGridMixCard_subcover__z5sBj',
                link: 'MixesGridMixCard_link__D3_S6',
                header: 'MixesGridMixCard_header__t24VH',
                title: 'MixesGridMixCard_title__fKTCy',
                cover: 'MixesGridMixCard_cover__Ra3ic',
            };
        },
        98506: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 47902));
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
                9904, 3078, 7191, 1833, 8194, 1191, 8655, 9834, 6706, 4771, 2662, 6904, 1898, 2058, 3578, 8628, 4378, 9780, 8283, 9332, 2837, 4732, 9087, 3979, 6719,
                1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 6374, 2088, 8979, 763, 2670, 7358,
            ],
            () => e((e.s = 98506)),
        ),
            (_N_E = e.O()));
    },
]);
