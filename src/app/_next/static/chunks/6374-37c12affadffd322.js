(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6374],
    {
        188: (e, t, n) => {
            'use strict';
            n.d(t, { i: () => o });
            var r = n(18593);
            function o(e) {
                return (null == e ? void 0 : e.data.type) === r.K.Vibe;
            }
        },
        8962: (e, t, n) => {
            'use strict';
            n.d(t, { _: () => i });
            var r = n(51235),
                o = n(80989);
            let i = (e, t) => (0, r.A)((0, o.f)(e), (0, o.f)(t));
        },
        12876: (e, t, n) => {
            'use strict';
            n.d(t, { z: () => b });
            var r = n(88800),
                o = n(65724),
                i = n(53548),
                a = n(2058),
                l = n(17392),
                u = n(96817),
                s = n(52300),
                c = n(34712),
                d = n(84172),
                f = n.n(d);
            let p = { mainAxis: 10 },
                v = { isEnabled: !0, width: 20, height: 8, tipRadius: 2, className: f().arrow },
                b = (e) => {
                    let {
                            contentElement: t,
                            buttons: n,
                            className: d,
                            popoverContentClassName: b,
                            renderChildren: m,
                            renderChildrenText: g,
                            isOpened: h,
                            onOpenChange: y,
                            arrowProps: w,
                            offsetOptions: E,
                            isNested: O,
                            isEnabled: S = !0,
                            contentDataTestId: P,
                            ...T
                        } = e,
                        [x, R] = (0, i.useState)(!1),
                        I = (0, i.useId)(),
                        C = null != y ? y : R,
                        [M, A] = (0, i.useState)(!0),
                        { formatMessage: k } = (0, a.A)(),
                        j = (0, i.useCallback)(() => {
                            (A(!0), C(!1));
                        }, [A, C]),
                        _ = (0, i.useCallback)((e) => {
                            e.stopPropagation();
                        }, []),
                        L = (0, i.useCallback)(
                            (e) => (t) => {
                                var n;
                                (t.stopPropagation(), A(null != (n = null == e ? void 0 : e(t)) && n), C(!1));
                            },
                            [A, C],
                        ),
                        N = (0, i.useMemo)(() => ({ ...v, ...w }), [w]),
                        D = (0, i.useMemo)(
                            () =>
                                n.map((e) => {
                                    let t = {
                                        className: (0, o.$)(f().button, e.props.className),
                                        onClick: L(e.props.onClick),
                                        'data-test-id': l.S7.POPOVER_WITH_ACTIONS_ACTION_BUTTON,
                                    };
                                    return (0, i.cloneElement)(e, t);
                                }),
                            [n, L],
                        ),
                        F = (0, i.useMemo)(() => {
                            let e = { isPopoverEnabled: S };
                            return (S && (e.popoverText = g), m(e));
                        }, [m, S, g]);
                    return S
                        ? (0, r.jsxs)(c.AM, {
                              open: null != h ? h : x,
                              onOpenChange: C,
                              arrowProps: N,
                              offsetOptions: E || p,
                              isNested: O,
                              returnFocus: M,
                              ...T,
                              children: [
                                  F,
                                  (0, r.jsx)(c.hl, {
                                      'aria-labelledby': I,
                                      className: (0, o.$)(f().popoverContent, b),
                                      onClick: _,
                                      'data-test-id': P,
                                      children: (0, r.jsxs)('div', {
                                          className: (0, o.$)(f().root, d),
                                          children: [
                                              !O &&
                                                  (0, r.jsx)(u.$, {
                                                      className: f().closeButton,
                                                      color: 'primary',
                                                      variant: 'text',
                                                      radius: 'round',
                                                      size: 'xxs',
                                                      onClick: j,
                                                      icon: (0, r.jsx)(s.I, { variant: 'close', size: 'xs' }),
                                                      'aria-label': k({ id: 'interface-actions.close' }),
                                                      'data-test-id': l.S7.POPOVER_WITH_ACTIONS_CLOSE_BUTTON,
                                                  }),
                                              (0, r.jsxs)('div', {
                                                  className: f().content,
                                                  'data-test-id': l.S7.POPOVER_WITH_ACTIONS_TEXT,
                                                  children: [(0, r.jsx)('div', { id: I, children: t }), (0, r.jsx)('div', { className: f().buttons, children: D })],
                                              }),
                                          ],
                                      }),
                                  }),
                              ],
                          })
                        : F;
                };
        },
        32721: (e, t, n) => {
            'use strict';
            n.d(t, { I: () => r });
            var r = (function (e) {
                return (
                    (e.ALBUM = 'album'),
                    (e.ARTIST = 'artist'),
                    (e.PLAYLIST = 'playlist'),
                    (e.TRACK = 'track'),
                    (e.GENRE = 'genre'),
                    (e.ACTIVITY = 'activity'),
                    (e.MOOD = 'mood'),
                    (e.MICRO_GENRE = 'micro-genre'),
                    e
                );
            })({});
        },
        34712: (e, t, n) => {
            'use strict';
            n.d(t, { AM: () => d, hl: () => f });
            var r,
                o = n(87819),
                i = n(14022),
                a = n(53548),
                l = {
                    132: (e, t, n) => {
                        function r(e) {
                            var t;
                            return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
                        }
                        (n.r(t),
                            n.d(t, {
                                activeElement: () => z,
                                contains: () => B,
                                createGridCellMap: () => ev,
                                disableFocusInside: () => eS,
                                enableFocusInside: () => eP,
                                findNonDisabledListIndex: () => ef,
                                getDeepestNode: () => $,
                                getDocument: () => Y,
                                getFloatingFocusElement: () => q,
                                getGridCellIndexOfCorner: () => eb,
                                getGridCellIndices: () => em,
                                getGridNavigatedIndex: () => ep,
                                getMaxListIndex: () => ed,
                                getMinListIndex: () => ec,
                                getNextTabbable: () => ew,
                                getNodeAncestors: () => Q,
                                getNodeChildren: () => Z,
                                getPlatform: () => A,
                                getPreviousTabbable: () => eE,
                                getTabbableOptions: () => eh,
                                getTarget: () => H,
                                getUserAgent: () => k,
                                isAndroid: () => _,
                                isDifferentGridRow: () => eu,
                                isEventTargetWithin: () => V,
                                isIndexOutOfListBounds: () => es,
                                isJSDOM: () => N,
                                isListIndexDisabled: () => eg,
                                isMac: () => L,
                                isMouseLikePointerType: () => er,
                                isOutsideEvent: () => eO,
                                isReactEvent: () => ee,
                                isRootElement: () => W,
                                isSafari: () => j,
                                isTypeableCombobox: () => G,
                                isTypeableElement: () => X,
                                isVirtualClick: () => et,
                                isVirtualPointerEvent: () => en,
                                matchesFocusVisible: () => K,
                                stopEvent: () => J,
                                useEffectEvent: () => el,
                                useLatestRef: () => ei,
                                useModernLayoutEffect: () => eo,
                            }));
                        var o = n(810);
                        let i = Math.floor;
                        var a =
                                'input:not([inert]),select:not([inert]),textarea:not([inert]),a[href]:not([inert]),button:not([inert]),[tabindex]:not(slot):not([inert]),audio[controls]:not([inert]),video[controls]:not([inert]),[contenteditable]:not([contenteditable="false"]):not([inert]),details>summary:first-of-type:not([inert]),details:not([inert])',
                            l = 'undefined' == typeof Element,
                            u = l ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
                            s =
                                !l && Element.prototype.getRootNode
                                    ? function (e) {
                                          var t;
                                          return null == e || null == (t = e.getRootNode) ? void 0 : t.call(e);
                                      }
                                    : function (e) {
                                          return null == e ? void 0 : e.ownerDocument;
                                      },
                            c = function (e, t) {
                                void 0 === t && (t = !0);
                                var n,
                                    r = null == e || null == (n = e.getAttribute) ? void 0 : n.call(e, 'inert');
                                return '' === r || 'true' === r || (t && e && c(e.parentNode));
                            },
                            d = function (e) {
                                var t,
                                    n = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, 'contenteditable');
                                return '' === n || 'true' === n;
                            },
                            f = function (e, t, n) {
                                if (c(e)) return [];
                                var r = Array.prototype.slice.apply(e.querySelectorAll(a));
                                return (t && u.call(e, a) && r.unshift(e), (r = r.filter(n)));
                            },
                            p = function (e, t, n) {
                                for (var r = [], o = Array.from(e); o.length;) {
                                    var i = o.shift();
                                    if (!c(i, !1))
                                        if ('SLOT' === i.tagName) {
                                            var l = i.assignedElements(),
                                                s = p(l.length ? l : i.children, !0, n);
                                            n.flatten ? r.push.apply(r, s) : r.push({ scopeParent: i, candidates: s });
                                        } else {
                                            u.call(i, a) && n.filter(i) && (t || !e.includes(i)) && r.push(i);
                                            var d = i.shadowRoot || ('function' == typeof n.getShadowRoot && n.getShadowRoot(i)),
                                                f = !c(d, !1) && (!n.shadowRootFilter || n.shadowRootFilter(i));
                                            if (d && f) {
                                                var v = p(!0 === d ? i.children : d.children, !0, n);
                                                n.flatten ? r.push.apply(r, v) : r.push({ scopeParent: i, candidates: v });
                                            } else o.unshift.apply(o, i.children);
                                        }
                                }
                                return r;
                            },
                            v = function (e) {
                                return !isNaN(parseInt(e.getAttribute('tabindex'), 10));
                            },
                            b = function (e) {
                                if (!e) throw Error('No node provided');
                                return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || d(e)) && !v(e) ? 0 : e.tabIndex;
                            },
                            m = function (e, t) {
                                var n = b(e);
                                return n < 0 && t && !v(e) ? 0 : n;
                            },
                            g = function (e, t) {
                                return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex;
                            },
                            h = function (e) {
                                return 'INPUT' === e.tagName;
                            },
                            y = function (e, t) {
                                for (var n = 0; n < e.length; n++) if (e[n].checked && e[n].form === t) return e[n];
                            },
                            w = function (e) {
                                if (!e.name) return !0;
                                var t,
                                    n = e.form || s(e),
                                    r = function (e) {
                                        return n.querySelectorAll('input[type="radio"][name="' + e + '"]');
                                    };
                                if (void 0 !== window.CSS && 'function' == typeof window.CSS.escape) t = r(window.CSS.escape(e.name));
                                else
                                    try {
                                        t = r(e.name);
                                    } catch (e) {
                                        return (
                                            console.error(
                                                'Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s',
                                                e.message,
                                            ),
                                            !1
                                        );
                                    }
                                var o = y(t, e.form);
                                return !o || o === e;
                            },
                            E = function (e) {
                                return h(e) && 'radio' === e.type && !w(e);
                            },
                            O = function (e) {
                                var t,
                                    n,
                                    r,
                                    o,
                                    i,
                                    a,
                                    l,
                                    u = e && s(e),
                                    c = null == (t = u) ? void 0 : t.host,
                                    d = !1;
                                if (u && u !== e)
                                    for (
                                        d = !!(
                                            (null != (n = c) && null != (r = n.ownerDocument) && r.contains(c)) ||
                                            (null != e && null != (o = e.ownerDocument) && o.contains(e))
                                        );
                                        !d && c;
                                    )
                                        d = !!(null != (a = c = null == (i = u = s(c)) ? void 0 : i.host) && null != (l = a.ownerDocument) && l.contains(c));
                                return d;
                            },
                            S = function (e) {
                                var t = e.getBoundingClientRect(),
                                    n = t.width,
                                    r = t.height;
                                return 0 === n && 0 === r;
                            },
                            P = function (e, t) {
                                var n = t.displayCheck,
                                    r = t.getShadowRoot;
                                if ('full-native' === n && 'checkVisibility' in e)
                                    return !e.checkVisibility({
                                        checkOpacity: !1,
                                        opacityProperty: !1,
                                        contentVisibilityAuto: !0,
                                        visibilityProperty: !0,
                                        checkVisibilityCSS: !0,
                                    });
                                if ('hidden' === getComputedStyle(e).visibility) return !0;
                                var o = u.call(e, 'details>summary:first-of-type') ? e.parentElement : e;
                                if (u.call(o, 'details:not([open]) *')) return !0;
                                if (n && 'full' !== n && 'full-native' !== n && 'legacy-full' !== n) {
                                    if ('non-zero-area' === n) return S(e);
                                } else {
                                    if ('function' == typeof r) {
                                        for (var i = e; e;) {
                                            var a = e.parentElement,
                                                l = s(e);
                                            if (a && !a.shadowRoot && !0 === r(a)) return S(e);
                                            e = e.assignedSlot ? e.assignedSlot : a || l === e.ownerDocument ? a : l.host;
                                        }
                                        e = i;
                                    }
                                    if (O(e)) return !e.getClientRects().length;
                                    if ('legacy-full' !== n) return !0;
                                }
                                return !1;
                            },
                            T = function (e) {
                                if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
                                    for (var t = e.parentElement; t;) {
                                        if ('FIELDSET' === t.tagName && t.disabled) {
                                            for (var n = 0; n < t.children.length; n++) {
                                                var r = t.children.item(n);
                                                if ('LEGEND' === r.tagName) return !!u.call(t, 'fieldset[disabled] *') || !r.contains(e);
                                            }
                                            return !0;
                                        }
                                        t = t.parentElement;
                                    }
                                return !1;
                            },
                            x = function (e, t) {
                                return !(
                                    t.disabled ||
                                    c(t) ||
                                    (h(t) && 'hidden' === t.type) ||
                                    P(t, e) ||
                                    ('DETAILS' === t.tagName &&
                                        Array.prototype.slice.apply(t.children).some(function (e) {
                                            return 'SUMMARY' === e.tagName;
                                        })) ||
                                    T(t)
                                );
                            },
                            R = function (e, t) {
                                return !(E(t) || 0 > b(t)) && !!x(e, t);
                            },
                            I = function (e) {
                                var t = parseInt(e.getAttribute('tabindex'), 10);
                                return !!isNaN(t) || !!(t >= 0);
                            },
                            C = function (e) {
                                var t = [],
                                    n = [];
                                return (
                                    e.forEach(function (e, r) {
                                        var o = !!e.scopeParent,
                                            i = o ? e.scopeParent : e,
                                            a = m(i, o),
                                            l = o ? C(e.candidates) : i;
                                        0 === a ? (o ? t.push.apply(t, l) : t.push(i)) : n.push({ documentOrder: r, tabIndex: a, item: e, isScope: o, content: l });
                                    }),
                                    n
                                        .sort(g)
                                        .reduce(function (e, t) {
                                            return (t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e);
                                        }, [])
                                        .concat(t)
                                );
                            },
                            M = function (e, t) {
                                return C(
                                    (t = t || {}).getShadowRoot
                                        ? p([e], t.includeContainer, { filter: R.bind(null, t), flatten: !1, getShadowRoot: t.getShadowRoot, shadowRootFilter: I })
                                        : f(e, t.includeContainer, R.bind(null, t)),
                                );
                            };
                        function A() {
                            let e = navigator.userAgentData;
                            return null != e && e.platform ? e.platform : navigator.platform;
                        }
                        function k() {
                            let e = navigator.userAgentData;
                            return e && Array.isArray(e.brands)
                                ? e.brands
                                      .map((e) => {
                                          let { brand: t, version: n } = e;
                                          return t + '/' + n;
                                      })
                                      .join(' ')
                                : navigator.userAgent;
                        }
                        function j() {
                            return /apple/i.test(navigator.vendor);
                        }
                        function _() {
                            let e = /android/i;
                            return e.test(A()) || e.test(k());
                        }
                        function L() {
                            return A().toLowerCase().startsWith('mac') && !navigator.maxTouchPoints;
                        }
                        function N() {
                            return k().includes('jsdom/');
                        }
                        let D = 'data-floating-ui-focusable',
                            F = 'ArrowLeft',
                            U = 'ArrowRight';
                        function z(e) {
                            let t = e.activeElement;
                            for (; (null == (n = t) || null == (n = n.shadowRoot) ? void 0 : n.activeElement) != null;) {
                                var n;
                                t = t.shadowRoot.activeElement;
                            }
                            return t;
                        }
                        function B(e, t) {
                            if (!e || !t) return !1;
                            let n = null == t.getRootNode ? void 0 : t.getRootNode();
                            if (e.contains(t)) return !0;
                            if (n && 'undefined' != typeof ShadowRoot && (n instanceof ShadowRoot || n instanceof r(n).ShadowRoot)) {
                                let n = t;
                                for (; n;) {
                                    if (e === n) return !0;
                                    n = n.parentNode || n.host;
                                }
                            }
                            return !1;
                        }
                        function H(e) {
                            return 'composedPath' in e ? e.composedPath()[0] : e.target;
                        }
                        function V(e, t) {
                            return null != t && ('composedPath' in e ? e.composedPath().includes(t) : null != e.target && t.contains(e.target));
                        }
                        function W(e) {
                            return e.matches('html,body');
                        }
                        function Y(e) {
                            return (null == e ? void 0 : e.ownerDocument) || document;
                        }
                        function X(e) {
                            return (
                                (e instanceof HTMLElement || e instanceof r(e).HTMLElement) &&
                                e.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])")
                            );
                        }
                        function G(e) {
                            return !!e && 'combobox' === e.getAttribute('role') && X(e);
                        }
                        function K(e) {
                            if (!e || N()) return !0;
                            try {
                                return e.matches(':focus-visible');
                            } catch (e) {
                                return !0;
                            }
                        }
                        function q(e) {
                            return e ? (e.hasAttribute(D) ? e : e.querySelector('[' + D + ']') || e) : null;
                        }
                        function Z(e, t, n) {
                            return (
                                void 0 === n && (n = !0),
                                e
                                    .filter((e) => {
                                        var r;
                                        return e.parentId === t && (!n || (null == (r = e.context) ? void 0 : r.open));
                                    })
                                    .flatMap((t) => [t, ...Z(e, t.id, n)])
                            );
                        }
                        function $(e, t) {
                            let n,
                                r = -1;
                            return (
                                !(function t(o, i) {
                                    (i > r && ((n = o), (r = i)),
                                        Z(e, o).forEach((e) => {
                                            t(e.id, i + 1);
                                        }));
                                })(t, 0),
                                e.find((e) => e.id === n)
                            );
                        }
                        function Q(e, t) {
                            var n;
                            let r = [],
                                o = null == (n = e.find((e) => e.id === t)) ? void 0 : n.parentId;
                            for (; o;) {
                                let t = e.find((e) => e.id === o);
                                ((o = null == t ? void 0 : t.parentId), t && (r = r.concat(t)));
                            }
                            return r;
                        }
                        function J(e) {
                            (e.preventDefault(), e.stopPropagation());
                        }
                        function ee(e) {
                            return 'nativeEvent' in e;
                        }
                        function et(e) {
                            return (
                                (0 === e.mozInputSource && !!e.isTrusted) ||
                                (_() && e.pointerType ? 'click' === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
                            );
                        }
                        function en(e) {
                            return (
                                !N() &&
                                ((!_() && 0 === e.width && 0 === e.height) ||
                                    (_() && 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && 'mouse' === e.pointerType) ||
                                    (e.width < 1 && e.height < 1 && 0 === e.pressure && 0 === e.detail && 'touch' === e.pointerType))
                            );
                        }
                        function er(e, t) {
                            let n = ['mouse', 'pen'];
                            return (t || n.push('', void 0), n.includes(e));
                        }
                        var eo = 'undefined' != typeof document ? o.useLayoutEffect : function () {};
                        function ei(e) {
                            let t = o.useRef(e);
                            return (
                                eo(() => {
                                    t.current = e;
                                }),
                                t
                            );
                        }
                        let ea = { ...o }.useInsertionEffect || ((e) => e());
                        function el(e) {
                            let t = o.useRef(() => {});
                            return (
                                ea(() => {
                                    t.current = e;
                                }),
                                o.useCallback(function () {
                                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                    return null == t.current ? void 0 : t.current(...n);
                                }, [])
                            );
                        }
                        function eu(e, t, n) {
                            return Math.floor(e / t) !== n;
                        }
                        function es(e, t) {
                            return t < 0 || t >= e.current.length;
                        }
                        function ec(e, t) {
                            return ef(e, { disabledIndices: t });
                        }
                        function ed(e, t) {
                            return ef(e, { decrement: !0, startingIndex: e.current.length, disabledIndices: t });
                        }
                        function ef(e, t) {
                            let { startingIndex: n = -1, decrement: r = !1, disabledIndices: o, amount: i = 1 } = void 0 === t ? {} : t,
                                a = n;
                            do a += r ? -i : i;
                            while (a >= 0 && a <= e.current.length - 1 && eg(e, a, o));
                            return a;
                        }
                        function ep(e, t) {
                            let { event: n, orientation: r, loop: o, rtl: a, cols: l, disabledIndices: u, minIndex: s, maxIndex: c, prevIndex: d, stopEvent: f = !1 } = t,
                                p = d;
                            if ('ArrowUp' === n.key) {
                                if ((f && J(n), -1 === d)) p = c;
                                else if (((p = ef(e, { startingIndex: p, amount: l, decrement: !0, disabledIndices: u })), o && (d - l < s || p < 0))) {
                                    let e = d % l,
                                        t = c % l,
                                        n = c - (t - e);
                                    p = t === e ? c : t > e ? n : n - l;
                                }
                                es(e, p) && (p = d);
                            }
                            if (
                                ('ArrowDown' === n.key &&
                                    (f && J(n),
                                    -1 === d
                                        ? (p = s)
                                        : ((p = ef(e, { startingIndex: d, amount: l, disabledIndices: u })),
                                          o && d + l > c && (p = ef(e, { startingIndex: (d % l) - l, amount: l, disabledIndices: u }))),
                                    es(e, p) && (p = d)),
                                'both' === r)
                            ) {
                                let t = i(d / l);
                                (n.key === (a ? F : U) &&
                                    (f && J(n),
                                    d % l != l - 1
                                        ? ((p = ef(e, { startingIndex: d, disabledIndices: u })),
                                          o && eu(p, l, t) && (p = ef(e, { startingIndex: d - (d % l) - 1, disabledIndices: u })))
                                        : o && (p = ef(e, { startingIndex: d - (d % l) - 1, disabledIndices: u })),
                                    eu(p, l, t) && (p = d)),
                                    n.key === (a ? U : F) &&
                                        (f && J(n),
                                        d % l != 0
                                            ? ((p = ef(e, { startingIndex: d, decrement: !0, disabledIndices: u })),
                                              o && eu(p, l, t) && (p = ef(e, { startingIndex: d + (l - (d % l)), decrement: !0, disabledIndices: u })))
                                            : o && (p = ef(e, { startingIndex: d + (l - (d % l)), decrement: !0, disabledIndices: u })),
                                        eu(p, l, t) && (p = d)));
                                let r = i(c / l) === t;
                                es(e, p) && (p = o && r ? (n.key === (a ? U : F) ? c : ef(e, { startingIndex: d - (d % l) - 1, disabledIndices: u })) : d);
                            }
                            return p;
                        }
                        function ev(e, t, n) {
                            let r = [],
                                o = 0;
                            return (
                                e.forEach((e, i) => {
                                    let { width: a, height: l } = e,
                                        u = !1;
                                    for (n && (o = 0); !u;) {
                                        let e = [];
                                        for (let n = 0; n < a; n++) for (let r = 0; r < l; r++) e.push(o + n + r * t);
                                        (o % t) + a <= t && e.every((e) => null == r[e])
                                            ? (e.forEach((e) => {
                                                  r[e] = i;
                                              }),
                                              (u = !0))
                                            : o++;
                                    }
                                }),
                                [...r]
                            );
                        }
                        function eb(e, t, n, r, o) {
                            if (-1 === e) return -1;
                            let i = n.indexOf(e),
                                a = t[e];
                            switch (o) {
                                case 'tl':
                                    return i;
                                case 'tr':
                                    if (!a) return i;
                                    return i + a.width - 1;
                                case 'bl':
                                    if (!a) return i;
                                    return i + (a.height - 1) * r;
                                case 'br':
                                    return n.lastIndexOf(e);
                            }
                        }
                        function em(e, t) {
                            return t.flatMap((t, n) => (e.includes(t) ? [n] : []));
                        }
                        function eg(e, t, n) {
                            if ('function' == typeof n) return n(t);
                            if (n) return n.includes(t);
                            let r = e.current[t];
                            return null == r || r.hasAttribute('disabled') || 'true' === r.getAttribute('aria-disabled');
                        }
                        let eh = () => ({
                            getShadowRoot: !0,
                            displayCheck: 'function' == typeof ResizeObserver && ResizeObserver.toString().includes('[native code]') ? 'full' : 'none',
                        });
                        function ey(e, t) {
                            let n = M(e, eh()),
                                r = n.length;
                            if (0 === r) return;
                            let o = z(Y(e)),
                                i = n.indexOf(o);
                            return n[-1 === i ? (1 === t ? 0 : r - 1) : i + t];
                        }
                        function ew(e) {
                            return ey(Y(e).body, 1) || e;
                        }
                        function eE(e) {
                            return ey(Y(e).body, -1) || e;
                        }
                        function eO(e, t) {
                            let n = t || e.currentTarget,
                                r = e.relatedTarget;
                            return !r || !B(n, r);
                        }
                        function eS(e) {
                            M(e, eh()).forEach((e) => {
                                ((e.dataset.tabindex = e.getAttribute('tabindex') || ''), e.setAttribute('tabindex', '-1'));
                            });
                        }
                        function eP(e) {
                            e.querySelectorAll('[data-tabindex]').forEach((e) => {
                                let t = e.dataset.tabindex;
                                (delete e.dataset.tabindex, t ? e.setAttribute('tabindex', t) : e.removeAttribute('tabindex'));
                            });
                        }
                    },
                    5881: (e, t, n) => {
                        function r() {
                            for (var e, t, n = 0, r = ''; n < arguments.length;)
                                (e = arguments[n++]) &&
                                    (t = (function e(t) {
                                        var n,
                                            r,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (n = 0; n < t.length; n++) t[n] && (r = e(t[n])) && (o && (o += ' '), (o += r));
                                            else for (n in t) t[n] && (o && (o += ' '), (o += n));
                                        return o;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        (n.r(t), n.d(t, { clsx: () => r, default: () => o }));
                        let o = r;
                    },
                    8533: (e, t, n) => {
                        (n.r(t), n.d(t, { default: () => r }));
                        let r = { overlay: 'ZSjQrniulol6xKOq2Bou' };
                    },
                    2223: (e, t, n) => {
                        (n.r(t), n.d(t, { default: () => r }));
                        let r = { root: 'TYgwct6DZLAMvvFaBZ7z' };
                    },
                    9331: (e, t, n) => {
                        (n.r(t), n.d(t, { default: () => r }));
                        let r = { root: 'dJZf0Flxzx7PR15g7zqM' };
                    },
                    6544: (e, t, n) => {
                        (n.r(t), n.d(t, { RemoveScroll: () => Y }));
                        var r,
                            o,
                            i = function () {
                                return (i =
                                    Object.assign ||
                                    function (e) {
                                        for (var t, n = 1, r = arguments.length; n < r; n++)
                                            for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                                        return e;
                                    }).apply(this, arguments);
                            };
                        function a(e, t) {
                            var n = {};
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                            if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
                                for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                                    0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
                            return n;
                        }
                        Object.create;
                        Object.create;
                        var l = ('function' == typeof SuppressedError && SuppressedError, n(810)),
                            u = 'right-scroll-bar-position',
                            s = 'width-before-scroll-bar';
                        function c(e, t) {
                            return ('function' == typeof e ? e(t) : e && (e.current = t), e);
                        }
                        var d = l.useLayoutEffect,
                            f = new WeakMap();
                        function p(e) {
                            return e;
                        }
                        var v = (function (e) {
                                void 0 === e && (e = {});
                                var t,
                                    n,
                                    r,
                                    o =
                                        (void 0 === t && (t = p),
                                        (n = []),
                                        (r = !1),
                                        {
                                            read: function () {
                                                if (r) throw Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
                                                return n.length ? n[n.length - 1] : null;
                                            },
                                            useMedium: function (e) {
                                                var o = t(e, r);
                                                return (
                                                    n.push(o),
                                                    function () {
                                                        n = n.filter(function (e) {
                                                            return e !== o;
                                                        });
                                                    }
                                                );
                                            },
                                            assignSyncMedium: function (e) {
                                                for (r = !0; n.length;) {
                                                    var t = n;
                                                    ((n = []), t.forEach(e));
                                                }
                                                n = {
                                                    push: function (t) {
                                                        return e(t);
                                                    },
                                                    filter: function () {
                                                        return n;
                                                    },
                                                };
                                            },
                                            assignMedium: function (e) {
                                                r = !0;
                                                var t = [];
                                                if (n.length) {
                                                    var o = n;
                                                    ((n = []), o.forEach(e), (t = n));
                                                }
                                                var i = function () {
                                                        var n = t;
                                                        ((t = []), n.forEach(e));
                                                    },
                                                    a = function () {
                                                        return Promise.resolve().then(i);
                                                    };
                                                (a(),
                                                    (n = {
                                                        push: function (e) {
                                                            (t.push(e), a());
                                                        },
                                                        filter: function (e) {
                                                            return ((t = t.filter(e)), n);
                                                        },
                                                    }));
                                            },
                                        });
                                return ((o.options = i({ async: !0, ssr: !1 }, e)), o);
                            })(),
                            b = function () {},
                            m = l.forwardRef(function (e, t) {
                                var n,
                                    r,
                                    o,
                                    u,
                                    s = l.useRef(null),
                                    p = l.useState({ onScrollCapture: b, onWheelCapture: b, onTouchMoveCapture: b }),
                                    m = p[0],
                                    g = p[1],
                                    h = e.forwardProps,
                                    y = e.children,
                                    w = e.className,
                                    E = e.removeScrollBar,
                                    O = e.enabled,
                                    S = e.shards,
                                    P = e.sideCar,
                                    T = e.noIsolation,
                                    x = e.inert,
                                    R = e.allowPinchZoom,
                                    I = e.as,
                                    C = e.gapMode,
                                    M = a(e, [
                                        'forwardProps',
                                        'children',
                                        'className',
                                        'removeScrollBar',
                                        'enabled',
                                        'shards',
                                        'sideCar',
                                        'noIsolation',
                                        'inert',
                                        'allowPinchZoom',
                                        'as',
                                        'gapMode',
                                    ]),
                                    A =
                                        ((n = [s, t]),
                                        (r = function (e) {
                                            return n.forEach(function (t) {
                                                return c(t, e);
                                            });
                                        }),
                                        ((o = (0, l.useState)(function () {
                                            return {
                                                value: null,
                                                callback: r,
                                                facade: {
                                                    get current() {
                                                        return o.value;
                                                    },
                                                    set current(value) {
                                                        var e = o.value;
                                                        e !== value && ((o.value = value), o.callback(value, e));
                                                    },
                                                },
                                            };
                                        })[0]).callback = r),
                                        (u = o.facade),
                                        d(
                                            function () {
                                                var e = f.get(u);
                                                if (e) {
                                                    var t = new Set(e),
                                                        r = new Set(n),
                                                        o = u.current;
                                                    (t.forEach(function (e) {
                                                        r.has(e) || c(e, null);
                                                    }),
                                                        r.forEach(function (e) {
                                                            t.has(e) || c(e, o);
                                                        }));
                                                }
                                                f.set(u, n);
                                            },
                                            [n],
                                        ),
                                        u),
                                    k = i(i({}, M), m);
                                return l.createElement(
                                    l.Fragment,
                                    null,
                                    O &&
                                        l.createElement(P, {
                                            sideCar: v,
                                            removeScrollBar: E,
                                            shards: S,
                                            noIsolation: T,
                                            inert: x,
                                            setCallbacks: g,
                                            allowPinchZoom: !!R,
                                            lockRef: s,
                                            gapMode: C,
                                        }),
                                    h
                                        ? l.cloneElement(l.Children.only(y), i(i({}, k), { ref: A }))
                                        : l.createElement(void 0 === I ? 'div' : I, i({}, k, { className: w, ref: A }), y),
                                );
                            });
                        ((m.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }), (m.classNames = { fullWidth: s, zeroRight: u }));
                        var g = function (e) {
                            var t = e.sideCar,
                                n = a(e, ['sideCar']);
                            if (!t) throw Error('Sidecar: please provide `sideCar` property to import the right car');
                            var r = t.read();
                            if (!r) throw Error('Sidecar medium not found');
                            return l.createElement(r, i({}, n));
                        };
                        g.isSideCarExport = !0;
                        var h = function () {
                                var e = 0,
                                    t = null;
                                return {
                                    add: function (r) {
                                        if (
                                            0 == e &&
                                            (t = (function () {
                                                if (!document) return null;
                                                var e = document.createElement('style');
                                                e.type = 'text/css';
                                                var t = o || n.nc;
                                                return (t && e.setAttribute('nonce', t), e);
                                            })())
                                        ) {
                                            var i, a;
                                            ((i = t).styleSheet ? (i.styleSheet.cssText = r) : i.appendChild(document.createTextNode(r)),
                                                (a = t),
                                                (document.head || document.getElementsByTagName('head')[0]).appendChild(a));
                                        }
                                        e++;
                                    },
                                    remove: function () {
                                        --e || !t || (t.parentNode && t.parentNode.removeChild(t), (t = null));
                                    },
                                };
                            },
                            y = function () {
                                var e = h();
                                return function (t, n) {
                                    l.useEffect(
                                        function () {
                                            return (
                                                e.add(t),
                                                function () {
                                                    e.remove();
                                                }
                                            );
                                        },
                                        [t && n],
                                    );
                                };
                            },
                            w = function () {
                                var e = y();
                                return function (t) {
                                    return (e(t.styles, t.dynamic), null);
                                };
                            },
                            E = function (e) {
                                return parseInt(e || '', 10) || 0;
                            },
                            O = function (e) {
                                var t = window.getComputedStyle(document.body),
                                    n = t['padding' === e ? 'paddingLeft' : 'marginLeft'],
                                    r = t['padding' === e ? 'paddingTop' : 'marginTop'],
                                    o = t['padding' === e ? 'paddingRight' : 'marginRight'];
                                return [E(n), E(r), E(o)];
                            },
                            S = function (e) {
                                void 0 === e && (e = 'margin');
                                var t = O(e),
                                    n = document.documentElement.clientWidth,
                                    r = window.innerWidth;
                                return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) };
                            },
                            P = w(),
                            T = 'data-scroll-locked',
                            x = function (e, t, n, r) {
                                var o = e.left,
                                    i = e.top,
                                    a = e.right,
                                    l = e.gap;
                                return (
                                    void 0 === n && (n = 'margin'),
                                    '\n  .'
                                        .concat('with-scroll-bars-hidden', ' {\n   overflow: hidden ')
                                        .concat(r, ';\n   padding-right: ')
                                        .concat(l, 'px ')
                                        .concat(r, ';\n  }\n  body[')
                                        .concat(T, '] {\n    overflow: hidden ')
                                        .concat(r, ';\n    overscroll-behavior: contain;\n    ')
                                        .concat(
                                            [
                                                t && 'position: relative '.concat(r, ';'),
                                                'margin' === n &&
                                                    '\n    padding-left: '
                                                        .concat(o, 'px;\n    padding-top: ')
                                                        .concat(i, 'px;\n    padding-right: ')
                                                        .concat(a, 'px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ')
                                                        .concat(l, 'px ')
                                                        .concat(r, ';\n    '),
                                                'padding' === n && 'padding-right: '.concat(l, 'px ').concat(r, ';'),
                                            ]
                                                .filter(Boolean)
                                                .join(''),
                                            '\n  }\n  \n  .',
                                        )
                                        .concat(u, ' {\n    right: ')
                                        .concat(l, 'px ')
                                        .concat(r, ';\n  }\n  \n  .')
                                        .concat(s, ' {\n    margin-right: ')
                                        .concat(l, 'px ')
                                        .concat(r, ';\n  }\n  \n  .')
                                        .concat(u, ' .')
                                        .concat(u, ' {\n    right: 0 ')
                                        .concat(r, ';\n  }\n  \n  .')
                                        .concat(s, ' .')
                                        .concat(s, ' {\n    margin-right: 0 ')
                                        .concat(r, ';\n  }\n  \n  body[')
                                        .concat(T, '] {\n    ')
                                        .concat('--removed-body-scroll-bar-size', ': ')
                                        .concat(l, 'px;\n  }\n')
                                );
                            },
                            R = function () {
                                var e = parseInt(document.body.getAttribute(T) || '0', 10);
                                return isFinite(e) ? e : 0;
                            },
                            I = function () {
                                l.useEffect(function () {
                                    return (
                                        document.body.setAttribute(T, (R() + 1).toString()),
                                        function () {
                                            var e = R() - 1;
                                            e <= 0 ? document.body.removeAttribute(T) : document.body.setAttribute(T, e.toString());
                                        }
                                    );
                                }, []);
                            },
                            C = function (e) {
                                var t = e.noRelative,
                                    n = e.noImportant,
                                    r = e.gapMode,
                                    o = void 0 === r ? 'margin' : r;
                                I();
                                var i = l.useMemo(
                                    function () {
                                        return S(o);
                                    },
                                    [o],
                                );
                                return l.createElement(P, { styles: x(i, !t, o, n ? '' : '!important') });
                            },
                            M = !1;
                        try {
                            var A = Object.defineProperty({}, 'passive', {
                                get: function () {
                                    return ((M = !0), !0);
                                },
                            });
                            (window.addEventListener('test', A, A), window.removeEventListener('test', A, A));
                        } catch (e) {
                            M = !1;
                        }
                        var k = !!M && { passive: !1 },
                            j = function (e, t) {
                                if (!(e instanceof Element)) return !1;
                                var n = window.getComputedStyle(e);
                                return 'hidden' !== n[t] && (n.overflowY !== n.overflowX || 'TEXTAREA' === e.tagName || 'visible' !== n[t]);
                            },
                            _ = function (e, t) {
                                var n = t.ownerDocument,
                                    r = t;
                                do {
                                    if (('undefined' != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), L(e, r))) {
                                        var o = N(e, r);
                                        if (o[1] > o[2]) return !0;
                                    }
                                    r = r.parentNode;
                                } while (r && r !== n.body);
                                return !1;
                            },
                            L = function (e, t) {
                                return 'v' === e ? j(t, 'overflowY') : j(t, 'overflowX');
                            },
                            N = function (e, t) {
                                return 'v' === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth];
                            },
                            D = function (e, t, n, r, o) {
                                var i,
                                    a = ((i = window.getComputedStyle(t).direction), 'h' === e && 'rtl' === i ? -1 : 1),
                                    l = a * r,
                                    u = n.target,
                                    s = t.contains(u),
                                    c = !1,
                                    d = l > 0,
                                    f = 0,
                                    p = 0;
                                do {
                                    var v = N(e, u),
                                        b = v[0],
                                        m = v[1] - v[2] - a * b;
                                    ((b || m) && L(e, u) && ((f += m), (p += b)), (u = u instanceof ShadowRoot ? u.host : u.parentNode));
                                } while ((!s && u !== document.body) || (s && (t.contains(u) || t === u)));
                                return (d && ((o && 1 > Math.abs(f)) || (!o && l > f)) ? (c = !0) : !d && ((o && 1 > Math.abs(p)) || (!o && -l > p)) && (c = !0), c);
                            },
                            F = function (e) {
                                return 'changedTouches' in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
                            },
                            U = function (e) {
                                return [e.deltaX, e.deltaY];
                            },
                            z = function (e) {
                                return e && 'current' in e ? e.current : e;
                            },
                            B = 0,
                            H = [];
                        let V =
                            ((r = function (e) {
                                var t = l.useRef([]),
                                    n = l.useRef([0, 0]),
                                    r = l.useRef(),
                                    o = l.useState(B++)[0],
                                    i = l.useState(w)[0],
                                    a = l.useRef(e);
                                (l.useEffect(
                                    function () {
                                        a.current = e;
                                    },
                                    [e],
                                ),
                                    l.useEffect(
                                        function () {
                                            if (e.inert) {
                                                document.body.classList.add('block-interactivity-'.concat(o));
                                                var t = (function (e, t, n) {
                                                    if (n || 2 == arguments.length)
                                                        for (var r, o = 0, i = t.length; o < i; o++)
                                                            (!r && o in t) || (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
                                                    return e.concat(r || Array.prototype.slice.call(t));
                                                })([e.lockRef.current], (e.shards || []).map(z), !0).filter(Boolean);
                                                return (
                                                    t.forEach(function (e) {
                                                        return e.classList.add('allow-interactivity-'.concat(o));
                                                    }),
                                                    function () {
                                                        (document.body.classList.remove('block-interactivity-'.concat(o)),
                                                            t.forEach(function (e) {
                                                                return e.classList.remove('allow-interactivity-'.concat(o));
                                                            }));
                                                    }
                                                );
                                            }
                                        },
                                        [e.inert, e.lockRef.current, e.shards],
                                    ));
                                var u = l.useCallback(function (e, t) {
                                        if (('touches' in e && 2 === e.touches.length) || ('wheel' === e.type && e.ctrlKey)) return !a.current.allowPinchZoom;
                                        var o,
                                            i = F(e),
                                            l = n.current,
                                            u = 'deltaX' in e ? e.deltaX : l[0] - i[0],
                                            s = 'deltaY' in e ? e.deltaY : l[1] - i[1],
                                            c = e.target,
                                            d = Math.abs(u) > Math.abs(s) ? 'h' : 'v';
                                        if ('touches' in e && 'h' === d && 'range' === c.type) return !1;
                                        var f = _(d, c);
                                        if (!f) return !0;
                                        if ((f ? (o = d) : ((o = 'v' === d ? 'h' : 'v'), (f = _(d, c))), !f)) return !1;
                                        if ((!r.current && 'changedTouches' in e && (u || s) && (r.current = o), !o)) return !0;
                                        var p = r.current || o;
                                        return D(p, t, e, 'h' === p ? u : s, !0);
                                    }, []),
                                    s = l.useCallback(function (e) {
                                        if (H.length && H[H.length - 1] === i) {
                                            var n = 'deltaY' in e ? U(e) : F(e),
                                                r = t.current.filter(function (t) {
                                                    var r;
                                                    return (
                                                        t.name === e.type &&
                                                        (t.target === e.target || e.target === t.shadowParent) &&
                                                        ((r = t.delta), r[0] === n[0] && r[1] === n[1])
                                                    );
                                                })[0];
                                            if (r && r.should) {
                                                e.cancelable && e.preventDefault();
                                                return;
                                            }
                                            if (!r) {
                                                var o = (a.current.shards || [])
                                                    .map(z)
                                                    .filter(Boolean)
                                                    .filter(function (t) {
                                                        return t.contains(e.target);
                                                    });
                                                (o.length > 0 ? u(e, o[0]) : !a.current.noIsolation) && e.cancelable && e.preventDefault();
                                            }
                                        }
                                    }, []),
                                    c = l.useCallback(function (e, n, r, o) {
                                        var i = {
                                            name: e,
                                            delta: n,
                                            target: r,
                                            should: o,
                                            shadowParent: (function (e) {
                                                for (var t = null; null !== e;) (e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode));
                                                return t;
                                            })(r),
                                        };
                                        (t.current.push(i),
                                            setTimeout(function () {
                                                t.current = t.current.filter(function (e) {
                                                    return e !== i;
                                                });
                                            }, 1));
                                    }, []),
                                    d = l.useCallback(function (e) {
                                        ((n.current = F(e)), (r.current = void 0));
                                    }, []),
                                    f = l.useCallback(function (t) {
                                        c(t.type, U(t), t.target, u(t, e.lockRef.current));
                                    }, []),
                                    p = l.useCallback(function (t) {
                                        c(t.type, F(t), t.target, u(t, e.lockRef.current));
                                    }, []);
                                l.useEffect(function () {
                                    return (
                                        H.push(i),
                                        e.setCallbacks({ onScrollCapture: f, onWheelCapture: f, onTouchMoveCapture: p }),
                                        document.addEventListener('wheel', s, k),
                                        document.addEventListener('touchmove', s, k),
                                        document.addEventListener('touchstart', d, k),
                                        function () {
                                            ((H = H.filter(function (e) {
                                                return e !== i;
                                            })),
                                                document.removeEventListener('wheel', s, k),
                                                document.removeEventListener('touchmove', s, k),
                                                document.removeEventListener('touchstart', d, k));
                                        }
                                    );
                                }, []);
                                var v = e.removeScrollBar,
                                    b = e.inert;
                                return l.createElement(
                                    l.Fragment,
                                    null,
                                    b
                                        ? l.createElement(i, {
                                              styles: '\n  .block-interactivity-'
                                                  .concat(o, ' {pointer-events: none;}\n  .allow-interactivity-')
                                                  .concat(o, ' {pointer-events: all;}\n'),
                                          })
                                        : null,
                                    v ? l.createElement(C, { gapMode: e.gapMode }) : null,
                                );
                            }),
                            v.useMedium(r),
                            g);
                        var W = l.forwardRef(function (e, t) {
                            return l.createElement(m, i({}, e, { ref: t, sideCar: V }));
                        });
                        W.classNames = m.classNames;
                        let Y = W;
                    },
                    4490: (e, t, n) => {
                        (n.r(t), n.d(t, { DOWN: () => l, LEFT: () => o, RIGHT: () => i, UP: () => a, useSwipeable: () => p }));
                        var r = n(810);
                        let o = 'Left',
                            i = 'Right',
                            a = 'Up',
                            l = 'Down',
                            u = {
                                delta: 10,
                                preventScrollOnSwipe: !1,
                                rotationAngle: 0,
                                trackMouse: !1,
                                trackTouch: !0,
                                swipeDuration: 1 / 0,
                                touchEventOptions: { passive: !0 },
                            },
                            s = { first: !0, initial: [0, 0], start: 0, swiping: !1, xy: [0, 0] },
                            c = 'mousemove',
                            d = 'mouseup';
                        function f(e, t) {
                            if (0 === t) return e;
                            let n = (Math.PI / 180) * t;
                            return [e[0] * Math.cos(n) + e[1] * Math.sin(n), e[1] * Math.cos(n) - e[0] * Math.sin(n)];
                        }
                        function p(e) {
                            var t, n, p;
                            let v,
                                { trackMouse: b } = e,
                                m = r.useRef(Object.assign({}, s)),
                                g = r.useRef(Object.assign({}, u)),
                                h = r.useRef(Object.assign({}, g.current));
                            for (v in ((h.current = Object.assign({}, g.current)), (g.current = Object.assign(Object.assign({}, u), e)), u))
                                void 0 === g.current[v] && (g.current[v] = u[v]);
                            let [y, w] = r.useMemo(
                                () =>
                                    (function (e, t) {
                                        let n = (t) => {
                                                let n = 'touches' in t;
                                                (n && t.touches.length > 1) ||
                                                    e((e, o) => {
                                                        o.trackMouse && !n && (document.addEventListener(c, r), document.addEventListener(d, v));
                                                        let { clientX: i, clientY: a } = n ? t.touches[0] : t,
                                                            l = f([i, a], o.rotationAngle);
                                                        return (
                                                            o.onTouchStartOrOnMouseDown && o.onTouchStartOrOnMouseDown({ event: t }),
                                                            Object.assign(Object.assign(Object.assign({}, e), s), { initial: l.slice(), xy: l, start: t.timeStamp || 0 })
                                                        );
                                                    });
                                            },
                                            r = (t) => {
                                                e((e, n) => {
                                                    var r, s, c, d;
                                                    let p = 'touches' in t;
                                                    if (p && t.touches.length > 1) return e;
                                                    if (t.timeStamp - e.start > n.swipeDuration)
                                                        return e.swiping ? Object.assign(Object.assign({}, e), { swiping: !1 }) : e;
                                                    let { clientX: v, clientY: b } = p ? t.touches[0] : t,
                                                        [m, g] = f([v, b], n.rotationAngle),
                                                        h = m - e.xy[0],
                                                        y = g - e.xy[1],
                                                        w = Math.abs(h),
                                                        E = Math.abs(y),
                                                        O = (t.timeStamp || 0) - e.start,
                                                        S = Math.sqrt(w * w + E * E) / (O || 1),
                                                        P = [h / (O || 1), y / (O || 1)],
                                                        T = ((r = w), (s = E), (c = h), (d = y), r > s ? (c > 0 ? i : o) : d > 0 ? l : a),
                                                        x = 'number' == typeof n.delta ? n.delta : n.delta[T.toLowerCase()] || u.delta;
                                                    if (w < x && E < x && !e.swiping) return e;
                                                    let R = {
                                                        absX: w,
                                                        absY: E,
                                                        deltaX: h,
                                                        deltaY: y,
                                                        dir: T,
                                                        event: t,
                                                        first: e.first,
                                                        initial: e.initial,
                                                        velocity: S,
                                                        vxvy: P,
                                                    };
                                                    (R.first && n.onSwipeStart && n.onSwipeStart(R), n.onSwiping && n.onSwiping(R));
                                                    let I = !1;
                                                    return (
                                                        (n.onSwiping || n.onSwiped || n['onSwiped'.concat(T)]) && (I = !0),
                                                        I && n.preventScrollOnSwipe && n.trackTouch && t.cancelable && t.preventDefault(),
                                                        Object.assign(Object.assign({}, e), { first: !1, eventData: R, swiping: !0 })
                                                    );
                                                });
                                            },
                                            p = (t) => {
                                                e((e, n) => {
                                                    let r;
                                                    if (e.swiping && e.eventData) {
                                                        if (t.timeStamp - e.start < n.swipeDuration) {
                                                            ((r = Object.assign(Object.assign({}, e.eventData), { event: t })), n.onSwiped && n.onSwiped(r));
                                                            let o = n['onSwiped'.concat(r.dir)];
                                                            o && o(r);
                                                        }
                                                    } else n.onTap && n.onTap({ event: t });
                                                    return (
                                                        n.onTouchEndOrOnMouseUp && n.onTouchEndOrOnMouseUp({ event: t }),
                                                        Object.assign(Object.assign(Object.assign({}, e), s), { eventData: r })
                                                    );
                                                });
                                            },
                                            v = (e) => {
                                                (document.removeEventListener(c, r), document.removeEventListener(d, v), p(e));
                                            },
                                            b = (e, t) => {
                                                let o = () => {};
                                                if (e && e.addEventListener) {
                                                    let i = Object.assign(Object.assign({}, u.touchEventOptions), t.touchEventOptions),
                                                        a = [
                                                            ['touchstart', n, i],
                                                            ['touchmove', r, Object.assign(Object.assign({}, i), t.preventScrollOnSwipe ? { passive: !1 } : {})],
                                                            ['touchend', p, i],
                                                        ];
                                                    (a.forEach((t) => {
                                                        let [n, r, o] = t;
                                                        return e.addEventListener(n, r, o);
                                                    }),
                                                        (o = () =>
                                                            a.forEach((t) => {
                                                                let [n, r] = t;
                                                                return e.removeEventListener(n, r);
                                                            })));
                                                }
                                                return o;
                                            },
                                            m = {
                                                ref: (t) => {
                                                    null !== t &&
                                                        e((e, n) => {
                                                            if (e.el === t) return e;
                                                            let r = {};
                                                            return (
                                                                e.el && e.el !== t && e.cleanUpTouch && (e.cleanUpTouch(), (r.cleanUpTouch = void 0)),
                                                                n.trackTouch && t && (r.cleanUpTouch = b(t, n)),
                                                                Object.assign(Object.assign(Object.assign({}, e), { el: t }), r)
                                                            );
                                                        });
                                                },
                                            };
                                        return (t.trackMouse && (m.onMouseDown = n), [m, b]);
                                    })((e) => (m.current = e(m.current, g.current)), { trackMouse: b }),
                                [b],
                            );
                            return (
                                (t = m.current),
                                (n = g.current),
                                (p = h.current),
                                (m.current =
                                    n.trackTouch && t.el
                                        ? t.cleanUpTouch
                                            ? n.preventScrollOnSwipe !== p.preventScrollOnSwipe || n.touchEventOptions.passive !== p.touchEventOptions.passive
                                                ? (t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: w(t.el, n) }))
                                                : t
                                            : Object.assign(Object.assign({}, t), { cleanUpTouch: w(t.el, n) })
                                        : (t.cleanUpTouch && t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: void 0 }))),
                                y
                            );
                        }
                    },
                    9097: (e, t) => {
                        var n = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var o = null;
                            if ((void 0 !== r && (o = '' + r), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var i in ((r = {}), t)) 'key' !== i && (r[i] = t[i]);
                            else r = t;
                            return { $$typeof: n, type: e, key: o, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r));
                    },
                    4377: (e, t, n) => {
                        e.exports = n(9097);
                    },
                    9580: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useLongPress =
                                t.useDynamicText =
                                t.usePopoverSwipeable =
                                t.useReturnValue =
                                t.useCallbackRef =
                                t.useDebouncedToggle =
                                t.useResize =
                                t.useIsomorphicEffect =
                                t.useForceUpdateRef =
                                t.useElementOffsetY =
                                t.getElementNameByDataAttribute =
                                t.createIntersectionObserver =
                                t.useIntersectionObserver =
                                t.useKeyboardNavigation =
                                t.useScroll =
                                t.useForwardRef =
                                    void 0));
                        var r = n(189);
                        Object.defineProperty(t, 'useForwardRef', {
                            enumerable: !0,
                            get: function () {
                                return r.useForwardRef;
                            },
                        });
                        var o = n(3830);
                        Object.defineProperty(t, 'useScroll', {
                            enumerable: !0,
                            get: function () {
                                return o.useScroll;
                            },
                        });
                        var i = n(3298);
                        Object.defineProperty(t, 'useKeyboardNavigation', {
                            enumerable: !0,
                            get: function () {
                                return i.useKeyboardNavigation;
                            },
                        });
                        var a = n(597);
                        (Object.defineProperty(t, 'useIntersectionObserver', {
                            enumerable: !0,
                            get: function () {
                                return a.useIntersectionObserver;
                            },
                        }),
                            Object.defineProperty(t, 'createIntersectionObserver', {
                                enumerable: !0,
                                get: function () {
                                    return a.createIntersectionObserver;
                                },
                            }),
                            Object.defineProperty(t, 'getElementNameByDataAttribute', {
                                enumerable: !0,
                                get: function () {
                                    return a.getElementNameByDataAttribute;
                                },
                            }));
                        var l = n(7293);
                        Object.defineProperty(t, 'useElementOffsetY', {
                            enumerable: !0,
                            get: function () {
                                return l.useElementOffsetY;
                            },
                        });
                        var u = n(3940);
                        Object.defineProperty(t, 'useForceUpdateRef', {
                            enumerable: !0,
                            get: function () {
                                return u.useForceUpdateRef;
                            },
                        });
                        var s = n(4482);
                        Object.defineProperty(t, 'useIsomorphicEffect', {
                            enumerable: !0,
                            get: function () {
                                return s.useIsomorphicEffect;
                            },
                        });
                        var c = n(588);
                        Object.defineProperty(t, 'useResize', {
                            enumerable: !0,
                            get: function () {
                                return c.useResize;
                            },
                        });
                        var d = n(8612);
                        Object.defineProperty(t, 'useDebouncedToggle', {
                            enumerable: !0,
                            get: function () {
                                return d.useDebouncedToggle;
                            },
                        });
                        var f = n(792);
                        Object.defineProperty(t, 'useCallbackRef', {
                            enumerable: !0,
                            get: function () {
                                return f.useCallbackRef;
                            },
                        });
                        var p = n(7497);
                        Object.defineProperty(t, 'useReturnValue', {
                            enumerable: !0,
                            get: function () {
                                return p.useReturnValue;
                            },
                        });
                        var v = n(2380);
                        Object.defineProperty(t, 'usePopoverSwipeable', {
                            enumerable: !0,
                            get: function () {
                                return v.usePopoverSwipeable;
                            },
                        });
                        var b = n(6585);
                        Object.defineProperty(t, 'useDynamicText', {
                            enumerable: !0,
                            get: function () {
                                return b.useDynamicText;
                            },
                        });
                        var m = n(9966);
                        Object.defineProperty(t, 'useLongPress', {
                            enumerable: !0,
                            get: function () {
                                return m.useLongPress;
                            },
                        });
                    },
                    792: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useCallbackRef = void 0));
                        let r = n(810);
                        t.useCallbackRef = function (e) {
                            let t = (0, r.useRef)({
                                stableFn: function () {
                                    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                    return t.current.callback(...n);
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
                    2458: (e, t, n) => {
                        var r;
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useComponentSwipeable = t.SwipeablePlacement = void 0));
                        let o = n(4490),
                            i = n(792);
                        !(function (e) {
                            ((e.TOP = 'top'), (e.BOTTOM = 'bottom'), (e.RIGHT = 'right'), (e.LEFT = 'left'));
                        })(r || (t.SwipeablePlacement = r = {}));
                        let a = (e) => {
                                let { ref: t, deltaY: n, deltaX: o, placement: i } = e;
                                requestAnimationFrame(() => {
                                    t.current &&
                                        ((t.current.style.willChange = 'transform'),
                                        (t.current.style.transform =
                                            i === r.TOP || i === r.BOTTOM ? 'translateY('.concat(n || 0, 'px)') : 'translateX('.concat(o || 0, 'px)')));
                                });
                            },
                            l = (e) => {
                                requestAnimationFrame(() => {
                                    e.current && ((e.current.style.transition = 'none'), (e.current.style.willChange = ''), (e.current.style.transform = ''));
                                });
                            };
                        t.useComponentSwipeable = (e) => {
                            let { ref: t, swipeableProps: n = {}, onClose: u, disableSwipe: s, placement: c, threshold: d } = e,
                                f = (0, i.useCallbackRef)(() => {
                                    u && (l(t), u());
                                }),
                                p = (0, i.useCallbackRef)((e) => {
                                    s ||
                                        ((e) => {
                                            let { ref: t, deltaY: n, deltaX: o, placement: i } = e;
                                            switch (i) {
                                                case r.TOP:
                                                    n <= 0 && a({ ref: t, deltaY: n, deltaX: o, placement: i });
                                                    break;
                                                case r.RIGHT:
                                                    o >= 0 && a({ ref: t, deltaY: n, deltaX: o, placement: i });
                                                    break;
                                                case r.LEFT:
                                                    o <= 0 && a({ ref: t, deltaY: n, deltaX: o, placement: i });
                                                    break;
                                                default:
                                                    n >= 0 && a({ ref: t, deltaY: n, deltaX: o, placement: i });
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: c });
                                }),
                                v = (0, i.useCallbackRef)((e) => {
                                    !s &&
                                        (((e) => {
                                            let { ref: t, deltaY: n, deltaX: o, placement: i, threshold: a = 25 } = e;
                                            if (!t.current) return !1;
                                            let l = (a / 100) * (i === r.TOP || i === r.BOTTOM ? t.current.offsetHeight : t.current.offsetWidth);
                                            switch (i) {
                                                case r.TOP:
                                                    return n < 0 && Math.abs(n) >= l;
                                                case r.RIGHT:
                                                    return o > 0 && o >= l;
                                                case r.LEFT:
                                                    return o < 0 && Math.abs(o) >= l;
                                                default:
                                                    return n > 0 && n >= l;
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: c, threshold: d })
                                            ? u && (l(t), u())
                                            : l(t));
                                });
                            return { handlers: (0, o.useSwipeable)({ onSwiped: v, onSwiping: p, trackMouse: !0, trackTouch: !0, ...n }), onCloseCallback: f };
                        };
                    },
                    8612: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0));
                        let r = n(352),
                            o = n(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: n, throttleTimeout: i } = e,
                                a = (0, o.useRef)(null),
                                [l, u] = (0, o.useState)(!!n),
                                s = (0, o.useMemo)(
                                    () =>
                                        (0, r.throttle)(() => {
                                            (u(!n),
                                                a.current && window.clearTimeout(a.current),
                                                (a.current = window.setTimeout(() => {
                                                    u(!!n);
                                                }, t)));
                                        }, i),
                                    [t, n, i],
                                ),
                                c = (0, o.useCallback)(() => {
                                    (u(!!n), a.current && window.clearTimeout(a.current));
                                }, [n]);
                            return (
                                (0, o.useEffect)(
                                    () => () => {
                                        a.current && window.clearTimeout(a.current);
                                    },
                                    [],
                                ),
                                { state: l, handleDebouncedToggle: s, reset: c }
                            );
                        };
                    },
                    6585: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDynamicText = t.findOptimalFontSize = void 0));
                        let r = n(810),
                            o = (e) => {
                                ((e.style.wordBreak = 'keep-all'),
                                    (e.style.overflowWrap = 'normal'),
                                    (e.style.maxHeight = 'none'),
                                    (e.style.height = 'auto'),
                                    (e.style.overflow = 'visible'),
                                    Array.from(e.children).forEach((e) => {
                                        e instanceof HTMLElement && o(e);
                                    }));
                            },
                            i = (e, t, n, r, o, i) => {
                                (e.style.setProperty('--dynamic-font-size', ''.concat(r, 'px')), e.style.setProperty('--dynamic-line-height', String(o)));
                                let a = 'number' == typeof i ? e.scrollHeight <= Math.min(i * r * o, n) + 1 : e.scrollHeight <= n + 1,
                                    l = e.scrollWidth <= t + 1;
                                return a && l;
                            },
                            a = (e) => {
                                let {
                                        container: t,
                                        containerWidth: n,
                                        containerHeight: r,
                                        minFontSize: a,
                                        maxFontSize: l,
                                        lineHeight: u,
                                        maxLines: s,
                                        styleVariants: c,
                                    } = e,
                                    d = ((e, t, n) => {
                                        let r = e.cloneNode(!0);
                                        return (
                                            (r.style.cssText =
                                                '\n        position: absolute !important;\n        visibility: hidden !important;\n        pointer-events: none !important;\n        width: '.concat(
                                                    t,
                                                    'px !important;\n    ',
                                                )),
                                            o(r),
                                            r.style.setProperty('--dynamic-line-height', String(n)),
                                            document.body.appendChild(r),
                                            r
                                        );
                                    })(t, n, u);
                                try {
                                    if (null == c ? void 0 : c.length) {
                                        var f;
                                        let e = [...c].sort((e, t) => t.fontSize - e.fontSize),
                                            t = null != (f = e[e.length - 1]) ? f : { fontSize: a, lineHeight: u };
                                        for (let t of e) if (i(d, n, r, t.fontSize, t.lineHeight, s)) return { ...t, fits: !0 };
                                        return { ...t, fits: !1 };
                                    }
                                    let e = a,
                                        t = l,
                                        o = null;
                                    for (; e <= t;) {
                                        let a = Math.floor((e + t) / 2);
                                        i(d, n, r, a, u, s) ? ((o = a), (e = a + 1)) : (t = a - 1);
                                    }
                                    if (null === o) return { fontSize: a, lineHeight: u, fits: !1 };
                                    return { fontSize: Math.max(a, o - 1), lineHeight: u, fits: !0 };
                                } finally {
                                    d.remove();
                                }
                            };
                        ((t.findOptimalFontSize = (e) => a(e).fontSize),
                            (t.useDynamicText = (e, t, n) => {
                                let { minFontSize: o, maxFontSize: i, lineHeight: l, maxLines: u, fallbackMaxLines: s, styleVariants: c } = t;
                                (0, r.useLayoutEffect)(() => {
                                    if (null === e) return;
                                    e.style.setProperty('--dynamic-line-height', String(l));
                                    let t = () => {
                                            let t = e.clientWidth,
                                                r = e.clientHeight,
                                                d = e.childNodes.length > 0;
                                            if (0 === t || 0 === r || !d) return;
                                            let {
                                                maxLines: f,
                                                fontSize: p,
                                                lineHeight: v,
                                            } = ((e) => {
                                                let { fallbackMaxLines: t, maxLines: n } = e,
                                                    r = a({ ...e, maxLines: n });
                                                if (void 0 === t || r.fits) return { maxLines: n, fontSize: r.fontSize, lineHeight: r.lineHeight };
                                                let o = a({ ...e, maxLines: t });
                                                return { maxLines: t, fontSize: o.fontSize, lineHeight: o.lineHeight };
                                            })({
                                                container: e,
                                                containerWidth: t,
                                                containerHeight: r,
                                                minFontSize: o,
                                                maxFontSize: i,
                                                lineHeight: l,
                                                maxLines: u,
                                                fallbackMaxLines: s,
                                                styleVariants: c,
                                            });
                                            (null == n || n(f),
                                                e.style.setProperty('--dynamic-font-size', ''.concat(p, 'px')),
                                                e.style.setProperty('--dynamic-line-height', String(v)));
                                        },
                                        r = new ResizeObserver(t),
                                        d = new MutationObserver(t);
                                    return (
                                        r.observe(e),
                                        d.observe(e, { childList: !0, characterData: !0, subtree: !0 }),
                                        document.fonts.ready.then(t),
                                        t(),
                                        () => {
                                            (r.disconnect(), d.disconnect());
                                        }
                                    );
                                }, [e, n, s, l, i, u, o, c]);
                            }));
                    },
                    7293: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useElementOffsetY = void 0));
                        let r = n(810),
                            o = n(3830),
                            i = n(3940);
                        t.useElementOffsetY = (e) => {
                            let [t, n] = (0, i.useForceUpdateRef)(),
                                [a, l] = (0, r.useState)(),
                                u = (0, r.useCallback)(() => {
                                    let e = null == t ? void 0 : t.getBoundingClientRect();
                                    e && l(e.y);
                                }, [t]);
                            return ((0, r.useLayoutEffect)(u), (0, o.useScroll)({ onScroll: u, elementRef: e }), { forceUpdateRefCallback: n, offsetY: a });
                        };
                    },
                    3180: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useFloatingReturnFocus = void 0));
                        let r = n(810),
                            o = n(132),
                            i = n(792);
                        t.useFloatingReturnFocus = (e) => {
                            let { open: t, onOpenChange: n } = e,
                                [a, l] = (0, r.useState)(!0),
                                u = (0, i.useCallbackRef)((e, t, r) => {
                                    (l(
                                        !(
                                            !e &&
                                            'outside-press' === r &&
                                            t instanceof MouseEvent &&
                                            (!('pointerType' in t) || 'mouse' === t.pointerType) &&
                                            !(0, o.isVirtualClick)(t) &&
                                            !('undefined' != typeof PointerEvent && t instanceof PointerEvent && (0, o.isVirtualPointerEvent)(t))
                                        ),
                                    ),
                                        null == n || n(e, t, r));
                                });
                            return (
                                (0, r.useEffect)(() => {
                                    t && l(!0);
                                }, [t]),
                                { onOpenChange: u, returnFocus: a }
                            );
                        };
                    },
                    3940: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useForceUpdateRef = void 0));
                        let r = n(810);
                        t.useForceUpdateRef = () => {
                            let [e, t] = (0, r.useState)(null);
                            return [
                                e,
                                (0, r.useCallback)((e) => {
                                    t((t) => (t !== e ? e : t));
                                }, []),
                            ];
                        };
                    },
                    189: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useForwardRef = void 0));
                        let r = n(810);
                        t.useForwardRef = function (e, t) {
                            let n = (0, r.useRef)(t);
                            return (
                                (0, r.useEffect)(() => {
                                    e && ('function' == typeof e ? e(n.current) : (e.current = n.current));
                                }, [e]),
                                n
                            );
                        };
                    },
                    597: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useIntersectionObserver = t.createIntersectionObserver = t.getElementNameByDataAttribute = t.isInViewportNow = t.defaultOptions = void 0));
                        let r = n(810),
                            { innerWidth: o = 0, innerHeight: i = 0 } = window;
                        function a(e) {
                            let { top: t, right: n, bottom: r, left: a } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= i) || (r >= 0 && r <= i)) && ((a >= 0 && a <= o) || (n >= 0 && n <= o));
                        }
                        function l(e) {
                            var t, n;
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (n = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, r)) ? n : e.attributes[0];
                        }
                        function u(e, t) {
                            let n = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, n);
                                });
                            }, t);
                            return n;
                        }
                        ((t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = a),
                            (t.getElementNameByDataAttribute = l),
                            (t.createIntersectionObserver = u),
                            (t.useIntersectionObserver = function (e, n, o) {
                                let [{ freezeOnceVisible: i, preflightCheck: s, ...c }, d = !1] =
                                        'boolean' == typeof n || void 0 === n ? [t.defaultOptions, n] : [{ ...t.defaultOptions, ...n }, o],
                                    [f, p] = (0, r.useState)({}),
                                    v = (0, r.useRef)(new Set()),
                                    b = (0, r.useMemo)(
                                        () =>
                                            d
                                                ? null
                                                : u((e) => {
                                                      let t = l(e.target);
                                                      if (t && b) {
                                                          if (v.current.has(t)) return;
                                                          (p((n) => ({ ...n, [t]: { isIntersecting: e.isIntersecting } })),
                                                              i && e.isIntersecting && (v.current.add(t), b.unobserve(e.target)));
                                                      }
                                                  }, c),
                                        [d],
                                    );
                                return (
                                    (0, r.useLayoutEffect)(
                                        () => (
                                            b &&
                                                !d &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let t = !1;
                                                        if (s && (t = a(e.current))) {
                                                            let t = l(e.current);
                                                            p((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                                                        }
                                                        t || b.observe(e.current);
                                                    }
                                                }),
                                            () => {
                                                b && b.disconnect();
                                            }
                                        ),
                                        [d, b, e.length],
                                    ),
                                    f
                                );
                            }));
                    },
                    4482: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useIsomorphicEffect = void 0));
                        let r = n(810);
                        t.useIsomorphicEffect = 'undefined' != typeof document ? r.useLayoutEffect : r.useEffect;
                    },
                    3298: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useKeyboardNavigation = void 0));
                        let r = n(810);
                        function o(e, t) {
                            return e.current ? Array.from(t ? e.current.querySelectorAll(t) : e.current.children) : [];
                        }
                        t.useKeyboardNavigation = function (e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                { navigationItemsSelector: n, activeAttributeName: i = 'aria-selected' } = t,
                                a = (0, r.useCallback)(
                                    (t) => {
                                        let r = o(e, n);
                                        if (!r.length) return;
                                        let i = t.target,
                                            a = r.indexOf(i);
                                        if (-1 === a) return;
                                        let [l] = r,
                                            u = r.at(-1),
                                            s = null;
                                        switch (t.key) {
                                            case 'ArrowLeft':
                                            case 'ArrowUp':
                                                s = r[a - 1] || u;
                                                break;
                                            case 'ArrowRight':
                                            case 'ArrowDown':
                                                s = r[a + 1] || l;
                                                break;
                                            case 'Home':
                                                s = l;
                                                break;
                                            case 'End':
                                                s = u;
                                        }
                                        null !== s && (s.focus(), t.preventDefault());
                                    },
                                    [n, e],
                                );
                            ((0, r.useEffect)(() => {
                                let t = e.current;
                                return (null == t || t.addEventListener('keydown', a), () => (null == t ? void 0 : t.removeEventListener('keydown', a)));
                            }, [e, a]),
                                (0, r.useEffect)(() => {
                                    o(e, n).forEach((e) => {
                                        e.hasAttribute(i) && ('true' === e.getAttribute(i) ? (e.tabIndex = 0) : (e.tabIndex = -1));
                                    });
                                }));
                        };
                    },
                    9966: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useLongPress = void 0));
                        let r = n(810),
                            o = n(792),
                            i = n(3940),
                            a = n(4012);
                        t.useLongPress = function () {
                            let {
                                    ref: e,
                                    onLongPress: t,
                                    delay: n = 500,
                                    movementThreshold: l = 10,
                                    disabled: u = !1,
                                    allowMouse: s = !1,
                                    scale: c,
                                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                [d, f] = (0, i.useForceUpdateRef)(),
                                p = (0, a.useMergeRefs)([f, e]),
                                [v, b] = (0, r.useState)(!1),
                                [m, g] = (0, r.useState)(!1),
                                h = (0, r.useRef)(void 0),
                                y = (0, o.useCallbackRef)((e, n) => (null == t ? void 0 : t(e, n))),
                                w = (0, o.useCallbackRef)(() => {
                                    var e;
                                    (null == (e = h.current) || e.call(h), g(!1));
                                });
                            return (
                                (0, r.useEffect)(() => {
                                    let e, t, r, o;
                                    if (!d || u) return;
                                    let i = d.ownerDocument,
                                        a = i.defaultView;
                                    if (!a) return;
                                    let f = new AbortController();
                                    function p() {
                                        (a.clearTimeout(r),
                                            (r = void 0),
                                            null == o || o.cancel(),
                                            (o = void 0),
                                            (e = void 0),
                                            b(!1),
                                            null == t || t.abort(),
                                            (t = void 0));
                                    }
                                    function v(t) {
                                        e && t.pointerId === e.pointerId && Math.hypot(t.clientX - e.clientX, t.clientY - e.clientY) > l && p();
                                    }
                                    function m(t) {
                                        t.pointerId === (null == e ? void 0 : e.pointerId) && p();
                                    }
                                    function w(t) {
                                        t.pointerId !== (null == e ? void 0 : e.pointerId) && p();
                                    }
                                    function E() {
                                        'hidden' === i.visibilityState && p();
                                    }
                                    return (
                                        (h.current = p),
                                        d.addEventListener(
                                            'pointerdown',
                                            (l) => {
                                                var u;
                                                let f = 'touch' === l.pointerType || 'pen' === l.pointerType || (s && 'mouse' === l.pointerType);
                                                if (e || !l.isPrimary || 0 !== l.button || !f) return;
                                                ((e = l),
                                                    (t = new AbortController()),
                                                    b(!0),
                                                    g(!1),
                                                    void 0 !== c &&
                                                        c > 0 &&
                                                        Number.isFinite(c) &&
                                                        !(null == (u = a.matchMedia) ? void 0 : u.call(a, '(prefers-reduced-motion: reduce)').matches) &&
                                                        d.animate &&
                                                        (o = d.animate([{ transform: 'scale(1)' }, { transform: 'scale('.concat(c, ')') }], {
                                                            duration: 150,
                                                            easing: 'ease-out',
                                                            fill: 'forwards',
                                                            composite: 'add',
                                                        })));
                                                let h = t.signal;
                                                (i.addEventListener('pointermove', v, { capture: !0, passive: !0, signal: h }),
                                                    i.addEventListener('pointerup', m, { capture: !0, signal: h }),
                                                    i.addEventListener('pointercancel', m, { capture: !0, signal: h }),
                                                    i.addEventListener('lostpointercapture', m, { capture: !0, signal: h }),
                                                    i.addEventListener('pointerdown', w, { capture: !0, signal: h }),
                                                    i.addEventListener('scroll', p, { capture: !0, passive: !0, signal: h }),
                                                    i.addEventListener('visibilitychange', E, { signal: h }),
                                                    a.addEventListener('scroll', p, { passive: !0, signal: h }),
                                                    a.addEventListener('blur', p, { signal: h }),
                                                    (r = a.setTimeout(() => {
                                                        if (((r = void 0), !d.isConnected)) return void p();
                                                        (((e, t) => {
                                                            let n,
                                                                r = e.ownerDocument,
                                                                o = r.defaultView;
                                                            if (!o) return;
                                                            let i = new AbortController(),
                                                                a = !1;
                                                            function l() {
                                                                (o.clearTimeout(n), i.abort());
                                                            }
                                                            function u(e) {
                                                                e.pointerId === t.pointerId && ((a = !0), o.clearTimeout(n), (n = o.setTimeout(l, 750)));
                                                            }
                                                            n = o.setTimeout(l, 6e4);
                                                            let s = i.signal;
                                                            (r.addEventListener(
                                                                'click',
                                                                function (n) {
                                                                    let r = 'pointerId' in n ? n.pointerId === t.pointerId : n.composedPath().includes(e);
                                                                    0 !== n.detail && r && (n.preventDefault(), n.stopPropagation(), l());
                                                                },
                                                                { capture: !0, signal: s },
                                                            ),
                                                                r.addEventListener(
                                                                    'pointerdown',
                                                                    function () {
                                                                        a && l();
                                                                    },
                                                                    { capture: !0, signal: s },
                                                                ),
                                                                r.addEventListener(
                                                                    'contextmenu',
                                                                    function (n) {
                                                                        'mouse' !== t.pointerType && n.composedPath().includes(e) && n.preventDefault();
                                                                    },
                                                                    { capture: !0, signal: s },
                                                                ),
                                                                r.addEventListener('pointerup', u, { capture: !0, signal: s }),
                                                                r.addEventListener('pointercancel', u, { capture: !0, signal: s }),
                                                                o.addEventListener('blur', l, { signal: s }));
                                                        })(d, l),
                                                            g(!0),
                                                            y(l, d));
                                                    }, n)));
                                            },
                                            { passive: !0, signal: f.signal },
                                        ),
                                        d.addEventListener(
                                            'contextmenu',
                                            (t) => {
                                                e && 'mouse' !== e.pointerType && t.preventDefault();
                                            },
                                            { signal: f.signal },
                                        ),
                                        () => {
                                            (p(), (h.current = void 0), f.abort());
                                        }
                                    );
                                }, [d, u, n, l, s, c, y]),
                                { ref: p, isPressing: v, isLongPressed: m, reset: w }
                            );
                        };
                    },
                    4012: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useMergeRefs = void 0));
                        var r = n(1964);
                        Object.defineProperty(t, 'useMergeRefs', {
                            enumerable: !0,
                            get: function () {
                                return r.useMergeRefs;
                            },
                        });
                    },
                    2380: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.usePopoverSwipeable = void 0));
                        let r = n(810),
                            o = n(2458);
                        t.usePopoverSwipeable = (e) => {
                            let { ref: t, swipeableProps: n = {}, onClose: i, disableSwipe: a, placement: l, threshold: u } = e,
                                s = (0, r.useMemo)(() => {
                                    switch (l) {
                                        case 'top':
                                        case 'top-end':
                                        case 'top-start':
                                            return o.SwipeablePlacement.TOP;
                                        case 'right':
                                        case 'right-end':
                                        case 'right-start':
                                            return o.SwipeablePlacement.RIGHT;
                                        case 'left':
                                        case 'left-end':
                                        case 'left-start':
                                            return o.SwipeablePlacement.LEFT;
                                        default:
                                            return o.SwipeablePlacement.BOTTOM;
                                    }
                                }, [l]);
                            return (0, o.useComponentSwipeable)({ ref: t, swipeableProps: n, onClose: i, disableSwipe: a, placement: s, threshold: u });
                        };
                    },
                    588: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useResize = void 0));
                        let r = n(810),
                            o = n(1848);
                        t.useResize = (e, t) => {
                            (0, r.useEffect)(() => {
                                let n = (0, o.getElementFromRefOrElement)(t);
                                if (null === n) return;
                                let r = null != n ? n : document.documentElement,
                                    i = new ResizeObserver(e);
                                return (i.observe(r), () => i.disconnect());
                            }, [t, e]);
                        };
                    },
                    7497: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useReturnValue = void 0), (t.useReturnValue = (e) => e()));
                    },
                    3830: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useScroll = void 0));
                        let r = n(810),
                            o = n(1848),
                            i = n(8612);
                        t.useScroll = (e) => {
                            let { onScroll: t, listenIsScrolling: n, elementRef: a } = e,
                                { state: l, handleDebouncedToggle: u } = (0, i.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                                s = (0, r.useCallback)(() => {
                                    (n && u(), null == t || t());
                                }, [n, u, t]);
                            return (
                                (0, r.useEffect)(() => {
                                    let e = (0, o.getElementFromRefOrElement)(a);
                                    if (null === e) return;
                                    let t = null != e ? e : window,
                                        n = { capture: !0, passive: !0 };
                                    return (t.addEventListener('scroll', s, n), () => t.removeEventListener('scroll', s, n));
                                }, [a, s]),
                                l
                            );
                        };
                    },
                    1676: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useToggle = void 0));
                        let r = n(810);
                        t.useToggle = (e) => {
                            let [t, n] = (0, r.useState)(e);
                            (0, r.useEffect)(() => {
                                n(e);
                            }, [e]);
                            let o = (0, r.useCallback)(() => {
                                    n((e) => !e);
                                }, []),
                                i = (0, r.useCallback)(() => {
                                    n(!0);
                                }, []),
                                a = (0, r.useCallback)(() => {
                                    n(!1);
                                }, []);
                            return { state: t, toggle: o, setState: n, toggleTrue: i, toggleFalse: a };
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
                    3024: function (e, t, n) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Popover = void 0));
                        let o = n(4377),
                            i = n(810),
                            a = n(1964),
                            l = n(5881),
                            u = n(6544),
                            s = n(1435),
                            c = n(4849),
                            d = n(2380),
                            f = n(3180),
                            p = r(n(8533));
                        t.Popover = (e) => {
                            var t;
                            let {
                                    children: n,
                                    offsetOptions: r,
                                    strategy: v,
                                    placement: b,
                                    isMobile: m,
                                    visuallyHiddenDismiss: g,
                                    positionElement: h,
                                    transform: y,
                                    initialOpen: w = !1,
                                    open: E,
                                    onOpenChange: O,
                                    disableFloatingStyles: S = !1,
                                    overlayClassName: P,
                                    style: T,
                                    returnFocus: x,
                                    isNested: R = !1,
                                    onShow: I,
                                    customRoleProps: C,
                                    portalNode: M,
                                    isEnabled: A = !0,
                                    arrowProps: k,
                                    lockScroll: j = !0,
                                    popoverContentRef: _,
                                    transitionDuration: L = 150,
                                } = e,
                                [N, D] = n,
                                [F, U] = (0, i.useState)(w),
                                [z, B] = (0, i.useState)(null),
                                H = (0, i.useRef)([]),
                                V = (0, i.useRef)([]),
                                W = (0, a.useFloatingNodeId)(),
                                Y = (0, a.useFloatingParentNodeId)(),
                                X = (0, a.useListItem)(),
                                G = (0, a.useFloatingTree)(),
                                K = (0, i.useRef)(null),
                                q = O || U,
                                Z = void 0 !== E ? E : F,
                                { onOpenChange: $, returnFocus: Q } = (0, f.useFloatingReturnFocus)({ open: Z, onOpenChange: q }),
                                J = (0, i.useCallback)(() => {
                                    q(!1);
                                }, [q]),
                                {
                                    refs: ee,
                                    floatingStyles: et,
                                    context: en,
                                } = (0, a.useFloating)({
                                    nodeId: W,
                                    open: Z,
                                    onOpenChange: $,
                                    placement: b,
                                    middleware: [
                                        (0, a.offset)(r),
                                        (0, a.flip)({ crossAxis: null == b ? void 0 : b.includes('end') }),
                                        (0, a.shift)({ padding: 5 }),
                                        ...((null == k ? void 0 : k.isEnabled) ? [(0, a.arrow)({ element: K })] : []),
                                    ],
                                    whileElementsMounted: a.autoUpdate,
                                    strategy: v,
                                    transform: y,
                                }),
                                er = (0, i.useId)(),
                                eo = (0, i.useId)(),
                                ei = (0, a.useListNavigation)(en, { listRef: H, activeIndex: z, nested: R, onNavigate: B }),
                                ea = (0, a.useTypeahead)(en, { listRef: V, onMatch: F ? B : void 0, activeIndex: z });
                            ((0, i.useEffect)(() => {
                                if (!G) return;
                                let e = (e) => {
                                    e.nodeId !== W && e.parentId === Y && U(!1);
                                };
                                return (
                                    G.events.on('click', J),
                                    G.events.on('menuopen', e),
                                    () => {
                                        (G.events.off('click', J), G.events.off('menuopen', e));
                                    }
                                );
                            }, [G, W, Y, J]),
                                (0, i.useEffect)(() => {
                                    F && (null == I || I());
                                }, [I, F]),
                                (0, i.useEffect)(() => {
                                    F && G && G.events.emit('menuopen', { parentId: Y, nodeId: W });
                                }, [G, F, W, Y]),
                                (0, i.useLayoutEffect)(() => {
                                    h && ee.setPositionReference(h);
                                }, [ee, h]));
                            let { handlers: el } = (0, d.usePopoverSwipeable)({
                                    ref: ee.floating,
                                    onClose: J,
                                    placement: b,
                                    disableSwipe: !m,
                                    swipeableProps: { preventScrollOnSwipe: !0 },
                                }),
                                eu = _ ? [ee.setFloating, _] : [ee.setFloating, null == el ? void 0 : el.ref],
                                es = (0, a.useMergeRefs)(eu),
                                ec = (0, a.useRole)(en, C),
                                ed = (0, a.useDismiss)(en, { referencePress: !0 }),
                                ef = (0, a.useClick)(en, { enabled: A, toggle: !R, ignoreMouse: R }),
                                ep = (0, a.useHover)(en, { enabled: R && A, handleClose: (0, a.safePolygon)({ blockPointerEvents: !0 }) }),
                                ev = (0, i.useCallback)((e) => {
                                    e.stopPropagation();
                                }, []),
                                { getReferenceProps: eb, getFloatingProps: em, getItemProps: eg } = (0, a.useInteractions)([ec, ed, ef, ep, ei, ea]),
                                [eh, ey] = (() => {
                                    switch (b) {
                                        case 'bottom':
                                        default:
                                            return ['translate(0, 10%)', 'translate(0, 0)'];
                                        case 'right':
                                            if ('undefined' != typeof document && 'rtl' === document.dir) return ['translateX(-5%)', 'translateX(0)'];
                                            return ['translateX(5%)', 'translateX(0)'];
                                    }
                                })(),
                                ew = !m && !S && !1 !== y && (null == T ? void 0 : T.transform) === void 0,
                                { isMounted: eE, styles: eO } = (0, a.useTransitionStyles)(en, {
                                    initial: { opacity: 0, ...(!ew && { transform: eh }) },
                                    open: { opacity: 1, ...(!ew && { transform: ey }) },
                                    duration: L,
                                }),
                                eS = (0, a.useMergeRefs)([ee.setReference, X.ref]),
                                eP = N && (0, i.cloneElement)(N, { ref: eS, ...eb({ onClick: null == (t = N.props) ? void 0 : t.onClick }), key: er }),
                                eT = (0, i.useMemo)(
                                    () => (m ? { ...(S ? {} : et), ...T, bottom: 0, left: 0, right: 0, top: 'auto', transform: 'none' } : { ...(S ? {} : et), ...T }),
                                    [m, S, et, T],
                                ),
                                ex = (0, i.useMemo)(() => {
                                    if (null == k ? void 0 : k.isEnabled) return (0, o.jsx)(c.PopoverArrow, { ref: K, context: en, ...k });
                                }, [k, en]),
                                eR = em(),
                                eI = !R && ('dialog' === eR.role || 'alertdialog' === eR.role),
                                eC = {
                                    ref: es,
                                    style: { ...eO, ...eT },
                                    ...eR,
                                    ...(eI && { 'aria-modal': !0 }),
                                    onMouseDown: _ || null == el ? void 0 : el.onMouseDown,
                                    arrow: ex,
                                    children: (0, i.cloneElement)(D.props.children, { onClose: J, key: eo }),
                                },
                                eM = (0, i.cloneElement)(D, eC),
                                eA = (0, i.useMemo)(() => ({ activeIndex: z, setActiveIndex: B, getItemProps: eg, isOpen: F }), [z, eg, F]),
                                ek = R ? -1 : 0;
                            return (0, o.jsxs)(s.PopoverContext.Provider, {
                                value: eA,
                                children: [
                                    eP,
                                    (0, o.jsx)(a.FloatingList, {
                                        elementsRef: H,
                                        children:
                                            eE &&
                                            (0, o.jsxs)(a.FloatingPortal, {
                                                root: M,
                                                children: [
                                                    (0, o.jsx)(a.FloatingOverlay, { className: (0, l.clsx)(p.default.overlay, P), onClick: ev }),
                                                    (0, o.jsx)(a.FloatingFocusManager, {
                                                        context: en,
                                                        modal: !R,
                                                        returnFocus: null != x ? x : R || Q,
                                                        initialFocus: ek,
                                                        visuallyHiddenDismiss: g,
                                                        children: (0, o.jsx)(u.RemoveScroll, { enabled: j && F, children: eM }),
                                                    }),
                                                ],
                                            }),
                                    }),
                                ],
                            });
                        };
                    },
                    4849: function (e, t, n) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.PopoverArrow = t.PopoverArrowComponent = void 0));
                        let o = n(4377),
                            i = n(5881),
                            a = n(810),
                            l = n(9580),
                            u = n(1676),
                            s = r(n(2223)),
                            c = { top: '', left: 'rotate(-90deg)', bottom: 'rotate(180deg)', right: 'rotate(90deg)' };
                        ((t.PopoverArrowComponent = (e) => {
                            let {
                                    forwardRef: t,
                                    className: n,
                                    context: r,
                                    width: a = 14,
                                    height: d = 7,
                                    tipRadius: f = 0,
                                    customClipPath: p,
                                    staticOffset: v,
                                    style: { transform: b, ...m } = {},
                                    isEnabled: g,
                                    ...h
                                } = e,
                                {
                                    placement: y,
                                    elements: { floating: w },
                                    middlewareData: { arrow: E },
                                } = r,
                                { state: O, toggleTrue: S } = (0, u.useToggle)(!1);
                            if (
                                ((0, l.useIsomorphicEffect)(() => {
                                    w && 'rtl' === getComputedStyle(w).direction && S();
                                }, [w, S]),
                                !w || !g)
                            )
                                return null;
                            let P = (a / 2) * (-(f / 8) + 1),
                                T = ((d / 2) * f) / 4,
                                [x, R] = y.split('-'),
                                I = v && 'end' === R ? 'right' : 'left';
                            v && O && (I = 'end' === R ? 'left' : 'right');
                            let C = (null == E ? void 0 : E.x) ? v || E.x : '',
                                M = (null == E ? void 0 : E.y) ? v || E.y : '',
                                A = c[x],
                                k =
                                    p ||
                                    '"M0,0' +
                                        ' H'.concat(a) +
                                        ' L'.concat(a - P, ',').concat(d - T) +
                                        ' Q'
                                            .concat(a / 2, ',')
                                            .concat(d, ' ')
                                            .concat(P, ',')
                                            .concat(d - T) +
                                        ' Z"',
                                j = {
                                    [I]: C,
                                    [v && 'end' === R ? 'bottom' : 'top']: M,
                                    [x]: '100%',
                                    transform: ''.concat(A).concat(null != b ? b : ''),
                                    '--arrow-width': ''.concat(a, 'px'),
                                    '--arrow-clip-path': k,
                                    ...m,
                                };
                            return (0, o.jsx)('div', { ...h, className: (0, i.clsx)(s.default.root, n), ref: t, style: j });
                        }),
                            (t.PopoverArrow = (0, a.forwardRef)((e, n) => (0, o.jsx)(t.PopoverArrowComponent, { forwardRef: n, ...e }))));
                    },
                    2388: function (e, t, n) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.PopoverContent = t.PopoverContentComponent = void 0));
                        let o = n(4377),
                            i = n(810),
                            a = n(5881),
                            l = r(n(9331));
                        ((t.PopoverContentComponent = (e) => {
                            let { className: t, children: n, forwardRef: r, arrow: u, ...s } = e;
                            return (0, o.jsxs)('div', { className: (0, a.clsx)(l.default.root, t), ref: r, ...s, children: [n, (0, i.isValidElement)(u) && u] });
                        }),
                            (t.PopoverContent = (0, i.forwardRef)((e, n) => (0, o.jsx)(t.PopoverContentComponent, { forwardRef: n, ...e }))));
                    },
                    1435: (e, t, n) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.PopoverContext = void 0),
                            (t.PopoverContext = (0, n(810).createContext)({ getItemProps: () => ({}), activeIndex: null, setActiveIndex: () => {}, isOpen: !1 })));
                    },
                    1964: (e) => {
                        e.exports = o;
                    },
                    352: (e) => {
                        e.exports = i;
                    },
                    810: (e) => {
                        e.exports = r || (r = n.t(a, 2));
                    },
                },
                u = {};
            function s(e) {
                var t = u[e];
                if (void 0 !== t) return t.exports;
                var n = (u[e] = { exports: {} });
                return (l[e].call(n.exports, n, n.exports, s), n.exports);
            }
            ((s.d = (e, t) => {
                for (var n in t) s.o(t, n) && !s.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }),
                (s.nc = void 0));
            var c = {};
            (() => {
                (Object.defineProperty(c, '__esModule', { value: !0 }), (c.PopoverContent = c.Popover = void 0));
                var e = s(3024);
                Object.defineProperty(c, 'Popover', {
                    enumerable: !0,
                    get: function () {
                        return e.Popover;
                    },
                });
                var t = s(2388);
                Object.defineProperty(c, 'PopoverContent', {
                    enumerable: !0,
                    get: function () {
                        return t.PopoverContent;
                    },
                });
            })();
            var d = c.Popover,
                f = c.PopoverContent;
            c.__esModule;
        },
        47964: (e, t, n) => {
            'use strict';
            n.d(t, { B: () => w });
            var r = n(88800),
                o = n(53548),
                i = n(2058),
                a = n(188),
                l = n(18593),
                u = n(80989),
                s = n(29993),
                c = n(7123),
                d = n(66943),
                f = n(84384),
                p = n(29595),
                v = n(74965),
                b = n(72288),
                m = n(90420);
            let g = 'radio';
            var h = n(8962),
                y = n(9630);
            let w = (e) => {
                var t, n;
                let { seeds: w = [m.M1], pageIdForFrom: E, blockIdForFrom: O, onPlayInterrupted: S, parentContextId: P } = e,
                    { from: T } = (0, f.f)(
                        ((e, t) =>
                            !t || (null == e ? void 0 : e.includes(g)) || t.includes(g)
                                ? { pageId: e, blockId: t }
                                : { pageId: e, blockId: ''.concat(t, '-').concat(g) })(E, O),
                    ),
                    { formatMessage: x } = (0, i.A)(),
                    R = (0, y.e)(),
                    { notify: I } = (0, v.l)(),
                    { sonataState: C, vibe: M, fullscreenPlayer: A, user: k, freeAccess: j } = (0, b.g)(),
                    [_, L] = (0, o.useState)(null),
                    N = (0, s.c)(() => (A.modal.isOpened ? p.u.FULLSCREEN_ERROR : p.u.ERROR));
                ((0, o.useEffect)(() => {
                    let e =
                        null == R
                            ? void 0
                            : R.state.currentContext.onChange(() => {
                                  (0, a.i)(R.state.currentContext.value) ? L(R.state.currentContext.value) : L(null);
                              });
                    return () => {
                        null == e || e();
                    };
                }, [R]),
                    (0, o.useEffect)(() => {
                        let e =
                            null == _
                                ? void 0
                                : _.observableActiveSession.onChange(() => {
                                      var e, t;
                                      (null == _ || null == (e = _.observableActiveSession.value) ? void 0 : e.wave) &&
                                          M.setVibe(null == _ || null == (t = _.observableActiveSession.value) ? void 0 : t.wave);
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [_, M]));
                let D = (0, s.c)(async (e) => {
                        try {
                            await (null == R
                                ? void 0
                                : R.playContext({
                                      contextData: {
                                          type: l.K.Vibe,
                                          meta: { id: (0, u.f)(e) },
                                          seeds: e,
                                          from: T,
                                          includeTracksInResponse: !0,
                                          interactive: !0,
                                          parentContextId: P,
                                      },
                                      loadContextMeta: !0,
                                  }));
                        } catch (e) {
                            I((0, r.jsx)(d.h, { error: x({ id: 'vibe-errors.start-vibe' }) }), { containerId: N() });
                        }
                    }),
                    F = (0, s.c)(async (e) => {
                        if (R && _)
                            try {
                                await _.setSettings({ seeds: e, queueState: R.state.queueState, interactive: !0, from: T });
                            } catch (e) {
                                I((0, r.jsx)(d.h, { error: x({ id: 'vibe-errors.apply-vibe-setting' }) }), { containerId: N() });
                            }
                    }),
                    U = (0, s.c)(async (e) => {
                        if (R)
                            try {
                                await R.restartContext({ playAfterRestart: e });
                            } catch (e) {
                                I((0, r.jsx)(d.h, { error: x({ id: 'error-messages.something-went-wrong' }) }), { containerId: N() });
                            }
                    }),
                    z = !!_,
                    B = z && (0, h._)(null != (n = null == (t = M.meta) ? void 0 : t.seeds) ? n : [], w),
                    H = B && C.status === c.MT.PLAYING,
                    V = B && C.status === c.MT.PAUSED;
                (0, o.useEffect)(() => {
                    H && M.setIsApplying(!1);
                }, [H, M]);
                let W = (0, s.c)(async () => {
                        if (!H && (j.isFreeWebUser || !k.isAuthorized)) {
                            null == S || S();
                            return;
                        }
                        (M.setIsApplying(!0), await D(w), M.setIsApplying(!1));
                    }),
                    Y = (0, s.c)(async (e, t) => {
                        var n;
                        M.setIsApplying(!0);
                        let r = [];
                        if (M.meta && Array.isArray(null == (n = M.meta) ? void 0 : n.seeds))
                            if (M.meta.seeds.includes(e)) r = M.meta.seeds.filter((t) => t !== e);
                            else if (t) r = [e, ...M.meta.seeds.filter((e) => e.includes('setting'))];
                            else {
                                let t = e.split(':')[0];
                                r = t
                                    ? ['settingDiversity', 'settingMoodEnergy', 'settingLanguage'].includes(t)
                                        ? [...M.meta.seeds.filter((e) => !e.startsWith(''.concat(t, ':'))), e]
                                        : [...M.meta.seeds, e]
                                    : [...M.meta.seeds];
                            }
                        else r = [e];
                        (_ ? (await F(r), await U(!0)) : await D(r), M.setIsApplying(!1));
                    });
                return {
                    isVibeContext: z,
                    isPlaying: H,
                    isPaused: V,
                    isCurrent: B,
                    togglePlay: W,
                    resetContext: (0, s.c)(async function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [m.M1];
                        (M.setIsApplying(!0), _ ? (await F(e), await U(!0)) : await D(e), M.setIsApplying(!1));
                    }),
                    applySetting: Y,
                    // for PulseSync: BEGIN play native wave seeds through the authorized playback flow
                    playSeeds: (0, s.c)(async (e) => {
                        let t = Array.isArray(e) && e.length > 0 ? e : w;
                        if (j.isFreeWebUser || !k.isAuthorized) {
                            null == S || S();
                            return;
                        }
                        (M.setIsApplying(!0), _ ? (await F(t), await U(!0)) : await D(t), M.setIsApplying(!1));
                    }),
                    // for PulseSync: END play native wave seeds through the authorized playback flow
                };
            };
        },
        52726: (e, t, n) => {
            'use strict';
            n.d(t, { S: () => p });
            var r = n(88800),
                o = n(53548),
                i = n(2058),
                a = n(17392),
                l = n(61691),
                u = n(96817),
                s = n(29504),
                c = n(72288),
                d = n(32721),
                f = n(12876);
            let p = (e) => {
                let { textVariant: t, vibeTextVariant: n, albumTextVariant: p, buttonText: v, customButtons: b, onOpenMenuChange: m, ...g } = e,
                    h = (0, o.useId)(),
                    { formatMessage: y } = (0, i.A)(),
                    {
                        paywall: { modal: w },
                    } = (0, c.g)(),
                    E = y({ id: 'payment.try-button' }),
                    O = (0, o.useMemo)(() => {
                        switch (n) {
                            case d.I.ALBUM:
                                return y({ id: 'onboarding.try-plus-to-listen-vibe-by-album' }, { br: '\n', nbsp: ' ' });
                            case d.I.ARTIST:
                                return y({ id: 'onboarding.try-plus-to-listen-vibe-by-artist' }, { br: '\n', nbsp: ' ' });
                            case d.I.PLAYLIST:
                                return y({ id: 'onboarding.try-plus-to-listen-vibe-by-playlist' }, { br: '\n', nbsp: ' ' });
                            case d.I.TRACK:
                                return y({ id: 'onboarding.try-plus-to-listen-vibe-by-track' }, { br: '\n', nbsp: ' ' });
                            case d.I.GENRE:
                            case d.I.MICRO_GENRE:
                                return y({ id: 'onboarding.try-plus-to-listen-vibe-by-genre' }, { br: '\n', nbsp: ' ' });
                            case d.I.MOOD:
                                return y({ id: 'onboarding.try-plus-to-listen-vibe-by-mood' }, { br: '\n', nbsp: ' ' });
                            case d.I.ACTIVITY:
                                return y({ id: 'onboarding.try-plus-to-listen-vibe-by-activity' }, { br: '\n', nbsp: ' ' });
                            default:
                                return y({ id: 'onboarding.try-plus-to-listen-vibe' }, { br: '\n', nbsp: ' ' });
                        }
                    }, [n, y]),
                    S = (0, o.useMemo)(() => {
                        switch (p) {
                            case l._.SINGLE:
                                return y({ id: 'entity-names.single-available-with-plus' });
                            case l._.PODCAST:
                                return y({ id: 'non-music.podcast-available-with-plus' });
                            case l._.AUDIOBOOK:
                                return y({ id: 'non-music.book-available-with-plus' });
                            case l._.FAIRY_TALE:
                                return y({ id: 'non-music.fairy-tale-available-with-plus' });
                            default:
                                return y({ id: 'entity-names.album-available-with-plus' });
                        }
                    }, [p, y]),
                    P = (0, o.useMemo)(() => {
                        switch (t) {
                            case 'fullTracks':
                                return y({ id: 'onboarding.try-plus-to-listen-full' }, { br: '\n', nbsp: ' ' });
                            case 'highQuality':
                                return y({ id: 'onboarding.try-plus-to-enable-high-quality' }, { br: '\n', nbsp: ' ' });
                            case 'sync-lyrics':
                                return y({ id: 'onboarding.try-plus-to-view-sync-lyrics' }, { br: '\n' });
                            case 'collectionFreemium':
                                return y({ id: 'onboarding.try-plus-to-open-collection' }, { nbsp: ' ' });
                            case 'vibe':
                                return O;
                            case 'album':
                                return S;
                            default:
                                return '';
                        }
                    }, [t, y, O, S]),
                    T = (0, o.useCallback)(() => {
                        (w.open(), null == m || m(!1));
                    }, [w, m]),
                    x = (0, o.useMemo)(
                        () => [
                            (0, r.jsx)(
                                u.$,
                                { color: 'plus', size: 'xxs', radius: 'xxxl', onClick: T, children: (0, r.jsx)(s.HL, { variant: 'div', size: 'm', children: v || E }) },
                                h,
                            ),
                        ],
                        [h, T, v, E],
                    );
                return (0, r.jsx)(f.z, {
                    contentElement: (0, r.jsx)(s.HL, { variant: 'div', size: 'l', weight: 'bold', children: P }),
                    renderChildrenText: P,
                    buttons: null != b ? b : x,
                    contentDataTestId: a.S7.BUY_PLUS_POPOVER,
                    ...g,
                });
            };
        },
        61691: (e, t, n) => {
            'use strict';
            var r;
            (n.d(t, { _: () => r }),
                (function (e) {
                    ((e.UNKNOWN = 'unknown'),
                        (e.ALBUM = 'album'),
                        (e.SINGLE = 'single'),
                        (e.COMPILATION = 'compilation'),
                        (e.PODCAST = 'podcast'),
                        (e.FAIRY_TALE = 'fairy-tale'),
                        (e.AUDIOBOOK = 'audiobook'),
                        (e.VIDEO_SINGLE = 'video-single'),
                        (e.VIDEO_ALBUM = 'video-album'),
                        (e.RADIO = 'radio'),
                        (e.ASMR = 'asmr'),
                        (e.NOISE = 'noise'));
                })(r || (r = {})));
        },
        64546: (e, t, n) => {
            'use strict';
            n.d(t, { WithOffline: () => u });
            var r = n(84961),
                o = n(4086),
                i = n(41928),
                a = n(70787),
                l = n(72288);
            let u = (0, r.PA)((e) => {
                let { fallback: t, children: n } = e,
                    r = (0, i.N)(),
                    { slam: u } = (0, l.g)(),
                    s = r.get(o.U2);
                return (0, a.g)(s) || u.isOfflineModeEnabled ? n : t;
            });
        },
        70787: (e, t, n) => {
            'use strict';
            n.d(t, { g: () => o });
            var r = n(15253);
            let o = (e) => {
                let t = e.get(r.c.OfflineMode);
                return 'boolean' == typeof t && t;
            };
        },
        72131: (e, t, n) => {
            'use strict';
            n.d(t, { _: () => a });
            var r = n(10285),
                o = n(42668),
                i = n(72288);
            let a = (e) => {
                let { location: t } = (0, i.g)();
                return (0, r.r)(e, t.tld, o.B);
            };
        },
        80989: (e, t, n) => {
            'use strict';
            n.d(t, { f: () => r });
            let r = (e) => String([...e].sort());
        },
        84172: (e) => {
            e.exports = {
                root: 'PopoverWithActions_root__g2_xV',
                arrow: 'PopoverWithActions_arrow__LOVdU',
                popoverContent: 'PopoverWithActions_popoverContent__uPXzG',
                content: 'PopoverWithActions_content__FwBlK',
                closeButton: 'PopoverWithActions_closeButton__c5mHz',
                buttons: 'PopoverWithActions_buttons__kiIc3',
                button: 'PopoverWithActions_button__XDFYY',
            };
        },
        90420: (e, t, n) => {
            'use strict';
            n.d(t, { M1: () => r, N7: () => l, UM: () => o, q7: () => a, yx: () => i });
            let r = 'user:onyourwave',
                o = ['activity'],
                i = 'diversity:reshuffle',
                a = 'multivibe',
                l = 'user';
        },
    },
]);
