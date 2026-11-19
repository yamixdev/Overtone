(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6363, 7980],
    {
        1698: (e, t, s) => {
            'use strict';
            s.d(t, { e: () => r });
            var i = s(88800),
                a = s(37770);
            let r = (e) => {
                let {
                    isActive: t,
                    itemClassName: s,
                    round: r,
                    centered: l,
                    withInfo: n,
                    count: o = 10,
                    shimmerClassName: c,
                    linesCount: u,
                    'aria-label': d,
                    withSubcover: m,
                } = e;
                return Array.from(Array(o).keys()).map((e) =>
                    (0, i.jsx)(
                        a.V,
                        { isActive: t, linesCount: u, className: s, round: r, centered: l, withInfo: n, withSubcover: m, 'aria-label': d, shimmerClassName: c },
                        e,
                    ),
                );
            };
        },
        1884: (e) => {
            e.exports = {
                root: 'CollectionAlbumsPageHeader_root__87L_c',
                container: 'CollectionAlbumsPageHeader_container__96cIo',
                title: 'CollectionAlbumsPageHeader_title__1Ps8d',
                tabs: 'CollectionAlbumsPageHeader_tabs__P4GTY',
                tab: 'CollectionAlbumsPageHeader_tab__JSFBc',
                tabsShimmer: 'CollectionAlbumsPageHeader_tabsShimmer__fGlR0',
                tabShimmer: 'CollectionAlbumsPageHeader_tabShimmer__9hCc6',
                staticHeader: 'CollectionAlbumsPageHeader_staticHeader__YNfX4',
                important: 'CollectionAlbumsPageHeader_important__0dgC2',
                stickyHeader: 'CollectionAlbumsPageHeader_stickyHeader__L_1IS',
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
        4370: (e, t, s) => {
            'use strict';
            s.d(t, { Z: () => a });
            var i = s(67174);
            let a = {
                main: (0, i.u)('/'),
                chart: (0, i.u)('/chart'),
                chartPodcasts: (0, i.u)('/chart/podcasts'),
                collection: (0, i.u)('/collection'),
                collectionAlbums: (0, i.u)('/collection/albums'),
                collectionArtists: (0, i.u)('/collection/artists'),
                collectionClips: (0, i.u)('/collection/clips'),
                collectionDislikes: (0, i.u)('/collection/dislikes'),
                collectionKids: (0, i.u)('/collection/kids'),
                collectionKidsAlbums: (0, i.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, i.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, i.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, i.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, i.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, i.u)('/collection/multivibes'),
                collectionVibes: (0, i.u)('/collection/vibes'),
                collectionPlaylists: (0, i.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, i.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, i.u)('/collection/playlists/liked'),
                collectionShelf: (0, i.u)('/collection/shelf'),
                collectionShelfLiked: (0, i.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, i.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, i.u)('/collection/shelf/recently-played'),
                concerts: (0, i.u)('/concerts'),
                kids: (0, i.u)('/kids'),
                mixes: (0, i.u)('/mixes'),
                musicHistory: (0, i.u)('/music-history'),
                muzmarket: (0, i.u)('/muzmarket'),
                mymusic: (0, i.u)('/mymusic'),
                mymusicDownloadsTracks: (0, i.u)('/mymusic/downloads/tracks'),
                multivibe: (0, i.u)('/multivibe'),
                nonMusic: (0, i.u)('/non-music'),
                pay: (0, i.u)('/pay'),
                userSlides: (0, i.u)('/slides/user'),
                search: (0, i.u)('/search'),
                searchHistory: (0, i.u)('/search/history'),
                settings: (0, i.u)('/settings'),
                video: (0, i.u)('/video'),
            };
        },
        7628: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => _ });
            var i = s(88800),
                a = s(88969),
                r = s(58390),
                l = s(17392),
                n = s(29993),
                o = s(96817),
                c = s(29504),
                u = s(99890),
                d = s(4086),
                m = s(41928);
            let _ = (e) => {
                let { size: t = 'm', variant: s = 'default', color: _ = 'primary', withRipple: h = !0, buttonText: p, isBlock: b, key: g, className: A } = e,
                    v = (0, r.useRouter)(),
                    x = (0, m.N)().get(d.QG),
                    C = (0, n.c)(() => {
                        x.authorizationUrl && ((0, u.uV)({ stage: 'attempt-start', trigger: 'user' }), v.push(x.authorizationUrl));
                    });
                return (0, i.jsx)(
                    o.$,
                    {
                        onClick: C,
                        className: A,
                        isBlock: b,
                        color: _,
                        variant: s,
                        size: t,
                        radius: 'xxxl',
                        withRipple: h,
                        'data-test-id': l.S7.UNAUTHORIZED_BUTTON,
                        children: p || (0, i.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(a.A, { id: 'authorization.enter-button' }) }),
                    },
                    g,
                );
            };
        },
        10079: (e, t, s) => {
            'use strict';
            s.d(t, { a: () => Q });
            var i = s(88800),
                a = s(65724),
                r = s(84961),
                l = s(53548),
                n = s(2058),
                o = s(97234),
                c = s(91177),
                u = s(70598),
                d = s(46482),
                m = s(17392),
                _ = s(18593),
                h = s(61691),
                p = s(29993),
                b = s(79070),
                g = s(29832),
                A = s(52300),
                v = s(7555),
                x = s(29504),
                C = s(60757),
                N = s(29008),
                y = s(92966),
                E = s(56651),
                k = s(13946),
                L = s(43443),
                f = s(5407),
                I = s(57934),
                O = s(84384),
                S = s(4795),
                j = s(87762),
                P = s(32414),
                T = s(78940),
                M = s(55693),
                R = s(39079),
                U = s(72288),
                w = s(52726),
                D = s(86298),
                B = s(81877),
                H = s(90224),
                z = s(49738),
                F = s(91292),
                K = s(56862),
                q = s(16704),
                G = s(56446),
                Y = s(36207),
                V = s(41918);
            let X = { mainAxis: -26, alignmentAxis: -16 },
                $ = { isEnabled: !0, width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' };
            var W = s(95756),
                Z = s(28304),
                J = s.n(Z);
            let Q = (0, r.PA)((e) => {
                let {
                        className: t,
                        children: s,
                        album: r,
                        contentLinesCount: Z,
                        withLikesCount: Q,
                        withChart: ee,
                        withAddition: et = !0,
                        withArtistName: es = !0,
                        releaseDateFormatter: ei = P.s,
                    } = e,
                    ea = (0, c.D)(),
                    {
                        user: er,
                        trailer: el,
                        settings: { isMobile: en },
                        albumCPA: { isPlusCPAEnabled: eo },
                        paywall: { modal: ec },
                    } = (0, U.g)(),
                    { from: eu, utmLink: ed } = (0, O.f)({ contextId: r.id, contextType: _.K.Album, utmForPageIds: r.artistIds }),
                    { formatMessage: em, formatDate: e_ } = (0, n.A)(),
                    { sendLikeSearchFeedback: eh, sendNavigateSearchFeedback: ep, sendPlaySearchFeedback: eb } = (0, M.z)(),
                    [eg, eA] = (0, l.useState)(!1),
                    [ev, ex] = (0, l.useState)(!1),
                    [eC, eN] = (0, l.useState)(!1),
                    ey = (0, u.S)(),
                    eE = (0, d.g)(),
                    ek = (0, y.K)(r),
                    eL = (0, E.A)(r),
                    ef = (0, T.Z)(r.url),
                    [eI, eO] = (0, l.useState)(!1),
                    eS = (0, I.F)(),
                    [ej, eP] = (0, l.useState)(!1),
                    eT = (0, f.P)(),
                    { pageAlbumId: eM } = (0, j.T)(),
                    eR = eo({ pageAlbumId: eM, albumId: r.id, isNonMusic: r.isNonMusic }),
                    eU = (0, S.N)(),
                    ew = r.isAvailableOnlyForPlus && !r.isUnsafeLegal && !r.isLegalRejected,
                    eD = ew && !en,
                    eB = r.isAvailable || eD || r.isAudiobook,
                    eH = (0, p.c)((e) => {
                        if ((e.stopPropagation(), eT())) return void e.preventDefault();
                        (el.openAlbumTrailer(r.id), eS(o.DomainObjectType.Album, String(r.id)));
                    }),
                    ez = r.type === h._.SINGLE ? em({ id: 'entity-names.single' }) : void 0,
                    eF = r.releaseDate ? e_(r.releaseDate, ei()) : void 0,
                    eK = ((e) => {
                        let t = e.filter((e) => !!e).join(' \xb7 ');
                        return 0 === t.length ? null : t;
                    })([null != eF ? eF : r.year, ez]),
                    eq = (0, N.r)(r.type),
                    eG = (0, l.useMemo)(() => {
                        var e;
                        let t = r.isLiked ? em({ id: 'entity-names.has-your-like' }) : '';
                        return ''
                            .concat(eq, ' ')
                            .concat(r.title, ' ')
                            .concat(null != (e = r.version) ? e : '', ' ')
                            .concat(t);
                    }, [eq, em, r.title, r.isLiked, r.version]),
                    { isPlaying: eY, togglePlay: eV } = (0, R.D)({
                        playContextParams: { contextData: { type: _.K.Album, meta: { id: r.id }, from: eu, utmLink: ed }, loadContextMeta: !0 },
                    }),
                    eX = (0, C.c)({ album: r, callback: ef }),
                    e$ = (0, C.c)({ album: r, callback: eV }),
                    eW = (0, p.c)((e) => {
                        (ey({ to: o.AppScreen.AlbumScreen }), null == ep || ep(), eX(e));
                    }),
                    eZ = (0, p.c)(() => {
                        if (!eT()) {
                            if (eU) return void ec.open();
                            (ev || eY || (ex(!0), null == eb || eb()), e$(), eY || eE());
                        }
                    }),
                    eJ = (0, p.c)(() => {
                        (eg || r.isLiked || (eA(!0), null == eh || eh()), ek());
                    }),
                    eQ = (0, p.c)((e) => {
                        (eN(e), eO(e));
                    }),
                    e0 = (0, l.useMemo)(() => {
                        var e;
                        return (0, i.jsxs)(x.HL, {
                            className: (0, a.$)(J().title, { [J().title_withVersion]: r.version, [J().title_withChart]: ee }),
                            variant: 'div',
                            type: 'entity',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 2,
                            'aria-hidden': !0,
                            'data-test-id': m.Kq.album.ALBUM_TITLE,
                            children: [
                                (0, i.jsx)(F.N, {
                                    'aria-label': ''.concat(r.title, ' ').concat(null != (e = r.version) ? e : ''),
                                    className: J().titleLink,
                                    href: r.url,
                                    tabIndex: -1,
                                    onClick: eW,
                                    'data-test-id': m.Kq.album.ALBUM_TITLE_LINK,
                                    children: r.title,
                                }),
                                r.version &&
                                    (0, i.jsx)(x.HL, {
                                        className: J().version,
                                        variant: 'span',
                                        'data-test-id': m.Kq.album.ALBUM_VERSION,
                                        children: ' '.concat(r.version),
                                    }),
                            ],
                        });
                    }, [r.title, r.url, r.version, eW, ee]),
                    e8 = (0, l.useMemo)(() => {
                        var e;
                        return (0, i.jsx)(F.N, {
                            className: J().srTitleLink,
                            href: r.url,
                            onClick: eW,
                            children: ''.concat(r.title, ' ').concat(null != (e = r.version) ? e : ''),
                        });
                    }, [r.title, r.url, r.version, eW]),
                    e9 = (0, l.useMemo)(() => {
                        var e;
                        if (null == r || null == (e = r.trailer) ? void 0 : e.isAvailable)
                            return (0, i.jsx)(
                                Y.n,
                                {
                                    children: (0, i.jsx)(
                                        G.k,
                                        { className: (0, a.$)(J().trailerButton, J().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eH },
                                        r.getKey('TrailerButton'),
                                    ),
                                },
                                r.getKey('AlbumCardTrailerTooltip'),
                            );
                    }, [r, eH]),
                    e1 = (0, l.useMemo)(
                        () =>
                            (0, i.jsx)(
                                W.x,
                                {
                                    album: r,
                                    onOpenChange: eQ,
                                    open: eC,
                                    className: (0, a.$)(J().menuButton, J().control),
                                    icon: (0, i.jsx)(A.I, { size: 'xxs', variant: 'more' }),
                                    size: 's',
                                    variant: V.z.CARD,
                                    'data-test-id': m.Kq.album.ALBUM_CONTEXT_MENU_BUTTON,
                                },
                                r.getKey('AlbumContextMenu'),
                            ),
                        [r, eQ, eC],
                    ),
                    e4 = (0, l.useCallback)(
                        () =>
                            (0, i.jsx)(
                                q.D,
                                {
                                    className: (0, a.$)(J().playButton, J().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                    onClick: eZ,
                                    isPlaying: eY,
                                    disabled: eD,
                                },
                                r.getKey('PlayButton'),
                            ),
                        [eD, r, eY, eZ],
                    ),
                    e7 = (0, l.useMemo)(
                        () =>
                            eD
                                ? (0, i.jsx)(w.S, {
                                      className: J().buyPlusPopover,
                                      buttonText: em({ id: 'interface-actions.more-details' }),
                                      isNested: !0,
                                      placement: 'top-start',
                                      isOpened: ej,
                                      onOpenChange: eP,
                                      textVariant: 'album',
                                      albumTextVariant: r.type,
                                      arrowProps: $,
                                      offsetOptions: X,
                                      renderChildren: e4,
                                  })
                                : e4(),
                        [eD, ej, eP, em, e4, r.type],
                    ),
                    e2 = (0, b.L)(() => {
                        if (eD) return;
                        let e = !eR && !er.isAuthorized;
                        return (0, i.jsx)(
                            z.c,
                            {
                                className: (0, a.$)(J().likeButton, J().control),
                                isLiked: r.isLiked,
                                onClick: eJ,
                                variant: 'default',
                                size: 's',
                                iconSize: 'xxs',
                                disabled: e,
                            },
                            r.getKey('LikeButton'),
                        );
                    }),
                    e6 = (0, l.useMemo)(() => {
                        if (!eD)
                            return (0, i.jsx)(
                                K.O,
                                { onClick: eL, isPinned: r.isPinned, className: (0, a.$)(J().pinButton, J().control), withRipple: !1, isDisabled: eD },
                                r.getKey('PinButton'),
                            );
                    }, [r, eD, eL]),
                    e3 = (0, l.useMemo)(() => {
                        if (r.isAvailable || eD)
                            return (0, i.jsx)(g.hg, {
                                isVisible: eC || eI || ej,
                                className: J().controls,
                                playControl: e7,
                                likeControl: e2,
                                menuControl: e1,
                                pinControl: e6,
                                trailerControl: e9,
                            });
                    }, [r, eC, eI, e1, e9, ej, e7, e2, e6, eD]),
                    e5 = (0, l.useMemo)(
                        () =>
                            (0, i.jsx)(v.t, {
                                className: J().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': m.Kq.album.ALBUM_CARD,
                                children: (0, i.jsxs)('div', {
                                    className: J().coverBlock,
                                    onClick: eW,
                                    children: [
                                        (0, i.jsx)(B.B, {
                                            className: J().image,
                                            src: r.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eG,
                                            withAvatarReplace: !0,
                                            isAvailable: eB,
                                            'aria-hidden': !0,
                                        }),
                                        ew && (0, i.jsx)(A.I, { variant: 'plusBadge', className: J().plusBadge }),
                                        e3,
                                    ],
                                }),
                            }),
                        [eW, r.coverUri, eB, eG, e3, ew],
                    );
                return (0, i.jsxs)(g.MN, {
                    ref: ea,
                    className: (0, a.$)(J().root, { [J().root_withChart]: ee }, t),
                    'aria-label': eG,
                    explicitMarkComponent:
                        r.explicitDisclaimer &&
                        (0, i.jsx)(
                            H.N,
                            { className: J().explicitMark, getDescriptionTexts: r.getDescriptionTexts, variant: r.explicitDisclaimer },
                            r.getKey('AlbumCardExplicitMarkIcon'),
                        ),
                    title: e0,
                    srTitle: e8,
                    contentLinesCount: Z,
                    view: e5,
                    description:
                        es &&
                        (0, i.jsx)(
                            k.i,
                            { className: J().artists, artists: r.artists, lineClamp: 1, linkClassName: J().artistLink, captionSize: 's' },
                            r.getKey('description'),
                        ),
                    chart:
                        ee &&
                        r.chart &&
                        (0, i.jsx)(L.t, { withIcon: !0, className: J().chart, position: r.chart.position, progress: r.chart.progress }, r.getKey('chart')),
                    'data-test-id': m.Kq.album.ALBUM_ITEM,
                    children: [
                        et &&
                            eK &&
                            (0, i.jsx)(x.HL, { className: J().addition, variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: eK }),
                        Q &&
                            !!r.actualLikesCount &&
                            (0, i.jsx)(D.x, {
                                className: J().likeTextButton,
                                ariaLabel: em({ id: 'entity-names.likes-counter' }, { counter: r.actualLikesCount }),
                                likesCount: r.actualLikesCount,
                                isLiked: r.isLiked,
                                handleLikeClick: ek,
                            }),
                        s,
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
        13607: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { _: () => i }),
                (function (e) {
                    ((e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new'));
                })(i || (i = {})));
        },
        14912: (e, t, s) => {
            'use strict';
            s.d(t, { X: () => a });
            var i = s(53548);
            let a = () =>
                (0, i.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
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
        17017: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { Z: () => i }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(i || (i = {})));
        },
        17944: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => i });
            var i = (function (e) {
                return ((e.LIKED_ALBUMS = 'liked'), (e.UPCOMING_ALBUMS = 'upcoming'), e);
            })({});
        },
        19840: (e, t, s) => {
            'use strict';
            (s.d(t, { G: () => a }), s(46606));
            var i = s(91136);
            class a extends i.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, a.prototype));
                }
            }
        },
        25596: (e, t, s) => {
            'use strict';
            s.d(t, { P: () => k });
            var i = s(88800),
                a = s(96706),
                r = s(53548),
                l = s(2058),
                n = s(97804),
                o = s(29595),
                c = s(74965),
                u = s(72288),
                d = s(66943),
                m = s(65724),
                _ = s(88969),
                h = s(17392),
                p = s(73170),
                b = s(29504),
                g = s(17944),
                A = s(81877),
                v = s(91292),
                x = s(59304),
                C = s(59357),
                N = s.n(C);
            let y = (e) => {
                    let { closeToast: t, albumTitle: s, coverUri: a, isPresave: n, entityTitle: o, className: c } = e,
                        { formatMessage: u } = (0, l.A)(),
                        d = (0, r.useMemo)(
                            () => (n ? (0, i.jsx)(_.A, { id: 'notifications-info.added-to' }) : (0, i.jsx)(_.A, { id: 'notifications-info.removed-from' })),
                            [n],
                        ),
                        C = (0, r.useMemo)(
                            () => (n ? (0, i.jsx)(_.A, { id: 'notifications-info.to-collection' }) : (0, i.jsx)(_.A, { id: 'notifications-info.from-collection' })),
                            [n],
                        ),
                        y = (0, r.useMemo)(
                            () =>
                                n
                                    ? u({ id: 'notifications-info.album-added-to-collection-aria-label' }, { entity: o })
                                    : u({ id: 'notifications-info.album-removed-from-collection-aria-label' }, { entity: o }),
                            [n, o, u],
                        ),
                        E = (0, r.useMemo)(
                            () =>
                                (0, i.jsxs)(b.HL, {
                                    className: N().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    'data-test-id': h.S7.BASE_NOTIFICATION_PRESAVE_TEXT,
                                    'aria-hidden': !0,
                                    children: [
                                        (0, i.jsx)(_.A, { id: 'entity-names.album' }),
                                        '\xa0',
                                        (0, i.jsxs)(b.HL, { className: N().title, variant: 'span', type: 'controls', size: 'm', lineClamp: 1, children: [o, '\xa0'] }),
                                        d,
                                        '\xa0',
                                        (0, i.jsx)(v.N, {
                                            className: N().link,
                                            href: '/collection/albums?tab='.concat(g.H.UPCOMING_ALBUMS),
                                            title: String(C),
                                            children: (0, i.jsx)(b.HL, { variant: 'span', type: 'controls', size: 'm', lineClamp: 1, children: C }),
                                        }),
                                    ],
                                }),
                            [o, d, C],
                        );
                    return (0, i.jsx)(x.$, {
                        className: (0, m.$)(N().root, c),
                        message: (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(p.q, { children: (0, i.jsx)('p', { role: 'alert', 'aria-label': y }) }), E] }),
                        cover: (0, i.jsx)(A.B, { className: N().image, src: a, size: 100, fit: 'cover', alt: s, withAvatarReplace: !0 }),
                        closeToast: t,
                        coverRadius: 's',
                    });
                },
                E = (e) => {
                    let { upcomingAlbum: t, closeToast: s } = e;
                    return (0, i.jsx)(y, { closeToast: s, albumTitle: t.title, coverUri: t.coverUri, entityTitle: t.title, isPresave: t.isPresave });
                },
                k = (e) => {
                    let { user: t } = (0, u.g)(),
                        { notify: s } = (0, c.l)(),
                        [m, _] = (0, r.useState)(!1),
                        { formatMessage: h } = (0, l.A)();
                    return (0, r.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void s((0, i.jsx)(d.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (m) return;
                        let r = { ...(0, a.HO)(e), isPresave: !e.isPresave };
                        _(!0);
                        let l = await e.toggleLike();
                        (_(!1),
                            l === n.J.OK
                                ? s((0, i.jsx)(E, { upcomingAlbum: r }), { containerId: o.u.INFO })
                                : s((0, i.jsx)(d.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                    }, [t.isAuthorized, m, e, s, h]);
                };
        },
        25883: (e, t, s) => {
            'use strict';
            s.d(t, { l: () => n });
            var i = s(88800),
                a = s(84961),
                r = s(33719),
                l = s(5048);
            let n = (0, a.PA)((e) => {
                let { album: t, closeToast: s } = e,
                    a = (0, l.b)(t.type);
                return (0, i.jsx)(r.k, {
                    closeToast: s,
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
        29008: (e, t, s) => {
            'use strict';
            s.d(t, { c: () => l, r: () => n });
            var i = s(53548),
                a = s(2058),
                r = s(61691),
                l = (function (e) {
                    return ((e.PIN = 'pin'), e);
                })({});
            let n = (e, t) => {
                let { formatMessage: s } = (0, a.A)();
                return (0, i.useMemo)(() => {
                    switch (e) {
                        case r._.SINGLE:
                            return s({ id: 'entity-names.single' });
                        case r._.PODCAST:
                            return s({ id: 'entity-names.podcast' });
                        case r._.AUDIOBOOK:
                            if ('pin' === t) return s({ id: 'entity-names.book' });
                            return s({ id: 'entity-names.audio' });
                        case r._.FAIRY_TALE:
                            return s({ id: 'entity-names.fairy-tale' });
                        default:
                            return s({ id: 'entity-names.album' });
                    }
                }, [e, s, t]);
            };
        },
        31108: (e, t, s) => {
            'use strict';
            s.d(t, { M: () => L });
            var i = s(88800),
                a = s(65724),
                r = s(84961),
                l = s(53548),
                n = s(2058),
                o = s(88969),
                c = s(91177),
                u = s(17392),
                d = s(79070),
                m = s(96817),
                _ = s(29832),
                h = s(52300),
                p = s(7555),
                b = s(29504),
                g = s(25596),
                A = s(13946),
                v = s(32414),
                x = s(72288),
                C = s(81877),
                N = s(90224),
                y = s(49738),
                E = s(43708),
                k = s.n(E);
            let L = (0, r.PA)((e) => {
                let { className: t, children: s, upcomingAlbum: r, contentLinesCount: E } = e,
                    { user: L } = (0, x.g)(),
                    f = (0, c.D)(),
                    { formatMessage: I, formatDate: O } = (0, n.A)(),
                    S = (0, g.P)(r),
                    j = r.getKey('PlayButton'),
                    P = r.getKey('LikeButton'),
                    T = (0, l.useMemo)(() => {
                        let e = I({ id: 'entity-names.upcoming-album-name' }, { upcomingAlbumName: r.title }),
                            t = r.isPresave ? I({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [I, r.title, r.isPresave]),
                    M = (0, d.L)(() =>
                        (0, i.jsxs)(p.t, {
                            className: k().cover,
                            radius: 's',
                            withShadow: !0,
                            children: [
                                (0, i.jsx)(C.B, { className: k().image, src: r.coverUri, size: 200, fit: 'cover', alt: T, withAvatarReplace: !0 }),
                                (0, i.jsx)(_.hg, {
                                    className: k().controls,
                                    playControl: (0, i.jsx)(
                                        m.$,
                                        {
                                            className: k().lockButton,
                                            disabled: !0,
                                            radius: 'xxxl',
                                            variant: 'default',
                                            size: 's',
                                            icon: (0, i.jsx)(h.I, { variant: 'lock', size: 'xxs', className: k().lockIcon }),
                                            'aria-label': I({ id: 'entity-names.upcoming-album-play-disabled' }),
                                            'data-test-id': u.Kq.album.UPCOMING_ALBUM_LOCK_BUTTON,
                                        },
                                        j,
                                    ),
                                    likeControl: (0, i.jsx)(
                                        y.c,
                                        {
                                            className: (0, a.$)(k().control, k().presaveButton),
                                            isLiked: r.isPresave,
                                            onClick: S,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !L.isAuthorized,
                                        },
                                        P,
                                    ),
                                }),
                            ],
                        }),
                    );
                return (0, i.jsxs)(_.MN, {
                    ref: f,
                    className: (0, a.$)(k().root, t),
                    'aria-label': T,
                    explicitMarkComponent: r.explicitDisclaimer && (0, i.jsx)(N.N, { getDescriptionTexts: r.getDescriptionTexts, variant: r.explicitDisclaimer }),
                    title: (0, i.jsx)(b.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': u.Kq.album.UPCOMING_ALBUM_TITLE,
                        children: r.title,
                    }),
                    contentLinesCount: E,
                    view: M,
                    description: (0, i.jsx)(A.i, { className: k().artists, artists: r.artists, lineClamp: 1, linkClassName: k().artistLink, captionSize: 's' }),
                    'data-test-id': u.Kq.album.UPCOMING_ALBUM_CARD,
                    children: [
                        (0, i.jsx)(b.HL, {
                            className: k().releaseDate,
                            variant: 'div',
                            type: 'entity',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 1,
                            'data-test-id': u.Kq.album.UPCOMING_ALBUM_RELEASE_DATE,
                            children: (0, i.jsx)(o.A, { id: 'entity-names.upcoming-album-date', values: { releaseDate: O(r.releaseDate, (0, v.s)()) } }),
                        }),
                        s,
                    ],
                });
            });
        },
        32414: (e, t, s) => {
            'use strict';
            s.d(t, { s: () => i });
            let i = () => ({ year: 'numeric', month: 'long', day: 'numeric' });
        },
        34303: (e, t, s) => {
            'use strict';
            s.d(t, { K: () => i });
            var i = (function (e) {
                return (
                    (e.TAB = 'tab'),
                    (e.URL = 'url'),
                    (e.ACTIVE_TAB = 'activeTab'),
                    (e.BLOCK = 'block'),
                    (e.IDS = 'ids'),
                    (e.ACTIVE_INDEX = 'activeIndex'),
                    (e.SORT = 'sort'),
                    (e.OPEN_TRAILER = 'openTrailer'),
                    (e.DEEPLINK = 'deeplink'),
                    (e.SEEDS = 'seeds'),
                    (e.STATION_ID = 'stationId'),
                    (e.OPEN_PLAYER = 'openPlayer'),
                    (e.SCREEN = 'screen'),
                    (e.CLID = 'clid'),
                    (e.UTM_SOURCE = 'utm_source'),
                    (e.YCLID = 'yclid'),
                    (e.UTM_CAMPAIGN = 'utm_campaign'),
                    (e.UTM_MEDIUM = 'utm_medium'),
                    (e.REF_ID = 'ref_id'),
                    (e.LUMEN_AWAKE_PARAM = 'shouldAwakeLumen'),
                    (e.BEST_PLAY = 'bestPlay'),
                    (e.TEXT = 'text'),
                    e
                );
            })({});
        },
        36978: (e) => {
            e.exports = {
                root: 'CollectionAlbumsPageEmpty_root__7yn1F',
                icon: 'CollectionAlbumsPageEmpty_icon__XFf9x',
                title: 'CollectionAlbumsPageEmpty_title__hMQde',
                text: 'CollectionAlbumsPageEmpty_text__jp_lj',
            };
        },
        41918: (e, t, s) => {
            'use strict';
            s.d(t, { z: () => i });
            var i = (function (e) {
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
        43443: (e, t, s) => {
            'use strict';
            s.d(t, { t: () => h });
            var i = s(88800),
                a = s(65724),
                r = s(84961),
                l = s(53548),
                n = s(2058),
                o = s(17392),
                c = s(13607),
                u = s(52300),
                d = s(29504),
                m = s(3099),
                _ = s.n(m);
            let h = (0, r.PA)((e) => {
                let {
                        progress: t,
                        withIcon: s,
                        withCrownIcon: r,
                        position: m,
                        weight: h = 'normal',
                        isDisliked: p,
                        isDisabled: b,
                        className: g,
                        positionClassName: A,
                    } = e,
                    { formatMessage: v } = (0, n.A)(),
                    x = t || s,
                    C = (0, l.useMemo)(() => {
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
                    N = (0, l.useMemo)(() => {
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
                    y = r ? 'crown' : t;
                return (0, i.jsxs)('div', {
                    className: (0, a.$)(_().root, g),
                    'data-test-id': o.OA.chart.CHART_PROGRESS,
                    children: [
                        (0, i.jsx)(d.HL, {
                            variant: 'div',
                            weight: h,
                            type: 'entity',
                            size: 'm',
                            className: (0, a.$)(_().position, A, { [_().position_disliked]: p, [_().position_disabled]: b }),
                            'data-test-id': o.OA.chart.CHART_PROGRESS_POSITION,
                            children: m,
                        }),
                        x &&
                            (0, i.jsx)(u.I, {
                                variant: C,
                                size: 'xxs',
                                'aria-label': N,
                                className: (0, a.$)(_().progress, _()['progress_'.concat(y)], { [_().progress_disliked]: p, [_().progress_disabled]: b }),
                                'data-test-id': o.OA.chart.CHART_PROGRESS_ICON,
                            }),
                    ],
                });
            });
        },
        43708: (e) => {
            e.exports = {
                root: 'UpcomingAlbumCard_root__lSZ5l',
                controls: 'UpcomingAlbumCard_controls__fQ50f',
                cover: 'UpcomingAlbumCard_cover__qvU1m',
                image: 'UpcomingAlbumCard_image__WKtGR',
                releaseDate: 'UpcomingAlbumCard_releaseDate__EvDzB',
                artists: 'UpcomingAlbumCard_artists__Jp1OE',
                artistLink: 'UpcomingAlbumCard_artistLink__RSqXw',
                control: 'UpcomingAlbumCard_control__pSMdI',
                presaveButton: 'UpcomingAlbumCard_presaveButton__ixwy_',
                lockButton: 'UpcomingAlbumCard_lockButton__9_qyp',
                lockIcon: 'UpcomingAlbumCard_lockIcon__wtvkP',
            };
        },
        44937: (e) => {
            e.exports = { root: 'CollectionAlbumsPage_root__qMtcC' };
        },
        46606: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { X: () => i }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(i || (i = {})));
        },
        56651: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => m });
            var i = s(88800),
                a = s(96706),
                r = s(53548),
                l = s(2058),
                n = s(29595),
                o = s(74965),
                c = s(72288),
                u = s(66943),
                d = s(25883);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: s } = (0, o.l)(),
                    { formatMessage: m } = (0, l.A)(),
                    [_, h] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!t.isAuthorized) return void s((0, i.jsx)(u.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (_) return;
                    let r = { ...(0, a.HO)(e), url: e.url, isPinned: !e.isPinned };
                    h(!0);
                    let l = await e.togglePin();
                    (h(!1),
                        l
                            ? s((0, i.jsx)(d.l, { album: r }), { containerId: n.u.INFO })
                            : s((0, i.jsx)(u.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [e, m, s, _, t.isAuthorized]);
            };
        },
        57328: (e, t, s) => {
            'use strict';
            s.d(t, { WithAuth: () => p });
            var i = s(88800),
                a = s(84961),
                r = s(58390),
                l = s(65724),
                n = s(88969),
                o = s(29504),
                c = s(7628),
                u = s(42674),
                d = s.n(u);
            let m = (0, a.PA)(() =>
                (0, i.jsxs)('div', {
                    className: d().root,
                    children: [
                        (0, i.jsx)(o.DZ, {
                            className: (0, l.$)(d().title, d().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, i.jsx)(n.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, i.jsx)(o.HL, {
                            className: (0, l.$)(d().text, d().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, i.jsx)(n.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, i.jsx)(c.H, { size: 'l', className: d().button }),
                    ],
                }),
            );
            var _ = s(4370),
                h = s(72288);
            let p = (0, a.PA)((e) => {
                let { children: t, withRedirectToMainPage: s } = e,
                    { user: a } = (0, h.g)();
                return a.isAuthorized ? t : (s && (0, r.redirect)(_.Z.main.href), (0, i.jsx)(m, {}));
            });
        },
        59357: (e) => {
            e.exports = {
                link: 'BaseNotificationPresave_link__4uQhM',
                title: 'BaseNotificationPresave_title__bEloI',
                text: 'BaseNotificationPresave_text__3Kv9j',
                image: 'BaseNotificationPresave_image__Hb7ve',
            };
        },
        59724: (e, t, s) => {
            'use strict';
            s.d(t, { a: () => d });
            var i = s(88800),
                a = s(53548),
                r = s(8383),
                l = s(24709),
                n = s(88966);
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
                    let s =
                        o.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                s = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                i = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                s();
                                            } finally {
                                                ((t = !1), e.length > 0 && i());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (s(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), i());
                                },
                            };
                        })();
                    (o.set(t, s), (this.queue = s));
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
            var u = s(97234);
            let d = (0, l.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let s = (0, n.N)(),
                        l = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === u.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [o, d] = (0, a.useState)(() => {
                            let e = new c(s.createScreenSession().screenViewUuid, s);
                            return { client: s, input: t, isReady: l, scope: l ? s.createScreenScope(t, e) : null, session: e };
                        });
                    if (o.client !== s || o.input.pageId !== t.pageId || o.input.skeletonId !== t.skeletonId) {
                        let a = new c(s.createScreenSession().screenViewUuid, s),
                            n = { client: s, input: t, isReady: l, scope: l ? s.createScreenScope(t, a) : null, session: a };
                        return (d(n), (0, i.jsx)(r.k, { value: n, children: e }));
                    }
                    if (
                        o.isReady !== l ||
                        o.input.mainObjectType !== t.mainObjectType ||
                        o.input.mainObjectId !== t.mainObjectId ||
                        o.input.displayReasonId !== t.displayReasonId ||
                        o.input.pageIdForFrom !== t.pageIdForFrom ||
                        o.input.pagePlacement !== t.pagePlacement ||
                        o.input.pageStyle !== t.pageStyle
                    ) {
                        let a = { ...o, input: t, isReady: l, scope: l ? s.createScreenScope(t, o.session) : null };
                        return (d(a), (0, i.jsx)(r.k, { value: a, children: e }));
                    }
                    return (0, i.jsx)(r.k, { value: o, children: e });
                },
            );
        },
        60266: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => l });
            var i = s(88800);
            s(30282);
            var a = s(11006),
                r = s.n(a);
            let l = (e) => {
                let { children: t } = e;
                return (0, i.jsx)('footer', { className: r().empty });
            };
        },
        60757: (e, t, s) => {
            'use strict';
            s.d(t, { c: () => a });
            var i = s(58217);
            let a = (e) => {
                let { album: t, callback: s, shouldHistoryBack: a } = e;
                return (0, i.l)({ entity: t, callback: s, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        62293: (e, t, s) => {
            'use strict';
            s.d(t, { v: () => a });
            var i = s(97956);
            let a = (e) => {
                let { checkExperiment: t, getDisclaimerContent: s, getExplicitContent: a, userRegion: r } = e;
                return 'ru' === r && t(i.z.WebNextFooterDisclaimer, 'on') ? s() : a();
            };
        },
        66363: (e, t, s) => {
            'use strict';
            s.d(t, { NS: () => r, Nh: () => a, xW: () => l });
            var i = s(9519);
            let a = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
            class r {
                getHeaders(e) {
                    return e instanceof Headers ? Object.fromEntries(e.entries()) : e;
                }
                getUrl(e) {
                    return new URL(e || 'https://unknown');
                }
                constructor(e) {
                    ((0, i._)(this, 'logger', void 0),
                        (0, i._)(this, 'beforeRequestHook', (e) => {
                            let t = this.getUrl(e.url);
                            this.logger.info('[Resource] Request started '.concat(e.method, ' ').concat(t.origin, ' ').concat(t.pathname).concat(t.search), {
                                request: { method: e.method, url: e.url, headers: this.getHeaders(e.headers), body: e.json },
                            });
                        }),
                        (0, i._)(this, 'beforeRetryHook', (e, t) => {
                            let s = e.cause;
                            if (a(s)) {
                                var i, r, l, n, o, c, u, d, m, _, h, p, b, g;
                                let a = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (i = s.request) ? void 0 : i.method) || (null == (r = s.options) ? void 0 : r.method),
                                        url: (null == (l = s.request) ? void 0 : l.url) || (null == (n = s.options) ? void 0 : n.url),
                                        headers: this.getHeaders((null == (o = s.request) ? void 0 : o.headers) || (null == (c = s.options) ? void 0 : c.headers)),
                                        body: (null == (u = s.request) ? void 0 : u.json) || (null == (d = s.options) ? void 0 : d.json),
                                        retries: t,
                                    },
                                };
                                void 0 !== s.response &&
                                    (a.response = {
                                        statusCode: s.response.statusCode,
                                        headers: this.getHeaders(s.response.headers),
                                        time: null == (g = s.response.timings) || null == (b = g.phases) ? void 0 : b.total,
                                    });
                                let A = this.getUrl((null == (m = s.request) ? void 0 : m.url) || (null == (_ = s.options) ? void 0 : _.url));
                                this.logger.warn(
                                    '[Resource] Retry request '
                                        .concat((null == (h = s.request) ? void 0 : h.method) || (null == (p = s.options) ? void 0 : p.method), ' ')
                                        .concat(A.origin, ' ')
                                        .concat(A.pathname)
                                        .concat(A.search),
                                    a,
                                );
                            } else
                                this.logger.warn('[Resource] Retry request (unknown)', {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                });
                        }),
                        (0, i._)(this, 'afterResponseHook', (e) => {
                            if ((e.statusCode || e.status) >= 200 && 299 >= (e.statusCode || e.status)) {
                                var t, s;
                                let i = this.getUrl(e.url);
                                this.logger.info(
                                    '[Resource] Request resolved '
                                        .concat(e.statusCode, ' ')
                                        .concat(e.request.method, ' ')
                                        .concat(i.origin, ' ')
                                        .concat(i.pathname)
                                        .concat(i.search),
                                    {
                                        request: { method: e.request.method, url: e.url, headers: this.getHeaders(e.request.headers), body: e.request.body },
                                        response: {
                                            statusCode: e.statusCode || e.status,
                                            headers: this.getHeaders(e.headers),
                                            time: null == (s = e.timings) || null == (t = s.phases) ? void 0 : t.total,
                                        },
                                    },
                                );
                            }
                            return e;
                        }),
                        (0, i._)(this, 'beforeErrorHook', (e) => {
                            let t = e.cause;
                            if (a(t)) {
                                var s, i, r, l, n, o, c, u, d, m, _, h, p, b;
                                let a = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (s = t.request) ? void 0 : s.method) || (null == (i = t.options) ? void 0 : i.method),
                                        url: (null == (r = t.request) ? void 0 : r.url) || (null == (l = t.options) ? void 0 : l.url),
                                        headers: this.getHeaders((null == (n = t.request) ? void 0 : n.headers) || (null == (o = t.options) ? void 0 : o.headers)),
                                        body: (null == (c = t.request) ? void 0 : c.json) || (null == (u = t.options) ? void 0 : u.json),
                                    },
                                };
                                void 0 !== t.response &&
                                    (a.response = {
                                        statusCode: t.response.statusCode || t.response.status,
                                        headers: this.getHeaders(t.response.headers),
                                        time: null == (b = t.response.timings) || null == (p = b.phases) ? void 0 : p.total,
                                    });
                                let g = this.getUrl((null == (d = t.request) ? void 0 : d.url) || (null == (m = t.options) ? void 0 : m.url));
                                this.logger.error(
                                    '[Resource] Request failed '
                                        .concat((null == (_ = t.request) ? void 0 : _.method) || (null == (h = t.options) ? void 0 : h.method), ' ')
                                        .concat(g.origin, ' ')
                                        .concat(g.pathname)
                                        .concat(g.search, ', reason: ')
                                        .concat(e.name),
                                    a,
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
            (s(35412), s(69629));
            let l = [
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
        66610: (e, t, s) => {
            'use strict';
            s.d(t, { D: () => o });
            var i = s(53548),
                a = s(24709),
                r = s(88966),
                l = s(87138),
                n = s(46457);
            let o = (0, a.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, r.N)(),
                    t = (0, l.w)(),
                    s = (0, i.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, n.c)((e) => {
                    t?.object && s && s.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        67213: (e, t, s) => {
            'use strict';
            s.d(t, { CollectionAlbumsPage: () => ei });
            var i = s(88800),
                a = s(84961),
                r = s(53548),
                l = s(58390),
                n = s(97234),
                o = s(59724),
                c = s(17392),
                u = s(98225),
                d = s(69630),
                m = s(98427),
                _ = s(44230),
                h = s(37670),
                p = s(72288),
                b = s(17944),
                g = s(34303),
                A = (function (e) {
                    return ((e[(e.LIKED_ALBUMS = 0)] = 'LIKED_ALBUMS'), (e[(e.UPCOMING_ALBUMS = 1)] = 'UPCOMING_ALBUMS'), e);
                })({}),
                v = s(44937),
                x = s.n(v),
                C = s(65724),
                N = s(2058),
                y = s(10079),
                E = s(86790),
                k = s(60266),
                L = s(37770),
                f = s(79418),
                I = s(88969),
                O = s(29504),
                S = s(46422),
                j = s(63807),
                P = s(56248),
                T = s(87366),
                M = s(76099),
                R = s(4370),
                U = s(67174),
                w = s(14912);
            let D = (e) => {
                let t = (0, w.X)();
                return (0, r.useCallback)(
                    (s) => {
                        var i;
                        switch ((null == (i = e.onTabChange) || i.call(e, s), s)) {
                            case A.LIKED_ALBUMS: {
                                let { href: e } = (0, U.u)(R.Z.collectionAlbums.href, { query: { tab: b.H.LIKED_ALBUMS } });
                                t(e);
                                break;
                            }
                            case A.UPCOMING_ALBUMS: {
                                let { href: e } = (0, U.u)(R.Z.collectionAlbums.href, { query: { tab: b.H.UPCOMING_ALBUMS } });
                                t(e);
                            }
                        }
                    },
                    [t, e],
                );
            };
            var B = s(1884),
                H = s.n(B),
                z = s(19994);
            let F = () =>
                    (0, i.jsxs)('div', {
                        className: H().tabsShimmer,
                        children: [(0, i.jsx)(z.W, { className: H().tabShimmer }), (0, i.jsx)(z.W, { className: H().tabShimmer })],
                    }),
                K = (0, a.PA)((e) => {
                    var t, s, a;
                    let { tabsState: l, tabElementId: n } = e,
                        { collection: o } = (0, p.g)(),
                        { formatMessage: u } = (0, N.A)(),
                        d = (0, S.W)(),
                        { isScrolling: m } = (0, r.useContext)(j.B),
                        _ = D(l),
                        h = (0, r.useMemo)(
                            () =>
                                o.albums.items.length
                                    ? ''.concat(u({ id: 'entity-names.albums' }), ' • ').concat(o.albums.items.length)
                                    : u({ id: 'entity-names.albums' }),
                            [o.albums.items.length, u],
                        ),
                        b = (0, r.useMemo)(() => {
                            var e;
                            return (null == (e = o.albums.upcomingAlbums.items) ? void 0 : e.length)
                                ? ''.concat(u({ id: 'entity-names.upcoming-albums' }), ' • ').concat(o.albums.upcomingAlbums.items.length)
                                : u({ id: 'entity-names.upcoming-albums' });
                        }, [null == (t = o.albums.upcomingAlbums.items) ? void 0 : t.length, u]);
                    return (0, i.jsxs)('header', {
                        className: H().root,
                        'aria-hidden': m,
                        'data-test-id': c.Xk.collection.COLLECTION_ALBUMS_PAGE_STATIC_HEADER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: H().container,
                                children: [
                                    d.canBack && (0, i.jsx)(P.L, { withForwardControl: !1, withBackwardControl: d.canBack, shouldFocusOnMount: !m }),
                                    (0, i.jsx)(O.DZ, {
                                        variant: 'h2',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        className: H().title,
                                        'data-test-id': c.Xk.collection.COLLECTION_ALBUMS_PAGE_STATIC_HEADER_TITLE,
                                        children: (0, i.jsx)(I.A, { id: 'entity-names.favourite-albums' }),
                                    }),
                                ],
                            }),
                            (0, i.jsxs)(M.wI, {
                                isShimmerVisible: o.albums.isLoading,
                                shimmer: (0, i.jsx)(F, {}),
                                className: H().tabs,
                                elementId: n,
                                ...l,
                                onTabChange: _,
                                children: [
                                    (0, i.jsx)(T.o, {
                                        className: H().tab,
                                        value: A.LIKED_ALBUMS,
                                        title: h,
                                        'aria-label': u({ id: 'entity-names.albums-count' }, { value: o.albums.items.length }),
                                        'aria-hidden': m,
                                        tabIndex: m ? -1 : 0,
                                    }),
                                    (0, i.jsx)(T.o, {
                                        className: H().tab,
                                        value: A.UPCOMING_ALBUMS,
                                        title: b,
                                        'aria-label': u(
                                            { id: 'entity-names.upcoming-albums-count' },
                                            { value: null != (a = null == (s = o.albums.upcomingAlbums.items) ? void 0 : s.length) ? a : 0 },
                                        ),
                                        'aria-hidden': m,
                                        tabIndex: m ? -1 : 0,
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var q = s(70434),
                G = s.n(q);
            let Y = (0, a.PA)((e) => {
                var t;
                let { forwardRef: s, tabsState: a, tabElementId: l } = e,
                    {
                        user: n,
                        collection: o,
                        settings: { isMobile: c },
                    } = (0, p.g)(),
                    { formatMessage: d } = (0, N.A)(),
                    m = (0, r.useCallback)(
                        (e) => {
                            n.account.data.uid && o.albums.getData({ userId: n.account.data.uid, metaType: 'music', page: e, pageSize: 20 });
                        },
                        [o.albums, n.account.data.uid],
                    ),
                    _ = (0, r.useMemo)(
                        () => ({
                            Header: () => (0, i.jsx)(K, { tabsState: a, tabElementId: l }),
                            Footer: () => (0, i.jsx)(k.A, { children: (0, i.jsx)(E.w, { className: G().footer }) }),
                        }),
                        [l, a],
                    ),
                    h = o.albums.isAlbumsLoading ? 20 : o.albums.items.length;
                return (0, i.jsx)('div', {
                    className: G().root,
                    children: (0, i.jsx)(u.Kp, {
                        value: a.value,
                        name: A.LIKED_ALBUMS,
                        elementId: l,
                        className: G().tabPanel,
                        children: (0, i.jsx)(f.$, {
                            className: (0, C.$)(G().scrollContainer, G().important),
                            customComponents: _,
                            itemContentCallback: (e) => {
                                var t;
                                let s = null == (t = o.albums.pagesLoader.items) ? void 0 : t[e],
                                    a = d({ id: 'loading-messages.entity-is-loading' }, { entityName: d({ id: 'entity-names.album' }) });
                                return s ? (0, i.jsx)(y.a, { album: s, contentLinesCount: 4 }, s.id) : (0, i.jsx)(L.V, { 'aria-label': a, linesCount: 4 });
                            },
                            totalCount: h,
                            onGetDataByPage: m,
                            pageSize: 20,
                            totalRequests: null != (t = o.albums.pagesLoader.requestsCount) ? t : 0,
                            listClassName: G().content,
                            itemClassName: G().item,
                            handleRef: s,
                            context: { listAriaLabel: d({ id: 'collection.liked-albums-list' }) },
                            isMobileLayout: c,
                            useWindowScroll: c,
                        }),
                    }),
                });
            });
            var V = s(66719),
                X = s(31108),
                $ = s(1698);
            let W = (0, a.PA)((e) => {
                let { forwardRef: t, tabsState: s, tabElementId: a } = e,
                    { collection: l } = (0, p.g)(),
                    { formatMessage: n } = (0, N.A)(),
                    o = (0, r.useMemo)(() => {
                        var e;
                        let t = n({ id: 'loading-messages.entity-is-loading' }, { entityName: n({ id: 'entity-names.album' }) });
                        return l.albums.isUpcomingAlbumsLoading
                            ? (0, i.jsx)($.e, { isActive: !0, 'aria-label': t })
                            : null == (e = l.albums.upcomingAlbums.items)
                              ? void 0
                              : e.map((e) => (0, i.jsx)(X.M, { upcomingAlbum: e }, e.id));
                    }, [l.albums.isUpcomingAlbumsLoading, l.albums.upcomingAlbums, n]);
                return (0, i.jsxs)(V.N, {
                    className: G().root,
                    containerClassName: (0, C.$)(G().scrollContainer, G().important),
                    ref: t,
                    children: [
                        (0, i.jsx)(K, { tabsState: s, tabElementId: a }),
                        (0, i.jsx)(u.Kp, { value: s.value, name: A.UPCOMING_ALBUMS, elementId: a, className: G().content, children: o }),
                        (0, i.jsx)(k.A, { children: (0, i.jsx)(E.w, { className: G().footer }) }),
                    ],
                });
            });
            var Z = s(52300),
                J = s(36978),
                Q = s.n(J);
            let ee = (0, a.PA)((e) => {
                let { tabsState: t, tabElementId: s } = e,
                    a = (0, r.useMemo)(() => {
                        switch (t.value) {
                            case A.LIKED_ALBUMS:
                                return (0, i.jsx)(I.A, { id: 'error-messages.empty-collection-albums-title' });
                            case A.UPCOMING_ALBUMS:
                                return (0, i.jsx)(I.A, { id: 'error-messages.empty-collection-upcoming-albums-title' });
                        }
                    }, [t.value]),
                    l = t.value === A.LIKED_ALBUMS;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(K, { tabsState: t, tabElementId: s }),
                        (0, i.jsxs)(u.Kp, {
                            value: t.value,
                            name: t.value,
                            elementId: s,
                            className: Q().root,
                            children: [
                                (0, i.jsx)(Z.I, { className: Q().icon, size: 'l', variant: 'album' }),
                                (0, i.jsx)(O.DZ, {
                                    className: Q().title,
                                    variant: 'h3',
                                    size: 'xs',
                                    'data-test-id': c.Xk.collection.COLLECTION_ALBUMS_PAGE_EMPTY_TITLE,
                                    children: a,
                                }),
                                l &&
                                    (0, i.jsx)(O.HL, {
                                        className: Q().text,
                                        variant: 'span',
                                        type: 'controls',
                                        size: 'l',
                                        weight: 'normal',
                                        children: (0, i.jsx)(I.A, { id: 'error-messages.empty-collection-albums-description' }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var et = s(93317);
            let es = (0, a.PA)((e) => {
                    var t, s, a;
                    let { tabsState: l, tabElementId: n } = e,
                        { collection: o } = (0, p.g)(),
                        { formatMessage: u } = (0, N.A)(),
                        { isScrolling: d } = (0, r.useContext)(j.B),
                        m = (0, S.W)(),
                        _ = D(l),
                        h = (0, r.useMemo)(
                            () =>
                                o.albums.items.length
                                    ? ''.concat(u({ id: 'entity-names.albums' }), ' • ').concat(o.albums.items.length)
                                    : u({ id: 'entity-names.albums' }),
                            [o.albums.items.length, u],
                        ),
                        b = (0, r.useMemo)(() => {
                            var e, t;
                            return (null == (e = o.albums.upcomingAlbums.items) ? void 0 : e.length)
                                ? ''.concat(u({ id: 'entity-names.upcoming-albums' }), ' • ').concat(null == (t = o.albums.upcomingAlbums.items) ? void 0 : t.length)
                                : u({ id: 'entity-names.upcoming-albums' });
                        }, [null == (t = o.albums.upcomingAlbums.items) ? void 0 : t.length, u]);
                    return (0, i.jsx)(et.Y, {
                        variant: et.V.COMPOSITE,
                        staticClassName: (0, C.$)(H().staticHeader, H().important),
                        'aria-hidden': !d,
                        stickyClassName: (0, C.$)(H().stickyHeader, H().important),
                        stickyChild: (0, i.jsxs)('div', {
                            className: H().container,
                            'data-test-id': c.Xk.collection.COLLECTION_ALBUMS_PAGE_STICKY_HEADER,
                            children: [
                                m.canBack && (0, i.jsx)(P.L, { withForwardControl: !1, withBackwardControl: m.canBack, shouldFocusOnMount: !1, buttonSize: 'xs' }),
                                (0, i.jsxs)(M.wI, {
                                    isShimmerVisible: o.albums.isLoading,
                                    shimmer: (0, i.jsx)(F, {}),
                                    className: H().tabs,
                                    elementId: n,
                                    ...l,
                                    onTabChange: _,
                                    children: [
                                        (0, i.jsx)(T.o, {
                                            className: H().tab,
                                            value: A.LIKED_ALBUMS,
                                            title: h,
                                            'aria-label': u({ id: 'entity-names.albums-count' }, { value: o.albums.items.length }),
                                            'aria-hidden': !d,
                                            tabIndex: d ? 0 : -1,
                                        }),
                                        (0, i.jsx)(T.o, {
                                            className: H().tab,
                                            value: A.UPCOMING_ALBUMS,
                                            title: b,
                                            'aria-label': u(
                                                { id: 'entity-names.upcoming-albums-count' },
                                                { value: null != (a = null == (s = o.albums.upcomingAlbums.items) ? void 0 : s.length) ? a : 0 },
                                            ),
                                            'aria-hidden': !d,
                                            tabIndex: d ? 0 : -1,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    });
                }),
                ei = (0, a.PA)(() => {
                    let e = (0, l.useSearchParams)(),
                        { user: t, collection: s, library: a } = (0, p.g)(),
                        { contentScrollRef: v, setContentScrollRef: C } = (0, _.g)(),
                        N = (0, r.useId)(),
                        y = (0, r.useMemo)(() => {
                            switch (e.get(g.K.TAB)) {
                                case b.H.LIKED_ALBUMS:
                                    break;
                                case b.H.UPCOMING_ALBUMS:
                                    return A.UPCOMING_ALBUMS;
                            }
                            return A.LIKED_ALBUMS;
                        }, [e]),
                        E = (0, u.zb)(y);
                    ((0, h.J)(s.albums.isResolved),
                        (0, r.useEffect)(
                            () => () => {
                                s.albums.reset();
                            },
                            [s.albums],
                        ));
                    let k = (0, r.useMemo)(() => {
                        switch (E.value) {
                            case A.LIKED_ALBUMS:
                                if (s.albums.isAlbumsEmpty) return (0, i.jsx)(ee, { tabsState: E, tabElementId: N });
                                return (0, i.jsx)(Y, { forwardRef: C, tabsState: E, tabElementId: N });
                            case A.UPCOMING_ALBUMS:
                                if (s.albums.isUpcomingAlbumsEmpty) return (0, i.jsx)(ee, { tabsState: E, tabElementId: N });
                                return (0, i.jsx)(W, { forwardRef: C, tabsState: E, tabElementId: N });
                        }
                    }, [s.albums.isAlbumsEmpty, s.albums.isUpcomingAlbumsEmpty, C, N, E]);
                    if (t.account.data.uid && s.albums.isNeededToLoad) {
                        let e = [
                            s.albums.getData({ userId: t.account.data.uid, metaType: 'music', page: 0, pageSize: 20 }),
                            s.albums.getPresaves({ userId: t.account.data.uid }),
                            a.getData(),
                        ];
                        (0, r.use)(Promise.allSettled(e));
                    }
                    return (0, i.jsx)(o.a, {
                        pageId: n.AppScreen.CollectionAlbumsScreen,
                        pageIdForFrom: m.b.OWN_ALBUMS,
                        children: (0, i.jsx)(d.h, {
                            scrollElement: v,
                            headerThreshold: 148,
                            children: (0, i.jsxs)('div', {
                                className: x().root,
                                'data-test-id': c.Xk.collection.COLLECTION_ALBUMS_PAGE,
                                children: [(0, i.jsx)(es, { tabsState: E, tabElementId: N }), k],
                            }),
                        }),
                    });
                });
        },
        69629: (e) => {
            var t = Object.prototype.hasOwnProperty;
            function s(e) {
                return '[Throws: ' + (e ? e.message : '?') + ']';
            }
            function i(e) {
                var i = [];
                return (function e(a) {
                    if (null === a || 'object' != typeof a) return a;
                    if (-1 !== i.indexOf(a)) return '[Circular]';
                    if ((i.push(a), 'function' == typeof a.toJSON))
                        try {
                            var r = e(a.toJSON());
                            return (i.pop(), r);
                        } catch (e) {
                            return s(e);
                        }
                    if (Array.isArray(a)) {
                        var l = a.map(e);
                        return (i.pop(), l);
                    }
                    var n = Object.keys(a).reduce(function (i, r) {
                        return (
                            (i[r] = e(
                                (function (e, i) {
                                    if (t.call(e, i))
                                        try {
                                            return e[i];
                                        } catch (e) {
                                            return s(e);
                                        }
                                    return e[i];
                                })(a, r),
                            )),
                            i
                        );
                    }, {});
                    return (i.pop(), n);
                })(e);
            }
            ((e.exports = function (e, t, s) {
                return JSON.stringify(i(e), t, s);
            }),
                (e.exports.ensureProperties = i));
        },
        70434: (e) => {
            e.exports = {
                root: 'CollectionAlbumsPageContent_root__2Ya18',
                scrollContainer: 'CollectionAlbumsPageContent_scrollContainer__0TjJm',
                important: 'CollectionAlbumsPageContent_important__fixM8',
                content: 'CollectionAlbumsPageContent_content__jcwRU',
                footer: 'CollectionAlbumsPageContent_footer__ZkUKY',
                item: 'CollectionAlbumsPageContent_item__I_Wuz',
                tabPanel: 'CollectionAlbumsPageContent_tabPanel__0qXKZ',
            };
        },
        79418: (e, t, s) => {
            'use strict';
            s.d(t, { $: () => b });
            var i = s(88800),
                a = s(65724),
                r = s(61013),
                l = s(53548);
            let n = (e) => {
                    let { style: t, forwardRef: s, context: a, ...r } = e,
                        l = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        n = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, i.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: n, 'aria-label': l, style: { ...t }, ref: s, ...r });
                },
                o = (0, l.forwardRef)((e, t) => (0, i.jsx)(n, { forwardRef: t, ...e }));
            var c = s(16434),
                u = s.n(c);
            let d = (e) => {
                    let { style: t, forwardRef: s, withFooter: r, withHeader: l, withForceScroll: n, ...o } = e;
                    return (0, i.jsx)('div', {
                        className: (0, a.$)(u().scroller, { [u().scroller_withFooter]: r, [u().scroller_withHeader]: l, [u().scroller_withForceScroll]: n }),
                        style: { ...t },
                        ref: s,
                        ...o,
                        tabIndex: -1,
                    });
                },
                m = (0, l.forwardRef)((e, t) => (0, i.jsx)(d, { forwardRef: t, ...e }));
            var _ = s(55482),
                h = s(75151);
            let p = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: s,
                            onRangeHandler: a,
                            debounceDurationInMs: r = 100,
                            totalCount: n = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: u,
                            ...d
                        } = e,
                        [m, p] = (0, l.useState)(null),
                        b = (0, l.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == a || a(e), o.length > 0 && p(e), t && s)) {
                                        let i = Math.floor(e.endIndex / t) + 1,
                                            a = Math.floor(e.startIndex / t);
                                        for (let e = a; e < i; e++) s(e);
                                    }
                                }, r),
                            [r, a, t, s, o],
                        );
                    (0, l.useEffect)(() => {
                        o.length > 0 && m && b(m);
                    }, o);
                    let g = (0, l.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, r);
                    }, [c, r]);
                    return (0, i.jsx)(h.sN, { ref: u, rangeChanged: b, totalCount: n, endReached: g, ...d });
                },
                b = (e) => {
                    let {
                            className: t,
                            customComponents: s,
                            onGetDataByPage: n,
                            onGetDataByRange: c,
                            itemClassName: d,
                            itemContentCallback: _,
                            listClassName: h,
                            overscan: b = 700,
                            pageSize: g = 20,
                            totalCount: A,
                            totalRequests: v,
                            debounceDurationInMs: x,
                            initialItemCount: C,
                            minInitialItemCount: N = 20,
                            handleRef: y,
                            alwaysShowScrollbar: E = !1,
                            testId: k,
                            isMobileLayout: L = !1,
                            shouldTriggerRangeChangedOn: f,
                            ...I
                        } = e,
                        [O, S] = (0, l.useState)(!1),
                        j = (0, l.useMemo)(
                            () =>
                                (0, r.A)((e) => {
                                    S(e);
                                }, 100),
                            [],
                        ),
                        P = (0, l.useMemo)(() => {
                            var e, t;
                            return L
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == s ? void 0 : s.List) ? e : o,
                                      Item: null == s ? void 0 : s.Item,
                                      ScrollSeekPlaceholder: null == s ? void 0 : s.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == s ? void 0 : s.List) ? t : o,
                                      Item: null == s ? void 0 : s.Item,
                                      Header: null == s ? void 0 : s.Header,
                                      Footer: null == s ? void 0 : s.Footer,
                                      ScrollSeekPlaceholder: null == s ? void 0 : s.ScrollSeekPlaceholder,
                                  };
                        }, [s, v, L]),
                        T = C ? Math.min(C, N) : void 0;
                    return (0, i.jsxs)('div', {
                        className: (0, a.$)(u().root, { [u().root_scrolling]: O || E, [u().root_notScrolling]: !O && !E }, t),
                        'data-test-id': k,
                        children: [
                            L && (null == s ? void 0 : s.Header) && s.Header(),
                            (0, i.jsx)(p, {
                                overscan: b,
                                components: P,
                                listClassName: h,
                                itemClassName: d,
                                isScrolling: j,
                                itemContent: _,
                                scrollerRef: y,
                                totalCount: A,
                                pageSize: g,
                                onPageHandler: n,
                                onRangeHandler: c,
                                debounceDurationInMs: x,
                                initialItemCount: T,
                                shouldTriggerRangeChangedOn: f,
                                ...I,
                            }),
                            L && (null == s ? void 0 : s.Footer) && s.Footer(),
                        ],
                    });
                };
        },
        83943: (e, t, s) => {
            (Promise.resolve().then(s.bind(s, 57328)), Promise.resolve().then(s.bind(s, 67213)));
        },
        84218: (e) => {
            e.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        86298: (e, t, s) => {
            'use strict';
            s.d(t, { x: () => m });
            var i = s(88800),
                a = s(65724),
                r = s(2058),
                l = s(17392),
                n = s(96817),
                o = s(52300),
                c = s(29504),
                u = s(84218),
                d = s.n(u);
            let m = (e) => {
                let { className: t, isLiked: s, likesCount: u, handleLikeClick: m, ariaLabel: _ } = e,
                    { formatNumber: h } = (0, r.A)();
                return (0, i.jsx)(n.$, {
                    className: (0, a.$)(d().root, t),
                    onClick: m,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, i.jsx)(o.I, { variant: s ? 'likedVariant' : 'likeVariant', size: 'xxs', className: d().icon }),
                    'aria-label': _,
                    'data-test-id': l.S7.CARD_LIKES,
                    children: (0, i.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: h(u) }),
                });
            };
        },
        86790: (e, t, s) => {
            'use strict';
            s.d(t, { w: () => k });
            var i = s(88800),
                a = s(65724),
                r = s(84961),
                l = s(2058),
                n = s(30282),
                o = s(94144),
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
            let u = (e, t, s) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(s);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(s);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(s);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(s);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(s);
                    }
                },
                d = (e) => {
                    let { formatMessage: t, language: s, tld: i, year: a } = e;
                    return {
                        year: a,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: u(c.YANDEX, i, s) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: u(c.YANDEX_PROJECTS, i, s) },
                    };
                };
            var m = s(62293),
                _ = s(99839);
            let h = (e) => e(new Date(), (0, _.m)());
            var p = s(51611),
                b = s(72288),
                g = s(11006),
                A = s.n(g),
                v = s(17392),
                x = s(29504),
                C = s(91292);
            let N = (e) => {
                    let { className: t, data: s } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, a.$)(A().copyrights, t),
                        'data-test-id': v.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(x.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: A().text,
                                children: [
                                    '\xa9 ',
                                    s.year,
                                    ' \xa0',
                                    (0, i.jsx)(C.N, {
                                        target: '_blank',
                                        href: s.yandexMusic.url,
                                        className: (0, a.$)(A().copyrightLink, A().yandexMusicLink),
                                        'data-test-id': v.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: s.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(x.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(C.N, {
                                target: '_blank',
                                href: s.yandexProjects.url,
                                className: A().copyrightLink,
                                'data-test-id': v.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: s.yandexProjects.title,
                            }),
                        ],
                    });
                },
                y = (e) => {
                    let { disclaimer: t, links: s } = e;
                    return (0, i.jsxs)('div', {
                        className: A().links,
                        children: [
                            (0, i.jsx)('ol', {
                                className: A().list,
                                'data-test-id': v.S7.FOOTER_LINKS_LIST,
                                children: s.map((e) => {
                                    let { id: t, title: s, url: a } = e;
                                    return (0, i.jsx)(
                                        'li',
                                        {
                                            className: A().item,
                                            children: (0, i.jsx)(C.N, { target: '_blank', href: a, className: A().link, 'data-test-id': v.S7.FOOTER_LINK, children: s }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, i.jsx)(x.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: A().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': v.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                E = (e) => {
                    let { className: t, data: s } = e;
                    return (0, i.jsxs)('footer', {
                        className: (0, a.$)(A().root, A().important, t),
                        'data-test-id': v.S7.FOOTER,
                        children: [(0, i.jsx)(y, { links: s.links, disclaimer: s.disclaimer }), (0, i.jsx)(N, { data: s.copyrights })],
                    });
                };
            (0, r.PA)((e) => {
                let { className: t } = e,
                    { location: s } = (0, b.g)(),
                    { formatDate: a, formatMessage: r } = (0, l.A)(),
                    { language: n } = (0, p.h)(),
                    o = d({ formatMessage: r, language: n, tld: s.tld, year: h(a) });
                return (0, i.jsx)(N, { className: t, data: o });
            });
            let k = (0, r.PA)((e) => {
                var t;
                let { className: s } = e,
                    { experiments: r, location: _, user: g } = (0, b.g)(),
                    { formatDate: v, formatMessage: x } = (0, l.A)(),
                    { isEnabled: C } = null != (t = (0, o.P)()) ? t : {},
                    { language: N } = (0, p.h)(),
                    y = ((e) => {
                        let { checkExperiment: t, formatMessage: s, isWebApplication: i, language: a, tld: r, userRegion: l, year: n } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: s, tld: i, language: a, userRegion: r } = e,
                                    l = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: u(c.COPYRIGHT_HOLDER, i, a) },
                                    n = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: u(c.PRIVACY_POLICY, i, a) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: u(c.AGREEMENT, i, a) },
                                    d = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: u(c.RECOMMENDATION_RULES, i, a) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: u(c.HELP, i, a) },
                                    _ = [l, o, d];
                                return (s && 'ru' === r && _.push(n), _.push(m), _);
                            })({ formatMessage: s, isWebApplication: i, language: a, tld: r, userRegion: l }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => s({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => s({ id: 'footer.explicit-content' }),
                                userRegion: l,
                            }),
                            copyrights: d({ formatMessage: s, language: a, tld: r, year: n }),
                        };
                    })({
                        checkExperiment: (e, t) => r.checkExperiment(e, t),
                        formatMessage: x,
                        isWebApplication: n.$3,
                        tld: _.tld,
                        language: N,
                        userRegion: g.account.data.userSessionRegionIso,
                        year: h(v),
                    });
                return (0, i.jsx)(E, { className: (0, a.$)({ [A().root_withOffsetForDeeplink]: C }, s), data: y });
            });
        },
        89916: (e, t, s) => {
            'use strict';
            s.d(t, { GX: () => r.G, X1: () => i.X, m5: () => a.m });
            var i = s(46606),
                a = s(91136),
                r = s(19840);
            s(17017);
        },
        91136: (e, t, s) => {
            'use strict';
            s.d(t, { m: () => a });
            class i extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: s = 'E_INTERNAL', data: a = {}, ...r } = t,
                        l = e || 'Internal error';
                    (super(l, r), (this.message = l), (this.code = s), (this.data = a), (this.stack = Error(l).stack), Object.setPrototypeOf(this, i.prototype));
                }
            }
            class a extends i {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...s } = {}) {
                    (super(e, { code: t, ...s }), Object.setPrototypeOf(this, a.prototype));
                }
            }
        },
        94144: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => a, P: () => r });
            var i = s(53548);
            let a = (0, i.createContext)(null),
                r = () => (0, i.useContext)(a);
        },
        95756: (e, t, s) => {
            'use strict';

            s.d(t, { x: () => Y });
            // for PulseSync WebHost: BEGIN imports for native addon context menu items
            var pulseSyncMenuJsx = s(88800),
                pulseSyncMenuItems = s(19934),
                pulseSyncMenuIcons = s(52300);
            // for PulseSync WebHost: END imports for native addon context menu items
            var i = s(88800),
                a = s(84961),
                r = s(53548),
                l = s(2058),
                n = s(97234),
                o = s(17392),
                c = s(18593),
                u = s(29993),
                d = s(19934),
                m = s(18143),
                _ = s(29595),
                h = s(74965),
                p = s(72288),
                b = s(66943),
                g = s(92966),
                A = s(56651),
                v = s(48749),
                x = s(22505),
                C = s(5407),
                N = s(64284),
                y = s(98427),
                E = s(57934),
                k = s(84384),
                L = s(9618),
                f = s(87762),
                I = s(95210),
                O = s(47964),
                S = s(46936),
                j = s(97956),
                P = s(98953),
                T = s(32721),
                M = s(18130),
                R = s(88969),
                U = s(52300);
            let w = (0, a.PA)((e) => {
                let { isFinished: t, onClick: s, className: a } = e,
                    { user: l } = (0, p.g)(),
                    n = (0, r.useMemo)(
                        () => (t ? (0, i.jsx)(R.A, { id: 'interface-actions.mark-all-non-listened' }) : (0, i.jsx)(R.A, { id: 'interface-actions.mark-all-listened' })),
                        [t],
                    );
                return (0, i.jsx)(d.Dr, {
                    className: a,
                    onClick: s,
                    icon: (0, i.jsx)(U.I, { variant: 'check', size: 'xxs' }),
                    disabled: !l.isAuthorized,
                    'data-test-id': o.S7.CONTEXT_MENU_MARK_ALL_LISTENED_BUTTON,
                    children: n,
                });
            });
            var D = s(93091),
                B = s(27817),
                H = s(74064),
                z = s(44988),
                F = s(15425),
                K = s(81066),
                q = s(18278),
                G = s(41918);
            // for PulseSync: BEGIN download-to-file action in the album context menu
            var pulseSyncMst = s(5120);
            let pulseSyncDownloadAlbumToFile = (0, a.PA)((e) => {
                let { album: t } = e,
                    pulseSyncMigration_i_1 = (0, r.useCallback)(async () => {
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
                    icon: (0, i.jsx)(U.I, {
                        variant: 'download',
                        size: 'xxs',
                    }),
                    children: 'Скачать в файл',
                });
            });
            // for PulseSync: END download-to-file action in the album context menu
            let Y = (0, a.PA)((e) => {
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
                var t, s;
                let { album: a, children: R, onOpenChange: U, open: Y, wrapperClassName: V, variant: X, ...$ } = e,
                    { shouldShowBuySubscriptionModal: W, showBuySubscriptionModal: Z } = (0, L.q)(),
                    {
                        settings: { isMobile: J },
                        trailer: Q,
                        user: ee,
                        experiments: et,
                        albumCPA: { isPlusCPAEnabled: es, isPlusCPAPlayerBarEnabled: ei },
                    } = (0, p.g)(),
                    ea = (0, g.K)(a),
                    er = (0, A.A)(a),
                    el = (0, E.F)(),
                    en = ''.concat(N.U.ALBUM, '-').concat(a.id),
                    eo = a.isNonMusic && X === G.z.PAGE,
                    ec = et.checkExperiment(j.z.WebEditorsFeatures, 'on'),
                    eu = !a.isNonMusic && !et.checkExperiment(j.z.WebNextProductWithoutRecommendation, 'on'),
                    { formatMessage: ed } = (0, l.A)(),
                    em = (0, C.P)(),
                    { pageAlbumId: e_ } = (0, f.T)(),
                    eh = es({ pageAlbumId: e_, albumId: a.id, isNonMusic: a.isNonMusic }),
                    ep = ei(a.id, a.isNonMusic),
                    eb = (() => {
                        let { user: e, album: t, fullscreenPlayer: s } = (0, p.g)(),
                            { notify: a } = (0, h.l)(),
                            { formatMessage: n } = (0, l.A)();
                        return (0, r.useCallback)(async () => {
                            var r, l;
                            if (!t) return;
                            let o = s.modal.isOpened ? _.u.FULLSCREEN_ERROR : _.u.ERROR;
                            return e.isAuthorized
                                ? (await t.setListeningFinishedStatus()) !== m.T.OK
                                    ? void a((0, i.jsx)(b.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: o })
                                    : void (null == (l = t.meta) || l.updateFinished(!(null == (r = t.meta) ? void 0 : r.listeningFinished)))
                                : void a((0, i.jsx)(b.h, { error: n({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o });
                        }, [n, a, t, e.isAuthorized, s.modal.isOpened]);
                    })(),
                    { shareLink: eg, pathname: eA } = (0, M.b)('/album/:albumId', { params: { albumId: a.id } }),
                    ev = (0, v.A)({ entityVariant: S.D.ALBUM, urlParams: { id: a.id } }),
                    { isPlaying: ex, togglePlay: eC } = (0, O.B)({
                        seeds: null != (s = null == a ? void 0 : a.seeds) ? s : [],
                        pageIdForFrom: y.b.RADIO,
                        blockIdForFrom: en,
                        parentContextId: a.id,
                    }),
                    { utmLink: eN } = (0, k.f)({ blockId: N.U.ALBUM, contextType: c.K.Album, contextId: null == a ? void 0 : a.id }),
                    ey = (0, u.c)(() => {
                        if (W && ee.isAuthorized) return void Z();
                        !em() && (ex || eC());
                    }),
                    eE = (0, u.c)(() => {
                        if (W && !ep) return void Z();
                        em() || (Q.setUtmLink(eN), Q.openAlbumTrailer(a.id), el(n.DomainObjectType.Album, String(a.id)));
                    });
                (0, I.N)(Y);
                let ek = (0, r.useMemo)(() => {
                        if (!J) return (0, i.jsx)(B.L, { onClick: er, isPinned: a.isPinned });
                    }, [a.isPinned, er, J]),
                    eL = (0, r.useMemo)(() => {
                        let e = !eh && !ee.isAuthorized;
                        return a.isNonMusic
                            ? (0, i.jsx)(z.U, { onClick: ea, isLiked: a.isLiked, albumType: a.type })
                            : (0, i.jsx)(D.T, { onClick: ea, isLiked: a.isLiked, disabled: e });
                    }, [a.isLiked, a.type, ea, a.isNonMusic, ee.isAuthorized, eh]),
                    ef = (0, r.useMemo)(() => {
                        var e;
                        if (!a.isNonMusic && (null == (e = a.trailer) ? void 0 : e.isAvailable)) return (0, i.jsx)(F.N, { onClick: eE, disabled: !a.isAvailable });
                    }, [a.isAvailable, null == (t = a.trailer) ? void 0 : t.isAvailable, a.isNonMusic, eE]),
                    eI = (0, r.useMemo)(() => {
                        if (eu) return (0, i.jsx)(K.C, { onClick: ey, disabled: !a.isAvailable || (ep && J), variant: T.I.ALBUM, onOpenMenuChange: U });
                    }, [a.isAvailable, ey, eu, U, ep, J]),
                    eO = { variant: P.Y.ALBUM, id: a.id, title: a.title, path: eA, albumArtistName: a.artistName, albumArtistId: a.artistId };
                // for PulseSync WebHost: BEGIN album context and native addon menu item rendering
                let pulseSyncInjectAlbumMenuItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('albumContextMenu', items, {
                        eventDetail: {
                            id: String(a.id),
                            url: eA,
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
                return (0, i.jsxs)(d.W1, {
                    isMobile: J,
                    offsetOptions: 10,
                    open: Y,
                    onOpenChange: U,
                    ariaLabel: ed({ id: 'interface-actions.context-menu' }),
                    wrapperClassName: V,
                    containerDataTestId: o.Kq.album.ALBUM_CONTEXT_MENU,
                    ...$,
                    // for PulseSync WebHost: BEGIN inject native addon items into the album context menu
                    children: pulseSyncInjectAlbumMenuItems([
                        J && (0, i.jsx)(q.C, { getDescriptionTexts: a.getDescriptionTexts, entityId: a.id }),
                        ec && (0, i.jsx)(x.d, { entityVariant: S.D.ARTIST, adminUrl: ev }),
                        ek,
                        eL,
                        ef,
                        eI,
                        // for PulseSync: BEGIN insert the album download-to-file menu action
                        (0, i.jsx)(pulseSyncDownloadAlbumToFile, { album: a }),
                        // for PulseSync: END insert the album download-to-file menu action
                        R,
                        eo && (0, i.jsx)(w, { onClick: eb, isFinished: a.listeningFinished }),
                        (0, i.jsx)(H.H, { shareLink: eg, entityMeta: eO }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the album context menu
                });
            });
        },
        97804: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { J: () => i }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(i || (i = {})));
        },
        99839: (e, t, s) => {
            'use strict';
            s.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
        99890: (e, t, s) => {
            'use strict';
            s.d(t, { C8: () => r, UC: () => l, dM: () => n, uV: () => o });
            var i = s(89916),
                a = s(66363);
            let r = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                l = (e) => (e.uid ? 'authorized' : 'no-uid'),
                n = (e) => {
                    if (!(e instanceof i.m5) || !(0, a.Nh)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, a.Nh)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                o = (e) => {
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
                7191, 9904, 3078, 1833, 8194, 1191, 8655, 6582, 715, 6706, 4771, 2662, 6904, 1898, 2058, 3578, 8628, 4378, 9780, 8283, 9332, 5151, 2837, 4732, 9087, 3979,
                6719, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 6374, 2088, 8979, 4322, 763, 2670, 7358,
            ],
            () => e((e.s = 83943)),
        ),
            (_N_E = e.O()));
    },
]);
