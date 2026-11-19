(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6363, 7079],
    {
        2622: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionNonMusicLikedPage: () => T });
            var s = i(88800),
                r = i(65724),
                n = i(84961),
                o = i(53548),
                a = i(2058),
                l = i(88969),
                c = i(97234),
                d = i(59724),
                u = i(17392),
                m = i(29504),
                p = i(32596),
                _ = i(10079),
                h = i(69630),
                g = i(98427),
                v = i(46422),
                x = i(44230),
                y = i(37670),
                b = i(72288),
                C = i(86790),
                k = i(60266),
                N = i(93317),
                A = i(37770),
                E = i(79418),
                O = i(54378),
                f = i(95618),
                j = i.n(f);
            let T = (0, n.PA)(() => {
                var e, t, i;
                let {
                        user: n,
                        collection: { nonMusicLiked: f },
                        settings: { isMobile: T },
                        library: S,
                    } = (0, b.g)(),
                    { formatMessage: I } = (0, a.A)(),
                    { contentScrollRef: L, setContentScrollRef: P } = (0, x.g)(),
                    R = (0, v.W)();
                (0, y.J)(f.isResolved);
                let w = (0, o.useCallback)(
                    (e) => {
                        n.account.data.uid && f.getData({ userId: n.account.data.uid, metaType: 'podcast', page: e, pageSize: 20 });
                    },
                    [f, n.account.data.uid],
                );
                if (f.isRejected) return (0, s.jsx)(p.SomethingWentWrong, {});
                (0, o.useEffect)(
                    () => () => {
                        f.reset();
                    },
                    [f],
                );
                let M = (0, o.useMemo)(() => ({ Footer: () => (0, s.jsx)(k.A, { children: (0, s.jsx)(C.w, { className: j().footer }) }) }), []);
                if (n.account.data.uid && f.isNeededToLoad) {
                    let e = [f.getData({ userId: n.account.data.uid, metaType: 'podcast', pageSize: 20 }), S.getData()];
                    (0, o.use)(Promise.allSettled(e));
                }
                return (0, s.jsx)(d.a, {
                    pageId: c.AppScreen.OwnPodcasts,
                    pageIdForFrom: g.b.OWN_PODCASTS,
                    children: (0, s.jsx)(h.h, {
                        scrollElement: L,
                        outerTitle: I({ id: 'page.delayed-non-music' }),
                        children: (0, s.jsxs)('div', {
                            className: j().root,
                            'data-test-id': u.Xk.collection.COLLECTION_NON_MUSIC_LIKED_PAGE,
                            children: [
                                (0, s.jsx)(N.Y, {
                                    variant: N.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: R.canBack,
                                    children: (0, s.jsx)(m.DZ, {
                                        variant: 'h2',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        children: (0, s.jsx)(l.A, { id: 'page.delayed-non-music' }),
                                    }),
                                }),
                                f.isEmptyItems && !f.isRejected && (0, s.jsx)(O.M, { className: j().emptyBlock }),
                                (0, s.jsx)(E.$, {
                                    className: (0, r.$)(j().scrollContainer, j().important),
                                    listClassName: j().content,
                                    itemClassName: j().item,
                                    customComponents: M,
                                    itemContentCallback: (e) => {
                                        var t;
                                        let i = null == (t = f.items) ? void 0 : t[e],
                                            r = I({ id: 'loading-messages.entity-is-loading' }, { entityName: I({ id: 'entity-names.podcast' }) });
                                        return i
                                            ? (0, s.jsx)(_.a, { album: i, contentLinesCount: 3, withLikesCount: !0, withAddition: !1 }, i.id)
                                            : (0, s.jsx)(A.V, { 'aria-label': r });
                                    },
                                    totalCount: null != (t = null == (e = f.pager) ? void 0 : e.total) ? t : 0,
                                    onGetDataByPage: w,
                                    pageSize: 20,
                                    totalRequests: null != (i = f.requestsCount) ? i : 0,
                                    handleRef: P,
                                    context: { listAriaLabel: I({ id: 'collection.liked-non-music-list' }) },
                                    isMobileLayout: T,
                                    useWindowScroll: T,
                                }),
                            ],
                        }),
                    }),
                });
            });
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
        7628: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => p });
            var s = i(88800),
                r = i(88969),
                n = i(58390),
                o = i(17392),
                a = i(29993),
                l = i(96817),
                c = i(29504),
                d = i(99890),
                u = i(4086),
                m = i(41928);
            let p = (e) => {
                let { size: t = 'm', variant: i = 'default', color: p = 'primary', withRipple: _ = !0, buttonText: h, isBlock: g, key: v, className: x } = e,
                    y = (0, n.useRouter)(),
                    b = (0, m.N)().get(u.QG),
                    C = (0, a.c)(() => {
                        b.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), y.push(b.authorizationUrl));
                    });
                return (0, s.jsx)(
                    l.$,
                    {
                        onClick: C,
                        className: x,
                        isBlock: g,
                        color: p,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: _,
                        'data-test-id': o.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(r.A, { id: 'authorization.enter-button' }) }),
                    },
                    v,
                );
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
        10079: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => Q });
            var s = i(88800),
                r = i(65724),
                n = i(84961),
                o = i(53548),
                a = i(2058),
                l = i(97234),
                c = i(91177),
                d = i(70598),
                u = i(46482),
                m = i(17392),
                p = i(18593),
                _ = i(61691),
                h = i(29993),
                g = i(79070),
                v = i(29832),
                x = i(52300),
                y = i(7555),
                b = i(29504),
                C = i(60757),
                k = i(29008),
                N = i(92966),
                A = i(56651),
                E = i(13946),
                O = i(43443),
                f = i(5407),
                j = i(57934),
                T = i(84384),
                S = i(4795),
                I = i(87762),
                L = i(32414),
                P = i(78940),
                R = i(55693),
                w = i(39079),
                M = i(72288),
                D = i(52726),
                U = i(86298),
                z = i(81877),
                H = i(90224),
                B = i(49738),
                F = i(91292),
                q = i(56862),
                W = i(16704),
                V = i(56446),
                Y = i(36207),
                K = i(41918);
            let X = { mainAxis: -26, alignmentAxis: -16 },
                $ = { isEnabled: !0, width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' };
            var G = i(95756),
                Z = i(28304),
                J = i.n(Z);
            let Q = (0, n.PA)((e) => {
                let {
                        className: t,
                        children: i,
                        album: n,
                        contentLinesCount: Z,
                        withLikesCount: Q,
                        withChart: ee,
                        withAddition: et = !0,
                        withArtistName: ei = !0,
                        releaseDateFormatter: es = L.s,
                    } = e,
                    er = (0, c.D)(),
                    {
                        user: en,
                        trailer: eo,
                        settings: { isMobile: ea },
                        albumCPA: { isPlusCPAEnabled: el },
                        paywall: { modal: ec },
                    } = (0, M.g)(),
                    { from: ed, utmLink: eu } = (0, T.f)({ contextId: n.id, contextType: p.K.Album, utmForPageIds: n.artistIds }),
                    { formatMessage: em, formatDate: ep } = (0, a.A)(),
                    { sendLikeSearchFeedback: e_, sendNavigateSearchFeedback: eh, sendPlaySearchFeedback: eg } = (0, R.z)(),
                    [ev, ex] = (0, o.useState)(!1),
                    [ey, eb] = (0, o.useState)(!1),
                    [eC, ek] = (0, o.useState)(!1),
                    eN = (0, d.S)(),
                    eA = (0, u.g)(),
                    eE = (0, N.K)(n),
                    eO = (0, A.A)(n),
                    ef = (0, P.Z)(n.url),
                    [ej, eT] = (0, o.useState)(!1),
                    eS = (0, j.F)(),
                    [eI, eL] = (0, o.useState)(!1),
                    eP = (0, f.P)(),
                    { pageAlbumId: eR } = (0, I.T)(),
                    ew = el({ pageAlbumId: eR, albumId: n.id, isNonMusic: n.isNonMusic }),
                    eM = (0, S.N)(),
                    eD = n.isAvailableOnlyForPlus && !n.isUnsafeLegal && !n.isLegalRejected,
                    eU = eD && !ea,
                    ez = n.isAvailable || eU || n.isAudiobook,
                    eH = (0, h.c)((e) => {
                        if ((e.stopPropagation(), eP())) return void e.preventDefault();
                        (eo.openAlbumTrailer(n.id), eS(l.DomainObjectType.Album, String(n.id)));
                    }),
                    eB = n.type === _._.SINGLE ? em({ id: 'entity-names.single' }) : void 0,
                    eF = n.releaseDate ? ep(n.releaseDate, es()) : void 0,
                    eq = ((e) => {
                        let t = e.filter((e) => !!e).join(' \xb7 ');
                        return 0 === t.length ? null : t;
                    })([null != eF ? eF : n.year, eB]),
                    eW = (0, k.r)(n.type),
                    eV = (0, o.useMemo)(() => {
                        var e;
                        let t = n.isLiked ? em({ id: 'entity-names.has-your-like' }) : '';
                        return ''
                            .concat(eW, ' ')
                            .concat(n.title, ' ')
                            .concat(null != (e = n.version) ? e : '', ' ')
                            .concat(t);
                    }, [eW, em, n.title, n.isLiked, n.version]),
                    { isPlaying: eY, togglePlay: eK } = (0, w.D)({
                        playContextParams: { contextData: { type: p.K.Album, meta: { id: n.id }, from: ed, utmLink: eu }, loadContextMeta: !0 },
                    }),
                    eX = (0, C.c)({ album: n, callback: ef }),
                    e$ = (0, C.c)({ album: n, callback: eK }),
                    eG = (0, h.c)((e) => {
                        (eN({ to: l.AppScreen.AlbumScreen }), null == eh || eh(), eX(e));
                    }),
                    eZ = (0, h.c)(() => {
                        if (!eP()) {
                            if (eM) return void ec.open();
                            (ey || eY || (eb(!0), null == eg || eg()), e$(), eY || eA());
                        }
                    }),
                    eJ = (0, h.c)(() => {
                        (ev || n.isLiked || (ex(!0), null == e_ || e_()), eE());
                    }),
                    eQ = (0, h.c)((e) => {
                        (ek(e), eT(e));
                    }),
                    e0 = (0, o.useMemo)(() => {
                        var e;
                        return (0, s.jsxs)(b.HL, {
                            className: (0, r.$)(J().title, { [J().title_withVersion]: n.version, [J().title_withChart]: ee }),
                            variant: 'div',
                            type: 'entity',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 2,
                            'aria-hidden': !0,
                            'data-test-id': m.Kq.album.ALBUM_TITLE,
                            children: [
                                (0, s.jsx)(F.N, {
                                    'aria-label': ''.concat(n.title, ' ').concat(null != (e = n.version) ? e : ''),
                                    className: J().titleLink,
                                    href: n.url,
                                    tabIndex: -1,
                                    onClick: eG,
                                    'data-test-id': m.Kq.album.ALBUM_TITLE_LINK,
                                    children: n.title,
                                }),
                                n.version &&
                                    (0, s.jsx)(b.HL, {
                                        className: J().version,
                                        variant: 'span',
                                        'data-test-id': m.Kq.album.ALBUM_VERSION,
                                        children: ' '.concat(n.version),
                                    }),
                            ],
                        });
                    }, [n.title, n.url, n.version, eG, ee]),
                    e8 = (0, o.useMemo)(() => {
                        var e;
                        return (0, s.jsx)(F.N, {
                            className: J().srTitleLink,
                            href: n.url,
                            onClick: eG,
                            children: ''.concat(n.title, ' ').concat(null != (e = n.version) ? e : ''),
                        });
                    }, [n.title, n.url, n.version, eG]),
                    e9 = (0, o.useMemo)(() => {
                        var e;
                        if (null == n || null == (e = n.trailer) ? void 0 : e.isAvailable)
                            return (0, s.jsx)(
                                Y.n,
                                {
                                    children: (0, s.jsx)(
                                        V.k,
                                        { className: (0, r.$)(J().trailerButton, J().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eH },
                                        n.getKey('TrailerButton'),
                                    ),
                                },
                                n.getKey('AlbumCardTrailerTooltip'),
                            );
                    }, [n, eH]),
                    e2 = (0, o.useMemo)(
                        () =>
                            (0, s.jsx)(
                                G.x,
                                {
                                    album: n,
                                    onOpenChange: eQ,
                                    open: eC,
                                    className: (0, r.$)(J().menuButton, J().control),
                                    icon: (0, s.jsx)(x.I, { size: 'xxs', variant: 'more' }),
                                    size: 's',
                                    variant: K.z.CARD,
                                    'data-test-id': m.Kq.album.ALBUM_CONTEXT_MENU_BUTTON,
                                },
                                n.getKey('AlbumContextMenu'),
                            ),
                        [n, eQ, eC],
                    ),
                    e4 = (0, o.useCallback)(
                        () =>
                            (0, s.jsx)(
                                W.D,
                                {
                                    className: (0, r.$)(J().playButton, J().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                    onClick: eZ,
                                    isPlaying: eY,
                                    disabled: eU,
                                },
                                n.getKey('PlayButton'),
                            ),
                        [eU, n, eY, eZ],
                    ),
                    e1 = (0, o.useMemo)(
                        () =>
                            eU
                                ? (0, s.jsx)(D.S, {
                                      className: J().buyPlusPopover,
                                      buttonText: em({ id: 'interface-actions.more-details' }),
                                      isNested: !0,
                                      placement: 'top-start',
                                      isOpened: eI,
                                      onOpenChange: eL,
                                      textVariant: 'album',
                                      albumTextVariant: n.type,
                                      arrowProps: $,
                                      offsetOptions: X,
                                      renderChildren: e4,
                                  })
                                : e4(),
                        [eU, eI, eL, em, e4, n.type],
                    ),
                    e6 = (0, g.L)(() => {
                        if (eU) return;
                        let e = !ew && !en.isAuthorized;
                        return (0, s.jsx)(
                            B.c,
                            {
                                className: (0, r.$)(J().likeButton, J().control),
                                isLiked: n.isLiked,
                                onClick: eJ,
                                variant: 'default',
                                size: 's',
                                iconSize: 'xxs',
                                disabled: e,
                            },
                            n.getKey('LikeButton'),
                        );
                    }),
                    e7 = (0, o.useMemo)(() => {
                        if (!eU)
                            return (0, s.jsx)(
                                q.O,
                                { onClick: eO, isPinned: n.isPinned, className: (0, r.$)(J().pinButton, J().control), withRipple: !1, isDisabled: eU },
                                n.getKey('PinButton'),
                            );
                    }, [n, eU, eO]),
                    e5 = (0, o.useMemo)(() => {
                        if (n.isAvailable || eU)
                            return (0, s.jsx)(v.hg, {
                                isVisible: eC || ej || eI,
                                className: J().controls,
                                playControl: e1,
                                likeControl: e6,
                                menuControl: e2,
                                pinControl: e7,
                                trailerControl: e9,
                            });
                    }, [n, eC, ej, e2, e9, eI, e1, e6, e7, eU]),
                    e3 = (0, o.useMemo)(
                        () =>
                            (0, s.jsx)(y.t, {
                                className: J().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': m.Kq.album.ALBUM_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: J().coverBlock,
                                    onClick: eG,
                                    children: [
                                        (0, s.jsx)(z.B, {
                                            className: J().image,
                                            src: n.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eV,
                                            withAvatarReplace: !0,
                                            isAvailable: ez,
                                            'aria-hidden': !0,
                                        }),
                                        eD && (0, s.jsx)(x.I, { variant: 'plusBadge', className: J().plusBadge }),
                                        e5,
                                    ],
                                }),
                            }),
                        [eG, n.coverUri, ez, eV, e5, eD],
                    );
                return (0, s.jsxs)(v.MN, {
                    ref: er,
                    className: (0, r.$)(J().root, { [J().root_withChart]: ee }, t),
                    'aria-label': eV,
                    explicitMarkComponent:
                        n.explicitDisclaimer &&
                        (0, s.jsx)(
                            H.N,
                            { className: J().explicitMark, getDescriptionTexts: n.getDescriptionTexts, variant: n.explicitDisclaimer },
                            n.getKey('AlbumCardExplicitMarkIcon'),
                        ),
                    title: e0,
                    srTitle: e8,
                    contentLinesCount: Z,
                    view: e3,
                    description:
                        ei &&
                        (0, s.jsx)(
                            E.i,
                            { className: J().artists, artists: n.artists, lineClamp: 1, linkClassName: J().artistLink, captionSize: 's' },
                            n.getKey('description'),
                        ),
                    chart:
                        ee &&
                        n.chart &&
                        (0, s.jsx)(O.t, { withIcon: !0, className: J().chart, position: n.chart.position, progress: n.chart.progress }, n.getKey('chart')),
                    'data-test-id': m.Kq.album.ALBUM_ITEM,
                    children: [
                        et &&
                            eq &&
                            (0, s.jsx)(b.HL, { className: J().addition, variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: eq }),
                        Q &&
                            !!n.actualLikesCount &&
                            (0, s.jsx)(U.x, {
                                className: J().likeTextButton,
                                ariaLabel: em({ id: 'entity-names.likes-counter' }, { counter: n.actualLikesCount }),
                                likesCount: n.actualLikesCount,
                                isLiked: n.isLiked,
                                handleLikeClick: eE,
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
            i.d(t, { l: () => a });
            var s = i(88800),
                r = i(84961),
                n = i(33719),
                o = i(5048);
            let a = (0, r.PA)((e) => {
                let { album: t, closeToast: i } = e,
                    r = (0, o.b)(t.type);
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
            i.d(t, { c: () => o, r: () => a });
            var s = i(53548),
                r = i(2058),
                n = i(61691),
                o = (function (e) {
                    return ((e.PIN = 'pin'), e);
                })({});
            let a = (e, t) => {
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
        32596: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => P });
            var s = i(88800),
                r = i(65724),
                n = i(84961),
                o = i(53548),
                a = i(2058),
                l = i(88969);
            i(30282);
            var c = i(96817),
                d = i(52300),
                u = i(29504),
                m = i(97234),
                p = i(59714),
                _ = i(43054),
                h = i(18117),
                g = i(93940),
                v = i(24709);
            let x = (0, v.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, _.s)()) ? void 0 : e.evgenInstance,
                        { hash: i } = (0, h.g)(),
                        { screen: s } = (0, g.j)();
                    return {
                        sendRefreshEvent: (0, o.useCallback)(() => {
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
                            Object.values(e).some((e) => void 0 === e) || (0, p.bv)(t, e);
                        }, [t, i, null == s ? void 0 : s.pageId]),
                    };
                }),
                y = (0, v.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let i = null == (t = (0, _.s)()) ? void 0 : t.evgenInstance,
                        { hash: s } = (0, h.g)(),
                        { screen: r } = (0, g.j)();
                    (0, o.useEffect)(() => {
                        if (!i || !s || !(null == r ? void 0 : r.pageId)) return;
                        let t = {
                            entityType: m.EntityTypes.Error,
                            entityId: m.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: s,
                            pageId: r.pageId,
                            pageStyle: m.PageStyles.Fullscreen,
                            pagePlacement: m.PagePlacements.Fullscreen,
                            mainObjectType: m.DomainObjectType.NonApplicable,
                            mainObjectId: m.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, p.z5)(i, t);
                    }, [i, e, s, null == r ? void 0 : r.pageId]);
                });
            var b = i(44230),
                C = i(4370),
                k = i(72288),
                N = i(97956),
                A = i(56248),
                E = i(90688),
                O = i(78940);
            let f = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var j = i(96856),
                T = i.n(j);
            let S = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: n } = e,
                    { slam: o } = (0, k.g)(),
                    { contentRef: a } = (0, b.g)(),
                    d = (0, O.Z)(C.Z.mymusicDownloadsTracks.href);
                return (0, s.jsxs)('div', {
                    className: (0, r.$)(T().root, t),
                    children: [
                        i &&
                            (0, s.jsx)(A.L, {
                                withBackwardFallback: '/',
                                className: (0, r.$)(T().navigation, { [T().navigation_desktop]: !a }),
                                withForwardControl: !1,
                                onBackwardClick: n,
                            }),
                        (0, s.jsxs)('div', {
                            className: (0, r.$)(T().content, { [T().content_shrink]: !i }),
                            children: [
                                (0, s.jsx)(E._V, { className: T().image, src: f.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, s.jsxs)('div', {
                                    className: T().message,
                                    children: [
                                        (0, s.jsx)(u.DZ, {
                                            className: T().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, s.jsx)(l.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, s.jsx)(u.HL, {
                                            className: T().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, s.jsx)(l.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                o.hasDownloadedTracks &&
                                    (0, s.jsx)(c.$, {
                                        className: T().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, s.jsx)(u.HL, {
                                            className: T().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, s.jsx)(l.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var I = i(9184),
                L = i.n(I);
            let P = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: n } = e,
                    { formatMessage: m } = (0, a.A)(),
                    p = (0, o.useContext)(k.P),
                    _ = null == p ? void 0 : p.experiments.checkExperiment(N.z.WebNextUnstableMusicScreen, 'on'),
                    h = m(_ ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                y(h);
                let { sendRefreshEvent: g } = x(),
                    v = (0, o.useCallback)(() => {
                        (g(), (window.location.href = C.Z.main.href));
                    }, [g]),
                    { contentRef: E } = (0, b.g)();
                return _
                    ? (0, s.jsx)(S, { className: t, withBackwardControl: i, onBack: n })
                    : (0, s.jsxs)('div', {
                          className: (0, r.$)(L().root, t),
                          children: [
                              i &&
                                  (0, s.jsx)(A.L, {
                                      withBackwardFallback: '/',
                                      className: (0, r.$)(L().navigation, { [L().navigation_desktop]: !E }),
                                      withForwardControl: !1,
                                      onBackwardClick: n,
                                  }),
                              (0, s.jsxs)('div', {
                                  className: (0, r.$)(L().content, { [L().content_shrink]: !i }),
                                  children: [
                                      (0, s.jsx)(d.I, { className: L().icon, variant: 'attention', size: 'xxl' }),
                                      (0, s.jsx)(u.DZ, { className: (0, r.$)(L().title, L().important), variant: 'h3', size: 'xs', children: h }),
                                      (0, s.jsxs)(u.HL, {
                                          className: (0, r.$)(L().text, L().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, s.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, s.jsx)(c.$, {
                                          onClick: v,
                                          className: L().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, s.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, s.jsx)(l.A, { id: 'page-error.restart-app-button' })],
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
        42674: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        43443: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => _ });
            var s = i(88800),
                r = i(65724),
                n = i(84961),
                o = i(53548),
                a = i(2058),
                l = i(17392),
                c = i(13607),
                d = i(52300),
                u = i(29504),
                m = i(3099),
                p = i.n(m);
            let _ = (0, n.PA)((e) => {
                let {
                        progress: t,
                        withIcon: i,
                        withCrownIcon: n,
                        position: m,
                        weight: _ = 'normal',
                        isDisliked: h,
                        isDisabled: g,
                        className: v,
                        positionClassName: x,
                    } = e,
                    { formatMessage: y } = (0, a.A)(),
                    b = t || i,
                    C = (0, o.useMemo)(() => {
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
                    k = (0, o.useMemo)(() => {
                        switch (t) {
                            case c._.UP:
                                return y({ id: 'entity-names.chart-up' });
                            case c._.DOWN:
                                return y({ id: 'entity-names.chart-down' });
                            case c._.NEW:
                                return y({ id: 'entity-names.chart-new' });
                            default:
                                return y({ id: 'entity-names.chart-same' });
                        }
                    }, [y, t]),
                    N = n ? 'crown' : t;
                return (0, s.jsxs)('div', {
                    className: (0, r.$)(p().root, v),
                    'data-test-id': l.OA.chart.CHART_PROGRESS,
                    children: [
                        (0, s.jsx)(u.HL, {
                            variant: 'div',
                            weight: _,
                            type: 'entity',
                            size: 'm',
                            className: (0, r.$)(p().position, x, { [p().position_disliked]: h, [p().position_disabled]: g }),
                            'data-test-id': l.OA.chart.CHART_PROGRESS_POSITION,
                            children: m,
                        }),
                        b &&
                            (0, s.jsx)(d.I, {
                                variant: C,
                                size: 'xxs',
                                'aria-label': k,
                                className: (0, r.$)(p().progress, p()['progress_'.concat(N)], { [p().progress_disliked]: h, [p().progress_disabled]: g }),
                                'data-test-id': l.OA.chart.CHART_PROGRESS_ICON,
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
        54378: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => d });
            var s = i(88800),
                r = i(65724),
                n = i(88969),
                o = i(52300),
                a = i(29504),
                l = i(78212),
                c = i.n(l);
            let d = (e) => {
                let { className: t } = e;
                return (0, s.jsxs)('div', {
                    className: (0, r.$)(c().emptyContent, t),
                    children: [
                        (0, s.jsx)(o.I, { className: c().emptyContentIcon, size: 'l', variant: 'album' }),
                        (0, s.jsx)(a.DZ, {
                            className: c().emptyContentTitle,
                            variant: 'h3',
                            size: 'xs',
                            children: (0, s.jsx)(n.A, { id: 'error-messages.empty-collection-podcasts-and-books' }),
                        }),
                    ],
                });
            };
        },
        56651: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var s = i(88800),
                r = i(96706),
                n = i(53548),
                o = i(2058),
                a = i(29595),
                l = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(25883);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, l.l)(),
                    { formatMessage: m } = (0, o.A)(),
                    [p, _] = (0, n.useState)(!1);
                return (0, n.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, s.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: a.u.ERROR });
                    if (p) return;
                    let n = { ...(0, r.HO)(e), url: e.url, isPinned: !e.isPinned };
                    _(!0);
                    let o = await e.togglePin();
                    (_(!1),
                        o
                            ? i((0, s.jsx)(u.l, { album: n }), { containerId: a.u.INFO })
                            : i((0, s.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: a.u.ERROR }));
                }, [e, m, i, p, t.isAuthorized]);
            };
        },
        57328: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => h });
            var s = i(88800),
                r = i(84961),
                n = i(58390),
                o = i(65724),
                a = i(88969),
                l = i(29504),
                c = i(7628),
                d = i(42674),
                u = i.n(d);
            let m = (0, r.PA)(() =>
                (0, s.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, s.jsx)(l.DZ, {
                            className: (0, o.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, s.jsx)(a.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, s.jsx)(l.HL, {
                            className: (0, o.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, s.jsx)(a.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, s.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var p = i(4370),
                _ = i(72288);
            let h = (0, r.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: r } = (0, _.g)();
                return r.isAuthorized ? t : (i && (0, n.redirect)(p.Z.main.href), (0, s.jsx)(m, {}));
            });
        },
        59724: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => u });
            var s = i(88800),
                r = i(53548),
                n = i(8383),
                o = i(24709),
                a = i(88966);
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
                    let i =
                        l.get(t) ??
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
                    (l.set(t, i), (this.queue = i));
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
            let u = (0, o.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let i = (0, a.N)(),
                        o = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === d.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [l, u] = (0, r.useState)(() => {
                            let e = new c(i.createScreenSession().screenViewUuid, i);
                            return { client: i, input: t, isReady: o, scope: o ? i.createScreenScope(t, e) : null, session: e };
                        });
                    if (l.client !== i || l.input.pageId !== t.pageId || l.input.skeletonId !== t.skeletonId) {
                        let r = new c(i.createScreenSession().screenViewUuid, i),
                            a = { client: i, input: t, isReady: o, scope: o ? i.createScreenScope(t, r) : null, session: r };
                        return (u(a), (0, s.jsx)(n.k, { value: a, children: e }));
                    }
                    if (
                        l.isReady !== o ||
                        l.input.mainObjectType !== t.mainObjectType ||
                        l.input.mainObjectId !== t.mainObjectId ||
                        l.input.displayReasonId !== t.displayReasonId ||
                        l.input.pageIdForFrom !== t.pageIdForFrom ||
                        l.input.pagePlacement !== t.pagePlacement ||
                        l.input.pageStyle !== t.pageStyle
                    ) {
                        let r = { ...l, input: t, isReady: o, scope: o ? i.createScreenScope(t, l.session) : null };
                        return (u(r), (0, s.jsx)(n.k, { value: r, children: e }));
                    }
                    return (0, s.jsx)(n.k, { value: l, children: e });
                },
            );
        },
        60266: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => o });
            var s = i(88800);
            i(30282);
            var r = i(11006),
                n = i.n(r);
            let o = (e) => {
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
        66363: (e, t, i) => {
            'use strict';
            i.d(t, { NS: () => n, Nh: () => r, xW: () => o });
            var s = i(9519);
            let r = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
            class n {
                getHeaders(e) {
                    return e instanceof Headers ? Object.fromEntries(e.entries()) : e;
                }
                getUrl(e) {
                    return new URL(e || 'https://unknown');
                }
                constructor(e) {
                    ((0, s._)(this, 'logger', void 0),
                        (0, s._)(this, 'beforeRequestHook', (e) => {
                            let t = this.getUrl(e.url);
                            this.logger.info('[Resource] Request started '.concat(e.method, ' ').concat(t.origin, ' ').concat(t.pathname).concat(t.search), {
                                request: { method: e.method, url: e.url, headers: this.getHeaders(e.headers), body: e.json },
                            });
                        }),
                        (0, s._)(this, 'beforeRetryHook', (e, t) => {
                            let i = e.cause;
                            if (r(i)) {
                                var s, n, o, a, l, c, d, u, m, p, _, h, g, v;
                                let r = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (s = i.request) ? void 0 : s.method) || (null == (n = i.options) ? void 0 : n.method),
                                        url: (null == (o = i.request) ? void 0 : o.url) || (null == (a = i.options) ? void 0 : a.url),
                                        headers: this.getHeaders((null == (l = i.request) ? void 0 : l.headers) || (null == (c = i.options) ? void 0 : c.headers)),
                                        body: (null == (d = i.request) ? void 0 : d.json) || (null == (u = i.options) ? void 0 : u.json),
                                        retries: t,
                                    },
                                };
                                void 0 !== i.response &&
                                    (r.response = {
                                        statusCode: i.response.statusCode,
                                        headers: this.getHeaders(i.response.headers),
                                        time: null == (v = i.response.timings) || null == (g = v.phases) ? void 0 : g.total,
                                    });
                                let x = this.getUrl((null == (m = i.request) ? void 0 : m.url) || (null == (p = i.options) ? void 0 : p.url));
                                this.logger.warn(
                                    '[Resource] Retry request '
                                        .concat((null == (_ = i.request) ? void 0 : _.method) || (null == (h = i.options) ? void 0 : h.method), ' ')
                                        .concat(x.origin, ' ')
                                        .concat(x.pathname)
                                        .concat(x.search),
                                    r,
                                );
                            } else
                                this.logger.warn('[Resource] Retry request (unknown)', {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                });
                        }),
                        (0, s._)(this, 'afterResponseHook', (e) => {
                            if ((e.statusCode || e.status) >= 200 && 299 >= (e.statusCode || e.status)) {
                                var t, i;
                                let s = this.getUrl(e.url);
                                this.logger.info(
                                    '[Resource] Request resolved '
                                        .concat(e.statusCode, ' ')
                                        .concat(e.request.method, ' ')
                                        .concat(s.origin, ' ')
                                        .concat(s.pathname)
                                        .concat(s.search),
                                    {
                                        request: { method: e.request.method, url: e.url, headers: this.getHeaders(e.request.headers), body: e.request.body },
                                        response: {
                                            statusCode: e.statusCode || e.status,
                                            headers: this.getHeaders(e.headers),
                                            time: null == (i = e.timings) || null == (t = i.phases) ? void 0 : t.total,
                                        },
                                    },
                                );
                            }
                            return e;
                        }),
                        (0, s._)(this, 'beforeErrorHook', (e) => {
                            let t = e.cause;
                            if (r(t)) {
                                var i, s, n, o, a, l, c, d, u, m, p, _, h, g;
                                let r = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (i = t.request) ? void 0 : i.method) || (null == (s = t.options) ? void 0 : s.method),
                                        url: (null == (n = t.request) ? void 0 : n.url) || (null == (o = t.options) ? void 0 : o.url),
                                        headers: this.getHeaders((null == (a = t.request) ? void 0 : a.headers) || (null == (l = t.options) ? void 0 : l.headers)),
                                        body: (null == (c = t.request) ? void 0 : c.json) || (null == (d = t.options) ? void 0 : d.json),
                                    },
                                };
                                void 0 !== t.response &&
                                    (r.response = {
                                        statusCode: t.response.statusCode || t.response.status,
                                        headers: this.getHeaders(t.response.headers),
                                        time: null == (g = t.response.timings) || null == (h = g.phases) ? void 0 : h.total,
                                    });
                                let v = this.getUrl((null == (u = t.request) ? void 0 : u.url) || (null == (m = t.options) ? void 0 : m.url));
                                this.logger.error(
                                    '[Resource] Request failed '
                                        .concat((null == (p = t.request) ? void 0 : p.method) || (null == (_ = t.options) ? void 0 : _.method), ' ')
                                        .concat(v.origin, ' ')
                                        .concat(v.pathname)
                                        .concat(v.search, ', reason: ')
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
            (i(35412), i(69629));
            let o = [
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
        66610: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => l });
            var s = i(53548),
                r = i(24709),
                n = i(88966),
                o = i(87138),
                a = i(46457);
            let l = (0, r.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, n.N)(),
                    t = (0, o.w)(),
                    i = (0, s.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, a.c)((e) => {
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
                        var o = r.map(e);
                        return (s.pop(), o);
                    }
                    var a = Object.keys(r).reduce(function (s, n) {
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
                    return (s.pop(), a);
                })(e);
            }
            ((e.exports = function (e, t, i) {
                return JSON.stringify(s(e), t, i);
            }),
                (e.exports.ensureProperties = s));
        },
        78212: (e) => {
            e.exports = {
                emptyContent: 'CollectionNonMusicEmpty_emptyContent__Km4Xo',
                emptyContentIcon: 'CollectionNonMusicEmpty_emptyContentIcon__ZHVte',
                emptyContentTitle: 'CollectionNonMusicEmpty_emptyContentTitle__PJIFd',
            };
        },
        79418: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => g });
            var s = i(88800),
                r = i(65724),
                n = i(61013),
                o = i(53548);
            let a = (e) => {
                    let { style: t, forwardRef: i, context: r, ...n } = e,
                        o = (null == r ? void 0 : r.listAriaLabel) || void 0,
                        a = (null == r ? void 0 : r.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: a, 'aria-label': o, style: { ...t }, ref: i, ...n });
                },
                l = (0, o.forwardRef)((e, t) => (0, s.jsx)(a, { forwardRef: t, ...e }));
            var c = i(16434),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: n, withHeader: o, withForceScroll: a, ...l } = e;
                    return (0, s.jsx)('div', {
                        className: (0, r.$)(d().scroller, { [d().scroller_withFooter]: n, [d().scroller_withHeader]: o, [d().scroller_withForceScroll]: a }),
                        style: { ...t },
                        ref: i,
                        ...l,
                        tabIndex: -1,
                    });
                },
                m = (0, o.forwardRef)((e, t) => (0, s.jsx)(u, { forwardRef: t, ...e }));
            var p = i(55482),
                _ = i(75151);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: r,
                            debounceDurationInMs: n = 100,
                            totalCount: a = 0,
                            shouldTriggerRangeChangedOn: l = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [m, h] = (0, o.useState)(null),
                        g = (0, o.useMemo)(
                            () =>
                                (0, p.A)((e) => {
                                    if ((null == r || r(e), l.length > 0 && h(e), t && i)) {
                                        let s = Math.floor(e.endIndex / t) + 1,
                                            r = Math.floor(e.startIndex / t);
                                        for (let e = r; e < s; e++) i(e);
                                    }
                                }, n),
                            [n, r, t, i, l],
                        );
                    (0, o.useEffect)(() => {
                        l.length > 0 && m && g(m);
                    }, l);
                    let v = (0, o.useMemo)(() => {
                        if (c)
                            return (0, p.A)((e) => {
                                c(e);
                            }, n);
                    }, [c, n]);
                    return (0, s.jsx)(_.sN, { ref: d, rangeChanged: g, totalCount: a, endReached: v, ...u });
                },
                g = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: a,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: p,
                            listClassName: _,
                            overscan: g = 700,
                            pageSize: v = 20,
                            totalCount: x,
                            totalRequests: y,
                            debounceDurationInMs: b,
                            initialItemCount: C,
                            minInitialItemCount: k = 20,
                            handleRef: N,
                            alwaysShowScrollbar: A = !1,
                            testId: E,
                            isMobileLayout: O = !1,
                            shouldTriggerRangeChangedOn: f,
                            ...j
                        } = e,
                        [T, S] = (0, o.useState)(!1),
                        I = (0, o.useMemo)(
                            () =>
                                (0, n.A)((e) => {
                                    S(e);
                                }, 100),
                            [],
                        ),
                        L = (0, o.useMemo)(() => {
                            var e, t;
                            return O
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : l,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : l,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, y, O]),
                        P = C ? Math.min(C, k) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, r.$)(d().root, { [d().root_scrolling]: T || A, [d().root_notScrolling]: !T && !A }, t),
                        'data-test-id': E,
                        children: [
                            O && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, s.jsx)(h, {
                                overscan: g,
                                components: L,
                                listClassName: _,
                                itemClassName: u,
                                isScrolling: I,
                                itemContent: p,
                                scrollerRef: N,
                                totalCount: x,
                                pageSize: v,
                                onPageHandler: a,
                                onRangeHandler: c,
                                debounceDurationInMs: b,
                                initialItemCount: P,
                                shouldTriggerRangeChangedOn: f,
                                ...j,
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
            i.d(t, { x: () => m });
            var s = i(88800),
                r = i(65724),
                n = i(2058),
                o = i(17392),
                a = i(96817),
                l = i(52300),
                c = i(29504),
                d = i(84218),
                u = i.n(d);
            let m = (e) => {
                let { className: t, isLiked: i, likesCount: d, handleLikeClick: m, ariaLabel: p } = e,
                    { formatNumber: _ } = (0, n.A)();
                return (0, s.jsx)(a.$, {
                    className: (0, r.$)(u().root, t),
                    onClick: m,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, s.jsx)(l.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': p,
                    'data-test-id': o.S7.CARD_LIKES,
                    children: (0, s.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: _(d) }),
                });
            };
        },
        86790: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => E });
            var s = i(88800),
                r = i(65724),
                n = i(84961),
                o = i(2058),
                a = i(30282),
                l = i(94144),
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
                p = i(99839);
            let _ = (e) => e(new Date(), (0, p.m)());
            var h = i(51611),
                g = i(72288),
                v = i(11006),
                x = i.n(v),
                y = i(17392),
                b = i(29504),
                C = i(91292);
            let k = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('div', {
                        className: (0, r.$)(x().copyrights, t),
                        'data-test-id': y.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, s.jsxs)(b.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: x().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, s.jsx)(C.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, r.$)(x().copyrightLink, x().yandexMusicLink),
                                        'data-test-id': y.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(b.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, s.jsx)(C.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: x().copyrightLink,
                                'data-test-id': y.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                N = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, s.jsxs)('div', {
                        className: x().links,
                        children: [
                            (0, s.jsx)('ol', {
                                className: x().list,
                                'data-test-id': y.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: r } = e;
                                    return (0, s.jsx)(
                                        'li',
                                        {
                                            className: x().item,
                                            children: (0, s.jsx)(C.N, { target: '_blank', href: r, className: x().link, 'data-test-id': y.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, s.jsx)(b.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: x().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': y.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                A = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('footer', {
                        className: (0, r.$)(x().root, x().important, t),
                        'data-test-id': y.S7.FOOTER,
                        children: [(0, s.jsx)(N, { links: i.links, disclaimer: i.disclaimer }), (0, s.jsx)(k, { data: i.copyrights })],
                    });
                };
            (0, n.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, g.g)(),
                    { formatDate: r, formatMessage: n } = (0, o.A)(),
                    { language: a } = (0, h.h)(),
                    l = u({ formatMessage: n, language: a, tld: i.tld, year: _(r) });
                return (0, s.jsx)(k, { className: t, data: l });
            });
            let E = (0, n.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: n, location: p, user: v } = (0, g.g)(),
                    { formatDate: y, formatMessage: b } = (0, o.A)(),
                    { isEnabled: C } = null != (t = (0, l.P)()) ? t : {},
                    { language: k } = (0, h.h)(),
                    N = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: s, language: r, tld: n, userRegion: o, year: a } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: s, language: r, userRegion: n } = e,
                                    o = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, s, r) },
                                    a = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, s, r) },
                                    l = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, s, r) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, s, r) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, s, r) },
                                    p = [o, l, u];
                                return (i && 'ru' === n && p.push(a), p.push(m), p);
                            })({ formatMessage: i, isWebApplication: s, language: r, tld: n, userRegion: o }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: o,
                            }),
                            copyrights: u({ formatMessage: i, language: r, tld: n, year: a }),
                        };
                    })({
                        checkExperiment: (e, t) => n.checkExperiment(e, t),
                        formatMessage: b,
                        isWebApplication: a.$3,
                        tld: p.tld,
                        language: k,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: _(y),
                    });
                return (0, s.jsx)(A, { className: (0, r.$)({ [x().root_withOffsetForDeeplink]: C }, i), data: N });
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
                        o = e || 'Internal error';
                    (super(o, n), (this.message = o), (this.code = i), (this.data = r), (this.stack = Error(o).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
            class r extends s {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(e, { code: t, ...i }), Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        94144: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r, P: () => n });
            var s = i(53548);
            let r = (0, s.createContext)(null),
                n = () => (0, s.useContext)(r);
        },
        95136: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 57328)), Promise.resolve().then(i.bind(i, 2622)));
        },
        95618: (e) => {
            e.exports = {
                root: 'CollectionNonMusicLikedPage_root__0e_hz',
                scrollContainer: 'CollectionNonMusicLikedPage_scrollContainer__OthtN',
                important: 'CollectionNonMusicLikedPage_important__MNJX3',
                footer: 'CollectionNonMusicLikedPage_footer__F_mtD',
                item: 'CollectionNonMusicLikedPage_item__Rb0yS',
                emptyBlock: 'CollectionNonMusicLikedPage_emptyBlock__WAdri',
                content: 'CollectionNonMusicLikedPage_content__9WDX5',
            };
        },
        95756: (e, t, i) => {
            'use strict';

            i.d(t, { x: () => Y });
            // for PulseSync WebHost: BEGIN imports for native addon context menu items
            var pulseSyncMenuJsx = i(88800),
                pulseSyncMenuItems = i(19934),
                pulseSyncMenuIcons = i(52300);
            // for PulseSync WebHost: END imports for native addon context menu items
            var s = i(88800),
                r = i(84961),
                n = i(53548),
                o = i(2058),
                a = i(97234),
                l = i(17392),
                c = i(18593),
                d = i(29993),
                u = i(19934),
                m = i(18143),
                p = i(29595),
                _ = i(74965),
                h = i(72288),
                g = i(66943),
                v = i(92966),
                x = i(56651),
                y = i(48749),
                b = i(22505),
                C = i(5407),
                k = i(64284),
                N = i(98427),
                A = i(57934),
                E = i(84384),
                O = i(9618),
                f = i(87762),
                j = i(95210),
                T = i(47964),
                S = i(46936),
                I = i(97956),
                L = i(98953),
                P = i(32721),
                R = i(18130),
                w = i(88969),
                M = i(52300);
            let D = (0, r.PA)((e) => {
                let { isFinished: t, onClick: i, className: r } = e,
                    { user: o } = (0, h.g)(),
                    a = (0, n.useMemo)(
                        () => (t ? (0, s.jsx)(w.A, { id: 'interface-actions.mark-all-non-listened' }) : (0, s.jsx)(w.A, { id: 'interface-actions.mark-all-listened' })),
                        [t],
                    );
                return (0, s.jsx)(u.Dr, {
                    className: r,
                    onClick: i,
                    icon: (0, s.jsx)(M.I, { variant: 'check', size: 'xxs' }),
                    disabled: !o.isAuthorized,
                    'data-test-id': l.S7.CONTEXT_MENU_MARK_ALL_LISTENED_BUTTON,
                    children: a,
                });
            });
            var U = i(93091),
                z = i(27817),
                H = i(74064),
                B = i(44988),
                F = i(15425),
                q = i(81066),
                W = i(18278),
                V = i(41918);
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
            let Y = (0, r.PA)((e) => {
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
                let { album: r, children: w, onOpenChange: M, open: Y, wrapperClassName: K, variant: X, ...$ } = e,
                    { shouldShowBuySubscriptionModal: G, showBuySubscriptionModal: Z } = (0, O.q)(),
                    {
                        settings: { isMobile: J },
                        trailer: Q,
                        user: ee,
                        experiments: et,
                        albumCPA: { isPlusCPAEnabled: ei, isPlusCPAPlayerBarEnabled: es },
                    } = (0, h.g)(),
                    er = (0, v.K)(r),
                    en = (0, x.A)(r),
                    eo = (0, A.F)(),
                    ea = ''.concat(k.U.ALBUM, '-').concat(r.id),
                    el = r.isNonMusic && X === V.z.PAGE,
                    ec = et.checkExperiment(I.z.WebEditorsFeatures, 'on'),
                    ed = !r.isNonMusic && !et.checkExperiment(I.z.WebNextProductWithoutRecommendation, 'on'),
                    { formatMessage: eu } = (0, o.A)(),
                    em = (0, C.P)(),
                    { pageAlbumId: ep } = (0, f.T)(),
                    e_ = ei({ pageAlbumId: ep, albumId: r.id, isNonMusic: r.isNonMusic }),
                    eh = es(r.id, r.isNonMusic),
                    eg = (() => {
                        let { user: e, album: t, fullscreenPlayer: i } = (0, h.g)(),
                            { notify: r } = (0, _.l)(),
                            { formatMessage: a } = (0, o.A)();
                        return (0, n.useCallback)(async () => {
                            var n, o;
                            if (!t) return;
                            let l = i.modal.isOpened ? p.u.FULLSCREEN_ERROR : p.u.ERROR;
                            return e.isAuthorized
                                ? (await t.setListeningFinishedStatus()) !== m.T.OK
                                    ? void r((0, s.jsx)(g.h, { error: a({ id: 'error-messages.error-during-action' }) }), { containerId: l })
                                    : void (null == (o = t.meta) || o.updateFinished(!(null == (n = t.meta) ? void 0 : n.listeningFinished)))
                                : void r((0, s.jsx)(g.h, { error: a({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l });
                        }, [a, r, t, e.isAuthorized, i.modal.isOpened]);
                    })(),
                    { shareLink: ev, pathname: ex } = (0, R.b)('/album/:albumId', { params: { albumId: r.id } }),
                    ey = (0, y.A)({ entityVariant: S.D.ALBUM, urlParams: { id: r.id } }),
                    { isPlaying: eb, togglePlay: eC } = (0, T.B)({
                        seeds: null != (i = null == r ? void 0 : r.seeds) ? i : [],
                        pageIdForFrom: N.b.RADIO,
                        blockIdForFrom: ea,
                        parentContextId: r.id,
                    }),
                    { utmLink: ek } = (0, E.f)({ blockId: k.U.ALBUM, contextType: c.K.Album, contextId: null == r ? void 0 : r.id }),
                    eN = (0, d.c)(() => {
                        if (G && ee.isAuthorized) return void Z();
                        !em() && (eb || eC());
                    }),
                    eA = (0, d.c)(() => {
                        if (G && !eh) return void Z();
                        em() || (Q.setUtmLink(ek), Q.openAlbumTrailer(r.id), eo(a.DomainObjectType.Album, String(r.id)));
                    });
                (0, j.N)(Y);
                let eE = (0, n.useMemo)(() => {
                        if (!J) return (0, s.jsx)(z.L, { onClick: en, isPinned: r.isPinned });
                    }, [r.isPinned, en, J]),
                    eO = (0, n.useMemo)(() => {
                        let e = !e_ && !ee.isAuthorized;
                        return r.isNonMusic
                            ? (0, s.jsx)(B.U, { onClick: er, isLiked: r.isLiked, albumType: r.type })
                            : (0, s.jsx)(U.T, { onClick: er, isLiked: r.isLiked, disabled: e });
                    }, [r.isLiked, r.type, er, r.isNonMusic, ee.isAuthorized, e_]),
                    ef = (0, n.useMemo)(() => {
                        var e;
                        if (!r.isNonMusic && (null == (e = r.trailer) ? void 0 : e.isAvailable)) return (0, s.jsx)(F.N, { onClick: eA, disabled: !r.isAvailable });
                    }, [r.isAvailable, null == (t = r.trailer) ? void 0 : t.isAvailable, r.isNonMusic, eA]),
                    ej = (0, n.useMemo)(() => {
                        if (ed) return (0, s.jsx)(q.C, { onClick: eN, disabled: !r.isAvailable || (eh && J), variant: P.I.ALBUM, onOpenMenuChange: M });
                    }, [r.isAvailable, eN, ed, M, eh, J]),
                    eT = { variant: L.Y.ALBUM, id: r.id, title: r.title, path: ex, albumArtistName: r.artistName, albumArtistId: r.artistId };
                // for PulseSync WebHost: BEGIN album context and native addon menu item rendering
                let pulseSyncInjectAlbumMenuItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('albumContextMenu', items, {
                        eventDetail: {
                            id: String(r.id),
                            url: ex,
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
                    isMobile: J,
                    offsetOptions: 10,
                    open: Y,
                    onOpenChange: M,
                    ariaLabel: eu({ id: 'interface-actions.context-menu' }),
                    wrapperClassName: K,
                    containerDataTestId: l.Kq.album.ALBUM_CONTEXT_MENU,
                    ...$,
                    // for PulseSync WebHost: BEGIN inject native addon items into the album context menu
                    children: pulseSyncInjectAlbumMenuItems([
                        J && (0, s.jsx)(W.C, { getDescriptionTexts: r.getDescriptionTexts, entityId: r.id }),
                        ec && (0, s.jsx)(b.d, { entityVariant: S.D.ARTIST, adminUrl: ey }),
                        eE,
                        eO,
                        ef,
                        ej,
                        // for PulseSync: BEGIN insert the album download-to-file menu action
                        (0, s.jsx)(pulseSyncDownloadAlbumToFile, { album: r }),
                        // for PulseSync: END insert the album download-to-file menu action
                        w,
                        el && (0, s.jsx)(D, { onClick: eg, isFinished: r.listeningFinished }),
                        (0, s.jsx)(H.H, { shareLink: ev, entityMeta: eT }),
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
        99890: (e, t, i) => {
            'use strict';
            i.d(t, { C8: () => n, UC: () => o, dM: () => a, uV: () => l });
            var s = i(89916),
                r = i(66363);
            let n = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                o = (e) => (e.uid ? 'authorized' : 'no-uid'),
                a = (e) => {
                    if (!(e instanceof s.m5) || !(0, r.Nh)(e.cause)) return 'unexpected';
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
                7191, 9904, 3078, 1833, 8194, 1191, 8655, 7599, 4475, 6706, 4771, 2662, 6904, 1898, 2058, 3578, 8628, 4378, 9780, 8283, 9332, 5151, 2837, 4732, 9087,
                3979, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 6374, 2088, 8979, 763, 2670, 7358,
            ],
            () => e((e.s = 95136)),
        ),
            (_N_E = e.O()));
    },
]);
