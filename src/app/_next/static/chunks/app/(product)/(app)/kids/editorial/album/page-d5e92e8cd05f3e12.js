(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5940],
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
            i.d(t, { Z: () => n });
            var s = i(67174);
            let n = {
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
        9184: (e) => {
            e.exports = {
                root: 'SomethingWentWrong_root__d77VJ',
                content: 'SomethingWentWrong_content__8_YkJ',
                content_shrink: 'SomethingWentWrong_content_shrink__GOR_7',
                navigation: 'SomethingWentWrong_navigation__a8eMG',
                navigation_desktop: 'SomethingWentWrong_navigation_desktop__WGGBX',
                icon: 'SomethingWentWrong_icon__f15_y',
                title: 'SomethingWentWrong_title__Kn89B',
                important: 'SomethingWentWrong_important__namIb',
                text: 'SomethingWentWrong_text__KEfGc',
                button: 'SomethingWentWrong_button__dmh7t',
            };
        },
        9492: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => p });
            var s = i(88800),
                n = i(65724),
                r = i(53548),
                a = i(2058),
                l = i(88969),
                o = i(96817),
                c = i(52300),
                d = i(29504),
                u = i(59304),
                m = i(4044),
                _ = i.n(m);
            let p = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    m = (0, r.useRef)(null),
                    { formatMessage: p } = (0, a.A)();
                (0, r.useEffect)(() => {
                    var e;
                    null == (e = m.current) || e.focus();
                }, []);
                let h = (0, r.useMemo)(
                    () =>
                        (0, s.jsxs)('div', {
                            className: _().message,
                            children: [
                                (0, s.jsx)(d.HL, {
                                    className: _().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, s.jsx)(l.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, s.jsx)(o.$, {
                                    ref: m,
                                    className: _().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': p({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, s.jsx)(c.I, { variant: 'reset', size: 'xxs', className: _().icon }),
                                }),
                            ],
                        }),
                    [p, t],
                );
                return (0, s.jsx)(u.$, { className: (0, n.$)(_().root, _().important), message: h, closeToast: i });
            };
        },
        10079: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => Q });
            var s = i(88800),
                n = i(65724),
                r = i(84961),
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
                g = i(79070),
                x = i(29832),
                b = i(52300),
                v = i(7555),
                k = i(29504),
                y = i(60757),
                C = i(29008),
                A = i(92966),
                N = i(56651),
                j = i(13946),
                f = i(43443),
                S = i(5407),
                E = i(57934),
                L = i(84384),
                O = i(4795),
                T = i(87762),
                I = i(32414),
                P = i(78940),
                R = i(55693),
                w = i(39079),
                M = i(72288),
                D = i(52726),
                B = i(86298),
                z = i(81877),
                F = i(90224),
                U = i(49738),
                H = i(91292),
                W = i(56862),
                K = i(16704),
                Y = i(56446),
                V = i(36207),
                $ = i(41918);
            let G = { mainAxis: -26, alignmentAxis: -16 },
                q = { isEnabled: !0, width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' };
            var X = i(95756),
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
                        releaseDateFormatter: es = I.s,
                    } = e,
                    en = (0, c.D)(),
                    {
                        user: er,
                        trailer: ea,
                        settings: { isMobile: el },
                        albumCPA: { isPlusCPAEnabled: eo },
                        paywall: { modal: ec },
                    } = (0, M.g)(),
                    { from: ed, utmLink: eu } = (0, L.f)({ contextId: r.id, contextType: _.K.Album, utmForPageIds: r.artistIds }),
                    { formatMessage: em, formatDate: e_ } = (0, l.A)(),
                    { sendLikeSearchFeedback: ep, sendNavigateSearchFeedback: eh, sendPlaySearchFeedback: eg } = (0, R.z)(),
                    [ex, eb] = (0, a.useState)(!1),
                    [ev, ek] = (0, a.useState)(!1),
                    [ey, eC] = (0, a.useState)(!1),
                    eA = (0, d.S)(),
                    eN = (0, u.g)(),
                    ej = (0, A.K)(r),
                    ef = (0, N.A)(r),
                    eS = (0, P.Z)(r.url),
                    [eE, eL] = (0, a.useState)(!1),
                    eO = (0, E.F)(),
                    [eT, eI] = (0, a.useState)(!1),
                    eP = (0, S.P)(),
                    { pageAlbumId: eR } = (0, T.T)(),
                    ew = eo({ pageAlbumId: eR, albumId: r.id, isNonMusic: r.isNonMusic }),
                    eM = (0, O.N)(),
                    eD = r.isAvailableOnlyForPlus && !r.isUnsafeLegal && !r.isLegalRejected,
                    eB = eD && !el,
                    ez = r.isAvailable || eB || r.isAudiobook,
                    eF = (0, h.c)((e) => {
                        if ((e.stopPropagation(), eP())) return void e.preventDefault();
                        (ea.openAlbumTrailer(r.id), eO(o.DomainObjectType.Album, String(r.id)));
                    }),
                    eU = r.type === p._.SINGLE ? em({ id: 'entity-names.single' }) : void 0,
                    eH = r.releaseDate ? e_(r.releaseDate, es()) : void 0,
                    eW = ((e) => {
                        let t = e.filter((e) => !!e).join(' \xb7 ');
                        return 0 === t.length ? null : t;
                    })([null != eH ? eH : r.year, eU]),
                    eK = (0, C.r)(r.type),
                    eY = (0, a.useMemo)(() => {
                        var e;
                        let t = r.isLiked ? em({ id: 'entity-names.has-your-like' }) : '';
                        return ''
                            .concat(eK, ' ')
                            .concat(r.title, ' ')
                            .concat(null != (e = r.version) ? e : '', ' ')
                            .concat(t);
                    }, [eK, em, r.title, r.isLiked, r.version]),
                    { isPlaying: eV, togglePlay: e$ } = (0, w.D)({
                        playContextParams: { contextData: { type: _.K.Album, meta: { id: r.id }, from: ed, utmLink: eu }, loadContextMeta: !0 },
                    }),
                    eG = (0, y.c)({ album: r, callback: eS }),
                    eq = (0, y.c)({ album: r, callback: e$ }),
                    eX = (0, h.c)((e) => {
                        (eA({ to: o.AppScreen.AlbumScreen }), null == eh || eh(), eG(e));
                    }),
                    eJ = (0, h.c)(() => {
                        if (!eP()) {
                            if (eM) return void ec.open();
                            (ev || eV || (ek(!0), null == eg || eg()), eq(), eV || eN());
                        }
                    }),
                    eZ = (0, h.c)(() => {
                        (ex || r.isLiked || (eb(!0), null == ep || ep()), ej());
                    }),
                    eQ = (0, h.c)((e) => {
                        (eC(e), eL(e));
                    }),
                    e0 = (0, a.useMemo)(() => {
                        var e;
                        return (0, s.jsxs)(k.HL, {
                            className: (0, n.$)(Z().title, { [Z().title_withVersion]: r.version, [Z().title_withChart]: ee }),
                            variant: 'div',
                            type: 'entity',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 2,
                            'aria-hidden': !0,
                            'data-test-id': m.Kq.album.ALBUM_TITLE,
                            children: [
                                (0, s.jsx)(H.N, {
                                    'aria-label': ''.concat(r.title, ' ').concat(null != (e = r.version) ? e : ''),
                                    className: Z().titleLink,
                                    href: r.url,
                                    tabIndex: -1,
                                    onClick: eX,
                                    'data-test-id': m.Kq.album.ALBUM_TITLE_LINK,
                                    children: r.title,
                                }),
                                r.version &&
                                    (0, s.jsx)(k.HL, {
                                        className: Z().version,
                                        variant: 'span',
                                        'data-test-id': m.Kq.album.ALBUM_VERSION,
                                        children: ' '.concat(r.version),
                                    }),
                            ],
                        });
                    }, [r.title, r.url, r.version, eX, ee]),
                    e8 = (0, a.useMemo)(() => {
                        var e;
                        return (0, s.jsx)(H.N, {
                            className: Z().srTitleLink,
                            href: r.url,
                            onClick: eX,
                            children: ''.concat(r.title, ' ').concat(null != (e = r.version) ? e : ''),
                        });
                    }, [r.title, r.url, r.version, eX]),
                    e9 = (0, a.useMemo)(() => {
                        var e;
                        if (null == r || null == (e = r.trailer) ? void 0 : e.isAvailable)
                            return (0, s.jsx)(
                                V.n,
                                {
                                    children: (0, s.jsx)(
                                        Y.k,
                                        { className: (0, n.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eF },
                                        r.getKey('TrailerButton'),
                                    ),
                                },
                                r.getKey('AlbumCardTrailerTooltip'),
                            );
                    }, [r, eF]),
                    e4 = (0, a.useMemo)(
                        () =>
                            (0, s.jsx)(
                                X.x,
                                {
                                    album: r,
                                    onOpenChange: eQ,
                                    open: ey,
                                    className: (0, n.$)(Z().menuButton, Z().control),
                                    icon: (0, s.jsx)(b.I, { size: 'xxs', variant: 'more' }),
                                    size: 's',
                                    variant: $.z.CARD,
                                    'data-test-id': m.Kq.album.ALBUM_CONTEXT_MENU_BUTTON,
                                },
                                r.getKey('AlbumContextMenu'),
                            ),
                        [r, eQ, ey],
                    ),
                    e2 = (0, a.useCallback)(
                        () =>
                            (0, s.jsx)(
                                K.D,
                                {
                                    className: (0, n.$)(Z().playButton, Z().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                    onClick: eJ,
                                    isPlaying: eV,
                                    disabled: eB,
                                },
                                r.getKey('PlayButton'),
                            ),
                        [eB, r, eV, eJ],
                    ),
                    e7 = (0, a.useMemo)(
                        () =>
                            eB
                                ? (0, s.jsx)(D.S, {
                                      className: Z().buyPlusPopover,
                                      buttonText: em({ id: 'interface-actions.more-details' }),
                                      isNested: !0,
                                      placement: 'top-start',
                                      isOpened: eT,
                                      onOpenChange: eI,
                                      textVariant: 'album',
                                      albumTextVariant: r.type,
                                      arrowProps: q,
                                      offsetOptions: G,
                                      renderChildren: e2,
                                  })
                                : e2(),
                        [eB, eT, eI, em, e2, r.type],
                    ),
                    e1 = (0, g.L)(() => {
                        if (eB) return;
                        let e = !ew && !er.isAuthorized;
                        return (0, s.jsx)(
                            U.c,
                            {
                                className: (0, n.$)(Z().likeButton, Z().control),
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
                    e5 = (0, a.useMemo)(() => {
                        if (!eB)
                            return (0, s.jsx)(
                                W.O,
                                { onClick: ef, isPinned: r.isPinned, className: (0, n.$)(Z().pinButton, Z().control), withRipple: !1, isDisabled: eB },
                                r.getKey('PinButton'),
                            );
                    }, [r, eB, ef]),
                    e6 = (0, a.useMemo)(() => {
                        if (r.isAvailable || eB)
                            return (0, s.jsx)(x.hg, {
                                isVisible: ey || eE || eT,
                                className: Z().controls,
                                playControl: e7,
                                likeControl: e1,
                                menuControl: e4,
                                pinControl: e5,
                                trailerControl: e9,
                            });
                    }, [r, ey, eE, e4, e9, eT, e7, e1, e5, eB]),
                    e3 = (0, a.useMemo)(
                        () =>
                            (0, s.jsx)(v.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': m.Kq.album.ALBUM_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: eX,
                                    children: [
                                        (0, s.jsx)(z.B, {
                                            className: Z().image,
                                            src: r.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eY,
                                            withAvatarReplace: !0,
                                            isAvailable: ez,
                                            'aria-hidden': !0,
                                        }),
                                        eD && (0, s.jsx)(b.I, { variant: 'plusBadge', className: Z().plusBadge }),
                                        e6,
                                    ],
                                }),
                            }),
                        [eX, r.coverUri, ez, eY, e6, eD],
                    );
                return (0, s.jsxs)(x.MN, {
                    ref: en,
                    className: (0, n.$)(Z().root, { [Z().root_withChart]: ee }, t),
                    'aria-label': eY,
                    explicitMarkComponent:
                        r.explicitDisclaimer &&
                        (0, s.jsx)(
                            F.N,
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
                            j.i,
                            { className: Z().artists, artists: r.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                            r.getKey('description'),
                        ),
                    chart:
                        ee &&
                        r.chart &&
                        (0, s.jsx)(f.t, { withIcon: !0, className: Z().chart, position: r.chart.position, progress: r.chart.progress }, r.getKey('chart')),
                    'data-test-id': m.Kq.album.ALBUM_ITEM,
                    children: [
                        et &&
                            eW &&
                            (0, s.jsx)(k.HL, { className: Z().addition, variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: eW }),
                        Q &&
                            !!r.actualLikesCount &&
                            (0, s.jsx)(B.x, {
                                className: Z().likeTextButton,
                                ariaLabel: em({ id: 'entity-names.likes-counter' }, { counter: r.actualLikesCount }),
                                likesCount: r.actualLikesCount,
                                isLiked: r.isLiked,
                                handleLikeClick: ej,
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
        19503: (e) => {
            e.exports = {
                root: 'KidsEditorialAlbumsPage_root__7rHF8',
                scrollContainer: 'KidsEditorialAlbumsPage_scrollContainer__nQVlt',
                important: 'KidsEditorialAlbumsPage_important__hmmxn',
                footer: 'KidsEditorialAlbumsPage_footer__6rwU1',
                item: 'KidsEditorialAlbumsPage_item__Wc243',
                content: 'KidsEditorialAlbumsPage_content__u3zcW',
            };
        },
        25883: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => l });
            var s = i(88800),
                n = i(84961),
                r = i(33719),
                a = i(5048);
            let l = (0, n.PA)((e) => {
                let { album: t, closeToast: i } = e,
                    n = (0, a.b)(t.type);
                return (0, s.jsx)(r.k, {
                    closeToast: i,
                    entityVariant: n,
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
                n = i(2058),
                r = i(61691),
                a = (function (e) {
                    return ((e.PIN = 'pin'), e);
                })({});
            let l = (e, t) => {
                let { formatMessage: i } = (0, n.A)();
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
        29606: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 86014));
        },
        32414: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => s });
            let s = () => ({ year: 'numeric', month: 'long', day: 'numeric' });
        },
        32596: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => P });
            var s = i(88800),
                n = i(65724),
                r = i(84961),
                a = i(53548),
                l = i(2058),
                o = i(88969);
            i(30282);
            var c = i(96817),
                d = i(52300),
                u = i(29504),
                m = i(97234),
                _ = i(59714),
                p = i(43054),
                h = i(18117),
                g = i(93940),
                x = i(24709);
            let b = (0, x.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, p.s)()) ? void 0 : e.evgenInstance,
                        { hash: i } = (0, h.g)(),
                        { screen: s } = (0, g.j)();
                    return {
                        sendRefreshEvent: (0, a.useCallback)(() => {
                            if (!t || !i || !(null == s ? void 0 : s.pageId)) return;
                            let e = {
                                actionType: m.ActionType.Refresh,
                                userInteractionType: m.UserInteractionType.Tap,
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                hash: i,
                                pageId: s.pageId,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, _.bv)(t, e);
                        }, [t, i, null == s ? void 0 : s.pageId]),
                    };
                }),
                v = (0, x.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let i = null == (t = (0, p.s)()) ? void 0 : t.evgenInstance,
                        { hash: s } = (0, h.g)(),
                        { screen: n } = (0, g.j)();
                    (0, a.useEffect)(() => {
                        if (!i || !s || !(null == n ? void 0 : n.pageId)) return;
                        let t = {
                            entityType: m.EntityTypes.Error,
                            entityId: m.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: s,
                            pageId: n.pageId,
                            pageStyle: m.PageStyles.Fullscreen,
                            pagePlacement: m.PagePlacements.Fullscreen,
                            mainObjectType: m.DomainObjectType.NonApplicable,
                            mainObjectId: m.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, _.z5)(i, t);
                    }, [i, e, s, null == n ? void 0 : n.pageId]);
                });
            var k = i(44230),
                y = i(4370),
                C = i(72288),
                A = i(97956),
                N = i(56248),
                j = i(90688),
                f = i(78940);
            let S = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var E = i(96856),
                L = i.n(E);
            let O = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: r } = e,
                    { slam: a } = (0, C.g)(),
                    { contentRef: l } = (0, k.g)(),
                    d = (0, f.Z)(y.Z.mymusicDownloadsTracks.href);
                return (0, s.jsxs)('div', {
                    className: (0, n.$)(L().root, t),
                    children: [
                        i &&
                            (0, s.jsx)(N.L, {
                                withBackwardFallback: '/',
                                className: (0, n.$)(L().navigation, { [L().navigation_desktop]: !l }),
                                withForwardControl: !1,
                                onBackwardClick: r,
                            }),
                        (0, s.jsxs)('div', {
                            className: (0, n.$)(L().content, { [L().content_shrink]: !i }),
                            children: [
                                (0, s.jsx)(j._V, { className: L().image, src: S.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, s.jsxs)('div', {
                                    className: L().message,
                                    children: [
                                        (0, s.jsx)(u.DZ, {
                                            className: L().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, s.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, s.jsx)(u.HL, {
                                            className: L().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, s.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                a.hasDownloadedTracks &&
                                    (0, s.jsx)(c.$, {
                                        className: L().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, s.jsx)(u.HL, {
                                            className: L().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, s.jsx)(o.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var T = i(9184),
                I = i.n(T);
            let P = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: r } = e,
                    { formatMessage: m } = (0, l.A)(),
                    _ = (0, a.useContext)(C.P),
                    p = null == _ ? void 0 : _.experiments.checkExperiment(A.z.WebNextUnstableMusicScreen, 'on'),
                    h = m(p ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                v(h);
                let { sendRefreshEvent: g } = b(),
                    x = (0, a.useCallback)(() => {
                        (g(), (window.location.href = y.Z.main.href));
                    }, [g]),
                    { contentRef: j } = (0, k.g)();
                return p
                    ? (0, s.jsx)(O, { className: t, withBackwardControl: i, onBack: r })
                    : (0, s.jsxs)('div', {
                          className: (0, n.$)(I().root, t),
                          children: [
                              i &&
                                  (0, s.jsx)(N.L, {
                                      withBackwardFallback: '/',
                                      className: (0, n.$)(I().navigation, { [I().navigation_desktop]: !j }),
                                      withForwardControl: !1,
                                      onBackwardClick: r,
                                  }),
                              (0, s.jsxs)('div', {
                                  className: (0, n.$)(I().content, { [I().content_shrink]: !i }),
                                  children: [
                                      (0, s.jsx)(d.I, { className: I().icon, variant: 'attention', size: 'xxl' }),
                                      (0, s.jsx)(u.DZ, { className: (0, n.$)(I().title, I().important), variant: 'h3', size: 'xs', children: h }),
                                      (0, s.jsxs)(u.HL, {
                                          className: (0, n.$)(I().text, I().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, s.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, s.jsx)(c.$, {
                                          onClick: x,
                                          className: I().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, s.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, s.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
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
        43443: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => p });
            var s = i(88800),
                n = i(65724),
                r = i(84961),
                a = i(53548),
                l = i(2058),
                o = i(17392),
                c = i(13607),
                d = i(52300),
                u = i(29504),
                m = i(3099),
                _ = i.n(m);
            let p = (0, r.PA)((e) => {
                let {
                        progress: t,
                        withIcon: i,
                        withCrownIcon: r,
                        position: m,
                        weight: p = 'normal',
                        isDisliked: h,
                        isDisabled: g,
                        className: x,
                        positionClassName: b,
                    } = e,
                    { formatMessage: v } = (0, l.A)(),
                    k = t || i,
                    y = (0, a.useMemo)(() => {
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
                    C = (0, a.useMemo)(() => {
                        switch (t) {
                            case c._.UP:
                                return v({ id: 'entity-names.chart-up' });
                            case c._.DOWN:
                                return v({ id: 'entity-names.chart-down' });
                            case c._.NEW:
                                return v({ id: 'entity-names.chart-new' });
                            default:
                                return v({ id: 'entity-names.chart-same' });
                        }
                    }, [v, t]),
                    A = r ? 'crown' : t;
                return (0, s.jsxs)('div', {
                    className: (0, n.$)(_().root, x),
                    'data-test-id': o.OA.chart.CHART_PROGRESS,
                    children: [
                        (0, s.jsx)(u.HL, {
                            variant: 'div',
                            weight: p,
                            type: 'entity',
                            size: 'm',
                            className: (0, n.$)(_().position, b, { [_().position_disliked]: h, [_().position_disabled]: g }),
                            'data-test-id': o.OA.chart.CHART_PROGRESS_POSITION,
                            children: m,
                        }),
                        k &&
                            (0, s.jsx)(d.I, {
                                variant: y,
                                size: 'xxs',
                                'aria-label': C,
                                className: (0, n.$)(_().progress, _()['progress_'.concat(A)], { [_().progress_disliked]: h, [_().progress_disabled]: g }),
                                'data-test-id': o.OA.chart.CHART_PROGRESS_ICON,
                            }),
                    ],
                });
            });
        },
        54320: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => d });
            var s = i(88800),
                n = i(53548),
                r = i(29993),
                a = i(9492),
                l = i(29595),
                o = i(74965),
                c = i(74773);
            let d = (e, t) => {
                let { notify: i, dismiss: d } = (0, o.l)(),
                    u = (0, n.useRef)(void 0),
                    m = (0, r.c)(() => {
                        var i;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let s = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            s.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, n.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, s.jsx)(a.L, { reloadBlocks: m }), { containerId: l.u.ERROR, autoClose: !1 }));
                }, [d, m, i, e.rejectedPagesCount]);
            };
        },
        56651: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var s = i(88800),
                n = i(96706),
                r = i(53548),
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
                    [_, p] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, s.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (_) return;
                    let r = { ...(0, n.HO)(e), url: e.url, isPinned: !e.isPinned };
                    p(!0);
                    let a = await e.togglePin();
                    (p(!1),
                        a
                            ? i((0, s.jsx)(u.l, { album: r }), { containerId: l.u.INFO })
                            : i((0, s.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, m, i, _, t.isAuthorized]);
            };
        },
        59724: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => u });
            var s = i(88800),
                n = i(53548),
                r = i(8383),
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
                        [o, u] = (0, n.useState)(() => {
                            let e = new c(i.createScreenSession().screenViewUuid, i);
                            return { client: i, input: t, isReady: a, scope: a ? i.createScreenScope(t, e) : null, session: e };
                        });
                    if (o.client !== i || o.input.pageId !== t.pageId || o.input.skeletonId !== t.skeletonId) {
                        let n = new c(i.createScreenSession().screenViewUuid, i),
                            l = { client: i, input: t, isReady: a, scope: a ? i.createScreenScope(t, n) : null, session: n };
                        return (u(l), (0, s.jsx)(r.k, { value: l, children: e }));
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
                        let n = { ...o, input: t, isReady: a, scope: a ? i.createScreenScope(t, o.session) : null };
                        return (u(n), (0, s.jsx)(r.k, { value: n, children: e }));
                    }
                    return (0, s.jsx)(r.k, { value: o, children: e });
                },
            );
        },
        60266: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => a });
            var s = i(88800);
            i(30282);
            var n = i(11006),
                r = i.n(n);
            let a = (e) => {
                let { children: t } = e;
                return (0, s.jsx)('footer', { className: r().empty });
            };
        },
        60757: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => n });
            var s = i(58217);
            let n = (e) => {
                let { album: t, callback: i, shouldHistoryBack: n } = e;
                return (0, s.l)({ entity: t, callback: i, modalBehavior: void 0 === n ? void 0 : { shouldHistoryBack: n }, preventDefaultWhenSafe: !0 });
            };
        },
        62293: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => n });
            var s = i(97956);
            let n = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: n, userRegion: r } = e;
                return 'ru' === r && t(s.z.WebNextFooterDisclaimer, 'on') ? i() : n();
            };
        },
        66610: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => o });
            var s = i(53548),
                n = i(24709),
                r = i(88966),
                a = i(87138),
                l = i(46457);
            let o = (0, n.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, r.N)(),
                    t = (0, a.w)(),
                    i = (0, s.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, l.c)((e) => {
                    t?.object && i && i.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        79418: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => g });
            var s = i(88800),
                n = i(65724),
                r = i(61013),
                a = i(53548);
            let l = (e) => {
                    let { style: t, forwardRef: i, context: n, ...r } = e,
                        a = (null == n ? void 0 : n.listAriaLabel) || void 0,
                        l = (null == n ? void 0 : n.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: l, 'aria-label': a, style: { ...t }, ref: i, ...r });
                },
                o = (0, a.forwardRef)((e, t) => (0, s.jsx)(l, { forwardRef: t, ...e }));
            var c = i(16434),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: r, withHeader: a, withForceScroll: l, ...o } = e;
                    return (0, s.jsx)('div', {
                        className: (0, n.$)(d().scroller, { [d().scroller_withFooter]: r, [d().scroller_withHeader]: a, [d().scroller_withForceScroll]: l }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                m = (0, a.forwardRef)((e, t) => (0, s.jsx)(u, { forwardRef: t, ...e }));
            var _ = i(55482),
                p = i(75151);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: n,
                            debounceDurationInMs: r = 100,
                            totalCount: l = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [m, h] = (0, a.useState)(null),
                        g = (0, a.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == n || n(e), o.length > 0 && h(e), t && i)) {
                                        let s = Math.floor(e.endIndex / t) + 1,
                                            n = Math.floor(e.startIndex / t);
                                        for (let e = n; e < s; e++) i(e);
                                    }
                                }, r),
                            [r, n, t, i, o],
                        );
                    (0, a.useEffect)(() => {
                        o.length > 0 && m && g(m);
                    }, o);
                    let x = (0, a.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, r);
                    }, [c, r]);
                    return (0, s.jsx)(p.sN, { ref: d, rangeChanged: g, totalCount: l, endReached: x, ...u });
                },
                g = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: l,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: _,
                            listClassName: p,
                            overscan: g = 700,
                            pageSize: x = 20,
                            totalCount: b,
                            totalRequests: v,
                            debounceDurationInMs: k,
                            initialItemCount: y,
                            minInitialItemCount: C = 20,
                            handleRef: A,
                            alwaysShowScrollbar: N = !1,
                            testId: j,
                            isMobileLayout: f = !1,
                            shouldTriggerRangeChangedOn: S,
                            ...E
                        } = e,
                        [L, O] = (0, a.useState)(!1),
                        T = (0, a.useMemo)(
                            () =>
                                (0, r.A)((e) => {
                                    O(e);
                                }, 100),
                            [],
                        ),
                        I = (0, a.useMemo)(() => {
                            var e, t;
                            return f
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
                        }, [i, v, f]),
                        P = y ? Math.min(y, C) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, n.$)(d().root, { [d().root_scrolling]: L || N, [d().root_notScrolling]: !L && !N }, t),
                        'data-test-id': j,
                        children: [
                            f && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, s.jsx)(h, {
                                overscan: g,
                                components: I,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: T,
                                itemContent: _,
                                scrollerRef: A,
                                totalCount: b,
                                pageSize: x,
                                onPageHandler: l,
                                onRangeHandler: c,
                                debounceDurationInMs: k,
                                initialItemCount: P,
                                shouldTriggerRangeChangedOn: S,
                                ...E,
                            }),
                            f && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        84218: (e) => {
            e.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        86014: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => I }));
            var s = i(88800),
                n = i(58390),
                r = i(65724),
                a = i(84961),
                l = i(53548),
                o = i(2058),
                c = i(97234),
                d = i(59724),
                u = i(17392),
                m = i(29993),
                _ = i(79070),
                p = i(29504),
                h = i(32596),
                g = i(10079),
                x = i(69630),
                b = i(98427),
                v = i(46422),
                k = i(44230),
                y = i(37670),
                C = i(72288),
                A = i(54320),
                N = i(86790),
                j = i(60266),
                f = i(93317),
                S = i(37770),
                E = i(79418),
                L = i(19503),
                O = i.n(L);
            let T = (0, a.PA)((e) => {
                    var t, i, a, L;
                    let { id: T } = e,
                        {
                            kids: { kidsEditorialAlbumSubpage: I },
                            settings: { isMobile: P },
                        } = (0, C.g)(),
                        R = (0, v.W)(),
                        { contentScrollRef: w, setContentScrollRef: M } = (0, k.g)(),
                        { formatMessage: D } = (0, o.A)(),
                        B = (0, m.c)((e) => {
                            I.getAlbums({ page: e, pageSize: 20 });
                        });
                    (I.isNotFound && (0, n.notFound)(),
                        (0, l.useEffect)(
                            () => () => {
                                I.reset();
                            },
                            [I],
                        ));
                    let z = (0, _.L)(() => ({ Footer: () => (0, s.jsx)(j.A, { children: (0, s.jsx)(N.w, { className: O().footer }) }) }));
                    if (
                        ((0, y.J)(I.isResolved),
                        (0, A.X)(I.pagesLoader, B),
                        I.isNeededToLoad && (0, l.use)(I.getData({ id: T, page: 0, pageSize: 20 })),
                        I.isSomethingWrong)
                    )
                        return (0, s.jsx)(h.SomethingWentWrong, {});
                    let F = I.isLoading ? 20 : null != (a = null == (i = I.pagesLoader) || null == (t = i.pager) ? void 0 : t.total) ? a : 0;
                    return (0, s.jsx)(d.a, {
                        pageId: c.AppScreen.KidsEditorialAlbums,
                        pageIdForFrom: b.b.KIDS_EDITORIAL_ALBUMS,
                        children: (0, s.jsx)(x.h, {
                            scrollElement: w,
                            outerTitle: I.title,
                            children: (0, s.jsxs)('div', {
                                className: O().root,
                                'data-test-id': u.Xk.kids.KIDS_EDITORIAL_ALBUMS,
                                children: [
                                    (0, s.jsx)(f.Y, {
                                        variant: f.V.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: R.canBack,
                                        children: (0, s.jsx)(p.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: I.title }),
                                    }),
                                    (0, s.jsx)(E.$, {
                                        context: { listAriaLabel: D({ id: 'mixes.albums-list' }, { genreName: I.title || '' }) },
                                        className: (0, r.$)(O().scrollContainer, O().important),
                                        customComponents: z,
                                        itemContentCallback: (e) => {
                                            let t = I.albums[e],
                                                i = D({ id: 'loading-messages.entity-is-loading' }, { entityName: D({ id: 'entity-names.album' }) });
                                            return t
                                                ? (0, s.jsx)(g.a, { withLikesCount: !0, album: t, contentLinesCount: 3 }, t.id)
                                                : (0, s.jsx)(S.V, { isActive: !0, 'aria-label': i });
                                        },
                                        totalCount: F,
                                        onGetDataByPage: B,
                                        pageSize: 20,
                                        totalRequests: null != (L = I.pagesLoader.requestsCount) ? L : 0,
                                        listClassName: O().content,
                                        itemClassName: O().item,
                                        handleRef: M,
                                        isMobileLayout: P,
                                        useWindowScroll: P,
                                    }),
                                ],
                            }),
                        }),
                    });
                }),
                I = () => {
                    let e = (0, n.useSearchParams)().get('id');
                    return (e || (0, n.notFound)(), (0, s.jsx)(T, { id: e }));
                };
        },
        86298: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => m });
            var s = i(88800),
                n = i(65724),
                r = i(2058),
                a = i(17392),
                l = i(96817),
                o = i(52300),
                c = i(29504),
                d = i(84218),
                u = i.n(d);
            let m = (e) => {
                let { className: t, isLiked: i, likesCount: d, handleLikeClick: m, ariaLabel: _ } = e,
                    { formatNumber: p } = (0, r.A)();
                return (0, s.jsx)(l.$, {
                    className: (0, n.$)(u().root, t),
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
            i.d(t, { w: () => j });
            var s = i(88800),
                n = i(65724),
                r = i(84961),
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
                    let { formatMessage: t, language: i, tld: s, year: n } = e;
                    return {
                        year: n,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, s, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, s, i) },
                    };
                };
            var m = i(62293),
                _ = i(99839);
            let p = (e) => e(new Date(), (0, _.m)());
            var h = i(51611),
                g = i(72288),
                x = i(11006),
                b = i.n(x),
                v = i(17392),
                k = i(29504),
                y = i(91292);
            let C = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('div', {
                        className: (0, n.$)(b().copyrights, t),
                        'data-test-id': v.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, s.jsxs)(k.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: b().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, s.jsx)(y.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, n.$)(b().copyrightLink, b().yandexMusicLink),
                                        'data-test-id': v.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(k.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, s.jsx)(y.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: b().copyrightLink,
                                'data-test-id': v.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                A = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, s.jsxs)('div', {
                        className: b().links,
                        children: [
                            (0, s.jsx)('ol', {
                                className: b().list,
                                'data-test-id': v.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: n } = e;
                                    return (0, s.jsx)(
                                        'li',
                                        {
                                            className: b().item,
                                            children: (0, s.jsx)(y.N, { target: '_blank', href: n, className: b().link, 'data-test-id': v.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, s.jsx)(k.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: b().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': v.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                N = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('footer', {
                        className: (0, n.$)(b().root, b().important, t),
                        'data-test-id': v.S7.FOOTER,
                        children: [(0, s.jsx)(A, { links: i.links, disclaimer: i.disclaimer }), (0, s.jsx)(C, { data: i.copyrights })],
                    });
                };
            (0, r.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, g.g)(),
                    { formatDate: n, formatMessage: r } = (0, a.A)(),
                    { language: l } = (0, h.h)(),
                    o = u({ formatMessage: r, language: l, tld: i.tld, year: p(n) });
                return (0, s.jsx)(C, { className: t, data: o });
            });
            let j = (0, r.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: r, location: _, user: x } = (0, g.g)(),
                    { formatDate: v, formatMessage: k } = (0, a.A)(),
                    { isEnabled: y } = null != (t = (0, o.P)()) ? t : {},
                    { language: C } = (0, h.h)(),
                    A = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: s, language: n, tld: r, userRegion: a, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: s, language: n, userRegion: r } = e,
                                    a = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, s, n) },
                                    l = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, s, n) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, s, n) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, s, n) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, s, n) },
                                    _ = [a, o, u];
                                return (i && 'ru' === r && _.push(l), _.push(m), _);
                            })({ formatMessage: i, isWebApplication: s, language: n, tld: r, userRegion: a }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: a,
                            }),
                            copyrights: u({ formatMessage: i, language: n, tld: r, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => r.checkExperiment(e, t),
                        formatMessage: k,
                        isWebApplication: l.$3,
                        tld: _.tld,
                        language: C,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: p(v),
                    });
                return (0, s.jsx)(N, { className: (0, n.$)({ [b().root_withOffsetForDeeplink]: y }, i), data: A });
            });
        },
        94144: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => n, P: () => r });
            var s = i(53548);
            let n = (0, s.createContext)(null),
                r = () => (0, s.useContext)(n);
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
                n = i(84961),
                r = i(53548),
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
                g = i(66943),
                x = i(92966),
                b = i(56651),
                v = i(48749),
                k = i(22505),
                y = i(5407),
                C = i(64284),
                A = i(98427),
                N = i(57934),
                j = i(84384),
                f = i(9618),
                S = i(87762),
                E = i(95210),
                L = i(47964),
                O = i(46936),
                T = i(97956),
                I = i(98953),
                P = i(32721),
                R = i(18130),
                w = i(88969),
                M = i(52300);
            let D = (0, n.PA)((e) => {
                let { isFinished: t, onClick: i, className: n } = e,
                    { user: a } = (0, h.g)(),
                    l = (0, r.useMemo)(
                        () => (t ? (0, s.jsx)(w.A, { id: 'interface-actions.mark-all-non-listened' }) : (0, s.jsx)(w.A, { id: 'interface-actions.mark-all-listened' })),
                        [t],
                    );
                return (0, s.jsx)(u.Dr, {
                    className: n,
                    onClick: i,
                    icon: (0, s.jsx)(M.I, { variant: 'check', size: 'xxs' }),
                    disabled: !a.isAuthorized,
                    'data-test-id': o.S7.CONTEXT_MENU_MARK_ALL_LISTENED_BUTTON,
                    children: l,
                });
            });
            var B = i(93091),
                z = i(27817),
                F = i(74064),
                U = i(44988),
                H = i(15425),
                W = i(81066),
                K = i(18278),
                Y = i(41918);
            // for PulseSync: BEGIN download-to-file action in the album context menu
            var pulseSyncMst = i(5120);
            let pulseSyncDownloadAlbumToFile = (0, n.PA)((e) => {
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
                    icon: (0, s.jsx)(M.I, {
                        variant: 'download',
                        size: 'xxs',
                    }),
                    children: 'Скачать в файл',
                });
            });
            // for PulseSync: END download-to-file action in the album context menu
            let V = (0, n.PA)((e) => {
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
                let { album: n, children: w, onOpenChange: M, open: V, wrapperClassName: $, variant: G, ...q } = e,
                    { shouldShowBuySubscriptionModal: X, showBuySubscriptionModal: J } = (0, f.q)(),
                    {
                        settings: { isMobile: Z },
                        trailer: Q,
                        user: ee,
                        experiments: et,
                        albumCPA: { isPlusCPAEnabled: ei, isPlusCPAPlayerBarEnabled: es },
                    } = (0, h.g)(),
                    en = (0, x.K)(n),
                    er = (0, b.A)(n),
                    ea = (0, N.F)(),
                    el = ''.concat(C.U.ALBUM, '-').concat(n.id),
                    eo = n.isNonMusic && G === Y.z.PAGE,
                    ec = et.checkExperiment(T.z.WebEditorsFeatures, 'on'),
                    ed = !n.isNonMusic && !et.checkExperiment(T.z.WebNextProductWithoutRecommendation, 'on'),
                    { formatMessage: eu } = (0, a.A)(),
                    em = (0, y.P)(),
                    { pageAlbumId: e_ } = (0, S.T)(),
                    ep = ei({ pageAlbumId: e_, albumId: n.id, isNonMusic: n.isNonMusic }),
                    eh = es(n.id, n.isNonMusic),
                    eg = (() => {
                        let { user: e, album: t, fullscreenPlayer: i } = (0, h.g)(),
                            { notify: n } = (0, p.l)(),
                            { formatMessage: l } = (0, a.A)();
                        return (0, r.useCallback)(async () => {
                            var r, a;
                            if (!t) return;
                            let o = i.modal.isOpened ? _.u.FULLSCREEN_ERROR : _.u.ERROR;
                            return e.isAuthorized
                                ? (await t.setListeningFinishedStatus()) !== m.T.OK
                                    ? void n((0, s.jsx)(g.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: o })
                                    : void (null == (a = t.meta) || a.updateFinished(!(null == (r = t.meta) ? void 0 : r.listeningFinished)))
                                : void n((0, s.jsx)(g.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o });
                        }, [l, n, t, e.isAuthorized, i.modal.isOpened]);
                    })(),
                    { shareLink: ex, pathname: eb } = (0, R.b)('/album/:albumId', { params: { albumId: n.id } }),
                    ev = (0, v.A)({ entityVariant: O.D.ALBUM, urlParams: { id: n.id } }),
                    { isPlaying: ek, togglePlay: ey } = (0, L.B)({
                        seeds: null != (i = null == n ? void 0 : n.seeds) ? i : [],
                        pageIdForFrom: A.b.RADIO,
                        blockIdForFrom: el,
                        parentContextId: n.id,
                    }),
                    { utmLink: eC } = (0, j.f)({ blockId: C.U.ALBUM, contextType: c.K.Album, contextId: null == n ? void 0 : n.id }),
                    eA = (0, d.c)(() => {
                        if (X && ee.isAuthorized) return void J();
                        !em() && (ek || ey());
                    }),
                    eN = (0, d.c)(() => {
                        if (X && !eh) return void J();
                        em() || (Q.setUtmLink(eC), Q.openAlbumTrailer(n.id), ea(l.DomainObjectType.Album, String(n.id)));
                    });
                (0, E.N)(V);
                let ej = (0, r.useMemo)(() => {
                        if (!Z) return (0, s.jsx)(z.L, { onClick: er, isPinned: n.isPinned });
                    }, [n.isPinned, er, Z]),
                    ef = (0, r.useMemo)(() => {
                        let e = !ep && !ee.isAuthorized;
                        return n.isNonMusic
                            ? (0, s.jsx)(U.U, { onClick: en, isLiked: n.isLiked, albumType: n.type })
                            : (0, s.jsx)(B.T, { onClick: en, isLiked: n.isLiked, disabled: e });
                    }, [n.isLiked, n.type, en, n.isNonMusic, ee.isAuthorized, ep]),
                    eS = (0, r.useMemo)(() => {
                        var e;
                        if (!n.isNonMusic && (null == (e = n.trailer) ? void 0 : e.isAvailable)) return (0, s.jsx)(H.N, { onClick: eN, disabled: !n.isAvailable });
                    }, [n.isAvailable, null == (t = n.trailer) ? void 0 : t.isAvailable, n.isNonMusic, eN]),
                    eE = (0, r.useMemo)(() => {
                        if (ed) return (0, s.jsx)(W.C, { onClick: eA, disabled: !n.isAvailable || (eh && Z), variant: P.I.ALBUM, onOpenMenuChange: M });
                    }, [n.isAvailable, eA, ed, M, eh, Z]),
                    eL = { variant: I.Y.ALBUM, id: n.id, title: n.title, path: eb, albumArtistName: n.artistName, albumArtistId: n.artistId };
                // for PulseSync WebHost: BEGIN album context and native addon menu item rendering
                let pulseSyncInjectAlbumMenuItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('albumContextMenu', items, {
                        eventDetail: {
                            id: String(n.id),
                            url: eb,
                            ...(n.title
                                ? {
                                      title: String(n.title),
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
                    isMobile: Z,
                    offsetOptions: 10,
                    open: V,
                    onOpenChange: M,
                    ariaLabel: eu({ id: 'interface-actions.context-menu' }),
                    wrapperClassName: $,
                    containerDataTestId: o.Kq.album.ALBUM_CONTEXT_MENU,
                    ...q,
                    // for PulseSync WebHost: BEGIN inject native addon items into the album context menu
                    children: pulseSyncInjectAlbumMenuItems([
                        Z && (0, s.jsx)(K.C, { getDescriptionTexts: n.getDescriptionTexts, entityId: n.id }),
                        ec && (0, s.jsx)(k.d, { entityVariant: O.D.ARTIST, adminUrl: ev }),
                        ej,
                        ef,
                        eS,
                        eE,
                        // for PulseSync: BEGIN insert the album download-to-file menu action
                        (0, s.jsx)(pulseSyncDownloadAlbumToFile, { album: n }),
                        // for PulseSync: END insert the album download-to-file menu action
                        w,
                        eo && (0, s.jsx)(D, { onClick: eg, isFinished: n.listeningFinished }),
                        (0, s.jsx)(F.H, { shareLink: ex, entityMeta: eL }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the album context menu
                });
            });
        },
        96856: (e) => {
            e.exports = {
                root: 'UnstableMusicScreen_root__YblW2',
                content: 'UnstableMusicScreen_content__VnJFc',
                content_shrink: 'UnstableMusicScreen_content_shrink__0bG5x',
                navigation: 'UnstableMusicScreen_navigation___dOLr',
                navigation_desktop: 'UnstableMusicScreen_navigation_desktop__mM97H',
                image: 'UnstableMusicScreen_image__85q4P',
                message: 'UnstableMusicScreen_message__Z0HNs',
                title: 'UnstableMusicScreen_title__EdP6Y',
                text: 'UnstableMusicScreen_text__Bc7HH',
                button: 'UnstableMusicScreen_button__UQBy2',
                buttonText: 'UnstableMusicScreen_buttonText__kM_WM',
            };
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
                9904, 7191, 3078, 1833, 8194, 1191, 8655, 4046, 6706, 4771, 2662, 6904, 1898, 2058, 3578, 8628, 4378, 9780, 8283, 9332, 5151, 2837, 4732, 9087, 3979,
                1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 6374, 2088, 8979, 763, 2670, 7358,
            ],
            () => e((e.s = 29606)),
        ),
            (_N_E = e.O()));
    },
]);
