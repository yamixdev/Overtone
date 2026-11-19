(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4244],
    {
        953: (e) => {
            e.exports = {
                root: 'ArtistRecommendationCard_root__Wc3mw',
                cardLink: 'ArtistRecommendationCard_cardLink__21zGd',
                playButton: 'ArtistRecommendationCard_playButton__e5HmA',
                root_active: 'ArtistRecommendationCard_root_active__tQIo2',
            };
        },
        4465: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => Z });
            var r = i(88800),
                a = i(65724),
                n = i(84961),
                s = i(53548),
                o = i(35412),
                l = i(97234),
                c = i(90852),
                d = i(17392),
                u = i(53323),
                m = i(72288),
                v = i(97956),
                _ = i(18486),
                p = i(31764),
                x = i(74804),
                f = i(29993),
                h = i(52455),
                A = i(79070),
                b = i(90109),
                k = i(92867),
                j = i(32703),
                C = i(33724),
                y = i(2058),
                T = i(91177),
                g = i(83295),
                R = i(91292),
                N = i(16704),
                P = i(4550),
                L = i(13988),
                I = i(76636),
                O = i(27766),
                M = i(81877),
                S = i(17828),
                E = i.n(S);
            let w = (0, n.PA)((e) => {
                let { promo: t } = e;
                return (0, r.jsx)('div', {
                    className: E().root,
                    children: (0, r.jsx)('div', {
                        className: E().coverContainer,
                        children: (0, r.jsx)(M.B, {
                            className: (0, a.$)(E().cover, { [E().cover_withTopPosition]: t.coverContentMode === O.y.TOP }),
                            src: t.album.coverUri,
                            withAvatarReplace: !0,
                            withAspectRatio: !0,
                            size: 300,
                            fit: 'cover',
                            alt: '',
                            'aria-hidden': !0,
                        }),
                    }),
                });
            });
            var B = i(83961),
                z = i(29504),
                D = i(13946),
                K = i(90224),
                U = i(83680),
                F = i.n(U);
            let H = (0, n.PA)((e) => {
                let { promo: t } = e,
                    i = (0, s.useRef)(null),
                    { isTruncated: n } = (0, B.W)(i, 'horizontal');
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)('div', {
                            className: F().avatars,
                            'aria-hidden': !0,
                            children: t.avatarArtists.map((e) =>
                                (0, r.jsx)(M.B, { className: F().avatar, src: e.coverUri, size: 100, fit: 'cover', withAvatarReplace: !0, alt: '' }, e.key),
                            ),
                        }),
                        (0, r.jsx)(D.i, {
                            className: F().artistNames,
                            captionClassName: F().artistCaption,
                            artists: t.artists,
                            captionSize: 'm',
                            withLink: !1,
                            withCustomTooltip: !1,
                        }),
                        (0, r.jsxs)('div', {
                            className: F().titleContainer,
                            children: [
                                (0, r.jsx)(z.DZ, {
                                    ref: i,
                                    className: (0, a.$)(F().title, { [F().title_truncated]: n }),
                                    variant: 'div',
                                    size: 'xs',
                                    children: t.album.title,
                                }),
                                t.album.explicitDisclaimer &&
                                    (0, r.jsx)(K.N, {
                                        containerClassName: F().explicitMark,
                                        getDescriptionTexts: t.album.getDescriptionTexts,
                                        variant: t.album.explicitDisclaimer,
                                        size: 'xxxs',
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var $ = i(47234),
                V = i.n($);
            let q = (0, n.PA)((e) => {
                let { promo: t } = e,
                    { formatMessage: i } = (0, y.A)(),
                    a = (0, T.D)(),
                    { ref: n } = (0, I.H)({ promo: t }),
                    { isPlaying: o, handleNavigate: l, handlePlayButtonClick: c } = (0, L.Z)({ promo: t }),
                    u = (0, s.useMemo)(() => (0, P.d)(t.averageColor), [t.averageColor]),
                    m = (0, g.S)([a, n]),
                    v = (0, f.c)((e) => {
                        e.currentTarget.scrollIntoView({ block: 'nearest', inline: 'nearest' });
                    });
                return (0, r.jsxs)('div', {
                    ref: m,
                    className: V().root,
                    style: u,
                    onFocus: v,
                    'data-test-id': d.e8.landing.ARTIST_RECOMMENDATION_CARD,
                    children: [
                        (0, r.jsxs)(R.N, {
                            className: V().cardLink,
                            href: t.albumUrl,
                            onClick: l,
                            'data-test-id': d.e8.landing.ARTIST_RECOMMENDATION_CARD_LINK,
                            children: [(0, r.jsx)(w, { promo: t }), (0, r.jsx)('div', { className: V().info, children: (0, r.jsx)(H, { promo: t }) })],
                        }),
                        (0, r.jsx)(N.D, {
                            className: V().playButton,
                            buttonVariant: 'default',
                            color: 'primary',
                            radius: 'xxxl',
                            size: 'xs',
                            iconSize: 'xxs',
                            iconClassName: V().playIcon,
                            isPlaying: o,
                            onClick: c,
                            disabled: !t.album.isAvailable,
                            children: i(o ? { id: 'player-actions.pause' } : { id: 'player-actions.listen' }),
                        }),
                    ],
                });
            });
            var W = i(23324),
                Y = i.n(W);
            let X = (0, n.PA)((e) => {
                    var t;
                    let {
                            forwardRef: i,
                            data: n,
                            isLoaded: y,
                            setOutdated: T,
                            meta: g,
                            className: R,
                            containerClassName: N,
                            headerClassName: P,
                            headingVariant: L,
                            ...I
                        } = e,
                        { experiments: O } = (0, m.g)(),
                        { carouselRef: M, onScroll: S } = ((e) => {
                            let t = (0, s.useRef)(null),
                                i = (0, s.useRef)(null),
                                r = (0, k.U)(b.Q8),
                                a = (0, f.c)(() => {
                                    r &&
                                        null === i.current &&
                                        (i.current = requestAnimationFrame(() => {
                                            var e;
                                            i.current = null;
                                            let r = t.current;
                                            if (!r) return;
                                            let a = getComputedStyle(r),
                                                n = Number(a.getPropertyValue('--items-per-page')) || 1;
                                            if (n > 1) return;
                                            let s = r.scrollLeft,
                                                o = r.getBoundingClientRect().left + r.clientLeft + parseFloat(a.paddingLeft),
                                                l = Array.from(r.children),
                                                c = l.map((e) => e.getBoundingClientRect()),
                                                d = c[Math.max(0, l.length - n)],
                                                u = Math.max(0, (null != (e = null == d ? void 0 : d.left) ? e : o) - o + s);
                                            l.forEach((e, t) => {
                                                var i;
                                                let r = c[t];
                                                if (!(e instanceof HTMLElement) || !(null == r ? void 0 : r.width)) return;
                                                let a = Math.min(r.left - o + s, u) - s,
                                                    n = (0, j.A)(a, r.width);
                                                e.style.setProperty('--card-offset', null != (i = n['--cover-offset']) ? i : null);
                                            });
                                        }));
                                });
                            return (
                                (0, h.s)(a, t),
                                (0, s.useEffect)(
                                    () => (
                                        a(),
                                        () => {
                                            null !== i.current && (cancelAnimationFrame(i.current), (i.current = null));
                                        }
                                    ),
                                    [e, a, r],
                                ),
                                (0, A.L)(() => ({ carouselRef: t, onScroll: a }))
                            );
                        })(null != (t = null == n ? void 0 : n.items.length) ? t : 0),
                        { ref: E, intersectionPropertyId: w } = (0, x.J)({ data: n, isLoaded: y, setOutdated: T, forwardedRef: i }),
                        B = O.checkExperiment(v.z.WebNextArtistRecommendationsAutoScroll, 'on') ? C.i : u.F;
                    return (0, r.jsxs)('section', {
                        className: (0, a.$)(Y().root, R),
                        ref: E,
                        'data-intersection-property-id': w,
                        ...(0, o.OZ)(I),
                        children: [
                            (0, r.jsx)(_.T, {
                                className: (0, a.$)(Y().header, P),
                                title: g.title,
                                headingVariant: L,
                                controls: (0, r.jsx)(p.X, { className: Y().controls, carouselRef: M }),
                            }),
                            (0, r.jsx)(B, {
                                ref: M,
                                className: (0, a.$)(Y().carousel, N),
                                itemClassName: Y().item,
                                onScroll: S,
                                'data-test-id': d.e8.landing.ARTIST_RECOMMENDATIONS_PROMO_CAROUSEL,
                                children:
                                    null == n
                                        ? void 0
                                        : n.items.map((e, t) =>
                                              (0, r.jsx)(
                                                  c.B,
                                                  {
                                                      objectType: l.DomainObjectType.Album,
                                                      objectId: String(e.album.id),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      children: (0, r.jsx)(q, { promo: e }),
                                                  },
                                                  e.album.getKey(t),
                                              ),
                                          ),
                            }),
                        ],
                    });
                }),
                Z = (0, s.forwardRef)((e, t) => (0, r.jsx)(X, { forwardRef: t, ...e }));
        },
        4550: (e, t, i) => {
            'use strict';
            i.d(t, { d: () => a });
            var r = i(35412);
            let a = (e) => {
                if (!e) return { '--artist-recommendation-glow-color': '#848484' };
                let { h: t, s: i, l: a } = (0, r.g8)(e);
                return {
                    '--artist-recommendation-glow-color': e,
                    '--artist-recommendation-border-color-top': 'hsl('
                        .concat(t, ' ')
                        .concat(Math.max(0, i - 30), '% ')
                        .concat(Math.min(80, a + 40), '%)'),
                    '--artist-recommendation-border-color-bottom': 'hsl('
                        .concat(t, ' ')
                        .concat(Math.max(0, i - 20), '% ')
                        .concat(Math.max(10, a - 20), '%)'),
                };
            };
        },
        6322: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => s });
            var r = i(88800),
                a = i(15077),
                n = i(33719);
            let s = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, r.jsx)(n.k, {
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
        10448: (e) => {
            e.exports = {
                controls: 'ArtistRecommendationsPromoBig_controls__QUaQD',
                root: 'ArtistRecommendationsPromoBig_root__rpYBw',
                header: 'ArtistRecommendationsPromoBig_header__5U0Kb',
                carousel: 'ArtistRecommendationsPromoBig_carousel__7gpmw',
                item: 'ArtistRecommendationsPromoBig_item__JrrOG',
                important: 'ArtistRecommendationsPromoBig_important__NefdH',
            };
        },
        13988: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => h });
            var r = i(97234),
                a = i(70598),
                n = i(46482),
                s = i(18593),
                o = i(29993),
                l = i(79070),
                c = i(60757),
                d = i(5407),
                u = i(84384),
                m = i(1344),
                v = i(9618),
                _ = i(4795),
                p = i(78940),
                x = i(39079),
                f = i(72288);
            let h = (e) => {
                let { promo: t } = e,
                    { paywall: i } = (0, f.g)(),
                    h = (0, p.Z)(t.albumUrl),
                    A = (0, c.c)({ album: t.album, callback: h }),
                    b = (0, a.S)(),
                    k = (0, n.g)(),
                    j = (0, d.P)(),
                    C = (0, _.N)(),
                    { shouldShowBuySubscriptionModal: y, showBuySubscriptionModal: T } = (0, v.q)(),
                    { from: g } = (0, u.f)({ contextId: t.album.id, contextType: s.K.Album }),
                    { isPlaying: R, togglePlay: N } = (0, x.D)({
                        playContextParams: {
                            contextData: { type: s.K.Album, meta: { id: t.album.id }, from: g, utmLink: (0, m.Z)(t.reportingProperties) },
                            loadContextMeta: !0,
                        },
                    }),
                    P = (0, o.c)((e) => {
                        (t.setClicked(), b({ to: r.AppScreen.AlbumScreen }), A(e));
                    }),
                    L = (0, o.c)(() => {
                        (t.setClicked(), N());
                    }),
                    I = (0, c.c)({ album: t.album, callback: L }),
                    O = (0, o.c)(() => {
                        if (!j()) {
                            if (y) return void T();
                            if (C) return void i.modal.open();
                            (I(), k());
                        }
                    });
                return (0, l.L)(() => ({ isPlaying: R, handleNavigate: P, handlePlayButtonClick: O }));
            };
        },
        15232: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => T });
            var r = i(88800),
                a = i(65724),
                n = i(84961),
                s = i(53548),
                o = i(2058),
                l = i(58390),
                c = i(17392),
                d = i(79070),
                u = i(17610),
                m = i(29504),
                v = i(13946),
                _ = i(55693),
                p = i(72288),
                x = i(24548),
                f = i(85587),
                h = i(90224),
                A = i(91292),
                b = i(7608),
                k = i(6667),
                j = i(85463),
                C = i(65462),
                y = i.n(C);
            let T = (0, n.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: n,
                        albumArtists: C,
                        withExplicitMark: T,
                        withSecondaryColor: g,
                        captionSize: R = 'm',
                        explicitSize: N = 'xxxs',
                        withAllArtistsTitle: P,
                        textClassName: L,
                        artistsClassName: I,
                        ignoreDislikedStyles: O,
                        withCustomTooltip: M = !0,
                        hasLineClamp: S = !0,
                        withSavingQueryParams: E,
                        beforeTitle: w,
                        withArtistLink: B,
                        variant: z,
                        withTrackLink: D,
                        afterTitle: K,
                        withContextMenuArtists: U,
                    } = e,
                    { formatMessage: F } = (0, o.A)(),
                    { sendNavigateSearchFeedback: H } = (0, _.z)(),
                    {
                        settings: { isMobile: $ },
                        slam: V,
                    } = (0, p.g)(),
                    q = (0, k.$)({ withCustomTooltip: M }),
                    W = (0, l.useSearchParams)(),
                    Y = (0, b.B)(n, {
                        isMobile: $,
                        isOfflineModeEnabled: V.isOfflineModeEnabled,
                        albumArtists: C,
                        withTrackLink: D,
                        withArtistLink: B,
                        variant: z,
                        withExplicitMark: T,
                        query: E ? Object.fromEntries(W) : void 0,
                    }),
                    {
                        displayTitle: X,
                        ariaLabel: Z,
                        tooltipText: G,
                        titleAttribute: Q,
                        versionTitleAttribute: J,
                        isTooltipEnabled: ee,
                    } = ((e, t, i, r) => {
                        var a, n;
                        let { canEnableCustomTooltip: s, isMobile: o } = i,
                            l = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, r),
                            c = t.shouldShowRemovedTitle ? l : ''.concat(l, ' ').concat(null != (a = t.version) ? a : ''),
                            d = r({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: l,
                            ariaLabel: ''.concat(d, ' ').concat(null != (n = e.version) ? n : ''),
                            tooltipText: c,
                            isTooltipEnabled: s && !o,
                            titleAttribute: !s && (t.shouldShowRemovedTitle || t.link) ? c : void 0,
                            versionTitleAttribute: s ? void 0 : t.version,
                        };
                    })(n, Y, { canEnableCustomTooltip: q, isMobile: $ }, F),
                    et = (0, j.O)({ track: n, onNavigate: H, withSavingQueryParams: E, entityType: f.n.TRACK }),
                    ei = (0, s.useCallback)(
                        (e) =>
                            (0, r.jsx)(u.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: G,
                                hoverSettings: x.V,
                                children: (0, r.jsx)(m.HL, {
                                    className: (0, a.$)(y().text, y().title),
                                    type: 'entity',
                                    size: R,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: X,
                                }),
                            }),
                        [R, X, G, ee],
                    ),
                    er = (0, d.L)(() =>
                        Y.shouldShowRemovedTitle
                            ? (0, r.jsx)(u.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: G,
                                  hoverSettings: x.V,
                                  children: (0, r.jsx)(m.HL, {
                                      className: (0, a.$)(y().text, y().title),
                                      type: 'entity',
                                      size: R,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: Q,
                                      children: X,
                                  }),
                              })
                            : Y.link
                              ? (0, r.jsx)(A.N, {
                                    onClick: et,
                                    className: y().albumLink,
                                    href: Y.link.href,
                                    'aria-label': Z,
                                    title: Q,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: ei(),
                                })
                              : ei({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    ea = (0, s.useMemo)(() => +!!S, [S]);
                return (0, r.jsx)('div', {
                    className: (0, a.$)(y().root, { [y().root_disabled]: !n.isAvailable, [y().root_disliked]: n.isDisliked && !O, [y().root_withSecondaryColor]: g }, t),
                    children: (0, r.jsxs)('div', {
                        className: y().metaContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: (0, a.$)(y().titleContainer, { [y().titleContainer_withVersion]: n.version }, i),
                                children: [
                                    (0, r.jsxs)(m.HL, {
                                        className: (0, a.$)(y().text, L),
                                        type: 'entity',
                                        size: R,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            w,
                                            er,
                                            Y.version &&
                                                (0, r.jsxs)(m.HL, {
                                                    className: (0, a.$)(y().text, y().version),
                                                    type: 'entity',
                                                    size: R,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: J,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', Y.version],
                                                }),
                                        ],
                                    }),
                                    Y.explicitMark &&
                                        (0, r.jsx)(h.N, {
                                            containerClassName: y().explicitMarkContainer,
                                            getDescriptionTexts: n.getDescriptionTexts,
                                            size: N,
                                            variant: Y.explicitMark,
                                            className: y().explicitMark,
                                            trackId: n.id,
                                        }),
                                    K,
                                ],
                            }),
                            Y.artists.length > 0 &&
                                (0, r.jsx)(v.i, {
                                    className: (0, a.$)(y().text, { [y().artists]: S }, I, L),
                                    withAllArtistsTitle: P,
                                    linkClassName: (0, a.$)(y().text, y().link),
                                    captionClassName: (0, a.$)(y().text, y().artistCaption),
                                    artists: Y.artists,
                                    withLink: Y.withArtistLink,
                                    lineClamp: ea,
                                    captionSize: R,
                                    withContextMenu: U,
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
        17828: (e) => {
            e.exports = {
                root: 'ArtistRecommendationArtwork_root__wCua8',
                coverContainer: 'ArtistRecommendationArtwork_coverContainer__WLw0_',
                cover: 'ArtistRecommendationArtwork_cover__TvlIy',
                cover_withTopPosition: 'ArtistRecommendationArtwork_cover_withTopPosition__9OmSw',
            };
        },
        19038: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => b });
            var r = i(88800),
                a = i(84961),
                n = i(53548),
                s = i(2058),
                o = i(88969),
                l = i(50408),
                c = i(96817),
                d = i(52300),
                u = i(17610),
                m = i(29504),
                v = i(44230),
                _ = i(77356),
                p = i(49034),
                x = i(26645),
                f = i(20150),
                h = i.n(f);
            let A = { width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' },
                b = (0, a.PA)((e) => {
                    let { children: t, customMessage: i, shouldForceOpenTooltip: a } = e,
                        { formatMessage: f } = (0, s.A)(),
                        { contentRef: b } = (0, v.g)(),
                        { setIsOnboardingOpened: k } = (0, x.w)(),
                        [j, C] = (0, l.d)(),
                        y = (0, p.z)({ id: _.h.TRAILER_BUTTON, ref: j }) || !!a,
                        [T, g] = (0, n.useState)(y),
                        R = (0, n.useCallback)(
                            (e) => {
                                (null == e || e.stopPropagation(), g(!1), k(!1));
                            },
                            [k],
                        ),
                        N = (0, n.useCallback)(
                            (e) => {
                                e || R();
                            },
                            [R],
                        );
                    return (0, r.jsxs)(u.m_, {
                        placement: 'bottom',
                        arrowProps: A,
                        offsetOptions: 14,
                        isHoverEnabled: !1,
                        open: T,
                        onOpenChange: N,
                        enableAriaDescribedby: !0,
                        referenceRef: C,
                        children: [
                            t,
                            (0, r.jsxs)(u.ZI, {
                                className: h().root,
                                rootNode: b,
                                children: [
                                    (0, r.jsx)(c.$, {
                                        icon: (0, r.jsx)(d.I, { variant: 'close', size: 'xxs' }),
                                        onClick: R,
                                        variant: 'text',
                                        className: h().close,
                                        withRipple: !1,
                                        'aria-label': f({ id: 'interface-actions.close' }),
                                    }),
                                    (0, r.jsx)(m.HL, {
                                        variant: 'span',
                                        className: h().text,
                                        children: i || (0, r.jsx)(o.A, { id: 'onboarding.trailer', values: { br: (0, r.jsx)('br', {}) } }),
                                    }),
                                ],
                            }),
                        ],
                    });
                });
        },
        20150: (e) => {
            e.exports = { root: 'TrailerOnboarding_root__I3fd0', text: 'TrailerOnboarding_text__HU4RO', close: 'TrailerOnboarding_close__ywMIK' };
        },
        21256: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => U });
            var r = i(88800),
                a = i(65724),
                n = i(84961),
                s = i(53548),
                o = i(2058),
                l = i(97234),
                c = i(91177),
                d = i(70598),
                u = i(46482),
                m = i(17392),
                v = i(18593),
                _ = i(29993),
                p = i(79070),
                x = i(29832),
                f = i(52300),
                h = i(7555),
                A = i(29504),
                b = i(91959),
                k = i(64207),
                j = i(77455),
                C = i(5407),
                y = i(57934),
                T = i(84384),
                g = i(4795),
                R = i(78940),
                N = i(55693),
                P = i(39079),
                L = i(72288),
                I = i(81877),
                O = i(49738),
                M = i(91292),
                S = i(56862),
                E = i(16704),
                w = i(56446),
                B = i(36207),
                z = i(43161),
                D = i(93434),
                K = i.n(D);
            let U = (0, n.PA)((e) => {
                let { artist: t, className: i, children: n, contentLinesCount: D, topTitleElement: U, bottomTitleElement: F } = e,
                    H = (0, c.D)(),
                    {
                        trailer: $,
                        user: V,
                        paywall: { modal: q },
                    } = (0, L.g)(),
                    { from: W, utmLink: Y } = (0, T.f)({ contextId: t.id, contextType: v.K.Artist }),
                    { formatMessage: X } = (0, o.A)(),
                    [Z, G] = (0, s.useState)(!1),
                    [Q, J] = (0, s.useState)(!1),
                    [ee, et] = (0, s.useState)(!1),
                    { sendLikeSearchFeedback: ei, sendNavigateSearchFeedback: er, sendPlaySearchFeedback: ea } = (0, N.z)(),
                    en = (0, d.S)(),
                    es = (0, u.g)(),
                    eo = (0, k.K)(t),
                    el = (0, j.A)(t),
                    { id: ec, name: ed, coverUri: eu, isLiked: em } = t,
                    ev = (0, R.Z)(t.url),
                    [e_, ep] = (0, s.useState)(!1),
                    ex = (0, y.F)(),
                    ef = (0, C.P)(),
                    eh = (0, _.c)((e) => {
                        if ((e.stopPropagation(), ef())) return void e.preventDefault();
                        ($.openArtistTrailer(t.id), ex(l.DomainObjectType.Artist, t.id));
                    }),
                    eA = (0, s.useMemo)(() => {
                        let e = X({ id: 'entity-names.artist-name' }, { artistName: ed }),
                            t = em ? X({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [ed, em, X]),
                    { isPlaying: eb, togglePlay: ek } = (0, P.D)({
                        playContextParams: { contextData: { type: v.K.Artist, meta: { id: Number(ec) }, from: W, utmLink: Y }, loadContextMeta: !0 },
                    }),
                    ej = (0, b.S)({ artist: t, callback: ev }),
                    eC = (0, b.S)({ artist: t, callback: ek }),
                    ey = (0, _.c)((e) => {
                        (null == er || er(), en({ to: l.AppScreen.ArtistScreen }), ej(e));
                    }),
                    eT = (0, g.N)(),
                    eg = (0, _.c)(() => {
                        if (!ef()) {
                            if (eT) return void q.open();
                            (Z || eb || (G(!0), null == ea || ea()), eC(), eb || es());
                        }
                    }),
                    eR = (0, _.c)(() => {
                        (Q || em || (J(!0), null == ei || ei()), eo());
                    }),
                    eN = (0, _.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eP = (0, _.c)((e) => {
                        (et(e), ep(e));
                    }),
                    eL = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(
                                z.g,
                                {
                                    artist: t,
                                    onOpenChange: eP,
                                    open: ee,
                                    onClick: eN,
                                    className: (0, a.$)(K().menuButton, K().control),
                                    size: 's',
                                    icon: (0, r.jsx)(f.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': m.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eN, eP, ee],
                    ),
                    eI = (0, s.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                B.n,
                                {
                                    children: (0, r.jsx)(w.k, {
                                        className: (0, a.$)(K().trailerButton, K().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: eh,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, eh]),
                    eO = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(
                                S.O,
                                { onClick: el, isPinned: t.isPinned, className: (0, a.$)(K().pinButton, K().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, el],
                    ),
                    eM = (0, p.L)(() => {
                        if (t.isAvailable)
                            return (0, r.jsx)(
                                x.hg,
                                {
                                    isVisible: ee || e_,
                                    className: K().controls,
                                    radius: 'round',
                                    playControl: (0, r.jsx)(
                                        E.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, a.$)(K().playButton, K().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eg,
                                            isPlaying: eb,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, r.jsx)(
                                        O.c,
                                        {
                                            className: (0, a.$)(K().likeButton, K().control),
                                            isLiked: em,
                                            onClick: eR,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !V.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eL,
                                    pinControl: eO,
                                    trailerControl: eI,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eS = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(h.t, {
                                className: K().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': m.Kq.artist.ARTIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: K().coverBlock,
                                    onClick: ey,
                                    children: [
                                        (0, r.jsx)(I.B, {
                                            className: K().image,
                                            src: eu,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eA,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eM,
                                    ],
                                }),
                            }),
                        [ey, eu, eA, t.isAvailable, eM],
                    );
                return (0, r.jsx)(x.MN, {
                    ref: H,
                    className: (0, a.$)(K().root, i),
                    textPosition: 'center',
                    'aria-label': eA,
                    title: (0, r.jsxs)(r.Fragment, {
                        children: [
                            U,
                            (0, r.jsx)(A.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, r.jsx)(M.N, {
                                    className: K().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': eA,
                                    onClick: ey,
                                    'data-test-id': m.Kq.artist.ARTIST_TITLE,
                                    children: ed,
                                }),
                            }),
                            F,
                        ],
                    }),
                    srTitle: (0, r.jsx)(M.N, { className: K().srTitleLink, href: t.url, onClick: ey, children: eA }),
                    contentLinesCount: D,
                    view: eS,
                    'data-test-id': m.Kq.artist.ARTIST_ITEM,
                    children: n,
                });
            });
        },
        23324: (e) => {
            e.exports = {
                controls: 'ArtistRecommendationsPromoSmall_controls__gzN7o',
                root: 'ArtistRecommendationsPromoSmall_root__P67oC',
                header: 'ArtistRecommendationsPromoSmall_header__eLjLR',
                carousel: 'ArtistRecommendationsPromoSmall_carousel__W39_x',
                item: 'ArtistRecommendationsPromoSmall_item__phKEX',
            };
        },
        24460: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var r = i(88800),
                a = i(96706),
                n = i(53548),
                s = i(2058),
                o = i(29595),
                l = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(6322);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, l.l)(),
                    { formatMessage: m } = (0, s.A)(),
                    [v, _] = (0, n.useState)(!1);
                return (0, n.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, r.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (v) return;
                    let n = { ...(0, a.HO)(e), url: e.url, isPinned: !e.isPinned };
                    _(!0);
                    let s = await e.togglePin();
                    (_(!1),
                        s
                            ? i((0, r.jsx)(u.l, { playlist: n }), { containerId: o.u.INFO })
                            : i((0, r.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [t.isAuthorized, v, e, i, m]);
            };
        },
        26645: (e, t, i) => {
            'use strict';
            i.d(t, { d: () => a, w: () => n });
            var r = i(53548);
            let a = (0, r.createContext)({ config: [], isOnboardingOpened: null, setIsOnboardingOpened: () => {} }),
                n = () => (0, r.useContext)(a);
        },
        27766: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { y: () => r }),
                (function (e) {
                    ((e.TOP = 'top'), (e.CENTER = 'center'));
                })(r || (r = {})));
        },
        30832: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => s });
            var r = i(88800),
                a = i(15077),
                n = i(42729);
            let s = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, r.jsx)(n.O, {
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
        32703: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => r });
            let r = (e, t) => {
                let i = Math.min(1, Math.abs(e) / t),
                    r = e * (1 - i ** 2 * (3 - 2 * i)),
                    a = Math.max(0, 1 - 2 * i),
                    n = 1 - i;
                return {
                    '--cover-offset': ''.concat(r, 'px'),
                    '--details-offset': ''.concat((e + r) / 3 - e, 'px'),
                    '--glow-offset': ''.concat(-e, 'px'),
                    '--cover-opacity': String(1 - i / 2),
                    '--details-opacity': String(a ** 2 * (3 - 2 * a)),
                    '--glow-opacity': String(n ** 2 * (3 - 2 * n)),
                };
            };
        },
        33724: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => o });
            var r = i(88800),
                a = i(53323),
                n = i(90109),
                s = i(92867);
            let o = (e) => {
                let t = (0, s.U)(n.Q8);
                return (0, r.jsx)(a.F, { ...e, autoplay: { enabled: t, delay: 5e3, stopOnMouseEnter: !0, stopOnFocusIn: !0, stopOnInteraction: !1 } });
            };
        },
        36740: (e, t, i) => {
            'use strict';
            i.d(t, { u: () => m });
            var r = i(53548),
                a = i(59714),
                n = i(24709),
                s = i(23480),
                o = i(94126),
                l = i(8383),
                c = i(18117),
                d = i(93940),
                u = i(46457);
            let m = (0, n.n)({ event: 'Screen.Opened/Closed', kind: 'hook', requiredScopes: ['screen'] }, () => {
                let e = (0, r.useContext)(s.I),
                    { hash: t } = (0, c.g)(),
                    { screen: i, tab: n } = (0, d.j)(),
                    m = (0, r.useContext)(l.k)?.session,
                    { current: v } = (0, r.useRef)(Symbol()),
                    _ = !!i,
                    p = (r) => {
                        if (!e || !m || !i?.pageId || void 0 === t || !_) return !1;
                        let s = {
                            hash: t,
                            pageId: i.pageId,
                            pageStyle: i.pageStyle,
                            pagePlacement: i.pagePlacement,
                            mainObjectType: i.mainObjectType,
                            mainObjectId: i.mainObjectId,
                            skeletonId: i.skeletonId,
                            viewUuid: i.screenViewUuid,
                            ...(n ?? o.Ve),
                        };
                        return (r ? m.open(v, () => (0, a.Fn)(e, s)) : m.close(v, () => (0, a.PO)(e, s)), !0);
                    },
                    [x, f] = (0, r.useState)(() => ({ session: m, send: p, opened: !1 })),
                    h = x;
                (x.session !== m && f((h = { session: m, send: p, opened: !1 })),
                    (0, r.useInsertionEffect)(() => {
                        _ && void 0 !== t && (h.send = p);
                    }, [h, t, _, p]));
                let A = (0, u.c)((e, t) => {
                    e.send(t) && (e.opened = t);
                });
                ((0, r.useEffect)(
                    () => (
                        A(h, !0),
                        () => {
                            (h.opened && A(h, !1), h.session?.release(v));
                        }
                    ),
                    [v, h, A],
                ),
                    (0, r.useEffect)(() => {
                        A(h, !0);
                    }, [h, t, _, A]));
            });
        },
        41911: (e, t, i) => {
            'use strict';
// for PulseSync: BEGIN import the download icon for playlist menu actions

            var pulseSyncPlaylistDownloadIcons = i(52300);
// for PulseSync: END import the download icon for playlist menu actions
            i.d(t, { B: () => J });
            // for PulseSync WebHost: BEGIN imports for native addon context menu items
            var pulseSyncMenuJsx = i(88800),
                pulseSyncMenuItems = i(19934),
                pulseSyncMenuIcons = i(52300);
            // for PulseSync WebHost: END imports for native addon context menu items
            var r = i(88800),
                a = i(65724),
                n = i(84961),
                s = i(53548),
                o = i(2058),
                l = i(97234),
                c = i(91177),
                d = i(70598),
                u = i(46482),
                m = i(17392),
                v = i(18593),
                _ = i(29993),
                p = i(79070),
                x = i(29832),
                f = i(52300),
                h = i(7555),
                A = i(29504),
                b = i(13946),
                k = i(85902),
                j = i(24460),
                C = i(5407),
                y = i(57934),
                T = i(84384),
                g = i(4795),
                R = i(78940),
                N = i(55693),
                P = i(39079),
                L = i(72288),
                I = i(86298),
                O = i(81877),
                M = i(49738),
                S = i(91292),
                E = i(56862),
                w = i(16704),
                B = i(56446),
                z = i(36207),
                D = i(47513),
                K = i(19934),
                U = i(48749),
                F = i(22505),
                H = i(9618),
                $ = i(95210),
                V = i(46936),
                q = i(97956),
                W = i(93091),
                Y = i(27817),
                X = i(15425);
            let Z = (0, n.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: a, open: n, ...s } = e,
                    { shouldShowBuySubscriptionModal: c, showBuySubscriptionModal: d } = (0, H.q)(),
                    {
                        experiments: u,
                        settings: { isMobile: v },
                        trailer: p,
                        user: x,
                    } = (0, L.g)(),
                    f = (0, k.K)(i),
                    h = (0, j.A)(i),
                    A = (0, y.F)(),
                    { formatMessage: b } = (0, o.A)(),
                    T = (0, C.P)(),
                    g = u.checkExperiment(q.z.WebEditorsFeatures, 'on'),
                    R = (0, U.A)({ entityVariant: V.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, $.N)(n);
                let N = (0, _.c)(() => {
                    if (c) return void d();
                    T() || (p.openPlaylistTrailer(i.id), A(l.DomainObjectType.Playlist, i.id));
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
                return (0, r.jsxs)(K.W1, {
                    title: i.title,
                    onOpenChange: a,
                    open: n,
                    offsetOptions: 10,
                    isMobile: v,
                    ariaLabel: b({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: m.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...s,
                    // for PulseSync WebHost: BEGIN inject native addon items into the playlist context menu
                    children: pulseSyncInjectPlaylistMenuItems([
                        g && (0, r.jsx)(F.d, { entityVariant: V.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : R }),
                        !v && (0, r.jsx)(Y.L, { onClick: h, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, r.jsx)(W.T, { onClick: f, isLiked: i.isLiked, disabled: !x.isAuthorized }),
                        // for PulseSync: BEGIN download-to-file action in the playlist context menu
                        (i.tracksCount ?? 1) > 0 &&
                            (0, r.jsx)(K.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, r.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        // for PulseSync: END download-to-file action in the playlist context menu
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, r.jsx)(X.N, { onClick: N, disabled: !i.isAvailable }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the playlist context menu
                });
            });
            var G = i(17657),
                Q = i.n(G);
            let J = (0, n.PA)((e) => {
                let { className: t, playlist: i, children: n, contentLinesCount: K, customDescription: U, onCoverMouseDown: F } = e,
                    H = (0, c.D)(),
                    {
                        trailer: $,
                        user: V,
                        paywall: { modal: q },
                    } = (0, L.g)(),
                    { from: W, utmLink: Y } = (0, T.f)({ contextId: i.uuid, contextType: v.K.Playlist }),
                    { formatMessage: X } = (0, o.A)(),
                    { sendLikeSearchFeedback: G, sendNavigateSearchFeedback: J, sendPlaySearchFeedback: ee } = (0, N.z)(),
                    [et, ei] = (0, s.useState)(!1),
                    [er, ea] = (0, s.useState)(!1),
                    [en, es] = (0, s.useState)(!1),
                    eo = (0, D.r)(i),
                    el = (0, k.K)(i),
                    ec = (0, j.A)(i),
                    ed = (0, d.S)(),
                    eu = (0, u.g)(),
                    em = (0, R.Z)(i.url),
                    ev = (0, y.F)(),
                    e_ = (0, C.P)(),
                    ep = (0, _.c)((e) => {
                        if ((e.stopPropagation(), e_())) return void e.preventDefault();
                        ($.setUtmLink(Y), $.openPlaylistTrailer(i.id), ev(l.DomainObjectType.Playlist, i.id));
                    }),
                    [ex, ef] = (0, s.useState)(!1),
                    { isPlaying: eh, togglePlay: eA } = (0, P.D)({
                        playContextParams: { contextData: { type: v.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: W, utmLink: Y }, loadContextMeta: !0 },
                    }),
                    eb = (0, _.c)(() => {
                        (ed({ to: l.AppScreen.PlaylistScreen }), null == J || J());
                    }),
                    ek = (0, _.c)((e) => {
                        (eb(), em(e));
                    }),
                    ej = (0, g.N)(),
                    eC = (0, _.c)(() => {
                        if (!e_()) {
                            if (ej) return void q.open();
                            (et || eh || (ei(!0), null == ee || ee()), eA(), eh || eu());
                        }
                    }),
                    ey = (0, _.c)(() => {
                        (er || i.isLiked || (ea(!0), null == G || G()), el());
                    }),
                    eT = (0, _.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eg = (0, _.c)((e) => {
                        (es(e), ef(e));
                    }),
                    eR = (0, s.useMemo)(() => {
                        var e;
                        return U
                            ? (0, r.jsx)(A.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: U }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, r.jsx)(
                                    b.i,
                                    { className: Q().artists, artists: i.artists, lineClamp: 1, linkClassName: Q().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [U, i]),
                    eN = (0, p.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, r.jsx)(
                                M.c,
                                {
                                    className: (0, a.$)(Q().likeButton, Q().control),
                                    isLiked: i.isLiked,
                                    onClick: ey,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !V.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eP = (0, s.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                z.n,
                                {
                                    children: (0, r.jsx)(
                                        B.k,
                                        { className: (0, a.$)(Q().trailerButton, Q().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: ep },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [ep, i]),
                    eL = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(
                                E.O,
                                { onClick: ec, isPinned: i.isPinned, className: (0, a.$)(Q().pinButton, Q().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ec, i],
                    ),
                    eI = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(h.t, {
                                className: Q().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': m.Kq.playlist.PLAYLIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: Q().coverBlock,
                                    onClick: ek,
                                    onMouseDown: F,
                                    children: [
                                        (0, r.jsx)(O.B, {
                                            className: Q().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eo,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, r.jsx)(x.hg, {
                                            isVisible: en || ex,
                                            className: Q().controls,
                                            playControl: (0, r.jsx)(
                                                w.D,
                                                {
                                                    className: (0, a.$)(Q().playButton, Q().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: eC,
                                                    isPlaying: eh,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eN,
                                            menuControl: (0, r.jsx)(
                                                Z,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eg,
                                                    open: en,
                                                    onClick: eT,
                                                    className: (0, a.$)(Q().menuButton, Q().control),
                                                    icon: (0, r.jsx)(f.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': m.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eL,
                                            trailerControl: eP,
                                        }),
                                    ],
                                }),
                            }),
                        [ek, F, i, eo, en, ex, eC, eh, eN, eg, eT, eL, eP],
                    ),
                    eO = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, r.jsxs)(x.MN, {
                    ref: H,
                    'aria-label': eo,
                    className: (0, a.$)(Q().root, t),
                    title: (0, r.jsx)(A.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': m.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, r.jsx)(S.N, { className: Q().titleLink, href: i.url, tabIndex: -1, onClick: eb, children: i.title }),
                    }),
                    srTitle: (0, r.jsx)(S.N, { className: Q().srTitleLink, href: i.url, onClick: eb, children: i.title }),
                    contentLinesCount: K,
                    view: eI,
                    description: eR,
                    'data-test-id': m.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eO &&
                            (0, r.jsx)(I.x, {
                                ariaLabel: X({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: el,
                            }),
                        n,
                    ],
                });
            });
        },
        42592: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => l });
            var r = i(53548),
                a = i(24709),
                n = i(18117),
                s = i(88966),
                o = i(87138);
            let l = (0, a.n)({ event: 'LandingBlock.Loaded', kind: 'hook', requiredScopes: ['screen', 'block'] }, ({ enabled: e = !0 } = {}) => {
                let t = (0, r.useRef)(!1),
                    i = (0, s.N)(),
                    { hash: a } = (0, n.g)(),
                    l = (0, o.w)(),
                    c = (0, r.useMemo)(() => (l ? i.createBlockReporter(l.snapshot) : null), [i, l]);
                (0, r.useEffect)(() => {
                    e && l && c && !t.current && c.loaded({ objectsCount: l.snapshot.block.objectsCount, viewUuid: l.block.loadedSession.start() }) && (t.current = !0);
                }, [e, a, c, l]);
            });
        },
        43161: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => G });
            var r = i(88800),
                a = i(84961),
                n = i(2058),
                s = i(97234),
                o = i(17392),
                l = i(18593),
                c = i(29993),
                d = i(52300),
                u = i(19934),
                m = i(96706),
                v = i(53548),
                _ = i(79390),
                p = i(29595),
                x = i(74965),
                f = i(72288),
                h = i(66943),
                A = i(7555),
                b = i(73170),
                k = i(29504),
                j = i(59304),
                C = i(81877),
                y = i(85074),
                T = i.n(y);
            let g = (e) => {
                let { coverUri: t, title: i, isDisliked: a, closeToast: s } = e,
                    { formatMessage: o } = (0, n.A)(),
                    l = o(a ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, r.jsx)(j.$, {
                    closeToast: s,
                    message: (0, r.jsxs)('div', {
                        className: T().message,
                        children: [
                            (0, r.jsx)(b.q, { children: (0, r.jsx)('p', { role: 'alert', 'aria-label': l }) }),
                            (0, r.jsx)(A.t, {
                                className: T().cover,
                                radius: 'round',
                                children: (0, r.jsx)(C.B, { className: T().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, r.jsx)(k.HL, { className: T().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: l }),
                        ],
                    }),
                });
            };
            var R = i(64207),
                N = i(77455),
                P = i(48749),
                L = i(22505),
                I = i(5407),
                O = i(64284),
                M = i(98427),
                S = i(57934),
                E = i(84384),
                w = i(9618),
                B = i(95210),
                z = i(47964),
                D = i(46936),
                K = i(97956),
                U = i(98953),
                F = i(32721),
                H = i(18130),
                $ = i(56117),
                V = i(93091),
                q = i(27817),
                W = i(74064),
                Y = i(15425),
                X = i(81066),
                Z = i(64546);
            let G = (0, a.PA)((e) => {
                var t, i, a;
                let { artist: A, onOpenChange: b, open: k, ...j } = e,
                    { shouldShowBuySubscriptionModal: C, showBuySubscriptionModal: y } = (0, w.q)(),
                    {
                        settings: { isMobile: T },
                        modals: { artistAboutModal: G },
                        trailer: Q,
                        user: J,
                        experiments: ee,
                    } = (0, f.g)(),
                    et = (0, N.A)(A),
                    ei = (0, R.K)(A),
                    er = ((e) => {
                        let { user: t } = (0, f.g)(),
                            { notify: i } = (0, x.l)(),
                            [a, s] = (0, v.useState)(!1),
                            { formatMessage: o } = (0, n.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, r.jsx)(h.h, { error: o({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: p.u.ERROR });
                            if (a) return;
                            let n = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            s(!0);
                            let l = await e.toggleDislike();
                            (s(!1),
                                l === _.f.OK
                                    ? i((0, r.jsx)(g, { coverUri: n.coverUri, title: n.name, isDisliked: n.isDisliked }), { containerId: p.u.INFO })
                                    : i((0, r.jsx)(h.h, { error: o({ id: 'error-messages.error-during-action' }) }), { containerId: p.u.ERROR }));
                        });
                    })(A),
                    ea = (0, S.F)(),
                    en = ''.concat(O.U.ARTIST, '-').concat(null == A ? void 0 : A.id),
                    { formatMessage: es } = (0, n.A)(),
                    { utmLink: eo } = (0, E.f)({ blockId: O.U.ARTIST, contextType: l.K.Artist, contextId: null == A ? void 0 : A.id }),
                    { shareLink: el, pathname: ec } = (0, H.b)('/artist/:artistId', { params: { artistId: null != (i = null == A ? void 0 : A.id) ? i : '' } }),
                    ed = (0, P.A)({ entityVariant: D.D.ARTIST, urlParams: { id: null == A ? void 0 : A.id } }),
                    { isPlaying: eu, togglePlay: em } = (0, z.B)({
                        seeds: null != (a = null == A ? void 0 : A.seeds) ? a : [],
                        pageIdForFrom: M.b.RADIO,
                        blockIdForFrom: en,
                        parentContextId: null == A ? void 0 : A.id,
                    }),
                    ev = (0, I.P)(),
                    e_ = es((null == A ? void 0 : A.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    ep = (0, c.c)(() => {
                        if (C && J.isAuthorized) return void y();
                        eu || em();
                    }),
                    ex = (0, c.c)(() => {
                        if (!ev()) {
                            if (C) return void y();
                            (null == A ? void 0 : A.id) && (Q.setUtmLink(eo), Q.openArtistTrailer(A.id), ea(s.DomainObjectType.Artist, A.id));
                        }
                    }),
                    ef = (0, c.c)(() => {
                        G.open(null == A ? void 0 : A.id);
                    });
                (0, B.N)(k);
                let eh = { variant: U.Y.ARTIST, id: null == A ? void 0 : A.id, title: null == A ? void 0 : A.name, path: ec },
                    eA = ee.checkExperiment(K.z.WebEditorsFeatures, 'on'),
                    eb = null == A || null == (t = A.trailer) ? void 0 : t.isAvailable,
                    ek = ee.checkExperiment(K.z.WebNextArtistInfo, 'on'),
                    ej = !ee.checkExperiment(K.z.WebNextProductWithoutRecommendation, 'on');
                return (0, r.jsxs)(u.W1, {
                    isMobile: T,
                    offsetOptions: 10,
                    open: k,
                    onOpenChange: b,
                    ariaLabel: es({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: o.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...j,
                    children: [
                        eA && (0, r.jsx)(Z.WithOffline, { fallback: (0, r.jsx)(L.d, { entityVariant: D.D.ARTIST, adminUrl: ed }) }),
                        !T && (0, r.jsx)(Z.WithOffline, { fallback: (0, r.jsx)(q.L, { onClick: et, isPinned: null == A ? void 0 : A.isPinned }) }),
                        (0, r.jsx)(Z.WithOffline, {
                            fallback: (0, r.jsx)(V.T, {
                                onClick: ei,
                                isLiked: null == A ? void 0 : A.isLiked,
                                disabled: !J.isAuthorized || !(null == A ? void 0 : A.isAvailable),
                            }),
                        }),
                        eb && (0, r.jsx)(Z.WithOffline, { fallback: (0, r.jsx)(Y.N, { onClick: ex }) }),
                        ej &&
                            (0, r.jsx)(Z.WithOffline, {
                                fallback: (0, r.jsx)(X.C, { onClick: ep, disabled: !(null == A ? void 0 : A.isAvailable), variant: F.I.ARTIST, onOpenMenuChange: b }),
                            }),
                        (0, r.jsx)(W.H, { disabled: !A, shareLink: el, entityMeta: eh }),
                        ek &&
                            (0, r.jsx)(Z.WithOffline, {
                                fallback: (0, r.jsx)(u.Dr, {
                                    onClick: ef,
                                    icon: (0, r.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': o.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: e_,
                                }),
                            }),
                        (0, r.jsx)(Z.WithOffline, {
                            fallback: (0, r.jsx)($.D, { onClick: er, isDisliked: null == A ? void 0 : A.isDisliked, disabled: !(null == A ? void 0 : A.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        47234: (e) => {
            e.exports = {
                root: 'ArtistRecommendationCard_root__xEvp3',
                cardLink: 'ArtistRecommendationCard_cardLink__oqxtE',
                info: 'ArtistRecommendationCard_info__CfnQI',
                playButton: 'ArtistRecommendationCard_playButton__pVx58',
                playIcon: 'ArtistRecommendationCard_playIcon__xNRJz',
            };
        },
        47513: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => n });
            var r = i(53548),
                a = i(2058);
            let n = (e) => {
                let { formatMessage: t } = (0, a.A)();
                return (0, r.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let r = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(r, ' ').concat(i);
                }, [t, e]);
            };
        },
        49034: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => c });
            var r = i(53548),
                a = i(8840),
                n = i(4086),
                s = i(41928),
                o = i(39318),
                l = i(26645);
            let c = (e) => {
                var t;
                let { id: i, ref: c, intersectionPropertyId: d = o.N } = e,
                    { config: u, isOnboardingOpened: m, setIsOnboardingOpened: v } = (0, l.w)(),
                    _ = (0, r.useRef)(!1),
                    p = (0, a.BL)([{ current: c }], !c),
                    { isIntersecting: x } = null != (t = p[d]) ? t : {},
                    f = (0, s.N)().get(n.U2);
                for (let { id: e, storageKey: t, enabled: a } of ((0, r.useEffect)(() => {
                    if (_.current && x) {
                        let e = u.find((e) => {
                            let { id: t } = e;
                            return t === i;
                        });
                        e && f.set(e.storageKey, !0, { expires: e.expires });
                    }
                }, [u, i, x, f, p, c]),
                u)) {
                    let r = f.get(t);
                    if (a) {
                        if (null == m ? void 0 : m.current) return !1;
                        if (i === e) {
                            if (r) return !1;
                            return ((_.current = !0), v(!0), !0);
                        }
                        if (!r) break;
                    }
                }
                return !1;
            };
        },
        50493: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => f });
            var r = i(88800),
                a = i(84961),
                n = i(53548),
                s = i(97234),
                o = i(42592),
                l = i(90852),
                c = i(42078),
                d = i(10079),
                u = i(21256),
                m = i(41911),
                v = i(84200),
                _ = i(99839),
                p = i(47934);
            let x = (0, a.PA)((e) => {
                    var t;
                    let {
                        forwardRef: i,
                        isShimmerVisible: a,
                        isShimmerActive: x,
                        containerClassName: f,
                        headerClassName: h,
                        meta: A,
                        data: b,
                        headingVariant: k,
                        className: j,
                        isLoaded: C,
                        shouldSendAnalyticsOnLoaded: y,
                        ...T
                    } = e;
                    return (
                        (0, o.W)({ enabled: !!y && C }),
                        (0, r.jsx)(p.O, {
                            className: j,
                            ...T,
                            isShimmerVisible: a,
                            isShimmerActive: x,
                            containerClassName: f,
                            headerClassName: h,
                            title: A.title,
                            description: A.description,
                            viewAllActionLink: A.viewAllActionLink,
                            ref: i,
                            headingVariant: k,
                            children:
                                null == b || null == (t = b.items)
                                    ? void 0
                                    : t.map((e, t) => {
                                          switch (e.type) {
                                              case c._.LIKED_PLAYLIST_ITEM:
                                                  return (0, r.jsx)(
                                                      l.B,
                                                      {
                                                          objectType: s.DomainObjectType.Playlist,
                                                          objectId: e.data.id,
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          children: (0, r.jsx)(m.B, { playlist: e.data, contentLinesCount: 3 }),
                                                      },
                                                      e.data.key,
                                                  );
                                              case c._.ALBUM_ITEM:
                                                  return (0, r.jsx)(
                                                      l.B,
                                                      {
                                                          objectType: s.DomainObjectType.Album,
                                                          objectId: String(e.data.id),
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          children: (0, r.jsx)(d.a, { album: e.data, contentLinesCount: 3, releaseDateFormatter: _.m }),
                                                      },
                                                      e.data.id,
                                                  );
                                              case c._.ARTIST_ITEM:
                                                  return (0, r.jsx)(
                                                      l.B,
                                                      {
                                                          objectType: s.DomainObjectType.Artist,
                                                          objectId: String(e.data.id),
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          children: (0, r.jsx)(u.a, { artist: e.data, contentLinesCount: 3 }),
                                                      },
                                                      e.data.id,
                                                  );
                                              case c._.WAVE_AGENT_ITEM:
                                                  return (0, r.jsx)(
                                                      l.B,
                                                      {
                                                          objectType: s.DomainObjectType.Wave,
                                                          objectId: e.data.stationId,
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          children: (0, r.jsx)(v.y, { vibe: e.data }),
                                                      },
                                                      e.data.stationId,
                                                  );
                                              case c._.PLAYLIST_ITEM:
                                                  return (0, r.jsx)(
                                                      l.B,
                                                      {
                                                          objectType: s.DomainObjectType.Playlist,
                                                          objectId: e.data.id,
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          children: (0, r.jsx)(m.B, { playlist: e.data, contentLinesCount: 3 }),
                                                      },
                                                      e.data.key,
                                                  );
                                              case c._.QUERY_TO_VIBE_ITEM:
                                                  return (0, r.jsx)(n.Fragment, {}, e.data.stationId);
                                          }
                                      }),
                        })
                    );
                }),
                f = (0, n.forwardRef)((e, t) => (0, r.jsx)(x, { forwardRef: t, ...e }));
        },
        52455: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => c });
            var r,
                a = i(53548),
                n = {
                    1848: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            }));
                    },
                    810: (e) => {
                        e.exports = r || (r = i.t(a, 2));
                    },
                },
                s = {};
            function o(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var i = (s[e] = { exports: {} });
                return (n[e](i, i.exports, o), i.exports);
            }
            var l = {};
            ((() => {
                (Object.defineProperty(l, '__esModule', { value: !0 }), (l.useResize = void 0));
                let e = o(810),
                    t = o(1848);
                l.useResize = (i, r) => {
                    (0, e.useEffect)(() => {
                        let e = (0, t.getElementFromRefOrElement)(r);
                        if (null === e) return;
                        let a = null != e ? e : document.documentElement,
                            n = new ResizeObserver(i);
                        return (n.observe(a), () => n.disconnect());
                    }, [r, i]);
                };
            })(),
                l.__esModule);
            var c = l.useResize;
        },
        53451: (e) => {
            e.exports = {
                root: 'ArtistRecommendationMeta_root__dC_aM',
                artists: 'ArtistRecommendationMeta_artists__niyXH',
                titleContainer: 'ArtistRecommendationMeta_titleContainer__d6sv6',
                title: 'ArtistRecommendationMeta_title__c1754',
                explicitMark: 'ArtistRecommendationMeta_explicitMark__OS5kY',
                avatars: 'ArtistRecommendationMeta_avatars__BxEpG',
                avatar: 'ArtistRecommendationMeta_avatar__C_PmW',
                artistNames: 'ArtistRecommendationMeta_artistNames__XOYKP',
                artistCaption: 'ArtistRecommendationMeta_artistCaption__eCGdG',
                root_active: 'ArtistRecommendationMeta_root_active__gqS_L',
            };
        },
        54243: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => o });
            var r = i(88800),
                a = i(4370),
                n = i(15077),
                s = i(42729);
            let o = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, r.jsx)(s.O, {
                    closeToast: i,
                    entityVariant: n.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: a.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        57072: (e, t) => {
            'use strict';
            t.f = Object.freeze({ xxxxs: 320, xxxs: 480, xxs: 768, xs: 960, s: 1060, m: 1280, l: 1366, xl: 1920, xxl: 2560, xxxl: 3840, tablet: 1024 });
        },
        62960: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => s });
            var r = i(53548),
                a = i(8840);
            let n = (e) => {
                    let t,
                        { callback: i, visibleTime: r, threshold: n } = e;
                    return (0, a.Gv)(
                        (e, a) => {
                            (e.isIntersecting &&
                                (t = setTimeout(() => {
                                    (i(), a.disconnect());
                                }, r)),
                                e.isIntersecting || clearTimeout(t));
                        },
                        { threshold: n },
                    );
                },
                s = (e) => {
                    let { params: t, isLoaded: i } = e,
                        a = (0, r.useRef)(null),
                        s = (0, r.useId)(),
                        o = (0, r.useMemo)(() => {
                            if (i) return t.map(n);
                        }, [i, t]);
                    return (
                        (0, r.useEffect)(
                            () => (
                                null == o ||
                                    o.forEach((e) => {
                                        a.current && e.observe(a.current);
                                    }),
                                () => {
                                    null == o ||
                                        o.forEach((e) => {
                                            e.disconnect();
                                        });
                                }
                            ),
                            [o],
                        ),
                        { intersectionPropertyId: s, ref: a }
                    );
                };
        },
        64207: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => v });
            var r = i(88800),
                a = i(96706),
                n = i(53548),
                s = i(2058),
                o = i(79390),
                l = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                m = i(54243);
            let v = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [v, _] = (0, n.useState)(!1),
                    { formatMessage: p } = (0, s.A)();
                return (0, n.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, r.jsx)(u.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (v) return;
                    let n = { ...(0, a.HO)(e), isLiked: !e.isLiked };
                    _(!0);
                    let s = await e.toggleLike();
                    (_(!1),
                        s === o.f.OK
                            ? i((0, r.jsx)(m.T, { artist: n }), { containerId: l.u.INFO })
                            : i((0, r.jsx)(u.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, t.isAuthorized, v, p, i]);
            };
        },
        64247: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => s });
            var r = i(88800),
                a = i(15077),
                n = i(33719);
            let s = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, r.jsx)(n.k, {
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
        72714: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => Y });
            var r = i(88800),
                a = i(65724),
                n = i(84961),
                s = i(53548),
                o = i(35412),
                l = i(97234),
                c = i(90852),
                d = i(17392),
                u = i(53323),
                m = i(72288),
                v = i(97956),
                _ = i(18486),
                p = i(31764),
                x = i(29993),
                f = i(52455),
                h = i(79070),
                A = i(90109),
                b = i(92867),
                k = i(32703),
                j = i(74804),
                C = i(33724),
                y = i(91177),
                T = i(83295),
                g = i(91292),
                R = i(16704),
                N = i(13988),
                P = i(76636),
                L = i(27766),
                I = i(81877),
                O = i(4550),
                M = i(92227),
                S = i.n(M);
            let E = (0, n.PA)((e) => {
                let { promo: t, isActive: i } = e,
                    n = (0, s.useMemo)(() => (0, O.d)(t.averageColor), [t.averageColor]);
                return (0, r.jsx)('div', {
                    className: (0, a.$)(S().root, { [S().root_active]: i }),
                    style: n,
                    children: (0, r.jsx)('div', {
                        className: S().coverContainer,
                        children: (0, r.jsx)(I.B, {
                            className: (0, a.$)(S().cover, { [S().cover_withTopPosition]: t.coverContentMode === L.y.TOP }),
                            src: t.album.coverUri,
                            withAvatarReplace: !0,
                            withAspectRatio: !0,
                            size: 600,
                            fit: 'cover',
                            'aria-hidden': !0,
                        }),
                    }),
                });
            });
            var w = i(29504),
                B = i(13946),
                z = i(90224),
                D = i(53451),
                K = i.n(D);
            let U = (0, n.PA)((e) => {
                let { promo: t, isActive: i } = e;
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(K().root, { [K().root_active]: i }),
                    children: [
                        (0, r.jsxs)('div', {
                            className: K().titleContainer,
                            children: [
                                (0, r.jsx)(w.DZ, { variant: 'div', size: 'xs', lineClamp: 2, className: K().title, children: t.album.title }),
                                t.album.explicitDisclaimer &&
                                    (0, r.jsx)(z.N, {
                                        containerClassName: K().explicitMark,
                                        getDescriptionTexts: t.album.getDescriptionTexts,
                                        variant: t.album.explicitDisclaimer,
                                        size: 'xxxs',
                                    }),
                            ],
                        }),
                        (0, r.jsxs)('div', {
                            className: K().artists,
                            children: [
                                t.avatarArtists.length > 0 &&
                                    (0, r.jsx)('div', {
                                        className: K().avatars,
                                        'aria-hidden': !0,
                                        children: t.avatarArtists.map((e) =>
                                            (0, r.jsx)(I.B, { className: K().avatar, src: e.coverUri, size: 50, fit: 'cover', withAvatarReplace: !0, alt: '' }, e.key),
                                        ),
                                    }),
                                (0, r.jsx)(B.i, {
                                    className: K().artistNames,
                                    captionClassName: K().artistCaption,
                                    artists: t.artists,
                                    lineClamp: 1,
                                    captionSize: 'm',
                                    withLink: !1,
                                }),
                            ],
                        }),
                    ],
                });
            });
            var F = i(953),
                H = i.n(F);
            let $ = (0, n.PA)((e) => {
                let { promo: t, isActive: i, isScrollAnimationEnabled: n } = e,
                    s = (0, y.D)(),
                    { ref: o } = (0, P.H)({ promo: t }),
                    { isPlaying: l, handleNavigate: c, handlePlayButtonClick: u } = (0, N.Z)({ promo: t }),
                    m = (0, T.S)([s, o]),
                    v = (0, x.c)((e) => {
                        n && !i && e.currentTarget.scrollIntoView({ block: 'nearest', inline: 'center' });
                    });
                return (0, r.jsxs)('div', {
                    ref: m,
                    className: (0, a.$)(H().root, { [H().root_active]: i }),
                    onFocus: v,
                    'data-test-id': d.e8.landing.ARTIST_RECOMMENDATION_CARD,
                    children: [
                        (0, r.jsxs)(g.N, {
                            className: H().cardLink,
                            href: t.albumUrl,
                            onClick: c,
                            'data-test-id': d.e8.landing.ARTIST_RECOMMENDATION_CARD_LINK,
                            children: [(0, r.jsx)(E, { promo: t, isActive: i }), (0, r.jsx)(U, { promo: t, isActive: i })],
                        }),
                        (0, r.jsx)(R.D, {
                            className: H().playButton,
                            buttonVariant: 'default',
                            color: 'primary',
                            size: 'm',
                            iconSize: 'xs',
                            isPlaying: l,
                            onClick: u,
                            disabled: !t.album.isAvailable,
                        }),
                    ],
                });
            });
            var V = i(10448),
                q = i.n(V);
            let W = (0, n.PA)((e) => {
                    var t;
                    let {
                            forwardRef: i,
                            data: n,
                            isLoaded: y,
                            setOutdated: T,
                            meta: g,
                            className: R,
                            containerClassName: N,
                            headerClassName: P,
                            headingVariant: L,
                            ...I
                        } = e,
                        { experiments: O } = (0, m.g)(),
                        {
                            carouselRef: M,
                            activeIndex: S,
                            isScrollAnimationEnabled: E,
                            onScroll: w,
                        } = ((e) => {
                            let t = (0, s.useRef)(null),
                                i = (0, s.useRef)(null),
                                [r, a] = (0, s.useState)(0),
                                n = (0, b.U)(A.Q8),
                                o = (0, x.c)(() => {
                                    n &&
                                        null === i.current &&
                                        (i.current = requestAnimationFrame(() => {
                                            i.current = null;
                                            let e = t.current;
                                            if (!e) return;
                                            let n = e.getBoundingClientRect(),
                                                s = Array.from(e.children),
                                                o = ((e, t) => {
                                                    let i = e.left + e.width / 2,
                                                        r = 0,
                                                        a = 1 / 0,
                                                        n = t.map((e, t) => {
                                                            if (!e || !e.width) return null;
                                                            let n = e.left + e.width / 2 - i,
                                                                s = Math.abs(n);
                                                            return (s < a && ((r = t), (a = s)), (0, k.A)(n, e.width));
                                                        });
                                                    return { activeIndex: r, itemStyles: n };
                                                })(
                                                    n,
                                                    s.map((e) => (e instanceof HTMLElement ? e.getBoundingClientRect() : null)),
                                                );
                                            (s.forEach((e, t) => {
                                                let i = o.itemStyles[t];
                                                if (e instanceof HTMLElement && i) for (let [t, r] of Object.entries(i)) e.style.setProperty(t, r);
                                            }),
                                                o.activeIndex !== r && a(o.activeIndex));
                                        }));
                                });
                            return (
                                (0, f.s)(o, t),
                                (0, s.useEffect)(
                                    () => (
                                        o(),
                                        () => {
                                            null !== i.current && (cancelAnimationFrame(i.current), (i.current = null));
                                        }
                                    ),
                                    [e, o, n],
                                ),
                                (0, h.L)(() => ({ carouselRef: t, activeIndex: r, isScrollAnimationEnabled: n, onScroll: o }))
                            );
                        })(null != (t = null == n ? void 0 : n.items.length) ? t : 0),
                        { ref: B, intersectionPropertyId: z } = (0, j.J)({ data: n, isLoaded: y, setOutdated: T, forwardedRef: i }),
                        D = O.checkExperiment(v.z.WebNextArtistRecommendationsAutoScroll, 'on') ? C.i : u.F;
                    return (0, r.jsxs)('section', {
                        className: (0, a.$)(q().root, R),
                        ref: B,
                        'data-intersection-property-id': z,
                        ...(0, o.OZ)(I),
                        children: [
                            (0, r.jsx)(_.T, {
                                className: (0, a.$)(q().header, P),
                                title: g.title,
                                headingVariant: L,
                                controls: (0, r.jsx)(p.X, { className: q().controls, carouselRef: M }),
                            }),
                            (0, r.jsx)(D, {
                                ref: M,
                                className: (0, a.$)(q().carousel, q().important, N),
                                itemClassName: q().item,
                                onScroll: w,
                                'data-test-id': d.e8.landing.ARTIST_RECOMMENDATIONS_PROMO_CAROUSEL,
                                children:
                                    null == n
                                        ? void 0
                                        : n.items.map((e, t) =>
                                              (0, r.jsx)(
                                                  c.B,
                                                  {
                                                      objectType: l.DomainObjectType.Album,
                                                      objectId: String(e.album.id),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      children: (0, r.jsx)($, { promo: e, isActive: t === S, isScrollAnimationEnabled: E }),
                                                  },
                                                  e.album.getKey(t),
                                              ),
                                          ),
                            }),
                        ],
                    });
                }),
                Y = (0, s.forwardRef)((e, t) => (0, r.jsx)(W, { forwardRef: t, ...e }));
        },
        74804: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => o });
            var r = i(53548),
                a = i(29993),
                n = i(83295),
                s = i(62960);
            let o = (e) => {
                var t, i;
                let { data: o, isLoaded: l, forwardedRef: c, setOutdated: d } = e,
                    { report: u, reporting: m } = null != o ? o : {},
                    v = null == m ? void 0 : m.blockRender.url,
                    _ = null != (t = null == m ? void 0 : m.blockRender.timeMs) ? t : 0,
                    p = null == m ? void 0 : m.blockImpression.url,
                    x = null != (i = null == m ? void 0 : m.blockImpression.timeMs) ? i : 2100,
                    f = (0, a.c)(d),
                    h = (0, r.useMemo)(
                        () => [
                            {
                                threshold: 0,
                                visibleTime: _,
                                callback: () => {
                                    v && (null == u || u(v));
                                },
                            },
                            {
                                threshold: 0.5,
                                visibleTime: x,
                                callback: () => {
                                    (p && (null == u || u(p)), f());
                                },
                            },
                        ],
                        [v, _, p, x, u, f],
                    ),
                    { ref: A, intersectionPropertyId: b } = (0, s.h)({ isLoaded: l, params: h });
                return { ref: (0, n.S)([A, c]), intersectionPropertyId: b };
            };
        },
        76636: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => n });
            var r = i(53548),
                a = i(62960);
            let n = (e) => {
                let { promo: t } = e,
                    { adImpressions: i, reportImpression: n } = t,
                    { url: s, timeMs: o } = i,
                    l = (0, r.useMemo)(
                        () => [
                            {
                                threshold: 0,
                                visibleTime: o,
                                callback: () => {
                                    s && n();
                                },
                            },
                        ],
                        [n, s, o],
                    ),
                    { ref: c } = (0, a.h)({ isLoaded: !0, params: l });
                return { ref: c };
            };
        },
        77356: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => r });
            var r = (function (e) {
                return ((e.ARTIST_DONATION_BUTTON = 'artist_donation_button'), (e.TRAILER_BUTTON = 'trailer_button'), (e.CONCERTS_TAB = 'concerts_tab'), e);
            })({});
        },
        77455: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var r = i(88800),
                a = i(96706),
                n = i(53548),
                s = i(2058),
                o = i(29595),
                l = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(64247);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, l.l)(),
                    { formatMessage: m } = (0, s.A)(),
                    [v, _] = (0, n.useState)(!1);
                return (0, n.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, r.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (v) return;
                    let n = { ...(0, a.HO)(e), isPinned: !e.isPinned };
                    _(!0);
                    let s = await e.togglePin();
                    (_(!1),
                        s
                            ? i((0, r.jsx)(u.l, { artist: n }), { containerId: o.u.INFO })
                            : i((0, r.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, v, m, i]);
            };
        },
        81862: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => o });
            var r = i(88800),
                a = i(53548),
                n = i(24709),
                s = i(30958);
            let o = (0, n.B)(
                { kind: 'provider', requiredProps: ['tabId', 'tabPos', 'isTabSelectedByDefault'], scope: 'tab' },
                ({ children: e, isTabSelectedByDefault: t, tabId: i, tabPos: n }) => {
                    let o = (0, a.useMemo)(() => ({ isTabSelectedByDefault: t, tabId: i, tabPos: n }), [t, i, n]);
                    return (0, r.jsx)(s.F, { value: o, children: e });
                },
            );
        },
        83295: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => o });
            var r = i(87819),
                a = {
                    1964: (e) => {
                        e.exports = r;
                    },
                },
                n = {},
                s = {};
            ((() => {
                (Object.defineProperty(s, '__esModule', { value: !0 }), (s.useMergeRefs = void 0));
                var e = (function e(t) {
                    var i = n[t];
                    if (void 0 !== i) return i.exports;
                    var r = (n[t] = { exports: {} });
                    return (a[t](r, r.exports, e), r.exports);
                })(1964);
                Object.defineProperty(s, 'useMergeRefs', {
                    enumerable: !0,
                    get: function () {
                        return e.useMergeRefs;
                    },
                });
            })(),
                s.__esModule);
            var o = s.useMergeRefs;
        },
        83680: (e) => {
            e.exports = {
                avatars: 'ArtistRecommendationMeta_avatars__V_d1k',
                avatar: 'ArtistRecommendationMeta_avatar__eMG0L',
                artistNames: 'ArtistRecommendationMeta_artistNames__U_jyi',
                title: 'ArtistRecommendationMeta_title__nJC7r',
                title_truncated: 'ArtistRecommendationMeta_title_truncated__JCiKf',
                artistCaption: 'ArtistRecommendationMeta_artistCaption__aSIht',
                titleContainer: 'ArtistRecommendationMeta_titleContainer__P1l5b',
                explicitMark: 'ArtistRecommendationMeta_explicitMark__xtdrP',
            };
        },
        83961: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => c });
            var r,
                a = i(53548),
                n = {
                    792: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useCallbackRef = void 0));
                        let r = i(810);
                        t.useCallbackRef = function (e) {
                            let t = (0, r.useRef)({
                                stableFn: function () {
                                    for (var e = arguments.length, i = Array(e), r = 0; r < e; r++) i[r] = arguments[r];
                                    return t.current.callback(...i);
                                },
                                callback: e,
                            });
                            return (
                                (0, r.useInsertionEffect)(() => {
                                    t.current.callback = e;
                                }),
                                t.current.stableFn
                            );
                        };
                    },
                    588: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useResize = void 0));
                        let r = i(810),
                            a = i(1848);
                        t.useResize = (e, t) => {
                            (0, r.useEffect)(() => {
                                let i = (0, a.getElementFromRefOrElement)(t);
                                if (null === i) return;
                                let r = null != i ? i : document.documentElement,
                                    n = new ResizeObserver(e);
                                return (n.observe(r), () => n.disconnect());
                            }, [t, e]);
                        };
                    },
                    1848: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            }));
                    },
                    810: (e) => {
                        e.exports = r || (r = i.t(a, 2));
                    },
                },
                s = {};
            function o(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var i = (s[e] = { exports: {} });
                return (n[e](i, i.exports, o), i.exports);
            }
            var l = {};
            ((() => {
                (Object.defineProperty(l, '__esModule', { value: !0 }), (l.useTruncate = void 0));
                let e = o(810),
                    t = o(588),
                    i = o(792);
                l.useTruncate = function (r) {
                    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'vertical',
                        [n, s] = (0, e.useState)(0),
                        [o, l] = (0, e.useState)(!1);
                    (0, e.useEffect)(() => {
                        var e;
                        let t = null == (e = r.current) ? void 0 : e.offsetHeight;
                        n || !t || ('vertical' === a && s(t));
                    }, [n, a, r]);
                    let c = (0, i.useCallbackRef)(() => {
                        let e = r.current;
                        e && ('horizontal' === a && l(e.scrollWidth > e.clientWidth), 'vertical' === a && l(e.offsetHeight > 0 && n < e.scrollHeight));
                    });
                    return ((0, t.useResize)(c, r), { isTruncated: o });
                };
            })(),
                l.__esModule);
            var c = l.useTruncate;
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
            i.d(t, { K: () => v });
            var r = i(88800),
                a = i(96706),
                n = i(53548),
                s = i(2058),
                o = i(79390),
                l = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                m = i(30832);
            let v = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [v, _] = (0, n.useState)(!1),
                    { formatMessage: p } = (0, s.A)();
                return (0, n.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, r.jsx)(u.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (v) return;
                    let n = { ...(0, a.HO)(e), url: e.url, isLiked: !e.isLiked };
                    _(!0);
                    let s = await e.toggleLike();
                    (_(!1),
                        s === o.f.OK
                            ? i((0, r.jsx)(m.T, { playlist: n }), { containerId: l.u.INFO })
                            : i((0, r.jsx)(u.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [t.isAuthorized, v, e, p, i]);
            };
        },
        90109: (e, t, i) => {
            'use strict';
            i.d(t, { Q8: () => a, Y: () => n });
            var r = i(57072);
            let a = '(max-width: '.concat(r.f.xxxs - 0.02, 'px)'),
                n = '(max-width: '.concat(r.f.xs - 0.02, 'px)');
            r.f.xs;
        },
        91959: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => a });
            var r = i(58217);
            let a = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: a } = e;
                return (0, r.l)({ entity: t, callback: i, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        92227: (e) => {
            e.exports = {
                root: 'ArtistRecommendationArtwork_root__CaNIc',
                cover: 'ArtistRecommendationArtwork_cover__d_2PD',
                coverContainer: 'ArtistRecommendationArtwork_coverContainer__ercHQ',
                cover_withTopPosition: 'ArtistRecommendationArtwork_cover_withTopPosition__uo1Ez',
                root_active: 'ArtistRecommendationArtwork_root_active__fB0EI',
            };
        },
        92867: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => c });
            var r = i(53548),
                a = i.t(r, 2),
                n = {
                    810: (e) => {
                        e.exports = a;
                    },
                },
                s = {},
                o = {};
            ((() => {
                (Object.defineProperty(o, '__esModule', { value: !0 }), (o.useIsomorphicEffect = void 0));
                let e = (function e(t) {
                    var i = s[t];
                    if (void 0 !== i) return i.exports;
                    var r = (s[t] = { exports: {} });
                    return (n[t](r, r.exports, e), r.exports);
                })(810);
                o.useIsomorphicEffect = 'undefined' != typeof document ? e.useLayoutEffect : e.useEffect;
            })(),
                o.__esModule);
            var l = o.useIsomorphicEffect;
            let c = (e) => {
                let [t, i] = (0, r.useState)(!1);
                return (
                    l(() => {
                        let t = window.matchMedia(e),
                            r = () => i(t.matches);
                        return (
                            r(),
                            t.addEventListener('change', r),
                            () => {
                                t.removeEventListener('change', r);
                            }
                        );
                    }, [e]),
                    t
                );
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
    },
]);
