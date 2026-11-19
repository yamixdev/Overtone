(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2626],
    {
        5085: (e) => {
            e.exports = {
                container: 'SkeletonBlock_container__BE40w',
                important: 'SkeletonBlock_important__mf3Zo',
                container_withContentVisibility: 'SkeletonBlock_container_withContentVisibility__Iq2_D',
                headerContainer: 'SkeletonBlock_headerContainer__qVrPn',
                tracksContainer: 'SkeletonBlock_tracksContainer__BEMi0',
            };
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
        17071: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => l });
            var l = (function (e) {
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
        20129: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => G });
            var l = i(88800),
                s = i(65724),
                a = i(84961),
                r = i(53548),
                o = i(2058),
                n = i(88969),
                d = i(17392),
                c = i(50408),
                h = i(96817),
                u = i(11372),
                b = i(98225),
                m = i(29504),
                _ = i(32353),
                v = i(29595),
                g = i(74965),
                k = i(51318),
                f = i(17071),
                C = i(38860),
                I = i(72288),
                p = i(27506),
                S = i(97956),
                x = i(74773),
                E = i(66943),
                N = i(94058),
                L = i(37770),
                y = i(87366),
                w = i(76099),
                A = i(79418),
                T = i(91177),
                R = i(29832),
                j = i(52300),
                M = i(7555),
                z = i(81877),
                O = i(60978),
                B = i(5818),
                V = i.n(B);
            let D = (0, a.PA)((e) => {
                let { className: t, artist: i } = e,
                    a = (0, T.D)(),
                    {
                        wizard: { toggleArtistLike: o, isArtistLiked: n },
                    } = (0, I.g)(),
                    { id: c, name: u, coverUri: b } = i,
                    _ = (0, r.useCallback)(() => {
                        o(c);
                    }, [o, c]),
                    v = n(c),
                    g = (0, r.useMemo)(
                        () =>
                            (0, l.jsx)(M.t, {
                                className: V().cover,
                                radius: 'round',
                                'data-test-id': d.e8.wizard.ARTIST_CARD,
                                children: (0, l.jsxs)(h.$, {
                                    radius: 'round',
                                    className: V().coverBlock,
                                    variant: 'default',
                                    onClick: _,
                                    withRipple: !1,
                                    withHover: !1,
                                    'aria-pressed': v,
                                    'aria-label': u,
                                    'data-test-id': d.e8.wizard.ARTIST_CARD_BUTTON,
                                    children: [
                                        (0, l.jsx)(z.B, { className: V().image, src: b || O.A.src, fit: 'cover', alt: u, withAvatarReplace: !!b, 'aria-hidden': !0 }),
                                        (0, l.jsx)('div', {
                                            className: (0, s.$)(V().like),
                                            children: (0, l.jsx)(j.I, { variant: 'likedVariant', size: 's', className: V().icon }),
                                        }),
                                    ],
                                }),
                            }),
                        [v, b, u, _],
                    );
                return (0, l.jsx)(R.MN, {
                    ref: a,
                    className: (0, s.$)(V().root, { [V().root_selected]: v }, t),
                    textPosition: 'center',
                    title: (0, l.jsx)(m.HL, {
                        'aria-hidden': !0,
                        className: V().name,
                        variant: 'div',
                        type: 'entity',
                        size: 'l',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': d.e8.wizard.ARTIST_CARD_NAME,
                        children: u,
                    }),
                    view: g,
                    'data-test-id': d.Kq.artist.ARTIST_ITEM,
                });
            });
            var P = i(63442),
                W = i.n(P);
            let F = { [_.u.Desktop]: { start: 40, end: 40 }, [_.u.Mobile]: { start: 40, end: 40 } },
                G = (0, a.PA)((e) => {
                    let { onFinishSuccess: t } = e,
                        { formatMessage: i } = (0, o.A)(),
                        {
                            wizard: a,
                            settings: { isMobile: _, isWindowsApplication: T, isLinuxApplication: R },
                            experiments: j,
                            user: M,
                        } = (0, I.g)(),
                        { notify: z } = (0, g.l)(),
                        O = (0, C.z)(),
                        [B, V] = (0, c.d)(),
                        P = (0, r.useRef)(!1),
                        G = j.checkExperiment(S.z.WebNextWizard3, 'on'),
                        H = (0, b.zb)(0),
                        K = (0, r.useMemo)(
                            () => (e) => {
                                var t;
                                if (!H.onTabChange || e === H.value) return;
                                H.onTabChange(e);
                                let i = null == (t = a.genres[e]) ? void 0 : t.id;
                                (a.setFilter(i), null == B || B.scrollTo({ top: 0 }));
                            },
                            [a, H, B],
                        ),
                        U = (0, r.useMemo)(() => {
                            switch (a.remainingLikesToFinish) {
                                case 0:
                                    return i({ id: 'wizard.button-done' });
                                case 1:
                                    return i({ id: 'wizard.button-one-more' });
                                default:
                                    return 0 === a.selectedArtistsQuantity ? i({ id: 'wizard.button-tune' }) : i({ id: 'wizard.button-little-more' });
                            }
                        }, [a.remainingLikesToFinish, a.selectedArtistsQuantity, i]),
                        $ = (0, r.useMemo)(
                            () =>
                                (0, l.jsx)(w.wI, {
                                    className: W().tabCarousel,
                                    ...H,
                                    onTabChange: K,
                                    isShimmerVisible: a.loadingState === x.G.PENDING,
                                    shimmer: (0, l.jsx)(w.zr, { isActive: !0, className: W().tabCarousel, count: _ ? 2 : 3 }),
                                    children: a.genres.map((e, t) =>
                                        (0, l.jsx)(
                                            y.o,
                                            {
                                                className: (0, s.$)(W().filter, { [W().filter_selected]: t === H.value }),
                                                titleClassName: W().tabTitle,
                                                title: e.title,
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [a.genres, H, K, a.loadingState, _],
                        ),
                        Z = (0, r.useCallback)(() => {
                            a.loadArtists(60);
                        }, [a]);
                    (0, r.useEffect)(() => {
                        a.filter && Z();
                    }, [a.filter, Z]);
                    let Y = (0, r.useCallback)(async () => {
                        (await a.loadGenres(), Z());
                    }, [a, Z]);
                    ((0, r.useEffect)(() => {
                        a.modal.isOpened && Y();
                    }, [a, a.modal.isOpened, Y]),
                        (0, r.useEffect)(() => {
                            a.loadingState === x.G.REJECT &&
                                (a.modal.close(), z((0, l.jsx)(E.h, { error: i({ id: 'error-messages.error-load-wizard' }) }), { containerId: v.u.ERROR }));
                        }, [a, a.loadGenres, a.loadingState, i, z]));
                    let J = (0, r.useMemo)(
                            () =>
                                (0, l.jsx)(m.DZ, {
                                    className: W().title,
                                    weight: 'bold',
                                    variant: 'h1',
                                    size: 'l',
                                    'data-test-id': d.e8.wizard.WIZARD_MODAL_TITLE,
                                    children: (0, l.jsx)(n.A, { id: 'wizard.modal-title' }),
                                }),
                            [],
                        ),
                        q = (0, r.useCallback)(async () => {
                            if (!P.current) {
                                P.current = !0;
                                try {
                                    ((await a.finish()) === p.F.OK && (await M.getSettings(), await (null == t ? void 0 : t())), a.modal.close());
                                } finally {
                                    P.current = !1;
                                }
                            }
                        }, [t, M, a]);
                    return (
                        (0, r.useEffect)(
                            () => (
                                null == O ||
                                    O.addShortcutsListener(f.M.MAIN, k.l.CLOSE, () => {
                                        a.modal.isOpened && q();
                                    }),
                                () => {
                                    null == O || O.removeShortcutsListener(f.M.MAIN, k.l.CLOSE);
                                }
                            ),
                            [q, a.modal.isOpened, O],
                        ),
                        (0, l.jsxs)(u.a, {
                            className: (0, s.$)(W().root, { [W().root_withCustomControls]: T || R }),
                            headerClassName: W().modalHeader,
                            contentClassName: W().modalContent,
                            open: a.modal.isOpened,
                            onOpenChange: a.modal.onOpenChange,
                            onClose: q,
                            size: 'fullscreen',
                            placement: 'center',
                            labelClose: i({ id: 'interface-actions.close' }),
                            closeButtonDataTestId: d.e8.wizard.WIZARD_MODAL_CLOSE_BUTTON,
                            'data-test-id': d.e8.wizard.WIZARD_MODAL,
                            header: _ && J,
                            escapeKey: !1,
                            children: [
                                (0, l.jsxs)('div', {
                                    className: W().wrapper,
                                    children: [
                                        !_ && J,
                                        (0, l.jsx)(m.HL, {
                                            className: W().text,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_TEXT,
                                            children: (0, l.jsx)(n.A, { id: 'wizard.modal-text' }),
                                        }),
                                        G &&
                                            (0, l.jsx)('div', {
                                                className: W().progress,
                                                children: (0, l.jsx)(m.HL, {
                                                    variant: 'div',
                                                    size: 'm',
                                                    weight: 'normal',
                                                    lineClamp: 2,
                                                    'data-test-id': d.e8.wizard.WIZARD_MODAL_PROGRESS_TEXT,
                                                    children: a.progressText,
                                                }),
                                            }),
                                        (0, l.jsx)(h.$, {
                                            className: (0, s.$)(W().button, { [W().button_withProgress]: G }),
                                            size: _ ? 'm' : 'l',
                                            iconPosition: 'right',
                                            radius: 'xxxl',
                                            color: 'primary',
                                            onClick: q,
                                            disabled: !a.canFinish,
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_BUTTON,
                                            children: (0, l.jsx)(m.HL, { variant: 'div', size: 'm', weight: 'medium', children: U }),
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)('div', {
                                    className: W().mainContainer,
                                    children: [
                                        (0, l.jsx)(N.F, { className: W().carousel, carouselElement: $, scrollPadding: F }),
                                        (0, l.jsx)(A.$, {
                                            withFooter: !1,
                                            className: (0, s.$)(W().scrollContainer, W().important),
                                            itemContentCallback: (e) => {
                                                let t = a.artistsByGenre[e];
                                                if (!t) {
                                                    let e = i({ id: 'loading-messages.entity-is-loading' }, { entityName: i({ id: 'entity-names.artist' }) });
                                                    return (0, l.jsx)(L.V, { 'aria-label': e, round: !0, centered: !0 });
                                                }
                                                return (0, l.jsx)(D, { artist: t }, t.id);
                                            },
                                            data: a.artistsByGenre,
                                            endReached: Z,
                                            listClassName: W().content,
                                            itemClassName: W().item,
                                            pageSize: 60,
                                            handleRef: V,
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_ARTISTS_GRID,
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
        },
        21076: (e) => {
            e.exports = {
                tab: 'HeaderTabs_tab__qmO6o',
                tabCarousel: 'HeaderTabs_tabCarousel__0JoCN',
                important: 'HeaderTabs_important__eRbLm',
                header: 'HeaderTabs_header__P_LJZ',
                stickyTabs: 'HeaderTabs_stickyTabs__R5qFO',
            };
        },
        21800: (e) => {
            e.exports = { root: 'VirtualizedSkeletonBlock_root__oFWuv' };
        },
        29517: (e) => {
            e.exports = { root: 'Skeleton_root__TJpzw', upperBlocks: 'Skeleton_upperBlocks__fbW1Q', tabPanel: 'Skeleton_tabPanel__o1Zhn' };
        },
        51318: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => l });
            var l = (function (e) {
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
        58857: (e) => {
            e.exports = {
                content: 'LandingPage_content__ovHlJ',
                root: 'LandingPage_root__B2lPp',
                header: 'LandingPage_header__TiraG',
                title: 'LandingPage_title__gsIx4',
                footer: 'LandingPage_footer__K9y8K',
                error: 'LandingPage_error__mEsH2',
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
        70030: (e, t, i) => {
            'use strict';
            i.d(t, { u2: () => d, rl: () => l, mz: () => n, yq: () => h, zE: () => s });
            var l,
                s,
                a = i(9519),
                r = i(39499);
            (!(function (e) {
                ((e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'));
            })(l || (l = {})),
                (function (e) {
                    ((e.HIDDEN = 'HIDDEN'), (e.VISIBLE = 'VISIBLE'));
                })(s || (s = {})));
            class o {
                attachSkeleton(e) {
                    (this.disconnect(), (this.skeleton = e));
                }
                observe(e) {
                    let { element: t, id: i } = e;
                    t && this.detector && (this.targetsToIdMap.set(t, i), this.detector.observe(t));
                }
                unobserve(e) {
                    let { element: t } = e;
                    t && this.detector && (this.targetsToIdMap.delete(t), this.detector.unobserve(t));
                }
                observeList(e) {
                    return this.virtualizedMetadataLoader
                        ? (this.stopObservingList(),
                          (this.listItems = e.items),
                          (this.potentialBlocksIndexes = this.calculatePotentialBlocksIndexes()),
                          this.virtualizedMetadataLoader.observeList({ ...e, items: this.getPotentialItems(), onVisibilityChange: this.onListVisibilityChange }),
                          this.subscribeToBlocksLoadingStatus(),
                          () => this.stopObservingList())
                        : () => void 0;
                }
                disconnect() {
                    var e;
                    (this.stopObservingList(), null == (e = this.detector) || e.disconnect(), this.targetsToIdMap.clear(), (this.skeleton = void 0));
                }
                calculatePotentialBlocksIndexes() {
                    let e = [];
                    return (
                        this.listItems.forEach((t, i) => {
                            var s;
                            let a = null == (s = this.skeleton) ? void 0 : s.getNodeById(t.id);
                            a && a.state.loadingStatus.value !== l.REJECT && e.push(i);
                        }),
                        e
                    );
                }
                getPotentialItems() {
                    let e = [];
                    return (
                        this.potentialBlocksIndexes.forEach((t) => {
                            let i = this.listItems[t];
                            i && e.push(i);
                        }),
                        e
                    );
                }
                subscribeToBlocksLoadingStatus() {
                    this.listItems.forEach((e) => {
                        var t;
                        let i = null == (t = this.skeleton) ? void 0 : t.getNodeById(e.id);
                        if (!i) return;
                        let s = i.state.loadingStatus.value === l.REJECT,
                            a = i.state.loadingStatus.onChange(() => {
                                let e = i.state.loadingStatus.value === l.REJECT;
                                e !== s && ((s = e), this.updatePotentialBlocksIndexes());
                            });
                        this.blocksLoadingStatusUnsubs.push(a);
                    });
                }
                stopObservingList() {
                    var e;
                    (this.blocksLoadingStatusUnsubs.forEach((e) => e()),
                        (this.blocksLoadingStatusUnsubs = []),
                        null == (e = this.virtualizedMetadataLoader) || e.unobserveList(),
                        (this.listItems = []),
                        (this.potentialBlocksIndexes = []));
                }
                constructor({ visibilityConfig: e }) {
                    if (
                        ((0, a._)(this, 'detector', void 0),
                        (0, a._)(this, 'virtualizedMetadataLoader', void 0),
                        (0, a._)(this, 'skeleton', void 0),
                        (0, a._)(this, 'targetsToIdMap', new Map()),
                        (0, a._)(this, 'listItems', []),
                        (0, a._)(this, 'potentialBlocksIndexes', []),
                        (0, a._)(this, 'blocksLoadingStatusUnsubs', []),
                        (0, a._)(this, 'updatePotentialBlocksIndexes', () => {
                            var e;
                            let t = this.potentialBlocksIndexes,
                                i = this.calculatePotentialBlocksIndexes();
                            ((this.potentialBlocksIndexes = i),
                                (t.length === i.length && t.every((e, t) => e === i[t])) ||
                                    null == (e = this.virtualizedMetadataLoader) ||
                                    e.updateItems(this.getPotentialItems()));
                        }),
                        (0, a._)(this, 'setNodeVisibility', (e, t) => {
                            var i;
                            let l = null == (i = this.skeleton) ? void 0 : i.getNodeById(e);
                            if (!l) return;
                            let a = t ? s.VISIBLE : s.HIDDEN;
                            l.state.visibilityStatus.value !== a && (l.state.visibilityStatus.value = a);
                        }),
                        (0, a._)(this, 'onListVisibilityChange', (e) => {
                            e.forEach((e) => {
                                this.setNodeVisibility(e.id, e.isVisible);
                            });
                        }),
                        (0, a._)(this, 'onElementsVisibilityChange', (e) => {
                            for (let t of e) {
                                let e = this.targetsToIdMap.get(t.target);
                                e && this.setNodeVisibility(e, t.isIntersecting);
                            }
                        }),
                        'listVisibility' === e.type)
                    ) {
                        this.virtualizedMetadataLoader = e.virtualizedMetadataLoader;
                        return;
                    }
                    this.detector = e.detectorFactory.create({ onVisibilityChange: this.onElementsVisibilityChange });
                }
            }
            class n {
                async loadAndCreateSkeleton(e) {
                    let { data: t, preloadedBlocksMeta: i } = e,
                        l = this.skeletonFactory.create({ data: t });
                    (this.visibilityController && this.visibilityController.attachSkeleton(l),
                        await l.loadSkeletonMeta(),
                        l.createSkeletonTree(i),
                        l.onNodesVisibilityChange(),
                        (this.skeleton = l));
                }
                createSkeleton(e) {
                    let { data: t, preloadedBlocksMeta: i } = e,
                        l = this.skeletonFactory.create({ data: t });
                    (this.visibilityController && this.visibilityController.attachSkeleton(l), l.createSkeletonTree(i), l.onNodesVisibilityChange(), (this.skeleton = l));
                }
                async loadNodes(e) {
                    if (!this.skeleton) return;
                    let t = [];
                    for (let i of e) {
                        let e = this.skeleton.getNodeById(i);
                        e && t.push(e.load());
                    }
                    await Promise.allSettled(t);
                }
                createVisibilityController(e) {
                    this.hasVisibilityController ||
                        ((this.visibilityController = new o(e)),
                        this.skeleton && this.visibilityController.attachSkeleton(this.skeleton),
                        (this.hasVisibilityController = !0));
                }
                observe(e) {
                    let { target: t, loadIfNoElement: i = !1 } = e,
                        { element: l, id: s } = t;
                    if (!l && i) {
                        var a;
                        let e = null == (a = this.skeleton) ? void 0 : a.getNodeById(s);
                        null == e || e.load();
                        return;
                    }
                    if (!this.visibilityController) throw new r.t('VisibilityController has not been created');
                    this.visibilityController.observe(t);
                }
                unobserve(e) {
                    if (!this.visibilityController) throw new r.t('VisibilityController has not been created');
                    this.visibilityController.unobserve(e);
                }
                observeList(e) {
                    if (!this.visibilityController) throw new r.t('VisibilityController has not been created');
                    return this.visibilityController.observeList(e);
                }
                destroy() {
                    var e, t;
                    (null == (e = this.visibilityController) || e.disconnect(), null == (t = this.skeleton) || t.destroy(), (this.skeleton = void 0));
                }
                constructor({ skeletonFactory: e }) {
                    ((0, a._)(this, 'skeletonFactory', void 0),
                        (0, a._)(this, 'visibilityController', void 0),
                        (0, a._)(this, 'hasVisibilityController', !1),
                        (0, a._)(this, 'skeleton', void 0),
                        (this.skeletonFactory = e));
                }
            }
            class d {
                observe(e, t) {
                    let i = new ResizeObserver(() => t());
                    return (i.observe(e, { box: 'border-box' }), () => i.disconnect());
                }
            }
            let c = (e) => 'window' in e && e.window === e;
            class h {
                observeList(e) {
                    let { container: t, scrollElement: i, items: l, gap: s, overscan: a = 2, onVisibilityChange: r } = e;
                    if (
                        (this.unobserveList(),
                        (this.container = t),
                        (this.scrollElement = i),
                        (this.items = l),
                        (this.gap = s),
                        (this.overscan = Number.isFinite(a) ? Math.max(0, a) : 2),
                        (this.onVisibilityChange = r),
                        (this.abortController = new AbortController()),
                        this.rebuildLayout(),
                        this.scrollElement.addEventListener('scroll', this.scheduleRefresh, { passive: !0, signal: this.abortController.signal }),
                        !c(i))
                    ) {
                        var o;
                        this.stopObservingResize = null == (o = this.resizeObserverAdapter) ? void 0 : o.observe(i, this.scheduleRefresh);
                    }
                    this.refresh();
                }
                updateItems(e) {
                    ((this.items = e), this.rebuildLayout(), this.refresh());
                }
                refresh() {
                    if ((this.cancelScheduledRefresh(), !this.container || !this.scrollElement || !this.onVisibilityChange)) return;
                    if (!this.container.isConnected || 0 === this.layout.totalSize) return void this.updateVisibility([]);
                    let e = this.container.getBoundingClientRect(),
                        t = c(this.scrollElement) ? { top: 0, bottom: this.scrollElement.innerHeight } : this.scrollElement.getBoundingClientRect(),
                        i = Math.max(0, t.top - e.top),
                        l = Math.min(this.layout.totalSize, t.bottom - e.top);
                    if (l <= i) return void this.updateVisibility([]);
                    let s = ((e) => {
                        let { items: t, viewportStart: i, viewportEnd: l, overscan: s } = e;
                        if (0 === t.length) return [];
                        let a = ((e, t) => {
                                let i = 0,
                                    l = e.length - 1,
                                    s = -1;
                                for (; i <= l;) {
                                    let a = Math.floor((i + l) / 2),
                                        r = e[a];
                                    if (!r) break;
                                    r.end >= t ? ((s = a), (l = a - 1)) : (i = a + 1);
                                }
                                return s;
                            })(t, i),
                            r = ((e, t) => {
                                let i = 0,
                                    l = e.length - 1,
                                    s = -1;
                                for (; i <= l;) {
                                    let a = Math.floor((i + l) / 2),
                                        r = e[a];
                                    if (!r) break;
                                    r.start <= t ? ((s = a), (i = a + 1)) : (l = a - 1);
                                }
                                return s;
                            })(t, l);
                        if (-1 === a || -1 === r || a > r) return [];
                        let o = Math.max(0, a - s),
                            n = Math.min(t.length - 1, r + s);
                        return t.slice(o, n + 1);
                    })({ items: this.layout.items, viewportStart: i, viewportEnd: l, overscan: this.overscan });
                    this.updateVisibility(s);
                }
                unobserveList() {
                    var e, t;
                    (null == (e = this.stopObservingResize) || e.call(this),
                        (this.stopObservingResize = void 0),
                        null == (t = this.abortController) || t.abort(),
                        (this.abortController = void 0),
                        this.cancelScheduledRefresh(),
                        this.updateVisibility([]),
                        (this.animationFrameId = void 0),
                        (this.container = void 0),
                        (this.scrollElement = void 0),
                        (this.items = []),
                        (this.layout = { items: [], totalSize: 0 }),
                        (this.gap = 0),
                        (this.overscan = 2),
                        (this.onVisibilityChange = void 0));
                }
                updateVisibility(e) {
                    let t = new Set(e.map((e) => e.id)),
                        i = [];
                    if (
                        (t.forEach((e) => {
                            this.visibleItemIds.has(e) || i.push({ id: e, isVisible: !0 });
                        }),
                        this.visibleItemIds.forEach((e) => {
                            t.has(e) || i.push({ id: e, isVisible: !1 });
                        }),
                        (this.visibleItemIds = t),
                        i.length > 0)
                    ) {
                        var l;
                        null == (l = this.onVisibilityChange) || l.call(this, i);
                    }
                }
                constructor({ resizeObserverAdapter: e } = {}) {
                    ((0, a._)(this, 'resizeObserverAdapter', void 0),
                        (0, a._)(this, 'container', void 0),
                        (0, a._)(this, 'scrollElement', void 0),
                        (0, a._)(this, 'gap', 0),
                        (0, a._)(this, 'overscan', 2),
                        (0, a._)(this, 'onVisibilityChange', void 0),
                        (0, a._)(this, 'abortController', void 0),
                        (0, a._)(this, 'items', []),
                        (0, a._)(this, 'layout', { items: [], totalSize: 0 }),
                        (0, a._)(this, 'visibleItemIds', new Set()),
                        (0, a._)(this, 'animationFrameId', void 0),
                        (0, a._)(this, 'stopObservingResize', void 0),
                        (0, a._)(this, 'rebuildLayout', () => {
                            this.layout = ((e) => {
                                let { items: t, gap: i } = e,
                                    l = [],
                                    s = 0,
                                    a = !1;
                                return (
                                    t.forEach((e, t) => {
                                        if (e.estimatedSize <= 0) return;
                                        let r = e.estimatedSize + i;
                                        (l.push({ id: e.id, index: t, start: s, end: s + r, size: r }), (s += r), (a = !0));
                                    }),
                                    { items: l, totalSize: a ? Math.max(0, s - i) : 0 }
                                );
                            })({ items: this.items, gap: this.gap });
                        }),
                        (0, a._)(this, 'cancelScheduledRefresh', () => {
                            var e;
                            if (void 0 === this.animationFrameId) return;
                            let t = null == (e = this.container) ? void 0 : e.ownerDocument.defaultView;
                            (null == t || t.cancelAnimationFrame(this.animationFrameId), (this.animationFrameId = void 0));
                        }),
                        (0, a._)(this, 'scheduleRefresh', () => {
                            if (!this.container || void 0 !== this.animationFrameId) return;
                            let e = this.container.ownerDocument.defaultView;
                            if (!e) return void this.refresh();
                            this.animationFrameId = e.requestAnimationFrame(() => {
                                ((this.animationFrameId = void 0), this.refresh());
                            });
                        }),
                        (this.resizeObserverAdapter = e));
                }
            }
        },
        79418: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => v });
            var l = i(88800),
                s = i(65724),
                a = i(61013),
                r = i(53548);
            let o = (e) => {
                    let { style: t, forwardRef: i, context: s, ...a } = e,
                        r = (null == s ? void 0 : s.listAriaLabel) || void 0,
                        o = (null == s ? void 0 : s.listRole) || 'region';
                    return (0, l.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: o, 'aria-label': r, style: { ...t }, ref: i, ...a });
                },
                n = (0, r.forwardRef)((e, t) => (0, l.jsx)(o, { forwardRef: t, ...e }));
            var d = i(16434),
                c = i.n(d);
            let h = (e) => {
                    let { style: t, forwardRef: i, withFooter: a, withHeader: r, withForceScroll: o, ...n } = e;
                    return (0, l.jsx)('div', {
                        className: (0, s.$)(c().scroller, { [c().scroller_withFooter]: a, [c().scroller_withHeader]: r, [c().scroller_withForceScroll]: o }),
                        style: { ...t },
                        ref: i,
                        ...n,
                        tabIndex: -1,
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, l.jsx)(h, { forwardRef: t, ...e }));
            var b = i(55482),
                m = i(75151);
            let _ = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: s,
                            debounceDurationInMs: a = 100,
                            totalCount: o = 0,
                            shouldTriggerRangeChangedOn: n = [],
                            endReached: d,
                            virtuosoRef: c,
                            ...h
                        } = e,
                        [u, _] = (0, r.useState)(null),
                        v = (0, r.useMemo)(
                            () =>
                                (0, b.A)((e) => {
                                    if ((null == s || s(e), n.length > 0 && _(e), t && i)) {
                                        let l = Math.floor(e.endIndex / t) + 1,
                                            s = Math.floor(e.startIndex / t);
                                        for (let e = s; e < l; e++) i(e);
                                    }
                                }, a),
                            [a, s, t, i, n],
                        );
                    (0, r.useEffect)(() => {
                        n.length > 0 && u && v(u);
                    }, n);
                    let g = (0, r.useMemo)(() => {
                        if (d)
                            return (0, b.A)((e) => {
                                d(e);
                            }, a);
                    }, [d, a]);
                    return (0, l.jsx)(m.sN, { ref: c, rangeChanged: v, totalCount: o, endReached: g, ...h });
                },
                v = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: o,
                            onGetDataByRange: d,
                            itemClassName: h,
                            itemContentCallback: b,
                            listClassName: m,
                            overscan: v = 700,
                            pageSize: g = 20,
                            totalCount: k,
                            totalRequests: f,
                            debounceDurationInMs: C,
                            initialItemCount: I,
                            minInitialItemCount: p = 20,
                            handleRef: S,
                            alwaysShowScrollbar: x = !1,
                            testId: E,
                            isMobileLayout: N = !1,
                            shouldTriggerRangeChangedOn: L,
                            ...y
                        } = e,
                        [w, A] = (0, r.useState)(!1),
                        T = (0, r.useMemo)(
                            () =>
                                (0, a.A)((e) => {
                                    A(e);
                                }, 100),
                            [],
                        ),
                        R = (0, r.useMemo)(() => {
                            var e, t;
                            return N
                                ? {
                                      Scroller: u,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : n,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: u,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : n,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, f, N]),
                        j = I ? Math.min(I, p) : void 0;
                    return (0, l.jsxs)('div', {
                        className: (0, s.$)(c().root, { [c().root_scrolling]: w || x, [c().root_notScrolling]: !w && !x }, t),
                        'data-test-id': E,
                        children: [
                            N && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, l.jsx)(_, {
                                overscan: v,
                                components: R,
                                listClassName: m,
                                itemClassName: h,
                                isScrolling: T,
                                itemContent: b,
                                scrollerRef: S,
                                totalCount: k,
                                pageSize: g,
                                onPageHandler: o,
                                onRangeHandler: d,
                                debounceDurationInMs: C,
                                initialItemCount: j,
                                shouldTriggerRangeChangedOn: L,
                                ...y,
                            }),
                            N && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        93398: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => ex }));
            var l = i(88800),
                s = i(58390),
                a = i(72288),
                r = i(97956),
                o = i(84961),
                n = i(53548),
                d = i(97234),
                c = i(59724),
                h = i(17392),
                u = i(29993),
                b = i(66719),
                m = i(29504),
                _ = i(25772),
                v = i(32596),
                g = i(20129),
                k = i(69630),
                f = i(98427),
                C = i(46422),
                I = i(44230),
                p = i(37670);
            let S = new Set(Object.values(i(46312).p)),
                x = (e) => S.has(e);
            var E = i(86790),
                N = i(60266),
                L = i(56248),
                y = i(58857),
                w = i.n(y);
            let A = (0, o.PA)((e) => {
                let { skeleton: t } = e,
                    { landing: i, user: s } = (0, a.g)(),
                    r = (0, C.W)(),
                    { contentScrollRef: o, setContentScrollRef: S } = (0, I.g)();
                ((0, n.useEffect)(() => () => i.reset(), [i]), (0, p.J)(i.isResolved));
                let y = (0, u.c)(() => {
                    if (i.isLoaded) return i.getSkeleton({ id: i.id || t, showWizard: s.settings.showWizard }, { preloadBlocksCount: 2 });
                });
                if ((i.isNeededToLoad && (0, n.use)(i.getSkeleton({ id: t, showWizard: s.settings.showWizard }, { preloadBlocksCount: 2 })), i.isRejected))
                    return (0, l.jsx)(v.SomethingWentWrong, {});
                let A = !x(i.id) && r.canBack;
                return (0, l.jsxs)(c.a, {
                    pageId: d.AppScreen.DynamicScreen,
                    pageIdForFrom: f.b.LANDING,
                    skeletonId: t,
                    mainObjectType: d.DomainObjectType.NonApplicable,
                    mainObjectId: '',
                    children: [
                        (0, l.jsx)(k.h, {
                            scrollElement: o,
                            headerThreshold: 134,
                            children: (0, l.jsxs)(b.N, {
                                className: w().root,
                                containerClassName: w().content,
                                ref: S,
                                'data-test-id': h.Xk.landing.LANDING_PAGE,
                                children: [
                                    (0, l.jsxs)('div', {
                                        className: w().header,
                                        children: [
                                            A && (0, l.jsx)(L.L, { withForwardControl: !1, withBackwardControl: A }),
                                            (0, l.jsx)(m.DZ, {
                                                variant: 'h1',
                                                weight: 'bold',
                                                size: 'xl',
                                                className: w().title,
                                                'data-test-id': h.Xk.landing.LANDING_PAGE_HEADER,
                                                children: i.title,
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)('div', {
                                        className: w().landing,
                                        children: (0, l.jsx)(_.E, {
                                            landing: i,
                                            errorComponent: (0, l.jsx)(v.SomethingWentWrong, { className: w().error, withBackwardControl: !1 }),
                                        }),
                                    }),
                                    (0, l.jsx)(N.A, { children: (0, l.jsx)(E.w, { className: w().footer }) }),
                                ],
                            }),
                        }),
                        (0, l.jsx)(g.p, { onFinishSuccess: y }),
                    ],
                });
            });
            var T = i(31556),
                R = i(12739),
                j = i(81862),
                M = i(8840),
                z = i(98225),
                O = i(65724),
                B = i(42592),
                V = i(46384),
                D = i(79070),
                P = i(86535),
                W = i(84266),
                F = i(5085),
                G = i.n(F);
            let H = (0, o.PA)((e) => {
                    let { block: t, ref: i, className: s, containerClassName: o, ...n } = e,
                        {
                            isLoading: d,
                            isLoaded: c,
                            isRejected: h,
                            isShimmerVisible: u,
                            isShimmerActive: b,
                            id: m,
                            type: _,
                            meta: v,
                            data: g,
                            setOutdated: k,
                            setIsNeededToLoad: f,
                        } = t;
                    if ((0, R.Q)(t)) return null;
                    let C = W.D[t.type];
                    (0, B.W)({ enabled: c });
                    let { settings: I, experiments: p } = (0, a.g)(),
                        S = !p.checkExperiment(r.z.WebNextVirtualSkeleton, 'on') && I.browserInfo && !I.browserInfo.isSafari,
                        x = (0, D.L)(() => {
                            var e, t;
                            return null != (t = null == i || null == (e = i.current) ? void 0 : e.clientHeight) ? t : 0;
                        });
                    return (0, l.jsx)(
                        C,
                        {
                            setIsNeededToLoad: f,
                            setOutdated: k,
                            isLoaded: c,
                            isLoading: d,
                            isShimmerVisible: u,
                            isShimmerActive: b,
                            isRejected: h,
                            tracksContainerClassName: G().tracksContainer,
                            containerClassName: (0, O.$)(G().container, G().important, o),
                            className: (0, O.$)({ [G().container_withContentVisibility]: S && x }, s),
                            headerClassName: G().headerContainer,
                            meta: v,
                            data: g,
                            type: _,
                            ref: i,
                            headingVariant: 'h2',
                            'data-intersection-property-id': t.id,
                            'data-test-id': t.type,
                            ...n,
                        },
                        m,
                    );
                }),
                K = (0, o.PA)((e) => {
                    let { ...t } = e;
                    return (0, l.jsx)(V.F, {
                        blockId: t.block.id,
                        blockType: t.block.type,
                        blockIdForFrom: ''.concat(P.h.DISCOVERY_BLOCK, '-').concat(t.block.id),
                        blockPosX: 1,
                        blockPosY: t.blockIndex + 1,
                        objectsCount: t.block.objectsCount,
                        children: (0, l.jsx)(H, { ...t }),
                    });
                });
            var U = i(52676);
            let $ = (0, o.PA)((e) => {
                    let { block: t, ref: i, onLoad: s, ...a } = e;
                    if (
                        ((0, n.useEffect)(() => {
                            null == s || s();
                        }, [t.isVisible, s]),
                        !(0, R.Q)(t) || !t.isVisible)
                    )
                        return null;
                    let r = U.Y[t.type];
                    return (0, l.jsx)(r, { data: t.data, ref: i, 'data-intersection-property-id': t.id, ...a });
                }),
                Z = (0, o.PA)((e) => {
                    let { ...t } = e;
                    return (0, l.jsx)(V.F, {
                        blockId: t.block.id,
                        blockType: t.block.type,
                        blockIdForFrom: ''.concat(P.h.DISCOVERY_BLOCK, '-').concat(t.block.id),
                        blockPosX: 1,
                        blockPosY: t.blockIndex + 1,
                        objectsCount: t.block.objectsCount,
                        children: (0, l.jsx)($, { ...t }),
                    });
                }),
                Y = (0, o.PA)((e) => ((0, R.Q)(e.block) ? (0, l.jsx)(Z, { ...e }) : (0, l.jsx)(K, { ...e })));
            var J = i(93317),
                q = i(4086),
                X = i(41928),
                Q = i(74773),
                ee = i(63807),
                et = i(87366),
                ei = i(76099),
                el = i(21076),
                es = i.n(el);
            let ea = (0, o.PA)((e) => {
                var t, i, s;
                let {
                        skeleton: r,
                        landing: o,
                        tabsState: d,
                        tabElementId: c,
                        headerClassName: b,
                        headerVariant: m,
                        stickyHeaderClassName: _,
                        staticHeaderClassName: v,
                        stickyHeaderTabIndex: g,
                        tabWithHeadingTitle: k,
                        tabWithCovers: f,
                        tabWithSubtitle: C,
                    } = e,
                    { tabs: p } = o,
                    { isScrolling: S } = (0, n.useContext)(ee.B),
                    { contentScrollRef: x } = (0, I.g)(),
                    {
                        settings: { isMobile: E },
                    } = (0, a.g)(),
                    N = (0, X.N)().get(q.ni),
                    L = null == r || null == (t = r.root) ? void 0 : t.getTabsBlock(),
                    y = (0, n.useRef)(null);
                (0, n.useEffect)(() => {
                    L && N.loadNodes([L.data.id]);
                }, [N, L]);
                let w = (0, u.c)((e) => {
                    var t;
                    (E ? window.scrollTo(0, 0) : x && (x.scrollTop = 0), null == (t = d.onTabChange) || t.call(d, e));
                });
                return (0, l.jsx)(J.Y, {
                    compositeHeaderRef: y,
                    className: (0, O.$)(es().header, b),
                    variant: m,
                    stickyClassName: _,
                    staticClassName: v,
                    stickyChild: (0, l.jsx)(ei.wI, {
                        isShimmerVisible: p.isLoading || o.isLoading,
                        className: es().stickyTabs,
                        shimmer: (0, l.jsx)(ei.zr, {}),
                        elementId: c,
                        'data-test-id': h.e8.landing.MAIN_TABS,
                        value: d.value,
                        onTabChange: w,
                        children:
                            null == (i = p.data)
                                ? void 0
                                : i.flatMap((e, t) => {
                                      let { meta: i, blocks: s } = e;
                                      return s.length
                                          ? [
                                                (0, l.jsx)(
                                                    et.o,
                                                    {
                                                        className: es().tab,
                                                        value: t,
                                                        'aria-label': i.title,
                                                        title: i.title,
                                                        'aria-hidden': !S && m !== J.V.STICKY,
                                                        tabIndex: null != g ? g : S ? 0 : -1,
                                                    },
                                                    i.id,
                                                ),
                                            ]
                                          : [];
                                  }),
                    }),
                    children: (0, l.jsx)(ei.wI, {
                        className: (0, O.$)(es().tabCarousel, es().important),
                        elementId: c,
                        'data-test-id': h.e8.landing.MAIN_TABS,
                        ...d,
                        children:
                            null == (s = p.data)
                                ? void 0
                                : s.flatMap((e, t) => {
                                      let { meta: i, data: s, blocks: a } = e;
                                      return a.length
                                          ? [
                                                (0, l.jsx)(
                                                    et.o,
                                                    {
                                                        className: es().tab,
                                                        value: t,
                                                        'aria-label': i.title,
                                                        title: i.title,
                                                        subtitle: null == s ? void 0 : s.subtitle,
                                                        covers: null == s ? void 0 : s.covers,
                                                        'aria-hidden': S,
                                                        tabIndex: S ? -1 : 0,
                                                        withCovers: f,
                                                        withSubtitle: C,
                                                        withHeading: k,
                                                        isShimmerVisible: p.loadingState === Q.G.PENDING,
                                                    },
                                                    i.id,
                                                ),
                                            ]
                                          : [];
                                  }),
                    }),
                });
            });
            var er = i(29517),
                eo = i.n(er),
                en = i(29595),
                ed = i(74965),
                ec = i(9492);
            let eh = (e, t) => {
                    let i = null == e ? void 0 : e.getNodeById(t),
                        { notify: s, dismiss: a } = (0, ed.l)(),
                        r = (0, n.useRef)(void 0),
                        o = (0, u.c)(() => {
                            (null == i || i.reloadErrorBlocks(), a({ notificationId: r.current }), (r.current = void 0));
                        });
                    (0, n.useEffect)(() => {
                        if (!i) return;
                        let e = i.hasErrorBlocks.onChange(() => {
                            i.hasErrorBlocks.value && !r.current && (r.current = s((0, l.jsx)(ec.L, { reloadBlocks: o }), { containerId: en.u.ERROR, autoClose: !1 }));
                        });
                        return () => {
                            (e(), a());
                        };
                    }, [i, s, a, o]);
                },
                eu = (0, o.PA)((e) => {
                    var t;
                    let { skeleton: i, landingSdkModel: s, tab: a, tabIndex: r } = e,
                        o = (0, n.useMemo)(() => a.blocks.map(() => (0, n.createRef)()), [a.blocks]);
                    return (
                        eh(i, a.meta.id),
                        (0, l.jsx)(j.h, {
                            tabId: a.meta.id,
                            tabPos: r + 1,
                            isTabSelectedByDefault: (null == (t = s.meta) ? void 0 : t.selectedTabIndex) === r,
                            children: (0, l.jsx)('div', {
                                className: eo().root,
                                children: a.blocks.map((e, t) => (0, l.jsx)(Y, { landingSdkModel: s, block: e, blockIndex: t, ref: o[t] }, e.id)),
                            }),
                        })
                    );
                });
            var eb = i(50408),
                em = i(10270),
                e_ = i(34303),
                ev = i(76106),
                eg = i(21800),
                ek = i.n(eg);
            let ef = (0, o.PA)((e) => {
                    let { virtualItem: t, resizeObserver: i, style: s, ...a } = e,
                        r = (0, n.useRef)(null),
                        o = (0, n.useRef)(null);
                    return (
                        (0, n.useEffect)(() => {
                            let e = o.current;
                            if (e && i) return (i.observe(e), () => i.unobserve(e));
                        }, [i]),
                        (0, l.jsx)('div', { 'data-index': t.index, className: ek().root, ref: o, style: s, children: (0, l.jsx)(Y, { ...a, ref: r }) })
                    );
                }),
                eC = (0, o.PA)((e) => {
                    var t, i;
                    let { skeleton: r, landingSdkModel: o, tab: d, tabIndex: c } = e,
                        h = (0, s.useSearchParams)(),
                        {
                            settings: { isMobile: b },
                        } = (0, a.g)(),
                        { contentScrollRef: m } = (0, I.g)(),
                        [_, v] = (0, eb.d)(),
                        g = (0, n.useRef)(!0),
                        { blockIndexesToShow: k, mapSdkBlockToBlockModel: f } = ((e, t) => {
                            var i;
                            let l = null == e ? void 0 : e.getNodeById(t),
                                [s, a] = (0, n.useState)(null != (i = null == l ? void 0 : l.blocksIndexesToShow.value) ? i : []);
                            return (
                                (0, n.useEffect)(() => {
                                    let e =
                                        null == l
                                            ? void 0
                                            : l.blocksIndexesToShow.onChange(() => {
                                                  var e;
                                                  a(null != (e = null == l ? void 0 : l.blocksIndexesToShow.value) ? e : []);
                                              });
                                    return () => (null == e ? void 0 : e());
                                }, [null == l ? void 0 : l.blocksIndexesToShow]),
                                {
                                    blockIndexesToShow: s,
                                    mapSdkBlockToBlockModel: (0, n.useCallback)(
                                        (e, t, i) => {
                                            let s,
                                                a = t[e];
                                            if (void 0 === a) return;
                                            let r = null == l ? void 0 : l.children[a],
                                                o = i.find((e, t) => (null == r ? void 0 : r.data.id) === e.id && ((s = t), !0));
                                            if (o && void 0 !== s) return { blockModel: o, blockModelIndex: s };
                                        },
                                        [null == l ? void 0 : l.children],
                                    ),
                                }
                            );
                        })(r, d.meta.id);
                    eh(r, d.meta.id);
                    let C = b ? 16 : 24;
                    ((e) => {
                        let { listContainer: t, contentScrollElement: i, isWindowScroll: l, tabId: s, gap: a } = e,
                            r = (0, X.N)().get(q.ni);
                        (0, n.useEffect)(() => {
                            if (!t) return;
                            let e = l ? window : i;
                            if (e) return r.observeList({ container: t, scrollElement: e, tabId: s, sizes: ev.X, gap: a, overscan: 3 });
                        }, [i, a, l, r, t, s]);
                    })({ listContainer: _, contentScrollElement: m, isWindowScroll: b, tabId: d.meta.id, gap: C });
                    let p = (0, u.c)((e) => {
                            let t = k[e];
                            if (void 0 === t) return 300;
                            let i = d.blocks[t];
                            return (null == i ? void 0 : i.isVisible) ? ev.X[i.type] : 0;
                        }),
                        { virtualizer: S, resizeObserver: x } = (0, em.r)({
                            count: null != (i = k.length) ? i : 0,
                            gap: C,
                            getEstimateSize: p,
                            containerRef: _,
                            useVirtualizerMeasurement: !1,
                        });
                    (0, n.useEffect)(() => {
                        var e;
                        if (!g.current) return;
                        let t = h.get(e_.K.BLOCK),
                            i = d.blocks.findIndex((e) => e.id === t);
                        if (!k.includes(i)) return;
                        let l = null == (e = S.getOffsetForIndex(i, 'center')) ? void 0 : e[0];
                        (S.scrollToIndex(i, { align: 'center', behavior: 'auto' }), S.scrollOffset && l && 100 > Math.abs(S.scrollOffset - l) && (g.current = !1));
                    }, [k, h, d.blocks, S]);
                    let E = S.getTotalSize(),
                        N = S.getVirtualItems();
                    return (0, l.jsx)(j.h, {
                        tabId: d.meta.id,
                        tabPos: c + 1,
                        isTabSelectedByDefault: (null == (t = o.meta) ? void 0 : t.selectedTabIndex) === c,
                        children: (0, l.jsx)('div', {
                            className: eo().root,
                            style: { height: ''.concat(E, 'px') },
                            ref: v,
                            children: N.map((e) => {
                                let t = f(e.index, k, d.blocks);
                                return t
                                    ? (0, l.jsx)(
                                          ef,
                                          {
                                              virtualItem: e,
                                              resizeObserver: x,
                                              landingSdkModel: o,
                                              block: t.blockModel,
                                              blockIndex: Number(t.blockModelIndex),
                                              isScrolling: S.isScrolling,
                                              style: { transform: 'translate3d(0, '.concat(e.start - S.options.scrollMargin, 'px, 0)') },
                                          },
                                          e.key,
                                      )
                                    : null;
                            }),
                        }),
                    });
                }),
                eI = (0, o.PA)((e) => {
                    var t;
                    let {
                            skeleton: i,
                            landingSdkModel: s,
                            upperBlocks: o,
                            headerConcealerComponent: d,
                            tabsState: c,
                            containerClassName: h,
                            containerStyle: u,
                            headerClassName: b,
                            tabWithHeadingTitle: m,
                            tabWithCovers: _,
                            tabWithSubtitle: v,
                            stickyHeaderClassName: g,
                            staticHeaderClassName: k,
                            stickyHeaderTabIndex: f,
                            headerVariant: C = J.V.COMPOSITE,
                        } = e,
                        { tabs: I } = s,
                        p = (0, n.useId)(),
                        { experiments: S } = (0, a.g)(),
                        x = S.checkExperiment(r.z.WebNextVirtualSkeleton, 'on') ? eC : eu;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            o,
                            d,
                            (0, l.jsx)(ea, {
                                skeleton: i,
                                landing: s,
                                tabsState: c,
                                tabElementId: p,
                                headerClassName: b,
                                headerVariant: C,
                                stickyHeaderClassName: g,
                                staticHeaderClassName: k,
                                stickyHeaderTabIndex: f,
                                tabWithHeadingTitle: m,
                                tabWithCovers: _,
                                tabWithSubtitle: v,
                            }),
                            (0, l.jsx)('div', {
                                className: h,
                                style: u,
                                children:
                                    null == (t = I.data)
                                        ? void 0
                                        : t.map((e, t) =>
                                              e.blocks.length
                                                  ? (0, l.jsx)(
                                                        z.Kp,
                                                        {
                                                            className: eo().tabPanel,
                                                            name: t,
                                                            value: c.value,
                                                            elementId: p,
                                                            children: (0, l.jsx)(x, { skeleton: i, landingSdkModel: s, tab: e, tabIndex: t }),
                                                        },
                                                        e.meta.id,
                                                    )
                                                  : null,
                                          ),
                            }),
                        ],
                    });
                }),
                ep = (0, o.PA)((e) => {
                    var t, i, s, o, d, c;
                    let {
                            skeleton: h,
                            landingSdkModel: u,
                            headerConcealerComponent: b,
                            errorComponent: m,
                            containerClassName: _,
                            headerClassName: v,
                            containerStyle: g,
                            tabWithHeadingTitle: k,
                            tabWithCovers: f,
                            tabWithSubtitle: C,
                            staticHeaderClassName: I,
                            stickyHeaderClassName: p,
                            stickyHeaderTabIndex: S,
                            headerVariant: x,
                        } = e,
                        { experiments: E } = (0, a.g)(),
                        N = E.checkExperiment(r.z.WebNextVirtualSkeleton, 'on') ? eC : eu,
                        L = ((e) => {
                            var t, i, l;
                            let s = null != (i = null == e || null == (t = e.root) ? void 0 : t.getTabsBlock()) ? i : null,
                                { value: a, onTabChange: r } = (0, z.zb)(null != (l = null == s ? void 0 : s.tabIndex.value) ? l : 0);
                            (0, n.useEffect)(() => {
                                if (!s) return;
                                let e = s.tabIndex.onChange(() => {
                                    null == r || r(s.tabIndex.value);
                                });
                                return () => {
                                    e();
                                };
                            }, [s, r]);
                            let o = (0, n.useCallback)(
                                (e) => {
                                    null == s || s.changeSelectedTab(e);
                                },
                                [s],
                            );
                            return s ? { value: a, onTabChange: o } : { value: 0 };
                        })(h),
                        y = null != (c = null == (t = u.tabs.data) ? void 0 : t.findIndex((e) => e.blocks.length > 0)) ? c : -1,
                        w = (null == (s = u.tabs.data) || null == (i = s[L.value]) ? void 0 : i.blocks.length) ? L.value : y;
                    (0, n.useEffect)(() => {
                        if (w >= 0 && w !== L.value) {
                            var e;
                            null == (e = L.onTabChange) || e.call(L, w);
                        }
                    }, [w, L]);
                    let A = (0, n.useCallback)(
                            (e) => {
                                var t;
                                null == (t = L.onTabChange) || t.call(L, e);
                            },
                            [L],
                        ),
                        T = !!(u.tabs.data && u.tabs.data.filter((e) => e.blocks.length > 0).length > 1),
                        R = null == (o = u.tabs.data) ? void 0 : o[y],
                        O = (0, n.useMemo)(() => {
                            var e, t;
                            return null != (t = null == (e = u.upperBlocks) ? void 0 : e.map(() => (0, n.createRef)())) ? t : [];
                        }, [u.upperBlocks]),
                        B = (0, M.BL)(O, { freezeOnceVisible: !0 }),
                        V = (0, n.useMemo)(() => {
                            var e;
                            if (null == (e = u.upperBlocks) ? void 0 : e.length)
                                return (0, l.jsx)(j.h, {
                                    tabId: '',
                                    tabPos: -1,
                                    isTabSelectedByDefault: !1,
                                    children: (0, l.jsx)('div', {
                                        className: eo().upperBlocks,
                                        children: u.upperBlocks.map((e, t) => {
                                            let { isIntersecting: i } = B[e.id] || {};
                                            return (0, l.jsx)(Y, { landingSdkModel: u, block: e, blockIndex: t, isIntersecting: i, ref: O[t] }, e.id);
                                        }),
                                    }),
                                });
                        }, [null == (d = u.upperBlocks) ? void 0 : d.length, u, B, O]);
                    return T
                        ? (0, l.jsx)(eI, {
                              skeleton: h,
                              landingSdkModel: u,
                              upperBlocks: V,
                              headerConcealerComponent: b,
                              tabsState: { value: w, onTabChange: A },
                              containerClassName: _,
                              containerStyle: g,
                              headerClassName: v,
                              tabWithHeadingTitle: k,
                              tabWithCovers: f,
                              tabWithSubtitle: C,
                              staticHeaderClassName: I,
                              stickyHeaderClassName: p,
                              stickyHeaderTabIndex: S,
                              headerVariant: x,
                          })
                        : R
                          ? (0, l.jsxs)('div', { className: _, style: g, children: [V, b, (0, l.jsx)(N, { skeleton: h, landingSdkModel: u, tab: R, tabIndex: y })] })
                          : V
                            ? (0, l.jsxs)('div', { className: _, style: g, children: [V, b] })
                            : u.isLoadedAndEmpty || (u.isLoaded && y < 0)
                              ? (0, l.jsx)('div', { className: _, style: g, children: m })
                              : null;
                });
            (0, o.PA)((e) => {
                let { skeleton: t } = e,
                    { landingSdkModel: i, user: s } = (0, a.g)(),
                    r = (0, C.W)(),
                    { contentScrollRef: o, setContentScrollRef: u } = (0, I.g)(),
                    _ = (0, X.N)().get(q.ni);
                if (((0, n.useEffect)(() => () => i.reset(), [i]), (0, p.J)(i.isResolved), i.isNeededToInit)) {
                    let e = { type: T.$b.LANDING_PAGE, id: t, showWizard: s.settings.showWizard };
                    i.skeletonMeta ? i.createSkeleton({ skeletonData: e }) : (0, n.use)(i.loadAndCreateSkeleton({ skeletonData: e, preloadBlocksCount: 2 }));
                }
                if (
                    (((e) => {
                        let { landingSdkModel: t } = (0, a.g)();
                        (0, n.useEffect)(() => {
                            var i, l, s;
                            let a = [];
                            if (!e) return;
                            let r = (i) => {
                                if ((0, R.Q)(i)) {
                                    var l;
                                    null == (l = i.data) || l.blocks.forEach(r);
                                    return;
                                }
                                let s = e.getNodeById(i.id);
                                s &&
                                    a.push(
                                        s.state.loadingStatus.onChange(() => {
                                            t.handleSdkBlockUpdate(i, s, s.state.loadingStatus.value);
                                        }),
                                    );
                            };
                            for (let e of (null == (i = t.upperBlocks) || i.forEach(r), null != (s = t.tabs.data) ? s : [])) e.blocks.forEach(r);
                            let o = null == (l = e.root) ? void 0 : l.getTabsBlock();
                            if (o) {
                                let e = o.state.loadingStatus.onChange(() => {
                                    t.handleSdkTabsBlockUpdate(o, o.state.loadingStatus.value);
                                });
                                a.push(e);
                            }
                            return () => {
                                a.forEach((e) => e());
                            };
                        }, [e, t, t.tabs.data, t.upperBlocks]);
                    })(_.skeleton),
                    i.isRejected)
                )
                    return (0, l.jsx)(v.SomethingWentWrong, {});
                let g = !x(i.id) && r.canBack;
                return (0, l.jsx)(c.a, {
                    pageId: d.AppScreen.DynamicScreen,
                    pageIdForFrom: f.b.LANDING,
                    skeletonId: t,
                    children: (0, l.jsx)(k.h, {
                        scrollElement: o,
                        headerThreshold: 134,
                        children: (0, l.jsxs)(b.N, {
                            className: w().root,
                            containerClassName: w().content,
                            ref: u,
                            'data-test-id': h.Xk.landing.LANDING_PAGE,
                            children: [
                                (0, l.jsxs)('div', {
                                    className: w().header,
                                    children: [
                                        g && (0, l.jsx)(L.L, { withForwardControl: !1, withBackwardControl: g }),
                                        (0, l.jsx)(m.DZ, {
                                            variant: 'h1',
                                            weight: 'bold',
                                            size: 'xl',
                                            className: w().title,
                                            'data-test-id': h.Xk.landing.LANDING_PAGE_HEADER,
                                            children: i.title,
                                        }),
                                    ],
                                }),
                                (0, l.jsx)('div', {
                                    className: w().landing,
                                    children: (0, l.jsx)(ep, {
                                        skeleton: _.skeleton,
                                        landingSdkModel: i,
                                        errorComponent: (0, l.jsx)(v.SomethingWentWrong, { className: w().error, withBackwardControl: !1 }),
                                    }),
                                }),
                                (0, l.jsx)(N.A, { children: (0, l.jsx)(E.w, { className: w().footer }) }),
                            ],
                        }),
                    }),
                });
            });
            let eS = (e) => {
                    let { skeleton: t } = e,
                        { experiments: i } = (0, a.g)();
                    return (i.checkExperiment(r.z.WebNextLandingSdk, 'on'), (0, l.jsx)(A, { skeleton: t }));
                },
                ex = () => {
                    let e = (0, s.useSearchParams)(),
                        t = e.get('skeleton');
                    return (t || (0, s.notFound)(), (0, l.jsx)(eS, { skeleton: t }, e.toString()));
                };
        },
        94328: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 93398));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                9904, 6582, 7191, 3078, 918, 1833, 1191, 1041, 8194, 917, 4863, 1635, 2803, 2218, 1138, 893, 6252, 9192, 727, 8655, 7160, 6706, 4771, 1311, 5201, 3075,
                2662, 6904, 1898, 2058, 3578, 8628, 9780, 8283, 9332, 5151, 1223, 9027, 146, 9907, 4732, 9087, 3979, 6719, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441,
                6374, 2088, 8979, 818, 7053, 4322, 3300, 1372, 5823, 6820, 4244, 1960, 1401, 4394, 5772, 1556, 763, 2670, 7358,
            ],
            () => e((e.s = 94328)),
        ),
            (_N_E = e.O()));
    },
]);
