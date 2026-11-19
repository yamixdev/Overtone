(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7e3],
    {
        3099: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'Chart_root__ODed_',
                position: 'Chart_position__7UNY9',
                position_disliked: 'Chart_position_disliked__HzjC7',
                position_disabled: 'Chart_position_disabled__poZzD',
                progress: 'Chart_progress__sGj4s',
                progress_up: 'Chart_progress_up__y083c',
                progress_same: 'Chart_progress_same__Cnbdb',
                progress_down: 'Chart_progress_down__lv_ae',
                progress_crown: 'Chart_progress_crown__o__Zm',
                progress_new: 'Chart_progress_new__7DobI',
                progress_disliked: 'Chart_progress_disliked__maVAk',
                progress_disabled: 'Chart_progress_disabled__JoFqG',
                positionShimmer: 'Chart_positionShimmer__6Abak',
            };
        },
        9184: (e) => {
            e.exports = {
                root: 'SomethingWentWrong_root__d77VJ',
                content: 'SomethingWentWrong_content__8_YkJ',
                content_shrink: 'SomethingWentWrong_content_shrink__GOR_7',
                navigation: 'SomethingWentWrong_navigation__a8eMG',
                navigation_desktop: 'SomethingWentWrong_navigation_desktop__WGGBX',
                icon: 'SomethingWentWrong_icon__f15_y',
                title: 'SomethingWentWrong_title__Kn89B',
                important: 'SomethingWentWrong_important__namIb',
                text: 'SomethingWentWrong_text__KEfGc',
                button: 'SomethingWentWrong_button__dmh7t',
            };
        },
        11006: (e) => {
            e.exports = {
                root: 'Footer_root__ugyur',
                root_withOffsetForDeeplink: 'Footer_root_withOffsetForDeeplink__qcs6U',
                important: 'Footer_important__mCXZp',
                links: 'Footer_links__3kOY7',
                list: 'Footer_list__0sCXQ',
                copyrights: 'Footer_copyrights__IsnbJ',
                link: 'Footer_link__av50q',
                copyrightLink: 'Footer_copyrightLink__6NOkg',
                yandexMusicLink: 'Footer_yandexMusicLink__k7ILf',
                explicitText: 'Footer_explicitText__Px3wr',
                text: 'Footer_text__lMPwl',
                empty: 'Footer_empty__RR_zf',
            };
        },
        13607: (e, t, r) => {
            'use strict';
            var n;
            (r.d(t, { _: () => n }),
                (function (e) {
                    ((e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new'));
                })(n || (n = {})));
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
        16818: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => a });
            var n = r(53647),
                s = r(4086),
                o = r(41928),
                l = r(65523),
                i = r(57448);
            let a = () => {
                let e = (0, o.N)(),
                    t = e.get(s.oo),
                    r = e.get(s.QG),
                    a = e.get(s.uM),
                    c = e.get(s.ff),
                    d = e.get(s.V4),
                    _ = e.get(s.P0),
                    u = (0, i.f)(),
                    g = (0, l.U)(),
                    p = (0, o.N)().get(s.TK),
                    h = e.get(s.ni),
                    m = e.get(s.RD),
                    v = new n.si(),
                    E = new n.fW();
                return {
                    ...u,
                    acqOffers: a,
                    disclaimerDictionary: c,
                    logger: g,
                    modelActionsLogger: p,
                    localStorage: v,
                    sessionStorage: E,
                    containerStorage: t,
                    authorization: r,
                    config: d,
                    clientSafeConfig: _,
                    landingSdk: h,
                    tagSandbox: m,
                };
            };
        },
        32596: (e, t, r) => {
            'use strict';
            r.d(t, { SomethingWentWrong: () => b });
            var n = r(88800),
                s = r(65724),
                o = r(84961),
                l = r(53548),
                i = r(2058),
                a = r(88969);
            r(30282);
            var c = r(96817),
                d = r(52300),
                _ = r(29504),
                u = r(97234),
                g = r(59714),
                p = r(43054),
                h = r(18117),
                m = r(93940),
                v = r(24709);
            let E = (0, v.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, p.s)()) ? void 0 : e.evgenInstance,
                        { hash: r } = (0, h.g)(),
                        { screen: n } = (0, m.j)();
                    return {
                        sendRefreshEvent: (0, l.useCallback)(() => {
                            if (!t || !r || !(null == n ? void 0 : n.pageId)) return;
                            let e = {
                                actionType: u.ActionType.Refresh,
                                userInteractionType: u.UserInteractionType.Tap,
                                entityType: u.EntityTypes.Error,
                                entityId: u.EntityTypes.SomethingWrong,
                                hash: r,
                                pageId: n.pageId,
                                pageStyle: u.PageStyles.Fullscreen,
                                pagePlacement: u.PagePlacements.Fullscreen,
                                mainObjectType: u.DomainObjectType.NonApplicable,
                                mainObjectId: u.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, g.bv)(t, e);
                        }, [t, r, null == n ? void 0 : n.pageId]),
                    };
                }),
                x = (0, v.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let r = null == (t = (0, p.s)()) ? void 0 : t.evgenInstance,
                        { hash: n } = (0, h.g)(),
                        { screen: s } = (0, m.j)();
                    (0, l.useEffect)(() => {
                        if (!r || !n || !(null == s ? void 0 : s.pageId)) return;
                        let t = {
                            entityType: u.EntityTypes.Error,
                            entityId: u.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: n,
                            pageId: s.pageId,
                            pageStyle: u.PageStyles.Fullscreen,
                            pagePlacement: u.PagePlacements.Fullscreen,
                            mainObjectType: u.DomainObjectType.NonApplicable,
                            mainObjectId: u.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, g.z5)(r, t);
                    }, [r, e, n, null == s ? void 0 : s.pageId]);
                });
            var S = r(44230),
                y = r(4370),
                f = r(72288),
                N = r(97956),
                w = r(56248),
                T = r(90688),
                A = r(78940);
            let O = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var C = r(96856),
                P = r.n(C);
            let k = (0, o.PA)((e) => {
                let { className: t, withBackwardControl: r = !0, onBack: o } = e,
                    { slam: l } = (0, f.g)(),
                    { contentRef: i } = (0, S.g)(),
                    d = (0, A.Z)(y.Z.mymusicDownloadsTracks.href);
                return (0, n.jsxs)('div', {
                    className: (0, s.$)(P().root, t),
                    children: [
                        r &&
                            (0, n.jsx)(w.L, {
                                withBackwardFallback: '/',
                                className: (0, s.$)(P().navigation, { [P().navigation_desktop]: !i }),
                                withForwardControl: !1,
                                onBackwardClick: o,
                            }),
                        (0, n.jsxs)('div', {
                            className: (0, s.$)(P().content, { [P().content_shrink]: !r }),
                            children: [
                                (0, n.jsx)(T._V, { className: P().image, src: O.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, n.jsxs)('div', {
                                    className: P().message,
                                    children: [
                                        (0, n.jsx)(_.DZ, {
                                            className: P().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, n.jsx)(a.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, n.jsx)(_.HL, {
                                            className: P().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, n.jsx)(a.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                l.hasDownloadedTracks &&
                                    (0, n.jsx)(c.$, {
                                        className: P().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, n.jsx)(_.HL, {
                                            className: P().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, n.jsx)(a.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var R = r(9184),
                I = r.n(R);
            let b = (0, o.PA)((e) => {
                let { className: t, withBackwardControl: r = !0, onBack: o } = e,
                    { formatMessage: u } = (0, i.A)(),
                    g = (0, l.useContext)(f.P),
                    p = null == g ? void 0 : g.experiments.checkExperiment(N.z.WebNextUnstableMusicScreen, 'on'),
                    h = u(p ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                x(h);
                let { sendRefreshEvent: m } = E(),
                    v = (0, l.useCallback)(() => {
                        (m(), (window.location.href = y.Z.main.href));
                    }, [m]),
                    { contentRef: T } = (0, S.g)();
                return p
                    ? (0, n.jsx)(k, { className: t, withBackwardControl: r, onBack: o })
                    : (0, n.jsxs)('div', {
                          className: (0, s.$)(I().root, t),
                          children: [
                              r &&
                                  (0, n.jsx)(w.L, {
                                      withBackwardFallback: '/',
                                      className: (0, s.$)(I().navigation, { [I().navigation_desktop]: !T }),
                                      withForwardControl: !1,
                                      onBackwardClick: o,
                                  }),
                              (0, n.jsxs)('div', {
                                  className: (0, s.$)(I().content, { [I().content_shrink]: !r }),
                                  children: [
                                      (0, n.jsx)(d.I, { className: I().icon, variant: 'attention', size: 'xxl' }),
                                      (0, n.jsx)(_.DZ, { className: (0, s.$)(I().title, I().important), variant: 'h3', size: 'xs', children: h }),
                                      (0, n.jsxs)(_.HL, {
                                          className: (0, s.$)(I().text, I().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, n.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, n.jsx)(c.$, {
                                          onClick: v,
                                          className: I().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, n.jsxs)(_.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, n.jsx)(a.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        34961: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => m, s: () => v });
            var n = r(88800),
                s = r(84961),
                o = r(58390),
                l = r(53548),
                i = r(35412),
                a = r(39499),
                c = r(89108),
                d = r(70003),
                _ = r(72288),
                u = r(16818);
            (0, s.eO)(!1);
            let g = (0, l.createContext)(null),
                p = (e) => {
                    let { children: t, store: r, storeKey: s } = e,
                        o = (0, l.useMemo)(() => ({ store: r, storeKey: s }), [r, s]);
                    return (0, n.jsx)(g.Provider, { value: o, children: t });
                },
                h = (e) => {
                    let { nonce: t, patchKey: r, patchesRef: s } = e;
                    return (
                        (0, o.useServerInsertedHTML)(() => {
                            let e = s.current;
                            return ((s.current = []), 0 === e.length)
                                ? null
                                : (0, n.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, i.Gr)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(r, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                m = (e) => {
                    let { createStore: t, patchKey: r } = e,
                        s = () => {
                            var e, t;
                            let n = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[r]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[r], n);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: o, nonce: l } = e,
                                i = (0, u.Y)(),
                                a = (0, _.g)(),
                                { store: g, patchesRef: m } = (0, d.m)({
                                    createStore: () => t({ ...i, rootStore: a }),
                                    getPendingPatchBatches: s,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(h, { nonce: l, patchKey: r, patchesRef: m }), (0, n.jsx)(p, { store: g, storeKey: r, children: o })],
                            });
                        },
                    };
                };
            function v(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = (0, l.useContext)(g);
                if (!r || r.storeKey !== e) {
                    var n;
                    if (!t) return null;
                    throw new a.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (n = null == r ? void 0 : r.storeKey) ? n : 'null', expectedStoreKey: e },
                    });
                }
                return r.store;
            }
        },
        43443: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => p });
            var n = r(88800),
                s = r(65724),
                o = r(84961),
                l = r(53548),
                i = r(2058),
                a = r(17392),
                c = r(13607),
                d = r(52300),
                _ = r(29504),
                u = r(3099),
                g = r.n(u);
            let p = (0, o.PA)((e) => {
                let {
                        progress: t,
                        withIcon: r,
                        withCrownIcon: o,
                        position: u,
                        weight: p = 'normal',
                        isDisliked: h,
                        isDisabled: m,
                        className: v,
                        positionClassName: E,
                    } = e,
                    { formatMessage: x } = (0, i.A)(),
                    S = t || r,
                    y = (0, l.useMemo)(() => {
                        if (o) return 'crown';
                        switch (t) {
                            case c._.UP:
                                return 'chartUp';
                            case c._.DOWN:
                                return 'chartDown';
                            case c._.NEW:
                                return 'chartNew';
                            default:
                                return 'chartSame';
                        }
                    }, [t, o]),
                    f = (0, l.useMemo)(() => {
                        switch (t) {
                            case c._.UP:
                                return x({ id: 'entity-names.chart-up' });
                            case c._.DOWN:
                                return x({ id: 'entity-names.chart-down' });
                            case c._.NEW:
                                return x({ id: 'entity-names.chart-new' });
                            default:
                                return x({ id: 'entity-names.chart-same' });
                        }
                    }, [x, t]),
                    N = o ? 'crown' : t;
                return (0, n.jsxs)('div', {
                    className: (0, s.$)(g().root, v),
                    'data-test-id': a.OA.chart.CHART_PROGRESS,
                    children: [
                        (0, n.jsx)(_.HL, {
                            variant: 'div',
                            weight: p,
                            type: 'entity',
                            size: 'm',
                            className: (0, s.$)(g().position, E, { [g().position_disliked]: h, [g().position_disabled]: m }),
                            'data-test-id': a.OA.chart.CHART_PROGRESS_POSITION,
                            children: u,
                        }),
                        S &&
                            (0, n.jsx)(d.I, {
                                variant: y,
                                size: 'xxs',
                                'aria-label': f,
                                className: (0, s.$)(g().progress, g()['progress_'.concat(N)], { [g().progress_disliked]: h, [g().progress_disabled]: m }),
                                'data-test-id': a.OA.chart.CHART_PROGRESS_ICON,
                            }),
                    ],
                });
            });
        },
        53647: (e, t, r) => {
            'use strict';
            r.d(t, { V8: () => o, si: () => i, fW: () => u, MJ: () => _, jU: () => p, Bx: () => g });
            var n = r(77451);
            function s(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return (console.error(e), null);
                }
            }
            class o {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    try {
                        let l = (0, n.Jt)(e);
                        if (t) {
                            var r, o;
                            return null != (o = null == (r = s(l)) ? void 0 : r.value) ? o : null;
                        }
                        return null != l ? l : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    let s = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let o = s ? JSON.stringify({ value: t }) : t;
                        (0, n.hZ)(e, o, r);
                    } catch (e) {
                        console.error(e);
                    }
                }
                has(e) {
                    return null !== this.get(e, !1);
                }
                remove(e) {
                    try {
                        (0, n.TF)(e);
                    } catch (e) {}
                }
            }
            function l(e) {
                try {
                    var t;
                    return null != (t = window[e]) ? t : null;
                } catch (e) {
                    return null;
                }
            }
            class i {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        r = l('localStorage');
                    if (!r) return null;
                    try {
                        var n;
                        let o = r.getItem(e) || void 0;
                        if (!t) return o;
                        let l = s(o);
                        if (!l) return null;
                        let i = null != (n = null == l ? void 0 : l.value) ? n : null;
                        if ((null == l ? void 0 : l.expires) && Date.now() > new Date(l.expires).getTime()) return (this.remove(e), null);
                        return i;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    if ('number' == typeof (null == r ? void 0 : r.expires)) {
                        let e = new Date();
                        (e.setMilliseconds(e.getMilliseconds() + 864e5 * r.expires), (r.expires = e));
                    }
                    let n = l('localStorage');
                    if (n)
                        try {
                            n.setItem(e, JSON.stringify({ value: t, ...r }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = l('localStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            var a = r(9519),
                c = r(39499);
            class d extends c.t {
                constructor(e, t, { code: r = 'E_STORAGE', ...n } = {}) {
                    (super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: r, ...n }),
                        (0, a._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, d.prototype));
                }
            }
            class _ {
                get(e) {
                    throw new d(this.platform, this.type);
                }
                set(e, t, r) {
                    throw new d(this.platform, this.type);
                }
                has(e) {
                    throw new d(this.platform, this.type);
                }
                remove(e) {
                    throw new d(this.platform, this.type);
                }
                constructor(e, t) {
                    ((0, a._)(this, 'platform', ''), (0, a._)(this, 'type', ''), (this.platform = e), (this.type = t));
                }
            }
            class u {
                get(e) {
                    let t = l('sessionStorage');
                    if (!t) return null;
                    try {
                        var r, n, o;
                        let l = null != (n = t.getItem(e)) ? n : void 0;
                        return null != (o = null == (r = s(l)) ? void 0 : r.value) ? o : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let r = l('sessionStorage');
                    if (r)
                        try {
                            r.setItem(e, JSON.stringify({ value: t }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = l('sessionStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            function g(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let r = 'object' != typeof t ? t : t.name,
                            n = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            s = e.get(r);
                        null != s && e.set(r, s, n);
                    });
            }
            function p(e) {
                let { name: t, group: r, value: n } = e;
                return n && 0 !== Object.keys(n).length
                    ? n.title
                        ? { [t]: { group: r, value: { ...n, title: r } } }
                        : { [t]: { group: r, value: { title: r, value: n } } }
                    : { [t]: { group: r, value: { title: r } } };
            }
        },
        53892: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => n });
            let n = {
                MIXES: 'pages/mixes',
                TAG: 'pages/tag',
                GENRES: 'pages/genres',
                PROMOLANDING: 'pages/promolanding',
                MUSIC_HISTORY: 'pages/music-history',
                POST: 'pages/post',
                PLAYLIST_PERSONAL: 'pages/playlist-personal',
                MY_MUSIC: 'pages/my-music',
                FAVORITE_TRACKS: 'pages/favorite-tracks',
                COLLECTION_VIBES: 'pages/collection-vibes',
                CONCERTS_DETAILS: 'pages/concerts-details',
                LANDING_PROMO_PREVIEW: 'pages/landing-promo-preview',
                LABEL: 'pages/label',
                GENRE: 'pages/genre',
                CHART: 'pages/chart',
            };
        },
        57448: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => o });
            var n = r(4086),
                s = r(41928);
            let o = () => {
                let e = (0, s.N)(),
                    t = e.get(n.$I),
                    r = e.get(n.EN),
                    o = e.get(n.N1),
                    l = e.get(n._1),
                    i = e.get(n.V3),
                    a = e.get(n.Lb),
                    c = e.get(n.wK),
                    d = e.get(n.tz),
                    _ = e.get(n.$8),
                    u = e.get(n.Oo),
                    g = e.get(n.X4),
                    p = e.get(n.O9),
                    h = e.get(n.E),
                    m = e.get(n.wH),
                    v = e.get(n.ok),
                    E = e.get(n.X8),
                    x = e.get(n.yq),
                    S = e.get(n.NN),
                    y = e.get(n.qN),
                    f = e.get(n.ro),
                    N = e.get(n.nM),
                    w = e.get(n.Ut),
                    T = e.get(n.K1),
                    A = e.get(n.eu),
                    O = e.get(n.SD),
                    C = e.get(n.aE),
                    P = e.get(n.ki),
                    k = e.get(n.c9),
                    R = e.get(n.en),
                    I = e.get(n.jQ),
                    b = e.get(n.cZ),
                    j = e.get(n.Zl),
                    L = e.get(n.CN),
                    M = e.get(n.P1),
                    H = e.get(n.zj),
                    D = e.get(n.re),
                    F = e.get(n.JM),
                    W = e.get(n.Lk),
                    Y = e.get(n.$$),
                    G = e.get(n.sv),
                    U = e.get(n.gd),
                    z = e.get(n.Ez),
                    $ = e.get(n.u2),
                    X = e.get(n.TD),
                    V = e.get(n.dh),
                    J = e.get(n.LC),
                    K = e.get(n.PL),
                    B = e.get(n.DT);
                return {
                    accountResource: t,
                    afterTrackResource: r,
                    disclaimersResource: o,
                    usersResource: l,
                    landingResource: i,
                    landing3Resource: a,
                    landingBlocksResource: c,
                    albumResource: d,
                    libraryResource: _,
                    tracksResource: u,
                    topResource: g,
                    artistsResource: p,
                    slidesResource: h,
                    redAlertResource: m,
                    rotorResource: v,
                    waveResource: E,
                    searchResource: x,
                    searchPlaylistResource: S,
                    playlistResource: y,
                    playlistsResource: f,
                    pinResource: N,
                    metatagsResource: w,
                    tagResource: T,
                    feedResource: A,
                    wizard3Resource: O,
                    pinsResource: C,
                    musicHistoryResource: P,
                    dynamicPagesResource: k,
                    chartResource: R,
                    clipsResource: I,
                    lyricViewsResource: b,
                    nonMusicResource: j,
                    donationResource: L,
                    loaderResource: M,
                    lumenResource: H,
                    prefixlessResource: D,
                    streamsResource: F,
                    filtersResource: W,
                    ugcResource: Y,
                    collectionResource: G,
                    adsResource: U,
                    personalResource: z,
                    familyResource: $,
                    childrenLandingResource: X,
                    promoResource: V,
                    telemetryResource: J,
                    labelsResource: K,
                    concertsResource: B,
                    wordsResource: e.get(n.dA),
                    wheelResource: e.get(n.$Y),
                };
            };
        },
        60266: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => l });
            var n = r(88800);
            r(30282);
            var s = r(11006),
                o = r.n(s);
            let l = (e) => {
                let { children: t } = e;
                return (0, n.jsx)('footer', { className: o().empty });
            };
        },
        62293: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => s });
            var n = r(97956);
            let s = (e) => {
                let { checkExperiment: t, getDisclaimerContent: r, getExplicitContent: s, userRegion: o } = e;
                return 'ru' === o && t(n.z.WebNextFooterDisclaimer, 'on') ? r() : s();
            };
        },
        65523: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => i });
            var n = r(4086),
                s = r(41928),
                o = r(44084);
            let l = new WeakMap(),
                i = () =>
                    ((e) => {
                        if (e instanceof o.r) return e;
                        let t = l.get(e);
                        if (t) return t;
                        let r = {
                            log: (t, r) => e.info(t, r),
                            trace: (t, r) => e.trace(t, r),
                            debug: (t, r) => e.debug(t, r),
                            info: (t, r) => e.info(t, r),
                            warn: (t, r) => e.warn(t, r),
                            error: (t, r) => e.error(t, r),
                            fatal: (t, r) => e.fatal(t, r),
                            child: (t) => e.child(t),
                        };
                        return (l.set(e, r), r);
                    })((0, s.N)().get(n.Zf));
        },
        70003: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => o });
            var n = r(5120),
                s = r(53548);
            let o = (e) => {
                let { createStore: t, getPendingPatchBatches: r, patchesUpdatedEventName: o } = e,
                    l = (0, s.useRef)([]),
                    [i] = (0, s.useState)(() => {
                        let e = t();
                        for (let t of r()) (0, n.X6)(e, t);
                        return e;
                    });
                return (
                    (0, s.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of r()) (0, n.X6)(i, e);
                        };
                        return (e(), window.addEventListener(o, e), () => window.removeEventListener(o, e));
                    }, [r, o, i]),
                    { store: i, patchesRef: l }
                );
            };
        },
        76541: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => s, w: () => n });
            let n = 20,
                s = 20;
        },
        79418: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => m });
            var n = r(88800),
                s = r(65724),
                o = r(61013),
                l = r(53548);
            let i = (e) => {
                    let { style: t, forwardRef: r, context: s, ...o } = e,
                        l = (null == s ? void 0 : s.listAriaLabel) || void 0,
                        i = (null == s ? void 0 : s.listRole) || 'region';
                    return (0, n.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: i, 'aria-label': l, style: { ...t }, ref: r, ...o });
                },
                a = (0, l.forwardRef)((e, t) => (0, n.jsx)(i, { forwardRef: t, ...e }));
            var c = r(16434),
                d = r.n(c);
            let _ = (e) => {
                    let { style: t, forwardRef: r, withFooter: o, withHeader: l, withForceScroll: i, ...a } = e;
                    return (0, n.jsx)('div', {
                        className: (0, s.$)(d().scroller, { [d().scroller_withFooter]: o, [d().scroller_withHeader]: l, [d().scroller_withForceScroll]: i }),
                        style: { ...t },
                        ref: r,
                        ...a,
                        tabIndex: -1,
                    });
                },
                u = (0, l.forwardRef)((e, t) => (0, n.jsx)(_, { forwardRef: t, ...e }));
            var g = r(55482),
                p = r(75151);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: s,
                            debounceDurationInMs: o = 100,
                            totalCount: i = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: c,
                            virtuosoRef: d,
                            ..._
                        } = e,
                        [u, h] = (0, l.useState)(null),
                        m = (0, l.useMemo)(
                            () =>
                                (0, g.A)((e) => {
                                    if ((null == s || s(e), a.length > 0 && h(e), t && r)) {
                                        let n = Math.floor(e.endIndex / t) + 1,
                                            s = Math.floor(e.startIndex / t);
                                        for (let e = s; e < n; e++) r(e);
                                    }
                                }, o),
                            [o, s, t, r, a],
                        );
                    (0, l.useEffect)(() => {
                        a.length > 0 && u && m(u);
                    }, a);
                    let v = (0, l.useMemo)(() => {
                        if (c)
                            return (0, g.A)((e) => {
                                c(e);
                            }, o);
                    }, [c, o]);
                    return (0, n.jsx)(p.sN, { ref: d, rangeChanged: m, totalCount: i, endReached: v, ..._ });
                },
                m = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: i,
                            onGetDataByRange: c,
                            itemClassName: _,
                            itemContentCallback: g,
                            listClassName: p,
                            overscan: m = 700,
                            pageSize: v = 20,
                            totalCount: E,
                            totalRequests: x,
                            debounceDurationInMs: S,
                            initialItemCount: y,
                            minInitialItemCount: f = 20,
                            handleRef: N,
                            alwaysShowScrollbar: w = !1,
                            testId: T,
                            isMobileLayout: A = !1,
                            shouldTriggerRangeChangedOn: O,
                            ...C
                        } = e,
                        [P, k] = (0, l.useState)(!1),
                        R = (0, l.useMemo)(
                            () =>
                                (0, o.A)((e) => {
                                    k(e);
                                }, 100),
                            [],
                        ),
                        I = (0, l.useMemo)(() => {
                            var e, t;
                            return A
                                ? {
                                      Scroller: u,
                                      List: null != (e = null == r ? void 0 : r.List) ? e : a,
                                      Item: null == r ? void 0 : r.Item,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: u,
                                      List: null != (t = null == r ? void 0 : r.List) ? t : a,
                                      Item: null == r ? void 0 : r.Item,
                                      Header: null == r ? void 0 : r.Header,
                                      Footer: null == r ? void 0 : r.Footer,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  };
                        }, [r, x, A]),
                        b = y ? Math.min(y, f) : void 0;
                    return (0, n.jsxs)('div', {
                        className: (0, s.$)(d().root, { [d().root_scrolling]: P || w, [d().root_notScrolling]: !P && !w }, t),
                        'data-test-id': T,
                        children: [
                            A && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, n.jsx)(h, {
                                overscan: m,
                                components: I,
                                listClassName: p,
                                itemClassName: _,
                                isScrolling: R,
                                itemContent: g,
                                scrollerRef: N,
                                totalCount: E,
                                pageSize: v,
                                onPageHandler: i,
                                onRangeHandler: c,
                                debounceDurationInMs: S,
                                initialItemCount: b,
                                shouldTriggerRangeChangedOn: O,
                                ...C,
                            }),
                            A && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        86790: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => T });
            var n = r(88800),
                s = r(65724),
                o = r(84961),
                l = r(2058),
                i = r(30282),
                a = r(94144),
                c = (function (e) {
                    return (
                        (e.YANDEX = 'YANDEX'),
                        (e.YANDEX_PROJECTS = 'YANDEX_PROJECTS'),
                        (e.COPYRIGHT_HOLDER = 'COPYRIGHT_HOLDER'),
                        (e.AGREEMENT = 'AGREEMENT'),
                        (e.RECOMMENDATION_RULES = 'RECOMMENDATION_RULES'),
                        (e.HELP = 'HELP'),
                        (e.PRIVACY_POLICY = 'PRIVACY_POLICY'),
                        e
                    );
                })({});
            let d = (e, t, r) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(r);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(r);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(r);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(r);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(r);
                    }
                },
                _ = (e) => {
                    let { formatMessage: t, language: r, tld: n, year: s } = e;
                    return {
                        year: s,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, n, r) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, n, r) },
                    };
                };
            var u = r(62293),
                g = r(99839);
            let p = (e) => e(new Date(), (0, g.m)());
            var h = r(51611),
                m = r(72288),
                v = r(11006),
                E = r.n(v),
                x = r(17392),
                S = r(29504),
                y = r(91292);
            let f = (e) => {
                    let { className: t, data: r } = e;
                    return (0, n.jsxs)('div', {
                        className: (0, s.$)(E().copyrights, t),
                        'data-test-id': x.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, n.jsxs)(S.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: E().text,
                                children: [
                                    '\xa9 ',
                                    r.year,
                                    ' \xa0',
                                    (0, n.jsx)(y.N, {
                                        target: '_blank',
                                        href: r.yandexMusic.url,
                                        className: (0, s.$)(E().copyrightLink, E().yandexMusicLink),
                                        'data-test-id': x.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: r.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(S.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, n.jsx)(y.N, {
                                target: '_blank',
                                href: r.yandexProjects.url,
                                className: E().copyrightLink,
                                'data-test-id': x.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: r.yandexProjects.title,
                            }),
                        ],
                    });
                },
                N = (e) => {
                    let { disclaimer: t, links: r } = e;
                    return (0, n.jsxs)('div', {
                        className: E().links,
                        children: [
                            (0, n.jsx)('ol', {
                                className: E().list,
                                'data-test-id': x.S7.FOOTER_LINKS_LIST,
                                children: r.map((e) => {
                                    let { id: t, title: r, url: s } = e;
                                    return (0, n.jsx)(
                                        'li',
                                        {
                                            className: E().item,
                                            children: (0, n.jsx)(y.N, { target: '_blank', href: s, className: E().link, 'data-test-id': x.S7.FOOTER_LINK, children: r }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, n.jsx)(S.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: E().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': x.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                w = (e) => {
                    let { className: t, data: r } = e;
                    return (0, n.jsxs)('footer', {
                        className: (0, s.$)(E().root, E().important, t),
                        'data-test-id': x.S7.FOOTER,
                        children: [(0, n.jsx)(N, { links: r.links, disclaimer: r.disclaimer }), (0, n.jsx)(f, { data: r.copyrights })],
                    });
                };
            (0, o.PA)((e) => {
                let { className: t } = e,
                    { location: r } = (0, m.g)(),
                    { formatDate: s, formatMessage: o } = (0, l.A)(),
                    { language: i } = (0, h.h)(),
                    a = _({ formatMessage: o, language: i, tld: r.tld, year: p(s) });
                return (0, n.jsx)(f, { className: t, data: a });
            });
            let T = (0, o.PA)((e) => {
                var t;
                let { className: r } = e,
                    { experiments: o, location: g, user: v } = (0, m.g)(),
                    { formatDate: x, formatMessage: S } = (0, l.A)(),
                    { isEnabled: y } = null != (t = (0, a.P)()) ? t : {},
                    { language: f } = (0, h.h)(),
                    N = ((e) => {
                        let { checkExperiment: t, formatMessage: r, isWebApplication: n, language: s, tld: o, userRegion: l, year: i } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: r, tld: n, language: s, userRegion: o } = e,
                                    l = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, n, s) },
                                    i = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, n, s) },
                                    a = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, n, s) },
                                    _ = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, n, s) },
                                    u = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, n, s) },
                                    g = [l, a, _];
                                return (r && 'ru' === o && g.push(i), g.push(u), g);
                            })({ formatMessage: r, isWebApplication: n, language: s, tld: o, userRegion: l }),
                            disclaimer: (0, u.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => r({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => r({ id: 'footer.explicit-content' }),
                                userRegion: l,
                            }),
                            copyrights: _({ formatMessage: r, language: s, tld: o, year: i }),
                        };
                    })({
                        checkExperiment: (e, t) => o.checkExperiment(e, t),
                        formatMessage: S,
                        isWebApplication: i.$3,
                        tld: g.tld,
                        language: f,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: p(x),
                    });
                return (0, n.jsx)(w, { className: (0, s.$)({ [E().root_withOffsetForDeeplink]: y }, r), data: N });
            });
        },
        89108: (e, t, r) => {
            'use strict';
            r.d(t, { O: () => s, s: () => n });
            let n = 'yMusicStatePatchesUpdated',
                s = 'yMusicPageStatePatchesUpdated';
        },
        94144: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => s, P: () => o });
            var n = r(53548);
            let s = (0, n.createContext)(null),
                o = () => (0, n.useContext)(s);
        },
        96856: (e) => {
            e.exports = {
                root: 'UnstableMusicScreen_root__YblW2',
                content: 'UnstableMusicScreen_content__VnJFc',
                content_shrink: 'UnstableMusicScreen_content_shrink__0bG5x',
                navigation: 'UnstableMusicScreen_navigation___dOLr',
                navigation_desktop: 'UnstableMusicScreen_navigation_desktop__mM97H',
                image: 'UnstableMusicScreen_image__85q4P',
                message: 'UnstableMusicScreen_message__Z0HNs',
                title: 'UnstableMusicScreen_title__EdP6Y',
                text: 'UnstableMusicScreen_text__Bc7HH',
                button: 'UnstableMusicScreen_button__UQBy2',
                buttonText: 'UnstableMusicScreen_buttonText__kM_WM',
            };
        },
        99839: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => n });
            let n = () => ({ year: 'numeric' });
        },
    },
]);
