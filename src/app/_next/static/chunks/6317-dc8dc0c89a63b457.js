(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6317, 6363],
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
        7628: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => m });
            var r = s(88800),
                o = s(88969),
                n = s(58390),
                a = s(17392),
                i = s(29993),
                l = s(96817),
                c = s(29504),
                d = s(99890),
                u = s(4086),
                h = s(41928);
            let m = (e) => {
                let { size: t = 'm', variant: s = 'default', color: m = 'primary', withRipple: g = !0, buttonText: _, isBlock: p, key: v, className: x } = e,
                    b = (0, n.useRouter)(),
                    f = (0, h.N)().get(u.QG),
                    k = (0, i.c)(() => {
                        f.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), b.push(f.authorizationUrl));
                    });
                return (0, r.jsx)(
                    l.$,
                    {
                        onClick: k,
                        className: x,
                        isBlock: p,
                        color: m,
                        variant: s,
                        size: t,
                        radius: 'xxxl',
                        withRipple: g,
                        'data-test-id': a.S7.UNAUTHORIZED_BUTTON,
                        children: _ || (0, r.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, r.jsx)(o.A, { id: 'authorization.enter-button' }) }),
                    },
                    v,
                );
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
        9492: (e, t, s) => {
            'use strict';
            s.d(t, { L: () => g });
            var r = s(88800),
                o = s(65724),
                n = s(53548),
                a = s(2058),
                i = s(88969),
                l = s(96817),
                c = s(52300),
                d = s(29504),
                u = s(59304),
                h = s(4044),
                m = s.n(h);
            let g = (e) => {
                let { reloadBlocks: t, closeToast: s } = e,
                    h = (0, n.useRef)(null),
                    { formatMessage: g } = (0, a.A)();
                (0, n.useEffect)(() => {
                    var e;
                    null == (e = h.current) || e.focus();
                }, []);
                let _ = (0, n.useMemo)(
                    () =>
                        (0, r.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, r.jsx)(d.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, r.jsx)(i.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, r.jsx)(l.$, {
                                    ref: h,
                                    className: m().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': g({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, r.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [g, t],
                );
                return (0, r.jsx)(u.$, { className: (0, o.$)(m().root, m().important), message: _, closeToast: s });
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
        32596: (e, t, s) => {
            'use strict';
            s.d(t, { SomethingWentWrong: () => I });
            var r = s(88800),
                o = s(65724),
                n = s(84961),
                a = s(53548),
                i = s(2058),
                l = s(88969);
            s(30282);
            var c = s(96817),
                d = s(52300),
                u = s(29504),
                h = s(97234),
                m = s(59714),
                g = s(43054),
                _ = s(18117),
                p = s(93940),
                v = s(24709);
            let x = (0, v.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, g.s)()) ? void 0 : e.evgenInstance,
                        { hash: s } = (0, _.g)(),
                        { screen: r } = (0, p.j)();
                    return {
                        sendRefreshEvent: (0, a.useCallback)(() => {
                            if (!t || !s || !(null == r ? void 0 : r.pageId)) return;
                            let e = {
                                actionType: h.ActionType.Refresh,
                                userInteractionType: h.UserInteractionType.Tap,
                                entityType: h.EntityTypes.Error,
                                entityId: h.EntityTypes.SomethingWrong,
                                hash: s,
                                pageId: r.pageId,
                                pageStyle: h.PageStyles.Fullscreen,
                                pagePlacement: h.PagePlacements.Fullscreen,
                                mainObjectType: h.DomainObjectType.NonApplicable,
                                mainObjectId: h.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, m.bv)(t, e);
                        }, [t, s, null == r ? void 0 : r.pageId]),
                    };
                }),
                b = (0, v.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let s = null == (t = (0, g.s)()) ? void 0 : t.evgenInstance,
                        { hash: r } = (0, _.g)(),
                        { screen: o } = (0, p.j)();
                    (0, a.useEffect)(() => {
                        if (!s || !r || !(null == o ? void 0 : o.pageId)) return;
                        let t = {
                            entityType: h.EntityTypes.Error,
                            entityId: h.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: r,
                            pageId: o.pageId,
                            pageStyle: h.PageStyles.Fullscreen,
                            pagePlacement: h.PagePlacements.Fullscreen,
                            mainObjectType: h.DomainObjectType.NonApplicable,
                            mainObjectId: h.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, m.z5)(s, t);
                    }, [s, e, r, null == o ? void 0 : o.pageId]);
                });
            var f = s(44230),
                k = s(4370),
                j = s(72288),
                y = s(97956),
                S = s(56248),
                N = s(90688),
                C = s(78940);
            let w = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var R = s(96856),
                q = s.n(R);
            let H = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: s = !0, onBack: n } = e,
                    { slam: a } = (0, j.g)(),
                    { contentRef: i } = (0, f.g)(),
                    d = (0, C.Z)(k.Z.mymusicDownloadsTracks.href);
                return (0, r.jsxs)('div', {
                    className: (0, o.$)(q().root, t),
                    children: [
                        s &&
                            (0, r.jsx)(S.L, {
                                withBackwardFallback: '/',
                                className: (0, o.$)(q().navigation, { [q().navigation_desktop]: !i }),
                                withForwardControl: !1,
                                onBackwardClick: n,
                            }),
                        (0, r.jsxs)('div', {
                            className: (0, o.$)(q().content, { [q().content_shrink]: !s }),
                            children: [
                                (0, r.jsx)(N._V, { className: q().image, src: w.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, r.jsxs)('div', {
                                    className: q().message,
                                    children: [
                                        (0, r.jsx)(u.DZ, {
                                            className: q().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, r.jsx)(l.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, r.jsx)(u.HL, {
                                            className: q().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, r.jsx)(l.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                a.hasDownloadedTracks &&
                                    (0, r.jsx)(c.$, {
                                        className: q().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, r.jsx)(u.HL, {
                                            className: q().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, r.jsx)(l.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var z = s(9184),
                A = s.n(z);
            let I = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: s = !0, onBack: n } = e,
                    { formatMessage: h } = (0, i.A)(),
                    m = (0, a.useContext)(j.P),
                    g = null == m ? void 0 : m.experiments.checkExperiment(y.z.WebNextUnstableMusicScreen, 'on'),
                    _ = h(g ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                b(_);
                let { sendRefreshEvent: p } = x(),
                    v = (0, a.useCallback)(() => {
                        (p(), (window.location.href = k.Z.main.href));
                    }, [p]),
                    { contentRef: N } = (0, f.g)();
                return g
                    ? (0, r.jsx)(H, { className: t, withBackwardControl: s, onBack: n })
                    : (0, r.jsxs)('div', {
                          className: (0, o.$)(A().root, t),
                          children: [
                              s &&
                                  (0, r.jsx)(S.L, {
                                      withBackwardFallback: '/',
                                      className: (0, o.$)(A().navigation, { [A().navigation_desktop]: !N }),
                                      withForwardControl: !1,
                                      onBackwardClick: n,
                                  }),
                              (0, r.jsxs)('div', {
                                  className: (0, o.$)(A().content, { [A().content_shrink]: !s }),
                                  children: [
                                      (0, r.jsx)(d.I, { className: A().icon, variant: 'attention', size: 'xxl' }),
                                      (0, r.jsx)(u.DZ, { className: (0, o.$)(A().title, A().important), variant: 'h3', size: 'xs', children: _ }),
                                      (0, r.jsxs)(u.HL, {
                                          className: (0, o.$)(A().text, A().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, r.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, r.jsx)(c.$, {
                                          onClick: v,
                                          className: A().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, r.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, r.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        42674: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        45654: (e, t, s) => {
            'use strict';
            s.d(t, { i: () => k });
            var r = s(88800),
                o = s(84961),
                n = s(88969),
                a = s(96817),
                i = s(52300),
                l = s(66719),
                c = s(29504),
                d = s(69630),
                u = s(46422),
                h = s(44230),
                m = s(4370),
                g = s(78940),
                _ = s(72288),
                p = s(86790),
                v = s(60266),
                x = s(93317),
                b = s(92270),
                f = s.n(b);
            let k = (0, o.PA)((e) => {
                let { title: t } = e,
                    {
                        settings: { isMobile: s },
                    } = (0, _.g)(),
                    { contentScrollRef: o, setContentScrollRef: b } = (0, h.g)(),
                    k = (0, u.W)(),
                    j = (0, g.Z)(m.Z.collectionKids.href);
                return (0, r.jsxs)(d.h, {
                    scrollElement: o,
                    outerTitle: t,
                    children: [
                        (0, r.jsx)(x.Y, {
                            variant: x.V.TEXT,
                            withForwardControl: !1,
                            withBackwardControl: k.canBack,
                            children: (0, r.jsx)(c.DZ, { variant: 'h2', weight: 'bold', size: s ? 'm' : 'xl', lineClamp: 2, children: t }),
                        }),
                        (0, r.jsxs)(l.N, {
                            ref: b,
                            containerClassName: f().scrollableContainer,
                            className: f().root,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: f().content,
                                    children: [
                                        (0, r.jsx)('div', { className: f().icon, children: (0, r.jsx)(i.I, { variant: 'like', size: 'l' }) }),
                                        (0, r.jsx)(c.DZ, {
                                            className: f().title,
                                            variant: 'h3',
                                            size: 'xs',
                                            children: (0, r.jsx)(n.A, { id: 'error-messages.empty-collection-kids-sub-page-title' }),
                                        }),
                                        (0, r.jsx)(a.$, {
                                            onClick: j,
                                            className: f().button,
                                            role: 'link',
                                            color: 'secondary',
                                            size: 's',
                                            radius: 'xxxl',
                                            children: (0, r.jsx)(c.HL, {
                                                type: 'controls',
                                                variant: 'span',
                                                size: 'm',
                                                children: (0, r.jsx)(n.A, { id: 'error-messages.empty-collection-kids-sub-page-link' }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(v.A, { children: (0, r.jsx)(p.w, { className: f().footer }) }),
                            ],
                        }),
                    ],
                });
            });
        },
        54320: (e, t, s) => {
            'use strict';
            s.d(t, { X: () => d });
            var r = s(88800),
                o = s(53548),
                n = s(29993),
                a = s(9492),
                i = s(29595),
                l = s(74965),
                c = s(74773);
            let d = (e, t) => {
                let { notify: s, dismiss: d } = (0, l.l)(),
                    u = (0, o.useRef)(void 0),
                    h = (0, n.c)(() => {
                        var s;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let r = [...(null != (s = e.lastRejectedPagesList) ? s : [])].reverse().filter((t) => {
                            var s;
                            return (null == (s = e.pageStates) ? void 0 : s[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            r.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, o.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = s((0, r.jsx)(a.L, { reloadBlocks: h }), { containerId: i.u.ERROR, autoClose: !1 }));
                }, [d, h, s, e.rejectedPagesCount]);
            };
        },
        57328: (e, t, s) => {
            'use strict';
            s.d(t, { WithAuth: () => _ });
            var r = s(88800),
                o = s(84961),
                n = s(58390),
                a = s(65724),
                i = s(88969),
                l = s(29504),
                c = s(7628),
                d = s(42674),
                u = s.n(d);
            let h = (0, o.PA)(() =>
                (0, r.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, r.jsx)(l.DZ, {
                            className: (0, a.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, r.jsx)(i.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, r.jsx)(l.HL, {
                            className: (0, a.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, r.jsx)(i.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, r.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = s(4370),
                g = s(72288);
            let _ = (0, o.PA)((e) => {
                let { children: t, withRedirectToMainPage: s } = e,
                    { user: o } = (0, g.g)();
                return o.isAuthorized ? t : (s && (0, n.redirect)(m.Z.main.href), (0, r.jsx)(h, {}));
            });
        },
        66363: (e, t, s) => {
            'use strict';
            s.d(t, { NS: () => n, Nh: () => o, xW: () => a });
            var r = s(9519);
            let o = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
            class n {
                getHeaders(e) {
                    return e instanceof Headers ? Object.fromEntries(e.entries()) : e;
                }
                getUrl(e) {
                    return new URL(e || 'https://unknown');
                }
                constructor(e) {
                    ((0, r._)(this, 'logger', void 0),
                        (0, r._)(this, 'beforeRequestHook', (e) => {
                            let t = this.getUrl(e.url);
                            this.logger.info('[Resource] Request started '.concat(e.method, ' ').concat(t.origin, ' ').concat(t.pathname).concat(t.search), {
                                request: { method: e.method, url: e.url, headers: this.getHeaders(e.headers), body: e.json },
                            });
                        }),
                        (0, r._)(this, 'beforeRetryHook', (e, t) => {
                            let s = e.cause;
                            if (o(s)) {
                                var r, n, a, i, l, c, d, u, h, m, g, _, p, v;
                                let o = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (r = s.request) ? void 0 : r.method) || (null == (n = s.options) ? void 0 : n.method),
                                        url: (null == (a = s.request) ? void 0 : a.url) || (null == (i = s.options) ? void 0 : i.url),
                                        headers: this.getHeaders((null == (l = s.request) ? void 0 : l.headers) || (null == (c = s.options) ? void 0 : c.headers)),
                                        body: (null == (d = s.request) ? void 0 : d.json) || (null == (u = s.options) ? void 0 : u.json),
                                        retries: t,
                                    },
                                };
                                void 0 !== s.response &&
                                    (o.response = {
                                        statusCode: s.response.statusCode,
                                        headers: this.getHeaders(s.response.headers),
                                        time: null == (v = s.response.timings) || null == (p = v.phases) ? void 0 : p.total,
                                    });
                                let x = this.getUrl((null == (h = s.request) ? void 0 : h.url) || (null == (m = s.options) ? void 0 : m.url));
                                this.logger.warn(
                                    '[Resource] Retry request '
                                        .concat((null == (g = s.request) ? void 0 : g.method) || (null == (_ = s.options) ? void 0 : _.method), ' ')
                                        .concat(x.origin, ' ')
                                        .concat(x.pathname)
                                        .concat(x.search),
                                    o,
                                );
                            } else
                                this.logger.warn('[Resource] Retry request (unknown)', {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                });
                        }),
                        (0, r._)(this, 'afterResponseHook', (e) => {
                            if ((e.statusCode || e.status) >= 200 && 299 >= (e.statusCode || e.status)) {
                                var t, s;
                                let r = this.getUrl(e.url);
                                this.logger.info(
                                    '[Resource] Request resolved '
                                        .concat(e.statusCode, ' ')
                                        .concat(e.request.method, ' ')
                                        .concat(r.origin, ' ')
                                        .concat(r.pathname)
                                        .concat(r.search),
                                    {
                                        request: { method: e.request.method, url: e.url, headers: this.getHeaders(e.request.headers), body: e.request.body },
                                        response: {
                                            statusCode: e.statusCode || e.status,
                                            headers: this.getHeaders(e.headers),
                                            time: null == (s = e.timings) || null == (t = s.phases) ? void 0 : t.total,
                                        },
                                    },
                                );
                            }
                            return e;
                        }),
                        (0, r._)(this, 'beforeErrorHook', (e) => {
                            let t = e.cause;
                            if (o(t)) {
                                var s, r, n, a, i, l, c, d, u, h, m, g, _, p;
                                let o = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (s = t.request) ? void 0 : s.method) || (null == (r = t.options) ? void 0 : r.method),
                                        url: (null == (n = t.request) ? void 0 : n.url) || (null == (a = t.options) ? void 0 : a.url),
                                        headers: this.getHeaders((null == (i = t.request) ? void 0 : i.headers) || (null == (l = t.options) ? void 0 : l.headers)),
                                        body: (null == (c = t.request) ? void 0 : c.json) || (null == (d = t.options) ? void 0 : d.json),
                                    },
                                };
                                void 0 !== t.response &&
                                    (o.response = {
                                        statusCode: t.response.statusCode || t.response.status,
                                        headers: this.getHeaders(t.response.headers),
                                        time: null == (p = t.response.timings) || null == (_ = p.phases) ? void 0 : _.total,
                                    });
                                let v = this.getUrl((null == (u = t.request) ? void 0 : u.url) || (null == (h = t.options) ? void 0 : h.url));
                                this.logger.error(
                                    '[Resource] Request failed '
                                        .concat((null == (m = t.request) ? void 0 : m.method) || (null == (g = t.options) ? void 0 : g.method), ' ')
                                        .concat(v.origin, ' ')
                                        .concat(v.pathname)
                                        .concat(v.search, ', reason: ')
                                        .concat(e.name),
                                    o,
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
            (s(35412), s(69629));
            let a = [
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
        71104: (e, t, s) => {
            'use strict';
            s.d(t, { c: () => r });
            let r = 20;
        },
        79418: (e, t, s) => {
            'use strict';
            s.d(t, { $: () => p });
            var r = s(88800),
                o = s(65724),
                n = s(61013),
                a = s(53548);
            let i = (e) => {
                    let { style: t, forwardRef: s, context: o, ...n } = e,
                        a = (null == o ? void 0 : o.listAriaLabel) || void 0,
                        i = (null == o ? void 0 : o.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: i, 'aria-label': a, style: { ...t }, ref: s, ...n });
                },
                l = (0, a.forwardRef)((e, t) => (0, r.jsx)(i, { forwardRef: t, ...e }));
            var c = s(16434),
                d = s.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: s, withFooter: n, withHeader: a, withForceScroll: i, ...l } = e;
                    return (0, r.jsx)('div', {
                        className: (0, o.$)(d().scroller, { [d().scroller_withFooter]: n, [d().scroller_withHeader]: a, [d().scroller_withForceScroll]: i }),
                        style: { ...t },
                        ref: s,
                        ...l,
                        tabIndex: -1,
                    });
                },
                h = (0, a.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
            var m = s(55482),
                g = s(75151);
            let _ = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: s,
                            onRangeHandler: o,
                            debounceDurationInMs: n = 100,
                            totalCount: i = 0,
                            shouldTriggerRangeChangedOn: l = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [h, _] = (0, a.useState)(null),
                        p = (0, a.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == o || o(e), l.length > 0 && _(e), t && s)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            o = Math.floor(e.startIndex / t);
                                        for (let e = o; e < r; e++) s(e);
                                    }
                                }, n),
                            [n, o, t, s, l],
                        );
                    (0, a.useEffect)(() => {
                        l.length > 0 && h && p(h);
                    }, l);
                    let v = (0, a.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, n);
                    }, [c, n]);
                    return (0, r.jsx)(g.sN, { ref: d, rangeChanged: p, totalCount: i, endReached: v, ...u });
                },
                p = (e) => {
                    let {
                            className: t,
                            customComponents: s,
                            onGetDataByPage: i,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: g,
                            overscan: p = 700,
                            pageSize: v = 20,
                            totalCount: x,
                            totalRequests: b,
                            debounceDurationInMs: f,
                            initialItemCount: k,
                            minInitialItemCount: j = 20,
                            handleRef: y,
                            alwaysShowScrollbar: S = !1,
                            testId: N,
                            isMobileLayout: C = !1,
                            shouldTriggerRangeChangedOn: w,
                            ...R
                        } = e,
                        [q, H] = (0, a.useState)(!1),
                        z = (0, a.useMemo)(
                            () =>
                                (0, n.A)((e) => {
                                    H(e);
                                }, 100),
                            [],
                        ),
                        A = (0, a.useMemo)(() => {
                            var e, t;
                            return C
                                ? {
                                      Scroller: h,
                                      List: null != (e = null == s ? void 0 : s.List) ? e : l,
                                      Item: null == s ? void 0 : s.Item,
                                      ScrollSeekPlaceholder: null == s ? void 0 : s.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: h,
                                      List: null != (t = null == s ? void 0 : s.List) ? t : l,
                                      Item: null == s ? void 0 : s.Item,
                                      Header: null == s ? void 0 : s.Header,
                                      Footer: null == s ? void 0 : s.Footer,
                                      ScrollSeekPlaceholder: null == s ? void 0 : s.ScrollSeekPlaceholder,
                                  };
                        }, [s, b, C]),
                        I = k ? Math.min(k, j) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, o.$)(d().root, { [d().root_scrolling]: q || S, [d().root_notScrolling]: !q && !S }, t),
                        'data-test-id': N,
                        children: [
                            C && (null == s ? void 0 : s.Header) && s.Header(),
                            (0, r.jsx)(_, {
                                overscan: p,
                                components: A,
                                listClassName: g,
                                itemClassName: u,
                                isScrolling: z,
                                itemContent: m,
                                scrollerRef: y,
                                totalCount: x,
                                pageSize: v,
                                onPageHandler: i,
                                onRangeHandler: c,
                                debounceDurationInMs: f,
                                initialItemCount: I,
                                shouldTriggerRangeChangedOn: w,
                                ...R,
                            }),
                            C && (null == s ? void 0 : s.Footer) && s.Footer(),
                        ],
                    });
                };
        },
        92270: (e) => {
            e.exports = {
                root: 'CollectionKidsSubPageEmpty_root__53xVY',
                scrollableContainer: 'CollectionKidsSubPageEmpty_scrollableContainer__Dh6Sp',
                content: 'CollectionKidsSubPageEmpty_content__VZZg5',
                icon: 'CollectionKidsSubPageEmpty_icon__IQAON',
                title: 'CollectionKidsSubPageEmpty_title__t9H4h',
                button: 'CollectionKidsSubPageEmpty_button__26EKY',
                footer: 'CollectionKidsSubPageEmpty_footer__XQnAw',
            };
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
        99890: (e, t, s) => {
            'use strict';
            s.d(t, { C8: () => n, UC: () => a, dM: () => i, uV: () => l });
            var r = s(89916),
                o = s(66363);
            let n = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                a = (e) => (e.uid ? 'authorized' : 'no-uid'),
                i = (e) => {
                    if (!(e instanceof r.m5) || !(0, o.Nh)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, o.Nh)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                l = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
    },
]);
