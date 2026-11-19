(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6363, 7489],
    {
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
        20129: (e, t, r) => {
            'use strict';
            r.d(t, { p: () => U });
            var s = r(88800),
                a = r(65724),
                o = r(84961),
                l = r(53548),
                i = r(2058),
                n = r(88969),
                d = r(17392),
                c = r(50408),
                u = r(96817),
                h = r(11372),
                m = r(98225),
                _ = r(29504),
                g = r(32353),
                v = r(29595),
                p = r(74965),
                f = r(51318),
                C = r(17071),
                w = r(38860),
                x = r(72288),
                b = r(27506),
                z = r(97956),
                R = r(74773),
                S = r(66943),
                k = r(94058),
                A = r(37770),
                M = r(87366),
                N = r(76099),
                j = r(79418),
                y = r(91177),
                q = r(29832),
                T = r(52300),
                I = r(7555),
                H = r(81877),
                W = r(60978),
                D = r(5818),
                E = r.n(D);
            let O = (0, o.PA)((e) => {
                let { className: t, artist: r } = e,
                    o = (0, y.D)(),
                    {
                        wizard: { toggleArtistLike: i, isArtistLiked: n },
                    } = (0, x.g)(),
                    { id: c, name: h, coverUri: m } = r,
                    g = (0, l.useCallback)(() => {
                        i(c);
                    }, [i, c]),
                    v = n(c),
                    p = (0, l.useMemo)(
                        () =>
                            (0, s.jsx)(I.t, {
                                className: E().cover,
                                radius: 'round',
                                'data-test-id': d.e8.wizard.ARTIST_CARD,
                                children: (0, s.jsxs)(u.$, {
                                    radius: 'round',
                                    className: E().coverBlock,
                                    variant: 'default',
                                    onClick: g,
                                    withRipple: !1,
                                    withHover: !1,
                                    'aria-pressed': v,
                                    'aria-label': h,
                                    'data-test-id': d.e8.wizard.ARTIST_CARD_BUTTON,
                                    children: [
                                        (0, s.jsx)(H.B, { className: E().image, src: m || W.A.src, fit: 'cover', alt: h, withAvatarReplace: !!m, 'aria-hidden': !0 }),
                                        (0, s.jsx)('div', {
                                            className: (0, a.$)(E().like),
                                            children: (0, s.jsx)(T.I, { variant: 'likedVariant', size: 's', className: E().icon }),
                                        }),
                                    ],
                                }),
                            }),
                        [v, m, h, g],
                    );
                return (0, s.jsx)(q.MN, {
                    ref: o,
                    className: (0, a.$)(E().root, { [E().root_selected]: v }, t),
                    textPosition: 'center',
                    title: (0, s.jsx)(_.HL, {
                        'aria-hidden': !0,
                        className: E().name,
                        variant: 'div',
                        type: 'entity',
                        size: 'l',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': d.e8.wizard.ARTIST_CARD_NAME,
                        children: h,
                    }),
                    view: p,
                    'data-test-id': d.Kq.artist.ARTIST_ITEM,
                });
            });
            var L = r(63442),
                F = r.n(L);
            let P = { [g.u.Desktop]: { start: 40, end: 40 }, [g.u.Mobile]: { start: 40, end: 40 } },
                U = (0, o.PA)((e) => {
                    let { onFinishSuccess: t } = e,
                        { formatMessage: r } = (0, i.A)(),
                        {
                            wizard: o,
                            settings: { isMobile: g, isWindowsApplication: y, isLinuxApplication: q },
                            experiments: T,
                            user: I,
                        } = (0, x.g)(),
                        { notify: H } = (0, p.l)(),
                        W = (0, w.z)(),
                        [D, E] = (0, c.d)(),
                        L = (0, l.useRef)(!1),
                        U = T.checkExperiment(z.z.WebNextWizard3, 'on'),
                        V = (0, m.zb)(0),
                        B = (0, l.useMemo)(
                            () => (e) => {
                                var t;
                                if (!V.onTabChange || e === V.value) return;
                                V.onTabChange(e);
                                let r = null == (t = o.genres[e]) ? void 0 : t.id;
                                (o.setFilter(r), null == D || D.scrollTo({ top: 0 }));
                            },
                            [o, V, D],
                        ),
                        $ = (0, l.useMemo)(() => {
                            switch (o.remainingLikesToFinish) {
                                case 0:
                                    return r({ id: 'wizard.button-done' });
                                case 1:
                                    return r({ id: 'wizard.button-one-more' });
                                default:
                                    return 0 === o.selectedArtistsQuantity ? r({ id: 'wizard.button-tune' }) : r({ id: 'wizard.button-little-more' });
                            }
                        }, [o.remainingLikesToFinish, o.selectedArtistsQuantity, r]),
                        Z = (0, l.useMemo)(
                            () =>
                                (0, s.jsx)(N.wI, {
                                    className: F().tabCarousel,
                                    ...V,
                                    onTabChange: B,
                                    isShimmerVisible: o.loadingState === R.G.PENDING,
                                    shimmer: (0, s.jsx)(N.zr, { isActive: !0, className: F().tabCarousel, count: g ? 2 : 3 }),
                                    children: o.genres.map((e, t) =>
                                        (0, s.jsx)(
                                            M.o,
                                            {
                                                className: (0, a.$)(F().filter, { [F().filter_selected]: t === V.value }),
                                                titleClassName: F().tabTitle,
                                                title: e.title,
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [o.genres, V, B, o.loadingState, g],
                        ),
                        G = (0, l.useCallback)(() => {
                            o.loadArtists(60);
                        }, [o]);
                    (0, l.useEffect)(() => {
                        o.filter && G();
                    }, [o.filter, G]);
                    let K = (0, l.useCallback)(async () => {
                        (await o.loadGenres(), G());
                    }, [o, G]);
                    ((0, l.useEffect)(() => {
                        o.modal.isOpened && K();
                    }, [o, o.modal.isOpened, K]),
                        (0, l.useEffect)(() => {
                            o.loadingState === R.G.REJECT &&
                                (o.modal.close(), H((0, s.jsx)(S.h, { error: r({ id: 'error-messages.error-load-wizard' }) }), { containerId: v.u.ERROR }));
                        }, [o, o.loadGenres, o.loadingState, r, H]));
                    let Q = (0, l.useMemo)(
                            () =>
                                (0, s.jsx)(_.DZ, {
                                    className: F().title,
                                    weight: 'bold',
                                    variant: 'h1',
                                    size: 'l',
                                    'data-test-id': d.e8.wizard.WIZARD_MODAL_TITLE,
                                    children: (0, s.jsx)(n.A, { id: 'wizard.modal-title' }),
                                }),
                            [],
                        ),
                        J = (0, l.useCallback)(async () => {
                            if (!L.current) {
                                L.current = !0;
                                try {
                                    ((await o.finish()) === b.F.OK && (await I.getSettings(), await (null == t ? void 0 : t())), o.modal.close());
                                } finally {
                                    L.current = !1;
                                }
                            }
                        }, [t, I, o]);
                    return (
                        (0, l.useEffect)(
                            () => (
                                null == W ||
                                    W.addShortcutsListener(C.M.MAIN, f.l.CLOSE, () => {
                                        o.modal.isOpened && J();
                                    }),
                                () => {
                                    null == W || W.removeShortcutsListener(C.M.MAIN, f.l.CLOSE);
                                }
                            ),
                            [J, o.modal.isOpened, W],
                        ),
                        (0, s.jsxs)(h.a, {
                            className: (0, a.$)(F().root, { [F().root_withCustomControls]: y || q }),
                            headerClassName: F().modalHeader,
                            contentClassName: F().modalContent,
                            open: o.modal.isOpened,
                            onOpenChange: o.modal.onOpenChange,
                            onClose: J,
                            size: 'fullscreen',
                            placement: 'center',
                            labelClose: r({ id: 'interface-actions.close' }),
                            closeButtonDataTestId: d.e8.wizard.WIZARD_MODAL_CLOSE_BUTTON,
                            'data-test-id': d.e8.wizard.WIZARD_MODAL,
                            header: g && Q,
                            escapeKey: !1,
                            children: [
                                (0, s.jsxs)('div', {
                                    className: F().wrapper,
                                    children: [
                                        !g && Q,
                                        (0, s.jsx)(_.HL, {
                                            className: F().text,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_TEXT,
                                            children: (0, s.jsx)(n.A, { id: 'wizard.modal-text' }),
                                        }),
                                        U &&
                                            (0, s.jsx)('div', {
                                                className: F().progress,
                                                children: (0, s.jsx)(_.HL, {
                                                    variant: 'div',
                                                    size: 'm',
                                                    weight: 'normal',
                                                    lineClamp: 2,
                                                    'data-test-id': d.e8.wizard.WIZARD_MODAL_PROGRESS_TEXT,
                                                    children: o.progressText,
                                                }),
                                            }),
                                        (0, s.jsx)(u.$, {
                                            className: (0, a.$)(F().button, { [F().button_withProgress]: U }),
                                            size: g ? 'm' : 'l',
                                            iconPosition: 'right',
                                            radius: 'xxxl',
                                            color: 'primary',
                                            onClick: J,
                                            disabled: !o.canFinish,
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_BUTTON,
                                            children: (0, s.jsx)(_.HL, { variant: 'div', size: 'm', weight: 'medium', children: $ }),
                                        }),
                                    ],
                                }),
                                (0, s.jsxs)('div', {
                                    className: F().mainContainer,
                                    children: [
                                        (0, s.jsx)(k.F, { className: F().carousel, carouselElement: Z, scrollPadding: P }),
                                        (0, s.jsx)(j.$, {
                                            withFooter: !1,
                                            className: (0, a.$)(F().scrollContainer, F().important),
                                            itemContentCallback: (e) => {
                                                let t = o.artistsByGenre[e];
                                                if (!t) {
                                                    let e = r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.artist' }) });
                                                    return (0, s.jsx)(A.V, { 'aria-label': e, round: !0, centered: !0 });
                                                }
                                                return (0, s.jsx)(O, { artist: t }, t.id);
                                            },
                                            data: o.artistsByGenre,
                                            endReached: G,
                                            listClassName: F().content,
                                            itemClassName: F().item,
                                            pageSize: 60,
                                            handleRef: E,
                                            'data-test-id': d.e8.wizard.WIZARD_MODAL_ARTISTS_GRID,
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
        },
        61180: (e, t, r) => {
            'use strict';
            r.d(t, { Q: () => o, q: () => a });
            let s = new Set(),
                a = (e) => (
                    s.add(e),
                    () => {
                        s.delete(e);
                    }
                ),
                o = () => {
                    s.forEach((e) => {
                        e();
                    });
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
        66363: (e, t, r) => {
            'use strict';
            r.d(t, { NS: () => o, Nh: () => a, xW: () => l });
            var s = r(9519);
            let a = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
            class o {
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
                            let r = e.cause;
                            if (a(r)) {
                                var s, o, l, i, n, d, c, u, h, m, _, g, v, p;
                                let a = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (s = r.request) ? void 0 : s.method) || (null == (o = r.options) ? void 0 : o.method),
                                        url: (null == (l = r.request) ? void 0 : l.url) || (null == (i = r.options) ? void 0 : i.url),
                                        headers: this.getHeaders((null == (n = r.request) ? void 0 : n.headers) || (null == (d = r.options) ? void 0 : d.headers)),
                                        body: (null == (c = r.request) ? void 0 : c.json) || (null == (u = r.options) ? void 0 : u.json),
                                        retries: t,
                                    },
                                };
                                void 0 !== r.response &&
                                    (a.response = {
                                        statusCode: r.response.statusCode,
                                        headers: this.getHeaders(r.response.headers),
                                        time: null == (p = r.response.timings) || null == (v = p.phases) ? void 0 : v.total,
                                    });
                                let f = this.getUrl((null == (h = r.request) ? void 0 : h.url) || (null == (m = r.options) ? void 0 : m.url));
                                this.logger.warn(
                                    '[Resource] Retry request '
                                        .concat((null == (_ = r.request) ? void 0 : _.method) || (null == (g = r.options) ? void 0 : g.method), ' ')
                                        .concat(f.origin, ' ')
                                        .concat(f.pathname)
                                        .concat(f.search),
                                    a,
                                );
                            } else
                                this.logger.warn('[Resource] Retry request (unknown)', {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                });
                        }),
                        (0, s._)(this, 'afterResponseHook', (e) => {
                            if ((e.statusCode || e.status) >= 200 && 299 >= (e.statusCode || e.status)) {
                                var t, r;
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
                                            time: null == (r = e.timings) || null == (t = r.phases) ? void 0 : t.total,
                                        },
                                    },
                                );
                            }
                            return e;
                        }),
                        (0, s._)(this, 'beforeErrorHook', (e) => {
                            let t = e.cause;
                            if (a(t)) {
                                var r, s, o, l, i, n, d, c, u, h, m, _, g, v;
                                let a = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (r = t.request) ? void 0 : r.method) || (null == (s = t.options) ? void 0 : s.method),
                                        url: (null == (o = t.request) ? void 0 : o.url) || (null == (l = t.options) ? void 0 : l.url),
                                        headers: this.getHeaders((null == (i = t.request) ? void 0 : i.headers) || (null == (n = t.options) ? void 0 : n.headers)),
                                        body: (null == (d = t.request) ? void 0 : d.json) || (null == (c = t.options) ? void 0 : c.json),
                                    },
                                };
                                void 0 !== t.response &&
                                    (a.response = {
                                        statusCode: t.response.statusCode || t.response.status,
                                        headers: this.getHeaders(t.response.headers),
                                        time: null == (v = t.response.timings) || null == (g = v.phases) ? void 0 : g.total,
                                    });
                                let p = this.getUrl((null == (u = t.request) ? void 0 : u.url) || (null == (h = t.options) ? void 0 : h.url));
                                this.logger.error(
                                    '[Resource] Request failed '
                                        .concat((null == (m = t.request) ? void 0 : m.method) || (null == (_ = t.options) ? void 0 : _.method), ' ')
                                        .concat(p.origin, ' ')
                                        .concat(p.pathname)
                                        .concat(p.search, ', reason: ')
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
            (r(35412), r(69629));
            let l = [
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
        67858: (e, t, r) => {
            'use strict';
            r.d(t, { y: () => o });
            var s = r(53548);
            r(30282);
            var a = r(61180);
            let o = (e) => {
                (0, s.useEffect)(() => (0, a.q)(e), [e]);
            };
        },
        79418: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => v });
            var s = r(88800),
                a = r(65724),
                o = r(61013),
                l = r(53548);
            let i = (e) => {
                    let { style: t, forwardRef: r, context: a, ...o } = e,
                        l = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        i = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: i, 'aria-label': l, style: { ...t }, ref: r, ...o });
                },
                n = (0, l.forwardRef)((e, t) => (0, s.jsx)(i, { forwardRef: t, ...e }));
            var d = r(16434),
                c = r.n(d);
            let u = (e) => {
                    let { style: t, forwardRef: r, withFooter: o, withHeader: l, withForceScroll: i, ...n } = e;
                    return (0, s.jsx)('div', {
                        className: (0, a.$)(c().scroller, { [c().scroller_withFooter]: o, [c().scroller_withHeader]: l, [c().scroller_withForceScroll]: i }),
                        style: { ...t },
                        ref: r,
                        ...n,
                        tabIndex: -1,
                    });
                },
                h = (0, l.forwardRef)((e, t) => (0, s.jsx)(u, { forwardRef: t, ...e }));
            var m = r(55482),
                _ = r(75151);
            let g = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: a,
                            debounceDurationInMs: o = 100,
                            totalCount: i = 0,
                            shouldTriggerRangeChangedOn: n = [],
                            endReached: d,
                            virtuosoRef: c,
                            ...u
                        } = e,
                        [h, g] = (0, l.useState)(null),
                        v = (0, l.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == a || a(e), n.length > 0 && g(e), t && r)) {
                                        let s = Math.floor(e.endIndex / t) + 1,
                                            a = Math.floor(e.startIndex / t);
                                        for (let e = a; e < s; e++) r(e);
                                    }
                                }, o),
                            [o, a, t, r, n],
                        );
                    (0, l.useEffect)(() => {
                        n.length > 0 && h && v(h);
                    }, n);
                    let p = (0, l.useMemo)(() => {
                        if (d)
                            return (0, m.A)((e) => {
                                d(e);
                            }, o);
                    }, [d, o]);
                    return (0, s.jsx)(_.sN, { ref: c, rangeChanged: v, totalCount: i, endReached: p, ...u });
                },
                v = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: i,
                            onGetDataByRange: d,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: _,
                            overscan: v = 700,
                            pageSize: p = 20,
                            totalCount: f,
                            totalRequests: C,
                            debounceDurationInMs: w,
                            initialItemCount: x,
                            minInitialItemCount: b = 20,
                            handleRef: z,
                            alwaysShowScrollbar: R = !1,
                            testId: S,
                            isMobileLayout: k = !1,
                            shouldTriggerRangeChangedOn: A,
                            ...M
                        } = e,
                        [N, j] = (0, l.useState)(!1),
                        y = (0, l.useMemo)(
                            () =>
                                (0, o.A)((e) => {
                                    j(e);
                                }, 100),
                            [],
                        ),
                        q = (0, l.useMemo)(() => {
                            var e, t;
                            return k
                                ? {
                                      Scroller: h,
                                      List: null != (e = null == r ? void 0 : r.List) ? e : n,
                                      Item: null == r ? void 0 : r.Item,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: h,
                                      List: null != (t = null == r ? void 0 : r.List) ? t : n,
                                      Item: null == r ? void 0 : r.Item,
                                      Header: null == r ? void 0 : r.Header,
                                      Footer: null == r ? void 0 : r.Footer,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  };
                        }, [r, C, k]),
                        T = x ? Math.min(x, b) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, a.$)(c().root, { [c().root_scrolling]: N || R, [c().root_notScrolling]: !N && !R }, t),
                        'data-test-id': S,
                        children: [
                            k && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, s.jsx)(g, {
                                overscan: v,
                                components: q,
                                listClassName: _,
                                itemClassName: u,
                                isScrolling: y,
                                itemContent: m,
                                scrollerRef: z,
                                totalCount: f,
                                pageSize: p,
                                onPageHandler: i,
                                onRangeHandler: d,
                                debounceDurationInMs: w,
                                initialItemCount: T,
                                shouldTriggerRangeChangedOn: A,
                                ...M,
                            }),
                            k && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        99890: (e, t, r) => {
            'use strict';
            r.d(t, { C8: () => o, UC: () => l, dM: () => i, uV: () => n });
            var s = r(89916),
                a = r(66363);
            let o = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                l = (e) => (e.uid ? 'authorized' : 'no-uid'),
                i = (e) => {
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
                n = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
    },
]);
