(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4362],
    {
        554: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => a });
            let a = (e) => {
                let { uid: t, kind: i } = e;
                return ''.concat(t, ':').concat(i);
            };
        },
        989: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => n });
            let a = new Set(Object.values(i(22983).y)),
                n = (e) => {
                    let t = null == e ? void 0 : e.toLowerCase();
                    return ((e) => 'string' == typeof e && a.has(e))(t) ? t : void 0;
                };
        },
        4362: (e, t, i) => {
            'use strict';
            i.d(t, { MainPage: () => rs });
            var a,
                n,
                r,
                s,
                o,
                l,
                c,
                d,
                u = i(88800),
                _ = i(65724),
                m = i(84961),
                p = i(53548),
                b = i.t(p, 2),
                v = i(2058),
                h = i(30282),
                g = i(58390),
                x = i(97234),
                A = i(59724),
                C = i(46384),
                f = i(17392),
                y = i(46312),
                j = i(29993),
                T = i(50408),
                k = i(79070),
                P = i(96817),
                N = i(90688),
                I = i(66719),
                E = i(17610),
                S = i(29504),
                B = i(25772),
                w = i(32596),
                O = i(88969),
                M = i(93940),
                R = i(8840),
                L = i(6087);
            let V = (0, p.lazy)(async () =>
                    Promise.all([i.e(385), i.e(9171)])
                        .then(i.bind(i, 89171))
                        .then((e) => ({ default: e.VibeFallbackAnimation })),
                ),
                W = (0, p.lazy)(async () =>
                    Promise.all([i.e(385), i.e(9380), i.e(4683), i.e(617), i.e(4449), i.e(7404)])
                        .then(i.bind(i, 47404))
                        .then((e) => ({ default: e.VibeAnimation })),
                ),
                D = L.default.default(
                    () =>
                        Promise.all([i.e(385), i.e(9562)])
                            .then(i.bind(i, 69562))
                            .then((e) => ({ default: e.VibeWidgetFallbackAnimation })),
                    { ssr: !1 },
                ),
                F = L.default.default(
                    () =>
                        Promise.all([i.e(385), i.e(9380), i.e(4683), i.e(4449), i.e(2179)])
                            .then(i.bind(i, 2179))
                            .then((e) => ({ default: e.VibeWidgetAnimation })),
                    { ssr: !1 },
                );
            var U = i(86462),
                z = i(4086),
                H = i(41928),
                K = i(47964),
                Y = i(72288),
                X = i(97956),
                G = i(74773),
                q = i(91051),
                $ = i(7628),
                Z = i(52300),
                J = i(60208),
                Q = i(46422),
                ee = i(53961),
                et = i.n(ee);
            let ei = !0,
                ea = (0, m.PA)((e) => {
                    let { isPlaying: t, onClick: i, ariaDisabled: a, className: n } = e,
                        { vibe: r } = (0, Y.g)(),
                        { formatMessage: s } = (0, v.A)(),
                        o = (0, Q.W)(),
                        l = (0, J.D)(),
                        c = t ? 'pauseVibe' : 'playVibe',
                        d = t ? f.e8.vibe.MY_VIBE_PAUSE_BUTTON : f.e8.vibe.MY_VIBE_PLAY_BUTTON,
                        m = (0, p.useMemo)(() => (t ? s({ id: 'vibe-actions.aria-label-pause' }) : s({ id: 'vibe-actions.aria-label-play' })), [s, t]),
                        b = (0, p.useCallback)(
                            (e) => {
                                (r.isApplying || null == i || i(), e.stopPropagation(), e.preventDefault());
                            },
                            [i, r.isApplying],
                        );
                    return (
                        (0, p.useEffect)(() => {
                            if ('production' === l && 1 === o.length && ei) {
                                var e, t;
                                let i = Math.round(performance.now());
                                (null == (t = window.Ya) || null == (e = t.Rum) || e.sendTimeMark('my-vibe-button-loading-time', i), (ei = !1));
                            }
                        }, []),
                        (0, u.jsx)(P.$, {
                            className: (0, _.$)(et().root, { [et().root_isVibeLoading]: r.isApplying }, n),
                            withRipple: !1,
                            withHover: !1,
                            onClick: b,
                            variant: 'text',
                            'aria-disabled': r.isApplying || a,
                            'aria-label': m,
                            icon: (0, u.jsx)(Z.I, { size: 's', className: et().icon, variant: c }),
                            'data-test-id': d,
                            children: (0, u.jsx)(O.A, { id: 'entity-names.my-vibe' }),
                        })
                    );
                });
            ea.displayName = 'PlayButton';
            var en = i(78429),
                er = i.n(en),
                es = {
                    4490: (e, t, i) => {
                        (i.r(t), i.d(t, { DOWN: () => o, LEFT: () => n, RIGHT: () => r, UP: () => s, useSwipeable: () => m }));
                        var a = i(810);
                        let n = 'Left',
                            r = 'Right',
                            s = 'Up',
                            o = 'Down',
                            l = {
                                delta: 10,
                                preventScrollOnSwipe: !1,
                                rotationAngle: 0,
                                trackMouse: !1,
                                trackTouch: !0,
                                swipeDuration: 1 / 0,
                                touchEventOptions: { passive: !0 },
                            },
                            c = { first: !0, initial: [0, 0], start: 0, swiping: !1, xy: [0, 0] },
                            d = 'mousemove',
                            u = 'mouseup';
                        function _(e, t) {
                            if (0 === t) return e;
                            let i = (Math.PI / 180) * t;
                            return [e[0] * Math.cos(i) + e[1] * Math.sin(i), e[1] * Math.cos(i) - e[0] * Math.sin(i)];
                        }
                        function m(e) {
                            var t, i, m;
                            let p,
                                { trackMouse: b } = e,
                                v = a.useRef(Object.assign({}, c)),
                                h = a.useRef(Object.assign({}, l)),
                                g = a.useRef(Object.assign({}, h.current));
                            for (p in ((g.current = Object.assign({}, h.current)), (h.current = Object.assign(Object.assign({}, l), e)), l))
                                void 0 === h.current[p] && (h.current[p] = l[p]);
                            let [x, A] = a.useMemo(
                                () =>
                                    (function (e, t) {
                                        let i = (t) => {
                                                let i = 'touches' in t;
                                                (i && t.touches.length > 1) ||
                                                    e((e, n) => {
                                                        n.trackMouse && !i && (document.addEventListener(d, a), document.addEventListener(u, p));
                                                        let { clientX: r, clientY: s } = i ? t.touches[0] : t,
                                                            o = _([r, s], n.rotationAngle);
                                                        return (
                                                            n.onTouchStartOrOnMouseDown && n.onTouchStartOrOnMouseDown({ event: t }),
                                                            Object.assign(Object.assign(Object.assign({}, e), c), { initial: o.slice(), xy: o, start: t.timeStamp || 0 })
                                                        );
                                                    });
                                            },
                                            a = (t) => {
                                                e((e, i) => {
                                                    var a, c, d, u;
                                                    let m = 'touches' in t;
                                                    if (m && t.touches.length > 1) return e;
                                                    if (t.timeStamp - e.start > i.swipeDuration)
                                                        return e.swiping ? Object.assign(Object.assign({}, e), { swiping: !1 }) : e;
                                                    let { clientX: p, clientY: b } = m ? t.touches[0] : t,
                                                        [v, h] = _([p, b], i.rotationAngle),
                                                        g = v - e.xy[0],
                                                        x = h - e.xy[1],
                                                        A = Math.abs(g),
                                                        C = Math.abs(x),
                                                        f = (t.timeStamp || 0) - e.start,
                                                        y = Math.sqrt(A * A + C * C) / (f || 1),
                                                        j = [g / (f || 1), x / (f || 1)],
                                                        T = ((a = A), (c = C), (d = g), (u = x), a > c ? (d > 0 ? r : n) : u > 0 ? o : s),
                                                        k = 'number' == typeof i.delta ? i.delta : i.delta[T.toLowerCase()] || l.delta;
                                                    if (A < k && C < k && !e.swiping) return e;
                                                    let P = {
                                                        absX: A,
                                                        absY: C,
                                                        deltaX: g,
                                                        deltaY: x,
                                                        dir: T,
                                                        event: t,
                                                        first: e.first,
                                                        initial: e.initial,
                                                        velocity: y,
                                                        vxvy: j,
                                                    };
                                                    (P.first && i.onSwipeStart && i.onSwipeStart(P), i.onSwiping && i.onSwiping(P));
                                                    let N = !1;
                                                    return (
                                                        (i.onSwiping || i.onSwiped || i['onSwiped'.concat(T)]) && (N = !0),
                                                        N && i.preventScrollOnSwipe && i.trackTouch && t.cancelable && t.preventDefault(),
                                                        Object.assign(Object.assign({}, e), { first: !1, eventData: P, swiping: !0 })
                                                    );
                                                });
                                            },
                                            m = (t) => {
                                                e((e, i) => {
                                                    let a;
                                                    if (e.swiping && e.eventData) {
                                                        if (t.timeStamp - e.start < i.swipeDuration) {
                                                            ((a = Object.assign(Object.assign({}, e.eventData), { event: t })), i.onSwiped && i.onSwiped(a));
                                                            let n = i['onSwiped'.concat(a.dir)];
                                                            n && n(a);
                                                        }
                                                    } else i.onTap && i.onTap({ event: t });
                                                    return (
                                                        i.onTouchEndOrOnMouseUp && i.onTouchEndOrOnMouseUp({ event: t }),
                                                        Object.assign(Object.assign(Object.assign({}, e), c), { eventData: a })
                                                    );
                                                });
                                            },
                                            p = (e) => {
                                                (document.removeEventListener(d, a), document.removeEventListener(u, p), m(e));
                                            },
                                            b = (e, t) => {
                                                let n = () => {};
                                                if (e && e.addEventListener) {
                                                    let r = Object.assign(Object.assign({}, l.touchEventOptions), t.touchEventOptions),
                                                        s = [
                                                            ['touchstart', i, r],
                                                            ['touchmove', a, Object.assign(Object.assign({}, r), t.preventScrollOnSwipe ? { passive: !1 } : {})],
                                                            ['touchend', m, r],
                                                        ];
                                                    (s.forEach((t) => {
                                                        let [i, a, n] = t;
                                                        return e.addEventListener(i, a, n);
                                                    }),
                                                        (n = () =>
                                                            s.forEach((t) => {
                                                                let [i, a] = t;
                                                                return e.removeEventListener(i, a);
                                                            })));
                                                }
                                                return n;
                                            },
                                            v = {
                                                ref: (t) => {
                                                    null !== t &&
                                                        e((e, i) => {
                                                            if (e.el === t) return e;
                                                            let a = {};
                                                            return (
                                                                e.el && e.el !== t && e.cleanUpTouch && (e.cleanUpTouch(), (a.cleanUpTouch = void 0)),
                                                                i.trackTouch && t && (a.cleanUpTouch = b(t, i)),
                                                                Object.assign(Object.assign(Object.assign({}, e), { el: t }), a)
                                                            );
                                                        });
                                                },
                                            };
                                        return (t.trackMouse && (v.onMouseDown = i), [v, b]);
                                    })((e) => (v.current = e(v.current, h.current)), { trackMouse: b }),
                                [b],
                            );
                            return (
                                (t = v.current),
                                (i = h.current),
                                (m = g.current),
                                (v.current =
                                    i.trackTouch && t.el
                                        ? t.cleanUpTouch
                                            ? i.preventScrollOnSwipe !== m.preventScrollOnSwipe || i.touchEventOptions.passive !== m.touchEventOptions.passive
                                                ? (t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: A(t.el, i) }))
                                                : t
                                            : Object.assign(Object.assign({}, t), { cleanUpTouch: A(t.el, i) })
                                        : (t.cleanUpTouch && t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: void 0 }))),
                                x
                            );
                        }
                    },
                    792: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useCallbackRef = void 0));
                        let a = i(810);
                        t.useCallbackRef = function (e) {
                            let t = (0, a.useRef)({
                                stableFn: function () {
                                    for (var e = arguments.length, i = Array(e), a = 0; a < e; a++) i[a] = arguments[a];
                                    return t.current.callback(...i);
                                },
                                callback: e,
                            });
                            return (
                                (0, a.useInsertionEffect)(() => {
                                    t.current.callback = e;
                                }),
                                t.current.stableFn
                            );
                        };
                    },
                    2458: (e, t, i) => {
                        var a;
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useComponentSwipeable = t.SwipeablePlacement = void 0));
                        let n = i(4490),
                            r = i(792);
                        !(function (e) {
                            ((e.TOP = 'top'), (e.BOTTOM = 'bottom'), (e.RIGHT = 'right'), (e.LEFT = 'left'));
                        })(a || (t.SwipeablePlacement = a = {}));
                        let s = (e) => {
                                let { ref: t, deltaY: i, deltaX: n, placement: r } = e;
                                requestAnimationFrame(() => {
                                    t.current &&
                                        ((t.current.style.willChange = 'transform'),
                                        (t.current.style.transform =
                                            r === a.TOP || r === a.BOTTOM ? 'translateY('.concat(i || 0, 'px)') : 'translateX('.concat(n || 0, 'px)')));
                                });
                            },
                            o = (e) => {
                                requestAnimationFrame(() => {
                                    e.current && ((e.current.style.transition = 'none'), (e.current.style.willChange = ''), (e.current.style.transform = ''));
                                });
                            };
                        t.useComponentSwipeable = (e) => {
                            let { ref: t, swipeableProps: i = {}, onClose: l, disableSwipe: c, placement: d, threshold: u } = e,
                                _ = (0, r.useCallbackRef)(() => {
                                    l && (o(t), l());
                                }),
                                m = (0, r.useCallbackRef)((e) => {
                                    c ||
                                        ((e) => {
                                            let { ref: t, deltaY: i, deltaX: n, placement: r } = e;
                                            switch (r) {
                                                case a.TOP:
                                                    i <= 0 && s({ ref: t, deltaY: i, deltaX: n, placement: r });
                                                    break;
                                                case a.RIGHT:
                                                    n >= 0 && s({ ref: t, deltaY: i, deltaX: n, placement: r });
                                                    break;
                                                case a.LEFT:
                                                    n <= 0 && s({ ref: t, deltaY: i, deltaX: n, placement: r });
                                                    break;
                                                default:
                                                    i >= 0 && s({ ref: t, deltaY: i, deltaX: n, placement: r });
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: d });
                                }),
                                p = (0, r.useCallbackRef)((e) => {
                                    !c &&
                                        (((e) => {
                                            let { ref: t, deltaY: i, deltaX: n, placement: r, threshold: s = 25 } = e;
                                            if (!t.current) return !1;
                                            let o = (s / 100) * (r === a.TOP || r === a.BOTTOM ? t.current.offsetHeight : t.current.offsetWidth);
                                            switch (r) {
                                                case a.TOP:
                                                    return i < 0 && Math.abs(i) >= o;
                                                case a.RIGHT:
                                                    return n > 0 && n >= o;
                                                case a.LEFT:
                                                    return n < 0 && Math.abs(n) >= o;
                                                default:
                                                    return i > 0 && i >= o;
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: d, threshold: u })
                                            ? l && (o(t), l())
                                            : o(t));
                                });
                            return { handlers: (0, n.useSwipeable)({ onSwiped: p, onSwiping: m, trackMouse: !0, trackTouch: !0, ...i }), onCloseCallback: _ };
                        };
                    },
                    810: (e) => {
                        e.exports = b;
                    },
                },
                eo = {};
            function el(e) {
                var t = eo[e];
                if (void 0 !== t) return t.exports;
                var i = (eo[e] = { exports: {} });
                return (es[e](i, i.exports, el), i.exports);
            }
            ((el.d = (e, t) => {
                for (var i in t) el.o(t, i) && !el.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (el.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (el.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var ec = {};
            ((() => {
                (Object.defineProperty(ec, '__esModule', { value: !0 }), (ec.usePopoverSwipeable = void 0));
                let e = el(810),
                    t = el(2458);
                ec.usePopoverSwipeable = (i) => {
                    let { ref: a, swipeableProps: n = {}, onClose: r, disableSwipe: s, placement: o, threshold: l } = i,
                        c = (0, e.useMemo)(() => {
                            switch (o) {
                                case 'top':
                                case 'top-end':
                                case 'top-start':
                                    return t.SwipeablePlacement.TOP;
                                case 'right':
                                case 'right-end':
                                case 'right-start':
                                    return t.SwipeablePlacement.RIGHT;
                                case 'left':
                                case 'left-end':
                                case 'left-start':
                                    return t.SwipeablePlacement.LEFT;
                                default:
                                    return t.SwipeablePlacement.BOTTOM;
                            }
                        }, [o]);
                    return (0, t.useComponentSwipeable)({ ref: a, swipeableProps: n, onClose: r, disableSwipe: s, placement: c, threshold: l });
                };
            })(),
                ec.__esModule);
            var ed = ec.usePopoverSwipeable,
                eu = i(78275),
                e_ = i(52073),
                em = i(34712),
                ep = i(44230),
                eb = i(90420);
            let ev = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    [t, i] = (0, p.useState)(e),
                    { contentRef: a } = (0, ep.g)();
                return (
                    (0, p.useEffect)(() => {
                        let e = new ResizeObserver((e) => {
                            let [a] = e || [];
                            a && a.contentRect.height !== t && i(a.contentRect.height);
                        });
                        return (
                            a && e.observe(a),
                            () => {
                                e.disconnect();
                            }
                        );
                    }, [t, a]),
                    { contentHeight: t }
                );
            };
            var eh = i(16462),
                eg = i(24337),
                ex = i.n(eg);
            let eA = (0, m.PA)(() => {
                var e, t, i, a;
                let { formatMessage: n } = (0, v.A)(),
                    {
                        vibe: r,
                        settings: { isMobile: s },
                        vibeSettings: o,
                    } = (0, Y.g)(),
                    { screen: l, block: c } = (0, M.j)(),
                    d = null == l ? void 0 : l.pageIdForFrom,
                    { blockIdForFrom: _ } = null != c ? c : {},
                    m = (0, p.useRef)(null),
                    b = (0, p.useRef)(null),
                    h = (0, p.useRef)(null),
                    { resetContext: g } = (0, K.B)({ seeds: null != (a = null == (e = r.meta) ? void 0 : e.seeds) ? a : [], pageIdForFrom: d, blockIdForFrom: _ }),
                    { contentRef: x } = (0, ep.g)(),
                    { contentHeight: A } = ev(0),
                    { state: C, setState: y, toggleFalse: T } = (0, eu.e)(!1);
                (0, p.useEffect)(
                    () => () => {
                        o.reset();
                    },
                    [o],
                );
                let k = (0, p.useMemo)(
                        () => (s ? { height: '88vh', transitionProperty: 'opacity' } : x ? { insetInlineEnd: 7, insetBlockStart: x.offsetTop + 7, height: A - 16 } : {}),
                        [A, x, s],
                    ),
                    N = !!(r.isApplying || r.isMyVibe),
                    I = (0, j.c)((e) => {
                        if (!r.isApplying) {
                            var t;
                            (m.current && (0, e_.P)(e, ex().ripple, m.current), g(), null == (t = b.current) || t.focus());
                        }
                    }),
                    B = (0, p.useMemo)(() => {
                        var e, t;
                        if (
                            ((e) =>
                                !!e &&
                                e.some((e) => {
                                    let [t] = (null == e ? void 0 : e.split(':')) || [];
                                    return e === eb.M1 || (t && eb.UM.includes(t));
                                }))(null == (e = r.meta) ? void 0 : e.seeds)
                        )
                            return (null == (t = r.meta) ? void 0 : t.context)
                                ? (0, u.jsx)(P.$, {
                                      className: ex().toggleSettingsButton,
                                      size: 'm',
                                      radius: 'round',
                                      icon: (0, u.jsx)(Z.I, { variant: 'filter', size: 'xs' }),
                                      'aria-label': n({ id: 'vibe-actions.aria-label-settings' }),
                                      'data-test-id': f.Kq.vibeSettings.VIBE_SETTINGS_BUTTON,
                                  })
                                : (0, u.jsx)(P.$, {
                                      className: ex().toggleSettingsButton,
                                      size: 'default',
                                      radius: 'xxxl',
                                      icon: (0, u.jsx)(Z.I, { variant: 'filter', size: 'xxs' }),
                                      'aria-label': n({ id: 'vibe-actions.aria-label-settings' }),
                                      'data-test-id': f.Kq.vibeSettings.VIBE_SETTINGS_BUTTON,
                                      children: (0, u.jsx)(S.HL, {
                                          variant: 'span',
                                          type: 'controls',
                                          size: 'm',
                                          weight: 'medium',
                                          children: (0, u.jsx)(O.A, { id: 'interface-actions.configure-my-vibe' }),
                                      }),
                                  });
                    }, [n, null == (t = r.meta) ? void 0 : t.context, null == (i = r.meta) ? void 0 : i.seeds]),
                    { handlers: w } = ed({ ref: h, onClose: T, placement: 'bottom', disableSwipe: !s, swipeableProps: { preventScrollOnSwipe: !0 } });
                return (0, u.jsxs)(em.AM, {
                    placement: s ? 'bottom' : 'right',
                    isMobile: s,
                    strategy: 'fixed',
                    transform: !1,
                    portalNode: x,
                    positionElement: x,
                    disableFloatingStyles: !s,
                    open: C,
                    onOpenChange: y,
                    style: k,
                    overlayClassName: ex().overlay,
                    popoverContentRef: h,
                    children: [
                        B,
                        (0, u.jsx)(em.hl, {
                            className: ex().popover,
                            ref: h,
                            'data-test-id': f.Kq.vibeSettings.VIBE_SETTINGS_BLOCK,
                            children: (0, u.jsxs)('div', {
                                className: ex().root,
                                children: [
                                    s && (0, u.jsx)('div', { ref: w.ref, onMouseDown: w.onMouseDown, className: ex().swipeableArea }),
                                    (0, u.jsxs)('div', {
                                        className: ex().header,
                                        children: [
                                            (0, u.jsx)(S.DZ, {
                                                variant: 'h3',
                                                size: 's',
                                                weight: 'bold',
                                                'data-test-id': f.Kq.vibeSettings.VIBE_SETTINGS_TITLE,
                                                children: (0, u.jsx)(O.A, { id: 'interface-actions.my-vibe-settings' }),
                                            }),
                                            (0, u.jsxs)('div', {
                                                className: ex().actions,
                                                children: [
                                                    (0, u.jsx)(E.m_, {
                                                        offsetOptions: 4,
                                                        placement: 'left',
                                                        text: n({ id: 'interface-actions.reset-my-vibe-settings' }),
                                                        children: (0, u.jsx)(P.$, {
                                                            variant: 'outline',
                                                            radius: 'round',
                                                            size: 'xxxs',
                                                            icon: (0, u.jsx)(Z.I, { variant: 'reset', size: 'xxxs' }),
                                                            onClick: I,
                                                            disabled: !!r.isMyVibe,
                                                            'aria-hidden': !!r.isMyVibe,
                                                            'aria-disabled': N,
                                                            'aria-label': n({ id: 'interface-actions.reset-my-vibe-settings' }),
                                                            ref: m,
                                                            'data-test-id': f.Kq.vibeSettings.VIBE_SETTINGS_RESET_BUTTON,
                                                        }),
                                                    }),
                                                    (0, u.jsx)(P.$, {
                                                        radius: 'round',
                                                        color: 'secondary',
                                                        size: 'xxs',
                                                        icon: (0, u.jsx)(Z.I, { variant: 'close', size: 'xxs' }),
                                                        onClick: T,
                                                        'aria-label': n({ id: 'interface-actions.close-my-vibe-settings' }),
                                                        ref: b,
                                                        'data-test-id': f.Kq.vibeSettings.VIBE_SETTINGS_CLOSE_BUTTON,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, u.jsx)(eh.C, {}),
                                ],
                            }),
                        }),
                    ],
                });
            });
            var eC = i(16112),
                ef = i(56862),
                ey = i(51363),
                ej = i.n(ey);
            let eT = (0, m.PA)((e) => {
                    var t;
                    let { context: i, onResetClick: a, className: n } = e,
                        {
                            vibe: r,
                            settings: { isMobile: s },
                            experiments: o,
                        } = (0, Y.g)(),
                        { formatMessage: l } = (0, v.A)(),
                        c = (0, eC.A)(r.meta),
                        d = i && !s,
                        m = (0, k.L)(() => {
                            var e;
                            return o.checkExperiment(X.z.WebNextVibeDescription, 'on') && (null == (e = r.meta) ? void 0 : e.isMix)
                                ? l({ id: 'vibe-actions.vibe-context' }, { type: r.meta.type, name: i })
                                : i;
                        });
                    return (0, u.jsxs)('div', {
                        className: (0, _.$)(ej().root, n),
                        children: [
                            d &&
                                (0, u.jsx)(ef.O, {
                                    size: 'm',
                                    iconSize: 'xs',
                                    withScaleAnimation: !1,
                                    isPinned: null == (t = r.meta) ? void 0 : t.isPinned,
                                    onClick: c,
                                    className: ej().pinButton,
                                }),
                            (0, u.jsx)(eA, {}),
                            i &&
                                (0, u.jsxs)('div', {
                                    className: (0, _.$)(ej().context),
                                    'data-test-id': f.e8.vibe.VIBE_CONTEXT,
                                    children: [
                                        (0, u.jsx)(S.HL, { variant: 'span', type: 'controls', size: 'm', weight: 'medium', lineClamp: 1, children: m }),
                                        (0, u.jsx)(P.$, {
                                            className: ej().resetButton,
                                            variant: 'text',
                                            radius: 'round',
                                            withRipple: !1,
                                            icon: (0, u.jsx)(Z.I, { variant: 'close', size: 'xxs' }),
                                            onClick: a,
                                            'aria-label': ''.concat(l({ id: 'vibe-actions.reset-settings' }), ' ').concat(m),
                                            'data-test-id': f.e8.vibe.RESET_VIBE_CONTEXT_BUTTON,
                                        }),
                                    ],
                                }),
                        ],
                    });
                }),
                ek = 'vibe-block',
                eP = 'vibe-block-controls',
                eN = (0, m.PA)((e) => {
                    var t, i, a, n;
                    let { className: r } = e,
                        s = (0, g.useRouter)(),
                        { vibe: o, experiments: l, user: c, freeAccess: d } = (0, Y.g)(),
                        m = (0, p.useRef)(null),
                        [b, v] = (0, T.d)(),
                        { screen: h, block: x } = (0, M.j)(),
                        A = null == h ? void 0 : h.pageIdForFrom,
                        { blockIdForFrom: C } = null != x ? x : {},
                        {
                            openPaymentWidgetModal: y,
                            isShimmerActive: j,
                            isShimmerVisible: k,
                            mainText: P,
                            mainTextA11y: N,
                            additionText: I,
                        } = (0, U.D)({ storeName: 'music', isEnabled: d.isVibeStartRestricted, offerElement: { element: b, intersectionPropertyId: eP } }),
                        { isIntersecting: E } = null != (a = (0, R.BL)([m], { preflightCheck: !1 }, !m.current)[ek]) ? a : {},
                        B = (0, H.N)().get(z.QG),
                        {
                            isVibeContext: w,
                            isPlaying: L,
                            togglePlay: D,
                            resetContext: F,
                            // for PulseSync: BEGIN access native wave playback by seed
                            playSeeds: pulseSyncPlaySeeds,
                            // for PulseSync: END access native wave playback by seed
                        } = (0, K.B)({ seeds: null != (n = null == (t = o.meta) ? void 0 : t.seeds) ? n : [], pageIdForFrom: A, blockIdForFrom: C }),
                        Z = l.checkExperiment(X.z.WebNextDisableVibeSettings, 'on') || d.isVibeStartRestricted || !c.isAuthorized,
                        J = (0, p.useCallback)(() => {
                            w ? F() : o.vibeResetLoadingState !== G.G.PENDING && o.vibeReset();
                        }, [w, o, F]),
                        Q = (0, p.useCallback)(() => {
                            if (!c.isAuthorized) {
                                if (!B.authorizationUrl) return;
                                s.push(B.authorizationUrl);
                                return;
                            }
                            d.isVibeStartRestricted && y();
                        }, [c.isAuthorized, B.authorizationUrl, s, d.isVibeStartRestricted, y]),
                        ee = (0, p.useCallback)(
                            (e) => {
                                (e.stopPropagation(), e.preventDefault(), Q());
                            },
                            [Q],
                        ),
                        et = (0, p.useCallback)(() => {
                            if (d.isVibeStartRestricted || !c.isAuthorized) return void Q();
                            D();
                        }, [d.isVibeStartRestricted, c.isAuthorized, D, Q]),
                        ei = (0, p.useMemo)(
                            () =>
                                l.checkExperiment(X.z.WebNextShaderFallbackEnabled, 'on')
                                    ? (0, u.jsx)(V, { className: er().vibeAnimation })
                                    : (0, u.jsx)(W, { isIntersecting: E, className: er().vibeAnimation }),
                            [l, E],
                        ),
                        en = (0, p.useMemo)(() => (0, u.jsx)($.H, { size: 'l', className: er().button }), []);
                    return (
                        // for PulseSync WebHost: BEGIN expose native wave playback by seed to the addon API
                        (0, p.useEffect)(() => {
                            if (!window.pulsesyncApi) return;
                            let e = function () {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = Array.isArray(null == e ? void 0 : e.seeds) ? e.seeds : 'string' == typeof (null == e ? void 0 : e.seed) ? [e.seed] : [],
                                    i = t.filter((e) => 'string' == typeof e && e.length > 0);
                                if (i.length > 0) {
                                    if (d.isVibeStartRestricted || !c.isAuthorized) return void Q();
                                    pulseSyncPlaySeeds(i);
                                    return;
                                }
                                et();
                            };
                            return (
                                (window.pulsesyncApi.playVibeNative = e),
                                () => {
                                    window.pulsesyncApi && window.pulsesyncApi.playVibeNative === e && delete window.pulsesyncApi.playVibeNative;
                                }
                            );
                        }, [d.isVibeStartRestricted, c.isAuthorized, et, Q, pulseSyncPlaySeeds]),
                        // for PulseSync WebHost: END expose native wave playback by seed to the addon API
                        (0, p.useEffect)(
                            () => () => {
                                o.reset();
                            },
                            [o],
                        ),
                        c.isAuthorized && o.isNeededToLoad && (0, p.use)(o.getLastVibe()),
                        (0, u.jsxs)('div', {
                            className: (0, _.$)(er().root, { [er().root_freemium]: d.isVibeStartRestricted || !c.isAuthorized }, r),
                            ref: m,
                            'data-intersection-property-id': ek,
                            'data-test-id': f.e8.vibe.VIBE_BLOCK,
                            children: [
                                ei,
                                (0, u.jsxs)('div', {
                                    className: er().controls,
                                    onClick: ee,
                                    ref: v,
                                    'data-intersection-property-id': eP,
                                    children: [
                                        (0, u.jsx)(ea, {
                                            className: er().playButton,
                                            isPlaying: L,
                                            ariaDisabled: d.isVibeStartRestricted || !c.isAuthorized,
                                            onClick: et,
                                        }),
                                        !Z && (0, u.jsx)(eT, { className: er().settingsButton, context: null == (i = o.meta) ? void 0 : i.context, onResetClick: J }),
                                        (d.isVibeStartRestricted || !c.isAuthorized) &&
                                            (0, u.jsx)(S.HL, {
                                                className: er().subscriptionText,
                                                variant: 'div',
                                                size: 'l',
                                                'data-test-id': f.e8.vibe.MY_VIBE_SUBSCRIPTION_TEXT,
                                                children: (0, u.jsx)(O.A, { id: 'vibe-freemium.available-in-plus', values: { br: (0, u.jsx)('br', {}) } }),
                                            }),
                                        !c.isAuthorized && en,
                                        c.isAuthorized &&
                                            d.isVibeStartRestricted &&
                                            (0, u.jsx)(q.b, {
                                                isShimmerActive: j,
                                                isShimmerVisible: k,
                                                onClick: y,
                                                mainText: P,
                                                ariaLabel: N,
                                                additionText: I,
                                                className: er().button,
                                                'data-test-id': f.e8.vibe.MY_VIBE_SUBSCRIPTION_BUTTON,
                                            }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
            eN.displayName = 'VibeBlock';
            var eI = i(20129),
                eE = i(53301),
                eS = i(67858),
                eB = i(69630),
                ew = i(44318),
                eO = i(38501),
                eM = i(2946),
                eR = i(44450),
                eL = i(26e3),
                eV = i(40210),
                eW = i(64284),
                eD = i(86535),
                eF = i(98427),
                eU = i(37670),
                ez = i(83210),
                eH = i(78940),
                eK = i(8655),
                eY = i(69704),
                eX = i(34303),
                eG = i(43522),
                eq = i(86790),
                e$ = i(60266),
                eZ = i(66522),
                eJ = i.n(eZ),
                eQ = i(65453);
            !(function (e) {
                ((e.EVERY_SHOW = 'every_show'), (e.ONCE_PER_SESSION = 'once_per_session'));
            })(a || (a = {}));
            var e0 = i(35948),
                e1 = i(92867);
            !(function (e) {
                ((e.ONCE = 'once'), (e.LOOP = 'loop'));
            })(n || (n = {}));
            var e2 = i(35402);
            let e8 = (e) => {
                let { animation: t, className: i, onStart: a } = e,
                    [r, s] = (0, p.useState)(null),
                    [o, l] = (0, p.useState)(!1),
                    [c, d] = (0, p.useState)(!1);
                return ((0, p.useEffect)(() => {
                    if (!r) return;
                    let e = !1,
                        i = !1,
                        s = () => {
                            e || ((e = !0), r.play());
                        },
                        o = () => {
                            e && !i && ((i = !0), a());
                        },
                        c = () => l(!0),
                        u = () => {
                            t.repeatMode !== n.LOOP && d(!0);
                        };
                    return (
                        r.addEventListener('load', s),
                        r.addEventListener('render', o),
                        r.addEventListener('complete', u),
                        r.addEventListener('loadError', c),
                        r.addEventListener('renderError', c),
                        r.isLoaded && s(),
                        () => {
                            (r.removeEventListener('load', s),
                                r.removeEventListener('render', o),
                                r.removeEventListener('complete', u),
                                r.removeEventListener('loadError', c),
                                r.removeEventListener('renderError', c));
                        }
                    );
                }, [t.repeatMode, r, a]),
                o || c)
                    ? null
                    : (0, u.jsx)(e2.j, { src: t.url, loop: t.repeatMode === n.LOOP, autoplay: !1, dotLottieRefCallback: s, className: i });
            };
            var e9 = i(78991),
                e5 = i.n(e9);
            let e6 = (e) => {
                var t, i;
                let { content: n, isVisible: r } = e,
                    { formatMessage: s } = (0, v.A)(),
                    o = n.action.weblink,
                    l = n.cover.animation,
                    c = null == (t = n.label) ? void 0 : t.text,
                    d = null == (i = n.label) ? void 0 : i.color,
                    _ = (0, eH.Z)(o),
                    {
                        buttonRef: m,
                        isAnimationActive: b,
                        handleAnimationStart: h,
                    } = ((e, t) => {
                        let { entryPoint: i } = (0, Y.g)().main,
                            n = (0, p.useRef)(null),
                            [r, s] = (0, p.useState)(!1),
                            [o, l] = (0, p.useState)(!1),
                            [c, d] = (0, p.useState)(null),
                            u = (0, e1.U)(e0.x),
                            _ = null == e ? void 0 : e.url,
                            m = (null == e ? void 0 : e.launchPolicy) === a.ONCE_PER_SESSION;
                        ((0, p.useEffect)(() => {
                            let e = n.current;
                            if (!e) return;
                            if ('undefined' == typeof IntersectionObserver) return void s(!0);
                            let t = new IntersectionObserver((e) => {
                                let [t] = e;
                                return s(!!(null == t ? void 0 : t.isIntersecting));
                            });
                            return (t.observe(e), () => t.disconnect());
                        }, []),
                            (0, p.useEffect)(() => {
                                let e = () => l(!document.hidden);
                                return (e(), document.addEventListener('visibilitychange', e), () => document.removeEventListener('visibilitychange', e));
                            }, []));
                        let b = !!(_ && t && r && o && !u);
                        (0, p.useEffect)(() => {
                            if (!b || !_) return void d(null);
                            d(m && i.checkIsAnimationPlayed(_) ? null : _);
                        }, [_, b, i, m]);
                        let v = (0, j.c)(() => {
                            _ && m && i.markAnimationPlayed(_);
                        });
                        return { buttonRef: n, isAnimationActive: !!(e && c === _), handleAnimationStart: v };
                    })(l, r),
                    g = l && b,
                    x = (0, j.c)((e) => {
                        0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.preventDefault(), _(e));
                    });
                return (0, u.jsxs)(eQ.N, {
                    ref: m,
                    href: o,
                    onClick: x,
                    className: e5().root,
                    'aria-label': c || s({ id: 'interface-actions.more-details' }),
                    'data-test-id': f.Kq.mainPageEntryPoint.MAIN_PAGE_ENTRY_POINT_BUTTON,
                    children: [
                        c &&
                            (0, u.jsx)(S.HL, {
                                className: e5().caption,
                                lineClamp: 3,
                                size: 'm',
                                variant: 'span',
                                weight: 'bold',
                                style: d ? { color: d } : void 0,
                                children: c,
                            }),
                        (0, u.jsxs)('div', {
                            className: e5().imageContainer,
                            children: [
                                (0, u.jsx)('div', {
                                    className: e5().imageContent,
                                    children: (0, u.jsx)(N._V, { className: e5().image, fit: 'cover', src: n.cover.image.url, withAvatarReplace: !0 }),
                                }),
                                g && (0, u.jsx)(e8, { animation: l, className: e5().animation, onStart: h }, l.url),
                            ],
                        }),
                    ],
                });
            };
            var e4 = i(67174),
                e7 = i(93135),
                e3 = i.n(e7);
            let te = (e) => {
                    let { href: t, imageSrc: i, children: a, className: n } = e,
                        r = (0, eH.Z)(t);
                    return (0, u.jsxs)(eQ.N, {
                        onClick: r,
                        className: (0, _.$)(e3().root, n),
                        children: [
                            (0, u.jsx)(S.HL, { className: e3().caption, lineClamp: 3, size: 'm', variant: 'span', weight: 'bold', children: a }),
                            (0, u.jsx)('div', {
                                className: e3().imageContainer,
                                children: (0, u.jsx)(N._V, { className: e3().image, fit: 'cover', src: i, withAvatarReplace: !0 }),
                            }),
                        ],
                    });
                },
                tt = (0, e4.u)('/slides/special/:campaignId', { params: { campaignId: 'summer_2026' } }).href,
                ti = (0, m.PA)(() => {
                    let { main: e, words: t } = (0, Y.g)(),
                        { content: i, withEntryPointContent: a } = e.entryPoint,
                        n = a ? i : null;
                    return n
                        ? (0, u.jsx)(e6, { content: n, isVisible: !t.bigCardPanel.isOpened })
                        : (0, u.jsx)(te, {
                              href: tt,
                              imageSrc: 'avatars.mds.yandex.net/get-music-misc/70850/img.6a7d54bea0c2131932ceea77/orig',
                              children: (0, u.jsx)(O.A, { id: 'page.summer_2026_title' }),
                          });
                });
            var ta = i(36740),
                tn = i(90852),
                tr = i(57496),
                ts = i(46482),
                to = i(66610),
                tl = i(59717),
                tc = i(86200),
                td = i(8641),
                tu = i(37173),
                t_ = i(5407),
                tm = i(91467),
                tp = i(51318),
                tb = i(17071),
                tv = i(38860),
                th = i(9630),
                tg = i(33355),
                tx = i(52726),
                tA = i(35262),
                tC = i(49738),
                tf = i(63955),
                ty = i(16704),
                tj = i(5915),
                tT = i(24437),
                tk = i(70598),
                tP = i(29008),
                tN = i(91292),
                tI = i(92633),
                tE = i.n(tI);
            let tS = 'https://avatars.mds.yandex.net/get-music-misc/29541/img.698c9ec84f02b819695579e7/orig',
                tB = (0, m.PA)((e) => {
                    let { album: t, className: i, playButton: a } = e,
                        {
                            sonataState: n,
                            fullscreenPlayer: r,
                            settings: { isMobile: s },
                        } = (0, Y.g)(),
                        { formatMessage: o } = (0, v.A)(),
                        l = (0, th.e)(),
                        c = (0, to.D)(),
                        d = (0, tk.S)(),
                        m = (0, tP.r)(null == t ? void 0 : t.type),
                        p = (null == t ? void 0 : t.title) ? ''.concat(m, ' ').concat(t.title) : m,
                        b = n.entityMeta,
                        h = (0, j.c)((e) => {
                            (e.stopPropagation(),
                                (0, e_.P)(e, tE().ripple),
                                null == l || l.moveForward(),
                                c({ actionType: x.ActionType.Skip, userInteractionType: x.UserInteractionType.Tap }));
                        }),
                        g = (0, j.c)((e) => {
                            (e.stopPropagation(),
                                (0, e_.P)(e, tE().ripple),
                                null == l || l.moveBackward(),
                                c({ actionType: x.ActionType.Backskip, userInteractionType: x.UserInteractionType.Tap }));
                        }),
                        A = (0, j.c)(() => {
                            n.isGenerativeContext || (r.showFullscreenPlayerModal(), d({ to: x.AppScreen.PlayerScreen }));
                        }),
                        C = (0, k.L)(() => {
                            // for PulseSync: BEGIN use the same artwork for the displayed cover and Wave colors
                            if (b) return waveCover.getWaveCoverUri(b, n.isGenerativeContext) || tS;
                            // for PulseSync: END use the same artwork for the displayed cover and Wave colors
                        }),
                        y = (0, j.c)(() => {
                            d({ to: x.AppScreen.AlbumScreen });
                        }),
                        T = (0, k.L)(() => {
                            var e, i, r, o;
                            return C
                                ? !s && (null == t ? void 0 : t.url)
                                    ? (0, u.jsx)(tN.N, {
                                          className: tE().link,
                                          href: t.url,
                                          'aria-label': p,
                                          onClick: y,
                                          children: (0, u.jsx)(
                                              N._V,
                                              {
                                                  src: C,
                                                  className: (0, _.$)(tE().cover, {
                                                      [tE().cover_hiddenOnCompactPause]: !!a,
                                                      [tE().cover_generative]: n.isGenerativeContext,
                                                  }),
                                                  fit: 'cover',
                                                  size: 400,
                                                  withAvatarReplace: !0,
                                                  alt: p,
                                                  'aria-hidden': !0,
                                              },
                                              null != (o = null == (e = n.entityMeta) ? void 0 : e.idWithContext) ? o : 'default',
                                          ),
                                      })
                                    : (0, u.jsx)(
                                          N._V,
                                          {
                                              src: C,
                                              className: (0, _.$)(tE().cover, { [tE().cover_hiddenOnCompactPause]: !!a, [tE().cover_generative]: n.isGenerativeContext }),
                                              onClick: A,
                                              fit: 'cover',
                                              size: 400,
                                              withAvatarReplace: !0,
                                              alt: p,
                                              'aria-hidden': !0,
                                          },
                                          null != (r = null == (i = n.entityMeta) ? void 0 : i.idWithContext) ? r : 'default',
                                      )
                                : null;
                        });
                    return (0, u.jsxs)('div', {
                        className: (0, _.$)(tE().root, i),
                        'aria-label': n.isGenerativeContext ? void 0 : p,
                        children: [
                            !n.isGenerativeContext &&
                                s &&
                                (0, u.jsx)(P.$, {
                                    className: (0, _.$)(tE().button, tE().button_backward),
                                    variant: 'text',
                                    radius: 'round',
                                    disabled: !n.canMoveBackward,
                                    focusableWhenDisabled: !0,
                                    withRipple: !1,
                                    'aria-label': o({ id: 'player-actions.previous-track' }),
                                    icon: (0, u.jsx)(Z.I, { variant: 'previous', size: 'xs' }),
                                    onClick: g,
                                    'data-test-id': f.Kq.sonata.PREVIOUS_TRACK_BUTTON,
                                }),
                            (0, u.jsxs)('div', {
                                className: tE().coverContainer,
                                'data-test-id': f.e8.player.VIBE_ALBUM_COVER,
                                children: [T, a && (0, u.jsx)('div', { className: tE().playButtonContainer, children: a })],
                            }),
                            !n.isGenerativeContext &&
                                s &&
                                (0, u.jsx)(P.$, {
                                    className: (0, _.$)(tE().button, tE().button_forward),
                                    variant: 'text',
                                    radius: 'round',
                                    disabled: !n.canMoveForward,
                                    focusableWhenDisabled: !0,
                                    withRipple: !1,
                                    'aria-label': o({ id: 'player-actions.next-track' }),
                                    icon: (0, u.jsx)(Z.I, { variant: 'next', size: 'xs' }),
                                    onClick: h,
                                    'data-test-id': f.Kq.sonata.NEXT_TRACK_BUTTON,
                                }),
                        ],
                    });
                });
            var tw = i(28692),
                tO = i(19934),
                tM = i(7023),
                tR = i(27397),
                tL = i(36361),
                tV = i(33139),
                tW = i(33145),
                tD = i(9618),
                tF = i(98953),
                tU = i(32721),
                tz = i(18130),
                tH = i(34979);
            let tK = (0, m.PA)((e) => {
                let { className: t, trackId: i, albumId: a } = e,
                    { track: n } = (0, Y.g)(),
                    r = (0, j.c)(() => {
                        n.open({ trackId: i, albumId: a });
                    });
                return (0, u.jsx)(tO.Dr, {
                    className: t,
                    onClick: r,
                    icon: (0, u.jsx)(Z.I, { variant: 'note', size: 'xxs' }),
                    'data-test-id': f.Kq.track.TRACK_CONTEXT_MENU_NAVIGATE_TO_TRACK,
                    children: (0, u.jsx)(O.A, { id: 'interface-actions.navigate-to-track' }),
                });
            });
            var tY = i(74064),
                tX = i(81066),
                tG = i(39185),
                tq = i(96046),
                t$ = i.n(tq);
            let tZ = (0, m.PA)((e) => {
                var t, i, a;
                let { className: n } = e,
                    r = (0, th.e)(),
                    { formatMessage: s } = (0, v.A)(),
                    o = null != (t = null == r ? void 0 : r.state.playerState.speed.value) ? t : 1,
                    l = null != (i = tG.f_[o]) ? i : 0,
                    [c, d] = (0, p.useState)(l),
                    m = null != (a = tG.pp[c]) ? a : 1,
                    b = (0, j.c)(() => {
                        var e;
                        let t = (c + 1) % tG.pp.length;
                        (d(t), null == r || r.setSpeed(Number(null != (e = tG.pp[t]) ? e : 1)));
                    });
                return (
                    (0, p.useEffect)(() => {
                        let e =
                            null == r
                                ? void 0
                                : r.state.playerState.speed.onChange(() => {
                                      var e;
                                      let t = r.state.playerState.speed.value;
                                      d(null != (e = tG.f_[t]) ? e : 0);
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [r]),
                    (0, u.jsxs)(tO.Dr, {
                        className: (0, _.$)(t$().root, n),
                        onClick: b,
                        'aria-label': s({ id: 'interface-actions.speed' }, { speed: m }),
                        isSubMenu: !0,
                        'data-test-id': f.S7.CONTEXT_MENU_SPEED_BUTTON,
                        children: [
                            (0, u.jsx)(O.A, { id: 'player-actions.video-speed' }),
                            (0, u.jsx)(Z.I, { variant: (0, tG.CU)(m, !1), size: 'l', className: t$().icon }),
                        ],
                    })
                );
            });
            var tJ = i(60492),
                tQ = i.n(tJ);
            let t0 = (0, m.PA)((e) => {
                let { onCloseMenu: t } = e,
                    { user: i, sonataState: a, fullscreenPlayer: n } = (0, Y.g)(),
                    { formatMessage: r } = (0, v.A)(),
                    s = (0, tk.S)(),
                    o = null !== a.entityMeta,
                    l = !i.isAuthorized,
                    c = (0, j.c)(() => {
                        (n.showPlayQueue(), s({ to: x.AppScreen.PlayerScreen }), t());
                    }),
                    d = (0, p.useCallback)(
                        (e) => {
                            let { isPopoverEnabled: t } = e;
                            return (0, u.jsx)(tO.Dr, {
                                'aria-label': r({ id: 'interface-actions.open-play-queue' }),
                                onClick: c,
                                disabled: !o || t,
                                icon: (0, u.jsx)(Z.I, { variant: 'playQueue', size: 'xxs' }),
                                'data-test-id': f.e8.player.VIBE_CONTEXT_MENU_PLAY_QUEUE_ITEM,
                                children: (0, u.jsx)(O.A, { id: 'interface-actions.open-play-queue' }),
                            });
                        },
                        [r, o, c],
                    );
                return (0, u.jsx)(tf.Z, { isNested: !0, isEnabled: l, placement: 'right', textVariant: 'openQueue', renderChildren: d });
            });
            var t1 = i(51147),
                t2 = i.n(t1);
            let t8 = (0, m.PA)((e) => {
                var t, i, a, n, r, s, o, l;
                let { buttonClassName: c } = e,
                    { sonataState: d, advert: m, fullscreenPlayer: p, quality: b, vibe: h, user: g, experiments: A } = (0, Y.g)(),
                    { formatMessage: C } = (0, v.A)(),
                    y = (0, tL.e)(),
                    T = (0, tR.A)(),
                    N = (0, eC.A)(h.meta),
                    { state: I, setState: E, toggleFalse: S } = (0, eu.e)(!1),
                    B = (0, tk.S)(),
                    w = (0, to.D)(),
                    M = d.entityMeta,
                    R = (0, j.c)((e) => {
                        E(e);
                    }),
                    L = (0, j.c)(() => {
                        (b.modal.open(), S());
                    }),
                    V = (0, j.c)(() => {
                        (p.showSyncLyrics(), B({ to: x.AppScreen.PlayerScreen }), S());
                    }),
                    W = (0, j.c)(() => {
                        (y(d), w({ actionType: x.ActionType.ChangeShuffle, userInteractionType: x.UserInteractionType.Tap }));
                    }),
                    D = (0, j.c)(() => {
                        (T(d), w({ actionType: x.ActionType.ChangeRepeatSettings, userInteractionType: x.UserInteractionType.Tap }));
                    }),
                    F = (0, j.c)(() => {
                        (N(), S());
                    }),
                    U = (0, j.c)((e) => {
                        ((0, e_.P)(e, tQ().ripple), L());
                    }),
                    z = (0, t_.P)(),
                    { shouldShowBuySubscriptionModal: H, showBuySubscriptionModal: G } = (0, tD.q)(),
                    { isPlaying: q, togglePlay: $ } = (0, K.B)({
                        seeds: null != (s = null == M ? void 0 : M.seeds) ? s : [],
                        pageIdForFrom: eF.b.RADIO,
                        blockIdForFrom: ''.concat(eW.U.TRACK, '-').concat(null == M ? void 0 : M.id),
                        parentContextId: (null == M || null == (t = M.mainAlbum) ? void 0 : t.id)
                            ? ''.concat(null == M ? void 0 : M.mainAlbum.id, ':').concat(null == M ? void 0 : M.id)
                            : null == M
                              ? void 0
                              : M.entityId,
                    }),
                    J = (0, j.c)(() => {
                        if (H && g.isAuthorized) return void G();
                        !z() && (q || $());
                    }),
                    Q = d.repeatMode === tw.pM.ONE ? 'repeat_one' : 'repeat',
                    ee = d.repeatMode !== tw.pM.NONE,
                    et = d.shuffle,
                    ei = p.isSyncLyricsMode,
                    ea = !!(null == (i = h.meta) ? void 0 : i.isPinned),
                    en = A.checkExperiment(X.z.WebNextWaveLikesAndShares, 'on') && (null == (a = h.meta) ? void 0 : a.isLikeEnabled),
                    er = !!(h.isMyVibe || h.isShuffleVibe || en),
                    es = A.checkExperiment(X.z.WebNextProductWithoutRecommendation, 'on'),
                    eo = !es && !!h.meta && d.isVibeContext && !er,
                    el = d.canSpeed && ((null == M ? void 0 : M.isNonMusic) || (null == M || null == (n = M.mainAlbum) ? void 0 : n.isNonMusic)),
                    ec = !es && (null == M ? void 0 : M.isNonUserGenerated) && !(null == (r = M.mainAlbum) ? void 0 : r.isNonMusic),
                    ed = (null == M ? void 0 : M.albumId) ? '/album/:albumId/track/:trackId' : '/track/:trackId',
                    { shareLink: em, pathname: ep } = (0, tz.b)(ed, {
                        params: { albumId: null != (o = null == M ? void 0 : M.albumId) ? o : '', trackId: null != (l = null == M ? void 0 : M.id) ? l : '' },
                    }),
                    eb = (0, k.L)(() => {
                        var e, t;
                        if (M)
                            return {
                                variant: tF.Y.TRACK,
                                id: M.id,
                                title: M.title,
                                path: ep,
                                trackArtistName: null == (e = M.mainArtist) ? void 0 : e.name,
                                trackArtistId: null == (t = M.mainArtist) ? void 0 : t.id,
                                trackAlbumId: M.albumId,
                            };
                    }),
                    // for PulseSync: BEGIN track download filename and desktop download action
                    pulseSyncTrackDownloadName = (0, k.L)(() => {
                        let e = (M?.artists || [])
                            .map((e) => e.name)
                            .filter(Boolean)
                            .join(', ');
                        return [e, M?.title].filter(Boolean).join(' — ');
                    }),
                    pulseSyncDownloadTrackToFile = (0, j.c)(() => {
                        (M?.id && window.musicDesktop?.pulsesync.downloads.track?.(M.id, pulseSyncTrackDownloadName), S());
                    }),
                    // for PulseSync: END track download filename and desktop download action
                    ev = ''.concat(C({ id: 'interface-actions.open-sync-lyrics' }), ' ').concat(C({ id: 'warning-messages.can-break-accessibility' })),
                    eh = (0, k.L)(() => {
                        let e = [];
                        return (el && e.push((0, u.jsx)(tZ, {}, 'speed')), e.length > 0 && e.push((0, u.jsx)('div', { className: t2().divider }, 'speed-divider')), e);
                    }),
                    eg = (0, k.L)(() => {
                        let e = [];
                        return (
                            eo &&
                                e.push(
                                    (0, u.jsx)(
                                        tO.Dr,
                                        {
                                            onClick: F,
                                            icon: (0, u.jsx)(Z.I, { variant: ea ? 'pin_filled' : 'pin', size: 'xxs' }),
                                            'data-test-id': f.e8.player.VIBE_CONTEXT_MENU_PIN_ITEM,
                                            children: ea
                                                ? (0, u.jsx)(O.A, { id: 'interface-actions.unpin-my-vibe' })
                                                : (0, u.jsx)(O.A, { id: 'interface-actions.pin-my-vibe' }),
                                        },
                                        'pin',
                                    ),
                                ),
                            ec && e.push((0, u.jsx)(tX.C, { variant: tU.I.TRACK, onClick: J, disabled: !g.isAuthorized, onOpenMenuChange: R }, 'vibe')),
                            e.length > 0 && e.push((0, u.jsx)('div', { className: t2().divider }, 'top-divider')),
                            e
                        );
                    }),
                    ex = (0, k.L)(() => {
                        let e = [];
                        if (M) {
                            var t, i, a, n, r;
                            // for PulseSync: BEGIN download-to-file action in the wave track menu
                            (e.push(
                                (0, u.jsx)(
                                    tO.Dr,
                                    {
                                        onClick: pulseSyncDownloadTrackToFile,
                                        disabled: !M.id,
                                        icon: (0, u.jsx)(Z.I, { variant: 'download', size: 'xxs' }),
                                        children: 'Скачать в файл',
                                    },
                                    'download-to-file',
                                ),
                            ),
                                e.push((0, u.jsx)(tW.$, { track: M }, 'add-to-playlist')),
                                eb && M.isNonUserGenerated && e.push((0, u.jsx)(tY.H, { shareLink: em, entityMeta: eb }, 'share')),
                                M.isNonUserGenerated &&
                                    M.isTrackMusic &&
                                    (null == (t = M.mainAlbum) ? void 0 : t.id) &&
                                    e.push((0, u.jsx)(tK, { trackId: M.id, albumId: M.mainAlbum.id }, 'navigate-to-track')),
                                M.isNonUserGenerated &&
                                    (M.albums.length || M.mainAlbum) &&
                                    (null == (i = M.mainAlbum) ? void 0 : i.url) &&
                                    e.push((0, u.jsx)(tH.f, { albumUrl: M.mainAlbum.url, albumType: M.mainAlbum.type, trackType: M.type }, 'navigate-to-album')),
                                M.isNonUserGenerated &&
                                    (null == (a = M.artists) ? void 0 : a.length) &&
                                    ((null == (n = M.mainAlbum) ? void 0 : n.isAudiobook) ||
                                        (null == (r = M.mainAlbum) ? void 0 : r.isAlbum) ||
                                        M.isTrackAudiobook ||
                                        M.isTrackMusic) &&
                                    e.push((0, u.jsx)(tV.o, { artists: M.artists }, 'navigate-to-artist')));
                            // for PulseSync: END download-to-file action in the wave track menu
                        }
                        return (e.length > 0 && e.unshift((0, u.jsx)('div', { className: t2().divider }, 'bottom-divider')), e);
                    });
                return d.isGenerativeContext
                    ? (0, u.jsx)(P.$, {
                          className: c,
                          radius: 'round',
                          size: 'xxxs',
                          variant: 'text',
                          withRipple: !1,
                          onClick: U,
                          'aria-label': C({ id: 'player-actions.audio-quality' }),
                          icon: (0, u.jsx)(Z.I, { variant: 'settings', size: 'xs' }),
                      })
                    : (0, u.jsxs)(tO.W1, {
                          placement: 'top',
                          offsetOptions: 10,
                          open: I,
                          onOpenChange: R,
                          variant: 'text',
                          icon: (0, u.jsx)(Z.I, { variant: 'more', size: 'xs' }),
                          radius: 'xxxl',
                          className: c,
                          ariaLabel: C({ id: 'interface-actions.context-menu' }),
                          containerDataTestId: f.e8.player.VIBE_CONTEXT_MENU,
                          'data-test-id': f.e8.player.VIBE_CONTEXT_MENU_BUTTON,
                          children: [
                              eg,
                              eh,
                              d.canShuffle &&
                                  (0, u.jsx)(tO.Dr, {
                                      'aria-label': C({ id: 'player-actions.shuffle' }),
                                      onClick: W,
                                      icon: (0, u.jsx)(Z.I, { variant: 'shuffle', size: 'xxs' }),
                                      className: (0, _.$)({ [t2().item_active]: et }),
                                      isSubMenu: !0,
                                      'data-test-id': f.e8.player.VIBE_CONTEXT_MENU_SHUFFLE_ITEM,
                                      children: (0, u.jsx)(O.A, { id: 'player-actions.mix' }),
                                  }),
                              d.canChangeRepeatMode &&
                                  (0, u.jsx)(tO.Dr, {
                                      'aria-label': (0, tM.z)(d.repeatMode, C),
                                      onClick: D,
                                      icon: (0, u.jsx)(Z.I, { variant: Q, size: 'xxs' }),
                                      className: (0, _.$)({ [t2().item_active]: ee }),
                                      isSubMenu: !0,
                                      'data-test-id': f.e8.player.VIBE_CONTEXT_MENU_REPEAT_ITEM,
                                      children: (0, u.jsx)(O.A, { id: 'player-actions.repeat-action' }),
                                  }),
                              !d.isGenerativeContext &&
                                  !m.isAdvertShown &&
                                  // for PulseSync: BEGIN include fallback results in wave synchronized lyrics availability
                                  ((null == M ? void 0 : M.isSyncLyricsAvailable) ||
                                      (null == M ? void 0 : M.isSyncLyricsAvailableWithOfflineFeature) ||
                                      (null == M ? void 0 : M.hasSyncLyrics) ||
                                      ((null == M ? void 0 : M.id) && p.syncLyrics.hasLyricsForTrack(M.id))) &&
                                  // for PulseSync: END include fallback results in wave synchronized lyrics availability
                                  (0, u.jsx)(tO.Dr, {
                                      'aria-label': ev,
                                      onClick: V,
                                      icon: (0, u.jsx)(Z.I, { variant: 'syncLyrics', size: 'xxs' }),
                                      className: (0, _.$)({ [t2().item_active]: ei }),
                                      'data-test-id': f.e8.player.VIBE_CONTEXT_MENU_SYNC_LYRICS_ITEM,
                                      children: (0, u.jsx)(O.A, { id: 'interface-actions.open-lyrics' }),
                                  }),
                              !d.isGenerativeContext && !m.isAdvertShown && (0, u.jsx)(t0, { onCloseMenu: S }),
                              (0, u.jsx)(tO.Dr, {
                                  onClick: L,
                                  icon: (0, u.jsx)(Z.I, { variant: 'settings', size: 'xxs' }),
                                  'data-test-id': f.e8.player.VIBE_CONTEXT_MENU_AUDIO_QUALITY_ITEM,
                                  children: (0, u.jsx)(O.A, { id: 'player-actions.audio-quality' }),
                              }),
                              ex,
                          ],
                      });
            });
            var t9 = i(55482),
                t5 = i(54112),
                t6 = i(54152),
                t4 = i(97361),
                t7 = i(7147),
                t3 = i.n(t7),
                ie = i(54965),
                it = i(90224),
                ii = i(73171),
                ia = {
                    5881: (e, t, i) => {
                        function a() {
                            for (var e, t, i = 0, a = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            a,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (a = e(t[i])) && (n && (n += ' '), (n += a));
                                            else for (i in t) t[i] && (n && (n += ' '), (n += i));
                                        return n;
                                    })(e)) &&
                                    (a && (a += ' '), (a += t));
                            return a;
                        }
                        (i.r(t), i.d(t, { clsx: () => a, default: () => n }));
                        let n = a;
                    },
                    973: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = {
                            root: 'MoGQRtOtKDQCJc5HZNLw',
                            marquee: 'eYOrGFuz5P6VSNQ_IgdM',
                            content: 'eY9nVaCYr1nX7vFMBaaD',
                            content_static: 'NuV8xfAyyQwIpvv3W2Gy',
                            measure: 'CapcUKn78Iu2s1O6joam',
                        };
                    },
                    1269: (e, t, i) => {
                        Object.defineProperty(t, '__esModule', { value: !0 });
                        var a = i(810),
                            n = (function (e) {
                                return e && 'object' == typeof e && 'default' in e ? e : { default: e };
                            })(a);
                        (!(function (e) {
                            if (!e) return;
                            let t = document.createElement('style');
                            (t.setAttribute('type', 'text/css'), (t.innerHTML = e), document.head.appendChild(t));
                        })(
                            '.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}',
                        ),
                            (t.default = a.forwardRef(function (e, t) {
                                let {
                                        style: i = {},
                                        className: r = '',
                                        autoFill: s = !1,
                                        play: o = !0,
                                        pauseOnHover: l = !1,
                                        pauseOnClick: c = !1,
                                        direction: d = 'left',
                                        speed: u = 50,
                                        delay: _ = 0,
                                        loop: m = 0,
                                        gradient: p = !1,
                                        gradientColor: b = 'white',
                                        gradientWidth: v = 200,
                                        onFinish: h,
                                        onCycleComplete: g,
                                        onMount: x,
                                        children: A,
                                    } = e,
                                    [C, f] = a.useState(0),
                                    [y, j] = a.useState(0),
                                    [T, k] = a.useState(1),
                                    [P, N] = a.useState(!1),
                                    I = a.useRef(null),
                                    E = t || I,
                                    S = a.useRef(null),
                                    B = a.useCallback(() => {
                                        if (S.current && E.current) {
                                            let e = E.current.getBoundingClientRect(),
                                                t = S.current.getBoundingClientRect(),
                                                i = e.width,
                                                a = t.width;
                                            (('up' === d || 'down' === d) && ((i = e.height), (a = t.height)),
                                                s && i && a ? k(a < i ? Math.ceil(i / a) : 1) : k(1),
                                                f(i),
                                                j(a));
                                        }
                                    }, [s, E, d]);
                                (a.useEffect(() => {
                                    if (P && (B(), S.current && E.current)) {
                                        let e = new ResizeObserver(() => B());
                                        return (
                                            e.observe(E.current),
                                            e.observe(S.current),
                                            () => {
                                                e && e.disconnect();
                                            }
                                        );
                                    }
                                }, [B, E, P]),
                                    a.useEffect(() => {
                                        B();
                                    }, [B, A]),
                                    a.useEffect(() => {
                                        N(!0);
                                    }, []),
                                    a.useEffect(() => {
                                        'function' == typeof x && x();
                                    }, []));
                                let w = a.useMemo(() => (s ? (y * T) / u : y < C ? C / u : y / u), [s, C, y, T, u]),
                                    O = a.useMemo(
                                        () =>
                                            Object.assign(Object.assign({}, i), {
                                                '--pause-on-hover': !o || l ? 'paused' : 'running',
                                                '--pause-on-click': !o || (l && !c) || c ? 'paused' : 'running',
                                                '--width': 'up' === d || 'down' === d ? '100vh' : '100%',
                                                '--transform': 'up' === d ? 'rotate(-90deg)' : 'down' === d ? 'rotate(90deg)' : 'none',
                                            }),
                                        [i, o, l, c, d],
                                    ),
                                    M = a.useMemo(() => ({ '--gradient-color': b, '--gradient-width': 'number' == typeof v ? ''.concat(v, 'px') : v }), [b, v]),
                                    R = a.useMemo(
                                        () => ({
                                            '--play': o ? 'running' : 'paused',
                                            '--direction': 'left' === d ? 'normal' : 'reverse',
                                            '--duration': ''.concat(w, 's'),
                                            '--delay': ''.concat(_, 's'),
                                            '--iteration-count': m ? ''.concat(m) : 'infinite',
                                            '--min-width': s ? 'auto' : '100%',
                                        }),
                                        [o, d, w, _, m, s],
                                    ),
                                    L = a.useMemo(() => ({ '--transform': 'up' === d ? 'rotate(90deg)' : 'down' === d ? 'rotate(-90deg)' : 'none' }), [d]),
                                    V = a.useCallback(
                                        (e) =>
                                            [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map((e, t) =>
                                                n.default.createElement(
                                                    a.Fragment,
                                                    { key: t },
                                                    a.Children.map(A, (e) => n.default.createElement('div', { style: L, className: 'rfm-child' }, e)),
                                                ),
                                            ),
                                        [L, A],
                                    );
                                return P
                                    ? n.default.createElement(
                                          'div',
                                          { ref: E, style: O, className: 'rfm-marquee-container ' + r },
                                          p && n.default.createElement('div', { style: M, className: 'rfm-overlay' }),
                                          n.default.createElement(
                                              'div',
                                              { className: 'rfm-marquee', style: R, onAnimationIteration: g, onAnimationEnd: h },
                                              n.default.createElement(
                                                  'div',
                                                  { className: 'rfm-initial-child-container', ref: S },
                                                  a.Children.map(A, (e) => n.default.createElement('div', { style: L, className: 'rfm-child' }, e)),
                                              ),
                                              V(T - 1),
                                          ),
                                          n.default.createElement('div', { className: 'rfm-marquee', style: R }, V(T)),
                                      )
                                    : null;
                            })));
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function a(e, t, a) {
                            var n = null;
                            if ((void 0 !== a && (n = '' + a), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var r in ((a = {}), t)) 'key' !== r && (a[r] = t[r]);
                            else a = t;
                            return { $$typeof: i, type: e, key: n, ref: void 0 !== (t = a.ref) ? t : null, props: a };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = a), (t.jsxs = a));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    7497: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useReturnValue = void 0), (t.useReturnValue = (e) => e()));
                    },
                    7956: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.OverflowMarquee = void 0));
                        let n = i(4377),
                            r = i(5881),
                            s = i(810),
                            o = a(i(1269)),
                            l = i(7497),
                            c = a(i(973));
                        t.OverflowMarquee = (e) => {
                            let {
                                    children: t,
                                    className: i,
                                    contentClassName: a,
                                    scrollingClassName: d,
                                    speed: u = 50,
                                    delay: _ = 0,
                                    pauseOnHover: m = !0,
                                    pauseOnClick: p = !1,
                                    loop: b = 0,
                                    direction: v = 'left',
                                    autoFill: h = !1,
                                    gradient: g = !1,
                                    gradientColor: x,
                                    gradientWidth: A,
                                    gap: C = 12,
                                    ...f
                                } = e,
                                y = (0, s.useRef)(null),
                                j = (0, s.useRef)(null),
                                [T, k] = (0, s.useState)(!1),
                                [P, N] = (0, s.useState)(!1);
                            ((0, s.useEffect)(() => {
                                let e = window.matchMedia('(prefers-reduced-motion: reduce)'),
                                    t = () => {
                                        N(e.matches);
                                    };
                                return (
                                    t(),
                                    e.addEventListener('change', t),
                                    () => {
                                        e.removeEventListener('change', t);
                                    }
                                );
                            }, []),
                                (0, s.useEffect)(() => {
                                    let e = y.current,
                                        t = j.current;
                                    if (null === e || null === t) return;
                                    let i = () => {
                                        let i = e.clientWidth,
                                            a = t.scrollWidth;
                                        if (0 === i || 0 === a) return void k(!1);
                                        k(a > i);
                                    };
                                    if ((i(), 'undefined' == typeof ResizeObserver)) return;
                                    let a = new ResizeObserver(i);
                                    return (
                                        a.observe(e),
                                        a.observe(t),
                                        () => {
                                            a.disconnect();
                                        }
                                    );
                                }, []));
                            let I = T && !P,
                                E = I && void 0 !== C ? { marginInlineEnd: ''.concat(C, 'px') } : void 0,
                                S = (0, l.useReturnValue)(() =>
                                    I
                                        ? (0, n.jsx)(o.default, {
                                              className: c.default.marquee,
                                              play: I,
                                              speed: u,
                                              delay: _ / 1e3,
                                              loop: b,
                                              direction: v,
                                              autoFill: h,
                                              pauseOnHover: m,
                                              pauseOnClick: p,
                                              gradient: g,
                                              gradientColor: x,
                                              gradientWidth: A,
                                              children: (0, n.jsx)('div', { className: (0, r.clsx)(c.default.content, a), style: E, children: t }),
                                          })
                                        : (0, n.jsx)('div', { className: (0, r.clsx)(c.default.content, c.default.content_static, a), style: E, children: t }),
                                );
                            return (0, n.jsxs)('div', {
                                ref: y,
                                className: (0, r.clsx)(c.default.root, i, I && d),
                                ...f,
                                children: [
                                    (0, n.jsx)('div', { ref: j, className: (0, r.clsx)(c.default.measure, c.default.content, a), 'aria-hidden': !0, children: t }),
                                    S,
                                ],
                            });
                        };
                    },
                    810: (e) => {
                        e.exports = b;
                    },
                },
                ir = {};
            function is(e) {
                var t = ir[e];
                if (void 0 !== t) return t.exports;
                var i = (ir[e] = { exports: {} });
                return (ia[e].call(i.exports, i, i.exports, is), i.exports);
            }
            ((is.d = (e, t) => {
                for (var i in t) is.o(t, i) && !is.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (is.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (is.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var io = {};
            (() => {
                (Object.defineProperty(io, 'X', { value: !0 }), (io.W = void 0));
                var e = is(7956);
                Object.defineProperty(io, 'W', {
                    enumerable: !0,
                    get: function () {
                        return e.OverflowMarquee;
                    },
                });
            })();
            var il = io.W;
            io.X;
            var ic = i(50681),
                id = i.n(ic);
            let iu = {
                    minFontSize: 14,
                    maxFontSize: 20,
                    lineHeight: 1,
                    maxLines: 3,
                    styleVariants: [
                        { fontSize: 20, lineHeight: 1 },
                        { fontSize: 16, lineHeight: 1 },
                        { fontSize: 15, lineHeight: 16 / 15 },
                        { fontSize: 14, lineHeight: 16 / 14 },
                    ],
                },
                i_ = (0, m.PA)((e) => {
                    let { children: t, className: i } = e,
                        { experiments: a } = (0, Y.g)(),
                        [n, r] = (0, T.d)(),
                        s = a.checkExperiment(X.z.WebNextMainPlayerTitle, 'on');
                    return ((0, ii.mf)(n, iu), s)
                        ? (0, u.jsx)('div', {
                              ref: r,
                              className: i,
                              'data-test-id': f.e8.player.VIBE_PLAYERBAR_TRACK_NAME,
                              children: (0, u.jsx)(S.HL, {
                                  variant: 'span',
                                  className: (0, _.$)(id().trackNameText, id().trackNameText_multiline),
                                  lineClamp: 3,
                                  children: t,
                              }),
                          })
                        : (0, u.jsx)(il, {
                              className: i,
                              scrollingClassName: id().scrollingTrackName,
                              contentClassName: id().trackNameText,
                              pauseOnHover: !1,
                              speed: 35,
                              gap: 32,
                              'data-test-id': f.e8.player.VIBE_PLAYERBAR_TRACK_NAME,
                              children: t,
                          });
                });
            var im = i(79396),
                ip = i.n(im);
            let ib = (0, m.PA)((e) => {
                var t, i;
                let {
                        progress: a,
                        // for PulseSync: BEGIN use precise Wave timing and the active seek gesture
                        visualPosition,
                        visualDuration,
                        seekRef,
                        // for PulseSync: END use precise Wave timing and the active seek gesture
                        isChangingTimecode: n,
                        shouldShowArtists: r,
                        shouldKeepMobileSpacingOnPause: s,
                        onMouseEnter: o,
                        onMouseLeave: l,
                        children: c,
                        slider: d,
                        overlay: m,
                        tooltip: tooltipContent,
                        isOverlayVisible: b = !1,
                        ref: v,
                        centerDataTestId: h,
                        'data-test-id': g,
                    } = e,
                    { experiments: x, sonataState: A } = (0, Y.g)(),
                    C = A.entityMeta,
                    f = {
                        '--track-progress': ''.concat(a, '%'),
                        '--progress-transition-duration': n
                            ? '0s'
                            : ((e) => {
                                  if ('default' !== e && void 0 !== e) return 'on1' === e ? '150ms' : '0ms';
                              })(null == (t = x.getExperiment(X.z.WebNextMainPlayerAnimation)) ? void 0 : t.group),
                    };
                // for PulseSync: BEGIN animate the Wave progress without changing seek values
                const player = (0, th.e)();
                const visualProgressRef = (0, p.useRef)(null);
                const attachProgress = (0, p.useCallback)((element) => {
                    visualProgressRef.current = element;
                    if (typeof v === 'function') return v(element);
                    if (v) v.current = element;
                }, [v]);
                (0, t5.useVisualPlaybackProgress)(visualProgressRef, {
                    position: visualPosition,
                    duration: visualDuration,
                    state: player?.state.playerState,
                    trackId: C?.idWithContext ?? C?.id,
                    scrubbing: seekRef,
                    blocked: n || A.isGenerativeContext,
                });
                // for PulseSync: END animate the Wave progress without changing seek values
                return (0, u.jsxs)('div', {
                    // for PulseSync: BEGIN attach the Wave progress clock alongside the measurement ref
                    ref: attachProgress,
                    // for PulseSync: END attach the Wave progress clock alongside the measurement ref
                    className: ip().root,
                    style: f,
                    'data-test-id': g,
                    children: [
                        (0, u.jsxs)('div', {
                            className: (0, _.$)(ip().center, {
                                [ip().center_withExplicitMark]: null == C ? void 0 : C.explicitDisclaimer,
                                [ip().center_withoutExplicitMark]: !(null == C ? void 0 : C.explicitDisclaimer),
                                [ip().center_spacious]: !s,
                                [ip().center_playing]: A.isPlaying,
                                [ip().center_withTimecode]: b,
                                [ip().center_active]: !A.isGenerativeContext,
                            }),
                            onMouseEnter: o,
                            onMouseLeave: l,
                            'data-test-id': h,
                            children: [
                                (0, u.jsx)(
                                    i_,
                                    { className: ip().trackName, children: c },
                                    ''.concat(null != (i = null == C ? void 0 : C.idWithContext) ? i : 'default', '-').concat(r),
                                ),
                                (null == C ? void 0 : C.explicitDisclaimer) &&
                                    (0, u.jsx)(it.N, {
                                        containerClassName: ip().explicitMarkContainer,
                                        getDescriptionTexts: C.getDescriptionTexts,
                                        size: 'xxxs',
                                        variant: C.explicitDisclaimer,
                                        className: ip().explicitMark,
                                        trackId: C.id,
                                    }),
                                m,
                                !A.isGenerativeContext && d,
                            ],
                        }),
                        tooltipContent,
                    ],
                });
            });
            var iv = i(55842),
                ih = i.n(iv);
            let ig = (0, m.PA)((e) => {
                let { position: t, duration: i, isVisible: a, children: n, ...r } = e,
                    { sonataState: s } = (0, Y.g)(),
                    o = !!i && !s.isGenerativeContext && a,
                    l = (0, ie.E)(Math.round(t), Math.round(i)),
                    c = (0, ie.E)(Math.round(i), Math.round(i)),
                    d = (0, k.L)(() =>
                        s.isGenerativeContext
                            ? null
                            : (0, u.jsx)('span', {
                                  className: (0, _.$)(ih().timecode, { [ih().timecode_visible]: o }),
                                  'aria-hidden': !0,
                                  'data-test-id': f.e8.player.VIBE_PLAYERBAR_TIMECODE,
                                  children: ''.concat(l, ' / ').concat(c),
                              }),
                    );
                return (0, u.jsx)(ib, { ...r, isOverlayVisible: o, centerDataTestId: f.e8.player.VIBE_PLAYERBAR_TIMECODE_SLIDER, overlay: d, children: n });
            });
            var ix = i(27723),
                iA = i(761),
                iC = i(22696),
                iy = i.n(iC);
            let ij = (0, m.PA)((e) => {
                    let { position: t, duration: i, progress: a, isVisible: n, children: r, ...s } = e,
                        { sonataState: o } = (0, Y.g)(),
                        { ref: l, width: c } = (0, iA.i)(),
                        d = !!(o.entityMeta && i) && !o.isGenerativeContext,
                        m = (0, k.L)(() =>
                            d
                                ? (0, u.jsx)(ix.u, {
                                      progress: a,
                                      position: t,
                                      duration: i,
                                      progressElementWidth: c,
                                      className: (0, _.$)(iy().timecode, { [iy().timecode_visible]: n }),
                                      'data-test-id': f.e8.player.VIBE_PLAYERBAR_TIMECODE,
                                  })
                                : null,
                        );
                    return (0, u.jsx)(ib, { ...s, ref: l, progress: a, tooltip: m, 'data-test-id': f.e8.player.VIBE_PLAYERBAR_TIMECODE_SLIDER, children: r });
                }),
                iT = (0, m.PA)((e) => {
                    var t, i;
                    let { shouldShowArtists: a, shouldShowArtistsWithTrackTitle: n, shouldKeepMobileSpacingOnPause: r } = e,
                        {
                            experiments: s,
                            sonataState: o,
                            advert: l,
                            settings: { isMobile: c },
                        } = (0, Y.g)(),
                        { formatMessage: d } = (0, v.A)(),
                        m = (0, th.e)(),
                        b = o.entityMeta,
                        h = null != (t = o.position) ? t : 0,
                        g = null != (i = o.duration) ? i : 0,
                        [x, A] = (0, p.useState)(null),
                        C = (0, p.useRef)(!1),
                        { state: y, toggleTrue: T, toggleFalse: P } = (0, eu.e)(!1),
                        N = C.current && null != x ? x : h,
                        I = g > 0 ? (Math.min(N, g) / g) * 100 : 0,
                        E = (0, t4.P)(N),
                        S = (0, t4.P)(g),
                        B = (0, p.useMemo)(
                            () =>
                                (0, t9.A)(() => {
                                    P();
                                }, 1e3),
                            [P],
                        ),
                        w = (0, j.c)((e, t) => {
                            l.isAdvertShown || ((C.current = !t), c && (T(), B.cancel(), B()), t ? null == m || m.setProgress(e) : A(e));
                        }),
                        O = (0, k.L)(() => {
                            if (o.isGenerativeContext)
                                return (null == b ? void 0 : b.title)
                                    ? (0, u.jsxs)(u.Fragment, {
                                          children: [
                                              (0, u.jsx)('span', {
                                                  className: t3().generativeIcon,
                                                  children: (0, u.jsx)(Z.I, {
                                                      size: 'xs',
                                                      variant: 'infinity',
                                                      'data-test-id': f.e8.player.VIBE_PLAYERBAR_NEUROMUSIC_ICON,
                                                  }),
                                              }),
                                              (0, u.jsx)('span', { className: t3().generativeTitle, children: b.title }),
                                          ],
                                      })
                                    : (0, u.jsx)(Z.I, { size: 'xs', variant: 'infinity', 'data-test-id': f.e8.player.VIBE_PLAYERBAR_NEUROMUSIC_ICON });
                            let e = [],
                                t = [];
                            return (
                                b && (e.push((0, t6.X)(b.artists)), e.push('—')),
                                (null == b ? void 0 : b.title) && t.push(b.title),
                                !(null == b ? void 0 : b.isRemoved) && (null == b ? void 0 : b.version) && t.push('('.concat(b.version, ')')),
                                (0, u.jsxs)(u.Fragment, {
                                    children: [
                                        e.length > 0 &&
                                            (a || n) &&
                                            (0, u.jsx)('span', {
                                                className: (0, _.$)(t3().artists, { [t3().artists_hidden]: !a, [t3().artists_visibleOnCompact]: n }),
                                                children: e.join(' '),
                                            }),
                                        t.join(' '),
                                    ],
                                })
                            );
                        }),
                        M = (0, u.jsx)(t5.A, {
                            className: t3().slider,
                            'aria-label': d({ id: 'player-actions.timecode-control' }),
                            'aria-valuetext': ''.concat(E, ' / ').concat(S),
                            disabled: !b || l.isAdvertShown,
                            onChange: w,
                            onFocus: T,
                            onBlur: P,
                            maxValue: Math.round(g),
                            mode: 'deferred',
                            value: Math.round(N),
                            showThumbVariant: 'never',
                            trackSize: 's',
                            thumbSize: 's',
                        }),
                        R = s.checkExperiment(X.z.WebNextPlayerTimecodeTooltip, 'on') ? ij : ig;
                    return (0, u.jsx)(R, {
                        position: N,
                        // for PulseSync: BEGIN pass Wave timing to both title layout variants
                        visualPosition: N,
                        visualDuration: g,
                        seekRef: C,
                        // for PulseSync: END pass Wave timing to both title layout variants
                        duration: g,
                        progress: I,
                        isVisible: y,
                        isChangingTimecode: C.current,
                        shouldShowArtists: a,
                        shouldKeepMobileSpacingOnPause: r,
                        onMouseEnter: T,
                        onMouseLeave: P,
                        slider: M,
                        children: O,
                    });
                });
            var ik = i(19376),
                iP = i(12670),
                iN = i(95147),
                iI = i.n(iN);
            // for PulseSync: BEGIN Yandex Station device picker and live wave-setting subscription
            const pulseSyncNormalizeStationText = (e) =>
                    String(e ?? '')
                        .trim()
                        .toLowerCase()
                        .replace(/\s+/g, ' '),
                pulseSyncStationNamesMatch = (e, t) => {
                    const a = pulseSyncNormalizeStationText(e),
                        i = pulseSyncNormalizeStationText(t);
                    return !!a && !!i && (a.includes(i) || i.includes(a));
                },
                pulseSyncFindLocalStation = (e, t, a) => {
                    const i = pulseSyncNormalizeStationText(e?.configuration?.glagolDeviceId);
                    if (i) {
                        const e = t.find((e) => !a.has(e) && pulseSyncNormalizeStationText(e?.deviceId) === i);
                        if (e) return e;
                    }
                    const n = pulseSyncNormalizeStationText(e?.configuration?.platform);
                    return n
                        ? (t.find(
                              (t) => !a.has(t) && pulseSyncNormalizeStationText(t?.platform) === n && pulseSyncStationNamesMatch(e?.name, t?.name ?? t?.instanceName),
                          ) ?? null)
                        : null;
                },
                pulseSyncBuildCastDeviceRows = (e = [], t = []) => {
                    const a = new Set();
                    return e.map((e) => {
                        const i = pulseSyncFindLocalStation(e, t, a);
                        return (
                            i && a.add(i),
                            {
                                accountSpeaker: e,
                                localSpeaker: i ?? void 0,
                                canUseLocal: !!i,
                            }
                        );
                    });
                },
                pulseSyncGetCastDevicePlatform = (e) =>
                    pulseSyncNormalizeStationText(
                        e?.accountSpeaker?.configuration?.platform ??
                            e?.accountSpeaker?.configuration?.quasarInfo?.platform ??
                            e?.localSpeaker?.platform ??
                            e?.localSpeaker?.txt?.platform,
                    ),
                pulseSyncGetCastDeviceIconKind = (e) => {
                    if (e?.isThisDevice) return 'computer';
                    const t = pulseSyncGetCastDevicePlatform(e);
                    const a = {
                        yandexstation: 'station',
                        yandexstation_2: 'station',
                        yandexmidi: 'station2',
                        yandexmini: 'mini',
                        yandexmini_2: 'mini',
                        yandexmicro: 'mini',
                        yandexmodule: 'module',
                        yandexmodule_2: 'module',
                        yandex_tv: 'tv',
                        saturn: 'chiron',
                        cucumber: 'cucumber',
                        bergamot: 'mini',
                        plum: 'mini',
                        orion: 'station',
                        monet: 'tv',
                        magritte: 'tv',
                        goya: 'tv',
                    };
                    if (a[t]) return a[t];
                    if (/computer|desktop|windows|win32|darwin|mac|linux|electron/.test(t)) return 'computer';
                    if (/chiron/.test(t)) return 'chiron';
                    if (/cucumber/.test(t)) return 'cucumber';
                    if (/mini/.test(t)) return 'mini';
                    if (/station[_-]?2|station2|yandexstation[_-]?2|yandex_station[_-]?2/.test(t)) return 'station2';
                    return 'station';
                },
                pulseSyncCastDeviceIconPath = {
                    computer:
                        'm14.6,5c1.1024,0 2.01,-0.0016 2.7373,0.0772 0.7461,0.0808 1.4215,0.2556 2.0147,0.6865 0.3394,0.2466 0.6381,0.5453 0.8847,0.8848 0.431,0.5931 0.6057,1.2686 0.6866,2.0146 0.0787,0.7273 0.0771,1.6349 0.0771,2.7373v0.1992c0,1.1024 0.0016,2.01 -0.0771,2.7373 -0.0809,0.7461 -0.2556,1.4215 -0.6866,2.0147 -0.1727,0.2377 -0.3718,0.4545 -0.5918,0.6484h3.3555v2h-22v-2h3.3555c-0.2199,-0.1939 -0.419,-0.4107 -0.5918,-0.6484 -0.4309,-0.5932 -0.6057,-1.2686 -0.6865,-2.0147 -0.0787,-0.7273 -0.0772,-1.6349 -0.0772,-2.7373v-0.1992c0,-1.1024 -0.0016,-2.01 0.0772,-2.7373 0.0808,-0.7461 0.2556,-1.4215 0.6865,-2.0146 0.2466,-0.3394 0.5453,-0.6381 0.8848,-0.8848 0.5932,-0.4309 1.2686,-0.6057 2.0146,-0.6865 0.7273,-0.0787 1.6349,-0.0772 2.7373,-0.0772h5.1992zM9.4008,7c-1.1472,0 -1.9278,0.001 -2.5225,0.0654 -0.5758,0.0624 -0.8583,0.1744 -1.0537,0.3164 -0.1697,0.1233 -0.3191,0.2727 -0.4424,0.4424 -0.142,0.1954 -0.254,0.4779 -0.3164,1.0537 -0.0644,0.5946 -0.0654,1.3754 -0.0654,2.5225v0.1992c0,1.1471 0.001,1.9278 0.0654,2.5225 0.0624,0.5758 0.1744,0.8583 0.3164,1.0537 0.1233,0.1697 0.2727,0.3191 0.4424,0.4424 0.1954,0.1419 0.4779,0.254 1.0537,0.3164 0.5947,0.0644 1.3753,0.0654 2.5225,0.0654h5.1992c1.1472,0 1.9278,-0.001 2.5225,-0.0654 0.5758,-0.0624 0.8583,-0.1745 1.0537,-0.3164 0.1697,-0.1234 0.3191,-0.2727 0.4424,-0.4424 0.1419,-0.1954 0.254,-0.4779 0.3164,-1.0537 0.0644,-0.5947 0.0654,-1.3754 0.0654,-2.5225v-0.1992c0,-1.1471 -0.001,-1.9278 -0.0654,-2.5225 -0.0624,-0.5758 -0.1745,-0.8583 -0.3164,-1.0537 -0.1233,-0.1697 -0.2727,-0.3191 -0.4424,-0.4424 -0.1954,-0.142 -0.4779,-0.254 -1.0537,-0.3164 -0.5947,-0.0644 -1.3753,-0.0654 -2.5225,-0.0654h-5.1992z',
                    module: 'M15.16 3.75L1 11.3l7.84 4.25L23 8l-7.84-4.25zM1 12.95v3.3l7.84 4.25L23 12.95v-3.3L8.84 17.2l-2.6-1.41V17L3.44 15.5v-1.22L1 12.95z',
                    tv: 'M19.6 6.4v7.2H4.4V6.4h15.2zM2 4h2.4h15.2H22v2.4v7.2V16h-2.4H4.4H2v-2.4v-7.2V4zm5 16.2h10v-2.4H7v2.4z',
                    hub: 'M12 5.13l6.6 4.4v9.07h-4.35v-6.1h-4.5v6.1H5.4V9.53l6.6-4.4zM9.75 21H5.4H3v-2.4V8.25l9-6l9 6V18.6V21h-2.4h-4.35h-4.5z',
                    station:
                        'm16.454,3.4996c0,1.23 -1.9942,2.2271 -4.4542,2.2271 -2.46,0 -4.4542,-0.9971 -4.4542,-2.2271s1.9942,-2.2271 4.4542,-2.2271c2.46,0 4.4542,0.9971 4.4542,2.2271zM18.7659,18.3616c0.2514,-0.4236 0.2331,-1.0072 0.2331,-2.236v-10.066c0,-0.1388 -0.0361,-0.2752 -0.1048,-0.3958s-0.1675,-0.2213 -0.2868,-0.2921c-0.1194,-0.0708 -0.2551,-0.1094 -0.3939,-0.112 -0.1387,-0.0025 -0.2758,0.0311 -0.3976,0.0975l-0.0704,0.0384c-3.0073,1.6403 -4.3768,2.4605 -5.7462,2.4605 -1.3695,0 -2.739,-0.8202 -5.7463,-2.4605l-0.0704,-0.0384c-0.1218,-0.0665 -0.2589,-0.1001 -0.3976,-0.0975 -0.1388,0.0025 -0.2745,0.0411 -0.3938,0.112 -0.1193,0.0708 -0.2182,0.1715 -0.2869,0.2921 -0.0687,0.1206 -0.1048,0.257 -0.1048,0.3958v10.066c0,1.229 -0.0183,1.8126 0.2331,2.2361 0.2514,0.4235 0.7725,0.6869 1.8514,1.2754 2.5725,1.4032 3.7439,2.1048 4.9153,2.1047 1.1712,0 2.3425,-0.7015 4.9142,-2.1043 1.0795,-0.5888 1.6008,-0.8523 1.8523,-1.2759z',
                    station2:
                        'm8.4897,3.8078c-0.4164,0.1864 -0.7401,0.3313 -0.9898,0.4862 -0.5817,0.3609 -0.0566,0.6464 0.2313,0.7626 3.6409,1.4686 5.111,2.0123 6.4594,1.7962 0.7603,-0.1218 1.4819,-0.4853 2.5322,-1.0608 0.6573,-0.3602 0.9884,-0.5985 0.1269,-1.0421 -0.312,-0.1607 -0.7566,-0.3262 -1.3895,-0.5574 -4.3376,-1.5844 -4.807,-1.3701 -6.4444,-0.6224 -0.1744,0.0796 -0.3623,0.1644 -0.5261,0.2377h-0zM16.7201,20.8098c1.8489,-0.8276 2.2799,-1.0205 2.2799,-3.2928v-10.022c0,-0.1382 -0.0473,-0.274 -0.1373,-0.3941s-0.2195,-0.2203 -0.3759,-0.2908c-0.1564,-0.0705 -0.3343,-0.1089 -0.5161,-0.1115 -0.1819,-0.0025 -0.3614,0.031 -0.5211,0.0971l-0.0923,0.0382c-1.502,0.842 -2.3794,1.3667 -3.3171,1.5181 -1.4591,0.2356 -3.0642,-0.433 -7.3956,-2.2173l-0.0923,-0.0382c-0.1597,-0.0662 -0.3392,-0.0996 -0.5211,-0.0971 -0.1819,0.0025 -0.3597,0.0409 -0.5161,0.1115 -0.1564,0.0705 -0.2859,0.1708 -0.3759,0.2909 -0.09,0.1201 -0.1373,0.2559 -0.1373,0.3941v10.022c0,0.1362 -0.0005,0.2648 -0.001,0.3863 -0.0085,2.0629 -0.0087,2.1084 2.7328,3.1098 5.5921,2.0427 6.1973,1.7663 8.3082,0.8024 0.0732,-0.0334 0.1483,-0.0677 0.2254,-0.1027 0.1597,-0.0725 0.3105,-0.14 0.4529,-0.2038z',
                    chiron: 'm8.4,3h-0.0557c-1.0775,-0 -1.9665,-0 -2.6817,0.0774 -0.7461,0.0808 -1.4206,0.2555 -2.0138,0.6865 -0.3396,0.2467 -0.6382,0.5454 -0.8849,0.8849 -0.431,0.5932 -0.6057,1.2677 -0.6865,2.0138 -0.0775,0.7151 -0.0775,1.6041 -0.0774,2.6817v1.3114c-0,1.0775 -0,1.9665 0.0774,2.6817 0.0808,0.7461 0.2555,1.4206 0.6865,2.0137 0.2467,0.3396 0.5454,0.6383 0.8849,0.885 0.4135,0.3004 0.8665,0.4763 1.3557,0.5826 0.0183,1.4667 0.1098,2.3134 0.5684,2.9447 0.185,0.2546 0.409,0.4786 0.6637,0.6637 0.7886,0.5729 1.9135,0.5729 4.1634,0.5729h3.2c2.2498,0 3.3748,0 4.1634,-0.5729 0.2546,-0.1851 0.4786,-0.4091 0.6637,-0.6637 0.4586,-0.6313 0.5501,-1.478 0.5683,-2.9447 0.4893,-0.1063 0.9423,-0.2822 1.3557,-0.5826 0.3396,-0.2467 0.6383,-0.5454 0.885,-0.885 0.4309,-0.5931 0.6056,-1.2676 0.6865,-2.0137 0.0774,-0.7152 0.0774,-1.6042 0.0774,-2.6817v-1.3114c0,-1.0775 0,-1.9665 -0.0774,-2.6817 -0.0809,-0.7461 -0.2556,-1.4206 -0.6865,-2.0138 -0.2467,-0.3396 -0.5454,-0.6382 -0.885,-0.8849 -0.5931,-0.431 -1.2676,-0.6057 -2.0137,-0.6865 -0.7152,-0.0775 -1.6042,-0.0775 -2.6817,-0.0774h-7.2557zM15.665,15c1.1118,-0.0001 1.8736,-0.0026 2.4569,-0.0658 0.576,-0.0624 0.8583,-0.1742 1.0537,-0.3162 0.1698,-0.1233 0.3191,-0.2726 0.4424,-0.4424 0.142,-0.1954 0.2538,-0.4777 0.3162,-1.0537 0.0644,-0.5946 0.0658,-1.3747 0.0658,-2.5219v-1.2c0,-1.1472 -0.0014,-1.9273 -0.0658,-2.5219 -0.0624,-0.576 -0.1742,-0.8582 -0.3162,-1.0536 -0.1233,-0.1698 -0.2726,-0.3191 -0.4424,-0.4425 -0.1954,-0.142 -0.4777,-0.2538 -1.0537,-0.3162 -0.5946,-0.0644 -1.3747,-0.0658 -2.5219,-0.0658h-7.2c-1.1472,0 -1.9273,0.0014 -2.5219,0.0658 -0.576,0.0624 -0.8582,0.1742 -1.0536,0.3162 -0.1698,0.1234 -0.3191,0.2727 -0.4425,0.4425 -0.142,0.1954 -0.2538,0.4777 -0.3162,1.0536 -0.0644,0.5947 -0.0658,1.3747 -0.0658,2.5219v1.2c0,1.1472 0.0014,1.9273 0.0658,2.5219 0.0624,0.576 0.1742,0.8583 0.3162,1.0537 0.1234,0.1698 0.2727,0.3191 0.4425,0.4424 0.1954,0.142 0.4777,0.2538 1.0536,0.3162 0.5834,0.0632 1.3452,0.0657 2.457,0.0658h7.33z',
                    cucumber:
                        'm8.2522,6.6265 l2.4062,1.2031c0.8445,0.4223 1.8387,0.4223 2.6832,0l2.4062,-1.2031c0.5159,-0.258 0.5159,-0.9942 0,-1.2522l-2.4062,-1.2031c-0.8445,-0.4223 -1.8387,-0.4223 -2.6832,0l-2.4062,1.2031c-0.5159,0.258 -0.5159,0.9942 0,1.2522zM12,10.2496c-1.4143,0 -3.3087,-0.7801 -5.6832,-2.3403 -0.1386,-0.0911 -0.3009,-0.1396 -0.4668,-0.1396 -0.4694,0 -0.85,0.3806 -0.85,0.85v6.6321c0,0.8018 0.3845,1.5549 1.0339,2.025 2.5073,1.8153 4.4961,2.7229 5.9661,2.7229s3.4587,-0.9076 5.9661,-2.7229c0.6494,-0.4701 1.0339,-1.2232 1.0339,-2.025v-6.632c0,-0.1659 -0.0485,-0.3282 -0.1396,-0.4668 -0.2578,-0.3923 -0.7849,-0.5014 -1.1772,-0.2436 -2.3745,1.5602 -4.2689,2.3403 -5.6832,2.3403z',
                    mini: 'm17.939,8.0749c0,1.64 -2.659,2.9695 -5.939,2.9695 -3.2799,0 -5.9389,-1.3295 -5.9389,-2.9695s2.6589,-2.9695 5.9389,-2.9695c3.28,0 5.939,1.3295 5.939,2.9695zM19.8807,11.0635c0.0781,0.1264 0.1194,0.272 0.1194,0.4206v4.3451c0,2.2093 -3.5817,4 -7.9999,4 -4.4183,0 -8.0001,-1.7908 -8.0001,-4v-4.3451c-0.0002,-0.1486 0.0411,-0.2944 0.1191,-0.4208 0.0781,-0.1265 0.1898,-0.2287 0.3227,-0.2952s0.2817,-0.0946 0.4298,-0.0813c0.148,0.0134 0.2894,0.0678 0.4082,0.1571 2.005,1.2692 4.3492,1.8975 6.7203,1.8011 2.371,0.0964 4.7151,-0.5319 6.7201,-1.8011 0.1189,-0.0891 0.2602,-0.1433 0.4081,-0.1566 0.148,-0.0133 0.2967,0.0148 0.4296,0.0813 0.1329,0.0664 0.2446,0.1686 0.3227,0.2949z',
                },
                pulseSyncRenderCastDeviceIcon = (e, t = '') =>
                    (0, u.jsx)('span', {
                        className: 'PulseSync_castPopoverItemIcon'.concat(t ? ' '.concat(t) : ''),
                        'aria-hidden': !0,
                        children: (0, u.jsx)('svg', {
                            width: '32',
                            height: '32',
                            viewBox: '0 0 24 24',
                            fill: 'none',
                            xmlns: 'http://www.w3.org/2000/svg',
                            children: (0, u.jsx)('path', {
                                d: pulseSyncCastDeviceIconPath[pulseSyncGetCastDeviceIconKind(e)] ?? pulseSyncCastDeviceIconPath.station,
                                fill: 'currentColor',
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                            }),
                        }),
                    }),
                pulseSyncGetActiveCastDeviceRow = (e, t) => (t ? e.find((e) => !e.isThisDevice && e.accountSpeaker?.id === t) : null),
                pulseSyncCastConnectDelay = (e) => new Promise((t) => setTimeout(t, e)),
                pulseSyncSelectYandexStationSpeaker = async (e) => {
                    let t = null;
                    for (let a = 0; a <= 3; a += 1) {
                        try {
                            if (
                                ((t = window.pulseSyncYandexStationCast?.activate
                                    ? await window.pulseSyncYandexStationCast.activate(e)
                                    : await window.musicDesktop?.pulsesync.station.selectSpeaker?.(e)),
                                t?.ok)
                            )
                                return t;
                        } catch (e) {
                            t = {
                                ok: !1,
                                error: e,
                            };
                        }
                        a < 3 && (await pulseSyncCastConnectDelay(600));
                    }
                    return (
                        t ?? {
                            ok: !1,
                        }
                    );
                },
                pulseSyncIsYandexStationCastEnabled = () => {
                    try {
                        return window.__pulseSyncYandexStationCastEnabled ?? window.ENABLE_YANDEX_STATION_CAST?.() ?? !0;
                    } catch (e) {
                        return !0;
                    }
                },
                pulseSyncApplyYandexStationState = (e, t) => {
                    const a = Array.isArray(e?.accountSpeakers) ? e.accountSpeakers : [],
                        i = Array.isArray(e?.localSpeakers) ? e.localSpeakers : [];
                    t.setActiveSpeakerId(e?.activeSpeaker?.accountSpeaker?.id ?? window.pulseSyncYandexStationCast?.activeSpeakerId ?? null);
                    t.setDeviceRows([
                        {
                            isThisDevice: !0,
                        },
                        ...pulseSyncBuildCastDeviceRows(a, i),
                    ]);
                    t.setDevicesLoaded(Boolean(e?.firstFlowCompleted));
                    t.setDevicesLoading(Boolean(e?.refreshing));
                },
                pulseSyncGetCastPopoverShift = (e) => {
                    const t = e?.getBoundingClientRect?.();
                    if (!t) return 0;
                    const a = 320,
                        i = 12,
                        n = window.innerWidth || document.documentElement?.clientWidth || a,
                        r = t.left + t.width / 2,
                        l = r - a / 2,
                        s = r + a / 2;
                    if (l < i) return i - l;
                    if (s > n - i) return n - i - s;
                    return 0;
                },
                pulseSyncWaveCastControl = (0, m.PA)((e) => {
                    let { buttonClassName: castButtonClassName, disabled: castDisabled } = e,
                        { formatMessage: castFormatMessage } = (0, v.A)(),
                        [castPopoverOpen, setCastPopoverOpen] = (0, p.useState)(!1),
                        [castPopoverMounted, setCastPopoverMounted] = (0, p.useState)(!1),
                        [castPopoverShift, setCastPopoverShift] = (0, p.useState)(0),
                        [castDeviceRows, setCastDeviceRows] = (0, p.useState)([]),
                        [castActiveSpeakerId, setCastActiveSpeakerId] = (0, p.useState)(window.pulseSyncYandexStationCast?.activeSpeakerId ?? null),
                        [castConnectingSpeakerId, setCastConnectingSpeakerId] = (0, p.useState)(null),
                        [castConnectionErrorSpeakerId, setCastConnectionErrorSpeakerId] = (0, p.useState)(null),
                        [castDevicesLoading, setCastDevicesLoading] = (0, p.useState)(!1),
                        [castDevicesLoaded, setCastDevicesLoaded] = (0, p.useState)(!1),
                        [castHoveredDeviceKey, setCastHoveredDeviceKey] = (0, p.useState)(null),
                        [castEnabled, setCastEnabled] = (0, p.useState)(pulseSyncIsYandexStationCastEnabled()),
                        castRootRef = (0, p.useRef)(null),
                        castCloseTimerRef = (0, p.useRef)(null),
                        loadCastDevices = (0, p.useCallback)(async () => {
                            if (!castEnabled) {
                                setCastDeviceRows([]);
                                setCastDevicesLoaded(!1);
                                setCastDevicesLoading(!1);
                                return;
                            }
                            try {
                                setCastDevicesLoading(!0);
                                const castState = await (window.musicDesktop?.pulsesync.station.getState?.() ?? Promise.resolve(null));
                                pulseSyncApplyYandexStationState(castState, {
                                    setActiveSpeakerId: setCastActiveSpeakerId,
                                    setDeviceRows: setCastDeviceRows,
                                    setDevicesLoaded: setCastDevicesLoaded,
                                    setDevicesLoading: setCastDevicesLoading,
                                });
                            } catch (castError) {
                                console.warn('Failed to load Yandex Station cast devices', castError);
                                setCastDeviceRows([]);
                                setCastDevicesLoaded(!1);
                                setCastDevicesLoading(!1);
                            }
                        }, [castEnabled]),
                        closeCastPopover = (0, p.useCallback)(() => {
                            setCastPopoverOpen(!1);
                            clearTimeout(castCloseTimerRef.current);
                            castCloseTimerRef.current = setTimeout(() => {
                                setCastPopoverMounted(!1);
                                setCastHoveredDeviceKey(null);
                            }, 160);
                        }, []),
                        recalcCastPopoverShift = (0, p.useCallback)(() => {
                            setCastPopoverShift(pulseSyncGetCastPopoverShift(castRootRef.current));
                        }, []),
                        openCastPopover = (0, p.useCallback)(() => {
                            clearTimeout(castCloseTimerRef.current);
                            setCastPopoverMounted(!0);
                            requestAnimationFrame(() => {
                                recalcCastPopoverShift();
                                setCastPopoverOpen(!0);
                            });
                        }, [recalcCastPopoverShift]),
                        toggleCastPopover = (0, p.useCallback)(() => {
                            castPopoverOpen ? closeCastPopover() : openCastPopover();
                        }, [castPopoverOpen, closeCastPopover, openCastPopover]);
                    (0, p.useEffect)(() => {
                        void loadCastDevices();
                    }, [loadCastDevices]);
                    (0, p.useEffect)(() => {
                        const castStateHandler = (castState) => {
                            pulseSyncApplyYandexStationState(castState, {
                                setActiveSpeakerId: setCastActiveSpeakerId,
                                setDeviceRows: setCastDeviceRows,
                                setDevicesLoaded: setCastDevicesLoaded,
                                setDevicesLoading: setCastDevicesLoading,
                            });
                        };
                        const unsubscribeCastState = window.musicDesktop?.pulsesync.station.onState?.(castStateHandler);
                        return () => {
                            'function' == typeof unsubscribeCastState && unsubscribeCastState();
                        };
                    }, []);
                    (0, p.useEffect)(() => {
                        const castChangeHandler = (event) => {
                            setCastActiveSpeakerId(event.detail?.activeSpeakerId ?? null);
                        };
                        window.addEventListener('pulse-sync-yandex-station-cast-change', castChangeHandler);
                        return () => {
                            window.removeEventListener('pulse-sync-yandex-station-cast-change', castChangeHandler);
                        };
                    }, []);
                    (0, p.useEffect)(() => {
                        const castSettingHandler = (event) => {
                            const nextCastEnabled = event.detail?.enabled ?? pulseSyncIsYandexStationCastEnabled();
                            setCastEnabled(nextCastEnabled);
                            nextCastEnabled
                                ? (setCastDevicesLoaded(!1), void loadCastDevices())
                                : (closeCastPopover(), setCastDeviceRows([]), setCastActiveSpeakerId(null), setCastDevicesLoaded(!1), setCastDevicesLoading(!1));
                        };
                        window.addEventListener('pulse-sync-yandex-station-cast-setting-change', castSettingHandler);
                        return () => {
                            window.removeEventListener('pulse-sync-yandex-station-cast-setting-change', castSettingHandler);
                        };
                    }, [closeCastPopover, loadCastDevices]);
                    (0, p.useEffect)(() => () => clearTimeout(castCloseTimerRef.current), []);
                    (0, p.useEffect)(() => {
                        if (!castPopoverMounted) return;
                        const outsidePointerHandler = (event) => {
                            castRootRef.current?.contains?.(event.target) || closeCastPopover();
                        };
                        document.addEventListener('pointerdown', outsidePointerHandler, !0);
                        return () => {
                            document.removeEventListener('pointerdown', outsidePointerHandler, !0);
                        };
                    }, [castPopoverMounted, closeCastPopover]);
                    (0, p.useEffect)(() => {
                        if (!castPopoverMounted) return;
                        const resizeCastHandler = () => recalcCastPopoverShift();
                        recalcCastPopoverShift();
                        window.addEventListener('resize', resizeCastHandler);
                        return () => {
                            window.removeEventListener('resize', resizeCastHandler);
                        };
                    }, [castPopoverMounted, recalcCastPopoverShift]);
                    return castDisabled || !castEnabled
                        ? null
                        : (0, u.jsxs)('div', {
                              ref: castRootRef,
                              style: {
                                  position: 'relative',
                                  display: 'flex',
                                  alignItems: 'center',
                              },
                              children: [
                                  (0, u.jsx)(P.$, {
                                      className: castButtonClassName,
                                      radius: 'round',
                                      size: 'xxxs',
                                      variant: 'text',
                                      withRipple: !1,
                                      'aria-label': castFormatMessage({
                                          id: 'player-actions.cast',
                                      }),
                                      icon: castActiveSpeakerId
                                          ? pulseSyncRenderCastDeviceIcon(
                                                pulseSyncGetActiveCastDeviceRow(castDeviceRows, castActiveSpeakerId),
                                                'PulseSync_castPlayerButtonIcon',
                                            )
                                          : (0, u.jsx)(Z.I, {
                                                variant: 'cast',
                                                size: 'xs',
                                            }),
                                      onClick: toggleCastPopover,
                                      style: castActiveSpeakerId
                                          ? {
                                                color: 'var(--ym-controls-color-primary-text-hovered)',
                                            }
                                          : void 0,
                                  }),
                                  castPopoverMounted &&
                                      (0, u.jsx)('div', {
                                          className: 'PulseSync_castPopover',
                                          style: {
                                              opacity: castPopoverOpen ? 1 : 0,
                                              transform: 'translateX('.concat(castPopoverShift, 'px) ').concat(castPopoverOpen ? 'translateY(0)' : 'translateY(10px)'),
                                              pointerEvents: castPopoverOpen ? 'auto' : 'none',
                                          },
                                          children: !castDevicesLoaded
                                              ? (0, u.jsx)('div', {
                                                    className: 'PulseSync_castPopoverStatus PulseSync_castPopoverStatus_shimmer',
                                                    children: 'Поиск устройств...',
                                                })
                                              : (0, u.jsxs)('div', {
                                                    className: 'PulseSync_castPopoverContent',
                                                    children: [
                                                        (0, u.jsx)(
                                                            'div',
                                                            {
                                                                className: 'PulseSync_castPopoverStatus PulseSync_castPopoverStatus_refreshing'.concat(
                                                                    castDevicesLoading ? ' PulseSync_castPopoverStatus_visible' : '',
                                                                ),
                                                                children: 'Обновляем список устройств...',
                                                            },
                                                            'cast-refreshing',
                                                        ),
                                                        castDeviceRows.length
                                                            ? castDeviceRows.map((castRow) => {
                                                                  const isUnavailable = !castRow.isThisDevice && !castRow.canUseLocal,
                                                                      castRoomName = castRow.isThisDevice
                                                                          ? void 0
                                                                          : (castRow.accountSpeaker?.roomName ?? castRow.accountSpeaker?.householdName),
                                                                      castSpeakerId = castRow.accountSpeaker?.id,
                                                                      isConnecting =
                                                                          !castRow.isThisDevice &&
                                                                          castConnectingSpeakerId === castSpeakerId &&
                                                                          castActiveSpeakerId !== castSpeakerId,
                                                                      hasConnectionError =
                                                                          !castRow.isThisDevice &&
                                                                          castConnectionErrorSpeakerId === castSpeakerId &&
                                                                          castActiveSpeakerId !== castSpeakerId,
                                                                      isDisabled = isUnavailable || !!castConnectingSpeakerId,
                                                                      isConnected =
                                                                          (castRow.isThisDevice && !castActiveSpeakerId) ||
                                                                          (!castRow.isThisDevice && castActiveSpeakerId === castSpeakerId),
                                                                      castStatusText = castRow.isThisDevice
                                                                          ? castActiveSpeakerId
                                                                              ? 'Отключить колонку'
                                                                              : 'Сейчас выбрано'
                                                                          : isConnecting
                                                                            ? 'Подключение...'
                                                                            : hasConnectionError
                                                                              ? 'Ошибка подключения'
                                                                              : castActiveSpeakerId === castSpeakerId
                                                                                ? 'Подключено'
                                                                                : castRow.canUseLocal
                                                                                  ? 'В сети'
                                                                                  : 'Вне локальной сети',
                                                                      castRowKey = castRow.isThisDevice
                                                                          ? 'pulse-sync-this-device'
                                                                          : (castRow.accountSpeaker?.id ??
                                                                            castRow.accountSpeaker?.name ??
                                                                            castRow.localSpeaker?.deviceId);
                                                                  return (0, u.jsxs)(
                                                                      'button',
                                                                      {
                                                                          type: 'button',
                                                                          className: 'PulseSync_castPopoverItem'.concat(
                                                                              isConnected || (!isDisabled && castHoveredDeviceKey === castRowKey)
                                                                                  ? ' PulseSync_castPopoverItem_active'
                                                                                  : '',
                                                                          ),
                                                                          disabled: isDisabled,
                                                                          onClick: isDisabled
                                                                              ? void 0
                                                                              : async () => {
                                                                                    if (castRow.isThisDevice) {
                                                                                        window.pulseSyncYandexStationCast?.clear
                                                                                            ? await window.pulseSyncYandexStationCast.clear()
                                                                                            : await window.musicDesktop?.pulsesync.station.clearSpeaker?.();
                                                                                        setCastActiveSpeakerId(null);
                                                                                        setCastConnectingSpeakerId(null);
                                                                                        setCastConnectionErrorSpeakerId(null);
                                                                                        closeCastPopover();
                                                                                        return;
                                                                                    }
                                                                                    const targetSpeakerId = castRow.accountSpeaker?.id;
                                                                                    if (!targetSpeakerId) return;
                                                                                    setCastConnectingSpeakerId(targetSpeakerId);
                                                                                    setCastConnectionErrorSpeakerId(null);
                                                                                    try {
                                                                                        const selectResult = await pulseSyncSelectYandexStationSpeaker(targetSpeakerId);
                                                                                        selectResult?.ok
                                                                                            ? (setCastActiveSpeakerId(targetSpeakerId),
                                                                                              setCastConnectionErrorSpeakerId(null),
                                                                                              closeCastPopover())
                                                                                            : (setCastConnectionErrorSpeakerId(targetSpeakerId),
                                                                                              console.warn('Failed to select Yandex Station cast device', selectResult));
                                                                                    } catch (selectError) {
                                                                                        setCastConnectionErrorSpeakerId(targetSpeakerId);
                                                                                        console.warn('Failed to select Yandex Station cast device', selectError);
                                                                                    } finally {
                                                                                        setCastConnectingSpeakerId(null);
                                                                                    }
                                                                                },
                                                                          onMouseEnter: isDisabled ? void 0 : () => setCastHoveredDeviceKey(castRowKey),
                                                                          onMouseLeave: isDisabled ? void 0 : () => setCastHoveredDeviceKey(null),
                                                                          children: [
                                                                              pulseSyncRenderCastDeviceIcon(castRow),
                                                                              (0, u.jsx)('div', {
                                                                                  style: {
                                                                                      display: 'flex',
                                                                                      alignItems: 'flex-start',
                                                                                      flexDirection: 'column',
                                                                                      minWidth: 0,
                                                                                      flex: '1 1 auto',
                                                                                  },
                                                                                  children: [
                                                                                      (0, u.jsx)('span', {
                                                                                          style: {
                                                                                              display: 'flex',
                                                                                              gap: '5px',
                                                                                              alignItems: 'baseline',
                                                                                              minWidth: 0,
                                                                                              maxWidth: '100%',
                                                                                          },
                                                                                          children: [
                                                                                              (0, u.jsx)('span', {
                                                                                                  className: 'PulseSync_castPopoverItemTitle',
                                                                                                  children: castRow.isThisDevice
                                                                                                      ? 'Это устройство'
                                                                                                      : (castRow.accountSpeaker?.name ??
                                                                                                        castRow.accountSpeaker?.id ??
                                                                                                        'Yandex Station'),
                                                                                              }),
                                                                                              castRoomName &&
                                                                                                  (0, u.jsx)('span', {
                                                                                                      className:
                                                                                                          'PulseSync_castPopoverItemMeta PulseSync_castPopoverItemRoom',
                                                                                                      children: (0, u.jsx)('span', {
                                                                                                          className: 'PulseSync_castPopoverItemRoomText',
                                                                                                          children: castRoomName,
                                                                                                      }),
                                                                                                  }),
                                                                                          ],
                                                                                      }),
                                                                                      (0, u.jsx)('span', {
                                                                                          className: 'PulseSync_castPopoverItemMeta'
                                                                                              .concat(isConnecting ? ' PulseSync_castPopoverItemMeta_shimmer' : '')
                                                                                              .concat(hasConnectionError ? ' PulseSync_castPopoverItemMeta_error' : ''),
                                                                                          children: castStatusText,
                                                                                      }),
                                                                                  ],
                                                                              }),
                                                                              isConnected &&
                                                                                  (0, u.jsx)('span', {
                                                                                      children: '✓',
                                                                                  }),
                                                                          ],
                                                                      },
                                                                      castRowKey,
                                                                  );
                                                              })
                                                            : (0, u.jsx)('div', {
                                                                  className: 'PulseSync_castPopoverStatus',
                                                                  children: 'Устройства не найдены',
                                                              }),
                                                    ],
                                                }),
                                      }),
                              ],
                          });
                });
            const pulseSyncWaveButton = P, pulseSyncWaveIcon = Z;
            function usePulseSyncWaveSetting(key, defaultValue) {
                const [value, setValue] = (0, p.useState)(() => {
                    try {
                        return (
                            (key === 'modSettings.vibeAnimationEnhancement.improvedWaveLayout' ? window.IMPROVED_WAVE_LAYOUT?.() : undefined) ??
                            window.nativeSettings?.get?.(key) ??
                            defaultValue
                        );
                    } catch {
                        return defaultValue;
                    }
                });
                (0, p.useEffect)(() => {
                    const unsubscribe = window.musicDesktop?.pulsesync.settings.onChange?.((settingKey, settingValue) => {
                        if (settingKey === key) setValue(defaultValue ? settingValue !== false : !!settingValue);
                    });
                    return () => {
                        if (typeof unsubscribe === 'function') unsubscribe();
                    };
                }, [key, defaultValue]);
                return value;
            }
            // for PulseSync: END Yandex Station device picker and live wave-setting subscription
            // for PulseSync: BEGIN use the shared Wave artwork palette
            const waveCover = i(913004);
            // for PulseSync: END use the shared Wave artwork palette
            let iE = (0, m.PA)(() => {
                    var e, t;
                    // for PulseSync: BEGIN access experiments for the yellow wave play button preference
                    let { vibe: i, sonataState: a, advert: n, freePlayerAccess: r, freeAccess: s, experiments: pulseSyncExperiments } = (0, Y.g)(),
                    // for PulseSync: END access experiments for the yellow wave play button preference
                        { openIntroModalFromPlay: o } = (0, tg.e)(),
                        { formatMessage: l } = (0, v.A)(),
                        c = (0, th.e)(),
                        d = (0, t_.P)(),
                        m = (0, ts.g)(),
                        b = (0, tm.r)(),
                        h = (0, to.D)(),
                        { screen: g } = (0, M.j)(),
                        A = null == g ? void 0 : g.pageIdForFrom,
                        // for PulseSync: BEGIN repeat and shuffle hooks plus the improved wave-layout preference
                        shuffleSetter = (0, tL.e)(),
                        repeatSetter = (0, tR.A)(),
                        pulseSyncImprovedWaveLayoutEnabled = usePulseSyncWaveSetting('modSettings.vibeAnimationEnhancement.improvedWaveLayout', true);
                        // for PulseSync: END repeat and shuffle hooks plus the improved wave-layout preference
                    (0, ik.e)();
                    let { togglePlay: C } = (0, K.B)({
                            seeds: null != (t = null == (e = i.meta) ? void 0 : e.seeds) ? t : [],
                            pageIdForFrom: A,
                            blockIdForFrom: ''.concat(x.EntityTypes.MyWave, '-').concat(eW.U.RADIO),
                            onPlayInterrupted: () => r.showRestrictionModal(tu.W.Interrupted),
                        }),
                        y = a.entityMeta,
                        // for PulseSync: BEGIN wave shuffle and repeat actions with player telemetry
                        pulseSyncShuffleClick = (0, j.c)((event) => {
                            event.stopPropagation();
                            shuffleSetter(a);
                            h({ actionType: x.ActionType.ChangeShuffle });
                        }),
                        pulseSyncRepeatClick = (0, j.c)((event) => {
                            event.stopPropagation();
                            repeatSetter(a);
                            h({ actionType: x.ActionType.ChangeRepeatSettings });
                        }),
                        // for PulseSync: END wave shuffle and repeat actions with player telemetry
                        T = (0, j.c)((e) => {
                            (e.stopPropagation(), null == c || c.moveForward(), h({ actionType: x.ActionType.Skip, userInteractionType: x.UserInteractionType.Tap }));
                        }),
                        N = (0, j.c)((e) => {
                            (e.stopPropagation(),
                                null == c || c.moveBackward(),
                                h({ actionType: x.ActionType.Backskip, userInteractionType: x.UserInteractionType.Tap }));
                        }),
                        I = (0, j.c)(() => {
                            if (n.isAdvertShown) {
                                var e;
                                null == b || null == (e = b.audioAdvertPlayback) || e.togglePause();
                                return;
                            }
                            if (!o())
                                if (y)
                                    (null == c || c.togglePause(),
                                        h({ actionType: a.isPlaying ? x.ActionType.Pause : x.ActionType.Play, userInteractionType: x.UserInteractionType.Tap }));
                                else {
                                    if (s.isVibeStartRestricted) return void r.showRestrictionModal(tu.W.Interrupted);
                                    (C(), a.isPlaying || m());
                                }
                        }),
                        E = (0, j.c)(() => {
                            d() || I();
                        }),
                        S = (0, j.c)((e) => {
                            e || r.hideRestrictionModal();
                        }),
                        // for PulseSync: BEGIN read the yellow wave play button experiment override
                        pulseSyncYellowButtonEnabled = pulseSyncExperiments.checkExperiment(X.z.WebNextPlayerBarYellowButton, 'on'),
                        // for PulseSync: END read the yellow wave play button experiment override
                        B = (0, p.useCallback)(
                            () =>
                                (0, u.jsx)(ty.D, {
                                    // for PulseSync: BEGIN apply the yellow wave play button class
                                    className: (0, _.$)(iI().playButton, {
                                        [iI().playButton_playing]: a.isPlaying,
                                        [iI().playButton_withYellowPlayButton]: pulseSyncYellowButtonEnabled,
                                    }),
                                    // for PulseSync: END apply the yellow wave play button class
                                    isPlaying: a.isPlaying,
                                    iconClassName: iI().playButtonIcon,
                                    color: 'secondary',
                                    onClick: E,
                                }),
                            // for PulseSync: BEGIN refresh the wave play button when its color preference changes
                            [E, a.isPlaying, pulseSyncYellowButtonEnabled],
                            // for PulseSync: END refresh the wave play button when its color preference changes
                        ),
                        w = (0, k.L)(() => {
                            let e = y ? 'fullTracks' : 'vibe';
                            return r.shownRestrictionModal === iP.h.PlayerAuthorization
                                ? (0, u.jsx)(tf.Z, { isOpened: !0, placement: 'top', textVariant: e, transform: !1, onOpenChange: S, renderChildren: B })
                                : r.shownRestrictionModal === iP.h.PlayerSubscription
                                  ? (0, u.jsx)(tx.S, { isOpened: !0, placement: 'top', textVariant: e, transform: !1, onOpenChange: S, renderChildren: B })
                                  : B();
                        });
                    return (0, u.jsxs)('div', {
                        className: iI().root,
                        children: [
                            // for PulseSync: BEGIN shuffle button in the improved wave layout
                            pulseSyncImprovedWaveLayoutEnabled &&
                                !a.isGenerativeContext &&
                                (a.canShuffle || a.canChangeRepeatMode) &&
                                (0, u.jsx)(P.$, {
                                    className: iI().skipButton,
                                    variant: 'text',
                                    radius: 'round',
                                    disabled: !a.canShuffle,
                                    'aria-hidden': !a.canShuffle,
                                    withRipple: false,
                                    'aria-label': l({ id: 'player-actions.shuffle' }),
                                    icon: (0, u.jsx)(Z.I, { variant: 'shuffle', size: 'xs' }),
                                    onClick: pulseSyncShuffleClick,
                                    style: a.shuffle ? { color: 'var(--ym-controls-color-primary-text-hovered)' } : undefined,
                                }),
                            // for PulseSync: END shuffle button in the improved wave layout
                            !a.isGenerativeContext &&
                                (0, u.jsx)(P.$, {
                                    className: iI().skipButton,
                                    variant: 'text',
                                    radius: 'round',
                                    disabled: !a.canMoveBackward,
                                    focusableWhenDisabled: !0,
                                    withRipple: !1,
                                    'aria-label': l({ id: 'player-actions.previous-track' }),
                                    icon: (0, u.jsx)(Z.I, { variant: 'previous', size: 'xs' }),
                                    onClick: N,
                                    'data-test-id': f.Kq.sonata.PREVIOUS_TRACK_BUTTON,
                                }),
                            w,
                            !a.isGenerativeContext &&
                                (0, u.jsx)(P.$, {
                                    className: iI().skipButton,
                                    variant: 'text',
                                    radius: 'round',
                                    disabled: !a.canMoveForward,
                                    focusableWhenDisabled: !0,
                                    withRipple: !1,
                                    'aria-label': l({ id: 'player-actions.next-track' }),
                                    icon: (0, u.jsx)(Z.I, { variant: 'next', size: 'xs' }),
                                    onClick: T,
                                    'data-test-id': f.Kq.sonata.NEXT_TRACK_BUTTON,
                                }),
                            // for PulseSync: BEGIN repeat button in the improved wave layout
                            pulseSyncImprovedWaveLayoutEnabled &&
                                !a.isGenerativeContext &&
                                (a.canShuffle || a.canChangeRepeatMode) &&
                                (0, u.jsx)(P.$, {
                                    className: iI().skipButton,
                                    variant: 'text',
                                    radius: 'round',
                                    disabled: !a.canChangeRepeatMode,
                                    'aria-hidden': !a.canChangeRepeatMode,
                                    withRipple: false,
                                    'aria-label': (0, tM.z)(a.repeatMode, l),
                                    icon: (0, u.jsx)(Z.I, { variant: a.repeatMode === tw.pM.ONE ? 'repeat_one' : 'repeat', size: 'xs' }),
                                    onClick: pulseSyncRepeatClick,
                                    style: a.repeatMode !== tw.pM.NONE ? { color: 'var(--ym-controls-color-primary-text-hovered)' } : undefined,
                                }),
                            // for PulseSync: END repeat button in the improved wave layout
                        ],
                    });
                }),
                iS = (0, m.PA)((e) => {
                    var t, i;
                    const [, refreshCastControl] = (0, p.useReducer)((revision) => revision + 1, 0);
                    (0, p.useEffect)(() => {
                        window.addEventListener('pulse-sync-yandex-station-cast-setting-change', refreshCastControl);
                        return () => window.removeEventListener('pulse-sync-yandex-station-cast-setting-change', refreshCastControl);
                    }, [refreshCastControl]);
                    let { albumCoverClassName: a, className: n, presentation: r } = e,
                        {
                            vibe: s,
                            sonataState: o,
                            advert: l,
                            fullscreenPlayer: c,
                            settings: { isMobile: d },
                            freePlayerAccess: m,
                            freeAccess: b,
                            user: h,
                        } = (0, Y.g)(),
                        { openIntroModalFromPlay: g } = (0, tg.e)(),
                        { formatMessage: A } = (0, v.A)(),
                        C = (0, tv.z)(),
                        y = (0, td.d)(),
                        { isLiked: T, handleLike: P, isDisliked: N, handleDislike: I } = (0, tj.f)(),
                        E = (0, th.e)(),
                        // for PulseSync: BEGIN read the improved wave-layout preference
                        pulseSyncImprovedWaveLayoutEnabled = usePulseSyncWaveSetting('modSettings.vibeAnimationEnhancement.improvedWaveLayout', true),
                        // for PulseSync: END read the improved wave-layout preference
                        S = (0, t_.P)(),
                        B = (0, ts.g)(),
                        w = (0, tm.r)(),
                        O = (0, to.D)(),
                        { screen: R } = (0, M.j)(),
                        L = null == R ? void 0 : R.pageIdForFrom,
                        { togglePlay: V } = (0, K.B)({
                            seeds: null != (i = null == (t = s.meta) ? void 0 : t.seeds) ? i : [],
                            pageIdForFrom: L,
                            blockIdForFrom: ''.concat(x.EntityTypes.MyWave, '-').concat(eW.U.RADIO),
                            onPlayInterrupted: () => m.showRestrictionModal(tu.W.Interrupted),
                        }),
                        W = o.entityMeta,
                        D = null == W ? void 0 : W.mainAlbum,
                        { playButtonVariant: F, shouldKeepMobileSpacingOnPause: U } = r,
                        z = 'inline' !== F,
                        H = !o.isPlaying && !W,
                        X = (0, j.c)(() => {
                            if (o.entityMeta) {
                                if (c.modal.isOpened) return void c.modal.close();
                                c.modal.open();
                            }
                        });
                    // for PulseSync: BEGIN open and restore fallback synchronized lyrics from wave controls
                    const screenNavigation = (0, tk.S)(),
                        pulseSyncWaveSyncLyricsAvailable =
                            !!(null == W ? void 0 : W.isSyncLyricsAvailable) ||
                            !!(null == W ? void 0 : W.isSyncLyricsAvailableWithOfflineFeature) ||
                            !!(null == W ? void 0 : W.hasSyncLyrics) ||
                            (!!(null == W ? void 0 : W.id) &&
                                'function' == typeof (null == c.syncLyrics ? void 0 : c.syncLyrics.hasLyricsForTrack) &&
                                c.syncLyrics.hasLyricsForTrack(W.id)),
                        pulseSyncOpenWaveSyncLyrics = (0, j.c)(() => {
                            (c.showSyncLyrics(),
                                screenNavigation({
                                    to: x.AppScreen.PlayerScreen,
                                }));
                        }),
                        pulseSyncWaveSyncLyricsLabel = ''
                            .concat(
                                A({
                                    id: 'interface-actions.open-sync-lyrics',
                                }),
                                ' ',
                            )
                            .concat(
                                A({
                                    id: 'warning-messages.can-break-accessibility',
                                }),
                            );
                    (0, p.useEffect)(() => {
                        const trackId = null == W ? void 0 : W.id;
                        const nativeAvailable =
                            (null == W ? void 0 : W.isSyncLyricsAvailable) ||
                            (null == W ? void 0 : W.isSyncLyricsAvailableWithOfflineFeature) ||
                            (null == W ? void 0 : W.hasSyncLyrics);
                        let lrclibEnabled = !0;
                        try {
                            lrclibEnabled = window.nativeSettings?.get('modSettings.lrclib.useText') !== !1;
                        } catch (_error) {}
                        if (
                            trackId &&
                            !(null == W ? void 0 : W.isNonMusic) &&
                            c.syncLyrics.currentTrackId !== trackId &&
                            (nativeAvailable || lrclibEnabled || W.trackSource === 'UGC')
                        ) {
                            c.syncLyrics.getData(trackId);
                        }
                        c.syncLyrics.prefetchNextTrack(E);
                    }, [
                        null == W ? void 0 : W.id,
                        null == W ? void 0 : W.isSyncLyricsAvailable,
                        null == W ? void 0 : W.isSyncLyricsAvailableWithOfflineFeature,
                        null == W ? void 0 : W.hasSyncLyrics,
                        null == W ? void 0 : W.isNonMusic,
                        null == W ? void 0 : W.trackSource,
                        c.syncLyrics.currentTrackId,
                        c.syncLyrics,
                        E,
                    ]);
                    (0, p.useEffect)(() => {
                        const trackId = null == W ? void 0 : W.id;
                        if (!trackId || String(c.syncLyrics.currentTrackId) !== String(trackId) || c.syncLyrics.isLoadingForTrack(trackId)) return;
                        if (c.syncLyrics.isRejected || c.syncLyrics.hasInvalidLyrics) {
                            c.autoHideSyncLyrics(trackId);
                            return;
                        }
                        if (trackId && c.syncLyrics.hasLyricsForTrack(trackId)) c.restoreSyncLyricsForTrack(trackId);
                    }, [
                        null == W ? void 0 : W.id,
                        c.syncLyrics.currentTrackId,
                        c.syncLyrics.lines,
                        c.syncLyrics.isLoading,
                        c.syncLyrics.isRejected,
                        c.syncLyrics.hasInvalidLyrics,
                        c.syncLyrics.isResolved,
                        c.syncLyrics,
                        c.autoHideSyncLyrics,
                        c.restoreSyncLyricsForTrack,
                    ]);
                    // for PulseSync: END open and restore fallback synchronized lyrics from wave controls
                    (0, p.useEffect)(() => {
                        if (!o.isGenerativeContext)
                            return (
                                null == C || C.addShortcutsListener(tb.M.MAIN, tp.l.TOGGLE_FULLSCREEN_PLAYER, X),
                                null == C || C.addShortcutsListener(tb.M.MAIN, tp.l.LIKE, P),
                                null == C || C.addShortcutsListener(tb.M.MAIN, tp.l.DISLIKE, I),
                                () => {
                                    (null == C || C.removeShortcutsListener(tb.M.MAIN, tp.l.TOGGLE_FULLSCREEN_PLAYER),
                                        null == C || C.removeShortcutsListener(tb.M.MAIN, tp.l.LIKE),
                                        null == C || C.removeShortcutsListener(tb.M.MAIN, tp.l.DISLIKE));
                                }
                            );
                    }, [I, P, C, o.isGenerativeContext, o.entityMeta, X]);
                    let G = (0, j.c)(async (e, t) => {
                            (t && (0, e_.P)(t, tQ().ripple), await y(o, e));
                        }),
                        pulseSyncMigration_W_24 = (0, j.c)((e) => {
                            ((0, e_.P)(e, tQ().ripple), I());
                        }),
                        $ = (0, j.c)((e) => {
                            (e && !d && (0, e_.P)(e, tQ().ripple), P());
                        }),
                        Z = (0, j.c)(() => {
                            if (l.isAdvertShown) {
                                var e;
                                null == w || null == (e = w.audioAdvertPlayback) || e.togglePause();
                                return;
                            }
                            if (!g())
                                if (W)
                                    (null == E || E.togglePause(),
                                        O({ actionType: o.isPlaying ? x.ActionType.Pause : x.ActionType.Play, userInteractionType: x.UserInteractionType.Tap }));
                                else {
                                    if (b.isVibeStartRestricted) return;
                                    (V(), o.isPlaying || B());
                                }
                        }),
                        J = (0, j.c)((e) => {
                            ('cover' !== F && (0, e_.P)(e, tQ().ripple), S() || Z());
                        });
                    (0, p.useEffect)(
                        () => (
                            null == C || C.addShortcutsListener(tb.M.MAIN, tp.l.TOGGLE_PLAY, Z),
                            () => {
                                null == C || C.removeShortcutsListener(tb.M.MAIN, tp.l.TOGGLE_PLAY);
                            }
                        ),
                        [Z, C],
                    );
                    let Q = (0, p.useCallback)(
                            () =>
                                (0, u.jsx)(ty.D, {
                                    className: (0, _.$)({
                                        [tQ().button]: 'cover' !== F,
                                        [tQ().button_play]: 'cover' !== F && !o.isPlaying,
                                        [tQ().button_standalone]: 'standalone' === F,
                                        [tQ().playButton]: 'cover' === F,
                                    }),
                                    isPlaying: o.isPlaying,
                                    iconSize: !z && U ? 'xs' : void 0,
                                    iconClassName: (0, _.$)({ [tQ().standalonePlayButtonIcon]: z, [tQ().playButtonIcon]: 'cover' === F }),
                                    color: 'secondary',
                                    onClick: J,
                                }),
                            [J, o.isPlaying, F, z, U],
                        ),
                        ee = (0, k.L)(() => {
                            let e = !W && !h.hasPlus && b.isFreePlaybackDisabled;
                            return e
                                ? h.isAuthorized
                                    ? (0, u.jsx)(tx.S, { isEnabled: b.isVibeStartRestricted, placement: 'top', textVariant: 'vibe', renderChildren: Q })
                                    : (0, u.jsx)(tf.Z, { isEnabled: e, placement: 'top', textVariant: 'vibe', renderChildren: Q })
                                : Q();
                        }),
                        et = (0, k.L)(() =>
                            d
                                ? null
                                : (0, u.jsx)(tc.r, {
                                      className: tQ().changeVolume,
                                      buttonClassName: tQ().button,
                                      verticalSliderClassName: tQ().verticalSlider,
                                      variant: tl.q.VERTICAL,
                                      sonataVolume: o.volume,
                                      onVolumeClick: G,
                                  }),
                        );
                    return (0, u.jsxs)('section', {
                        role: 'region',
                        'aria-label': A({ id: 'a11y-regions.player' }),
                        className: (0, _.$)(tQ().root, n),
                        'data-test-id': f.e8.player.VIBE_PLAYERBAR,
                        children: [
                            (0, u.jsx)(tB, { album: D, className: a, playButton: z ? ee : void 0 }),
                            (0, u.jsxs)('div', {
                                // for PulseSync: BEGIN apply the custom wave grid only when layout improvements are enabled
                                className: (0, _.$)(tQ().progress, {
                                    [tQ().progress_visible]: !H,
                                    PulseSync_waveProgress_improved: pulseSyncImprovedWaveLayoutEnabled,
                                }),
                                // for PulseSync: END apply the custom wave grid only when layout improvements are enabled
                                children: [
                                    // for PulseSync: BEGIN left control group and fullscreen button beside centered wave progress
                                    (0, u.jsxs)('div', {
                                        className: 'PulseSync_waveSideControls PulseSync_waveSideControls_left',
                                        children: [
                                            pulseSyncImprovedWaveLayoutEnabled &&
                                                (0, u.jsx)(pulseSyncWaveButton.$, {
                                                    className: tQ().button,
                                                    radius: 'round',
                                                    size: 'xxxs',
                                                    variant: 'text',
                                                    disabled: !W || o.isGenerativeContext || l.isAdvertShown,
                                                    withRipple: false,
                                                    'aria-label': A({
                                                        id: 'player-actions.fullscreen-button',
                                                    }),
                                                    icon: (0, u.jsx)(pulseSyncWaveIcon.I, {
                                                        variant: 'fullscreen',
                                                        size: 'xs',
                                                    }),
                                                    onClick: X,
                                                }),
                                            et,
                                            d && !z && ee,
                                            !d && (0, u.jsx)(tA._, { className: tQ().button, disabled: !W || l.isAdvertShown, isDisliked: N, onClick: pulseSyncMigration_W_24, iconSize: 'xs' }),
                                        ],
                                    }),
                                    // for PulseSync: END left control group and fullscreen button beside centered wave progress
                                    r.shouldShowTrackInfo && (0, u.jsx)(iT, { shouldShowArtists: r.shouldShowArtists, shouldShowArtistsWithTrackTitle: r.shouldShowArtistsWithTrackTitle, shouldKeepMobileSpacingOnPause: U }),
                                    // for PulseSync: BEGIN right control group beside centered wave progress
                                    (0, u.jsxs)('div', {
                                        className: 'PulseSync_waveSideControls PulseSync_waveSideControls_right',
                                        children: [
                                            r.shouldShowTrackInfo && (0, u.jsx)(tC.c, {
                                                className: (0, _.$)(tQ().button, {
                                                    [tQ().likeButton_mobilePaused]: 'cover' === F,
                                                }),
                                                disabled: !W || l.isAdvertShown,
                                                isLiked: T,
                                                onClick: $,
                                                iconSize: 'xs',
                                            }),
                                            // for PulseSync: BEGIN Yandex Station cast and synchronized lyrics buttons in wave controls
                                            (0, u.jsx)(pulseSyncWaveCastControl, {
                                                buttonClassName: tQ().button,
                                                disabled: l.isAdvertShown,
                                            }),
                                            pulseSyncImprovedWaveLayoutEnabled &&
                                                !pulseSyncIsYandexStationCastEnabled() &&
                                                !(null == W ? void 0 : W.isNonMusic) &&
                                                !l.isAdvertShown &&
                                                (0, u.jsx)(pulseSyncWaveButton.$, {
                                                    className: tQ().button,
                                                    radius: 'round',
                                                    size: 'xxxs',
                                                    variant: 'text',
                                                    disabled: !pulseSyncWaveSyncLyricsAvailable || o.isGenerativeContext,
                                                    'aria-hidden': !pulseSyncWaveSyncLyricsAvailable,
                                                    withRipple: !1,
                                                    'aria-label': pulseSyncWaveSyncLyricsLabel,
                                                    icon: (0, u.jsx)(pulseSyncWaveIcon.I, {
                                                        variant: 'syncLyrics',
                                                        size: 'xs',
                                                    }),
                                                    onClick: pulseSyncOpenWaveSyncLyrics,
                                                }),
                                            // for PulseSync: END Yandex Station cast and synchronized lyrics buttons in wave controls
                                            !d &&
                                                // for PulseSync: BEGIN place the wave context menu in the right control group
                                                (0, u.jsx)(t8, {
                                                    buttonClassName: (0, _.$)(tQ().button, tQ().important),
                                                    'data-test-id': f.e8.player.VIBE_CONTEXT_MENU_BUTTON,
                                                }),
                                                // for PulseSync: END place the wave context menu in the right control group
                                        ],
                                    }),
                                    // for PulseSync: END right control group beside centered wave progress
                                    (0, u.jsx)(tT.e, {}),
                                ],
                            }),
                            !d && (0, u.jsx)(iE, {}),
                        ],
                    });
                }),
                iB = { minFontSize: 24, maxFontSize: 64, maxLines: 2, lineHeight: 0.9 },
                iw = { minFontSize: 48, maxFontSize: 104, maxLines: 4, lineHeight: 0.9 },
                iO = { minFontSize: 48, maxFontSize: 104, maxLines: void 0, lineHeight: 1.1 },
                iM = {
                    minFontSize: 14,
                    maxFontSize: 20,
                    lineHeight: 1,
                    styleVariants: [
                        { fontSize: 20, lineHeight: 1 },
                        { fontSize: 16, lineHeight: 1 },
                        { fontSize: 14, lineHeight: 16 / 14 },
                    ],
                };
            var iR = i(98017),
                iL = i.n(iR);
            let iV = (0, m.PA)((e) => {
                var t;
                let { artist: i, withLink: a, onClick: n, featCoverUri: r } = e,
                    { formatMessage: s } = (0, v.A)(),
                    o = (0, tk.S)(),
                    l = null != r ? r : null == (t = i.cutoutCover) ? void 0 : t.uri,
                    c = s({ id: 'entity-names.artist-name' }, { artistName: i.name }),
                    d = (0, j.c)(() => {
                        o({ to: x.AppScreen.ArtistScreen });
                    }),
                    _ = (0, u.jsx)(N._V, {
                        className: iL().cover,
                        fit: 'contain',
                        src: l,
                        size: 'orig',
                        withAvatarReplace: !0,
                        alt: c,
                        'aria-hidden': !0,
                        withLoadingIndicator: !1,
                    });
                return a
                    ? (0, u.jsx)(tN.N, { className: iL().root, href: i.url, onClick: d, 'aria-hidden': !0, 'data-test-id': f.e8.vibe.VIBE_ARTIST_COVER, children: _ })
                    : (0, u.jsx)('div', { className: iL().root, onClick: n, 'aria-hidden': !0, 'data-test-id': f.e8.vibe.VIBE_ARTIST_COVER, children: _ });
            });
            var iW = i(40907),
                iD = i(58495),
                iF = i(20584),
                iU = i(18593),
                iz = i(76794),
                iH = i(51724),
                iK = i(15461),
                iY = i.n(iK),
                iX = i(53845),
                iG = i.n(iX);
            let iq = (0, m.PA)((e) => {
                let { context: t, isResetAvailable: i, isHidden: a, onReset: n, children: r, contextControl: s, onOpenChange: o, className: l } = e,
                    {
                        vibe: c,
                        sonataState: d,
                        settings: { isMobile: m },
                        main: b,
                    } = (0, Y.g)(),
                    { formatMessage: h } = (0, v.A)(),
                    g = (0, tv.z)(),
                    [x, A] = (0, p.useState)(!1),
                    [C, y] = (0, T.d)(),
                    N = !!t && !a,
                    I = x && N && !s && !!r,
                    E = I || !!s,
                    B = c.isMyVibe && d.isVibeContext;
                ((0, ii.mf)(s ? null : C, iM),
                    (0, p.useEffect)(() => {
                        N || A(!1);
                    }, [N]),
                    (0, p.useEffect)(() => {
                        if (E) return (null == g || g.disable(), () => (null == g ? void 0 : g.enable()));
                    }, [E, g]));
                let w = (0, j.c)(() => {
                        (A(!1), n());
                    }),
                    O = (0, j.c)((e) => {
                        (A(e), null == o || o(e));
                    }),
                    M = (0, k.L)(() =>
                        t
                            ? r
                                ? (0, u.jsx)(tO.W1, {
                                      label: (0, u.jsxs)('span', {
                                          className: iG().label,
                                          children: [
                                              (0, u.jsx)(S.HL, { variant: 'span', className: iY().context, lineClamp: 2, children: t }),
                                              (0, u.jsx)(Z.I, {
                                                  variant: 'arrowDown',
                                                  size: 'xxs',
                                                  className: (0, _.$)(iG().arrow, { [iG().arrow_open]: I }),
                                                  'aria-hidden': !0,
                                              }),
                                          ],
                                      }),
                                      className: iG().trigger,
                                      wrapperClassName: (0, _.$)(iG().triggerContainer, { [iG().triggerContainer_hidden]: !!s }),
                                      menuClassName: (0, _.$)(iG().menu, { [iG().menu_touch]: m }),
                                      radius: 'xxxl',
                                      icon: null,
                                      open: I,
                                      onOpenChange: O,
                                      isMobile: !1,
                                      returnFocus: !s,
                                      offsetOptions: 4,
                                      ariaLabel: ''.concat(t, ': ').concat(h({ id: 'interface-actions.context-menu' })),
                                      tabIndex: a ? -1 : void 0,
                                      containerDataTestId: f.e8.vibe.VIBE_PAGE_CONTEXT_MENU,
                                      'data-test-id': f.e8.vibe.VIBE_PAGE_CONTEXT_MENU_BUTTON,
                                      children: !s && r,
                                  })
                                : (0, u.jsx)('div', {
                                      className: B ? iY().container : iG().staticContext,
                                      children: (0, u.jsx)(S.HL, {
                                          variant: 'span',
                                          className: iY().context,
                                          lineClamp: 2,
                                          'data-test-id': f.e8.vibe.RESET_VIBE_CONTEXT_STATIC_TEXT,
                                          children: t,
                                      }),
                                  })
                            : null,
                    );
                return (0, u.jsxs)('div', {
                    ref: y,
                    className: (0, _.$)(iY().root, iG().root, l, { [iY().root_visible]: N, [iY().root_withEntryPointButton]: b.withEntryPointButton }),
                    'aria-hidden': !N,
                    inert: !N,
                    'data-test-id': f.e8.vibe.VIBE_PAGE_CONTEXT_BLOCK,
                    children: [
                        t && s && (0, u.jsx)('div', { className: (0, _.$)(iG().staticContext, iY().context), children: s }),
                        M,
                        t &&
                            i &&
                            (0, u.jsx)(P.$, {
                                className: (0, _.$)(iY().button, iG().resetButton),
                                radius: 'round',
                                onClick: w,
                                'aria-label': h({ id: 'interface-actions.reset-context' }, { context: t }),
                                tabIndex: a ? -1 : void 0,
                                'data-test-id': f.e8.vibe.RESET_VIBE_CONTEXT_BUTTON,
                                children: (0, u.jsx)(Z.I, { variant: 'close', size: 'xs', 'aria-hidden': !0, 'data-test-id': f.e8.vibe.RESET_VIBE_CONTEXT_BUTTON_ICON }),
                            }),
                    ],
                });
            });
            var i$ = i(70134),
                iZ = i(38035),
                iJ = i(79390),
                iQ = i(25555),
                i0 = i(93091),
                i1 = i(27817),
                i2 = i(64546),
                i8 = i(6215),
                i9 = i(54243),
                i5 = i(64247);
            let i6 = (0, m.PA)((e) => {
                let { artist: t, className: i, iconClassName: a, likeActiveClassName: n } = e,
                    {
                        user: r,
                        library: s,
                        pinsCollection: o,
                        settings: { isMobile: l },
                    } = (0, Y.g)(),
                    { shareLink: c, pathname: d } = (0, tz.b)('/artist/:artistId', { params: { artistId: t.id } }),
                    m = s.isArtistLiked(t.id),
                    p = (0, iQ.I)({
                        action: async () => (await s.toggleArtistLike({ entityId: t.id, userId: r.account.data.uid })) === iJ.f.OK,
                        notification: (0, u.jsx)(i9.T, { artist: { ...t, url: d, isLiked: !m } }),
                    }),
                    b = (0, i8.E)(t.id),
                    v = o.isPinned(b),
                    h = (0, iQ.I)({
                        action: async () => !!(await o.toggleArtistPin({ id: t.id }, b)),
                        notification: (0, u.jsx)(i5.l, { artist: { ...t, url: d, isPinned: !v } }),
                    });
                return (0, u.jsxs)(u.Fragment, {
                    children: [
                        !l && (0, u.jsx)(i2.WithOffline, { fallback: (0, u.jsx)(i1.L, { className: i, iconClassName: a, onClick: h, isPinned: v }) }),
                        (0, u.jsx)(i2.WithOffline, {
                            fallback: (0, u.jsx)(i0.T, {
                                className: (0, _.$)(i, m && n),
                                iconClassName: a,
                                onClick: p,
                                isLiked: m,
                                disabled: !r.isAuthorized || !t.isAvailable,
                            }),
                        }),
                        (0, u.jsx)(tY.H, {
                            withNotification: !l,
                            className: i,
                            iconClassName: a,
                            shareLink: c,
                            entityMeta: { variant: tF.Y.ARTIST, id: t.id, title: t.name, path: d },
                            withSubmenu: !1,
                        }),
                    ],
                });
            });
            var i4 = i(60385),
                i7 = i(554),
                i3 = i(18243),
                ae = i(99007),
                at = i(30832),
                ai = i(6322);
            let aa = (0, m.PA)((e) => {
                var t;
                let { playlist: i, className: a, iconClassName: n, likeActiveClassName: r, shareMenuClassName: s, ownerName: o, ownerLogin: l } = e,
                    {
                        user: c,
                        library: d,
                        pinsCollection: m,
                        settings: { isMobile: p },
                    } = (0, Y.g)(),
                    b = i.uuid ? '/playlists/:playlistUuid' : '/users/:userId/playlists/:kind',
                    v = { playlistUuid: null != (t = i.uuid) ? t : '', userId: i.uid, kind: i.kind },
                    { shareLink: h, pathname: g } = (0, tz.b)(b, { params: v }),
                    { href: x } = (0, e4.u)(b, { params: v }),
                    A = i.kind === ae.j.LIKE,
                    C = c.isAuthorized && i.uid === c.account.data.uid,
                    f = (i.visibility === i4.L.PUBLIC || A) && i.isAvailable,
                    y = d.isPlaylistLiked((0, i7.m)(i)),
                    j = (0, iQ.I)({
                        action: async () =>
                            (await d.togglePlaylistLike({ entityId: (0, i7.m)(i), userId: c.account.data.uid, ownerId: i.uid, kindId: i.kind })) === iJ.f.OK,
                        notification: (0, u.jsx)(at.T, { playlist: { ...i, url: x, isLiked: !y } }),
                    }),
                    T = (0, i3.f)(i),
                    k = m.isPinned(T),
                    P = (0, iQ.I)({
                        action: async () => !!(await m.togglePlaylistPin({ uid: i.uid, kind: i.kind }, T)),
                        notification: (0, u.jsx)(ai.l, { playlist: { ...i, url: x, isPinned: !k } }),
                    });
                return (0, u.jsxs)(u.Fragment, {
                    children: [
                        !p && (0, u.jsx)(i1.L, { className: a, iconClassName: n, onClick: P, isPinned: k }),
                        !C && !A && (0, u.jsx)(i0.T, { className: (0, _.$)(a, y && r), iconClassName: n, onClick: j, isLiked: y, disabled: !c.isAuthorized }),
                        (0, u.jsx)(tY.H, {
                            withNotification: !p,
                            withSubmenu: !p,
                            className: a,
                            iconClassName: n,
                            shareLink: h,
                            menuClassName: s,
                            disabled: !f,
                            entityMeta: { variant: tF.Y.PLAYLIST, playlistOwnerName: o, playlistOwnerLogin: l, id: i.kind, title: i.title, path: g },
                        }),
                    ],
                });
            });
            var an = i(65654);
            let ar = (0, m.PA)((e) => {
                var t;
                let { track: i, className: a, iconClassName: n, likeActiveClassName: r, shareMenuClassName: s, artistName: o, artistId: l } = e,
                    {
                        user: c,
                        library: d,
                        settings: { isMobile: m },
                    } = (0, Y.g)(),
                    p = i.albumId ? '/album/:albumId/track/:trackId' : '/track/:trackId',
                    { shareLink: b, pathname: v } = (0, tz.b)(p, { params: { albumId: null != (t = i.albumId) ? t : '', trackId: i.id } }),
                    h = d.isTrackLiked(i.id),
                    g = (0, iQ.I)({
                        action: async () => (await d.toggleTrackLike({ entityId: i.id, userId: c.account.data.uid, albumId: i.albumId })) === iJ.f.OK,
                        notification: (0, u.jsx)(an.T, { track: { ...i, isLiked: !h } }),
                    });
                return (0, u.jsxs)(u.Fragment, {
                    children: [
                        (0, u.jsx)(i2.WithOffline, {
                            fallback: (0, u.jsx)(i0.T, { className: (0, _.$)(a, h && r), iconClassName: n, onClick: g, isLiked: h, disabled: !c.isAuthorized }),
                        }),
                        i.isNonUserGenerated &&
                            (0, u.jsx)(tY.H, {
                                withNotification: !m,
                                withSubmenu: !m,
                                className: a,
                                iconClassName: n,
                                shareLink: b,
                                menuClassName: s,
                                entityMeta: { variant: tF.Y.TRACK, trackArtistName: o, trackArtistId: l, id: i.id, title: i.title, path: v, trackAlbumId: i.albumId },
                            }),
                    ],
                });
            });
            var as = i(2147),
                ao = i(21869);
            let al = (0, m.PA)((e) => {
                    let { target: t, vibe: i } = e,
                        a = (0, as.K)(i);
                    if (i)
                        return (0, u.jsxs)(u.Fragment, {
                            children: [
                                (0, u.jsx)(ao.S, {
                                    vibe: i,
                                    onLikeClick: a,
                                    className: iG().menuItem,
                                    likeActiveClassName: iG().menuItem_active,
                                    iconClassName: iG().menuItemIcon,
                                }),
                                (0, u.jsx)(i$.u, { vibe: i, className: iG().menuItem, iconClassName: iG().menuItemIcon }),
                            ],
                        });
                    switch (t.type) {
                        case iU.K.Album:
                            return (0, u.jsx)(iZ.z, {
                                className: iG().menuItem,
                                likeActiveClassName: iG().menuItem_active,
                                iconClassName: iG().menuItemIcon,
                                shareMenuClassName: iG().shareMenu,
                                album: t.data,
                                artistName: t.data.artistName,
                                artistId: t.data.artistId,
                            });
                        case iU.K.Artist:
                            return (0, u.jsx)(i6, {
                                className: iG().menuItem,
                                likeActiveClassName: iG().menuItem_active,
                                iconClassName: iG().menuItemIcon,
                                artist: t.data,
                            });
                        case iU.K.Playlist:
                            return (0, u.jsx)(aa, {
                                className: iG().menuItem,
                                likeActiveClassName: iG().menuItem_active,
                                iconClassName: iG().menuItemIcon,
                                shareMenuClassName: iG().shareMenu,
                                playlist: t.data,
                                ownerName: t.data.ownerName,
                                ownerLogin: t.data.ownerLogin,
                            });
                        case iU.K.Various:
                            return (0, u.jsx)(ar, {
                                className: iG().menuItem,
                                likeActiveClassName: iG().menuItem_active,
                                iconClassName: iG().menuItemIcon,
                                shareMenuClassName: iG().shareMenu,
                                track: t.data,
                                artistName: t.data.artistName,
                                artistId: t.data.artistId,
                            });
                    }
                }),
                ac = (0, m.PA)((e) => {
                    var t, i, a, n, r;
                    let { onClick: s, ...o } = e,
                        l = (0, th.e)(),
                        {
                            vibe: c,
                            sonataState: { contextType: d, contextId: _, entityMeta: m, isVibeContext: b },
                        } = (0, Y.g)(),
                        v = (0, iD.D)(d, _),
                        h = ((e, t) => {
                            var i, a, n, r, s, o, l, c, d, u, _, m, p, b, v, h, g, x, A, C, f, y;
                            switch (null != t ? t : null == e ? void 0 : e.sourceContextType) {
                                case iF.h.SEARCH:
                                case iF.h.MUSIC_HISTORY:
                                case iF.h.MUSIC_HISTORY_SEARCH:
                                case iF.h.DOWNLOADED_TRACKS:
                                case iF.h.USER_TRACKS:
                                case iF.h.ARTIST_FAMILIAR_FROM_WAVE:
                                case iF.h.ARTIST_MY_COLLECTION:
                                    return;
                            }
                            switch (null == e ? void 0 : e.type) {
                                case iU.K.Album: {
                                    let { meta: t } = e;
                                    return {
                                        type: e.type,
                                        data: {
                                            id: Number(t.id),
                                            title: null != (r = t.title) ? r : '',
                                            type: t.type,
                                            coverUri: t.coverUri,
                                            artistName: null == (a = t.artists) || null == (i = a[0]) ? void 0 : i.name,
                                            artistId: (null == (n = t.artists) ? void 0 : n[0]) ? String(t.artists[0].id) : void 0,
                                        },
                                    };
                                }
                                case iU.K.Artist: {
                                    let { meta: t } = e;
                                    return {
                                        type: e.type,
                                        data: {
                                            id: String(t.id),
                                            name: null == (s = t.artist) ? void 0 : s.name,
                                            coverUri: null == (l = t.artist) || null == (o = l.cover) ? void 0 : o.uri,
                                            isAvailable: !t.artist || (0, iH.f)(t.artist).available,
                                        },
                                    };
                                }
                                case iU.K.Various: {
                                    let { meta: t } = e;
                                    return {
                                        type: e.type,
                                        data: {
                                            id: String(t.id),
                                            albumId: null == (d = t.albums) || null == (c = d[0]) ? void 0 : c.id,
                                            title: null != (p = t.title) ? p : '',
                                            type: t.type,
                                            coverUri: t.coverUri,
                                            isNonUserGenerated: t.trackSource !== iz.J.UGC && t.trackSource !== iz.J.OWN_REPLACED_TO_UGC,
                                            artistName: null == (_ = t.artists) || null == (u = _[0]) ? void 0 : u.name,
                                            artistId: (null == (m = t.artists) ? void 0 : m[0]) ? String(t.artists[0].id) : void 0,
                                        },
                                    };
                                }
                                case iU.K.Playlist: {
                                    let { meta: t } = e,
                                        [i, a] = String(t.id).split(':'),
                                        n = null != (A = t.uid) ? A : Number(i),
                                        r = null != (C = t.kind) ? C : Number(a);
                                    if (!Number.isFinite(n) || !Number.isFinite(r)) return;
                                    return {
                                        type: e.type,
                                        data: {
                                            uid: n,
                                            kind: r,
                                            uuid: null != (f = t.playlistUuid) ? f : t.uuid,
                                            title: t.title,
                                            coverUri: (null == (b = t.cover) ? void 0 : b.uri) || (null == (h = t.cover) || null == (v = h.itemsUri) ? void 0 : v[0]),
                                            visibility: t.visibility,
                                            isAvailable: null == (y = t.available) || y,
                                            ownerName: null == (g = t.owner) ? void 0 : g.name,
                                            ownerLogin: null == (x = t.owner) ? void 0 : x.login,
                                        },
                                    };
                                }
                                default:
                                    return;
                            }
                        })(
                            d ? (null == l || null == (t = l.state.currentContext.value) ? void 0 : t.data) : void 0,
                            m
                                ? null == l || null == (a = l.state.queueState.currentEntity.value) || null == (i = a.sourceContext)
                                    ? void 0
                                    : i.data.sourceContextType
                                : void 0,
                        ),
                        g = (0, p.useCallback)((e) => (0, u.jsx)(iq, { ...o, ...e, onReset: s }), [s, o]);
                    return b && (null == (n = c.meta) ? void 0 : n.stationType) === eb.q7
                        ? (0, u.jsx)(iW.w, { vibe: c.meta, context: o.context, className: iG().menuItem, renderContextButton: g }, v)
                        : b && (null == (r = c.meta) ? void 0 : r.isLikeEnabled)
                          ? (0, u.jsx)(C.F, {
                                blockId: eW.U.VIBE_CONTEXT_MENU,
                                blockType: eW.U.VIBE_CONTEXT_MENU,
                                blockPosX: 1,
                                blockPosY: 1,
                                objectsCount: 1,
                                children: (0, u.jsx)(tn.B, {
                                    objectType: x.DomainObjectType.Wave,
                                    objectId: c.meta.seedsId,
                                    objectPosX: 1,
                                    objectPosY: 1,
                                    children: (0, p.createElement)(iq, { ...o, key: v, onReset: s }, (0, u.jsx)(al, { vibe: c.meta })),
                                }),
                            })
                          : (0, p.createElement)(iq, { ...o, key: v, onReset: s }, h && (0, u.jsx)(al, { target: h }));
                }),
                ad = (e) => {
                    var t;
                    return null != (t = e.fallbackMaxLines) ? t : e.maxLines;
                };
            var au = i(76533),
                a_ = i.n(au);
            let am = (e) => {
                    let { textOptions: t, children: i } = e,
                        { setContainerRef: a, lineClamp: n } = ((e) => {
                            let [t, i] = (0, T.d)(),
                                [a, n] = (0, p.useState)(() => ad(e));
                            return (
                                (0, p.useEffect)(() => {
                                    n(ad(e));
                                }, [e.fallbackMaxLines, e.maxLines]),
                                (0, ii.mf)(t, e, n),
                                { setContainerRef: i, lineClamp: a }
                            );
                        })(t);
                    return (0, u.jsx)('div', {
                        ref: a,
                        className: a_().root,
                        'data-test-id': f.e8.vibe.VIBE_DYNAMIC_ARTISTS,
                        children: (0, p.cloneElement)(i, { lineClamp: n }),
                    });
                },
                ap = {
                    src: '/_next/static/media/q2v-glow-w120.1677f964.png',
                    height: 256,
                    width: 400,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJ1BMVEX/e//qkv/7XPX4vv/0UO/nYPj6UO7sP+beSvr6Ren/VvL8k/nrff8yHG/VAAAADHRSTlMBZCkReHVo/v3OUx1DIc6HAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAHklEQVR4nGNggANmRlYWNiYGBgZGHg52Ti5kESgAAAflAFodTC0aAAAAAElFTkSuQmCC',
                    blurWidth: 8,
                    blurHeight: 5,
                },
                ab = {
                    src: '/_next/static/media/q2v-glow-w160.81b6098e.png',
                    height: 256,
                    width: 480,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEVMaXH/cf30Quf+Tu7ZTvDNZPvhlP/vdPdHyLt4AAAACHRSTlMADLtextdqZIlEHsoAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAdSURBVHicY2BgYGBgZGRkYGBgY2VhYmJmRGJApQAD1gA1KQvxbwAAAABJRU5ErkJggg==',
                    blurWidth: 8,
                    blurHeight: 4,
                },
                av = {
                    src: '/_next/static/media/q2v-glow-w200.3dd3deeb.png',
                    height: 256,
                    width: 560,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEX/eftMaXH4P+X/T+3UUvTHZ/vflP/lS+7LLK/gAAAACHRSTlMIALNXwM9gvU78oPkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAdSURBVHicY2BkZGRkYGBgZGBjZWFnYmJmQDBgUgAFNABFuS+NPAAAAABJRU5ErkJggg==',
                    blurWidth: 8,
                    blurHeight: 4,
                },
                ah = {
                    src: '/_next/static/media/q2v-glow-w240.520a1100.png',
                    height: 256,
                    width: 640,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAIVBMVEX6UfH/Vf/haPn0P+bZjf/6RefTVPX///7NfP79Qub/X/R17Zh8AAAAC3RSTlMtAyrZGzfsB8+eGFOiud8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAdSURBVHicY2BkYWJiYGVgZGDnYGNjZubkYoCJAAAEdABTyJLycgAAAABJRU5ErkJggg==',
                    blurWidth: 8,
                    blurHeight: 3,
                },
                ag = {
                    src: '/_next/static/media/q2v-glow-w280.b6e7b279.png',
                    height: 256,
                    width: 720,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAIVBMVEX/Su7kZfryVfLyP+bUUvXZf/v/ZvXjqv/9POLfof/Fb/xpkARsAAAAC3RSTlMvJCrT4R4MBLkx67AUSkUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAdSURBVHicY2BnZWRkYmBgY+DkYmFhZuZgYICJAAAE3wBW+41RHAAAAABJRU5ErkJggg==',
                    blurWidth: 8,
                    blurHeight: 3,
                },
                ax = {
                    src: '/_next/static/media/q2v-glow-w320.6a3648a7.png',
                    height: 256,
                    width: 800,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAHlBMVEXAVtzfRsj2TcbFTtj+W8itbuvtQMWsa+uxWOTYQ83r0pUkAAAACnRSTlM6OjG2DjOtobi1kYtftgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAB1JREFUeJxjYGVgYGBkZGJhYOdgZuZkY2NigIkAAAPUAEdB7RkuAAAAAElFTkSuQmCC',
                    blurWidth: 8,
                    blurHeight: 3,
                },
                aA = {
                    src: '/_next/static/media/q2v-glow-w360.fc3c68a3.png',
                    height: 256,
                    width: 880,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAD1BMVEXkQ8uxYOfFUtv/UsWsg/ZbnY/NAAAABXRSTlNxcHMfH3sDujAAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAZSURBVHicBcEBAQAAAIIgs/5vDlgiUBYVegD3ABpDksaVAAAAAElFTkSuQmCC',
                    blurWidth: 8,
                    blurHeight: 2,
                },
                aC = {
                    src: '/_next/static/media/q2v-glow-w400.265dfc0a.png',
                    height: 256,
                    width: 960,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAD1BMVEXjQ8u+VOCtZ+v3UsOsf/DSwDGDAAAABXRSTlNsbWoiImB3+hEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAATSURBVHicY2BhYmRkYGBgZoAxAADtABejooRHAAAAAElFTkSuQmCC',
                    blurWidth: 8,
                    blurHeight: 2,
                },
                af = (e, t) => ({ '--q2v-glow-image': 'url('.concat(e.src, ')'), '--q2v-glow-aspect-ratio': t }),
                ay = (0, m.PA)((e) => {
                    var t;
                    let { context: i, isResetAvailable: a, isHidden: n, onClick: r, className: s } = e,
                        { vibe: o, sonataState: l, main: c } = (0, Y.g)(),
                        { formatMessage: d } = (0, v.A)(),
                        [m, b] = (0, T.d)(),
                        [h, g] = (0, T.d)(),
                        [x, A] = (0, p.useState)(null);
                    (0, ii.mf)(m, iM);
                    let C = (0, ts.g)(),
                        y = d({ id: 'interface-actions.reset-context' }, { context: i }),
                        N = (0, j.c)(() => {
                            (r(), C());
                        }),
                        I = !!(null == (t = o.meta) ? void 0 : t.isQ2V) && l.isVibeContext;
                    (0, p.useLayoutEffect)(() => {
                        if (!I || !a || null === h) return void A(null);
                        let e = () => {
                            let { width: e } = h.getBoundingClientRect();
                            e > 0 && A(e);
                        };
                        e();
                        let t = new ResizeObserver(e);
                        return (
                            t.observe(h),
                            () => {
                                t.disconnect();
                            }
                        );
                    }, [h, i, I, a]);
                    let E = (0, k.L)(() => {
                            if (x)
                                return ((e) =>
                                    e < 120
                                        ? af(ap, '200 / 128')
                                        : e < 160
                                          ? af(ab, '240 / 128')
                                          : e < 200
                                            ? af(av, '280 / 128')
                                            : e < 240
                                              ? af(ah, '320 / 128')
                                              : e < 280
                                                ? af(ag, '360 / 128')
                                                : e < 320
                                                  ? af(ax, '400 / 128')
                                                  : e < 360
                                                    ? af(aA, '440 / 128')
                                                    : af(aC, '480 / 128'))(x);
                        }),
                        B = (0, k.L)(() =>
                            i
                                ? a
                                    ? (0, u.jsxs)(P.$, {
                                          ref: g,
                                          className: (0, _.$)(iY().button, { [iY().button_q2v]: I }),
                                          radius: 'xxxl',
                                          withHover: !0,
                                          withRipple: !I,
                                          onClick: N,
                                          'aria-label': y,
                                          'data-test-id': f.e8.vibe.RESET_VIBE_CONTEXT_BUTTON,
                                          children: [
                                              (0, u.jsx)(S.HL, {
                                                  variant: 'span',
                                                  className: (0, _.$)(iY().context, { [iY().context_q2v]: I }),
                                                  lineClamp: 2,
                                                  children: i,
                                              }),
                                              (0, u.jsx)(Z.I, {
                                                  variant: 'close_filled',
                                                  size: 'xs',
                                                  className: iY().icon,
                                                  'data-test-id': f.e8.vibe.RESET_VIBE_CONTEXT_BUTTON_ICON,
                                              }),
                                          ],
                                      })
                                    : (0, u.jsx)('div', {
                                          className: iY().container,
                                          children: (0, u.jsx)(S.HL, {
                                              variant: 'span',
                                              className: iY().context,
                                              lineClamp: 2,
                                              'data-test-id': f.e8.vibe.RESET_VIBE_CONTEXT_STATIC_TEXT,
                                              children: i,
                                          }),
                                      })
                                : null,
                        );
                    return (0, u.jsx)('div', {
                        className: (0, _.$)(iY().root, s, {
                            [iY().root_visible]: !n,
                            [iY().root_q2v]: I && null !== x,
                            [iY().root_withEntryPointButton]: c.withEntryPointButton,
                        }),
                        style: E,
                        ref: b,
                        'aria-hidden': !!n,
                        inert: !!n,
                        children: B,
                    });
                }),
                aj = L.default.default(() =>
                    Promise.all([i.e(7976), i.e(8872), i.e(1625), i.e(1631)])
                        .then(i.bind(i, 6493))
                        .then((e) => ({ default: e.Wheel })),
                );
            var aT = i(11372),
                ak = i(6900),
                aP = i(59064),
                aN = i.n(aP);
            let aI = (0, m.PA)(() => {
                let {
                        wizard: e,
                        settings: { isMobile: t },
                    } = (0, Y.g)(),
                    { formatMessage: i } = (0, v.A)(),
                    a = (0, j.c)(() => {
                        (e.introModal.close(), e.modal.open());
                    });
                return (0, u.jsxs)(aT.a, {
                    className: (0, _.$)((0, ak.J)(eK.S.Dark), aN().root, { [aN().root_mobile]: t }),
                    headerClassName: aN().header,
                    contentClassName: aN().content,
                    size: 'fitContent',
                    placement: t ? 'default' : 'center',
                    enableSwipe: t,
                    overlayColor: 'full',
                    restoreFocus: !1,
                    labelClose: i({ id: 'interface-actions.close' }),
                    open: e.introModal.isOpened,
                    onOpenChange: e.introModal.onOpenChange,
                    onClose: e.introModal.close,
                    'data-test-id': f.e8.wizard.WIZARD_INTRO_MODAL,
                    children: [
                        (0, u.jsx)(N._V, {
                            src: 'avatars.mds.yandex.net/get-music-misc/70850/img.6a15a60535ffcf283a9da9e0/%%',
                            srcSet: ''.concat('avatars.mds.yandex.net/get-music-misc/70683/img.6a15a60f5d36c3160a7fb52a/%%', ' 2x'),
                            className: aN().image,
                            size: 375,
                            withAvatarReplace: !0,
                            withAspectRatio: !0,
                            fit: 'contain',
                            alt: '',
                            'aria-hidden': !0,
                        }),
                        (0, u.jsxs)('div', {
                            className: aN().text,
                            children: [
                                (0, u.jsx)(S.DZ, { variant: 'h2', size: 'xl', className: aN().title, children: i({ id: 'wizard.title' }) }),
                                (0, u.jsx)(S.HL, { variant: 'span', size: 'm', className: aN().description, children: i({ id: 'wizard.description' }) }),
                            ],
                        }),
                        (0, u.jsx)(P.$, { className: aN().button, color: 'primary', size: 'm', radius: 'xxxl', onClick: a, children: i({ id: 'wizard.buttonText' }) }),
                    ],
                });
            });
            var aE = i(87819),
                aS = i(49176),
                aB = i(7123);
            let aw = (e) => {
                    let { queueState: t, direction: i, batchSize: a } = e,
                        { trackIds: n, currentIndex: r } = t,
                        s = [],
                        o = 0,
                        l = 0;
                    'forward' === i ? ((o = r + 1), (l = Math.min(n.length - 1, o + a - 1))) : (o = Math.max(0, (l = r - 1) - a + 1));
                    for (let e = o; e <= l; e++) {
                        let t = n[e];
                        t && s.push(t);
                    }
                    return s;
                },
                aO = (e) => {
                    let { queueState: t, backwardSize: i, forwardSize: a } = e,
                        n = Math.max(0, t.currentIndex - i),
                        r = Math.min(t.trackIds.length - 1, t.currentIndex + a),
                        s = [];
                    for (let e = n; e <= r; e++) {
                        let i = t.trackIds[e];
                        i && s.push(i);
                    }
                    return s;
                },
                aM = (e) => {
                    let { queueState: t, direction: i, isRequested: a } = e,
                        n = 'forward' === i ? 1 : -1,
                        r = 0;
                    for (let e = t.currentIndex + n; e >= 0 && e < t.trackIds.length; e += n) {
                        let i = t.trackIds[e];
                        if (i && a(i)) r++;
                        else break;
                    }
                    return r <= 3;
                };
            var aR = i(9519),
                aL = i(93609),
                aV = i(74567);
            let aW = 'viewedCards',
                aD = 'viewedBigCards';
            class aF extends aV.F {
                async addViewedIds(e) {
                    return this.executeTransaction((t) => {
                        let i = t.transaction([aW], 'readwrite').objectStore(aW);
                        return Promise.all(e.map((e) => i.put({ uid: this.uid, cardId: e }))).then(() => i.index('uid').count(this.uid));
                    })
                        .then((e) => ('number' == typeof e && e > 30 ? this.evictViewedCardsOverLimit() : Promise.resolve()))
                        .catch(aL.A);
                }
                async addViewedBigCards(e) {
                    return this.executeTransaction((t) => {
                        let i = t.transaction([aD], 'readwrite').objectStore(aD);
                        return Promise.all(e.flatMap((e) => e.bigCardIds.map((t) => ({ uid: this.uid, cardId: e.cardId, bigCardId: t }))).map((e) => i.put(e))).then(() =>
                            i.index('uid').count(this.uid),
                        );
                    })
                        .then((e) => ('number' == typeof e && e > 30 ? this.evictViewedBigCardsOverLimit() : Promise.resolve()))
                        .catch(aL.A);
                }
                async getViewedIds() {
                    return this.executeTransaction((e) => e.getAllFromIndex(aW, 'uid', this.uid).then((e) => e.map((e) => e.cardId)), { defaultValue: [] }).catch(
                        () => [],
                    );
                }
                async getViewedBigCards() {
                    return this.executeTransaction(
                        (e) =>
                            e.getAllFromIndex(aD, 'uid', this.uid).then((e) => {
                                let t = new Map();
                                return (
                                    e.forEach((e) => {
                                        var i;
                                        let a = null != (i = t.get(e.cardId)) ? i : [];
                                        (a.push(e.bigCardId), t.set(e.cardId, a));
                                    }),
                                    Array.from(t.entries()).map((e) => {
                                        let [t, i] = e;
                                        return { cardId: t, bigCardIds: i };
                                    })
                                );
                            }),
                        { defaultValue: [] },
                    ).catch(() => []);
                }
                async clearSentIds(e) {
                    return this.executeTransaction((t) => {
                        let i = t.transaction([aW], 'readwrite').objectStore(aW);
                        return Promise.all(e.map((e) => i.delete([this.uid, e]))).then(aL.A);
                    }).catch(aL.A);
                }
                async clearSentBigCards(e) {
                    return this.executeTransaction((t) => {
                        let i = t.transaction([aD], 'readwrite').objectStore(aD);
                        return Promise.all(e.flatMap((e) => e.bigCardIds.map((t) => [this.uid, e.cardId, t])).map((e) => i.delete(e))).then(aL.A);
                    }).catch(aL.A);
                }
                async evictViewedCardsOverLimit() {
                    return this.executeTransaction((e) => {
                        let t = e.transaction([aW], 'readwrite').objectStore(aW).index('uid');
                        return t.count(this.uid).then((e) => {
                            if (e <= 30) return Promise.resolve();
                            let i = e - 30,
                                a = 0,
                                n = (e) =>
                                    !e || a >= i
                                        ? Promise.resolve()
                                        : (a++,
                                          e
                                              .delete()
                                              .then(() => e.continue())
                                              .then(n));
                            return t.openCursor(this.uid).then(n);
                        });
                    }).catch(aL.A);
                }
                async evictViewedBigCardsOverLimit() {
                    return this.executeTransaction((e) => {
                        let t = e.transaction([aD], 'readwrite').objectStore(aD).index('uid');
                        return t.count(this.uid).then((e) => {
                            if (e <= 30) return Promise.resolve();
                            let i = e - 30,
                                a = 0,
                                n = (e) =>
                                    !e || a >= i
                                        ? Promise.resolve()
                                        : (a++,
                                          e
                                              .delete()
                                              .then(() => e.continue())
                                              .then(n));
                            return t.openCursor(this.uid).then(n);
                        });
                    }).catch(aL.A);
                }
                constructor(e) {
                    (super({
                        dbName: 'music_words',
                        dbVersion: 2,
                        onUpgrade: (e) => {
                            (e.objectStoreNames.contains(aW) || e.createObjectStore(aW, { keyPath: ['uid', 'cardId'] }).createIndex('uid', 'uid', { unique: !1 }),
                                e.objectStoreNames.contains(aD) ||
                                    e.createObjectStore(aD, { keyPath: ['uid', 'cardId', 'bigCardId'] }).createIndex('uid', 'uid', { unique: !1 }));
                        },
                    }),
                        (0, aR._)(this, 'uid', void 0),
                        (this.uid = e));
                }
            }
            var aU = i(91177),
                az = i(81438),
                aH = i(48404),
                aK = i(29595),
                aY = i(74965),
                aX = i(66943);
            let aG = (e) => {
                let { card: t, onClose: i } = e,
                    { notify: a } = (0, aY.l)(),
                    [n, r] = (0, p.useState)(null),
                    { formatMessage: s } = (0, v.A)(),
                    o = (0, j.c)((e) => {
                        (r(e), setTimeout(() => r(null), 3e3));
                    }),
                    l = (0, j.c)(async (e, n) => {
                        if (t && !t.isFeedbackPending)
                            try {
                                (await t.sendFeedback(e), i(), n && o(n));
                            } catch (e) {
                                a((0, u.jsx)(aX.h, { error: s({ id: 'error-messages.error-during-action' }) }), { containerId: aK.u.ERROR });
                            }
                    });
                return {
                    handleLike: (0, j.c)(async () => {
                        (null == t ? void 0 : t.isLiked) ? await l(aH.a.NEUTRAL) : await l(aH.a.LIKE, s({ id: 'words.like-feedback' }));
                    }),
                    handleDislike: (0, j.c)(async () => {
                        await l(aH.a.DISLIKE, s({ id: 'words.dislike-feedback' }));
                    }),
                    feedbackMessage: n,
                };
            };
            var aq = i(69850),
                a$ = i.n(aq);
            function aZ() {
                return (aZ = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var i = arguments[t];
                              for (var a in i) ({}).hasOwnProperty.call(i, a) && (e[a] = i[a]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let aJ = function (e) {
                return p.createElement(
                    'svg',
                    aZ({ viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    r ||
                        (r = p.createElement('path', {
                            d: 'M10.0002 0.3125C7.25741 0.3125 4.69896 2.90254 2.43499 6.67723C0.171015 10.4519 -0.760012 14.016 0.707594 16.2922C2.17517 18.5683 5.69374 19.6874 9.99984 19.6875L10.0002 19.6875C14.3063 19.6874 17.8248 18.5683 19.2924 16.2922C20.76 14.016 19.829 10.4519 17.565 6.67723C15.3011 2.90269 12.7429 0.3125 10.0002 0.3125Z',
                            fill: 'currentColor',
                        })),
                );
            };
            function aQ() {
                return (aQ = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var i = arguments[t];
                              for (var a in i) ({}).hasOwnProperty.call(i, a) && (e[a] = i[a]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let a0 = function (e) {
                return p.createElement(
                    'svg',
                    aQ({ width: 28, height: 28, viewBox: '0 0 28 28', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    s ||
                        (s = p.createElement('path', {
                            fillRule: 'evenodd',
                            clipRule: 'evenodd',
                            d: 'M9.42032 25.4019C9.14037 21.0934 5.66809 17.6882 1.42578 17.6882V16.5741C5.8511 16.5741 9.43853 12.8687 9.43853 8.29785H10.5171C10.5171 12.8687 14.1045 16.5741 18.5299 16.5741V17.6882C14.2876 17.6882 10.8153 21.0934 10.5353 25.4019H9.42032Z',
                            fill: 'currentColor',
                        })),
                    o ||
                        (o = p.createElement('path', {
                            d: 'M19.8267 3.83H21.4167L23.9567 11H22.7067L22.0467 9.12H19.0267L18.3667 11H17.2967L19.8267 3.83ZM21.6767 8.08L20.5367 4.85L19.3967 8.08H21.6767ZM27.0991 3.83V11H25.8891V3.83H27.0991Z',
                            fill: 'currentColor',
                        })),
                );
            };
            function a1() {
                return (a1 = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var i = arguments[t];
                              for (var a in i) ({}).hasOwnProperty.call(i, a) && (e[a] = i[a]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let a2 = function (e) {
                return p.createElement(
                    'svg',
                    a1({ viewBox: '0 0 12 12', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    l || (l = p.createElement('path', { d: 'M6 0C6 3.31 3.31 6 0 6C3.31 6 6 8.69 6 12C6 8.69 8.69 6 12 6C8.69 6 6 3.31 6 0Z', fill: 'currentColor' })),
                );
            };
            function a8() {
                return (a8 = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var i = arguments[t];
                              for (var a in i) ({}).hasOwnProperty.call(i, a) && (e[a] = i[a]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let a9 = function (e) {
                    return p.createElement(
                        'svg',
                        a8({ width: 28, height: 28, viewBox: '0 0 28 28', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                        c ||
                            (c = p.createElement('path', {
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                d: 'M9.42032 25.4029C9.14037 21.0944 5.66809 17.6891 1.42578 17.6891V16.5751C5.8511 16.5751 9.43853 12.8697 9.43853 8.29883H10.5171C10.5171 12.8697 14.1045 16.5751 18.5299 16.5751V17.6891C14.2876 17.6891 10.8153 21.0944 10.5353 25.4029H9.42032Z',
                                fill: 'currentColor',
                            })),
                        d ||
                            (d = p.createElement('path', {
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                d: 'M22.4961 12.0999C22.3406 9.70631 20.4115 7.81449 18.0547 7.81449V7.19557C20.5132 7.19557 22.5062 5.13701 22.5062 2.59766H23.1054C23.1054 5.13701 25.0984 7.19557 27.5569 7.19557V7.81449C25.2001 7.81449 23.2711 9.70631 23.1155 12.0999H22.4961Z',
                                fill: 'currentColor',
                            })),
                    );
                },
                a5 = (0, m.PA)((e) => {
                    let { className: t, dimmed: i, isFact: a } = e,
                        { experiments: n } = (0, Y.g)(),
                        r = n.checkExperiment(X.z.WebNextWaveScreenWordsInWave, 'on_with_onyx'),
                        s = n.checkExperiment(X.z.WebNextWaveScreenWordsInWave, 'on'),
                        o = r && i,
                        l = (0, k.L)(() =>
                            r
                                ? (0, u.jsx)(aJ, { className: (0, _.$)(a$().icon, a$().icon_okniks) })
                                : s
                                  ? a && !i
                                      ? (0, u.jsx)(a0, { className: (0, _.$)(a$().icon, a$().icon_sparkles) })
                                      : (0, u.jsx)(a9, { className: (0, _.$)(a$().icon, a$().icon_sparkles) })
                                  : void 0,
                        );
                    return (0, u.jsxs)('div', {
                        className: (0, _.$)(a$().root, { [a$().root_dimmed]: i }, t),
                        'aria-hidden': !0,
                        'data-test-id': f.Kq.words.WORDS_AI_BADGE,
                        children: [
                            (0, u.jsx)(N._V, {
                                src: 'avatars.mds.yandex.net/get-music-misc/2413828/img.69c13075ab25d7410604f669/%%',
                                size: 200,
                                withAvatarReplace: !0,
                                withLoadingIndicator: !1,
                                className: a$().glow,
                            }),
                            l,
                            o &&
                                (0, u.jsxs)('div', {
                                    className: a$().sparkles,
                                    children: [
                                        (0, u.jsx)(a2, { className: a$().sparkle }),
                                        (0, u.jsx)(a2, { className: a$().sparkle }),
                                        (0, u.jsx)(a2, { className: a$().sparkle }),
                                        (0, u.jsx)(a2, { className: a$().sparkle }),
                                    ],
                                }),
                        ],
                    });
                });
            var a6 = i(24190),
                a4 = i.n(a6);
            let a7 = (e) => {
                let { children: t } = e;
                return (0, u.jsx)('div', {
                    className: a4().root,
                    children: (0, u.jsx)(S.HL, { variant: 'span', type: 'text', size: 'l', weight: 'medium', className: a4().text, children: t }),
                });
            };
            var a3 = i(67758),
                ne = i.n(a3);
            let nt = (e) => {
                    let { url: t, title: i, className: a, ref: n } = e,
                        r = (0, tk.S)(),
                        s = (0, j.c)((e) => {
                            (e.stopPropagation(), r({ to: x.AppScreen.Link, deepLink: t }));
                        }),
                        o = (0, j.c)((e) => {
                            e.stopPropagation();
                        });
                    return (0, u.jsx)(tN.N, {
                        ref: n,
                        href: t,
                        className: a,
                        onClick: s,
                        onKeyDown: o,
                        'data-test-id': f.Kq.words.WORDS_CARD_ACTION,
                        children: (0, u.jsx)(S.HL, { variant: 'span', type: 'text', size: 'l', weight: 'medium', children: i }),
                    });
                },
                ni = (e) => {
                    let { url: t, title: i, className: a, analyticObjectId: n } = e,
                        r = (0, aU.D)(),
                        { object: s } = (0, M.j)(),
                        o = (0, u.jsx)(nt, { ref: r, url: t, title: i, className: a });
                    return s ? (0, u.jsx)(tn.B, { ...s, objectId: null != n ? n : s.objectId, objectPosY: 1, children: o }) : o;
                },
                na = (e) => {
                    let { actionType: t, onClick: i, children: a, ...n } = e,
                        r = (0, to.D)(),
                        s = (0, j.c)((e) => {
                            (r({ actionType: t, userInteractionType: x.UserInteractionType.Tap }), null == i || i(e));
                        });
                    return (0, u.jsx)(P.$, { onClick: s, ...n, children: a });
                },
                nn = (e) => {
                    let { url: t, className: i, children: a } = e,
                        n = (0, tk.S)(),
                        r = (0, j.c)(() => {
                            n({ to: x.AppScreen.Link, deepLink: t });
                        });
                    return (0, u.jsx)(tN.N, { href: t, className: i, onClick: r, 'data-test-id': f.Kq.words.WORDS_CARD_LINK, children: a });
                };
            var nr = i(25871),
                ns = i.n(nr);
            let no = (e) => {
                let { className: t } = e;
                return (0, u.jsx)('div', {
                    className: (0, _.$)(ns().root, t),
                    'data-test-id': f.Kq.words.WORDS_CARD_POPOVER_DISCLAIMER,
                    children: (0, u.jsx)(S.HL, {
                        variant: 'div',
                        type: 'text',
                        size: 's',
                        weight: 'medium',
                        className: ns().description,
                        'data-test-id': f.Kq.words.WORDS_CARD_POPOVER_DISCLAIMER_AI_TEXT,
                        children: (0, u.jsx)(O.A, { id: 'words.ai-description' }),
                    }),
                });
            };
            var nl = i(64310),
                nc = i(81933),
                nd = i.n(nc);
            let nu = (e) => {
                let { isActive: t } = e;
                return (0, u.jsxs)('div', {
                    className: nd().root,
                    'aria-busy': t,
                    'aria-live': t ? 'polite' : 'off',
                    children: [
                        (0, u.jsxs)('div', {
                            className: nd().topGroup,
                            children: [
                                (0, u.jsx)(nl.n, { isActive: t, className: nd().line, textClassName: nd().topLinePrimary }),
                                (0, u.jsx)(nl.n, { isActive: t, className: nd().line, textClassName: nd().topLineSecondary }),
                            ],
                        }),
                        (0, u.jsx)(nl.n, { isActive: t, className: nd().main, textClassName: nd().mainLine }),
                        (0, u.jsx)(nl.n, { isActive: t, className: nd().bottom, textClassName: nd().bottomLine }),
                    ],
                });
            };
            var n_ = i(83295);
            let nm = (e) => {
                    let { text: t, forwardRef: i } = e,
                        a = (0, aU.D)(),
                        n = (0, n_.S)([a, i]);
                    return (0, u.jsx)(S.HL, { ref: n, variant: 'div', className: ne().message, 'data-test-id': f.Kq.words.WORDS_CARD_FULLSCREEN_MESSAGE, children: t });
                },
                np = (0, p.forwardRef)((e, t) => (0, u.jsx)(nm, { forwardRef: t, ...e })),
                nb = (0, m.PA)((e) => {
                    var t, i;
                    let { card: a, feedbackMessage: n, onLike: r, onDislike: s, onClose: o, onScreenClosed: l } = e,
                        { words: c } = (0, Y.g)(),
                        { formatMessage: d } = (0, v.A)(),
                        m = null != n ? n : null == (t = c.activeBigCard) ? void 0 : t.text,
                        b = null != (i = c.activeBigCardId) ? i : '',
                        h = (0, p.useRef)(null),
                        g = (0, p.useRef)(null),
                        [A, y] = (0, p.useState)(!1);
                    (0, ta.u)();
                    let T = (0, k.L)(() => {
                        var e, t, i;
                        return (null == (t = c.activeBigCard) || null == (e = t.actions) ? void 0 : e.length)
                            ? c.activeBigCard.actions
                            : null != (i = null == a ? void 0 : a.actions)
                              ? i
                              : [];
                    });
                    (0, p.useEffect)(() => () => l(), [l]);
                    let I = (0, j.c)(() => {
                            o();
                        }),
                        E = (0, j.c)((e) => {
                            e.stopPropagation();
                        }),
                        B = (0, j.c)(() => {
                            let e = h.current;
                            if (!e) return void y(!1);
                            y(e.scrollHeight > e.clientHeight);
                        }),
                        w = (0, j.c)((e) => {
                            var t;
                            if (((h.current = e), null == (t = g.current) || t.disconnect(), (g.current = null), !e)) return void y(!1);
                            B();
                            let i = new ResizeObserver(B);
                            (i.observe(e), (g.current = i));
                        }),
                        M = (0, k.L)(() =>
                            c.isShimmerVisible
                                ? (0, u.jsx)('div', { className: ne().content, onClick: E, children: (0, u.jsx)(nu, { isActive: c.isShimmerActive }) })
                                : (0, u.jsxs)('div', {
                                      className: ne().content,
                                      onClick: E,
                                      children: [
                                          (0, u.jsx)('div', {
                                              className: (0, _.$)(ne().messageScroll, { [ne().messageScroll_scrollable]: A }),
                                              children: (0, u.jsx)(tn.B, {
                                                  objectType: x.DomainObjectType.BigFact,
                                                  objectId: b,
                                                  objectPosX: 1,
                                                  objectPosY: 1,
                                                  children: (0, u.jsx)(np, { ref: w, text: m }),
                                              }),
                                          }),
                                          (0, u.jsxs)('div', {
                                              className: ne().actions,
                                              children: [
                                                  (null == a ? void 0 : a.action) &&
                                                      a.action.url &&
                                                      (0, u.jsx)(tn.B, {
                                                          objectType: x.DomainObjectType.BigFact,
                                                          objectId: b,
                                                          objectPosX: 1,
                                                          objectPosY: 1,
                                                          children: (0, u.jsx)(ni, { url: a.action.url, title: a.action.title, className: ne().primaryAction }),
                                                      }),
                                                  T.length > 0 &&
                                                      (0, u.jsx)(C.F, {
                                                          blockId: x.EntityTypes.WordsInWave,
                                                          blockType: x.EntityTypes.WordsInWave,
                                                          blockPosX: 1,
                                                          blockPosY: 1,
                                                          objectsCount: T.length,
                                                          children: T.map((e, t) =>
                                                              (0, u.jsx)(
                                                                  tn.B,
                                                                  {
                                                                      objectType: x.DomainObjectType.Link,
                                                                      objectId: b,
                                                                      objectPosX: t + 1,
                                                                      objectPosY: 1,
                                                                      children: (0, u.jsxs)(nn, {
                                                                          url: e.url,
                                                                          className: (0, _.$)(ne().sourceItem, { [ne().sourceItem_withoutIcon]: !e.faviconUrl }),
                                                                          children: [
                                                                              e.faviconUrl &&
                                                                                  (0, u.jsx)(N._V, {
                                                                                      src: e.faviconUrl,
                                                                                      fit: 'cover',
                                                                                      'aria-hidden': !0,
                                                                                      className: ne().sourceIcon,
                                                                                      'data-test-id': f.Kq.words.WORDS_CARD_LINK_SOURCE_ICON,
                                                                                  }),
                                                                              (0, u.jsx)(S.HL, {
                                                                                  variant: 'span',
                                                                                  type: 'text',
                                                                                  size: 'l',
                                                                                  weight: 'medium',
                                                                                  lineClamp: 1,
                                                                                  className: ne().actionText,
                                                                                  'data-test-id': f.Kq.words.WORDS_CARD_LINK_SOURCE_TEXT,
                                                                                  children: e.title,
                                                                              }),
                                                                          ],
                                                                      }),
                                                                  },
                                                                  e.url,
                                                              ),
                                                          ),
                                                      }),
                                              ],
                                          }),
                                          a &&
                                              (0, u.jsx)(C.F, {
                                                  blockId: x.EntityTypes.WordsInWave,
                                                  blockType: x.EntityTypes.WordsInWave,
                                                  blockPosX: 1,
                                                  blockPosY: 1,
                                                  objectsCount: 2,
                                                  children: (0, u.jsx)(tn.B, {
                                                      objectType: x.DomainObjectType.BigFact,
                                                      objectId: b,
                                                      objectPosX: 1,
                                                      objectPosY: 1,
                                                      children: (0, u.jsxs)('div', {
                                                          className: ne().feedback,
                                                          children: [
                                                              (0, u.jsxs)(na, {
                                                                  actionType: a.isLiked ? x.ActionType.Unlike : x.ActionType.Like,
                                                                  'aria-pressed': a.isLiked,
                                                                  variant: 'text',
                                                                  withRipple: !1,
                                                                  className: (0, _.$)(ne().feedbackButton, { [ne().feedbackButton_active]: a.isLiked }),
                                                                  onClick: r,
                                                                  'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP,
                                                                  children: [
                                                                      (0, u.jsx)(Z.I, {
                                                                          variant: 'thumbUp',
                                                                          size: 'xxs',
                                                                          'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP_ICON,
                                                                      }),
                                                                      (0, u.jsx)(S.HL, {
                                                                          variant: 'span',
                                                                          type: 'text',
                                                                          size: 'l',
                                                                          weight: 'medium',
                                                                          'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP_TEXT,
                                                                          children: (0, u.jsx)(O.A, { id: 'words.like' }),
                                                                      }),
                                                                  ],
                                                              }),
                                                              (0, u.jsx)('div', { className: ne().feedbackDivider }),
                                                              (0, u.jsxs)(na, {
                                                                  actionType: x.ActionType.Dislike,
                                                                  'aria-pressed': a.isDisliked,
                                                                  variant: 'text',
                                                                  withRipple: !1,
                                                                  className: (0, _.$)(ne().feedbackButton, { [ne().feedbackButton_active]: a.isDisliked }),
                                                                  onClick: s,
                                                                  'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN,
                                                                  children: [
                                                                      (0, u.jsx)(Z.I, {
                                                                          variant: 'thumbDown',
                                                                          size: 'xxs',
                                                                          'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN_ICON,
                                                                      }),
                                                                      (0, u.jsx)(S.HL, {
                                                                          variant: 'span',
                                                                          type: 'text',
                                                                          size: 'l',
                                                                          weight: 'medium',
                                                                          'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN_TEXT,
                                                                          children: (0, u.jsx)(O.A, { id: 'words.dislike' }),
                                                                      }),
                                                                  ],
                                                              }),
                                                          ],
                                                      }),
                                                  }),
                                              }),
                                      ],
                                  }),
                        );
                    return (
                        (0, p.useEffect)(() => {
                            B();
                        }, [m, B]),
                        (0, u.jsxs)(u.Fragment, {
                            children: [
                                (0, u.jsx)('div', {
                                    className: ne().closeButtonWrapper,
                                    children: (0, u.jsx)(P.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'm',
                                        icon: (0, u.jsx)(Z.I, { variant: 'close', size: 'xs' }),
                                        onClick: o,
                                        'aria-label': d({ id: 'interface-actions.close' }),
                                        'data-test-id': f.Kq.words.WORDS_CARD_FULLSCREEN_CLOSE_BUTTON,
                                    }),
                                }),
                                (0, u.jsxs)('div', {
                                    className: ne().layout,
                                    children: [
                                        (0, u.jsx)('div', {
                                            className: (0, _.$)(ne().contentArea, { [ne().contentArea_withMessageScroll]: A }),
                                            onClick: I,
                                            children: M,
                                        }),
                                        (null == a ? void 0 : a.isFact) && (0, u.jsx)(no, { className: ne().disclaimer }),
                                    ],
                                }),
                            ],
                        })
                    );
                }),
                nv = (0, m.PA)((e) => {
                    let { card: t, feedbackMessage: i, onLike: a, onDislike: n, onClose: r, onScreenClosed: s } = e,
                        {
                            words: o,
                            settings: { isMobile: l },
                        } = (0, Y.g)(),
                        c = (0, j.c)((e) => {
                            (o.bigCardFullscreen.onOpenChange(e), e || r());
                        });
                    return (0, u.jsx)(aT.a, {
                        className: ne().root,
                        open: o.bigCardFullscreen.isOpened,
                        onOpenChange: c,
                        onClose: r,
                        size: 'fullscreen',
                        placement: 'center',
                        showHeader: !1,
                        isMobile: l,
                        contentClassName: ne().modalContent,
                        'data-test-id': f.Kq.words.WORDS_CARD_FULLSCREEN_MODAL,
                        children: (0, u.jsx)(C.F, {
                            blockId: x.EntityTypes.WordsInWave,
                            blockType: x.EntityTypes.WordsInWave,
                            blockPosX: 1,
                            blockPosY: 1,
                            objectsCount: 1,
                            children: (0, u.jsx)(nb, { card: t, feedbackMessage: i, onLike: a, onDislike: n, onClose: r, onScreenClosed: s }),
                        }),
                    });
                });
            var nh = i(12799),
                ng = i.n(nh);
            let nx = (0, m.PA)((e) => {
                let { card: t, onLike: i, onDislike: a } = e,
                    n = t.actions;
                return (
                    (0, ta.u)(),
                    (0, u.jsxs)('div', {
                        className: ng().root,
                        'data-test-id': f.Kq.words.WORDS_CARD_POPOVER_DESKTOP,
                        children: [
                            n &&
                                n.length > 0 &&
                                (0, u.jsxs)(u.Fragment, {
                                    children: [
                                        n.map((e, t) =>
                                            (0, u.jsx)(
                                                C.F,
                                                {
                                                    blockId: x.EntityTypes.WordsInWave,
                                                    blockType: x.EntityTypes.WordsInWave,
                                                    blockPosX: 1,
                                                    blockPosY: 1,
                                                    objectsCount: n.length,
                                                    children: (0, u.jsx)(tn.B, {
                                                        objectType: x.DomainObjectType.Link,
                                                        objectId: e.url,
                                                        objectPosX: t + 1,
                                                        objectPosY: 1,
                                                        children: (0, u.jsxs)(nn, {
                                                            url: e.url,
                                                            className: (0, _.$)(ng().item, ng().actionItem, ng().sourceItem, {
                                                                [ng().sourceItem_withoutIcon]: !e.faviconUrl,
                                                            }),
                                                            children: [
                                                                e.faviconUrl &&
                                                                    (0, u.jsx)(N._V, {
                                                                        src: e.faviconUrl,
                                                                        fit: 'cover',
                                                                        'aria-hidden': !0,
                                                                        className: ng().sourceIcon,
                                                                        'data-test-id': f.Kq.words.WORDS_CARD_LINK_SOURCE_ICON,
                                                                    }),
                                                                (0, u.jsx)(S.HL, {
                                                                    variant: 'span',
                                                                    type: 'text',
                                                                    size: 'l',
                                                                    weight: 'medium',
                                                                    lineClamp: 1,
                                                                    'data-test-id': f.Kq.words.WORDS_CARD_LINK_SOURCE_TEXT,
                                                                    children: e.title,
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                },
                                                e.url,
                                            ),
                                        ),
                                        (0, u.jsx)('div', { className: ng().divider }),
                                    ],
                                }),
                            (0, u.jsxs)(C.F, {
                                blockId: x.EntityTypes.WordsInWave,
                                blockType: x.EntityTypes.WordsInWave,
                                blockPosX: 1,
                                blockPosY: 2,
                                objectsCount: 2,
                                children: [
                                    (0, u.jsx)(tn.B, {
                                        objectType: x.DomainObjectType.Fact,
                                        objectId: t.id,
                                        objectPosX: 1,
                                        objectPosY: 1,
                                        children: (0, u.jsxs)(na, {
                                            actionType: t.isLiked ? x.ActionType.Unlike : x.ActionType.Like,
                                            'aria-pressed': t.isLiked,
                                            variant: 'text',
                                            withHover: !1,
                                            className: (0, _.$)(ng().item, ng().actionItem, { [ng().actionItem_active]: t.isLiked }),
                                            onClick: i,
                                            'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP,
                                            children: [
                                                (0, u.jsx)(Z.I, { variant: 'thumbUp', size: 'xs', 'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP_ICON }),
                                                (0, u.jsx)(S.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'l',
                                                    weight: 'medium',
                                                    'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP_TEXT,
                                                    children: (0, u.jsx)(O.A, { id: 'words.like' }),
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, u.jsx)(tn.B, {
                                        objectType: x.DomainObjectType.Fact,
                                        objectId: t.id,
                                        objectPosX: 1,
                                        objectPosY: 2,
                                        children: (0, u.jsxs)(na, {
                                            actionType: x.ActionType.Dislike,
                                            'aria-pressed': t.isDisliked,
                                            variant: 'text',
                                            withHover: !1,
                                            className: (0, _.$)(ng().item, ng().actionItem, { [ng().actionItem_active]: t.isDisliked }),
                                            onClick: a,
                                            'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN,
                                            children: [
                                                (0, u.jsx)(Z.I, {
                                                    variant: 'thumbDown',
                                                    size: 'xs',
                                                    'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN_ICON,
                                                }),
                                                (0, u.jsx)(S.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'l',
                                                    weight: 'medium',
                                                    'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN_TEXT,
                                                    children: (0, u.jsx)(O.A, { id: 'words.dislike' }),
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                            t.isFact && (0, u.jsxs)(u.Fragment, { children: [(0, u.jsx)('div', { className: ng().divider }), (0, u.jsx)(no, {})] }),
                        ],
                    })
                );
            });
            var nA = i(90437),
                nC = i.n(nA);
            let nf = (0, m.PA)((e) => {
                let { card: t, onLike: i, onDislike: a } = e,
                    { formatMessage: n } = (0, v.A)(),
                    r = t.actions;
                (0, ta.u)();
                let s = n({ id: 'words.like' }),
                    o = n({ id: 'words.dislike' });
                return (0, u.jsxs)('div', {
                    className: nC().root,
                    'data-test-id': f.Kq.words.WORDS_CARD_POPOVER_MOBILE,
                    children: [
                        (0, u.jsxs)('div', {
                            className: nC().container,
                            children: [
                                (0, u.jsx)(S.DZ, { variant: 'div', size: 'xs', weight: 'bold', lineClamp: 5, className: nC().text, children: t.text }),
                                t.action &&
                                    t.action.url &&
                                    (0, u.jsx)(C.F, {
                                        blockId: x.EntityTypes.WordsInWave,
                                        blockType: x.EntityTypes.WordsInWave,
                                        blockPosX: 1,
                                        blockPosY: 1,
                                        objectsCount: 1,
                                        children: (0, u.jsx)(tn.B, {
                                            objectType: x.DomainObjectType.Link,
                                            objectId: t.action.url,
                                            objectPosX: 1,
                                            objectPosY: 1,
                                            children: (0, u.jsx)(nn, {
                                                url: t.action.url,
                                                className: nC().action,
                                                children: (0, u.jsx)(S.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'l',
                                                    weight: 'medium',
                                                    lineClamp: 2,
                                                    children: t.action.title,
                                                }),
                                            }),
                                        }),
                                    }),
                                r &&
                                    r.length > 0 &&
                                    (0, u.jsx)('div', {
                                        className: nC().sources,
                                        children: r.map((e, t) =>
                                            (0, u.jsx)(
                                                C.F,
                                                {
                                                    blockId: x.EntityTypes.WordsInWave,
                                                    blockType: x.EntityTypes.WordsInWave,
                                                    blockPosX: 1,
                                                    blockPosY: 2,
                                                    objectsCount: r.length,
                                                    children: (0, u.jsx)(tn.B, {
                                                        objectType: x.DomainObjectType.Link,
                                                        objectId: e.url,
                                                        objectPosX: t + 1,
                                                        objectPosY: 1,
                                                        children: (0, u.jsxs)(nn, {
                                                            url: e.url,
                                                            className: (0, _.$)(nC().sourceItem, { [nC().sourceItem_withoutIcon]: !e.faviconUrl }),
                                                            children: [
                                                                e.faviconUrl &&
                                                                    (0, u.jsx)(N._V, {
                                                                        src: e.faviconUrl,
                                                                        fit: 'cover',
                                                                        'aria-hidden': !0,
                                                                        className: nC().sourceIcon,
                                                                        'data-test-id': f.Kq.words.WORDS_CARD_LINK_SOURCE_ICON,
                                                                    }),
                                                                (0, u.jsx)(S.HL, {
                                                                    variant: 'span',
                                                                    type: 'text',
                                                                    size: 'm',
                                                                    weight: 'medium',
                                                                    lineClamp: 1,
                                                                    'data-test-id': f.Kq.words.WORDS_CARD_LINK_SOURCE_TEXT,
                                                                    children: e.title,
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                },
                                                e.url,
                                            ),
                                        ),
                                    }),
                            ],
                        }),
                        (0, u.jsxs)('div', {
                            children: [
                                (0, u.jsxs)('div', {
                                    className: nC().feedbackSection,
                                    children: [
                                        (0, u.jsx)(S.HL, {
                                            variant: 'div',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            className: nC().feedbackQuestion,
                                            children: (0, u.jsx)(O.A, { id: 'words.show-more' }),
                                        }),
                                        (0, u.jsx)('div', {
                                            className: nC().feedbackButtons,
                                            children: (0, u.jsxs)(C.F, {
                                                blockId: x.EntityTypes.WordsInWave,
                                                blockType: x.EntityTypes.WordsInWave,
                                                blockPosX: 1,
                                                blockPosY: 3,
                                                objectsCount: 2,
                                                children: [
                                                    (0, u.jsx)(tn.B, {
                                                        objectType: x.DomainObjectType.Fact,
                                                        objectId: t.id,
                                                        objectPosX: 1,
                                                        objectPosY: 1,
                                                        children: (0, u.jsx)(na, {
                                                            actionType: t.isLiked ? x.ActionType.Unlike : x.ActionType.Like,
                                                            variant: 'text',
                                                            color: 'secondary',
                                                            size: 'l',
                                                            radius: 'round',
                                                            withRipple: !1,
                                                            className: (0, _.$)(nC().feedbackButton, { [nC().feedbackButton_active]: t.isLiked }),
                                                            'aria-label': s,
                                                            'aria-pressed': t.isLiked,
                                                            onClick: i,
                                                            'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP,
                                                            children: (0, u.jsx)(Z.I, {
                                                                variant: 'thumbUp',
                                                                size: 'xs',
                                                                'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP_ICON,
                                                            }),
                                                        }),
                                                    }),
                                                    (0, u.jsx)(tn.B, {
                                                        objectType: x.DomainObjectType.Fact,
                                                        objectId: t.id,
                                                        objectPosX: 1,
                                                        objectPosY: 2,
                                                        children: (0, u.jsx)(na, {
                                                            actionType: x.ActionType.Dislike,
                                                            variant: 'text',
                                                            size: 'l',
                                                            radius: 'round',
                                                            withRipple: !1,
                                                            className: (0, _.$)(nC().feedbackButton, { [nC().feedbackButton_active]: t.isDisliked }),
                                                            'aria-label': o,
                                                            'aria-pressed': t.isDisliked,
                                                            onClick: a,
                                                            'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN,
                                                            children: (0, u.jsx)(Z.I, {
                                                                variant: 'thumbDown',
                                                                size: 'xs',
                                                                'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN_ICON,
                                                            }),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                                t.isFact && (0, u.jsx)(no, {}),
                            ],
                        }),
                    ],
                });
            });
            var ny = i(75042),
                nj = i.n(ny);
            let nT = (e) => {
                    let { text: t, faceCover: i, className: a } = e,
                        n = (0, aU.D)();
                    return (0, u.jsxs)(S.HL, {
                        ref: n,
                        variant: 'span',
                        type: 'text',
                        size: 'l',
                        weight: 'medium',
                        lineClamp: 3,
                        className: a,
                        'data-test-id': f.Kq.words.WORDS_CARD_TEXT,
                        children: [
                            i &&
                                (0, u.jsx)(N._V, {
                                    src: i,
                                    size: 'orig',
                                    fit: 'contain',
                                    withAvatarReplace: !0,
                                    withFallback: !1,
                                    withLoadingIndicator: !1,
                                    className: nj().lumenAvatar,
                                    'aria-hidden': !0,
                                }),
                            t,
                        ],
                    });
                },
                nk = (0, m.PA)((e) => {
                    var t, i, a, n, r;
                    let { card: s, trackId: o, isLoading: l, className: c } = e,
                        {
                            words: d,
                            settings: { isMobile: m },
                        } = (0, Y.g)(),
                        { faceCover: b } = (0, az.x)(),
                        h = (() => {
                            var e;
                            let { words: t } = (0, Y.g)(),
                                i = (0, tk.S)(),
                                [a, n] = (0, p.useState)(),
                                [r, s] = (0, p.useState)(),
                                o = null == (e = t.activeBigCard) ? void 0 : e.id,
                                l = (0, j.c)(() => {
                                    t.bigCardFullscreen.close();
                                }),
                                c = (0, j.c)(() => {
                                    t.bigCardFullscreen.isOpened || (n(void 0), s(void 0));
                                }),
                                d = (0, j.c)((e, a) => {
                                    var r;
                                    let o = Array.from(null != (r = e.bigCardIds) ? r : [])[0];
                                    o && (s(o), n(e), i({ to: x.AppScreen.FactScreen }), t.bigCardFullscreen.open(), t.loadBigCard(o, a, e.id));
                                });
                            ((0, p.useEffect)(() => {
                                t.bigCardFullscreen.isOpened && t.bigCardLoadingState.isRejected && l();
                            }, [l, t.bigCardLoadingState.isRejected, t.bigCardFullscreen.isOpened]),
                                (0, p.useEffect)(() => {
                                    t.bigCardFullscreen.isOpened && t.bigCardLoadingState.isResolved && a && r && o === r && t.markBigCardViewed(a.id, r);
                                }, [o, r, a, t, t.bigCardLoadingState.isResolved, t.bigCardFullscreen.isOpened]));
                            let u = aG({ card: a, onClose: l });
                            return { openedCard: a, open: d, close: l, onScreenClosed: c, feedback: u };
                        })(),
                        g = (0, tk.S)(),
                        C = (0, aU.D)(),
                        [y, T] = (0, p.useState)(!1),
                        [P, N] = (0, p.useState)(void 0),
                        I = (0, p.useRef)(null),
                        E = ((e) => {
                            let { formatMessage: t } = (0, v.A)(),
                                i = (0, p.useMemo)(
                                    () => [
                                        t({ id: 'words.loading-phrase-collecting-interesting' }),
                                        t({ id: 'words.loading-phrase-tuning' }),
                                        t({ id: 'words.loading-phrase-catching' }),
                                        t({ id: 'words.loading-phrase-reading' }),
                                        t({ id: 'words.loading-phrase-studying' }),
                                    ],
                                    [t],
                                ),
                                a = (0, p.useRef)(0),
                                [n, r] = (0, p.useState)(() => {
                                    var t;
                                    if (!e) return null;
                                    let n = Math.floor(Math.random() * i.length);
                                    return ((a.current = n), null != (t = i[n]) ? t : null);
                                }),
                                s = (0, p.useRef)(e),
                                o = (0, p.useRef)(null),
                                l = (0, p.useRef)(e);
                            if (((s.current = e), e && !l.current)) {
                                var c;
                                let e = Math.floor(Math.random() * i.length);
                                ((a.current = e), r(null != (c = i[e]) ? c : null));
                            }
                            return (
                                (l.current = e),
                                (0, p.useEffect)(() => {
                                    if (null !== n && !o.current)
                                        return (
                                            (o.current = setTimeout(() => {
                                                if (((o.current = null), s.current)) {
                                                    var e;
                                                    ((a.current = (a.current + 1) % i.length), r(null != (e = i[a.current]) ? e : i[0]));
                                                    return;
                                                }
                                                r(null);
                                            }, 2500)),
                                            () => {
                                                o.current && (clearTimeout(o.current), (o.current = null));
                                            }
                                        );
                                }, [i, n]),
                                n
                            );
                        })(!!l),
                        B = null !== E,
                        w = !!((null == s ? void 0 : s.isBigCardFullscreenEnabled) || (null == (t = h.openedCard) ? void 0 : t.isBigCardFullscreenEnabled)),
                        O =
                            (null == s ? void 0 : s.withBigCardPanel) ||
                            (null == s ? void 0 : s.isBigCardFullscreenEnabled) ||
                            (null == s ? void 0 : s.withDirectLinkNavigation),
                        {
                            handleLike: M,
                            handleDislike: R,
                            feedbackMessage: L,
                        } = aG({
                            card: s,
                            onClose: (0, j.c)(() => {
                                T(!1);
                            }),
                        }),
                        { feedbackMessage: V } = h.feedback,
                        W = !!(L || V),
                        D = !(s && (!(null == s ? void 0 : s.isDisliked) || W)) && !B,
                        F = !s || (null == s ? void 0 : s.isDisliked) || W || B,
                        U = !l && !B && (!s || s.isDisliked),
                        z = d.isBigCardPanelEnabled ? U : !(null == s ? void 0 : s.withBigCardPanel),
                        H = (null == s ? void 0 : s.isLumenFaceAvatarEnabled) && !!b,
                        K = B ? 'loading' : 'content-'.concat(null == s ? void 0 : s.id),
                        X = (null == s ? void 0 : s.isPersonal) ? x.DomainObjectType.PersonalFact : x.DomainObjectType.Fact,
                        G = (0, j.c)((e) => {
                            (!e || !F) &&
                                ((e && null != s && s.withDirectLinkNavigation) ||
                                    (e && m && I.current && N(window.innerHeight - I.current.getBoundingClientRect().top + 12),
                                    e && g({ to: x.AppScreen.FactScreen }),
                                    T(e)));
                        }),
                        q = (0, eH.Z)(null != (a = null == s || null == (i = s.action) ? void 0 : i.url) ? a : ''),
                        $ = (0, j.c)(() => {
                            var e;
                            (null == s || null == (e = s.action) ? void 0 : e.url) && (g({ to: x.AppScreen.Link, deepLink: s.action.url }), q());
                        }),
                        Z = (0, j.c)(() => {
                            if (!F && s) {
                                if (s.isInformer && !s.withBigCardPanel) return void $();
                                !d.bigCardPanel.card &&
                                    !d.bigCardFullscreen.isOpened &&
                                    (s.withBigCardPanel
                                        ? (d.bigCardPanel.open(o), d.bigCardPanel.isOpened && d.bigCardPanel.trackId === o && g({ to: x.AppScreen.LumenFactScreen }))
                                        : (null == s ? void 0 : s.isBigCardFullscreenEnabled) && h.open(s, o));
                            }
                        }),
                        J = (0, j.c)((e) => {
                            e.target === e.currentTarget && (e.code === aS.v.SPACE || e.code === aS.v.ENTER) && (e.preventDefault(), Z());
                        }),
                        Q = (0, k.L)(() => {
                            var e, t, i, a;
                            return B
                                ? (0, u.jsx)(a7, { children: E })
                                : W
                                  ? (0, u.jsx)(S.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'medium',
                                        lineClamp: 3,
                                        className: nj().text,
                                        'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_MESSAGE,
                                        children: L || V,
                                    })
                                  : null != s && s.isDisliked
                                    ? void 0
                                    : (0, u.jsxs)(u.Fragment, {
                                          children: [
                                              (null == s ? void 0 : s.text) &&
                                                  (0, u.jsx)(
                                                      tn.B,
                                                      {
                                                          objectType: null != (e = s.domainObjectType) ? e : X,
                                                          objectId: null != (t = null == s ? void 0 : s.analyticObjectId) ? t : '',
                                                          objectPosX: 1,
                                                          objectPosY: 1,
                                                          children: (0, u.jsx)(nT, { text: s.text, faceCover: H ? b : void 0, className: nj().text }, K),
                                                      },
                                                      null == s ? void 0 : s.id,
                                                  ),
                                              (null == s ? void 0 : s.action) &&
                                                  s.action.url &&
                                                  (0, u.jsx)(
                                                      tn.B,
                                                      {
                                                          objectType: null != (i = null == s ? void 0 : s.domainObjectType) ? i : x.DomainObjectType.Link,
                                                          objectId: s.action.url,
                                                          objectPosX: 1,
                                                          objectPosY: 2,
                                                          children: (0, u.jsx)(
                                                              ni,
                                                              {
                                                                  url: s.action.url,
                                                                  title: s.action.title,
                                                                  className: nj().action,
                                                                  analyticObjectId: null != (a = s.analyticObjectId) ? a : '',
                                                              },
                                                              ''.concat(K, '-action'),
                                                          ),
                                                      },
                                                      s.action.url,
                                                  ),
                                          ],
                                      });
                        }),
                        ee = (0, k.L)(() => {
                            if (m && P) return { '--words-popover-height': ''.concat(P, 'px') };
                        }),
                        et = m ? nf : nx,
                        ei = (0, u.jsxs)('div', {
                            ref: d.isBigCardPanelEnabled || s || l ? void 0 : C,
                            className: (0, _.$)(nj().root, { [nj().root_disabled]: F }, c),
                            role: 'button',
                            tabIndex: 0,
                            onClick: O ? Z : void 0,
                            onKeyDown: O ? J : void 0,
                            'data-test-id': f.Kq.words.WORDS_CARD,
                            children: [
                                z &&
                                    (0, u.jsx)(a5, {
                                        className: (0, _.$)(nj().badge, {
                                            [nj().badge_centered]: D,
                                            [nj().badge_centeredSparkles]: D && d.withSparkles,
                                            [nj().badge_loading]: B,
                                        }),
                                        dimmed: D,
                                        isFact: (null == s ? void 0 : s.isFact) && !F,
                                    }),
                                (0, u.jsx)('div', { className: (0, _.$)(nj().content, { [nj().content_hidden]: D }), ref: I, children: Q }),
                            ],
                        });
                    return w
                        ? (0, u.jsxs)(u.Fragment, {
                              children: [
                                  ei,
                                  (0, u.jsx)(
                                      A.a,
                                      {
                                          pageId: x.AppScreen.FactScreen,
                                          pageIdForFrom: eF.b.FACT_SCREEN,
                                          mainObjectId: null == (n = h.openedCard) ? void 0 : n.id,
                                          mainObjectType: x.DomainObjectType.Fact,
                                          pageStyle: x.PageStyles.Fullscreen,
                                          pagePlacement: x.PagePlacements.Fullscreen,
                                          children: (0, u.jsx)(nv, {
                                              card: h.openedCard,
                                              feedbackMessage: V,
                                              onLike: h.feedback.handleLike,
                                              onDislike: h.feedback.handleDislike,
                                              onClose: h.close,
                                              onScreenClosed: h.onScreenClosed,
                                          }),
                                      },
                                      null == (r = h.openedCard) ? void 0 : r.id,
                                  ),
                              ],
                          })
                        : (null == s ? void 0 : s.withBigCardPanel)
                          ? ei
                          : (0, u.jsxs)(em.AM, {
                                isMobile: m,
                                placement: m ? 'bottom' : 'top',
                                open: y,
                                onOpenChange: G,
                                positionElement: m ? void 0 : I.current,
                                offsetOptions: m ? void 0 : 12,
                                style: ee,
                                children: [
                                    ei,
                                    (0, u.jsx)(em.hl, {
                                        className: nj().popoverContent,
                                        children: (0, u.jsx)(A.a, {
                                            pageId: x.AppScreen.FactScreen,
                                            pageIdForFrom: eF.b.FACT_SCREEN,
                                            mainObjectId: null == s ? void 0 : s.id,
                                            mainObjectType: x.DomainObjectType.Fact,
                                            pageStyle: m ? x.PageStyles.Sheet : x.PageStyles.Popup,
                                            pagePlacement: m ? x.PagePlacements.Bottom : x.PagePlacements.Floating,
                                            children: s && (0, u.jsx)(et, { card: s, onLike: M, onDislike: R }),
                                        }),
                                    }),
                                ],
                            });
                }),
                nP = (0, m.PA)((e) => {
                    var t, i, a, n;
                    let { className: r, trackId: s } = e,
                        { words: o } = (0, Y.g)(),
                        l = (() => {
                            let e = (0, H.N)();
                            return (0, p.useMemo)(() => {
                                let t = e.get(z.WA),
                                    i = null == t ? void 0 : t.getPassportUid();
                                if (!i) return;
                                let a = new aF(String(i));
                                return (a.openDatabase(), a);
                            }, [e]);
                        })();
                    (() => {
                        let e = (0, th.e)(),
                            { words: t, sonataState: i } = (0, Y.g)();
                        (0, p.useEffect)(() => {
                            if (!e) return;
                            let a = e.state.queueState,
                                n = () => {
                                    let e = a.entityList.value,
                                        t = a.order.value,
                                        i = a.index.value;
                                    return e && null != i
                                        ? ((e, t, i) => ({
                                              trackIds: Array.from({ length: t.length > 0 ? t.length : e.length }, (i, a) => {
                                                  var n, r, s, o, l;
                                                  let c =
                                                      null == (o = e[t.length > 0 && null != (l = t[a]) ? l : a]) ||
                                                      null == (s = o.entity) ||
                                                      null == (r = s.data) ||
                                                      null == (n = r.meta)
                                                          ? void 0
                                                          : n.id;
                                                  return void 0 !== c ? String(c) : void 0;
                                              }),
                                              currentIndex: i,
                                          }))(e, t || [], i)
                                        : null;
                                },
                                r = a.currentEntity.onChange((e) => {
                                    ((e) => {
                                        if (i.isGenerativeContext) return;
                                        let a = n();
                                        if (!a) return;
                                        let r = aO({ queueState: a, backwardSize: 3, forwardSize: 17 });
                                        t.evict(new Set(r));
                                        let s =
                                                e === aB.So.MOVE_FORWARD ||
                                                e === aB.So.DISLIKE_MOVE_FORWARD ||
                                                e === aB.So.AUTO_MOVE_FORWARD ||
                                                e === aB.So.ERROR_MOVE_FORWARD,
                                            o = e === aB.So.MOVE_BACKWARD,
                                            l = [];
                                        (s && aM({ queueState: a, direction: 'forward', isRequested: t.isTrackRequested })
                                            ? (l = aw({ queueState: a, direction: 'forward', batchSize: 17 }))
                                            : o && aM({ queueState: a, direction: 'backward', isRequested: t.isTrackRequested })
                                              ? (l = aw({ queueState: a, direction: 'backward', batchSize: 3 }))
                                              : s || o || (l = r),
                                            l.length > 0 && t.loadCards(l));
                                    })(null == e ? void 0 : e.lastChangeMethod);
                                }),
                                s = a.entityList.onChange(() => {
                                    (() => {
                                        if (i.isGenerativeContext) return;
                                        let e = n();
                                        if (!e) return;
                                        let a = aO({ queueState: e, backwardSize: 3, forwardSize: 17 });
                                        a.length > 0 && t.loadCards(a);
                                    })();
                                });
                            return () => {
                                (null == r || r(), null == s || s());
                            };
                        }, [e, i, t]);
                    })();
                    let c = o.getCardForTrack(s);
                    if (
                        ((0, p.useEffect)(() => {
                            o.setWordsViewedStore(l);
                        }, [o, l]),
                        (0, p.useEffect)(() => {
                            c && o.markCardViewed(c.id);
                        }, [c, o]),
                        !s)
                    )
                        return null;
                    let d = String(s),
                        _ = !c && o.isLoading(d),
                        m = o.isBigCardPanelEnabled ? void 0 : x.DomainObjectType.SleepingAlice,
                        b = (null == c ? void 0 : c.isPersonal) ? x.DomainObjectType.PersonalFact : void 0,
                        v = null != (t = null != b ? b : m) ? t : x.DomainObjectType.Fact,
                        h = null != (i = null == c ? void 0 : c.domainObjectType) ? i : v,
                        g = null != (n = null != (a = null == c ? void 0 : c.analyticObjectId) ? a : m) ? n : '';
                    return (0, u.jsx)(C.F, {
                        blockId: x.EntityTypes.WordsInWave,
                        blockType: x.EntityTypes.WordsInWave,
                        blockPosX: 1,
                        blockPosY: 2,
                        objectsCount: (null == c ? void 0 : c.action) ? 2 : 1,
                        children: (0, u.jsx)(tn.B, {
                            objectType: h,
                            objectId: g,
                            objectPosX: 1,
                            objectPosY: (null == c ? void 0 : c.action) && c.action.url ? 2 : 1,
                            children: (0, u.jsx)(nk, { card: c, trackId: d, isLoading: _, className: r }),
                        }),
                    });
                });
            var nN = i(16967),
                nI = i(56194),
                nE = i.n(nI),
                nS = i(73170),
                nB = i(5120),
                nw = i(99954),
                nO = i.n(nw);
            let nM = (0, m.PA)((e) => {
                let { className: t } = e,
                    {
                        words: { bigCardPanel: i },
                    } = (0, Y.g)(),
                    { formatMessage: a } = (0, v.A)(),
                    { handleLike: n, handleDislike: r } = (() => {
                        let {
                                words: { bigCardPanel: e },
                            } = (0, Y.g)(),
                            { notify: t } = (0, aY.l)(),
                            { formatMessage: i } = (0, v.A)(),
                            a = (0, j.c)(async (a) => {
                                let n = e.card;
                                if (!(!n || !e.isOpened || e.isFeedbackMessageVisible || n.isFeedbackPending))
                                    try {
                                        (a !== aH.a.NEUTRAL && e.showFeedbackMessage(a), await n.sendFeedback(a, !0));
                                    } catch (a) {
                                        if (!(0, nB._n)(e) || !e.isOpened || e.card !== n) return;
                                        (e.hideFeedbackMessage(),
                                            t((0, u.jsx)(aX.h, { error: i({ id: 'error-messages.error-during-action' }) }), { containerId: aK.u.ERROR }));
                                    }
                            });
                        return {
                            handleLike: (0, j.c)(() => {
                                var t;
                                return a((null == (t = e.card) ? void 0 : t.isLiked) ? aH.a.NEUTRAL : aH.a.LIKE);
                            }),
                            handleDislike: (0, j.c)(() => a(aH.a.DISLIKE)),
                        };
                    })(),
                    { card: s, isFeedbackDisabled: o } = i;
                return (0, u.jsxs)('div', {
                    className: (0, _.$)(nO().root, t),
                    children: [
                        (0, u.jsx)(na, {
                            actionType: (null == s ? void 0 : s.isLiked) ? x.ActionType.Unlike : x.ActionType.Like,
                            variant: 'text',
                            size: 'm',
                            withRipple: !1,
                            disabled: o,
                            'aria-label': a({ id: 'words.like' }),
                            'aria-pressed': null == s ? void 0 : s.isLiked,
                            className: (0, _.$)(nO().button, { [nO().button_active]: null == s ? void 0 : s.isLiked }),
                            onClick: n,
                            'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP,
                            children: (0, u.jsx)(Z.I, { variant: 'thumbUp', size: 'xxs' }),
                        }),
                        (0, u.jsx)('div', { className: nO().divider, 'aria-hidden': !0 }),
                        (0, u.jsx)(na, {
                            actionType: x.ActionType.Dislike,
                            variant: 'text',
                            size: 'm',
                            withRipple: !1,
                            disabled: o,
                            'aria-label': a({ id: 'words.dislike' }),
                            'aria-pressed': null == s ? void 0 : s.isDisliked,
                            className: (0, _.$)(nO().button, { [nO().button_active]: null == s ? void 0 : s.isDisliked }),
                            onClick: r,
                            'data-test-id': f.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN,
                            children: (0, u.jsx)(Z.I, { variant: 'thumbDown', size: 'xxs' }),
                        }),
                    ],
                });
            });
            var nR = i(19994),
                nL = i(22136),
                nV = i.n(nL);
            let nW = (0, m.PA)((e) => {
                let { className: t } = e,
                    { lumen: i } = (0, Y.g)(),
                    { fullCover: a } = (0, az.x)(),
                    n = i.isNeededToLoad || i.isLoading,
                    r = (0, k.L)(() =>
                        n
                            ? (0, u.jsx)(nR.W, { className: nV().image, radius: 'l', isActive: !0 })
                            : (0, u.jsx)(N._V, { src: a, fit: 'contain', size: 'orig', withAvatarReplace: !0, withLoadingIndicator: !0, className: nV().image }),
                    );
                return (0, u.jsx)('div', { className: (0, _.$)(nV().root, t), 'aria-hidden': !0, children: r });
            });
            var nD = i(71066),
                nF = i.n(nD);
            let nU = (0, m.PA)((e) => {
                let { className: t, objectPosY: i } = e,
                    { words: a } = (0, Y.g)(),
                    { sourceItems: n, bigCard: r } = a.bigCardPanel;
                return (0, u.jsx)(C.F, {
                    blockId: x.EntityTypes.WordsInWave,
                    blockType: x.EntityTypes.WordsInWave,
                    blockPosX: 1,
                    blockPosY: 1,
                    objectsCount: n.length,
                    children: n.map((e, a) => {
                        var n;
                        return (0, u.jsx)(
                            tn.B,
                            {
                                objectType: x.DomainObjectType.Link,
                                objectId: null != (n = null == r ? void 0 : r.id) ? n : '',
                                objectPosX: a + 1,
                                objectPosY: i,
                                children: (0, u.jsxs)(nn, {
                                    url: e.url,
                                    className: (0, _.$)(nF().root, t),
                                    children: [
                                        e.faviconUrl && (0, u.jsx)(N._V, { src: e.faviconUrl, fit: 'cover', className: nF().icon, 'aria-hidden': !0 }),
                                        (0, u.jsx)(S.HL, {
                                            variant: 'span',
                                            type: 'text',
                                            size: 'm',
                                            weight: 'medium',
                                            lineClamp: 1,
                                            className: nF().title,
                                            children: e.title,
                                        }),
                                    ],
                                }),
                            },
                            e.url,
                        );
                    }),
                });
            });
            var nz = i(69515),
                nH = i.n(nz);
            let nK = (e) => {
                let { text: t, className: i, isContentVisible: a } = e,
                    {
                        textRef: n,
                        withTopFade: r,
                        withBottomFade: s,
                        updateScrollEdges: o,
                    } = ((e) => {
                        let { text: t, isContentVisible: i } = e,
                            a = (0, p.useRef)(null),
                            [n, r] = (0, p.useState)(!1),
                            [s, o] = (0, p.useState)(!1),
                            l = (0, j.c)(() => {
                                let e = a.current;
                                if (!e) return;
                                let { scrollTop: t, scrollHeight: i, clientHeight: n } = e,
                                    s = n > 0 && i > n + 1;
                                (r(s && t > 1), o(s && t + n < i - 1));
                            });
                        return (
                            (0, p.useLayoutEffect)(() => {
                                l();
                            }, [i, t, l]),
                            (0, p.useEffect)(() => {
                                let e = a.current;
                                if (!e) return;
                                let t = new ResizeObserver(l);
                                return (
                                    t.observe(e),
                                    document.fonts.addEventListener('loadingdone', l),
                                    () => {
                                        (t.disconnect(), document.fonts.removeEventListener('loadingdone', l));
                                    }
                                );
                            }, [l]),
                            { textRef: a, withTopFade: n, withBottomFade: s, updateScrollEdges: l }
                        );
                    })({ text: t, isContentVisible: a }),
                    l = (0, aU.D)({ enabled: a }),
                    c = (0, n_.S)([n, l]);
                return (0, u.jsx)(S.HL, {
                    ref: c,
                    variant: 'div',
                    size: 'l',
                    weight: 'bold',
                    className: (0, _.$)(nH().root, i, { [nH().root_withTopFade]: r, [nH().root_withBottomFade]: s }),
                    tabIndex: 0,
                    onScroll: o,
                    children: t,
                });
            };
            var nY = i(17114),
                nX = i.n(nY);
            let nG = (e) => {
                let { className: t, isActive: i, motionClassName: a } = e;
                return (0, u.jsx)('div', {
                    className: t,
                    'aria-hidden': !0,
                    children: (0, u.jsxs)('div', {
                        className: (0, _.$)(nX().root, a),
                        children: [
                            (0, u.jsx)(nR.W, { className: nX().item, radius: 'l', isActive: i }),
                            (0, u.jsx)(nR.W, { className: nX().item, radius: 'l', isActive: i }),
                            (0, u.jsx)(nR.W, { className: nX().item, radius: 'l', isActive: i }),
                            (0, u.jsx)(nR.W, { className: nX().item, radius: 'l', isActive: i }),
                        ],
                    }),
                });
            };
            var nq = i(37880),
                n$ = i.n(nq);
            let nZ = (0, m.PA)(() => {
                    var e, t, i, a, n, r, s;
                    let {
                            words: o,
                            settings: { isMobile: l },
                        } = (0, Y.g)(),
                        { formatMessage: c } = (0, v.A)(),
                        d = (() => {
                            let {
                                    words: { bigCardPanel: e },
                                } = (0, Y.g)(),
                                { card: t, isOpened: i, submittedFeedback: a, isFeedbackMessageVisible: n } = e;
                            return (
                                (0, p.useEffect)(() => {
                                    if (!i || !n) return;
                                    let r = setTimeout(() => {
                                        e.isOpened && e.isFeedbackMessageVisible && e.card === t && (a === aH.a.DISLIKE ? e.close() : e.hideFeedbackMessage());
                                    }, 3e3);
                                    return () => clearTimeout(r);
                                }, [e, t, n, i, a]),
                                (0, k.L)(() => (a === aH.a.DISLIKE ? (0, u.jsx)(O.A, { id: 'words.dislike-feedback' }) : (0, u.jsx)(O.A, { id: 'words.like-feedback' })))
                            );
                        })(),
                        { card: m, bigCard: b, objectType: h, mainObjectType: g, isContentReady: A, isFeedbackMessageVisible: C, isOpened: f, text: y } = o.bigCardPanel,
                        [j, T] = (0, p.useState)(() => A),
                        N = !j && (o.isShimmerVisible || A),
                        I = j && A && void 0 !== m,
                        E = j && !C,
                        B = I && f && void 0 !== b && o.bigCardLoadingState.isResolved,
                        {
                            contentAreaRef: w,
                            lumenRef: M,
                            cardContentRef: R,
                            isFeedbackLayout: L,
                        } = ((e) => {
                            let { isFeedbackMessageVisible: t, isPanelOpened: i } = e,
                                a = (0, p.useRef)(null),
                                n = (0, p.useRef)(null),
                                r = (0, p.useRef)(null),
                                s = (0, p.useRef)(null),
                                o = (0, p.useRef)(null),
                                [l, c] = (0, p.useState)(t),
                                d = (0, e1.U)('(prefers-reduced-motion: reduce)');
                            return (
                                (0, p.useLayoutEffect)(() => {
                                    var e, u;
                                    let _ = a.current,
                                        m = n.current;
                                    if (!_ || !m) return;
                                    if (l !== t) {
                                        let e = r.current;
                                        if (!e || !i) return;
                                        o.current = m.getBoundingClientRect().top;
                                        let a = m.offsetHeight;
                                        if (t) {
                                            let t = e.offsetTop,
                                                i = e.offsetHeight;
                                            (_.style.setProperty('--card-content-top', ''.concat(t, 'px')),
                                                _.style.setProperty('--card-content-height', ''.concat(i, 'px')));
                                        }
                                        (_.style.setProperty('--lumen-height', ''.concat(a, 'px')), c(t));
                                        return;
                                    }
                                    let p = o.current;
                                    if (((o.current = null), d)) {
                                        null == (u = s.current) || u.cancel();
                                        return;
                                    }
                                    if (null === p) return;
                                    null == (e = s.current) || e.cancel();
                                    let b = _.getBoundingClientRect().height / _.offsetHeight,
                                        v = (p - m.getBoundingClientRect().top) / b;
                                    if (!Number.isFinite(v) || !v) return;
                                    let h = Number.parseFloat(getComputedStyle(_).getPropertyValue('--words-big-card-panel-motion-duration'));
                                    s.current = m.animate([{ transform: 'translateY('.concat(v, 'px)') }, { transform: 'translateY(0)' }], {
                                        duration: h,
                                        easing: 'ease-out',
                                    });
                                }, [l, t, i, d]),
                                (0, p.useEffect)(
                                    () => () => {
                                        var e;
                                        return null == (e = s.current) ? void 0 : e.cancel();
                                    },
                                    [],
                                ),
                                { contentAreaRef: a, lumenRef: n, cardContentRef: r, isFeedbackLayout: l }
                            );
                        })({ isFeedbackMessageVisible: C, isPanelOpened: f });
                    return (
                        (0, ta.u)(),
                        (0, p.useEffect)(() => {
                            f && A && T(!0);
                        }, [A, f]),
                        (0, p.useEffect)(() => {
                            B && o.markBigCardViewed(m.id, b.id);
                        }, [b, m, B, o]),
                        (0, u.jsxs)('div', {
                            className: n$().root,
                            'data-words-panel-dismiss': !0,
                            children: [
                                (0, u.jsx)(nS.q, { children: (0, u.jsx)('div', { role: 'status', 'aria-atomic': 'true', children: C && d }) }),
                                (0, u.jsxs)('div', {
                                    ref: w,
                                    className: (0, _.$)(n$().contentArea, { [n$().contentArea_mobile]: l, [n$().contentArea_feedback]: L }),
                                    'data-words-panel-dismiss': !0,
                                    children: [
                                        (0, u.jsx)('div', {
                                            ref: M,
                                            className: (0, _.$)(n$().lumen, { [n$().lumen_mobile]: l }),
                                            'aria-hidden': !0,
                                            children: (0, u.jsx)(nW, { className: n$().contentMotion }),
                                        }),
                                        (0, u.jsxs)('div', {
                                            className: (0, _.$)(n$().contentStack, { [n$().contentStack_mobile]: l }),
                                            'aria-busy': N,
                                            'data-words-panel-dismiss': !0,
                                            children: [
                                                (0, u.jsx)(nG, {
                                                    className: (0, _.$)(n$().contentLayer, n$().shimmer, { [n$().contentLayer_visible]: N }),
                                                    motionClassName: n$().contentMotion,
                                                    isActive: N,
                                                }),
                                                (0, u.jsxs)('div', {
                                                    ref: R,
                                                    className: (0, _.$)(n$().contentLayer, n$().content, n$().cardContent, { [n$().contentLayer_visible]: j }),
                                                    'aria-hidden': !E,
                                                    inert: !E,
                                                    'data-words-panel-dismiss': !0,
                                                    children: [
                                                        (0, u.jsxs)('div', {
                                                            className: (0, _.$)(n$().textContainer, n$().contentMotion, { [n$().textContainer_hidden]: !E }),
                                                            'data-words-panel-dismiss': !0,
                                                            children: [
                                                                I &&
                                                                    y &&
                                                                    (0, u.jsx)(tn.B, {
                                                                        objectType: h,
                                                                        objectId: null != (i = null != (t = null == b ? void 0 : b.id) ? t : m.analyticObjectId) ? i : '',
                                                                        objectPosX: 1,
                                                                        objectPosY: 1,
                                                                        children: (0, u.jsx)(
                                                                            nK,
                                                                            { text: y, isContentVisible: f && E },
                                                                            null != (a = null == b ? void 0 : b.id) ? a : m.id,
                                                                        ),
                                                                    }),
                                                                I &&
                                                                    (null == (e = m.action) ? void 0 : e.url) &&
                                                                    (0, u.jsx)(tn.B, {
                                                                        objectType: null != (n = m.domainObjectType) ? n : x.DomainObjectType.Link,
                                                                        objectId: m.action.url,
                                                                        objectPosX: 1,
                                                                        objectPosY: 2,
                                                                        children: (0, u.jsx)(ni, {
                                                                            url: m.action.url,
                                                                            title: m.action.title,
                                                                            className: n$().action,
                                                                            analyticObjectId: null != (r = m.analyticObjectId) ? r : '',
                                                                        }),
                                                                    }),
                                                            ],
                                                        }),
                                                        (0, u.jsx)('div', {
                                                            className: (0, _.$)(n$().feedbackButtons, n$().contentLayer, { [n$().contentLayer_visible]: E }),
                                                            'data-words-panel-dismiss': !0,
                                                            children:
                                                                I &&
                                                                (0, u.jsx)(tn.B, {
                                                                    objectType: b ? h : g,
                                                                    objectId: null != (s = null == b ? void 0 : b.id) ? s : m.id,
                                                                    objectPosX: 1,
                                                                    objectPosY: 3,
                                                                    children: (0, u.jsx)(nM, { className: n$().contentMotion }),
                                                                }),
                                                        }),
                                                    ],
                                                }),
                                                (0, u.jsx)('div', {
                                                    className: (0, _.$)(n$().contentLayer, n$().content, n$().feedback, { [n$().contentLayer_visible]: C }),
                                                    'aria-hidden': !0,
                                                    'data-words-panel-dismiss': !0,
                                                    children: (0, u.jsx)(S.DZ, {
                                                        variant: 'div',
                                                        size: 'm',
                                                        weight: 'bold',
                                                        className: (0, _.$)(n$().feedbackMessage, n$().contentMotion),
                                                        children: d,
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, u.jsx)('div', {
                                            className: (0, _.$)(n$().contentLayer, n$().sources, { [n$().contentLayer_visible]: j, [n$().sources_hidden]: !E }),
                                            'aria-hidden': !E,
                                            inert: !E,
                                            'data-words-panel-dismiss': !0,
                                            children: I && (0, u.jsx)(nU, { objectPosY: 4 }),
                                        }),
                                    ],
                                }),
                                (0, u.jsx)(P.$, {
                                    radius: 'round',
                                    color: 'secondary',
                                    variant: l ? 'text' : 'default',
                                    size: 'm',
                                    icon: (0, u.jsx)(Z.I, { variant: 'arrowDown', size: 'xs', className: (0, _.$)(n$().closeIcon, { [n$().closeIcon_mobile]: l }) }),
                                    onClick: o.bigCardPanel.close,
                                    disabled: !f,
                                    'aria-label': c({ id: 'interface-actions.close' }),
                                    className: (0, _.$)(n$().closeButton, n$().controlsMotion, { [n$().closeButton_mobile]: l }),
                                }),
                                (null == m ? void 0 : m.isLumen) &&
                                    (0, u.jsx)(S.HL, {
                                        variant: 'div',
                                        type: 'text',
                                        size: 's',
                                        weight: 'medium',
                                        role: 'note',
                                        tabIndex: 0,
                                        className: (0, _.$)(n$().disclaimer, n$().controlsMotion, { [n$().disclaimer_mobile]: l }),
                                        children: (0, u.jsx)(O.A, { id: 'words.lumen-description' }),
                                    }),
                            ],
                        })
                    );
                }),
                nJ = { appear: 500, enter: 500, exit: 300 },
                nQ = {
                    appear: nE().enter,
                    appearActive: nE().enter_active,
                    enter: nE().enter,
                    enterActive: nE().enter_active,
                    exit: nE().exit,
                    exitActive: nE().exit_active,
                },
                n0 = (0, m.PA)((e) => {
                    let { onRestoreFocus: t } = e,
                        {
                            words: { bigCardPanel: i },
                            settings: { isMobile: a },
                        } = (0, Y.g)(),
                        { formatMessage: n } = (0, v.A)(),
                        {
                            ref: r,
                            focusPanel: s,
                            restoreFocus: o,
                            handleFocusCapture: l,
                        } = ((e) => {
                            let { onRestoreFocus: t } = e,
                                {
                                    words: { bigCardPanel: i },
                                } = (0, Y.g)(),
                                a = (0, p.useRef)(null),
                                n = (0, p.useRef)(null),
                                { isOpened: r, isFeedbackMessageVisible: s, isFeedbackDisabled: o } = i,
                                l = (0, j.c)(() => {
                                    var e;
                                    null == (e = a.current) || e.focus({ preventScroll: !0 });
                                }),
                                c = (0, j.c)((e) => {
                                    n.current = e.target;
                                }),
                                d = (0, j.c)(() => {
                                    var e;
                                    (document.activeElement === document.body || (null == (e = a.current) ? void 0 : e.contains(document.activeElement))) && t();
                                });
                            return (
                                (0, p.useEffect)(() => {
                                    let e = n.current;
                                    r &&
                                        (s || o) &&
                                        (null == e ? void 0 : e.closest('[inert], :disabled')) &&
                                        (document.activeElement === document.body || document.activeElement === e) &&
                                        l();
                                }, [l, o, s, r]),
                                { ref: a, focusPanel: l, restoreFocus: d, handleFocusCapture: c }
                            );
                        })({ onRestoreFocus: t }),
                        c = (0, e1.U)('(prefers-reduced-motion: reduce)'),
                        d = (0, j.c)(() => {
                            !i.isOpened && i.trackId && (o(), i.reset());
                        });
                    return (
                        (0, p.useEffect)(() => () => i.reset(), [i]),
                        (0, u.jsx)(nN.A, {
                            in: i.isOpened,
                            nodeRef: r,
                            timeout: c ? 0 : nJ,
                            mountOnEnter: !0,
                            unmountOnExit: !0,
                            appear: !0,
                            classNames: nQ,
                            onEnter: s,
                            onExited: d,
                            children: (0, u.jsx)('div', {
                                ref: r,
                                className: (0, _.$)(nE().root, { [nE().root_mobile]: a }),
                                role: 'region',
                                'aria-label': n({ id: 'a11y-regions.words' }),
                                tabIndex: -1,
                                inert: !i.isOpened,
                                onFocusCapture: l,
                                'data-words-panel-dismiss': !0,
                                children: (0, u.jsx)(A.a, {
                                    pageId: x.AppScreen.LumenFactScreen,
                                    pageIdForFrom: eF.b.LUMEN_FACT_SCREEN,
                                    mainObjectType: i.mainObjectType,
                                    mainObjectId: i.cardId,
                                    pageStyle: a ? x.PageStyles.Fullscreen : x.PageStyles.Sheet,
                                    pagePlacement: a ? x.PagePlacements.Fullscreen : x.PagePlacements.Right,
                                    children: (0, u.jsx)(C.F, {
                                        blockId: x.EntityTypes.WordsInWave,
                                        blockType: x.EntityTypes.WordsInWave,
                                        blockPosX: 1,
                                        blockPosY: 1,
                                        objectsCount: 1,
                                        children: (0, u.jsx)(nZ, {}),
                                    }),
                                }),
                            }),
                        })
                    );
                });
            var n1 = i(59927),
                n2 = i(40634),
                n8 = i(82194),
                n9 = i.n(n8);
            let n5 = (0, m.PA)((e) => {
                let { artists: t, open: i, positionElement: a, onOpenChange: n } = e,
                    { formatMessage: r } = (0, v.A)(),
                    {
                        settings: { isMobile: s },
                    } = (0, Y.g)();
                return (0, u.jsxs)(em.AM, {
                    isMobile: s,
                    placement: s ? 'bottom' : 'top',
                    open: i,
                    onOpenChange: n,
                    positionElement: s ? void 0 : a,
                    transform: s,
                    customRoleProps: { role: 'menu' },
                    children: [
                        null,
                        (0, u.jsx)(em.hl, {
                            className: n9().root,
                            'aria-label': r({ id: 'interface-actions.context-menu-artists' }),
                            'data-test-id': f.OA.artists.ARTISTS_MENU,
                            children: (0, u.jsx)('div', {
                                className: n9().menuList,
                                children: t.map((e) => (0, u.jsx)(n2.V, { artist: e, className: n9().menuItem }, e.id)),
                            }),
                        }),
                    ],
                });
            });
            var n6 = i(7227),
                n4 = i(34375),
                n7 = i.n(n4),
                n3 = i(13946);
            let re = (0, m.PA)((e) => {
                let {
                        lineClamp: t,
                        shouldShowMyVibeTitle: i,
                        isNonMusic: a,
                        isGenerative: n,
                        withLink: r,
                        hasMultipleArtists: s,
                        mainAlbum: o,
                        entityTitle: l,
                        artists: c,
                        artistsRef: d,
                        isArtistsMenuOpen: m,
                        onArtistsMenuClick: p,
                    } = e,
                    { formatMessage: b } = (0, v.A)();
                if (i)
                    return (0, u.jsx)(S.HL, {
                        variant: 'span',
                        className: (0, _.$)(n7().text, n7().important),
                        lineClamp: 1,
                        'data-test-id': f.Xk.vibe.VIBE_DYNAMIC_TITLE_VIBE,
                        children: b({ id: 'entity-names.my-vibe' }),
                    });
                if (a && o)
                    return (0, u.jsx)(tN.N, {
                        href: o.url,
                        className: (0, _.$)(n7().text, n7().important),
                        'data-test-id': f.Xk.vibe.VIBE_DYNAMIC_TITLE_NON_MUSIC_ENTITY_TITLE,
                        children: (0, u.jsx)(S.HL, { variant: 'span', className: (0, _.$)(n7().text, n7().important), lineClamp: t, children: o.title }),
                    });
                if (n && l)
                    return (0, u.jsx)(S.HL, {
                        variant: 'span',
                        className: (0, _.$)(n7().text, n7().important),
                        lineClamp: t,
                        'data-test-id': f.Xk.vibe.VIBE_DYNAMIC_TITLE_GENERATIVE,
                        children: l,
                    });
                if (c) {
                    let e = (0, u.jsx)(n3.i, {
                        artists: c,
                        captionClassName: (0, _.$)(n7().text, n7().important),
                        linkClassName: (0, _.$)(n7().text, n7().important),
                        className: (0, _.$)(n7().text, n7().important),
                        lineClamp: t,
                        withLink: r,
                        withCustomTooltip: !1,
                        variant: 'breakWord',
                    });
                    return s
                        ? (0, u.jsx)(P.$, {
                              className: n7().button,
                              variant: 'text',
                              'aria-label': b({ id: 'interface-actions.context-menu-artists' }),
                              'aria-haspopup': 'menu',
                              'aria-expanded': m,
                              withRipple: !1,
                              onClick: p,
                              ref: d,
                              'data-test-id': f.Xk.vibe.VIBE_DYNAMIC_TITLE_MULTIPLE_ARTISTS_BUTTON,
                              children: e,
                          })
                        : e;
                }
                return null;
            });
            var rt = i(94345),
                ri = i.n(rt);
            let ra = 'vibe-freemium-block',
                rn = (0, m.PA)((e) => {
                    let { className: t } = e,
                        { user: i } = (0, Y.g)(),
                        [a, n] = (0, T.d)(),
                        {
                            openPaymentWidgetModal: r,
                            isShimmerActive: s,
                            isShimmerVisible: o,
                            mainText: l,
                            mainTextA11y: c,
                            additionText: d,
                        } = (0, U.D)({ storeName: 'music', isEnabled: i.isAuthorized && !i.hasPlus, offerElement: { element: a, intersectionPropertyId: ra } }),
                        m = (0, k.L)(() =>
                            i.isAuthorized
                                ? (0, u.jsx)(q.b, {
                                      ref: n,
                                      'data-intersection-property-id': ra,
                                      mainText: l,
                                      ariaLabel: c,
                                      additionText: d,
                                      isShimmerActive: s,
                                      isShimmerVisible: o,
                                      onClick: r,
                                      className: ri().button,
                                      mainTextClassName: ri().buttonMainText,
                                      additionTextClassName: ri().buttonAdditionText,
                                      'data-test-id': f.Xk.vibe.VIBE_FREEMIUM_BUTTON,
                                  })
                                : (0, u.jsx)($.H, {
                                      size: 'l',
                                      variant: 'default',
                                      buttonText: (0, u.jsx)(S.HL, {
                                          variant: 'span',
                                          size: 'l',
                                          children: (0, u.jsx)(O.A, { id: 'authorization.enter-and-listen-button' }),
                                      }),
                                      className: ri().button,
                                  }),
                        );
                    return (0, u.jsxs)('div', {
                        className: (0, _.$)(ri().root, t),
                        'data-test-id': f.Xk.vibe.VIBE_FREEMIUM_BLOCK,
                        children: [
                            m,
                            (0, u.jsx)(S.HL, {
                                variant: 'span',
                                size: 'l',
                                className: ri().description,
                                'data-test-id': f.Xk.vibe.VIBE_FREEMIUM_BLOCK_DESCRIPTION,
                                children: (0, u.jsx)(O.A, { id: 'buy-subscription.new-vibe-description', values: { nbsp: ' ' } }),
                            }),
                        ],
                    });
                }),
                rr = (0, m.PA)(() => {
                    var e, t, i, a, n, r, s, o, l, c, d, m, b, g, A, y, T;
                    let { formatMessage: P } = (0, v.A)(),
                        N = (() => {
                            let {
                                    words: { bigCardPanel: e },
                                } = (0, Y.g)(),
                                t = (0, p.useRef)(null),
                                i = (0, p.useRef)(!1),
                                a = (0, p.useRef)(null),
                                { isOpened: n } = e,
                                r = (0, j.c)((t) => {
                                    t || ((i.current = !0), e.close());
                                }),
                                { context: s, refs: o } = (0, aE.useFloating)({ open: n, onOpenChange: r }),
                                l = (0, aE.useDismiss)(s, { escapeKey: !1, outsidePressEvent: 'click' }),
                                { getFloatingProps: c } = (0, aE.useInteractions)([l]),
                                d = (0, j.c)((e) => {
                                    a.current = e.target;
                                }),
                                u = (0, j.c)((t) => {
                                    var i;
                                    let n = a.current;
                                    ((a.current = null),
                                        e.isOpened &&
                                            !t.defaultPrevented &&
                                            0 !== t.detail &&
                                            t.target === n &&
                                            t.target instanceof HTMLElement &&
                                            t.currentTarget.contains(t.target) &&
                                            t.target.hasAttribute('data-words-panel-dismiss') &&
                                            (null == (i = window.getSelection()) ? void 0 : i.isCollapsed) !== !1 &&
                                            e.close());
                                }),
                                _ = (0, j.c)((t) => {
                                    t.code === aS.v.ESCAPE &&
                                        !t.defaultPrevented &&
                                        e.isOpened &&
                                        t.currentTarget.contains(document.activeElement) &&
                                        (t.preventDefault(), t.stopPropagation(), e.close());
                                }),
                                m = (0, j.c)((i) => {
                                    e.isOpened || (t.current = i.target);
                                }),
                                b = (0, j.c)(() => {
                                    var e;
                                    if (i.current) return;
                                    let a = t.current;
                                    (null == a ||
                                        !a.isConnected ||
                                        a.closest('[inert], [aria-hidden="true"]') ||
                                        (a.focus({ preventScroll: !0 }), document.activeElement !== a)) &&
                                        (null == (e = o.floating.current) || e.focus({ preventScroll: !0 }));
                                });
                            return (
                                (0, p.useEffect)(() => {
                                    n && (i.current = !1);
                                }, [n]),
                                {
                                    regionRef: o.setFloating,
                                    regionProps: c({ onKeyDown: _, onPointerDownCapture: d, onClick: u }),
                                    handleFocusCapture: m,
                                    restoreFocus: b,
                                }
                            );
                        })(),
                        {
                            sonataState: I,
                            experiments: E,
                            words: S,
                            lumen: B,
                            settings: { isMobile: w },
                            user: O,
                            paywall: { modal: R },
                            vibe: L,
                        } = (0, Y.g)(),
                        // for PulseSync: BEGIN read wave animation ordering and artist-cover visibility preferences
                        swapVibeAnimationAndWheel = usePulseSyncWaveSetting('modSettings.vibeAnimationEnhancement.swapVibeAnimationAndWheel', false),
                        hideArtistCoverOnNewWave = usePulseSyncWaveSetting('modSettings.vibeAnimationEnhancement.hideArtistCoverOnNewWave', false),
                        // for PulseSync: END read wave animation ordering and artist-cover visibility preferences
                        // for PulseSync: BEGIN choose the current track cover as the wave palette source
                        useTrackCoverColors = waveCover.useWaveCoverColorEnabled(),
                        waveCoverPalette = waveCover.useWaveCoverPalette(I.entityMeta, I.isGenerativeContext, useTrackCoverColors),
                        // for PulseSync: END choose the current track cover as the wave palette source
                        { screen: V } = (0, M.j)(),
                        W = null == V ? void 0 : V.pageIdForFrom;
                    (0, ta.u)();
                    let { resetContext: U } = (0, K.B)({ seeds: [eb.M1], pageIdForFrom: W, blockIdForFrom: ''.concat(x.EntityTypes.MyWave, '-').concat(eW.U.RADIO) }),
                        { isEnabled: G } = (0, tg.e)(),
                        q = E.checkExperiment(X.z.WebNextWaveLikesAndShares, 'on') ? ac : ay,
                        $ = L.isShuffleVibe && I.isVibeContext,
                        Z = (0, tr.OH)($ || null == (e = I.entityMeta) ? void 0 : e.averageColor),
                        {
                            context: J,
                            isContextResetAvailable: Q,
                            shouldShowMyVibeTitle: ee,
                            shouldHideResetButton: et,
                            player: ei,
                            isTrackColors: ea,
                            fallbackAppearance: en,
                        } = ((e) => {
                            let {
                                    experiments: t,
                                    sonataState: i,
                                    user: a,
                                    vibe: n,
                                    settings: { isMobile: r },
                                } = (0, Y.g)(),
                                { formatMessage: s } = (0, v.A)(),
                                { isMyVibeContext: o, isInitialState: l } = (() => {
                                    var e, t;
                                    let i = (0, th.e)(),
                                        { sonataState: a } = (0, Y.g)(),
                                        n = (0, p.useCallback)(
                                            (e) => {
                                                var t;
                                                return null != (t = null == i ? void 0 : i.state.currentContext.onChange(e)) ? t : () => void 0;
                                            },
                                            [i],
                                        ),
                                        r = (0, p.useSyncExternalStore)(
                                            n,
                                            () => (null == i ? void 0 : i.state.currentContext.value),
                                            () => void 0,
                                        ),
                                        s =
                                            (null == r ? void 0 : r.data.type) === iU.K.Vibe
                                                ? null == (t = r.data.meta.session) || null == (e = t.wave)
                                                    ? void 0
                                                    : e.seeds
                                                : void 0,
                                        o = (null == s ? void 0 : s.length) === 1 ? s[0] : void 0,
                                        l = o === eb.M1 || !!(null == o ? void 0 : o.includes(eb.yx)),
                                        c = null == i ? void 0 : i.state.queueState.currentEntity.value;
                                    return { isMyVibeContext: l, isInitialState: !r && !c && !a.entityMeta };
                                })(),
                                c = (() => {
                                    var e, t, i, a, n, r;
                                    let { sonataState: s } = (0, Y.g)(),
                                        o = (0, th.e)(),
                                        { formatMessage: l } = (0, v.A)(),
                                        c = null == o ? void 0 : o.state.currentContext.value,
                                        d = null == o ? void 0 : o.state.queueState.currentEntity.value,
                                        u = null == d ? void 0 : d.sourceContext;
                                    if (!(null == c ? void 0 : c.data.type)) return;
                                    let _ = (function (e, t) {
                                        switch (t) {
                                            case iF.h.SEARCH:
                                                return e({ id: 'entity-names.search' });
                                            case iF.h.MUSIC_HISTORY:
                                            case iF.h.MUSIC_HISTORY_SEARCH:
                                                return e({ id: 'entity-names.music-history' });
                                            case iF.h.DOWNLOADED_TRACKS:
                                            case iF.h.USER_TRACKS:
                                                return e({ id: 'entity-names.collection' });
                                            case iF.h.ARTIST_FAMILIAR_FROM_WAVE:
                                                return e({ id: 'page.familiar-vibe' });
                                            case iF.h.ARTIST_MY_COLLECTION:
                                                return e({ id: 'page.familiar-collection' });
                                            default:
                                                return;
                                        }
                                    })(l, null == u ? void 0 : u.data.sourceContextType);
                                    if (_) return _;
                                    switch (c.data.type) {
                                        case iU.K.Album:
                                            if (null == (e = s.entityMeta) ? void 0 : e.isPodcast) return l({ id: 'entity-names.podcast' });
                                            if (null == (t = s.entityMeta) ? void 0 : t.isAudiobook) return l({ id: 'entity-names.book' });
                                            if (null == (i = s.entityMeta) ? void 0 : i.isFairyTale) return l({ id: 'entity-names.fairytale' });
                                            return c.data.meta.title;
                                        case iU.K.Playlist:
                                            return c.data.meta.title;
                                        case iU.K.Vibe: {
                                            let e = null == (a = c.data.meta.session) ? void 0 : a.wave;
                                            if (!e) return;
                                            let t = (0, n6.l)(e);
                                            if (1 === t.seeds.length && t.seeds[0] === eb.M1) return l({ id: 'entity-names.my-vibe' });
                                            return l({ id: 'vibe-actions.vibe-context' }, { type: t.type, name: t.title });
                                        }
                                        case iU.K.Artist:
                                            return l({ id: 'entity-names.artist-popular-tracks' });
                                        case iU.K.Various:
                                            return null == (r = s.entityMeta) || null == (n = r.mainAlbum) ? void 0 : n.title;
                                        case iU.K.Generative:
                                            return l({ id: 'entity-names.generative' });
                                        default:
                                            return;
                                    }
                                })(),
                                { isPlaying: d, isVibeContext: u, entityMeta: _ } = i,
                                m = !!(n.isShuffleVibe && u),
                                b = !o,
                                h = s({ id: 'entity-names.my-vibe' }),
                                g = !d && (o || l),
                                x = {
                                    context: o ? h : c,
                                    isContextResetAvailable: b,
                                    shouldShowMyVibeTitle: g,
                                    shouldHideResetButton: g,
                                    player: {
                                        playButtonVariant: r && !_ ? 'standalone' : 'inline',
                                        shouldShowTrackInfo: !r || !!_,
                                        shouldShowArtists: g,
                                        shouldShowArtistsWithTrackTitle: !0,
                                        shouldKeepMobileSpacingOnPause: !0,
                                    },
                                    isTrackColors: a.isAuthorized,
                                    fallbackAppearance: { image: a.isAuthorized && m ? 'reshuffle' : 'default', color: a.isAuthorized && !m ? e : void 0 },
                                };
                            return t.checkExperiment(X.z.WebNextWavePauseState, 'on')
                                ? x
                                : {
                                      context: c && m ? h : c,
                                      isContextResetAvailable: b,
                                      shouldShowMyVibeTitle: !d && (u || !_),
                                      shouldHideResetButton: !d && !b,
                                      player: {
                                          playButtonVariant: r && !d ? 'cover' : 'inline',
                                          shouldShowTrackInfo: !0,
                                          shouldShowArtists: !d && u,
                                          shouldShowArtistsWithTrackTitle: !1,
                                          shouldKeepMobileSpacingOnPause: !1,
                                      },
                                      isTrackColors: d || m,
                                      fallbackAppearance: { image: m ? 'reshuffle' : 'default', blendMode: d && !m ? 'luminosity' : void 0 },
                                  };
                        })(Z.primary),
                        er = null == (t = I.entityMeta) ? void 0 : t.mainArtist,
                        es = null == (i = I.entityMeta) ? void 0 : i.mainAlbum,
                        eo = null == (a = I.entityMeta) ? void 0 : a.artists,
                        el = !!(null == (n = I.entityMeta) ? void 0 : n.isNonUserGenerated),
                        ec = !!(null == (r = I.entityMeta) ? void 0 : r.isNonMusic),
                        ed = I.isGenerativeContext,
                        eu = null == (o = I.entityMeta) || null == (s = o.cutoutCover) ? void 0 : s.uri,
                        e_ = ((e) => {
                            let { artistCutoutCoverUri: t, hasMainArtist: i, releaseCutoutCoverUri: a } = e;
                            return i && (null != a ? a : t) ? (void 0 === a ? 'cutout_artist' : 'cutout_release') : 'text';
                        })({ artistCutoutCoverUri: null == er || null == (l = er.cutoutCover) ? void 0 : l.uri, hasMainArtist: !!er, releaseCutoutCoverUri: eu }),
// for PulseSync: BEGIN hide the wave artist cover when requested
                        em = !hideArtistCoverOnNewWave && !!(null != eu ? eu : null == er || null == (c = er.cutoutCover) ? void 0 : c.uri) && !ee,
// for PulseSync: END hide the wave artist cover when requested
                        ep = em && er,
                        ev = (0, n1.A)(null != eo ? eo : []) > 1,
                        eh = el && !ev,
                        eg = (0, p.useRef)(null),
                        {
                            isArtistsMenuOpen: ex,
                            artistsMenuPosition: eA,
                            handleArtistsMenuClick: eC,
                            handleArtistsMenuOpenChange: ef,
                        } = ((e) => {
                            let { ref: t } = e,
                                [i, a] = (0, p.useState)(!1),
                                [n, r] = (0, p.useState)(null);
                            return {
                                isArtistsMenuOpen: i,
                                artistsMenuPosition: n,
                                handleArtistsMenuClick: (0, j.c)((e) => {
                                    if (e.detail > 0) {
                                        let { clientX: t, clientY: i } = e;
                                        r({ getBoundingClientRect: () => new DOMRect(t, i, 0, 0) });
                                    } else r(t.current);
                                    a(!0);
                                }),
                                handleArtistsMenuOpenChange: (0, j.c)((e) => {
                                    (a(e), e || r(null));
                                }),
                            };
                        })({ ref: eg });
                    ((e) => {
                        let { albumId: t, displayType: i, trackId: a } = e,
                            n = (0, H.N)(),
                            r = n.get(z.Zf),
                            s = n.get(z.UB),
                            o = (0, p.useRef)(void 0);
                        (0, p.useEffect)(() => {
                            if (!a) {
                                o.current = void 0;
                                return;
                            }
                            let e = ''.concat(a, ':').concat(i);
                            s &&
                                o.current !== e &&
                                ((o.current = e),
                                s
                                    .send(
                                        { name: 'TECH_EVENT_CUTOUT_PHOTO_SHOWN', data: { ...(void 0 === t ? {} : { albumId: String(t) }), displayType: i, trackId: a } },
                                        { topLevelParameter: 'tech-metrics' },
                                    )
                                    .catch((e) => {
                                        r.error(e instanceof Error ? e : String(e));
                                    }));
                        }, [t, i, r, a, s]);
                    })({ albumId: null == (d = I.entityMeta) ? void 0 : d.albumId, displayType: e_, trackId: null == (m = I.entityMeta) ? void 0 : m.id });
                    let ey = !O.hasPlus || !O.isAuthorized,
                        ej = (0, k.L)(() => (ee ? iO : em ? iB : iw)),
                        eT = (0, k.L)(() => (ey ? { ...ej, maxFontSize: Math.min(ej.maxFontSize, 72), fallbackMaxLines: 2 } : ej)),
                        ek =
                            O.hasPlus &&
                            (E.checkExperiment(X.z.WebNextWaveScreenWordsInWave, 'on') || E.checkExperiment(X.z.WebNextWaveScreenWordsInWave, 'on_with_onyx')),
                        eP = S.isBigCardPanelEnabled && B.isNeededToLoad,
                        eN = S.bigCardPanel.isOpened,
                        eI = eN && w,
                        { solidColor: eE } = (0, az.x)(),
                        // for PulseSync: BEGIN use the artwork shade behind the words panel
                        eS = {
                            '--track-color': waveCoverPalette ? waveCover.getWaveCoverShade(waveCoverPalette.primary) : Z.primary,
                            '--lumen-color': waveCoverPalette ? 'transparent' : (eE ?? 'transparent'),
                        };
                        // for PulseSync: END use the artwork shade behind the words panel
                    ((0, p.useEffect)(() => {
                        eP && B.getData();
                    }, [B, eP]),
                        (0, p.useEffect)(() => {
                            ev || ef(!1);
                        }, [ef, ev]));
                    // for PulseSync: BEGIN use the cover color in the animated and static wave backgrounds
                    const waveAppearance = (0, p.useMemo)(() => {
                        if (!waveCoverPalette) return en;
                        const { top, middle, bottom } = waveCover.getWaveCoverGlow(waveCoverPalette);
                        return {
                            ...en,
                            color: waveCover.waveCoverHsl(middle),
                            coverGradient: `linear-gradient(155deg, ${[top, middle, bottom].map(waveCover.waveCoverHsl).join(', ')})`,
                            blendMode: undefined,
                        };
                    }, [en, waveCoverPalette]);
                    let eB = (0, k.L)(() =>
                            E.checkExperiment(X.z.WebNextShaderFallbackEnabled, 'on')
                                ? (0, u.jsx)(D, { className: n7().vibeAnimation, appearance: waveAppearance })
                                : (0, u.jsx)(F, {
                                      className: n7().vibeAnimation,
                                      averageColor: Z.primary,
                                      isTrackColors: ea,
                                      fallbackAppearance: waveAppearance,
                                      coverPalette: waveCoverPalette,
                                  }),
                        ),
                        // for PulseSync: END use the cover color in the animated and static wave backgrounds
                        ew = (0, j.c)(() => {
                            (O.hasPlus || h.$3, U());
                        }),
                        eO = (0, k.L)(() => {
                            let e = I.entityMeta,
                                t = (0, u.jsx)('div', {
                                    className: (0, _.$)(n7().textContainer, { [n7().textContainer_withCover]: em && e, [n7().textContainer_playing]: !ee }),
                                    children: (0, u.jsx)(am, {
                                        textOptions: eT,
                                        children: (0, u.jsx)(re, {
                                            shouldShowMyVibeTitle: ee,
                                            isNonMusic: ec,
                                            isGenerative: ed,
                                            withLink: eh,
                                            hasMultipleArtists: ev,
                                            mainAlbum: es,
                                            entityTitle: null == e ? void 0 : e.title,
                                            artists: eo,
                                            artistsRef: eg,
                                            isArtistsMenuOpen: ex,
                                            onArtistsMenuClick: eC,
                                        }),
                                    }),
                                });
                            return e
                                ? (0, u.jsx)(C.F, {
                                      blockId: x.EntityTypes.MyWave,
                                      blockType: x.EntityTypes.MyWave,
                                      blockPosX: 1,
                                      blockPosY: 1,
                                      objectsCount: 1,
                                      children: (0, u.jsxs)(tn.B, {
                                          objectType: x.DomainObjectType.Artist,
                                          objectId: e.id,
                                          objectPosX: 1,
                                          objectPosY: 1,
                                          children: [
                                              t,
                                              ep &&
                                                  (0, u.jsx)('div', {
                                                      className: n7().artistCover,
                                                      children: (0, u.jsx)(iV, { artist: er, withLink: eh, onClick: eC, featCoverUri: eu }),
                                                  }),
                                              eo && ev && (0, u.jsx)(n5, { artists: eo, open: ex, onOpenChange: ef, positionElement: eA }),
                                          ],
                                      }),
                                  })
                                : t;
                        });
                    return (0, u.jsxs)(eR.r, {
                        page: eL.l.HOME_SCREEN,
                        places: [eV.R.MY_WAVE],
                        children: [
                            G && (0, u.jsx)(aI, {}),
                            (0, u.jsxs)('div', {
                                className: (0, _.$)(n7().root, n7().bigCardPanel, {
                                    [n7().root_reshuffle]: $,
                                    [n7().root_withoutPlus]: !O.hasPlus,
                                    [n7().bigCardPanel_opened]: eN,
                                }),
                                onFocusCapture: N.handleFocusCapture,
                                // for PulseSync: BEGIN reverse the wave animation and wheel order when requested
                                style: { flexDirection: swapVibeAnimationAndWheel ? 'row-reverse' : 'row' },
                                // for PulseSync: END reverse the wave animation and wheel order when requested
                                children: [
                                    (0, u.jsx)(aj, { inert: eI, className: (0, _.$)(n7().wheel, { [n7().wheel_hidden]: eI }) }),
                                    (0, u.jsxs)('div', {
                                        ...N.regionProps,
                                        ref: N.regionRef,
                                        className: (0, _.$)(n7().meta, { [n7().meta_noPlus]: !O.hasPlus }),
                                        tabIndex: -1,
                                        role: 'region',
                                        'aria-label': P({ id: 'entity-names.my-vibe' }),
                                        'data-test-id': f.Xk.vibe.VIBE_META,
                                        'data-words-panel-dismiss': !0,
                                        children: [
                                            (0, u.jsx)('div', {
                                                className: (0, _.$)(n7().bigCardPanelBackground, { [n7().bigCardPanelBackground_visible]: eN }),
                                                style: eS,
                                                'aria-hidden': !0,
                                            }),
                                            (0, u.jsx)(C.F, {
                                                blockId: x.EntityTypes.Toolbar,
                                                blockType: x.EntityTypes.Toolbar,
                                                blockPosX: 1,
                                                blockPosY: 1,
                                                objectsCount: 1,
                                                children: (0, u.jsx)(tn.B, {
                                                    objectType: x.DomainObjectType.Wave,
                                                    objectId: eb.M1,
                                                    objectPosX: 1,
                                                    objectPosY: 1,
                                                    children: (0, u.jsx)(q, {
                                                        className: (0, _.$)(n7().context, { [n7().context_hidden]: eN, [n7().context_mobile]: w }),
                                                        context: J,
                                                        isResetAvailable: Q,
                                                        isHidden: et || eN,
                                                        onClick: ew,
                                                    }),
                                                }),
                                            }),
                                            (0, u.jsxs)('div', {
                                                className: n7().entityMeta,
                                                'aria-hidden': eN,
                                                inert: eN,
                                                children: [
                                                    eB,
                                                    (0, u.jsx)(
                                                        'div',
                                                        {
                                                            className: (0, _.$)(n7().entityMetaBody, {
                                                                [n7().entityMetaBody_hidden]: eN,
                                                                [n7().entityMetaBody_mobile]: w,
                                                            }),
                                                            children: eO,
                                                        },
                                                        ''.concat(null != (y = null == (b = I.entityMeta) ? void 0 : b.idWithContext) ? y : 'default', '-').concat(ee),
                                                    ),
                                                ],
                                            }),
                                            (0, u.jsxs)('div', {
                                                className: (0, _.$)(n7().playerBlock, {
                                                    [n7().playerBlock_withFreemium]: !O.hasPlus,
                                                    [n7().playerBlock_shifted]: eN && !w,
                                                }),
                                                inert: eI,
                                                'data-words-panel-dismiss': !0,
                                                children: [
                                                    (0, u.jsx)(C.F, {
                                                        blockId: x.EntityTypes.MyWave,
                                                        blockType: x.EntityTypes.MyWave,
                                                        blockPosX: 1,
                                                        blockPosY: 1,
                                                        objectsCount: 1,
                                                        children: (0, u.jsx)(tn.B, {
                                                            objectType: x.DomainObjectType.Track,
                                                            objectId: null != (T = null == (g = I.entityMeta) ? void 0 : g.id) ? T : '',
                                                            objectPosX: 1,
                                                            objectPosY: 1,
                                                            children: (0, u.jsx)(iS, {
                                                                presentation: ei,
                                                                className: (0, _.$)(n7().player, { [n7().player_hidden]: eI }),
                                                                albumCoverClassName: (0, _.$)(n7().albumCover, { [n7().albumCover_hidden]: eN }),
                                                            }),
                                                        }),
                                                    }),
                                                    ek &&
                                                        (0, u.jsx)('div', {
                                                            className: (0, _.$)(n7().words, { [n7().words_hidden]: eN, [n7().words_mobile]: w }),
                                                            'aria-hidden': eN,
                                                            inert: eN,
                                                            children: (0, u.jsx)(nP, { trackId: null == (A = I.entityMeta) ? void 0 : A.id }),
                                                        }),
                                                    !O.hasPlus && (0, u.jsx)(rn, { className: n7().freemiumBlock }),
                                                ],
                                            }),
                                            (0, u.jsx)(n0, { onRestoreFocus: N.restoreFocus }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                // for PulseSync: BEGIN measure the wave quality label
                pulseSyncObserveWaveQualityLabel = (label) => {
                    const viewport = label.parentElement;
                    const observer = new ResizeObserver(([{ contentRect }]) => {
                        if (contentRect.width > 0) viewport.style.width = `${contentRect.width}px`;
                    });
                    observer.observe(label);
                    return () => observer.disconnect();
                },
                // for PulseSync: END measure the wave quality label
                // for PulseSync: BEGIN slide wave badges in and out
                PulseSyncWaveSlidingBadge = ({ visible, children }) =>
                    (0, u.jsx)('div', {
                        className: 'PulseSync_waveSlidingBadge',
                        'data-visible': visible,
                        inert: !visible,
                        children: (0, u.jsx)('div', { className: 'PulseSync_waveSlidingBadgeMotion', children }),
                    }),
                // for PulseSync: END slide wave badges in and out
                // for PulseSync: BEGIN select the WASAPI output device from the wave badge
                PulseSyncWaveWasapiDeviceBadge = ({ deviceName }) => {
                    const { notify } = (0, aY.l)();
                    const [lastDeviceName, setLastDeviceName] = (0, p.useState)(deviceName);
                    const [menuOpen, setMenuOpen] = (0, p.useState)(false);
                    const [menuData, setMenuData] = (0, p.useState)(null);
                    const [selecting, setSelecting] = (0, p.useState)(false);
                    const visible = Boolean(deviceName);
                    const open = visible && menuOpen;
                    const label = deviceName || lastDeviceName;
                    (0, p.useLayoutEffect)(() => {
                        if (deviceName) setLastDeviceName(deviceName);
                        else setMenuOpen(false);
                    }, [deviceName]);
                    (0, p.useEffect)(() => {
                        if (!open) return;
                        let current = true;
                        const output = window.nativeAudioOutput;
                        Promise.all([output.listWasapiExclusiveDevices({ includeFormats: false }), output.getSelectedWasapiExclusiveDeviceId()])
                            .then(([devices, selectedDeviceId]) => {
                                if (current) {
                                    setMenuData({
                                        devices: devices.filter((device) => device.state === 'active'),
                                        selectedDeviceId: selectedDeviceId ?? null,
                                    });
                                }
                            })
                            .catch(() => {
                                if (current) setMenuData({ error: true });
                            });
                        return () => {
                            current = false;
                        };
                    }, [open]);
                    const onOpenChange = (nextOpen) => {
                        if (nextOpen) setMenuData(null);
                        setMenuOpen(nextOpen);
                    };
                    const selectDevice = async (id) => {
                        if (selecting || id === menuData.selectedDeviceId) return;
                        setSelecting(true);
                        try {
                            await window.nativeAudioOutput.selectWasapiExclusiveDevice(id);
                        } catch {
                            notify((0, u.jsx)(aX.h, { error: 'Не удалось выбрать устройство вывода WASAPI Exclusive' }), { containerId: aK.u.ERROR });
                        } finally {
                            setSelecting(false);
                        }
                    };
                    return (0, u.jsx)(PulseSyncWaveSlidingBadge, {
                        visible,
                        children:
                            label &&
                            (0, u.jsx)(tO.W1, {
                                className: `${eJ().beta} PulseSync_waveWasapiButton PulseSync_waveWasapiDeviceButton`,
                                placement: 'top-end',
                                shiftPadding: 8,
                                radius: 'xl',
                                size: 'default',
                                withHover: false,
                                open,
                                onOpenChange,
                                disabled: selecting,
                                ariaLabel: `Устройство вывода WASAPI Exclusive: ${label}`,
                                title: label,
                                label: (0, u.jsx)(S.HL, {
                                    className: 'PulseSync_waveWasapiDeviceLabel',
                                    variant: 'span',
                                    type: 'text',
                                    size: 's',
                                    weight: 'medium',
                                    children: label,
                                }),
                                children:
                                    !menuData || menuData.error
                                        ? (0, u.jsx)(tO.Dr, {
                                              disabled: true,
                                              label: menuData ? 'Не удалось загрузить устройства' : 'Загружаем устройства…',
                                          })
                                        : [{ id: null, name: 'По умолчанию' }, ...menuData.devices].map(({ id, name }) =>
                                              (0, u.jsx)(
                                                  tO.Dr,
                                                  {
                                                      role: 'menuitemradio',
                                                      'aria-checked': id === menuData.selectedDeviceId,
                                                      label: name,
                                                      icon: id === menuData.selectedDeviceId ? (0, u.jsx)(Z.I, { variant: 'check', size: 'xxs' }) : null,
                                                      onClick: () => void selectDevice(id),
                                                  },
                                                  id ?? 'default',
                                              ),
                                          ),
                            }),
                    });
                },
                // for PulseSync: END select the WASAPI output device from the wave badge
                rs = (0, m.PA)((e) => {
                    var t, i;
                    let { withVideoModal: a } = e,
                        {
                            main: n,
                            user: r,
                            words: s,
                            experiments: o,
                            releaseNotes: l,
                            // for PulseSync: BEGIN access track quality in the wave header
                            quality: pulseSyncQuality,
                            // for PulseSync: END access track quality in the wave header
                            fullscreenVideoPlayer: c,
                            sonataState: { entityMeta: d },
                            settings: { isMobile: m },
                        } = (0, Y.g)(),
                        { formatMessage: b } = (0, v.A)(),
                        O = (0, ez.B)(),
                        { contentScrollRef: M, setContentScrollRef: R } = (0, ep.g)(),
                        [L, V] = (0, T.d)(),
                        W = (0, eO.d)(),
                        D = (0, ew.C)(),
                        { theme: F } = (0, eY.W)(),
                        // for PulseSync: BEGIN enable the new wave page variant without server experiment gating
                        U = true,
                        // for PulseSync: END enable the new wave page variant without server experiment gating
                        z = (0, eH.Z)(null != (i = null == (t = n.specialHeader) ? void 0 : t.url) ? i : '');
                    // for PulseSync: BEGIN wave badges for remote playback, WASAPI output and track quality
                    let pulseSyncQualityPlayer = (0, th.e)(),
                        pulseSyncShowAudioQualityOnNewWaveSettingKey = 'modSettings.vibeAnimationEnhancement.showAudioQualityOnNewWave',
                        [isRemoteDeviceConnected, setIsRemoteDeviceConnected] = (0, p.useState)(window.isRemoteDeviceConnected ?? !1),
                        [remoteDevice, setRemoteDevice] = (0, p.useState)(window.remoteDevice ?? null),
                        [pulseSyncTrackQualityBadge, setPulseSyncTrackQualityBadge] = (0, p.useState)({ label: '', visible: false }),
                        [pulseSyncWasapiExclusiveOutputState, setPulseSyncWasapiExclusiveOutputState] = (0, p.useState)(null),
                        [pulseSyncShowAudioQualityOnNewWave, setPulseSyncShowAudioQualityOnNewWave] = (0, p.useState)(
                            () => window.nativeSettings?.get?.(pulseSyncShowAudioQualityOnNewWaveSettingKey) !== !1,
                        );
                    (0, p.useEffect)(() => {
                        const updateLabel = (0, t9.A)((label) => {
                            setPulseSyncTrackQualityBadge((previous) => (label ? { label, visible: true } : { label: previous.label, visible: false }));
                        }, 500);
                        let latestLabel;
                        // for PulseSync: BEGIN preserve bitrate through partial updates for the same track and format
                        let lastBitrate;
                        const unsubscribe = window.PulseSyncTrackQuality?.subscribeToCurrentTrack(pulseSyncQualityPlayer, (info, trackId) => {
                            const { quality, codec, bitsPerSample, sampleRate, bitrateKbits } = info ?? {};
                            if (lastBitrate && (lastBitrate.trackId !== trackId || (info && (lastBitrate.quality !== quality || lastBitrate.codec !== codec)))) {
                                lastBitrate = void 0;
                            }
                            if (trackId != null && bitrateKbits != null) lastBitrate = { trackId, quality, codec, value: bitrateKbits };
                            const format = [quality, codec].filter(Boolean).join(': ');
                            const resolution = bitsPerSample && sampleRate ? `${bitsPerSample}/${Math.round(sampleRate / 100) / 10}` : null;
                            const displayedBitrate = info ? (bitrateKbits ?? lastBitrate?.value) : null;
                            const bitrate = displayedBitrate != null ? `${displayedBitrate} kbits/s` : null;
                            const label = [format, resolution, bitrate].filter(Boolean).join(' ');
                            if (label === latestLabel) return;
                            latestLabel = label;
                            updateLabel(label);
                        });
                        // for PulseSync: END preserve bitrate through partial updates for the same track and format
                        return () => {
                            unsubscribe?.();
                            updateLabel.cancel();
                        };
                    }, [pulseSyncQualityPlayer]);
                    (0, p.useEffect)(() => {
                        const updatePulseSyncWasapiExclusiveOutputState = (state) => {
                            setPulseSyncWasapiExclusiveOutputState(state ?? null);
                        };
                        window?.nativeAudioOutput
                            ?.getWasapiExclusiveStatus?.()
                            ?.then?.((status) => {
                                updatePulseSyncWasapiExclusiveOutputState(status?.outputState ?? null);
                            })
                            ?.catch?.(() => {});
                        const unsubscribe = window.musicDesktop?.pulsesync.audio.onWasapiStateChanged?.((state) => {
                            updatePulseSyncWasapiExclusiveOutputState(state);
                        });
                        return () => {
                            if (typeof unsubscribe === 'function') unsubscribe();
                        };
                    }, []);
                    (0, p.useEffect)(() => {
                        const updatePulseSyncShowAudioQualityOnNewWave = (key, value) => {
                            if (key === pulseSyncShowAudioQualityOnNewWaveSettingKey) {
                                setPulseSyncShowAudioQualityOnNewWave(value !== !1);
                            }
                        };
                        const unsubscribe = window.musicDesktop?.pulsesync.settings.onChange?.(updatePulseSyncShowAudioQualityOnNewWave);
                        return () => {
                            if (typeof unsubscribe === 'function') unsubscribe();
                        };
                    }, []);
                    (0, p.useEffect)(() => {
                        let e = (device_info) => {
                                (setIsRemoteDeviceConnected(!0),
                                    setRemoteDevice(device_info),
                                    (window.isRemoteDeviceConnected = !0),
                                    (window.remoteDevice = device_info));
                            },
                            t = () => {
                                (setIsRemoteDeviceConnected(!1), setRemoteDevice(null), (window.isRemoteDeviceConnected = !1), (window.remoteDevice = null));
                            };
                        return (
                            (window.onRemoteDeviceConnected || (window.onRemoteDeviceConnected = [])).push(e),
                            (window.onRemoteDeviceDisconnected || (window.onRemoteDeviceDisconnected = [])).push(t),
                            () => {
                                ((window.onRemoteDeviceConnected = window.onRemoteDeviceConnected.filter((t) => t !== e)),
                                    (window.onRemoteDeviceDisconnected = window.onRemoteDeviceDisconnected.filter((e) => e !== t)));
                            }
                        );
                    }, []);
                    const deviceTypeMap = {
                            UNSPECIFIED: 'Неизвестного устройства',
                            WEB: 'Сайта',
                            ANDROID: 'Android приложения',
                            IOS: 'IOS приложения',
                            SMART_SPEAKER: 'Умной колонки',
                            WEB_TV: 'ТВ',
                            ANDROID_TV: 'Android ТВ',
                            APPLE_TV: 'Apple ТВ',
                            ANDROID_WEAR: 'Android часов',
                            WEB_DESKTOP: 'ПК приложения',
                        },
                        pulseSyncWasapiSession = pulseSyncWasapiExclusiveOutputState?.session,
                        pulseSyncWasapiIsActive = pulseSyncWasapiExclusiveOutputState?.active === true || pulseSyncWasapiSession?.state === 'running',
                        pulseSyncWasapiDeviceName = pulseSyncWasapiSession?.rendererState?.deviceName ?? pulseSyncWasapiSession?.lastRendererServiceState?.deviceName,
                        pulseSyncYnisonBubble = (0, p.useMemo)(() => {
                            if (!isRemoteDeviceConnected) return null;
                            const remoteControlText = `Управление с ${deviceTypeMap?.[remoteDevice?.info?.type] ?? ''}: ${remoteDevice?.info?.title ?? ''}`;
                            return (0, u.jsx)(P.$, {
                                color: 'secondary',
                                radius: 'xl',
                                'aria-label': remoteControlText,
                                className: eJ().beta,
                                style: {
                                    marginInlineEnd: 'var(--ym-spacer-size-xs)',
                                    color: 'white',
                                },
                                withHover: !1,
                                children: (0, u.jsx)(S.HL, {
                                    variant: 'div',
                                    type: 'text',
                                    size: 's',
                                    weight: 'medium',
                                    children: remoteControlText,
                                }),
                            });
                        }, [isRemoteDeviceConnected, remoteDevice?.info?.type, remoteDevice?.info?.title, deviceTypeMap]),
                        pulseSyncAudioQualityBubble = (0, p.useMemo)(() => {
                            const { label, visible } = pulseSyncTrackQualityBadge;
                            return (0, u.jsx)(PulseSyncWaveSlidingBadge, {
                                visible: visible && (pulseSyncShowAudioQualityOnNewWave || pulseSyncWasapiIsActive),
                                children:
                                    label &&
                                    (0, u.jsx)(P.$, {
                                        color: 'secondary',
                                        radius: 'xl',
                                        type: 'button',
                                        'aria-label': 'Качество трека: '.concat(label),
                                        'aria-haspopup': 'dialog',
                                        title: b({
                                            id: 'player-actions.audio-quality',
                                        }),
                                        onClick: pulseSyncQuality.modal.open,
                                        className: eJ().beta,
                                        style: {
                                            marginInlineEnd: 'var(--ym-spacer-size-xs)',
                                            color: 'white',
                                            cursor: 'pointer',
                                        },
                                        withHover: !1,
                                        // for PulseSync: BEGIN animate updates to the wave quality label
                                        children: (0, u.jsx)(S.HL, {
                                            variant: 'span',
                                            type: 'text',
                                            size: 's',
                                            weight: 'medium',
                                            className: 'PulseSync_waveQualityLabel',
                                            children: (0, u.jsx)('span', { ref: pulseSyncObserveWaveQualityLabel, children: label }),
                                        }),
                                        // for PulseSync: END animate updates to the wave quality label
                                    }),
                            });
                        }, [pulseSyncTrackQualityBadge, pulseSyncShowAudioQualityOnNewWave, pulseSyncWasapiIsActive, pulseSyncQuality.modal.open, b]),
                        pulseSyncWasapiStateBubble = (0, u.jsx)(PulseSyncWaveSlidingBadge, {
                            visible: pulseSyncWasapiIsActive,
                            children: (0, u.jsx)(P.$, {
                                color: 'secondary',
                                radius: 'xl',
                                'aria-label': 'WASAPI Exclusive активен. Настройки звука',
                                'aria-haspopup': 'dialog',
                                title: b({ id: 'player-actions.audio-quality' }),
                                onClick: pulseSyncQuality.modal.open,
                                className: `${eJ().beta} PulseSync_waveWasapiButton`,
                                withHover: !1,
                                children: (0, u.jsx)(S.HL, {
                                    variant: 'span',
                                    type: 'text',
                                    size: 's',
                                    weight: 'medium',
                                    children: 'WASAPI Exclusive',
                                }),
                            }),
                        }),
                        pulseSyncWasapiDeviceBubble = (0, u.jsx)(PulseSyncWaveWasapiDeviceBadge, {
                            deviceName: pulseSyncWasapiIsActive ? pulseSyncWasapiDeviceName : null,
                        });
                    // for PulseSync: END wave badges for remote playback, WASAPI output and track quality
                    ((0, p.useEffect)(() => {
                        var e, t;
                        if (!a || !W) return;
                        let i = (0, eG.j)(),
                            pulseSyncMigration_n_26 = null != (e = null == i ? void 0 : i.get(eX.K.IDS)) ? e : null,
                            r = null != (t = null == i ? void 0 : i.get(eX.K.ACTIVE_INDEX)) ? t : null,
                            { clipIds: s, activeClipIndex: o } = (0, eE.V)(pulseSyncMigration_n_26, r);
                        (D(s, o), c.setOpenedFromMain());
                    }, [a, W, c, D]),
                        (0, p.useEffect)(
                            () => () => {
                                (n.reset(), U || n.landing.reset());
                            },
                            [n, n.landing, U],
                        ),
                        (0, eU.J)(n.landing.isResolved),
                        (() => {
                            let { main: e } = (0, Y.g)(),
                                { entryPoint: t, isNewWaveTabEnabled: i } = e,
                                a = t.isEnabled,
                                n = t.isNeededToLoad;
                            (0, p.useEffect)(() => {
                                i && a && n && t.getData();
                            }, [t, a, n, i]);
                        })());
                    let H = o.checkExperiment(X.z.WebNextDisableVibe, 'on'),
                        K = (0, j.c)(() => {
                            l.isReady && l.modal.open();
                        }),
                        G = (0, p.useMemo)(() => (H ? { 'margin-block-start': '1vh' } : {}), [H]),
                        q = (0, p.useMemo)(() => {
                            if (o.checkExperiment(X.z.WebNextBetaLabel, 'off')) return null;
                            {
                                let e = o.checkExperiment(X.z.WebNextBetaLabel, 'version'),
                                    t = b({ id: 'desktop.app-version' }, { version: O }),
                                    i = e ? O : 'Beta';
                                return (0, u.jsxs)(E.m_, {
                                    placement: 'left',
                                    offsetOptions: 4,
                                    children: [
                                        (0, u.jsx)(P.$, {
                                            color: 'secondary',
                                            radius: 'xl',
                                            'aria-label': e ? t : 'Beta '.concat(t),
                                            className: (0, _.$)(eJ().beta, { [eJ().beta_withReleaseNotes]: l.isReady }),
                                            onClick: K,
                                            'data-test-id': f.Xk.main.RELEASE_NOTES_BUTTON,
                                            children: (0, u.jsx)(S.HL, { variant: 'div', type: 'text', size: 's', weight: 'medium', children: i }),
                                        }),
                                        (0, u.jsx)(E.ZI, { children: O }),
                                    ],
                                });
                            }
                        }, [o, b, K, l.isReady, O]),
                        $ = (0, _.$)(eJ().betaSlot, { [eJ().betaSlot_newVibe]: U }),
                        Z = (0, p.useMemo)(() => {
                            if (!n.specialHeader) return {};
                            let e = F === eK.S.Light ? n.specialHeader.lightTheme : n.specialHeader.darkTheme;
                            return { '--special-button-background': e.backgroundColor, '--special-button-color': e.textColor };
                        }, [n.specialHeader, F]),
                        J = (0, k.L)(() => {
                            let e = o.checkExperiment(X.z.WebNextRewind2024, 'on');
                            return n.specialHeader
                                ? (0, u.jsxs)('div', {
                                      className: eJ().specialHeaderContainer,
                                      children: [
                                          e &&
                                              (0, u.jsx)(N._V, {
                                                  src: 'avatars.mds.yandex.net/get-music-misc/28052/img.69203c15cffc41172f18a125/orig',
                                                  withAvatarReplace: !0,
                                                  className: eJ().specialHeaderImage,
                                                  fit: 'contain',
                                              }),
                                          (0, u.jsx)(P.$, {
                                              color: 'secondary',
                                              size: 'default',
                                              radius: 'xxxl',
                                              role: 'link',
                                              className: eJ().specialHeader,
                                              withHover: !1,
                                              style: Z,
                                              onClick: z,
                                              children: n.specialHeader.title,
                                          }),
                                      ],
                                  })
                                : null;
                        }),
                        Q = (0, k.L)(() =>
                            U
                                ? null
                                : o.checkExperiment(X.z.WebNextFooterDisclaimer, 'on')
                                  ? (0, u.jsx)(eq.w, { className: eJ().footer })
                                  : (0, u.jsx)(e$.A, { children: (0, u.jsx)(eq.w, { className: eJ().footer }) }),
                        ),
                        ee = (0, j.c)(() => {
                            if (!n.landing.isLoaded) return;
                            let e = r.isAuthorized ? y.p.MAIN : y.p.MAIN_NOLOGIN;
                            return n.landing.getSkeleton({ id: e, showWizard: r.settings.showWizard }, { preloadBlocksCount: 2 });
                        }),
                        et = (0, j.c)(() => {
                            if (n.landing.isLoaded) return n.landing.getSkeleton({ id: y.p.WEB_MAIN, showWizard: r.settings.showWizard }, { preloadBlocksCount: 2 });
                        });
                    if (((0, eS.y)(et), n.landing.isNeededToLoad && !U)) {
                        let e = r.isAuthorized ? y.p.MAIN : y.p.MAIN_NOLOGIN,
                            t = [n.landing.getSkeleton({ id: e, showWizard: r.settings.showWizard }, { preloadBlocksCount: 2 }), n.getSpecialHeader()];
                        (0, p.use)(Promise.allSettled(t));
                    }
                    a && !W && (0, g.notFound)();
                    let ei = (0, k.L)(() => {
                        if (U) {
                            var e;
                            return (0, u.jsx)(A.a, {
                                pageId: x.AppScreen.WaveLandingScreen,
                                pageIdForFrom: eF.b.WAVE_LANDING_SCREEN,
                                mainObjectId: null != (e = null == d ? void 0 : d.id) ? e : '',
                                mainObjectType: d ? x.DomainObjectType.Track : x.DomainObjectType.NonApplicable,
                                children: (0, u.jsxs)('div', {
                                    className: eJ().vibeWidgetContainer,
                                    'data-test-id': f.Xk.main.MAIN_PAGE,
                                    children: [
                                        (0, u.jsxs)('div', {
                                            className: (0, _.$)(eJ().actionsBar, { [eJ().actionsBar_desktop]: h.NN, [eJ().actionsBar_hidden]: s.bigCardPanel.isOpened }),
                                            'aria-hidden': s.bigCardPanel.isOpened,
                                            children: [
                                                m && (0, u.jsx)(eM.F, { withMeta: !1, variant: 'mobile', className: eJ().userProfile }),
                                                n.withEntryPointButton && (0, u.jsx)(ti, {}),
                                            ],
                                        }),
                                        (0, u.jsx)(rr, {}),
                                        // for PulseSync: BEGIN render remote playback, WASAPI and track quality wave badges
                                        (0, u.jsxs)('div', {
                                            className: $,
                                            children: [
                                                pulseSyncYnisonBubble,
                                                pulseSyncWasapiStateBubble,
                                                pulseSyncWasapiDeviceBubble,
                                                pulseSyncAudioQualityBubble,
                                                q,
                                            ],
                                        }),
                                        // for PulseSync: END render remote playback, WASAPI and track quality wave badges
                                    ],
                                }),
                            });
                        }
                        return (0, u.jsx)(A.a, {
                            pageId: x.AppScreen.MainScreen,
                            pageIdForFrom: eF.b.HOME,
                            children: (0, u.jsx)(eB.h, {
                                scrollElement: M,
                                headerElement: L,
                                children: (0, u.jsxs)(I.N, {
                                    className: eJ().root,
                                    containerClassName: eJ().content,
                                    ref: R,
                                    'data-test-id': f.Xk.main.MAIN_PAGE,
                                    children: [
                                        J,
                                        // for PulseSync: BEGIN render WASAPI and track quality wave badges
                                        (0, u.jsxs)('div', {
                                            className: $,
                                            children: [pulseSyncWasapiStateBubble, pulseSyncWasapiDeviceBubble, pulseSyncAudioQualityBubble, q],
                                        }),
                                        // for PulseSync: END render WASAPI and track quality wave badges
                                        !H &&
                                            (0, u.jsx)(C.F, {
                                                blockIdForFrom: eD.h.RUP_MAIN_RADIO,
                                                blockId: eW.U.RUP,
                                                blockType: eW.U.RUP,
                                                blockPosX: 1,
                                                blockPosY: 1,
                                                objectsCount: 0,
                                                children: (0, u.jsx)(eN, { className: eJ().vibe }),
                                            }),
                                        (0, u.jsx)(B.E, {
                                            landing: n.landing,
                                            headerConcealerComponent: (0, u.jsx)('div', { ref: V }),
                                            errorComponent: (0, u.jsx)(w.SomethingWentWrong, { className: eJ().error, withBackwardControl: !1 }),
                                            containerClassName: eJ().landing,
                                            containerStyle: G,
                                            tabWithHeadingTitle: !0,
                                            tabWithCovers: !0,
                                            tabWithSubtitle: !0,
                                        }),
                                        Q,
                                    ],
                                }),
                            }),
                        });
                    });
                    return (0, u.jsxs)(eR.r, { page: eL.l.HOME_SCREEN, places: [eV.R.MY_WAVE], children: [ei, (0, u.jsx)(eI.p, { onFinishSuccess: ee })] });
                });
        },
        6215: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => n });
            var a = i(42078);
            let n = (e) => ''.concat(a._.ARTIST_ITEM).concat(e);
        },
        7147: (e) => {
            e.exports = {
                artists: 'VibePlayerbarMeta_artists__2laQI',
                artists_hidden: 'VibePlayerbarMeta_artists_hidden__cvI_7',
                generativeTitle: 'VibePlayerbarMeta_generativeTitle__ksCD6',
                slider: 'VibePlayerbarMeta_slider__pyonb',
                artists_visibleOnCompact: 'VibePlayerbarMeta_artists_visibleOnCompact__KXJ2j',
                generativeIcon: 'VibePlayerbarMeta_generativeIcon__Taac7',
            };
        },
        7227: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => s });
            var a = i(5120),
                n = i(989),
                r = i(93512);
            let s = (e, t) => (0, a.wg)({ title: e.name, seeds: e.seeds, description: e.description, type: (0, n.a)(e.type), agent: (0, r.K)(t) });
        },
        8413: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => n });
            var a = i(61691);
            let n = (e) => e === a._.PODCAST || e === a._.AUDIOBOOK || e === a._.FAIRY_TALE;
        },
        12799: (e) => {
            e.exports = {
                root: 'WordsCardPopoverDesktop_root__vm3hv',
                item: 'WordsCardPopoverDesktop_item__eZPj9',
                actionItem: 'WordsCardPopoverDesktop_actionItem__l25qD',
                actionItem_active: 'WordsCardPopoverDesktop_actionItem_active__BORi3',
                divider: 'WordsCardPopoverDesktop_divider__Vy2GN',
                sourceItem: 'WordsCardPopoverDesktop_sourceItem__fUPoo',
                sourceItem_withoutIcon: 'WordsCardPopoverDesktop_sourceItem_withoutIcon__earG1',
                sourceIcon: 'WordsCardPopoverDesktop_sourceIcon__QSr8h',
            };
        },
        15461: (e) => {
            e.exports = {
                root: 'VibeResetButton_root__ju8pE',
                root_visible: 'VibeResetButton_root_visible__OHA1w',
                'fade-in': 'VibeResetButton_fade-in__4Dgxq',
                root_q2v: 'VibeResetButton_root_q2v__K9GdD',
                root_withEntryPointButton: 'VibeResetButton_root_withEntryPointButton__kqOH1',
                container: 'VibeResetButton_container__JO2j1',
                icon: 'VibeResetButton_icon__2FkgG',
                button: 'VibeResetButton_button__i8Cvy',
                button_q2v: 'VibeResetButton_button_q2v__NX6iG',
                context: 'VibeResetButton_context__hsTlv',
                context_q2v: 'VibeResetButton_context_q2v__OVhK6',
            };
        },
        17114: (e) => {
            e.exports = { root: 'WordsBigCardPanelTextShimmer_root__2ZH7z', item: 'WordsBigCardPanelTextShimmer_item__rrFNo' };
        },
        18243: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => n });
            var a = i(42078);
            let n = (e) => {
                let { uid: t, kind: i } = e;
                return ''.concat(a._.PLAYLIST_ITEM).concat(t, '_').concat(i);
            };
        },
        22136: (e) => {
            e.exports = { root: 'WordsBigCardPanelLumen_root__xuEFd', image: 'WordsBigCardPanelLumen_image__j1sDJ' };
        },
        22696: (e) => {
            e.exports = { timecode: 'VibePlayerbarTimecodeWithTooltip_timecode__GbXTA', timecode_visible: 'VibePlayerbarTimecodeWithTooltip_timecode_visible__5dcu_' };
        },
        22983: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { y: () => a }),
                (function (e) {
                    ((e.DEFAULT = 'default'), (e.MIX = 'mix'), (e.Q2V = 'q2v'), (e.MULTIVIBE = 'multivibe'));
                })(a || (a = {})));
        },
        24190: (e) => {
            e.exports = { root: 'LoadingPhrase_root__0ML0A', 'gradient-sweep': 'LoadingPhrase_gradient-sweep__SncsP', text: 'LoadingPhrase_text__Ne1FD' };
        },
        24337: (e) => {
            e.exports = {
                root: 'VibeSettings_root__ufZlV',
                popover: 'VibeSettings_popover__VKqUc',
                overlay: 'VibeSettings_overlay__pusb4',
                toggleSettingsButton: 'VibeSettings_toggleSettingsButton__j6fIU',
                header: 'VibeSettings_header__OAWe2',
                actions: 'VibeSettings_actions__ckbMt',
                swipeableArea: 'VibeSettings_swipeableArea__Xx0nx',
                ripple: 'VibeSettings_ripple__kmFX6',
            };
        },
        25871: (e) => {
            e.exports = { root: 'WordsCardPopoverDisclaimer_root__yyXMs', description: 'WordsCardPopoverDisclaimer_description__0RhrR' };
        },
        33355: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => s });
            var a = i(29993),
                n = i(72288),
                r = i(97956);
            let s = () => {
                let { experiments: e, user: t, wizard: i, sonataState: s } = (0, n.g)(),
                    o = i.isAvailable && e.checkExperiment(r.z.WebNextNewWaveWizard, 'on'),
                    l = o && t.hasPlus && t.settings.showWizard && !s.entityMeta,
                    c = (0, a.c)(() => !!l && (i.introModal.open(), !0)),
                    d = (0, a.c)(() => {
                        o && i.introModal.open();
                    });
                return { isEnabled: o, shouldOpenIntroFromPlay: l, openIntroModalFromPlay: c, openWizard: d };
            };
        },
        34375: (e) => {
            e.exports = {
                root: 'VibePage_root__dGvPX',
                root_reshuffle: 'VibePage_root_reshuffle__gz97v',
                root_withoutPlus: 'VibePage_root_withoutPlus__xZ8r4',
                artistCover: 'VibePage_artistCover__RQee1',
                textContainer_withCover: 'VibePage_textContainer_withCover__U2z1l',
                freemiumBlock: 'VibePage_freemiumBlock__uhLoT',
                bigCardPanel: 'VibePage_bigCardPanel__RwmQ5',
                meta: 'VibePage_meta__kWwRE',
                context: 'VibePage_context__CoYut',
                meta_noPlus: 'VibePage_meta_noPlus__YtQX1',
                bigCardPanelBackground: 'VibePage_bigCardPanelBackground__fr_gE',
                bigCardPanelBackground_visible: 'VibePage_bigCardPanelBackground_visible__QbEy5',
                entityMeta: 'VibePage_entityMeta__dhDch',
                entityMetaBody: 'VibePage_entityMetaBody__EITDL',
                'meta-fade-in': 'VibePage_meta-fade-in__H0xeT',
                entityMetaBody_mobile: 'VibePage_entityMetaBody_mobile__xT3M1',
                entityMetaBody_hidden: 'VibePage_entityMetaBody_hidden__4_ZfY',
                vibeAnimation: 'VibePage_vibeAnimation__qQ6ci',
                bigCardPanel_opened: 'VibePage_bigCardPanel_opened__zs_Tl',
                textContainer: 'VibePage_textContainer__odK0M',
                context_mobile: 'VibePage_context_mobile__w0tfB',
                context_hidden: 'VibePage_context_hidden__8NtHL',
                text: 'VibePage_text__sPFhf',
                important: 'VibePage_important__qFvbL',
                button: 'VibePage_button__ZWQxy',
                player_hidden: 'VibePage_player_hidden__pPWGJ',
                player: 'VibePage_player__i4MeM',
                playerBlock: 'VibePage_playerBlock__b6ZRu',
                playerBlock_withFreemium: 'VibePage_playerBlock_withFreemium__8Avmc',
                playerBlock_shifted: 'VibePage_playerBlock_shifted__afwnY',
                albumCover: 'VibePage_albumCover__dHtVi',
                albumCover_hidden: 'VibePage_albumCover_hidden__qcSqu',
                words: 'VibePage_words__39Mii',
                words_mobile: 'VibePage_words_mobile__fxtu0',
                words_hidden: 'VibePage_words_hidden__4_uEt',
                wheel: 'VibePage_wheel__E_p8_',
                wheel_hidden: 'VibePage_wheel_hidden__Yd8xW',
                textContainer_playing: 'VibePage_textContainer_playing__xJphv',
            };
        },
        35948: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => a, y: () => n });
            let a = '(prefers-reduced-motion: reduce)',
                n = () => window.matchMedia(a).matches;
        },
        37880: (e) => {
            e.exports = {
                root: 'WordsBigCardPanelContent_root__X1SOG',
                lumen: 'WordsBigCardPanelContent_lumen__BjuEA',
                lumen_mobile: 'WordsBigCardPanelContent_lumen_mobile__AUxXt',
                contentStack: 'WordsBigCardPanelContent_contentStack__ntqdP',
                contentStack_mobile: 'WordsBigCardPanelContent_contentStack_mobile__UYLbo',
                contentLayer: 'WordsBigCardPanelContent_contentLayer__cdB9J',
                contentLayer_visible: 'WordsBigCardPanelContent_contentLayer_visible__yppQy',
                content: 'WordsBigCardPanelContent_content__GIIoE',
                textContainer: 'WordsBigCardPanelContent_textContainer__R5onX',
                textContainer_hidden: 'WordsBigCardPanelContent_textContainer_hidden__Bz79u',
                contentMotion: 'WordsBigCardPanelContent_contentMotion__ltpFF',
                action: 'WordsBigCardPanelContent_action__qwVs5',
                feedbackButtons: 'WordsBigCardPanelContent_feedbackButtons__kzT5Y',
                feedback: 'WordsBigCardPanelContent_feedback__bAIGa',
                feedbackMessage: 'WordsBigCardPanelContent_feedbackMessage__s2APT',
                controlsMotion: 'WordsBigCardPanelContent_controlsMotion__t1B1D',
                closeIcon: 'WordsBigCardPanelContent_closeIcon__u7C2z',
                closeIcon_mobile: 'WordsBigCardPanelContent_closeIcon_mobile__DcdRR',
                closeButton: 'WordsBigCardPanelContent_closeButton__qgbyc',
                closeButton_mobile: 'WordsBigCardPanelContent_closeButton_mobile__kI2FS',
                sources: 'WordsBigCardPanelContent_sources__rrt5c',
                sources_hidden: 'WordsBigCardPanelContent_sources_hidden__cFbrG',
                contentArea: 'WordsBigCardPanelContent_contentArea__nzOu_',
                contentArea_mobile: 'WordsBigCardPanelContent_contentArea_mobile__hFChP',
                contentArea_feedback: 'WordsBigCardPanelContent_contentArea_feedback__QBVpK',
                cardContent: 'WordsBigCardPanelContent_cardContent__1R3U_',
                shimmer: 'WordsBigCardPanelContent_shimmer__jPakx',
                disclaimer: 'WordsBigCardPanelContent_disclaimer__bWpjy',
                disclaimer_mobile: 'WordsBigCardPanelContent_disclaimer_mobile__zIUTh',
            };
        },
        38035: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => f });
            var a = i(88800),
                n = i(65724),
                r = i(84961),
                s = i(79390),
                o = i(29993),
                l = i(79070),
                c = i(25555),
                d = i(87762),
                u = i(72288),
                _ = i(98953),
                m = i(18130),
                p = i(93091),
                b = i(27817),
                v = i(74064),
                h = i(44988),
                g = i(88943),
                x = i(8413),
                A = i(96295),
                C = i(25883);
            let f = (0, r.PA)((e) => {
                let { album: t, className: i, iconClassName: r, likeActiveClassName: f, shareMenuClassName: y, artistName: j, artistId: T } = e,
                    {
                        user: k,
                        library: P,
                        pinsCollection: N,
                        paywall: I,
                        settings: { isMobile: E },
                        albumCPA: { isPlusCPAEnabled: S },
                    } = (0, u.g)(),
                    { pageAlbumId: B } = (0, d.T)(),
                    w = (0, x.a)(t.type),
                    { shareLink: O, pathname: M } = (0, m.b)('/album/:albumId', { params: { albumId: t.id } }),
                    R = S({ pageAlbumId: B, albumId: t.id, isNonMusic: w }),
                    L = P.isAlbumLiked(t.id),
                    V = (0, c.I)({
                        action: async () => (await P.toggleAlbumLike({ entityId: t.id, userId: k.account.data.uid })) === s.f.OK,
                        notification: (0, a.jsx)(A.T, { album: { ...t, url: M, isLiked: !L } }),
                    }),
                    W = (0, o.c)(() => (R ? void I.openModal() : V())),
                    D = (0, g.i)(t.id),
                    F = N.isPinned(D),
                    U = (0, c.I)({
                        action: async () => !!(await N.toggleAlbumPin({ id: t.id }, D)),
                        notification: (0, a.jsx)(C.l, { album: { ...t, url: M, isPinned: !F } }),
                    }),
                    z = (0, l.L)(() =>
                        w
                            ? (0, a.jsx)(h.U, { className: (0, n.$)(i, L && f), iconClassName: r, onClick: W, isLiked: L, albumType: t.type })
                            : (0, a.jsx)(p.T, { className: (0, n.$)(i, L && f), iconClassName: r, onClick: W, isLiked: L, disabled: !R && !k.isAuthorized }),
                    );
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        !E && (0, a.jsx)(b.L, { className: i, iconClassName: r, onClick: U, isPinned: F }),
                        z,
                        (0, a.jsx)(v.H, {
                            withNotification: !E,
                            withSubmenu: !E,
                            className: i,
                            iconClassName: r,
                            shareLink: O,
                            menuClassName: y,
                            entityMeta: { variant: _.Y.ALBUM, albumArtistName: j, albumArtistId: T, id: t.id, title: t.title, path: M },
                        }),
                    ],
                });
            });
        },
        42205: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => a });
            let a = (e, t) => {
                let i = Number(t);
                return !Number.isNaN(i) && i > 0 && i < e.length ? i : 0;
            };
        },
        48404: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { a: () => a }),
                (function (e) {
                    ((e.LIKE = 'like'), (e.DISLIKE = 'dislike'), (e.NEUTRAL = 'neutral'));
                })(a || (a = {})));
        },
        50681: (e) => {
            e.exports = {
                scrollingTrackName: 'VibePlayerbarTrackName_scrollingTrackName__CU2P_',
                trackNameText_multiline: 'VibePlayerbarTrackName_trackNameText_multiline__6zrzu',
                trackNameText: 'VibePlayerbarTrackName_trackNameText__lWQBn',
            };
        },
        51147: (e) => {
            e.exports = { divider: 'VibeContextMenu_divider__45urL', item_active: 'VibeContextMenu_item_active__DnFoW' };
        },
        51363: (e) => {
            e.exports = {
                root: 'VibeContext_root__dbiNv',
                context: 'VibeContext_context__Z_82k',
                pinButton: 'VibeContext_pinButton__b6SNF',
                resetButton: 'VibeContext_resetButton__9KK4S',
            };
        },
        51724: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => a });
            let a = (e) => {
                var t, i, a, n, r, s;
                let o = null == (t = e.available) || t,
                    l = null != (i = e.disclaimers) ? i : [];
                return (
                    e.contentRestrictions &&
                        ((o = null == (r = null == (a = e.contentRestrictions) ? void 0 : a.available) || r),
                        (l = null != (s = null == (n = e.contentRestrictions) ? void 0 : n.disclaimers) ? s : [])),
                    { available: o, disclaimers: l }
                );
            };
        },
        53301: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => n });
            var a = i(42205);
            let n = (e, t) => {
                if (!e) return { clipIds: [], activeClipIndex: 0 };
                let i = e
                        .split(',')
                        .map(Number)
                        .filter((e) => e >= 0),
                    n = (0, a.z)(i, t);
                return { clipIds: i, activeClipIndex: n };
            };
        },
        53845: (e) => {
            e.exports = {
                root: 'VibeContextButton_root__v5s9n',
                staticContext: 'VibeContextButton_staticContext__0CMKs',
                triggerContainer: 'VibeContextButton_triggerContainer__WpSRT',
                triggerContainer_hidden: 'VibeContextButton_triggerContainer_hidden___Ul2b',
                trigger: 'VibeContextButton_trigger___2s5g',
                label: 'VibeContextButton_label__4XZl3',
                arrow: 'VibeContextButton_arrow__p7g4L',
                arrow_open: 'VibeContextButton_arrow_open__hatJQ',
                resetButton: 'VibeContextButton_resetButton___AVuW',
                menu: 'VibeContextButton_menu__LBKK7',
                shareMenu: 'VibeContextButton_shareMenu__cSmec',
                menuItem: 'VibeContextButton_menuItem__ZdYMs',
                menuItem_active: 'VibeContextButton_menuItem_active__eVy8T',
                menu_touch: 'VibeContextButton_menu_touch__Z_sBE',
                menuItemIcon: 'VibeContextButton_menuItemIcon__6KW3o',
            };
        },
        53961: (e) => {
            e.exports = {
                root: 'PlayButton_root__nYKdN',
                root_isLoading: 'PlayButton_root_isLoading__925Sa',
                'applying-setting': 'PlayButton_applying-setting__3nbT9',
                icon: 'PlayButton_icon__t_THQ',
            };
        },
        54152: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => a });
            let a = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ', ';
                return e
                    .map((e) =>
                        e.decomposed
                            ? e.name +
                              e.decomposed
                                  .map((e) => {
                                      var t;
                                      return ''.concat(null != (t = e.separator) ? t : '').concat(e.name);
                                  })
                                  .join('')
                            : e.name,
                    )
                    .join(t);
            };
        },
        55842: (e) => {
            e.exports = { timecode: 'VibePlayerbarTimecodeWithOverlay_timecode__0bGkz', timecode_visible: 'VibePlayerbarTimecodeWithOverlay_timecode_visible__oVrkw' };
        },
        56194: (e) => {
            e.exports = {
                root: 'WordsBigCardPanel_root__sOTFq',
                root_mobile: 'WordsBigCardPanel_root_mobile__G4xsF',
                enter: 'WordsBigCardPanel_enter__etXny',
                enter_active: 'WordsBigCardPanel_enter_active__03VXN',
                exit: 'WordsBigCardPanel_exit__UGMAh',
                exit_active: 'WordsBigCardPanel_exit_active__3eAPR',
            };
        },
        58495: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => a });
            let a = (e, t) => ''.concat(e, ':').concat(t);
        },
        59064: (e) => {
            e.exports = {
                root: 'WizardIntroModal_root__P1uIH',
                root_mobile: 'WizardIntroModal_root_mobile__Ax8HO',
                header: 'WizardIntroModal_header__qtpcO',
                content: 'WizardIntroModal_content__0A1Ox',
                image: 'WizardIntroModal_image__SOJa7',
                text: 'WizardIntroModal_text___yvOo',
                title: 'WizardIntroModal_title__NWQaj',
                description: 'WizardIntroModal_description__rDfHs',
                button: 'WizardIntroModal_button__b9jJT',
            };
        },
        60492: (e) => {
            e.exports = {
                root: 'VibePlayerBar_root__G3MOe',
                progress: 'VibePlayerBar_progress__Cri6E',
                progress_visible: 'VibePlayerBar_progress_visible__EfP1V',
                button: 'VibePlayerBar_button__GLhJ_',
                important: 'VibePlayerBar_important__XGV7k',
                ripple: 'VibePlayerBar_ripple__8YHn7',
                likeButton_mobilePaused: 'VibePlayerBar_likeButton_mobilePaused__ufI2D',
                button_play: 'VibePlayerBar_button_play__vx8Ni',
                button_standalone: 'VibePlayerBar_button_standalone__xaTBg',
                standalonePlayButtonIcon: 'VibePlayerBar_standalonePlayButtonIcon__kvJ9z',
                playButtonIcon: 'VibePlayerBar_playButtonIcon__ShYm1',
                playButton: 'VibePlayerBar_playButton__rzsIr',
                changeVolume: 'VibePlayerBar_changeVolume__x7FHC',
                verticalSlider: 'VibePlayerBar_verticalSlider__JPDlB',
            };
        },
        66522: (e) => {
            e.exports = {
                content: 'MainPage_content__kskSM',
                root: 'MainPage_root__STXqc',
                container: 'MainPage_container__CB86l',
                vibe: 'MainPage_vibe__XEBbh',
                landing: 'MainPage_landing___FGNm',
                actionsBar: 'MainPage_actionsBar__agoxp',
                actionsBar_desktop: 'MainPage_actionsBar_desktop__zctj6',
                actionsBar_hidden: 'MainPage_actionsBar_hidden__6ik4S',
                userProfile: 'MainPage_userProfile__8JzS3',
                vibeWidgetContainer: 'MainPage_vibeWidgetContainer__i5T4X',
                beta: 'MainPage_beta__y32vb',
                beta_withReleaseNotes: 'MainPage_beta_withReleaseNotes__WOjUk',
                betaSlot: 'MainPage_betaSlot__JwbmM',
                betaSlot_newVibe: 'MainPage_betaSlot_newVibe__DGtXm',
                specialHeaderContainer: 'MainPage_specialHeaderContainer__L3C6E',
                specialHeader: 'MainPage_specialHeader__aqdvj',
                specialHeaderImage: 'MainPage_specialHeaderImage__4GlXq',
                footer: 'MainPage_footer__2rGy2',
                error: 'MainPage_error__u_UCm',
            };
        },
        67758: (e) => {
            e.exports = {
                root: 'WordsCardFullscreen_root__CiG4W',
                modalContent: 'WordsCardFullscreen_modalContent__1SYUO',
                closeButtonWrapper: 'WordsCardFullscreen_closeButtonWrapper__iH_IT',
                layout: 'WordsCardFullscreen_layout__KJMiD',
                contentArea: 'WordsCardFullscreen_contentArea__CKea4',
                contentArea_withMessageScroll: 'WordsCardFullscreen_contentArea_withMessageScroll__td5cI',
                content: 'WordsCardFullscreen_content__JA2fN',
                messageScroll: 'WordsCardFullscreen_messageScroll__uUYjh',
                message: 'WordsCardFullscreen_message__UmEx9',
                messageScroll_scrollable: 'WordsCardFullscreen_messageScroll_scrollable__CfU_t',
                primaryAction: 'WordsCardFullscreen_primaryAction__HxPI9',
                actions: 'WordsCardFullscreen_actions__cT5Cp',
                sourceItem: 'WordsCardFullscreen_sourceItem__WL48h',
                sourceItem_withoutIcon: 'WordsCardFullscreen_sourceItem_withoutIcon__os6rv',
                sourceIcon: 'WordsCardFullscreen_sourceIcon__IDX9f',
                actionText: 'WordsCardFullscreen_actionText__09dJk',
                feedback: 'WordsCardFullscreen_feedback__E7bsR',
                feedbackButton: 'WordsCardFullscreen_feedbackButton__HwM10',
                feedbackButton_active: 'WordsCardFullscreen_feedbackButton_active__fE5dO',
                feedbackDivider: 'WordsCardFullscreen_feedbackDivider__xBnSf',
                disclaimer: 'WordsCardFullscreen_disclaimer__NTfeR',
            };
        },
        69515: (e) => {
            e.exports = {
                root: 'WordsBigCardPanelText_root__TU85D',
                root_withTopFade: 'WordsBigCardPanelText_root_withTopFade__2ngjw',
                root_withBottomFade: 'WordsBigCardPanelText_root_withBottomFade__OFuZ7',
            };
        },
        69850: (e) => {
            e.exports = {
                root: 'AiBadge_root__EfKG1',
                root_dimmed: 'AiBadge_root_dimmed__XLGvP',
                glow: 'AiBadge_glow__R6cQa',
                icon: 'AiBadge_icon__dhZpE',
                icon_okniks: 'AiBadge_icon_okniks__HM5CC',
                icon_sparkles: 'AiBadge_icon_sparkles__cS_kL',
                sparkles: 'AiBadge_sparkles__Yua7j',
                sparkle: 'AiBadge_sparkle__5EMmQ',
                'sparkle-carousel': 'AiBadge_sparkle-carousel__fMVfW',
            };
        },
        71066: (e) => {
            e.exports = {
                root: 'WordsBigCardPanelSourceButtons_root__RmVWO',
                icon: 'WordsBigCardPanelSourceButtons_icon__kUrTX',
                title: 'WordsBigCardPanelSourceButtons_title__OAZar',
            };
        },
        73171: (e, t, i) => {
            'use strict';
            i.d(t, { mf: () => l });
            var a,
                n = i(53548),
                r = {
                    810: (e) => {
                        e.exports = a || (a = i.t(n, 2));
                    },
                },
                s = {},
                o = {};
            ((() => {
                (Object.defineProperty(o, '__esModule', { value: !0 }), (o.useDynamicText = o.findOptimalFontSize = void 0));
                let e = (function e(t) {
                        var i = s[t];
                        if (void 0 !== i) return i.exports;
                        var a = (s[t] = { exports: {} });
                        return (r[t](a, a.exports, e), a.exports);
                    })(810),
                    t = (e) => {
                        ((e.style.wordBreak = 'keep-all'),
                            (e.style.overflowWrap = 'normal'),
                            (e.style.maxHeight = 'none'),
                            (e.style.height = 'auto'),
                            (e.style.overflow = 'visible'),
                            Array.from(e.children).forEach((e) => {
                                e instanceof HTMLElement && t(e);
                            }));
                    },
                    i = (e, t, i, a, n, r) => {
                        (e.style.setProperty('--dynamic-font-size', ''.concat(a, 'px')), e.style.setProperty('--dynamic-line-height', String(n)));
                        let s = 'number' == typeof r ? e.scrollHeight <= Math.min(r * a * n, i) + 1 : e.scrollHeight <= i + 1,
                            o = e.scrollWidth <= t + 1;
                        return s && o;
                    },
                    a = (e) => {
                        let { container: a, containerWidth: n, containerHeight: r, minFontSize: s, maxFontSize: o, lineHeight: l, maxLines: c, styleVariants: d } = e,
                            u = ((e, i, a) => {
                                let n = e.cloneNode(!0);
                                return (
                                    (n.style.cssText =
                                        '\n        position: absolute !important;\n        visibility: hidden !important;\n        pointer-events: none !important;\n        width: '.concat(
                                            i,
                                            'px !important;\n    ',
                                        )),
                                    t(n),
                                    n.style.setProperty('--dynamic-line-height', String(a)),
                                    document.body.appendChild(n),
                                    n
                                );
                            })(a, n, l);
                        try {
                            if (null == d ? void 0 : d.length) {
                                var _;
                                let e = [...d].sort((e, t) => t.fontSize - e.fontSize),
                                    t = null != (_ = e[e.length - 1]) ? _ : { fontSize: s, lineHeight: l };
                                for (let t of e) if (i(u, n, r, t.fontSize, t.lineHeight, c)) return { ...t, fits: !0 };
                                return { ...t, fits: !1 };
                            }
                            let e = s,
                                t = o,
                                a = null;
                            for (; e <= t;) {
                                let s = Math.floor((e + t) / 2);
                                i(u, n, r, s, l, c) ? ((a = s), (e = s + 1)) : (t = s - 1);
                            }
                            if (null === a) return { fontSize: s, lineHeight: l, fits: !1 };
                            return { fontSize: Math.max(s, a - 1), lineHeight: l, fits: !0 };
                        } finally {
                            u.remove();
                        }
                    };
                ((o.findOptimalFontSize = (e) => a(e).fontSize),
                    (o.useDynamicText = (t, i, n) => {
                        let { minFontSize: r, maxFontSize: s, lineHeight: o, maxLines: l, fallbackMaxLines: c, styleVariants: d } = i;
                        (0, e.useLayoutEffect)(() => {
                            if (null === t) return;
                            t.style.setProperty('--dynamic-line-height', String(o));
                            let e = () => {
                                    let e = t.clientWidth,
                                        i = t.clientHeight,
                                        u = t.childNodes.length > 0;
                                    if (0 === e || 0 === i || !u) return;
                                    let {
                                        maxLines: _,
                                        fontSize: m,
                                        lineHeight: p,
                                    } = ((e) => {
                                        let { fallbackMaxLines: t, maxLines: i } = e,
                                            n = a({ ...e, maxLines: i });
                                        if (void 0 === t || n.fits) return { maxLines: i, fontSize: n.fontSize, lineHeight: n.lineHeight };
                                        let r = a({ ...e, maxLines: t });
                                        return { maxLines: t, fontSize: r.fontSize, lineHeight: r.lineHeight };
                                    })({
                                        container: t,
                                        containerWidth: e,
                                        containerHeight: i,
                                        minFontSize: r,
                                        maxFontSize: s,
                                        lineHeight: o,
                                        maxLines: l,
                                        fallbackMaxLines: c,
                                        styleVariants: d,
                                    });
                                    (null == n || n(_),
                                        t.style.setProperty('--dynamic-font-size', ''.concat(m, 'px')),
                                        t.style.setProperty('--dynamic-line-height', String(p)));
                                },
                                i = new ResizeObserver(e),
                                u = new MutationObserver(e);
                            return (
                                i.observe(t),
                                u.observe(t, { childList: !0, characterData: !0, subtree: !0 }),
                                document.fonts.ready.then(e),
                                e(),
                                () => {
                                    (i.disconnect(), u.disconnect());
                                }
                            );
                        }, [t, n, c, o, s, l, r, d]);
                    }));
            })(),
                o.__esModule,
                o.findOptimalFontSize);
            var l = o.useDynamicText;
        },
        74567: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => s });
            var a = i(9519),
                n = i(93609),
                r = i(81969);
            class s {
                async openDatabase() {
                    return this.openIdb({ onBlocked: () => this.onBlockedHandler(), onTerminated: () => this.onTerminatedHandler() }).then((e) => {
                        this.idb = Promise.resolve(e);
                    });
                }
                isAvailable() {
                    return this.idbIsAvailable;
                }
                async deleteDatabase() {
                    let { dbName: e } = this.config;
                    return window.indexedDB
                        .databases()
                        .then((t) => (t.find((t) => e === t.name) ? new r.h(e).deleteDB({ onBlocked: n.A }) : Promise.resolve()))
                        .catch(n.A);
                }
                async executeTransaction(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.idbIsAvailable && this.idb
                        ? this.idb.then((i) => (i ? e(i) : Promise.resolve(null == t ? void 0 : t.defaultValue)))
                        : Promise.resolve(null == t ? void 0 : t.defaultValue);
                }
                onBlockedHandler() {
                    this.closeConnection(this.idb).then(() => {
                        this.idb = this.openIdb({
                            onBlocked: () => {
                                this.closeConnection(this.idb);
                            },
                            onTerminated: () => this.onTerminatedHandler(),
                        });
                    });
                }
                onTerminatedHandler() {
                    ((this.idbIsAvailable = !1),
                        (this.idb = this.openIdb({
                            onBlocked: () => this.onBlockedHandler(),
                            onTerminated: () => {
                                this.idbIsAvailable = !1;
                            },
                        })));
                }
                async openIdb(e) {
                    let { dbName: t, dbVersion: i, onUpgrade: a } = this.config;
                    try {
                        let n = await new r.h(t).openDB(i, {
                            onBlocked: (t, i, a) => {
                                var n;
                                null == e || null == (n = e.onBlocked) || n.call(e, t, i, a);
                            },
                            onTerminated: () => {
                                var t;
                                null == e || null == (t = e.onTerminated) || t.call(e);
                            },
                            onUpgrade: (e) => {
                                a(e);
                            },
                        });
                        return ((this.idbIsAvailable = !0), n);
                    } catch (e) {
                        this.idbIsAvailable = !1;
                    }
                }
                async closeConnection(e) {
                    return ((this.idbIsAvailable = !1), (this.idb = void 0), e)
                        ? e
                              .then((e) => {
                                  e && e.close();
                              })
                              .catch(n.A)
                        : Promise.resolve();
                }
                constructor(e) {
                    ((0, a._)(this, 'config', void 0),
                        (0, a._)(this, 'idb', void 0),
                        (0, a._)(this, 'idbIsAvailable', void 0),
                        (this.config = e),
                        (this.idbIsAvailable = !1));
                }
            }
        },
        75042: (e) => {
            e.exports = {
                root: 'WordsCard_root__6r3u2',
                root_disabled: 'WordsCard_root_disabled__Kgxb_',
                badge: 'WordsCard_badge__Y5HRe',
                badge_centered: 'WordsCard_badge_centered__7GMKP',
                badge_centeredSparkles: 'WordsCard_badge_centeredSparkles__sebgi',
                badge_loading: 'WordsCard_badge_loading__pDoTb',
                pulse: 'WordsCard_pulse__sKXAl',
                content: 'WordsCard_content__AUDsR',
                content_hidden: 'WordsCard_content_hidden__WhUsT',
                text: 'WordsCard_text__ZquMQ',
                appear: 'WordsCard_appear__AISMP',
                lumenAvatar: 'WordsCard_lumenAvatar__ifelA',
                action: 'WordsCard_action__v4Jp1',
                popoverContent: 'WordsCard_popoverContent__NHYuc',
            };
        },
        76533: (e) => {
            e.exports = { root: 'VibeDynamicArtists_root__Wbigy' };
        },
        78429: (e) => {
            e.exports = {
                vibeAnimation: 'VibeBlock_vibeAnimation__XVEE6',
                controls: 'VibeBlock_controls__BpDFL',
                root: 'VibeBlock_root__z7LtR',
                root_freemium: 'VibeBlock_root_freemium__4i2rV',
                playButton: 'VibeBlock_playButton__6xU55',
                settingsButton: 'VibeBlock_settingsButton__GeMtO',
                subscriptionText: 'VibeBlock_subscriptionText__ODUZN',
                button: 'VibeBlock_button__fWXM_',
            };
        },
        78991: (e) => {
            e.exports = {
                root: 'MainPageEntryPointButton_root__3tLWr',
                caption: 'MainPageEntryPointButton_caption__luOma',
                imageContainer: 'MainPageEntryPointButton_imageContainer__uaNh8',
                imageContent: 'MainPageEntryPointButton_imageContent__Ykq8G',
                image: 'MainPageEntryPointButton_image__0xGtQ',
                animation: 'MainPageEntryPointButton_animation__QDzPe',
            };
        },
        79396: (e) => {
            e.exports = {
                root: 'VibePlayerbarTimecodeContent_root__arFLi',
                trackName: 'VibePlayerbarTimecodeContent_trackName__xElzm',
                'fade-in': 'VibePlayerbarTimecodeContent_fade-in__dpWz8',
                center: 'VibePlayerbarTimecodeContent_center__bHoKj',
                center_active: 'VibePlayerbarTimecodeContent_center_active__66xB0',
                center_withTimecode: 'VibePlayerbarTimecodeContent_center_withTimecode__4cl9j',
                center_withExplicitMark: 'VibePlayerbarTimecodeContent_center_withExplicitMark__6igrT',
                center_withoutExplicitMark: 'VibePlayerbarTimecodeContent_center_withoutExplicitMark__fepYG',
                center_spacious: 'VibePlayerbarTimecodeContent_center_spacious__Gax_U',
                center_playing: 'VibePlayerbarTimecodeContent_center_playing__dwPJn',
                explicitMarkContainer: 'VibePlayerbarTimecodeContent_explicitMarkContainer__4WIrr',
                explicitMark: 'VibePlayerbarTimecodeContent_explicitMark__Jcwcx',
            };
        },
        81933: (e) => {
            e.exports = {
                root: 'WordsCardFullscreenShimmer_root__QYKVQ',
                topGroup: 'WordsCardFullscreenShimmer_topGroup__wA7gB',
                line: 'WordsCardFullscreenShimmer_line__5pJmz',
                topLinePrimary: 'WordsCardFullscreenShimmer_topLinePrimary__EZtz5',
                topLineSecondary: 'WordsCardFullscreenShimmer_topLineSecondary___ov_Y',
                main: 'WordsCardFullscreenShimmer_main__QGRY4',
                mainLine: 'WordsCardFullscreenShimmer_mainLine__alNOP',
                bottom: 'WordsCardFullscreenShimmer_bottom__1YoRA',
                bottomLine: 'WordsCardFullscreenShimmer_bottomLine__jTQt4',
            };
        },
        82194: (e) => {
            e.exports = { root: 'ArtistsMenu_root__j5U2g', menuList: 'ArtistsMenu_menuList__4v6Uo', menuItem: 'ArtistsMenu_menuItem__lievm' };
        },
        83210: (e, t, i) => {
            'use strict';
            function a() {
                var e;
                return null == (e = window.musicDesktop) ? void 0 : e.runtime.version;
            }
            i.d(t, { B: () => a });
        },
        88943: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => n });
            var a = i(42078);
            let n = (e) => ''.concat(a._.ALBUM_ITEM).concat(e);
        },
        90437: (e) => {
            e.exports = {
                root: 'WordsCardPopoverMobile_root__iHBbJ',
                container: 'WordsCardPopoverMobile_container___Eq_i',
                text: 'WordsCardPopoverMobile_text__j52Bl',
                sources: 'WordsCardPopoverMobile_sources__fKNrx',
                sourceItem: 'WordsCardPopoverMobile_sourceItem__XBH1a',
                sourceItem_withoutIcon: 'WordsCardPopoverMobile_sourceItem_withoutIcon__QM7Ht',
                action: 'WordsCardPopoverMobile_action__c_FPQ',
                sourceIcon: 'WordsCardPopoverMobile_sourceIcon__aWdrm',
                feedbackSection: 'WordsCardPopoverMobile_feedbackSection__25RsC',
                feedbackQuestion: 'WordsCardPopoverMobile_feedbackQuestion__NKSto',
                feedbackButtons: 'WordsCardPopoverMobile_feedbackButtons__Cd9Yf',
                feedbackButton: 'WordsCardPopoverMobile_feedbackButton__tejta',
                feedbackButton_active: 'WordsCardPopoverMobile_feedbackButton_active__XJl7S',
            };
        },
        92633: (e) => {
            e.exports = {
                root: 'AlbumCover_root__hkDPz',
                coverContainer: 'AlbumCover_coverContainer__NOd_o',
                link: 'AlbumCover_link__5qqFN',
                cover: 'AlbumCover_cover__bif8b',
                'fade-in': 'AlbumCover_fade-in__5kJy7',
                cover_generative: 'AlbumCover_cover_generative__5siVB',
                cover_hiddenOnCompactPause: 'AlbumCover_cover_hiddenOnCompactPause__2BQxY',
                button: 'AlbumCover_button__mX59n',
                ripple: 'AlbumCover_ripple__q41JO',
                playButtonContainer: 'AlbumCover_playButtonContainer__rC_Wa',
            };
        },
        93135: (e) => {
            e.exports = {
                root: 'PromoButton_root__kDDyz',
                caption: 'PromoButton_caption__p6nwX',
                imageContainer: 'PromoButton_imageContainer__XIwZc',
                image: 'PromoButton_image__S8uoV',
            };
        },
        94345: (e) => {
            e.exports = {
                root: 'VibePageFreemiumBlock_root__HCPuh',
                button: 'VibePageFreemiumBlock_button__ULD2Z',
                description: 'VibePageFreemiumBlock_description__AaZUt',
            };
        },
        95147: (e) => {
            e.exports = {
                root: 'VibePlayerControls_root__qr97B',
                skipButton: 'VibePlayerControls_skipButton__z57B_',
                playButtonIcon: 'VibePlayerControls_playButtonIcon__OXCWN',
                playButton: 'VibePlayerControls_playButton__vnoer',
                // for PulseSync: BEGIN yellow wave play button CSS class binding
                playButton_withYellowPlayButton: 'VibePlayerControls_withYellowPlayButton__vnoer',
                // for PulseSync: END yellow wave play button CSS class binding
                playButton_playing: 'VibePlayerControls_playButton_playing__qPeBv',
            };
        },
        96046: (e) => {
            e.exports = { root: 'SpeedMenuItem_root__7j8VN', icon: 'SpeedMenuItem_icon__EyXPA' };
        },
        98017: (e) => {
            e.exports = { root: 'VibeArtistCover_root__LSPPQ', cover: 'VibeArtistCover_cover__AEtTV' };
        },
        99007: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => a });
            var a = (function (e) {
                return ((e[(e.LIKE = 3)] = 'LIKE'), (e[(e.CHART = 1076)] = 'CHART'), e);
            })({});
        },
        99954: (e) => {
            e.exports = {
                root: 'WordsBigCardPanelFeedbackButtons_root__cwi4d',
                button: 'WordsBigCardPanelFeedbackButtons_button___NrVf',
                button_active: 'WordsBigCardPanelFeedbackButtons_button_active__F5x_N',
                divider: 'WordsBigCardPanelFeedbackButtons_divider__qFjeT',
            };
        },
    },
]);
