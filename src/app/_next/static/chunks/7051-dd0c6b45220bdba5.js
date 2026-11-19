(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6363, 7051],
    {
        7628: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => m });
            var i = s(88800),
                a = s(88969),
                n = s(58390),
                r = s(17392),
                o = s(29993),
                l = s(96817),
                c = s(29504),
                d = s(99890),
                u = s(4086),
                _ = s(41928);
            let m = (e) => {
                let { size: t = 'm', variant: s = 'default', color: m = 'primary', withRipple: h = !0, buttonText: p, isBlock: v, key: x, className: g } = e,
                    b = (0, n.useRouter)(),
                    k = (0, _.N)().get(u.QG),
                    y = (0, o.c)(() => {
                        k.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), b.push(k.authorizationUrl));
                    });
                return (0, i.jsx)(
                    l.$,
                    {
                        onClick: y,
                        className: g,
                        isBlock: v,
                        color: m,
                        variant: s,
                        size: t,
                        radius: 'xxxl',
                        withRipple: h,
                        'data-test-id': r.S7.UNAUTHORIZED_BUTTON,
                        children: p || (0, i.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(a.A, { id: 'authorization.enter-button' }) }),
                    },
                    x,
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
            s.d(t, { SomethingWentWrong: () => L });
            var i = s(88800),
                a = s(65724),
                n = s(84961),
                r = s(53548),
                o = s(2058),
                l = s(88969);
            s(30282);
            var c = s(96817),
                d = s(52300),
                u = s(29504),
                _ = s(97234),
                m = s(59714),
                h = s(43054),
                p = s(18117),
                v = s(93940),
                x = s(24709);
            let g = (0, x.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, h.s)()) ? void 0 : e.evgenInstance,
                        { hash: s } = (0, p.g)(),
                        { screen: i } = (0, v.j)();
                    return {
                        sendRefreshEvent: (0, r.useCallback)(() => {
                            if (!t || !s || !(null == i ? void 0 : i.pageId)) return;
                            let e = {
                                actionType: _.ActionType.Refresh,
                                userInteractionType: _.UserInteractionType.Tap,
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                hash: s,
                                pageId: i.pageId,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, m.bv)(t, e);
                        }, [t, s, null == i ? void 0 : i.pageId]),
                    };
                }),
                b = (0, x.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let s = null == (t = (0, h.s)()) ? void 0 : t.evgenInstance,
                        { hash: i } = (0, p.g)(),
                        { screen: a } = (0, v.j)();
                    (0, r.useEffect)(() => {
                        if (!s || !i || !(null == a ? void 0 : a.pageId)) return;
                        let t = {
                            entityType: _.EntityTypes.Error,
                            entityId: _.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: i,
                            pageId: a.pageId,
                            pageStyle: _.PageStyles.Fullscreen,
                            pagePlacement: _.PagePlacements.Fullscreen,
                            mainObjectType: _.DomainObjectType.NonApplicable,
                            mainObjectId: _.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, m.z5)(s, t);
                    }, [s, e, i, null == a ? void 0 : a.pageId]);
                });
            var k = s(44230),
                y = s(4370),
                C = s(72288),
                N = s(97956),
                T = s(56248),
                j = s(90688),
                E = s(78940);
            let A = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var I = s(96856),
                f = s.n(I);
            let S = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: s = !0, onBack: n } = e,
                    { slam: r } = (0, C.g)(),
                    { contentRef: o } = (0, k.g)(),
                    d = (0, E.Z)(y.Z.mymusicDownloadsTracks.href);
                return (0, i.jsxs)('div', {
                    className: (0, a.$)(f().root, t),
                    children: [
                        s &&
                            (0, i.jsx)(T.L, {
                                withBackwardFallback: '/',
                                className: (0, a.$)(f().navigation, { [f().navigation_desktop]: !o }),
                                withForwardControl: !1,
                                onBackwardClick: n,
                            }),
                        (0, i.jsxs)('div', {
                            className: (0, a.$)(f().content, { [f().content_shrink]: !s }),
                            children: [
                                (0, i.jsx)(j._V, { className: f().image, src: A.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, i.jsxs)('div', {
                                    className: f().message,
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            className: f().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, i.jsx)(l.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            className: f().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, i.jsx)(l.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                r.hasDownloadedTracks &&
                                    (0, i.jsx)(c.$, {
                                        className: f().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, i.jsx)(u.HL, {
                                            className: f().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, i.jsx)(l.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var M = s(9184),
                w = s.n(M);
            let L = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: s = !0, onBack: n } = e,
                    { formatMessage: _ } = (0, o.A)(),
                    m = (0, r.useContext)(C.P),
                    h = null == m ? void 0 : m.experiments.checkExperiment(N.z.WebNextUnstableMusicScreen, 'on'),
                    p = _(h ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                b(p);
                let { sendRefreshEvent: v } = g(),
                    x = (0, r.useCallback)(() => {
                        (v(), (window.location.href = y.Z.main.href));
                    }, [v]),
                    { contentRef: j } = (0, k.g)();
                return h
                    ? (0, i.jsx)(S, { className: t, withBackwardControl: s, onBack: n })
                    : (0, i.jsxs)('div', {
                          className: (0, a.$)(w().root, t),
                          children: [
                              s &&
                                  (0, i.jsx)(T.L, {
                                      withBackwardFallback: '/',
                                      className: (0, a.$)(w().navigation, { [w().navigation_desktop]: !j }),
                                      withForwardControl: !1,
                                      onBackwardClick: n,
                                  }),
                              (0, i.jsxs)('div', {
                                  className: (0, a.$)(w().content, { [w().content_shrink]: !s }),
                                  children: [
                                      (0, i.jsx)(d.I, { className: w().icon, variant: 'attention', size: 'xxl' }),
                                      (0, i.jsx)(u.DZ, { className: (0, a.$)(w().title, w().important), variant: 'h3', size: 'xs', children: p }),
                                      (0, i.jsxs)(u.HL, {
                                          className: (0, a.$)(w().text, w().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, i.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, i.jsx)(c.$, {
                                          onClick: x,
                                          className: w().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, i.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, i.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        33932: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'ControlsBar_root__hZQ_Z',
                item: 'ControlsBar_item__Y7iTC',
                item_buttonArrow: 'ControlsBar_item_buttonArrow__y_Ku0',
                controls: 'ControlsBar_controls__yRO8t',
                trailerIcon: 'ControlsBar_trailerIcon__areYT',
                controls_disabled: 'ControlsBar_controls_disabled___S7Rg',
                likeIcon: 'ControlsBar_likeIcon__eJvkI',
            };
        },
        34250: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'EntityMeta_root__Zn4Th',
                root_disabled: 'EntityMeta_root_disabled__u3DaR',
                albumLink: 'EntityMeta_albumLink__vxRG7',
                artistCaption: 'EntityMeta_artistCaption__3JqiO',
                artistLink: 'EntityMeta_artistLink__rMKgI',
                description: 'EntityMeta_description__cSa2I',
                explicitMark: 'EntityMeta_explicitMark__wOyns',
                likesCount: 'EntityMeta_likesCount__cw2GN',
                subtitle: 'EntityMeta_subtitle__yE1NK',
                title: 'EntityMeta_title__6_ChR',
                titleContainer: 'EntityMeta_titleContainer__WMe1r',
                version: 'EntityMeta_version__7Z948',
                root_disliked: 'EntityMeta_root_disliked__PhzHW',
                title_withVersion: 'EntityMeta_title_withVersion__rbXWv',
                text: 'EntityMeta_text___lB4k',
                icon: 'EntityMeta_icon__tTxs3',
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
        46811: (e, t, s) => {
            'use strict';
            s.d(t, { M: () => P });
            var i = s(88800),
                a = s(65724),
                n = s(84961),
                r = s(53548),
                o = s(97234),
                l = s(91177),
                c = s(46482),
                d = s(70598),
                u = s(17392),
                _ = s(18593),
                m = s(29993),
                h = s(79070),
                p = s(52073),
                v = s(29504),
                x = s(60757),
                g = s(29008),
                b = s(13946),
                k = s(5407),
                y = s(84384),
                C = s(4795),
                N = s(78940),
                T = s(55693),
                j = s(39079),
                E = s(72288),
                A = s(62270),
                I = s.n(A),
                f = s(76816),
                S = s(8990),
                M = s(91292),
                w = s(39267),
                L = s(52300),
                q = s(92966),
                z = s(57934),
                R = s(49738),
                H = s(56446),
                U = s(64546),
                W = s(33932),
                B = s.n(W);
            let D = (0, n.PA)((e) => {
                    var t;
                    let { className: s, album: n, likeIconSize: l = 'xxs' } = e,
                        { user: c, trailer: d } = (0, E.g)(),
                        u = (0, k.P)(),
                        { sendLikeSearchFeedback: _ } = (0, T.z)(),
                        h = (0, q.K)(n),
                        [p, v] = (0, r.useState)(!1),
                        x = (0, m.c)(async () => {
                            (p || n.isLiked || (v(!0), null == _ || _()), await h());
                        }),
                        g = (0, z.F)(),
                        b = (0, m.c)((e) => {
                            if ((e.stopPropagation(), u())) return void e.preventDefault();
                            (d.openAlbumTrailer(n.id), g(o.DomainObjectType.Album, String(n.id)));
                        });
                    return (0, i.jsxs)('div', {
                        className: (0, a.$)(B().root, B().controls, s, { [B().controls_disabled]: !n.isAvailable }),
                        children: [
                            n.isAvailable &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(U.WithOffline, {
                                            fallback: (0, i.jsx)(R.c, {
                                                size: 'xs',
                                                iconSize: l,
                                                className: (0, a.$)(B().item, B().likeIcon),
                                                isLiked: n.isLiked,
                                                onClick: x,
                                                disabled: !c.isAuthorized,
                                            }),
                                        }),
                                        (null == (t = n.trailer) ? void 0 : t.isAvailable) &&
                                            (0, i.jsx)(U.WithOffline, {
                                                fallback: (0, i.jsx)(H.k, {
                                                    className: (0, a.$)(B().item, B().trailerIcon),
                                                    iconSize: 'xs',
                                                    variant: 'text',
                                                    onClick: b,
                                                    withRipple: !1,
                                                }),
                                            }),
                                    ],
                                }),
                            (0, i.jsx)('div', {
                                className: (0, a.$)(B().item, B().item_buttonArrow),
                                children: (0, i.jsx)(L.I, { className: I().buttonArrow, variant: 'arrowRight', size: 'xs' }),
                            }),
                        ],
                    });
                }),
                P = (0, n.PA)((e) => {
                    let { className: t, album: s, pageId: n, coverClassName: A, playButtonIconSize: L, likeIconSize: q, shouldShowReleaseYear: z, description: R } = e,
                        H = (0, g.r)(s.type),
                        U = (0, l.D)(),
                        { from: W } = (0, y.f)({ pageId: n }),
                        [B, P] = (0, r.useState)(!1),
                        O = (0, c.g)(),
                        Y = (0, N.Z)(s.url),
                        $ = (0, k.P)(),
                        { sendNavigateSearchFeedback: Z, sendPlaySearchFeedback: V } = (0, T.z)(),
                        F = (0, d.S)(),
                        {
                            paywall: { modal: K },
                        } = (0, E.g)(),
                        G = (0, C.N)(),
                        {
                            isPlaying: J,
                            isCurrent: Q,
                            togglePlay: X,
                        } = (0, j.D)({ playContextParams: { contextData: { type: _.K.Album, meta: { id: s.id }, from: W }, loadContextMeta: !0 } }),
                        ee = (0, x.c)({ album: s, callback: Y }),
                        et = (0, x.c)({ album: s, callback: X }),
                        es = (0, m.c)((e) => {
                            (null == Z || Z(), F({ to: o.AppScreen.AlbumScreen }), ee(e));
                        }),
                        ei = (0, m.c)(() => {
                            if (!$()) {
                                if (G) return void K.open();
                                (B || J || (P(!0), null == V || V()), et(), J || O());
                            }
                        }),
                        ea = (0, m.c)((e) => {
                            ((0, p.P)(e, I().ripple), es(e));
                        }),
                        en = (0, m.c)((e) => {
                            (e.stopPropagation(), es(e));
                        }),
                        er = (0, r.useCallback)(
                            (e) =>
                                (0, i.jsx)(w.q, {
                                    isAvailable: s.isAvailable,
                                    isDisliked: !1,
                                    coverUri: s.coverUri,
                                    title: s.title,
                                    className: (0, a.$)(I().playButtonCell, A),
                                    alt: ''.concat(H, ' ').concat(s.title),
                                    radius: 'xs',
                                    ...e,
                                }),
                            [s.coverUri, s.isAvailable, s.title, A, H],
                        ),
                        eo = null == er ? void 0 : er({ onPlayButtonClick: ei, isPlaying: J, isCurrent: Q, playButtonIconSize: L }),
                        el = (0, r.useMemo)(
                            () =>
                                s.url && s.isAvailable
                                    ? (0, i.jsx)(M.N, { className: (0, a.$)(I().text, I().titleLink), href: s.url, onClick: en, children: s.title })
                                    : (0, i.jsx)(v.HL, { className: (0, a.$)(I().text, I().titleText), size: 'm', variant: 'div', type: 'text', children: s.title }),
                            [s.isAvailable, s.title, s.url, en],
                        ),
                        ec = (0, r.useCallback)(
                            (e, t) => {
                                var a;
                                return (null == (a = s.artists) ? void 0 : a.length)
                                    ? (0, i.jsx)(b.i, { linkClassName: e, captionClassName: t, artists: s.artists, lineClamp: 1, withLink: s.isAvailable })
                                    : null;
                            },
                            [s.artists, s.isAvailable],
                        ),
                        ed = (0, h.L)(() => [s.artistNames, s.title, s.version].filter(Boolean).join(' '));
                    return (0, i.jsxs)(S.C, {
                        ref: U,
                        className: (0, a.$)(I().root, { [I().root_disabled]: !s.isAvailable }, t),
                        'aria-label': ed,
                        onClick: ea,
                        'data-test-id': u.Kq.album.HORIZONTAL_ALBUM_CARD,
                        children: [
                            eo,
                            (0, i.jsx)(f.r, {
                                isDisabled: !s.isAvailable,
                                version: s.version,
                                title: el,
                                artistsComponent: ec,
                                getDescriptionTexts: s.getDescriptionTexts,
                                explicitMarkVariant: s.explicitDisclaimer,
                                likesCount: s.isNonMusic ? s.actualLikesCount : void 0,
                                isLiked: s.isNonMusic ? s.isLiked : void 0,
                                releaseYear: s.isNonMusic && z ? s.year : void 0,
                                description: R,
                            }),
                            (0, i.jsx)(D, { className: I().controlsBar, album: s, likeIconSize: q }),
                        ],
                    });
                });
        },
        57328: (e, t, s) => {
            'use strict';
            s.d(t, { WithAuth: () => p });
            var i = s(88800),
                a = s(84961),
                n = s(58390),
                r = s(65724),
                o = s(88969),
                l = s(29504),
                c = s(7628),
                d = s(42674),
                u = s.n(d);
            let _ = (0, a.PA)(() =>
                (0, i.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, i.jsx)(l.DZ, {
                            className: (0, r.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, i.jsx)(o.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, i.jsx)(l.HL, {
                            className: (0, r.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, i.jsx)(o.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, i.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = s(4370),
                h = s(72288);
            let p = (0, a.PA)((e) => {
                let { children: t, withRedirectToMainPage: s } = e,
                    { user: a } = (0, h.g)();
                return a.isAuthorized ? t : (s && (0, n.redirect)(m.Z.main.href), (0, i.jsx)(_, {}));
            });
        },
        62270: (e) => {
            e.exports = {
                buttonArrow: 'EntityCard_buttonArrow__ussa7',
                titleLink: 'EntityCard_titleLink__3ucPa',
                titleText: 'EntityCard_titleText___EU9t',
                root: 'EntityCard_root__HNsWx',
                root_disabled: 'EntityCard_root_disabled__qdBaH',
                ripple: 'EntityCard_ripple__iMHNo',
                playButtonCell: 'EntityCard_playButtonCell__AYoR5',
                controlsBarCell: 'EntityCard_controlsBarCell__GpbEX',
                text: 'EntityCard_text__hChwj',
            };
        },
        66363: (e, t, s) => {
            'use strict';
            s.d(t, { NS: () => n, Nh: () => a, xW: () => r });
            var i = s(9519);
            let a = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
            class n {
                getHeaders(e) {
                    return e instanceof Headers ? Object.fromEntries(e.entries()) : e;
                }
                getUrl(e) {
                    return new URL(e || 'https://unknown');
                }
                constructor(e) {
                    ((0, i._)(this, 'logger', void 0),
                        (0, i._)(this, 'beforeRequestHook', (e) => {
                            let t = this.getUrl(e.url);
                            this.logger.info('[Resource] Request started '.concat(e.method, ' ').concat(t.origin, ' ').concat(t.pathname).concat(t.search), {
                                request: { method: e.method, url: e.url, headers: this.getHeaders(e.headers), body: e.json },
                            });
                        }),
                        (0, i._)(this, 'beforeRetryHook', (e, t) => {
                            let s = e.cause;
                            if (a(s)) {
                                var i, n, r, o, l, c, d, u, _, m, h, p, v, x;
                                let a = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (i = s.request) ? void 0 : i.method) || (null == (n = s.options) ? void 0 : n.method),
                                        url: (null == (r = s.request) ? void 0 : r.url) || (null == (o = s.options) ? void 0 : o.url),
                                        headers: this.getHeaders((null == (l = s.request) ? void 0 : l.headers) || (null == (c = s.options) ? void 0 : c.headers)),
                                        body: (null == (d = s.request) ? void 0 : d.json) || (null == (u = s.options) ? void 0 : u.json),
                                        retries: t,
                                    },
                                };
                                void 0 !== s.response &&
                                    (a.response = {
                                        statusCode: s.response.statusCode,
                                        headers: this.getHeaders(s.response.headers),
                                        time: null == (x = s.response.timings) || null == (v = x.phases) ? void 0 : v.total,
                                    });
                                let g = this.getUrl((null == (_ = s.request) ? void 0 : _.url) || (null == (m = s.options) ? void 0 : m.url));
                                this.logger.warn(
                                    '[Resource] Retry request '
                                        .concat((null == (h = s.request) ? void 0 : h.method) || (null == (p = s.options) ? void 0 : p.method), ' ')
                                        .concat(g.origin, ' ')
                                        .concat(g.pathname)
                                        .concat(g.search),
                                    a,
                                );
                            } else
                                this.logger.warn('[Resource] Retry request (unknown)', {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                });
                        }),
                        (0, i._)(this, 'afterResponseHook', (e) => {
                            if ((e.statusCode || e.status) >= 200 && 299 >= (e.statusCode || e.status)) {
                                var t, s;
                                let i = this.getUrl(e.url);
                                this.logger.info(
                                    '[Resource] Request resolved '
                                        .concat(e.statusCode, ' ')
                                        .concat(e.request.method, ' ')
                                        .concat(i.origin, ' ')
                                        .concat(i.pathname)
                                        .concat(i.search),
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
                        (0, i._)(this, 'beforeErrorHook', (e) => {
                            let t = e.cause;
                            if (a(t)) {
                                var s, i, n, r, o, l, c, d, u, _, m, h, p, v;
                                let a = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (s = t.request) ? void 0 : s.method) || (null == (i = t.options) ? void 0 : i.method),
                                        url: (null == (n = t.request) ? void 0 : n.url) || (null == (r = t.options) ? void 0 : r.url),
                                        headers: this.getHeaders((null == (o = t.request) ? void 0 : o.headers) || (null == (l = t.options) ? void 0 : l.headers)),
                                        body: (null == (c = t.request) ? void 0 : c.json) || (null == (d = t.options) ? void 0 : d.json),
                                    },
                                };
                                void 0 !== t.response &&
                                    (a.response = {
                                        statusCode: t.response.statusCode || t.response.status,
                                        headers: this.getHeaders(t.response.headers),
                                        time: null == (v = t.response.timings) || null == (p = v.phases) ? void 0 : p.total,
                                    });
                                let x = this.getUrl((null == (u = t.request) ? void 0 : u.url) || (null == (_ = t.options) ? void 0 : _.url));
                                this.logger.error(
                                    '[Resource] Request failed '
                                        .concat((null == (m = t.request) ? void 0 : m.method) || (null == (h = t.options) ? void 0 : h.method), ' ')
                                        .concat(x.origin, ' ')
                                        .concat(x.pathname)
                                        .concat(x.search, ', reason: ')
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
            (s(35412), s(69629));
            let r = [
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
        70441: (e, t, s) => {
            'use strict';
            s.d(t, { q: () => a });
            var i = s(18593);
            let a = (e, t, s) => {
                let a = { type: i.K.Various, meta: { id: e.id }, from: s || '' };
                return (
                    void 0 !== e.albumId && (a = { type: i.K.Album, meta: { id: e.albumId }, from: s || '' }),
                    { contextData: a, queueParams: { entityId: e.id, index: t }, loadContextMeta: !0 }
                );
            };
        },
        76816: (e, t, s) => {
            'use strict';
            s.d(t, { r: () => m });
            var i = s(88800),
                a = s(65724),
                n = s(2058),
                r = s(17392),
                o = s(79070),
                l = s(52300),
                c = s(29504),
                d = s(90224),
                u = s(34250),
                _ = s.n(u);
            let m = (e) => {
                let {
                        isDisliked: t,
                        isDisabled: s,
                        description: u,
                        getDescriptionTexts: m,
                        explicitMarkVariant: h,
                        className: p,
                        version: v,
                        title: x,
                        artistsComponent: g,
                        likesCount: b,
                        isLiked: k,
                        releaseYear: y,
                        titleLineClamp: C = 1,
                    } = e,
                    { formatMessage: N, formatNumber: T } = (0, n.A)(),
                    j = (0, o.L)(() => {
                        let e = null == g ? void 0 : g((0, a.$)(_().text, _().artistLink), (0, a.$)(_().text, _().artistCaption));
                        if (!e && !b) return;
                        let t = (0, i.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                        return (0, i.jsxs)('div', {
                            className: _().subtitle,
                            'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_SUBTITLE,
                            children: [
                                'number' == typeof b &&
                                    b > 0 &&
                                    (0, i.jsxs)('div', {
                                        className: _().likesCount,
                                        'aria-label': N({ id: 'entity-names.likes-counter' }, { counter: b }),
                                        'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT,
                                        children: [
                                            (0, i.jsx)(l.I, {
                                                className: _().icon,
                                                variant: k ? 'likedVariant' : 'likeVariant',
                                                size: 'xxs',
                                                'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_ICON,
                                            }),
                                            (0, i.jsx)(c.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                weight: 'medium',
                                                'aria-hidden': !0,
                                                'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_TEXT,
                                                children: T(b),
                                            }),
                                        ],
                                    }),
                                !!b && e && t,
                                e,
                                !!y && e && t,
                                (0, i.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', children: y }),
                            ],
                        });
                    });
                return (0, i.jsxs)('div', {
                    className: (0, a.$)(_().root, { [_().root_disabled]: s, [_().root_disliked]: t }, p),
                    'data-test-id': r.S7.ENTITY_CARD_ENTITY_META,
                    children: [
                        (0, i.jsxs)('div', {
                            className: _().titleContainer,
                            children: [
                                (0, i.jsxs)(c.HL, {
                                    className: (0, a.$)(_().text, _().title, { [_().title_withVersion]: v }),
                                    size: 'm',
                                    variant: 'div',
                                    lineClamp: C,
                                    type: 'text',
                                    'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_TITLE,
                                    children: [
                                        x,
                                        v &&
                                            (0, i.jsx)(c.HL, {
                                                className: (0, a.$)(_().text, _().version),
                                                size: 'm',
                                                variant: 'div',
                                                type: 'text',
                                                'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_VERSION,
                                                children: ' '.concat(v),
                                            }),
                                    ],
                                }),
                                h && (0, i.jsx)(d.N, { className: _().explicitMark, getDescriptionTexts: m, variant: h }),
                            ],
                        }),
                        u &&
                            (0, i.jsx)(c.HL, {
                                className: (0, a.$)(_().text, _().description),
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 1,
                                'data-test-id': r.S7.ENTITY_CARD_ENTITY_META_DESCRIPTION,
                                children: u,
                            }),
                        j,
                    ],
                });
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
            s.d(t, { C8: () => n, UC: () => r, dM: () => o, uV: () => l });
            var i = s(89916),
                a = s(66363);
            let n = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                r = (e) => (e.uid ? 'authorized' : 'no-uid'),
                o = (e) => {
                    if (!(e instanceof i.m5) || !(0, a.Nh)(e.cause)) return 'unexpected';
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
                l = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
    },
]);
