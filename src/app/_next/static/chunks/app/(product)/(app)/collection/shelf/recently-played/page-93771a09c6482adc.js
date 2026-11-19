(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2995, 6363],
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
        4682: (e, t, s) => {
            'use strict';
            s.d(t, { CollectionShelfRecentlyPlayedPage: () => A });
            var r = s(88800),
                o = s(65724),
                a = s(84961),
                n = s(53548),
                i = s(2058),
                l = s(88969),
                c = s(17392),
                d = s(29993),
                u = s(29504),
                h = s(32596),
                m = s(69630),
                g = s(76843),
                p = s(46422),
                _ = s(44230),
                v = s(37670),
                x = s(6668),
                f = s(72288),
                y = s(98644),
                b = s(54320),
                k = s(86790),
                j = s(60266),
                S = s(93317),
                N = s(93015),
                w = s(79418),
                C = s(71104),
                R = s(95259),
                P = s(40068),
                L = s(31582),
                q = s.n(L);
            let A = (0, a.PA)(() => {
                let {
                        settings: { isMobile: e },
                        collection: { shelfRecentlyPlayed: t },
                    } = (0, f.g)(),
                    { contentScrollRef: s, setContentScrollRef: a } = (0, _.g)(),
                    L = (0, p.W)(),
                    { formatMessage: A } = (0, i.A)(),
                    z = (0, x.w)(),
                    E = (0, d.c)((e) => {
                        t.getData({ page: e, pageSize: C.c });
                    });
                (0, b.X)(t.pagesLoader, E);
                let I = (0, n.useMemo)(() => ({ Footer: () => (0, r.jsx)(j.A, { children: (0, r.jsx)(k.w, { className: q().footer }) }) }), []),
                    T = t.isShimmerVisible ? 20 : t.items.length;
                return ((0, n.useEffect)(
                    () => () => {
                        t.reset();
                    },
                    [t],
                ),
                (0, v.J)(t.isResolved),
                t.isNeededToLoad && (0, n.use)(t.getData({ pageSize: C.c })),
                t.isRejected)
                    ? (0, r.jsx)(h.SomethingWentWrong, {})
                    : t.isEmpty
                      ? (0, r.jsx)(P.F, { title: A({ id: 'error-messages.empty-shelf-page-title' }) })
                      : (0, r.jsx)(m.h, {
                            scrollElement: s,
                            outerTitle: A({ id: 'podcast.shelf-recently-played-title' }),
                            children: (0, r.jsxs)('div', {
                                className: q().root,
                                'data-test-id': c.Xk.collection.COLLECTION_SHELF_RECENTLY_PLAYED_PAGE,
                                children: [
                                    (0, r.jsx)(S.Y, {
                                        variant: S.V.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: L.canBack,
                                        children: (0, r.jsx)(u.DZ, {
                                            variant: 'h2',
                                            weight: 'bold',
                                            size: 'xl',
                                            lineClamp: 1,
                                            children: (0, r.jsx)(l.A, { id: 'podcast.shelf-recently-played-title' }),
                                        }),
                                    }),
                                    (0, r.jsx)(w.$, {
                                        className: (0, o.$)(q().scrollContainer, q().important),
                                        customComponents: I,
                                        itemContentCallback: (e) => {
                                            let s = t.items[e];
                                            if (!s) return (0, r.jsx)(N.D, { variant: y.X.PLAYLIST, isActive: !0 }, e);
                                            let o = (0, R.T)(s, t.typeForFrom);
                                            return (0, r.jsx)(
                                                g.K,
                                                {
                                                    track: s.track,
                                                    playContextParams: z(e, { contextData: o, queueParams: { entityId: s.track.id, index: e } }),
                                                    withPodcastName: !0,
                                                },
                                                e,
                                            );
                                        },
                                        initialItemCount: T,
                                        totalCount: T,
                                        onGetDataByPage: E,
                                        pageSize: C.c,
                                        totalRequests: t.requestsCount,
                                        listClassName: q().content,
                                        itemClassName: q().item,
                                        handleRef: a,
                                        context: { listAriaLabel: A({ id: 'podcast.shelf-recently-played-title' }) },
                                        isMobileLayout: e,
                                        useWindowScroll: e,
                                    }),
                                ],
                            }),
                        });
            });
        },
        4795: (e, t, s) => {
            'use strict';
            s.d(t, { N: () => a });
            var r = s(72288),
                o = s(97956);
            let a = () => {
                var e, t;
                let {
                    user: s,
                    settings: { browserInfo: a },
                    experiments: n,
                } = (0, r.g)();
                return (
                    !(null == a ? void 0 : a.isTouch) &&
                    s.isAuthorized &&
                    !s.hasPlus &&
                    (null == (t = n.getExperiment(o.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        6668: (e, t, s) => {
            'use strict';
            s.d(t, { w: () => a });
            var r = s(53548),
                o = s(29993);
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
                    (0, o.c)((t, s) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, s), s)))
                );
            };
        },
        7628: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => m });
            var r = s(88800),
                o = s(88969),
                a = s(58390),
                n = s(17392),
                i = s(29993),
                l = s(96817),
                c = s(29504),
                d = s(99890),
                u = s(4086),
                h = s(41928);
            let m = (e) => {
                let { size: t = 'm', variant: s = 'default', color: m = 'primary', withRipple: g = !0, buttonText: p, isBlock: _, key: v, className: x } = e,
                    f = (0, a.useRouter)(),
                    y = (0, h.N)().get(u.QG),
                    b = (0, i.c)(() => {
                        y.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), f.push(y.authorizationUrl));
                    });
                return (0, r.jsx)(
                    l.$,
                    {
                        onClick: b,
                        className: x,
                        isBlock: _,
                        color: m,
                        variant: s,
                        size: t,
                        radius: 'xxxl',
                        withRipple: g,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: p || (0, r.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, r.jsx)(o.A, { id: 'authorization.enter-button' }) }),
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
                a = s(53548),
                n = s(2058),
                i = s(88969),
                l = s(96817),
                c = s(52300),
                d = s(29504),
                u = s(59304),
                h = s(4044),
                m = s.n(h);
            let g = (e) => {
                let { reloadBlocks: t, closeToast: s } = e,
                    h = (0, a.useRef)(null),
                    { formatMessage: g } = (0, n.A)();
                (0, a.useEffect)(() => {
                    var e;
                    null == (e = h.current) || e.focus();
                }, []);
                let p = (0, a.useMemo)(
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
                return (0, r.jsx)(u.$, { className: (0, o.$)(m().root, m().important), message: p, closeToast: s });
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
        31582: (e) => {
            e.exports = {
                root: 'CollectionShelfRecentlyPlayedPage_root__1eSLj',
                footer: 'CollectionShelfRecentlyPlayedPage_footer__5pPcU',
                scrollContainer: 'CollectionShelfRecentlyPlayedPage_scrollContainer__2ErJI',
                important: 'CollectionShelfRecentlyPlayedPage_important___ajYP',
                content: 'CollectionShelfRecentlyPlayedPage_content__p4qEp',
                item: 'CollectionShelfRecentlyPlayedPage_item__gQR_c',
            };
        },
        32596: (e, t, s) => {
            'use strict';
            s.d(t, { SomethingWentWrong: () => z });
            var r = s(88800),
                o = s(65724),
                a = s(84961),
                n = s(53548),
                i = s(2058),
                l = s(88969);
            s(30282);
            var c = s(96817),
                d = s(52300),
                u = s(29504),
                h = s(97234),
                m = s(59714),
                g = s(43054),
                p = s(18117),
                _ = s(93940),
                v = s(24709);
            let x = (0, v.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, g.s)()) ? void 0 : e.evgenInstance,
                        { hash: s } = (0, p.g)(),
                        { screen: r } = (0, _.j)();
                    return {
                        sendRefreshEvent: (0, n.useCallback)(() => {
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
                f = (0, v.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let s = null == (t = (0, g.s)()) ? void 0 : t.evgenInstance,
                        { hash: r } = (0, p.g)(),
                        { screen: o } = (0, _.j)();
                    (0, n.useEffect)(() => {
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
            var y = s(44230),
                b = s(4370),
                k = s(72288),
                j = s(97956),
                S = s(56248),
                N = s(90688),
                w = s(78940);
            let C = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var R = s(96856),
                P = s.n(R);
            let L = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: s = !0, onBack: a } = e,
                    { slam: n } = (0, k.g)(),
                    { contentRef: i } = (0, y.g)(),
                    d = (0, w.Z)(b.Z.mymusicDownloadsTracks.href);
                return (0, r.jsxs)('div', {
                    className: (0, o.$)(P().root, t),
                    children: [
                        s &&
                            (0, r.jsx)(S.L, {
                                withBackwardFallback: '/',
                                className: (0, o.$)(P().navigation, { [P().navigation_desktop]: !i }),
                                withForwardControl: !1,
                                onBackwardClick: a,
                            }),
                        (0, r.jsxs)('div', {
                            className: (0, o.$)(P().content, { [P().content_shrink]: !s }),
                            children: [
                                (0, r.jsx)(N._V, { className: P().image, src: C.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, r.jsxs)('div', {
                                    className: P().message,
                                    children: [
                                        (0, r.jsx)(u.DZ, {
                                            className: P().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, r.jsx)(l.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, r.jsx)(u.HL, {
                                            className: P().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, r.jsx)(l.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                n.hasDownloadedTracks &&
                                    (0, r.jsx)(c.$, {
                                        className: P().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, r.jsx)(u.HL, {
                                            className: P().buttonText,
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
            var q = s(9184),
                A = s.n(q);
            let z = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: s = !0, onBack: a } = e,
                    { formatMessage: h } = (0, i.A)(),
                    m = (0, n.useContext)(k.P),
                    g = null == m ? void 0 : m.experiments.checkExperiment(j.z.WebNextUnstableMusicScreen, 'on'),
                    p = h(g ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                f(p);
                let { sendRefreshEvent: _ } = x(),
                    v = (0, n.useCallback)(() => {
                        (_(), (window.location.href = b.Z.main.href));
                    }, [_]),
                    { contentRef: N } = (0, y.g)();
                return g
                    ? (0, r.jsx)(L, { className: t, withBackwardControl: s, onBack: a })
                    : (0, r.jsxs)('div', {
                          className: (0, o.$)(A().root, t),
                          children: [
                              s &&
                                  (0, r.jsx)(S.L, {
                                      withBackwardFallback: '/',
                                      className: (0, o.$)(A().navigation, { [A().navigation_desktop]: !N }),
                                      withForwardControl: !1,
                                      onBackwardClick: a,
                                  }),
                              (0, r.jsxs)('div', {
                                  className: (0, o.$)(A().content, { [A().content_shrink]: !s }),
                                  children: [
                                      (0, r.jsx)(d.I, { className: A().icon, variant: 'attention', size: 'xxl' }),
                                      (0, r.jsx)(u.DZ, { className: (0, o.$)(A().title, A().important), variant: 'h3', size: 'xs', children: p }),
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
        37670: (e, t, s) => {
            'use strict';
            s.d(t, { J: () => a });
            var r = s(53548);
            s(30282);
            var o = s(58390);
            let a = (e) => {
                let t = (0, o.usePathname)(),
                    [s, a] = (0, r.useState)(!1);
                ((0, r.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, r.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !s && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), a(!0));
                    }, [e, s, t]));
            };
        },
        40068: (e, t, s) => {
            'use strict';
            s.d(t, { F: () => m });
            var r = s(88800),
                o = s(84961),
                a = s(88969),
                n = s(96817),
                i = s(52300),
                l = s(29504),
                c = s(4370),
                d = s(78940),
                u = s(16348),
                h = s.n(u);
            let m = (0, o.PA)((e) => {
                let { title: t } = e,
                    s = (0, d.Z)(c.Z.nonMusic.href);
                return (0, r.jsxs)('div', {
                    className: h().root,
                    children: [
                        (0, r.jsx)('div', { className: h().iconBackground, children: (0, r.jsx)(i.I, { variant: 'like', size: 'l' }) }),
                        (0, r.jsx)(l.DZ, { className: h().title, variant: 'h3', size: 'xs', children: t }),
                        (0, r.jsx)(n.$, {
                            onClick: s,
                            className: h().button,
                            role: 'link',
                            color: 'secondary',
                            size: 's',
                            radius: 'xxxl',
                            children: (0, r.jsx)(l.HL, {
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
        42674: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        54320: (e, t, s) => {
            'use strict';
            s.d(t, { X: () => d });
            var r = s(88800),
                o = s(53548),
                a = s(29993),
                n = s(9492),
                i = s(29595),
                l = s(74965),
                c = s(74773);
            let d = (e, t) => {
                let { notify: s, dismiss: d } = (0, l.l)(),
                    u = (0, o.useRef)(void 0),
                    h = (0, a.c)(() => {
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
                    e.rejectedPagesCount > 0 && !u.current && (u.current = s((0, r.jsx)(n.L, { reloadBlocks: h }), { containerId: i.u.ERROR, autoClose: !1 }));
                }, [d, h, s, e.rejectedPagesCount]);
            };
        },
        56446: (e, t, s) => {
            'use strict';
            s.d(t, { k: () => u });
            var r = s(88800),
                o = s(53548),
                a = s(2058),
                n = s(17392),
                i = s(96817),
                l = s(52300),
                c = s(39318);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: s,
                            size: o,
                            radius: d,
                            iconSize: u,
                            disabled: h,
                            onClick: m,
                            iconClassName: g,
                            className: p,
                            forwardRef: _,
                            style: v,
                            children: x,
                        } = e,
                        { formatMessage: f } = (0, a.A)(),
                        y = f({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(i.$, {
                        className: p,
                        color: 'secondary',
                        radius: d,
                        size: o,
                        variant: t,
                        withRipple: s,
                        flexIcon: !0,
                        'aria-label': y,
                        onClick: m,
                        ref: _,
                        icon: (0, r.jsx)(l.I, { variant: 'trailer', size: u, className: g }),
                        disabled: h,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: x,
                    });
                },
                u = (0, o.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
        },
        57328: (e, t, s) => {
            'use strict';
            s.d(t, { WithAuth: () => p });
            var r = s(88800),
                o = s(84961),
                a = s(58390),
                n = s(65724),
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
                            className: (0, n.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, r.jsx)(i.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, r.jsx)(l.HL, {
                            className: (0, n.$)(u().text, u().important),
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
            let p = (0, o.PA)((e) => {
                let { children: t, withRedirectToMainPage: s } = e,
                    { user: o } = (0, g.g)();
                return o.isAuthorized ? t : (s && (0, a.redirect)(m.Z.main.href), (0, r.jsx)(h, {}));
            });
        },
        66363: (e, t, s) => {
            'use strict';
            s.d(t, { NS: () => a, Nh: () => o, xW: () => n });
            var r = s(9519);
            let o = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
            class a {
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
                                var r, a, n, i, l, c, d, u, h, m, g, p, _, v;
                                let o = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (r = s.request) ? void 0 : r.method) || (null == (a = s.options) ? void 0 : a.method),
                                        url: (null == (n = s.request) ? void 0 : n.url) || (null == (i = s.options) ? void 0 : i.url),
                                        headers: this.getHeaders((null == (l = s.request) ? void 0 : l.headers) || (null == (c = s.options) ? void 0 : c.headers)),
                                        body: (null == (d = s.request) ? void 0 : d.json) || (null == (u = s.options) ? void 0 : u.json),
                                        retries: t,
                                    },
                                };
                                void 0 !== s.response &&
                                    (o.response = {
                                        statusCode: s.response.statusCode,
                                        headers: this.getHeaders(s.response.headers),
                                        time: null == (v = s.response.timings) || null == (_ = v.phases) ? void 0 : _.total,
                                    });
                                let x = this.getUrl((null == (h = s.request) ? void 0 : h.url) || (null == (m = s.options) ? void 0 : m.url));
                                this.logger.warn(
                                    '[Resource] Retry request '
                                        .concat((null == (g = s.request) ? void 0 : g.method) || (null == (p = s.options) ? void 0 : p.method), ' ')
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
                                var s, r, a, n, i, l, c, d, u, h, m, g, p, _;
                                let o = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (s = t.request) ? void 0 : s.method) || (null == (r = t.options) ? void 0 : r.method),
                                        url: (null == (a = t.request) ? void 0 : a.url) || (null == (n = t.options) ? void 0 : n.url),
                                        headers: this.getHeaders((null == (i = t.request) ? void 0 : i.headers) || (null == (l = t.options) ? void 0 : l.headers)),
                                        body: (null == (c = t.request) ? void 0 : c.json) || (null == (d = t.options) ? void 0 : d.json),
                                    },
                                };
                                void 0 !== t.response &&
                                    (o.response = {
                                        statusCode: t.response.statusCode || t.response.status,
                                        headers: this.getHeaders(t.response.headers),
                                        time: null == (_ = t.response.timings) || null == (p = _.phases) ? void 0 : p.total,
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
            let n = [
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
            s.d(t, { $: () => _ });
            var r = s(88800),
                o = s(65724),
                a = s(61013),
                n = s(53548);
            let i = (e) => {
                    let { style: t, forwardRef: s, context: o, ...a } = e,
                        n = (null == o ? void 0 : o.listAriaLabel) || void 0,
                        i = (null == o ? void 0 : o.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: i, 'aria-label': n, style: { ...t }, ref: s, ...a });
                },
                l = (0, n.forwardRef)((e, t) => (0, r.jsx)(i, { forwardRef: t, ...e }));
            var c = s(16434),
                d = s.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: s, withFooter: a, withHeader: n, withForceScroll: i, ...l } = e;
                    return (0, r.jsx)('div', {
                        className: (0, o.$)(d().scroller, { [d().scroller_withFooter]: a, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: i }),
                        style: { ...t },
                        ref: s,
                        ...l,
                        tabIndex: -1,
                    });
                },
                h = (0, n.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
            var m = s(55482),
                g = s(75151);
            let p = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: s,
                            onRangeHandler: o,
                            debounceDurationInMs: a = 100,
                            totalCount: i = 0,
                            shouldTriggerRangeChangedOn: l = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [h, p] = (0, n.useState)(null),
                        _ = (0, n.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == o || o(e), l.length > 0 && p(e), t && s)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            o = Math.floor(e.startIndex / t);
                                        for (let e = o; e < r; e++) s(e);
                                    }
                                }, a),
                            [a, o, t, s, l],
                        );
                    (0, n.useEffect)(() => {
                        l.length > 0 && h && _(h);
                    }, l);
                    let v = (0, n.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, a);
                    }, [c, a]);
                    return (0, r.jsx)(g.sN, { ref: d, rangeChanged: _, totalCount: i, endReached: v, ...u });
                },
                _ = (e) => {
                    let {
                            className: t,
                            customComponents: s,
                            onGetDataByPage: i,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: g,
                            overscan: _ = 700,
                            pageSize: v = 20,
                            totalCount: x,
                            totalRequests: f,
                            debounceDurationInMs: y,
                            initialItemCount: b,
                            minInitialItemCount: k = 20,
                            handleRef: j,
                            alwaysShowScrollbar: S = !1,
                            testId: N,
                            isMobileLayout: w = !1,
                            shouldTriggerRangeChangedOn: C,
                            ...R
                        } = e,
                        [P, L] = (0, n.useState)(!1),
                        q = (0, n.useMemo)(
                            () =>
                                (0, a.A)((e) => {
                                    L(e);
                                }, 100),
                            [],
                        ),
                        A = (0, n.useMemo)(() => {
                            var e, t;
                            return w
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
                        }, [s, f, w]),
                        z = b ? Math.min(b, k) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, o.$)(d().root, { [d().root_scrolling]: P || S, [d().root_notScrolling]: !P && !S }, t),
                        'data-test-id': N,
                        children: [
                            w && (null == s ? void 0 : s.Header) && s.Header(),
                            (0, r.jsx)(p, {
                                overscan: _,
                                components: A,
                                listClassName: g,
                                itemClassName: u,
                                isScrolling: q,
                                itemContent: m,
                                scrollerRef: j,
                                totalCount: x,
                                pageSize: v,
                                onPageHandler: i,
                                onRangeHandler: c,
                                debounceDurationInMs: y,
                                initialItemCount: z,
                                shouldTriggerRangeChangedOn: C,
                                ...R,
                            }),
                            w && (null == s ? void 0 : s.Footer) && s.Footer(),
                        ],
                    });
                };
        },
        88232: (e, t, s) => {
            (Promise.resolve().then(s.bind(s, 57328)), Promise.resolve().then(s.bind(s, 4682)));
        },
        95259: (e, t, s) => {
            'use strict';
            s.d(t, { T: () => a });
            var r,
                o = s(18593);
            !(function (e) {
                ((e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'));
            })(r || (r = {}));
            let a = (e, t) => {
                var s, a;
                return e.type === r.ALBUM
                    ? { type: o.K.Album, meta: { id: (null == (a = e.album) ? void 0 : a.id) || 0 }, from: t || '' }
                    : { type: o.K.Playlist, meta: { id: (null == (s = e.playlist) ? void 0 : s.id) || '' }, from: t || '' };
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
            s.d(t, { C8: () => a, UC: () => n, dM: () => i, uV: () => l });
            var r = s(89916),
                o = s(66363);
            let a = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (e) => (e.uid ? 'authorized' : 'no-uid'),
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
    (e) => {
        (e.O(
            0,
            [
                7191, 9904, 918, 1833, 3078, 1191, 1041, 8194, 8655, 5213, 8735, 6706, 4771, 2662, 6904, 1898, 2058, 3578, 8628, 4378, 9780, 8283, 9332, 5151, 957, 4732,
                9087, 3979, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 6374, 8979, 818, 7053, 763, 2670, 7358,
            ],
            () => e((e.s = 88232)),
        ),
            (_N_E = e.O()));
    },
]);
