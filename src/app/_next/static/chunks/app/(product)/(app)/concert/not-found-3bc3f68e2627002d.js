(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7290],
    {
        4370: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => a });
            var i = n(67174);
            let a = {
                main: (0, i.u)('/'),
                chart: (0, i.u)('/chart'),
                chartPodcasts: (0, i.u)('/chart/podcasts'),
                collection: (0, i.u)('/collection'),
                collectionAlbums: (0, i.u)('/collection/albums'),
                collectionArtists: (0, i.u)('/collection/artists'),
                collectionClips: (0, i.u)('/collection/clips'),
                collectionDislikes: (0, i.u)('/collection/dislikes'),
                collectionKids: (0, i.u)('/collection/kids'),
                collectionKidsAlbums: (0, i.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, i.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, i.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, i.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, i.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, i.u)('/collection/multivibes'),
                collectionVibes: (0, i.u)('/collection/vibes'),
                collectionPlaylists: (0, i.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, i.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, i.u)('/collection/playlists/liked'),
                collectionShelf: (0, i.u)('/collection/shelf'),
                collectionShelfLiked: (0, i.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, i.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, i.u)('/collection/shelf/recently-played'),
                concerts: (0, i.u)('/concerts'),
                kids: (0, i.u)('/kids'),
                mixes: (0, i.u)('/mixes'),
                musicHistory: (0, i.u)('/music-history'),
                muzmarket: (0, i.u)('/muzmarket'),
                mymusic: (0, i.u)('/mymusic'),
                mymusicDownloadsTracks: (0, i.u)('/mymusic/downloads/tracks'),
                multivibe: (0, i.u)('/multivibe'),
                nonMusic: (0, i.u)('/non-music'),
                pay: (0, i.u)('/pay'),
                userSlides: (0, i.u)('/slides/user'),
                search: (0, i.u)('/search'),
                searchHistory: (0, i.u)('/search/history'),
                settings: (0, i.u)('/settings'),
                video: (0, i.u)('/video'),
            };
        },
        15947: (e, t, n) => {
            'use strict';
            n.d(t, { U: () => l });
            var i = n(35412),
                a = n(28166),
                o = n(97261);
            let s = [i.cy.HTTP, i.cy.HTTPS, i.cy.MAILTO, i.cy.TEL, a.Lz],
                l = (e, t, n) => {
                    let l;
                    try {
                        l = new URL(t);
                    } catch (e) {
                        return null;
                    }
                    let r = (0, i.Rj)(e, { allowedProtocols: new Set([...s, l.protocol]), baseUrl: l.href });
                    return r.isAllowed
                        ? r.url.protocol === a.Lz
                            ? { type: o.I.DEEPLINK, href: e }
                            : '_blank' !== n && ((e, t) => e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port)(r.url, l)
                              ? { type: o.I.INTERNAL, href: e }
                              : { type: o.I.EXTERNAL, href: e }
                        : null;
                };
        },
        26827: (e) => {
            e.exports = {
                root: 'NotFound_root__47ZX6',
                root_desktop: 'NotFound_root_desktop___QqSb',
                container: 'NotFound_container__h1XeE',
                navigation: 'NotFound_navigation__q8rIW',
                content: 'NotFound_content__3kry_',
                icon: 'NotFound_icon___Wa9y',
                title: 'NotFound_title__akG_o',
                important: 'NotFound_important__z1LWl',
                text: 'NotFound_text__oxDZv',
                button: 'NotFound_button__jF4uH',
            };
        },
        27054: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => d });
            var i = n(53548),
                a = n(97234),
                o = n(59714),
                s = n(43054),
                l = n(18117),
                r = n(93940),
                c = n(24709),
                b = n(29993);
            let d = (0, c.n)({ event: 'Screen.Navigated', kind: 'hook', requiredScopes: ['screen'] }, function () {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { autoSend: n = !0 } = t,
                    c = null == (e = (0, s.s)()) ? void 0 : e.evgenInstance,
                    { hash: d } = (0, l.g)(),
                    { screen: N } = (0, r.j)(),
                    u = null == N ? void 0 : N.pageId,
                    W = (0, b.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (
                            !c ||
                            !u ||
                            !d ||
                            !(() => {
                                for (let [e, t] of new URLSearchParams(window.location.search))
                                    if ((e.startsWith('utm_') || 'ref_id' === e) && '' !== t.trim()) return !0;
                                return !1;
                            })()
                        )
                            return;
                        let t = {
                            hash: d,
                            pageId: a.AppScreen.Link,
                            entityType: a.EntityTypes.Deeplink,
                            entityId: a.EntityTypes.Deeplink,
                            from: a.AppScreen.Link,
                            to: u,
                            deepLink: null != e ? e : window.location.href,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, o.ID)(c, t);
                    });
                return (
                    (0, i.useEffect)(() => {
                        n && W();
                    }, [n, W]),
                    (0, b.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        n || W({ deepLink: e });
                    })
                );
            });
        },
        28166: (e, t, n) => {
            'use strict';
            n.d(t, { Lz: () => i, ov: () => a });
            let i = ''.concat('yandexmusic', ':'),
                a = ''.concat(i, '//');
        },
        31347: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { default: () => m }));
            var i = n(88800),
                a = n(84961),
                o = n(53548),
                s = n(2058),
                l = n(97234),
                r = n(59724),
                c = n(64462),
                b = n(98427),
                d = n(27054),
                N = n(72288),
                u = n(97956),
                W = n(55963),
                x = n.n(W);
            let p = (0, a.PA)(() => {
                    let { experiments: e, concert: t } = (0, N.g)(),
                        { formatMessage: n } = (0, s.A)(),
                        a = e.checkExperiment(u.z.WebNextConcertPage, 'on');
                    if (
                        ((0, d.A)(),
                        (0, o.useEffect)(
                            () => () => {
                                t.reset();
                            },
                            [t],
                        ),
                        !a)
                    )
                        return (0, i.jsx)(c.NotFound, {});
                    let l = n({ id: 'page-error.concert-page-does-not-exist' }),
                        r = n({ id: 'page-error.concert-page-does-not-exist-description' });
                    return (0, i.jsx)(c.NotFound, { title: l, description: r, iconVariant: 'attention', iconSize: 'xxl', iconClassName: x().icon });
                }),
                S = (0, a.PA)(() => (0, i.jsx)(r.a, { pageId: l.AppScreen.PageNotFoundScreen, pageIdForFrom: b.b.PAGE_NOT_FOUND_SCREEN, children: (0, i.jsx)(p, {}) })),
                m = () => (0, i.jsx)(S, {});
        },
        36740: (e, t, n) => {
            'use strict';
            n.d(t, { u: () => N });
            var i = n(53548),
                a = n(59714),
                o = n(24709),
                s = n(23480),
                l = n(94126),
                r = n(8383),
                c = n(18117),
                b = n(93940),
                d = n(46457);
            let N = (0, o.n)({ event: 'Screen.Opened/Closed', kind: 'hook', requiredScopes: ['screen'] }, () => {
                let e = (0, i.useContext)(s.I),
                    { hash: t } = (0, c.g)(),
                    { screen: n, tab: o } = (0, b.j)(),
                    N = (0, i.useContext)(r.k)?.session,
                    { current: u } = (0, i.useRef)(Symbol()),
                    W = !!n,
                    x = (i) => {
                        if (!e || !N || !n?.pageId || void 0 === t || !W) return !1;
                        let s = {
                            hash: t,
                            pageId: n.pageId,
                            pageStyle: n.pageStyle,
                            pagePlacement: n.pagePlacement,
                            mainObjectType: n.mainObjectType,
                            mainObjectId: n.mainObjectId,
                            skeletonId: n.skeletonId,
                            viewUuid: n.screenViewUuid,
                            ...(o ?? l.Ve),
                        };
                        return (i ? N.open(u, () => (0, a.Fn)(e, s)) : N.close(u, () => (0, a.PO)(e, s)), !0);
                    },
                    [p, S] = (0, i.useState)(() => ({ session: N, send: x, opened: !1 })),
                    m = p;
                (p.session !== N && S((m = { session: N, send: x, opened: !1 })),
                    (0, i.useInsertionEffect)(() => {
                        W && void 0 !== t && (m.send = x);
                    }, [m, t, W, x]));
                let _ = (0, d.c)((e, t) => {
                    e.send(t) && (e.opened = t);
                });
                ((0, i.useEffect)(
                    () => (
                        _(m, !0),
                        () => {
                            (m.opened && _(m, !1), m.session?.release(u));
                        }
                    ),
                    [u, m, _],
                ),
                    (0, i.useEffect)(() => {
                        _(m, !0);
                    }, [m, t, W, _]));
            });
        },
        38860: (e, t, n) => {
            'use strict';
            n.d(t, { z: () => o });
            var i = n(53548),
                a = n(41168);
            let o = () => (0, i.useContext)(a.P);
        },
        41168: (e, t, n) => {
            'use strict';
            n.d(t, { P: () => i });
            let i = (0, n(53548).createContext)(null);
        },
        44230: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => a, g: () => o });
            var i = n(53548);
            let a = (0, i.createContext)({
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
                o = () => (0, i.useContext)(a);
        },
        46422: (e, t, n) => {
            'use strict';
            n.d(t, { Q: () => a, W: () => o });
            var i = n(53548);
            let a = (0, i.createContext)({
                pushState: () => {},
                replaceState: () => {},
                forward: () => {},
                back: () => {},
                canForward: !1,
                canBack: !1,
                state: null,
                length: 0,
            });
            function o() {
                return (0, i.useContext)(a);
            }
        },
        46457: (e, t, n) => {
            'use strict';
            n.d(t, { c: () => a });
            var i = n(53548);
            function a(e) {
                let t = (0, i.useRef)({ stableFn: (...e) => t.current.callback(...e), callback: e });
                return (
                    (0, i.useInsertionEffect)(() => {
                        t.current.callback = e;
                    }),
                    t.current.stableFn
                );
            }
        },
        46777: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => s });
            var i = n(55482),
                a = n(53548),
                o = n(46422);
            let s = (e) => {
                let t = (0, o.W)(),
                    n = (0, a.useMemo)(
                        () =>
                            (0, i.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    s = (0, a.useMemo)(
                        () =>
                            (0, i.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: n, moveForward: s };
            };
        },
        50320: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        55963: (e) => {
            e.exports = { icon: 'ConcertNotFoundPage_icon__9yJIB' };
        },
        56248: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => x });
            var i = n(88800),
                a = n(65724),
                o = n(84961),
                s = n(53548),
                l = n(2058),
                r = n(17392),
                c = n(29993),
                b = n(96817),
                d = n(52300),
                N = n(46777),
                u = n(50320),
                W = n.n(u);
            let x = (0, o.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: n = !0,
                        shouldFocusOnMount: o = !0,
                        className: u,
                        withBackwardFallback: x,
                        buttonSize: p = 'xxs',
                        onBackwardClick: S,
                    } = e,
                    { formatMessage: m } = (0, l.A)(),
                    { canBack: _, canForward: T, moveBack: y, moveForward: I } = (0, N.J)(x),
                    g = (0, s.useRef)(null),
                    A = (0, c.c)((e) => {
                        if ((e.stopPropagation(), S)) return void S();
                        y();
                    }),
                    C = (0, c.c)((e) => {
                        (e.stopPropagation(), I());
                    });
                return (
                    (0, s.useEffect)(() => {
                        o && g.current && _ && g.current.focus();
                    }, [_]),
                    (0, i.jsxs)('div', {
                        className: (0, a.$)(W().root, u),
                        'data-test-id': r.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, i.jsx)(b.$, {
                                    ref: g,
                                    'aria-label': m({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !_,
                                    size: p,
                                    icon: (0, i.jsx)(d.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: A,
                                    'data-test-id': r.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            n &&
                                (0, i.jsx)(b.$, {
                                    'aria-label': m({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !T,
                                    size: p,
                                    icon: (0, i.jsx)(d.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: C,
                                    'data-test-id': r.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        59724: (e, t, n) => {
            'use strict';
            n.d(t, { a: () => d });
            var i = n(88800),
                a = n(53548),
                o = n(8383),
                s = n(24709),
                l = n(88966);
            let r = new WeakMap();
            class c {
                screenViewUuid;
                queue;
                consumers = new Set();
                loadedTabs = new Set();
                opened = !1;
                pendingOpen = !1;
                closed = !1;
                pendingClose = null;
                constructor(e, t) {
                    this.screenViewUuid = e;
                    let n =
                        r.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                n = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                i = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                n();
                                            } finally {
                                                ((t = !1), e.length > 0 && i());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (n(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), i());
                                },
                            };
                        })();
                    (r.set(t, n), (this.queue = n));
                }
                open(e, t) {
                    ((this.pendingClose = null),
                        this.opened ||
                            this.pendingOpen ||
                            ((this.pendingOpen = !0),
                            this.queue.open(() => {
                                try {
                                    (t(), (this.opened = !0));
                                } finally {
                                    this.pendingOpen = !1;
                                }
                            })),
                        this.consumers.add(e));
                }
                close(e, t) {
                    (this.consumers.delete(e), this.closed || this.pendingClose?.scheduled || ((this.pendingClose = { send: t, scheduled: !1 }), this.scheduleClose()));
                }
                release(e) {
                    (this.consumers.delete(e), this.scheduleClose());
                }
                loadTab(e, t) {
                    this.loadedTabs.has(e) || (t(), this.loadedTabs.add(e));
                }
                scheduleClose() {
                    let e = this.pendingClose;
                    !e ||
                        e.scheduled ||
                        this.consumers.size > 0 ||
                        ((e.scheduled = !0),
                        this.queue.defer(() => {
                            this.pendingClose !== e || this.consumers.size > 0 || ((this.pendingClose = null), e.send(), (this.closed = !0));
                        }));
                }
            }
            var b = n(97234);
            let d = (0, s.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let n = (0, l.N)(),
                        s = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === b.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [r, d] = (0, a.useState)(() => {
                            let e = new c(n.createScreenSession().screenViewUuid, n);
                            return { client: n, input: t, isReady: s, scope: s ? n.createScreenScope(t, e) : null, session: e };
                        });
                    if (r.client !== n || r.input.pageId !== t.pageId || r.input.skeletonId !== t.skeletonId) {
                        let a = new c(n.createScreenSession().screenViewUuid, n),
                            l = { client: n, input: t, isReady: s, scope: s ? n.createScreenScope(t, a) : null, session: a };
                        return (d(l), (0, i.jsx)(o.k, { value: l, children: e }));
                    }
                    if (
                        r.isReady !== s ||
                        r.input.mainObjectType !== t.mainObjectType ||
                        r.input.mainObjectId !== t.mainObjectId ||
                        r.input.displayReasonId !== t.displayReasonId ||
                        r.input.pageIdForFrom !== t.pageIdForFrom ||
                        r.input.pagePlacement !== t.pagePlacement ||
                        r.input.pageStyle !== t.pageStyle
                    ) {
                        let a = { ...r, input: t, isReady: s, scope: s ? n.createScreenScope(t, r.session) : null };
                        return (d(a), (0, i.jsx)(o.k, { value: a, children: e }));
                    }
                    return (0, i.jsx)(o.k, { value: r, children: e });
                },
            );
        },
        64462: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { NotFound: () => v }));
            var i = n(88800),
                a = n(65724),
                o = n(84961),
                s = n(88969);
            n(30282);
            var l = n(97234),
                r = n(36740),
                c = n(59724),
                b = n(17392),
                d = n(96817),
                N = n(52300),
                u = n(66719),
                W = n(29504),
                x = n(98427),
                p = n(53548),
                S = n(59714),
                m = n(43054),
                _ = n(18117);
            let T = (0, n(24709).n)({ event: 'Screen.Navigated', kind: 'hook', requiredScopes: [] }, function (e) {
                var t;
                let n = null == (t = (0, m.s)()) ? void 0 : t.evgenInstance,
                    { hash: i } = (0, _.g)();
                return {
                    handleNavigateToMain: (0, p.useCallback)(() => {
                        if (!n || !i) return;
                        let t = {
                            hash: i,
                            pageId: l.AppScreen.PageNotFoundScreen,
                            pageStyle: l.PageStyles.Fullscreen,
                            pagePlacement: l.PagePlacements.Fullscreen,
                            mainObjectType: l.DomainObjectType.NonApplicable,
                            mainObjectId: l.DomainObjectType.NonApplicable,
                            from: l.AppScreen.PageNotFoundScreen,
                            to: l.AppScreen.MainScreen,
                            entityType: l.EntityTypes.Error,
                            entityId: l.EntityTypes.Error,
                        };
                        (Object.values(t).some((e) => void 0 === e) || (0, S.Mu)(n, t), e());
                    }, [n, i, e]),
                };
            });
            var y = n(44230),
                I = n(4370),
                g = n(78940),
                A = n(95210),
                C = n(56248),
                P = n(72288),
                k = n(26827),
                L = n.n(k);
            let h = (0, o.PA)((e) => {
                    let { className: t, title: n, description: o, iconVariant: l = 'musicLogo', iconClassName: c, iconSize: x } = e,
                        { contentRef: S, setContentScrollRef: m } = (0, y.g)(),
                        _ = (0, g.Z)(I.Z.main.href);
                    (0, r.u)();
                    let { handleNavigateToMain: k } = T(_);
                    return (
                        (0, A.N)(!0),
                        !(function () {
                            let { location: e } = (0, P.g)();
                            (0, p.useEffect)(
                                () => (
                                    e.setNotFound(!0),
                                    () => {
                                        e.setNotFound(!1);
                                    }
                                ),
                                [e],
                            );
                        })(),
                        (0, i.jsxs)(u.N, {
                            className: (0, a.$)(L().root, { [L().root_desktop]: !S }, t),
                            containerClassName: L().container,
                            ref: m,
                            'data-test-id': b.e8.notFound.NOT_FOUND,
                            children: [
                                (0, i.jsx)(C.L, { withBackwardFallback: '/', className: L().navigation, withForwardControl: !1 }),
                                (0, i.jsxs)('div', {
                                    className: L().content,
                                    children: [
                                        (0, i.jsx)(N.I, { className: (0, a.$)(L().icon, c), variant: l, size: x }),
                                        (0, i.jsx)(W.DZ, {
                                            className: (0, a.$)(L().title, L().important),
                                            variant: 'h3',
                                            size: 'xs',
                                            'data-test-id': b.e8.notFound.NOT_FOUND_TITLE,
                                            children: n || (0, i.jsx)(s.A, { id: 'page-error.page-does-not-exist' }),
                                        }),
                                        (0, i.jsx)(W.HL, {
                                            className: (0, a.$)(L().text, L().important),
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'normal',
                                            children: o || (0, i.jsx)(s.A, { id: 'page-error.page-does-not-exist-description' }),
                                        }),
                                        (0, i.jsx)(d.$, {
                                            onClick: k,
                                            className: L().button,
                                            role: 'link',
                                            color: 'secondary',
                                            size: 'l',
                                            radius: 'xxxl',
                                            children: (0, i.jsx)(W.HL, {
                                                type: 'controls',
                                                variant: 'span',
                                                size: 'm',
                                                children: (0, i.jsx)(s.A, { id: 'navigation.page-main' }),
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                }),
                v = (e) =>
                    (0, i.jsx)(c.a, {
                        pageId: l.AppScreen.PageNotFoundScreen,
                        pageIdForFrom: x.b.PAGE_NOT_FOUND_SCREEN,
                        pageStyle: l.PageStyles.Fullscreen,
                        pagePlacement: l.PagePlacements.Fullscreen,
                        mainObjectType: l.DomainObjectType.NonApplicable,
                        mainObjectId: l.DomainObjectType.NonApplicable,
                        children: (0, i.jsx)(h, { ...e }),
                    });
        },
        78940: (e, t, n) => {
            'use strict';
            (n.d(t, { Z: () => r }), n(30282));
            var i = n(58390),
                a = n(29993),
                o = n(67174),
                s = n(15947),
                l = n(97261);
            let r = (e) => {
                let t = (0, i.useRouter)(),
                    { href: n, target: r } = (0, o.u)(e);
                return (0, a.c)((e) => {
                    let i = (0, s.U)(n, window.location.href, r);
                    if (!i) {
                        null == e || e.preventDefault();
                        return;
                    }
                    (null != e && e.metaKey) ||
                        (null != e && e.ctrlKey) ||
                        (null != e && e.shiftKey) ||
                        (i.type === l.I.EXTERNAL || i.type === l.I.DEEPLINK
                            ? ((e) => {
                                  let { target: t, rel: n } = (0, o.u)(e, { options: { isExternalLink: !0 } });
                                  window.open(e, t, n);
                              })(i.href)
                            : t.push(i.href));
                });
            };
        },
        79432: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 31347));
        },
        88966: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => o });
            var i = n(53548),
                a = n(23480);
            let o = () => {
                let e = (0, i.useContext)(a.I);
                if (!e) throw Error('AnalyticsProvider is required');
                return e;
            };
        },
        94126: (e, t, n) => {
            'use strict';
            n.d(t, { Ve: () => s, Vn: () => a, p6: () => o, w: () => i });
            let i = '',
                a = 0,
                o = !1,
                s = Object.freeze({ tabId: i, tabPos: 0, isTabSelectedByDefault: !1 });
        },
        95210: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => o });
            var i = n(53548),
                a = n(38860);
            let o = (e) => {
                let t = (0, i.useRef)(!1),
                    n = (0, a.z)();
                (0, i.useEffect)(() => {
                    (e && (null == n || n.disable(), (t.current = !0)), !e && t.current && (null == n || n.enable(), (t.current = !1)));
                }, [e, n]);
            };
        },
        97261: (e, t, n) => {
            'use strict';
            n.d(t, { I: () => i });
            var i = (function (e) {
                return ((e.INTERNAL = 'internal'), (e.EXTERNAL = 'external'), (e.DEEPLINK = 'deeplink'), e);
            })({});
        },
        97956: (e, t, n) => {
            'use strict';
            n.d(t, { z: () => i });
            var i = (function (e) {
                return (
                    (e.WebEditorsFeatures = 'WebEditorsFeatures'),
                    (e.WebNextAuthPerf = 'WebNextAuthPerf'),
                    (e.WebNextTagSandbox = 'WebNextTagSandbox'),
                    (e.WebNextServiceWorkerCache = 'WebNextServiceWorkerCache'),
                    (e.WebNextUnauthorizedProbe = 'WebNextUnauthorizedProbe'),
                    (e.WebNextForcedLogin = 'WebNextForcedLogin'),
                    (e.WebNextBlockFullscreen = 'WebNextBlockFullscreen'),
                    (e.WebNextDisableCollection = 'WebNextDisableCollection'),
                    (e.WebNextDisableVibe = 'WebNextDisableVibe'),
                    (e.WebNextDisableVibeSettings = 'WebNextDisableVibeSettings'),
                    (e.WebNextProductWithoutRecommendation = 'WebNextProductWithoutRecommendation'),
                    (e.WebNextDisableSearch = 'WebNextDisableSearch'),
                    (e.WebNextDisableKids = 'WebNextDisableKids'),
                    (e.WebNextDisableNonMusic = 'WebNextDisableNonMusic'),
                    (e.WebNextDisablePlus = 'WebNextDisablePlus'),
                    (e.WebNextDisableSendPlaysOnTrackStart = 'WebNextDisableSendPlaysOnTrackStart'),
                    (e.WebNextPlayQueueDnD = 'WebNextPlayQueueDnD'),
                    (e.WebNextCollectionPlaylistsDnD = 'WebNextCollectionPlaylistsDnD'),
                    (e.WebNextCrackdownInterval = 'WebNextCrackdownInterval'),
                    (e.WebNextAdvertTest = 'WebNextAdvertTest'),
                    (e.WebNextBrandedPlayerErids = 'WebNextBrandedPlayerErids'),
                    (e.WebNextConcertsCashback = 'WebNextConcertsCashback'),
                    (e.WebNextBetaLabel = 'WebNextBetaLabel'),
                    (e.WebNextRewind2024 = 'WebNextRewind2024'),
                    (e.WebNextOfflineDegradation = 'WebNextOfflineDegradation'),
                    (e.WebNextLatestGenreAlbumsDegradation = 'WebNextLatestGenreAlbumsDegradation'),
                    (e.WebNextPlaylistFiltersDegradation = 'WebNextPlaylistFiltersDegradation'),
                    (e.WebNextUgcUploadDegradation = 'WebNextUgcUploadDegradation'),
                    (e.WebNextLibrarySyncLimits = 'WebNextLibrarySyncLimits'),
                    (e.WebNextDesktopPaywallInterval = 'WebNextDesktopPaywallInterval'),
                    (e.WebNextPaywallCrackdownInterval = 'WebNextPaywallCrackdownInterval'),
                    (e.WebNextShaderFallbackEnabled = 'WebNextShaderFallbackEnabled'),
                    (e.WebNextShaderV3 = 'WebNextShaderV3'),
                    (e.WebNextDisablePrefetchRequests = 'WebNextDisablePrefetchRequests'),
                    (e.WebNextDeleteIndexedDbPlaysStore = 'WebNextDeleteIndexedDbPlaysStore'),
                    (e.WebNextDeeplinksToMobile = 'WebNextDeeplinksToMobile'),
                    (e.WebNextPromoLanding = 'WebNextPromoLanding'),
                    (e.WebNextPromoLandingCrackdownInterval = 'WebNextPromoLandingCrackdownInterval'),
                    (e.WebNextPromoLandingAdvert = 'WebNextPromoLandingAdvert'),
                    (e.WebNextAlbumImpulseBanner = 'WebNextAlbumImpulseBanner'),
                    (e.WebNextPlaylistImpulseBanner = 'WebNextPlaylistImpulseBanner'),
                    (e.WebNextArtistInfo = 'WebNextArtistInfo'),
                    (e.WebNextEnableSendLimitedEntityListToYnison = 'WebNextEnableSendLimitedEntityListToYnison'),
                    (e.WebNextPromoVeryBestRecommendations = 'WebNextPromoVeryBestRecommendations'),
                    (e.WebNextLegalRedirects = 'WebNextLegalRedirects'),
                    (e.WebNextRemoveDuplicatePlays = 'WebNextRemoveDuplicatePlays'),
                    (e.WebNextVirtualSkeleton = 'WebNextVirtualSkeleton'),
                    (e.WebNextAlbumDonationButton = 'WebNextAlbumDonationButton'),
                    (e.WebNextAlbumNotModified = 'WebNextAlbumNotModified'),
                    (e.WebNextTrackNotModified = 'WebNextTrackNotModified'),
                    (e.WebNextDisableAds = 'WebNextDisableAds'),
                    (e.WebNextAlbumCPA = 'WebNextAlbumCPA'),
                    (e.WebNextPlusCPA = 'WebNextPlusCPA'),
                    (e.WebNextNewConcertCard = 'WebNextNewConcertCard'),
                    (e.NewConcertsTicketRedesign = 'newConcertsTicketRedesign'),
                    (e.WebNextConcertsTab = 'WebNextConcertsTab'),
                    (e.WebNextTracksPreload = 'WebNextTracksPreload'),
                    (e.WebNextResourcesFileInfo = 'WebNextResourcesFileInfo'),
                    (e.WebNextDisableConcertsTab = 'WebNextDisableConcertsTab'),
                    (e.WebNextFooterDisclaimer = 'WebNextFooterDisclaimer'),
                    (e.WebNextYnisonActivityInterception = 'WebNextYnisonActivityInterception'),
                    (e.WebNextYnisonEnabled = 'WebNextYnisonEnabled'),
                    (e.WebNextYnisonRestoreMusicAsVibe = 'WebNextYnisonRestoreMusicAsVibe'),
                    (e.WebNextVibeDescription = 'WebNextVibeDescription'),
                    (e.WebNextVibeTerminated = 'WebNextVibeTerminated'),
                    (e.WebNextConcertsTicketIcon = 'WebNextConcertsTicketIcon'),
                    (e.WebNextConcertPage = 'WebNextConcertPage'),
                    (e.WebNextCrossMediaPlayer = 'WebNextCrossMediaPlayer'),
                    (e.WebNextConcertTabOnboarding = 'WebNextConcertTabOnboarding'),
                    (e.WebNextPlusOptionsMarketplace = 'WebNextPlusOptionsMarketplace'),
                    (e.WebNextMarketLanding = 'WebNextMarketLanding'),
                    (e.ABTestIds = 'ABTestIds'),
                    (e.WebNextWaveAgentExperiment = 'WebNextWaveAgentExperiment'),
                    (e.WebNextUlitochka = 'WebNextUlitochka'),
                    (e.WebNextPromoLandingLayout = 'WebNextPromoLandingLayout'),
                    (e.WebNextToggleFavouritePlaylistVisibility = 'WebNextToggleFavouritePlaylistVisibility'),
                    (e.WebNextBrandedPlaylistsAxe = 'WebNextBrandedPlaylistsAxe'),
                    (e.WebNextNavbarExplicit = 'WebNextNavbarExplicit'),
                    (e.WebNextEnableSendFadeFieldsInPlays = 'WebNextEnableSendFadeFieldsInPlays'),
                    (e.WebNextSlidesPage = 'WebNextSlidesPage'),
                    (e.WebNextSlidesWebview = 'WebNextSlidesWebview'),
                    (e.WebNextYnisonInactiveTimerDesktop = 'WebNextYnisonInactiveTimerDesktop'),
                    (e.WebNextPaywallTopSection = 'WebNextPaywallTopSection'),
                    (e.WebNextPaywallDisclaimer = 'WebNextPaywallDisclaimer'),
                    (e.WebNextSearchConcerts = 'WebNextSearchConcerts'),
                    (e.WebNextConcertsDetailsPage = 'WebNextConcertsDetailsPage'),
                    (e.WebNextYaspSourceLimit = 'WebNextYaspSourceLimit'),
                    (e.WebNextWaveLikesAndShares = 'WebNextWaveLikesAndShares'),
                    // for PulseSync: BEGIN yellow play button experiment ID for mod settings
                    (e.WebNextPlayerBarYellowButton = 'WebNextPlayerBarYellowButton'),
                    // for PulseSync: END yellow play button experiment ID for mod settings
                    (e.WebNextWaveLikesAndSharesNdaLabel = 'WebNextWaveLikesAndSharesNdaLabel'),
                    (e.WebNextNewWaveTab = 'WebNextNewWaveTab'),
                    (e.WebNextWavePauseState = 'WebNextWavePauseState'),
                    (e.WebNextNewWaveEntryPoint = 'WebNextNewWaveEntryPoint'),
                    (e.WebNextMainPlayerAnimation = 'WebNextMainPlayerAnimation'),
                    (e.WebNextPlayerTimecodeTooltip = 'WebNextPlayerTimecodeTooltip'),
                    (e.WebNextNewWaveTabFeedbackForm = 'WebNextNewWaveTabFeedbackForm'),
                    (e.WebNextNdaLabelOnWaveTab = 'WebNextNdaLabelOnWaveTab'),
                    (e.WebNextPaidPerformancePaywallTopSection = 'WebNextPaidPerformancePaywallTopSection'),
                    (e.WebNextConcertsIdentityEventType = 'WebNextConcertsIdentityEventType'),
                    (e.WebNextWaveScreenWordsInWave = 'WebNextWaveScreenWordsInWave'),
                    (e.WebNextWaveScreenWordsInWaveBigReplica = 'WebNextWaveScreenWordsInWaveBigReplica'),
                    (e.WebNextReplicsLumenUI = 'WebNextReplicsLumenUI'),
                    (e.WebNextReplicsLumenOption = 'WebNextReplicsLumenOption'),
                    (e.WebNextWaveScreenWordsInWaveDirectLinks = 'WebNextWaveScreenWordsInWaveDirectLinks'),
                    (e.WebNextEnableSkipDebounce = 'WebNextEnableSkipDebounce'),
                    (e.WebNextYaspVersion15267 = 'WebNextYaspVersion15267'),
                    (e.WebNextQueryToVibe = 'WebNextQueryToVibe'),
                    (e.WebNextQueryToVibeXLumen = 'WebNextQueryToVibeXLumen'),
                    (e.WebNextQueryToVibeLumenOptionCheck = 'WebNextQueryToVibeLumenOptionCheck'),
                    (e.WebNextErrorAutoSkip = 'WebNextErrorAutoSkip'),
                    (e.WebNextConcertsLocation = 'WebNextConcertsLocation'),
                    (e.WebNextConcertsLocationAll = 'WebNextConcertsLocationAll'),
                    (e.WebNextDesktopWebFreemium = 'WebNextDesktopWebFreemium'),
                    (e.WebNextBatchFeedbacksOnVibeSettingsChange = 'WebNextBatchFeedbacksOnVibeSettingsChange'),
                    (e.WebNextSendRadioStartedOnVibeSettingsChange = 'WebNextSendRadioStartedOnVibeSettingsChange'),
                    (e.WebNextRadioStartedOnSessionCreation = 'WebNextRadioStartedOnSessionCreation'),
                    (e.WebNextStoreDeferredVibeFeedbacks = 'WebNextStoreDeferredVibeFeedbacks'),
                    (e.WebNextDeleteDeferredVibeFeedbacksStore = 'WebNextDeleteDeferredVibeFeedbacksStore'),
                    (e.WebNextYnisonNetworkMonitoring = 'WebNextYnisonNetworkMonitoring'),
                    (e.WebNextYnisonNewConnector = 'WebNextYnisonNewConnector'),
                    (e.WebNextCorrectRotorQueueParam = 'WebNextCorrectRotorQueueParam'),
                    (e.WebNextNewWaveWizard = 'WebNextNewWaveWizard'),
                    (e.WebNextWizard3 = 'WebNextWizard3'),
                    (e.WebNextTrackModalCloseOnNavigate = 'WebNextTrackModalCloseOnNavigate'),
                    (e.WebNextEnableSendOriginalContextInVibePlays = 'WebNextEnableSendOriginalContextInVibePlays'),
                    (e.WebNextWaveForTwo = 'WebNextWaveForTwo'),
                    (e.WebNextTrackComplaintForm = 'WebNextTrackComplaintForm'),
                    (e.WebNextLandingSdk = 'WebNextLandingSdk'),
                    (e.WebNextYnisonUseConnectionType = 'WebNextYnisonUseConnectionType'),
                    (e.WebNextWaveForTwoOnboarding = 'WebNextWaveForTwoOnboarding'),
                    (e.WebNextAIContentReductionSetting = 'WebNextAIContentReductionSetting'),
                    (e.WebNextQueryToVibeInputAnimation = 'WebNextQueryToVibeInputAnimation'),
                    (e.WebNextSendVibeFeedbacksWithTracks = 'WebNextSendVibeFeedbacksWithTracks'),
                    (e.WebNextArtistRecommendationsAutoScroll = 'WebNextArtistRecommendationsAutoScroll'),
                    (e.WebNextOtelTechMetrics = 'WebNextOtelTechMetrics'),
                    (e.WebNextMainPlayerTitle = 'WebNextMainPlayerTitle'),
                    (e.WebNextUnstableMusicScreen = 'WebNextUnstableMusicScreen'),
                    (e.WebNextLumenCollectionEntryPoint = 'WebNextLumenCollectionEntryPoint'),
                    (e.WebNextWebView = 'WebNextWebView'),
                    e
                );
            })({});
        },
        98427: (e, t, n) => {
            'use strict';
            n.d(t, { b: () => i });
            var i = (function (e) {
                return (
                    (e.ALBUM = 'album'),
                    (e.PLAYLIST = 'playlist'),
                    (e.ARTIST = 'artist'),
                    (e.ARTIST_TRACKS = 'artist_tracks'),
                    (e.ARTIST_SIMILAR = 'artist_similar'),
                    (e.ARTIST_ALBUMS = 'artist_albums'),
                    (e.ARTIST_DISCOGRAPHY = 'artist_discography'),
                    (e.ARTIST_COMPILATIONS = 'artist_compilations'),
                    (e.ARTIST_CONCERTS = 'artist_concerts_screen'),
                    (e.ARTIST_CLIPS = 'artist_clips'),
                    (e.CHART = 'chart'),
                    (e.CHART_PODCASTS = 'chart_podcasts'),
                    (e.CHART_PODCASTS_CATEGORY = 'chart_podcasts_category'),
                    (e.HOME = 'home'),
                    (e.SEARCH = 'search'),
                    (e.SIDEBAR = 'sidebar'),
                    (e.OWN_COLLECTION = 'own_collection'),
                    (e.OWN_ALBUMS = 'own_albums'),
                    (e.OWN_DISLIKES = 'own_dislikes'),
                    (e.OWN_PODCASTS = 'own_podcasts'),
                    (e.OWN_ARTISTS = 'own_artists'),
                    (e.OWN_PLAYLISTS = 'own_playlists'),
                    (e.OWN_TRACKS = 'own_tracks'),
                    (e.OWN_CLIPS = 'own_clips'),
                    (e.RADIO = 'radio'),
                    (e.GENRE = 'genre'),
                    (e.GENRE_ALBUMS = 'genre_albums'),
                    (e.GENRE_ARTISTS = 'genre_artists'),
                    (e.GENRE_PLAYLISTS = 'genre_playlists'),
                    (e.TAG = 'tag'),
                    (e.POST = 'post'),
                    (e.HISTORY = 'history'),
                    (e.FAMILIAR_YOU = 'familiar_you'),
                    (e.PODCAST = 'podcast'),
                    (e.AUDIOBOOK = 'audiobook'),
                    (e.NON_MUSIC = 'non_music'),
                    (e.NON_MUSIC_CATEGORY_PLAYLISTS = 'non_music_category_playlists'),
                    (e.NON_MUSIC_ALBUMS = 'non_music_albums'),
                    (e.LANDING = 'landing'),
                    (e.ENTITIES = 'entities'),
                    (e.TRAILER = 'trailer'),
                    (e.TRACK = 'track'),
                    (e.TRACK_SCREEN = 'track_screen'),
                    (e.PLAYER = 'player'),
                    (e.KIDS = 'kids'),
                    (e.KIDS_EDITORIAL_PLAYLISTS = 'kids_editorial_playlists'),
                    (e.KIDS_EDITORIAL_ALBUMS = 'kids_editorial_albums'),
                    (e.DOWNLOADS_TRACKS = 'downloads_tracks'),
                    (e.TRAILER_OF_THE_YEAR = 'trailer_of_the_year'),
                    (e.COLLECTION_KIDS = 'collection_kids'),
                    (e.COLLECTION_KIDS_ALBUMS = 'collection_kids_albums'),
                    (e.COLLECTION_KIDS_PLAYLISTS = 'collection_kids_playlists'),
                    (e.COLLECTION_KIDS_TRACKS = 'collection_kids_tracks'),
                    (e.COLLECTION_VIBE_ROOMS = 'multivibe_screen'),
                    (e.VIDEO_PLAYER = 'video_player'),
                    (e.LABEL = 'label'),
                    (e.LABEL_ALBUMS = 'label_albums'),
                    (e.LABEL_ARTISTS = 'label_artists'),
                    (e.PAYWALL = 'paywall'),
                    (e.CONCERTS = 'concerts'),
                    (e.CONCERT_LOCATION_SELECTOR = 'concert_location_selector'),
                    (e.PROMOLANDING_ALBUM = 'promolanding_album'),
                    (e.CONCERT = 'concert_screen'),
                    (e.PAGE_NOT_FOUND_SCREEN = 'page_not_found_screen'),
                    (e.SLIDES_SCREEN = 'slides_screen'),
                    (e.WAVE_LANDING_SCREEN = 'wave_landing_screen'),
                    (e.FACT_SCREEN = 'fact_screen'),
                    (e.LUMEN_FACT_SCREEN = 'lumen_fact_screen'),
                    (e.LUMEN_AWAKENING_SCREEN = 'lumen_awakening_screen'),
                    (e.MULTIVIBE_SENDING_INVITATION_SCREEN = 'multivibe_sending_invitation_screen'),
                    (e.MULTIVIBE_ACTION_SCREEN = 'multivibe_action_screen'),
                    (e.MULTIVIBE_LIMIT_SCREEN = 'multivibe_limit_screen'),
                    (e.MULTIVIBE_UNIFIED_SCREEN = 'multivibe_unified_screen'),
                    e
                );
            })({});
        },
    },
    (e) => {
        (e.O(0, [9904, 4292, 6050, 6706, 4771, 2662, 6904, 1898, 2058, 3578, 8628, 4378, 4732, 9087, 3979, 6719, 763, 2670, 7358], () => e((e.s = 79432))),
            (_N_E = e.O()));
    },
]);
