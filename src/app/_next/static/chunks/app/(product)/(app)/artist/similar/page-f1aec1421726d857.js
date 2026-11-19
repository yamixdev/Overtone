(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9846],
    {
        324: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => n });
            var a = i(28166);
            function n(e) {
                return {
                    ios: { app_name: e.appName, app_store_id: '520797969', url: ''.concat(a.Lz, '/').concat(e.additional.url) },
                    web: { url: e.additional.fullUrl },
                };
            }
        },
        892: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => K }));
            var a = i(88800),
                n = i(58390),
                s = i(84961),
                r = i(53548),
                l = i(2058),
                o = i(88969),
                c = i(97234),
                d = i(59724),
                u = i(17392),
                m = i(66719),
                h = i(29504),
                p = i(32596),
                g = i(21256),
                x = i(69630),
                v = i(91959),
                f = i(98427),
                _ = i(46422),
                y = i(44230),
                A = i(37670),
                b = i(72288),
                k = i(19998),
                T = i(86790),
                N = i(60266),
                j = i(93317),
                E = i(1698),
                O = i(81685),
                I = i(30144),
                C = i(324),
                S = i(53073),
                L = i(83418),
                R = i(46511),
                w = i(57297),
                D = i(2218),
                P = i(77863),
                M = i(45383),
                U = i(98774);
            async function z(e, t) {
                var i, a, n;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let s = await (0, R.W)(t.locale),
                    r = s({ id: 'metadata.artist-similar-title' }, { artistName: e.artist.name }),
                    l = s({ id: 'metadata.artist-similar-description' }, { artistName: e.artist.name });
                return {
                    robots: (0, U.G)(e.artist),
                    title: r,
                    description: l,
                    openGraph: (0, w.i)({
                        ogTitle: r,
                        ogDescription: l,
                        ogType: 'website',
                        fullUrl: null != (i = t.fullUrl) ? i : '',
                        locale: t.locale,
                        customImage: (0, L.v)({ host: t.host }),
                        siteName: s({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, D.H)({ cardType: P.W.SUMMARY_LARGE_IMAGE, title: r, description: l }),
                    facebook: (0, S.k)(),
                    appLinks: (0, C.X)({
                        additional: { ...t, url: null != (a = t.url) ? a : '', fullUrl: null != (n = t.fullUrl) ? n : '', host: t.host },
                        appName: s({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, M.S)('/artist/:artistId/similar', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var B = i(27342),
                F = i(63512),
                H = i(50385),
                W = i.n(H);
            let G = (0, s.PA)((e) => {
                var t, i, s, C;
                let { artistId: S, preloadedArtist: L, preloadedSimilarArtists: R } = e,
                    { artist: w, disclaimerModalState: D } = (0, b.g)(),
                    { formatMessage: P } = (0, l.A)(),
                    { contentScrollRef: M, setContentScrollRef: U } = (0, y.g)(),
                    H = (0, _.W)(),
                    G = (0, v.S)({ artist: null == (t = w.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                ((0, F.G)(S),
                    (0, r.useEffect)(() => {
                        var e;
                        (null == (e = w.meta) ? void 0 : e.artist.isUnsafeLegal) && G();
                    }, [null == (i = w.meta) ? void 0 : i.artist.isUnsafeLegal, G]),
                    (0, B._)(w, S),
                    (0, r.useEffect)(
                        () => () => {
                            w.similarArtistsSubPage.reset();
                        },
                        [w],
                    ),
                    w.similarArtistsSubPage.isNotFound && (0, n.notFound)(),
                    (0, A.J)(w.similarArtistsSubPage.isResolved));
                let Y = (0, r.useMemo)(() => {
                        if (w.similarArtistsSubPage.isResolved) {
                            var e;
                            return null == (e = w.similarArtistsSubPage.similarArtists)
                                ? void 0
                                : e.map((e) => (0, a.jsx)(g.a, { className: W().item, artist: e, contentLinesCount: 3 }, e.id));
                        }
                        let t = P({ id: 'loading-messages.entity-is-loading' }, { entityName: P({ id: 'entity-names.similar-artists' }) });
                        return (0, a.jsx)(E.e, { isActive: !0, itemClassName: W().item, round: !0, centered: !0, 'aria-label': t });
                    }, [
                        w.similarArtistsSubPage.loadingState,
                        w.similarArtistsSubPage.similarArtists,
                        P,
                        null == (s = w.similarArtistsSubPage.similarArtists) ? void 0 : s.length,
                    ]),
                    K = [];
                return (w.similarArtistsSubPage.isNeededToLoad && K.push(w.similarArtistsSubPage.getData({ artistId: S, preloadedSimilarArtists: R })),
                w.infoLoadingState.isNeededToLoad && K.push(w.getInfo({ artistId: S, preloadedArtist: L })),
                ((e) => {
                    var t;
                    let { fullscreenVideoPlayer: i } = (0, b.g)(),
                        a = null == e || null == (t = e.meta) ? void 0 : t.artist,
                        n = null == e ? void 0 : e.infoLoadingState.isLoading,
                        s = null == e ? void 0 : e.infoLoadingState.isRejected,
                        l = (0, r.useCallback)((e) => (s ? {} : a && !n ? z({ artist: (0, O.E)(a) }, e) : void 0), [a, n, s]);
                    (0, I.C)(i.modal.isOpened ? null : l);
                })(w),
                K.length && (0, r.use)(Promise.allSettled(K)),
                null == (C = w.meta) ? void 0 : C.artist.isLegalRejected)
                    ? (0, a.jsx)(k.M, { modalState: D })
                    : w.isInfoSomethingWentWrong
                      ? (0, a.jsx)(p.SomethingWentWrong, {})
                      : (0, a.jsx)(d.a, {
                            pageId: c.AppScreen.ArtistScreen,
                            pageIdForFrom: f.b.ARTIST_SIMILAR,
                            mainObjectId: S,
                            mainObjectType: c.DomainObjectType.Artist,
                            children: (0, a.jsx)(x.h, {
                                scrollElement: M,
                                outerTitle: P({ id: 'page.artist-similar-header' }, { artistName: w.commonSubPage.artistName }),
                                children: (0, a.jsxs)('div', {
                                    className: W().root,
                                    'data-test-id': u.Xk.artist.ARTIST_SIMILAR_PAGE,
                                    children: [
                                        (0, a.jsx)(j.Y, {
                                            variant: j.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: H.canBack,
                                            children: (0, a.jsx)(h.DZ, {
                                                variant: 'h1',
                                                weight: 'bold',
                                                size: 'xl',
                                                lineClamp: 1,
                                                children: (0, a.jsx)(o.A, { id: 'page.artist-similar-header', values: { artistName: w.commonSubPage.artistName } }),
                                            }),
                                        }),
                                        (0, a.jsxs)(m.N, {
                                            className: W().scrollableContent,
                                            containerClassName: W().container,
                                            ref: U,
                                            children: [
                                                (0, a.jsx)('div', { className: W().content, 'aria-labelledby': 'collection-artists-header', tabIndex: 0, children: Y }),
                                                (0, a.jsx)(N.A, { children: (0, a.jsx)(T.w, { className: W().footer }) }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
            var Y = i(21438);
            let K = () => {
                let e = (0, n.useSearchParams)().get('artistId');
                return ((e && (0, Y.L)(e)) || (0, n.notFound)(), (0, a.jsx)(G, { artistId: e }));
            };
        },
        1220: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { $: () => a }),
                (function (e) {
                    ((e.RU = 'ru'),
                        (e.EN = 'en'),
                        (e.UK = 'uk'),
                        (e.BE = 'be'),
                        (e.KK = 'kk'),
                        (e.HY = 'hy'),
                        (e.AZ = 'az'),
                        (e.KA = 'ka'),
                        (e.HE = 'he'),
                        (e.UZ = 'uz'),
                        (e.TG = 'tg'),
                        (e.TR = 'tr'),
                        (e.JA = 'ja'),
                        (e.ZH = 'zh'),
                        (e.KO = 'ko'),
                        (e.TH = 'th'),
                        (e.ID = 'id'),
                        (e.DE = 'de'),
                        (e.EL = 'el'),
                        (e.RO = 'ro'),
                        (e.MO = 'mo'),
                        (e.AR = 'ar'));
                })(a || (a = {})));
        },
        1698: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => s });
            var a = i(88800),
                n = i(37770);
            let s = (e) => {
                let {
                    isActive: t,
                    itemClassName: i,
                    round: s,
                    centered: r,
                    withInfo: l,
                    count: o = 10,
                    shimmerClassName: c,
                    linesCount: d,
                    'aria-label': u,
                    withSubcover: m,
                } = e;
                return Array.from(Array(o).keys()).map((e) =>
                    (0, a.jsx)(
                        n.V,
                        { isActive: t, linesCount: d, className: i, round: s, centered: r, withInfo: l, withSubcover: m, 'aria-label': u, shimmerClassName: c },
                        e,
                    ),
                );
            };
        },
        1814: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 892));
        },
        2218: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r });
            var a = i(28166),
                n = i(77863);
            let s = '@yandexmusic';
            function r(e) {
                return e.cardType === n.W.SUMMARY_LARGE_IMAGE
                    ? { card: n.W.SUMMARY_LARGE_IMAGE, site: s, title: e.title, description: e.description }
                    : {
                          card: n.W.APP,
                          site: s,
                          title: e.title,
                          app: { id: { iphone: '520797969' }, name: e.appName, url: { iphone: ''.concat(a.Lz, '/').concat(e.url) } },
                      };
            }
        },
        4370: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => n });
            var a = i(67174);
            let n = {
                main: (0, a.u)('/'),
                chart: (0, a.u)('/chart'),
                chartPodcasts: (0, a.u)('/chart/podcasts'),
                collection: (0, a.u)('/collection'),
                collectionAlbums: (0, a.u)('/collection/albums'),
                collectionArtists: (0, a.u)('/collection/artists'),
                collectionClips: (0, a.u)('/collection/clips'),
                collectionDislikes: (0, a.u)('/collection/dislikes'),
                collectionKids: (0, a.u)('/collection/kids'),
                collectionKidsAlbums: (0, a.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, a.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, a.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, a.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, a.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, a.u)('/collection/multivibes'),
                collectionVibes: (0, a.u)('/collection/vibes'),
                collectionPlaylists: (0, a.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, a.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, a.u)('/collection/playlists/liked'),
                collectionShelf: (0, a.u)('/collection/shelf'),
                collectionShelfLiked: (0, a.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, a.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, a.u)('/collection/shelf/recently-played'),
                concerts: (0, a.u)('/concerts'),
                kids: (0, a.u)('/kids'),
                mixes: (0, a.u)('/mixes'),
                musicHistory: (0, a.u)('/music-history'),
                muzmarket: (0, a.u)('/muzmarket'),
                mymusic: (0, a.u)('/mymusic'),
                mymusicDownloadsTracks: (0, a.u)('/mymusic/downloads/tracks'),
                multivibe: (0, a.u)('/multivibe'),
                nonMusic: (0, a.u)('/non-music'),
                pay: (0, a.u)('/pay'),
                userSlides: (0, a.u)('/slides/user'),
                search: (0, a.u)('/search'),
                searchHistory: (0, a.u)('/search/history'),
                settings: (0, a.u)('/settings'),
                video: (0, a.u)('/video'),
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
        12526: (e, t, i) => {
            var a = { './en.json': [46983, 6983], './kk.json': [64042, 4042], './ru.json': [20937, 937], './uz.json': [76707, 6707] };
            function n(e) {
                if (!i.o(a, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = a[e],
                    n = t[0];
                return i.e(t[1]).then(() => i.t(n, 19));
            }
            ((n.keys = () => Object.keys(a)), (n.id = 12526), (e.exports = n));
        },
        14567: (e, t) => {
            (e.exports = function (e, t, a, n) {
                return JSON.stringify(e, i(t, n), a);
            }).getSerialize = i;
            function i(e, t) {
                var i = [],
                    a = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return i[0] === t ? '[Circular ~]' : '[Circular ~.' + a.slice(0, i.indexOf(t)).join('.') + ']';
                        }),
                    function (n, s) {
                        if (i.length > 0) {
                            var r = i.indexOf(this);
                            (~r ? i.splice(r + 1) : i.push(this), ~r ? a.splice(r, 1 / 0, n) : a.push(n), ~i.indexOf(s) && (s = t.call(this, n, s)));
                        } else i.push(s);
                        return null == e ? s : e.call(this, n, s);
                    }
                );
            }
        },
        18130: (e, t, i) => {
            'use strict';
            (i.d(t, { b: () => c }), i(30282));
            var a = i(35412),
                n = i(4086),
                s = i(41928),
                r = i(72131),
                l = (function (e) {
                    return ((e.SOURCE = 'utm_source'), (e.MEDIUM = 'utm_medium'), e);
                })(l || {});
            let o = { utm_source: 'desktop', utm_medium: 'copy_link' },
                c = function (e) {
                    for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++) i[l - 1] = arguments[l];
                    let [c] = i,
                        { params: d } = null != c ? c : {},
                        u = { ...o, ...(null == c ? void 0 : c.query) },
                        m = (0, s.N)().get(n.V4),
                        h = (0, r._)(m.webHost),
                        { href: p } = (0, a.no)(String(e), { params: d, query: u, options: { host: 'https://'.concat(h) } }),
                        { href: g } = (0, a.no)(String(e), { params: d, query: u });
                    return { shareLink: p, pathname: g };
                };
        },
        19998: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => k });
            var a = i(88800),
                n = i(65724),
                s = i(84961),
                r = i(53548),
                l = i(88969),
                o = i(17392),
                c = i(29993),
                d = i(96817),
                u = i(29504),
                m = i(4086),
                h = i(41928),
                p = i(46422),
                g = i(4370),
                x = i(78940),
                v = i(85587),
                f = i(15253),
                _ = i(91292),
                y = i(28806),
                A = i.n(y);
            let b = {
                    [v.n.ALBUM]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [v.n.PODCAST]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [v.n.ARTIST]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [v.n.TRACK]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [v.n.AUDIOBOOK]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [v.n.CLIP]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                k = (0, s.PA)((e) => {
                    var t;
                    let { modalState: i, data: s, onClose: y, className: k } = e,
                        T = null != s ? s : null == i ? void 0 : i.modalData,
                        N = (0, p.W)(),
                        j = (0, x.Z)(g.Z.main.href),
                        E = (0, h.N)().get(m.U2),
                        O = (0, c.c)(() => {
                            if (y) return y();
                            (N.canBack && N.back(), j());
                        }),
                        I = (null == T || null == (t = T.details) ? void 0 : t.url) && T.details.text,
                        C = (0, c.c)(() => {
                            var e;
                            null == i || i.setConfirmUnsafeDisclaimer(!0);
                            let t = E.get(f.c.ExEx),
                                a = new Date(),
                                n = a.setMinutes(a.getMinutes() + 15),
                                s =
                                    null != (e = null == i ? void 0 : i.entityKey)
                                        ? e
                                        : ''.concat(null == i ? void 0 : i.entityType, '_').concat(null == i ? void 0 : i.entityId);
                            (t ? E.set(f.c.ExEx, [...t, s], { expires: new Date(n) }) : E.set(f.c.ExEx, [s], { expires: new Date(n) }),
                                null == y || y(),
                                (null == i ? void 0 : i.onDisclaimerConfirmHandler) && i.onDisclaimerConfirmHandler());
                        }),
                        S = (0, c.c)(() => {
                            ((null == i ? void 0 : i.shouldHistoryBack) ? (null == y || y(), N.canBack && N.back(), j()) : null == y || y(),
                                (null == i ? void 0 : i.onDisclaimerRejectHandler) && i.onDisclaimerRejectHandler());
                        });
                    (0, r.useEffect)(
                        () => () => {
                            null == i || i.reset();
                        },
                        [i],
                    );
                    let L = (0, r.useMemo)(() => {
                            if (T) {
                                var e, t;
                                return (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(u.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, n.$)(A().title, A().text),
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: T.title,
                                        }),
                                        (0, a.jsx)(u.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: A().text,
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: T.description,
                                        }),
                                        I &&
                                            (0, a.jsx)(_.N, {
                                                href: null == (e = T.details) ? void 0 : e.url,
                                                className: A().link,
                                                children: (0, a.jsx)(u.HL, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'normal',
                                                    children: null == (t = T.details) ? void 0 : t.text,
                                                }),
                                            }),
                                    ],
                                });
                            }
                            return null;
                        }, [T, I]),
                        R = (0, r.useMemo)(
                            () =>
                                (null == i ? void 0 : i.type) === v.Z.UNSAFE
                                    ? (0, a.jsxs)('div', {
                                          className: A().buttons,
                                          children: [
                                              (0, a.jsx)(d.$, {
                                                  color: 'primary',
                                                  onClick: S,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: A().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, a.jsx)(l.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, a.jsx)(d.$, {
                                                  color: 'secondary',
                                                  onClick: C,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: A().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: i.entityType && b[i.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)('div', {
                                          className: A().buttons,
                                          children: (0, a.jsx)(d.$, {
                                              color: 'primary',
                                              onClick: O,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: A().button,
                                              'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, a.jsx)(l.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [C, null == i ? void 0 : i.entityType, null == i ? void 0 : i.type, O, S],
                        );
                    return (0, a.jsx)('div', {
                        className: (0, n.$)(A().root, k),
                        'data-test-id': o.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, a.jsxs)('div', { className: A().container, children: [L, R] }),
                    });
                });
        },
        20775: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => n });
            var a = i(62837);
            let n = (e, t) => !e && !!(t && (0, a.Ve)(t, a.Yw.MODAL));
        },
        21256: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => F });
            var a = i(88800),
                n = i(65724),
                s = i(84961),
                r = i(53548),
                l = i(2058),
                o = i(97234),
                c = i(91177),
                d = i(70598),
                u = i(46482),
                m = i(17392),
                h = i(18593),
                p = i(29993),
                g = i(79070),
                x = i(29832),
                v = i(52300),
                f = i(7555),
                _ = i(29504),
                y = i(91959),
                A = i(64207),
                b = i(77455),
                k = i(5407),
                T = i(57934),
                N = i(84384),
                j = i(4795),
                E = i(78940),
                O = i(55693),
                I = i(39079),
                C = i(72288),
                S = i(81877),
                L = i(49738),
                R = i(91292),
                w = i(56862),
                D = i(16704),
                P = i(56446),
                M = i(36207),
                U = i(43161),
                z = i(93434),
                B = i.n(z);
            let F = (0, s.PA)((e) => {
                let { artist: t, className: i, children: s, contentLinesCount: z, topTitleElement: F, bottomTitleElement: H } = e,
                    W = (0, c.D)(),
                    {
                        trailer: G,
                        user: Y,
                        paywall: { modal: K },
                    } = (0, C.g)(),
                    { from: X, utmLink: $ } = (0, N.f)({ contextId: t.id, contextType: h.K.Artist }),
                    { formatMessage: V } = (0, l.A)(),
                    [q, Z] = (0, r.useState)(!1),
                    [J, Q] = (0, r.useState)(!1),
                    [ee, et] = (0, r.useState)(!1),
                    { sendLikeSearchFeedback: ei, sendNavigateSearchFeedback: ea, sendPlaySearchFeedback: en } = (0, O.z)(),
                    es = (0, d.S)(),
                    er = (0, u.g)(),
                    el = (0, A.K)(t),
                    eo = (0, b.A)(t),
                    { id: ec, name: ed, coverUri: eu, isLiked: em } = t,
                    eh = (0, E.Z)(t.url),
                    [ep, eg] = (0, r.useState)(!1),
                    ex = (0, T.F)(),
                    ev = (0, k.P)(),
                    ef = (0, p.c)((e) => {
                        if ((e.stopPropagation(), ev())) return void e.preventDefault();
                        (G.openArtistTrailer(t.id), ex(o.DomainObjectType.Artist, t.id));
                    }),
                    e_ = (0, r.useMemo)(() => {
                        let e = V({ id: 'entity-names.artist-name' }, { artistName: ed }),
                            t = em ? V({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [ed, em, V]),
                    { isPlaying: ey, togglePlay: eA } = (0, I.D)({
                        playContextParams: { contextData: { type: h.K.Artist, meta: { id: Number(ec) }, from: X, utmLink: $ }, loadContextMeta: !0 },
                    }),
                    eb = (0, y.S)({ artist: t, callback: eh }),
                    ek = (0, y.S)({ artist: t, callback: eA }),
                    eT = (0, p.c)((e) => {
                        (null == ea || ea(), es({ to: o.AppScreen.ArtistScreen }), eb(e));
                    }),
                    eN = (0, j.N)(),
                    ej = (0, p.c)(() => {
                        if (!ev()) {
                            if (eN) return void K.open();
                            (q || ey || (Z(!0), null == en || en()), ek(), ey || er());
                        }
                    }),
                    eE = (0, p.c)(() => {
                        (J || em || (Q(!0), null == ei || ei()), el());
                    }),
                    eO = (0, p.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eI = (0, p.c)((e) => {
                        (et(e), eg(e));
                    }),
                    eC = (0, r.useMemo)(
                        () =>
                            (0, a.jsx)(
                                U.g,
                                {
                                    artist: t,
                                    onOpenChange: eI,
                                    open: ee,
                                    onClick: eO,
                                    className: (0, n.$)(B().menuButton, B().control),
                                    size: 's',
                                    icon: (0, a.jsx)(v.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': m.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eO, eI, ee],
                    ),
                    eS = (0, r.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, a.jsx)(
                                M.n,
                                {
                                    children: (0, a.jsx)(P.k, {
                                        className: (0, n.$)(B().trailerButton, B().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: ef,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, ef]),
                    eL = (0, r.useMemo)(
                        () =>
                            (0, a.jsx)(
                                w.O,
                                { onClick: eo, isPinned: t.isPinned, className: (0, n.$)(B().pinButton, B().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, eo],
                    ),
                    eR = (0, g.L)(() => {
                        if (t.isAvailable)
                            return (0, a.jsx)(
                                x.hg,
                                {
                                    isVisible: ee || ep,
                                    className: B().controls,
                                    radius: 'round',
                                    playControl: (0, a.jsx)(
                                        D.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, n.$)(B().playButton, B().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: ej,
                                            isPlaying: ey,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, a.jsx)(
                                        L.c,
                                        {
                                            className: (0, n.$)(B().likeButton, B().control),
                                            isLiked: em,
                                            onClick: eE,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !Y.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eC,
                                    pinControl: eL,
                                    trailerControl: eS,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    ew = (0, r.useMemo)(
                        () =>
                            (0, a.jsx)(f.t, {
                                className: B().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': m.Kq.artist.ARTIST_CARD,
                                children: (0, a.jsxs)('div', {
                                    className: B().coverBlock,
                                    onClick: eT,
                                    children: [
                                        (0, a.jsx)(S.B, {
                                            className: B().image,
                                            src: eu,
                                            size: 200,
                                            fit: 'cover',
                                            alt: e_,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eR,
                                    ],
                                }),
                            }),
                        [eT, eu, e_, t.isAvailable, eR],
                    );
                return (0, a.jsx)(x.MN, {
                    ref: W,
                    className: (0, n.$)(B().root, i),
                    textPosition: 'center',
                    'aria-label': e_,
                    title: (0, a.jsxs)(a.Fragment, {
                        children: [
                            F,
                            (0, a.jsx)(_.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, a.jsx)(R.N, {
                                    className: B().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': e_,
                                    onClick: eT,
                                    'data-test-id': m.Kq.artist.ARTIST_TITLE,
                                    children: ed,
                                }),
                            }),
                            H,
                        ],
                    }),
                    srTitle: (0, a.jsx)(R.N, { className: B().srTitleLink, href: t.url, onClick: eT, children: e_ }),
                    contentLinesCount: z,
                    view: ew,
                    'data-test-id': m.Kq.artist.ARTIST_ITEM,
                    children: s,
                });
            });
        },
        21424: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => a });
            let a = (e, t) => (e.langs.includes(t) ? t : e.defaultLang);
        },
        21438: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => n });
            let a = /^(0|[1-9]\d*)$/;
            function n(e) {
                return void 0 !== e && !(e.length > 40) && a.test(e);
            }
        },
        23877: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { Q: () => n, c: () => a }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(a || (a = {})));
            let n = { [a.ERROR]: 'error', [a.WARNING]: 'warn', [a.INFO]: 'info', [a.DEBUG]: 'debug', [a.TRACE]: 'trace' };
        },
        27342: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => n });
            var a = i(53548);
            let n = (e, t) => {
                (0, a.useEffect)(
                    () => () => {
                        window.location.pathname.includes(e.selfLink) || e.reset();
                    },
                    [e, t],
                );
            };
        },
        28806: (e) => {
            e.exports = {
                root: 'Disclaimer_root__ciLA2',
                container: 'Disclaimer_container__cB_wK',
                title: 'Disclaimer_title__I5hOj',
                text: 'Disclaimer_text__2Yo3R',
                link: 'Disclaimer_link__4UMOz',
                buttons: 'Disclaimer_buttons__mpL9o',
                button: 'Disclaimer_button__qIuMB',
                shimmer: 'Disclaimer_shimmer__Bg0HE',
            };
        },
        29201: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => n });
            var a = i(35396);
            let n = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, a.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        30144: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => p });
            var a = i(53548),
                n = i(58390),
                s = i(51611),
                r = i(65523);
            let l = {
                other: {
                    'apple-mobile-web-app-capable': 'yes',
                    'apple-mobile-web-app-status-bar-style': 'black',
                    'apple-mobile-web-app-title': 'Яндекс Музыка',
                    robots: 'noyaca',
                },
            };
            var o = i(46511);
            async function c() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fullUrl: null, locale: null, url: null, tld: 'net', host: 'music.yandex.ru' },
                    t = await (0, o.W)(e.locale);
                return {
                    ...l,
                    title: t({ id: 'metadata.yandex-music-default-title' }),
                    description: t({ id: 'metadata.yandex-music-default-description' }),
                    alternates: { canonical: e.canonical },
                };
            }
            var d = i(88349),
                u = i(91241);
            let m = (e, t) => {
                    let i = window.document.querySelector('meta['.concat(e, '="').concat(t, '"]'));
                    if (i) return i;
                    let a = window.document.createElement('meta');
                    return (a.setAttribute(e, t), a);
                },
                h = (e) => {
                    let { title: t, description: i, openGraph: a } = e;
                    if (('string' == typeof t && (window.document.title = t), 'string' == typeof i)) {
                        let e = m('name', 'description');
                        (e.setAttribute('content', i), window.document.head.appendChild(e));
                    }
                    let n = '';
                    if (a) {
                        let e = 'string' == typeof a.title ? a.title : '',
                            t = 'string' == typeof a.description ? a.description : '',
                            i = Array.isArray(a.images) ? a.images[0] : null;
                        n = i && 'object' == typeof i && 'url' in i ? String(i.url) : '';
                        let s = m('property', 'og:title'),
                            r = m('property', 'og:description'),
                            l = m('property', 'og:image');
                        (s.setAttribute('content', e),
                            r.setAttribute('content', t),
                            l.setAttribute('content', n),
                            window.document.head.appendChild(s),
                            window.document.head.appendChild(r),
                            window.document.head.appendChild(l));
                    }
                },
                p = (e) => {
                    let { language: t } = (0, s.h)(),
                        i = (0, r.U)(),
                        l = (0, n.usePathname)(),
                        o = (0, n.useSearchParams)().toString();
                    (0, a.useEffect)(() => {
                        if (!e) return;
                        let a = !0,
                            n = ((e, t) => ({ fullUrl: e.href, locale: new Intl.Locale(t), url: e.pathname, tld: (0, d.f)(e.host) || u.l, host: e.host }))(
                                window.location,
                                t,
                            ),
                            s = window.location.pathname + window.location.search,
                            r = () => a && s === window.location.pathname + window.location.search;
                        return (
                            (async () => {
                                try {
                                    let t = await e(n);
                                    if (!r() || !t) return;
                                    let i = 'string' == typeof t.title && t.title.trim() ? t.title : (await c(n)).title;
                                    r() && h({ ...t, title: i });
                                } catch (e) {
                                    if (!r()) return;
                                    i.error('[ClientMetadata] Failed to update metadata', { error: e });
                                    try {
                                        let e = await c(n);
                                        r() && h(e);
                                    } catch (e) {
                                        r() && i.error('[ClientMetadata] Failed to load fallback metadata', { error: e });
                                    }
                                }
                            })(),
                            () => {
                                a = !1;
                            }
                        );
                    }, [e, t, i, l, o]);
                };
        },
        32596: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => R });
            var a = i(88800),
                n = i(65724),
                s = i(84961),
                r = i(53548),
                l = i(2058),
                o = i(88969);
            i(30282);
            var c = i(96817),
                d = i(52300),
                u = i(29504),
                m = i(97234),
                h = i(59714),
                p = i(43054),
                g = i(18117),
                x = i(93940),
                v = i(24709);
            let f = (0, v.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, p.s)()) ? void 0 : e.evgenInstance,
                        { hash: i } = (0, g.g)(),
                        { screen: a } = (0, x.j)();
                    return {
                        sendRefreshEvent: (0, r.useCallback)(() => {
                            if (!t || !i || !(null == a ? void 0 : a.pageId)) return;
                            let e = {
                                actionType: m.ActionType.Refresh,
                                userInteractionType: m.UserInteractionType.Tap,
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                hash: i,
                                pageId: a.pageId,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, h.bv)(t, e);
                        }, [t, i, null == a ? void 0 : a.pageId]),
                    };
                }),
                _ = (0, v.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let i = null == (t = (0, p.s)()) ? void 0 : t.evgenInstance,
                        { hash: a } = (0, g.g)(),
                        { screen: n } = (0, x.j)();
                    (0, r.useEffect)(() => {
                        if (!i || !a || !(null == n ? void 0 : n.pageId)) return;
                        let t = {
                            entityType: m.EntityTypes.Error,
                            entityId: m.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: a,
                            pageId: n.pageId,
                            pageStyle: m.PageStyles.Fullscreen,
                            pagePlacement: m.PagePlacements.Fullscreen,
                            mainObjectType: m.DomainObjectType.NonApplicable,
                            mainObjectId: m.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, h.z5)(i, t);
                    }, [i, e, a, null == n ? void 0 : n.pageId]);
                });
            var y = i(44230),
                A = i(4370),
                b = i(72288),
                k = i(97956),
                T = i(56248),
                N = i(90688),
                j = i(78940);
            let E = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var O = i(96856),
                I = i.n(O);
            let C = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: s } = e,
                    { slam: r } = (0, b.g)(),
                    { contentRef: l } = (0, y.g)(),
                    d = (0, j.Z)(A.Z.mymusicDownloadsTracks.href);
                return (0, a.jsxs)('div', {
                    className: (0, n.$)(I().root, t),
                    children: [
                        i &&
                            (0, a.jsx)(T.L, {
                                withBackwardFallback: '/',
                                className: (0, n.$)(I().navigation, { [I().navigation_desktop]: !l }),
                                withForwardControl: !1,
                                onBackwardClick: s,
                            }),
                        (0, a.jsxs)('div', {
                            className: (0, n.$)(I().content, { [I().content_shrink]: !i }),
                            children: [
                                (0, a.jsx)(N._V, { className: I().image, src: E.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, a.jsxs)('div', {
                                    className: I().message,
                                    children: [
                                        (0, a.jsx)(u.DZ, {
                                            className: I().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, a.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, a.jsx)(u.HL, {
                                            className: I().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, a.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                r.hasDownloadedTracks &&
                                    (0, a.jsx)(c.$, {
                                        className: I().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, a.jsx)(u.HL, {
                                            className: I().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, a.jsx)(o.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var S = i(9184),
                L = i.n(S);
            let R = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: s } = e,
                    { formatMessage: m } = (0, l.A)(),
                    h = (0, r.useContext)(b.P),
                    p = null == h ? void 0 : h.experiments.checkExperiment(k.z.WebNextUnstableMusicScreen, 'on'),
                    g = m(p ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                _(g);
                let { sendRefreshEvent: x } = f(),
                    v = (0, r.useCallback)(() => {
                        (x(), (window.location.href = A.Z.main.href));
                    }, [x]),
                    { contentRef: N } = (0, y.g)();
                return p
                    ? (0, a.jsx)(C, { className: t, withBackwardControl: i, onBack: s })
                    : (0, a.jsxs)('div', {
                          className: (0, n.$)(L().root, t),
                          children: [
                              i &&
                                  (0, a.jsx)(T.L, {
                                      withBackwardFallback: '/',
                                      className: (0, n.$)(L().navigation, { [L().navigation_desktop]: !N }),
                                      withForwardControl: !1,
                                      onBackwardClick: s,
                                  }),
                              (0, a.jsxs)('div', {
                                  className: (0, n.$)(L().content, { [L().content_shrink]: !i }),
                                  children: [
                                      (0, a.jsx)(d.I, { className: L().icon, variant: 'attention', size: 'xxl' }),
                                      (0, a.jsx)(u.DZ, { className: (0, n.$)(L().title, L().important), variant: 'h3', size: 'xs', children: g }),
                                      (0, a.jsxs)(u.HL, {
                                          className: (0, n.$)(L().text, L().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, a.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, a.jsx)(c.$, {
                                          onClick: v,
                                          className: L().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, a.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, a.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        35396: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { C: () => s }),
                (function (e) {
                    // for PulseSync: BEGIN substituted-track enum extension
                    ((e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        ((e.EXCLAMATION_ICON = 'exclamationIcon'), (e.SUBSTITUTED_ICON = 'substitutedIcon')));
                    // for PulseSync: END substituted-track enum extension
                })(a || (a = {})));
            let n = new Set(Object.values(a)),
                s = (e) => 'string' == typeof e && n.has(e);
        },
        43161: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => Z });
            var a = i(88800),
                n = i(84961),
                s = i(2058),
                r = i(97234),
                l = i(17392),
                o = i(18593),
                c = i(29993),
                d = i(52300),
                u = i(19934),
                m = i(96706),
                h = i(53548),
                p = i(79390),
                g = i(29595),
                x = i(74965),
                v = i(72288),
                f = i(66943),
                _ = i(7555),
                y = i(73170),
                A = i(29504),
                b = i(59304),
                k = i(81877),
                T = i(85074),
                N = i.n(T);
            let j = (e) => {
                let { coverUri: t, title: i, isDisliked: n, closeToast: r } = e,
                    { formatMessage: l } = (0, s.A)(),
                    o = l(n ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, a.jsx)(b.$, {
                    closeToast: r,
                    message: (0, a.jsxs)('div', {
                        className: N().message,
                        children: [
                            (0, a.jsx)(y.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, a.jsx)(_.t, {
                                className: N().cover,
                                radius: 'round',
                                children: (0, a.jsx)(k.B, { className: N().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, a.jsx)(A.HL, { className: N().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var E = i(64207),
                O = i(77455),
                I = i(48749),
                C = i(22505),
                S = i(5407),
                L = i(64284),
                R = i(98427),
                w = i(57934),
                D = i(84384),
                P = i(9618),
                M = i(95210),
                U = i(47964),
                z = i(46936),
                B = i(97956),
                F = i(98953),
                H = i(32721),
                W = i(18130),
                G = i(56117),
                Y = i(93091),
                K = i(27817),
                X = i(74064),
                $ = i(15425),
                V = i(81066),
                q = i(64546);
            let Z = (0, n.PA)((e) => {
                var t, i, n;
                let { artist: _, onOpenChange: y, open: A, ...b } = e,
                    { shouldShowBuySubscriptionModal: k, showBuySubscriptionModal: T } = (0, P.q)(),
                    {
                        settings: { isMobile: N },
                        modals: { artistAboutModal: Z },
                        trailer: J,
                        user: Q,
                        experiments: ee,
                    } = (0, v.g)(),
                    et = (0, O.A)(_),
                    ei = (0, E.K)(_),
                    ea = ((e) => {
                        let { user: t } = (0, v.g)(),
                            { notify: i } = (0, x.l)(),
                            [n, r] = (0, h.useState)(!1),
                            { formatMessage: l } = (0, s.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, a.jsx)(f.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: g.u.ERROR });
                            if (n) return;
                            let s = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            r(!0);
                            let o = await e.toggleDislike();
                            (r(!1),
                                o === p.f.OK
                                    ? i((0, a.jsx)(j, { coverUri: s.coverUri, title: s.name, isDisliked: s.isDisliked }), { containerId: g.u.INFO })
                                    : i((0, a.jsx)(f.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: g.u.ERROR }));
                        });
                    })(_),
                    en = (0, w.F)(),
                    es = ''.concat(L.U.ARTIST, '-').concat(null == _ ? void 0 : _.id),
                    { formatMessage: er } = (0, s.A)(),
                    { utmLink: el } = (0, D.f)({ blockId: L.U.ARTIST, contextType: o.K.Artist, contextId: null == _ ? void 0 : _.id }),
                    { shareLink: eo, pathname: ec } = (0, W.b)('/artist/:artistId', { params: { artistId: null != (i = null == _ ? void 0 : _.id) ? i : '' } }),
                    ed = (0, I.A)({ entityVariant: z.D.ARTIST, urlParams: { id: null == _ ? void 0 : _.id } }),
                    { isPlaying: eu, togglePlay: em } = (0, U.B)({
                        seeds: null != (n = null == _ ? void 0 : _.seeds) ? n : [],
                        pageIdForFrom: R.b.RADIO,
                        blockIdForFrom: es,
                        parentContextId: null == _ ? void 0 : _.id,
                    }),
                    eh = (0, S.P)(),
                    ep = er((null == _ ? void 0 : _.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    eg = (0, c.c)(() => {
                        if (k && Q.isAuthorized) return void T();
                        eu || em();
                    }),
                    ex = (0, c.c)(() => {
                        if (!eh()) {
                            if (k) return void T();
                            (null == _ ? void 0 : _.id) && (J.setUtmLink(el), J.openArtistTrailer(_.id), en(r.DomainObjectType.Artist, _.id));
                        }
                    }),
                    ev = (0, c.c)(() => {
                        Z.open(null == _ ? void 0 : _.id);
                    });
                (0, M.N)(A);
                let ef = { variant: F.Y.ARTIST, id: null == _ ? void 0 : _.id, title: null == _ ? void 0 : _.name, path: ec },
                    e_ = ee.checkExperiment(B.z.WebEditorsFeatures, 'on'),
                    ey = null == _ || null == (t = _.trailer) ? void 0 : t.isAvailable,
                    eA = ee.checkExperiment(B.z.WebNextArtistInfo, 'on'),
                    eb = !ee.checkExperiment(B.z.WebNextProductWithoutRecommendation, 'on');
                return (0, a.jsxs)(u.W1, {
                    isMobile: N,
                    offsetOptions: 10,
                    open: A,
                    onOpenChange: y,
                    ariaLabel: er({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: l.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...b,
                    children: [
                        e_ && (0, a.jsx)(q.WithOffline, { fallback: (0, a.jsx)(C.d, { entityVariant: z.D.ARTIST, adminUrl: ed }) }),
                        !N && (0, a.jsx)(q.WithOffline, { fallback: (0, a.jsx)(K.L, { onClick: et, isPinned: null == _ ? void 0 : _.isPinned }) }),
                        (0, a.jsx)(q.WithOffline, {
                            fallback: (0, a.jsx)(Y.T, {
                                onClick: ei,
                                isLiked: null == _ ? void 0 : _.isLiked,
                                disabled: !Q.isAuthorized || !(null == _ ? void 0 : _.isAvailable),
                            }),
                        }),
                        ey && (0, a.jsx)(q.WithOffline, { fallback: (0, a.jsx)($.N, { onClick: ex }) }),
                        eb &&
                            (0, a.jsx)(q.WithOffline, {
                                fallback: (0, a.jsx)(V.C, { onClick: eg, disabled: !(null == _ ? void 0 : _.isAvailable), variant: H.I.ARTIST, onOpenMenuChange: y }),
                            }),
                        (0, a.jsx)(X.H, { disabled: !_, shareLink: eo, entityMeta: ef }),
                        eA &&
                            (0, a.jsx)(q.WithOffline, {
                                fallback: (0, a.jsx)(u.Dr, {
                                    onClick: ev,
                                    icon: (0, a.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': l.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: ep,
                                }),
                            }),
                        (0, a.jsx)(q.WithOffline, {
                            fallback: (0, a.jsx)(G.D, { onClick: ea, isDisliked: null == _ ? void 0 : _.isDisliked, disabled: !(null == _ ? void 0 : _.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        44084: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => s });
            var a = i(23877),
                n = i(74021);
            class s extends n.q {
                disableLogToConsole;
                constructor(e) {
                    (super(e), (this.disableLogToConsole = e.disableLogToConsole));
                }
                info(e, t) {
                    this.maxLogLevel >= a.c.INFO && this.logToConsole(a.c.INFO, e, t);
                }
                debug(e, t) {
                    this.maxLogLevel >= a.c.DEBUG && this.logToConsole(a.c.DEBUG, e, t);
                }
                trace(e, t) {
                    this.maxLogLevel >= a.c.TRACE && this.logToConsole(a.c.TRACE, e, t);
                }
                warn(e, t) {
                    (this.maxLogLevel >= a.c.WARNING && this.logToConsole(a.c.WARNING, e, t), this.sendToErrorBooster(a.c.WARNING, e, t));
                }
                error(e, t) {
                    (this.maxLogLevel >= a.c.ERROR && this.logToConsole(a.c.ERROR, e, t), this.sendToErrorBooster(a.c.ERROR, e, t));
                }
                log(e, t) {
                    this.logToConsole(a.c.INFO, e, t);
                }
                logToConsole(e, t, i) {
                    if (this.disableLogToConsole) return;
                    let n = a.Q[e];
                    console[n](...this.formatMessage(e, t, i));
                }
                sendToErrorBooster(e, t, i) {
                    window.Ya.Rum.logError({ message: t, level: e, additional: { data: i ? this.obfuscateData({ ...this.additionalData, ...i }) : {} } });
                }
            }
        },
        45383: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => s });
            var a = i(67174);
            let n = {
                    'ru-ru': 'https://music.yandex.ru',
                    'ru-kz': 'https://music.yandex.kz',
                    'ru-uz': 'https://music.yandex.uz',
                    'ru-by': 'https://music.yandex.by',
                    en: 'https://music.yandex.com',
                    'x-default': 'https://music.yandex.ru',
                },
                s = function (e, t) {
                    for (var i = arguments.length, s = Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++) s[r - 2] = arguments[r];
                    let [l] = s,
                        o = '/' === e ? '' : e,
                        c = (e) => ({ ...(null != l ? l : {}), options: e }),
                        d = {},
                        { href: u } = (0, a.u)(o, c({ linkType: 'canonical', host: 'https://music.yandex.'.concat(t) }));
                    for (let [e, t] of Object.entries(n)) {
                        let { href: i } = (0, a.u)(o, c({ linkType: 'alternate', host: t, lang: e }));
                        d[e] = i;
                    }
                    return { canonical: u, languages: d };
                };
        },
        46511: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => d });
            var a = i(27794),
                n = i(53548),
                s = i(72542),
                r = i(83602),
                l = i(21424),
                o = i(95330);
            let c = (0, n.cache)(async (e) => (0, o.M)(e, o.X)),
                d = async (e) => {
                    let t = (e || r.E.getDefaultLocale()).language,
                        i = (0, l.k)(s.pE[s.cy], t),
                        n = await c(i);
                    return (e, t) => {
                        let s = null == n ? void 0 : n[e.id],
                            r = '';
                        return ((Array.isArray(s) || 'string' == typeof s) && (r = new a.S(s, i).format(t)), Array.isArray(r) ? r.join('') : r);
                    };
                };
        },
        46646: (e, t, i) => {
            var a = { './en.json': [61263, 1263], './kk.json': [85218, 5218], './ru.json': [74721, 4721], './uz.json': [20075, 75] };
            function n(e) {
                if (!i.o(a, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = a[e],
                    n = t[0];
                return i.e(t[1]).then(() => i.t(n, 19));
            }
            ((n.keys = () => Object.keys(a)), (n.id = 46646), (e.exports = n));
        },
        49343: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => m });
            var a = i(88800),
                n = i(53548),
                s = i(88969),
                r = i(52300),
                l = i(29504),
                o = i(59304),
                c = i(57585),
                d = i.n(c);
            let u = {
                    track: (0, a.jsx)(s.A, { id: 'notifications-info.track-link' }),
                    artist: (0, a.jsx)(s.A, { id: 'notifications-info.artist-link' }),
                    album: (0, a.jsx)(s.A, { id: 'notifications-info.album-link' }),
                    playlist: (0, a.jsx)(s.A, { id: 'notifications-info.playlist-link' }),
                    clip: (0, a.jsx)(s.A, { id: 'notifications-info.clip-link' }),
                    label: (0, a.jsx)(s.A, { id: 'notifications-info.label-link' }),
                    concert: (0, a.jsx)(s.A, { id: 'notifications-info.concert-link' }),
                },
                m = (e) => {
                    let { entityVariant: t, entityTitle: i, closeToast: c } = e,
                        m = (0, n.useMemo)(
                            () =>
                                (0, a.jsxs)(l.HL, {
                                    className: d().message,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: [
                                        u[t],
                                        '\xa0',
                                        (0, a.jsx)(l.HL, { className: d().title, variant: 'span', type: 'controls', size: 'm', lineClamp: 1, children: i }),
                                        '\xa0',
                                        (0, a.jsx)(s.A, { id: 'notifications-info.copied' }),
                                    ],
                                }),
                            [t, i],
                        );
                    return (0, a.jsx)(o.$, {
                        closeToast: c,
                        cover: (0, a.jsx)(r.I, { className: d().icon, size: 'xs', variant: 'chain' }),
                        message: m,
                        coverRadius: 's',
                    });
                };
        },
        50385: (e) => {
            e.exports = {
                root: 'ArtistSimilarPage_root__rvTLl',
                scrollableContent: 'ArtistSimilarPage_scrollableContent__WD72A',
                container: 'ArtistSimilarPage_container__DDj5O',
                content: 'ArtistSimilarPage_content__X71xs',
                footer: 'ArtistSimilarPage_footer__FdVkO',
            };
        },
        51724: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => a });
            let a = (e) => {
                var t, i, a, n, s, r;
                let l = null == (t = e.available) || t,
                    o = null != (i = e.disclaimers) ? i : [];
                return (
                    e.contentRestrictions &&
                        ((l = null == (s = null == (a = e.contentRestrictions) ? void 0 : a.available) || s),
                        (o = null != (r = null == (n = e.contentRestrictions) ? void 0 : n.disclaimers) ? r : [])),
                    { available: l, disclaimers: o }
                );
            };
        },
        53073: (e, t, i) => {
            'use strict';
            function a() {
                return { appId: '117328825040925' };
            }
            i.d(t, { k: () => a });
        },
        54243: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => l });
            var a = i(88800),
                n = i(4370),
                s = i(15077),
                r = i(42729);
            let l = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, a.jsx)(r.O, {
                    closeToast: i,
                    entityVariant: s.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: n.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        56117: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => d });
            var a = i(88800),
                n = i(84961),
                s = i(88969),
                r = i(17392),
                l = i(52300),
                o = i(19934),
                c = i(72288);
            let d = (0, n.PA)((e) => {
                let { isDisliked: t, onClick: i, disabled: n, className: d } = e,
                    { user: u } = (0, c.g)();
                return (0, a.jsx)(o.Dr, {
                    onClick: i,
                    className: d,
                    icon: (0, a.jsx)(l.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: n || !u.isAuthorized,
                    'data-test-id': r.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, a.jsx)(s.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        57297: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => s });
            var a = i(35412),
                n = i(83602);
            function s(e) {
                let { ogTitle: t, ogDescription: i, fullUrl: s, locale: r, ogImage: l, siteName: o, ogType: c, customImage: d } = e,
                    u = l ? { url: (0, a.lU)(l, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
                return {
                    title: t,
                    description: i,
                    url: s,
                    ...(c && { type: c }),
                    siteName: o,
                    locale: (r || n.E.getDefaultLocale()).toString().replace('-', '_'),
                    images: u || d,
                };
            }
        },
        57585: (e) => {
            e.exports = { message: 'NotificationCopy_message__zVlYi', icon: 'NotificationCopy_icon__FTmM9', title: 'NotificationCopy_title__UEiU0' };
        },
        59724: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => u });
            var a = i(88800),
                n = i(53548),
                s = i(8383),
                r = i(24709),
                l = i(88966);
            let o = new WeakMap();
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
                    let i =
                        o.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                i = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                a = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                i();
                                            } finally {
                                                ((t = !1), e.length > 0 && a());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (i(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), a());
                                },
                            };
                        })();
                    (o.set(t, i), (this.queue = i));
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
            var d = i(97234);
            let u = (0, r.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let i = (0, l.N)(),
                        r = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === d.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [o, u] = (0, n.useState)(() => {
                            let e = new c(i.createScreenSession().screenViewUuid, i);
                            return { client: i, input: t, isReady: r, scope: r ? i.createScreenScope(t, e) : null, session: e };
                        });
                    if (o.client !== i || o.input.pageId !== t.pageId || o.input.skeletonId !== t.skeletonId) {
                        let n = new c(i.createScreenSession().screenViewUuid, i),
                            l = { client: i, input: t, isReady: r, scope: r ? i.createScreenScope(t, n) : null, session: n };
                        return (u(l), (0, a.jsx)(s.k, { value: l, children: e }));
                    }
                    if (
                        o.isReady !== r ||
                        o.input.mainObjectType !== t.mainObjectType ||
                        o.input.mainObjectId !== t.mainObjectId ||
                        o.input.displayReasonId !== t.displayReasonId ||
                        o.input.pageIdForFrom !== t.pageIdForFrom ||
                        o.input.pagePlacement !== t.pagePlacement ||
                        o.input.pageStyle !== t.pageStyle
                    ) {
                        let n = { ...o, input: t, isReady: r, scope: r ? i.createScreenScope(t, o.session) : null };
                        return (u(n), (0, a.jsx)(s.k, { value: n, children: e }));
                    }
                    return (0, a.jsx)(s.k, { value: o, children: e });
                },
            );
        },
        60266: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => r });
            var a = i(88800);
            i(30282);
            var n = i(11006),
                s = i.n(n);
            let r = (e) => {
                let { children: t } = e;
                return (0, a.jsx)('footer', { className: s().empty });
            };
        },
        62293: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => n });
            var a = i(97956);
            let n = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: n, userRegion: s } = e;
                return 'ru' === s && t(a.z.WebNextFooterDisclaimer, 'on') ? i() : n();
            };
        },
        63512: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => r });
            var a = i(53548),
                n = i(94144),
                s = i(67174);
            let r = (e) => {
                var t;
                let { setDeeplink: i } = null != (t = (0, n.P)()) ? t : {};
                (0, a.useEffect)(() => {
                    if (e) {
                        let { href: t } = (0, s.u)('/artist/:artistId', { params: { artistId: e } });
                        null == i || i(t);
                    }
                    return () => {
                        null == i || i(null);
                    };
                }, [e, i]);
            };
        },
        64207: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => h });
            var a = i(88800),
                n = i(96706),
                s = i(53548),
                r = i(2058),
                l = i(79390),
                o = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                m = i(54243);
            let h = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [h, p] = (0, s.useState)(!1),
                    { formatMessage: g } = (0, r.A)();
                return (0, s.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, a.jsx)(u.h, { error: g({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (h) return;
                    let s = { ...(0, n.HO)(e), isLiked: !e.isLiked };
                    p(!0);
                    let r = await e.toggleLike();
                    (p(!1),
                        r === l.f.OK
                            ? i((0, a.jsx)(m.T, { artist: s }), { containerId: o.u.INFO })
                            : i((0, a.jsx)(u.h, { error: g({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, h, g, i]);
            };
        },
        64247: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => r });
            var a = i(88800),
                n = i(15077),
                s = i(33719);
            let r = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, a.jsx)(s.k, {
                    closeToast: i,
                    entityVariant: n.c.ARTIST,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.name,
                    isPinned: t.isPinned,
                    radius: 'round',
                });
            };
        },
        65523: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => l });
            var a = i(4086),
                n = i(41928),
                s = i(44084);
            let r = new WeakMap(),
                l = () =>
                    ((e) => {
                        if (e instanceof s.r) return e;
                        let t = r.get(e);
                        if (t) return t;
                        let i = {
                            log: (t, i) => e.info(t, i),
                            trace: (t, i) => e.trace(t, i),
                            debug: (t, i) => e.debug(t, i),
                            info: (t, i) => e.info(t, i),
                            warn: (t, i) => e.warn(t, i),
                            error: (t, i) => e.error(t, i),
                            fatal: (t, i) => e.fatal(t, i),
                            child: (t) => e.child(t),
                        };
                        return (r.set(e, i), i);
                    })((0, n.N)().get(a.Zf));
        },
        66610: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => o });
            var a = i(53548),
                n = i(24709),
                s = i(88966),
                r = i(87138),
                l = i(46457);
            let o = (0, n.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, s.N)(),
                    t = (0, r.w)(),
                    i = (0, a.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, l.c)((e) => {
                    t?.object && i && i.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        72542: (e, t, i) => {
            'use strict';
            i.d(t, { Xn: () => s, cy: () => n, pE: () => a });
            let a = {
                    yandex: {
                        regions: ['RU', 'BY', 'KZ', 'UZ'],
                        regionLangs: {
                            RU: { langs: ['ru', 'en', 'uz', 'kk'], defaultLang: 'ru' },
                            BY: { langs: ['ru', 'en', 'uz', 'kk'], defaultLang: 'ru' },
                            KZ: { langs: ['kk', 'en', 'ru', 'uz'], defaultLang: 'kk' },
                            UZ: { langs: ['uz', 'en', 'ru', 'kk'], defaultLang: 'uz' },
                        },
                        langs: ['ru', 'en', 'uz', 'kk'],
                        defaultLang: 'ru',
                    },
                    yango: {
                        regions: ['AE', 'BH', 'EG', 'IQ', 'JO', 'KW', 'OM', 'QA', 'SA'],
                        regionLangs: {
                            AE: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            BH: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            EG: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            IQ: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            JO: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            KW: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            OM: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            QA: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            SA: { langs: ['ar', 'en'], defaultLang: 'ar' },
                        },
                        langs: ['en', 'ar'],
                        defaultLang: 'en',
                    },
                },
                n = 'yandex',
                s = 'ru-RU';
        },
        74021: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => o });
            var a = i(14567),
                n = i(243),
                s = i(62151),
                r = i(33396);
            let l = () => 'SECRET';
            class o {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: i }) {
                    ((this.maxLogLevel = t), (this.secureFields = i), (this.additionalData = e));
                }
                formatMessage(e, t, i = {}, n) {
                    let s,
                        l = String(t instanceof Error && t.stack ? t.stack : t),
                        o = (0, r.A)({ ...this.additionalData, ...i });
                    return (Object.keys(o).length && (s = this.obfuscateData(o)), n) ? `${l} ${a(s)}` : [l, s];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, n.A)(e, t) && (0, s.A)(e, t, l());
                    return e;
                }
            }
        },
        74064: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => x });
            var a = i(88800),
                n = i(2058),
                s = i(88969),
                r = i(17392),
                l = i(29993),
                o = i(52300),
                c = i(19934),
                d = i(29595),
                u = i(74965),
                m = i(72288),
                h = i(98953),
                p = i(64546),
                g = i(49343);
            let x = (e) => {
                let { shareLink: t, entityMeta: i, disabled: x, className: v, iconClassName: f, menuClassName: _, withSubmenu: y = !0, withNotification: A = !0 } = e,
                    { settings: b, shareIframe: k, fullscreenPlayer: T, fullscreenVideoPlayer: N } = (0, m.g)(),
                    { formatMessage: j } = (0, n.A)(),
                    { notify: E } = (0, u.l)(),
                    O = (0, l.c)(async () => {
                        if ((await window.navigator.clipboard.writeText(t), A)) {
                            let e = T.modal.isOpened || (!b.isMobile && N.modal.isOpened);
                            E((0, a.jsx)(g.D, { entityVariant: i.variant, entityTitle: i.title }), { containerId: e ? d.u.FULLSCREEN_INFO : d.u.INFO });
                        }
                    }),
                    I = (0, l.c)(() => {
                        i.id && k.openModal(i);
                    }),
                    C = i.id && i.variant !== h.Y.ARTIST && i.variant !== h.Y.CLIP;
                return y
                    ? (0, a.jsxs)(c.W1, {
                          offsetOptions: 3,
                          isMobile: b.isMobile,
                          className: v,
                          menuClassName: _,
                          label: j({ id: 'interface-actions.share' }),
                          icon: (0, a.jsx)(o.I, { className: f, variant: 'share', size: 'xxs' }),
                          disabled: x,
                          submenuProps: { 'data-test-id': r.S7.CONTEXT_MENU_SHARE },
                          'data-test-id': r.S7.CONTEXT_MENU_SHARE_BUTTON,
                          children: [
                              (0, a.jsx)(c.Dr, {
                                  onClick: O,
                                  icon: (0, a.jsx)(o.I, { variant: 'chain', size: 'xxs' }),
                                  'data-test-id': r.S7.CONTEXT_MENU_SHARE_COPY_LINK_BUTTON,
                                  children: (0, a.jsx)(s.A, { id: 'interface-actions.copy-link' }),
                              }),
                              C &&
                                  (0, a.jsx)(p.WithOffline, {
                                      fallback: (0, a.jsx)(c.Dr, {
                                          onClick: I,
                                          icon: (0, a.jsx)(o.I, { variant: 'code', size: 'xxs' }),
                                          'data-test-id': r.S7.CONTEXT_MENU_SHARE_IFRAME_BUTTON,
                                          children: (0, a.jsx)(s.A, { id: 'interface-actions.copy-iframe' }),
                                      }),
                                  }),
                          ],
                      })
                    : (0, a.jsx)(c.Dr, {
                          className: v,
                          onClick: O,
                          icon: (0, a.jsx)(o.I, { className: f, variant: 'share', size: 'xxs' }),
                          disabled: x,
                          'data-test-id': r.S7.CONTEXT_MENU_SHARE_BUTTON,
                          children: (0, a.jsx)(s.A, { id: 'interface-actions.share' }),
                      });
            };
        },
        77455: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var a = i(88800),
                n = i(96706),
                s = i(53548),
                r = i(2058),
                l = i(29595),
                o = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(64247);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: m } = (0, r.A)(),
                    [h, p] = (0, s.useState)(!1);
                return (0, s.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, a.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (h) return;
                    let s = { ...(0, n.HO)(e), isPinned: !e.isPinned };
                    p(!0);
                    let r = await e.togglePin();
                    (p(!1),
                        r
                            ? i((0, a.jsx)(u.l, { artist: s }), { containerId: l.u.INFO })
                            : i((0, a.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, t.isAuthorized, h, m, i]);
            };
        },
        77863: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => a });
            var a = (function (e) {
                return ((e.APP = 'app'), (e.SUMMARY_LARGE_IMAGE = 'summary_large_image'), e);
            })({});
        },
        81066: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => p });
            var a = i(88800),
                n = i(84961),
                s = i(53548),
                r = i(88969),
                l = i(17392),
                o = i(52300),
                c = i(19934),
                d = i(73170),
                u = i(72288),
                m = i(52726);
            let h = {
                    album: (0, a.jsx)(r.A, { id: 'vibe-actions.vibe-by-album' }),
                    artist: (0, a.jsx)(r.A, { id: 'vibe-actions.vibe-by-artist' }),
                    playlist: (0, a.jsx)(r.A, { id: 'vibe-actions.vibe-by-playlist' }),
                    track: (0, a.jsx)(r.A, { id: 'vibe-actions.vibe-by-track' }),
                },
                p = (0, n.PA)((e) => {
                    let { variant: t, className: i, onClick: n, disabled: r, onOpenMenuChange: p } = e,
                        {
                            settings: { isMobile: g },
                            user: x,
                            freeAccess: v,
                        } = (0, u.g)(),
                        f = v.isVibeStartRestricted && !g,
                        _ = (0, s.useCallback)(
                            (e) => {
                                let { isPopoverEnabled: s, popoverText: u } = e;
                                return (0, a.jsxs)(c.Dr, {
                                    onClick: n,
                                    disabled: r || s || !x.isAuthorized,
                                    className: i,
                                    icon: (0, a.jsx)(o.I, { variant: 'vibe', size: 'xxs' }),
                                    'data-test-id': l.S7.CONTEXT_MENU_VIBE_BUTTON,
                                    children: [h[t], ' ', (0, a.jsx)(d.q, { children: u })],
                                });
                            },
                            [n, r, i, t, x.isAuthorized],
                        );
                    return (0, a.jsx)(m.S, {
                        isNested: !0,
                        isEnabled: f,
                        placement: 'right',
                        textVariant: 'vibe',
                        vibeTextVariant: t,
                        renderChildren: _,
                        onOpenMenuChange: p,
                    });
                });
        },
        81685: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => n });
            var a = i(29201);
            let n = (e) => {
                var t, i;
                return e
                    ? {
                          id: Number(e.id),
                          decomposed:
                              (null == (t = e.decomposed)
                                  ? void 0
                                  : t.map((e) => {
                                        var t;
                                        return {
                                            id: e.id,
                                            name: e.name,
                                            various: e.various || !1,
                                            composer: e.isComposer || !1,
                                            item: e.separator,
                                            available: null == (t = e.isAvailable) || t,
                                            disclaimers: (0, a.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '' },
                          various: e.various || !1,
                          contentRestrictions: { available: null == (i = e.isAvailable) || i, disclaimers: (0, a.H)(e.disclaimers) },
                      }
                    : { id: 0, name: '', various: !1, decomposed: [], contentRestrictions: { available: !1, disclaimers: [] } };
            };
        },
        83418: (e, t, i) => {
            'use strict';
            function a(e) {
                let { host: t, url: i } = e;
                return i || (t ? 'https://'.concat(t, '/meta/home.png') : '');
            }
            i.d(t, { v: () => a });
        },
        83602: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => u });
            var a = i(9519),
                n = i(72542),
                s = i(21424),
                r = i(4653);
            let l = (e) => r.U.parseAcceptLanguage(null != e ? e : void 0);
            var o = i(1220);
            let c = (e) => {
                var t;
                return null != (t = { ru: o.$.RU, en: o.$.EN, uz: o.$.UZ, kk: o.$.KK }[e]) ? t : o.$.RU;
            };
            var d = i(95330);
            class u {
                static getDefaultLocale() {
                    return new Intl.Locale(n.Xn);
                }
                getLocale() {
                    let e;
                    try {
                        e = new Intl.Locale(this.serverDetectedLocale).region;
                    } catch (t) {
                        e = u.getDefaultLocale().region;
                    }
                    return new Intl.Locale(this.language, { region: e });
                }
                getDefaultLanguage() {
                    return c((0, s.k)(this.config, this.config.defaultLang));
                }
                getLanguage() {
                    return c((0, s.k)(this.config, this.language));
                }
                setLanguage(e) {
                    var t, i, a;
                    let n = (0, s.k)(this.config, e);
                    n !== (null == (t = this.storage) ? void 0 : t.get()) &&
                        (null == (i = this.storage) || i.set(n), null == (a = this.changeLanguageHandler) || a.onChangeLanguage(n));
                }
                getDictionary() {
                    if (!this.dictionary)
                        throw Error(
                            '\n                There is no downloaded CompiledTranslations!\n                I18NStorage.loadDictionary() must be called.\n            ',
                        );
                    return this.dictionary;
                }
                getAvailableLanguages() {
                    return this.config.langs.map((e) => c((0, s.k)(this.config, e)));
                }
                async loadDictionary() {
                    let e = (0, s.k)(this.config, this.language);
                    try {
                        this.dictionary = await (0, d.M)(e);
                    } catch (t) {
                        (t instanceof Error && this.logger.error(t, { language: e }), (this.dictionary = {}));
                    }
                    return this.dictionary;
                }
                constructor({ serverDetectedLocale: e, isBuildTypeDesktop: t, storage: i, changeLanguageHandler: o, logger: c }) {
                    let d;
                    if (
                        ((0, a._)(this, 'language', void 0),
                        (0, a._)(this, 'storage', void 0),
                        (0, a._)(this, 'dictionary', void 0),
                        (0, a._)(this, 'config', void 0),
                        (0, a._)(this, 'logger', void 0),
                        (0, a._)(this, 'changeLanguageHandler', void 0),
                        (0, a._)(this, 'serverDetectedLocale', void 0),
                        (this.storage = i),
                        (this.logger = c),
                        (this.changeLanguageHandler = o),
                        (this.serverDetectedLocale = e),
                        (this.config = n.pE[n.cy]),
                        t)
                    ) {
                        if ('undefined' != typeof navigator) {
                            var u;
                            let e;
                            d = ((e = this.config), new r.U({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: !0 })).getLang({
                                cookieLang: (null == (u = this.storage) ? void 0 : u.get()) || void 0,
                                acceptLangs: l(navigator.languages.join()),
                            });
                        }
                    } else [d] = l(e) || [];
                    this.language = (0, s.k)(this.config, d);
                }
            }
        },
        85074: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        86790: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => N });
            var a = i(88800),
                n = i(65724),
                s = i(84961),
                r = i(2058),
                l = i(30282),
                o = i(94144),
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
            let d = (e, t, i) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(i);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(i);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(i);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: i, tld: a, year: n } = e;
                    return {
                        year: n,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, a, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, a, i) },
                    };
                };
            var m = i(62293),
                h = i(99839);
            let p = (e) => e(new Date(), (0, h.m)());
            var g = i(51611),
                x = i(72288),
                v = i(11006),
                f = i.n(v),
                _ = i(17392),
                y = i(29504),
                A = i(91292);
            let b = (e) => {
                    let { className: t, data: i } = e;
                    return (0, a.jsxs)('div', {
                        className: (0, n.$)(f().copyrights, t),
                        'data-test-id': _.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, a.jsxs)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: f().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, a.jsx)(A.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, n.$)(f().copyrightLink, f().yandexMusicLink),
                                        'data-test-id': _.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(y.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, a.jsx)(A.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: f().copyrightLink,
                                'data-test-id': _.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                k = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, a.jsxs)('div', {
                        className: f().links,
                        children: [
                            (0, a.jsx)('ol', {
                                className: f().list,
                                'data-test-id': _.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: n } = e;
                                    return (0, a.jsx)(
                                        'li',
                                        {
                                            className: f().item,
                                            children: (0, a.jsx)(A.N, { target: '_blank', href: n, className: f().link, 'data-test-id': _.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, a.jsx)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: f().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': _.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                T = (e) => {
                    let { className: t, data: i } = e;
                    return (0, a.jsxs)('footer', {
                        className: (0, n.$)(f().root, f().important, t),
                        'data-test-id': _.S7.FOOTER,
                        children: [(0, a.jsx)(k, { links: i.links, disclaimer: i.disclaimer }), (0, a.jsx)(b, { data: i.copyrights })],
                    });
                };
            (0, s.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, x.g)(),
                    { formatDate: n, formatMessage: s } = (0, r.A)(),
                    { language: l } = (0, g.h)(),
                    o = u({ formatMessage: s, language: l, tld: i.tld, year: p(n) });
                return (0, a.jsx)(b, { className: t, data: o });
            });
            let N = (0, s.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: s, location: h, user: v } = (0, x.g)(),
                    { formatDate: _, formatMessage: y } = (0, r.A)(),
                    { isEnabled: A } = null != (t = (0, o.P)()) ? t : {},
                    { language: b } = (0, g.h)(),
                    k = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: a, language: n, tld: s, userRegion: r, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: a, language: n, userRegion: s } = e,
                                    r = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, a, n) },
                                    l = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, a, n) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, a, n) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, a, n) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, a, n) },
                                    h = [r, o, u];
                                return (i && 'ru' === s && h.push(l), h.push(m), h);
                            })({ formatMessage: i, isWebApplication: a, language: n, tld: s, userRegion: r }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: r,
                            }),
                            copyrights: u({ formatMessage: i, language: n, tld: s, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => s.checkExperiment(e, t),
                        formatMessage: y,
                        isWebApplication: l.$3,
                        tld: h.tld,
                        language: b,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: p(_),
                    });
                return (0, a.jsx)(T, { className: (0, n.$)({ [f().root_withOffsetForDeeplink]: A }, i), data: k });
            });
        },
        91241: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => a });
            let a = 'ru';
        },
        91959: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => n });
            var a = i(58217);
            let n = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: n } = e;
                return (0, a.l)({ entity: t, callback: i, modalBehavior: void 0 === n ? void 0 : { shouldHistoryBack: n }, preventDefaultWhenSafe: !0 });
            };
        },
        93434: (e) => {
            e.exports = {
                controls: 'ArtistCard_controls__jsqqI',
                cover: 'ArtistCard_cover__29ShU',
                root: 'ArtistCard_root__x67BK',
                srTitleLink: 'ArtistCard_srTitleLink__jzfOW',
                coverBlock: 'ArtistCard_coverBlock__dBL4x',
                image: 'ArtistCard_image__pONJx',
                titleLink: 'ArtistCard_titleLink__G8Puz',
                playButton: 'ArtistCard_playButton__XZoTr',
                likeButton: 'ArtistCard_likeButton__LU9TL',
                menuButton: 'ArtistCard_menuButton__EynXG',
                pinButton: 'ArtistCard_pinButton__G_VOi',
                trailerButton: 'ArtistCard_trailerButton__a2NHm',
                control: 'ArtistCard_control___qv5j',
            };
        },
        94144: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => n, P: () => s });
            var a = i(53548);
            let n = (0, a.createContext)(null),
                s = () => (0, a.useContext)(n);
        },
        95330: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => c, X: () => o });
            var a = i(39499),
                n = i(72542);
            let s = async (e) => e.then((e) => e.default),
                r = n.pE[n.cy],
                l = r.langs.reduce((e, t) => (e.set(t, async () => s(i(12526)('./'.concat(t, '.json')))), e), new Map()),
                o = r.langs.reduce((e, t) => (e.set(t, async () => s(i(46646)('./'.concat(t, '.json')))), e), new Map()),
                c = async function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
                        i = t.get(e),
                        n = t.get('ru');
                    if (i) return i();
                    if (n) return n();
                    throw new a.t('No translations for '.concat(e, ' or ru languages'));
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
        98774: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => s });
            var a = i(51724),
                n = i(20775);
            let s = (e) => {
                let { available: t, disclaimers: i } = (0, a.f)(e);
                return (0, n.x)(t, i) ? { index: !1, follow: !0 } : void 0;
            };
        },
        98953: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => a });
            var a = (function (e) {
                return (
                    (e.ALBUM = 'album'),
                    (e.ARTIST = 'artist'),
                    (e.PLAYLIST = 'playlist'),
                    (e.TRACK = 'track'),
                    (e.CLIP = 'clip'),
                    (e.LABEL = 'label'),
                    (e.CONCERT = 'concert'),
                    e
                );
            })({});
        },
        99839: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => a });
            let a = () => ({ year: 'numeric' });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                9904, 7191, 3078, 1191, 8194, 8655, 1312, 6706, 4771, 2662, 6904, 1898, 2058, 3578, 8628, 4378, 9780, 8283, 9332, 2837, 9202, 4732, 9087, 3979, 6719,
                1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 6374, 2088, 763, 2670, 7358,
            ],
            () => e((e.s = 1814)),
        ),
            (_N_E = e.O()));
    },
]);
