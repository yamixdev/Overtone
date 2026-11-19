(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3737],
    {
        4683: (e) => {
            e.exports = {
                playButtonCell: 'TrackChart_playButtonCell__cvY7u',
                controlsBarCell: 'TrackChart_controlsBarCell__Xd5pn',
                chartCell: 'TrackChart_chartCell__33_al',
            };
        },
        4795: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => r });
            var i = a(72288),
                s = a(97956);
            let r = () => {
                var e, t;
                let {
                    user: a,
                    settings: { browserInfo: r },
                    experiments: l,
                } = (0, i.g)();
                return (
                    !(null == r ? void 0 : r.isTouch) &&
                    a.isAuthorized &&
                    !a.hasPlus &&
                    (null == (t = l.getExperiment(s.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        6668: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => r });
            var i = a(53548),
                s = a(29993);
            let r = () => {
                let e = (0, i.useRef)(new Map());
                return (
                    (0, i.useLayoutEffect)(
                        () => (
                            e.current.size > 0 && e.current.clear(),
                            () => {
                                e.current.clear();
                            }
                        ),
                        [],
                    ),
                    (0, s.c)((t, a) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, a), a)))
                );
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
            a.d(t, { j: () => A });
            var i = a(88800),
                s = a(65724),
                r = a(84961),
                l = a(53548),
                o = a(2058),
                n = a(58390),
                c = a(17392),
                d = a(79070),
                m = a(17610),
                u = a(29504),
                _ = a(13946),
                C = a(55693),
                h = a(72288),
                x = a(24548),
                v = a(85587),
                k = a(90224),
                p = a(91292),
                b = a(7608),
                g = a(6667),
                T = a(85463),
                N = a(65462),
                j = a.n(N);
            let A = (0, r.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: a,
                        track: r,
                        albumArtists: N,
                        withExplicitMark: A,
                        withSecondaryColor: f,
                        captionSize: w = 'm',
                        explicitSize: y = 'xxxs',
                        withAllArtistsTitle: S,
                        textClassName: I,
                        artistsClassName: P,
                        ignoreDislikedStyles: M,
                        withCustomTooltip: R = !0,
                        hasLineClamp: B = !0,
                        withSavingQueryParams: L,
                        beforeTitle: D,
                        withArtistLink: O,
                        variant: E,
                        withTrackLink: z,
                        afterTitle: $,
                        withContextMenuArtists: W,
                    } = e,
                    { formatMessage: K } = (0, o.A)(),
                    { sendNavigateSearchFeedback: Y } = (0, C.z)(),
                    {
                        settings: { isMobile: q },
                        slam: H,
                    } = (0, h.g)(),
                    U = (0, g.$)({ withCustomTooltip: R }),
                    F = (0, n.useSearchParams)(),
                    V = (0, b.B)(r, {
                        isMobile: q,
                        isOfflineModeEnabled: H.isOfflineModeEnabled,
                        albumArtists: N,
                        withTrackLink: z,
                        withArtistLink: O,
                        variant: E,
                        withExplicitMark: A,
                        query: L ? Object.fromEntries(F) : void 0,
                    }),
                    {
                        displayTitle: G,
                        ariaLabel: X,
                        tooltipText: Q,
                        titleAttribute: Z,
                        versionTitleAttribute: J,
                        isTooltipEnabled: ee,
                    } = ((e, t, a, i) => {
                        var s, r;
                        let { canEnableCustomTooltip: l, isMobile: o } = a,
                            n = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, i),
                            c = t.shouldShowRemovedTitle ? n : ''.concat(n, ' ').concat(null != (s = t.version) ? s : ''),
                            d = i({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: n,
                            ariaLabel: ''.concat(d, ' ').concat(null != (r = e.version) ? r : ''),
                            tooltipText: c,
                            isTooltipEnabled: l && !o,
                            titleAttribute: !l && (t.shouldShowRemovedTitle || t.link) ? c : void 0,
                            versionTitleAttribute: l ? void 0 : t.version,
                        };
                    })(r, V, { canEnableCustomTooltip: U, isMobile: q }, K),
                    et = (0, T.O)({ track: r, onNavigate: Y, withSavingQueryParams: L, entityType: v.n.TRACK }),
                    ea = (0, l.useCallback)(
                        (e) =>
                            (0, i.jsx)(m.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: Q,
                                hoverSettings: x.V,
                                children: (0, i.jsx)(u.HL, {
                                    className: (0, s.$)(j().text, j().title),
                                    type: 'entity',
                                    size: w,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: G,
                                }),
                            }),
                        [w, G, Q, ee],
                    ),
                    ei = (0, d.L)(() =>
                        V.shouldShowRemovedTitle
                            ? (0, i.jsx)(m.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: Q,
                                  hoverSettings: x.V,
                                  children: (0, i.jsx)(u.HL, {
                                      className: (0, s.$)(j().text, j().title),
                                      type: 'entity',
                                      size: w,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: Z,
                                      children: G,
                                  }),
                              })
                            : V.link
                              ? (0, i.jsx)(p.N, {
                                    onClick: et,
                                    className: j().albumLink,
                                    href: V.link.href,
                                    'aria-label': X,
                                    title: Z,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: ea(),
                                })
                              : ea({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    es = (0, l.useMemo)(() => +!!B, [B]);
                return (0, i.jsx)('div', {
                    className: (0, s.$)(j().root, { [j().root_disabled]: !r.isAvailable, [j().root_disliked]: r.isDisliked && !M, [j().root_withSecondaryColor]: f }, t),
                    children: (0, i.jsxs)('div', {
                        className: j().metaContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: (0, s.$)(j().titleContainer, { [j().titleContainer_withVersion]: r.version }, a),
                                children: [
                                    (0, i.jsxs)(u.HL, {
                                        className: (0, s.$)(j().text, I),
                                        type: 'entity',
                                        size: w,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            D,
                                            ei,
                                            V.version &&
                                                (0, i.jsxs)(u.HL, {
                                                    className: (0, s.$)(j().text, j().version),
                                                    type: 'entity',
                                                    size: w,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: J,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', V.version],
                                                }),
                                        ],
                                    }),
                                    V.explicitMark &&
                                        (0, i.jsx)(k.N, {
                                            containerClassName: j().explicitMarkContainer,
                                            getDescriptionTexts: r.getDescriptionTexts,
                                            size: y,
                                            variant: V.explicitMark,
                                            className: j().explicitMark,
                                            trackId: r.id,
                                        }),
                                    $,
                                ],
                            }),
                            V.artists.length > 0 &&
                                (0, i.jsx)(_.i, {
                                    className: (0, s.$)(j().text, { [j().artists]: B }, P, I),
                                    withAllArtistsTitle: S,
                                    linkClassName: (0, s.$)(j().text, j().link),
                                    captionClassName: (0, s.$)(j().text, j().artistCaption),
                                    artists: V.artists,
                                    withLink: V.withArtistLink,
                                    lineClamp: es,
                                    captionSize: w,
                                    withContextMenu: W,
                                }),
                        ],
                    }),
                });
            });
        },
        21064: (e, t, a) => {
            'use strict';
            a.d(t, { ChartTracksPage: () => B });
            var i = a(88800),
                s = a(65724),
                r = a(84961),
                l = a(53548),
                o = a(2058),
                n = a(97234),
                c = a(59724),
                d = a(17392),
                m = a(18593),
                u = a(19994),
                _ = a(29504),
                C = a(32596),
                h = a(69630),
                x = a(52309),
                v = a(98427),
                k = a(84384),
                p = a(46422),
                b = a(44230),
                g = a(37670),
                T = a(6668),
                N = a(34961),
                j = a(53892),
                A = a(72288),
                f = a(86790),
                w = a(60266),
                y = a(93317),
                S = a(79418),
                I = a(76541),
                P = a(21341),
                M = a(26658),
                R = a.n(M);
            let B = (0, r.PA)(() => {
                let { formatMessage: e } = (0, o.A)(),
                    { tracksSubPage: t } = (0, N.s)(j.n.CHART),
                    {
                        settings: { isMobile: a },
                    } = (0, A.g)(),
                    r = (0, p.W)(),
                    { contentScrollRef: M, setContentScrollRef: B } = (0, b.g)(),
                    L = (0, T.w)(),
                    { from: D } = (0, k.f)({ pageId: v.b.CHART });
                (0, g.J)(t.isResolved);
                let O = t.isLoading || !t.playlistMeta,
                    E = O ? I.H : t.items.length,
                    z = (0, l.useCallback)(
                        (e) => {
                            let a = t.items[e],
                                s = t.playlistMeta;
                            return a && s && !O
                                ? (0, i.jsx)(x.Q, {
                                      track: a,
                                      playContextParams: L(e, {
                                          contextData: { type: m.K.Playlist, meta: { id: ''.concat(s.uid, ':').concat(s.kind) }, from: D },
                                          queueParams: { index: e, entityId: a.id },
                                          loadContextMeta: !0,
                                      }),
                                  })
                                : (0, i.jsx)(P.r, { isActive: !0, className: R().shimmerItem });
                        },
                        [D, L, O, t.items, t.playlistMeta],
                    ),
                    $ = (0, l.useMemo)(() => ({ Footer: () => (0, i.jsx)(w.A, { children: (0, i.jsx)(f.w, { className: R().footer }) }) }), []),
                    W = (0, l.useMemo)(
                        () =>
                            t.title
                                ? (0, i.jsx)(_.DZ, { id: 'collection-artists-header', variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: t.title })
                                : (0, i.jsx)(u.W, { className: R().shimmerTitle, radius: 'l' }),
                        [t.title],
                    );
                return (t.isNeededToLoad && (0, l.use)(t.getTracks()), t.isRejected)
                    ? (0, i.jsx)(C.SomethingWentWrong, {})
                    : (0, i.jsx)(c.a, {
                          pageId: n.AppScreen.PlaylistListScreen,
                          pageIdForFrom: v.b.CHART,
                          children: (0, i.jsx)(h.h, {
                              scrollElement: M,
                              ...(t.title && { outerTitle: t.title }),
                              children: (0, i.jsxs)('div', {
                                  className: R().root,
                                  'data-test-id': d.Xk.chart.CHART_PAGE,
                                  children: [
                                      (0, i.jsx)(y.Y, { variant: y.V.TEXT, withForwardControl: !1, withBackwardControl: r.canBack, children: W }),
                                      (0, i.jsx)(S.$, {
                                          className: (0, s.$)(R().scrollContainer, R().important),
                                          listClassName: R().content,
                                          customComponents: $,
                                          totalCount: E,
                                          initialItemCount: E,
                                          itemContentCallback: z,
                                          debounceDurationInMs: 300,
                                          handleRef: B,
                                          context: { listAriaLabel: e({ id: 'entity-names.chart-tracks-list' }) },
                                          isMobileLayout: a,
                                          useWindowScroll: a,
                                      }),
                                  ],
                              }),
                          }),
                      });
            });
        },
        21341: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => C });
            var i = a(88800),
                s = a(65724),
                r = a(52300),
                l = a(19994),
                o = a(3099),
                n = a.n(o);
            let c = (e) => {
                let { isActive: t, className: a } = e;
                return (0, i.jsxs)('div', {
                    className: (0, s.$)(n().root, a),
                    children: [
                        (0, i.jsx)(l.W, { isActive: t, className: (0, s.$)(n().position, n().positionShimmer), radius: 'l' }),
                        (0, i.jsx)(r.I, { 'aria-hidden': !0, variant: 'chartSame', size: 'xxs', className: (0, s.$)(n().progress, n().progress_same) }),
                    ],
                });
            };
            var d = a(98644),
                m = a(93015),
                u = a(26658),
                _ = a.n(u);
            let C = (e) => {
                let { isActive: t, className: a } = e;
                return (0, i.jsxs)('div', {
                    className: (0, s.$)(_().chartTrackShimmer, a),
                    children: [
                        (0, i.jsx)(c, { isActive: t, className: _().chartCell }),
                        (0, i.jsx)(m.D, { isActive: t, className: _().trackShimmer, variant: d.X.PLAYLIST }),
                    ],
                });
            };
        },
        26658: (e) => {
            e.exports = {
                root: 'ChartTracksPage_root__QMbqY',
                scrollContainer: 'ChartTracksPage_scrollContainer__Pxe8S',
                important: 'ChartTracksPage_important__Lddyf',
                content: 'ChartTracksPage_content__yyIAN',
                footer: 'ChartTracksPage_footer__6sNBk',
                shimmerItem: 'ChartTracksPage_shimmerItem__YwM0h',
                chartTrackShimmer: 'ChartTracksPage_chartTrackShimmer__9ldEs',
                chartCell: 'ChartTracksPage_chartCell__Ko_uE',
                trackShimmer: 'ChartTracksPage_trackShimmer__9uNZ2',
                shimmerTitle: 'ChartTracksPage_shimmerTitle__TkGmf',
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
        30049: (e, t, a) => {
            'use strict';
            a.d(t, { ChartTracksPageSuspenseLoader: () => b });
            var i = a(88800),
                s = a(65724),
                r = a(53548),
                l = a(2058),
                o = a(19994),
                n = a(69630),
                c = a(46422),
                d = a(44230),
                m = a(72288),
                u = a(86790),
                _ = a(60266),
                C = a(93317),
                h = a(79418),
                x = a(76541),
                v = a(21341),
                k = a(26658),
                p = a.n(k);
            let b = () => {
                let { formatMessage: e } = (0, l.A)(),
                    {
                        settings: { isMobile: t },
                    } = (0, m.g)(),
                    a = (0, c.W)(),
                    { contentScrollRef: k, setContentScrollRef: b } = (0, d.g)(),
                    g = (0, r.useCallback)(() => (0, i.jsx)(v.r, { isActive: !0, className: p().shimmerItem }), []),
                    T = (0, r.useMemo)(() => ({ Footer: () => (0, i.jsx)(_.A, { children: (0, i.jsx)(u.w, { className: p().footer }) }) }), []);
                return (0, i.jsx)(n.h, {
                    scrollElement: k,
                    children: (0, i.jsxs)('div', {
                        className: p().root,
                        children: [
                            (0, i.jsx)(C.Y, {
                                variant: C.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: a.canBack,
                                children: (0, i.jsx)(o.W, { className: p().shimmerTitle, radius: 'l' }),
                            }),
                            (0, i.jsx)(h.$, {
                                className: (0, s.$)(p().scrollContainer, p().important),
                                listClassName: p().content,
                                customComponents: T,
                                totalCount: x.H,
                                initialItemCount: x.H,
                                itemContentCallback: g,
                                debounceDurationInMs: 300,
                                handleRef: b,
                                context: { listAriaLabel: e({ id: 'entity-names.chart-tracks-list' }) },
                                isMobileLayout: t,
                                useWindowScroll: t,
                            }),
                        ],
                    }),
                });
            };
        },
        37670: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => r });
            var i = a(53548);
            a(30282);
            var s = a(58390);
            let r = (e) => {
                let t = (0, s.usePathname)(),
                    [a, r] = (0, i.useState)(!1);
                ((0, i.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, i.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !a && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), r(!0));
                    }, [e, a, t]));
            };
        },
        41867: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        47580: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => i });
            let i = (e) => e.map((e) => e.name).join(', ');
        },
        52309: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => x });
            var i = a(88800),
                s = a(84961),
                r = a(53548),
                l = a(17392),
                o = a(43443),
                n = a(39079),
                c = a(72288),
                d = a(39267),
                m = a(73805),
                u = a(15232),
                _ = a(56712),
                C = a(4683),
                h = a.n(C);
            let x = (0, s.PA)((e) => {
                var t, a;
                let { track: s, playContextParams: C } = e,
                    x = (0, n.D)({ playContextParams: C, entityId: s.entityId }),
                    {
                        settings: { isMobile: v },
                    } = (0, c.g)(),
                    k = (0, r.useCallback)(
                        (e) =>
                            (0, i.jsx)(d.q, {
                                isAvailable: s.isAvailable,
                                isDisliked: s.isDisliked,
                                coverUri: s.coverUri,
                                title: s.title,
                                className: h().playButtonCell,
                                radius: 'xs',
                                ...e,
                            }),
                        [s],
                    );
                return (0, i.jsx)(_.C, {
                    track: s,
                    meta: (0, i.jsx)(u.j, { withArtistLink: !v, track: s }),
                    beforeBlock: (0, i.jsx)(o.t, {
                        withIcon: !0,
                        className: h().chartCell,
                        progress: null == (t = s.chart) ? void 0 : t.progress,
                        position: null == (a = s.chart) ? void 0 : a.position,
                        isDisliked: s.isDisliked,
                        isDisabled: !s.isAvailable,
                    }),
                    playButtonCellRender: k,
                    controls: (0, i.jsx)(m.Q, { track: s, className: h().controlsBarCell }),
                    ...x,
                    'data-test-id': l.Kq.track.TRACK_CHART,
                });
            });
        },
        56446: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => m });
            var i = a(88800),
                s = a(53548),
                r = a(2058),
                l = a(17392),
                o = a(96817),
                n = a(52300),
                c = a(39318);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: a,
                            size: s,
                            radius: d,
                            iconSize: m,
                            disabled: u,
                            onClick: _,
                            iconClassName: C,
                            className: h,
                            forwardRef: x,
                            style: v,
                            children: k,
                        } = e,
                        { formatMessage: p } = (0, r.A)(),
                        b = p({ id: 'trailer.button-aria-label' });
                    return (0, i.jsx)(o.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: s,
                        variant: t,
                        withRipple: a,
                        flexIcon: !0,
                        'aria-label': b,
                        onClick: _,
                        ref: x,
                        icon: (0, i.jsx)(n.I, { variant: 'trailer', size: m, className: C }),
                        disabled: u,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': l.S7.TRAILER_BUTTON,
                        children: k,
                    });
                },
                m = (0, s.forwardRef)((e, t) => (0, i.jsx)(d, { forwardRef: t, ...e }));
        },
        56712: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => N });
            var i = a(88800),
                s = a(65724),
                r = a(84961),
                l = a(53548),
                o = a(91177),
                n = a(46482),
                c = a(29993),
                d = a(52073),
                m = a(5407),
                u = a(9618),
                _ = a(4795),
                C = a(55693),
                h = a(7123),
                x = a(72288),
                v = a(8990),
                k = a(2058),
                p = a(47580),
                b = a(95993),
                g = a(27157),
                T = a.n(g);
            let N = (0, r.PA)((e) => {
                var t;
                let {
                        className: a,
                        track: r,
                        meta: g,
                        beforeBlock: N,
                        controls: j,
                        playButtonCellRender: A,
                        withLightning: f,
                        isPlaying: w,
                        isCurrent: y,
                        togglePlay: S,
                        restartPlay: I,
                        onPlayClick: P,
                        playButtonIconSize: M,
                        skipFreemiumCloseListeningPaywall: R = !1,
                        ...B
                    } = e,
                    { shouldShowBuySubscriptionModal: L, showBuySubscriptionModal: D } = (0, u.q)(),
                    {
                        track: O,
                        fullscreenPlayer: E,
                        settings: { isMobile: z },
                        album: $,
                        albumCPA: { isPlusCPAPlayerBarEnabled: W },
                        paywall: { modal: K },
                    } = (0, x.g)(),
                    Y = (0, o.D)(),
                    q = (0, n.g)(),
                    H = (0, m.P)(),
                    U = ((e) => {
                        let { track: t, withLightning: a } = e,
                            { formatMessage: i } = (0, k.A)();
                        return ((e, t, a) => {
                            var i;
                            let { withLightning: s } = t,
                                r = (0, p.j)(null != (i = e.artists) ? i : []);
                            return e.isAvailable
                                ? [r, e.title, e.version, s && a({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                                : ''
                                      .concat(a({ id: 'extra-explicit.play-unavailable' }), ' ')
                                      .concat(r, ' ')
                                      .concat(e.title);
                        })(t, { withLightning: a }, i);
                    })({ withLightning: f, track: r }),
                    F = ((e) => {
                        let { sonataState: t } = (0, x.g)(),
                            a = t.status === h.MT.LOADING_MEDIA_SOURCE || t.status === h.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let i = t.entityMeta.entityId;
                            return a && i === e;
                        }
                        return a;
                    })(r.entityId),
                    V = W($.id, null == (t = $.meta) ? void 0 : t.isNonMusic),
                    G = r.isAvailable && L && !V,
                    X = (0, _.N)(),
                    Q = r.isAvailable && X && !V && !R,
                    Z = (0, b.w)({ track: r, callback: S }),
                    J = (0, c.c)(() => {
                        O.open({ trackId: r.id, albumId: r.albumId });
                    }),
                    ee = (0, b.w)({ track: r, callback: J }),
                    { sendPlaySearchFeedback: et } = (0, C.z)(),
                    [ea, ei] = (0, l.useState)(!1),
                    es = (0, c.c)(() => {
                        if (!H()) {
                            if (G) return void D();
                            if (Q) return void K.open();
                            (ea || w || (ei(!0), null == et || et()), Z(), w || q(), null == P || P(!w));
                        }
                    }),
                    er = (0, c.c)(() => {
                        if (w) return void I();
                        es();
                    }),
                    el = (0, c.c)((e) => {
                        if (!r.isAvailable && !r.hasModalAccess) {
                            (L && r.isAvailableOnlyForPlus && D(), X && r.isAvailableOnlyForPlus && K.open());
                            return;
                        }
                        if (G) return void D();
                        let t = !z && (2 === e.detail || (1 === e.detail && r.hasTrackLink && !E.modal.isOpened));
                        return Q && !t
                            ? void K.open()
                            : ((0, d.P)(e, T().ripple), z)
                              ? void es()
                              : 2 === e.detail
                                ? void er()
                                : void (1 === e.detail && r.hasTrackLink && !E.modal.isOpened && (ee(), Q && K.open()));
                    }),
                    eo = null == A ? void 0 : A({ onPlayButtonClick: es, isPlaying: w, isCurrent: y, isLoading: F, playButtonIconSize: M });
                return (0, i.jsxs)(v.C, {
                    ref: Y,
                    'aria-label': U,
                    // for PulseSync WebHost: BEGIN publish the track ID on the native track DOM element for addons
                    'data-pulsesync-track-id': r.id,
                    // for PulseSync WebHost: END publish the track ID on the native track DOM element for addons
                    onClick: el,
                    className: (0, s.$)(T().root, { [T().root_disabled]: !r.isAvailable, [T().root_current]: y && z }, a),
                    ...B,
                    children: [N, eo, g, j],
                });
            });
        },
        70018: (e, t, a) => {
            (Promise.resolve().then(a.bind(a, 21064)), Promise.resolve().then(a.bind(a, 30049)));
        },
        73805: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => B });
            var i = a(88800),
                s = a(65724),
                r = a(84961),
                l = a(53548),
                o = a(2058),
                n = a(97234),
                c = a(17392),
                d = a(29993),
                m = a(52300),
                u = a(17610),
                _ = a(29504),
                C = a(42174),
                h = a(96817);
            let x = (e) => {
                let { className: t, variant: a = 'text', onClick: s, iconClassName: r, iconSize: n, size: d = 's', ariaLabel: u } = e,
                    { formatMessage: _ } = (0, o.A)(),
                    C = null != u ? u : _({ id: 'play-queue.delete-from-queue' }),
                    x = (0, l.useCallback)(
                        (e) => {
                            (null == s || s(), e.stopPropagation());
                        },
                        [s],
                    );
                return (0, i.jsx)(h.$, {
                    className: t,
                    withRipple: !1,
                    variant: a,
                    size: d,
                    radius: 'round',
                    'aria-label': C,
                    onClick: x,
                    icon: (0, i.jsx)(m.I, { size: n, className: r, variant: 'bucket' }),
                    'data-test-id': c.OA.track.REMOVE_BUTTON,
                });
            };
            var v = a(5407),
                k = a(57934),
                p = a(55693),
                b = a(72288),
                g = a(49738),
                T = a(56446),
                N = a(64546),
                j = a(29831),
                A = a(30123),
                f = a(54965),
                w = a(1829),
                y = a(82092),
                S = a.n(y),
                I = a(79262),
                P = a(41867),
                M = a.n(P);
            let R = (0, r.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: a } = (0, o.A)();
                    return t.isDownloaded
                        ? (0, i.jsx)(m.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': a({ id: 'offline.track-downloaded' }),
                              'data-test-id': c.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, i.jsx)(I.A, { value: t.downloadingProgress, size: 16, className: M().downloadingProgress, progressBarClassName: M().progress })
                          : null;
                }),
                B = (0, r.PA)((e) => {
                    var t;
                    let {
                            className: a,
                            track: r,
                            withLightning: h,
                            ignoreDislikedStyles: y,
                            onLikeClick: I,
                            utmLink: P,
                            withSecondaryColor: M,
                            handleRemove: B,
                            withTrailer: L = !0,
                            likeIconSize: D = 'xxs',
                            removeButtonAriaLabel: O,
                            hideControls: E,
                        } = e,
                        { user: z, trailer: $ } = (0, b.g)(),
                        { formatMessage: W } = (0, o.A)(),
                        { sendLikeSearchFeedback: K } = (0, p.z)(),
                        [Y, q] = (0, l.useState)(!1),
                        [H, U] = (0, l.useState)(!1),
                        F = (0, v.P)(),
                        V = (0, C.K)(r),
                        {
                            duration: G,
                            lightning: X,
                            ugc: Q,
                        } = ((e, t, a) => {
                            var i;
                            let { withLightning: s, isUGC: r } = t,
                                l = ((e) =>
                                    'number' != typeof e
                                        ? null
                                        : ((e) => {
                                              let t = Math.round((e || 0) / A.k7);
                                              return (0, f.E)(t);
                                          })(e))(e.durationMs);
                            return {
                                duration: null !== l ? { text: l, ariaLabel: (0, j.j)(Math.round((null != (i = e.durationMs) ? i : 0) / 1e3), a) } : null,
                                lightning: s ? { label: a({ id: 'entity-names.popular-among-users' }) } : null,
                                ugc: r ? { label: a({ id: 'ugc.track-description' }) } : null,
                            };
                        })(r, { withLightning: h, isUGC: r.isUGC }, W),
                        Z = (0, k.F)(),
                        J = z.hasPlus,
                        ee = !r.isRemoved && r.isAvailable && !E,
                        et = (0, d.c)(async () => {
                            (Y || r.isLiked || (q(!0), null == K || K()), await V(), null == I || I(r.isLiked));
                        }),
                        ea = (0, d.c)((e) => {
                            e.stopPropagation();
                        }),
                        ei = (0, d.c)((e) => {
                            if ((e.stopPropagation(), F())) return void e.preventDefault();
                            ($.openTrackTrailer(r.id), Z(n.DomainObjectType.Track, r.id));
                        }),
                        es = (0, l.useMemo)(() => {
                            if (ee)
                                return (0, i.jsx)('div', {
                                    onClick: ea,
                                    children: (0, i.jsx)(w._, {
                                        track: r,
                                        open: H,
                                        onOpenChange: U,
                                        placement: 'bottom',
                                        icon: (0, i.jsx)(m.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: P,
                                        className: (0, s.$)(S().contextMenu, { [S().contextMenu_visible]: H }),
                                        handleRemove: B,
                                        withTrailer: L,
                                        'data-test-id': c.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ea, B, H, ee, L, r, P]);
                    return (0, i.jsxs)('div', {
                        className: (0, s.$)(S().root, S().controls, a, {
                            [S().controls_dislikedControls]: r.isDisliked,
                            [S().controls_dislikedColors]: r.isDisliked && !y,
                            [S().controls_disabled]: !r.isAvailable,
                            [S().root_withSecondaryColor]: M,
                        }),
                        children: [
                            X && (0, i.jsx)(m.I, { 'aria-label': X.label, size: 'xxs', className: S().lightning, variant: 'lightning' }),
                            Q &&
                                (0, i.jsxs)(u.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, i.jsx)(m.I, {
                                            'aria-label': Q.label,
                                            size: 'xxs',
                                            className: S().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': c.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, i.jsx)(u.ZI, { children: Q.label }),
                                    ],
                                }),
                            J && (0, i.jsx)('div', { className: (0, s.$)(S().item, S().downloadIcon), children: (0, i.jsx)(R, { track: r }) }),
                            B && !E && (0, i.jsx)(x, { size: 'xs', iconSize: 'xxs', className: (0, s.$)(S().item, S().removeButton), onClick: B, ariaLabel: O }),
                            ee &&
                                (0, i.jsx)(N.WithOffline, {
                                    fallback: (0, i.jsx)(g.c, {
                                        size: 'xs',
                                        iconSize: D,
                                        className: (0, s.$)(S().item, S().likeIcon),
                                        isLiked: r.isLiked,
                                        onClick: et,
                                        disabled: !z.isAuthorized,
                                    }),
                                }),
                            (null == (t = r.trailer) ? void 0 : t.isAvailable) &&
                                r.isAvailable &&
                                (0, i.jsx)(N.WithOffline, {
                                    fallback: (0, i.jsx)(T.k, {
                                        className: (0, s.$)(S().item, S().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: ei,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, i.jsxs)('div', {
                                className: (0, s.$)(S().item, S().contextMenuWrapper),
                                children: [
                                    null !== G &&
                                        (0, i.jsx)(_.HL, {
                                            variant: 'span',
                                            className: (0, s.$)(S().duration, { [S().duration_hidden]: H && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': G.ariaLabel,
                                            role: 'text',
                                            'data-test-id': c.Kq.track.TRACK_DURATION,
                                            children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: G.text }),
                                        }),
                                    es,
                                ],
                            }),
                        ],
                    });
                });
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
        93015: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => h });
            var i = a(88800),
                s = a(98644),
                r = a(65724),
                l = a(53548),
                o = a(2058),
                n = a(19994),
                c = a(13797),
                d = a.n(c);
            let m = (e) => {
                let { isActive: t, className: a } = e,
                    { formatMessage: s } = (0, o.A)(),
                    c = (0, l.useMemo)(() => s({ id: 'loading-messages.entity-is-loading' }, { entityName: s({ id: 'entity-names.track' }) }), [s]);
                return (0, i.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, r.$)(d().root, a),
                    children: [
                        (0, i.jsxs)('div', {
                            className: d().infoContainer,
                            children: [
                                (0, i.jsx)('div', { className: d().coverContainer, children: (0, i.jsx)(n.W, { isActive: t, className: d().cover, radius: 'round' }) }),
                                (0, i.jsx)('div', { className: d().textContainer, children: (0, i.jsx)(n.W, { isActive: t, className: d().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, i.jsx)(n.W, { isActive: t, className: d().action, radius: 'l' }),
                    ],
                });
            };
            var u = a(26835),
                _ = a.n(u);
            let C = (e) => {
                    let { isActive: t, className: a } = e,
                        { formatMessage: s } = (0, o.A)(),
                        c = (0, l.useMemo)(() => s({ id: 'loading-messages.entity-is-loading' }, { entityName: s({ id: 'entity-names.track' }) }), [s]);
                    return (0, i.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, r.$)(_().root, a),
                        children: [
                            (0, i.jsxs)('div', {
                                className: _().infoContainer,
                                children: [
                                    (0, i.jsx)(n.W, { isActive: t, className: _().cover, radius: 's' }),
                                    (0, i.jsx)('div', { className: _().textContainer, children: (0, i.jsx)(n.W, { isActive: t, className: _().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, i.jsx)(n.W, { isActive: t, className: _().action, radius: 'l' }),
                        ],
                    });
                },
                h = (e) => {
                    let { isActive: t, variant: a, className: r } = e;
                    switch (a) {
                        case s.X.PLAYLIST:
                            return (0, i.jsx)(C, { isActive: t, className: r });
                        case s.X.ALBUM:
                            return (0, i.jsx)(m, { isActive: t, className: r });
                    }
                };
        },
        95993: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => r });
            var i = a(58217),
                s = a(85587);
            let r = (e) => {
                let { track: t, callback: a, disclaimerRejectHandler: r } = e;
                return (0, i.l)({ entity: t, entityType: s.n.TRACK, callback: a, onReject: r, preventDefaultWhenSafe: !1 });
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                9904, 7191, 1833, 918, 3078, 1191, 1041, 8194, 8655, 7611, 6706, 4771, 1311, 2662, 6904, 1898, 2058, 3578, 8628, 4378, 9780, 8283, 9332, 5151, 620, 4732,
                9087, 3979, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 6374, 8979, 818, 7e3, 763, 2670, 7358,
            ],
            () => e((e.s = 70018)),
        ),
            (_N_E = e.O()));
    },
]);
