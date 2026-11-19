(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7312],
    {
        44230: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => l, g: () => r });
            var n = a(53548);
            let l = (0, n.createContext)({
                    contentRef: null,
                    defaultLayoutRef: null,
                    contentRootRef: null,
                    contentScrollRef: null,
                    sideBannerRef: null,
                    playlistStickyFiltersRef: null,
                    playlistStaticFiltersRef: null,
                    compositePlayerBarRef: null,
                    paywallRef: null,
                    setDefaultLayoutRef: () => {},
                    setContentRef: () => {},
                    setContentRootRef: () => {},
                    setSideBannerRef: () => {},
                    setContentScrollRef: () => {},
                    setPlaylistStickyFiltersRef: () => {},
                    setPlaylistStaticFiltersRef: () => {},
                    setCompositePlayerBarRef: () => {},
                    setPaywallRef: () => {},
                }),
                r = () => (0, n.useContext)(l);
        },
        46777: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => s });
            var n = a(55482),
                l = a(53548),
                r = a(46422);
            let s = (e) => {
                let t = (0, r.W)(),
                    a = (0, l.useMemo)(
                        () =>
                            (0, n.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    s = (0, l.useMemo)(
                        () =>
                            (0, n.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: a, moveForward: s };
            };
        },
        50320: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        56248: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => _ });
            var n = a(88800),
                l = a(65724),
                r = a(84961),
                s = a(53548),
                i = a(2058),
                o = a(17392),
                c = a(29993),
                u = a(96817),
                f = a(52300),
                d = a(46777),
                R = a(50320),
                v = a.n(R);
            let _ = (0, r.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: a = !0,
                        shouldFocusOnMount: r = !0,
                        className: R,
                        withBackwardFallback: _,
                        buttonSize: p = 'xxs',
                        onBackwardClick: x,
                    } = e,
                    { formatMessage: A } = (0, i.A)(),
                    { canBack: N, canForward: k, moveBack: C, moveForward: g } = (0, d.J)(_),
                    y = (0, s.useRef)(null),
                    w = (0, c.c)((e) => {
                        if ((e.stopPropagation(), x)) return void x();
                        C();
                    }),
                    B = (0, c.c)((e) => {
                        (e.stopPropagation(), g());
                    });
                return (
                    (0, s.useEffect)(() => {
                        r && y.current && N && y.current.focus();
                    }, [N]),
                    (0, n.jsxs)('div', {
                        className: (0, l.$)(v().root, R),
                        'data-test-id': o.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, n.jsx)(u.$, {
                                    ref: y,
                                    'aria-label': A({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !N,
                                    size: p,
                                    icon: (0, n.jsx)(f.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: w,
                                    'data-test-id': o.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            a &&
                                (0, n.jsx)(u.$, {
                                    'aria-label': A({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !k,
                                    size: p,
                                    icon: (0, n.jsx)(f.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: B,
                                    'data-test-id': o.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        67533: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 32596));
        },
    },
    (e) => {
        (e.O(0, [9904, 7191, 6706, 4771, 2662, 6904, 1898, 2058, 3578, 8628, 4378, 4732, 9087, 3979, 1928, 2596, 763, 2670, 7358], () => e((e.s = 67533))),
            (_N_E = e.O()));
    },
]);
