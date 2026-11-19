(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7722],
    {
        324: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => r });
            var i = a(28166);
            function r(e) {
                return {
                    ios: { app_name: e.appName, app_store_id: '520797969', url: ''.concat(i.Lz, '/').concat(e.additional.url) },
                    web: { url: e.additional.fullUrl },
                };
            }
        },
        1220: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { $: () => i }),
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
                })(i || (i = {})));
        },
        1917: (e) => {
            e.exports = {
                root: 'ArtistFamiliarPageHeader_root__0Wxyx',
                container: 'ArtistFamiliarPageHeader_container__HFQzt',
                title: 'ArtistFamiliarPageHeader_title__YpVQg',
                tabs: 'ArtistFamiliarPageHeader_tabs__CrnJC',
                tab: 'ArtistFamiliarPageHeader_tab__RK4OK',
                tabsShimmer: 'ArtistFamiliarPageHeader_tabsShimmer__cbLvV',
                tabShimmer: 'ArtistFamiliarPageHeader_tabShimmer__iLiqI',
                staticHeader: 'ArtistFamiliarPageHeader_staticHeader__LrzR8',
                important: 'ArtistFamiliarPageHeader_important__buc81',
                stickyHeader: 'ArtistFamiliarPageHeader_stickyHeader__u7JdF',
            };
        },
        2218: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => s });
            var i = a(28166),
                r = a(77863);
            let n = '@yandexmusic';
            function s(e) {
                return e.cardType === r.W.SUMMARY_LARGE_IMAGE
                    ? { card: r.W.SUMMARY_LARGE_IMAGE, site: n, title: e.title, description: e.description }
                    : {
                          card: r.W.APP,
                          site: n,
                          title: e.title,
                          app: { id: { iphone: '520797969' }, name: e.appName, url: { iphone: ''.concat(i.Lz, '/').concat(e.url) } },
                      };
            }
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
        10679: (e) => {
            e.exports = {
                root: 'ArtistFamiliarPageContent_root__0Mc9t',
                scrollContainer: 'ArtistFamiliarPageContent_scrollContainer__TD6Kj',
                important: 'ArtistFamiliarPageContent_important__o2KTP',
                content: 'ArtistFamiliarPageContent_content__QquDA',
                block: 'ArtistFamiliarPageContent_block__Cr2H_',
                blockHeader: 'ArtistFamiliarPageContent_blockHeader__Z_uvq',
                tracksBlock: 'ArtistFamiliarPageContent_tracksBlock__SCCLT',
                footer: 'ArtistFamiliarPageContent_footer__nveR8',
                item: 'ArtistFamiliarPageContent_item__fyC2q',
                shimmerTitle: 'ArtistFamiliarPageContent_shimmerTitle__WU3vH',
            };
        },
        10829: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => v });
            var i = a(88800),
                r = a(65724),
                n = a(84961),
                s = a(53548),
                l = a(17392),
                o = a(34126),
                c = a(39079),
                d = a(72288),
                u = a(39267),
                m = a(13619),
                _ = a(73805),
                p = a(15232),
                g = a(56712),
                h = a(26243),
                x = a.n(h);
            let v = (0, n.PA)((e) => {
                var t;
                let {
                        track: a,
                        playContextParams: n,
                        className: h,
                        withDNDBlock: v,
                        isDragging: f,
                        draggingClassName: b,
                        ignoreDislikedStyles: C,
                        withSecondaryColor: k,
                        handleRemove: A,
                        withDislike: y,
                        withTrailer: T = !0,
                        beforeTitle: N,
                        removeButtonAriaLabel: I,
                        hideControls: L,
                    } = e,
                    j = (0, c.D)({ playContextParams: n, entityId: a.entityId }),
                    {
                        settings: { isMobile: S },
                    } = (0, d.g)(),
                    E = (0, o.X)(a.trackSource, { isMobile: S }),
                    O = (0, s.useCallback)(
                        (e) =>
                            (0, i.jsx)(u.q, {
                                isAvailable: a.isAvailable,
                                isDisliked: a.isDisliked,
                                coverUri: a.coverUri,
                                title: a.title,
                                className: x().playButtonCell,
                                ignoreDislikedStyles: C,
                                radius: 'xs',
                                ...e,
                            }),
                        [C, a.coverUri, a.isAvailable, a.isDisliked, a.title],
                    );
                return (0, i.jsx)(g.C, {
                    className: (0, r.$)(h, { [x().trackWithDots]: v, [x().important]: v }),
                    track: a,
                    beforeBlock: v ? (0, i.jsx)(m.O, { className: (0, r.$)(x().dots, b), isDragging: f }) : void 0,
                    meta: (0, i.jsx)(p.j, { withArtistLink: E, beforeTitle: N, track: a, ignoreDislikedStyles: C, withSecondaryColor: k }),
                    playButtonCellRender: O,
                    controls: (0, i.jsx)(_.Q, {
                        track: a,
                        className: x().controlsBarCell,
                        ignoreDislikedStyles: C,
                        utmLink: null == (t = n.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: k,
                        handleRemove: A,
                        withDislike: y,
                        withTrailer: T,
                        removeButtonAriaLabel: I,
                        hideControls: L,
                    }),
                    ...j,
                    'data-test-id': l.Kq.track.TRACK_PLAYLIST,
                });
            });
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
        12526: (e, t, a) => {
            var i = { './en.json': [46983, 6983], './kk.json': [64042, 4042], './ru.json': [20937, 937], './uz.json': [76707, 6707] };
            function r(e) {
                if (!a.o(i, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = i[e],
                    r = t[0];
                return a.e(t[1]).then(() => a.t(r, 19));
            }
            ((r.keys = () => Object.keys(i)), (r.id = 12526), (e.exports = r));
        },
        12533: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => i });
            let i = (e, t) => {
                let [a, i] = e.split('?'),
                    r = new URLSearchParams(i || '');
                for (let [e, a] of new URLSearchParams(t).entries()) r.set(e, a);
                let n = r.toString();
                return ''.concat(a).concat(n ? '?'.concat(n) : '');
            };
        },
        13619: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => o });
            var i = a(88800),
                r = a(65724),
                n = a(52300),
                s = a(30907),
                l = a.n(s);
            let o = (e) => {
                let { isDragging: t, className: a } = e;
                return (0, i.jsx)(n.I, { variant: 'dragDots', size: 'xxs', className: (0, r.$)(l().root, { [l().root_active]: t }, a), 'aria-hidden': !0 });
            };
        },
        13797: (e) => {
            e.exports = {
                root: 'AlbumTrackShimmer_root__fBjbK',
                infoContainer: 'AlbumTrackShimmer_infoContainer__4fdAk',
                coverContainer: 'AlbumTrackShimmer_coverContainer__frW12',
                textContainer: 'AlbumTrackShimmer_textContainer__5wNPM',
                title: 'AlbumTrackShimmer_title__HC_Pa',
                cover: 'AlbumTrackShimmer_cover__36UkV',
                action: 'AlbumTrackShimmer_action__oI5t5',
            };
        },
        14912: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => r });
            var i = a(53548);
            let r = () =>
                (0, i.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        15232: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => T });
            var i = a(88800),
                r = a(65724),
                n = a(84961),
                s = a(53548),
                l = a(2058),
                o = a(58390),
                c = a(17392),
                d = a(79070),
                u = a(17610),
                m = a(29504),
                _ = a(13946),
                p = a(55693),
                g = a(72288),
                h = a(24548),
                x = a(85587),
                v = a(90224),
                f = a(91292),
                b = a(7608),
                C = a(6667),
                k = a(85463),
                A = a(65462),
                y = a.n(A);
            let T = (0, n.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: a,
                        track: n,
                        albumArtists: A,
                        withExplicitMark: T,
                        withSecondaryColor: N,
                        captionSize: I = 'm',
                        explicitSize: L = 'xxxs',
                        withAllArtistsTitle: j,
                        textClassName: S,
                        artistsClassName: E,
                        ignoreDislikedStyles: O,
                        withCustomTooltip: w = !0,
                        hasLineClamp: R = !0,
                        withSavingQueryParams: P,
                        beforeTitle: M,
                        withArtistLink: D,
                        variant: B,
                        withTrackLink: F,
                        afterTitle: U,
                        withContextMenuArtists: H,
                    } = e,
                    { formatMessage: z } = (0, l.A)(),
                    { sendNavigateSearchFeedback: W } = (0, p.z)(),
                    {
                        settings: { isMobile: Y },
                        slam: K,
                    } = (0, g.g)(),
                    $ = (0, C.$)({ withCustomTooltip: w }),
                    G = (0, o.useSearchParams)(),
                    V = (0, b.B)(n, {
                        isMobile: Y,
                        isOfflineModeEnabled: K.isOfflineModeEnabled,
                        albumArtists: A,
                        withTrackLink: F,
                        withArtistLink: D,
                        variant: B,
                        withExplicitMark: T,
                        query: P ? Object.fromEntries(G) : void 0,
                    }),
                    {
                        displayTitle: X,
                        ariaLabel: q,
                        tooltipText: Z,
                        titleAttribute: J,
                        versionTitleAttribute: Q,
                        isTooltipEnabled: ee,
                    } = ((e, t, a, i) => {
                        var r, n;
                        let { canEnableCustomTooltip: s, isMobile: l } = a,
                            o = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, i),
                            c = t.shouldShowRemovedTitle ? o : ''.concat(o, ' ').concat(null != (r = t.version) ? r : ''),
                            d = i({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: o,
                            ariaLabel: ''.concat(d, ' ').concat(null != (n = e.version) ? n : ''),
                            tooltipText: c,
                            isTooltipEnabled: s && !l,
                            titleAttribute: !s && (t.shouldShowRemovedTitle || t.link) ? c : void 0,
                            versionTitleAttribute: s ? void 0 : t.version,
                        };
                    })(n, V, { canEnableCustomTooltip: $, isMobile: Y }, z),
                    et = (0, k.O)({ track: n, onNavigate: W, withSavingQueryParams: P, entityType: x.n.TRACK }),
                    ea = (0, s.useCallback)(
                        (e) =>
                            (0, i.jsx)(u.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: Z,
                                hoverSettings: h.V,
                                children: (0, i.jsx)(m.HL, {
                                    className: (0, r.$)(y().text, y().title),
                                    type: 'entity',
                                    size: I,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: X,
                                }),
                            }),
                        [I, X, Z, ee],
                    ),
                    ei = (0, d.L)(() =>
                        V.shouldShowRemovedTitle
                            ? (0, i.jsx)(u.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: Z,
                                  hoverSettings: h.V,
                                  children: (0, i.jsx)(m.HL, {
                                      className: (0, r.$)(y().text, y().title),
                                      type: 'entity',
                                      size: I,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: J,
                                      children: X,
                                  }),
                              })
                            : V.link
                              ? (0, i.jsx)(f.N, {
                                    onClick: et,
                                    className: y().albumLink,
                                    href: V.link.href,
                                    'aria-label': q,
                                    title: J,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: ea(),
                                })
                              : ea({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    er = (0, s.useMemo)(() => +!!R, [R]);
                return (0, i.jsx)('div', {
                    className: (0, r.$)(y().root, { [y().root_disabled]: !n.isAvailable, [y().root_disliked]: n.isDisliked && !O, [y().root_withSecondaryColor]: N }, t),
                    children: (0, i.jsxs)('div', {
                        className: y().metaContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: (0, r.$)(y().titleContainer, { [y().titleContainer_withVersion]: n.version }, a),
                                children: [
                                    (0, i.jsxs)(m.HL, {
                                        className: (0, r.$)(y().text, S),
                                        type: 'entity',
                                        size: I,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            M,
                                            ei,
                                            V.version &&
                                                (0, i.jsxs)(m.HL, {
                                                    className: (0, r.$)(y().text, y().version),
                                                    type: 'entity',
                                                    size: I,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: Q,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', V.version],
                                                }),
                                        ],
                                    }),
                                    V.explicitMark &&
                                        (0, i.jsx)(v.N, {
                                            containerClassName: y().explicitMarkContainer,
                                            getDescriptionTexts: n.getDescriptionTexts,
                                            size: L,
                                            variant: V.explicitMark,
                                            className: y().explicitMark,
                                            trackId: n.id,
                                        }),
                                    U,
                                ],
                            }),
                            V.artists.length > 0 &&
                                (0, i.jsx)(_.i, {
                                    className: (0, r.$)(y().text, { [y().artists]: R }, E, S),
                                    withAllArtistsTitle: j,
                                    linkClassName: (0, r.$)(y().text, y().link),
                                    captionClassName: (0, r.$)(y().text, y().artistCaption),
                                    artists: V.artists,
                                    withLink: V.withArtistLink,
                                    lineClamp: er,
                                    captionSize: I,
                                    withContextMenu: H,
                                }),
                        ],
                    }),
                });
            });
        },
        15854: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 59687));
        },
        18452: (e) => {
            e.exports = { shimmer: 'TracksList_shimmer__jD4N4' };
        },
        19998: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => A });
            var i = a(88800),
                r = a(65724),
                n = a(84961),
                s = a(53548),
                l = a(88969),
                o = a(17392),
                c = a(29993),
                d = a(96817),
                u = a(29504),
                m = a(4086),
                _ = a(41928),
                p = a(46422),
                g = a(4370),
                h = a(78940),
                x = a(85587),
                v = a(15253),
                f = a(91292),
                b = a(28806),
                C = a.n(b);
            let k = {
                    [x.n.ALBUM]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [x.n.PODCAST]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [x.n.ARTIST]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [x.n.TRACK]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [x.n.AUDIOBOOK]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [x.n.CLIP]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                A = (0, n.PA)((e) => {
                    var t;
                    let { modalState: a, data: n, onClose: b, className: A } = e,
                        y = null != n ? n : null == a ? void 0 : a.modalData,
                        T = (0, p.W)(),
                        N = (0, h.Z)(g.Z.main.href),
                        I = (0, _.N)().get(m.U2),
                        L = (0, c.c)(() => {
                            if (b) return b();
                            (T.canBack && T.back(), N());
                        }),
                        j = (null == y || null == (t = y.details) ? void 0 : t.url) && y.details.text,
                        S = (0, c.c)(() => {
                            var e;
                            null == a || a.setConfirmUnsafeDisclaimer(!0);
                            let t = I.get(v.c.ExEx),
                                i = new Date(),
                                r = i.setMinutes(i.getMinutes() + 15),
                                n =
                                    null != (e = null == a ? void 0 : a.entityKey)
                                        ? e
                                        : ''.concat(null == a ? void 0 : a.entityType, '_').concat(null == a ? void 0 : a.entityId);
                            (t ? I.set(v.c.ExEx, [...t, n], { expires: new Date(r) }) : I.set(v.c.ExEx, [n], { expires: new Date(r) }),
                                null == b || b(),
                                (null == a ? void 0 : a.onDisclaimerConfirmHandler) && a.onDisclaimerConfirmHandler());
                        }),
                        E = (0, c.c)(() => {
                            ((null == a ? void 0 : a.shouldHistoryBack) ? (null == b || b(), T.canBack && T.back(), N()) : null == b || b(),
                                (null == a ? void 0 : a.onDisclaimerRejectHandler) && a.onDisclaimerRejectHandler());
                        });
                    (0, s.useEffect)(
                        () => () => {
                            null == a || a.reset();
                        },
                        [a],
                    );
                    let O = (0, s.useMemo)(() => {
                            if (y) {
                                var e, t;
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, r.$)(C().title, C().text),
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: y.title,
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: C().text,
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: y.description,
                                        }),
                                        j &&
                                            (0, i.jsx)(f.N, {
                                                href: null == (e = y.details) ? void 0 : e.url,
                                                className: C().link,
                                                children: (0, i.jsx)(u.HL, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'normal',
                                                    children: null == (t = y.details) ? void 0 : t.text,
                                                }),
                                            }),
                                    ],
                                });
                            }
                            return null;
                        }, [y, j]),
                        w = (0, s.useMemo)(
                            () =>
                                (null == a ? void 0 : a.type) === x.Z.UNSAFE
                                    ? (0, i.jsxs)('div', {
                                          className: C().buttons,
                                          children: [
                                              (0, i.jsx)(d.$, {
                                                  color: 'primary',
                                                  onClick: E,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: C().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, i.jsx)(l.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, i.jsx)(d.$, {
                                                  color: 'secondary',
                                                  onClick: S,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: C().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: a.entityType && k[a.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, i.jsx)('div', {
                                          className: C().buttons,
                                          children: (0, i.jsx)(d.$, {
                                              color: 'primary',
                                              onClick: L,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: C().button,
                                              'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, i.jsx)(l.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [S, null == a ? void 0 : a.entityType, null == a ? void 0 : a.type, L, E],
                        );
                    return (0, i.jsx)('div', {
                        className: (0, r.$)(C().root, A),
                        'data-test-id': o.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, i.jsxs)('div', { className: C().container, children: [O, w] }),
                    });
                });
        },
        20775: (e, t, a) => {
            'use strict';
            a.d(t, { x: () => r });
            var i = a(62837);
            let r = (e, t) => !e && !!(t && (0, i.Ve)(t, i.Yw.MODAL));
        },
        21424: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => i });
            let i = (e, t) => (e.langs.includes(t) ? t : e.defaultLang);
        },
        21438: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => r });
            let i = /^(0|[1-9]\d*)$/;
            function r(e) {
                return void 0 !== e && !(e.length > 40) && i.test(e);
            }
        },
        26243: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
        },
        26835: (e) => {
            e.exports = {
                root: 'PlaylistTrackShimmer_root__nZ9KR',
                infoContainer: 'PlaylistTrackShimmer_infoContainer__xLd7a',
                textContainer: 'PlaylistTrackShimmer_textContainer__QI5cC',
                title: 'PlaylistTrackShimmer_title__MojYd',
                cover: 'PlaylistTrackShimmer_cover__xyDhR',
                action: 'PlaylistTrackShimmer_action__tT5xx',
            };
        },
        27157: (e) => {
            e.exports = {
                root: 'CommonTrack_root__i6shE',
                root_disabled: 'CommonTrack_root_disabled__vDyCm',
                root_current: 'CommonTrack_root_current__MNrpS',
                ripple: 'CommonTrack_ripple__wnpUs',
            };
        },
        27342: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => r });
            var i = a(53548);
            let r = (e, t) => {
                (0, i.useEffect)(
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
        29201: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => r });
            var i = a(35396);
            let r = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, i.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        30144: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => p });
            var i = a(53548),
                r = a(58390),
                n = a(51611),
                s = a(65523);
            let l = {
                other: {
                    'apple-mobile-web-app-capable': 'yes',
                    'apple-mobile-web-app-status-bar-style': 'black',
                    'apple-mobile-web-app-title': 'Яндекс Музыка',
                    robots: 'noyaca',
                },
            };
            var o = a(46511);
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
            var d = a(88349),
                u = a(91241);
            let m = (e, t) => {
                    let a = window.document.querySelector('meta['.concat(e, '="').concat(t, '"]'));
                    if (a) return a;
                    let i = window.document.createElement('meta');
                    return (i.setAttribute(e, t), i);
                },
                _ = (e) => {
                    let { title: t, description: a, openGraph: i } = e;
                    if (('string' == typeof t && (window.document.title = t), 'string' == typeof a)) {
                        let e = m('name', 'description');
                        (e.setAttribute('content', a), window.document.head.appendChild(e));
                    }
                    let r = '';
                    if (i) {
                        let e = 'string' == typeof i.title ? i.title : '',
                            t = 'string' == typeof i.description ? i.description : '',
                            a = Array.isArray(i.images) ? i.images[0] : null;
                        r = a && 'object' == typeof a && 'url' in a ? String(a.url) : '';
                        let n = m('property', 'og:title'),
                            s = m('property', 'og:description'),
                            l = m('property', 'og:image');
                        (n.setAttribute('content', e),
                            s.setAttribute('content', t),
                            l.setAttribute('content', r),
                            window.document.head.appendChild(n),
                            window.document.head.appendChild(s),
                            window.document.head.appendChild(l));
                    }
                },
                p = (e) => {
                    let { language: t } = (0, n.h)(),
                        a = (0, s.U)(),
                        l = (0, r.usePathname)(),
                        o = (0, r.useSearchParams)().toString();
                    (0, i.useEffect)(() => {
                        if (!e) return;
                        let i = !0,
                            r = ((e, t) => ({ fullUrl: e.href, locale: new Intl.Locale(t), url: e.pathname, tld: (0, d.f)(e.host) || u.l, host: e.host }))(
                                window.location,
                                t,
                            ),
                            n = window.location.pathname + window.location.search,
                            s = () => i && n === window.location.pathname + window.location.search;
                        return (
                            (async () => {
                                try {
                                    let t = await e(r);
                                    if (!s() || !t) return;
                                    let a = 'string' == typeof t.title && t.title.trim() ? t.title : (await c(r)).title;
                                    s() && _({ ...t, title: a });
                                } catch (e) {
                                    if (!s()) return;
                                    a.error('[ClientMetadata] Failed to update metadata', { error: e });
                                    try {
                                        let e = await c(r);
                                        s() && _(e);
                                    } catch (e) {
                                        s() && a.error('[ClientMetadata] Failed to load fallback metadata', { error: e });
                                    }
                                }
                            })(),
                            () => {
                                i = !1;
                            }
                        );
                    }, [e, t, a, l, o]);
                };
        },
        30907: (e) => {
            e.exports = { root: 'DragAndDropIcon_root__OstQU', root_active: 'DragAndDropIcon_root_active__xOTKt' };
        },
        32596: (e, t, a) => {
            'use strict';
            a.d(t, { SomethingWentWrong: () => w });
            var i = a(88800),
                r = a(65724),
                n = a(84961),
                s = a(53548),
                l = a(2058),
                o = a(88969);
            a(30282);
            var c = a(96817),
                d = a(52300),
                u = a(29504),
                m = a(97234),
                _ = a(59714),
                p = a(43054),
                g = a(18117),
                h = a(93940),
                x = a(24709);
            let v = (0, x.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, p.s)()) ? void 0 : e.evgenInstance,
                        { hash: a } = (0, g.g)(),
                        { screen: i } = (0, h.j)();
                    return {
                        sendRefreshEvent: (0, s.useCallback)(() => {
                            if (!t || !a || !(null == i ? void 0 : i.pageId)) return;
                            let e = {
                                actionType: m.ActionType.Refresh,
                                userInteractionType: m.UserInteractionType.Tap,
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                hash: a,
                                pageId: i.pageId,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, _.bv)(t, e);
                        }, [t, a, null == i ? void 0 : i.pageId]),
                    };
                }),
                f = (0, x.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let a = null == (t = (0, p.s)()) ? void 0 : t.evgenInstance,
                        { hash: i } = (0, g.g)(),
                        { screen: r } = (0, h.j)();
                    (0, s.useEffect)(() => {
                        if (!a || !i || !(null == r ? void 0 : r.pageId)) return;
                        let t = {
                            entityType: m.EntityTypes.Error,
                            entityId: m.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: i,
                            pageId: r.pageId,
                            pageStyle: m.PageStyles.Fullscreen,
                            pagePlacement: m.PagePlacements.Fullscreen,
                            mainObjectType: m.DomainObjectType.NonApplicable,
                            mainObjectId: m.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, _.z5)(a, t);
                    }, [a, e, i, null == r ? void 0 : r.pageId]);
                });
            var b = a(44230),
                C = a(4370),
                k = a(72288),
                A = a(97956),
                y = a(56248),
                T = a(90688),
                N = a(78940);
            let I = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var L = a(96856),
                j = a.n(L);
            let S = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: a = !0, onBack: n } = e,
                    { slam: s } = (0, k.g)(),
                    { contentRef: l } = (0, b.g)(),
                    d = (0, N.Z)(C.Z.mymusicDownloadsTracks.href);
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(j().root, t),
                    children: [
                        a &&
                            (0, i.jsx)(y.L, {
                                withBackwardFallback: '/',
                                className: (0, r.$)(j().navigation, { [j().navigation_desktop]: !l }),
                                withForwardControl: !1,
                                onBackwardClick: n,
                            }),
                        (0, i.jsxs)('div', {
                            className: (0, r.$)(j().content, { [j().content_shrink]: !a }),
                            children: [
                                (0, i.jsx)(T._V, { className: j().image, src: I.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, i.jsxs)('div', {
                                    className: j().message,
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            className: j().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, i.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            className: j().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, i.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                s.hasDownloadedTracks &&
                                    (0, i.jsx)(c.$, {
                                        className: j().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, i.jsx)(u.HL, {
                                            className: j().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, i.jsx)(o.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var E = a(9184),
                O = a.n(E);
            let w = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: a = !0, onBack: n } = e,
                    { formatMessage: m } = (0, l.A)(),
                    _ = (0, s.useContext)(k.P),
                    p = null == _ ? void 0 : _.experiments.checkExperiment(A.z.WebNextUnstableMusicScreen, 'on'),
                    g = m(p ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                f(g);
                let { sendRefreshEvent: h } = v(),
                    x = (0, s.useCallback)(() => {
                        (h(), (window.location.href = C.Z.main.href));
                    }, [h]),
                    { contentRef: T } = (0, b.g)();
                return p
                    ? (0, i.jsx)(S, { className: t, withBackwardControl: a, onBack: n })
                    : (0, i.jsxs)('div', {
                          className: (0, r.$)(O().root, t),
                          children: [
                              a &&
                                  (0, i.jsx)(y.L, {
                                      withBackwardFallback: '/',
                                      className: (0, r.$)(O().navigation, { [O().navigation_desktop]: !T }),
                                      withForwardControl: !1,
                                      onBackwardClick: n,
                                  }),
                              (0, i.jsxs)('div', {
                                  className: (0, r.$)(O().content, { [O().content_shrink]: !a }),
                                  children: [
                                      (0, i.jsx)(d.I, { className: O().icon, variant: 'attention', size: 'xxl' }),
                                      (0, i.jsx)(u.DZ, { className: (0, r.$)(O().title, O().important), variant: 'h3', size: 'xs', children: g }),
                                      (0, i.jsxs)(u.HL, {
                                          className: (0, r.$)(O().text, O().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, i.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, i.jsx)(c.$, {
                                          onClick: x,
                                          className: O().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, i.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, i.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        33586: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => s });
            var i = a(88800),
                r = a(53548),
                n = a(12241);
            let s = (e) => {
                let { sourceContextData: t, children: a } = e,
                    s = (0, r.useMemo)(() => ({ sourceContextData: t }), [t]);
                return (0, i.jsx)(n.l.Provider, { value: s, children: a });
            };
        },
        35396: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { C: () => n }),
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
                })(i || (i = {})));
            let r = new Set(Object.values(i)),
                n = (e) => 'string' == typeof e && r.has(e);
        },
        41867: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        45383: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => n });
            var i = a(67174);
            let r = {
                    'ru-ru': 'https://music.yandex.ru',
                    'ru-kz': 'https://music.yandex.kz',
                    'ru-uz': 'https://music.yandex.uz',
                    'ru-by': 'https://music.yandex.by',
                    en: 'https://music.yandex.com',
                    'x-default': 'https://music.yandex.ru',
                },
                n = function (e, t) {
                    for (var a = arguments.length, n = Array(a > 2 ? a - 2 : 0), s = 2; s < a; s++) n[s - 2] = arguments[s];
                    let [l] = n,
                        o = '/' === e ? '' : e,
                        c = (e) => ({ ...(null != l ? l : {}), options: e }),
                        d = {},
                        { href: u } = (0, i.u)(o, c({ linkType: 'canonical', host: 'https://music.yandex.'.concat(t) }));
                    for (let [e, t] of Object.entries(r)) {
                        let { href: a } = (0, i.u)(o, c({ linkType: 'alternate', host: t, lang: e }));
                        d[e] = a;
                    }
                    return { canonical: u, languages: d };
                };
        },
        46511: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => d });
            var i = a(27794),
                r = a(53548),
                n = a(72542),
                s = a(83602),
                l = a(21424),
                o = a(95330);
            let c = (0, r.cache)(async (e) => (0, o.M)(e, o.X)),
                d = async (e) => {
                    let t = (e || s.E.getDefaultLocale()).language,
                        a = (0, l.k)(n.pE[n.cy], t),
                        r = await c(a);
                    return (e, t) => {
                        let n = null == r ? void 0 : r[e.id],
                            s = '';
                        return ((Array.isArray(n) || 'string' == typeof n) && (s = new i.S(n, a).format(t)), Array.isArray(s) ? s.join('') : s);
                    };
                };
        },
        46646: (e, t, a) => {
            var i = { './en.json': [61263, 1263], './kk.json': [85218, 5218], './ru.json': [74721, 4721], './uz.json': [20075, 75] };
            function r(e) {
                if (!a.o(i, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = i[e],
                    r = t[0];
                return a.e(t[1]).then(() => a.t(r, 19));
            }
            ((r.keys = () => Object.keys(i)), (r.id = 46646), (e.exports = r));
        },
        47580: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => i });
            let i = (e) => e.map((e) => e.name).join(', ');
        },
        51724: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => i });
            let i = (e) => {
                var t, a, i, r, n, s;
                let l = null == (t = e.available) || t,
                    o = null != (a = e.disclaimers) ? a : [];
                return (
                    e.contentRestrictions &&
                        ((l = null == (n = null == (i = e.contentRestrictions) ? void 0 : i.available) || n),
                        (o = null != (s = null == (r = e.contentRestrictions) ? void 0 : r.disclaimers) ? s : [])),
                    { available: l, disclaimers: o }
                );
            };
        },
        52559: (e) => {
            e.exports = { root: 'ArtistFamiliarPageEmpty_root__s5xX9', icon: 'ArtistFamiliarPageEmpty_icon__b7kR5', title: 'ArtistFamiliarPageEmpty_title__wvBGS' };
        },
        53073: (e, t, a) => {
            'use strict';
            function i() {
                return { appId: '117328825040925' };
            }
            a.d(t, { k: () => i });
        },
        56712: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => A });
            var i = a(88800),
                r = a(65724),
                n = a(84961),
                s = a(53548),
                l = a(91177),
                o = a(46482),
                c = a(29993),
                d = a(52073),
                u = a(5407),
                m = a(9618),
                _ = a(4795),
                p = a(55693),
                g = a(7123),
                h = a(72288),
                x = a(8990),
                v = a(2058),
                f = a(47580),
                b = a(95993),
                C = a(27157),
                k = a.n(C);
            let A = (0, n.PA)((e) => {
                var t;
                let {
                        className: a,
                        track: n,
                        meta: C,
                        beforeBlock: A,
                        controls: y,
                        playButtonCellRender: T,
                        withLightning: N,
                        isPlaying: I,
                        isCurrent: L,
                        togglePlay: j,
                        restartPlay: S,
                        onPlayClick: E,
                        playButtonIconSize: O,
                        skipFreemiumCloseListeningPaywall: w = !1,
                        ...R
                    } = e,
                    { shouldShowBuySubscriptionModal: P, showBuySubscriptionModal: M } = (0, m.q)(),
                    {
                        track: D,
                        fullscreenPlayer: B,
                        settings: { isMobile: F },
                        album: U,
                        albumCPA: { isPlusCPAPlayerBarEnabled: H },
                        paywall: { modal: z },
                    } = (0, h.g)(),
                    W = (0, l.D)(),
                    Y = (0, o.g)(),
                    K = (0, u.P)(),
                    $ = ((e) => {
                        let { track: t, withLightning: a } = e,
                            { formatMessage: i } = (0, v.A)();
                        return ((e, t, a) => {
                            var i;
                            let { withLightning: r } = t,
                                n = (0, f.j)(null != (i = e.artists) ? i : []);
                            return e.isAvailable
                                ? [n, e.title, e.version, r && a({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                                : ''
                                      .concat(a({ id: 'extra-explicit.play-unavailable' }), ' ')
                                      .concat(n, ' ')
                                      .concat(e.title);
                        })(t, { withLightning: a }, i);
                    })({ withLightning: N, track: n }),
                    G = ((e) => {
                        let { sonataState: t } = (0, h.g)(),
                            a = t.status === g.MT.LOADING_MEDIA_SOURCE || t.status === g.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let i = t.entityMeta.entityId;
                            return a && i === e;
                        }
                        return a;
                    })(n.entityId),
                    V = H(U.id, null == (t = U.meta) ? void 0 : t.isNonMusic),
                    X = n.isAvailable && P && !V,
                    q = (0, _.N)(),
                    Z = n.isAvailable && q && !V && !w,
                    J = (0, b.w)({ track: n, callback: j }),
                    Q = (0, c.c)(() => {
                        D.open({ trackId: n.id, albumId: n.albumId });
                    }),
                    ee = (0, b.w)({ track: n, callback: Q }),
                    { sendPlaySearchFeedback: et } = (0, p.z)(),
                    [ea, ei] = (0, s.useState)(!1),
                    er = (0, c.c)(() => {
                        if (!K()) {
                            if (X) return void M();
                            if (Z) return void z.open();
                            (ea || I || (ei(!0), null == et || et()), J(), I || Y(), null == E || E(!I));
                        }
                    }),
                    en = (0, c.c)(() => {
                        if (I) return void S();
                        er();
                    }),
                    es = (0, c.c)((e) => {
                        if (!n.isAvailable && !n.hasModalAccess) {
                            (P && n.isAvailableOnlyForPlus && M(), q && n.isAvailableOnlyForPlus && z.open());
                            return;
                        }
                        if (X) return void M();
                        let t = !F && (2 === e.detail || (1 === e.detail && n.hasTrackLink && !B.modal.isOpened));
                        return Z && !t
                            ? void z.open()
                            : ((0, d.P)(e, k().ripple), F)
                              ? void er()
                              : 2 === e.detail
                                ? void en()
                                : void (1 === e.detail && n.hasTrackLink && !B.modal.isOpened && (ee(), Z && z.open()));
                    }),
                    el = null == T ? void 0 : T({ onPlayButtonClick: er, isPlaying: I, isCurrent: L, isLoading: G, playButtonIconSize: O });
                return (0, i.jsxs)(x.C, {
                    ref: W,
                    'aria-label': $,
                    // for PulseSync WebHost: BEGIN publish the track ID on the native track DOM element for addons
                    'data-pulsesync-track-id': n.id,
                    // for PulseSync WebHost: END publish the track ID on the native track DOM element for addons
                    onClick: es,
                    className: (0, r.$)(k().root, { [k().root_disabled]: !n.isAvailable, [k().root_current]: L && F }, a),
                    ...R,
                    children: [A, el, C, y],
                });
            });
        },
        57297: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => n });
            var i = a(35412),
                r = a(83602);
            function n(e) {
                let { ogTitle: t, ogDescription: a, fullUrl: n, locale: s, ogImage: l, siteName: o, ogType: c, customImage: d } = e,
                    u = l ? { url: (0, i.lU)(l, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
                return {
                    title: t,
                    description: a,
                    url: n,
                    ...(c && { type: c }),
                    siteName: o,
                    locale: (s || r.E.getDefaultLocale()).toString().replace('-', '_'),
                    images: u || d,
                };
            }
        },
        59687: (e, t, a) => {
            'use strict';
            (a.r(t), a.d(t, { default: () => eD }));
            var i = a(88800),
                r = a(58390),
                n = a(84961),
                s = a(53548),
                l = a(97234),
                o = a(59724),
                c = a(46384),
                d = a(17392),
                u = a(98225),
                m = a(32596),
                _ = a(69630),
                p = a(91959),
                g = a(64284),
                h = a(98427),
                x = a(44230),
                v = a(37670),
                f = a(72288),
                b = a(78180),
                C = a(34303),
                k = a(19998),
                A = a(81685),
                y = a(30144),
                T = a(324),
                N = a(53073),
                I = a(83418),
                L = a(46511),
                j = a(57297),
                S = a(2218),
                E = a(77863),
                O = a(45383),
                w = a(98774);
            async function R(e, t) {
                var a, i, r;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let n = await (0, L.W)(t.locale),
                    s = n({ id: 'metadata.artist-familiar-you-title' }, { artistName: e.artist.name }),
                    l = n({ id: 'metadata.artist-familiar-you-description' }, { artistName: e.artist.name });
                return {
                    robots: (0, w.G)(e.artist),
                    title: s,
                    description: l,
                    openGraph: (0, j.i)({
                        ogTitle: s,
                        ogDescription: l,
                        ogType: 'website',
                        fullUrl: null != (a = t.fullUrl) ? a : '',
                        locale: t.locale,
                        customImage: (0, I.v)({ host: t.host }),
                        siteName: n({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, S.H)({ cardType: E.W.SUMMARY_LARGE_IMAGE, title: s, description: l }),
                    facebook: (0, N.k)(),
                    appLinks: (0, T.X)({
                        additional: { ...t, url: null != (i = t.url) ? i : '', fullUrl: null != (r = t.fullUrl) ? r : '', host: t.host },
                        appName: n({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, O.S)('/artist/:artistId/familiar', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var P = (function (e) {
                    return ((e[(e.COLLECTION = 0)] = 'COLLECTION'), (e[(e.VIBE = 1)] = 'VIBE'), e);
                })({}),
                M = a(27342),
                D = a(63512),
                B = a(99625),
                F = a.n(B),
                U = a(65724),
                H = a(2058),
                z = a(20584),
                W = a(18593),
                Y = a(59758),
                K = a(66719),
                $ = a(19994),
                G = a(10079),
                V = a(10829),
                X = a(84384),
                q = a(33586),
                Z = a(98644),
                J = a(18486),
                Q = a(47934),
                ee = a(86790),
                et = a(60266),
                ea = a(35412),
                ei = a(93015),
                er = a(18452),
                en = a.n(er);
            let es = function (e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5;
                    return Array.from({ length: a }, (a, r) => (0, i.jsx)(ei.D, { variant: t, className: en().shimmer, isActive: e }, r));
                },
                el = (e) => {
                    let { isShimmerVisible: t, isShimmerActive: a, variant: r, shimmersCount: n, className: s, children: l, ...o } = e;
                    return (0, i.jsx)('div', { className: (0, U.$)(en().root, s), ...(0, ea.OZ)(o), children: t ? es(a, r, n) : l });
                };
            var eo = a(93039);
            let ec = (e) => {
                let { artistId: t, entityContextType: a } = e;
                return (0, s.useMemo)(() => (t ? (0, eo.t)({ contextType: W.K.Artist, contextId: t, entityContextType: a }) : null), [t, a]);
            };
            var ed = a(88969),
                eu = a(29504),
                em = a(46422),
                e_ = a(63807),
                ep = a(56248),
                eg = a(87366),
                eh = a(76099),
                ex = a(29993),
                ev = a(12533),
                ef = a(14912);
            let eb = (e) => {
                let t = (0, ef.X)(),
                    a = (0, r.useSearchParams)();
                return (0, ex.c)((i) => {
                    var r;
                    let n = new URLSearchParams(a);
                    switch ((null == (r = e.onTabChange) || r.call(e, i), i)) {
                        case P.COLLECTION:
                            (n.set(C.K.TAB, b.J.COLLECTION), t((0, ev.C)(window.location.pathname, n)));
                            break;
                        case P.VIBE:
                            (n.set(C.K.TAB, b.J.VIBE), t((0, ev.C)(window.location.pathname, n)));
                    }
                });
            };
            var eC = a(1917),
                ek = a.n(eC);
            let eA = () =>
                    (0, i.jsxs)('div', {
                        className: ek().tabsShimmer,
                        children: [(0, i.jsx)($.W, { className: ek().tabShimmer }), (0, i.jsx)($.W, { className: ek().tabShimmer })],
                    }),
                ey = (0, n.PA)((e) => {
                    let { tabsState: t, tabElementId: a } = e,
                        { artist: r } = (0, f.g)(),
                        { formatMessage: n } = (0, H.A)(),
                        l = (0, em.W)(),
                        { isScrolling: o } = (0, s.useContext)(e_.B),
                        c = eb(t);
                    return (0, i.jsxs)('header', {
                        className: ek().root,
                        'aria-hidden': o,
                        'data-test-id': d.Xk.artist.ARTIST_FAMILIAR_PAGE_STATIC_HEADER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: ek().container,
                                children: [
                                    l.canBack && (0, i.jsx)(ep.L, { withForwardControl: !1, withBackwardControl: l.canBack, shouldFocusOnMount: !o }),
                                    (0, i.jsx)(eu.DZ, {
                                        variant: 'h1',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        className: ek().title,
                                        'data-test-id': d.Xk.artist.ARTIST_FAMILIAR_PAGE_STATIC_HEADER_TITLE,
                                        children: (0, i.jsx)(ed.A, { id: 'page.familiar-you' }),
                                    }),
                                ],
                            }),
                            (0, i.jsxs)(eh.wI, {
                                isShimmerVisible: r.familiarSubpage.isLoading,
                                shimmer: (0, i.jsx)(eA, {}),
                                className: ek().tabs,
                                elementId: a,
                                ...t,
                                onTabChange: c,
                                children: [
                                    (0, i.jsx)(eg.o, {
                                        className: ek().tab,
                                        value: P.COLLECTION,
                                        title: n({ id: 'page.familiar-collection' }),
                                        'aria-hidden': o,
                                        tabIndex: o ? -1 : 0,
                                    }),
                                    (0, i.jsx)(eg.o, {
                                        className: ek().tab,
                                        value: P.VIBE,
                                        title: n({ id: 'page.familiar-vibe' }),
                                        'aria-hidden': o,
                                        tabIndex: o ? -1 : 0,
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var eT = a(10679),
                eN = a.n(eT);
            let eI = (0, n.PA)((e) => {
                    var t;
                    let { forwardRef: a, tabsState: r, tabElementId: n, artistId: l } = e,
                        { artist: o } = (0, f.g)(),
                        { formatMessage: c } = (0, H.A)(),
                        { from: m } = (0, X.f)(),
                        _ = ec({ artistId: l, entityContextType: z.h.ARTIST_MY_COLLECTION }),
                        p = (0, s.useCallback)(
                            (e, t) => ({
                                contextData: {
                                    type: W.K.Various,
                                    meta: { id: String(l) },
                                    from: m,
                                    overrideAutoflowSeeds: ['artist:'.concat(l)],
                                    overrideContextType: Y.b.Artist,
                                },
                                queueParams: { index: t },
                                loadContextMeta: !1,
                                entitiesData: o.familiarSubpage.collectionEntitiesData,
                            }),
                            [o.familiarSubpage.collectionEntitiesData, l, m],
                        ),
                        g = (0, s.useMemo)(() => {
                            var e;
                            return (0, i.jsx)(el, {
                                isShimmerVisible: o.familiarSubpage.isLoading,
                                isShimmerActive: !0,
                                variant: Z.X.PLAYLIST,
                                shimmersCount: 10,
                                className: (0, U.$)(eN().block, eN().tracksBlock),
                                children:
                                    null == (e = o.familiarSubpage.collectionTracks)
                                        ? void 0
                                        : e.map((e, t) => (0, i.jsx)(V.K, { track: e, playContextParams: p(e, t) }, e.id)),
                            });
                        }, [o.familiarSubpage.collectionTracks, o.familiarSubpage.isLoading, p]),
                        h = (0, s.useMemo)(() => {
                            if (o.familiarSubpage.shouldShowTitleBlocks)
                                return o.familiarSubpage.isLoading
                                    ? (0, i.jsx)('div', {
                                          className: (0, U.$)(eN().block, eN().blockHeader),
                                          children: (0, i.jsx)($.W, { isActive: o.familiarSubpage.isLoading, className: eN().shimmerTitle, radius: 'l' }),
                                      })
                                    : (0, i.jsx)(J.T, { className: (0, U.$)(eN().block, eN().blockHeader), title: c({ id: 'entity-names.tracks' }) });
                        }, [o.familiarSubpage.isLoading, o.familiarSubpage.shouldShowTitleBlocks, c]),
                        x = (0, s.useMemo)(() => {
                            if (o.familiarSubpage.shouldShowTitleBlocks) return c({ id: 'entity-names.albums' });
                        }, [o.familiarSubpage.shouldShowTitleBlocks, c]);
                    return (0, i.jsx)(q._, {
                        sourceContextData: _,
                        children: (0, i.jsxs)(K.N, {
                            className: eN().root,
                            containerClassName: (0, U.$)(eN().scrollContainer, eN().important),
                            ref: a,
                            'data-test-id': d.Xk.familiarYou.FAMILIAR_YOU_SCROLLABLE_CONTENT_COLLECTION,
                            children: [
                                (0, i.jsx)(ey, { tabsState: r, tabElementId: n }),
                                (0, i.jsxs)(u.Kp, {
                                    value: r.value,
                                    name: P.COLLECTION,
                                    elementId: n,
                                    className: eN().content,
                                    children: [
                                        (0, i.jsxs)('section', { 'data-test-id': d.Xk.familiarYou.FAMILIAR_YOU_SECTION_TRACK, children: [h, g] }),
                                        (0, i.jsx)(Q.O, {
                                            isShimmerVisible: o.familiarSubpage.isLoading,
                                            isShimmerActive: !0,
                                            headerClassName: eN().blockHeader,
                                            containerClassName: eN().block,
                                            title: x,
                                            showHeaderShimmer: o.familiarSubpage.shouldShowTitleBlocks,
                                            'data-test-id': d.Xk.familiarYou.FAMILIAR_YOU_SECTION_ALBUM,
                                            children:
                                                null == (t = o.familiarSubpage.collectionAlbums)
                                                    ? void 0
                                                    : t.map((e) => (0, i.jsx)(G.a, { album: e, contentLinesCount: 3 }, e.id)),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(et.A, { children: (0, i.jsx)(ee.w, { className: eN().footer }) }),
                            ],
                        }),
                    });
                }),
                eL = (0, n.PA)((e) => {
                    let { forwardRef: t, tabsState: a, tabElementId: r, artistId: n } = e,
                        { artist: l } = (0, f.g)(),
                        { from: o } = (0, X.f)(),
                        c = ec({ artistId: n, entityContextType: z.h.ARTIST_FAMILIAR_FROM_WAVE }),
                        m = (0, s.useCallback)(
                            (e, t) => ({
                                contextData: {
                                    type: W.K.Various,
                                    meta: { id: String(n) },
                                    from: o,
                                    overrideAutoflowSeeds: ['artist:'.concat(n)],
                                    overrideContextType: Y.b.Artist,
                                },
                                queueParams: { index: t },
                                loadContextMeta: !1,
                                entitiesData: l.familiarSubpage.vibeEntitiesData,
                            }),
                            [l.familiarSubpage.vibeEntitiesData, n, o],
                        ),
                        _ = (0, s.useMemo)(() => {
                            var e;
                            return (0, i.jsx)(el, {
                                isShimmerVisible: l.familiarSubpage.isLoading,
                                isShimmerActive: !0,
                                variant: Z.X.PLAYLIST,
                                shimmersCount: 10,
                                className: (0, U.$)(eN().block, eN().tracksBlock),
                                children:
                                    null == (e = l.familiarSubpage.vibeTracks)
                                        ? void 0
                                        : e.map((e, t) => (0, i.jsx)(V.K, { track: e, playContextParams: m(e, t) }, e.id)),
                            });
                        }, [l.familiarSubpage.isLoading, l.familiarSubpage.vibeTracks, m]);
                    return (0, i.jsx)(q._, {
                        sourceContextData: c,
                        children: (0, i.jsxs)(K.N, {
                            className: eN().root,
                            containerClassName: (0, U.$)(eN().scrollContainer, eN().important),
                            ref: t,
                            'data-test-id': d.Xk.familiarYou.FAMILIAR_YOU_SCROLLABLE_CONTENT_VIBE,
                            children: [
                                (0, i.jsx)(ey, { tabsState: a, tabElementId: r }),
                                (0, i.jsx)(u.Kp, { value: a.value, name: P.VIBE, elementId: r, className: eN().content, children: _ }),
                                (0, i.jsx)(et.A, { children: (0, i.jsx)(ee.w, { className: eN().footer }) }),
                            ],
                        }),
                    });
                });
            var ej = a(52300),
                eS = a(52559),
                eE = a.n(eS);
            let eO = (e) => {
                let { tabsState: t, tabElementId: a } = e,
                    r = (0, s.useMemo)(() => {
                        switch (t.value) {
                            case P.COLLECTION:
                                return (0, i.jsx)(ed.A, { id: 'error-messages.empty-artist-familiar-collection-title' });
                            case P.VIBE:
                                return (0, i.jsx)(ed.A, { id: 'error-messages.empty-artist-familiar-vibe-title' });
                        }
                    }, [t.value]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(ey, { tabsState: t, tabElementId: a }),
                        (0, i.jsxs)('div', {
                            className: eE().root,
                            children: [
                                (0, i.jsx)(ej.I, { className: eE().icon, variant: 'attention', size: 'xxxl' }),
                                (0, i.jsx)(eu.DZ, { className: eE().title, variant: 'h3', size: 'xs', children: r }),
                            ],
                        }),
                    ],
                });
            };
            var ew = a(93317);
            let eR = (0, n.PA)((e) => {
                    let { tabsState: t, tabElementId: a } = e,
                        { artist: r } = (0, f.g)(),
                        { formatMessage: n } = (0, H.A)(),
                        { isScrolling: l } = (0, s.useContext)(e_.B),
                        o = (0, em.W)(),
                        c = eb(t);
                    return (0, i.jsx)(ew.Y, {
                        variant: ew.V.COMPOSITE,
                        staticClassName: (0, U.$)(ek().staticHeader, ek().important),
                        'aria-hidden': !l,
                        stickyClassName: (0, U.$)(ek().stickyHeader, ek().important),
                        stickyChild: (0, i.jsxs)('div', {
                            className: ek().container,
                            'data-test-id': d.Xk.artist.ARTIST_FAMILIAR_PAGE_STICKY_HEADER,
                            children: [
                                o.canBack && (0, i.jsx)(ep.L, { withForwardControl: !1, withBackwardControl: o.canBack, shouldFocusOnMount: !1, buttonSize: 'xs' }),
                                (0, i.jsxs)(eh.wI, {
                                    isShimmerVisible: r.familiarSubpage.isLoading,
                                    shimmer: (0, i.jsx)(eA, {}),
                                    className: ek().tabs,
                                    elementId: a,
                                    onTabChange: c,
                                    ...t,
                                    children: [
                                        (0, i.jsx)(eg.o, {
                                            className: ek().tab,
                                            value: P.COLLECTION,
                                            title: n({ id: 'page.familiar-collection' }),
                                            'aria-hidden': !l,
                                            tabIndex: l ? 0 : -1,
                                        }),
                                        (0, i.jsx)(eg.o, {
                                            className: ek().tab,
                                            value: P.VIBE,
                                            title: n({ id: 'page.familiar-vibe' }),
                                            'aria-hidden': !l,
                                            tabIndex: l ? 0 : -1,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    });
                }),
                eP = (0, n.PA)((e) => {
                    var t, a, n;
                    let { artistId: T, preloadedArtist: N, preloadedFamiliar: I } = e,
                        L = (0, r.useSearchParams)(),
                        { artist: j, disclaimerModalState: S } = (0, f.g)(),
                        { contentScrollRef: E, setContentScrollRef: O } = (0, x.g)(),
                        w = (0, s.useId)(),
                        B = (0, s.useMemo)(() => {
                            switch (L.get(C.K.TAB)) {
                                case b.J.COLLECTION:
                                    break;
                                case b.J.VIBE:
                                    return P.VIBE;
                            }
                            return P.COLLECTION;
                        }, [L]),
                        U = (0, u.zb)(B),
                        H = (0, p.S)({ artist: null == (t = j.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                    ((0, D.G)(T),
                        (0, s.useEffect)(() => {
                            var e;
                            (null == (e = j.meta) ? void 0 : e.artist.isUnsafeLegal) && H();
                        }, [null == (a = j.meta) ? void 0 : a.artist.isUnsafeLegal, H]),
                        (0, M._)(j, T),
                        (0, s.useEffect)(
                            () => () => {
                                j.familiarSubpage.reset();
                            },
                            [j],
                        ),
                        (0, v.J)(j.familiarSubpage.isResolved),
                        j.familiarSubpage.isNotFound && (0, r.notFound)());
                    let z = (0, s.useMemo)(() => {
                            switch (U.value) {
                                case P.COLLECTION:
                                    if (j.familiarSubpage.isResolved && !j.familiarSubpage.hasCollectionEntities)
                                        return (0, i.jsx)(eO, { tabsState: U, tabElementId: w });
                                    return (0, i.jsx)(eI, { tabsState: U, forwardRef: O, tabElementId: w, artistId: T });
                                case P.VIBE:
                                    if (j.familiarSubpage.isResolved && !j.familiarSubpage.hasVibeTracks) return (0, i.jsx)(eO, { tabsState: U, tabElementId: w });
                                    return (0, i.jsx)(eL, { tabsState: U, forwardRef: O, tabElementId: w, artistId: T });
                            }
                        }, [j.familiarSubpage.hasCollectionEntities, j.familiarSubpage.hasVibeTracks, j.familiarSubpage.isResolved, T, O, w, U]),
                        W = [];
                    return (j.familiarSubpage.isNeededToLoad && W.push(j.familiarSubpage.getData({ preloadedFamiliar: I, artistId: T })),
                    j.infoLoadingState.isNeededToLoad && W.push(j.getInfo({ artistId: T, preloadedArtist: N })),
                    ((e) => {
                        var t;
                        let { fullscreenVideoPlayer: a } = (0, f.g)(),
                            i = null == e || null == (t = e.meta) ? void 0 : t.artist,
                            r = null == e ? void 0 : e.infoLoadingState.isLoading,
                            n = null == e ? void 0 : e.infoLoadingState.isRejected,
                            l = (0, s.useCallback)((e) => (n ? {} : i && !r ? R({ artist: (0, A.E)(i) }, e) : void 0), [i, r, n]);
                        (0, y.C)(a.modal.isOpened ? null : l);
                    })(j),
                    W.length && (0, s.use)(Promise.allSettled(W)),
                    j.familiarSubpage.isRejected && !j.familiarSubpage.isNotFound)
                        ? (0, i.jsx)(m.SomethingWentWrong, {})
                        : (null == (n = j.meta) ? void 0 : n.artist.isLegalRejected)
                          ? (0, i.jsx)(k.M, { modalState: S })
                          : (0, i.jsx)(o.a, {
                                pageId: l.AppScreen.TrackListScreen,
                                pageIdForFrom: h.b.FAMILIAR_YOU,
                                mainObjectId: T,
                                mainObjectType: l.DomainObjectType.Artist,
                                children: (0, i.jsx)(_.h, {
                                    scrollElement: E,
                                    headerThreshold: 148,
                                    children: (0, i.jsxs)('div', {
                                        className: F().root,
                                        'data-test-id': d.Xk.artist.ARTIST_FAMILIAR_PAGE,
                                        children: [
                                            (0, i.jsx)(eR, { tabElementId: w, tabsState: U }),
                                            (0, i.jsx)(c.F, {
                                                blockId: '',
                                                blockType: '',
                                                blockPosX: 1,
                                                blockPosY: 1,
                                                objectsCount: 1,
                                                blockIdForFrom: g.U.DEFAULT,
                                                children: z,
                                            }),
                                        ],
                                    }),
                                }),
                            });
                });
            var eM = a(21438);
            let eD = () => {
                let e = (0, r.useSearchParams)().get('artistId');
                return ((e && (0, eM.L)(e)) || (0, r.notFound)(), (0, i.jsx)(eP, { artistId: e }));
            };
        },
        59758: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { b: () => i }),
                (function (e) {
                    ((e.Album = 'album'), (e.Artist = 'artist'), (e.Playlist = 'playlist'), (e.Radio = 'fm_radio'), (e.Other = 'other'), (e.Search = 'search'));
                })(i || (i = {})));
        },
        60266: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => s });
            var i = a(88800);
            a(30282);
            var r = a(11006),
                n = a.n(r);
            let s = (e) => {
                let { children: t } = e;
                return (0, i.jsx)('footer', { className: n().empty });
            };
        },
        62293: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => r });
            var i = a(97956);
            let r = (e) => {
                let { checkExperiment: t, getDisclaimerContent: a, getExplicitContent: r, userRegion: n } = e;
                return 'ru' === n && t(i.z.WebNextFooterDisclaimer, 'on') ? a() : r();
            };
        },
        63512: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => s });
            var i = a(53548),
                r = a(94144),
                n = a(67174);
            let s = (e) => {
                var t;
                let { setDeeplink: a } = null != (t = (0, r.P)()) ? t : {};
                (0, i.useEffect)(() => {
                    if (e) {
                        let { href: t } = (0, n.u)('/artist/:artistId', { params: { artistId: e } });
                        null == a || a(t);
                    }
                    return () => {
                        null == a || a(null);
                    };
                }, [e, a]);
            };
        },
        65523: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => l });
            var i = a(4086),
                r = a(41928),
                n = a(44084);
            let s = new WeakMap(),
                l = () =>
                    ((e) => {
                        if (e instanceof n.r) return e;
                        let t = s.get(e);
                        if (t) return t;
                        let a = {
                            log: (t, a) => e.info(t, a),
                            trace: (t, a) => e.trace(t, a),
                            debug: (t, a) => e.debug(t, a),
                            info: (t, a) => e.info(t, a),
                            warn: (t, a) => e.warn(t, a),
                            error: (t, a) => e.error(t, a),
                            fatal: (t, a) => e.fatal(t, a),
                            child: (t) => e.child(t),
                        };
                        return (s.set(e, a), a);
                    })((0, r.N)().get(i.Zf));
        },
        72542: (e, t, a) => {
            'use strict';
            a.d(t, { Xn: () => n, cy: () => r, pE: () => i });
            let i = {
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
                r = 'yandex',
                n = 'ru-RU';
        },
        73805: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => R });
            var i = a(88800),
                r = a(65724),
                n = a(84961),
                s = a(53548),
                l = a(2058),
                o = a(97234),
                c = a(17392),
                d = a(29993),
                u = a(52300),
                m = a(17610),
                _ = a(29504),
                p = a(42174),
                g = a(96817);
            let h = (e) => {
                let { className: t, variant: a = 'text', onClick: r, iconClassName: n, iconSize: o, size: d = 's', ariaLabel: m } = e,
                    { formatMessage: _ } = (0, l.A)(),
                    p = null != m ? m : _({ id: 'play-queue.delete-from-queue' }),
                    h = (0, s.useCallback)(
                        (e) => {
                            (null == r || r(), e.stopPropagation());
                        },
                        [r],
                    );
                return (0, i.jsx)(g.$, {
                    className: t,
                    withRipple: !1,
                    variant: a,
                    size: d,
                    radius: 'round',
                    'aria-label': p,
                    onClick: h,
                    icon: (0, i.jsx)(u.I, { size: o, className: n, variant: 'bucket' }),
                    'data-test-id': c.OA.track.REMOVE_BUTTON,
                });
            };
            var x = a(5407),
                v = a(57934),
                f = a(55693),
                b = a(72288),
                C = a(49738),
                k = a(56446),
                A = a(64546),
                y = a(29831),
                T = a(30123),
                N = a(54965),
                I = a(1829),
                L = a(82092),
                j = a.n(L),
                S = a(79262),
                E = a(41867),
                O = a.n(E);
            let w = (0, n.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: a } = (0, l.A)();
                    return t.isDownloaded
                        ? (0, i.jsx)(u.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': a({ id: 'offline.track-downloaded' }),
                              'data-test-id': c.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, i.jsx)(S.A, { value: t.downloadingProgress, size: 16, className: O().downloadingProgress, progressBarClassName: O().progress })
                          : null;
                }),
                R = (0, n.PA)((e) => {
                    var t;
                    let {
                            className: a,
                            track: n,
                            withLightning: g,
                            ignoreDislikedStyles: L,
                            onLikeClick: S,
                            utmLink: E,
                            withSecondaryColor: O,
                            handleRemove: R,
                            withTrailer: P = !0,
                            likeIconSize: M = 'xxs',
                            removeButtonAriaLabel: D,
                            hideControls: B,
                        } = e,
                        { user: F, trailer: U } = (0, b.g)(),
                        { formatMessage: H } = (0, l.A)(),
                        { sendLikeSearchFeedback: z } = (0, f.z)(),
                        [W, Y] = (0, s.useState)(!1),
                        [K, $] = (0, s.useState)(!1),
                        G = (0, x.P)(),
                        V = (0, p.K)(n),
                        {
                            duration: X,
                            lightning: q,
                            ugc: Z,
                        } = ((e, t, a) => {
                            var i;
                            let { withLightning: r, isUGC: n } = t,
                                s = ((e) =>
                                    'number' != typeof e
                                        ? null
                                        : ((e) => {
                                              let t = Math.round((e || 0) / T.k7);
                                              return (0, N.E)(t);
                                          })(e))(e.durationMs);
                            return {
                                duration: null !== s ? { text: s, ariaLabel: (0, y.j)(Math.round((null != (i = e.durationMs) ? i : 0) / 1e3), a) } : null,
                                lightning: r ? { label: a({ id: 'entity-names.popular-among-users' }) } : null,
                                ugc: n ? { label: a({ id: 'ugc.track-description' }) } : null,
                            };
                        })(n, { withLightning: g, isUGC: n.isUGC }, H),
                        J = (0, v.F)(),
                        Q = F.hasPlus,
                        ee = !n.isRemoved && n.isAvailable && !B,
                        et = (0, d.c)(async () => {
                            (W || n.isLiked || (Y(!0), null == z || z()), await V(), null == S || S(n.isLiked));
                        }),
                        ea = (0, d.c)((e) => {
                            e.stopPropagation();
                        }),
                        ei = (0, d.c)((e) => {
                            if ((e.stopPropagation(), G())) return void e.preventDefault();
                            (U.openTrackTrailer(n.id), J(o.DomainObjectType.Track, n.id));
                        }),
                        er = (0, s.useMemo)(() => {
                            if (ee)
                                return (0, i.jsx)('div', {
                                    onClick: ea,
                                    children: (0, i.jsx)(I._, {
                                        track: n,
                                        open: K,
                                        onOpenChange: $,
                                        placement: 'bottom',
                                        icon: (0, i.jsx)(u.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: E,
                                        className: (0, r.$)(j().contextMenu, { [j().contextMenu_visible]: K }),
                                        handleRemove: R,
                                        withTrailer: P,
                                        'data-test-id': c.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ea, R, K, ee, P, n, E]);
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(j().root, j().controls, a, {
                            [j().controls_dislikedControls]: n.isDisliked,
                            [j().controls_dislikedColors]: n.isDisliked && !L,
                            [j().controls_disabled]: !n.isAvailable,
                            [j().root_withSecondaryColor]: O,
                        }),
                        children: [
                            q && (0, i.jsx)(u.I, { 'aria-label': q.label, size: 'xxs', className: j().lightning, variant: 'lightning' }),
                            Z &&
                                (0, i.jsxs)(m.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, i.jsx)(u.I, {
                                            'aria-label': Z.label,
                                            size: 'xxs',
                                            className: j().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': c.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, i.jsx)(m.ZI, { children: Z.label }),
                                    ],
                                }),
                            Q && (0, i.jsx)('div', { className: (0, r.$)(j().item, j().downloadIcon), children: (0, i.jsx)(w, { track: n }) }),
                            R && !B && (0, i.jsx)(h, { size: 'xs', iconSize: 'xxs', className: (0, r.$)(j().item, j().removeButton), onClick: R, ariaLabel: D }),
                            ee &&
                                (0, i.jsx)(A.WithOffline, {
                                    fallback: (0, i.jsx)(C.c, {
                                        size: 'xs',
                                        iconSize: M,
                                        className: (0, r.$)(j().item, j().likeIcon),
                                        isLiked: n.isLiked,
                                        onClick: et,
                                        disabled: !F.isAuthorized,
                                    }),
                                }),
                            (null == (t = n.trailer) ? void 0 : t.isAvailable) &&
                                n.isAvailable &&
                                (0, i.jsx)(A.WithOffline, {
                                    fallback: (0, i.jsx)(k.k, {
                                        className: (0, r.$)(j().item, j().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: ei,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, i.jsxs)('div', {
                                className: (0, r.$)(j().item, j().contextMenuWrapper),
                                children: [
                                    null !== X &&
                                        (0, i.jsx)(_.HL, {
                                            variant: 'span',
                                            className: (0, r.$)(j().duration, { [j().duration_hidden]: K && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': X.ariaLabel,
                                            role: 'text',
                                            'data-test-id': c.Kq.track.TRACK_DURATION,
                                            children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: X.text }),
                                        }),
                                    er,
                                ],
                            }),
                        ],
                    });
                });
        },
        77863: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => i });
            var i = (function (e) {
                return ((e.APP = 'app'), (e.SUMMARY_LARGE_IMAGE = 'summary_large_image'), e);
            })({});
        },
        78180: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => i });
            var i = (function (e) {
                return ((e.COLLECTION = 'collection'), (e.VIBE = 'vibe'), e);
            })({});
        },
        81685: (e, t, a) => {
            'use strict';
            a.d(t, { E: () => r });
            var i = a(29201);
            let r = (e) => {
                var t, a;
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
                                            disclaimers: (0, i.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '' },
                          various: e.various || !1,
                          contentRestrictions: { available: null == (a = e.isAvailable) || a, disclaimers: (0, i.H)(e.disclaimers) },
                      }
                    : { id: 0, name: '', various: !1, decomposed: [], contentRestrictions: { available: !1, disclaimers: [] } };
            };
        },
        82092: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'CommonControlsBar_root__N8b0F',
                root_withSecondaryColor: 'CommonControlsBar_root_withSecondaryColor__4Y1P_',
                item: 'CommonControlsBar_item__qGErG',
                contextMenu: 'CommonControlsBar_contextMenu__EAq_c',
                contextMenu_visible: 'CommonControlsBar_contextMenu_visible__M0ry0',
                contextMenuWrapper: 'CommonControlsBar_contextMenuWrapper__XjkaL',
                lightning: 'CommonControlsBar_lightning__o7wrY',
                ugcIcon: 'CommonControlsBar_ugcIcon__OV0Cl',
                lightning_withOffset: 'CommonControlsBar_lightning_withOffset__LGvUS',
                duration: 'CommonControlsBar_duration__un38A',
                duration_hidden: 'CommonControlsBar_duration_hidden__noQ4S',
                alwaysVisibleDuration: 'CommonControlsBar_alwaysVisibleDuration__3V6gl',
                controls: 'CommonControlsBar_controls__QrogT',
                trailerIcon: 'CommonControlsBar_trailerIcon__ZHSBo',
                removeButton: 'CommonControlsBar_removeButton__35xHY',
                controls_disabled: 'CommonControlsBar_controls_disabled__0RmLo',
                explicitMark: 'CommonControlsBar_explicitMark__3I_Op',
                controls_dislikedControls: 'CommonControlsBar_controls_dislikedControls__mMjKC',
                likeIcon: 'CommonControlsBar_likeIcon__YqgZY',
                controls_dislikedColors: 'CommonControlsBar_controls_dislikedColors__h5lev',
                downloadIcon: 'CommonControlsBar_downloadIcon__2mM6m',
                popover: 'CommonControlsBar_popover__6bmNd',
            };
        },
        83418: (e, t, a) => {
            'use strict';
            function i(e) {
                let { host: t, url: a } = e;
                return a || (t ? 'https://'.concat(t, '/meta/home.png') : '');
            }
            a.d(t, { v: () => i });
        },
        83602: (e, t, a) => {
            'use strict';
            a.d(t, { E: () => u });
            var i = a(9519),
                r = a(72542),
                n = a(21424),
                s = a(4653);
            let l = (e) => s.U.parseAcceptLanguage(null != e ? e : void 0);
            var o = a(1220);
            let c = (e) => {
                var t;
                return null != (t = { ru: o.$.RU, en: o.$.EN, uz: o.$.UZ, kk: o.$.KK }[e]) ? t : o.$.RU;
            };
            var d = a(95330);
            class u {
                static getDefaultLocale() {
                    return new Intl.Locale(r.Xn);
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
                    return c((0, n.k)(this.config, this.config.defaultLang));
                }
                getLanguage() {
                    return c((0, n.k)(this.config, this.language));
                }
                setLanguage(e) {
                    var t, a, i;
                    let r = (0, n.k)(this.config, e);
                    r !== (null == (t = this.storage) ? void 0 : t.get()) &&
                        (null == (a = this.storage) || a.set(r), null == (i = this.changeLanguageHandler) || i.onChangeLanguage(r));
                }
                getDictionary() {
                    if (!this.dictionary)
                        throw Error(
                            '\n                There is no downloaded CompiledTranslations!\n                I18NStorage.loadDictionary() must be called.\n            ',
                        );
                    return this.dictionary;
                }
                getAvailableLanguages() {
                    return this.config.langs.map((e) => c((0, n.k)(this.config, e)));
                }
                async loadDictionary() {
                    let e = (0, n.k)(this.config, this.language);
                    try {
                        this.dictionary = await (0, d.M)(e);
                    } catch (t) {
                        (t instanceof Error && this.logger.error(t, { language: e }), (this.dictionary = {}));
                    }
                    return this.dictionary;
                }
                constructor({ serverDetectedLocale: e, isBuildTypeDesktop: t, storage: a, changeLanguageHandler: o, logger: c }) {
                    let d;
                    if (
                        ((0, i._)(this, 'language', void 0),
                        (0, i._)(this, 'storage', void 0),
                        (0, i._)(this, 'dictionary', void 0),
                        (0, i._)(this, 'config', void 0),
                        (0, i._)(this, 'logger', void 0),
                        (0, i._)(this, 'changeLanguageHandler', void 0),
                        (0, i._)(this, 'serverDetectedLocale', void 0),
                        (this.storage = a),
                        (this.logger = c),
                        (this.changeLanguageHandler = o),
                        (this.serverDetectedLocale = e),
                        (this.config = r.pE[r.cy]),
                        t)
                    ) {
                        if ('undefined' != typeof navigator) {
                            var u;
                            let e;
                            d = ((e = this.config), new s.U({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: !0 })).getLang({
                                cookieLang: (null == (u = this.storage) ? void 0 : u.get()) || void 0,
                                acceptLangs: l(navigator.languages.join()),
                            });
                        }
                    } else [d] = l(e) || [];
                    this.language = (0, n.k)(this.config, d);
                }
            }
        },
        86790: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => T });
            var i = a(88800),
                r = a(65724),
                n = a(84961),
                s = a(2058),
                l = a(30282),
                o = a(94144),
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
            let d = (e, t, a) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(a);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(a);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(a);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(a);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(a);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: a, tld: i, year: r } = e;
                    return {
                        year: r,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, i, a) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, i, a) },
                    };
                };
            var m = a(62293),
                _ = a(99839);
            let p = (e) => e(new Date(), (0, _.m)());
            var g = a(51611),
                h = a(72288),
                x = a(11006),
                v = a.n(x),
                f = a(17392),
                b = a(29504),
                C = a(91292);
            let k = (e) => {
                    let { className: t, data: a } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(v().copyrights, t),
                        'data-test-id': f.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(b.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: v().text,
                                children: [
                                    '\xa9 ',
                                    a.year,
                                    ' \xa0',
                                    (0, i.jsx)(C.N, {
                                        target: '_blank',
                                        href: a.yandexMusic.url,
                                        className: (0, r.$)(v().copyrightLink, v().yandexMusicLink),
                                        'data-test-id': f.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: a.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(b.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(C.N, {
                                target: '_blank',
                                href: a.yandexProjects.url,
                                className: v().copyrightLink,
                                'data-test-id': f.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: a.yandexProjects.title,
                            }),
                        ],
                    });
                },
                A = (e) => {
                    let { disclaimer: t, links: a } = e;
                    return (0, i.jsxs)('div', {
                        className: v().links,
                        children: [
                            (0, i.jsx)('ol', {
                                className: v().list,
                                'data-test-id': f.S7.FOOTER_LINKS_LIST,
                                children: a.map((e) => {
                                    let { id: t, title: a, url: r } = e;
                                    return (0, i.jsx)(
                                        'li',
                                        {
                                            className: v().item,
                                            children: (0, i.jsx)(C.N, { target: '_blank', href: r, className: v().link, 'data-test-id': f.S7.FOOTER_LINK, children: a }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, i.jsx)(b.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: v().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': f.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                y = (e) => {
                    let { className: t, data: a } = e;
                    return (0, i.jsxs)('footer', {
                        className: (0, r.$)(v().root, v().important, t),
                        'data-test-id': f.S7.FOOTER,
                        children: [(0, i.jsx)(A, { links: a.links, disclaimer: a.disclaimer }), (0, i.jsx)(k, { data: a.copyrights })],
                    });
                };
            (0, n.PA)((e) => {
                let { className: t } = e,
                    { location: a } = (0, h.g)(),
                    { formatDate: r, formatMessage: n } = (0, s.A)(),
                    { language: l } = (0, g.h)(),
                    o = u({ formatMessage: n, language: l, tld: a.tld, year: p(r) });
                return (0, i.jsx)(k, { className: t, data: o });
            });
            let T = (0, n.PA)((e) => {
                var t;
                let { className: a } = e,
                    { experiments: n, location: _, user: x } = (0, h.g)(),
                    { formatDate: f, formatMessage: b } = (0, s.A)(),
                    { isEnabled: C } = null != (t = (0, o.P)()) ? t : {},
                    { language: k } = (0, g.h)(),
                    A = ((e) => {
                        let { checkExperiment: t, formatMessage: a, isWebApplication: i, language: r, tld: n, userRegion: s, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: a, tld: i, language: r, userRegion: n } = e,
                                    s = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, i, r) },
                                    l = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, i, r) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, i, r) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, i, r) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, i, r) },
                                    _ = [s, o, u];
                                return (a && 'ru' === n && _.push(l), _.push(m), _);
                            })({ formatMessage: a, isWebApplication: i, language: r, tld: n, userRegion: s }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => a({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => a({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: u({ formatMessage: a, language: r, tld: n, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => n.checkExperiment(e, t),
                        formatMessage: b,
                        isWebApplication: l.$3,
                        tld: _.tld,
                        language: k,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: p(f),
                    });
                return (0, i.jsx)(y, { className: (0, r.$)({ [v().root_withOffsetForDeeplink]: C }, a), data: A });
            });
        },
        91241: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => i });
            let i = 'ru';
        },
        91959: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => r });
            var i = a(58217);
            let r = (e) => {
                let { artist: t, callback: a, shouldHistoryBack: r } = e;
                return (0, i.l)({ entity: t, callback: a, modalBehavior: void 0 === r ? void 0 : { shouldHistoryBack: r }, preventDefaultWhenSafe: !0 });
            };
        },
        93015: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => g });
            var i = a(88800),
                r = a(98644),
                n = a(65724),
                s = a(53548),
                l = a(2058),
                o = a(19994),
                c = a(13797),
                d = a.n(c);
            let u = (e) => {
                let { isActive: t, className: a } = e,
                    { formatMessage: r } = (0, l.A)(),
                    c = (0, s.useMemo)(() => r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.track' }) }), [r]);
                return (0, i.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, n.$)(d().root, a),
                    children: [
                        (0, i.jsxs)('div', {
                            className: d().infoContainer,
                            children: [
                                (0, i.jsx)('div', { className: d().coverContainer, children: (0, i.jsx)(o.W, { isActive: t, className: d().cover, radius: 'round' }) }),
                                (0, i.jsx)('div', { className: d().textContainer, children: (0, i.jsx)(o.W, { isActive: t, className: d().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, i.jsx)(o.W, { isActive: t, className: d().action, radius: 'l' }),
                    ],
                });
            };
            var m = a(26835),
                _ = a.n(m);
            let p = (e) => {
                    let { isActive: t, className: a } = e,
                        { formatMessage: r } = (0, l.A)(),
                        c = (0, s.useMemo)(() => r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.track' }) }), [r]);
                    return (0, i.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, n.$)(_().root, a),
                        children: [
                            (0, i.jsxs)('div', {
                                className: _().infoContainer,
                                children: [
                                    (0, i.jsx)(o.W, { isActive: t, className: _().cover, radius: 's' }),
                                    (0, i.jsx)('div', { className: _().textContainer, children: (0, i.jsx)(o.W, { isActive: t, className: _().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, i.jsx)(o.W, { isActive: t, className: _().action, radius: 'l' }),
                        ],
                    });
                },
                g = (e) => {
                    let { isActive: t, variant: a, className: n } = e;
                    switch (a) {
                        case r.X.PLAYLIST:
                            return (0, i.jsx)(p, { isActive: t, className: n });
                        case r.X.ALBUM:
                            return (0, i.jsx)(u, { isActive: t, className: n });
                    }
                };
        },
        94144: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => r, P: () => n });
            var i = a(53548);
            let r = (0, i.createContext)(null),
                n = () => (0, i.useContext)(r);
        },
        95330: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => c, X: () => o });
            var i = a(39499),
                r = a(72542);
            let n = async (e) => e.then((e) => e.default),
                s = r.pE[r.cy],
                l = s.langs.reduce((e, t) => (e.set(t, async () => n(a(12526)('./'.concat(t, '.json')))), e), new Map()),
                o = s.langs.reduce((e, t) => (e.set(t, async () => n(a(46646)('./'.concat(t, '.json')))), e), new Map()),
                c = async function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
                        a = t.get(e),
                        r = t.get('ru');
                    if (a) return a();
                    if (r) return r();
                    throw new i.t('No translations for '.concat(e, ' or ru languages'));
                };
        },
        95993: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => n });
            var i = a(58217),
                r = a(85587);
            let n = (e) => {
                let { track: t, callback: a, disclaimerRejectHandler: n } = e;
                return (0, i.l)({ entity: t, entityType: r.n.TRACK, callback: a, onReject: n, preventDefaultWhenSafe: !1 });
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
        98774: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => n });
            var i = a(51724),
                r = a(20775);
            let n = (e) => {
                let { available: t, disclaimers: a } = (0, i.f)(e);
                return (0, r.x)(t, a) ? { index: !1, follow: !0 } : void 0;
            };
        },
        99625: (e) => {
            e.exports = { root: 'ArtistFamiliarPage_root__9Zjo0' };
        },
        99839: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                9904, 7191, 8655, 5864, 3078, 1833, 8194, 1191, 918, 1041, 4981, 6582, 6706, 4771, 2662, 6904, 1898, 2058, 3578, 8628, 4378, 9780, 8283, 9332, 2737, 4732,
                9087, 3979, 6719, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 6374, 2088, 8979, 818, 4322, 3300, 763, 2670, 7358,
            ],
            () => e((e.s = 15854)),
        ),
            (_N_E = e.O()));
    },
]);
