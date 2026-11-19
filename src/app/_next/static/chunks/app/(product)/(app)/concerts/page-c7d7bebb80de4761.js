(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9940],
    {
        3515: (e) => {
            e.exports = { root: 'LocationDialogSearchField_root__eYUkc', searchInput: 'LocationDialogSearchField_searchInput__7O9xi' };
        },
        5818: (e) => {
            e.exports = {
                coverBlock: 'ArtistCard_coverBlock__YCSus',
                like: 'ArtistCard_like__jmlKc',
                root: 'ArtistCard_root__F4RfA',
                root_selected: 'ArtistCard_root_selected__9Djbq',
                cover: 'ArtistCard_cover__RSTvK',
                image: 'ArtistCard_image__Uab5w',
                name: 'ArtistCard_name__IF9yZ',
                icon: 'ArtistCard_icon__PjbJI',
            };
        },
        10799: (e) => {
            e.exports = {
                root: 'LocationSelector_root__ZHQJl',
                root_disabled: 'LocationSelector_root_disabled__pvwot',
                icon: 'LocationSelector_icon__4o_En',
                text: 'LocationSelector_text__ZgYJ0',
                shimmer: 'LocationSelector_shimmer__NKWIA',
            };
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
        17071: (e, t, o) => {
            'use strict';
            o.d(t, { M: () => r });
            var r = (function (e) {
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
        20129: (e, t, o) => {
            'use strict';
            o.d(t, { p: () => H });
            var r = o(88800),
                a = o(65724),
                n = o(84961),
                i = o(53548),
                s = o(2058),
                l = o(88969),
                c = o(17392),
                d = o(50408),
                u = o(96817),
                _ = o(11372),
                m = o(98225),
                h = o(29504),
                p = o(32353),
                C = o(29595),
                x = o(74965),
                b = o(51318),
                S = o(17071),
                T = o(38860),
                g = o(72288),
                j = o(27506),
                v = o(97956),
                L = o(74773),
                E = o(66943),
                f = o(94058),
                A = o(37770),
                I = o(87366),
                O = o(76099),
                N = o(79418),
                y = o(91177),
                R = o(29832),
                w = o(52300),
                D = o(7555),
                k = o(81877),
                M = o(60978),
                P = o(5818),
                z = o.n(P);
            let F = (0, n.PA)((e) => {
                let { className: t, artist: o } = e,
                    n = (0, y.D)(),
                    {
                        wizard: { toggleArtistLike: s, isArtistLiked: l },
                    } = (0, g.g)(),
                    { id: d, name: _, coverUri: m } = o,
                    p = (0, i.useCallback)(() => {
                        s(d);
                    }, [s, d]),
                    C = l(d),
                    x = (0, i.useMemo)(
                        () =>
                            (0, r.jsx)(D.t, {
                                className: z().cover,
                                radius: 'round',
                                'data-test-id': c.e8.wizard.ARTIST_CARD,
                                children: (0, r.jsxs)(u.$, {
                                    radius: 'round',
                                    className: z().coverBlock,
                                    variant: 'default',
                                    onClick: p,
                                    withRipple: !1,
                                    withHover: !1,
                                    'aria-pressed': C,
                                    'aria-label': _,
                                    'data-test-id': c.e8.wizard.ARTIST_CARD_BUTTON,
                                    children: [
                                        (0, r.jsx)(k.B, { className: z().image, src: m || M.A.src, fit: 'cover', alt: _, withAvatarReplace: !!m, 'aria-hidden': !0 }),
                                        (0, r.jsx)('div', {
                                            className: (0, a.$)(z().like),
                                            children: (0, r.jsx)(w.I, { variant: 'likedVariant', size: 's', className: z().icon }),
                                        }),
                                    ],
                                }),
                            }),
                        [C, m, _, p],
                    );
                return (0, r.jsx)(R.MN, {
                    ref: n,
                    className: (0, a.$)(z().root, { [z().root_selected]: C }, t),
                    textPosition: 'center',
                    title: (0, r.jsx)(h.HL, {
                        'aria-hidden': !0,
                        className: z().name,
                        variant: 'div',
                        type: 'entity',
                        size: 'l',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.e8.wizard.ARTIST_CARD_NAME,
                        children: _,
                    }),
                    view: x,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                });
            });
            var W = o(63442),
                B = o.n(W);
            let G = { [p.u.Desktop]: { start: 40, end: 40 }, [p.u.Mobile]: { start: 40, end: 40 } },
                H = (0, n.PA)((e) => {
                    let { onFinishSuccess: t } = e,
                        { formatMessage: o } = (0, s.A)(),
                        {
                            wizard: n,
                            settings: { isMobile: p, isWindowsApplication: y, isLinuxApplication: R },
                            experiments: w,
                            user: D,
                        } = (0, g.g)(),
                        { notify: k } = (0, x.l)(),
                        M = (0, T.z)(),
                        [P, z] = (0, d.d)(),
                        W = (0, i.useRef)(!1),
                        H = w.checkExperiment(v.z.WebNextWizard3, 'on'),
                        V = (0, m.zb)(0),
                        U = (0, i.useMemo)(
                            () => (e) => {
                                var t;
                                if (!V.onTabChange || e === V.value) return;
                                V.onTabChange(e);
                                let o = null == (t = n.genres[e]) ? void 0 : t.id;
                                (n.setFilter(o), null == P || P.scrollTo({ top: 0 }));
                            },
                            [n, V, P],
                        ),
                        X = (0, i.useMemo)(() => {
                            switch (n.remainingLikesToFinish) {
                                case 0:
                                    return o({ id: 'wizard.button-done' });
                                case 1:
                                    return o({ id: 'wizard.button-one-more' });
                                default:
                                    return 0 === n.selectedArtistsQuantity ? o({ id: 'wizard.button-tune' }) : o({ id: 'wizard.button-little-more' });
                            }
                        }, [n.remainingLikesToFinish, n.selectedArtistsQuantity, o]),
                        Y = (0, i.useMemo)(
                            () =>
                                (0, r.jsx)(O.wI, {
                                    className: B().tabCarousel,
                                    ...V,
                                    onTabChange: U,
                                    isShimmerVisible: n.loadingState === L.G.PENDING,
                                    shimmer: (0, r.jsx)(O.zr, { isActive: !0, className: B().tabCarousel, count: p ? 2 : 3 }),
                                    children: n.genres.map((e, t) =>
                                        (0, r.jsx)(
                                            I.o,
                                            {
                                                className: (0, a.$)(B().filter, { [B().filter_selected]: t === V.value }),
                                                titleClassName: B().tabTitle,
                                                title: e.title,
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [n.genres, V, U, n.loadingState, p],
                        ),
                        K = (0, i.useCallback)(() => {
                            n.loadArtists(60);
                        }, [n]);
                    (0, i.useEffect)(() => {
                        n.filter && K();
                    }, [n.filter, K]);
                    let Z = (0, i.useCallback)(async () => {
                        (await n.loadGenres(), K());
                    }, [n, K]);
                    ((0, i.useEffect)(() => {
                        n.modal.isOpened && Z();
                    }, [n, n.modal.isOpened, Z]),
                        (0, i.useEffect)(() => {
                            n.loadingState === L.G.REJECT &&
                                (n.modal.close(), k((0, r.jsx)(E.h, { error: o({ id: 'error-messages.error-load-wizard' }) }), { containerId: C.u.ERROR }));
                        }, [n, n.loadGenres, n.loadingState, o, k]));
                    let $ = (0, i.useMemo)(
                            () =>
                                (0, r.jsx)(h.DZ, {
                                    className: B().title,
                                    weight: 'bold',
                                    variant: 'h1',
                                    size: 'l',
                                    'data-test-id': c.e8.wizard.WIZARD_MODAL_TITLE,
                                    children: (0, r.jsx)(l.A, { id: 'wizard.modal-title' }),
                                }),
                            [],
                        ),
                        q = (0, i.useCallback)(async () => {
                            if (!W.current) {
                                W.current = !0;
                                try {
                                    ((await n.finish()) === j.F.OK && (await D.getSettings(), await (null == t ? void 0 : t())), n.modal.close());
                                } finally {
                                    W.current = !1;
                                }
                            }
                        }, [t, D, n]);
                    return (
                        (0, i.useEffect)(
                            () => (
                                null == M ||
                                    M.addShortcutsListener(S.M.MAIN, b.l.CLOSE, () => {
                                        n.modal.isOpened && q();
                                    }),
                                () => {
                                    null == M || M.removeShortcutsListener(S.M.MAIN, b.l.CLOSE);
                                }
                            ),
                            [q, n.modal.isOpened, M],
                        ),
                        (0, r.jsxs)(_.a, {
                            className: (0, a.$)(B().root, { [B().root_withCustomControls]: y || R }),
                            headerClassName: B().modalHeader,
                            contentClassName: B().modalContent,
                            open: n.modal.isOpened,
                            onOpenChange: n.modal.onOpenChange,
                            onClose: q,
                            size: 'fullscreen',
                            placement: 'center',
                            labelClose: o({ id: 'interface-actions.close' }),
                            closeButtonDataTestId: c.e8.wizard.WIZARD_MODAL_CLOSE_BUTTON,
                            'data-test-id': c.e8.wizard.WIZARD_MODAL,
                            header: p && $,
                            escapeKey: !1,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: B().wrapper,
                                    children: [
                                        !p && $,
                                        (0, r.jsx)(h.HL, {
                                            className: B().text,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_TEXT,
                                            children: (0, r.jsx)(l.A, { id: 'wizard.modal-text' }),
                                        }),
                                        H &&
                                            (0, r.jsx)('div', {
                                                className: B().progress,
                                                children: (0, r.jsx)(h.HL, {
                                                    variant: 'div',
                                                    size: 'm',
                                                    weight: 'normal',
                                                    lineClamp: 2,
                                                    'data-test-id': c.e8.wizard.WIZARD_MODAL_PROGRESS_TEXT,
                                                    children: n.progressText,
                                                }),
                                            }),
                                        (0, r.jsx)(u.$, {
                                            className: (0, a.$)(B().button, { [B().button_withProgress]: H }),
                                            size: p ? 'm' : 'l',
                                            iconPosition: 'right',
                                            radius: 'xxxl',
                                            color: 'primary',
                                            onClick: q,
                                            disabled: !n.canFinish,
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_BUTTON,
                                            children: (0, r.jsx)(h.HL, { variant: 'div', size: 'm', weight: 'medium', children: X }),
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)('div', {
                                    className: B().mainContainer,
                                    children: [
                                        (0, r.jsx)(f.F, { className: B().carousel, carouselElement: Y, scrollPadding: G }),
                                        (0, r.jsx)(N.$, {
                                            withFooter: !1,
                                            className: (0, a.$)(B().scrollContainer, B().important),
                                            itemContentCallback: (e) => {
                                                let t = n.artistsByGenre[e];
                                                if (!t) {
                                                    let e = o({ id: 'loading-messages.entity-is-loading' }, { entityName: o({ id: 'entity-names.artist' }) });
                                                    return (0, r.jsx)(A.V, { 'aria-label': e, round: !0, centered: !0 });
                                                }
                                                return (0, r.jsx)(F, { artist: t }, t.id);
                                            },
                                            data: n.artistsByGenre,
                                            endReached: K,
                                            listClassName: B().content,
                                            itemClassName: B().item,
                                            pageSize: 60,
                                            handleRef: z,
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_ARTISTS_GRID,
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
        },
        21927: (e) => {
            e.exports = {
                root: 'LocationDialogContent_root__BH0fV',
                emptyState: 'LocationDialogContent_emptyState__HKHWl',
                emptyStateTitle: 'LocationDialogContent_emptyStateTitle__OP1_t',
                emptyStateSubtitle: 'LocationDialogContent_emptyStateSubtitle__SRjAW',
            };
        },
        26570: (e) => {
            e.exports = {
                root: 'TopConcertsCarousel_root__opMbb',
                controls: 'TopConcertsCarousel_controls__c92PW',
                header: 'TopConcertsCarousel_header__3h3Zn',
                carousel: 'TopConcertsCarousel_carousel__uMke6',
                item: 'TopConcertsCarousel_item__fz8lR',
                important: 'TopConcertsCarousel_important__ZcT6Z',
            };
        },
        36139: (e) => {
            e.exports = {
                root: 'ConcertsPage_root__olabl',
                container: 'ConcertsPage_container__qS7xA',
                pageHeader: 'ConcertsPage_pageHeader__KyDH4',
                pageTitle: 'ConcertsPage_pageTitle__VViQV',
                locationSelector: 'ConcertsPage_locationSelector__izo2S',
                footer: 'ConcertsPage_footer__GYRwF',
            };
        },
        41617: (e, t, o) => {
            'use strict';
            o.d(t, { E: () => r });
            let r = (0, o(53548).createContext)({ offsetBlockPosY: void 0 });
        },
        47969: (e, t, o) => {
            'use strict';
            o.d(t, { L: () => c });
            var r = o(35802),
                a = o(79070),
                n = o(61013),
                i = o(53548);
            let s = (e) => {
                let { minColumnWidth: t, maxColumnWidth: o, containerWidth: r, totalCount: a, columnGap: n, minColumnCount: i, maxColumnCount: s } = e,
                    l = Math.max(1, Math.floor((r + n) / (t + n))),
                    c = Math.max(i, Math.floor((r + n) / ((o + t) * 0.5 + n)));
                for (let e = i; e <= l; e++) {
                    let a = (r - (e - 1) * n) / e;
                    if (a >= t && a <= o) {
                        c = e;
                        break;
                    }
                }
                return { rowCount: Math.ceil(a / (c = s ? Math.min(c, s) : c)), columnCount: c };
            };
            var l = o(10270);
            let c = (e) => {
                let {
                        count: t,
                        getEstimateRowSize: o,
                        rowGap: c,
                        columnGap: d,
                        minColumnWidth: u,
                        maxColumnWidth: _,
                        minColumnCount: m,
                        maxColumnCount: h,
                        containerRef: p,
                    } = e,
                    { rowCount: C, columnCount: x } = ((e) => {
                        let { containerRef: t, minColumnCount: o, maxColumnWidth: r, minColumnWidth: a, totalCount: l, columnGap: c, maxColumnCount: d } = e,
                            [u, _] = (0, i.useState)({ rowCount: 0, columnCount: 0 }),
                            m = (0, i.useRef)(null),
                            h = (0, i.useMemo)(
                                () =>
                                    (0, n.A)(
                                        (e) => {
                                            _(
                                                s({
                                                    minColumnWidth: a,
                                                    maxColumnWidth: r,
                                                    containerWidth: e.contentRect.width,
                                                    totalCount: l,
                                                    columnGap: c,
                                                    minColumnCount: o,
                                                    maxColumnCount: d,
                                                }),
                                            );
                                        },
                                        100,
                                        { trailing: !0 },
                                    ),
                                [c, d, r, o, a, l],
                            );
                        return (
                            (0, i.useLayoutEffect)(
                                () => (
                                    m.current && m.current.disconnect(),
                                    (m.current = new ResizeObserver((e) => {
                                        e.forEach(h);
                                    })),
                                    t &&
                                        (_(
                                            s({
                                                minColumnWidth: a,
                                                maxColumnWidth: r,
                                                containerWidth: t.getBoundingClientRect().width,
                                                totalCount: l,
                                                columnGap: c,
                                                minColumnCount: o,
                                                maxColumnCount: d,
                                            }),
                                        ),
                                        m.current.observe(t)),
                                    () => {
                                        var e;
                                        null == (e = m.current) || e.disconnect();
                                    }
                                ),
                                [c, t, h, d, r, o, a, l],
                            ),
                            u
                        );
                    })({ totalCount: t, columnGap: null != d ? d : 0, minColumnCount: m, maxColumnWidth: _, minColumnWidth: u, maxColumnCount: h, containerRef: p }),
                    { virtualizer: b, resizeObserver: S } = (0, l.r)({ count: C, getEstimateSize: o, gap: c, containerRef: p, useVirtualizerMeasurement: !1 }),
                    T = (0, r.A)(
                        Array.from({ length: t }, (e, t) => t),
                        x,
                    ),
                    g = (0, a.L)(() => {
                        var e, t;
                        if (!b.range) return null;
                        let o = null == (e = T[b.range.startIndex]) ? void 0 : e.at(0),
                            r = null == (t = T[b.range.endIndex]) ? void 0 : t.at(-1);
                        return void 0 !== o && void 0 !== r ? { startIndex: o, endIndex: r } : null;
                    });
                return { virtualizer: b, rowResizeObserver: S, indices: T, columnCount: x, visibleRange: g };
            };
        },
        51318: (e, t, o) => {
            'use strict';
            o.d(t, { l: () => r });
            var r = (function (e) {
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
        51516: (e) => {
            e.exports = { root: 'VirtualGridRow_root___UfbI' };
        },
        52499: (e, t, o) => {
            'use strict';
            (o.r(t), o.d(t, { default: () => eV }));
            var r = o(88800),
                a = o(53548),
                n = o.t(a, 2),
                i = o(84961),
                s = o(2058),
                l = o(88969),
                c = o(58390),
                d = o(97234),
                u = o(36740),
                _ = o(81862),
                m = o(46384),
                h = o(90852),
                p = o(59724),
                C = o(17392),
                x = o(46312),
                b = o(29993),
                S = o(50408),
                T = o(66719),
                g = o(29504),
                j = o(42592),
                v = o(47969),
                L = o(53360),
                E = o(38371),
                f = o(36930),
                A = o(72288),
                I = o(18486),
                O = o(55778),
                N = o.n(O);
            let y = (0, i.PA)(() => {
                let e = (0, a.useId)(),
                    { concerts: t } = (0, A.g)(),
                    { formatMessage: o } = (0, s.A)(),
                    [n, i] = (0, S.d)();
                (0, j.W)({ enabled: t.isResolved });
                let l = (0, b.c)(() => {
                        var e;
                        return !t.isShimmerVisible && (null == (e = t.feedConcerts) ? void 0 : e.length) ? t.feedConcerts.length : 50;
                    }),
                    {
                        virtualizer: c,
                        rowResizeObserver: u,
                        columnCount: _,
                        indices: m,
                    } = (0, v.L)({
                        count: l(),
                        rowGap: 32,
                        columnGap: 16,
                        getEstimateRowSize: () => 371,
                        minColumnCount: 2,
                        minColumnWidth: 170,
                        maxColumnWidth: 227,
                        containerRef: n,
                    }),
                    p = { '--feed-concerts-height': ''.concat(c.getTotalSize(), 'px'), '--feed-concerts-column-count': _ },
                    x = (0, a.useCallback)(
                        (e) => {
                            var o;
                            let a = null == (o = t.feedConcerts) ? void 0 : o[e];
                            return !a || t.isShimmerVisible
                                ? (0, r.jsx)(f.L, { isActive: t.isShimmerActive })
                                : (0, r.jsx)(h.B, {
                                      objectType: d.DomainObjectType.Concert,
                                      objectId: a.id,
                                      objectPosX: (e % _) + 1,
                                      objectPosY: Math.floor(e / _) + 1,
                                      children: (0, r.jsx)(E.Q, { concert: a }),
                                  });
                        },
                        [_, t.feedConcerts, t.isShimmerActive, t.isShimmerVisible],
                    );
                return (0, r.jsxs)('div', {
                    className: N().root,
                    'data-test-id': C.e8.concerts.CONCERTS_FEED,
                    children: [
                        (0, r.jsx)(I.T, { className: N().header, labeledForId: e, title: o({ id: 'concerts.all-concerts' }), headingVariant: 'h2' }),
                        (0, r.jsx)('div', {
                            'aria-labelledby': e,
                            ref: i,
                            style: p,
                            className: N().container,
                            children: c
                                .getVirtualItems()
                                .map((e) =>
                                    (0, r.jsx)(
                                        L.U,
                                        {
                                            className: N().row,
                                            columnClassName: N().column,
                                            virtualItem: e,
                                            resizeObserver: u,
                                            indices: m,
                                            renderItemByIndex: x,
                                            scrollMargin: c.options.scrollMargin,
                                        },
                                        e.key,
                                    ),
                                ),
                        }),
                    ],
                });
            });
            var R = o(97956),
                w = o(72367),
                D = o.n(w),
                k = o(65724),
                M = o(53323),
                P = o(31764),
                z = o(26570),
                F = o.n(z);
            let W = (e) => {
                    let { children: t } = e,
                        o = (0, a.useId)(),
                        n = (0, a.useRef)(null),
                        { formatMessage: i } = (0, s.A)();
                    return (0, r.jsxs)('div', {
                        className: F().root,
                        'data-test-id': C.e8.concerts.CONCERTS_TOP,
                        children: [
                            (0, r.jsx)(I.T, {
                                className: F().header,
                                labeledForId: o,
                                title: i({ id: 'concerts.top-for-you' }),
                                controls: (0, r.jsx)(P.X, { className: F().controls, carouselRef: n }),
                                headingVariant: 'h2',
                            }),
                            (0, r.jsx)(M.F, { className: F().carousel, ref: n, itemClassName: (0, k.$)(F().item, F().important), 'aria-labelledby': o, children: t }),
                        ],
                    });
                },
                B = (e) => Array.from({ length: 10 }, (t, o) => (0, r.jsx)(f.L, { isActive: e, withPriceButton: !0 }, o)),
                G = (0, i.PA)(() => {
                    let { concerts: e, experiments: t } = (0, A.g)();
                    (0, j.W)({ enabled: e.isResolved });
                    let o = t.checkExperiment(R.z.WebNextConcertsIdentityEventType, 'on'),
                        n = (0, a.useMemo)(() => {
                            var t;
                            return (null == (t = e.topConcerts) ? void 0 : t.length) && !e.isShimmerVisible
                                ? e.topConcerts.map((e, t) =>
                                      (0, r.jsx)(
                                          h.B,
                                          {
                                              objectType: d.DomainObjectType.Concert,
                                              objectId: e.id,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              children: (0, r.jsx)('div', {
                                                  className: D().concertCard,
                                                  children: (0, r.jsx)(E.Q, { withMask: o, withPriceButton: !0, withInlineMeta: !0, concert: e }),
                                              }),
                                          },
                                          e.getKey(t),
                                      ),
                                  )
                                : B(e.isShimmerActive);
                        }, [e.isShimmerActive, e.isShimmerVisible, e.topConcerts, o]);
                    return (e.isNeededToLoad && (0, a.use)(e.getData()), (0, r.jsx)(W, { children: n }));
                }),
                H = () => (0, r.jsx)(a.Suspense, { fallback: (0, r.jsx)(W, { children: B(!0) }), children: (0, r.jsx)(G, {}) });
            var V = o(25772),
                U = o(32596),
                X = o(20129),
                Y = o(69630),
                K = o(98427),
                Z = o(41617);
            let $ = (e) => {
                let { children: t, offsetBlockPosY: o } = e,
                    n = (0, a.useMemo)(() => ({ offsetBlockPosY: o }), [o]);
                return (0, r.jsx)(Z.E.Provider, { value: n, children: t });
            };
            var q = o(44230),
                J = o(37670),
                Q = o(4370),
                ee = o(86790),
                et = o(60266),
                eo = o(93317),
                er = o(29595),
                ea = o(74965),
                en = o(66943),
                ei = o(70598),
                es = o(96817),
                el = o(52300),
                ec = o(19994),
                ed = o(79070),
                eu = o(11372),
                e_ = o(96329),
                em = o.n(e_),
                eh = {
                    810: (e) => {
                        e.exports = n;
                    },
                },
                ep = {},
                eC = {};
            ((() => {
                (Object.defineProperty(eC, '__esModule', { value: !0 }), (eC.useKeyboardNavigation = void 0));
                let e = (function e(t) {
                    var o = ep[t];
                    if (void 0 !== o) return o.exports;
                    var r = (ep[t] = { exports: {} });
                    return (eh[t](r, r.exports, e), r.exports);
                })(810);
                function t(e, t) {
                    return e.current ? Array.from(t ? e.current.querySelectorAll(t) : e.current.children) : [];
                }
                eC.useKeyboardNavigation = function (o) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        { navigationItemsSelector: a, activeAttributeName: n = 'aria-selected' } = r,
                        i = (0, e.useCallback)(
                            (e) => {
                                let r = t(o, a);
                                if (!r.length) return;
                                let n = e.target,
                                    i = r.indexOf(n);
                                if (-1 === i) return;
                                let [s] = r,
                                    l = r.at(-1),
                                    c = null;
                                switch (e.key) {
                                    case 'ArrowLeft':
                                    case 'ArrowUp':
                                        c = r[i - 1] || l;
                                        break;
                                    case 'ArrowRight':
                                    case 'ArrowDown':
                                        c = r[i + 1] || s;
                                        break;
                                    case 'Home':
                                        c = s;
                                        break;
                                    case 'End':
                                        c = l;
                                }
                                null !== c && (c.focus(), e.preventDefault());
                            },
                            [a, o],
                        );
                    ((0, e.useEffect)(() => {
                        let e = o.current;
                        return (null == e || e.addEventListener('keydown', i), () => (null == e ? void 0 : e.removeEventListener('keydown', i)));
                    }, [o, i]),
                        (0, e.useEffect)(() => {
                            t(o, a).forEach((e) => {
                                e.hasAttribute(n) && ('true' === e.getAttribute(n) ? (e.tabIndex = 0) : (e.tabIndex = -1));
                            });
                        }));
                };
            })(),
                eC.__esModule);
            var ex = eC.useKeyboardNavigation,
                eb = o(66610),
                eS = o(91177),
                eT = o(49176),
                eg = o(94037),
                ej = o.n(eg);
            let ev = (e) => {
                let { isSelected: t, onSelect: o, children: a, locationId: n, testId: i } = e,
                    s = (0, eb.D)(),
                    l = (0, eS.D)(),
                    c = (0, b.c)(() => {
                        (s({ actionType: d.ActionType.SearchItemSelected, userInteractionType: d.UserInteractionType.Tap }), o(n));
                    }),
                    u = (0, b.c)((e) => {
                        (e.key === eT.v.ENTER || e.key === eT.v.SPACE) &&
                            (e.preventDefault(), s({ actionType: d.ActionType.SearchItemSelected, userInteractionType: d.UserInteractionType.Tap }), o(n));
                    });
                return (0, r.jsxs)('li', {
                    ref: l,
                    className: ej().item,
                    role: 'option',
                    'aria-selected': t,
                    tabIndex: 0,
                    onClick: c,
                    onKeyDown: u,
                    'data-test-id': null != i ? i : C.Xk.concerts.CONCERTS_LOCATION_DIALOG_LIST_ITEM,
                    children: [
                        (0, r.jsx)(g.HL, { className: ej().itemText, variant: 'span', size: 'l', weight: 'medium', children: a }),
                        t && (0, r.jsx)(el.I, { className: ej().checkIcon, variant: 'check', size: 'xs', 'aria-hidden': 'true' }),
                    ],
                });
            };
            var eL = o(92115),
                eE = o.n(eL);
            let ef = (0, i.PA)((e) => {
                let { showAutoDetect: t, isAutoDetect: o, filteredLocations: n, selectedLocationId: i, onSelectLocation: c, onSelectAutoDetect: u } = e,
                    { formatMessage: _ } = (0, s.A)(),
                    p = (0, a.useRef)(null);
                ex(p, { navigationItemsSelector: '[role="option"]' });
                let x = n.length,
                    b = (0, ed.L)(() => {
                        let e = n.find((e) => e.id === i),
                            t = n.filter((e) => e.id !== i),
                            o = [];
                        return (e && o.push(e), o.push(...t), o);
                    });
                return (0, r.jsx)(m.F, {
                    blockType: d.EntityTypes.LocationList,
                    blockId: d.EntityTypes.LocationList,
                    blockPosX: 1,
                    blockPosY: 2,
                    objectsCount: x,
                    children: (0, r.jsxs)('ul', {
                        ref: p,
                        className: eE().root,
                        role: 'listbox',
                        'aria-label': _({ id: 'concerts.cities-list' }),
                        'data-test-id': C.Xk.concerts.CONCERTS_LOCATION_DIALOG_LIST,
                        children: [
                            t &&
                                (0, r.jsx)(h.B, {
                                    objectType: d.DomainObjectType.LocationAutoDetect,
                                    objectId: d.DomainObjectType.LocationAutoDetect,
                                    objectPosX: 1,
                                    objectPosY: 1,
                                    children: (0, r.jsx)(ev, {
                                        isSelected: o,
                                        onSelect: u,
                                        testId: C.Xk.concerts.CONCERTS_LOCATION_DIALOG_NEARBY_ITEM,
                                        children: (0, r.jsx)(l.A, { id: 'concerts.concerts-nearby' }),
                                    }),
                                }),
                            b.map((e, o) =>
                                (0, r.jsx)(
                                    h.B,
                                    {
                                        objectType: d.DomainObjectType.Location,
                                        objectId: String(e.id),
                                        objectPosX: 1,
                                        objectPosY: t ? o + 2 : o + 1,
                                        children: (0, r.jsx)(ev, { isSelected: e.id === i, onSelect: c, locationId: e.id, children: e.name }),
                                    },
                                    e.id,
                                ),
                            ),
                        ],
                    }),
                });
            });
            var eA = o(21927),
                eI = o.n(eA);
            let eO = (0, i.PA)((e) => {
                let { onClose: t } = e,
                    { concerts: o } = (0, A.g)(),
                    { locationSelection: a } = o,
                    { filteredLocations: n, searchText: i, selectedLocationId: s, isAutoDetect: c } = a,
                    d = !i.trim(),
                    _ = d || n.length > 0,
                    m = (0, b.c)((e) => {
                        void 0 !== e && (a.setSelectedLocation(e), t());
                    }),
                    h = (0, b.c)(() => {
                        (a.setSelectedLocation(null), t());
                    });
                (0, u.u)();
                let p = (0, ed.L)(() =>
                        (0, r.jsx)(ef, { showAutoDetect: d, isAutoDetect: c, filteredLocations: n, selectedLocationId: s, onSelectLocation: m, onSelectAutoDetect: h }),
                    ),
                    x = (0, ed.L)(() =>
                        (0, r.jsxs)('div', {
                            className: eI().emptyState,
                            'data-test-id': C.Xk.concerts.CONCERTS_LOCATION_DIALOG_EMPTY_STATE,
                            children: [
                                (0, r.jsx)(g.DZ, {
                                    className: eI().emptyStateTitle,
                                    variant: 'h3',
                                    weight: 'bold',
                                    size: 's',
                                    children: (0, r.jsx)(l.A, { id: 'concerts.nothing-found' }),
                                }),
                                (0, r.jsx)(g.HL, {
                                    className: eI().emptyStateSubtitle,
                                    variant: 'span',
                                    size: 'm',
                                    children: (0, r.jsx)(l.A, { id: 'concerts.try-different-query' }),
                                }),
                            ],
                        }),
                    );
                return (0, r.jsx)('div', { className: eI().root, children: _ ? p : x });
            });
            var eN = o(23237),
                ey = o(3515),
                eR = o.n(ey);
            let ew = (e) => {
                    let { searchText: t, onChange: o, onReset: a } = e,
                        { formatMessage: n } = (0, s.A)(),
                        i = (0, eS.D)();
                    return (0, r.jsx)('div', {
                        ref: i,
                        className: eR().root,
                        children: (0, r.jsx)(eN.D, {
                            className: eR().searchInput,
                            placeholder: n({ id: 'concerts.find-city' }),
                            initialValue: t,
                            correctedValue: null,
                            onChange: o,
                            onResetClick: a,
                            resetButtonAriaLabel: n({ id: 'interface-actions.reset-search-input' }),
                            withResetButton: !1,
                            autoFocus: !0,
                            innerInputProps: { 'data-test-id': C.Xk.concerts.CONCERTS_LOCATION_DIALOG_SEARCH_INPUT },
                        }),
                    });
                },
                eD = (0, i.PA)((e) => {
                    let { isOpen: t, onClose: o } = e,
                        { formatMessage: n } = (0, s.A)(),
                        {
                            concerts: i,
                            settings: { isMobile: l },
                        } = (0, A.g)(),
                        { locationSelection: c } = i,
                        { searchText: u } = c,
                        _ = (0, b.c)((e) => {
                            c.setSearchText(e);
                        }),
                        p = (0, b.c)(() => {
                            c.resetSearchText();
                        }),
                        x = (0, b.c)((e) => {
                            e || o();
                        });
                    (0, a.useEffect)(() => {
                        t || c.resetSearchText();
                    }, [t, c]);
                    let S = (0, ed.L)(() =>
                            (0, r.jsx)(m.F, {
                                blockType: d.EntityTypes.Search,
                                blockId: d.EntityTypes.Search,
                                blockPosX: 1,
                                blockPosY: 1,
                                objectsCount: 1,
                                children: (0, r.jsx)(h.B, {
                                    objectType: d.DomainObjectType.SearchField,
                                    objectId: d.DomainObjectType.SearchField,
                                    objectPosX: 1,
                                    objectPosY: 1,
                                    children: (0, r.jsx)(ew, { searchText: u, onChange: _, onReset: p }),
                                }),
                            }),
                        ),
                        T = (0, ed.L)(() => {
                            if (!l)
                                return (0, r.jsx)(es.$, {
                                    radius: 'round',
                                    color: 'secondary',
                                    size: 'xxs',
                                    icon: (0, r.jsx)(el.I, { variant: 'close', size: 'xxs' }),
                                    onClick: o,
                                    'aria-label': n({ id: 'interface-actions.close' }),
                                    className: em().desktopCloseButton,
                                    'data-test-id': C.Xk.concerts.CONCERTS_LOCATION_DIALOG_CLOSE_BUTTON,
                                });
                        });
                    return (0, r.jsx)(eu.a, {
                        open: t,
                        onClose: o,
                        onOpenChange: x,
                        placement: l ? 'default' : 'center',
                        size: l ? 'fullscreen' : 'fitContent',
                        className: em().root,
                        labelClose: n({ id: 'interface-actions.close' }),
                        closeButtonProps: { className: em().closeButton, 'data-test-id': C.Xk.concerts.CONCERTS_LOCATION_DIALOG_CLOSE_BUTTON },
                        headerClassName: em().header,
                        header: S,
                        customCloseButton: T,
                        isMobile: l,
                        enableSwipe: l,
                        overlayColor: l ? 'transparent' : 'full',
                        'data-test-id': C.Xk.concerts.CONCERTS_LOCATION_DIALOG_MODAL,
                        children: t && (0, r.jsx)(eO, { onClose: o }),
                    });
                });
            var ek = o(10799),
                eM = o.n(ek);
            let eP = (0, i.PA)((e) => {
                var t;
                let { className: o } = e,
                    { concerts: n } = (0, A.g)(),
                    { locationSelection: i } = n,
                    s = (0, ei.S)(),
                    [c, u] = (0, a.useState)(0),
                    _ = (0, b.c)(() => {
                        (s({ to: d.AppScreen.ConcertLocationSelector }), u((e) => e + 1), i.modal.open());
                    });
                if (i.shouldShowShimmer) return (0, r.jsx)(ec.W, { className: (0, k.$)(eM().root, eM().shimmer, o), isActive: !0, radius: 'xxxl' });
                let m = i.hasLocations,
                    h = null != (t = i.selectedLocationName) ? t : (0, r.jsx)(l.A, { id: 'concerts.nearby' });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(es.$, {
                            className: (0, k.$)(eM().root, o, { [eM().root_disabled]: !m }),
                            variant: 'text',
                            size: 's',
                            icon: (0, r.jsx)(el.I, { variant: 'arrowDown', size: 'xxxs' }),
                            iconPosition: 'right',
                            iconClassName: eM().icon,
                            withRipple: !1,
                            'aria-live': 'polite',
                            'aria-haspopup': 'dialog',
                            'aria-expanded': i.modal.isOpened,
                            disabled: !m,
                            onClick: _,
                            'data-test-id': C.Xk.concerts.CONCERTS_LOCATION_SELECTOR_BUTTON,
                            children: (0, r.jsx)(g.HL, {
                                className: eM().text,
                                variant: 'span',
                                type: 'controls',
                                size: 'l',
                                weight: 'medium',
                                lineClamp: 1,
                                children: h,
                            }),
                        }),
                        m &&
                            (0, r.jsx)(
                                p.a,
                                {
                                    pageId: d.AppScreen.ConcertLocationSelector,
                                    pageIdForFrom: K.b.CONCERT_LOCATION_SELECTOR,
                                    mainObjectId: K.b.CONCERT_LOCATION_SELECTOR,
                                    mainObjectType: d.DomainObjectType.Location,
                                    pageStyle: d.PageStyles.Fullscreen,
                                    pagePlacement: d.PagePlacements.Fullscreen,
                                    children: (0, r.jsx)(eD, { isOpen: i.modal.isOpened, onClose: i.modal.close }),
                                },
                                c,
                            ),
                    ],
                });
            });
            var ez = o(36139),
                eF = o.n(ez);
            let eW = (0, i.PA)(() => {
                    var e, t, o, n, i, p, j, v, L;
                    let { formatMessage: E } = (0, s.A)(),
                        { setContentScrollRef: f, contentScrollRef: I } = (0, q.g)(),
                        { concerts: O, experiments: N, user: w } = (0, A.g)(),
                        [D, k] = (0, S.d)();
                    (0, u.u)();
                    let M = null != (p = null == (e = O.landing.meta) ? void 0 : e.selectedTabIndex) ? p : 0,
                        P = null != (j = null == (o = O.landing.tabs.data) || null == (t = o[M]) ? void 0 : t.blocks.length) ? j : 0;
                    (N.checkExperiment(R.z.WebNextConcertsTab, 'on') || (0, c.notFound)(),
                        w.hasPlus || (0, c.redirect)(Q.Z.main.href),
                        (0, a.useEffect)(
                            () => () => {
                                O.resetPageData();
                            },
                            [O],
                        ),
                        O.isLocationSelectionExperimentEnabled && O.locationSelection.isNeededToLoad && (0, a.use)(O.locationSelection.getLocations()),
                        (0, J.J)(O.landing.isResolved),
                        (() => {
                            let e = (0, a.useRef)(1),
                                { concerts: t } = (0, A.g)(),
                                { notify: o } = (0, ea.l)(),
                                { formatMessage: n } = (0, s.A)();
                            (0, a.useEffect)(() => {
                                e && (t.isRejected && o((0, r.jsx)(en.h, { error: n({ id: 'concerts.feed-error' }) }), { containerId: er.u.ERROR }), e.current--);
                            }, [t.isRejected, n, o]);
                        })());
                    let z = (0, b.c)(() => {
                        if (O.landing.isLoaded) return O.landing.getSkeleton({ id: x.p.CONCERTS, showWizard: w.settings.showWizard }, { preloadBlocksCount: 2 });
                    });
                    return (O.landing.isNeededToLoad &&
                        (0, a.use)(O.landing.getSkeleton({ id: x.p.CONCERTS, showWizard: w.settings.showWizard }, { preloadBlocksCount: 2 })),
                    O.landing.isRejected)
                        ? (0, r.jsx)(U.SomethingWentWrong, {})
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)(Y.h, {
                                      scrollElement: I,
                                      outerTitle: E({ id: 'entity-names.concerts' }),
                                      headerElement: D,
                                      children: [
                                          (0, r.jsx)(eo.Y, { variant: eo.V.TEXT, showControls: !1 }),
                                          (0, r.jsxs)(T.N, {
                                              ref: f,
                                              className: eF().root,
                                              containerClassName: eF().container,
                                              'data-test-id': C.Xk.concerts.CONCERTS_PAGE,
                                              children: [
                                                  (0, r.jsxs)('div', {
                                                      className: eF().pageHeader,
                                                      ref: k,
                                                      children: [
                                                          (0, r.jsx)(g.DZ, {
                                                              variant: 'h1',
                                                              weight: 'bold',
                                                              size: 'xl',
                                                              className: eF().pageTitle,
                                                              'data-test-id': C.Xk.concerts.CONCERTS_PAGE_TITLE,
                                                              children: (0, r.jsx)(l.A, { id: 'entity-names.concerts' }),
                                                          }),
                                                          O.isLocationSelectionExperimentEnabled &&
                                                              (0, r.jsx)(_.h, {
                                                                  tabId: '',
                                                                  tabPos: 0,
                                                                  isTabSelectedByDefault: !1,
                                                                  children: (0, r.jsx)(m.F, {
                                                                      blockId: d.EntityTypes.ConcertTabHeader,
                                                                      blockType: d.EntityTypes.ConcertTabHeader,
                                                                      blockPosX: 1,
                                                                      blockPosY: 1,
                                                                      objectsCount: 1,
                                                                      children: (0, r.jsx)(h.B, {
                                                                          objectType: d.DomainObjectType.Location,
                                                                          objectId: d.DomainObjectType.Location,
                                                                          objectPosX: 1,
                                                                          objectPosY: 1,
                                                                          children: (0, r.jsx)(eP, { className: eF().locationSelector }),
                                                                      }),
                                                                  }),
                                                              }),
                                                      ],
                                                  }),
                                                  (0, r.jsx)(_.h, {
                                                      tabId: '',
                                                      tabPos: 0,
                                                      isTabSelectedByDefault: !1,
                                                      children: (0, r.jsx)(m.F, {
                                                          blockId: d.EntityTypes.ConcertTabHeader,
                                                          blockType: d.EntityTypes.ConcertTabHeader,
                                                          blockPosX: 1,
                                                          blockPosY: 1,
                                                          objectsCount: null != (v = null == (n = O.topConcerts) ? void 0 : n.length) ? v : 0,
                                                          children: (0, r.jsx)(H, {}),
                                                      }),
                                                  }),
                                                  (0, r.jsx)($, {
                                                      offsetBlockPosY: 1,
                                                      children: (0, r.jsx)(V.E, {
                                                          landing: O.landing,
                                                          errorComponent: (0, r.jsx)(U.SomethingWentWrong, { withBackwardControl: !1 }),
                                                      }),
                                                  }),
                                                  (0, r.jsx)(_.h, {
                                                      tabId: '',
                                                      tabPos: 0,
                                                      isTabSelectedByDefault: !1,
                                                      children: (0, r.jsx)(m.F, {
                                                          blockId: d.EntityTypes.ConcertTabFeed,
                                                          blockType: d.EntityTypes.ConcertTabFeed,
                                                          blockPosX: 1,
                                                          blockPosY: P + 2,
                                                          objectsCount: null != (L = null == (i = O.feedConcerts) ? void 0 : i.length) ? L : 0,
                                                          children: (0, r.jsx)(y, {}),
                                                      }),
                                                  }),
                                                  (0, r.jsx)(et.A, { children: (0, r.jsx)(ee.w, { className: eF().footer }) }),
                                              ],
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(X.p, { onFinishSuccess: z }),
                              ],
                          });
                }),
                eB = () => (0, r.jsx)(p.a, { pageId: d.AppScreen.ConcertsLandingScreen, pageIdForFrom: K.b.CONCERTS, children: (0, r.jsx)(eW, {}) });
            var eG = o(87396);
            let eH = () => (0, r.jsx)(eG.MainSuspenseLoader, { style: { position: 'absolute', background: 'var(--ym-background-color-primary-enabled-content)' } }),
                eV = () => (0, r.jsx)(a.Suspense, { fallback: (0, r.jsx)(eH, {}), children: (0, r.jsx)(eB, {}) });
        },
        53360: (e, t, o) => {
            'use strict';
            o.d(t, { U: () => c });
            var r = o(88800),
                a = o(65724),
                n = o(84961),
                i = o(53548),
                s = o(51516),
                l = o.n(s);
            let c = (0, n.PA)((e) => {
                let { indices: t, virtualItem: o, renderItemByIndex: n, columnClassName: s, className: c, resizeObserver: d, scrollMargin: u } = e,
                    _ = (0, i.useRef)(null),
                    m = t[o.index],
                    h = { '--virtual-grid-row-vertical-offset': ''.concat(o.start - u, 'px') };
                return (
                    (0, i.useEffect)(() => {
                        let e = _.current;
                        if (e)
                            return (
                                null == d || d.observe(e),
                                () => {
                                    null == d || d.unobserve(e);
                                }
                            );
                    }, [d]),
                    (0, r.jsx)('div', {
                        'data-index': o.index,
                        ref: _,
                        style: h,
                        className: (0, a.$)(l().root, c),
                        children: null == m ? void 0 : m.map((e, t) => (0, r.jsx)('div', { className: s, children: n(e, o.index, t) }, ''.concat(o.key, '_').concat(e))),
                    })
                );
            });
        },
        55778: (e) => {
            e.exports = {
                root: 'FeedConcerts_root__W7OGN',
                header: 'FeedConcerts_header__Ht1xd',
                container: 'FeedConcerts_container__CONvW',
                column: 'FeedConcerts_column__FpMgx',
                row: 'FeedConcerts_row__HEdtn',
            };
        },
        60932: (e) => {
            e.exports = {
                icon: 'MainSuspenseLoader_icon__MceTD',
                'animate-pop': 'MainSuspenseLoader_animate-pop__vkpff',
                heartbeat: 'MainSuspenseLoader_heartbeat__6RDpM',
            };
        },
        63442: (e) => {
            e.exports = {
                content: 'WizardModal_content__mLcxg',
                modalHeader: 'WizardModal_modalHeader__BbNjx',
                root: 'WizardModal_root__mrF2y',
                root_withCustomControls: 'WizardModal_root_withCustomControls__t7Kjv',
                modalContent: 'WizardModal_modalContent__OifZs',
                wrapper: 'WizardModal_wrapper__2_8ft',
                title: 'WizardModal_title__fPGJr',
                text: 'WizardModal_text__ntEON',
                progress: 'WizardModal_progress__rOEBz',
                button: 'WizardModal_button__e8bCS',
                button_withProgress: 'WizardModal_button_withProgress__SstpE',
                mainContainer: 'WizardModal_mainContainer__fbjpt',
                carousel: 'WizardModal_carousel__uVcYS',
                scrollContainer: 'WizardModal_scrollContainer__tDrP6',
                important: 'WizardModal_important__7uymQ',
                tabCarousel: 'WizardModal_tabCarousel__AclIV',
                tabTitle: 'WizardModal_tabTitle__7ZAaF',
                filter: 'WizardModal_filter__o2wpn',
                filter_selected: 'WizardModal_filter_selected__qdlMf',
                item: 'WizardModal_item__wUHVg',
            };
        },
        72367: (e) => {
            e.exports = { concertCard: 'TopConcerts_concertCard__h86wP' };
        },
        79418: (e, t, o) => {
            'use strict';
            o.d(t, { $: () => C });
            var r = o(88800),
                a = o(65724),
                n = o(61013),
                i = o(53548);
            let s = (e) => {
                    let { style: t, forwardRef: o, context: a, ...n } = e,
                        i = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        s = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: s, 'aria-label': i, style: { ...t }, ref: o, ...n });
                },
                l = (0, i.forwardRef)((e, t) => (0, r.jsx)(s, { forwardRef: t, ...e }));
            var c = o(16434),
                d = o.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: o, withFooter: n, withHeader: i, withForceScroll: s, ...l } = e;
                    return (0, r.jsx)('div', {
                        className: (0, a.$)(d().scroller, { [d().scroller_withFooter]: n, [d().scroller_withHeader]: i, [d().scroller_withForceScroll]: s }),
                        style: { ...t },
                        ref: o,
                        ...l,
                        tabIndex: -1,
                    });
                },
                _ = (0, i.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
            var m = o(55482),
                h = o(75151);
            let p = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: o,
                            onRangeHandler: a,
                            debounceDurationInMs: n = 100,
                            totalCount: s = 0,
                            shouldTriggerRangeChangedOn: l = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [_, p] = (0, i.useState)(null),
                        C = (0, i.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == a || a(e), l.length > 0 && p(e), t && o)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            a = Math.floor(e.startIndex / t);
                                        for (let e = a; e < r; e++) o(e);
                                    }
                                }, n),
                            [n, a, t, o, l],
                        );
                    (0, i.useEffect)(() => {
                        l.length > 0 && _ && C(_);
                    }, l);
                    let x = (0, i.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, n);
                    }, [c, n]);
                    return (0, r.jsx)(h.sN, { ref: d, rangeChanged: C, totalCount: s, endReached: x, ...u });
                },
                C = (e) => {
                    let {
                            className: t,
                            customComponents: o,
                            onGetDataByPage: s,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: h,
                            overscan: C = 700,
                            pageSize: x = 20,
                            totalCount: b,
                            totalRequests: S,
                            debounceDurationInMs: T,
                            initialItemCount: g,
                            minInitialItemCount: j = 20,
                            handleRef: v,
                            alwaysShowScrollbar: L = !1,
                            testId: E,
                            isMobileLayout: f = !1,
                            shouldTriggerRangeChangedOn: A,
                            ...I
                        } = e,
                        [O, N] = (0, i.useState)(!1),
                        y = (0, i.useMemo)(
                            () =>
                                (0, n.A)((e) => {
                                    N(e);
                                }, 100),
                            [],
                        ),
                        R = (0, i.useMemo)(() => {
                            var e, t;
                            return f
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == o ? void 0 : o.List) ? e : l,
                                      Item: null == o ? void 0 : o.Item,
                                      ScrollSeekPlaceholder: null == o ? void 0 : o.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == o ? void 0 : o.List) ? t : l,
                                      Item: null == o ? void 0 : o.Item,
                                      Header: null == o ? void 0 : o.Header,
                                      Footer: null == o ? void 0 : o.Footer,
                                      ScrollSeekPlaceholder: null == o ? void 0 : o.ScrollSeekPlaceholder,
                                  };
                        }, [o, S, f]),
                        w = g ? Math.min(g, j) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(d().root, { [d().root_scrolling]: O || L, [d().root_notScrolling]: !O && !L }, t),
                        'data-test-id': E,
                        children: [
                            f && (null == o ? void 0 : o.Header) && o.Header(),
                            (0, r.jsx)(p, {
                                overscan: C,
                                components: R,
                                listClassName: h,
                                itemClassName: u,
                                isScrolling: y,
                                itemContent: m,
                                scrollerRef: v,
                                totalCount: b,
                                pageSize: x,
                                onPageHandler: s,
                                onRangeHandler: c,
                                debounceDurationInMs: T,
                                initialItemCount: w,
                                shouldTriggerRangeChangedOn: A,
                                ...I,
                            }),
                            f && (null == o ? void 0 : o.Footer) && o.Footer(),
                        ],
                    });
                };
        },
        81886: (e, t, o) => {
            Promise.resolve().then(o.bind(o, 52499));
        },
        87396: (e, t, o) => {
            'use strict';
            o.d(t, { MainSuspenseLoader: () => s });
            var r = o(88800),
                a = o(52300),
                n = o(60932),
                i = o.n(n);
            let s = (e) => {
                let { style: t } = e,
                    o = {
                        display: 'flex',
                        position: 'fixed',
                        insetBlockStart: 0,
                        insetInlineEnd: 0,
                        insetBlockEnd: 0,
                        insetInlineStart: 0,
                        zIndex: 'var(--ym-z-index-loader)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        background: 'var(--ym-background-color-primary-enabled-basic)',
                        ...t,
                    };
                return (0, r.jsx)('div', {
                    style: o,
                    children: (0, r.jsx)(a.I, {
                        variant: 'musicLogo',
                        style: { width: '100%', maxWidth: '100px', color: 'var(--ym-logo-color-primary-variant)' },
                        className: i().icon,
                    }),
                });
            };
        },
        92115: (e) => {
            e.exports = { root: 'LocationDialogList_root__BjLJb' };
        },
        94037: (e) => {
            e.exports = {
                item: 'LocationDialogListItem_item__a0z5H',
                itemText: 'LocationDialogListItem_itemText__t5XG5',
                checkIcon: 'LocationDialogListItem_checkIcon__AfJMx',
            };
        },
        96329: (e) => {
            e.exports = {
                root: 'LocationDialog_root__mAfDO',
                closeButton: 'LocationDialog_closeButton__gecsT',
                desktopCloseButton: 'LocationDialog_desktopCloseButton__jzdnV',
                header: 'LocationDialog_header__Se7S8',
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                9904, 2148, 1491, 6582, 7191, 3078, 918, 1833, 1191, 1041, 8194, 917, 4863, 1635, 2803, 2218, 1138, 893, 6252, 9192, 727, 8655, 1879, 6706, 4771, 1311,
                5201, 3075, 2662, 6904, 1898, 2058, 3578, 8628, 9780, 8283, 9332, 5151, 1223, 9027, 146, 9907, 4732, 9087, 3979, 6719, 1928, 9091, 9124, 900, 9934, 2470,
                7670, 4441, 6374, 2088, 8979, 818, 7053, 4322, 3300, 1372, 5823, 6820, 4244, 1960, 1401, 4394, 5772, 763, 2670, 7358,
            ],
            () => e((e.s = 81886)),
        ),
            (_N_E = e.O()));
    },
]);
