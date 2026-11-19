(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5646, 6363],
    {
        4364: (e, t, s) => {
            'use strict';
            s.d(t, { CollectionShelfNewEpisodesPage: () => W });
            var r = s(88800),
                n = s(84961),
                o = s(53548),
                a = s(58390),
                i = s(17392),
                l = s(29993),
                c = s(66719),
                d = s(29504),
                u = s(32596),
                h = s(69630),
                p = s(46422),
                m = s(44230),
                g = s(37670),
                _ = s(72288),
                v = s(86790),
                x = s(60266),
                y = s(93317),
                f = s(65724),
                b = s(88969),
                k = s(18593),
                j = s(96817),
                w = s(52300),
                N = s(76843),
                S = s(4370),
                C = s(78940),
                E = s(98644),
                q = s(93015),
                R = s(81013),
                A = s.n(R);
            let z = (0, n.PA)(() => {
                let {
                        sonataState: e,
                        collection: {
                            shelf: { newEpisodes: t },
                        },
                    } = (0, _.g)(),
                    s = (0, C.Z)(S.Z.nonMusic.href),
                    n = (0, o.useMemo)(() => {
                        var s;
                        return null == (s = t.tracks)
                            ? void 0
                            : s.map((s, n) =>
                                  (0, r.jsx)(
                                      N.K,
                                      {
                                          track: s,
                                          playContextParams: {
                                              contextData: { type: k.K.Album, meta: { id: s.entityId }, from: t.typeForFrom || '' },
                                              queueParams: { index: n, entityId: s.id },
                                              loadContextMeta: !0,
                                              entitiesData: e.unloadedEntitiesDataFromModels,
                                          },
                                          withPodcastName: !0,
                                      },
                                      s.entityId,
                                  ),
                              );
                    }, [t.tracks, t.typeForFrom, e.unloadedEntitiesDataFromModels]),
                    a = (0, o.useMemo)(
                        () =>
                            t.isEmpty
                                ? (0, r.jsx)(b.A, { id: 'error-messages.empty-shelf-new-episodes-title-no-tracks' })
                                : (0, r.jsx)(b.A, { id: 'error-messages.empty-shelf-new-episodes-title' }),
                        [t.isEmpty],
                    );
                return (t.isNeededToLoad && (0, o.use)(t.getData()), t.isLoading)
                    ? (0, r.jsx)(q.D, { variant: E.X.PLAYLIST, isActive: !0 })
                    : (0, r.jsxs)('div', {
                          className: (0, f.$)(A().root, { [A().root_emptyList]: t.isEmpty }),
                          children: [
                              n,
                              (0, r.jsxs)('div', {
                                  className: A().wrapper,
                                  children: [
                                      (0, r.jsx)('div', { className: A().iconBackground, children: (0, r.jsx)(w.I, { variant: 'like', size: 'l' }) }),
                                      (0, r.jsx)(d.DZ, { className: A().title, variant: 'h3', size: 'xs', children: a }),
                                      !t.isEmpty &&
                                          (0, r.jsx)(d.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'l',
                                              weight: 'normal',
                                              children: (0, r.jsx)(b.A, { id: 'error-messages.empty-shelf-new-episodes-text' }),
                                          }),
                                      (0, r.jsx)(j.$, {
                                          onClick: s,
                                          className: A().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 's',
                                          radius: 'xxxl',
                                          children: (0, r.jsx)(d.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: (0, r.jsx)(b.A, { id: 'error-messages.empty-shelf-liked-page-link' }),
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
            var P = s(43470),
                T = s.n(P);
            let W = (0, n.PA)(() => {
                let {
                        collection: {
                            shelf: { newEpisodes: e },
                        },
                    } = (0, _.g)(),
                    { contentScrollRef: t, setContentScrollRef: s } = (0, m.g)(),
                    n = (0, p.W)(),
                    f = (0, a.useRouter)(),
                    b = (0, l.c)(() => {
                        var t;
                        (null == (t = e.playlist) ? void 0 : t.uuid) && f.replace(e.playlist.url);
                    });
                return ((0, o.useEffect)(() => {
                    e.isResolved && e.withPlaylist && b();
                }, [e.isResolved, e.withPlaylist, b]),
                (0, o.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                ),
                (0, g.J)(e.isResolved),
                e.isRejected)
                    ? (0, r.jsx)(u.SomethingWentWrong, {})
                    : (0, r.jsxs)(h.h, {
                          scrollElement: t,
                          outerTitle: e.title,
                          children: [
                              (0, r.jsx)(y.Y, {
                                  variant: y.V.TEXT,
                                  withForwardControl: !1,
                                  withBackwardControl: n.canBack,
                                  children: (0, r.jsx)(d.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: e.title }),
                              }),
                              (0, r.jsxs)(c.N, {
                                  ref: s,
                                  containerClassName: T().scrollableContainer,
                                  className: T().root,
                                  'data-test-id': i.Xk.collection.COLLECTION_SHELF_NEW_EPISODES_PAGE,
                                  children: [(0, r.jsx)(z, {}), (0, r.jsx)(x.A, { children: (0, r.jsx)(v.w, { className: T().footer }) })],
                              }),
                          ],
                      });
            });
        },
        4795: (e, t, s) => {
            'use strict';
            s.d(t, { N: () => o });
            var r = s(72288),
                n = s(97956);
            let o = () => {
                var e, t;
                let {
                    user: s,
                    settings: { browserInfo: o },
                    experiments: a,
                } = (0, r.g)();
                return (
                    !(null == o ? void 0 : o.isTouch) &&
                    s.isAuthorized &&
                    !s.hasPlus &&
                    (null == (t = a.getExperiment(n.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        7628: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => p });
            var r = s(88800),
                n = s(88969),
                o = s(58390),
                a = s(17392),
                i = s(29993),
                l = s(96817),
                c = s(29504),
                d = s(99890),
                u = s(4086),
                h = s(41928);
            let p = (e) => {
                let { size: t = 'm', variant: s = 'default', color: p = 'primary', withRipple: m = !0, buttonText: g, isBlock: _, key: v, className: x } = e,
                    y = (0, o.useRouter)(),
                    f = (0, h.N)().get(u.QG),
                    b = (0, i.c)(() => {
                        f.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), y.push(f.authorizationUrl));
                    });
                return (0, r.jsx)(
                    l.$,
                    {
                        onClick: b,
                        className: x,
                        isBlock: _,
                        color: p,
                        variant: s,
                        size: t,
                        radius: 'xxxl',
                        withRipple: m,
                        'data-test-id': a.S7.UNAUTHORIZED_BUTTON,
                        children: g || (0, r.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, r.jsx)(n.A, { id: 'authorization.enter-button' }) }),
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
        32596: (e, t, s) => {
            'use strict';
            s.d(t, { SomethingWentWrong: () => P });
            var r = s(88800),
                n = s(65724),
                o = s(84961),
                a = s(53548),
                i = s(2058),
                l = s(88969);
            s(30282);
            var c = s(96817),
                d = s(52300),
                u = s(29504),
                h = s(97234),
                p = s(59714),
                m = s(43054),
                g = s(18117),
                _ = s(93940),
                v = s(24709);
            let x = (0, v.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, m.s)()) ? void 0 : e.evgenInstance,
                        { hash: s } = (0, g.g)(),
                        { screen: r } = (0, _.j)();
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
                            Object.values(e).some((e) => void 0 === e) || (0, p.bv)(t, e);
                        }, [t, s, null == r ? void 0 : r.pageId]),
                    };
                }),
                y = (0, v.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let s = null == (t = (0, m.s)()) ? void 0 : t.evgenInstance,
                        { hash: r } = (0, g.g)(),
                        { screen: n } = (0, _.j)();
                    (0, a.useEffect)(() => {
                        if (!s || !r || !(null == n ? void 0 : n.pageId)) return;
                        let t = {
                            entityType: h.EntityTypes.Error,
                            entityId: h.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: r,
                            pageId: n.pageId,
                            pageStyle: h.PageStyles.Fullscreen,
                            pagePlacement: h.PagePlacements.Fullscreen,
                            mainObjectType: h.DomainObjectType.NonApplicable,
                            mainObjectId: h.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, p.z5)(s, t);
                    }, [s, e, r, null == n ? void 0 : n.pageId]);
                });
            var f = s(44230),
                b = s(4370),
                k = s(72288),
                j = s(97956),
                w = s(56248),
                N = s(90688),
                S = s(78940);
            let C = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var E = s(96856),
                q = s.n(E);
            let R = (0, o.PA)((e) => {
                let { className: t, withBackwardControl: s = !0, onBack: o } = e,
                    { slam: a } = (0, k.g)(),
                    { contentRef: i } = (0, f.g)(),
                    d = (0, S.Z)(b.Z.mymusicDownloadsTracks.href);
                return (0, r.jsxs)('div', {
                    className: (0, n.$)(q().root, t),
                    children: [
                        s &&
                            (0, r.jsx)(w.L, {
                                withBackwardFallback: '/',
                                className: (0, n.$)(q().navigation, { [q().navigation_desktop]: !i }),
                                withForwardControl: !1,
                                onBackwardClick: o,
                            }),
                        (0, r.jsxs)('div', {
                            className: (0, n.$)(q().content, { [q().content_shrink]: !s }),
                            children: [
                                (0, r.jsx)(N._V, { className: q().image, src: C.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
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
            var A = s(9184),
                z = s.n(A);
            let P = (0, o.PA)((e) => {
                let { className: t, withBackwardControl: s = !0, onBack: o } = e,
                    { formatMessage: h } = (0, i.A)(),
                    p = (0, a.useContext)(k.P),
                    m = null == p ? void 0 : p.experiments.checkExperiment(j.z.WebNextUnstableMusicScreen, 'on'),
                    g = h(m ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                y(g);
                let { sendRefreshEvent: _ } = x(),
                    v = (0, a.useCallback)(() => {
                        (_(), (window.location.href = b.Z.main.href));
                    }, [_]),
                    { contentRef: N } = (0, f.g)();
                return m
                    ? (0, r.jsx)(R, { className: t, withBackwardControl: s, onBack: o })
                    : (0, r.jsxs)('div', {
                          className: (0, n.$)(z().root, t),
                          children: [
                              s &&
                                  (0, r.jsx)(w.L, {
                                      withBackwardFallback: '/',
                                      className: (0, n.$)(z().navigation, { [z().navigation_desktop]: !N }),
                                      withForwardControl: !1,
                                      onBackwardClick: o,
                                  }),
                              (0, r.jsxs)('div', {
                                  className: (0, n.$)(z().content, { [z().content_shrink]: !s }),
                                  children: [
                                      (0, r.jsx)(d.I, { className: z().icon, variant: 'attention', size: 'xxl' }),
                                      (0, r.jsx)(u.DZ, { className: (0, n.$)(z().title, z().important), variant: 'h3', size: 'xs', children: g }),
                                      (0, r.jsxs)(u.HL, {
                                          className: (0, n.$)(z().text, z().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, r.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, r.jsx)(c.$, {
                                          onClick: v,
                                          className: z().button,
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
        37670: (e, t, s) => {
            'use strict';
            s.d(t, { J: () => o });
            var r = s(53548);
            s(30282);
            var n = s(58390);
            let o = (e) => {
                let t = (0, n.usePathname)(),
                    [s, o] = (0, r.useState)(!1);
                ((0, r.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, r.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !s && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), o(!0));
                    }, [e, s, t]));
            };
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
        43470: (e) => {
            e.exports = {
                root: 'CollectionShelfNewEpisodesPage_root__HTWkS',
                scrollableContainer: 'CollectionShelfNewEpisodesPage_scrollableContainer__xGZcJ',
                footer: 'CollectionShelfNewEpisodesPage_footer__0i466',
            };
        },
        50351: (e, t, s) => {
            (Promise.resolve().then(s.bind(s, 57328)), Promise.resolve().then(s.bind(s, 4364)));
        },
        56446: (e, t, s) => {
            'use strict';
            s.d(t, { k: () => u });
            var r = s(88800),
                n = s(53548),
                o = s(2058),
                a = s(17392),
                i = s(96817),
                l = s(52300),
                c = s(39318);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: s,
                            size: n,
                            radius: d,
                            iconSize: u,
                            disabled: h,
                            onClick: p,
                            iconClassName: m,
                            className: g,
                            forwardRef: _,
                            style: v,
                            children: x,
                        } = e,
                        { formatMessage: y } = (0, o.A)(),
                        f = y({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(i.$, {
                        className: g,
                        color: 'secondary',
                        radius: d,
                        size: n,
                        variant: t,
                        withRipple: s,
                        flexIcon: !0,
                        'aria-label': f,
                        onClick: p,
                        ref: _,
                        icon: (0, r.jsx)(l.I, { variant: 'trailer', size: u, className: m }),
                        disabled: h,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': a.S7.TRAILER_BUTTON,
                        children: x,
                    });
                },
                u = (0, n.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
        },
        57328: (e, t, s) => {
            'use strict';
            s.d(t, { WithAuth: () => g });
            var r = s(88800),
                n = s(84961),
                o = s(58390),
                a = s(65724),
                i = s(88969),
                l = s(29504),
                c = s(7628),
                d = s(42674),
                u = s.n(d);
            let h = (0, n.PA)(() =>
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
            var p = s(4370),
                m = s(72288);
            let g = (0, n.PA)((e) => {
                let { children: t, withRedirectToMainPage: s } = e,
                    { user: n } = (0, m.g)();
                return n.isAuthorized ? t : (s && (0, o.redirect)(p.Z.main.href), (0, r.jsx)(h, {}));
            });
        },
        66363: (e, t, s) => {
            'use strict';
            s.d(t, { NS: () => o, Nh: () => n, xW: () => a });
            var r = s(9519);
            let n = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
            class o {
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
                            if (n(s)) {
                                var r, o, a, i, l, c, d, u, h, p, m, g, _, v;
                                let n = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (r = s.request) ? void 0 : r.method) || (null == (o = s.options) ? void 0 : o.method),
                                        url: (null == (a = s.request) ? void 0 : a.url) || (null == (i = s.options) ? void 0 : i.url),
                                        headers: this.getHeaders((null == (l = s.request) ? void 0 : l.headers) || (null == (c = s.options) ? void 0 : c.headers)),
                                        body: (null == (d = s.request) ? void 0 : d.json) || (null == (u = s.options) ? void 0 : u.json),
                                        retries: t,
                                    },
                                };
                                void 0 !== s.response &&
                                    (n.response = {
                                        statusCode: s.response.statusCode,
                                        headers: this.getHeaders(s.response.headers),
                                        time: null == (v = s.response.timings) || null == (_ = v.phases) ? void 0 : _.total,
                                    });
                                let x = this.getUrl((null == (h = s.request) ? void 0 : h.url) || (null == (p = s.options) ? void 0 : p.url));
                                this.logger.warn(
                                    '[Resource] Retry request '
                                        .concat((null == (m = s.request) ? void 0 : m.method) || (null == (g = s.options) ? void 0 : g.method), ' ')
                                        .concat(x.origin, ' ')
                                        .concat(x.pathname)
                                        .concat(x.search),
                                    n,
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
                            if (n(t)) {
                                var s, r, o, a, i, l, c, d, u, h, p, m, g, _;
                                let n = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (s = t.request) ? void 0 : s.method) || (null == (r = t.options) ? void 0 : r.method),
                                        url: (null == (o = t.request) ? void 0 : o.url) || (null == (a = t.options) ? void 0 : a.url),
                                        headers: this.getHeaders((null == (i = t.request) ? void 0 : i.headers) || (null == (l = t.options) ? void 0 : l.headers)),
                                        body: (null == (c = t.request) ? void 0 : c.json) || (null == (d = t.options) ? void 0 : d.json),
                                    },
                                };
                                void 0 !== t.response &&
                                    (n.response = {
                                        statusCode: t.response.statusCode || t.response.status,
                                        headers: this.getHeaders(t.response.headers),
                                        time: null == (_ = t.response.timings) || null == (g = _.phases) ? void 0 : g.total,
                                    });
                                let v = this.getUrl((null == (u = t.request) ? void 0 : u.url) || (null == (h = t.options) ? void 0 : h.url));
                                this.logger.error(
                                    '[Resource] Request failed '
                                        .concat((null == (p = t.request) ? void 0 : p.method) || (null == (m = t.options) ? void 0 : m.method), ' ')
                                        .concat(v.origin, ' ')
                                        .concat(v.pathname)
                                        .concat(v.search, ', reason: ')
                                        .concat(e.name),
                                    n,
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
        69629: (e) => {
            var t = Object.prototype.hasOwnProperty;
            function s(e) {
                return '[Throws: ' + (e ? e.message : '?') + ']';
            }
            function r(e) {
                var r = [];
                return (function e(n) {
                    if (null === n || 'object' != typeof n) return n;
                    if (-1 !== r.indexOf(n)) return '[Circular]';
                    if ((r.push(n), 'function' == typeof n.toJSON))
                        try {
                            var o = e(n.toJSON());
                            return (r.pop(), o);
                        } catch (e) {
                            return s(e);
                        }
                    if (Array.isArray(n)) {
                        var a = n.map(e);
                        return (r.pop(), a);
                    }
                    var i = Object.keys(n).reduce(function (r, o) {
                        return (
                            (r[o] = e(
                                (function (e, r) {
                                    if (t.call(e, r))
                                        try {
                                            return e[r];
                                        } catch (e) {
                                            return s(e);
                                        }
                                    return e[r];
                                })(n, o),
                            )),
                            r
                        );
                    }, {});
                    return (r.pop(), i);
                })(e);
            }
            ((e.exports = function (e, t, s) {
                return JSON.stringify(r(e), t, s);
            }),
                (e.exports.ensureProperties = r));
        },
        81013: (e) => {
            e.exports = {
                title: 'CollectionShelfNewEpisodes_title__y_SoT',
                root: 'CollectionShelfNewEpisodes_root__VojSS',
                root_emptyList: 'CollectionShelfNewEpisodes_root_emptyList__jsjSW',
                wrapper: 'CollectionShelfNewEpisodes_wrapper__Z2EOe',
                iconBackground: 'CollectionShelfNewEpisodes_iconBackground__K4Xui',
                button: 'CollectionShelfNewEpisodes_button__3DALk',
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
            s.d(t, { C8: () => o, UC: () => a, dM: () => i, uV: () => l });
            var r = s(89916),
                n = s(66363);
            let o = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                a = (e) => (e.uid ? 'authorized' : 'no-uid'),
                i = (e) => {
                    if (!(e instanceof r.m5) || !(0, n.Nh)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, n.Nh)(e.cause)) return;
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
    (e) => {
        (e.O(
            0,
            [
                7191, 9904, 8655, 918, 1833, 3078, 1191, 1041, 8194, 1296, 6706, 4771, 2662, 6904, 1898, 2058, 3578, 8628, 4378, 9780, 8283, 9332, 2837, 8229, 4732, 9087,
                3979, 6719, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 6374, 8979, 818, 7053, 763, 2670, 7358,
            ],
            () => e((e.s = 50351)),
        ),
            (_N_E = e.O()));
    },
]);
