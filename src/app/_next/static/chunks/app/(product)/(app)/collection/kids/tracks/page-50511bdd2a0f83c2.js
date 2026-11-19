(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9394],
    {
        4795: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => l });
            var a = i(72288),
                s = i(97956);
            let l = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: l },
                    experiments: r,
                } = (0, a.g)();
                return (
                    !(null == l ? void 0 : l.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = r.getExperiment(s.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        6668: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => l });
            var a = i(53548),
                s = i(29993);
            let l = () => {
                let e = (0, a.useRef)(new Map());
                return (
                    (0, a.useLayoutEffect)(
                        () => (
                            e.current.size > 0 && e.current.clear(),
                            () => {
                                e.current.clear();
                            }
                        ),
                        [],
                    ),
                    (0, s.c)((t, i) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, i), i)))
                );
            };
        },
        10829: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => v });
            var a = i(88800),
                s = i(65724),
                l = i(84961),
                r = i(53548),
                n = i(17392),
                o = i(34126),
                c = i(39079),
                d = i(72288),
                m = i(39267),
                u = i(13619),
                k = i(73805),
                h = i(15232),
                p = i(56712),
                C = i(26243),
                x = i.n(C);
            let v = (0, l.PA)((e) => {
                var t;
                let {
                        track: i,
                        playContextParams: l,
                        className: C,
                        withDNDBlock: v,
                        isDragging: _,
                        draggingClassName: g,
                        ignoreDislikedStyles: T,
                        withSecondaryColor: w,
                        handleRemove: f,
                        withDislike: y,
                        withTrailer: b = !0,
                        beforeTitle: N,
                        removeButtonAriaLabel: j,
                        hideControls: S,
                    } = e,
                    L = (0, c.D)({ playContextParams: l, entityId: i.entityId }),
                    {
                        settings: { isMobile: A },
                    } = (0, d.g)(),
                    D = (0, o.X)(i.trackSource, { isMobile: A }),
                    P = (0, r.useCallback)(
                        (e) =>
                            (0, a.jsx)(m.q, {
                                isAvailable: i.isAvailable,
                                isDisliked: i.isDisliked,
                                coverUri: i.coverUri,
                                title: i.title,
                                className: x().playButtonCell,
                                ignoreDislikedStyles: T,
                                radius: 'xs',
                                ...e,
                            }),
                        [T, i.coverUri, i.isAvailable, i.isDisliked, i.title],
                    );
                return (0, a.jsx)(p.C, {
                    className: (0, s.$)(C, { [x().trackWithDots]: v, [x().important]: v }),
                    track: i,
                    beforeBlock: v ? (0, a.jsx)(u.O, { className: (0, s.$)(x().dots, g), isDragging: _ }) : void 0,
                    meta: (0, a.jsx)(h.j, { withArtistLink: D, beforeTitle: N, track: i, ignoreDislikedStyles: T, withSecondaryColor: w }),
                    playButtonCellRender: P,
                    controls: (0, a.jsx)(k.Q, {
                        track: i,
                        className: x().controlsBarCell,
                        ignoreDislikedStyles: T,
                        utmLink: null == (t = l.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: w,
                        handleRemove: f,
                        withDislike: y,
                        withTrailer: b,
                        removeButtonAriaLabel: j,
                        hideControls: S,
                    }),
                    ...L,
                    'data-test-id': n.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        15232: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => b });
            var a = i(88800),
                s = i(65724),
                l = i(84961),
                r = i(53548),
                n = i(2058),
                o = i(58390),
                c = i(17392),
                d = i(79070),
                m = i(17610),
                u = i(29504),
                k = i(13946),
                h = i(55693),
                p = i(72288),
                C = i(24548),
                x = i(85587),
                v = i(90224),
                _ = i(91292),
                g = i(7608),
                T = i(6667),
                w = i(85463),
                f = i(65462),
                y = i.n(f);
            let b = (0, l.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: l,
                        albumArtists: f,
                        withExplicitMark: b,
                        withSecondaryColor: N,
                        captionSize: j = 'm',
                        explicitSize: S = 'xxxs',
                        withAllArtistsTitle: L,
                        textClassName: A,
                        artistsClassName: D,
                        ignoreDislikedStyles: P,
                        withCustomTooltip: R = !0,
                        hasLineClamp: I = !0,
                        withSavingQueryParams: K,
                        beforeTitle: E,
                        withArtistLink: O,
                        variant: z,
                        withTrackLink: $,
                        afterTitle: B,
                        withContextMenuArtists: M,
                    } = e,
                    { formatMessage: Y } = (0, n.A)(),
                    { sendNavigateSearchFeedback: q } = (0, h.z)(),
                    {
                        settings: { isMobile: V },
                        slam: W,
                    } = (0, p.g)(),
                    U = (0, T.$)({ withCustomTooltip: R }),
                    X = (0, o.useSearchParams)(),
                    F = (0, g.B)(l, {
                        isMobile: V,
                        isOfflineModeEnabled: W.isOfflineModeEnabled,
                        albumArtists: f,
                        withTrackLink: $,
                        withArtistLink: O,
                        variant: z,
                        withExplicitMark: b,
                        query: K ? Object.fromEntries(X) : void 0,
                    }),
                    {
                        displayTitle: H,
                        ariaLabel: G,
                        tooltipText: J,
                        titleAttribute: Q,
                        versionTitleAttribute: Z,
                        isTooltipEnabled: ee,
                    } = ((e, t, i, a) => {
                        var s, l;
                        let { canEnableCustomTooltip: r, isMobile: n } = i,
                            o = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, a),
                            c = t.shouldShowRemovedTitle ? o : ''.concat(o, ' ').concat(null != (s = t.version) ? s : ''),
                            d = a({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: o,
                            ariaLabel: ''.concat(d, ' ').concat(null != (l = e.version) ? l : ''),
                            tooltipText: c,
                            isTooltipEnabled: r && !n,
                            titleAttribute: !r && (t.shouldShowRemovedTitle || t.link) ? c : void 0,
                            versionTitleAttribute: r ? void 0 : t.version,
                        };
                    })(l, F, { canEnableCustomTooltip: U, isMobile: V }, Y),
                    et = (0, w.O)({ track: l, onNavigate: q, withSavingQueryParams: K, entityType: x.n.TRACK }),
                    ei = (0, r.useCallback)(
                        (e) =>
                            (0, a.jsx)(m.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: J,
                                hoverSettings: C.V,
                                children: (0, a.jsx)(u.HL, {
                                    className: (0, s.$)(y().text, y().title),
                                    type: 'entity',
                                    size: j,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: H,
                                }),
                            }),
                        [j, H, J, ee],
                    ),
                    ea = (0, d.L)(() =>
                        F.shouldShowRemovedTitle
                            ? (0, a.jsx)(m.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: J,
                                  hoverSettings: C.V,
                                  children: (0, a.jsx)(u.HL, {
                                      className: (0, s.$)(y().text, y().title),
                                      type: 'entity',
                                      size: j,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: Q,
                                      children: H,
                                  }),
                              })
                            : F.link
                              ? (0, a.jsx)(_.N, {
                                    onClick: et,
                                    className: y().albumLink,
                                    href: F.link.href,
                                    'aria-label': G,
                                    title: Q,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: ei(),
                                })
                              : ei({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    es = (0, r.useMemo)(() => +!!I, [I]);
                return (0, a.jsx)('div', {
                    className: (0, s.$)(y().root, { [y().root_disabled]: !l.isAvailable, [y().root_disliked]: l.isDisliked && !P, [y().root_withSecondaryColor]: N }, t),
                    children: (0, a.jsxs)('div', {
                        className: y().metaContainer,
                        children: [
                            (0, a.jsxs)('div', {
                                className: (0, s.$)(y().titleContainer, { [y().titleContainer_withVersion]: l.version }, i),
                                children: [
                                    (0, a.jsxs)(u.HL, {
                                        className: (0, s.$)(y().text, A),
                                        type: 'entity',
                                        size: j,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            E,
                                            ea,
                                            F.version &&
                                                (0, a.jsxs)(u.HL, {
                                                    className: (0, s.$)(y().text, y().version),
                                                    type: 'entity',
                                                    size: j,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: Z,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', F.version],
                                                }),
                                        ],
                                    }),
                                    F.explicitMark &&
                                        (0, a.jsx)(v.N, {
                                            containerClassName: y().explicitMarkContainer,
                                            getDescriptionTexts: l.getDescriptionTexts,
                                            size: S,
                                            variant: F.explicitMark,
                                            className: y().explicitMark,
                                            trackId: l.id,
                                        }),
                                    B,
                                ],
                            }),
                            F.artists.length > 0 &&
                                (0, a.jsx)(k.i, {
                                    className: (0, s.$)(y().text, { [y().artists]: I }, D, A),
                                    withAllArtistsTitle: L,
                                    linkClassName: (0, s.$)(y().text, y().link),
                                    captionClassName: (0, s.$)(y().text, y().artistCaption),
                                    artists: F.artists,
                                    withLink: F.withArtistLink,
                                    lineClamp: es,
                                    captionSize: j,
                                    withContextMenu: M,
                                }),
                        ],
                    }),
                });
            });
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
        37670: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => l });
            var a = i(53548);
            i(30282);
            var s = i(58390);
            let l = (e) => {
                let t = (0, s.usePathname)(),
                    [i, l] = (0, a.useState)(!1);
                ((0, a.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, a.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !i && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), l(!0));
                    }, [e, i, t]));
            };
        },
        43032: (e) => {
            e.exports = {
                root: 'CollectionKidsTracksPage_root__8nP0n',
                scrollContainer: 'CollectionKidsTracksPage_scrollContainer__1d9Pm',
                important: 'CollectionKidsTracksPage_important__oX_Ny',
                footer: 'CollectionKidsTracksPage_footer__dujIV',
                content: 'CollectionKidsTracksPage_content__Vf43s',
            };
        },
        56446: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => m });
            var a = i(88800),
                s = i(53548),
                l = i(2058),
                r = i(17392),
                n = i(96817),
                o = i(52300),
                c = i(39318);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: s,
                            radius: d,
                            iconSize: m,
                            disabled: u,
                            onClick: k,
                            iconClassName: h,
                            className: p,
                            forwardRef: C,
                            style: x,
                            children: v,
                        } = e,
                        { formatMessage: _ } = (0, l.A)(),
                        g = _({ id: 'trailer.button-aria-label' });
                    return (0, a.jsx)(n.$, {
                        className: p,
                        color: 'secondary',
                        radius: d,
                        size: s,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': g,
                        onClick: k,
                        ref: C,
                        icon: (0, a.jsx)(o.I, { variant: 'trailer', size: m, className: h }),
                        disabled: u,
                        'data-intersection-property-id': c.N,
                        style: x,
                        'data-test-id': r.S7.TRAILER_BUTTON,
                        children: v,
                    });
                },
                m = (0, s.forwardRef)((e, t) => (0, a.jsx)(d, { forwardRef: t, ...e }));
        },
        57208: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionKidsTracksPage: () => O });
            var a = i(88800),
                s = i(65724),
                l = i(84961),
                r = i(53548),
                n = i(2058),
                o = i(88969),
                c = i(97234),
                d = i(59724),
                m = i(17392),
                u = i(18593),
                k = i(54667),
                h = i(29504),
                p = i(32596),
                C = i(69630),
                x = i(76843),
                v = i(10829),
                _ = i(98427),
                g = i(84384),
                T = i(46422),
                w = i(44230),
                f = i(37670),
                y = i(6668),
                b = i(72288),
                N = i(98644),
                j = i(54320),
                S = i(86790),
                L = i(60266),
                A = i(93317),
                D = i(93015),
                P = i(79418),
                R = i(71104),
                I = i(45654),
                K = i(43032),
                E = i.n(K);
            let O = (0, l.PA)(() => {
                let {
                        collection: {
                            kids: { tracks: e },
                        },
                        settings: { isMobile: t },
                    } = (0, b.g)(),
                    { contentScrollRef: i, setContentScrollRef: l } = (0, w.g)(),
                    K = (0, T.W)(),
                    { from: O } = (0, g.f)({ pageId: _.b.COLLECTION_KIDS_TRACKS }),
                    { formatMessage: z } = (0, n.A)(),
                    $ = (0, y.w)();
                ((0, r.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                ),
                    (0, f.J)(e.isResolved));
                let B = (0, r.useCallback)(
                    (t) => {
                        e.getData({ page: t, pageSize: R.c });
                    },
                    [e],
                );
                (0, j.X)(e.pagesLoader, B);
                let M = (0, r.useMemo)(() => ({ Footer: () => (0, a.jsx)(L.A, { children: (0, a.jsx)(S.w, { className: E().footer }) }) }), []),
                    Y = e.isShimmerVisible ? 20 : e.items.length;
                return (e.isNeededToLoad && (0, r.use)(e.getData({ pageSize: R.c })), e.isRejected)
                    ? (0, a.jsx)(p.SomethingWentWrong, {})
                    : e.isEmpty
                      ? (0, a.jsx)(I.i, { title: z({ id: 'kids.favourite-tracks-and-episodes' }) })
                      : (0, a.jsx)(d.a, {
                            pageId: c.AppScreen.CollectionKidsTracks,
                            pageIdForFrom: _.b.COLLECTION_KIDS_TRACKS,
                            children: (0, a.jsx)(C.h, {
                                scrollElement: i,
                                outerTitle: z({ id: 'kids.favourite-tracks-and-episodes' }),
                                children: (0, a.jsxs)('div', {
                                    className: E().root,
                                    'data-test-id': m.Xk.collection.COLLECTION_KIDS_TRACKS_PAGE,
                                    children: [
                                        (0, a.jsx)(A.Y, {
                                            variant: A.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: K.canBack,
                                            children: (0, a.jsx)(h.DZ, {
                                                variant: 'h2',
                                                weight: 'bold',
                                                size: t ? 'm' : 'xl',
                                                lineClamp: 2,
                                                children: (0, a.jsx)(o.A, { id: 'kids.favourite-tracks-and-episodes' }),
                                            }),
                                        }),
                                        (0, a.jsx)(P.$, {
                                            className: (0, s.$)(E().scrollContainer, E().important),
                                            listClassName: E().content,
                                            customComponents: M,
                                            itemContentCallback: (t) => {
                                                let i = e.items[t];
                                                if (!i) return (0, a.jsx)(D.D, { isActive: !0, className: E().shimmerItem, variant: N.X.PLAYLIST });
                                                let s = $(i.entityId, {
                                                    contextData: { type: u.K.Various, meta: { id: i.entityId }, from: O },
                                                    queueParams: { index: t },
                                                    loadContextMeta: !1,
                                                    entitiesData: e.sonataEntitiesData,
                                                });
                                                return i.type === k.S.MUSIC
                                                    ? (0, a.jsx)(v.K, { track: i, playContextParams: s }, t)
                                                    : (0, a.jsx)(x.K, { track: i, playContextParams: s, withPodcastName: i.isTrackPodcast }, t);
                                            },
                                            initialItemCount: Y,
                                            totalCount: Y,
                                            onGetDataByPage: B,
                                            pageSize: R.c,
                                            totalRequests: e.requestsCount,
                                            handleRef: l,
                                            context: { listAriaLabel: z({ id: 'entity-names.tracks' }) },
                                            isMobileLayout: t,
                                            useWindowScroll: t,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
        },
        71668: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 57328)), Promise.resolve().then(i.bind(i, 57208)));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7191, 9904, 918, 1833, 3078, 1191, 1041, 8194, 8655, 8767, 529, 6706, 4771, 2662, 6904, 1898, 2058, 3578, 8628, 4378, 9780, 8283, 9332, 5151, 8211, 4732,
                9087, 3979, 6719, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 6374, 8979, 818, 7053, 6317, 763, 2670, 7358,
            ],
            () => e((e.s = 71668)),
        ),
            (_N_E = e.O()));
    },
]);
