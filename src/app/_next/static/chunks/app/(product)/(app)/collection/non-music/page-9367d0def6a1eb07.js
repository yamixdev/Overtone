(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5385],
    {
        23931: (e) => {
            e.exports = { title: 'CollectionShelfShimmer_title__X3d9J' };
        },
        32187: (e) => {
            e.exports = {
                header: 'CollectionShelfLiked_header__u9MqV',
                shelfColumn: 'CollectionShelfLiked_shelfColumn__4KX_5',
                important: 'CollectionShelfLiked_important__0K3qk',
            };
        },
        35249: (e, t, o) => {
            (Promise.resolve().then(o.bind(o, 57328)), Promise.resolve().then(o.bind(o, 82594)));
        },
        36623: (e, t, o) => {
            'use strict';
            o.d(t, { E: () => d });
            var l = o(88800),
                s = o(84961),
                i = o(19994),
                n = o(98644),
                a = o(93015),
                r = o(23931),
                c = o.n(r);
            let m = () => Array.from({ length: 5 }, (e) => (0, l.jsx)(a.D, { variant: n.X.PLAYLIST, className: c().track, isActive: !0 }, e)),
                d = (0, s.PA)((e) => {
                    let { className: t, withHeader: o } = e;
                    return (0, l.jsxs)('div', {
                        className: t,
                        children: [o && (0, l.jsx)(i.W, { radius: 'l', width: 100, height: 24, className: c().title, isActive: !0 }), (0, l.jsx)(m, {})],
                    });
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
        51059: (e, t, o) => {
            'use strict';
            o.d(t, { m: () => x });
            var l = o(88800),
                s = o(65724),
                i = o(84961),
                n = o(53548),
                a = o(17392),
                r = o(79070),
                c = o(46811),
                m = o(76843),
                d = o(4370),
                u = o(72288),
                _ = o(98644),
                C = o(67984),
                h = o(93015),
                k = o(70441),
                N = o(36623),
                p = o(32187),
                f = o.n(p);
            let x = (0, i.PA)((e) => {
                var t;
                let { className: o, itemsCount: i, headerClassName: p, carouselClassName: x } = e,
                    {
                        collection: {
                            shelf: { liked: j },
                        },
                    } = (0, u.g)(),
                    v = (0, r.L)(() => {
                        var e;
                        return null == (e = j.entities)
                            ? void 0
                            : e.map((e, t) => {
                                  if (e.album) return (0, l.jsx)(c.M, { album: e.album }, e.album.getKey(t));
                                  let o = (0, k.q)(e.track, t, j.typeForFrom);
                                  return (0, l.jsx)(m.K, { track: e.track, playContextParams: o, withPodcastName: !0 }, e.track.getKey(t));
                              });
                    });
                return (j.isNeededToLoad && (0, n.use)(j.getData()), !j.isLoading && (null == (t = j.entities) ? void 0 : t.length))
                    ? (0, l.jsx)(C.$, {
                          shimmer: (0, l.jsx)(h.D, { variant: _.X.PLAYLIST, isActive: !0 }),
                          isShimmerActive: !0,
                          isShimmerVisible: j.isLoading,
                          className: o,
                          carouselItemClassName: (0, s.$)(f().shelfColumn, f().important),
                          blockHeaderClassName: (0, s.$)(f().header, p),
                          carouselClassName: x,
                          blockHeaderTitle: j.title,
                          itemsCountPerColumn: null != i ? i : 0,
                          maxColumnsCount: C.D.ONE,
                          viewAllActionLink: d.Z.collectionShelfLiked.href,
                          'data-test-id': a.Xk.collection.COLLECTION_SHELF_PAGE_SHELF_LIKED_BLOCK,
                          children: v,
                      })
                    : (0, l.jsx)(N.E, { className: o, withHeader: !0 });
            });
        },
        54378: (e, t, o) => {
            'use strict';
            o.d(t, { M: () => m });
            var l = o(88800),
                s = o(65724),
                i = o(88969),
                n = o(52300),
                a = o(29504),
                r = o(78212),
                c = o.n(r);
            let m = (e) => {
                let { className: t } = e;
                return (0, l.jsxs)('div', {
                    className: (0, s.$)(c().emptyContent, t),
                    children: [
                        (0, l.jsx)(n.I, { className: c().emptyContentIcon, size: 'l', variant: 'album' }),
                        (0, l.jsx)(a.DZ, {
                            className: c().emptyContentTitle,
                            variant: 'h3',
                            size: 'xs',
                            children: (0, l.jsx)(i.A, { id: 'error-messages.empty-collection-podcasts-and-books' }),
                        }),
                    ],
                });
            };
        },
        67984: (e, t, o) => {
            'use strict';
            o.d(t, { $: () => p, D: () => k });
            var l = o(88800),
                s = o(65724),
                i = o(35802),
                n = o(53548),
                a = o(35412),
                r = o(97234),
                c = o(90852),
                m = o(17392),
                d = o(53323),
                u = o(18486),
                _ = o(31764),
                C = o(44616),
                h = o.n(C),
                k = (function (e) {
                    return ((e.ONE = 'one'), (e.TWO = 'two'), e);
                })({});
            let N = (e) => {
                    let {
                            className: t,
                            forwardRef: o,
                            isShimmerVisible: C,
                            isColumnsShimmerVisible: k,
                            isHeaderWithoutControls: N,
                            maxColumnsCount: p,
                            carouselItemClassName: f,
                            carouselClassName: x,
                            children: j,
                            itemsCountPerColumn: v,
                            shimmer: g,
                            viewAllActionLink: L,
                            blockHeaderClassName: b,
                            additionalControl: A,
                            blockHeaderDescription: S,
                            blockHeaderTitle: w,
                            blockHeaderCoverUrl: y,
                            withBlockHeaderDescription: P,
                            withBlockHeaderCover: E,
                            blockHeaderHeadingVariant: M,
                            isShimmerActive: B,
                            shouldResetCarouselScroll: O,
                            beforeCarousel: I,
                            ...T
                        } = e,
                        [D, R] = (0, n.useState)(),
                        W = (0, n.useId)(),
                        H = (0, n.useRef)(null),
                        F = 'two' === p,
                        K = 'string' == typeof L ? String(L) : '',
                        X = null != k ? k : C,
                        U = (0, n.useCallback)(
                            (e) => {
                                let t = (0, i.A)(e, v).slice(0, F ? 2 : 1);
                                return (
                                    1 === t.length ? R('one') : R('two'),
                                    t.map((e, t) => (0, l.jsx)('div', { className: h().column, 'data-test-id': m.S7.CAROUSEL_WITH_COLUMNS_BLOCK_COLUMN, children: e }, t))
                                );
                            },
                            [v, F],
                        ),
                        q = (0, n.useMemo)(() => {
                            if (X) return U(Array.from({ length: 2 * v }, (e, t) => (0, n.cloneElement)(g, { key: t })));
                            return U(j);
                        }, [j, U, X, v, g]),
                        V = (0, n.useMemo)(
                            () =>
                                N
                                    ? null
                                    : (0, l.jsxs)('div', {
                                          className: h().controlsContainer,
                                          children: [A, (0, l.jsx)(_.X, { carouselRef: H, className: h().controls, backwardControlClassName: h().backwardControl })],
                                      }),
                            [A, N],
                        );
                    return (
                        (0, n.useEffect)(() => {
                            H.current && O && H.current.scrollTo(0, 0);
                        }, [O]),
                        (0, l.jsxs)('section', {
                            ref: o,
                            className: (0, s.$)(h().root, t),
                            ...(0, a.OZ)(T),
                            children: [
                                (0, l.jsx)(c.B, {
                                    objectType: r.DomainObjectType.Shortcut,
                                    objectId: K,
                                    objectPosX: 1,
                                    objectPosY: 1,
                                    children: (0, l.jsx)(u.T, {
                                        coverUrl: y,
                                        title: w,
                                        description: S,
                                        className: b,
                                        labeledForId: W,
                                        viewAllActionLink: L,
                                        controls: V,
                                        isShimmerVisible: C,
                                        isShimmerActive: B,
                                        withDescription: P,
                                        withCover: E,
                                        headingVariant: M,
                                    }),
                                }),
                                I,
                                (0, l.jsx)(d.F, {
                                    itemClassName: (0, s.$)(h().item, h()['item_columns_'.concat(X && F ? 'two' : D)], f),
                                    className: x,
                                    ref: H,
                                    'aria-labelledby': W,
                                    'data-test-id': m.S7.CAROUSEL_WITH_COLUMNS_BLOCK_CAROUSEL,
                                    children: q,
                                }),
                            ],
                        })
                    );
                },
                p = (0, n.forwardRef)((e, t) => (0, l.jsx)(N, { forwardRef: t, ...e }));
        },
        78212: (e) => {
            e.exports = {
                emptyContent: 'CollectionNonMusicEmpty_emptyContent__Km4Xo',
                emptyContentIcon: 'CollectionNonMusicEmpty_emptyContentIcon__ZHVte',
                emptyContentTitle: 'CollectionNonMusicEmpty_emptyContentTitle__PJIFd',
            };
        },
        82594: (e, t, o) => {
            'use strict';
            o.d(t, { CollectionNonMusicPage: () => B });
            var l = o(88800),
                s = o(65724),
                i = o(84961),
                n = o(53548),
                a = o(2058),
                r = o(88969),
                c = o(97234),
                m = o(59724),
                d = o(17392),
                u = o(79070),
                _ = o(66719),
                C = o(29504),
                h = o(32596),
                k = o(10079),
                N = o(69630),
                p = o(98427),
                f = o(46422),
                x = o(44230),
                j = o(37670),
                v = o(4370),
                g = o(72288),
                L = o(47934),
                b = o(86790),
                A = o(60266),
                S = o(93317),
                w = o(37770),
                y = o(51059),
                P = o(54378),
                E = o(87782),
                M = o.n(E);
            let B = (0, i.PA)(() => {
                var e;
                let {
                        user: t,
                        collection: { nonMusicLiked: o, shelf: i },
                        library: E,
                    } = (0, g.g)(),
                    { formatMessage: B } = (0, a.A)(),
                    { contentScrollRef: O, setContentScrollRef: I } = (0, x.g)(),
                    T = (0, f.W)();
                if (((0, j.J)(o.isResolved), o.isRejected && !i.hasLiked)) return (0, l.jsx)(h.SomethingWentWrong, {});
                (0, n.useEffect)(
                    () => () => {
                        (o.reset(), i.reset());
                    },
                    [o, i],
                );
                let D = (0, u.L)(() => {
                        var e;
                        return null == (e = o.items)
                            ? void 0
                            : e
                                  .slice(0, 10)
                                  .map((e, t) =>
                                      e
                                          ? (0, l.jsx)(k.a, { album: e, contentLinesCount: 3, withLikesCount: !0, withAddition: !1 }, null == e ? void 0 : e.id)
                                          : (0, l.jsx)(w.V, {}, 'shimmer-'.concat(t)),
                                  );
                    }),
                    R = (0, n.useMemo)(() => {
                        var e;
                        return !o.isEmptyItems || o.isRejected || i.hasLiked
                            ? o.isRejected || (!(null == (e = o.items) ? void 0 : e.length) && o.requestsCount)
                                ? null
                                : (0, l.jsx)(L.O, {
                                      headerClassName: M().blockHeader,
                                      containerClassName: M().carousel,
                                      isShimmerVisible: o.isLoading,
                                      isShimmerActive: !0,
                                      title: B({ id: 'page.delayed-non-music' }),
                                      viewAllActionLink: v.Z.collectionNonMusicLiked.href,
                                      children: D,
                                  })
                            : (0, l.jsx)(P.M, {});
                    }, [o.isLoading, B, D, o.isRejected, i.hasLiked, o.isEmptyItems, null == (e = o.items) ? void 0 : e.length, o.requestsCount]);
                if (t.account.data.uid && o.isNeededToLoad) {
                    let e = [o.getData({ userId: t.account.data.uid, metaType: 'podcast', pageSize: 10 }), E.getData()];
                    (0, n.use)(Promise.allSettled(e));
                }
                return (0, l.jsx)(m.a, {
                    pageId: c.AppScreen.OwnPodcasts,
                    pageIdForFrom: p.b.OWN_PODCASTS,
                    children: (0, l.jsx)(N.h, {
                        scrollElement: O,
                        outerTitle: B({ id: 'page.podcasts-and-books' }),
                        children: (0, l.jsxs)('div', {
                            className: M().root,
                            'data-test-id': d.Xk.collection.COLLECTION_NON_MUSIC_PAGE,
                            children: [
                                (0, l.jsx)(S.Y, {
                                    variant: S.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: T.canBack,
                                    children: (0, l.jsx)(C.DZ, {
                                        variant: 'h2',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        children: (0, l.jsx)(r.A, { id: 'page.podcasts-and-books' }),
                                    }),
                                }),
                                (0, l.jsx)(_.N, {
                                    ref: I,
                                    containerClassName: (0, s.$)(M().scrollableContainer, M().important),
                                    className: M().root,
                                    children: (0, l.jsxs)('div', {
                                        className: M().content,
                                        children: [
                                            (0, l.jsxs)('div', {
                                                className: M().likedBlocks,
                                                children: [
                                                    R,
                                                    i.hasLiked &&
                                                        (0, l.jsx)(y.m, {
                                                            carouselClassName: M().shelfBlockCarousel,
                                                            headerClassName: M().shelfBlockHeader,
                                                            itemsCount: 5,
                                                        }),
                                                ],
                                            }),
                                            (0, l.jsx)(A.A, { children: (0, l.jsx)(b.w, { className: M().footer }) }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        87782: (e) => {
            e.exports = {
                root: 'CollectionNonMusicPage_root__U6DRX',
                scrollableContainer: 'CollectionNonMusicPage_scrollableContainer__iIZvl',
                important: 'CollectionNonMusicPage_important__Y9D5x',
                content: 'CollectionNonMusicPage_content__d8E7R',
                likedBlocks: 'CollectionNonMusicPage_likedBlocks__cNqyq',
                carousel: 'CollectionNonMusicPage_carousel__zDCY0',
                blockHeader: 'CollectionNonMusicPage_blockHeader__PoAFY',
                footer: 'CollectionNonMusicPage_footer__9feIA',
                shelfBlockCarousel: 'CollectionNonMusicPage_shelfBlockCarousel__Kd6DB',
                shelfBlockHeader: 'CollectionNonMusicPage_shelfBlockHeader__yfFcf',
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7191, 9904, 3078, 1833, 8194, 1191, 8655, 918, 1041, 3375, 7599, 5255, 6706, 4771, 2662, 6904, 1898, 2058, 3578, 8628, 4378, 9780, 8283, 9332, 1102, 4732,
                9087, 3979, 6719, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 6374, 2088, 8979, 818, 7053, 3300, 7051, 763, 2670, 7358,
            ],
            () => e((e.s = 35249)),
        ),
            (_N_E = e.O()));
    },
]);
