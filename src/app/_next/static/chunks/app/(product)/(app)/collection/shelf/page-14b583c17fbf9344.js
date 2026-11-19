(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1528, 8229],
    {
        2955: (e) => {
            e.exports = {
                header: 'CollectionShelfRecentlyPlayed_header__Nx7Cc',
                shelfColumn: 'CollectionShelfRecentlyPlayed_shelfColumn__9xHhf',
                important: 'CollectionShelfRecentlyPlayed_important__HS0GM',
            };
        },
        4795: (e, t, s) => {
            'use strict';
            s.d(t, { N: () => n });
            var i = s(72288),
                l = s(97956);
            let n = () => {
                var e, t;
                let {
                    user: s,
                    settings: { browserInfo: n },
                    experiments: r,
                } = (0, i.g)();
                return (
                    !(null == n ? void 0 : n.isTouch) &&
                    s.isAuthorized &&
                    !s.hasPlus &&
                    (null == (t = r.getExperiment(l.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        16782: (e) => {
            e.exports = {
                root: 'BlockHeader_root__j3mbg',
                titleIcon: 'BlockHeader_titleIcon__GQFEK',
                start: 'BlockHeader_start__ZrGP5',
                coverContainer: 'BlockHeader_coverContainer__lATZT',
                cover: 'BlockHeader_cover__koOXq',
                textContainer: 'BlockHeader_textContainer___2wn9',
                title: 'BlockHeader_title__5xlx6',
                description: 'BlockHeader_description__hAk9D',
                description_widthLimit: 'BlockHeader_description_widthLimit__CXxK1',
                linkContainer: 'BlockHeader_linkContainer__EuW_L',
                linkText: 'BlockHeader_linkText__Or6VB',
                heading: 'BlockHeader_heading__4iqvS',
                heading_notAvailable: 'BlockHeader_heading_notAvailable__r_dm1',
                shimmerCover: 'BlockHeader_shimmerCover__m2PJl',
                textShimmerContainer: 'BlockHeader_textShimmerContainer__hT_Zo',
                shimmerTitle: 'BlockHeader_shimmerTitle__kAkgm',
                shimmerDescription: 'BlockHeader_shimmerDescription__Bya4z',
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
        18486: (e, t, s) => {
            'use strict';
            s.d(t, { T: () => C });
            var i = s(88800),
                l = s(65724),
                n = s(53548),
                r = s(97234),
                o = s(42592),
                a = s(70598),
                c = s(17392),
                u = s(52300),
                d = s(90688),
                h = s(7555),
                m = s(19994),
                f = s(29504),
                g = s(91292),
                p = s(16782),
                v = s.n(p);
            let _ = (e) => {
                    let {
                        className: t,
                        coverUrl: s,
                        labeledForId: p,
                        subTitle: _,
                        title: C,
                        description: b,
                        viewAllActionLink: E,
                        controls: S,
                        titleSize: x = 'm',
                        coverBackgroundColor: y,
                        coverRadius: O = 's',
                        titleClassName: k,
                        titleLineClamp: w,
                        fallbackIconVariant: T,
                        available: N = !0,
                        onViewAllAction: R,
                        titleChildren: A,
                        children: I,
                        headingRef: L,
                        coverContainerClassName: j,
                        headingVariant: P = 'h3',
                        withDescriptionWidthLimit: M = !0,
                        isShimmerVisible: B,
                        isShimmerActive: D,
                        withCover: z,
                        withDescription: F,
                        forwardRef: W,
                        shimmerCoverClassName: H,
                        shouldSendAnalyticsOnLoaded: U,
                        ...X
                    } = e;
                    (0, o.W)({ enabled: !!U });
                    let $ = (0, n.useRef)(null),
                        K = s || z,
                        V = b || F,
                        Y = (0, n.useCallback)(() => {
                            $.current && 'focus' in $.current && $.current.focus();
                        }, []),
                        G = (0, a.S)(),
                        q = (0, n.useCallback)(() => {
                            R ? R() : G({ to: r.AppScreen.Link });
                        }, [G, R]),
                        Z = (0, n.useMemo)(
                            () =>
                                C && E && N
                                    ? (0, i.jsxs)(g.N, {
                                          className: v().title,
                                          containerClassName: v().linkContainer,
                                          textClassName: v().linkText,
                                          icon: (0, i.jsx)(u.I, { className: v().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: E,
                                          onClick: q,
                                          'data-test-id': c.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, i.jsx)(f.DZ, {
                                                  id: p,
                                                  className: (0, l.$)(v().heading, k),
                                                  variant: P,
                                                  size: x,
                                                  weight: 'bold',
                                                  lineClamp: w,
                                                  ref: L,
                                                  children: C,
                                              }),
                                              A,
                                          ],
                                      })
                                    : (0, i.jsxs)('div', {
                                          className: v().title,
                                          children: [
                                              (0, i.jsx)(f.DZ, {
                                                  id: p,
                                                  className: (0, l.$)(v().heading, k, { [v().heading_notAvailable]: !N }),
                                                  variant: P,
                                                  size: x,
                                                  weight: 'bold',
                                                  lineClamp: w,
                                                  ref: L,
                                                  'data-test-id': c.S7.BLOCK_HEADER_TITLE,
                                                  children: C,
                                              }),
                                              A,
                                          ],
                                      }),
                            [N, q, L, P, p, C, k, w, x, E, A],
                        ),
                        J = (0, n.useMemo)(() => (F && B ? (0, i.jsx)(m.W, { isActive: D, className: v().shimmerDescription }) : b), [F, B, b, D]),
                        Q = (0, n.useMemo)(
                            () =>
                                z && B
                                    ? (0, i.jsx)(m.W, { isActive: D, className: (0, l.$)(v().shimmerCover, H), radius: 's' })
                                    : (0, i.jsx)(d._V, {
                                          src: s,
                                          fallbackIconVariant: T,
                                          style: { backgroundColor: y },
                                          className: v().cover,
                                          ref: $,
                                          onClick: Y,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': c.S7.BLOCK_HEADER_COVER,
                                      }),
                            [y, s, T, Y, D, B, H, z],
                        );
                    return (0, i.jsxs)('div', {
                        className: (0, l.$)(v().root, t),
                        ref: W,
                        ...X,
                        'data-test-id': c.S7.BLOCK_HEADER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: v().start,
                                children: [
                                    K && (0, i.jsx)(h.t, { radius: O, className: (0, l.$)(v().coverContainer, j), children: Q }),
                                    (0, i.jsxs)('div', {
                                        className: v().textContainer,
                                        children: [
                                            _,
                                            Z,
                                            V &&
                                                (0, i.jsx)(f.HL, {
                                                    id: ''.concat(p, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: M ? 2 : void 0,
                                                    className: (0, l.$)(v().description, { [v().description_widthLimit]: M }),
                                                    'data-test-id': c.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: J,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            S || I,
                        ],
                    });
                },
                C = (0, n.forwardRef)((e, t) => (0, i.jsx)(_, { forwardRef: t, ...e }));
        },
        19840: (e, t, s) => {
            'use strict';
            (s.d(t, { G: () => l }), s(46606));
            var i = s(91136);
            class l extends i.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, l.prototype));
                }
            }
        },
        23931: (e) => {
            e.exports = { title: 'CollectionShelfShimmer_title__X3d9J' };
        },
        29008: (e, t, s) => {
            'use strict';
            s.d(t, { c: () => r, r: () => o });
            var i = s(53548),
                l = s(2058),
                n = s(61691),
                r = (function (e) {
                    return ((e.PIN = 'pin'), e);
                })({});
            let o = (e, t) => {
                let { formatMessage: s } = (0, l.A)();
                return (0, i.useMemo)(() => {
                    switch (e) {
                        case n._.SINGLE:
                            return s({ id: 'entity-names.single' });
                        case n._.PODCAST:
                            return s({ id: 'entity-names.podcast' });
                        case n._.AUDIOBOOK:
                            if ('pin' === t) return s({ id: 'entity-names.book' });
                            return s({ id: 'entity-names.audio' });
                        case n._.FAIRY_TALE:
                            return s({ id: 'entity-names.fairy-tale' });
                        default:
                            return s({ id: 'entity-names.album' });
                    }
                }, [e, s, t]);
            };
        },
        31764: (e, t, s) => {
            'use strict';
            s.d(t, { X: () => h });
            var i = s(88800),
                l = s(65724),
                n = s(53548),
                r = s(17392),
                o = s(88021),
                a = s(96817),
                c = s(52300),
                u = s(89544),
                d = s.n(u);
            let h = (e) => {
                let {
                        carouselRef: t,
                        backwardControlClassName: s,
                        forwardControlClassName: u,
                        className: h,
                        withSecondaryColor: m,
                        buttonSize: f = 'xxxs',
                        buttonVariant: g = 'outline',
                    } = e,
                    { swipeBackward: p, swipeForward: v, shouldBackwardButtonBeDisabled: _, shouldForwardButtonBeDisabled: C, shouldHideControls: b } = (0, o.Y)(t),
                    E = (0, n.useCallback)(
                        (e) => {
                            (p(), e.stopPropagation());
                        },
                        [p],
                    ),
                    S = (0, n.useCallback)(
                        (e) => {
                            (v(), e.stopPropagation());
                        },
                        [v],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, l.$)(d().root, h),
                    'data-test-id': r.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, i.jsx)(a.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, l.$)(d().control, s, { [d().control_hidden]: b, [d().control_withSecondaryColor]: m }),
                            onClick: E,
                            size: f,
                            radius: 'round',
                            variant: g,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: _,
                            'data-test-id': r.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, i.jsx)(a.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, l.$)(d().control, u, { [d().control_hidden]: b, [d().control_withSecondaryColor]: m }),
                            onClick: S,
                            size: f,
                            radius: 'round',
                            variant: g,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: C,
                            'data-test-id': r.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        32187: (e) => {
            e.exports = {
                header: 'CollectionShelfLiked_header__u9MqV',
                shelfColumn: 'CollectionShelfLiked_shelfColumn__4KX_5',
                important: 'CollectionShelfLiked_important__0K3qk',
            };
        },
        33699: (e, t, s) => {
            'use strict';
            s.d(t, { CollectionShelfPage: () => P });
            var i = s(88800),
                l = s(84961),
                n = s(53548),
                r = s(2058),
                o = s(88969),
                a = s(17392),
                c = s(66719),
                u = s(29504),
                d = s(32596),
                h = s(69630),
                m = s(46422),
                f = s(44230),
                g = s(37670),
                p = s(72288),
                v = s(86790),
                _ = s(60266),
                C = s(93317),
                b = s(51059),
                E = s(65724),
                S = s(79070),
                x = s(76843),
                y = s(4370),
                O = s(98644),
                k = s(67984),
                w = s(93015),
                T = s(95259),
                N = s(36623),
                R = s(2955),
                A = s.n(R);
            let I = (0, l.PA)((e) => {
                var t;
                let { className: s, itemsCount: l, headerClassName: r } = e,
                    {
                        sonataState: o,
                        collection: {
                            shelf: { recentlyPlayed: c },
                        },
                    } = (0, p.g)(),
                    u = (0, S.L)(() => {
                        var e;
                        return null == (e = c.entities)
                            ? void 0
                            : e.map((e, t) => {
                                  let s = (0, T.T)(e, c.typeForFrom);
                                  return (0, i.jsx)(
                                      x.K,
                                      {
                                          track: e.track,
                                          playContextParams: {
                                              contextData: s,
                                              queueParams: { index: t, entityId: e.track.id },
                                              loadContextMeta: !1,
                                              entitiesData: o.unloadedEntitiesDataFromModels,
                                          },
                                          withPodcastName: !0,
                                      },
                                      e.track.id,
                                  );
                              });
                    });
                return (c.isNeededToLoad && (0, n.use)(c.getData()), !c.isLoading && (null == (t = c.entities) ? void 0 : t.length))
                    ? (0, i.jsx)(k.$, {
                          blockHeaderClassName: (0, E.$)(A().header, r),
                          className: s,
                          carouselItemClassName: (0, E.$)(A().shelfColumn, A().important),
                          shimmer: (0, i.jsx)(w.D, { variant: O.X.PLAYLIST, isActive: !0 }),
                          isShimmerVisible: c.isLoading,
                          isShimmerActive: !0,
                          maxColumnsCount: k.D.ONE,
                          blockHeaderTitle: c.title,
                          itemsCountPerColumn: null != l ? l : 0,
                          viewAllActionLink: y.Z.collectionShelfRecentlyPlayed.href,
                          'data-test-id': a.Xk.collection.COLLECTION_SHELF_PAGE_RECENTLY_PLAYED_BLOCK,
                          children: u,
                      })
                    : (0, i.jsx)(N.E, { className: s });
            });
            var L = s(38446),
                j = s.n(L);
            let P = (0, l.PA)(() => {
                let {
                        collection: { shelf: e },
                    } = (0, p.g)(),
                    { contentScrollRef: t, setContentScrollRef: s } = (0, f.g)(),
                    { formatMessage: l } = (0, r.A)(),
                    E = (0, m.W)();
                return ((0, n.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                ),
                (0, g.J)(e.isResolved),
                e.isRejected)
                    ? (0, i.jsx)(d.SomethingWentWrong, {})
                    : (0, i.jsxs)(h.h, {
                          scrollElement: t,
                          outerTitle: l({ id: 'page.shelf' }),
                          children: [
                              (0, i.jsx)(C.Y, {
                                  variant: C.V.TEXT,
                                  withForwardControl: !1,
                                  withBackwardControl: E.canBack,
                                  children: (0, i.jsx)(u.DZ, {
                                      variant: 'h2',
                                      weight: 'bold',
                                      size: 'xl',
                                      lineClamp: 1,
                                      children: (0, i.jsx)(o.A, { id: 'page.shelf' }),
                                  }),
                              }),
                              (0, i.jsx)(c.N, {
                                  ref: s,
                                  containerClassName: j().scrollableContainer,
                                  className: j().root,
                                  'data-test-id': a.Xk.collection.COLLECTION_SHELF_PAGE,
                                  children: (0, i.jsxs)('div', {
                                      className: j().content,
                                      children: [
                                          e.hasRecentlyPlayed && (0, i.jsx)(I, { className: j().block, headerClassName: j().blockHeader, itemsCount: 5 }),
                                          e.hasLiked && (0, i.jsx)(b.m, { className: j().block, headerClassName: j().blockHeader, itemsCount: 5 }),
                                          (0, i.jsx)(_.A, { children: (0, i.jsx)(v.w, { className: j().footer }) }),
                                      ],
                                  }),
                              }),
                          ],
                      });
            });
        },
        36623: (e, t, s) => {
            'use strict';
            s.d(t, { E: () => d });
            var i = s(88800),
                l = s(84961),
                n = s(19994),
                r = s(98644),
                o = s(93015),
                a = s(23931),
                c = s.n(a);
            let u = () => Array.from({ length: 5 }, (e) => (0, i.jsx)(o.D, { variant: r.X.PLAYLIST, className: c().track, isActive: !0 }, e)),
                d = (0, l.PA)((e) => {
                    let { className: t, withHeader: s } = e;
                    return (0, i.jsxs)('div', {
                        className: t,
                        children: [s && (0, i.jsx)(n.W, { radius: 'l', width: 100, height: 24, className: c().title, isActive: !0 }), (0, i.jsx)(u, {})],
                    });
                });
        },
        37670: (e, t, s) => {
            'use strict';
            s.d(t, { J: () => n });
            var i = s(53548);
            s(30282);
            var l = s(58390);
            let n = (e) => {
                let t = (0, l.usePathname)(),
                    [s, n] = (0, i.useState)(!1);
                ((0, i.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, i.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !s && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), n(!0));
                    }, [e, s, t]));
            };
        },
        38446: (e) => {
            e.exports = {
                root: 'CollectionShelfPage_root__S0__c',
                scrollableContainer: 'CollectionShelfPage_scrollableContainer__9f317',
                content: 'CollectionShelfPage_content__AG3r8',
                block: 'CollectionShelfPage_block__34jyy',
                blockHeader: 'CollectionShelfPage_blockHeader__Qjoln',
                footer: 'CollectionShelfPage_footer__pgWKV',
            };
        },
        42592: (e, t, s) => {
            'use strict';
            s.d(t, { W: () => a });
            var i = s(53548),
                l = s(24709),
                n = s(18117),
                r = s(88966),
                o = s(87138);
            let a = (0, l.n)({ event: 'LandingBlock.Loaded', kind: 'hook', requiredScopes: ['screen', 'block'] }, ({ enabled: e = !0 } = {}) => {
                let t = (0, i.useRef)(!1),
                    s = (0, r.N)(),
                    { hash: l } = (0, n.g)(),
                    a = (0, o.w)(),
                    c = (0, i.useMemo)(() => (a ? s.createBlockReporter(a.snapshot) : null), [s, a]);
                (0, i.useEffect)(() => {
                    e && a && c && !t.current && c.loaded({ objectsCount: a.snapshot.block.objectsCount, viewUuid: a.block.loadedSession.start() }) && (t.current = !0);
                }, [e, l, c, a]);
            });
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
        51059: (e, t, s) => {
            'use strict';
            s.d(t, { m: () => b });
            var i = s(88800),
                l = s(65724),
                n = s(84961),
                r = s(53548),
                o = s(17392),
                a = s(79070),
                c = s(46811),
                u = s(76843),
                d = s(4370),
                h = s(72288),
                m = s(98644),
                f = s(67984),
                g = s(93015),
                p = s(70441),
                v = s(36623),
                _ = s(32187),
                C = s.n(_);
            let b = (0, n.PA)((e) => {
                var t;
                let { className: s, itemsCount: n, headerClassName: _, carouselClassName: b } = e,
                    {
                        collection: {
                            shelf: { liked: E },
                        },
                    } = (0, h.g)(),
                    S = (0, a.L)(() => {
                        var e;
                        return null == (e = E.entities)
                            ? void 0
                            : e.map((e, t) => {
                                  if (e.album) return (0, i.jsx)(c.M, { album: e.album }, e.album.getKey(t));
                                  let s = (0, p.q)(e.track, t, E.typeForFrom);
                                  return (0, i.jsx)(u.K, { track: e.track, playContextParams: s, withPodcastName: !0 }, e.track.getKey(t));
                              });
                    });
                return (E.isNeededToLoad && (0, r.use)(E.getData()), !E.isLoading && (null == (t = E.entities) ? void 0 : t.length))
                    ? (0, i.jsx)(f.$, {
                          shimmer: (0, i.jsx)(g.D, { variant: m.X.PLAYLIST, isActive: !0 }),
                          isShimmerActive: !0,
                          isShimmerVisible: E.isLoading,
                          className: s,
                          carouselItemClassName: (0, l.$)(C().shelfColumn, C().important),
                          blockHeaderClassName: (0, l.$)(C().header, _),
                          carouselClassName: b,
                          blockHeaderTitle: E.title,
                          itemsCountPerColumn: null != n ? n : 0,
                          maxColumnsCount: f.D.ONE,
                          viewAllActionLink: d.Z.collectionShelfLiked.href,
                          'data-test-id': o.Xk.collection.COLLECTION_SHELF_PAGE_SHELF_LIKED_BLOCK,
                          children: S,
                      })
                    : (0, i.jsx)(v.E, { className: s, withHeader: !0 });
            });
        },
        53323: (e, t, s) => {
            'use strict';
            s.d(t, { F: () => u });
            var i,
                l = s(87819),
                n = s(53548),
                r = {
                    5881: (e, t, s) => {
                        function i() {
                            for (var e, t, s = 0, i = ''; s < arguments.length;)
                                (e = arguments[s++]) &&
                                    (t = (function e(t) {
                                        var s,
                                            i,
                                            l = '';
                                        if ('string' == typeof t || 'number' == typeof t) l += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (s = 0; s < t.length; s++) t[s] && (i = e(t[s])) && (l && (l += ' '), (l += i));
                                            else for (s in t) t[s] && (l && (l += ' '), (l += s));
                                        return l;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (s.r(t), s.d(t, { clsx: () => i, default: () => l }));
                        let l = i;
                    },
                    2876: (e, t, s) => {
                        (s.r(t), s.d(t, { default: () => i }));
                        let i = { root: 'IZnFMW4gXBshJODnvB1P', item: 'VJ9IexhAEuYSCyGiMfN4' };
                    },
                    9097: (e, t) => {
                        var s = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var l = null;
                            if ((void 0 !== i && (l = '' + i), void 0 !== t.key && (l = '' + t.key), 'key' in t))
                                for (var n in ((i = {}), t)) 'key' !== n && (i[n] = t[n]);
                            else i = t;
                            return { $$typeof: s, type: e, key: l, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, s) => {
                        e.exports = s(9097);
                    },
                    792: (e, t, s) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useCallbackRef = void 0));
                        let i = s(810);
                        t.useCallbackRef = function (e) {
                            let t = (0, i.useRef)({
                                stableFn: function () {
                                    for (var e = arguments.length, s = Array(e), i = 0; i < e; i++) s[i] = arguments[i];
                                    return t.current.callback(...s);
                                },
                                callback: e,
                            });
                            return (
                                (0, i.useInsertionEffect)(() => {
                                    t.current.callback = e;
                                }),
                                t.current.stableFn
                            );
                        };
                    },
                    597: (e, t, s) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useIntersectionObserver = t.createIntersectionObserver = t.getElementNameByDataAttribute = t.isInViewportNow = t.defaultOptions = void 0));
                        let i = s(810),
                            { innerWidth: l = 0, innerHeight: n = 0 } = window;
                        function r(e) {
                            let { top: t, right: s, bottom: i, left: r } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= n) || (i >= 0 && i <= n)) && ((r >= 0 && r <= l) || (s >= 0 && s <= l));
                        }
                        function o(e) {
                            var t, s;
                            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (s = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, i)) ? s : e.attributes[0];
                        }
                        function a(e, t) {
                            let s = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, s);
                                });
                            }, t);
                            return s;
                        }
                        ((t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = r),
                            (t.getElementNameByDataAttribute = o),
                            (t.createIntersectionObserver = a),
                            (t.useIntersectionObserver = function (e, s, l) {
                                let [{ freezeOnceVisible: n, preflightCheck: c, ...u }, d = !1] =
                                        'boolean' == typeof s || void 0 === s ? [t.defaultOptions, s] : [{ ...t.defaultOptions, ...s }, l],
                                    [h, m] = (0, i.useState)({}),
                                    f = (0, i.useRef)(new Set()),
                                    g = (0, i.useMemo)(
                                        () =>
                                            d
                                                ? null
                                                : a((e) => {
                                                      let t = o(e.target);
                                                      if (t && g) {
                                                          if (f.current.has(t)) return;
                                                          (m((s) => ({ ...s, [t]: { isIntersecting: e.isIntersecting } })),
                                                              n && e.isIntersecting && (f.current.add(t), g.unobserve(e.target)));
                                                      }
                                                  }, u),
                                        [d],
                                    );
                                return (
                                    (0, i.useLayoutEffect)(
                                        () => (
                                            g &&
                                                !d &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let t = !1;
                                                        if (c && (t = r(e.current))) {
                                                            let t = o(e.current);
                                                            m((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                                                        }
                                                        t || g.observe(e.current);
                                                    }
                                                }),
                                            () => {
                                                g && g.disconnect();
                                            }
                                        ),
                                        [d, g, e.length],
                                    ),
                                    h
                                );
                            }));
                    },
                    4012: (e, t, s) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useMergeRefs = void 0));
                        var i = s(1964);
                        Object.defineProperty(t, 'useMergeRefs', {
                            enumerable: !0,
                            get: function () {
                                return i.useMergeRefs;
                            },
                        });
                    },
                    1676: (e, t, s) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useToggle = void 0));
                        let i = s(810);
                        t.useToggle = (e) => {
                            let [t, s] = (0, i.useState)(e);
                            (0, i.useEffect)(() => {
                                s(e);
                            }, [e]);
                            let l = (0, i.useCallback)(() => {
                                    s((e) => !e);
                                }, []),
                                n = (0, i.useCallback)(() => {
                                    s(!0);
                                }, []),
                                r = (0, i.useCallback)(() => {
                                    s(!1);
                                }, []);
                            return { state: t, toggle: l, setState: s, toggleTrue: n, toggleFalse: r };
                        };
                    },
                    1258: (e, t, s) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.AutoScrollCarousel = void 0));
                        let i = s(4377),
                            l = s(810),
                            n = s(792),
                            r = s(597),
                            o = s(4012),
                            a = s(1676),
                            c = s(7962),
                            u = s(2134),
                            d = s(7262);
                        t.AutoScrollCarousel = (e) => {
                            let {
                                    ref: t,
                                    children: s,
                                    autoplay: { enabled: h, delay: m, stopOnMouseEnter: f, stopOnFocusIn: g, stopOnInteraction: p },
                                    onPointerEnter: v,
                                    onPointerLeave: _,
                                    onPointerDown: C,
                                    onPointerUp: b,
                                    onPointerCancel: E,
                                    onFocus: S,
                                    onBlur: x,
                                    onScroll: y,
                                    onScrollEnd: O,
                                    ...k
                                } = e,
                                { state: w, toggleTrue: T, toggleFalse: N } = (0, a.useToggle)(!1),
                                { state: R, toggleTrue: A, toggleFalse: I } = (0, a.useToggle)(!1),
                                { state: L, setState: j, toggleFalse: P } = (0, a.useToggle)(!1),
                                { state: M, setState: B } = (0, a.useToggle)(!1),
                                { state: D, setState: z } = (0, a.useToggle)(!1),
                                { state: F, toggleTrue: W, toggleFalse: H } = (0, a.useToggle)(!1),
                                { state: U, toggleTrue: X } = (0, a.useToggle)(!1),
                                { state: $, setState: K } = (0, a.useToggle)(!1),
                                V = (0, l.useRef)(null),
                                Y = (0, o.useMergeRefs)([V, t]),
                                G = (0, d.useScrollEndFallback)(H),
                                q = l.Children.count(s),
                                Z = h && q > 1 && M && D && !$ && !((f && L) || (g && w) || (p && U) || R || F),
                                J = (0, n.useCallbackRef)((e) => {
                                    (j('mouse' === e.pointerType), null == v || v(e));
                                }),
                                Q = (0, n.useCallbackRef)((e) => {
                                    (P(), I(), null == _ || _(e));
                                }),
                                ee = (0, n.useCallbackRef)((e) => {
                                    (A(), X(), null == C || C(e));
                                }),
                                et = (0, n.useCallbackRef)((e) => {
                                    (I(), null == b || b(e));
                                }),
                                es = (0, n.useCallbackRef)((e) => {
                                    (I(), null == E || E(e));
                                }),
                                ei = (0, n.useCallbackRef)((e) => {
                                    (R || T(), null == S || S(e));
                                }),
                                el = (0, n.useCallbackRef)((e) => {
                                    (e.currentTarget.contains(e.relatedTarget) || N(), null == x || x(e));
                                }),
                                en = (0, n.useCallbackRef)((e) => {
                                    (W(), G(e.currentTarget), null == y || y(e));
                                }),
                                er = (0, n.useCallbackRef)((e) => {
                                    (H(), null == O || O(e));
                                });
                            return (
                                (0, l.useEffect)(() => {
                                    let e = matchMedia('(prefers-reduced-motion: reduce)'),
                                        t = () => K(e.matches);
                                    return (t(), e.addEventListener('change', t), () => e.removeEventListener('change', t));
                                }, [K]),
                                (0, l.useEffect)(() => {
                                    let e = V.current;
                                    if (!e) return;
                                    let t = (0, r.createIntersectionObserver)((e) => {
                                        B(e.isIntersecting && e.intersectionRatio > 0);
                                    });
                                    return (t.observe(e), () => t.disconnect());
                                }, [V, B]),
                                (0, l.useEffect)(() => {
                                    let e = () => z('visible' === document.visibilityState);
                                    return (document.addEventListener('visibilitychange', e), e(), () => document.removeEventListener('visibilitychange', e));
                                }, [z]),
                                (0, l.useEffect)(() => {
                                    let e = V.current;
                                    if (!e || !Z) return;
                                    let t = setInterval(() => {
                                        let s = (0, u.getNextCarouselScrollPosition)(e);
                                        void 0 !== s && (clearInterval(t), W(), e.scrollTo({ left: s, behavior: 'smooth' }));
                                    }, m);
                                    return () => clearInterval(t);
                                }, [V, m, Z, q, W]),
                                (0, i.jsx)(c.CarouselBase, {
                                    ref: Y,
                                    ...k,
                                    onPointerEnter: J,
                                    onPointerLeave: Q,
                                    onPointerDown: ee,
                                    onPointerUp: et,
                                    onPointerCancel: es,
                                    onFocus: ei,
                                    onBlur: el,
                                    onScroll: en,
                                    onScrollEnd: er,
                                    children: s,
                                })
                            );
                        };
                    },
                    2134: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getNextCarouselScrollPosition = void 0),
                            (t.getNextCarouselScrollPosition = (e) => {
                                let t = e.scrollWidth - e.clientWidth;
                                if (t <= 1) return;
                                let s = getComputedStyle(e),
                                    i = parseFloat(s.scrollPaddingLeft) || 0,
                                    l = parseFloat(s.scrollPaddingRight) || 0,
                                    n = e.getBoundingClientRect().left + e.clientLeft,
                                    r = 0;
                                for (let s of e.children) {
                                    let o = s.getBoundingClientRect(),
                                        a = getComputedStyle(s).scrollSnapAlign,
                                        c = o.left - n + e.scrollLeft,
                                        u = Math.max(0, Math.min(t, 'center' === a ? c + o.width / 2 - (e.clientWidth + i - l) / 2 : c - i));
                                    if (u > e.scrollLeft + 1) {
                                        r = u;
                                        break;
                                    }
                                }
                                if (!(1 >= Math.abs(r - e.scrollLeft))) return r;
                            }));
                    },
                    7262: (e, t, s) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useScrollEndFallback = void 0));
                        let i = s(810),
                            l = s(792);
                        t.useScrollEndFallback = (e) => {
                            let t = (0, i.useRef)(void 0),
                                s = (0, l.useCallbackRef)(e);
                            return (
                                (0, i.useEffect)(() => () => clearTimeout(t.current), []),
                                (0, l.useCallbackRef)((e) => {
                                    'onscrollend' in e || (clearTimeout(t.current), (t.current = setTimeout(s, 200)));
                                })
                            );
                        };
                    },
                    4014: (e, t, s) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Carousel = void 0));
                        let i = s(4377),
                            l = s(1258),
                            n = s(7962);
                        t.Carousel = (e) => {
                            let { autoplay: t, ...s } = e;
                            return t ? (0, i.jsx)(l.AutoScrollCarousel, { ...s, autoplay: t }) : (0, i.jsx)(n.CarouselBase, { ...s });
                        };
                    },
                    7962: function (e, t, s) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CarouselBase = void 0));
                        let l = s(4377),
                            n = s(5881),
                            r = s(810),
                            o = i(s(2876));
                        t.CarouselBase = (e) => {
                            let { className: t, itemClassName: s, children: i, ref: a, role: c, ...u } = e;
                            return (0, l.jsx)('ol', {
                                ref: a,
                                className: (0, n.clsx)(o.default.root, t),
                                ...u,
                                role: null != c ? c : 'list',
                                children: r.Children.map(i, (e) => (0, l.jsx)('li', { className: (0, n.clsx)(o.default.item, s), children: e })),
                            });
                        };
                    },
                    1964: (e) => {
                        e.exports = l;
                    },
                    810: (e) => {
                        e.exports = i || (i = s.t(n, 2));
                    },
                },
                o = {};
            function a(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var s = (o[e] = { exports: {} });
                return (r[e].call(s.exports, s, s.exports, a), s.exports);
            }
            ((a.d = (e, t) => {
                for (var s in t) a.o(t, s) && !a.o(e, s) && Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
            }),
                (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (a.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var c = {};
            (() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                var e = a(4014);
                Object.defineProperty(c, 'l', {
                    enumerable: !0,
                    get: function () {
                        return e.Carousel;
                    },
                });
            })();
            var u = c.l;
            c.X;
        },
        56446: (e, t, s) => {
            'use strict';
            s.d(t, { k: () => d });
            var i = s(88800),
                l = s(53548),
                n = s(2058),
                r = s(17392),
                o = s(96817),
                a = s(52300),
                c = s(39318);
            let u = (e) => {
                    let {
                            variant: t,
                            withRipple: s,
                            size: l,
                            radius: u,
                            iconSize: d,
                            disabled: h,
                            onClick: m,
                            iconClassName: f,
                            className: g,
                            forwardRef: p,
                            style: v,
                            children: _,
                        } = e,
                        { formatMessage: C } = (0, n.A)(),
                        b = C({ id: 'trailer.button-aria-label' });
                    return (0, i.jsx)(o.$, {
                        className: g,
                        color: 'secondary',
                        radius: u,
                        size: l,
                        variant: t,
                        withRipple: s,
                        flexIcon: !0,
                        'aria-label': b,
                        onClick: m,
                        ref: p,
                        icon: (0, i.jsx)(a.I, { variant: 'trailer', size: d, className: f }),
                        disabled: h,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': r.S7.TRAILER_BUTTON,
                        children: _,
                    });
                },
                d = (0, l.forwardRef)((e, t) => (0, i.jsx)(u, { forwardRef: t, ...e }));
        },
        56949: (e, t, s) => {
            'use strict';
            s.d(t, { Te: () => x, XW: () => y });
            var i = s(53548),
                l = s(53405);
            function n(e, t, s) {
                let i,
                    l = s.initialDeps ?? [];
                function n() {
                    var n, r, o, a;
                    let c, u;
                    s.key && (null == (n = s.debug) ? void 0 : n.call(s)) && (c = Date.now());
                    let d = e();
                    if (!(d.length !== l.length || d.some((e, t) => l[t] !== e))) return i;
                    if (
                        ((l = d),
                        s.key && (null == (r = s.debug) ? void 0 : r.call(s)) && (u = Date.now()),
                        (i = t(...d)),
                        s.key && (null == (o = s.debug) ? void 0 : o.call(s)))
                    ) {
                        let e = Math.round((Date.now() - c) * 100) / 100,
                            t = Math.round((Date.now() - u) * 100) / 100,
                            i = t / 16,
                            l = (e, t) => {
                                for (e = String(e); e.length < t;) e = ' ' + e;
                                return e;
                            };
                        console.info(
                            `%c⏱ ${l(t, 5)} /${l(e, 5)} ms`,
                            `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * i, 120))}deg 100% 31%);`,
                            null == s ? void 0 : s.key,
                        );
                    }
                    return (null == (a = null == s ? void 0 : s.onChange) || a.call(s, i), i);
                }
                return (
                    (n.updateDeps = (e) => {
                        l = e;
                    }),
                    n
                );
            }
            function r(e, t) {
                if (void 0 !== e) return e;
                throw Error(`Unexpected undefined${t ? `: ${t}` : ''}`);
            }
            let o = (e, t, s) => {
                    let i;
                    return function (...l) {
                        (e.clearTimeout(i), (i = e.setTimeout(() => t.apply(this, l), s)));
                    };
                },
                a = (e) => e,
                c = (e) => {
                    let t = Math.max(e.startIndex - e.overscan, 0),
                        s = Math.min(e.endIndex + e.overscan, e.count - 1),
                        i = [];
                    for (let e = t; e <= s; e++) i.push(e);
                    return i;
                },
                u = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let i = e.targetWindow;
                    if (!i) return;
                    let l = (e) => {
                        let { width: s, height: i } = e;
                        t({ width: Math.round(s), height: Math.round(i) });
                    };
                    if ((l(s.getBoundingClientRect()), !i.ResizeObserver)) return () => {};
                    let n = new i.ResizeObserver((t) => {
                        let i = () => {
                            let e = t[0];
                            if (null == e ? void 0 : e.borderBoxSize) {
                                let t = e.borderBoxSize[0];
                                if (t) return void l({ width: t.inlineSize, height: t.blockSize });
                            }
                            l(s.getBoundingClientRect());
                        };
                        e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
                    });
                    return (
                        n.observe(s, { box: 'border-box' }),
                        () => {
                            n.unobserve(s);
                        }
                    );
                },
                d = { passive: !0 },
                h = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let i = () => {
                        t({ width: s.innerWidth, height: s.innerHeight });
                    };
                    return (
                        i(),
                        s.addEventListener('resize', i, d),
                        () => {
                            s.removeEventListener('resize', i);
                        }
                    );
                },
                m = 'undefined' == typeof window || 'onscrollend' in window,
                f = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let i = e.targetWindow;
                    if (!i) return;
                    let l = 0,
                        n =
                            e.options.useScrollendEvent && m
                                ? () => void 0
                                : o(
                                      i,
                                      () => {
                                          t(l, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        r = (i) => () => {
                            let { horizontal: r, isRtl: o } = e.options;
                            ((l = r ? s.scrollLeft * ((o && -1) || 1) : s.scrollTop), n(), t(l, i));
                        },
                        a = r(!0),
                        c = r(!1);
                    (c(), s.addEventListener('scroll', a, d));
                    let u = e.options.useScrollendEvent && m;
                    return (
                        u && s.addEventListener('scrollend', c, d),
                        () => {
                            (s.removeEventListener('scroll', a), u && s.removeEventListener('scrollend', c));
                        }
                    );
                },
                g = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let i = e.targetWindow;
                    if (!i) return;
                    let l = 0,
                        n =
                            e.options.useScrollendEvent && m
                                ? () => void 0
                                : o(
                                      i,
                                      () => {
                                          t(l, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        r = (i) => () => {
                            ((l = s[e.options.horizontal ? 'scrollX' : 'scrollY']), n(), t(l, i));
                        },
                        a = r(!0),
                        c = r(!1);
                    (c(), s.addEventListener('scroll', a, d));
                    let u = e.options.useScrollendEvent && m;
                    return (
                        u && s.addEventListener('scrollend', c, d),
                        () => {
                            (s.removeEventListener('scroll', a), u && s.removeEventListener('scrollend', c));
                        }
                    );
                },
                p = (e, t, s) => {
                    if (null == t ? void 0 : t.borderBoxSize) {
                        let e = t.borderBoxSize[0];
                        if (e) return Math.round(e[s.options.horizontal ? 'inlineSize' : 'blockSize']);
                    }
                    return Math.round(e.getBoundingClientRect()[s.options.horizontal ? 'width' : 'height']);
                },
                v = (e, { adjustments: t = 0, behavior: s }, i) => {
                    var l, n;
                    null == (n = null == (l = i.scrollElement) ? void 0 : l.scrollTo) || n.call(l, { [i.options.horizontal ? 'left' : 'top']: e + t, behavior: s });
                },
                _ = (e, { adjustments: t = 0, behavior: s }, i) => {
                    var l, n;
                    null == (n = null == (l = i.scrollElement) ? void 0 : l.scrollTo) || n.call(l, { [i.options.horizontal ? 'left' : 'top']: e + t, behavior: s });
                };
            class C {
                constructor(e) {
                    ((this.unsubs = []),
                        (this.scrollElement = null),
                        (this.targetWindow = null),
                        (this.isScrolling = !1),
                        (this.scrollToIndexTimeoutId = null),
                        (this.measurementsCache = []),
                        (this.itemSizeCache = new Map()),
                        (this.pendingMeasuredCacheIndexes = []),
                        (this.scrollRect = null),
                        (this.scrollOffset = null),
                        (this.scrollDirection = null),
                        (this.scrollAdjustments = 0),
                        (this.elementsCache = new Map()),
                        (this.observer = (() => {
                            let e = null,
                                t = () =>
                                    e ||
                                    (this.targetWindow && this.targetWindow.ResizeObserver
                                        ? (e = new this.targetWindow.ResizeObserver((e) => {
                                              e.forEach((e) => {
                                                  let t = () => {
                                                      this._measureElement(e.target, e);
                                                  };
                                                  this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(t) : t();
                                              });
                                          }))
                                        : null);
                            return {
                                disconnect: () => {
                                    var s;
                                    (null == (s = t()) || s.disconnect(), (e = null));
                                },
                                observe: (e) => {
                                    var s;
                                    return null == (s = t()) ? void 0 : s.observe(e, { box: 'border-box' });
                                },
                                unobserve: (e) => {
                                    var s;
                                    return null == (s = t()) ? void 0 : s.unobserve(e);
                                },
                            };
                        })()),
                        (this.range = null),
                        (this.setOptions = (e) => {
                            (Object.entries(e).forEach(([t, s]) => {
                                void 0 === s && delete e[t];
                            }),
                                (this.options = {
                                    debug: !1,
                                    initialOffset: 0,
                                    overscan: 1,
                                    paddingStart: 0,
                                    paddingEnd: 0,
                                    scrollPaddingStart: 0,
                                    scrollPaddingEnd: 0,
                                    horizontal: !1,
                                    getItemKey: a,
                                    rangeExtractor: c,
                                    onChange: () => {},
                                    measureElement: p,
                                    initialRect: { width: 0, height: 0 },
                                    scrollMargin: 0,
                                    gap: 0,
                                    indexAttribute: 'data-index',
                                    initialMeasurementsCache: [],
                                    lanes: 1,
                                    isScrollingResetDelay: 150,
                                    enabled: !0,
                                    isRtl: !1,
                                    useScrollendEvent: !1,
                                    useAnimationFrameWithResizeObserver: !1,
                                    ...e,
                                }));
                        }),
                        (this.notify = (e) => {
                            var t, s;
                            null == (s = (t = this.options).onChange) || s.call(t, this, e);
                        }),
                        (this.maybeNotify = n(
                            () => (this.calculateRange(), [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]),
                            (e) => {
                                this.notify(e);
                            },
                            {
                                key: !1,
                                debug: () => this.options.debug,
                                initialDeps: [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null],
                            },
                        )),
                        (this.cleanup = () => {
                            (this.unsubs.filter(Boolean).forEach((e) => e()),
                                (this.unsubs = []),
                                this.observer.disconnect(),
                                (this.scrollElement = null),
                                (this.targetWindow = null));
                        }),
                        (this._didMount = () => () => {
                            this.cleanup();
                        }),
                        (this._willUpdate = () => {
                            var e;
                            let t = this.options.enabled ? this.options.getScrollElement() : null;
                            if (this.scrollElement !== t) {
                                if ((this.cleanup(), !t)) return void this.maybeNotify();
                                ((this.scrollElement = t),
                                    this.scrollElement && 'ownerDocument' in this.scrollElement
                                        ? (this.targetWindow = this.scrollElement.ownerDocument.defaultView)
                                        : (this.targetWindow = (null == (e = this.scrollElement) ? void 0 : e.window) ?? null),
                                    this.elementsCache.forEach((e) => {
                                        this.observer.observe(e);
                                    }),
                                    this._scrollToOffset(this.getScrollOffset(), { adjustments: void 0, behavior: void 0 }),
                                    this.unsubs.push(
                                        this.options.observeElementRect(this, (e) => {
                                            ((this.scrollRect = e), this.maybeNotify());
                                        }),
                                    ),
                                    this.unsubs.push(
                                        this.options.observeElementOffset(this, (e, t) => {
                                            ((this.scrollAdjustments = 0),
                                                (this.scrollDirection = t ? (this.getScrollOffset() < e ? 'forward' : 'backward') : null),
                                                (this.scrollOffset = e),
                                                (this.isScrolling = t),
                                                this.maybeNotify());
                                        }),
                                    ));
                            }
                        }),
                        (this.getSize = () =>
                            this.options.enabled
                                ? ((this.scrollRect = this.scrollRect ?? this.options.initialRect), this.scrollRect[this.options.horizontal ? 'width' : 'height'])
                                : ((this.scrollRect = null), 0)),
                        (this.getScrollOffset = () =>
                            this.options.enabled
                                ? ((this.scrollOffset =
                                      this.scrollOffset ?? ('function' == typeof this.options.initialOffset ? this.options.initialOffset() : this.options.initialOffset)),
                                  this.scrollOffset)
                                : ((this.scrollOffset = null), 0)),
                        (this.getFurthestMeasurement = (e, t) => {
                            let s = new Map(),
                                i = new Map();
                            for (let l = t - 1; l >= 0; l--) {
                                let t = e[l];
                                if (s.has(t.lane)) continue;
                                let n = i.get(t.lane);
                                if ((null == n || t.end > n.end ? i.set(t.lane, t) : t.end < n.end && s.set(t.lane, !0), s.size === this.options.lanes)) break;
                            }
                            return i.size === this.options.lanes
                                ? Array.from(i.values()).sort((e, t) => (e.end === t.end ? e.index - t.index : e.end - t.end))[0]
                                : void 0;
                        }),
                        (this.getMeasurementOptions = n(
                            () => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled],
                            (e, t, s, i, l) => ((this.pendingMeasuredCacheIndexes = []), { count: e, paddingStart: t, scrollMargin: s, getItemKey: i, enabled: l }),
                            { key: !1 },
                        )),
                        (this.getMeasurements = n(
                            () => [this.getMeasurementOptions(), this.itemSizeCache],
                            ({ count: e, paddingStart: t, scrollMargin: s, getItemKey: i, enabled: l }, n) => {
                                if (!l) return ((this.measurementsCache = []), this.itemSizeCache.clear(), []);
                                0 === this.measurementsCache.length &&
                                    ((this.measurementsCache = this.options.initialMeasurementsCache),
                                    this.measurementsCache.forEach((e) => {
                                        this.itemSizeCache.set(e.key, e.size);
                                    }));
                                let r = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
                                this.pendingMeasuredCacheIndexes = [];
                                let o = this.measurementsCache.slice(0, r);
                                for (let l = r; l < e; l++) {
                                    let e = i(l),
                                        r = 1 === this.options.lanes ? o[l - 1] : this.getFurthestMeasurement(o, l),
                                        a = r ? r.end + this.options.gap : t + s,
                                        c = n.get(e),
                                        u = 'number' == typeof c ? c : this.options.estimateSize(l),
                                        d = a + u,
                                        h = r ? r.lane : l % this.options.lanes;
                                    o[l] = { index: l, start: a, size: u, end: d, key: e, lane: h };
                                }
                                return ((this.measurementsCache = o), o);
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.calculateRange = n(
                            () => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes],
                            (e, t, s, i) =>
                                (this.range =
                                    e.length > 0 && t > 0
                                        ? (function ({ measurements: e, outerSize: t, scrollOffset: s, lanes: i }) {
                                              let l = e.length - 1,
                                                  n = b(0, l, (t) => e[t].start, s),
                                                  r = n;
                                              if (1 === i) for (; r < l && e[r].end < s + t;) r++;
                                              else if (i > 1) {
                                                  let o = Array(i).fill(0);
                                                  for (; r < l && o.some((e) => e < s + t);) {
                                                      let t = e[r];
                                                      ((o[t.lane] = t.end), r++);
                                                  }
                                                  let a = Array(i).fill(s + t);
                                                  for (; n > 0 && a.some((e) => e >= s);) {
                                                      let t = e[n];
                                                      ((a[t.lane] = t.start), n--);
                                                  }
                                                  ((n = Math.max(0, n - (n % i))), (r = Math.min(l, r + (i - 1 - (r % i)))));
                                              }
                                              return { startIndex: n, endIndex: r };
                                          })({ measurements: e, outerSize: t, scrollOffset: s, lanes: i })
                                        : null),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualIndexes = n(
                            () => {
                                let e = null,
                                    t = null,
                                    s = this.calculateRange();
                                return (
                                    s && ((e = s.startIndex), (t = s.endIndex)),
                                    this.maybeNotify.updateDeps([this.isScrolling, e, t]),
                                    [this.options.rangeExtractor, this.options.overscan, this.options.count, e, t]
                                );
                            },
                            (e, t, s, i, l) => (null === i || null === l ? [] : e({ startIndex: i, endIndex: l, overscan: t, count: s })),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.indexFromElement = (e) => {
                            let t = this.options.indexAttribute,
                                s = e.getAttribute(t);
                            return s ? parseInt(s, 10) : (console.warn(`Missing attribute name '${t}={index}' on measured element.`), -1);
                        }),
                        (this._measureElement = (e, t) => {
                            let s = this.indexFromElement(e),
                                i = this.measurementsCache[s];
                            if (!i) return;
                            let l = i.key,
                                n = this.elementsCache.get(l);
                            (n !== e && (n && this.observer.unobserve(n), this.observer.observe(e), this.elementsCache.set(l, e)),
                                e.isConnected && this.resizeItem(s, this.options.measureElement(e, t, this)));
                        }),
                        (this.resizeItem = (e, t) => {
                            let s = this.measurementsCache[e];
                            if (!s) return;
                            let i = t - (this.itemSizeCache.get(s.key) ?? s.size);
                            0 !== i &&
                                ((void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange
                                    ? this.shouldAdjustScrollPositionOnItemSizeChange(s, i, this)
                                    : s.start < this.getScrollOffset() + this.scrollAdjustments) &&
                                    this._scrollToOffset(this.getScrollOffset(), { adjustments: (this.scrollAdjustments += i), behavior: void 0 }),
                                this.pendingMeasuredCacheIndexes.push(s.index),
                                (this.itemSizeCache = new Map(this.itemSizeCache.set(s.key, t))),
                                this.notify(!1));
                        }),
                        (this.measureElement = (e) => {
                            if (!e)
                                return void this.elementsCache.forEach((e, t) => {
                                    e.isConnected || (this.observer.unobserve(e), this.elementsCache.delete(t));
                                });
                            this._measureElement(e, void 0);
                        }),
                        (this.getVirtualItems = n(
                            () => [this.getVirtualIndexes(), this.getMeasurements()],
                            (e, t) => {
                                let s = [];
                                for (let i = 0, l = e.length; i < l; i++) {
                                    let l = t[e[i]];
                                    s.push(l);
                                }
                                return s;
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualItemForOffset = (e) => {
                            let t = this.getMeasurements();
                            if (0 !== t.length) return r(t[b(0, t.length - 1, (e) => r(t[e]).start, e)]);
                        }),
                        (this.getOffsetForAlignment = (e, t, s = 0) => {
                            let i = this.getSize(),
                                l = this.getScrollOffset();
                            ('auto' === t && (t = e >= l + i ? 'end' : 'start'), 'center' === t ? (e += (s - i) / 2) : 'end' === t && (e -= i));
                            let n = this.options.horizontal ? 'scrollWidth' : 'scrollHeight';
                            return Math.max(
                                Math.min(
                                    (this.scrollElement
                                        ? 'document' in this.scrollElement
                                            ? this.scrollElement.document.documentElement[n]
                                            : this.scrollElement[n]
                                        : 0) - i,
                                    e,
                                ),
                                0,
                            );
                        }),
                        (this.getOffsetForIndex = (e, t = 'auto') => {
                            e = Math.max(0, Math.min(e, this.options.count - 1));
                            let s = this.measurementsCache[e];
                            if (!s) return;
                            let i = this.getSize(),
                                l = this.getScrollOffset();
                            if ('auto' === t)
                                if (s.end >= l + i - this.options.scrollPaddingEnd) t = 'end';
                                else {
                                    if (!(s.start <= l + this.options.scrollPaddingStart)) return [l, t];
                                    t = 'start';
                                }
                            let n = 'end' === t ? s.end + this.options.scrollPaddingEnd : s.start - this.options.scrollPaddingStart;
                            return [this.getOffsetForAlignment(n, t, s.size), t];
                        }),
                        (this.isDynamicMode = () => this.elementsCache.size > 0),
                        (this.cancelScrollToIndex = () => {
                            null !== this.scrollToIndexTimeoutId &&
                                this.targetWindow &&
                                (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), (this.scrollToIndexTimeoutId = null));
                        }),
                        (this.scrollToOffset = (e, { align: t = 'start', behavior: s } = {}) => {
                            (this.cancelScrollToIndex(),
                                'smooth' === s && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'),
                                this._scrollToOffset(this.getOffsetForAlignment(e, t), { adjustments: void 0, behavior: s }));
                        }),
                        (this.scrollToIndex = (e, { align: t = 'auto', behavior: s } = {}) => {
                            ((e = Math.max(0, Math.min(e, this.options.count - 1))),
                                this.cancelScrollToIndex(),
                                'smooth' === s && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'));
                            let i = this.getOffsetForIndex(e, t);
                            if (!i) return;
                            let [l, n] = i;
                            (this._scrollToOffset(l, { adjustments: void 0, behavior: s }),
                                'smooth' !== s &&
                                    this.isDynamicMode() &&
                                    this.targetWindow &&
                                    (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
                                        if (((this.scrollToIndexTimeoutId = null), this.elementsCache.has(this.options.getItemKey(e)))) {
                                            let [t] = r(this.getOffsetForIndex(e, n));
                                            1 > Math.abs(t - this.getScrollOffset()) || this.scrollToIndex(e, { align: n, behavior: s });
                                        } else this.scrollToIndex(e, { align: n, behavior: s });
                                    })));
                        }),
                        (this.scrollBy = (e, { behavior: t } = {}) => {
                            (this.cancelScrollToIndex(),
                                'smooth' === t && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'),
                                this._scrollToOffset(this.getScrollOffset() + e, { adjustments: void 0, behavior: t }));
                        }),
                        (this.getTotalSize = () => {
                            var e;
                            let t,
                                s = this.getMeasurements();
                            if (0 === s.length) t = this.options.paddingStart;
                            else if (1 === this.options.lanes) t = (null == (e = s[s.length - 1]) ? void 0 : e.end) ?? 0;
                            else {
                                let e = Array(this.options.lanes).fill(null),
                                    i = s.length - 1;
                                for (; i > 0 && e.some((e) => null === e);) {
                                    let t = s[i];
                                    (null === e[t.lane] && (e[t.lane] = t.end), i--);
                                }
                                t = Math.max(...e.filter((e) => null !== e));
                            }
                            return Math.max(t - this.options.scrollMargin + this.options.paddingEnd, 0);
                        }),
                        (this._scrollToOffset = (e, { adjustments: t, behavior: s }) => {
                            this.options.scrollToFn(e, { behavior: s, adjustments: t }, this);
                        }),
                        (this.measure = () => {
                            ((this.itemSizeCache = new Map()), this.notify(!1));
                        }),
                        this.setOptions(e));
                }
            }
            let b = (e, t, s, i) => {
                    for (; e <= t;) {
                        let l = ((e + t) / 2) | 0,
                            n = s(l);
                        if (n < i) e = l + 1;
                        else {
                            if (!(n > i)) return l;
                            t = l - 1;
                        }
                    }
                    return e > 0 ? e - 1 : 0;
                },
                E = 'undefined' != typeof document ? i.useLayoutEffect : i.useEffect;
            function S(e) {
                let t = i.useReducer(() => ({}), {})[1],
                    s = {
                        ...e,
                        onChange: (s, i) => {
                            var n;
                            (i ? (0, l.flushSync)(t) : t(), null == (n = e.onChange) || n.call(e, s, i));
                        },
                    },
                    [n] = i.useState(() => new C(s));
                return (n.setOptions(s), E(() => n._didMount(), []), E(() => n._willUpdate()), n);
            }
            function x(e) {
                return S({ observeElementRect: u, observeElementOffset: f, scrollToFn: _, ...e });
            }
            function y(e) {
                return S({
                    getScrollElement: () => ('undefined' != typeof document ? window : null),
                    observeElementRect: h,
                    observeElementOffset: g,
                    scrollToFn: v,
                    initialOffset: () => ('undefined' != typeof document ? window.scrollY : 0),
                    ...e,
                });
            }
        },
        60757: (e, t, s) => {
            'use strict';
            s.d(t, { c: () => l });
            var i = s(58217);
            let l = (e) => {
                let { album: t, callback: s, shouldHistoryBack: l } = e;
                return (0, i.l)({ entity: t, callback: s, modalBehavior: void 0 === l ? void 0 : { shouldHistoryBack: l }, preventDefaultWhenSafe: !0 });
            };
        },
        66610: (e, t, s) => {
            'use strict';
            s.d(t, { D: () => a });
            var i = s(53548),
                l = s(24709),
                n = s(88966),
                r = s(87138),
                o = s(46457);
            let a = (0, l.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, n.N)(),
                    t = (0, r.w)(),
                    s = (0, i.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, o.c)((e) => {
                    t?.object && s && s.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        67984: (e, t, s) => {
            'use strict';
            s.d(t, { $: () => _, D: () => p });
            var i = s(88800),
                l = s(65724),
                n = s(35802),
                r = s(53548),
                o = s(35412),
                a = s(97234),
                c = s(90852),
                u = s(17392),
                d = s(53323),
                h = s(18486),
                m = s(31764),
                f = s(44616),
                g = s.n(f),
                p = (function (e) {
                    return ((e.ONE = 'one'), (e.TWO = 'two'), e);
                })({});
            let v = (e) => {
                    let {
                            className: t,
                            forwardRef: s,
                            isShimmerVisible: f,
                            isColumnsShimmerVisible: p,
                            isHeaderWithoutControls: v,
                            maxColumnsCount: _,
                            carouselItemClassName: C,
                            carouselClassName: b,
                            children: E,
                            itemsCountPerColumn: S,
                            shimmer: x,
                            viewAllActionLink: y,
                            blockHeaderClassName: O,
                            additionalControl: k,
                            blockHeaderDescription: w,
                            blockHeaderTitle: T,
                            blockHeaderCoverUrl: N,
                            withBlockHeaderDescription: R,
                            withBlockHeaderCover: A,
                            blockHeaderHeadingVariant: I,
                            isShimmerActive: L,
                            shouldResetCarouselScroll: j,
                            beforeCarousel: P,
                            ...M
                        } = e,
                        [B, D] = (0, r.useState)(),
                        z = (0, r.useId)(),
                        F = (0, r.useRef)(null),
                        W = 'two' === _,
                        H = 'string' == typeof y ? String(y) : '',
                        U = null != p ? p : f,
                        X = (0, r.useCallback)(
                            (e) => {
                                let t = (0, n.A)(e, S).slice(0, W ? 2 : 1);
                                return (
                                    1 === t.length ? D('one') : D('two'),
                                    t.map((e, t) => (0, i.jsx)('div', { className: g().column, 'data-test-id': u.S7.CAROUSEL_WITH_COLUMNS_BLOCK_COLUMN, children: e }, t))
                                );
                            },
                            [S, W],
                        ),
                        $ = (0, r.useMemo)(() => {
                            if (U) return X(Array.from({ length: 2 * S }, (e, t) => (0, r.cloneElement)(x, { key: t })));
                            return X(E);
                        }, [E, X, U, S, x]),
                        K = (0, r.useMemo)(
                            () =>
                                v
                                    ? null
                                    : (0, i.jsxs)('div', {
                                          className: g().controlsContainer,
                                          children: [k, (0, i.jsx)(m.X, { carouselRef: F, className: g().controls, backwardControlClassName: g().backwardControl })],
                                      }),
                            [k, v],
                        );
                    return (
                        (0, r.useEffect)(() => {
                            F.current && j && F.current.scrollTo(0, 0);
                        }, [j]),
                        (0, i.jsxs)('section', {
                            ref: s,
                            className: (0, l.$)(g().root, t),
                            ...(0, o.OZ)(M),
                            children: [
                                (0, i.jsx)(c.B, {
                                    objectType: a.DomainObjectType.Shortcut,
                                    objectId: H,
                                    objectPosX: 1,
                                    objectPosY: 1,
                                    children: (0, i.jsx)(h.T, {
                                        coverUrl: N,
                                        title: T,
                                        description: w,
                                        className: O,
                                        labeledForId: z,
                                        viewAllActionLink: y,
                                        controls: K,
                                        isShimmerVisible: f,
                                        isShimmerActive: L,
                                        withDescription: R,
                                        withCover: A,
                                        headingVariant: I,
                                    }),
                                }),
                                P,
                                (0, i.jsx)(d.F, {
                                    itemClassName: (0, l.$)(g().item, g()['item_columns_'.concat(U && W ? 'two' : B)], C),
                                    className: b,
                                    ref: F,
                                    'aria-labelledby': z,
                                    'data-test-id': u.S7.CAROUSEL_WITH_COLUMNS_BLOCK_CAROUSEL,
                                    children: $,
                                }),
                            ],
                        })
                    );
                },
                _ = (0, r.forwardRef)((e, t) => (0, i.jsx)(v, { forwardRef: t, ...e }));
        },
        69629: (e) => {
            var t = Object.prototype.hasOwnProperty;
            function s(e) {
                return '[Throws: ' + (e ? e.message : '?') + ']';
            }
            function i(e) {
                var i = [];
                return (function e(l) {
                    if (null === l || 'object' != typeof l) return l;
                    if (-1 !== i.indexOf(l)) return '[Circular]';
                    if ((i.push(l), 'function' == typeof l.toJSON))
                        try {
                            var n = e(l.toJSON());
                            return (i.pop(), n);
                        } catch (e) {
                            return s(e);
                        }
                    if (Array.isArray(l)) {
                        var r = l.map(e);
                        return (i.pop(), r);
                    }
                    var o = Object.keys(l).reduce(function (i, n) {
                        return (
                            (i[n] = e(
                                (function (e, i) {
                                    if (t.call(e, i))
                                        try {
                                            return e[i];
                                        } catch (e) {
                                            return s(e);
                                        }
                                    return e[i];
                                })(l, n),
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
        77048: (e, t, s) => {
            (Promise.resolve().then(s.bind(s, 57328)), Promise.resolve().then(s.bind(s, 33699)));
        },
        88021: (e, t, s) => {
            'use strict';
            s.d(t, { Y: () => u });
            var i,
                l = s(14022),
                n = s(53548),
                r = {
                    352: (e) => {
                        e.exports = l;
                    },
                    810: (e) => {
                        e.exports = i || (i = s.t(n, 2));
                    },
                },
                o = {};
            function a(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var s = (o[e] = { exports: {} });
                return (r[e](s, s.exports, a), s.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                let e = a(810),
                    t = a(352);
                c.l = (s) => {
                    let [i, l] = (0, e.useState)(!0),
                        [n, r] = (0, e.useState)(!0),
                        o = () => {
                            let e = null == s ? void 0 : s.current;
                            e && (l(0 === e.scrollLeft), r(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    ((0, e.useEffect)(() => {
                        o();
                    }, [s, o]),
                        (0, e.useEffect)(() => {
                            let e = null == s ? void 0 : s.current;
                            return (
                                null == e || e.addEventListener('scroll', o),
                                window.addEventListener('resize', o),
                                () => {
                                    (null == e || e.removeEventListener('scroll', o), window.removeEventListener('resize', o));
                                }
                            );
                        }, [s, o]));
                    let a = (0, e.useMemo)(
                        () =>
                            (0, t.throttle)(
                                () => {
                                    s && s.current && (s.current.scrollLeft += s.current.offsetWidth / 2);
                                },
                                420,
                                { trailing: !1 },
                            ),
                        [s],
                    );
                    return {
                        swipeBackward: (0, e.useMemo)(
                            () =>
                                (0, t.throttle)(
                                    () => {
                                        s && s.current && (s.current.scrollLeft -= s.current.offsetWidth / 2);
                                    },
                                    420,
                                    { trailing: !1 },
                                ),
                            [s],
                        ),
                        swipeForward: a,
                        shouldBackwardButtonBeDisabled: i,
                        shouldForwardButtonBeDisabled: n,
                        shouldHideControls: i && n,
                    };
                };
            })(),
                c.X);
            var u = c.l;
        },
        89544: (e) => {
            e.exports = {
                root: 'CarouselControls_root__E_hwc',
                control: 'CarouselControls_control__L8t4i',
                control_hidden: 'CarouselControls_control_hidden__pLrn6',
                control_withSecondaryColor: 'CarouselControls_control_withSecondaryColor__KqSEN',
            };
        },
        89916: (e, t, s) => {
            'use strict';
            s.d(t, { GX: () => n.G, X1: () => i.X, m5: () => l.m });
            var i = s(46606),
                l = s(91136),
                n = s(19840);
            s(17017);
        },
        90852: (e, t, s) => {
            'use strict';
            s.d(t, { B: () => c });
            var i = s(88800),
                l = s(53548),
                n = s(24709),
                r = s(66368),
                o = s(37556),
                a = s(88966);
            let c = (0, n.B)(
                { kind: 'provider', requiredProps: ['objectType', 'objectId', 'objectPosX', 'objectPosY'], pendingProps: ['objectId'], scope: 'object' },
                ({ children: e, objectId: t, objectPosX: s, objectPosY: n, objectType: c }) => {
                    let u = (0, a.N)(),
                        d = (0, l.useContext)(r.p)?.loadedSession,
                        h = [c, t, s, n].join(':'),
                        [m, f] = (0, l.useState)(() => ({ client: u, identity: h, blockSession: d, viewSession: u.createBlockViewSession() }));
                    (m.client !== u || m.identity !== h || m.blockSession !== d) &&
                        f({ client: u, identity: h, blockSession: d, viewSession: u.createBlockViewSession() });
                    let g = (0, l.useMemo)(
                        () => ({ activeViewSession: null, scope: { objectId: t, objectPosX: s, objectPosY: n, objectType: c }, viewSession: m.viewSession }),
                        [t, s, n, c, m.viewSession],
                    );
                    return (0, i.jsx)(o.l, { value: g, children: e });
                },
            );
        },
        91136: (e, t, s) => {
            'use strict';
            s.d(t, { m: () => l });
            class i extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: s = 'E_INTERNAL', data: l = {}, ...n } = t,
                        r = e || 'Internal error';
                    (super(r, n), (this.message = r), (this.code = s), (this.data = l), (this.stack = Error(r).stack), Object.setPrototypeOf(this, i.prototype));
                }
            }
            class l extends i {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...s } = {}) {
                    (super(e, { code: t, ...s }), Object.setPrototypeOf(this, l.prototype));
                }
            }
        },
        95259: (e, t, s) => {
            'use strict';
            s.d(t, { T: () => n });
            var i,
                l = s(18593);
            !(function (e) {
                ((e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'));
            })(i || (i = {}));
            let n = (e, t) => {
                var s, n;
                return e.type === i.ALBUM
                    ? { type: l.K.Album, meta: { id: (null == (n = e.album) ? void 0 : n.id) || 0 }, from: t || '' }
                    : { type: l.K.Playlist, meta: { id: (null == (s = e.playlist) ? void 0 : s.id) || '' }, from: t || '' };
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7191, 9904, 8655, 3078, 8194, 1833, 918, 1191, 1041, 3375, 3730, 6706, 4771, 2662, 6904, 1898, 2058, 3578, 8628, 4378, 9780, 8283, 9332, 2837, 4732, 9087,
                3979, 6719, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 6374, 8979, 818, 7053, 7051, 763, 2670, 7358,
            ],
            () => e((e.s = 77048)),
        ),
            (_N_E = e.O()));
    },
]);
