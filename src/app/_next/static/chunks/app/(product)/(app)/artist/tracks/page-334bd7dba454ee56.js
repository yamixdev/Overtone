(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9689],
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
        2218: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => l });
            var i = a(28166),
                r = a(77863);
            let n = '@yandexmusic';
            function l(e) {
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
        4795: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => n });
            var i = a(72288),
                r = a(97956);
            let n = () => {
                var e, t;
                let {
                    user: a,
                    settings: { browserInfo: n },
                    experiments: l,
                } = (0, i.g)();
                return (
                    !(null == n ? void 0 : n.isTouch) &&
                    a.isAuthorized &&
                    !a.hasPlus &&
                    (null == (t = l.getExperiment(r.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        6668: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => n });
            var i = a(53548),
                r = a(29993);
            let n = () => {
                let e = (0, i.useRef)(new Map());
                return (
                    (0, i.useLayoutEffect)(
                        () => (
                            e.current.size > 0 && e.current.clear(),
                            () => {
                                e.current.clear();
                            }
                        ),
                        [],
                    ),
                    (0, r.c)((t, a) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, a), a)))
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
        10829: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => x });
            var i = a(88800),
                r = a(65724),
                n = a(84961),
                l = a(53548),
                s = a(17392),
                o = a(34126),
                c = a(39079),
                d = a(72288),
                u = a(39267),
                m = a(13619),
                _ = a(73805),
                g = a(15232),
                p = a(56712),
                h = a(26243),
                v = a.n(h);
            let x = (0, n.PA)((e) => {
                var t;
                let {
                        track: a,
                        playContextParams: n,
                        className: h,
                        withDNDBlock: x,
                        isDragging: f,
                        draggingClassName: k,
                        ignoreDislikedStyles: y,
                        withSecondaryColor: C,
                        handleRemove: b,
                        withDislike: A,
                        withTrailer: T = !0,
                        beforeTitle: N,
                        removeButtonAriaLabel: L,
                        hideControls: j,
                    } = e,
                    S = (0, c.D)({ playContextParams: n, entityId: a.entityId }),
                    {
                        settings: { isMobile: w },
                    } = (0, d.g)(),
                    E = (0, o.X)(a.trackSource, { isMobile: w }),
                    I = (0, l.useCallback)(
                        (e) =>
                            (0, i.jsx)(u.q, {
                                isAvailable: a.isAvailable,
                                isDisliked: a.isDisliked,
                                coverUri: a.coverUri,
                                title: a.title,
                                className: v().playButtonCell,
                                ignoreDislikedStyles: y,
                                radius: 'xs',
                                ...e,
                            }),
                        [y, a.coverUri, a.isAvailable, a.isDisliked, a.title],
                    );
                return (0, i.jsx)(p.C, {
                    className: (0, r.$)(h, { [v().trackWithDots]: x, [v().important]: x }),
                    track: a,
                    beforeBlock: x ? (0, i.jsx)(m.O, { className: (0, r.$)(v().dots, k), isDragging: f }) : void 0,
                    meta: (0, i.jsx)(g.j, { withArtistLink: E, beforeTitle: N, track: a, ignoreDislikedStyles: y, withSecondaryColor: C }),
                    playButtonCellRender: I,
                    controls: (0, i.jsx)(_.Q, {
                        track: a,
                        className: v().controlsBarCell,
                        ignoreDislikedStyles: y,
                        utmLink: null == (t = n.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: C,
                        handleRemove: b,
                        withDislike: A,
                        withTrailer: T,
                        removeButtonAriaLabel: L,
                        hideControls: j,
                    }),
                    ...S,
                    'data-test-id': s.Kq.track.TRACK_PLAYLIST,
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
        13619: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => o });
            var i = a(88800),
                r = a(65724),
                n = a(52300),
                l = a(30907),
                s = a.n(l);
            let o = (e) => {
                let { isDragging: t, className: a } = e;
                return (0, i.jsx)(n.I, { variant: 'dragDots', size: 'xxs', className: (0, r.$)(s().root, { [s().root_active]: t }, a), 'aria-hidden': !0 });
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
        15232: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => T });
            var i = a(88800),
                r = a(65724),
                n = a(84961),
                l = a(53548),
                s = a(2058),
                o = a(58390),
                c = a(17392),
                d = a(79070),
                u = a(17610),
                m = a(29504),
                _ = a(13946),
                g = a(55693),
                p = a(72288),
                h = a(24548),
                v = a(85587),
                x = a(90224),
                f = a(91292),
                k = a(7608),
                y = a(6667),
                C = a(85463),
                b = a(65462),
                A = a.n(b);
            let T = (0, n.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: a,
                        track: n,
                        albumArtists: b,
                        withExplicitMark: T,
                        withSecondaryColor: N,
                        captionSize: L = 'm',
                        explicitSize: j = 'xxxs',
                        withAllArtistsTitle: S,
                        textClassName: w,
                        artistsClassName: E,
                        ignoreDislikedStyles: I,
                        withCustomTooltip: R = !0,
                        hasLineClamp: O = !0,
                        withSavingQueryParams: D,
                        beforeTitle: M,
                        withArtistLink: P,
                        variant: U,
                        withTrackLink: B,
                        afterTitle: z,
                        withContextMenuArtists: H,
                    } = e,
                    { formatMessage: W } = (0, s.A)(),
                    { sendNavigateSearchFeedback: F } = (0, g.z)(),
                    {
                        settings: { isMobile: Y },
                        slam: $,
                    } = (0, p.g)(),
                    K = (0, y.$)({ withCustomTooltip: R }),
                    G = (0, o.useSearchParams)(),
                    X = (0, k.B)(n, {
                        isMobile: Y,
                        isOfflineModeEnabled: $.isOfflineModeEnabled,
                        albumArtists: b,
                        withTrackLink: B,
                        withArtistLink: P,
                        variant: U,
                        withExplicitMark: T,
                        query: D ? Object.fromEntries(G) : void 0,
                    }),
                    {
                        displayTitle: q,
                        ariaLabel: V,
                        tooltipText: Z,
                        titleAttribute: J,
                        versionTitleAttribute: Q,
                        isTooltipEnabled: ee,
                    } = ((e, t, a, i) => {
                        var r, n;
                        let { canEnableCustomTooltip: l, isMobile: s } = a,
                            o = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, i),
                            c = t.shouldShowRemovedTitle ? o : ''.concat(o, ' ').concat(null != (r = t.version) ? r : ''),
                            d = i({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: o,
                            ariaLabel: ''.concat(d, ' ').concat(null != (n = e.version) ? n : ''),
                            tooltipText: c,
                            isTooltipEnabled: l && !s,
                            titleAttribute: !l && (t.shouldShowRemovedTitle || t.link) ? c : void 0,
                            versionTitleAttribute: l ? void 0 : t.version,
                        };
                    })(n, X, { canEnableCustomTooltip: K, isMobile: Y }, W),
                    et = (0, C.O)({ track: n, onNavigate: F, withSavingQueryParams: D, entityType: v.n.TRACK }),
                    ea = (0, l.useCallback)(
                        (e) =>
                            (0, i.jsx)(u.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: Z,
                                hoverSettings: h.V,
                                children: (0, i.jsx)(m.HL, {
                                    className: (0, r.$)(A().text, A().title),
                                    type: 'entity',
                                    size: L,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: q,
                                }),
                            }),
                        [L, q, Z, ee],
                    ),
                    ei = (0, d.L)(() =>
                        X.shouldShowRemovedTitle
                            ? (0, i.jsx)(u.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: Z,
                                  hoverSettings: h.V,
                                  children: (0, i.jsx)(m.HL, {
                                      className: (0, r.$)(A().text, A().title),
                                      type: 'entity',
                                      size: L,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: J,
                                      children: q,
                                  }),
                              })
                            : X.link
                              ? (0, i.jsx)(f.N, {
                                    onClick: et,
                                    className: A().albumLink,
                                    href: X.link.href,
                                    'aria-label': V,
                                    title: J,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: ea(),
                                })
                              : ea({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    er = (0, l.useMemo)(() => +!!O, [O]);
                return (0, i.jsx)('div', {
                    className: (0, r.$)(A().root, { [A().root_disabled]: !n.isAvailable, [A().root_disliked]: n.isDisliked && !I, [A().root_withSecondaryColor]: N }, t),
                    children: (0, i.jsxs)('div', {
                        className: A().metaContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: (0, r.$)(A().titleContainer, { [A().titleContainer_withVersion]: n.version }, a),
                                children: [
                                    (0, i.jsxs)(m.HL, {
                                        className: (0, r.$)(A().text, w),
                                        type: 'entity',
                                        size: L,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            M,
                                            ei,
                                            X.version &&
                                                (0, i.jsxs)(m.HL, {
                                                    className: (0, r.$)(A().text, A().version),
                                                    type: 'entity',
                                                    size: L,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: Q,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', X.version],
                                                }),
                                        ],
                                    }),
                                    X.explicitMark &&
                                        (0, i.jsx)(x.N, {
                                            containerClassName: A().explicitMarkContainer,
                                            getDescriptionTexts: n.getDescriptionTexts,
                                            size: j,
                                            variant: X.explicitMark,
                                            className: A().explicitMark,
                                            trackId: n.id,
                                        }),
                                    z,
                                ],
                            }),
                            X.artists.length > 0 &&
                                (0, i.jsx)(_.i, {
                                    className: (0, r.$)(A().text, { [A().artists]: O }, E, w),
                                    withAllArtistsTitle: S,
                                    linkClassName: (0, r.$)(A().text, A().link),
                                    captionClassName: (0, r.$)(A().text, A().artistCaption),
                                    artists: X.artists,
                                    withLink: X.withArtistLink,
                                    lineClamp: er,
                                    captionSize: L,
                                    withContextMenu: H,
                                }),
                        ],
                    }),
                });
            });
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
        19998: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => b });
            var i = a(88800),
                r = a(65724),
                n = a(84961),
                l = a(53548),
                s = a(88969),
                o = a(17392),
                c = a(29993),
                d = a(96817),
                u = a(29504),
                m = a(4086),
                _ = a(41928),
                g = a(46422),
                p = a(4370),
                h = a(78940),
                v = a(85587),
                x = a(15253),
                f = a(91292),
                k = a(28806),
                y = a.n(k);
            let C = {
                    [v.n.ALBUM]: (0, i.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [v.n.PODCAST]: (0, i.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [v.n.ARTIST]: (0, i.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [v.n.TRACK]: (0, i.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [v.n.AUDIOBOOK]: (0, i.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [v.n.CLIP]: (0, i.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                b = (0, n.PA)((e) => {
                    var t;
                    let { modalState: a, data: n, onClose: k, className: b } = e,
                        A = null != n ? n : null == a ? void 0 : a.modalData,
                        T = (0, g.W)(),
                        N = (0, h.Z)(p.Z.main.href),
                        L = (0, _.N)().get(m.U2),
                        j = (0, c.c)(() => {
                            if (k) return k();
                            (T.canBack && T.back(), N());
                        }),
                        S = (null == A || null == (t = A.details) ? void 0 : t.url) && A.details.text,
                        w = (0, c.c)(() => {
                            var e;
                            null == a || a.setConfirmUnsafeDisclaimer(!0);
                            let t = L.get(x.c.ExEx),
                                i = new Date(),
                                r = i.setMinutes(i.getMinutes() + 15),
                                n =
                                    null != (e = null == a ? void 0 : a.entityKey)
                                        ? e
                                        : ''.concat(null == a ? void 0 : a.entityType, '_').concat(null == a ? void 0 : a.entityId);
                            (t ? L.set(x.c.ExEx, [...t, n], { expires: new Date(r) }) : L.set(x.c.ExEx, [n], { expires: new Date(r) }),
                                null == k || k(),
                                (null == a ? void 0 : a.onDisclaimerConfirmHandler) && a.onDisclaimerConfirmHandler());
                        }),
                        E = (0, c.c)(() => {
                            ((null == a ? void 0 : a.shouldHistoryBack) ? (null == k || k(), T.canBack && T.back(), N()) : null == k || k(),
                                (null == a ? void 0 : a.onDisclaimerRejectHandler) && a.onDisclaimerRejectHandler());
                        });
                    (0, l.useEffect)(
                        () => () => {
                            null == a || a.reset();
                        },
                        [a],
                    );
                    let I = (0, l.useMemo)(() => {
                            if (A) {
                                var e, t;
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, r.$)(y().title, y().text),
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: A.title,
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: y().text,
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: A.description,
                                        }),
                                        S &&
                                            (0, i.jsx)(f.N, {
                                                href: null == (e = A.details) ? void 0 : e.url,
                                                className: y().link,
                                                children: (0, i.jsx)(u.HL, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'normal',
                                                    children: null == (t = A.details) ? void 0 : t.text,
                                                }),
                                            }),
                                    ],
                                });
                            }
                            return null;
                        }, [A, S]),
                        R = (0, l.useMemo)(
                            () =>
                                (null == a ? void 0 : a.type) === v.Z.UNSAFE
                                    ? (0, i.jsxs)('div', {
                                          className: y().buttons,
                                          children: [
                                              (0, i.jsx)(d.$, {
                                                  color: 'primary',
                                                  onClick: E,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: y().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, i.jsx)(s.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, i.jsx)(d.$, {
                                                  color: 'secondary',
                                                  onClick: w,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: y().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: a.entityType && C[a.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, i.jsx)('div', {
                                          className: y().buttons,
                                          children: (0, i.jsx)(d.$, {
                                              color: 'primary',
                                              onClick: j,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: y().button,
                                              'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, i.jsx)(s.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [w, null == a ? void 0 : a.entityType, null == a ? void 0 : a.type, j, E],
                        );
                    return (0, i.jsx)('div', {
                        className: (0, r.$)(y().root, b),
                        'data-test-id': o.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, i.jsxs)('div', { className: y().container, children: [I, R] }),
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
            a.d(t, { C: () => g });
            var i = a(53548),
                r = a(58390),
                n = a(51611),
                l = a(65523);
            let s = {
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
                    ...s,
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
                            l = m('property', 'og:description'),
                            s = m('property', 'og:image');
                        (n.setAttribute('content', e),
                            l.setAttribute('content', t),
                            s.setAttribute('content', r),
                            window.document.head.appendChild(n),
                            window.document.head.appendChild(l),
                            window.document.head.appendChild(s));
                    }
                },
                g = (e) => {
                    let { language: t } = (0, n.h)(),
                        a = (0, l.U)(),
                        s = (0, r.usePathname)(),
                        o = (0, r.useSearchParams)().toString();
                    (0, i.useEffect)(() => {
                        if (!e) return;
                        let i = !0,
                            r = ((e, t) => ({ fullUrl: e.href, locale: new Intl.Locale(t), url: e.pathname, tld: (0, d.f)(e.host) || u.l, host: e.host }))(
                                window.location,
                                t,
                            ),
                            n = window.location.pathname + window.location.search,
                            l = () => i && n === window.location.pathname + window.location.search;
                        return (
                            (async () => {
                                try {
                                    let t = await e(r);
                                    if (!l() || !t) return;
                                    let a = 'string' == typeof t.title && t.title.trim() ? t.title : (await c(r)).title;
                                    l() && _({ ...t, title: a });
                                } catch (e) {
                                    if (!l()) return;
                                    a.error('[ClientMetadata] Failed to update metadata', { error: e });
                                    try {
                                        let e = await c(r);
                                        l() && _(e);
                                    } catch (e) {
                                        l() && a.error('[ClientMetadata] Failed to load fallback metadata', { error: e });
                                    }
                                }
                            })(),
                            () => {
                                i = !1;
                            }
                        );
                    }, [e, t, a, s, o]);
                };
        },
        30907: (e) => {
            e.exports = { root: 'DragAndDropIcon_root__OstQU', root_active: 'DragAndDropIcon_root_active__xOTKt' };
        },
        32596: (e, t, a) => {
            'use strict';
            a.d(t, { SomethingWentWrong: () => R });
            var i = a(88800),
                r = a(65724),
                n = a(84961),
                l = a(53548),
                s = a(2058),
                o = a(88969);
            a(30282);
            var c = a(96817),
                d = a(52300),
                u = a(29504),
                m = a(97234),
                _ = a(59714),
                g = a(43054),
                p = a(18117),
                h = a(93940),
                v = a(24709);
            let x = (0, v.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, g.s)()) ? void 0 : e.evgenInstance,
                        { hash: a } = (0, p.g)(),
                        { screen: i } = (0, h.j)();
                    return {
                        sendRefreshEvent: (0, l.useCallback)(() => {
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
                f = (0, v.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let a = null == (t = (0, g.s)()) ? void 0 : t.evgenInstance,
                        { hash: i } = (0, p.g)(),
                        { screen: r } = (0, h.j)();
                    (0, l.useEffect)(() => {
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
            var k = a(44230),
                y = a(4370),
                C = a(72288),
                b = a(97956),
                A = a(56248),
                T = a(90688),
                N = a(78940);
            let L = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var j = a(96856),
                S = a.n(j);
            let w = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: a = !0, onBack: n } = e,
                    { slam: l } = (0, C.g)(),
                    { contentRef: s } = (0, k.g)(),
                    d = (0, N.Z)(y.Z.mymusicDownloadsTracks.href);
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(S().root, t),
                    children: [
                        a &&
                            (0, i.jsx)(A.L, {
                                withBackwardFallback: '/',
                                className: (0, r.$)(S().navigation, { [S().navigation_desktop]: !s }),
                                withForwardControl: !1,
                                onBackwardClick: n,
                            }),
                        (0, i.jsxs)('div', {
                            className: (0, r.$)(S().content, { [S().content_shrink]: !a }),
                            children: [
                                (0, i.jsx)(T._V, { className: S().image, src: L.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, i.jsxs)('div', {
                                    className: S().message,
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            className: S().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, i.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            className: S().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, i.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                l.hasDownloadedTracks &&
                                    (0, i.jsx)(c.$, {
                                        className: S().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, i.jsx)(u.HL, {
                                            className: S().buttonText,
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
                I = a.n(E);
            let R = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: a = !0, onBack: n } = e,
                    { formatMessage: m } = (0, s.A)(),
                    _ = (0, l.useContext)(C.P),
                    g = null == _ ? void 0 : _.experiments.checkExperiment(b.z.WebNextUnstableMusicScreen, 'on'),
                    p = m(g ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                f(p);
                let { sendRefreshEvent: h } = x(),
                    v = (0, l.useCallback)(() => {
                        (h(), (window.location.href = y.Z.main.href));
                    }, [h]),
                    { contentRef: T } = (0, k.g)();
                return g
                    ? (0, i.jsx)(w, { className: t, withBackwardControl: a, onBack: n })
                    : (0, i.jsxs)('div', {
                          className: (0, r.$)(I().root, t),
                          children: [
                              a &&
                                  (0, i.jsx)(A.L, {
                                      withBackwardFallback: '/',
                                      className: (0, r.$)(I().navigation, { [I().navigation_desktop]: !T }),
                                      withForwardControl: !1,
                                      onBackwardClick: n,
                                  }),
                              (0, i.jsxs)('div', {
                                  className: (0, r.$)(I().content, { [I().content_shrink]: !a }),
                                  children: [
                                      (0, i.jsx)(d.I, { className: I().icon, variant: 'attention', size: 'xxl' }),
                                      (0, i.jsx)(u.DZ, { className: (0, r.$)(I().title, I().important), variant: 'h3', size: 'xs', children: p }),
                                      (0, i.jsxs)(u.HL, {
                                          className: (0, r.$)(I().text, I().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, i.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, i.jsx)(c.$, {
                                          onClick: v,
                                          className: I().button,
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
        37670: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => n });
            var i = a(53548);
            a(30282);
            var r = a(58390);
            let n = (e) => {
                let t = (0, r.usePathname)(),
                    [a, n] = (0, i.useState)(!1);
                ((0, i.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, i.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !a && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), n(!0));
                    }, [e, a, t]));
            };
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
                    for (var a = arguments.length, n = Array(a > 2 ? a - 2 : 0), l = 2; l < a; l++) n[l - 2] = arguments[l];
                    let [s] = n,
                        o = '/' === e ? '' : e,
                        c = (e) => ({ ...(null != s ? s : {}), options: e }),
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
                l = a(83602),
                s = a(21424),
                o = a(95330);
            let c = (0, r.cache)(async (e) => (0, o.M)(e, o.X)),
                d = async (e) => {
                    let t = (e || l.E.getDefaultLocale()).language,
                        a = (0, s.k)(n.pE[n.cy], t),
                        r = await c(a);
                    return (e, t) => {
                        let n = null == r ? void 0 : r[e.id],
                            l = '';
                        return ((Array.isArray(n) || 'string' == typeof n) && (l = new i.S(n, a).format(t)), Array.isArray(l) ? l.join('') : l);
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
                var t, a, i, r, n, l;
                let s = null == (t = e.available) || t,
                    o = null != (a = e.disclaimers) ? a : [];
                return (
                    e.contentRestrictions &&
                        ((s = null == (n = null == (i = e.contentRestrictions) ? void 0 : i.available) || n),
                        (o = null != (l = null == (r = e.contentRestrictions) ? void 0 : r.disclaimers) ? l : [])),
                    { available: s, disclaimers: o }
                );
            };
        },
        53073: (e, t, a) => {
            'use strict';
            function i() {
                return { appId: '117328825040925' };
            }
            a.d(t, { k: () => i });
        },
        56446: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => u });
            var i = a(88800),
                r = a(53548),
                n = a(2058),
                l = a(17392),
                s = a(96817),
                o = a(52300),
                c = a(39318);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: a,
                            size: r,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: _,
                            iconClassName: g,
                            className: p,
                            forwardRef: h,
                            style: v,
                            children: x,
                        } = e,
                        { formatMessage: f } = (0, n.A)(),
                        k = f({ id: 'trailer.button-aria-label' });
                    return (0, i.jsx)(s.$, {
                        className: p,
                        color: 'secondary',
                        radius: d,
                        size: r,
                        variant: t,
                        withRipple: a,
                        flexIcon: !0,
                        'aria-label': k,
                        onClick: _,
                        ref: h,
                        icon: (0, i.jsx)(o.I, { variant: 'trailer', size: u, className: g }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': l.S7.TRAILER_BUTTON,
                        children: x,
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, i.jsx)(d, { forwardRef: t, ...e }));
        },
        56712: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => b });
            var i = a(88800),
                r = a(65724),
                n = a(84961),
                l = a(53548),
                s = a(91177),
                o = a(46482),
                c = a(29993),
                d = a(52073),
                u = a(5407),
                m = a(9618),
                _ = a(4795),
                g = a(55693),
                p = a(7123),
                h = a(72288),
                v = a(8990),
                x = a(2058),
                f = a(47580),
                k = a(95993),
                y = a(27157),
                C = a.n(y);
            let b = (0, n.PA)((e) => {
                var t;
                let {
                        className: a,
                        track: n,
                        meta: y,
                        beforeBlock: b,
                        controls: A,
                        playButtonCellRender: T,
                        withLightning: N,
                        isPlaying: L,
                        isCurrent: j,
                        togglePlay: S,
                        restartPlay: w,
                        onPlayClick: E,
                        playButtonIconSize: I,
                        skipFreemiumCloseListeningPaywall: R = !1,
                        ...O
                    } = e,
                    { shouldShowBuySubscriptionModal: D, showBuySubscriptionModal: M } = (0, m.q)(),
                    {
                        track: P,
                        fullscreenPlayer: U,
                        settings: { isMobile: B },
                        album: z,
                        albumCPA: { isPlusCPAPlayerBarEnabled: H },
                        paywall: { modal: W },
                    } = (0, h.g)(),
                    F = (0, s.D)(),
                    Y = (0, o.g)(),
                    $ = (0, u.P)(),
                    K = ((e) => {
                        let { track: t, withLightning: a } = e,
                            { formatMessage: i } = (0, x.A)();
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
                            a = t.status === p.MT.LOADING_MEDIA_SOURCE || t.status === p.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let i = t.entityMeta.entityId;
                            return a && i === e;
                        }
                        return a;
                    })(n.entityId),
                    X = H(z.id, null == (t = z.meta) ? void 0 : t.isNonMusic),
                    q = n.isAvailable && D && !X,
                    V = (0, _.N)(),
                    Z = n.isAvailable && V && !X && !R,
                    J = (0, k.w)({ track: n, callback: S }),
                    Q = (0, c.c)(() => {
                        P.open({ trackId: n.id, albumId: n.albumId });
                    }),
                    ee = (0, k.w)({ track: n, callback: Q }),
                    { sendPlaySearchFeedback: et } = (0, g.z)(),
                    [ea, ei] = (0, l.useState)(!1),
                    er = (0, c.c)(() => {
                        if (!$()) {
                            if (q) return void M();
                            if (Z) return void W.open();
                            (ea || L || (ei(!0), null == et || et()), J(), L || Y(), null == E || E(!L));
                        }
                    }),
                    en = (0, c.c)(() => {
                        if (L) return void w();
                        er();
                    }),
                    el = (0, c.c)((e) => {
                        if (!n.isAvailable && !n.hasModalAccess) {
                            (D && n.isAvailableOnlyForPlus && M(), V && n.isAvailableOnlyForPlus && W.open());
                            return;
                        }
                        if (q) return void M();
                        let t = !B && (2 === e.detail || (1 === e.detail && n.hasTrackLink && !U.modal.isOpened));
                        return Z && !t
                            ? void W.open()
                            : ((0, d.P)(e, C().ripple), B)
                              ? void er()
                              : 2 === e.detail
                                ? void en()
                                : void (1 === e.detail && n.hasTrackLink && !U.modal.isOpened && (ee(), Z && W.open()));
                    }),
                    es = null == T ? void 0 : T({ onPlayButtonClick: er, isPlaying: L, isCurrent: j, isLoading: G, playButtonIconSize: I });
                return (0, i.jsxs)(v.C, {
                    ref: F,
                    'aria-label': K,
                    // for PulseSync WebHost: BEGIN publish the track ID on the native track DOM element for addons
                    'data-pulsesync-track-id': n.id,
                    // for PulseSync WebHost: END publish the track ID on the native track DOM element for addons
                    onClick: el,
                    className: (0, r.$)(C().root, { [C().root_disabled]: !n.isAvailable, [C().root_current]: j && B }, a),
                    ...O,
                    children: [b, es, y, A],
                });
            });
        },
        57297: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => n });
            var i = a(35412),
                r = a(83602);
            function n(e) {
                let { ogTitle: t, ogDescription: a, fullUrl: n, locale: l, ogImage: s, siteName: o, ogType: c, customImage: d } = e,
                    u = s ? { url: (0, i.lU)(s, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
                return {
                    title: t,
                    description: a,
                    url: n,
                    ...(c && { type: c }),
                    siteName: o,
                    locale: (l || r.E.getDefaultLocale()).toString().replace('-', '_'),
                    images: u || d,
                };
            }
        },
        60266: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => l });
            var i = a(88800);
            a(30282);
            var r = a(11006),
                n = a.n(r);
            let l = (e) => {
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
            a.d(t, { G: () => l });
            var i = a(53548),
                r = a(94144),
                n = a(67174);
            let l = (e) => {
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
            a.d(t, { U: () => s });
            var i = a(4086),
                r = a(41928),
                n = a(44084);
            let l = new WeakMap(),
                s = () =>
                    ((e) => {
                        if (e instanceof n.r) return e;
                        let t = l.get(e);
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
                        return (l.set(e, a), a);
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
            a.d(t, { Q: () => O });
            var i = a(88800),
                r = a(65724),
                n = a(84961),
                l = a(53548),
                s = a(2058),
                o = a(97234),
                c = a(17392),
                d = a(29993),
                u = a(52300),
                m = a(17610),
                _ = a(29504),
                g = a(42174),
                p = a(96817);
            let h = (e) => {
                let { className: t, variant: a = 'text', onClick: r, iconClassName: n, iconSize: o, size: d = 's', ariaLabel: m } = e,
                    { formatMessage: _ } = (0, s.A)(),
                    g = null != m ? m : _({ id: 'play-queue.delete-from-queue' }),
                    h = (0, l.useCallback)(
                        (e) => {
                            (null == r || r(), e.stopPropagation());
                        },
                        [r],
                    );
                return (0, i.jsx)(p.$, {
                    className: t,
                    withRipple: !1,
                    variant: a,
                    size: d,
                    radius: 'round',
                    'aria-label': g,
                    onClick: h,
                    icon: (0, i.jsx)(u.I, { size: o, className: n, variant: 'bucket' }),
                    'data-test-id': c.OA.track.REMOVE_BUTTON,
                });
            };
            var v = a(5407),
                x = a(57934),
                f = a(55693),
                k = a(72288),
                y = a(49738),
                C = a(56446),
                b = a(64546),
                A = a(29831),
                T = a(30123),
                N = a(54965),
                L = a(1829),
                j = a(82092),
                S = a.n(j),
                w = a(79262),
                E = a(41867),
                I = a.n(E);
            let R = (0, n.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: a } = (0, s.A)();
                    return t.isDownloaded
                        ? (0, i.jsx)(u.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': a({ id: 'offline.track-downloaded' }),
                              'data-test-id': c.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, i.jsx)(w.A, { value: t.downloadingProgress, size: 16, className: I().downloadingProgress, progressBarClassName: I().progress })
                          : null;
                }),
                O = (0, n.PA)((e) => {
                    var t;
                    let {
                            className: a,
                            track: n,
                            withLightning: p,
                            ignoreDislikedStyles: j,
                            onLikeClick: w,
                            utmLink: E,
                            withSecondaryColor: I,
                            handleRemove: O,
                            withTrailer: D = !0,
                            likeIconSize: M = 'xxs',
                            removeButtonAriaLabel: P,
                            hideControls: U,
                        } = e,
                        { user: B, trailer: z } = (0, k.g)(),
                        { formatMessage: H } = (0, s.A)(),
                        { sendLikeSearchFeedback: W } = (0, f.z)(),
                        [F, Y] = (0, l.useState)(!1),
                        [$, K] = (0, l.useState)(!1),
                        G = (0, v.P)(),
                        X = (0, g.K)(n),
                        {
                            duration: q,
                            lightning: V,
                            ugc: Z,
                        } = ((e, t, a) => {
                            var i;
                            let { withLightning: r, isUGC: n } = t,
                                l = ((e) =>
                                    'number' != typeof e
                                        ? null
                                        : ((e) => {
                                              let t = Math.round((e || 0) / T.k7);
                                              return (0, N.E)(t);
                                          })(e))(e.durationMs);
                            return {
                                duration: null !== l ? { text: l, ariaLabel: (0, A.j)(Math.round((null != (i = e.durationMs) ? i : 0) / 1e3), a) } : null,
                                lightning: r ? { label: a({ id: 'entity-names.popular-among-users' }) } : null,
                                ugc: n ? { label: a({ id: 'ugc.track-description' }) } : null,
                            };
                        })(n, { withLightning: p, isUGC: n.isUGC }, H),
                        J = (0, x.F)(),
                        Q = B.hasPlus,
                        ee = !n.isRemoved && n.isAvailable && !U,
                        et = (0, d.c)(async () => {
                            (F || n.isLiked || (Y(!0), null == W || W()), await X(), null == w || w(n.isLiked));
                        }),
                        ea = (0, d.c)((e) => {
                            e.stopPropagation();
                        }),
                        ei = (0, d.c)((e) => {
                            if ((e.stopPropagation(), G())) return void e.preventDefault();
                            (z.openTrackTrailer(n.id), J(o.DomainObjectType.Track, n.id));
                        }),
                        er = (0, l.useMemo)(() => {
                            if (ee)
                                return (0, i.jsx)('div', {
                                    onClick: ea,
                                    children: (0, i.jsx)(L._, {
                                        track: n,
                                        open: $,
                                        onOpenChange: K,
                                        placement: 'bottom',
                                        icon: (0, i.jsx)(u.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: E,
                                        className: (0, r.$)(S().contextMenu, { [S().contextMenu_visible]: $ }),
                                        handleRemove: O,
                                        withTrailer: D,
                                        'data-test-id': c.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ea, O, $, ee, D, n, E]);
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(S().root, S().controls, a, {
                            [S().controls_dislikedControls]: n.isDisliked,
                            [S().controls_dislikedColors]: n.isDisliked && !j,
                            [S().controls_disabled]: !n.isAvailable,
                            [S().root_withSecondaryColor]: I,
                        }),
                        children: [
                            V && (0, i.jsx)(u.I, { 'aria-label': V.label, size: 'xxs', className: S().lightning, variant: 'lightning' }),
                            Z &&
                                (0, i.jsxs)(m.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, i.jsx)(u.I, {
                                            'aria-label': Z.label,
                                            size: 'xxs',
                                            className: S().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': c.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, i.jsx)(m.ZI, { children: Z.label }),
                                    ],
                                }),
                            Q && (0, i.jsx)('div', { className: (0, r.$)(S().item, S().downloadIcon), children: (0, i.jsx)(R, { track: n }) }),
                            O && !U && (0, i.jsx)(h, { size: 'xs', iconSize: 'xxs', className: (0, r.$)(S().item, S().removeButton), onClick: O, ariaLabel: P }),
                            ee &&
                                (0, i.jsx)(b.WithOffline, {
                                    fallback: (0, i.jsx)(y.c, {
                                        size: 'xs',
                                        iconSize: M,
                                        className: (0, r.$)(S().item, S().likeIcon),
                                        isLiked: n.isLiked,
                                        onClick: et,
                                        disabled: !B.isAuthorized,
                                    }),
                                }),
                            (null == (t = n.trailer) ? void 0 : t.isAvailable) &&
                                n.isAvailable &&
                                (0, i.jsx)(b.WithOffline, {
                                    fallback: (0, i.jsx)(C.k, {
                                        className: (0, r.$)(S().item, S().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: ei,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, i.jsxs)('div', {
                                className: (0, r.$)(S().item, S().contextMenuWrapper),
                                children: [
                                    null !== q &&
                                        (0, i.jsx)(_.HL, {
                                            variant: 'span',
                                            className: (0, r.$)(S().duration, { [S().duration_hidden]: $ && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': q.ariaLabel,
                                            role: 'text',
                                            'data-test-id': c.Kq.track.TRACK_DURATION,
                                            children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: q.text }),
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
        78279: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 86179));
        },
        79418: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => h });
            var i = a(88800),
                r = a(65724),
                n = a(61013),
                l = a(53548);
            let s = (e) => {
                    let { style: t, forwardRef: a, context: r, ...n } = e,
                        l = (null == r ? void 0 : r.listAriaLabel) || void 0,
                        s = (null == r ? void 0 : r.listRole) || 'region';
                    return (0, i.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: s, 'aria-label': l, style: { ...t }, ref: a, ...n });
                },
                o = (0, l.forwardRef)((e, t) => (0, i.jsx)(s, { forwardRef: t, ...e }));
            var c = a(16434),
                d = a.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: a, withFooter: n, withHeader: l, withForceScroll: s, ...o } = e;
                    return (0, i.jsx)('div', {
                        className: (0, r.$)(d().scroller, { [d().scroller_withFooter]: n, [d().scroller_withHeader]: l, [d().scroller_withForceScroll]: s }),
                        style: { ...t },
                        ref: a,
                        ...o,
                        tabIndex: -1,
                    });
                },
                m = (0, l.forwardRef)((e, t) => (0, i.jsx)(u, { forwardRef: t, ...e }));
            var _ = a(55482),
                g = a(75151);
            let p = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: a,
                            onRangeHandler: r,
                            debounceDurationInMs: n = 100,
                            totalCount: s = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [m, p] = (0, l.useState)(null),
                        h = (0, l.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == r || r(e), o.length > 0 && p(e), t && a)) {
                                        let i = Math.floor(e.endIndex / t) + 1,
                                            r = Math.floor(e.startIndex / t);
                                        for (let e = r; e < i; e++) a(e);
                                    }
                                }, n),
                            [n, r, t, a, o],
                        );
                    (0, l.useEffect)(() => {
                        o.length > 0 && m && h(m);
                    }, o);
                    let v = (0, l.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, n);
                    }, [c, n]);
                    return (0, i.jsx)(g.sN, { ref: d, rangeChanged: h, totalCount: s, endReached: v, ...u });
                },
                h = (e) => {
                    let {
                            className: t,
                            customComponents: a,
                            onGetDataByPage: s,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: _,
                            listClassName: g,
                            overscan: h = 700,
                            pageSize: v = 20,
                            totalCount: x,
                            totalRequests: f,
                            debounceDurationInMs: k,
                            initialItemCount: y,
                            minInitialItemCount: C = 20,
                            handleRef: b,
                            alwaysShowScrollbar: A = !1,
                            testId: T,
                            isMobileLayout: N = !1,
                            shouldTriggerRangeChangedOn: L,
                            ...j
                        } = e,
                        [S, w] = (0, l.useState)(!1),
                        E = (0, l.useMemo)(
                            () =>
                                (0, n.A)((e) => {
                                    w(e);
                                }, 100),
                            [],
                        ),
                        I = (0, l.useMemo)(() => {
                            var e, t;
                            return N
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == a ? void 0 : a.List) ? e : o,
                                      Item: null == a ? void 0 : a.Item,
                                      ScrollSeekPlaceholder: null == a ? void 0 : a.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == a ? void 0 : a.List) ? t : o,
                                      Item: null == a ? void 0 : a.Item,
                                      Header: null == a ? void 0 : a.Header,
                                      Footer: null == a ? void 0 : a.Footer,
                                      ScrollSeekPlaceholder: null == a ? void 0 : a.ScrollSeekPlaceholder,
                                  };
                        }, [a, f, N]),
                        R = y ? Math.min(y, C) : void 0;
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(d().root, { [d().root_scrolling]: S || A, [d().root_notScrolling]: !S && !A }, t),
                        'data-test-id': T,
                        children: [
                            N && (null == a ? void 0 : a.Header) && a.Header(),
                            (0, i.jsx)(p, {
                                overscan: h,
                                components: I,
                                listClassName: g,
                                itemClassName: u,
                                isScrolling: E,
                                itemContent: _,
                                scrollerRef: b,
                                totalCount: x,
                                pageSize: v,
                                onPageHandler: s,
                                onRangeHandler: c,
                                debounceDurationInMs: k,
                                initialItemCount: R,
                                shouldTriggerRangeChangedOn: L,
                                ...j,
                            }),
                            N && (null == a ? void 0 : a.Footer) && a.Footer(),
                        ],
                    });
                };
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
                l = a(4653);
            let s = (e) => l.U.parseAcceptLanguage(null != e ? e : void 0);
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
                            d = ((e = this.config), new l.U({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: !0 })).getLang({
                                cookieLang: (null == (u = this.storage) ? void 0 : u.get()) || void 0,
                                acceptLangs: s(navigator.languages.join()),
                            });
                        }
                    } else [d] = s(e) || [];
                    this.language = (0, n.k)(this.config, d);
                }
            }
        },
        85967: (e) => {
            e.exports = {
                root: 'ArtistTracksPage_root__ad3rI',
                footer: 'ArtistTracksPage_footer__KN2i_',
                scrollContainer: 'ArtistTracksPage_scrollContainer__9iO2g',
                important: 'ArtistTracksPage_important__iulth',
                content: 'ArtistTracksPage_content__6LJJd',
                shimmerItem: 'ArtistTracksPage_shimmerItem__136_r',
            };
        },
        86179: (e, t, a) => {
            'use strict';
            (a.r(t), a.d(t, { default: () => J }));
            var i = a(88800),
                r = a(58390),
                n = a(65724),
                l = a(84961),
                s = a(53548),
                o = a(2058),
                c = a(88969),
                d = a(97234),
                u = a(59724),
                m = a(17392),
                _ = a(18593),
                g = a(29993),
                p = a(29504),
                h = a(32596),
                v = a(69630),
                x = a(10829),
                f = a(91959),
                k = a(98427),
                y = a(84384),
                C = a(46422),
                b = a(44230),
                A = a(37670),
                T = a(6668),
                N = a(72288),
                L = a(98644),
                j = a(19998),
                S = a(86790),
                w = a(60266),
                E = a(93317),
                I = a(93015),
                R = a(79418),
                O = a(81685),
                D = a(30144),
                M = a(324),
                P = a(53073),
                U = a(83418),
                B = a(46511),
                z = a(57297),
                H = a(2218),
                W = a(77863),
                F = a(45383),
                Y = a(98774);
            async function $(e, t) {
                var a, i, r;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let n = await (0, B.W)(t.locale),
                    l = n({ id: 'metadata.artist-tracks-title' }, { artistName: e.artist.name }),
                    s = n({ id: 'metadata.artist-tracks-description' }, { artistName: e.artist.name });
                return {
                    robots: (0, Y.G)(e.artist),
                    title: l,
                    description: s,
                    openGraph: (0, z.i)({
                        ogTitle: l,
                        ogDescription: s,
                        ogType: 'website',
                        fullUrl: null != (a = t.fullUrl) ? a : '',
                        locale: t.locale,
                        customImage: (0, U.v)({ host: t.host }),
                        siteName: n({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, H.H)({ cardType: W.W.SUMMARY_LARGE_IMAGE, title: l, description: s }),
                    facebook: (0, P.k)(),
                    appLinks: (0, M.X)({
                        additional: { ...t, url: null != (i = t.url) ? i : '', fullUrl: null != (r = t.fullUrl) ? r : '', host: t.host },
                        appName: n({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, F.S)('/artist/:artistId/tracks', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var K = a(27342),
                G = a(63512),
                X = a(85967),
                q = a.n(X);
            let V = (0, l.PA)((e) => {
                var t, a, l, M, P, U;
                let { artistId: B, preloadedArtist: z } = e,
                    {
                        artist: H,
                        sonataState: W,
                        disclaimerModalState: F,
                        settings: { isMobile: Y },
                    } = (0, N.g)(),
                    { formatMessage: X } = (0, o.A)(),
                    { from: V, utmLink: Z } = (0, y.f)({ pageId: k.b.ARTIST_TRACKS, pageEntityId: B, contextType: _.K.Artist, contextId: B }),
                    { contentScrollRef: J, setContentScrollRef: Q } = (0, b.g)(),
                    ee = (0, C.W)(),
                    et = (0, T.w)(),
                    ea = (0, f.S)({ artist: null == (t = H.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                ((0, G.G)(B),
                    (0, s.useEffect)(() => {
                        var e;
                        (null == (e = H.meta) ? void 0 : e.artist.isUnsafeLegal) && ea();
                    }, [null == (a = H.meta) ? void 0 : a.artist.isUnsafeLegal, ea]),
                    (0, K._)(H, B),
                    (0, s.useEffect)(
                        () => () => {
                            H.fullTracksListSubpage.reset();
                        },
                        [H],
                    ),
                    H.fullTracksListSubpage.isNotFound && (0, r.notFound)(),
                    (0, A.J)(H.fullTracksListSubpage.isResolved));
                let ei = (0, s.useMemo)(() => ({ Footer: () => (0, i.jsx)(w.A, { children: (0, i.jsx)(S.w, { className: q().footer }) }) }), []),
                    er = (0, g.c)((e) => {
                        let t = [];
                        for (let i = e.startIndex; i <= e.endIndex; i++) {
                            var a;
                            let e = null == (a = H.fullTracksListSubpage.ids) ? void 0 : a[i];
                            !H.fullTracksListSubpage.getTrackByIndex(i) && e && t.push(e);
                        }
                        t.length && H.fullTracksListSubpage.getTracks({ trackIds: t });
                    }),
                    en = [];
                return (H.fullTracksListSubpage.isNeededToLoad && en.push(H.fullTracksListSubpage.getTracksIds({ artistId: B })),
                H.infoLoadingState.isNeededToLoad && en.push(H.getInfo({ artistId: B, preloadedArtist: z })),
                ((e) => {
                    var t;
                    let { fullscreenVideoPlayer: a } = (0, N.g)(),
                        i = null == e || null == (t = e.meta) ? void 0 : t.artist,
                        r = null == e ? void 0 : e.infoLoadingState.isLoading,
                        n = null == e ? void 0 : e.infoLoadingState.isRejected,
                        l = (0, s.useCallback)((e) => (n ? {} : i && !r ? $({ artist: (0, O.E)(i) }, e) : void 0), [i, r, n]);
                    (0, D.C)(a.modal.isOpened ? null : l);
                })(H),
                en.length && (0, s.use)(Promise.allSettled(en)),
                H.fullTracksListSubpage.isRejected && !H.fullTracksListSubpage.isNotFound)
                    ? (0, i.jsx)(h.SomethingWentWrong, {})
                    : (null == (l = H.meta) ? void 0 : l.artist.isLegalRejected)
                      ? (0, i.jsx)(j.M, { modalState: F })
                      : (0, i.jsx)(u.a, {
                            pageId: d.AppScreen.ArtistScreen,
                            pageIdForFrom: k.b.ARTIST_TRACKS,
                            mainObjectId: B,
                            mainObjectType: d.DomainObjectType.Artist,
                            children: (0, i.jsx)(v.h, {
                                scrollElement: J,
                                outerTitle: X({ id: 'page.artist-tracks-header' }, { artistName: H.commonSubPage.artistName }),
                                children: (0, i.jsxs)('div', {
                                    className: q().root,
                                    'data-test-id': m.Xk.artist.ARTIST_TRACKS_PAGE,
                                    children: [
                                        (0, i.jsx)(E.Y, {
                                            variant: E.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: ee.canBack,
                                            children: (0, i.jsx)(p.DZ, {
                                                variant: 'h1',
                                                weight: 'bold',
                                                size: 'xl',
                                                lineClamp: 1,
                                                children: (0, i.jsx)(c.A, {
                                                    id: 'page.artist-tracks-header',
                                                    values: { artistName: null == (M = H.meta) ? void 0 : M.artist.name },
                                                }),
                                            }),
                                        }),
                                        (0, i.jsx)(R.$, {
                                            className: (0, n.$)(q().scrollContainer, q().important),
                                            customComponents: ei,
                                            itemContentCallback: (e) => {
                                                let t = H.fullTracksListSubpage.getTrackByIndex(e),
                                                    a = X({ id: 'loading-messages.entity-is-loading' }, { entityName: X({ id: 'search-filters.track' }) });
                                                return t
                                                    ? (0, i.jsx)(x.K, {
                                                          track: t,
                                                          playContextParams: et(e, {
                                                              contextData: { type: _.K.Artist, meta: { id: Number(B) }, from: V, utmLink: Z },
                                                              queueParams: { index: e, entityId: t.id },
                                                              loadContextMeta: !0,
                                                              entitiesData: W.unloadedEntitiesDataFromModels,
                                                          }),
                                                      })
                                                    : (0, i.jsx)(I.D, { isActive: !0, 'aria-label': a, variant: L.X.PLAYLIST, className: q().shimmerItem });
                                            },
                                            totalCount: null != (U = null == (P = H.fullTracksListSubpage.ids) ? void 0 : P.length) ? U : 0,
                                            onGetDataByRange: er,
                                            pageSize: 20,
                                            listClassName: q().content,
                                            itemClassName: q().item,
                                            totalRequests: H.fullTracksListSubpage.tracks.size,
                                            handleRef: Q,
                                            context: { listAriaLabel: X({ id: 'entity-names.artist-tracks-list' }) },
                                            isMobileLayout: Y,
                                            useWindowScroll: Y,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
            var Z = a(21438);
            let J = () => {
                let e = (0, r.useSearchParams)().get('artistId');
                return ((e && (0, Z.L)(e)) || (0, r.notFound)(), (0, i.jsx)(V, { artistId: e }));
            };
        },
        86790: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => T });
            var i = a(88800),
                r = a(65724),
                n = a(84961),
                l = a(2058),
                s = a(30282),
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
            let g = (e) => e(new Date(), (0, _.m)());
            var p = a(51611),
                h = a(72288),
                v = a(11006),
                x = a.n(v),
                f = a(17392),
                k = a(29504),
                y = a(91292);
            let C = (e) => {
                    let { className: t, data: a } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(x().copyrights, t),
                        'data-test-id': f.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(k.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: x().text,
                                children: [
                                    '\xa9 ',
                                    a.year,
                                    ' \xa0',
                                    (0, i.jsx)(y.N, {
                                        target: '_blank',
                                        href: a.yandexMusic.url,
                                        className: (0, r.$)(x().copyrightLink, x().yandexMusicLink),
                                        'data-test-id': f.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: a.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(k.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(y.N, {
                                target: '_blank',
                                href: a.yandexProjects.url,
                                className: x().copyrightLink,
                                'data-test-id': f.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: a.yandexProjects.title,
                            }),
                        ],
                    });
                },
                b = (e) => {
                    let { disclaimer: t, links: a } = e;
                    return (0, i.jsxs)('div', {
                        className: x().links,
                        children: [
                            (0, i.jsx)('ol', {
                                className: x().list,
                                'data-test-id': f.S7.FOOTER_LINKS_LIST,
                                children: a.map((e) => {
                                    let { id: t, title: a, url: r } = e;
                                    return (0, i.jsx)(
                                        'li',
                                        {
                                            className: x().item,
                                            children: (0, i.jsx)(y.N, { target: '_blank', href: r, className: x().link, 'data-test-id': f.S7.FOOTER_LINK, children: a }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, i.jsx)(k.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: x().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': f.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                A = (e) => {
                    let { className: t, data: a } = e;
                    return (0, i.jsxs)('footer', {
                        className: (0, r.$)(x().root, x().important, t),
                        'data-test-id': f.S7.FOOTER,
                        children: [(0, i.jsx)(b, { links: a.links, disclaimer: a.disclaimer }), (0, i.jsx)(C, { data: a.copyrights })],
                    });
                };
            (0, n.PA)((e) => {
                let { className: t } = e,
                    { location: a } = (0, h.g)(),
                    { formatDate: r, formatMessage: n } = (0, l.A)(),
                    { language: s } = (0, p.h)(),
                    o = u({ formatMessage: n, language: s, tld: a.tld, year: g(r) });
                return (0, i.jsx)(C, { className: t, data: o });
            });
            let T = (0, n.PA)((e) => {
                var t;
                let { className: a } = e,
                    { experiments: n, location: _, user: v } = (0, h.g)(),
                    { formatDate: f, formatMessage: k } = (0, l.A)(),
                    { isEnabled: y } = null != (t = (0, o.P)()) ? t : {},
                    { language: C } = (0, p.h)(),
                    b = ((e) => {
                        let { checkExperiment: t, formatMessage: a, isWebApplication: i, language: r, tld: n, userRegion: l, year: s } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: a, tld: i, language: r, userRegion: n } = e,
                                    l = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, i, r) },
                                    s = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, i, r) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, i, r) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, i, r) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, i, r) },
                                    _ = [l, o, u];
                                return (a && 'ru' === n && _.push(s), _.push(m), _);
                            })({ formatMessage: a, isWebApplication: i, language: r, tld: n, userRegion: l }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => a({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => a({ id: 'footer.explicit-content' }),
                                userRegion: l,
                            }),
                            copyrights: u({ formatMessage: a, language: r, tld: n, year: s }),
                        };
                    })({
                        checkExperiment: (e, t) => n.checkExperiment(e, t),
                        formatMessage: k,
                        isWebApplication: s.$3,
                        tld: _.tld,
                        language: C,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: g(f),
                    });
                return (0, i.jsx)(A, { className: (0, r.$)({ [x().root_withOffsetForDeeplink]: y }, a), data: b });
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
            a.d(t, { D: () => p });
            var i = a(88800),
                r = a(98644),
                n = a(65724),
                l = a(53548),
                s = a(2058),
                o = a(19994),
                c = a(13797),
                d = a.n(c);
            let u = (e) => {
                let { isActive: t, className: a } = e,
                    { formatMessage: r } = (0, s.A)(),
                    c = (0, l.useMemo)(() => r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.track' }) }), [r]);
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
            let g = (e) => {
                    let { isActive: t, className: a } = e,
                        { formatMessage: r } = (0, s.A)(),
                        c = (0, l.useMemo)(() => r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.track' }) }), [r]);
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
                p = (e) => {
                    let { isActive: t, variant: a, className: n } = e;
                    switch (a) {
                        case r.X.PLAYLIST:
                            return (0, i.jsx)(g, { isActive: t, className: n });
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
                l = r.pE[r.cy],
                s = l.langs.reduce((e, t) => (e.set(t, async () => n(a(12526)('./'.concat(t, '.json')))), e), new Map()),
                o = l.langs.reduce((e, t) => (e.set(t, async () => n(a(46646)('./'.concat(t, '.json')))), e), new Map()),
                c = async function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
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
                9904, 7191, 918, 1833, 3078, 1191, 1041, 8194, 8655, 9326, 6706, 4771, 2662, 6904, 1898, 2058, 3578, 8628, 4378, 9780, 8283, 9332, 5151, 2837, 1643, 4732,
                9087, 3979, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 6374, 8979, 818, 763, 2670, 7358,
            ],
            () => e((e.s = 78279)),
        ),
            (_N_E = e.O()));
    },
]);
