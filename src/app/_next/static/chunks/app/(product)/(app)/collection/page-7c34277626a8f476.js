(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8143],
    {
        5295: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => o });
            var n = a(54683);
            let o = (e, t, a) => {
                let o = null != t ? t : n.wT,
                    i = null != a ? a : n.by,
                    r = (0, n.de)((0, n.aq)(e), o, i),
                    s = Math.round(255 * r[0]),
                    l = Math.round(255 * r[1]),
                    c = Math.round(255 * r[2]);
                return 'rgb('.concat(s, ', ').concat(l, ', ').concat(c, ')');
            };
        },
        7628: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => g });
            var n = a(88800),
                o = a(88969),
                i = a(58390),
                r = a(17392),
                s = a(29993),
                l = a(96817),
                c = a(29504),
                d = a(99890),
                _ = a(4086),
                u = a(41928);
            let g = (e) => {
                let { size: t = 'm', variant: a = 'default', color: g = 'primary', withRipple: p = !0, buttonText: m, isBlock: h, key: C, className: E } = e,
                    x = (0, i.useRouter)(),
                    A = (0, u.N)().get(_.QG),
                    y = (0, s.c)(() => {
                        A.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), x.push(A.authorizationUrl));
                    });
                return (0, n.jsx)(
                    l.$,
                    {
                        onClick: y,
                        className: E,
                        isBlock: h,
                        color: g,
                        variant: a,
                        size: t,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': r.S7.UNAUTHORIZED_BUTTON,
                        children: m || (0, n.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, n.jsx)(o.A, { id: 'authorization.enter-button' }) }),
                    },
                    C,
                );
            };
        },
        8679: (e, t, a) => {
            'use strict';
            a.d(t, { MyMusicDownloadedTracksPage: () => et });
            var n = a(88800),
                o = a(65724),
                i = a(84961),
                r = a(53548),
                s = a(2058),
                l = a(97234),
                c = a(59724),
                d = a(17392),
                _ = a(29993),
                u = a(84255),
                g = a(32596),
                p = a(69630),
                m = a(64284),
                h = a(98427),
                C = a(84384),
                E = a(44230),
                x = a(37670),
                A = a(11510),
                y = a(71978),
                T = a(34961),
                P = a(53892),
                M = a(74773),
                S = a(98644),
                L = a(86790),
                k = a(60266),
                v = a(93015),
                D = a(79418),
                w = a(96402),
                j = a.n(w),
                f = a(88969),
                N = a(52300),
                I = a(29504),
                O = a(46482),
                R = a(18593),
                b = a(5407),
                H = a(46422),
                G = a(39079),
                W = a(72288),
                U = a(63807),
                z = a(56248),
                K = a(16704),
                B = a(87966),
                F = a.n(B);
            let Y = (0, i.PA)(() => {
                var e;
                let { downloadedTracks: t } = (0, T.s)(P.n.MY_MUSIC),
                    a = (0, n.jsx)(I.HL, { variant: 'span', size: 's', weight: 'medium', 'aria-hidden': !0, children: '•' }),
                    o = [];
                (null == (e = t.tracks) ? void 0 : e.length) &&
                    o.push(
                        (0, n.jsx)(I.HL, {
                            variant: 'span',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 1,
                            children: (0, n.jsx)(f.A, { id: 'entity-names.tracks-count', values: { value: t.tracks.length } }),
                        }),
                    );
                let i = Math.floor(t.tracksDurationInMinutes / 60),
                    s = Math.floor(t.tracksDurationInMinutes % 60);
                return (
                    (i || s) &&
                        (o.push(a),
                        o.push(
                            (0, n.jsx)(I.HL, {
                                variant: 'span',
                                size: 's',
                                weight: 'medium',
                                children: (0, n.jsx)(f.A, { id: 'time.hours-minutes', values: { hours: i, minutes: s } }),
                            }),
                        )),
                    (0, n.jsx)('div', { className: F().root, children: o.map((e, t) => (0, r.cloneElement)(e, { key: t })) })
                );
            });
            var V = a(96030),
                Z = a.n(V);
            let $ = (0, i.PA)(() => {
                let { isScrolling: e } = (0, r.useContext)(U.B),
                    t = (0, H.W)(),
                    { downloadedTracks: a } = (0, T.s)(P.n.MY_MUSIC),
                    {
                        settings: { isMobile: o },
                        slam: i,
                    } = (0, W.g)(),
                    { from: s } = (0, C.f)({ pageId: h.b.OWN_TRACKS, blockId: m.U.TRACK_LIST }),
                    l = (0, b.P)(),
                    c = (0, O.g)(),
                    { isPlaying: u, togglePlay: g } = (0, G.D)({
                        playContextParams: {
                            contextData: { type: R.K.Various, meta: { id: h.b.DOWNLOADS_TRACKS }, from: s },
                            entitiesData: a.entitiesData,
                            loadContextMeta: !1,
                        },
                    }),
                    p = (0, _.c)(() => {
                        !l() && (g(), u || c());
                    });
                return (0, n.jsx)('header', {
                    className: Z().root,
                    'aria-hidden': e,
                    'data-test-id': d.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE_HEADER,
                    children: (0, n.jsxs)('div', {
                        className: Z().container,
                        children: [
                            !i.isOfflineModeEnabled &&
                                t.canBack &&
                                (0, n.jsx)(z.L, { withForwardControl: !1, withBackwardControl: t.canBack, shouldFocusOnMount: !e, buttonSize: 'xxs' }),
                            (0, n.jsxs)('div', {
                                className: Z().titleContainer,
                                children: [
                                    (0, n.jsx)(I.DZ, {
                                        variant: 'h1',
                                        weight: 'bold',
                                        size: 'xs',
                                        lineClamp: 1,
                                        className: Z().title,
                                        children: (0, n.jsx)(f.A, { id: 'offline.downloaded-tracks' }),
                                    }),
                                    (0, n.jsx)(Y, {}),
                                ],
                            }),
                            !a.isEmpty &&
                                (0, n.jsx)(K.D, {
                                    withRipple: !0,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: 's',
                                    color: 'primary',
                                    iconSize: 'xxs',
                                    isPlaying: u,
                                    onClick: p,
                                    className: Z().playButton,
                                    ariaHidden: e,
                                    tabIndex: e ? -1 : 0,
                                    children: !o && (0, n.jsx)(f.A, { id: 'player-actions.listen' }),
                                }),
                        ],
                    }),
                });
            });
            var X = a(62932),
                J = a.n(X);
            let q = (0, i.PA)(() =>
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)($, {}),
                        (0, n.jsxs)('div', {
                            className: J().root,
                            'data-test-id': d.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE_EMPTY,
                            children: [
                                (0, n.jsx)(N.I, { className: J().icon, size: 'l', variant: 'download' }),
                                (0, n.jsx)(I.DZ, { className: J().title, variant: 'div', size: 'xs', children: (0, n.jsx)(f.A, { id: 'offline.downloaded-empty' }) }),
                                (0, n.jsx)(I.HL, {
                                    className: J().text,
                                    variant: 'span',
                                    type: 'controls',
                                    size: 'l',
                                    weight: 'normal',
                                    children: (0, n.jsx)(f.A, { id: 'offline.download-for-offline' }),
                                }),
                            ],
                        }),
                    ],
                }),
            );
            var Q = a(93317);
            let ee = (0, i.PA)(() => {
                    let { isScrolling: e } = (0, r.useContext)(U.B),
                        t = (0, H.W)(),
                        { downloadedTracks: a } = (0, T.s)(P.n.MY_MUSIC),
                        {
                            settings: { isMobile: i },
                            slam: s,
                        } = (0, W.g)(),
                        { from: l } = (0, C.f)({ pageId: h.b.OWN_TRACKS, blockId: m.U.TRACK_LIST }),
                        c = (0, O.g)(),
                        u = (0, b.P)(),
                        { isPlaying: g, togglePlay: p } = (0, G.D)({
                            playContextParams: {
                                contextData: { type: R.K.Various, meta: { id: h.b.DOWNLOADS_TRACKS }, from: l },
                                entitiesData: a.entitiesData,
                                loadContextMeta: !1,
                            },
                        }),
                        E = (0, _.c)(() => {
                            !u() && (p(), g || c());
                        });
                    return (0, n.jsx)(Q.Y, {
                        variant: Q.V.COMPOSITE,
                        'aria-hidden': !e,
                        stickyChild: (0, n.jsxs)('div', {
                            className: Z().container,
                            'data-test-id': d.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE_STICKY_HEADER,
                            children: [
                                !s.isOfflineModeEnabled &&
                                    t.canBack &&
                                    (0, n.jsx)(z.L, { withForwardControl: !1, withBackwardControl: t.canBack, shouldFocusOnMount: !1, buttonSize: 'xxs' }),
                                (0, n.jsx)(I.DZ, {
                                    variant: 'h1',
                                    weight: 'bold',
                                    size: 'xs',
                                    lineClamp: 1,
                                    className: Z().stickyTitle,
                                    children: (0, n.jsx)(f.A, { id: 'offline.downloaded-tracks' }),
                                }),
                                !a.isEmpty &&
                                    (0, n.jsx)(K.D, {
                                        withRipple: !0,
                                        buttonVariant: 'default',
                                        radius: 'xxxl',
                                        size: 's',
                                        color: 'primary',
                                        iconSize: 'xxs',
                                        isPlaying: g,
                                        onClick: E,
                                        className: (0, o.$)(Z().playButton, { [Z().stickyPlayButton]: !i }),
                                        ariaHidden: !e,
                                        tabIndex: e ? 0 : -1,
                                        children: !i && (0, n.jsx)(f.A, { id: 'player-actions.listen' }),
                                    }),
                            ],
                        }),
                        stickyClassName: (0, o.$)(Z().stickyHeader, Z().important),
                        staticClassName: (0, o.$)(Z().staticHeader, Z().important),
                    });
                }),
                et = (0, i.PA)(() => {
                    var e;
                    let t = (0, y.j)(),
                        { contentScrollRef: a, setContentScrollRef: i } = (0, E.g)(),
                        { formatMessage: w } = (0, s.A)(),
                        { downloadedTracks: f } = (0, T.s)(P.n.MY_MUSIC),
                        { from: N } = (0, C.f)({ pageId: h.b.OWN_TRACKS, blockId: m.U.TRACK_LIST }),
                        I = f.entitiesData,
                        O = (0, _.c)(() => {
                            t.tracksController && f.getData(t.tracksController);
                        });
                    ((0, A.L)(O),
                        (0, r.useEffect)(() => {
                            f.isNeededToLoad && O();
                        }, [f.isNeededToLoad, O]),
                        (0, r.useEffect)(
                            () => () => {
                                f.reset();
                            },
                            [f],
                        ),
                        (0, x.J)(f.isResolved));
                    let R = (0, r.useMemo)(
                        () => ({ Header: () => (0, n.jsx)($, {}), Footer: () => (0, n.jsx)(k.A, { children: (0, n.jsx)(L.w, { className: j().footer }) }) }),
                        [],
                    );
                    if (f.loadingState === M.G.REJECT) return (0, n.jsx)(g.SomethingWentWrong, {});
                    if (f.isEmpty) return (0, n.jsx)(q, {});
                    let b = (null == (e = f.items) ? void 0 : e.length) || 10;
                    return (0, n.jsx)(c.a, {
                        pageId: l.AppScreen.DownloadsTracks,
                        pageIdForFrom: h.b.DOWNLOADS_TRACKS,
                        children: (0, n.jsx)(p.h, {
                            scrollElement: a,
                            children: (0, n.jsxs)('div', {
                                className: j().pageContainer,
                                children: [
                                    (0, n.jsx)(ee, {}),
                                    (0, n.jsx)(D.$, {
                                        context: { listAriaLabel: w({ id: 'offline.downloaded-track-list' }) },
                                        className: (0, o.$)(j().root, j().important),
                                        listClassName: j().content,
                                        customComponents: R,
                                        totalCount: b,
                                        itemContentCallback: (e) => {
                                            var t;
                                            let a = null == (t = f.items) ? void 0 : t[e];
                                            return a
                                                ? (0, n.jsx)(u.D, { track: a, index: e, entitiesData: I, contextId: h.b.DOWNLOADS_TRACKS, from: N }, a.id)
                                                : (0, n.jsx)(v.D, { isActive: !0, className: j().trackShimmer, variant: S.X.PLAYLIST });
                                        },
                                        debounceDurationInMs: 300,
                                        initialItemCount: b,
                                        handleRef: i,
                                        shouldTriggerRangeChangedOn: [b],
                                        testId: d.Xk.myMusic.MY_MUSIC_DOWNLOADED_TRACKS_PAGE,
                                    }),
                                ],
                            }),
                        }),
                    });
                });
        },
        17071: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => n });
            var n = (function (e) {
                return (
                    (e.MAIN = 'MAIN'),
                    (e.TRAILER = 'TRAILER'),
                    (e.VIDEO_PLAYER = 'VIDEO_PLAYER'),
                    (e.IMAGE_SLIDER = 'IMAGE_SLIDER'),
                    (e.PROMO_LANDING = 'PROMO_LANDING'),
                    e
                );
            })({});
        },
        20551: (e, t, a) => {
            'use strict';
            a.d(t, { MyMusicPageStoreProvider: () => _ });
            var n = a(34961),
                o = a(53892),
                i = a(5120),
                r = a(55025),
                s = a(74773);
            let l = i.gK.model('MyMusicPage', { downloadedTracks: r.b }),
                c = { downloadedTracks: { loadingState: s.G.IDLE } },
                { pageStoreProvider: d } = (0, n.W)({ createStore: (e) => l.create(c, e), patchKey: o.n.MY_MUSIC }),
                _ = d;
        },
        29681: (e, t, a) => {
            'use strict';
            a.d(t, { CollectionPage: () => ee });
            var n = a(88800),
                o = a(65724),
                i = a(84961),
                r = a(53548),
                s = a(2058),
                l = a(97234),
                c = a(59724),
                d = a(17392),
                _ = a(46312),
                u = a(29993),
                g = a(66719),
                p = a(53779),
                m = a(25772),
                h = a(32596),
                C = a(20129),
                E = a(67858),
                x = a(69630),
                A = a(98427),
                y = a(44230),
                T = a(37670),
                P = a(72288),
                M = a(86790),
                S = a(60266),
                L = a(34726),
                k = a.n(L),
                v = a(81862),
                D = a(46384),
                w = a(90852),
                j = a(35412),
                f = a(97956),
                N = a(88969),
                I = a(29504),
                O = a(5295),
                R = a(63807),
                b = a(94398),
                H = a(70598),
                G = a(91177),
                W = a(96817),
                U = a(90688),
                z = a(81438),
                K = a(78940),
                B = a(90286),
                F = a.n(B);
            let Y = (0, i.PA)((e) => {
                let { chatUrl: t, className: a } = e,
                    { user: i, paywall: c, lumen: _ } = (0, P.g)(),
                    { formatMessage: g } = (0, s.A)(),
                    { faceCover: p } = (0, z.x)(),
                    m = (0, K.Z)(t),
                    h = (0, H.S)(),
                    C = (0, G.D)(),
                    E = g({ id: 'collection.lumen-chat' });
                (0, r.useEffect)(() => {
                    _.isNeededToLoad && _.getData();
                }, [_, _.isNeededToLoad]);
                let x = (0, u.c)((e) => {
                    if ((e.stopPropagation(), h({ to: l.AppScreen.LumenChat, deepLink: t }), !i.hasPlus)) return void c.openModal();
                    m(e);
                });
                return (0, n.jsx)(W.$, {
                    ref: C,
                    className: (0, o.$)(F().root, a),
                    variant: 'text',
                    withRipple: !1,
                    onClick: x,
                    'aria-label': E,
                    'data-test-id': d.Xk.collection.COLLECTION_LUMEN_BUTTON,
                    children:
                        p &&
                        (0, n.jsx)(U._V, {
                            src: p,
                            size: 'orig',
                            withAvatarReplace: !0,
                            withFallback: !1,
                            withLoadingIndicator: !1,
                            className: F().image,
                            alt: '',
                            fit: 'contain',
                        }),
                });
            });
            var V = a(42044),
                Z = a.n(V);
            let $ = (0, i.PA)((e) => {
                let { chatUrl: t, isCollectionColorVisible: a } = e,
                    { user: i } = (0, P.g)(),
                    { formatMessage: l } = (0, s.A)(),
                    { isScrolling: c, isHeaderHidden: d } = (0, r.useContext)(R.B),
                    _ = !c && !d,
                    u = (0, r.useMemo)(() => {
                        if (a && i.collectionHue) return { '--collection-color': (0, O.e)(i.collectionHue) };
                    }, [a, i.collectionHue]),
                    g = (0, r.useMemo)(
                        () => ({
                            color: (e) =>
                                (0, n.jsx)(b.k, {
                                    title: l({ id: 'collection.collection-color-title' }),
                                    description: l({ id: 'collection.collection-color-description' }),
                                    placement: 'right',
                                    children: (0, n.jsx)('span', { className: Z().collectionColor, style: u, children: e }),
                                }),
                        }),
                        [u, l],
                    );
                return (0, n.jsx)('header', {
                    className: (0, o.$)(Z().root, Z().staticHeader),
                    children: (0, n.jsxs)('div', {
                        className: (0, o.$)(Z().staticContent, { [Z().staticContent_hidden]: !_ }),
                        children: [
                            (0, n.jsxs)('div', {
                                className: Z().title,
                                children: [
                                    (0, n.jsx)(I.DZ, { variant: 'h1', weight: 'bold', size: 'xl', children: (0, n.jsx)(N.A, { id: 'entity-names.collection' }) }),
                                    a &&
                                        (0, n.jsx)(I.HL, {
                                            className: Z().description,
                                            variant: 'div',
                                            size: 'm',
                                            children: (0, n.jsx)(N.A, { id: 'collection.collection-color', values: g }),
                                        }),
                                ],
                            }),
                            t && _ && (0, n.jsx)(Y, { chatUrl: t }),
                        ],
                    }),
                });
            });
            var X = a(93317);
            let J = (e) => {
                    let { chatUrl: t } = e,
                        { isScrolling: a, scrollElement: i, title: s } = (0, r.useContext)(R.B),
                        l = (0, u.c)(() => {
                            (null != i ? i : window).scrollTo({ top: 0, behavior: 'smooth' });
                        });
                    return (0, n.jsx)('div', {
                        className: Z().root,
                        onClick: l,
                        children: (0, n.jsx)(X.Y, {
                            variant: X.V.STICKY,
                            'aria-hidden': !a,
                            stickyClassName: (0, o.$)(Z().stickyHeader, Z().important, { [Z().stickyHeader_withLumen]: t }),
                            stickyChild: (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(I.DZ, {
                                        className: Z().stickyTitle,
                                        variant: 'h2',
                                        weight: 'bold',
                                        size: 's',
                                        lineClamp: 1,
                                        'aria-hidden': !0,
                                        children: s,
                                    }),
                                    t && a && (0, n.jsx)(Y, { chatUrl: t, className: Z().stickyLumen }),
                                ],
                            }),
                        }),
                    });
                },
                q = (0, i.PA)((e) => {
                    let { isCollectionColorVisible: t } = e,
                        a = (() => {
                            var e, t;
                            let { experiments: a } = (0, P.g)(),
                                n = a.getExperiment(f.z.WebNextLumenCollectionEntryPoint),
                                o = (null == n || null == (e = n.value) ? void 0 : e.title) === 'on',
                                i = null == n || null == (t = n.value) ? void 0 : t.chat_url;
                            if (!o || 'string' != typeof i) return;
                            let r = (0, j.Rj)(i, { allowedProtocols: new Set([j.cy.HTTPS]) });
                            if (r.isAllowed) return r.url.href;
                        })();
                    return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)($, { chatUrl: a, isCollectionColorVisible: t }), (0, n.jsx)(J, { chatUrl: a })] });
                }),
                Q = (e) =>
                    (0, n.jsx)(v.h, {
                        tabId: '',
                        tabPos: 0,
                        isTabSelectedByDefault: !1,
                        children: (0, n.jsx)(D.F, {
                            blockId: l.EntityTypes.LumenEntryPoint,
                            blockType: l.EntityTypes.LumenEntryPoint,
                            blockPosX: 1,
                            blockPosY: 1,
                            objectsCount: 1,
                            children: (0, n.jsx)(w.B, {
                                objectType: l.DomainObjectType.Lumen,
                                objectId: '',
                                objectPosX: 1,
                                objectPosY: 1,
                                children: (0, n.jsx)(q, { ...e }),
                            }),
                        }),
                    }),
                ee = (0, i.PA)(() => {
                    let { collection: e, user: t, library: a } = (0, P.g)(),
                        { contentScrollRef: i, setContentScrollRef: L } = (0, y.g)(),
                        { formatMessage: v } = (0, s.A)(),
                        D = !e.landing.isRejected && !!t.collectionHue;
                    ((0, r.useEffect)(() => () => e.landing.reset(), [e.landing]), (0, T.J)(e.landing.isResolved));
                    let w = (0, p._)(e.landing),
                        j = (0, u.c)(() => {
                            if (e.landing.isLoaded)
                                return e.landing.getSkeleton({ id: _.p.WEB_COLLECTION, showWizard: t.settings.showWizard }, { preloadBlocksCount: 2 });
                        });
                    if (((0, E.y)(j), e.landing.isNeededToLoad)) {
                        let n = [e.landing.getSkeleton({ id: _.p.WEB_COLLECTION, showWizard: t.settings.showWizard }, { preloadBlocksCount: 2 }), a.getData()];
                        (0, r.use)(Promise.allSettled(n));
                    }
                    return (0, n.jsxs)(c.a, {
                        pageId: l.AppScreen.CollectionLandingScreen,
                        pageIdForFrom: A.b.OWN_COLLECTION,
                        children: [
                            (0, n.jsxs)(x.h, {
                                scrollElement: i,
                                outerTitle: v({ id: 'entity-names.collection' }),
                                children: [
                                    (0, n.jsx)(Q, { isCollectionColorVisible: D }),
                                    (0, n.jsxs)(g.N, {
                                        className: (0, o.$)(k().root, { [k().root_withCollectionColor]: D }),
                                        containerClassName: k().content,
                                        ref: L,
                                        children: [
                                            (0, n.jsx)('div', {
                                                className: (0, o.$)(k().landing, { [k().landing_onlyWizard]: w }),
                                                'data-test-id': d.Xk.collection.COLLECTION_PAGE,
                                                children: (0, n.jsx)(m.E, {
                                                    landing: e.landing,
                                                    errorComponent: (0, n.jsx)(h.SomethingWentWrong, { className: k().error, withBackwardControl: !1 }),
                                                }),
                                            }),
                                            (0, n.jsx)(S.A, { children: (0, n.jsx)(M.w, { className: k().footer }) }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, n.jsx)(C.p, { onFinishSuccess: j }),
                        ],
                    });
                });
        },
        34726: (e) => {
            e.exports = {
                root: 'CollectionPage_root__CZAxL',
                root_withCollectionColor: 'CollectionPage_root_withCollectionColor__4kV02',
                content: 'CollectionPage_content__c3f8z',
                landing: 'CollectionPage_landing__B4jW_',
                landing_onlyWizard: 'CollectionPage_landing_onlyWizard__umeEK',
                footer: 'CollectionPage_footer__9kzD0',
                footer_onlyWizard: 'CollectionPage_footer_onlyWizard__FxCwa',
                error: 'CollectionPage_error__xs4ZH',
            };
        },
        34961: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => h, s: () => C });
            var n = a(88800),
                o = a(84961),
                i = a(58390),
                r = a(53548),
                s = a(35412),
                l = a(39499),
                c = a(89108),
                d = a(70003),
                _ = a(72288),
                u = a(16818);
            (0, o.eO)(!1);
            let g = (0, r.createContext)(null),
                p = (e) => {
                    let { children: t, store: a, storeKey: o } = e,
                        i = (0, r.useMemo)(() => ({ store: a, storeKey: o }), [a, o]);
                    return (0, n.jsx)(g.Provider, { value: i, children: t });
                },
                m = (e) => {
                    let { nonce: t, patchKey: a, patchesRef: o } = e;
                    return (
                        (0, i.useServerInsertedHTML)(() => {
                            let e = o.current;
                            return ((o.current = []), 0 === e.length)
                                ? null
                                : (0, n.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, s.Gr)(t), ");\n        window.dispatchEvent(new Event('")
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
                        o = () => {
                            var e, t;
                            let n = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[a]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[a], n);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: i, nonce: r } = e,
                                s = (0, u.Y)(),
                                l = (0, _.g)(),
                                { store: g, patchesRef: h } = (0, d.m)({
                                    createStore: () => t({ ...s, rootStore: l }),
                                    getPendingPatchBatches: o,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(m, { nonce: r, patchKey: a, patchesRef: h }), (0, n.jsx)(p, { store: g, storeKey: a, children: i })],
                            });
                        },
                    };
                };
            function C(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = (0, r.useContext)(g);
                if (!a || a.storeKey !== e) {
                    var n;
                    if (!t) return null;
                    throw new l.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (n = null == a ? void 0 : a.storeKey) ? n : 'null', expectedStoreKey: e },
                    });
                }
                return a.store;
            }
        },
        42044: (e) => {
            e.exports = {
                root: 'CollectionPageHeader_root__w7O2V',
                staticHeader: 'CollectionPageHeader_staticHeader__AySwR',
                staticContent: 'CollectionPageHeader_staticContent__hw1c8',
                staticContent_hidden: 'CollectionPageHeader_staticContent_hidden__xwfkN',
                stickyHeader: 'CollectionPageHeader_stickyHeader__sRA5m',
                important: 'CollectionPageHeader_important__vAeIM',
                stickyHeader_withLumen: 'CollectionPageHeader_stickyHeader_withLumen__I0vVu',
                stickyTitle: 'CollectionPageHeader_stickyTitle__E8CFd',
                title: 'CollectionPageHeader_title__7jMY7',
                description: 'CollectionPageHeader_description__HkJfi',
                collectionColor: 'CollectionPageHeader_collectionColor__gwUiT',
                stickyLumen: 'CollectionPageHeader_stickyLumen__5BWAu',
            };
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
        49429: (e, t, a) => {
            (Promise.resolve().then(a.bind(a, 57328)),
                Promise.resolve().then(a.bind(a, 29681)),
                Promise.resolve().then(a.bind(a, 20551)),
                Promise.resolve().then(a.bind(a, 8679)),
                Promise.resolve().then(a.bind(a, 64546)));
        },
        51318: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => n });
            var n = (function (e) {
                return (
                    (e.TOGGLE_PLAY = 'TOGGLE_PLAY'),
                    (e.TOGGLE_MUTE = 'TOGGLE_MUTE'),
                    (e.INCREASE_VOLUME = 'INCREASE_VOLUME'),
                    (e.DECREASE_VOLUME = 'DECREASE_VOLUME'),
                    (e.LIKE = 'LIKE'),
                    (e.DISLIKE = 'DISLIKE'),
                    (e.MOVE_FORWARD = 'MOVE_FORWARD'),
                    (e.MOVE_BACKWARD = 'MOVE_BACKWARD'),
                    (e.SLIDE_FORWARD = 'SLIDE_FORWARD'),
                    (e.SLIDE_BACKWARD = 'SLIDE_BACKWARD'),
                    (e.TOGGLE_REPEAT = 'TOGGLE_REPEAT'),
                    (e.TOGGLE_SHUFFLE = 'TOGGLE_SHUFFLE'),
                    (e.TOGGLE_FULLSCREEN_PLAYER = 'TOGGLE_FULLSCREEN_PLAYER'),
                    (e.CLOSE = 'CLOSE'),
                    e
                );
            })({});
        },
        53779: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => o });
            var n = a(82212);
            let o = (e) => {
                var t, a, o, i;
                return (
                    !!Array.isArray(e.tabs.data) &&
                    1 === e.tabs.data.length &&
                    (null == (a = e.tabs.data[0]) || null == (t = a.blocks) ? void 0 : t.length) === 1 &&
                    (null == (i = e.tabs.data[0]) || null == (o = i.blocks[0]) ? void 0 : o.type) === n.t.WIZARD
                );
            };
        },
        53892: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => n });
            let n = {
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
            var n = a(5120),
                o = a(44349),
                i = a(76626),
                r = a(96826),
                s = a(74773),
                l = a(59497);
            let c = n.gK
                .compose(n.gK.model('DownloadedTracks', { items: n.gK.maybeNull(n.gK.array(r.v)), tracks: n.gK.maybeNull(n.gK.frozen()) }), l.X)
                .views((e) => ({
                    get tracksDurationInMinutes() {
                        var t, a;
                        return (null != (a = null == (t = e.tracks) ? void 0 : t.reduce((e, t) => (t.durationMs ? e + t.durationMs : e), 0)) ? a : 0) / 1e3 / 60;
                    },
                    get entitiesData() {
                        if (!e.tracks) return [];
                        return e.tracks.map((e) => ({ type: o.R.DownloadedMusic, meta: e }));
                    },
                    get isEmpty() {
                        var n;
                        return e.isResolved && (null == (n = e.items) ? void 0 : n.length) === 0;
                    },
                }))
                .actions((e) => ({
                    getData: (0, n.L3)(function* (t, a) {
                        let { modelActionsLogger: o } = (0, n._$)(e);
                        if (e.loadingState !== s.G.PENDING)
                            try {
                                e.loadingState = s.G.PENDING;
                                let o = yield t.getTracks(a);
                                ((e.tracks = o), (e.items = (0, n.wg)(o.map((e) => (0, i.v)(e)))), e.loadingState !== s.G.IDLE && (e.loadingState = s.G.RESOLVE));
                            } catch (t) {
                                (o.error(t), e.loadingState !== s.G.IDLE && (e.loadingState = s.G.REJECT));
                            }
                    }),
                    reset() {
                        ((e.items = null), (e.tracks = null), (e.loadingState = s.G.IDLE));
                    },
                }));
        },
        57328: (e, t, a) => {
            'use strict';
            a.d(t, { WithAuth: () => m });
            var n = a(88800),
                o = a(84961),
                i = a(58390),
                r = a(65724),
                s = a(88969),
                l = a(29504),
                c = a(7628),
                d = a(42674),
                _ = a.n(d);
            let u = (0, o.PA)(() =>
                (0, n.jsxs)('div', {
                    className: _().root,
                    children: [
                        (0, n.jsx)(l.DZ, {
                            className: (0, r.$)(_().title, _().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, n.jsx)(s.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, n.jsx)(l.HL, {
                            className: (0, r.$)(_().text, _().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, n.jsx)(s.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, n.jsx)(c.H, { size: 'l', className: _().button }),
                    ],
                }),
            );
            var g = a(4370),
                p = a(72288);
            let m = (0, o.PA)((e) => {
                let { children: t, withRedirectToMainPage: a } = e,
                    { user: o } = (0, p.g)();
                return o.isAuthorized ? t : (a && (0, i.redirect)(g.Z.main.href), (0, n.jsx)(u, {}));
            });
        },
        62932: (e) => {
            e.exports = {
                root: 'MyMusicDownloadedTracksPageEmpty_root__LAXpY',
                icon: 'MyMusicDownloadedTracksPageEmpty_icon__PDhk2',
                title: 'MyMusicDownloadedTracksPageEmpty_title__g2w5R',
                text: 'MyMusicDownloadedTracksPageEmpty_text__8RJFg',
            };
        },
        69629: (e) => {
            var t = Object.prototype.hasOwnProperty;
            function a(e) {
                return '[Throws: ' + (e ? e.message : '?') + ']';
            }
            function n(e) {
                var n = [];
                return (function e(o) {
                    if (null === o || 'object' != typeof o) return o;
                    if (-1 !== n.indexOf(o)) return '[Circular]';
                    if ((n.push(o), 'function' == typeof o.toJSON))
                        try {
                            var i = e(o.toJSON());
                            return (n.pop(), i);
                        } catch (e) {
                            return a(e);
                        }
                    if (Array.isArray(o)) {
                        var r = o.map(e);
                        return (n.pop(), r);
                    }
                    var s = Object.keys(o).reduce(function (n, i) {
                        return (
                            (n[i] = e(
                                (function (e, n) {
                                    if (t.call(e, n))
                                        try {
                                            return e[n];
                                        } catch (e) {
                                            return a(e);
                                        }
                                    return e[n];
                                })(o, i),
                            )),
                            n
                        );
                    }, {});
                    return (n.pop(), s);
                })(e);
            }
            ((e.exports = function (e, t, a) {
                return JSON.stringify(n(e), t, a);
            }),
                (e.exports.ensureProperties = n));
        },
        77451: (e, t, a) => {
            'use strict';
            a.d(t, { Jt: () => i, TF: () => s, hZ: () => r });
            var n = function () {
                return (n =
                    Object.assign ||
                    function (e) {
                        for (var t, a = 1, n = arguments.length; a < n; a++)
                            for (var o in (t = arguments[a])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e;
                    }).apply(this, arguments);
            };
            function o(e, t) {
                if (!t) return '';
                var a = '; ' + e;
                return !0 === t ? a : a + '=' + t;
            }
            function i(e) {
                return (function (e) {
                    for (var t = {}, a = e ? e.split('; ') : [], n = 0; n < a.length; n++) {
                        var o = a[n].split('='),
                            i = o.slice(1).join('=');
                        '"' === i[0] && (i = i.slice(1, -1));
                        try {
                            t[decodeURIComponent(o[0])] = i.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function r(e, t, a) {
                var i;
                document.cookie =
                    ((i = n({ path: '/' }, a)),
                    encodeURIComponent(e)
                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                        .replace(/\(/g, '%28')
                        .replace(/\)/g, '%29') +
                        '=' +
                        encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) +
                        (function (e) {
                            if ('number' == typeof e.expires) {
                                var t = new Date();
                                (t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires), (e.expires = t));
                            }
                            return (
                                o('Expires', e.expires ? e.expires.toUTCString() : '') +
                                o('Domain', e.domain) +
                                o('Path', e.path) +
                                o('Secure', e.secure) +
                                o('SameSite', e.sameSite)
                            );
                        })(i));
            }
            function s(e, t) {
                r(e, '', n(n({}, t), { expires: -1 }));
            }
        },
        84255: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => l });
            var n = a(88800),
                o = a(84961),
                i = a(53548),
                r = a(18593),
                s = a(10829);
            let l = (0, o.PA)((e) => {
                let { track: t, index: a, entitiesData: o, contextId: l, from: c } = e,
                    d = t.id,
                    _ = (0, i.useMemo)(
                        () => ({
                            contextData: { type: r.K.Various, meta: { id: l }, from: c },
                            entitiesData: o,
                            queueParams: { index: a, entityId: d },
                            loadContextMeta: !1,
                        }),
                        [l, c, o, a, d],
                    );
                return (0, n.jsx)(s.K, { track: t, playContextParams: _ });
            });
        },
        87966: (e) => {
            e.exports = { root: 'MyMusicDownloadedTracksInfo_root__yIYHx' };
        },
        90286: (e) => {
            e.exports = { root: 'CollectionLumenEntry_root__cVdqM', image: 'CollectionLumenEntry_image___EUNM' };
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
    },
    (e) => {
        (e.O(
            0,
            [
                7191, 9904, 6582, 3078, 918, 1833, 1191, 1041, 8194, 917, 4863, 1635, 2803, 2218, 1138, 893, 6252, 9192, 727, 8655, 5188, 6706, 4771, 1311, 5201, 3075,
                2662, 6904, 1898, 2058, 3578, 8628, 9780, 8283, 9332, 5151, 1223, 9027, 146, 9907, 9380, 4732, 9087, 3979, 6719, 1928, 9091, 9124, 900, 9934, 2470, 7670,
                4441, 6374, 2088, 8979, 818, 7053, 4322, 3300, 1372, 5823, 6820, 4244, 1960, 4683, 1401, 4394, 5772, 389, 7489, 763, 2670, 7358,
            ],
            () => e((e.s = 49429)),
        ),
            (_N_E = e.O()));
    },
]);
