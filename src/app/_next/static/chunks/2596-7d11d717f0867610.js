(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2596],
    {
        4370: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => s });
            var i = n(67174);
            let s = {
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
        15947: (e, t, n) => {
            'use strict';
            n.d(t, { U: () => c });
            var i = n(35412),
                s = n(28166),
                l = n(97261);
            let o = [i.cy.HTTP, i.cy.HTTPS, i.cy.MAILTO, i.cy.TEL, s.Lz],
                c = (e, t, n) => {
                    let c;
                    try {
                        c = new URL(t);
                    } catch (e) {
                        return null;
                    }
                    let a = (0, i.Rj)(e, { allowedProtocols: new Set([...o, c.protocol]), baseUrl: c.href });
                    return a.isAllowed
                        ? a.url.protocol === s.Lz
                            ? { type: l.I.DEEPLINK, href: e }
                            : '_blank' !== n && ((e, t) => e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port)(a.url, c)
                              ? { type: l.I.INTERNAL, href: e }
                              : { type: l.I.EXTERNAL, href: e }
                        : null;
                };
        },
        28166: (e, t, n) => {
            'use strict';
            n.d(t, { Lz: () => i, ov: () => s });
            let i = ''.concat('yandexmusic', ':'),
                s = ''.concat(i, '//');
        },
        32596: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => A });
            var i = n(88800),
                s = n(65724),
                l = n(84961),
                o = n(53548),
                c = n(2058),
                a = n(88969);
            n(30282);
            var r = n(96817),
                u = n(52300),
                d = n(29504),
                m = n(97234),
                p = n(59714),
                _ = n(43054),
                h = n(18117),
                g = n(93940),
                y = n(24709);
            let b = (0, y.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, _.s)()) ? void 0 : e.evgenInstance,
                        { hash: n } = (0, h.g)(),
                        { screen: i } = (0, g.j)();
                    return {
                        sendRefreshEvent: (0, o.useCallback)(() => {
                            if (!t || !n || !(null == i ? void 0 : i.pageId)) return;
                            let e = {
                                actionType: m.ActionType.Refresh,
                                userInteractionType: m.UserInteractionType.Tap,
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                hash: n,
                                pageId: i.pageId,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, p.bv)(t, e);
                        }, [t, n, null == i ? void 0 : i.pageId]),
                    };
                }),
                k = (0, y.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let n = null == (t = (0, _.s)()) ? void 0 : t.evgenInstance,
                        { hash: i } = (0, h.g)(),
                        { screen: s } = (0, g.j)();
                    (0, o.useEffect)(() => {
                        if (!n || !i || !(null == s ? void 0 : s.pageId)) return;
                        let t = {
                            entityType: m.EntityTypes.Error,
                            entityId: m.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: i,
                            pageId: s.pageId,
                            pageStyle: m.PageStyles.Fullscreen,
                            pagePlacement: m.PagePlacements.Fullscreen,
                            mainObjectType: m.DomainObjectType.NonApplicable,
                            mainObjectId: m.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, p.z5)(n, t);
                    }, [n, e, i, null == s ? void 0 : s.pageId]);
                });
            var v = n(44230),
                x = n(4370),
                S = n(72288),
                N = n(97956),
                f = n(56248),
                j = n(90688),
                w = n(78940);
            let T = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var E = n(96856),
                I = n.n(E);
            let W = (0, l.PA)((e) => {
                let { className: t, withBackwardControl: n = !0, onBack: l } = e,
                    { slam: o } = (0, S.g)(),
                    { contentRef: c } = (0, v.g)(),
                    u = (0, w.Z)(x.Z.mymusicDownloadsTracks.href);
                return (0, i.jsxs)('div', {
                    className: (0, s.$)(I().root, t),
                    children: [
                        n &&
                            (0, i.jsx)(f.L, {
                                withBackwardFallback: '/',
                                className: (0, s.$)(I().navigation, { [I().navigation_desktop]: !c }),
                                withForwardControl: !1,
                                onBackwardClick: l,
                            }),
                        (0, i.jsxs)('div', {
                            className: (0, s.$)(I().content, { [I().content_shrink]: !n }),
                            children: [
                                (0, i.jsx)(j._V, { className: I().image, src: T.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, i.jsxs)('div', {
                                    className: I().message,
                                    children: [
                                        (0, i.jsx)(d.DZ, {
                                            className: I().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, i.jsx)(a.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, i.jsx)(d.HL, {
                                            className: I().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, i.jsx)(a.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                o.hasDownloadedTracks &&
                                    (0, i.jsx)(r.$, {
                                        className: I().button,
                                        onClick: u,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, i.jsx)(d.HL, {
                                            className: I().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, i.jsx)(a.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var L = n(9184),
                P = n.n(L);
            let A = (0, l.PA)((e) => {
                let { className: t, withBackwardControl: n = !0, onBack: l } = e,
                    { formatMessage: m } = (0, c.A)(),
                    p = (0, o.useContext)(S.P),
                    _ = null == p ? void 0 : p.experiments.checkExperiment(N.z.WebNextUnstableMusicScreen, 'on'),
                    h = m(_ ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                k(h);
                let { sendRefreshEvent: g } = b(),
                    y = (0, o.useCallback)(() => {
                        (g(), (window.location.href = x.Z.main.href));
                    }, [g]),
                    { contentRef: j } = (0, v.g)();
                return _
                    ? (0, i.jsx)(W, { className: t, withBackwardControl: n, onBack: l })
                    : (0, i.jsxs)('div', {
                          className: (0, s.$)(P().root, t),
                          children: [
                              n &&
                                  (0, i.jsx)(f.L, {
                                      withBackwardFallback: '/',
                                      className: (0, s.$)(P().navigation, { [P().navigation_desktop]: !j }),
                                      withForwardControl: !1,
                                      onBackwardClick: l,
                                  }),
                              (0, i.jsxs)('div', {
                                  className: (0, s.$)(P().content, { [P().content_shrink]: !n }),
                                  children: [
                                      (0, i.jsx)(u.I, { className: P().icon, variant: 'attention', size: 'xxl' }),
                                      (0, i.jsx)(d.DZ, { className: (0, s.$)(P().title, P().important), variant: 'h3', size: 'xs', children: h }),
                                      (0, i.jsxs)(d.HL, {
                                          className: (0, s.$)(P().text, P().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, i.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, i.jsx)(r.$, {
                                          onClick: y,
                                          className: P().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, i.jsxs)(d.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, i.jsx)(a.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        78940: (e, t, n) => {
            'use strict';
            (n.d(t, { Z: () => a }), n(30282));
            var i = n(58390),
                s = n(29993),
                l = n(67174),
                o = n(15947),
                c = n(97261);
            let a = (e) => {
                let t = (0, i.useRouter)(),
                    { href: n, target: a } = (0, l.u)(e);
                return (0, s.c)((e) => {
                    let i = (0, o.U)(n, window.location.href, a);
                    if (!i) {
                        null == e || e.preventDefault();
                        return;
                    }
                    (null != e && e.metaKey) ||
                        (null != e && e.ctrlKey) ||
                        (null != e && e.shiftKey) ||
                        (i.type === c.I.EXTERNAL || i.type === c.I.DEEPLINK
                            ? ((e) => {
                                  let { target: t, rel: n } = (0, l.u)(e, { options: { isExternalLink: !0 } });
                                  window.open(e, t, n);
                              })(i.href)
                            : t.push(i.href));
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
        97261: (e, t, n) => {
            'use strict';
            n.d(t, { I: () => i });
            var i = (function (e) {
                return ((e.INTERNAL = 'internal'), (e.EXTERNAL = 'external'), (e.DEEPLINK = 'deeplink'), e);
            })({});
        },
    },
]);
