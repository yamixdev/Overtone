(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6363, 6413],
    {
        6322: (e, t, s) => {
            'use strict';
            s.d(t, { l: () => r });
            var i = s(88800),
                n = s(15077),
                a = s(33719);
            let r = (e) => {
                let { playlist: t, closeToast: s } = e;
                return (0, i.jsx)(a.k, {
                    closeToast: s,
                    entityVariant: n.c.PLAYLIST,
                    entityUrl: t.url,
                    coverUri: t.coverUri,
                    entityTitle: t.title,
                    isPinned: t.isPinned,
                    radius: 's',
                });
            };
        },
        7628: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => h });
            var i = s(88800),
                n = s(88969),
                a = s(58390),
                r = s(17392),
                o = s(29993),
                l = s(96817),
                c = s(29504),
                d = s(99890),
                u = s(4086),
                m = s(41928);
            let h = (e) => {
                let { size: t = 'm', variant: s = 'default', color: h = 'primary', withRipple: p = !0, buttonText: _, isBlock: k, key: g, className: v } = e,
                    y = (0, a.useRouter)(),
                    x = (0, m.N)().get(u.QG),
                    C = (0, o.c)(() => {
                        x.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), y.push(x.authorizationUrl));
                    });
                return (0, i.jsx)(
                    l.$,
                    {
                        onClick: C,
                        className: v,
                        isBlock: k,
                        color: h,
                        variant: s,
                        size: t,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': r.S7.UNAUTHORIZED_BUTTON,
                        children: _ || (0, i.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(n.A, { id: 'authorization.enter-button' }) }),
                    },
                    g,
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
        10829: (e, t, s) => {
            'use strict';
            s.d(t, { K: () => v });
            var i = s(88800),
                n = s(65724),
                a = s(84961),
                r = s(53548),
                o = s(17392),
                l = s(34126),
                c = s(39079),
                d = s(72288),
                u = s(39267),
                m = s(13619),
                h = s(73805),
                p = s(15232),
                _ = s(56712),
                k = s(26243),
                g = s.n(k);
            let v = (0, a.PA)((e) => {
                var t;
                let {
                        track: s,
                        playContextParams: a,
                        className: k,
                        withDNDBlock: v,
                        isDragging: y,
                        draggingClassName: x,
                        ignoreDislikedStyles: C,
                        withSecondaryColor: b,
                        handleRemove: j,
                        withDislike: f,
                        withTrailer: S = !0,
                        beforeTitle: N,
                        removeButtonAriaLabel: T,
                        hideControls: w,
                    } = e,
                    L = (0, c.D)({ playContextParams: a, entityId: s.entityId }),
                    {
                        settings: { isMobile: P },
                    } = (0, d.g)(),
                    A = (0, l.X)(s.trackSource, { isMobile: P }),
                    I = (0, r.useCallback)(
                        (e) =>
                            (0, i.jsx)(u.q, {
                                isAvailable: s.isAvailable,
                                isDisliked: s.isDisliked,
                                coverUri: s.coverUri,
                                title: s.title,
                                className: g().playButtonCell,
                                ignoreDislikedStyles: C,
                                radius: 'xs',
                                ...e,
                            }),
                        [C, s.coverUri, s.isAvailable, s.isDisliked, s.title],
                    );
                return (0, i.jsx)(_.C, {
                    className: (0, n.$)(k, { [g().trackWithDots]: v, [g().important]: v }),
                    track: s,
                    beforeBlock: v ? (0, i.jsx)(m.O, { className: (0, n.$)(g().dots, x), isDragging: y }) : void 0,
                    meta: (0, i.jsx)(p.j, { withArtistLink: A, beforeTitle: N, track: s, ignoreDislikedStyles: C, withSecondaryColor: b }),
                    playButtonCellRender: I,
                    controls: (0, i.jsx)(h.Q, {
                        track: s,
                        className: g().controlsBarCell,
                        ignoreDislikedStyles: C,
                        utmLink: null == (t = a.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: b,
                        handleRemove: j,
                        withDislike: f,
                        withTrailer: S,
                        removeButtonAriaLabel: T,
                        hideControls: w,
                    }),
                    ...L,
                    'data-test-id': o.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        15232: (e, t, s) => {
            'use strict';
            s.d(t, { j: () => S });
            var i = s(88800),
                n = s(65724),
                a = s(84961),
                r = s(53548),
                o = s(2058),
                l = s(58390),
                c = s(17392),
                d = s(79070),
                u = s(17610),
                m = s(29504),
                h = s(13946),
                p = s(55693),
                _ = s(72288),
                k = s(24548),
                g = s(85587),
                v = s(90224),
                y = s(91292),
                x = s(7608),
                C = s(6667),
                b = s(85463),
                j = s(65462),
                f = s.n(j);
            let S = (0, a.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: s,
                        track: a,
                        albumArtists: j,
                        withExplicitMark: S,
                        withSecondaryColor: N,
                        captionSize: T = 'm',
                        explicitSize: w = 'xxxs',
                        withAllArtistsTitle: L,
                        textClassName: P,
                        artistsClassName: A,
                        ignoreDislikedStyles: I,
                        withCustomTooltip: B = !0,
                        hasLineClamp: O = !0,
                        withSavingQueryParams: R,
                        beforeTitle: q,
                        withArtistLink: z,
                        variant: D,
                        withTrackLink: E,
                        afterTitle: U,
                        withContextMenuArtists: K,
                    } = e,
                    { formatMessage: W } = (0, o.A)(),
                    { sendNavigateSearchFeedback: M } = (0, p.z)(),
                    {
                        settings: { isMobile: H },
                        slam: V,
                    } = (0, _.g)(),
                    $ = (0, C.$)({ withCustomTooltip: B }),
                    F = (0, l.useSearchParams)(),
                    Y = (0, x.B)(a, {
                        isMobile: H,
                        isOfflineModeEnabled: V.isOfflineModeEnabled,
                        albumArtists: j,
                        withTrackLink: E,
                        withArtistLink: z,
                        variant: D,
                        withExplicitMark: S,
                        query: R ? Object.fromEntries(F) : void 0,
                    }),
                    {
                        displayTitle: Z,
                        ariaLabel: X,
                        tooltipText: G,
                        titleAttribute: J,
                        versionTitleAttribute: Q,
                        isTooltipEnabled: ee,
                    } = ((e, t, s, i) => {
                        var n, a;
                        let { canEnableCustomTooltip: r, isMobile: o } = s,
                            l = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, i),
                            c = t.shouldShowRemovedTitle ? l : ''.concat(l, ' ').concat(null != (n = t.version) ? n : ''),
                            d = i({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: l,
                            ariaLabel: ''.concat(d, ' ').concat(null != (a = e.version) ? a : ''),
                            tooltipText: c,
                            isTooltipEnabled: r && !o,
                            titleAttribute: !r && (t.shouldShowRemovedTitle || t.link) ? c : void 0,
                            versionTitleAttribute: r ? void 0 : t.version,
                        };
                    })(a, Y, { canEnableCustomTooltip: $, isMobile: H }, W),
                    et = (0, b.O)({ track: a, onNavigate: M, withSavingQueryParams: R, entityType: g.n.TRACK }),
                    es = (0, r.useCallback)(
                        (e) =>
                            (0, i.jsx)(u.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: G,
                                hoverSettings: k.V,
                                children: (0, i.jsx)(m.HL, {
                                    className: (0, n.$)(f().text, f().title),
                                    type: 'entity',
                                    size: T,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: Z,
                                }),
                            }),
                        [T, Z, G, ee],
                    ),
                    ei = (0, d.L)(() =>
                        Y.shouldShowRemovedTitle
                            ? (0, i.jsx)(u.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: G,
                                  hoverSettings: k.V,
                                  children: (0, i.jsx)(m.HL, {
                                      className: (0, n.$)(f().text, f().title),
                                      type: 'entity',
                                      size: T,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: J,
                                      children: Z,
                                  }),
                              })
                            : Y.link
                              ? (0, i.jsx)(y.N, {
                                    onClick: et,
                                    className: f().albumLink,
                                    href: Y.link.href,
                                    'aria-label': X,
                                    title: J,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: es(),
                                })
                              : es({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    en = (0, r.useMemo)(() => +!!O, [O]);
                return (0, i.jsx)('div', {
                    className: (0, n.$)(f().root, { [f().root_disabled]: !a.isAvailable, [f().root_disliked]: a.isDisliked && !I, [f().root_withSecondaryColor]: N }, t),
                    children: (0, i.jsxs)('div', {
                        className: f().metaContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: (0, n.$)(f().titleContainer, { [f().titleContainer_withVersion]: a.version }, s),
                                children: [
                                    (0, i.jsxs)(m.HL, {
                                        className: (0, n.$)(f().text, P),
                                        type: 'entity',
                                        size: T,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            q,
                                            ei,
                                            Y.version &&
                                                (0, i.jsxs)(m.HL, {
                                                    className: (0, n.$)(f().text, f().version),
                                                    type: 'entity',
                                                    size: T,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: Q,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', Y.version],
                                                }),
                                        ],
                                    }),
                                    Y.explicitMark &&
                                        (0, i.jsx)(v.N, {
                                            containerClassName: f().explicitMarkContainer,
                                            getDescriptionTexts: a.getDescriptionTexts,
                                            size: w,
                                            variant: Y.explicitMark,
                                            className: f().explicitMark,
                                            trackId: a.id,
                                        }),
                                    U,
                                ],
                            }),
                            Y.artists.length > 0 &&
                                (0, i.jsx)(h.i, {
                                    className: (0, n.$)(f().text, { [f().artists]: O }, A, P),
                                    withAllArtistsTitle: L,
                                    linkClassName: (0, n.$)(f().text, f().link),
                                    captionClassName: (0, n.$)(f().text, f().artistCaption),
                                    artists: Y.artists,
                                    withLink: Y.withArtistLink,
                                    lineClamp: en,
                                    captionSize: T,
                                    withContextMenu: K,
                                }),
                        ],
                    }),
                });
            });
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
        24460: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => m });
            var i = s(88800),
                n = s(96706),
                a = s(53548),
                r = s(2058),
                o = s(29595),
                l = s(74965),
                c = s(72288),
                d = s(66943),
                u = s(6322);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: s } = (0, l.l)(),
                    { formatMessage: m } = (0, r.A)(),
                    [h, p] = (0, a.useState)(!1);
                return (0, a.useCallback)(async () => {
                    if (!t.isAuthorized) return void s((0, i.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (h) return;
                    let a = { ...(0, n.HO)(e), url: e.url, isPinned: !e.isPinned };
                    p(!0);
                    let r = await e.togglePin();
                    (p(!1),
                        r
                            ? s((0, i.jsx)(u.l, { playlist: a }), { containerId: o.u.INFO })
                            : s((0, i.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [t.isAuthorized, h, e, s, m]);
            };
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
        30832: (e, t, s) => {
            'use strict';
            s.d(t, { T: () => r });
            var i = s(88800),
                n = s(15077),
                a = s(42729);
            let r = (e) => {
                let { playlist: t, closeToast: s } = e;
                return (0, i.jsx)(a.O, {
                    entityVariant: n.c.PLAYLIST,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    closeToast: s,
                    coverUri: t.coverUri,
                });
            };
        },
        32596: (e, t, s) => {
            'use strict';
            s.d(t, { SomethingWentWrong: () => B });
            var i = s(88800),
                n = s(65724),
                a = s(84961),
                r = s(53548),
                o = s(2058),
                l = s(88969);
            s(30282);
            var c = s(96817),
                d = s(52300),
                u = s(29504),
                m = s(97234),
                h = s(59714),
                p = s(43054),
                _ = s(18117),
                k = s(93940),
                g = s(24709);
            let v = (0, g.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, p.s)()) ? void 0 : e.evgenInstance,
                        { hash: s } = (0, _.g)(),
                        { screen: i } = (0, k.j)();
                    return {
                        sendRefreshEvent: (0, r.useCallback)(() => {
                            if (!t || !s || !(null == i ? void 0 : i.pageId)) return;
                            let e = {
                                actionType: m.ActionType.Refresh,
                                userInteractionType: m.UserInteractionType.Tap,
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                hash: s,
                                pageId: i.pageId,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, h.bv)(t, e);
                        }, [t, s, null == i ? void 0 : i.pageId]),
                    };
                }),
                y = (0, g.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let s = null == (t = (0, p.s)()) ? void 0 : t.evgenInstance,
                        { hash: i } = (0, _.g)(),
                        { screen: n } = (0, k.j)();
                    (0, r.useEffect)(() => {
                        if (!s || !i || !(null == n ? void 0 : n.pageId)) return;
                        let t = {
                            entityType: m.EntityTypes.Error,
                            entityId: m.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: i,
                            pageId: n.pageId,
                            pageStyle: m.PageStyles.Fullscreen,
                            pagePlacement: m.PagePlacements.Fullscreen,
                            mainObjectType: m.DomainObjectType.NonApplicable,
                            mainObjectId: m.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, h.z5)(s, t);
                    }, [s, e, i, null == n ? void 0 : n.pageId]);
                });
            var x = s(44230),
                C = s(4370),
                b = s(72288),
                j = s(97956),
                f = s(56248),
                S = s(90688),
                N = s(78940);
            let T = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var w = s(96856),
                L = s.n(w);
            let P = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: s = !0, onBack: a } = e,
                    { slam: r } = (0, b.g)(),
                    { contentRef: o } = (0, x.g)(),
                    d = (0, N.Z)(C.Z.mymusicDownloadsTracks.href);
                return (0, i.jsxs)('div', {
                    className: (0, n.$)(L().root, t),
                    children: [
                        s &&
                            (0, i.jsx)(f.L, {
                                withBackwardFallback: '/',
                                className: (0, n.$)(L().navigation, { [L().navigation_desktop]: !o }),
                                withForwardControl: !1,
                                onBackwardClick: a,
                            }),
                        (0, i.jsxs)('div', {
                            className: (0, n.$)(L().content, { [L().content_shrink]: !s }),
                            children: [
                                (0, i.jsx)(S._V, { className: L().image, src: T.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, i.jsxs)('div', {
                                    className: L().message,
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            className: L().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, i.jsx)(l.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            className: L().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, i.jsx)(l.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                r.hasDownloadedTracks &&
                                    (0, i.jsx)(c.$, {
                                        className: L().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, i.jsx)(u.HL, {
                                            className: L().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, i.jsx)(l.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var A = s(9184),
                I = s.n(A);
            let B = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: s = !0, onBack: a } = e,
                    { formatMessage: m } = (0, o.A)(),
                    h = (0, r.useContext)(b.P),
                    p = null == h ? void 0 : h.experiments.checkExperiment(j.z.WebNextUnstableMusicScreen, 'on'),
                    _ = m(p ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                y(_);
                let { sendRefreshEvent: k } = v(),
                    g = (0, r.useCallback)(() => {
                        (k(), (window.location.href = C.Z.main.href));
                    }, [k]),
                    { contentRef: S } = (0, x.g)();
                return p
                    ? (0, i.jsx)(P, { className: t, withBackwardControl: s, onBack: a })
                    : (0, i.jsxs)('div', {
                          className: (0, n.$)(I().root, t),
                          children: [
                              s &&
                                  (0, i.jsx)(f.L, {
                                      withBackwardFallback: '/',
                                      className: (0, n.$)(I().navigation, { [I().navigation_desktop]: !S }),
                                      withForwardControl: !1,
                                      onBackwardClick: a,
                                  }),
                              (0, i.jsxs)('div', {
                                  className: (0, n.$)(I().content, { [I().content_shrink]: !s }),
                                  children: [
                                      (0, i.jsx)(d.I, { className: I().icon, variant: 'attention', size: 'xxl' }),
                                      (0, i.jsx)(u.DZ, { className: (0, n.$)(I().title, I().important), variant: 'h3', size: 'xs', children: _ }),
                                      (0, i.jsxs)(u.HL, {
                                          className: (0, n.$)(I().text, I().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, i.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, i.jsx)(c.$, {
                                          onClick: g,
                                          className: I().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, i.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, i.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        41911: (e, t, s) => {
            'use strict';
// for PulseSync: BEGIN import the download icon for playlist menu actions

            var pulseSyncPlaylistDownloadIcons = s(52300);
// for PulseSync: END import the download icon for playlist menu actions
            s.d(t, { B: () => Q });
            // for PulseSync WebHost: BEGIN imports for native addon context menu items
            var pulseSyncMenuJsx = s(88800),
                pulseSyncMenuItems = s(19934),
                pulseSyncMenuIcons = s(52300);
            // for PulseSync WebHost: END imports for native addon context menu items
            var i = s(88800),
                n = s(65724),
                a = s(84961),
                r = s(53548),
                o = s(2058),
                l = s(97234),
                c = s(91177),
                d = s(70598),
                u = s(46482),
                m = s(17392),
                h = s(18593),
                p = s(29993),
                _ = s(79070),
                k = s(29832),
                g = s(52300),
                v = s(7555),
                y = s(29504),
                x = s(13946),
                C = s(85902),
                b = s(24460),
                j = s(5407),
                f = s(57934),
                S = s(84384),
                N = s(4795),
                T = s(78940),
                w = s(55693),
                L = s(39079),
                P = s(72288),
                A = s(86298),
                I = s(81877),
                B = s(49738),
                O = s(91292),
                R = s(56862),
                q = s(16704),
                z = s(56446),
                D = s(36207),
                E = s(47513),
                U = s(19934),
                K = s(48749),
                W = s(22505),
                M = s(9618),
                H = s(95210),
                V = s(46936),
                $ = s(97956),
                F = s(93091),
                Y = s(27817),
                Z = s(15425);
            let X = (0, a.PA)((e) => {
                var t;
                let { playlist: s, onOpenChange: n, open: a, ...r } = e,
                    { shouldShowBuySubscriptionModal: c, showBuySubscriptionModal: d } = (0, M.q)(),
                    {
                        experiments: u,
                        settings: { isMobile: h },
                        trailer: _,
                        user: k,
                    } = (0, P.g)(),
                    g = (0, C.K)(s),
                    v = (0, b.A)(s),
                    y = (0, f.F)(),
                    { formatMessage: x } = (0, o.A)(),
                    S = (0, j.P)(),
                    N = u.checkExperiment($.z.WebEditorsFeatures, 'on'),
                    T = (0, K.A)({ entityVariant: V.D.PLAYLIST, urlParams: { id: s.uid, kind: s.kind } });
                (0, H.N)(a);
                let w = (0, p.c)(() => {
                    if (c) return void d();
                    S() || (_.openPlaylistTrailer(s.id), y(l.DomainObjectType.Playlist, s.id));
                });
                // for PulseSync WebHost: BEGIN playlist context and native addon menu item rendering
                let pulseSyncInjectPlaylistMenuItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('playlistContextMenu', items, {
                        eventDetail: {
                            id: String(s.kind ?? s.id),
                            uuid: String(s.uuid ?? ''),
                            url: String(s.url ?? ''),
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
                                        (activate(), n?.(!1));
                                    },
                                    children: label,
                                    'data-pulsesync-addon-menu-item': '',
                                },
                                key,
                            );
                        },
                    }) ?? items;
                // for PulseSync WebHost: END playlist context and native addon menu item rendering
                return (0, i.jsxs)(U.W1, {
                    title: s.title,
                    onOpenChange: n,
                    open: a,
                    offsetOptions: 10,
                    isMobile: h,
                    ariaLabel: x({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: m.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...r,
                    // for PulseSync WebHost: BEGIN inject native addon items into the playlist context menu
                    children: pulseSyncInjectPlaylistMenuItems([
                        N && (0, i.jsx)(W.d, { entityVariant: V.D.PLAYLIST, adminUrl: s.isFavouritePlaylist ? void 0 : T }),
                        !h && (0, i.jsx)(Y.L, { onClick: v, isPinned: s.isPinned }),
                        !s.isFavouritePlaylist && (0, i.jsx)(F.T, { onClick: g, isLiked: s.isLiked, disabled: !k.isAuthorized }),
                        // for PulseSync: BEGIN download-to-file action in the playlist context menu
                        (s.tracksCount ?? 1) > 0 &&
                            (0, i.jsx)(U.Dr, {
                                onClick: s.downloadToFile,
                                icon: (0, i.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        // for PulseSync: END download-to-file action in the playlist context menu
                        (null == (t = s.trailer) ? void 0 : t.isAvailable) && (0, i.jsx)(Z.N, { onClick: w, disabled: !s.isAvailable }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the playlist context menu
                });
            });
            var G = s(17657),
                J = s.n(G);
            let Q = (0, a.PA)((e) => {
                let { className: t, playlist: s, children: a, contentLinesCount: U, customDescription: K, onCoverMouseDown: W } = e,
                    M = (0, c.D)(),
                    {
                        trailer: H,
                        user: V,
                        paywall: { modal: $ },
                    } = (0, P.g)(),
                    { from: F, utmLink: Y } = (0, S.f)({ contextId: s.uuid, contextType: h.K.Playlist }),
                    { formatMessage: Z } = (0, o.A)(),
                    { sendLikeSearchFeedback: G, sendNavigateSearchFeedback: Q, sendPlaySearchFeedback: ee } = (0, w.z)(),
                    [et, es] = (0, r.useState)(!1),
                    [ei, en] = (0, r.useState)(!1),
                    [ea, er] = (0, r.useState)(!1),
                    eo = (0, E.r)(s),
                    el = (0, C.K)(s),
                    ec = (0, b.A)(s),
                    ed = (0, d.S)(),
                    eu = (0, u.g)(),
                    em = (0, T.Z)(s.url),
                    eh = (0, f.F)(),
                    ep = (0, j.P)(),
                    e_ = (0, p.c)((e) => {
                        if ((e.stopPropagation(), ep())) return void e.preventDefault();
                        (H.setUtmLink(Y), H.openPlaylistTrailer(s.id), eh(l.DomainObjectType.Playlist, s.id));
                    }),
                    [ek, eg] = (0, r.useState)(!1),
                    { isPlaying: ev, togglePlay: ey } = (0, L.D)({
                        playContextParams: { contextData: { type: h.K.Playlist, meta: { id: s.id, uuid: s.uuid }, from: F, utmLink: Y }, loadContextMeta: !0 },
                    }),
                    ex = (0, p.c)(() => {
                        (ed({ to: l.AppScreen.PlaylistScreen }), null == Q || Q());
                    }),
                    eC = (0, p.c)((e) => {
                        (ex(), em(e));
                    }),
                    eb = (0, N.N)(),
                    ej = (0, p.c)(() => {
                        if (!ep()) {
                            if (eb) return void $.open();
                            (et || ev || (es(!0), null == ee || ee()), ey(), ev || eu());
                        }
                    }),
                    ef = (0, p.c)(() => {
                        (ei || s.isLiked || (en(!0), null == G || G()), el());
                    }),
                    eS = (0, p.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eN = (0, p.c)((e) => {
                        (er(e), eg(e));
                    }),
                    eT = (0, r.useMemo)(() => {
                        var e;
                        return K
                            ? (0, i.jsx)(y.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: K }, s.getKey('description'))
                            : (null == (e = s.artists) ? void 0 : e.length)
                              ? (0, i.jsx)(
                                    x.i,
                                    { className: J().artists, artists: s.artists, lineClamp: 1, linkClassName: J().artistLink, captionSize: 's' },
                                    s.getKey('description'),
                                )
                              : void 0;
                    }, [K, s]),
                    ew = (0, _.L)(() => {
                        if (!s.isFavouritePlaylist)
                            return (0, i.jsx)(
                                B.c,
                                {
                                    className: (0, n.$)(J().likeButton, J().control),
                                    isLiked: s.isLiked,
                                    onClick: ef,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !V.isAuthorized,
                                },
                                s.getKey('LikeButton'),
                            );
                    }),
                    eL = (0, r.useMemo)(() => {
                        var e;
                        if (null == s || null == (e = s.trailer) ? void 0 : e.isAvailable)
                            return (0, i.jsx)(
                                D.n,
                                {
                                    children: (0, i.jsx)(
                                        z.k,
                                        { className: (0, n.$)(J().trailerButton, J().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: e_ },
                                        s.getKey('TrailerButton'),
                                    ),
                                },
                                s.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [e_, s]),
                    eP = (0, r.useMemo)(
                        () =>
                            (0, i.jsx)(
                                R.O,
                                { onClick: ec, isPinned: s.isPinned, className: (0, n.$)(J().pinButton, J().control), withRipple: !1 },
                                s.getKey('PinButton'),
                            ),
                        [ec, s],
                    ),
                    eA = (0, r.useMemo)(
                        () =>
                            (0, i.jsx)(v.t, {
                                className: J().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': m.Kq.playlist.PLAYLIST_CARD,
                                children: (0, i.jsxs)('div', {
                                    className: J().coverBlock,
                                    onClick: eC,
                                    onMouseDown: W,
                                    children: [
                                        (0, i.jsx)(I.B, {
                                            className: J().image,
                                            src: s.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eo,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, i.jsx)(k.hg, {
                                            isVisible: ea || ek,
                                            className: J().controls,
                                            playControl: (0, i.jsx)(
                                                q.D,
                                                {
                                                    className: (0, n.$)(J().playButton, J().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: ej,
                                                    isPlaying: ev,
                                                    disabled: !s.isAvailable,
                                                },
                                                s.getKey('PlayButton'),
                                            ),
                                            likeControl: ew,
                                            menuControl: (0, i.jsx)(
                                                X,
                                                {
                                                    playlist: s,
                                                    onOpenChange: eN,
                                                    open: ea,
                                                    onClick: eS,
                                                    className: (0, n.$)(J().menuButton, J().control),
                                                    icon: (0, i.jsx)(g.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': m.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                s.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eP,
                                            trailerControl: eL,
                                        }),
                                    ],
                                }),
                            }),
                        [eC, W, s, eo, ea, ek, ej, ev, ew, eN, eS, eP, eL],
                    ),
                    eI = !!s.actualLikesCount && !s.isLikesCountHidden;
                return (0, i.jsxs)(k.MN, {
                    ref: M,
                    'aria-label': eo,
                    className: (0, n.$)(J().root, t),
                    title: (0, i.jsx)(y.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': m.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, i.jsx)(O.N, { className: J().titleLink, href: s.url, tabIndex: -1, onClick: ex, children: s.title }),
                    }),
                    srTitle: (0, i.jsx)(O.N, { className: J().srTitleLink, href: s.url, onClick: ex, children: s.title }),
                    contentLinesCount: U,
                    view: eA,
                    description: eT,
                    'data-test-id': m.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eI &&
                            (0, i.jsx)(A.x, {
                                ariaLabel: Z({ id: 'entity-names.likes-counter' }, { counter: s.actualLikesCount }),
                                likesCount: s.actualLikesCount,
                                isLiked: s.isLiked,
                                handleLikeClick: el,
                            }),
                        a,
                    ],
                });
            });
        },
        42592: (e, t, s) => {
            'use strict';
            s.d(t, { W: () => l });
            var i = s(53548),
                n = s(24709),
                a = s(18117),
                r = s(88966),
                o = s(87138);
            let l = (0, n.n)({ event: 'LandingBlock.Loaded', kind: 'hook', requiredScopes: ['screen', 'block'] }, ({ enabled: e = !0 } = {}) => {
                let t = (0, i.useRef)(!1),
                    s = (0, r.N)(),
                    { hash: n } = (0, a.g)(),
                    l = (0, o.w)(),
                    c = (0, i.useMemo)(() => (l ? s.createBlockReporter(l.snapshot) : null), [s, l]);
                (0, i.useEffect)(() => {
                    e && l && c && !t.current && c.loaded({ objectsCount: l.snapshot.block.objectsCount, viewUuid: l.block.loadedSession.start() }) && (t.current = !0);
                }, [e, n, c, l]);
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
        44616: (e) => {
            e.exports = {
                root: 'CarouselWithColumnsBlock_root__v_qoo',
                controls: 'CarouselWithColumnsBlock_controls__yCSFo',
                item: 'CarouselWithColumnsBlock_item__RBGs4',
                item_columns_one: 'CarouselWithColumnsBlock_item_columns_one__GuhDB',
                item_columns_two: 'CarouselWithColumnsBlock_item_columns_two__46rgZ',
                column: 'CarouselWithColumnsBlock_column__oMRES',
                backwardControl: 'CarouselWithColumnsBlock_backwardControl__b_uKR',
                controlsContainer: 'CarouselWithColumnsBlock_controlsContainer__4_1Ao',
            };
        },
        45224: (e, t, s) => {
            (Promise.resolve().then(s.bind(s, 57328)), Promise.resolve().then(s.bind(s, 63828)));
        },
        47513: (e, t, s) => {
            'use strict';
            s.d(t, { r: () => a });
            var i = s(53548),
                n = s(2058);
            let a = (e) => {
                let { formatMessage: t } = (0, n.A)();
                return (0, i.useMemo)(() => {
                    let s = '';
                    e.isLiked && !e.actualLikesCount
                        ? (s = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (s =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let i = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(i, ' ').concat(s);
                }, [t, e]);
            };
        },
        57328: (e, t, s) => {
            'use strict';
            s.d(t, { WithAuth: () => _ });
            var i = s(88800),
                n = s(84961),
                a = s(58390),
                r = s(65724),
                o = s(88969),
                l = s(29504),
                c = s(7628),
                d = s(42674),
                u = s.n(d);
            let m = (0, n.PA)(() =>
                (0, i.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, i.jsx)(l.DZ, {
                            className: (0, r.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, i.jsx)(o.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, i.jsx)(l.HL, {
                            className: (0, r.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, i.jsx)(o.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, i.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var h = s(4370),
                p = s(72288);
            let _ = (0, n.PA)((e) => {
                let { children: t, withRedirectToMainPage: s } = e,
                    { user: n } = (0, p.g)();
                return n.isAuthorized ? t : (s && (0, a.redirect)(h.Z.main.href), (0, i.jsx)(m, {}));
            });
        },
        59724: (e, t, s) => {
            'use strict';
            s.d(t, { a: () => u });
            var i = s(88800),
                n = s(53548),
                a = s(8383),
                r = s(24709),
                o = s(88966);
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
                    let s =
                        l.get(t) ??
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
                    (l.set(t, s), (this.queue = s));
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
            var d = s(97234);
            let u = (0, r.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let s = (0, o.N)(),
                        r = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === d.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [l, u] = (0, n.useState)(() => {
                            let e = new c(s.createScreenSession().screenViewUuid, s);
                            return { client: s, input: t, isReady: r, scope: r ? s.createScreenScope(t, e) : null, session: e };
                        });
                    if (l.client !== s || l.input.pageId !== t.pageId || l.input.skeletonId !== t.skeletonId) {
                        let n = new c(s.createScreenSession().screenViewUuid, s),
                            o = { client: s, input: t, isReady: r, scope: r ? s.createScreenScope(t, n) : null, session: n };
                        return (u(o), (0, i.jsx)(a.k, { value: o, children: e }));
                    }
                    if (
                        l.isReady !== r ||
                        l.input.mainObjectType !== t.mainObjectType ||
                        l.input.mainObjectId !== t.mainObjectId ||
                        l.input.displayReasonId !== t.displayReasonId ||
                        l.input.pageIdForFrom !== t.pageIdForFrom ||
                        l.input.pagePlacement !== t.pagePlacement ||
                        l.input.pageStyle !== t.pageStyle
                    ) {
                        let n = { ...l, input: t, isReady: r, scope: r ? s.createScreenScope(t, l.session) : null };
                        return (u(n), (0, i.jsx)(a.k, { value: n, children: e }));
                    }
                    return (0, i.jsx)(a.k, { value: l, children: e });
                },
            );
        },
        63828: (e, t, s) => {
            'use strict';
            s.d(t, { CollectionKidsPage: () => E });
            var i = s(88800),
                n = s(65724),
                a = s(84961),
                r = s(53548),
                o = s(2058),
                l = s(88969),
                c = s(97234),
                d = s(59724),
                u = s(17392),
                m = s(18593),
                h = s(54667),
                p = s(79070),
                _ = s(52300),
                k = s(66719),
                g = s(29504),
                v = s(32596),
                y = s(74929),
                x = s(69630),
                C = s(80715),
                b = s(76843),
                j = s(10829),
                f = s(98427),
                S = s(84384),
                N = s(46422),
                T = s(44230),
                w = s(37670),
                L = s(4370),
                P = s(72288),
                A = s(98644),
                I = s(67984),
                B = s(86790),
                O = s(60266),
                R = s(93317),
                q = s(93015),
                z = s(95332),
                D = s.n(z);
            let E = (0, a.PA)(() => {
                let {
                        collection: { kids: e },
                    } = (0, P.g)(),
                    { contentScrollRef: t, setContentScrollRef: s } = (0, T.g)(),
                    a = (0, N.W)(),
                    { from: z } = (0, S.f)({ pageId: f.b.COLLECTION_KIDS }),
                    { formatMessage: E } = (0, o.A)();
                ((0, r.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                ),
                    (0, w.J)(e.isResolved));
                let U = (0, p.L)(() =>
                    e.tracks.loadedItems.slice(0, 5).map((t, s) => {
                        let n = {
                            contextData: { type: m.K.Various, meta: { id: t.entityId }, from: z },
                            queueParams: { index: s },
                            loadContextMeta: !1,
                            entitiesData: e.tracks.sonataEntitiesData,
                        };
                        return t.type === h.S.MUSIC
                            ? (0, i.jsx)(j.K, { track: t, playContextParams: n }, s)
                            : (0, i.jsx)(b.K, { track: t, playContextParams: n, withPodcastName: t.isTrackPodcast }, s);
                    }),
                );
                if (e.isNeededToLoad) {
                    let t = [e.albums.getData({ pageSize: 8 }), e.playlists.getData({ pageSize: 8 }), e.tracks.getData({ pageSize: 5 })];
                    (0, r.use)(Promise.allSettled(t));
                }
                return e.isRejected
                    ? (0, i.jsx)(v.SomethingWentWrong, {})
                    : (0, i.jsx)(d.a, {
                          pageId: c.AppScreen.CollectionKids,
                          pageIdForFrom: f.b.COLLECTION_KIDS,
                          children: (0, i.jsxs)(x.h, {
                              scrollElement: t,
                              outerTitle: E({ id: 'kids.for-kids' }),
                              children: [
                                  (0, i.jsx)(R.Y, {
                                      variant: R.V.TEXT,
                                      withForwardControl: !1,
                                      withBackwardControl: a.canBack,
                                      children: (0, i.jsx)(g.DZ, { variant: 'h2', weight: 'bold', size: 'xl', children: (0, i.jsx)(l.A, { id: 'kids.for-kids' }) }),
                                  }),
                                  (0, i.jsxs)(k.N, {
                                      className: D().root,
                                      containerClassName: D().content,
                                      ref: s,
                                      'data-test-id': u.Xk.collection.COLLECTION_KIDS_PAGE,
                                      children: [
                                          !e.shouldShowContent &&
                                              (0, i.jsxs)('div', {
                                                  className: D().emptyBlock,
                                                  children: [
                                                      (0, i.jsx)(_.I, { className: D().emptyBlockIcon, variant: 'album' }),
                                                      (0, i.jsx)(g.DZ, {
                                                          className: D().emptyBlockTitle,
                                                          variant: 'h3',
                                                          size: 'xs',
                                                          children: (0, i.jsx)(l.A, { id: 'kids.empty-collection-text' }),
                                                      }),
                                                  ],
                                              }),
                                          e.tracks.shouldShowContent &&
                                              (0, i.jsx)(I.$, {
                                                  blockHeaderClassName: (0, n.$)(D().carouselBlockHeader, D().carouselBlock),
                                                  carouselItemClassName: (0, n.$)(D().tracksCarouselItem, D().important),
                                                  blockHeaderTitle: E({ id: 'kids.favourite-tracks-and-episodes' }),
                                                  shimmer: (0, i.jsx)(q.D, { variant: A.X.PLAYLIST, isActive: !0 }),
                                                  maxColumnsCount: I.D.ONE,
                                                  isShimmerVisible: e.tracks.isShimmerVisible,
                                                  isShimmerActive: !0,
                                                  itemsCountPerColumn: 5,
                                                  viewAllActionLink: L.Z.collectionKidsTracks.href,
                                                  children: U,
                                              }),
                                          e.albums.shouldShowContent &&
                                              (0, i.jsx)(y.p, {
                                                  headerClassName: (0, n.$)(D().carouselBlock, D().carouselBlockHeader),
                                                  containerClassName: D().carouselBlock,
                                                  title: E({ id: 'kids.albums-and-podcasts' }),
                                                  albums: e.albums.loadedItems,
                                                  headingVariant: 'h2',
                                                  isShimmerVisible: e.albums.isShimmerVisible,
                                                  isShimmerActive: !0,
                                                  viewAllActionLink: L.Z.collectionKidsAlbums.href,
                                              }),
                                          e.playlists.shouldShowContent &&
                                              (0, i.jsx)(C.E, {
                                                  headerClassName: (0, n.$)(D().carouselBlock, D().carouselBlockHeader),
                                                  containerClassName: D().carouselBlock,
                                                  title: E({ id: 'entity-names.artist-playlist' }),
                                                  playlists: e.playlists.loadedItems,
                                                  headingVariant: 'h2',
                                                  isShimmerVisible: e.playlists.isShimmerVisible,
                                                  isShimmerActive: !0,
                                                  viewAllActionLink: L.Z.collectionKidsPlaylists.href,
                                              }),
                                          (0, i.jsx)(O.A, { children: (0, i.jsx)(B.w, { className: D().footer }) }),
                                      ],
                                  }),
                              ],
                          }),
                      });
            });
        },
        66363: (e, t, s) => {
            'use strict';
            s.d(t, { NS: () => a, Nh: () => n, xW: () => r });
            var i = s(9519);
            let n = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
            class a {
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
                            if (n(s)) {
                                var i, a, r, o, l, c, d, u, m, h, p, _, k, g;
                                let n = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (i = s.request) ? void 0 : i.method) || (null == (a = s.options) ? void 0 : a.method),
                                        url: (null == (r = s.request) ? void 0 : r.url) || (null == (o = s.options) ? void 0 : o.url),
                                        headers: this.getHeaders((null == (l = s.request) ? void 0 : l.headers) || (null == (c = s.options) ? void 0 : c.headers)),
                                        body: (null == (d = s.request) ? void 0 : d.json) || (null == (u = s.options) ? void 0 : u.json),
                                        retries: t,
                                    },
                                };
                                void 0 !== s.response &&
                                    (n.response = {
                                        statusCode: s.response.statusCode,
                                        headers: this.getHeaders(s.response.headers),
                                        time: null == (g = s.response.timings) || null == (k = g.phases) ? void 0 : k.total,
                                    });
                                let v = this.getUrl((null == (m = s.request) ? void 0 : m.url) || (null == (h = s.options) ? void 0 : h.url));
                                this.logger.warn(
                                    '[Resource] Retry request '
                                        .concat((null == (p = s.request) ? void 0 : p.method) || (null == (_ = s.options) ? void 0 : _.method), ' ')
                                        .concat(v.origin, ' ')
                                        .concat(v.pathname)
                                        .concat(v.search),
                                    n,
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
                            if (n(t)) {
                                var s, i, a, r, o, l, c, d, u, m, h, p, _, k;
                                let n = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (s = t.request) ? void 0 : s.method) || (null == (i = t.options) ? void 0 : i.method),
                                        url: (null == (a = t.request) ? void 0 : a.url) || (null == (r = t.options) ? void 0 : r.url),
                                        headers: this.getHeaders((null == (o = t.request) ? void 0 : o.headers) || (null == (l = t.options) ? void 0 : l.headers)),
                                        body: (null == (c = t.request) ? void 0 : c.json) || (null == (d = t.options) ? void 0 : d.json),
                                    },
                                };
                                void 0 !== t.response &&
                                    (n.response = {
                                        statusCode: t.response.statusCode || t.response.status,
                                        headers: this.getHeaders(t.response.headers),
                                        time: null == (k = t.response.timings) || null == (_ = k.phases) ? void 0 : _.total,
                                    });
                                let g = this.getUrl((null == (u = t.request) ? void 0 : u.url) || (null == (m = t.options) ? void 0 : m.url));
                                this.logger.error(
                                    '[Resource] Request failed '
                                        .concat((null == (h = t.request) ? void 0 : h.method) || (null == (p = t.options) ? void 0 : p.method), ' ')
                                        .concat(g.origin, ' ')
                                        .concat(g.pathname)
                                        .concat(g.search, ', reason: ')
                                        .concat(e.name),
                                    n,
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
            let r = [
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
        67984: (e, t, s) => {
            'use strict';
            s.d(t, { $: () => v, D: () => k });
            var i = s(88800),
                n = s(65724),
                a = s(35802),
                r = s(53548),
                o = s(35412),
                l = s(97234),
                c = s(90852),
                d = s(17392),
                u = s(53323),
                m = s(18486),
                h = s(31764),
                p = s(44616),
                _ = s.n(p),
                k = (function (e) {
                    return ((e.ONE = 'one'), (e.TWO = 'two'), e);
                })({});
            let g = (e) => {
                    let {
                            className: t,
                            forwardRef: s,
                            isShimmerVisible: p,
                            isColumnsShimmerVisible: k,
                            isHeaderWithoutControls: g,
                            maxColumnsCount: v,
                            carouselItemClassName: y,
                            carouselClassName: x,
                            children: C,
                            itemsCountPerColumn: b,
                            shimmer: j,
                            viewAllActionLink: f,
                            blockHeaderClassName: S,
                            additionalControl: N,
                            blockHeaderDescription: T,
                            blockHeaderTitle: w,
                            blockHeaderCoverUrl: L,
                            withBlockHeaderDescription: P,
                            withBlockHeaderCover: A,
                            blockHeaderHeadingVariant: I,
                            isShimmerActive: B,
                            shouldResetCarouselScroll: O,
                            beforeCarousel: R,
                            ...q
                        } = e,
                        [z, D] = (0, r.useState)(),
                        E = (0, r.useId)(),
                        U = (0, r.useRef)(null),
                        K = 'two' === v,
                        W = 'string' == typeof f ? String(f) : '',
                        M = null != k ? k : p,
                        H = (0, r.useCallback)(
                            (e) => {
                                let t = (0, a.A)(e, b).slice(0, K ? 2 : 1);
                                return (
                                    1 === t.length ? D('one') : D('two'),
                                    t.map((e, t) => (0, i.jsx)('div', { className: _().column, 'data-test-id': d.S7.CAROUSEL_WITH_COLUMNS_BLOCK_COLUMN, children: e }, t))
                                );
                            },
                            [b, K],
                        ),
                        V = (0, r.useMemo)(() => {
                            if (M) return H(Array.from({ length: 2 * b }, (e, t) => (0, r.cloneElement)(j, { key: t })));
                            return H(C);
                        }, [C, H, M, b, j]),
                        $ = (0, r.useMemo)(
                            () =>
                                g
                                    ? null
                                    : (0, i.jsxs)('div', {
                                          className: _().controlsContainer,
                                          children: [N, (0, i.jsx)(h.X, { carouselRef: U, className: _().controls, backwardControlClassName: _().backwardControl })],
                                      }),
                            [N, g],
                        );
                    return (
                        (0, r.useEffect)(() => {
                            U.current && O && U.current.scrollTo(0, 0);
                        }, [O]),
                        (0, i.jsxs)('section', {
                            ref: s,
                            className: (0, n.$)(_().root, t),
                            ...(0, o.OZ)(q),
                            children: [
                                (0, i.jsx)(c.B, {
                                    objectType: l.DomainObjectType.Shortcut,
                                    objectId: W,
                                    objectPosX: 1,
                                    objectPosY: 1,
                                    children: (0, i.jsx)(m.T, {
                                        coverUrl: L,
                                        title: w,
                                        description: T,
                                        className: S,
                                        labeledForId: E,
                                        viewAllActionLink: f,
                                        controls: $,
                                        isShimmerVisible: p,
                                        isShimmerActive: B,
                                        withDescription: P,
                                        withCover: A,
                                        headingVariant: I,
                                    }),
                                }),
                                R,
                                (0, i.jsx)(u.F, {
                                    itemClassName: (0, n.$)(_().item, _()['item_columns_'.concat(M && K ? 'two' : z)], y),
                                    className: x,
                                    ref: U,
                                    'aria-labelledby': E,
                                    'data-test-id': d.S7.CAROUSEL_WITH_COLUMNS_BLOCK_CAROUSEL,
                                    children: V,
                                }),
                            ],
                        })
                    );
                },
                v = (0, r.forwardRef)((e, t) => (0, i.jsx)(g, { forwardRef: t, ...e }));
        },
        69629: (e) => {
            var t = Object.prototype.hasOwnProperty;
            function s(e) {
                return '[Throws: ' + (e ? e.message : '?') + ']';
            }
            function i(e) {
                var i = [];
                return (function e(n) {
                    if (null === n || 'object' != typeof n) return n;
                    if (-1 !== i.indexOf(n)) return '[Circular]';
                    if ((i.push(n), 'function' == typeof n.toJSON))
                        try {
                            var a = e(n.toJSON());
                            return (i.pop(), a);
                        } catch (e) {
                            return s(e);
                        }
                    if (Array.isArray(n)) {
                        var r = n.map(e);
                        return (i.pop(), r);
                    }
                    var o = Object.keys(n).reduce(function (i, a) {
                        return (
                            (i[a] = e(
                                (function (e, i) {
                                    if (t.call(e, i))
                                        try {
                                            return e[i];
                                        } catch (e) {
                                            return s(e);
                                        }
                                    return e[i];
                                })(n, a),
                            )),
                            i
                        );
                    }, {});
                    return (i.pop(), o);
                })(e);
            }
            ((e.exports = function (e, t, s) {
                return JSON.stringify(i(e), t, s);
            }),
                (e.exports.ensureProperties = i));
        },
        74929: (e, t, s) => {
            'use strict';
            s.d(t, { p: () => u });
            var i = s(88800),
                n = s(53548),
                a = s(97234),
                r = s(42592),
                o = s(90852),
                l = s(47934),
                c = s(10079);
            let d = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: s,
                        isShimmerActive: n,
                        title: d,
                        description: u,
                        albums: m,
                        className: h,
                        containerClassName: p,
                        headerClassName: _,
                        viewAllActionLink: k,
                        headingRef: g,
                        headingVariant: v,
                        shouldSendAnalyticsOnLoaded: y,
                        ...x
                    } = e;
                    return (
                        (0, r.W)({ enabled: !!y && !s }),
                        (0, i.jsx)(l.O, {
                            isShimmerVisible: s,
                            isShimmerActive: n,
                            className: h,
                            headerClassName: _,
                            containerClassName: p,
                            ref: t,
                            title: d,
                            description: u,
                            viewAllActionLink: k,
                            headingRef: g,
                            headingVariant: v,
                            ...x,
                            children:
                                null == m
                                    ? void 0
                                    : m.map((e, t) =>
                                          (0, i.jsx)(
                                              o.B,
                                              {
                                                  objectType: a.DomainObjectType.Album,
                                                  objectId: String(e.id),
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  children: (0, i.jsx)(c.a, {
                                                      album: e,
                                                      contentLinesCount: 3,
                                                      withAddition: !e.isNonMusic,
                                                      withLikesCount: e.isNonMusic,
                                                  }),
                                              },
                                              e.id,
                                          ),
                                      ),
                        })
                    );
                },
                u = (0, n.forwardRef)((e, t) => (0, i.jsx)(d, { forwardRef: t, ...e }));
        },
        80715: (e, t, s) => {
            'use strict';
            s.d(t, { E: () => u });
            var i = s(88800),
                n = s(53548),
                a = s(97234),
                r = s(42592),
                o = s(90852),
                l = s(47934),
                c = s(41911);
            let d = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: s,
                        isShimmerActive: n,
                        title: d,
                        description: u,
                        playlists: m,
                        containerClassName: h,
                        className: p,
                        headerClassName: _,
                        viewAllActionLink: k,
                        headingVariant: g,
                        shouldSendAnalyticsOnLoaded: v,
                        ...y
                    } = e;
                    return (
                        (0, r.W)({ enabled: !!v && !s }),
                        (0, i.jsx)(l.O, {
                            isShimmerVisible: s,
                            isShimmerActive: n,
                            className: p,
                            headerClassName: _,
                            containerClassName: h,
                            ref: t,
                            title: d,
                            description: u,
                            viewAllActionLink: k,
                            headingVariant: g,
                            ...y,
                            children:
                                null == m
                                    ? void 0
                                    : m.map((e, t) =>
                                          (0, i.jsx)(
                                              o.B,
                                              {
                                                  objectType: a.DomainObjectType.Playlist,
                                                  objectId: e.id,
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  children: (0, i.jsx)(c.B, { playlist: e, contentLinesCount: 3 }),
                                              },
                                              e.key,
                                          ),
                                      ),
                        })
                    );
                },
                u = (0, n.forwardRef)((e, t) => (0, i.jsx)(d, { forwardRef: t, ...e }));
        },
        85902: (e, t, s) => {
            'use strict';
            s.d(t, { K: () => h });
            var i = s(88800),
                n = s(96706),
                a = s(53548),
                r = s(2058),
                o = s(79390),
                l = s(29595),
                c = s(74965),
                d = s(72288),
                u = s(66943),
                m = s(30832);
            let h = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: s } = (0, c.l)(),
                    [h, p] = (0, a.useState)(!1),
                    { formatMessage: _ } = (0, r.A)();
                return (0, a.useCallback)(async () => {
                    if (!t.isAuthorized) return void s((0, i.jsx)(u.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (h) return;
                    let a = { ...(0, n.HO)(e), url: e.url, isLiked: !e.isLiked };
                    p(!0);
                    let r = await e.toggleLike();
                    (p(!1),
                        r === o.f.OK
                            ? s((0, i.jsx)(m.T, { playlist: a }), { containerId: l.u.INFO })
                            : s((0, i.jsx)(u.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [t.isAuthorized, h, e, _, s]);
            };
        },
        90852: (e, t, s) => {
            'use strict';
            s.d(t, { B: () => c });
            var i = s(88800),
                n = s(53548),
                a = s(24709),
                r = s(66368),
                o = s(37556),
                l = s(88966);
            let c = (0, a.B)(
                { kind: 'provider', requiredProps: ['objectType', 'objectId', 'objectPosX', 'objectPosY'], pendingProps: ['objectId'], scope: 'object' },
                ({ children: e, objectId: t, objectPosX: s, objectPosY: a, objectType: c }) => {
                    let d = (0, l.N)(),
                        u = (0, n.useContext)(r.p)?.loadedSession,
                        m = [c, t, s, a].join(':'),
                        [h, p] = (0, n.useState)(() => ({ client: d, identity: m, blockSession: u, viewSession: d.createBlockViewSession() }));
                    (h.client !== d || h.identity !== m || h.blockSession !== u) &&
                        p({ client: d, identity: m, blockSession: u, viewSession: d.createBlockViewSession() });
                    let _ = (0, n.useMemo)(
                        () => ({ activeViewSession: null, scope: { objectId: t, objectPosX: s, objectPosY: a, objectType: c }, viewSession: h.viewSession }),
                        [t, s, a, c, h.viewSession],
                    );
                    return (0, i.jsx)(o.l, { value: _, children: e });
                },
            );
        },
        95332: (e) => {
            e.exports = {
                root: 'CollectionKidsPage_root__nfE01',
                content: 'CollectionKidsPage_content__hVB40',
                carouselBlocks: 'CollectionKidsPage_carouselBlocks__q7f0T',
                tracksCarouselItem: 'CollectionKidsPage_tracksCarouselItem__8WvD0',
                important: 'CollectionKidsPage_important__GkZJX',
                carouselBlock: 'CollectionKidsPage_carouselBlock___6XRJ',
                carouselBlockHeader: 'CollectionKidsPage_carouselBlockHeader__fqs_v',
                emptyBlock: 'CollectionKidsPage_emptyBlock__dc50I',
                emptyBlockIcon: 'CollectionKidsPage_emptyBlockIcon__eVAMs',
                emptyBlockTitle: 'CollectionKidsPage_emptyBlockTitle__TYUpU',
                footer: 'CollectionKidsPage_footer__wEREs',
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
        99890: (e, t, s) => {
            'use strict';
            s.d(t, { C8: () => a, UC: () => r, dM: () => o, uV: () => l });
            var i = s(89916),
                n = s(66363);
            let a = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                r = (e) => (e.uid ? 'authorized' : 'no-uid'),
                o = (e) => {
                    if (!(e instanceof i.m5) || !(0, n.Nh)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, n.Nh)(e.cause)) return;
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
                7191, 9904, 3078, 1833, 8194, 1191, 918, 1041, 8655, 1061, 6706, 4771, 2662, 6904, 1898, 2058, 3578, 8628, 4378, 9780, 8283, 9332, 2837, 8229, 4732, 9087,
                3979, 6719, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 6374, 2088, 8979, 818, 7053, 3300, 763, 2670, 7358,
            ],
            () => e((e.s = 45224)),
        ),
            (_N_E = e.O()));
    },
]);
