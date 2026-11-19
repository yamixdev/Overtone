(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [94],
    {
        4044: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        4795: (e, t, l) => {
            'use strict';
            l.d(t, { N: () => a });
            var r = l(72288),
                o = l(97956);
            let a = () => {
                var e, t;
                let {
                    user: l,
                    settings: { browserInfo: a },
                    experiments: i,
                } = (0, r.g)();
                return (
                    !(null == a ? void 0 : a.isTouch) &&
                    l.isAuthorized &&
                    !l.hasPlus &&
                    (null == (t = i.getExperiment(o.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        6668: (e, t, l) => {
            'use strict';
            l.d(t, { w: () => a });
            var r = l(53548),
                o = l(29993);
            let a = () => {
                let e = (0, r.useRef)(new Map());
                return (
                    (0, r.useLayoutEffect)(
                        () => (
                            e.current.size > 0 && e.current.clear(),
                            () => {
                                e.current.clear();
                            }
                        ),
                        [],
                    ),
                    (0, o.c)((t, l) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, l), l)))
                );
            };
        },
        9492: (e, t, l) => {
            'use strict';
            l.d(t, { L: () => f });
            var r = l(88800),
                o = l(65724),
                a = l(53548),
                i = l(2058),
                s = l(88969),
                n = l(96817),
                c = l(52300),
                d = l(29504),
                u = l(59304),
                m = l(4044),
                _ = l.n(m);
            let f = (e) => {
                let { reloadBlocks: t, closeToast: l } = e,
                    m = (0, a.useRef)(null),
                    { formatMessage: f } = (0, i.A)();
                (0, a.useEffect)(() => {
                    var e;
                    null == (e = m.current) || e.focus();
                }, []);
                let h = (0, a.useMemo)(
                    () =>
                        (0, r.jsxs)('div', {
                            className: _().message,
                            children: [
                                (0, r.jsx)(d.HL, {
                                    className: _().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, r.jsx)(s.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, r.jsx)(n.$, {
                                    ref: m,
                                    className: _().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': f({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, r.jsx)(c.I, { variant: 'reset', size: 'xxs', className: _().icon }),
                                }),
                            ],
                        }),
                    [f, t],
                );
                return (0, r.jsx)(u.$, { className: (0, o.$)(_().root, _().important), message: h, closeToast: l });
            };
        },
        16348: (e) => {
            e.exports = {
                root: 'CollectionShelfPageEmpty_root__KrMco',
                iconBackground: 'CollectionShelfPageEmpty_iconBackground__limUg',
                title: 'CollectionShelfPageEmpty_title__cwF4m',
                button: 'CollectionShelfPageEmpty_button___uzMX',
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
        29008: (e, t, l) => {
            'use strict';
            l.d(t, { c: () => i, r: () => s });
            var r = l(53548),
                o = l(2058),
                a = l(61691),
                i = (function (e) {
                    return ((e.PIN = 'pin'), e);
                })({});
            let s = (e, t) => {
                let { formatMessage: l } = (0, o.A)();
                return (0, r.useMemo)(() => {
                    switch (e) {
                        case a._.SINGLE:
                            return l({ id: 'entity-names.single' });
                        case a._.PODCAST:
                            return l({ id: 'entity-names.podcast' });
                        case a._.AUDIOBOOK:
                            if ('pin' === t) return l({ id: 'entity-names.book' });
                            return l({ id: 'entity-names.audio' });
                        case a._.FAIRY_TALE:
                            return l({ id: 'entity-names.fairy-tale' });
                        default:
                            return l({ id: 'entity-names.album' });
                    }
                }, [e, l, t]);
            };
        },
        31240: (e, t, l) => {
            'use strict';
            l.d(t, { CollectionShelfLikedPage: () => I });
            var r = l(88800),
                o = l(65724),
                a = l(84961),
                i = l(53548),
                s = l(2058),
                n = l(88969),
                c = l(17392),
                d = l(79070),
                u = l(29504),
                m = l(32596),
                _ = l(46811),
                f = l(69630),
                h = l(76843),
                g = l(46422),
                v = l(44230),
                p = l(37670),
                x = l(6668),
                S = l(72288),
                C = l(98644),
                k = l(54320),
                w = l(86790),
                R = l(60266),
                N = l(93317),
                j = l(93015),
                b = l(79418),
                L = l(71104),
                P = l(70441),
                y = l(40068),
                E = l(46524),
                A = l.n(E);
            let I = (0, a.PA)(() => {
                let {
                        settings: { isMobile: e },
                        collection: { shelfLiked: t },
                    } = (0, S.g)(),
                    { contentScrollRef: l, setContentScrollRef: a } = (0, v.g)(),
                    E = (0, g.W)(),
                    { formatMessage: I } = (0, s.A)(),
                    F = (0, x.w)(),
                    z = (0, i.useCallback)(
                        (e) => {
                            t.getData({ page: e, pageSize: L.c });
                        },
                        [t],
                    );
                (0, k.X)(t.pagesLoader, z);
                let B = (0, d.L)(() => ({ Footer: () => (0, r.jsx)(R.A, { children: (0, r.jsx)(w.w, { className: A().footer }) }) })),
                    M = t.isShimmerVisible ? 20 : t.items.length;
                return ((0, i.useEffect)(
                    () => () => {
                        t.reset();
                    },
                    [t],
                ),
                (0, p.J)(t.isResolved),
                t.isNeededToLoad && (0, i.use)(t.getData({ pageSize: L.c })),
                t.isRejected)
                    ? (0, r.jsx)(m.SomethingWentWrong, {})
                    : t.isEmpty
                      ? (0, r.jsx)(y.F, { title: I({ id: 'error-messages.empty-shelf-liked-page-title' }) })
                      : (0, r.jsx)(f.h, {
                            scrollElement: l,
                            outerTitle: I({ id: 'podcast.shelf-liked-title' }),
                            children: (0, r.jsxs)('div', {
                                className: A().root,
                                'data-test-id': c.Xk.collection.COLLECTION_SHELF_LIKED_PAGE,
                                children: [
                                    (0, r.jsx)(N.Y, {
                                        variant: N.V.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: E.canBack,
                                        children: (0, r.jsx)(u.DZ, {
                                            variant: 'h2',
                                            weight: 'bold',
                                            size: 'xl',
                                            lineClamp: 1,
                                            children: (0, r.jsx)(n.A, { id: 'podcast.shelf-liked-title' }),
                                        }),
                                    }),
                                    (0, r.jsx)(b.$, {
                                        className: (0, o.$)(A().scrollContainer, A().important),
                                        customComponents: B,
                                        itemContentCallback: (e) => {
                                            let l = t.items[e];
                                            if (!l) return (0, r.jsx)(j.D, { variant: C.X.PLAYLIST, isActive: !0 }, e);
                                            if (l.album) return (0, r.jsx)(_.M, { album: l.album }, l.album.getKey(e));
                                            let o = F(e, (0, P.q)(l.track, e, t.typeForFrom));
                                            return (0, r.jsx)(h.K, { track: l.track, playContextParams: o, withPodcastName: !0 }, l.track.getKey(e));
                                        },
                                        initialItemCount: M,
                                        totalCount: M,
                                        onGetDataByPage: z,
                                        pageSize: L.c,
                                        totalRequests: t.requestsCount,
                                        listClassName: A().content,
                                        itemClassName: A().item,
                                        handleRef: a,
                                        context: { listAriaLabel: I({ id: 'podcast.shelf-liked-title' }) },
                                        isMobileLayout: e,
                                        useWindowScroll: e,
                                    }),
                                ],
                            }),
                        });
            });
        },
        37670: (e, t, l) => {
            'use strict';
            l.d(t, { J: () => a });
            var r = l(53548);
            l(30282);
            var o = l(58390);
            let a = (e) => {
                let t = (0, o.usePathname)(),
                    [l, a] = (0, r.useState)(!1);
                ((0, r.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, r.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !l && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), a(!0));
                    }, [e, l, t]));
            };
        },
        40068: (e, t, l) => {
            'use strict';
            l.d(t, { F: () => _ });
            var r = l(88800),
                o = l(84961),
                a = l(88969),
                i = l(96817),
                s = l(52300),
                n = l(29504),
                c = l(4370),
                d = l(78940),
                u = l(16348),
                m = l.n(u);
            let _ = (0, o.PA)((e) => {
                let { title: t } = e,
                    l = (0, d.Z)(c.Z.nonMusic.href);
                return (0, r.jsxs)('div', {
                    className: m().root,
                    children: [
                        (0, r.jsx)('div', { className: m().iconBackground, children: (0, r.jsx)(s.I, { variant: 'like', size: 'l' }) }),
                        (0, r.jsx)(n.DZ, { className: m().title, variant: 'h3', size: 'xs', children: t }),
                        (0, r.jsx)(i.$, {
                            onClick: l,
                            className: m().button,
                            role: 'link',
                            color: 'secondary',
                            size: 's',
                            radius: 'xxxl',
                            children: (0, r.jsx)(n.HL, {
                                type: 'controls',
                                variant: 'span',
                                size: 'm',
                                children: (0, r.jsx)(a.A, { id: 'error-messages.empty-shelf-liked-page-link' }),
                            }),
                        }),
                    ],
                });
            });
        },
        46524: (e) => {
            e.exports = {
                root: 'CollectionShelfLikedPage_root__KRXgN',
                footer: 'CollectionShelfLikedPage_footer__NgcOJ',
                scrollContainer: 'CollectionShelfLikedPage_scrollContainer__IBlT7',
                important: 'CollectionShelfLikedPage_important__R4MBr',
                content: 'CollectionShelfLikedPage_content__KHWpo',
                item: 'CollectionShelfLikedPage_item__x5cqv',
            };
        },
        54320: (e, t, l) => {
            'use strict';
            l.d(t, { X: () => d });
            var r = l(88800),
                o = l(53548),
                a = l(29993),
                i = l(9492),
                s = l(29595),
                n = l(74965),
                c = l(74773);
            let d = (e, t) => {
                let { notify: l, dismiss: d } = (0, n.l)(),
                    u = (0, o.useRef)(void 0),
                    m = (0, a.c)(() => {
                        var l;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let r = [...(null != (l = e.lastRejectedPagesList) ? l : [])].reverse().filter((t) => {
                            var l;
                            return (null == (l = e.pageStates) ? void 0 : l[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            r.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, o.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = l((0, r.jsx)(i.L, { reloadBlocks: m }), { containerId: s.u.ERROR, autoClose: !1 }));
                }, [d, m, l, e.rejectedPagesCount]);
            };
        },
        56056: (e, t, l) => {
            (Promise.resolve().then(l.bind(l, 57328)), Promise.resolve().then(l.bind(l, 31240)));
        },
        56446: (e, t, l) => {
            'use strict';
            l.d(t, { k: () => u });
            var r = l(88800),
                o = l(53548),
                a = l(2058),
                i = l(17392),
                s = l(96817),
                n = l(52300),
                c = l(39318);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: l,
                            size: o,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: _,
                            iconClassName: f,
                            className: h,
                            forwardRef: g,
                            style: v,
                            children: p,
                        } = e,
                        { formatMessage: x } = (0, a.A)(),
                        S = x({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(s.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: o,
                        variant: t,
                        withRipple: l,
                        flexIcon: !0,
                        'aria-label': S,
                        onClick: _,
                        ref: g,
                        icon: (0, r.jsx)(n.I, { variant: 'trailer', size: u, className: f }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': i.S7.TRAILER_BUTTON,
                        children: p,
                    });
                },
                u = (0, o.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
        },
        60757: (e, t, l) => {
            'use strict';
            l.d(t, { c: () => o });
            var r = l(58217);
            let o = (e) => {
                let { album: t, callback: l, shouldHistoryBack: o } = e;
                return (0, r.l)({ entity: t, callback: l, modalBehavior: void 0 === o ? void 0 : { shouldHistoryBack: o }, preventDefaultWhenSafe: !0 });
            };
        },
        71104: (e, t, l) => {
            'use strict';
            l.d(t, { c: () => r });
            let r = 20;
        },
        79418: (e, t, l) => {
            'use strict';
            l.d(t, { $: () => g });
            var r = l(88800),
                o = l(65724),
                a = l(61013),
                i = l(53548);
            let s = (e) => {
                    let { style: t, forwardRef: l, context: o, ...a } = e,
                        i = (null == o ? void 0 : o.listAriaLabel) || void 0,
                        s = (null == o ? void 0 : o.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: s, 'aria-label': i, style: { ...t }, ref: l, ...a });
                },
                n = (0, i.forwardRef)((e, t) => (0, r.jsx)(s, { forwardRef: t, ...e }));
            var c = l(16434),
                d = l.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: l, withFooter: a, withHeader: i, withForceScroll: s, ...n } = e;
                    return (0, r.jsx)('div', {
                        className: (0, o.$)(d().scroller, { [d().scroller_withFooter]: a, [d().scroller_withHeader]: i, [d().scroller_withForceScroll]: s }),
                        style: { ...t },
                        ref: l,
                        ...n,
                        tabIndex: -1,
                    });
                },
                m = (0, i.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
            var _ = l(55482),
                f = l(75151);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: l,
                            onRangeHandler: o,
                            debounceDurationInMs: a = 100,
                            totalCount: s = 0,
                            shouldTriggerRangeChangedOn: n = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [m, h] = (0, i.useState)(null),
                        g = (0, i.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == o || o(e), n.length > 0 && h(e), t && l)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            o = Math.floor(e.startIndex / t);
                                        for (let e = o; e < r; e++) l(e);
                                    }
                                }, a),
                            [a, o, t, l, n],
                        );
                    (0, i.useEffect)(() => {
                        n.length > 0 && m && g(m);
                    }, n);
                    let v = (0, i.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, a);
                    }, [c, a]);
                    return (0, r.jsx)(f.sN, { ref: d, rangeChanged: g, totalCount: s, endReached: v, ...u });
                },
                g = (e) => {
                    let {
                            className: t,
                            customComponents: l,
                            onGetDataByPage: s,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: _,
                            listClassName: f,
                            overscan: g = 700,
                            pageSize: v = 20,
                            totalCount: p,
                            totalRequests: x,
                            debounceDurationInMs: S,
                            initialItemCount: C,
                            minInitialItemCount: k = 20,
                            handleRef: w,
                            alwaysShowScrollbar: R = !1,
                            testId: N,
                            isMobileLayout: j = !1,
                            shouldTriggerRangeChangedOn: b,
                            ...L
                        } = e,
                        [P, y] = (0, i.useState)(!1),
                        E = (0, i.useMemo)(
                            () =>
                                (0, a.A)((e) => {
                                    y(e);
                                }, 100),
                            [],
                        ),
                        A = (0, i.useMemo)(() => {
                            var e, t;
                            return j
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == l ? void 0 : l.List) ? e : n,
                                      Item: null == l ? void 0 : l.Item,
                                      ScrollSeekPlaceholder: null == l ? void 0 : l.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == l ? void 0 : l.List) ? t : n,
                                      Item: null == l ? void 0 : l.Item,
                                      Header: null == l ? void 0 : l.Header,
                                      Footer: null == l ? void 0 : l.Footer,
                                      ScrollSeekPlaceholder: null == l ? void 0 : l.ScrollSeekPlaceholder,
                                  };
                        }, [l, x, j]),
                        I = C ? Math.min(C, k) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, o.$)(d().root, { [d().root_scrolling]: P || R, [d().root_notScrolling]: !P && !R }, t),
                        'data-test-id': N,
                        children: [
                            j && (null == l ? void 0 : l.Header) && l.Header(),
                            (0, r.jsx)(h, {
                                overscan: g,
                                components: A,
                                listClassName: f,
                                itemClassName: u,
                                isScrolling: E,
                                itemContent: _,
                                scrollerRef: w,
                                totalCount: p,
                                pageSize: v,
                                onPageHandler: s,
                                onRangeHandler: c,
                                debounceDurationInMs: S,
                                initialItemCount: I,
                                shouldTriggerRangeChangedOn: b,
                                ...L,
                            }),
                            j && (null == l ? void 0 : l.Footer) && l.Footer(),
                        ],
                    });
                };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7191, 9904, 3078, 8194, 1833, 918, 1191, 1041, 8655, 5213, 6253, 6706, 4771, 2662, 6904, 1898, 2058, 3578, 8628, 4378, 9780, 8283, 9332, 5151, 957, 4732,
                9087, 3979, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 6374, 8979, 818, 7053, 7051, 763, 2670, 7358,
            ],
            () => e((e.s = 56056)),
        ),
            (_N_E = e.O()));
    },
]);
