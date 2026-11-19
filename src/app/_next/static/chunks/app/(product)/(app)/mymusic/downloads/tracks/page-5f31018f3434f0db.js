(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1287, 6363],
    {
        36: (e, t, a) => {
            (Promise.resolve().then(a.bind(a, 57328)),
                Promise.resolve().then(a.bind(a, 20551)),
                Promise.resolve().then(a.bind(a, 8679)),
                Promise.resolve().then(a.bind(a, 64462)));
        },
        4795: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => i });
            var r = a(72288),
                s = a(97956);
            let i = () => {
                var e, t;
                let {
                    user: a,
                    settings: { browserInfo: i },
                    experiments: n,
                } = (0, r.g)();
                return (
                    !(null == i ? void 0 : i.isTouch) &&
                    a.isAuthorized &&
                    !a.hasPlus &&
                    (null == (t = n.getExperiment(s.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        7628: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => m });
            var r = a(88800),
                s = a(88969),
                i = a(58390),
                n = a(17392),
                o = a(29993),
                l = a(96817),
                c = a(29504),
                d = a(99890),
                u = a(4086),
                _ = a(41928);
            let m = (e) => {
                let { size: t = 'm', variant: a = 'default', color: m = 'primary', withRipple: p = !0, buttonText: g, isBlock: h, key: x, className: v } = e,
                    k = (0, i.useRouter)(),
                    C = (0, _.N)().get(u.QG),
                    y = (0, o.c)(() => {
                        C.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), k.push(C.authorizationUrl));
                    });
                return (0, r.jsx)(
                    l.$,
                    {
                        onClick: y,
                        className: v,
                        isBlock: h,
                        color: m,
                        variant: a,
                        size: t,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: g || (0, r.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, r.jsx)(s.A, { id: 'authorization.enter-button' }) }),
                    },
                    x,
                );
            };
        },
        8679: (e, t, a) => {
            'use strict';
            a.d(t, { MyMusicDownloadedTracksPage: () => et });
            var r = a(88800),
                s = a(65724),
                i = a(84961),
                n = a(53548),
                o = a(2058),
                l = a(97234),
                c = a(59724),
                d = a(17392),
                u = a(29993),
                _ = a(84255),
                m = a(32596),
                p = a(69630),
                g = a(64284),
                h = a(98427),
                x = a(84384),
                v = a(44230),
                k = a(37670),
                C = a(11510),
                y = a(71978),
                T = a(34961),
                N = a(53892),
                A = a(74773),
                E = a(98644),
                S = a(86790),
                b = a(60266),
                f = a(93015),
                j = a(79418),
                M = a(96402),
                w = a.n(M),
                I = a(88969),
                P = a(52300),
                D = a(29504),
                L = a(46482),
                O = a(18593),
                R = a(5407),
                H = a(46422),
                F = a(39079),
                z = a(72288),
                U = a(63807),
                W = a(56248),
                B = a(16704),
                Y = a(87966),
                K = a.n(Y);
            let q = (0, i.PA)(() => {
                var e;
                let { downloadedTracks: t } = (0, T.s)(N.n.MY_MUSIC),
                    a = (0, r.jsx)(D.HL, { variant: 'span', size: 's', weight: 'medium', 'aria-hidden': !0, children: '•' }),
                    s = [];
                (null == (e = t.tracks) ? void 0 : e.length) &&
                    s.push(
                        (0, r.jsx)(D.HL, {
                            variant: 'span',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 1,
                            children: (0, r.jsx)(I.A, { id: 'entity-names.tracks-count', values: { value: t.tracks.length } }),
                        }),
                    );
                let i = Math.floor(t.tracksDurationInMinutes / 60),
                    o = Math.floor(t.tracksDurationInMinutes % 60);
                return (
                    (i || o) &&
                        (s.push(a),
                        s.push(
                            (0, r.jsx)(D.HL, {
                                variant: 'span',
                                size: 's',
                                weight: 'medium',
                                children: (0, r.jsx)(I.A, { id: 'time.hours-minutes', values: { hours: i, minutes: o } }),
                            }),
                        )),
                    (0, r.jsx)('div', { className: K().root, children: s.map((e, t) => (0, n.cloneElement)(e, { key: t })) })
                );
            });
            var G = a(96030),
                $ = a.n(G);
            let V = (0, i.PA)(() => {
                let { isScrolling: e } = (0, n.useContext)(U.B),
                    t = (0, H.W)(),
                    { downloadedTracks: a } = (0, T.s)(N.n.MY_MUSIC),
                    {
                        settings: { isMobile: s },
                        slam: i,
                    } = (0, z.g)(),
                    { from: o } = (0, x.f)({ pageId: h.b.OWN_TRACKS, blockId: g.U.TRACK_LIST }),
                    l = (0, R.P)(),
                    c = (0, L.g)(),
                    { isPlaying: _, togglePlay: m } = (0, F.D)({
                        playContextParams: {
                            contextData: { type: O.K.Various, meta: { id: h.b.DOWNLOADS_TRACKS }, from: o },
                            entitiesData: a.entitiesData,
                            loadContextMeta: !1,
                        },
                    }),
                    p = (0, u.c)(() => {
                        !l() && (m(), _ || c());
                    });
                return (0, r.jsx)('header', {
                    className: $().root,
                    'aria-hidden': e,
                    'data-test-id': d.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE_HEADER,
                    children: (0, r.jsxs)('div', {
                        className: $().container,
                        children: [
                            !i.isOfflineModeEnabled &&
                                t.canBack &&
                                (0, r.jsx)(W.L, { withForwardControl: !1, withBackwardControl: t.canBack, shouldFocusOnMount: !e, buttonSize: 'xxs' }),
                            (0, r.jsxs)('div', {
                                className: $().titleContainer,
                                children: [
                                    (0, r.jsx)(D.DZ, {
                                        variant: 'h1',
                                        weight: 'bold',
                                        size: 'xs',
                                        lineClamp: 1,
                                        className: $().title,
                                        children: (0, r.jsx)(I.A, { id: 'offline.downloaded-tracks' }),
                                    }),
                                    (0, r.jsx)(q, {}),
                                ],
                            }),
                            !a.isEmpty &&
                                (0, r.jsx)(B.D, {
                                    withRipple: !0,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: 's',
                                    color: 'primary',
                                    iconSize: 'xxs',
                                    isPlaying: _,
                                    onClick: p,
                                    className: $().playButton,
                                    ariaHidden: e,
                                    tabIndex: e ? -1 : 0,
                                    children: !s && (0, r.jsx)(I.A, { id: 'player-actions.listen' }),
                                }),
                        ],
                    }),
                });
            });
            var X = a(62932),
                Z = a.n(X);
            let J = (0, i.PA)(() =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(V, {}),
                        (0, r.jsxs)('div', {
                            className: Z().root,
                            'data-test-id': d.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE_EMPTY,
                            children: [
                                (0, r.jsx)(P.I, { className: Z().icon, size: 'l', variant: 'download' }),
                                (0, r.jsx)(D.DZ, { className: Z().title, variant: 'div', size: 'xs', children: (0, r.jsx)(I.A, { id: 'offline.downloaded-empty' }) }),
                                (0, r.jsx)(D.HL, {
                                    className: Z().text,
                                    variant: 'span',
                                    type: 'controls',
                                    size: 'l',
                                    weight: 'normal',
                                    children: (0, r.jsx)(I.A, { id: 'offline.download-for-offline' }),
                                }),
                            ],
                        }),
                    ],
                }),
            );
            var Q = a(93317);
            let ee = (0, i.PA)(() => {
                    let { isScrolling: e } = (0, n.useContext)(U.B),
                        t = (0, H.W)(),
                        { downloadedTracks: a } = (0, T.s)(N.n.MY_MUSIC),
                        {
                            settings: { isMobile: i },
                            slam: o,
                        } = (0, z.g)(),
                        { from: l } = (0, x.f)({ pageId: h.b.OWN_TRACKS, blockId: g.U.TRACK_LIST }),
                        c = (0, L.g)(),
                        _ = (0, R.P)(),
                        { isPlaying: m, togglePlay: p } = (0, F.D)({
                            playContextParams: {
                                contextData: { type: O.K.Various, meta: { id: h.b.DOWNLOADS_TRACKS }, from: l },
                                entitiesData: a.entitiesData,
                                loadContextMeta: !1,
                            },
                        }),
                        v = (0, u.c)(() => {
                            !_() && (p(), m || c());
                        });
                    return (0, r.jsx)(Q.Y, {
                        variant: Q.V.COMPOSITE,
                        'aria-hidden': !e,
                        stickyChild: (0, r.jsxs)('div', {
                            className: $().container,
                            'data-test-id': d.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE_STICKY_HEADER,
                            children: [
                                !o.isOfflineModeEnabled &&
                                    t.canBack &&
                                    (0, r.jsx)(W.L, { withForwardControl: !1, withBackwardControl: t.canBack, shouldFocusOnMount: !1, buttonSize: 'xxs' }),
                                (0, r.jsx)(D.DZ, {
                                    variant: 'h1',
                                    weight: 'bold',
                                    size: 'xs',
                                    lineClamp: 1,
                                    className: $().stickyTitle,
                                    children: (0, r.jsx)(I.A, { id: 'offline.downloaded-tracks' }),
                                }),
                                !a.isEmpty &&
                                    (0, r.jsx)(B.D, {
                                        withRipple: !0,
                                        buttonVariant: 'default',
                                        radius: 'xxxl',
                                        size: 's',
                                        color: 'primary',
                                        iconSize: 'xxs',
                                        isPlaying: m,
                                        onClick: v,
                                        className: (0, s.$)($().playButton, { [$().stickyPlayButton]: !i }),
                                        ariaHidden: !e,
                                        tabIndex: e ? 0 : -1,
                                        children: !i && (0, r.jsx)(I.A, { id: 'player-actions.listen' }),
                                    }),
                            ],
                        }),
                        stickyClassName: (0, s.$)($().stickyHeader, $().important),
                        staticClassName: (0, s.$)($().staticHeader, $().important),
                    });
                }),
                et = (0, i.PA)(() => {
                    var e;
                    let t = (0, y.j)(),
                        { contentScrollRef: a, setContentScrollRef: i } = (0, v.g)(),
                        { formatMessage: M } = (0, o.A)(),
                        { downloadedTracks: I } = (0, T.s)(N.n.MY_MUSIC),
                        { from: P } = (0, x.f)({ pageId: h.b.OWN_TRACKS, blockId: g.U.TRACK_LIST }),
                        D = I.entitiesData,
                        L = (0, u.c)(() => {
                            t.tracksController && I.getData(t.tracksController);
                        });
                    ((0, C.L)(L),
                        (0, n.useEffect)(() => {
                            I.isNeededToLoad && L();
                        }, [I.isNeededToLoad, L]),
                        (0, n.useEffect)(
                            () => () => {
                                I.reset();
                            },
                            [I],
                        ),
                        (0, k.J)(I.isResolved));
                    let O = (0, n.useMemo)(
                        () => ({ Header: () => (0, r.jsx)(V, {}), Footer: () => (0, r.jsx)(b.A, { children: (0, r.jsx)(S.w, { className: w().footer }) }) }),
                        [],
                    );
                    if (I.loadingState === A.G.REJECT) return (0, r.jsx)(m.SomethingWentWrong, {});
                    if (I.isEmpty) return (0, r.jsx)(J, {});
                    let R = (null == (e = I.items) ? void 0 : e.length) || 10;
                    return (0, r.jsx)(c.a, {
                        pageId: l.AppScreen.DownloadsTracks,
                        pageIdForFrom: h.b.DOWNLOADS_TRACKS,
                        children: (0, r.jsx)(p.h, {
                            scrollElement: a,
                            children: (0, r.jsxs)('div', {
                                className: w().pageContainer,
                                children: [
                                    (0, r.jsx)(ee, {}),
                                    (0, r.jsx)(j.$, {
                                        context: { listAriaLabel: M({ id: 'offline.downloaded-track-list' }) },
                                        className: (0, s.$)(w().root, w().important),
                                        listClassName: w().content,
                                        customComponents: O,
                                        totalCount: R,
                                        itemContentCallback: (e) => {
                                            var t;
                                            let a = null == (t = I.items) ? void 0 : t[e];
                                            return a
                                                ? (0, r.jsx)(_.D, { track: a, index: e, entitiesData: D, contextId: h.b.DOWNLOADS_TRACKS, from: P }, a.id)
                                                : (0, r.jsx)(f.D, { isActive: !0, className: w().trackShimmer, variant: E.X.PLAYLIST });
                                        },
                                        debounceDurationInMs: 300,
                                        initialItemCount: R,
                                        handleRef: i,
                                        shouldTriggerRangeChangedOn: [R],
                                        testId: d.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE,
                                    }),
                                ],
                            }),
                        }),
                    });
                });
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
        10829: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => v });
            var r = a(88800),
                s = a(65724),
                i = a(84961),
                n = a(53548),
                o = a(17392),
                l = a(34126),
                c = a(39079),
                d = a(72288),
                u = a(39267),
                _ = a(13619),
                m = a(73805),
                p = a(15232),
                g = a(56712),
                h = a(26243),
                x = a.n(h);
            let v = (0, i.PA)((e) => {
                var t;
                let {
                        track: a,
                        playContextParams: i,
                        className: h,
                        withDNDBlock: v,
                        isDragging: k,
                        draggingClassName: C,
                        ignoreDislikedStyles: y,
                        withSecondaryColor: T,
                        handleRemove: N,
                        withDislike: A,
                        withTrailer: E = !0,
                        beforeTitle: S,
                        removeButtonAriaLabel: b,
                        hideControls: f,
                    } = e,
                    j = (0, c.D)({ playContextParams: i, entityId: a.entityId }),
                    {
                        settings: { isMobile: M },
                    } = (0, d.g)(),
                    w = (0, l.X)(a.trackSource, { isMobile: M }),
                    I = (0, n.useCallback)(
                        (e) =>
                            (0, r.jsx)(u.q, {
                                isAvailable: a.isAvailable,
                                isDisliked: a.isDisliked,
                                coverUri: a.coverUri,
                                title: a.title,
                                className: x().playButtonCell,
                                ignoreDislikedStyles: y,
                                radius: 'xs',
                                ...e,
                            }),
                        [y, a.coverUri, a.isAvailable, a.isDisliked, a.title],
                    );
                return (0, r.jsx)(g.C, {
                    className: (0, s.$)(h, { [x().trackWithDots]: v, [x().important]: v }),
                    track: a,
                    beforeBlock: v ? (0, r.jsx)(_.O, { className: (0, s.$)(x().dots, C), isDragging: k }) : void 0,
                    meta: (0, r.jsx)(p.j, { withArtistLink: w, beforeTitle: S, track: a, ignoreDislikedStyles: y, withSecondaryColor: T }),
                    playButtonCellRender: I,
                    controls: (0, r.jsx)(m.Q, {
                        track: a,
                        className: x().controlsBarCell,
                        ignoreDislikedStyles: y,
                        utmLink: null == (t = i.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: T,
                        handleRemove: N,
                        withDislike: A,
                        withTrailer: E,
                        removeButtonAriaLabel: b,
                        hideControls: f,
                    }),
                    ...j,
                    'data-test-id': o.Kq.track.TRACK_PLAYLIST,
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
        11510: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => l });
            var r = a(53548),
                s = a(96820),
                i = a(29993),
                n = a(71978);
            let o = [s.DT.IDLE, s.DT.DOWNLOADED],
                l = (e) => {
                    var t;
                    let a = (0, n.j)(),
                        l = (0, i.c)((t) => {
                            let { state: a } = t;
                            o.includes(a.loadingState) && e();
                        });
                    (0, r.useEffect)(() => {
                        var t, r;
                        return (
                            null == (t = a.store) || t.tracks.events.on(s.je.STATE_CHANGED, e),
                            null == (r = a.store) || r.tracks.events.on(s.je.ENTITY_CHANGED, l),
                            () => {
                                var t, r;
                                (null == (t = a.store) || t.tracks.events.off(s.je.STATE_CHANGED, e),
                                    null == (r = a.store) || r.tracks.events.off(s.je.ENTITY_CHANGED, l));
                            }
                        );
                    }, [e, l, null == (t = a.store) ? void 0 : t.tracks.events]);
                };
        },
        13607: (e, t, a) => {
            'use strict';
            var r;
            (a.d(t, { _: () => r }),
                (function (e) {
                    ((e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new'));
                })(r || (r = {})));
        },
        13619: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => l });
            var r = a(88800),
                s = a(65724),
                i = a(52300),
                n = a(30907),
                o = a.n(n);
            let l = (e) => {
                let { isDragging: t, className: a } = e;
                return (0, r.jsx)(i.I, { variant: 'dragDots', size: 'xxs', className: (0, s.$)(o().root, { [o().root_active]: t }, a), 'aria-hidden': !0 });
            };
        },
        13797: (e) => {
            e.exports = {
                root: 'AlbumTrackShimmer_root__fBjbK',
                infoContainer: 'AlbumTrackShimmer_infoContainer__4fdAk',
                coverContainer: 'AlbumTrackShimmer_coverContainer__frW12',
                textContainer: 'AlbumTrackShimmer_textContainer__5wNPM',
                title: 'AlbumTrackShimmer_title__HC_Pa',
                cover: 'AlbumTrackShimmer_cover__36UkV',
                action: 'AlbumTrackShimmer_action__oI5t5',
            };
        },
        15232: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => E });
            var r = a(88800),
                s = a(65724),
                i = a(84961),
                n = a(53548),
                o = a(2058),
                l = a(58390),
                c = a(17392),
                d = a(79070),
                u = a(17610),
                _ = a(29504),
                m = a(13946),
                p = a(55693),
                g = a(72288),
                h = a(24548),
                x = a(85587),
                v = a(90224),
                k = a(91292),
                C = a(7608),
                y = a(6667),
                T = a(85463),
                N = a(65462),
                A = a.n(N);
            let E = (0, i.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: a,
                        track: i,
                        albumArtists: N,
                        withExplicitMark: E,
                        withSecondaryColor: S,
                        captionSize: b = 'm',
                        explicitSize: f = 'xxxs',
                        withAllArtistsTitle: j,
                        textClassName: M,
                        artistsClassName: w,
                        ignoreDislikedStyles: I,
                        withCustomTooltip: P = !0,
                        hasLineClamp: D = !0,
                        withSavingQueryParams: L,
                        beforeTitle: O,
                        withArtistLink: R,
                        variant: H,
                        withTrackLink: F,
                        afterTitle: z,
                        withContextMenuArtists: U,
                    } = e,
                    { formatMessage: W } = (0, o.A)(),
                    { sendNavigateSearchFeedback: B } = (0, p.z)(),
                    {
                        settings: { isMobile: Y },
                        slam: K,
                    } = (0, g.g)(),
                    q = (0, y.$)({ withCustomTooltip: P }),
                    G = (0, l.useSearchParams)(),
                    $ = (0, C.B)(i, {
                        isMobile: Y,
                        isOfflineModeEnabled: K.isOfflineModeEnabled,
                        albumArtists: N,
                        withTrackLink: F,
                        withArtistLink: R,
                        variant: H,
                        withExplicitMark: E,
                        query: L ? Object.fromEntries(G) : void 0,
                    }),
                    {
                        displayTitle: V,
                        ariaLabel: X,
                        tooltipText: Z,
                        titleAttribute: J,
                        versionTitleAttribute: Q,
                        isTooltipEnabled: ee,
                    } = ((e, t, a, r) => {
                        var s, i;
                        let { canEnableCustomTooltip: n, isMobile: o } = a,
                            l = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, r),
                            c = t.shouldShowRemovedTitle ? l : ''.concat(l, ' ').concat(null != (s = t.version) ? s : ''),
                            d = r({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: l,
                            ariaLabel: ''.concat(d, ' ').concat(null != (i = e.version) ? i : ''),
                            tooltipText: c,
                            isTooltipEnabled: n && !o,
                            titleAttribute: !n && (t.shouldShowRemovedTitle || t.link) ? c : void 0,
                            versionTitleAttribute: n ? void 0 : t.version,
                        };
                    })(i, $, { canEnableCustomTooltip: q, isMobile: Y }, W),
                    et = (0, T.O)({ track: i, onNavigate: B, withSavingQueryParams: L, entityType: x.n.TRACK }),
                    ea = (0, n.useCallback)(
                        (e) =>
                            (0, r.jsx)(u.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: Z,
                                hoverSettings: h.V,
                                children: (0, r.jsx)(_.HL, {
                                    className: (0, s.$)(A().text, A().title),
                                    type: 'entity',
                                    size: b,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: V,
                                }),
                            }),
                        [b, V, Z, ee],
                    ),
                    er = (0, d.L)(() =>
                        $.shouldShowRemovedTitle
                            ? (0, r.jsx)(u.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: Z,
                                  hoverSettings: h.V,
                                  children: (0, r.jsx)(_.HL, {
                                      className: (0, s.$)(A().text, A().title),
                                      type: 'entity',
                                      size: b,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: J,
                                      children: V,
                                  }),
                              })
                            : $.link
                              ? (0, r.jsx)(k.N, {
                                    onClick: et,
                                    className: A().albumLink,
                                    href: $.link.href,
                                    'aria-label': X,
                                    title: J,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: ea(),
                                })
                              : ea({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    es = (0, n.useMemo)(() => +!!D, [D]);
                return (0, r.jsx)('div', {
                    className: (0, s.$)(A().root, { [A().root_disabled]: !i.isAvailable, [A().root_disliked]: i.isDisliked && !I, [A().root_withSecondaryColor]: S }, t),
                    children: (0, r.jsxs)('div', {
                        className: A().metaContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: (0, s.$)(A().titleContainer, { [A().titleContainer_withVersion]: i.version }, a),
                                children: [
                                    (0, r.jsxs)(_.HL, {
                                        className: (0, s.$)(A().text, M),
                                        type: 'entity',
                                        size: b,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            O,
                                            er,
                                            $.version &&
                                                (0, r.jsxs)(_.HL, {
                                                    className: (0, s.$)(A().text, A().version),
                                                    type: 'entity',
                                                    size: b,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: Q,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', $.version],
                                                }),
                                        ],
                                    }),
                                    $.explicitMark &&
                                        (0, r.jsx)(v.N, {
                                            containerClassName: A().explicitMarkContainer,
                                            getDescriptionTexts: i.getDescriptionTexts,
                                            size: f,
                                            variant: $.explicitMark,
                                            className: A().explicitMark,
                                            trackId: i.id,
                                        }),
                                    z,
                                ],
                            }),
                            $.artists.length > 0 &&
                                (0, r.jsx)(m.i, {
                                    className: (0, s.$)(A().text, { [A().artists]: D }, w, M),
                                    withAllArtistsTitle: j,
                                    linkClassName: (0, s.$)(A().text, A().link),
                                    captionClassName: (0, s.$)(A().text, A().artistCaption),
                                    artists: $.artists,
                                    withLink: $.withArtistLink,
                                    lineClamp: es,
                                    captionSize: b,
                                    withContextMenu: U,
                                }),
                        ],
                    }),
                });
            });
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
        20551: (e, t, a) => {
            'use strict';
            a.d(t, { MyMusicPageStoreProvider: () => u });
            var r = a(34961),
                s = a(53892),
                i = a(5120),
                n = a(55025),
                o = a(74773);
            let l = i.gK.model('MyMusicPage', { downloadedTracks: n.b }),
                c = { downloadedTracks: { loadingState: o.G.IDLE } },
                { pageStoreProvider: d } = (0, r.W)({ createStore: (e) => l.create(c, e), patchKey: s.n.MY_MUSIC }),
                u = d;
        },
        26243: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
        },
        26827: (e) => {
            e.exports = {
                root: 'NotFound_root__47ZX6',
                root_desktop: 'NotFound_root_desktop___QqSb',
                container: 'NotFound_container__h1XeE',
                navigation: 'NotFound_navigation__q8rIW',
                content: 'NotFound_content__3kry_',
                icon: 'NotFound_icon___Wa9y',
                title: 'NotFound_title__akG_o',
                important: 'NotFound_important__z1LWl',
                text: 'NotFound_text__oxDZv',
                button: 'NotFound_button__jF4uH',
            };
        },
        26835: (e) => {
            e.exports = {
                root: 'PlaylistTrackShimmer_root__nZ9KR',
                infoContainer: 'PlaylistTrackShimmer_infoContainer__xLd7a',
                textContainer: 'PlaylistTrackShimmer_textContainer__QI5cC',
                title: 'PlaylistTrackShimmer_title__MojYd',
                cover: 'PlaylistTrackShimmer_cover__xyDhR',
                action: 'PlaylistTrackShimmer_action__tT5xx',
            };
        },
        27157: (e) => {
            e.exports = {
                root: 'CommonTrack_root__i6shE',
                root_disabled: 'CommonTrack_root_disabled__vDyCm',
                root_current: 'CommonTrack_root_current__MNrpS',
                ripple: 'CommonTrack_ripple__wnpUs',
            };
        },
        30907: (e) => {
            e.exports = { root: 'DragAndDropIcon_root__OstQU', root_active: 'DragAndDropIcon_root_active__xOTKt' };
        },
        31510: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => r });
            let r = (e) => ({ uri: e.uri, color: e.color });
        },
        32596: (e, t, a) => {
            'use strict';
            a.d(t, { SomethingWentWrong: () => P });
            var r = a(88800),
                s = a(65724),
                i = a(84961),
                n = a(53548),
                o = a(2058),
                l = a(88969);
            a(30282);
            var c = a(96817),
                d = a(52300),
                u = a(29504),
                _ = a(97234),
                m = a(59714),
                p = a(43054),
                g = a(18117),
                h = a(93940),
                x = a(24709);
            let v = (0, x.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, p.s)()) ? void 0 : e.evgenInstance,
                        { hash: a } = (0, g.g)(),
                        { screen: r } = (0, h.j)();
                    return {
                        sendRefreshEvent: (0, n.useCallback)(() => {
                            if (!t || !a || !(null == r ? void 0 : r.pageId)) return;
                            let e = {
                                actionType: _.ActionType.Refresh,
                                userInteractionType: _.UserInteractionType.Tap,
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                hash: a,
                                pageId: r.pageId,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, m.bv)(t, e);
                        }, [t, a, null == r ? void 0 : r.pageId]),
                    };
                }),
                k = (0, x.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let a = null == (t = (0, p.s)()) ? void 0 : t.evgenInstance,
                        { hash: r } = (0, g.g)(),
                        { screen: s } = (0, h.j)();
                    (0, n.useEffect)(() => {
                        if (!a || !r || !(null == s ? void 0 : s.pageId)) return;
                        let t = {
                            entityType: _.EntityTypes.Error,
                            entityId: _.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: r,
                            pageId: s.pageId,
                            pageStyle: _.PageStyles.Fullscreen,
                            pagePlacement: _.PagePlacements.Fullscreen,
                            mainObjectType: _.DomainObjectType.NonApplicable,
                            mainObjectId: _.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, m.z5)(a, t);
                    }, [a, e, r, null == s ? void 0 : s.pageId]);
                });
            var C = a(44230),
                y = a(4370),
                T = a(72288),
                N = a(97956),
                A = a(56248),
                E = a(90688),
                S = a(78940);
            let b = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var f = a(96856),
                j = a.n(f);
            let M = (0, i.PA)((e) => {
                let { className: t, withBackwardControl: a = !0, onBack: i } = e,
                    { slam: n } = (0, T.g)(),
                    { contentRef: o } = (0, C.g)(),
                    d = (0, S.Z)(y.Z.mymusicDownloadsTracks.href);
                return (0, r.jsxs)('div', {
                    className: (0, s.$)(j().root, t),
                    children: [
                        a &&
                            (0, r.jsx)(A.L, {
                                withBackwardFallback: '/',
                                className: (0, s.$)(j().navigation, { [j().navigation_desktop]: !o }),
                                withForwardControl: !1,
                                onBackwardClick: i,
                            }),
                        (0, r.jsxs)('div', {
                            className: (0, s.$)(j().content, { [j().content_shrink]: !a }),
                            children: [
                                (0, r.jsx)(E._V, { className: j().image, src: b.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, r.jsxs)('div', {
                                    className: j().message,
                                    children: [
                                        (0, r.jsx)(u.DZ, {
                                            className: j().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, r.jsx)(l.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, r.jsx)(u.HL, {
                                            className: j().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, r.jsx)(l.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                n.hasDownloadedTracks &&
                                    (0, r.jsx)(c.$, {
                                        className: j().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, r.jsx)(u.HL, {
                                            className: j().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, r.jsx)(l.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var w = a(9184),
                I = a.n(w);
            let P = (0, i.PA)((e) => {
                let { className: t, withBackwardControl: a = !0, onBack: i } = e,
                    { formatMessage: _ } = (0, o.A)(),
                    m = (0, n.useContext)(T.P),
                    p = null == m ? void 0 : m.experiments.checkExperiment(N.z.WebNextUnstableMusicScreen, 'on'),
                    g = _(p ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                k(g);
                let { sendRefreshEvent: h } = v(),
                    x = (0, n.useCallback)(() => {
                        (h(), (window.location.href = y.Z.main.href));
                    }, [h]),
                    { contentRef: E } = (0, C.g)();
                return p
                    ? (0, r.jsx)(M, { className: t, withBackwardControl: a, onBack: i })
                    : (0, r.jsxs)('div', {
                          className: (0, s.$)(I().root, t),
                          children: [
                              a &&
                                  (0, r.jsx)(A.L, {
                                      withBackwardFallback: '/',
                                      className: (0, s.$)(I().navigation, { [I().navigation_desktop]: !E }),
                                      withForwardControl: !1,
                                      onBackwardClick: i,
                                  }),
                              (0, r.jsxs)('div', {
                                  className: (0, s.$)(I().content, { [I().content_shrink]: !a }),
                                  children: [
                                      (0, r.jsx)(d.I, { className: I().icon, variant: 'attention', size: 'xxl' }),
                                      (0, r.jsx)(u.DZ, { className: (0, s.$)(I().title, I().important), variant: 'h3', size: 'xs', children: g }),
                                      (0, r.jsxs)(u.HL, {
                                          className: (0, s.$)(I().text, I().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, r.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, r.jsx)(c.$, {
                                          onClick: x,
                                          className: I().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, r.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, r.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        34961: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => h, s: () => x });
            var r = a(88800),
                s = a(84961),
                i = a(58390),
                n = a(53548),
                o = a(35412),
                l = a(39499),
                c = a(89108),
                d = a(70003),
                u = a(72288),
                _ = a(16818);
            (0, s.eO)(!1);
            let m = (0, n.createContext)(null),
                p = (e) => {
                    let { children: t, store: a, storeKey: s } = e,
                        i = (0, n.useMemo)(() => ({ store: a, storeKey: s }), [a, s]);
                    return (0, r.jsx)(m.Provider, { value: i, children: t });
                },
                g = (e) => {
                    let { nonce: t, patchKey: a, patchesRef: s } = e;
                    return (
                        (0, i.useServerInsertedHTML)(() => {
                            let e = s.current;
                            return ((s.current = []), 0 === e.length)
                                ? null
                                : (0, r.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, o.Gr)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(a, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                h = (e) => {
                    let { createStore: t, patchKey: a } = e,
                        s = () => {
                            var e, t;
                            let r = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[a]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[a], r);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: i, nonce: n } = e,
                                o = (0, _.Y)(),
                                l = (0, u.g)(),
                                { store: m, patchesRef: h } = (0, d.m)({
                                    createStore: () => t({ ...o, rootStore: l }),
                                    getPendingPatchBatches: s,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(g, { nonce: n, patchKey: a, patchesRef: h }), (0, r.jsx)(p, { store: m, storeKey: a, children: i })],
                            });
                        },
                    };
                };
            function x(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = (0, n.useContext)(m);
                if (!a || a.storeKey !== e) {
                    var r;
                    if (!t) return null;
                    throw new l.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (r = null == a ? void 0 : a.storeKey) ? r : 'null', expectedStoreKey: e },
                    });
                }
                return a.store;
            }
        },
        37670: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => i });
            var r = a(53548);
            a(30282);
            var s = a(58390);
            let i = (e) => {
                let t = (0, s.usePathname)(),
                    [a, i] = (0, r.useState)(!1);
                ((0, r.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, r.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !a && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), i(!0));
                    }, [e, a, t]));
            };
        },
        38514: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => s });
            var r = a(67174);
            let s = (e) => (0, r.u)('/album/:albumId', { params: { albumId: e } });
        },
        41867: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        42078: (e, t, a) => {
            'use strict';
            var r;
            (a.d(t, { _: () => r }),
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
                })(r || (r = {})));
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
        47580: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => r });
            let r = (e) => e.map((e) => e.name).join(', ');
        },
        53892: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => r });
            let r = {
                MIXES: 'pages/mixes',
                TAG: 'pages/tag',
                GENRES: 'pages/genres',
                PROMOLANDING: 'pages/promolanding',
                MUSIC_HISTORY: 'pages/music-history',
                POST: 'pages/post',
                PLAYLIST_PERSONAL: 'pages/playlist-personal',
                MY_MUSIC: 'pages/my-music',
                FAVORITE_TRACKS: 'pages/favorite-tracks',
                COLLECTION_VIBES: 'pages/collection-vibes',
                CONCERTS_DETAILS: 'pages/concerts-details',
                LANDING_PROMO_PREVIEW: 'pages/landing-promo-preview',
                LABEL: 'pages/label',
                GENRE: 'pages/genre',
                CHART: 'pages/chart',
            };
        },
        55025: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => c });
            var r = a(5120),
                s = a(44349),
                i = a(76626),
                n = a(96826),
                o = a(74773),
                l = a(59497);
            let c = r.gK
                .compose(r.gK.model('DownloadedTracks', { items: r.gK.maybeNull(r.gK.array(n.v)), tracks: r.gK.maybeNull(r.gK.frozen()) }), l.X)
                .views((e) => ({
                    get tracksDurationInMinutes() {
                        var t, a;
                        return (null != (a = null == (t = e.tracks) ? void 0 : t.reduce((e, t) => (t.durationMs ? e + t.durationMs : e), 0)) ? a : 0) / 1e3 / 60;
                    },
                    get entitiesData() {
                        if (!e.tracks) return [];
                        return e.tracks.map((e) => ({ type: s.R.DownloadedMusic, meta: e }));
                    },
                    get isEmpty() {
                        var r;
                        return e.isResolved && (null == (r = e.items) ? void 0 : r.length) === 0;
                    },
                }))
                .actions((e) => ({
                    getData: (0, r.L3)(function* (t, a) {
                        let { modelActionsLogger: s } = (0, r._$)(e);
                        if (e.loadingState !== o.G.PENDING)
                            try {
                                e.loadingState = o.G.PENDING;
                                let s = yield t.getTracks(a);
                                ((e.tracks = s), (e.items = (0, r.wg)(s.map((e) => (0, i.v)(e)))), e.loadingState !== o.G.IDLE && (e.loadingState = o.G.RESOLVE));
                            } catch (t) {
                                (s.error(t), e.loadingState !== o.G.IDLE && (e.loadingState = o.G.REJECT));
                            }
                    }),
                    reset() {
                        ((e.items = null), (e.tracks = null), (e.loadingState = o.G.IDLE));
                    },
                }));
        },
        56446: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => u });
            var r = a(88800),
                s = a(53548),
                i = a(2058),
                n = a(17392),
                o = a(96817),
                l = a(52300),
                c = a(39318);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: a,
                            size: s,
                            radius: d,
                            iconSize: u,
                            disabled: _,
                            onClick: m,
                            iconClassName: p,
                            className: g,
                            forwardRef: h,
                            style: x,
                            children: v,
                        } = e,
                        { formatMessage: k } = (0, i.A)(),
                        C = k({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(o.$, {
                        className: g,
                        color: 'secondary',
                        radius: d,
                        size: s,
                        variant: t,
                        withRipple: a,
                        flexIcon: !0,
                        'aria-label': C,
                        onClick: m,
                        ref: h,
                        icon: (0, r.jsx)(l.I, { variant: 'trailer', size: u, className: p }),
                        disabled: _,
                        'data-intersection-property-id': c.N,
                        style: x,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: v,
                    });
                },
                u = (0, s.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
        },
        56712: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => N });
            var r = a(88800),
                s = a(65724),
                i = a(84961),
                n = a(53548),
                o = a(91177),
                l = a(46482),
                c = a(29993),
                d = a(52073),
                u = a(5407),
                _ = a(9618),
                m = a(4795),
                p = a(55693),
                g = a(7123),
                h = a(72288),
                x = a(8990),
                v = a(2058),
                k = a(47580),
                C = a(95993),
                y = a(27157),
                T = a.n(y);
            let N = (0, i.PA)((e) => {
                var t;
                let {
                        className: a,
                        track: i,
                        meta: y,
                        beforeBlock: N,
                        controls: A,
                        playButtonCellRender: E,
                        withLightning: S,
                        isPlaying: b,
                        isCurrent: f,
                        togglePlay: j,
                        restartPlay: M,
                        onPlayClick: w,
                        playButtonIconSize: I,
                        skipFreemiumCloseListeningPaywall: P = !1,
                        ...D
                    } = e,
                    { shouldShowBuySubscriptionModal: L, showBuySubscriptionModal: O } = (0, _.q)(),
                    {
                        track: R,
                        fullscreenPlayer: H,
                        settings: { isMobile: F },
                        album: z,
                        albumCPA: { isPlusCPAPlayerBarEnabled: U },
                        paywall: { modal: W },
                    } = (0, h.g)(),
                    B = (0, o.D)(),
                    Y = (0, l.g)(),
                    K = (0, u.P)(),
                    q = ((e) => {
                        let { track: t, withLightning: a } = e,
                            { formatMessage: r } = (0, v.A)();
                        return ((e, t, a) => {
                            var r;
                            let { withLightning: s } = t,
                                i = (0, k.j)(null != (r = e.artists) ? r : []);
                            return e.isAvailable
                                ? [i, e.title, e.version, s && a({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                                : ''
                                      .concat(a({ id: 'extra-explicit.play-unavailable' }), ' ')
                                      .concat(i, ' ')
                                      .concat(e.title);
                        })(t, { withLightning: a }, r);
                    })({ withLightning: S, track: i }),
                    G = ((e) => {
                        let { sonataState: t } = (0, h.g)(),
                            a = t.status === g.MT.LOADING_MEDIA_SOURCE || t.status === g.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let r = t.entityMeta.entityId;
                            return a && r === e;
                        }
                        return a;
                    })(i.entityId),
                    $ = U(z.id, null == (t = z.meta) ? void 0 : t.isNonMusic),
                    V = i.isAvailable && L && !$,
                    X = (0, m.N)(),
                    Z = i.isAvailable && X && !$ && !P,
                    J = (0, C.w)({ track: i, callback: j }),
                    Q = (0, c.c)(() => {
                        R.open({ trackId: i.id, albumId: i.albumId });
                    }),
                    ee = (0, C.w)({ track: i, callback: Q }),
                    { sendPlaySearchFeedback: et } = (0, p.z)(),
                    [ea, er] = (0, n.useState)(!1),
                    es = (0, c.c)(() => {
                        if (!K()) {
                            if (V) return void O();
                            if (Z) return void W.open();
                            (ea || b || (er(!0), null == et || et()), J(), b || Y(), null == w || w(!b));
                        }
                    }),
                    ei = (0, c.c)(() => {
                        if (b) return void M();
                        es();
                    }),
                    en = (0, c.c)((e) => {
                        if (!i.isAvailable && !i.hasModalAccess) {
                            (L && i.isAvailableOnlyForPlus && O(), X && i.isAvailableOnlyForPlus && W.open());
                            return;
                        }
                        if (V) return void O();
                        let t = !F && (2 === e.detail || (1 === e.detail && i.hasTrackLink && !H.modal.isOpened));
                        return Z && !t
                            ? void W.open()
                            : ((0, d.P)(e, T().ripple), F)
                              ? void es()
                              : 2 === e.detail
                                ? void ei()
                                : void (1 === e.detail && i.hasTrackLink && !H.modal.isOpened && (ee(), Z && W.open()));
                    }),
                    eo = null == E ? void 0 : E({ onPlayButtonClick: es, isPlaying: b, isCurrent: f, isLoading: G, playButtonIconSize: I });
                return (0, r.jsxs)(x.C, {
                    ref: B,
                    'aria-label': q,
                    // for PulseSync WebHost: BEGIN publish the track ID on the native track DOM element for addons
                    'data-pulsesync-track-id': i.id,
                    // for PulseSync WebHost: END publish the track ID on the native track DOM element for addons
                    onClick: en,
                    className: (0, s.$)(T().root, { [T().root_disabled]: !i.isAvailable, [T().root_current]: f && F }, a),
                    ...D,
                    children: [N, eo, y, A],
                });
            });
        },
        57328: (e, t, a) => {
            'use strict';
            a.d(t, { WithAuth: () => g });
            var r = a(88800),
                s = a(84961),
                i = a(58390),
                n = a(65724),
                o = a(88969),
                l = a(29504),
                c = a(7628),
                d = a(42674),
                u = a.n(d);
            let _ = (0, s.PA)(() =>
                (0, r.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, r.jsx)(l.DZ, {
                            className: (0, n.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, r.jsx)(o.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, r.jsx)(l.HL, {
                            className: (0, n.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, r.jsx)(o.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, r.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = a(4370),
                p = a(72288);
            let g = (0, s.PA)((e) => {
                let { children: t, withRedirectToMainPage: a } = e,
                    { user: s } = (0, p.g)();
                return s.isAuthorized ? t : (a && (0, i.redirect)(m.Z.main.href), (0, r.jsx)(_, {}));
            });
        },
        57448: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => i });
            var r = a(4086),
                s = a(41928);
            let i = () => {
                let e = (0, s.N)(),
                    t = e.get(r.$I),
                    a = e.get(r.EN),
                    i = e.get(r.N1),
                    n = e.get(r._1),
                    o = e.get(r.V3),
                    l = e.get(r.Lb),
                    c = e.get(r.wK),
                    d = e.get(r.tz),
                    u = e.get(r.$8),
                    _ = e.get(r.Oo),
                    m = e.get(r.X4),
                    p = e.get(r.O9),
                    g = e.get(r.E),
                    h = e.get(r.wH),
                    x = e.get(r.ok),
                    v = e.get(r.X8),
                    k = e.get(r.yq),
                    C = e.get(r.NN),
                    y = e.get(r.qN),
                    T = e.get(r.ro),
                    N = e.get(r.nM),
                    A = e.get(r.Ut),
                    E = e.get(r.K1),
                    S = e.get(r.eu),
                    b = e.get(r.SD),
                    f = e.get(r.aE),
                    j = e.get(r.ki),
                    M = e.get(r.c9),
                    w = e.get(r.en),
                    I = e.get(r.jQ),
                    P = e.get(r.cZ),
                    D = e.get(r.Zl),
                    L = e.get(r.CN),
                    O = e.get(r.P1),
                    R = e.get(r.zj),
                    H = e.get(r.re),
                    F = e.get(r.JM),
                    z = e.get(r.Lk),
                    U = e.get(r.$$),
                    W = e.get(r.sv),
                    B = e.get(r.gd),
                    Y = e.get(r.Ez),
                    K = e.get(r.u2),
                    q = e.get(r.TD),
                    G = e.get(r.dh),
                    $ = e.get(r.LC),
                    V = e.get(r.PL),
                    X = e.get(r.DT);
                return {
                    accountResource: t,
                    afterTrackResource: a,
                    disclaimersResource: i,
                    usersResource: n,
                    landingResource: o,
                    landing3Resource: l,
                    landingBlocksResource: c,
                    albumResource: d,
                    libraryResource: u,
                    tracksResource: _,
                    topResource: m,
                    artistsResource: p,
                    slidesResource: g,
                    redAlertResource: h,
                    rotorResource: x,
                    waveResource: v,
                    searchResource: k,
                    searchPlaylistResource: C,
                    playlistResource: y,
                    playlistsResource: T,
                    pinResource: N,
                    metatagsResource: A,
                    tagResource: E,
                    feedResource: S,
                    wizard3Resource: b,
                    pinsResource: f,
                    musicHistoryResource: j,
                    dynamicPagesResource: M,
                    chartResource: w,
                    clipsResource: I,
                    lyricViewsResource: P,
                    nonMusicResource: D,
                    donationResource: L,
                    loaderResource: O,
                    lumenResource: R,
                    prefixlessResource: H,
                    streamsResource: F,
                    filtersResource: z,
                    ugcResource: U,
                    collectionResource: W,
                    adsResource: B,
                    personalResource: Y,
                    familyResource: K,
                    childrenLandingResource: q,
                    promoResource: G,
                    telemetryResource: $,
                    labelsResource: V,
                    concertsResource: X,
                    wordsResource: e.get(r.dA),
                    wheelResource: e.get(r.$Y),
                };
            };
        },
        60266: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => n });
            var r = a(88800);
            a(30282);
            var s = a(11006),
                i = a.n(s);
            let n = (e) => {
                let { children: t } = e;
                return (0, r.jsx)('footer', { className: i().empty });
            };
        },
        62293: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => s });
            var r = a(97956);
            let s = (e) => {
                let { checkExperiment: t, getDisclaimerContent: a, getExplicitContent: s, userRegion: i } = e;
                return 'ru' === i && t(r.z.WebNextFooterDisclaimer, 'on') ? a() : s();
            };
        },
        62932: (e) => {
            e.exports = {
                root: 'MyMusicDownloadedTracksPageEmpty_root__LAXpY',
                icon: 'MyMusicDownloadedTracksPageEmpty_icon__PDhk2',
                title: 'MyMusicDownloadedTracksPageEmpty_title__g2w5R',
                text: 'MyMusicDownloadedTracksPageEmpty_text__8RJFg',
            };
        },
        64462: (e, t, a) => {
            'use strict';
            (a.r(t), a.d(t, { NotFound: () => M }));
            var r = a(88800),
                s = a(65724),
                i = a(84961),
                n = a(88969);
            a(30282);
            var o = a(97234),
                l = a(36740),
                c = a(59724),
                d = a(17392),
                u = a(96817),
                _ = a(52300),
                m = a(66719),
                p = a(29504),
                g = a(98427),
                h = a(53548),
                x = a(59714),
                v = a(43054),
                k = a(18117);
            let C = (0, a(24709).n)({ event: 'Screen.Navigated', kind: 'hook', requiredScopes: [] }, function (e) {
                var t;
                let a = null == (t = (0, v.s)()) ? void 0 : t.evgenInstance,
                    { hash: r } = (0, k.g)();
                return {
                    handleNavigateToMain: (0, h.useCallback)(() => {
                        if (!a || !r) return;
                        let t = {
                            hash: r,
                            pageId: o.AppScreen.PageNotFoundScreen,
                            pageStyle: o.PageStyles.Fullscreen,
                            pagePlacement: o.PagePlacements.Fullscreen,
                            mainObjectType: o.DomainObjectType.NonApplicable,
                            mainObjectId: o.DomainObjectType.NonApplicable,
                            from: o.AppScreen.PageNotFoundScreen,
                            to: o.AppScreen.MainScreen,
                            entityType: o.EntityTypes.Error,
                            entityId: o.EntityTypes.Error,
                        };
                        (Object.values(t).some((e) => void 0 === e) || (0, x.Mu)(a, t), e());
                    }, [a, r, e]),
                };
            });
            var y = a(44230),
                T = a(4370),
                N = a(78940),
                A = a(95210),
                E = a(56248),
                S = a(72288),
                b = a(26827),
                f = a.n(b);
            let j = (0, i.PA)((e) => {
                    let { className: t, title: a, description: i, iconVariant: o = 'musicLogo', iconClassName: c, iconSize: g } = e,
                        { contentRef: x, setContentScrollRef: v } = (0, y.g)(),
                        k = (0, N.Z)(T.Z.main.href);
                    (0, l.u)();
                    let { handleNavigateToMain: b } = C(k);
                    return (
                        (0, A.N)(!0),
                        !(function () {
                            let { location: e } = (0, S.g)();
                            (0, h.useEffect)(
                                () => (
                                    e.setNotFound(!0),
                                    () => {
                                        e.setNotFound(!1);
                                    }
                                ),
                                [e],
                            );
                        })(),
                        (0, r.jsxs)(m.N, {
                            className: (0, s.$)(f().root, { [f().root_desktop]: !x }, t),
                            containerClassName: f().container,
                            ref: v,
                            'data-test-id': d.e8.notFound.NOT_FOUND,
                            children: [
                                (0, r.jsx)(E.L, { withBackwardFallback: '/', className: f().navigation, withForwardControl: !1 }),
                                (0, r.jsxs)('div', {
                                    className: f().content,
                                    children: [
                                        (0, r.jsx)(_.I, { className: (0, s.$)(f().icon, c), variant: o, size: g }),
                                        (0, r.jsx)(p.DZ, {
                                            className: (0, s.$)(f().title, f().important),
                                            variant: 'h3',
                                            size: 'xs',
                                            'data-test-id': d.e8.notFound.NOT_FOUND_TITLE,
                                            children: a || (0, r.jsx)(n.A, { id: 'page-error.page-does-not-exist' }),
                                        }),
                                        (0, r.jsx)(p.HL, {
                                            className: (0, s.$)(f().text, f().important),
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'normal',
                                            children: i || (0, r.jsx)(n.A, { id: 'page-error.page-does-not-exist-description' }),
                                        }),
                                        (0, r.jsx)(u.$, {
                                            onClick: b,
                                            className: f().button,
                                            role: 'link',
                                            color: 'secondary',
                                            size: 'l',
                                            radius: 'xxxl',
                                            children: (0, r.jsx)(p.HL, {
                                                type: 'controls',
                                                variant: 'span',
                                                size: 'm',
                                                children: (0, r.jsx)(n.A, { id: 'navigation.page-main' }),
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                }),
                M = (e) =>
                    (0, r.jsx)(c.a, {
                        pageId: o.AppScreen.PageNotFoundScreen,
                        pageIdForFrom: g.b.PAGE_NOT_FOUND_SCREEN,
                        pageStyle: o.PageStyles.Fullscreen,
                        pagePlacement: o.PagePlacements.Fullscreen,
                        mainObjectType: o.DomainObjectType.NonApplicable,
                        mainObjectId: o.DomainObjectType.NonApplicable,
                        children: (0, r.jsx)(j, { ...e }),
                    });
        },
        65523: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => o });
            var r = a(4086),
                s = a(41928),
                i = a(44084);
            let n = new WeakMap(),
                o = () =>
                    ((e) => {
                        if (e instanceof i.r) return e;
                        let t = n.get(e);
                        if (t) return t;
                        let a = {
                            log: (t, a) => e.info(t, a),
                            trace: (t, a) => e.trace(t, a),
                            debug: (t, a) => e.debug(t, a),
                            info: (t, a) => e.info(t, a),
                            warn: (t, a) => e.warn(t, a),
                            error: (t, a) => e.error(t, a),
                            fatal: (t, a) => e.fatal(t, a),
                            child: (t) => e.child(t),
                        };
                        return (n.set(e, a), a);
                    })((0, s.N)().get(r.Zf));
        },
        66363: (e, t, a) => {
            'use strict';
            a.d(t, { NS: () => i, Nh: () => s, xW: () => n });
            var r = a(9519);
            let s = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
            class i {
                getHeaders(e) {
                    return e instanceof Headers ? Object.fromEntries(e.entries()) : e;
                }
                getUrl(e) {
                    return new URL(e || 'https://unknown');
                }
                constructor(e) {
                    ((0, r._)(this, 'logger', void 0),
                        (0, r._)(this, 'beforeRequestHook', (e) => {
                            let t = this.getUrl(e.url);
                            this.logger.info('[Resource] Request started '.concat(e.method, ' ').concat(t.origin, ' ').concat(t.pathname).concat(t.search), {
                                request: { method: e.method, url: e.url, headers: this.getHeaders(e.headers), body: e.json },
                            });
                        }),
                        (0, r._)(this, 'beforeRetryHook', (e, t) => {
                            let a = e.cause;
                            if (s(a)) {
                                var r, i, n, o, l, c, d, u, _, m, p, g, h, x;
                                let s = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (r = a.request) ? void 0 : r.method) || (null == (i = a.options) ? void 0 : i.method),
                                        url: (null == (n = a.request) ? void 0 : n.url) || (null == (o = a.options) ? void 0 : o.url),
                                        headers: this.getHeaders((null == (l = a.request) ? void 0 : l.headers) || (null == (c = a.options) ? void 0 : c.headers)),
                                        body: (null == (d = a.request) ? void 0 : d.json) || (null == (u = a.options) ? void 0 : u.json),
                                        retries: t,
                                    },
                                };
                                void 0 !== a.response &&
                                    (s.response = {
                                        statusCode: a.response.statusCode,
                                        headers: this.getHeaders(a.response.headers),
                                        time: null == (x = a.response.timings) || null == (h = x.phases) ? void 0 : h.total,
                                    });
                                let v = this.getUrl((null == (_ = a.request) ? void 0 : _.url) || (null == (m = a.options) ? void 0 : m.url));
                                this.logger.warn(
                                    '[Resource] Retry request '
                                        .concat((null == (p = a.request) ? void 0 : p.method) || (null == (g = a.options) ? void 0 : g.method), ' ')
                                        .concat(v.origin, ' ')
                                        .concat(v.pathname)
                                        .concat(v.search),
                                    s,
                                );
                            } else
                                this.logger.warn('[Resource] Retry request (unknown)', {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                });
                        }),
                        (0, r._)(this, 'afterResponseHook', (e) => {
                            if ((e.statusCode || e.status) >= 200 && 299 >= (e.statusCode || e.status)) {
                                var t, a;
                                let r = this.getUrl(e.url);
                                this.logger.info(
                                    '[Resource] Request resolved '
                                        .concat(e.statusCode, ' ')
                                        .concat(e.request.method, ' ')
                                        .concat(r.origin, ' ')
                                        .concat(r.pathname)
                                        .concat(r.search),
                                    {
                                        request: { method: e.request.method, url: e.url, headers: this.getHeaders(e.request.headers), body: e.request.body },
                                        response: {
                                            statusCode: e.statusCode || e.status,
                                            headers: this.getHeaders(e.headers),
                                            time: null == (a = e.timings) || null == (t = a.phases) ? void 0 : t.total,
                                        },
                                    },
                                );
                            }
                            return e;
                        }),
                        (0, r._)(this, 'beforeErrorHook', (e) => {
                            let t = e.cause;
                            if (s(t)) {
                                var a, r, i, n, o, l, c, d, u, _, m, p, g, h;
                                let s = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (a = t.request) ? void 0 : a.method) || (null == (r = t.options) ? void 0 : r.method),
                                        url: (null == (i = t.request) ? void 0 : i.url) || (null == (n = t.options) ? void 0 : n.url),
                                        headers: this.getHeaders((null == (o = t.request) ? void 0 : o.headers) || (null == (l = t.options) ? void 0 : l.headers)),
                                        body: (null == (c = t.request) ? void 0 : c.json) || (null == (d = t.options) ? void 0 : d.json),
                                    },
                                };
                                void 0 !== t.response &&
                                    (s.response = {
                                        statusCode: t.response.statusCode || t.response.status,
                                        headers: this.getHeaders(t.response.headers),
                                        time: null == (h = t.response.timings) || null == (g = h.phases) ? void 0 : g.total,
                                    });
                                let x = this.getUrl((null == (u = t.request) ? void 0 : u.url) || (null == (_ = t.options) ? void 0 : _.url));
                                this.logger.error(
                                    '[Resource] Request failed '
                                        .concat((null == (m = t.request) ? void 0 : m.method) || (null == (p = t.options) ? void 0 : p.method), ' ')
                                        .concat(x.origin, ' ')
                                        .concat(x.pathname)
                                        .concat(x.search, ', reason: ')
                                        .concat(e.name),
                                    s,
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
            (a(35412), a(69629));
            let n = [
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
        73805: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => D });
            var r = a(88800),
                s = a(65724),
                i = a(84961),
                n = a(53548),
                o = a(2058),
                l = a(97234),
                c = a(17392),
                d = a(29993),
                u = a(52300),
                _ = a(17610),
                m = a(29504),
                p = a(42174),
                g = a(96817);
            let h = (e) => {
                let { className: t, variant: a = 'text', onClick: s, iconClassName: i, iconSize: l, size: d = 's', ariaLabel: _ } = e,
                    { formatMessage: m } = (0, o.A)(),
                    p = null != _ ? _ : m({ id: 'play-queue.delete-from-queue' }),
                    h = (0, n.useCallback)(
                        (e) => {
                            (null == s || s(), e.stopPropagation());
                        },
                        [s],
                    );
                return (0, r.jsx)(g.$, {
                    className: t,
                    withRipple: !1,
                    variant: a,
                    size: d,
                    radius: 'round',
                    'aria-label': p,
                    onClick: h,
                    icon: (0, r.jsx)(u.I, { size: l, className: i, variant: 'bucket' }),
                    'data-test-id': c.OA.track.REMOVE_BUTTON,
                });
            };
            var x = a(5407),
                v = a(57934),
                k = a(55693),
                C = a(72288),
                y = a(49738),
                T = a(56446),
                N = a(64546),
                A = a(29831),
                E = a(30123),
                S = a(54965),
                b = a(1829),
                f = a(82092),
                j = a.n(f),
                M = a(79262),
                w = a(41867),
                I = a.n(w);
            let P = (0, i.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: a } = (0, o.A)();
                    return t.isDownloaded
                        ? (0, r.jsx)(u.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': a({ id: 'offline.track-downloaded' }),
                              'data-test-id': c.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, r.jsx)(M.A, { value: t.downloadingProgress, size: 16, className: I().downloadingProgress, progressBarClassName: I().progress })
                          : null;
                }),
                D = (0, i.PA)((e) => {
                    var t;
                    let {
                            className: a,
                            track: i,
                            withLightning: g,
                            ignoreDislikedStyles: f,
                            onLikeClick: M,
                            utmLink: w,
                            withSecondaryColor: I,
                            handleRemove: D,
                            withTrailer: L = !0,
                            likeIconSize: O = 'xxs',
                            removeButtonAriaLabel: R,
                            hideControls: H,
                        } = e,
                        { user: F, trailer: z } = (0, C.g)(),
                        { formatMessage: U } = (0, o.A)(),
                        { sendLikeSearchFeedback: W } = (0, k.z)(),
                        [B, Y] = (0, n.useState)(!1),
                        [K, q] = (0, n.useState)(!1),
                        G = (0, x.P)(),
                        $ = (0, p.K)(i),
                        {
                            duration: V,
                            lightning: X,
                            ugc: Z,
                        } = ((e, t, a) => {
                            var r;
                            let { withLightning: s, isUGC: i } = t,
                                n = ((e) =>
                                    'number' != typeof e
                                        ? null
                                        : ((e) => {
                                              let t = Math.round((e || 0) / E.k7);
                                              return (0, S.E)(t);
                                          })(e))(e.durationMs);
                            return {
                                duration: null !== n ? { text: n, ariaLabel: (0, A.j)(Math.round((null != (r = e.durationMs) ? r : 0) / 1e3), a) } : null,
                                lightning: s ? { label: a({ id: 'entity-names.popular-among-users' }) } : null,
                                ugc: i ? { label: a({ id: 'ugc.track-description' }) } : null,
                            };
                        })(i, { withLightning: g, isUGC: i.isUGC }, U),
                        J = (0, v.F)(),
                        Q = F.hasPlus,
                        ee = !i.isRemoved && i.isAvailable && !H,
                        et = (0, d.c)(async () => {
                            (B || i.isLiked || (Y(!0), null == W || W()), await $(), null == M || M(i.isLiked));
                        }),
                        ea = (0, d.c)((e) => {
                            e.stopPropagation();
                        }),
                        er = (0, d.c)((e) => {
                            if ((e.stopPropagation(), G())) return void e.preventDefault();
                            (z.openTrackTrailer(i.id), J(l.DomainObjectType.Track, i.id));
                        }),
                        es = (0, n.useMemo)(() => {
                            if (ee)
                                return (0, r.jsx)('div', {
                                    onClick: ea,
                                    children: (0, r.jsx)(b._, {
                                        track: i,
                                        open: K,
                                        onOpenChange: q,
                                        placement: 'bottom',
                                        icon: (0, r.jsx)(u.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: w,
                                        className: (0, s.$)(j().contextMenu, { [j().contextMenu_visible]: K }),
                                        handleRemove: D,
                                        withTrailer: L,
                                        'data-test-id': c.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ea, D, K, ee, L, i, w]);
                    return (0, r.jsxs)('div', {
                        className: (0, s.$)(j().root, j().controls, a, {
                            [j().controls_dislikedControls]: i.isDisliked,
                            [j().controls_dislikedColors]: i.isDisliked && !f,
                            [j().controls_disabled]: !i.isAvailable,
                            [j().root_withSecondaryColor]: I,
                        }),
                        children: [
                            X && (0, r.jsx)(u.I, { 'aria-label': X.label, size: 'xxs', className: j().lightning, variant: 'lightning' }),
                            Z &&
                                (0, r.jsxs)(_.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, r.jsx)(u.I, {
                                            'aria-label': Z.label,
                                            size: 'xxs',
                                            className: j().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': c.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, r.jsx)(_.ZI, { children: Z.label }),
                                    ],
                                }),
                            Q && (0, r.jsx)('div', { className: (0, s.$)(j().item, j().downloadIcon), children: (0, r.jsx)(P, { track: i }) }),
                            D && !H && (0, r.jsx)(h, { size: 'xs', iconSize: 'xxs', className: (0, s.$)(j().item, j().removeButton), onClick: D, ariaLabel: R }),
                            ee &&
                                (0, r.jsx)(N.WithOffline, {
                                    fallback: (0, r.jsx)(y.c, {
                                        size: 'xs',
                                        iconSize: O,
                                        className: (0, s.$)(j().item, j().likeIcon),
                                        isLiked: i.isLiked,
                                        onClick: et,
                                        disabled: !F.isAuthorized,
                                    }),
                                }),
                            (null == (t = i.trailer) ? void 0 : t.isAvailable) &&
                                i.isAvailable &&
                                (0, r.jsx)(N.WithOffline, {
                                    fallback: (0, r.jsx)(T.k, {
                                        className: (0, s.$)(j().item, j().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: er,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, r.jsxs)('div', {
                                className: (0, s.$)(j().item, j().contextMenuWrapper),
                                children: [
                                    null !== V &&
                                        (0, r.jsx)(m.HL, {
                                            variant: 'span',
                                            className: (0, s.$)(j().duration, { [j().duration_hidden]: K && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': V.ariaLabel,
                                            role: 'text',
                                            'data-test-id': c.Kq.track.TRACK_DURATION,
                                            children: (0, r.jsx)('span', { 'aria-hidden': 'true', children: V.text }),
                                        }),
                                    es,
                                ],
                            }),
                        ],
                    });
                });
        },
        79418: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => h });
            var r = a(88800),
                s = a(65724),
                i = a(61013),
                n = a(53548);
            let o = (e) => {
                    let { style: t, forwardRef: a, context: s, ...i } = e,
                        n = (null == s ? void 0 : s.listAriaLabel) || void 0,
                        o = (null == s ? void 0 : s.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: o, 'aria-label': n, style: { ...t }, ref: a, ...i });
                },
                l = (0, n.forwardRef)((e, t) => (0, r.jsx)(o, { forwardRef: t, ...e }));
            var c = a(16434),
                d = a.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: a, withFooter: i, withHeader: n, withForceScroll: o, ...l } = e;
                    return (0, r.jsx)('div', {
                        className: (0, s.$)(d().scroller, { [d().scroller_withFooter]: i, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: o }),
                        style: { ...t },
                        ref: a,
                        ...l,
                        tabIndex: -1,
                    });
                },
                _ = (0, n.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
            var m = a(55482),
                p = a(75151);
            let g = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: a,
                            onRangeHandler: s,
                            debounceDurationInMs: i = 100,
                            totalCount: o = 0,
                            shouldTriggerRangeChangedOn: l = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [_, g] = (0, n.useState)(null),
                        h = (0, n.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == s || s(e), l.length > 0 && g(e), t && a)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            s = Math.floor(e.startIndex / t);
                                        for (let e = s; e < r; e++) a(e);
                                    }
                                }, i),
                            [i, s, t, a, l],
                        );
                    (0, n.useEffect)(() => {
                        l.length > 0 && _ && h(_);
                    }, l);
                    let x = (0, n.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, i);
                    }, [c, i]);
                    return (0, r.jsx)(p.sN, { ref: d, rangeChanged: h, totalCount: o, endReached: x, ...u });
                },
                h = (e) => {
                    let {
                            className: t,
                            customComponents: a,
                            onGetDataByPage: o,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: p,
                            overscan: h = 700,
                            pageSize: x = 20,
                            totalCount: v,
                            totalRequests: k,
                            debounceDurationInMs: C,
                            initialItemCount: y,
                            minInitialItemCount: T = 20,
                            handleRef: N,
                            alwaysShowScrollbar: A = !1,
                            testId: E,
                            isMobileLayout: S = !1,
                            shouldTriggerRangeChangedOn: b,
                            ...f
                        } = e,
                        [j, M] = (0, n.useState)(!1),
                        w = (0, n.useMemo)(
                            () =>
                                (0, i.A)((e) => {
                                    M(e);
                                }, 100),
                            [],
                        ),
                        I = (0, n.useMemo)(() => {
                            var e, t;
                            return S
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == a ? void 0 : a.List) ? e : l,
                                      Item: null == a ? void 0 : a.Item,
                                      ScrollSeekPlaceholder: null == a ? void 0 : a.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == a ? void 0 : a.List) ? t : l,
                                      Item: null == a ? void 0 : a.Item,
                                      Header: null == a ? void 0 : a.Header,
                                      Footer: null == a ? void 0 : a.Footer,
                                      ScrollSeekPlaceholder: null == a ? void 0 : a.ScrollSeekPlaceholder,
                                  };
                        }, [a, k, S]),
                        P = y ? Math.min(y, T) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, s.$)(d().root, { [d().root_scrolling]: j || A, [d().root_notScrolling]: !j && !A }, t),
                        'data-test-id': E,
                        children: [
                            S && (null == a ? void 0 : a.Header) && a.Header(),
                            (0, r.jsx)(g, {
                                overscan: h,
                                components: I,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: w,
                                itemContent: m,
                                scrollerRef: N,
                                totalCount: v,
                                pageSize: x,
                                onPageHandler: o,
                                onRangeHandler: c,
                                debounceDurationInMs: C,
                                initialItemCount: P,
                                shouldTriggerRangeChangedOn: b,
                                ...f,
                            }),
                            S && (null == a ? void 0 : a.Footer) && a.Footer(),
                        ],
                    });
                };
        },
        82092: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'CommonControlsBar_root__N8b0F',
                root_withSecondaryColor: 'CommonControlsBar_root_withSecondaryColor__4Y1P_',
                item: 'CommonControlsBar_item__qGErG',
                contextMenu: 'CommonControlsBar_contextMenu__EAq_c',
                contextMenu_visible: 'CommonControlsBar_contextMenu_visible__M0ry0',
                contextMenuWrapper: 'CommonControlsBar_contextMenuWrapper__XjkaL',
                lightning: 'CommonControlsBar_lightning__o7wrY',
                ugcIcon: 'CommonControlsBar_ugcIcon__OV0Cl',
                lightning_withOffset: 'CommonControlsBar_lightning_withOffset__LGvUS',
                duration: 'CommonControlsBar_duration__un38A',
                duration_hidden: 'CommonControlsBar_duration_hidden__noQ4S',
                alwaysVisibleDuration: 'CommonControlsBar_alwaysVisibleDuration__3V6gl',
                controls: 'CommonControlsBar_controls__QrogT',
                trailerIcon: 'CommonControlsBar_trailerIcon__ZHSBo',
                removeButton: 'CommonControlsBar_removeButton__35xHY',
                controls_disabled: 'CommonControlsBar_controls_disabled__0RmLo',
                explicitMark: 'CommonControlsBar_explicitMark__3I_Op',
                controls_dislikedControls: 'CommonControlsBar_controls_dislikedControls__mMjKC',
                likeIcon: 'CommonControlsBar_likeIcon__YqgZY',
                controls_dislikedColors: 'CommonControlsBar_controls_dislikedColors__h5lev',
                downloadIcon: 'CommonControlsBar_downloadIcon__2mM6m',
                popover: 'CommonControlsBar_popover__6bmNd',
            };
        },
        84255: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => l });
            var r = a(88800),
                s = a(84961),
                i = a(53548),
                n = a(18593),
                o = a(10829);
            let l = (0, s.PA)((e) => {
                let { track: t, index: a, entitiesData: s, contextId: l, from: c } = e,
                    d = t.id,
                    u = (0, i.useMemo)(
                        () => ({
                            contextData: { type: n.K.Various, meta: { id: l }, from: c },
                            entitiesData: s,
                            queueParams: { index: a, entityId: d },
                            loadContextMeta: !1,
                        }),
                        [l, c, s, a, d],
                    );
                return (0, r.jsx)(o.K, { track: t, playContextParams: u });
            });
        },
        86790: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => E });
            var r = a(88800),
                s = a(65724),
                i = a(84961),
                n = a(2058),
                o = a(30282),
                l = a(94144),
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
            let d = (e, t, a) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(a);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(a);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(a);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(a);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(a);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: a, tld: r, year: s } = e;
                    return {
                        year: s,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, r, a) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, r, a) },
                    };
                };
            var _ = a(62293),
                m = a(99839);
            let p = (e) => e(new Date(), (0, m.m)());
            var g = a(51611),
                h = a(72288),
                x = a(11006),
                v = a.n(x),
                k = a(17392),
                C = a(29504),
                y = a(91292);
            let T = (e) => {
                    let { className: t, data: a } = e;
                    return (0, r.jsxs)('div', {
                        className: (0, s.$)(v().copyrights, t),
                        'data-test-id': k.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, r.jsxs)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: v().text,
                                children: [
                                    '\xa9 ',
                                    a.year,
                                    ' \xa0',
                                    (0, r.jsx)(y.N, {
                                        target: '_blank',
                                        href: a.yandexMusic.url,
                                        className: (0, s.$)(v().copyrightLink, v().yandexMusicLink),
                                        'data-test-id': k.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: a.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(C.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, r.jsx)(y.N, {
                                target: '_blank',
                                href: a.yandexProjects.url,
                                className: v().copyrightLink,
                                'data-test-id': k.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: a.yandexProjects.title,
                            }),
                        ],
                    });
                },
                N = (e) => {
                    let { disclaimer: t, links: a } = e;
                    return (0, r.jsxs)('div', {
                        className: v().links,
                        children: [
                            (0, r.jsx)('ol', {
                                className: v().list,
                                'data-test-id': k.S7.FOOTER_LINKS_LIST,
                                children: a.map((e) => {
                                    let { id: t, title: a, url: s } = e;
                                    return (0, r.jsx)(
                                        'li',
                                        {
                                            className: v().item,
                                            children: (0, r.jsx)(y.N, { target: '_blank', href: s, className: v().link, 'data-test-id': k.S7.FOOTER_LINK, children: a }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, r.jsx)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: v().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': k.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                A = (e) => {
                    let { className: t, data: a } = e;
                    return (0, r.jsxs)('footer', {
                        className: (0, s.$)(v().root, v().important, t),
                        'data-test-id': k.S7.FOOTER,
                        children: [(0, r.jsx)(N, { links: a.links, disclaimer: a.disclaimer }), (0, r.jsx)(T, { data: a.copyrights })],
                    });
                };
            (0, i.PA)((e) => {
                let { className: t } = e,
                    { location: a } = (0, h.g)(),
                    { formatDate: s, formatMessage: i } = (0, n.A)(),
                    { language: o } = (0, g.h)(),
                    l = u({ formatMessage: i, language: o, tld: a.tld, year: p(s) });
                return (0, r.jsx)(T, { className: t, data: l });
            });
            let E = (0, i.PA)((e) => {
                var t;
                let { className: a } = e,
                    { experiments: i, location: m, user: x } = (0, h.g)(),
                    { formatDate: k, formatMessage: C } = (0, n.A)(),
                    { isEnabled: y } = null != (t = (0, l.P)()) ? t : {},
                    { language: T } = (0, g.h)(),
                    N = ((e) => {
                        let { checkExperiment: t, formatMessage: a, isWebApplication: r, language: s, tld: i, userRegion: n, year: o } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: a, tld: r, language: s, userRegion: i } = e,
                                    n = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, r, s) },
                                    o = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, r, s) },
                                    l = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, r, s) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, r, s) },
                                    _ = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, r, s) },
                                    m = [n, l, u];
                                return (a && 'ru' === i && m.push(o), m.push(_), m);
                            })({ formatMessage: a, isWebApplication: r, language: s, tld: i, userRegion: n }),
                            disclaimer: (0, _.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => a({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => a({ id: 'footer.explicit-content' }),
                                userRegion: n,
                            }),
                            copyrights: u({ formatMessage: a, language: s, tld: i, year: o }),
                        };
                    })({
                        checkExperiment: (e, t) => i.checkExperiment(e, t),
                        formatMessage: C,
                        isWebApplication: o.$3,
                        tld: m.tld,
                        language: T,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: p(k),
                    });
                return (0, r.jsx)(A, { className: (0, s.$)({ [v().root_withOffsetForDeeplink]: y }, a), data: N });
            });
        },
        87966: (e) => {
            e.exports = { root: 'MyMusicDownloadedTracksInfo_root__yIYHx' };
        },
        93015: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => g });
            var r = a(88800),
                s = a(98644),
                i = a(65724),
                n = a(53548),
                o = a(2058),
                l = a(19994),
                c = a(13797),
                d = a.n(c);
            let u = (e) => {
                let { isActive: t, className: a } = e,
                    { formatMessage: s } = (0, o.A)(),
                    c = (0, n.useMemo)(() => s({ id: 'loading-messages.entity-is-loading' }, { entityName: s({ id: 'entity-names.track' }) }), [s]);
                return (0, r.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, i.$)(d().root, a),
                    children: [
                        (0, r.jsxs)('div', {
                            className: d().infoContainer,
                            children: [
                                (0, r.jsx)('div', { className: d().coverContainer, children: (0, r.jsx)(l.W, { isActive: t, className: d().cover, radius: 'round' }) }),
                                (0, r.jsx)('div', { className: d().textContainer, children: (0, r.jsx)(l.W, { isActive: t, className: d().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, r.jsx)(l.W, { isActive: t, className: d().action, radius: 'l' }),
                    ],
                });
            };
            var _ = a(26835),
                m = a.n(_);
            let p = (e) => {
                    let { isActive: t, className: a } = e,
                        { formatMessage: s } = (0, o.A)(),
                        c = (0, n.useMemo)(() => s({ id: 'loading-messages.entity-is-loading' }, { entityName: s({ id: 'entity-names.track' }) }), [s]);
                    return (0, r.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, i.$)(m().root, a),
                        children: [
                            (0, r.jsxs)('div', {
                                className: m().infoContainer,
                                children: [
                                    (0, r.jsx)(l.W, { isActive: t, className: m().cover, radius: 's' }),
                                    (0, r.jsx)('div', { className: m().textContainer, children: (0, r.jsx)(l.W, { isActive: t, className: m().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, r.jsx)(l.W, { isActive: t, className: m().action, radius: 'l' }),
                        ],
                    });
                },
                g = (e) => {
                    let { isActive: t, variant: a, className: i } = e;
                    switch (a) {
                        case s.X.PLAYLIST:
                            return (0, r.jsx)(p, { isActive: t, className: i });
                        case s.X.ALBUM:
                            return (0, r.jsx)(u, { isActive: t, className: i });
                    }
                };
        },
        94144: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => s, P: () => i });
            var r = a(53548);
            let s = (0, r.createContext)(null),
                i = () => (0, r.useContext)(s);
        },
        95993: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => i });
            var r = a(58217),
                s = a(85587);
            let i = (e) => {
                let { track: t, callback: a, disclaimerRejectHandler: i } = e;
                return (0, r.l)({ entity: t, entityType: s.n.TRACK, callback: a, onReject: i, preventDefaultWhenSafe: !1 });
            };
        },
        96030: (e) => {
            e.exports = {
                root: 'MyMusicDownloadedTracksPageHeader_root__2vfuc',
                container: 'MyMusicDownloadedTracksPageHeader_container__hQ_wt',
                title: 'MyMusicDownloadedTracksPageHeader_title__Ncn5X',
                stickyTitle: 'MyMusicDownloadedTracksPageHeader_stickyTitle__Efl0U',
                playButton: 'MyMusicDownloadedTracksPageHeader_playButton__seWgC',
                stickyPlayButton: 'MyMusicDownloadedTracksPageHeader_stickyPlayButton__JVicd',
                titleContainer: 'MyMusicDownloadedTracksPageHeader_titleContainer__rLAkS',
                staticHeader: 'MyMusicDownloadedTracksPageHeader_staticHeader__LSVC8',
                important: 'MyMusicDownloadedTracksPageHeader_important__JIubq',
                stickyHeader: 'MyMusicDownloadedTracksPageHeader_stickyHeader__MuQh4',
            };
        },
        96402: (e) => {
            e.exports = {
                root: 'MyMusicDownloadedTracksPage_root__hZZwz',
                important: 'MyMusicDownloadedTracksPage_important__QP_t0',
                pageContainer: 'MyMusicDownloadedTracksPage_pageContainer__qu3hF',
                footer: 'MyMusicDownloadedTracksPage_footer__KI5OP',
                content: 'MyMusicDownloadedTracksPage_content__Iz1WY',
                trackShimmer: 'MyMusicDownloadedTracksPage_trackShimmer__MZgW3',
            };
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
        99839: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => r });
            let r = () => ({ year: 'numeric' });
        },
        99890: (e, t, a) => {
            'use strict';
            a.d(t, { C8: () => i, UC: () => n, dM: () => o, uV: () => l });
            var r = a(89916),
                s = a(66363);
            let i = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (e) => (e.uid ? 'authorized' : 'no-uid'),
                o = (e) => {
                    if (!(e instanceof r.m5) || !(0, s.Nh)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, s.Nh)(e.cause)) return;
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
                7191, 918, 1833, 9904, 3078, 1191, 1041, 8194, 8655, 5188, 4292, 6706, 4771, 1311, 3075, 2662, 6904, 1898, 2058, 3578, 8628, 4378, 9780, 8283, 9332, 5151,
                1223, 9907, 8308, 4732, 9087, 3979, 6719, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 6374, 8979, 818, 6820, 389, 763, 2670, 7358,
            ],
            () => e((e.s = 36)),
        ),
            (_N_E = e.O()));
    },
]);
