(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2232, 6363],
    {
        6668: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => r });
            var s = i(53548),
                a = i(29993);
            let r = () => {
                let e = (0, s.useRef)(new Map());
                return (
                    (0, s.useLayoutEffect)(
                        () => (
                            e.current.size > 0 && e.current.clear(),
                            () => {
                                e.current.clear();
                            }
                        ),
                        [],
                    ),
                    (0, a.c)((t, i) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, i), i)))
                );
            };
        },
        7628: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => h });
            var s = i(88800),
                a = i(88969),
                r = i(58390),
                n = i(17392),
                l = i(29993),
                o = i(96817),
                c = i(29504),
                d = i(99890),
                u = i(4086),
                m = i(41928);
            let h = (e) => {
                let { size: t = 'm', variant: i = 'default', color: h = 'primary', withRipple: _ = !0, buttonText: v, isBlock: g, key: x, className: k } = e,
                    p = (0, r.useRouter)(),
                    C = (0, m.N)().get(u.QG),
                    b = (0, l.c)(() => {
                        C.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), p.push(C.authorizationUrl));
                    });
                return (0, s.jsx)(
                    o.$,
                    {
                        onClick: b,
                        className: k,
                        isBlock: g,
                        color: h,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: _,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: v || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(a.A, { id: 'authorization.enter-button' }) }),
                    },
                    x,
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
        10829: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => k });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                n = i(53548),
                l = i(17392),
                o = i(34126),
                c = i(39079),
                d = i(72288),
                u = i(39267),
                m = i(13619),
                h = i(73805),
                _ = i(15232),
                v = i(56712),
                g = i(26243),
                x = i.n(g);
            let k = (0, r.PA)((e) => {
                var t;
                let {
                        track: i,
                        playContextParams: r,
                        className: g,
                        withDNDBlock: k,
                        isDragging: p,
                        draggingClassName: C,
                        ignoreDislikedStyles: b,
                        withSecondaryColor: S,
                        handleRemove: j,
                        withDislike: f,
                        withTrailer: T = !0,
                        beforeTitle: y,
                        removeButtonAriaLabel: A,
                        hideControls: N,
                    } = e,
                    I = (0, c.D)({ playContextParams: r, entityId: i.entityId }),
                    {
                        settings: { isMobile: R },
                    } = (0, d.g)(),
                    w = (0, o.X)(i.trackSource, { isMobile: R }),
                    D = (0, n.useCallback)(
                        (e) =>
                            (0, s.jsx)(u.q, {
                                isAvailable: i.isAvailable,
                                isDisliked: i.isDisliked,
                                coverUri: i.coverUri,
                                title: i.title,
                                className: x().playButtonCell,
                                ignoreDislikedStyles: b,
                                radius: 'xs',
                                ...e,
                            }),
                        [b, i.coverUri, i.isAvailable, i.isDisliked, i.title],
                    );
                return (0, s.jsx)(v.C, {
                    className: (0, a.$)(g, { [x().trackWithDots]: k, [x().important]: k }),
                    track: i,
                    beforeBlock: k ? (0, s.jsx)(m.O, { className: (0, a.$)(x().dots, C), isDragging: p }) : void 0,
                    meta: (0, s.jsx)(_.j, { withArtistLink: w, beforeTitle: y, track: i, ignoreDislikedStyles: b, withSecondaryColor: S }),
                    playButtonCellRender: D,
                    controls: (0, s.jsx)(h.Q, {
                        track: i,
                        className: x().controlsBarCell,
                        ignoreDislikedStyles: b,
                        utmLink: null == (t = r.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: S,
                        handleRemove: j,
                        withDislike: f,
                        withTrailer: T,
                        removeButtonAriaLabel: A,
                        hideControls: N,
                    }),
                    ...I,
                    'data-test-id': l.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        14912: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => a });
            var s = i(53548);
            let a = () =>
                (0, s.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        15232: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => T });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(58390),
                c = i(17392),
                d = i(79070),
                u = i(17610),
                m = i(29504),
                h = i(13946),
                _ = i(55693),
                v = i(72288),
                g = i(24548),
                x = i(85587),
                k = i(90224),
                p = i(91292),
                C = i(7608),
                b = i(6667),
                S = i(85463),
                j = i(65462),
                f = i.n(j);
            let T = (0, r.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: r,
                        albumArtists: j,
                        withExplicitMark: T,
                        withSecondaryColor: y,
                        captionSize: A = 'm',
                        explicitSize: N = 'xxxs',
                        withAllArtistsTitle: I,
                        textClassName: R,
                        artistsClassName: w,
                        ignoreDislikedStyles: D,
                        withCustomTooltip: P = !0,
                        hasLineClamp: L = !0,
                        withSavingQueryParams: E,
                        beforeTitle: O,
                        withArtistLink: z,
                        variant: H,
                        withTrackLink: M,
                        afterTitle: q,
                        withContextMenuArtists: B,
                    } = e,
                    { formatMessage: K } = (0, l.A)(),
                    { sendNavigateSearchFeedback: W } = (0, _.z)(),
                    {
                        settings: { isMobile: U },
                        slam: F,
                    } = (0, v.g)(),
                    $ = (0, b.$)({ withCustomTooltip: P }),
                    V = (0, o.useSearchParams)(),
                    Z = (0, C.B)(r, {
                        isMobile: U,
                        isOfflineModeEnabled: F.isOfflineModeEnabled,
                        albumArtists: j,
                        withTrackLink: M,
                        withArtistLink: z,
                        variant: H,
                        withExplicitMark: T,
                        query: E ? Object.fromEntries(V) : void 0,
                    }),
                    {
                        displayTitle: G,
                        ariaLabel: X,
                        tooltipText: Y,
                        titleAttribute: Q,
                        versionTitleAttribute: J,
                        isTooltipEnabled: ee,
                    } = ((e, t, i, s) => {
                        var a, r;
                        let { canEnableCustomTooltip: n, isMobile: l } = i,
                            o = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, s),
                            c = t.shouldShowRemovedTitle ? o : ''.concat(o, ' ').concat(null != (a = t.version) ? a : ''),
                            d = s({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: o,
                            ariaLabel: ''.concat(d, ' ').concat(null != (r = e.version) ? r : ''),
                            tooltipText: c,
                            isTooltipEnabled: n && !l,
                            titleAttribute: !n && (t.shouldShowRemovedTitle || t.link) ? c : void 0,
                            versionTitleAttribute: n ? void 0 : t.version,
                        };
                    })(r, Z, { canEnableCustomTooltip: $, isMobile: U }, K),
                    et = (0, S.O)({ track: r, onNavigate: W, withSavingQueryParams: E, entityType: x.n.TRACK }),
                    ei = (0, n.useCallback)(
                        (e) =>
                            (0, s.jsx)(u.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: Y,
                                hoverSettings: g.V,
                                children: (0, s.jsx)(m.HL, {
                                    className: (0, a.$)(f().text, f().title),
                                    type: 'entity',
                                    size: A,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: G,
                                }),
                            }),
                        [A, G, Y, ee],
                    ),
                    es = (0, d.L)(() =>
                        Z.shouldShowRemovedTitle
                            ? (0, s.jsx)(u.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: Y,
                                  hoverSettings: g.V,
                                  children: (0, s.jsx)(m.HL, {
                                      className: (0, a.$)(f().text, f().title),
                                      type: 'entity',
                                      size: A,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: Q,
                                      children: G,
                                  }),
                              })
                            : Z.link
                              ? (0, s.jsx)(p.N, {
                                    onClick: et,
                                    className: f().albumLink,
                                    href: Z.link.href,
                                    'aria-label': X,
                                    title: Q,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: ei(),
                                })
                              : ei({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    ea = (0, n.useMemo)(() => +!!L, [L]);
                return (0, s.jsx)('div', {
                    className: (0, a.$)(f().root, { [f().root_disabled]: !r.isAvailable, [f().root_disliked]: r.isDisliked && !D, [f().root_withSecondaryColor]: y }, t),
                    children: (0, s.jsxs)('div', {
                        className: f().metaContainer,
                        children: [
                            (0, s.jsxs)('div', {
                                className: (0, a.$)(f().titleContainer, { [f().titleContainer_withVersion]: r.version }, i),
                                children: [
                                    (0, s.jsxs)(m.HL, {
                                        className: (0, a.$)(f().text, R),
                                        type: 'entity',
                                        size: A,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            O,
                                            es,
                                            Z.version &&
                                                (0, s.jsxs)(m.HL, {
                                                    className: (0, a.$)(f().text, f().version),
                                                    type: 'entity',
                                                    size: A,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: J,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', Z.version],
                                                }),
                                        ],
                                    }),
                                    Z.explicitMark &&
                                        (0, s.jsx)(k.N, {
                                            containerClassName: f().explicitMarkContainer,
                                            getDescriptionTexts: r.getDescriptionTexts,
                                            size: N,
                                            variant: Z.explicitMark,
                                            className: f().explicitMark,
                                            trackId: r.id,
                                        }),
                                    q,
                                ],
                            }),
                            Z.artists.length > 0 &&
                                (0, s.jsx)(h.i, {
                                    className: (0, a.$)(f().text, { [f().artists]: L }, w, R),
                                    withAllArtistsTitle: I,
                                    linkClassName: (0, a.$)(f().text, f().link),
                                    captionClassName: (0, a.$)(f().text, f().artistCaption),
                                    artists: Z.artists,
                                    withLink: Z.withArtistLink,
                                    lineClamp: ea,
                                    captionSize: A,
                                    withContextMenu: B,
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
        21256: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => B });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(97234),
                c = i(91177),
                d = i(70598),
                u = i(46482),
                m = i(17392),
                h = i(18593),
                _ = i(29993),
                v = i(79070),
                g = i(29832),
                x = i(52300),
                k = i(7555),
                p = i(29504),
                C = i(91959),
                b = i(64207),
                S = i(77455),
                j = i(5407),
                f = i(57934),
                T = i(84384),
                y = i(4795),
                A = i(78940),
                N = i(55693),
                I = i(39079),
                R = i(72288),
                w = i(81877),
                D = i(49738),
                P = i(91292),
                L = i(56862),
                E = i(16704),
                O = i(56446),
                z = i(36207),
                H = i(43161),
                M = i(93434),
                q = i.n(M);
            let B = (0, r.PA)((e) => {
                let { artist: t, className: i, children: r, contentLinesCount: M, topTitleElement: B, bottomTitleElement: K } = e,
                    W = (0, c.D)(),
                    {
                        trailer: U,
                        user: F,
                        paywall: { modal: $ },
                    } = (0, R.g)(),
                    { from: V, utmLink: Z } = (0, T.f)({ contextId: t.id, contextType: h.K.Artist }),
                    { formatMessage: G } = (0, l.A)(),
                    [X, Y] = (0, n.useState)(!1),
                    [Q, J] = (0, n.useState)(!1),
                    [ee, et] = (0, n.useState)(!1),
                    { sendLikeSearchFeedback: ei, sendNavigateSearchFeedback: es, sendPlaySearchFeedback: ea } = (0, N.z)(),
                    er = (0, d.S)(),
                    en = (0, u.g)(),
                    el = (0, b.K)(t),
                    eo = (0, S.A)(t),
                    { id: ec, name: ed, coverUri: eu, isLiked: em } = t,
                    eh = (0, A.Z)(t.url),
                    [e_, ev] = (0, n.useState)(!1),
                    eg = (0, f.F)(),
                    ex = (0, j.P)(),
                    ek = (0, _.c)((e) => {
                        if ((e.stopPropagation(), ex())) return void e.preventDefault();
                        (U.openArtistTrailer(t.id), eg(o.DomainObjectType.Artist, t.id));
                    }),
                    ep = (0, n.useMemo)(() => {
                        let e = G({ id: 'entity-names.artist-name' }, { artistName: ed }),
                            t = em ? G({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [ed, em, G]),
                    { isPlaying: eC, togglePlay: eb } = (0, I.D)({
                        playContextParams: { contextData: { type: h.K.Artist, meta: { id: Number(ec) }, from: V, utmLink: Z }, loadContextMeta: !0 },
                    }),
                    eS = (0, C.S)({ artist: t, callback: eh }),
                    ej = (0, C.S)({ artist: t, callback: eb }),
                    ef = (0, _.c)((e) => {
                        (null == es || es(), er({ to: o.AppScreen.ArtistScreen }), eS(e));
                    }),
                    eT = (0, y.N)(),
                    ey = (0, _.c)(() => {
                        if (!ex()) {
                            if (eT) return void $.open();
                            (X || eC || (Y(!0), null == ea || ea()), ej(), eC || en());
                        }
                    }),
                    eA = (0, _.c)(() => {
                        (Q || em || (J(!0), null == ei || ei()), el());
                    }),
                    eN = (0, _.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eI = (0, _.c)((e) => {
                        (et(e), ev(e));
                    }),
                    eR = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(
                                H.g,
                                {
                                    artist: t,
                                    onOpenChange: eI,
                                    open: ee,
                                    onClick: eN,
                                    className: (0, a.$)(q().menuButton, q().control),
                                    size: 's',
                                    icon: (0, s.jsx)(x.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': m.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eN, eI, ee],
                    ),
                    ew = (0, n.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, s.jsx)(
                                z.n,
                                {
                                    children: (0, s.jsx)(O.k, {
                                        className: (0, a.$)(q().trailerButton, q().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: ek,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, ek]),
                    eD = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(
                                L.O,
                                { onClick: eo, isPinned: t.isPinned, className: (0, a.$)(q().pinButton, q().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, eo],
                    ),
                    eP = (0, v.L)(() => {
                        if (t.isAvailable)
                            return (0, s.jsx)(
                                g.hg,
                                {
                                    isVisible: ee || e_,
                                    className: q().controls,
                                    radius: 'round',
                                    playControl: (0, s.jsx)(
                                        E.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, a.$)(q().playButton, q().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: ey,
                                            isPlaying: eC,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, s.jsx)(
                                        D.c,
                                        {
                                            className: (0, a.$)(q().likeButton, q().control),
                                            isLiked: em,
                                            onClick: eA,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !F.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eR,
                                    pinControl: eD,
                                    trailerControl: ew,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eL = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(k.t, {
                                className: q().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': m.Kq.artist.ARTIST_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: q().coverBlock,
                                    onClick: ef,
                                    children: [
                                        (0, s.jsx)(w.B, {
                                            className: q().image,
                                            src: eu,
                                            size: 200,
                                            fit: 'cover',
                                            alt: ep,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eP,
                                    ],
                                }),
                            }),
                        [ef, eu, ep, t.isAvailable, eP],
                    );
                return (0, s.jsx)(g.MN, {
                    ref: W,
                    className: (0, a.$)(q().root, i),
                    textPosition: 'center',
                    'aria-label': ep,
                    title: (0, s.jsxs)(s.Fragment, {
                        children: [
                            B,
                            (0, s.jsx)(p.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, s.jsx)(P.N, {
                                    className: q().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': ep,
                                    onClick: ef,
                                    'data-test-id': m.Kq.artist.ARTIST_TITLE,
                                    children: ed,
                                }),
                            }),
                            K,
                        ],
                    }),
                    srTitle: (0, s.jsx)(P.N, { className: q().srTitleLink, href: t.url, onClick: ef, children: ep }),
                    contentLinesCount: M,
                    view: eL,
                    'data-test-id': m.Kq.artist.ARTIST_ITEM,
                    children: r,
                });
            });
        },
        23390: (e) => {
            e.exports = { root: 'CollectionDislikesPage_root__Qnohu' };
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
        32596: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => P });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(88969);
            i(30282);
            var c = i(96817),
                d = i(52300),
                u = i(29504),
                m = i(97234),
                h = i(59714),
                _ = i(43054),
                v = i(18117),
                g = i(93940),
                x = i(24709);
            let k = (0, x.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, _.s)()) ? void 0 : e.evgenInstance,
                        { hash: i } = (0, v.g)(),
                        { screen: s } = (0, g.j)();
                    return {
                        sendRefreshEvent: (0, n.useCallback)(() => {
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
                            Object.values(e).some((e) => void 0 === e) || (0, h.bv)(t, e);
                        }, [t, i, null == s ? void 0 : s.pageId]),
                    };
                }),
                p = (0, x.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let i = null == (t = (0, _.s)()) ? void 0 : t.evgenInstance,
                        { hash: s } = (0, v.g)(),
                        { screen: a } = (0, g.j)();
                    (0, n.useEffect)(() => {
                        if (!i || !s || !(null == a ? void 0 : a.pageId)) return;
                        let t = {
                            entityType: m.EntityTypes.Error,
                            entityId: m.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: s,
                            pageId: a.pageId,
                            pageStyle: m.PageStyles.Fullscreen,
                            pagePlacement: m.PagePlacements.Fullscreen,
                            mainObjectType: m.DomainObjectType.NonApplicable,
                            mainObjectId: m.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, h.z5)(i, t);
                    }, [i, e, s, null == a ? void 0 : a.pageId]);
                });
            var C = i(44230),
                b = i(4370),
                S = i(72288),
                j = i(97956),
                f = i(56248),
                T = i(90688),
                y = i(78940);
            let A = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var N = i(96856),
                I = i.n(N);
            let R = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: r } = e,
                    { slam: n } = (0, S.g)(),
                    { contentRef: l } = (0, C.g)(),
                    d = (0, y.Z)(b.Z.mymusicDownloadsTracks.href);
                return (0, s.jsxs)('div', {
                    className: (0, a.$)(I().root, t),
                    children: [
                        i &&
                            (0, s.jsx)(f.L, {
                                withBackwardFallback: '/',
                                className: (0, a.$)(I().navigation, { [I().navigation_desktop]: !l }),
                                withForwardControl: !1,
                                onBackwardClick: r,
                            }),
                        (0, s.jsxs)('div', {
                            className: (0, a.$)(I().content, { [I().content_shrink]: !i }),
                            children: [
                                (0, s.jsx)(T._V, { className: I().image, src: A.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, s.jsxs)('div', {
                                    className: I().message,
                                    children: [
                                        (0, s.jsx)(u.DZ, {
                                            className: I().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, s.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, s.jsx)(u.HL, {
                                            className: I().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, s.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                n.hasDownloadedTracks &&
                                    (0, s.jsx)(c.$, {
                                        className: I().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, s.jsx)(u.HL, {
                                            className: I().buttonText,
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
            var w = i(9184),
                D = i.n(w);
            let P = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: r } = e,
                    { formatMessage: m } = (0, l.A)(),
                    h = (0, n.useContext)(S.P),
                    _ = null == h ? void 0 : h.experiments.checkExperiment(j.z.WebNextUnstableMusicScreen, 'on'),
                    v = m(_ ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                p(v);
                let { sendRefreshEvent: g } = k(),
                    x = (0, n.useCallback)(() => {
                        (g(), (window.location.href = b.Z.main.href));
                    }, [g]),
                    { contentRef: T } = (0, C.g)();
                return _
                    ? (0, s.jsx)(R, { className: t, withBackwardControl: i, onBack: r })
                    : (0, s.jsxs)('div', {
                          className: (0, a.$)(D().root, t),
                          children: [
                              i &&
                                  (0, s.jsx)(f.L, {
                                      withBackwardFallback: '/',
                                      className: (0, a.$)(D().navigation, { [D().navigation_desktop]: !T }),
                                      withForwardControl: !1,
                                      onBackwardClick: r,
                                  }),
                              (0, s.jsxs)('div', {
                                  className: (0, a.$)(D().content, { [D().content_shrink]: !i }),
                                  children: [
                                      (0, s.jsx)(d.I, { className: D().icon, variant: 'attention', size: 'xxl' }),
                                      (0, s.jsx)(u.DZ, { className: (0, a.$)(D().title, D().important), variant: 'h3', size: 'xs', children: v }),
                                      (0, s.jsxs)(u.HL, {
                                          className: (0, a.$)(D().text, D().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, s.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, s.jsx)(c.$, {
                                          onClick: x,
                                          className: D().button,
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
        42674: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        43161: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => Y });
            var s = i(88800),
                a = i(84961),
                r = i(2058),
                n = i(97234),
                l = i(17392),
                o = i(18593),
                c = i(29993),
                d = i(52300),
                u = i(19934),
                m = i(96706),
                h = i(53548),
                _ = i(79390),
                v = i(29595),
                g = i(74965),
                x = i(72288),
                k = i(66943),
                p = i(7555),
                C = i(73170),
                b = i(29504),
                S = i(59304),
                j = i(81877),
                f = i(85074),
                T = i.n(f);
            let y = (e) => {
                let { coverUri: t, title: i, isDisliked: a, closeToast: n } = e,
                    { formatMessage: l } = (0, r.A)(),
                    o = l(a ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, s.jsx)(S.$, {
                    closeToast: n,
                    message: (0, s.jsxs)('div', {
                        className: T().message,
                        children: [
                            (0, s.jsx)(C.q, { children: (0, s.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, s.jsx)(p.t, {
                                className: T().cover,
                                radius: 'round',
                                children: (0, s.jsx)(j.B, { className: T().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, s.jsx)(b.HL, { className: T().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var A = i(64207),
                N = i(77455),
                I = i(48749),
                R = i(22505),
                w = i(5407),
                D = i(64284),
                P = i(98427),
                L = i(57934),
                E = i(84384),
                O = i(9618),
                z = i(95210),
                H = i(47964),
                M = i(46936),
                q = i(97956),
                B = i(98953),
                K = i(32721),
                W = i(18130),
                U = i(56117),
                F = i(93091),
                $ = i(27817),
                V = i(74064),
                Z = i(15425),
                G = i(81066),
                X = i(64546);
            let Y = (0, a.PA)((e) => {
                var t, i, a;
                let { artist: p, onOpenChange: C, open: b, ...S } = e,
                    { shouldShowBuySubscriptionModal: j, showBuySubscriptionModal: f } = (0, O.q)(),
                    {
                        settings: { isMobile: T },
                        modals: { artistAboutModal: Y },
                        trailer: Q,
                        user: J,
                        experiments: ee,
                    } = (0, x.g)(),
                    et = (0, N.A)(p),
                    ei = (0, A.K)(p),
                    es = ((e) => {
                        let { user: t } = (0, x.g)(),
                            { notify: i } = (0, g.l)(),
                            [a, n] = (0, h.useState)(!1),
                            { formatMessage: l } = (0, r.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, s.jsx)(k.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: v.u.ERROR });
                            if (a) return;
                            let r = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            n(!0);
                            let o = await e.toggleDislike();
                            (n(!1),
                                o === _.f.OK
                                    ? i((0, s.jsx)(y, { coverUri: r.coverUri, title: r.name, isDisliked: r.isDisliked }), { containerId: v.u.INFO })
                                    : i((0, s.jsx)(k.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: v.u.ERROR }));
                        });
                    })(p),
                    ea = (0, L.F)(),
                    er = ''.concat(D.U.ARTIST, '-').concat(null == p ? void 0 : p.id),
                    { formatMessage: en } = (0, r.A)(),
                    { utmLink: el } = (0, E.f)({ blockId: D.U.ARTIST, contextType: o.K.Artist, contextId: null == p ? void 0 : p.id }),
                    { shareLink: eo, pathname: ec } = (0, W.b)('/artist/:artistId', { params: { artistId: null != (i = null == p ? void 0 : p.id) ? i : '' } }),
                    ed = (0, I.A)({ entityVariant: M.D.ARTIST, urlParams: { id: null == p ? void 0 : p.id } }),
                    { isPlaying: eu, togglePlay: em } = (0, H.B)({
                        seeds: null != (a = null == p ? void 0 : p.seeds) ? a : [],
                        pageIdForFrom: P.b.RADIO,
                        blockIdForFrom: er,
                        parentContextId: null == p ? void 0 : p.id,
                    }),
                    eh = (0, w.P)(),
                    e_ = en((null == p ? void 0 : p.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    ev = (0, c.c)(() => {
                        if (j && J.isAuthorized) return void f();
                        eu || em();
                    }),
                    eg = (0, c.c)(() => {
                        if (!eh()) {
                            if (j) return void f();
                            (null == p ? void 0 : p.id) && (Q.setUtmLink(el), Q.openArtistTrailer(p.id), ea(n.DomainObjectType.Artist, p.id));
                        }
                    }),
                    ex = (0, c.c)(() => {
                        Y.open(null == p ? void 0 : p.id);
                    });
                (0, z.N)(b);
                let ek = { variant: B.Y.ARTIST, id: null == p ? void 0 : p.id, title: null == p ? void 0 : p.name, path: ec },
                    ep = ee.checkExperiment(q.z.WebEditorsFeatures, 'on'),
                    eC = null == p || null == (t = p.trailer) ? void 0 : t.isAvailable,
                    eb = ee.checkExperiment(q.z.WebNextArtistInfo, 'on'),
                    eS = !ee.checkExperiment(q.z.WebNextProductWithoutRecommendation, 'on');
                return (0, s.jsxs)(u.W1, {
                    isMobile: T,
                    offsetOptions: 10,
                    open: b,
                    onOpenChange: C,
                    ariaLabel: en({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: l.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...S,
                    children: [
                        ep && (0, s.jsx)(X.WithOffline, { fallback: (0, s.jsx)(R.d, { entityVariant: M.D.ARTIST, adminUrl: ed }) }),
                        !T && (0, s.jsx)(X.WithOffline, { fallback: (0, s.jsx)($.L, { onClick: et, isPinned: null == p ? void 0 : p.isPinned }) }),
                        (0, s.jsx)(X.WithOffline, {
                            fallback: (0, s.jsx)(F.T, {
                                onClick: ei,
                                isLiked: null == p ? void 0 : p.isLiked,
                                disabled: !J.isAuthorized || !(null == p ? void 0 : p.isAvailable),
                            }),
                        }),
                        eC && (0, s.jsx)(X.WithOffline, { fallback: (0, s.jsx)(Z.N, { onClick: eg }) }),
                        eS &&
                            (0, s.jsx)(X.WithOffline, {
                                fallback: (0, s.jsx)(G.C, { onClick: ev, disabled: !(null == p ? void 0 : p.isAvailable), variant: K.I.ARTIST, onOpenMenuChange: C }),
                            }),
                        (0, s.jsx)(V.H, { disabled: !p, shareLink: eo, entityMeta: ek }),
                        eb &&
                            (0, s.jsx)(X.WithOffline, {
                                fallback: (0, s.jsx)(u.Dr, {
                                    onClick: ex,
                                    icon: (0, s.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': l.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: e_,
                                }),
                            }),
                        (0, s.jsx)(X.WithOffline, {
                            fallback: (0, s.jsx)(U.D, { onClick: es, isDisliked: null == p ? void 0 : p.isDisliked, disabled: !(null == p ? void 0 : p.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        49215: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 57328)), Promise.resolve().then(i.bind(i, 77853)));
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
        57328: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => v });
            var s = i(88800),
                a = i(84961),
                r = i(58390),
                n = i(65724),
                l = i(88969),
                o = i(29504),
                c = i(7628),
                d = i(42674),
                u = i.n(d);
            let m = (0, a.PA)(() =>
                (0, s.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, s.jsx)(o.DZ, {
                            className: (0, n.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, s.jsx)(l.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, s.jsx)(o.HL, {
                            className: (0, n.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, s.jsx)(l.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, s.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var h = i(4370),
                _ = i(72288);
            let v = (0, a.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: a } = (0, _.g)();
                return a.isAuthorized ? t : (i && (0, r.redirect)(h.Z.main.href), (0, s.jsx)(m, {}));
            });
        },
        64207: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => h });
            var s = i(88800),
                a = i(96706),
                r = i(53548),
                n = i(2058),
                l = i(79390),
                o = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                m = i(54243);
            let h = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [h, _] = (0, r.useState)(!1),
                    { formatMessage: v } = (0, n.A)();
                return (0, r.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, s.jsx)(u.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (h) return;
                    let r = { ...(0, a.HO)(e), isLiked: !e.isLiked };
                    _(!0);
                    let n = await e.toggleLike();
                    (_(!1),
                        n === l.f.OK
                            ? i((0, s.jsx)(m.T, { artist: r }), { containerId: o.u.INFO })
                            : i((0, s.jsx)(u.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, h, v, i]);
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
        66363: (e, t, i) => {
            'use strict';
            i.d(t, { NS: () => r, Nh: () => a, xW: () => n });
            var s = i(9519);
            let a = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
            class r {
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
                            if (a(i)) {
                                var s, r, n, l, o, c, d, u, m, h, _, v, g, x;
                                let a = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (s = i.request) ? void 0 : s.method) || (null == (r = i.options) ? void 0 : r.method),
                                        url: (null == (n = i.request) ? void 0 : n.url) || (null == (l = i.options) ? void 0 : l.url),
                                        headers: this.getHeaders((null == (o = i.request) ? void 0 : o.headers) || (null == (c = i.options) ? void 0 : c.headers)),
                                        body: (null == (d = i.request) ? void 0 : d.json) || (null == (u = i.options) ? void 0 : u.json),
                                        retries: t,
                                    },
                                };
                                void 0 !== i.response &&
                                    (a.response = {
                                        statusCode: i.response.statusCode,
                                        headers: this.getHeaders(i.response.headers),
                                        time: null == (x = i.response.timings) || null == (g = x.phases) ? void 0 : g.total,
                                    });
                                let k = this.getUrl((null == (m = i.request) ? void 0 : m.url) || (null == (h = i.options) ? void 0 : h.url));
                                this.logger.warn(
                                    '[Resource] Retry request '
                                        .concat((null == (_ = i.request) ? void 0 : _.method) || (null == (v = i.options) ? void 0 : v.method), ' ')
                                        .concat(k.origin, ' ')
                                        .concat(k.pathname)
                                        .concat(k.search),
                                    a,
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
                            if (a(t)) {
                                var i, s, r, n, l, o, c, d, u, m, h, _, v, g;
                                let a = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (i = t.request) ? void 0 : i.method) || (null == (s = t.options) ? void 0 : s.method),
                                        url: (null == (r = t.request) ? void 0 : r.url) || (null == (n = t.options) ? void 0 : n.url),
                                        headers: this.getHeaders((null == (l = t.request) ? void 0 : l.headers) || (null == (o = t.options) ? void 0 : o.headers)),
                                        body: (null == (c = t.request) ? void 0 : c.json) || (null == (d = t.options) ? void 0 : d.json),
                                    },
                                };
                                void 0 !== t.response &&
                                    (a.response = {
                                        statusCode: t.response.statusCode || t.response.status,
                                        headers: this.getHeaders(t.response.headers),
                                        time: null == (g = t.response.timings) || null == (v = g.phases) ? void 0 : v.total,
                                    });
                                let x = this.getUrl((null == (u = t.request) ? void 0 : u.url) || (null == (m = t.options) ? void 0 : m.url));
                                this.logger.error(
                                    '[Resource] Request failed '
                                        .concat((null == (h = t.request) ? void 0 : h.method) || (null == (_ = t.options) ? void 0 : _.method), ' ')
                                        .concat(x.origin, ' ')
                                        .concat(x.pathname)
                                        .concat(x.search, ', reason: ')
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
            (i(35412), i(69629));
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
        68878: (e) => {
            e.exports = {
                root: 'CollectionDislikesPageContent_root__3AoS5',
                scrollContainer: 'CollectionDislikesPageContent_scrollContainer__px7Vr',
                important: 'CollectionDislikesPageContent_important__Oz6io',
                content: 'CollectionDislikesPageContent_content__fScA9',
                content_withGrid: 'CollectionDislikesPageContent_content_withGrid__wcx80',
                content_tracks: 'CollectionDislikesPageContent_content_tracks__Hyiz_',
                footer: 'CollectionDislikesPageContent_footer__E6nZG',
                item: 'CollectionDislikesPageContent_item__aty4k',
                tabPanel: 'CollectionDislikesPageContent_tabPanel__5L5T_',
                shimmerItem: 'CollectionDislikesPageContent_shimmerItem__FMFR5',
            };
        },
        77455: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var s = i(88800),
                a = i(96706),
                r = i(53548),
                n = i(2058),
                l = i(29595),
                o = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(64247);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: m } = (0, n.A)(),
                    [h, _] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, s.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (h) return;
                    let r = { ...(0, a.HO)(e), isPinned: !e.isPinned };
                    _(!0);
                    let n = await e.togglePin();
                    (_(!1),
                        n
                            ? i((0, s.jsx)(u.l, { artist: r }), { containerId: l.u.INFO })
                            : i((0, s.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, t.isAuthorized, h, m, i]);
            };
        },
        77853: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionDislikesPage: () => eo });
            var s = i(88800),
                a = i(84961),
                r = i(53548),
                n = i(58390),
                l = i(97234),
                o = i(59724),
                c = i(17392),
                d = i(98225),
                u = i(69630),
                m = i(98427),
                h = i(44230),
                _ = i(37670),
                v = i(72288),
                g = i(34303),
                x = (function (e) {
                    return ((e.TRACKS = 'tracks'), (e.ARTISTS = 'artists'), e);
                })({}),
                k = (function (e) {
                    return ((e[(e.TRACKS = 0)] = 'TRACKS'), (e[(e.ARTISTS = 1)] = 'ARTISTS'), e);
                })({}),
                p = i(23390),
                C = i.n(p),
                b = i(65724),
                S = i(2058),
                j = i(32596),
                f = i(21256),
                T = i(86790),
                y = i(60266),
                A = i(37770),
                N = i(79418),
                I = i(88969),
                R = i(29504),
                w = i(46422),
                D = i(63807),
                P = i(56248),
                L = i(95228),
                E = i.n(L),
                O = i(87366),
                z = i(76099),
                H = i(4370),
                M = i(67174),
                q = i(14912),
                B = i(19994);
            let K = () =>
                    (0, s.jsxs)('div', {
                        className: E().tabsShimmer,
                        children: [(0, s.jsx)(B.W, { className: E().tabShimmer }), (0, s.jsx)(B.W, { className: E().tabShimmer })],
                    }),
                W = (0, a.PA)((e) => {
                    var t, i, a, n, l, o, c, d, u, m;
                    let { tabsState: h, tabElementId: _, isStickyHeader: g = !1 } = e,
                        {
                            collection: { dislikes: p },
                        } = (0, v.g)(),
                        { formatMessage: C } = (0, S.A)(),
                        { isScrolling: b } = (0, r.useContext)(D.B),
                        j = ((e) => {
                            let t = (0, q.X)();
                            return (0, r.useCallback)(
                                (i) => {
                                    var s;
                                    switch ((null == (s = e.onTabChange) || s.call(e, i), i)) {
                                        case k.TRACKS: {
                                            let { href: e } = (0, M.u)(H.Z.collectionDislikes.href, { query: { tab: x.TRACKS } });
                                            t(e);
                                            break;
                                        }
                                        case k.ARTISTS: {
                                            let { href: e } = (0, M.u)(H.Z.collectionDislikes.href, { query: { tab: x.ARTISTS } });
                                            t(e);
                                        }
                                    }
                                },
                                [t, e],
                            );
                        })(h),
                        f = b ? -1 : 0;
                    g && (f = b ? 0 : -1);
                    let T = (0, r.useMemo)(() => {
                            var e, t;
                            return (null == (t = p.tracks) || null == (e = t.items) ? void 0 : e.length)
                                ? ''.concat(C({ id: 'entity-names.tracks' }), ' • ').concat(p.tracks.items.length)
                                : C({ id: 'entity-names.tracks' });
                        }, [null == (i = p.tracks) || null == (t = i.items) ? void 0 : t.length, C]),
                        y = (0, r.useMemo)(() => {
                            var e, t;
                            return (null == (t = p.artists) || null == (e = t.items) ? void 0 : e.length)
                                ? ''.concat(C({ id: 'entity-names.artists' }), ' • ').concat(p.artists.items.length)
                                : C({ id: 'entity-names.artists' });
                        }, [null == (n = p.artists) || null == (a = n.items) ? void 0 : a.length, C]);
                    return (0, s.jsxs)(z.wI, {
                        isShimmerVisible: p.isLoading,
                        shimmer: (0, s.jsx)(K, {}),
                        className: E().tabs,
                        elementId: _,
                        ...h,
                        onTabChange: j,
                        children: [
                            (0, s.jsx)(O.o, {
                                className: E().tab,
                                value: k.TRACKS,
                                title: T,
                                'aria-label': C(
                                    { id: 'entity-names.tracks-count' },
                                    { value: null != (u = null == (o = p.tracks) || null == (l = o.items) ? void 0 : l.length) ? u : 0 },
                                ),
                                'aria-hidden': b,
                                tabIndex: f,
                            }),
                            (0, s.jsx)(O.o, {
                                className: E().tab,
                                value: k.ARTISTS,
                                title: y,
                                'aria-label': C(
                                    { id: 'entity-names.artists-count' },
                                    { value: null != (m = null == (d = p.artists) || null == (c = d.items) ? void 0 : c.length) ? m : 0 },
                                ),
                                'aria-hidden': b,
                                tabIndex: f,
                            }),
                        ],
                    });
                }),
                U = (0, a.PA)((e) => {
                    let { tabsState: t, tabElementId: i } = e,
                        a = (0, w.W)(),
                        { isScrolling: n } = (0, r.useContext)(D.B);
                    return (0, s.jsxs)('header', {
                        className: E().root,
                        'aria-hidden': n,
                        'data-test-id': c.Xk.collection.COLLECTION_DISLIKES_PAGE_STATIC_HEADER,
                        children: [
                            (0, s.jsxs)('div', {
                                className: E().container,
                                children: [
                                    a.canBack && (0, s.jsx)(P.L, { withForwardControl: !1, withBackwardControl: a.canBack, shouldFocusOnMount: !n }),
                                    (0, s.jsx)(R.DZ, {
                                        variant: 'h2',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        className: E().title,
                                        'data-test-id': c.Xk.collection.COLLECTION_DISLIKES_PAGE_STATIC_HEADER_TITLE,
                                        children: (0, s.jsx)(I.A, { id: 'collection.my-dislikes' }),
                                    }),
                                ],
                            }),
                            (0, s.jsx)(W, { tabsState: t, tabElementId: i }),
                        ],
                    });
                });
            var F = i(68878),
                $ = i.n(F);
            let V = (0, a.PA)((e) => {
                var t, i, a;
                let { forwardRef: n, tabsState: l, tabElementId: o } = e,
                    {
                        collection: { dislikes: c },
                        settings: { isMobile: u },
                    } = (0, v.g)(),
                    { formatMessage: m } = (0, S.A)(),
                    h = c.artists.isLoading ? 10 : null != (a = null == (i = c.artists) || null == (t = i.items) ? void 0 : t.length) ? a : 0,
                    _ = (0, r.useMemo)(
                        () => ({
                            Header: () => (0, s.jsx)(U, { tabsState: l, tabElementId: o }),
                            Footer: () => (0, s.jsx)(y.A, { children: (0, s.jsx)(T.w, { className: $().footer }) }),
                        }),
                        [o, l],
                    );
                return c.artists.isRejected
                    ? (0, s.jsx)(j.SomethingWentWrong, {})
                    : (0, s.jsx)('div', {
                          className: $().root,
                          children: (0, s.jsx)(d.Kp, {
                              value: l.value,
                              name: k.ARTISTS,
                              elementId: o,
                              className: $().tabPanel,
                              children: (0, s.jsx)(N.$, {
                                  className: (0, b.$)($().scrollContainer, $().important),
                                  listClassName: (0, b.$)($().content, $().content_withGrid),
                                  customComponents: _,
                                  initialItemCount: h,
                                  totalCount: h,
                                  itemContentCallback: (e) => {
                                      var t, i;
                                      let a = null == (i = c.artists) || null == (t = i.items) ? void 0 : t[e];
                                      if (!a) {
                                          let e = m({ id: 'loading-messages.entity-is-loading' }, { entityName: m({ id: 'entity-names.artist' }) });
                                          return (0, s.jsx)(A.V, { 'aria-label': e, round: !0, centered: !0 });
                                      }
                                      return (0, s.jsx)(f.a, { artist: a, contentLinesCount: 3, className: $().item }, a.id);
                                  },
                                  handleRef: n,
                                  context: { listAriaLabel: m({ id: 'entity-names.artists' }) },
                                  isMobileLayout: u,
                                  useWindowScroll: u,
                              }),
                          }),
                      });
            });
            var Z = i(18593),
                G = i(76843),
                X = i(10829),
                Y = i(84384),
                Q = i(6668),
                J = i(98644),
                ee = i(93015);
            let et = (0, a.PA)((e) => {
                var t, i, a;
                let { forwardRef: n, tabsState: l, tabElementId: o } = e,
                    { from: c } = (0, Y.f)(),
                    {
                        collection: { dislikes: u },
                        settings: { isMobile: m },
                    } = (0, v.g)(),
                    { formatMessage: h } = (0, S.A)(),
                    _ = (0, Q.w)(),
                    g = u.tracks.isLoading ? 10 : null != (a = null == (i = u.tracks) || null == (t = i.items) ? void 0 : t.length) ? a : 0,
                    x = (0, r.useCallback)(
                        (e) => {
                            var t;
                            null == (t = u.tracks) || t.getTracksByRange(e.startIndex, e.endIndex);
                        },
                        [u.tracks],
                    ),
                    p = (0, r.useMemo)(
                        () => ({
                            Header: () => (0, s.jsx)(U, { tabsState: l, tabElementId: o }),
                            Footer: () => (0, s.jsx)(y.A, { children: (0, s.jsx)(T.w, { className: $().footer }) }),
                        }),
                        [o, l],
                    );
                return u.tracks.isRejected
                    ? (0, s.jsx)(j.SomethingWentWrong, {})
                    : (0, s.jsx)('div', {
                          className: $().root,
                          children: (0, s.jsx)(d.Kp, {
                              value: l.value,
                              name: k.TRACKS,
                              elementId: o,
                              className: $().tabPanel,
                              children: (0, s.jsx)(N.$, {
                                  className: (0, b.$)($().scrollContainer, $().important),
                                  listClassName: (0, b.$)($().content, $().content_tracks),
                                  customComponents: p,
                                  totalCount: g,
                                  itemContentCallback: (e) => {
                                      var t, i, a;
                                      let r = null == (a = u.tracks) || null == (i = a.items) || null == (t = i[e]) ? void 0 : t.data;
                                      if (!r) return (0, s.jsx)(ee.D, { isActive: !0, className: $().shimmerItem, variant: J.X.PLAYLIST });
                                      let n = _(e, {
                                          contextData: { type: Z.K.Various, meta: { id: 'disliked-tracks' }, from: c, playDisliked: !0 },
                                          entitiesData: u.tracks.sonataEntitiesData,
                                          queueParams: { index: e },
                                          loadContextMeta: !1,
                                      });
                                      return r.isTrackNonMusic
                                          ? (0, s.jsx)(G.K, { track: r, playContextParams: n, ignoreDislikedStyles: !0, withPodcastName: !0 })
                                          : (0, s.jsx)(X.K, { track: r, playContextParams: n, ignoreDislikedStyles: !0 });
                                  },
                                  onGetDataByRange: x,
                                  debounceDurationInMs: 300,
                                  handleRef: n,
                                  context: { listAriaLabel: h({ id: 'entity-names.tracks' }) },
                                  isMobileLayout: m,
                                  useWindowScroll: m,
                              }),
                          }),
                      });
            });
            var ei = i(52300),
                es = i(92518),
                ea = i.n(es);
            let er = (0, a.PA)((e) => {
                let { tabsState: t, tabElementId: i } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(U, { tabsState: t, tabElementId: i }),
                        (0, s.jsxs)(d.Kp, {
                            value: t.value,
                            name: t.value,
                            elementId: i,
                            className: ea().root,
                            'data-test-id': c.Xk.collection.COLLECTION_DISLIKES_PAGE_EMPTY_ROOT,
                            children: [
                                (0, s.jsx)(ei.I, {
                                    className: ea().icon,
                                    size: 'l',
                                    variant: 'album',
                                    'data-test-id': c.Xk.collection.COLLECTION_DISLIKES_PAGE_EMPTY_ICON,
                                }),
                                (0, s.jsx)(R.DZ, {
                                    className: ea().title,
                                    variant: 'h3',
                                    size: 'xs',
                                    'data-test-id': c.Xk.collection.COLLECTION_DISLIKES_PAGE_EMPTY_HEAD,
                                    children: (0, s.jsx)(I.A, { id: 'entity-names.list-is-empty' }),
                                }),
                            ],
                        }),
                    ],
                });
            });
            var en = i(93317);
            let el = (0, a.PA)((e) => {
                    let { tabsState: t, tabElementId: i } = e,
                        { isScrolling: a } = (0, r.useContext)(D.B),
                        n = (0, w.W)();
                    return (0, s.jsx)(en.Y, {
                        variant: en.V.COMPOSITE,
                        staticClassName: (0, b.$)(E().staticHeader, E().important),
                        'aria-hidden': !a,
                        stickyClassName: (0, b.$)(E().stickyHeader, E().important),
                        stickyChild: (0, s.jsxs)('div', {
                            className: E().container,
                            'data-test-id': c.Xk.collection.COLLECTION_DISLIKES_PAGE_STICKY_HEADER,
                            children: [
                                n.canBack && (0, s.jsx)(P.L, { withForwardControl: !1, withBackwardControl: n.canBack, shouldFocusOnMount: !1, buttonSize: 'xs' }),
                                (0, s.jsx)(W, { tabsState: t, tabElementId: i, isStickyHeader: !0 }),
                            ],
                        }),
                    });
                }),
                eo = (0, a.PA)(() => {
                    let e = (0, n.useSearchParams)(),
                        {
                            user: t,
                            collection: { dislikes: i },
                            library: a,
                        } = (0, v.g)(),
                        { contentScrollRef: p, setContentScrollRef: b } = (0, h.g)(),
                        S = (0, r.useId)(),
                        j = (0, r.useMemo)(() => {
                            switch (e.get(g.K.TAB)) {
                                case x.TRACKS:
                                    break;
                                case x.ARTISTS:
                                    return k.ARTISTS;
                            }
                            return k.TRACKS;
                        }, [e]),
                        f = (0, d.zb)(j);
                    (t.account.data.uid || (0, n.notFound)(),
                        (0, _.J)(i.isResolved),
                        (0, r.useEffect)(
                            () => () => {
                                i.reset();
                            },
                            [i],
                        ));
                    let T = (0, r.useMemo)(() => {
                        switch (f.value) {
                            case k.TRACKS:
                                if (i.tracks.isEmpty) return (0, s.jsx)(er, { tabsState: f, tabElementId: S });
                                return (0, s.jsx)(et, { forwardRef: b, tabsState: f, tabElementId: S });
                            case k.ARTISTS:
                                if (i.artists.isEmpty) return (0, s.jsx)(er, { tabsState: f, tabElementId: S });
                                return (0, s.jsx)(V, { forwardRef: b, tabsState: f, tabElementId: S });
                        }
                    }, [i.artists.isEmpty, i.tracks.isEmpty, b, S, f]);
                    if (i.isNeededToLoad) {
                        let e = [i.tracks.getData(), i.artists.getData(), a.getData()];
                        (0, r.use)(Promise.allSettled(e));
                    }
                    return (0, s.jsx)(o.a, {
                        pageId: l.AppScreen.CollectionTrackListScreen,
                        pageIdForFrom: m.b.OWN_DISLIKES,
                        children: (0, s.jsx)(u.h, {
                            scrollElement: p,
                            headerThreshold: 148,
                            children: (0, s.jsxs)('div', {
                                className: C().root,
                                'data-test-id': c.Xk.collection.COLLECTION_DISLIKES_PAGE,
                                children: [(0, s.jsx)(el, { tabsState: f, tabElementId: S }), T],
                            }),
                        }),
                    });
                });
        },
        79418: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => g });
            var s = i(88800),
                a = i(65724),
                r = i(61013),
                n = i(53548);
            let l = (e) => {
                    let { style: t, forwardRef: i, context: a, ...r } = e,
                        n = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        l = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: l, 'aria-label': n, style: { ...t }, ref: i, ...r });
                },
                o = (0, n.forwardRef)((e, t) => (0, s.jsx)(l, { forwardRef: t, ...e }));
            var c = i(16434),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: r, withHeader: n, withForceScroll: l, ...o } = e;
                    return (0, s.jsx)('div', {
                        className: (0, a.$)(d().scroller, { [d().scroller_withFooter]: r, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: l }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                m = (0, n.forwardRef)((e, t) => (0, s.jsx)(u, { forwardRef: t, ...e }));
            var h = i(55482),
                _ = i(75151);
            let v = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: a,
                            debounceDurationInMs: r = 100,
                            totalCount: l = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [m, v] = (0, n.useState)(null),
                        g = (0, n.useMemo)(
                            () =>
                                (0, h.A)((e) => {
                                    if ((null == a || a(e), o.length > 0 && v(e), t && i)) {
                                        let s = Math.floor(e.endIndex / t) + 1,
                                            a = Math.floor(e.startIndex / t);
                                        for (let e = a; e < s; e++) i(e);
                                    }
                                }, r),
                            [r, a, t, i, o],
                        );
                    (0, n.useEffect)(() => {
                        o.length > 0 && m && g(m);
                    }, o);
                    let x = (0, n.useMemo)(() => {
                        if (c)
                            return (0, h.A)((e) => {
                                c(e);
                            }, r);
                    }, [c, r]);
                    return (0, s.jsx)(_.sN, { ref: d, rangeChanged: g, totalCount: l, endReached: x, ...u });
                },
                g = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: l,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: h,
                            listClassName: _,
                            overscan: g = 700,
                            pageSize: x = 20,
                            totalCount: k,
                            totalRequests: p,
                            debounceDurationInMs: C,
                            initialItemCount: b,
                            minInitialItemCount: S = 20,
                            handleRef: j,
                            alwaysShowScrollbar: f = !1,
                            testId: T,
                            isMobileLayout: y = !1,
                            shouldTriggerRangeChangedOn: A,
                            ...N
                        } = e,
                        [I, R] = (0, n.useState)(!1),
                        w = (0, n.useMemo)(
                            () =>
                                (0, r.A)((e) => {
                                    R(e);
                                }, 100),
                            [],
                        ),
                        D = (0, n.useMemo)(() => {
                            var e, t;
                            return y
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
                        }, [i, p, y]),
                        P = b ? Math.min(b, S) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, a.$)(d().root, { [d().root_scrolling]: I || f, [d().root_notScrolling]: !I && !f }, t),
                        'data-test-id': T,
                        children: [
                            y && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, s.jsx)(v, {
                                overscan: g,
                                components: D,
                                listClassName: _,
                                itemClassName: u,
                                isScrolling: w,
                                itemContent: h,
                                scrollerRef: j,
                                totalCount: k,
                                pageSize: x,
                                onPageHandler: l,
                                onRangeHandler: c,
                                debounceDurationInMs: C,
                                initialItemCount: P,
                                shouldTriggerRangeChangedOn: A,
                                ...N,
                            }),
                            y && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        85074: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
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
        92518: (e) => {
            e.exports = {
                root: 'CollectionDislikesPageEmpty_root__F9g35',
                icon: 'CollectionDislikesPageEmpty_icon__hbz5L',
                title: 'CollectionDislikesPageEmpty_title__AqUTM',
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
        95228: (e) => {
            e.exports = {
                root: 'CollectionDislikesPageHeader_root__lZ6LT',
                container: 'CollectionDislikesPageHeader_container__ACUbW',
                title: 'CollectionDislikesPageHeader_title__6h9Km',
                tabs: 'CollectionDislikesPageHeader_tabs__gt5AJ',
                tab: 'CollectionDislikesPageHeader_tab__bxN5I',
                tabsShimmer: 'CollectionDislikesPageHeader_tabsShimmer__akKoq',
                tabShimmer: 'CollectionDislikesPageHeader_tabShimmer__0QLuH',
                staticHeader: 'CollectionDislikesPageHeader_staticHeader__75rsF',
                important: 'CollectionDislikesPageHeader_important__5ZM6D',
                stickyHeader: 'CollectionDislikesPageHeader_stickyHeader__cAkxR',
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
        99890: (e, t, i) => {
            'use strict';
            i.d(t, { C8: () => r, UC: () => n, dM: () => l, uV: () => o });
            var s = i(89916),
                a = i(66363);
            let r = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (e) => (e.uid ? 'authorized' : 'no-uid'),
                l = (e) => {
                    if (!(e instanceof s.m5) || !(0, a.Nh)(e.cause)) return 'unexpected';
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
                7191, 9904, 3078, 1191, 8194, 8655, 6582, 918, 1833, 1041, 6263, 6706, 4771, 2662, 6904, 1898, 2058, 3578, 8628, 4378, 9780, 8283, 9332, 5151, 592, 4732,
                9087, 3979, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 6374, 2088, 8979, 818, 7053, 4322, 763, 2670, 7358,
            ],
            () => e((e.s = 49215)),
        ),
            (_N_E = e.O()));
    },
]);
