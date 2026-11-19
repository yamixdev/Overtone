(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3008],
    {
        568: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => J }));
            var r = i(88800),
                a = i(53548),
                s = i(58390),
                l = i(65724),
                o = i(84961),
                n = i(2058),
                d = i(97234),
                c = i(59724),
                u = i(17392),
                m = i(29993),
                _ = i(29504),
                h = i(32596),
                p = i(10079),
                b = i(69630),
                A = i(63565),
                x = i(34303),
                v = i(44440),
                g = i(14912),
                C = i(31661),
                N = i(88969),
                y = i(96817),
                k = i(2288),
                L = i(52300),
                f = i(72288),
                S = i(29645),
                j = i.n(S);
            let T = { [A.g.RATING]: (0, r.jsx)(N.A, { id: 'sort.sort-by-rating' }), [A.g.YEAR]: (0, r.jsx)(N.A, { id: 'sort.sort-by-year' }) },
                R = (0, o.PA)((e) => {
                    var t;
                    let { sortModel: i, onSort: s } = e,
                        {
                            settings: { isMobile: l },
                        } = (0, f.g)(),
                        o = (0, m.c)((e) => {
                            (0, C.W)(e.id) && i.sortBy !== e.id && (i.setSortBy(e.id), s());
                        }),
                        n = (0, a.useMemo)(
                            () =>
                                l
                                    ? (0, r.jsx)(y.$, { radius: 'xxxl', className: j().button, icon: (0, r.jsx)(L.I, { variant: 'filter', size: 'xs' }) })
                                    : (0, r.jsxs)(y.$, {
                                          radius: 'xxxl',
                                          className: j().button,
                                          'data-test-id': u.Kq.sort.SORT_DROPDOWN_BUTTON,
                                          children: [
                                              (0, r.jsx)(_.HL, {
                                                  variant: 'span',
                                                  size: 'm',
                                                  weight: 'medium',
                                                  'data-test-id': u.Kq.sort.SORT_DROPDOWN_BUTTON_CAPTION,
                                                  children: i.sortBy ? T[i.sortBy] : (0, r.jsx)(N.A, { id: 'sort.select-filter' }),
                                              }),
                                              (0, r.jsx)(L.I, { size: 'xxs', variant: 'arrowDown', 'data-test-id': u.Kq.sort.SORT_DROPDOWN_BUTTON_ICON }),
                                          ],
                                      }),
                            [l, i.sortBy],
                        );
                    return (0, r.jsx)(k.ms, {
                        placement: l ? 'bottom' : 'top',
                        isMobile: l,
                        strategy: 'fixed',
                        className: j().root,
                        onSelect: o,
                        reference: n,
                        offsetOptions: { mainAxis: 10, crossAxis: -50 },
                        defaultValue: null != (t = i.sortBy) ? t : A.g.YEAR,
                        containerClassName: j().container,
                        header: l ? (0, r.jsx)('div', { className: j().header }) : void 0,
                        'data-test-id': u.Kq.sort.SORT_DROPDOWN,
                        children: Object.values(A.g).map((e) => (0, r.jsx)(k.c$, { id: e, label: T[e], 'data-test-id': u.Kq.sort.SORT_DROPDOWN_ITEM }, e)),
                    });
                });
            var w = i(98427),
                P = i(46422),
                I = i(44230),
                B = i(37670),
                M = i(34961),
                E = i(53892),
                O = i(54320),
                D = i(86790),
                z = i(60266),
                U = i(93317),
                K = i(37770),
                F = i(79418),
                V = i(64709),
                W = i(29044),
                H = i.n(W);
            let $ = (0, o.PA)((e) => {
                let { labelId: t, preloadedLabel: i, preloadedAlbums: o, sortBy: N } = e,
                    { id: y, type: k, name: L, albumsSubpage: S, reset: j, isNeededToLoad: T, getData: W, isPublisher: $ } = (0, M.s)(E.n.LABEL),
                    {
                        settings: { isMobile: q },
                    } = (0, f.g)(),
                    { formatMessage: Y } = (0, n.A)(),
                    { contentScrollRef: G, setContentScrollRef: X } = (0, I.g)(),
                    J = (0, P.W)(),
                    Q = $ ? Y({ id: 'page.label-podcast-header' }, { labelName: L }) : Y({ id: 'page.label-albums-header' }, { labelName: L }),
                    Z = (0, m.c)((e) => {
                        var i;
                        S.getData({ labelId: Number(t), page: e, pageSize: 20, sortBy: null != (i = S.sort.sortBy) ? i : N });
                    }),
                    ee = (0, m.c)(() => {
                        (S.reset(), Z(0));
                    });
                (((e) => {
                    let { sortModel: t } = e,
                        i = (0, g.X)();
                    ((0, a.useLayoutEffect)(() => {
                        let e = new URL(window.location.href).searchParams.get(x.K.SORT);
                        e && (0, C.W)(e) ? t.setSortBy(e) : t.setSortBy(A.g.YEAR);
                    }, [t]),
                        (0, a.useEffect)(() => {
                            if (t.sortBy) {
                                let e = (0, v.b)(x.K.SORT, t.sortBy);
                                e && i(e);
                            }
                        }, [i, t.sortBy]));
                })({ sortModel: S.sort }),
                    (0, O.X)(S.pagesLoader, Z),
                    (0, a.useEffect)(
                        () => () => {
                            (j(), S.reset());
                        },
                        [j, S],
                    ),
                    S.isNotFound && (0, s.notFound)(),
                    (0, V.Q)({ id: Number(y), name: null != L ? L : '', type: null != k ? k : '' }, V.T.ALBUMS),
                    (0, B.J)(S.isResolved));
                let et = (0, a.useMemo)(() => ({ Footer: () => (0, r.jsx)(z.A, { children: (0, r.jsx)(D.w, { className: H().footer }) }) }), []),
                    ei = Y({ id: 'entity-names.label-albums-list' }),
                    er = [];
                if (S.isNeededToLoad) {
                    var ea;
                    let e = S.sort.sortBy === N || void 0 === S.sort.sortBy;
                    er.push(S.getData({ labelId: Number(t), page: 0, pageSize: 20, preloadedAlbums: e ? o : void 0, sortBy: null != (ea = S.sort.sortBy) ? ea : N }));
                }
                if (
                    (T && er.push(W({ labelId: Number(t), preloadedLabel: i, withLabelEntities: !1 })),
                    er.length && (0, a.use)(Promise.allSettled(er)),
                    S.isRejected && !S.isNotFound)
                )
                    return (0, r.jsx)(h.SomethingWentWrong, {});
                let es = S.isShimmerVisible ? 20 : S.totalCount;
                return (0, r.jsx)(c.a, {
                    pageId: d.AppScreen.LabelAlbums,
                    pageIdForFrom: w.b.LABEL_ALBUMS,
                    children: (0, r.jsx)(b.h, {
                        scrollElement: G,
                        outerTitle: Q,
                        children: (0, r.jsxs)('div', {
                            className: H().root,
                            'data-test-id': u.Xk.label.LABEL_ALBUMS_PAGE,
                            children: [
                                (0, r.jsxs)(U.Y, {
                                    variant: U.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: J.canBack,
                                    children: [
                                        (0, r.jsx)(_.DZ, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: Q }),
                                        (0, r.jsx)(R, { sortModel: S.sort, onSort: ee }),
                                    ],
                                }),
                                (0, r.jsx)(F.$, {
                                    className: (0, l.$)(H().scrollContainer, H().important),
                                    listClassName: H().content,
                                    itemClassName: H().item,
                                    customComponents: et,
                                    itemContentCallback: (e) => {
                                        let t = S.items[e],
                                            i = Y({ id: 'loading-messages.entity-is-loading' }, { entityName: Y({ id: 'entity-names.album' }) });
                                        return t
                                            ? (0, r.jsx)(p.a, { album: t, contentLinesCount: 4, withAddition: !t.isNonMusic, withLikesCount: t.isNonMusic }, t.id)
                                            : (0, r.jsx)(K.V, { 'aria-label': i, linesCount: 4 });
                                    },
                                    totalCount: es,
                                    initialItemCount: es,
                                    onGetDataByPage: Z,
                                    pageSize: 20,
                                    totalRequests: S.requestsCount,
                                    handleRef: X,
                                    context: { listAriaLabel: ei },
                                    isMobileLayout: q,
                                    useWindowScroll: q,
                                }),
                            ],
                        }),
                    }),
                });
            });
            var q = i(19994),
                Y = i(1698);
            let G = () => {
                let e = (0, P.W)(),
                    { formatMessage: t } = (0, n.A)(),
                    i = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.album' }) });
                return (0, r.jsx)(b.h, {
                    scrollElement: null,
                    children: (0, r.jsxs)('div', {
                        className: H().root,
                        children: [
                            (0, r.jsxs)(U.Y, {
                                variant: U.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: e.canBack,
                                children: [
                                    (0, r.jsx)(q.W, { className: H().shimmerTitle, radius: 'l' }),
                                    (0, r.jsx)(q.W, { className: H().shimmerSortDropdown, radius: 'xxxl' }),
                                ],
                            }),
                            (0, r.jsx)('div', {
                                className: (0, l.$)(H().scrollContainer, H().important, H().shimmerScrollContainer),
                                children: (0, r.jsx)('div', {
                                    className: H().content,
                                    children: (0, r.jsx)(Y.e, { isActive: !0, itemClassName: H().item, 'aria-label': i, linesCount: 4, count: 20 }),
                                }),
                            }),
                        ],
                    }),
                });
            };
            var X = i(21438);
            let J = () => {
                let e = (0, s.useSearchParams)().get('labelId');
                return ((e && (0, X.L)(e)) || (0, s.notFound)(), (0, r.jsx)(a.Suspense, { fallback: (0, r.jsx)(G, {}), children: (0, r.jsx)($, { labelId: e }) }));
            };
        },
        1698: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => s });
            var r = i(88800),
                a = i(37770);
            let s = (e) => {
                let {
                    isActive: t,
                    itemClassName: i,
                    round: s,
                    centered: l,
                    withInfo: o,
                    count: n = 10,
                    shimmerClassName: d,
                    linesCount: c,
                    'aria-label': u,
                    withSubcover: m,
                } = e;
                return Array.from(Array(n).keys()).map((e) =>
                    (0, r.jsx)(
                        a.V,
                        { isActive: t, linesCount: c, className: i, round: s, centered: l, withInfo: o, withSubcover: m, 'aria-label': u, shimmerClassName: d },
                        e,
                    ),
                );
            };
        },
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
        9492: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => h });
            var r = i(88800),
                a = i(65724),
                s = i(53548),
                l = i(2058),
                o = i(88969),
                n = i(96817),
                d = i(52300),
                c = i(29504),
                u = i(59304),
                m = i(4044),
                _ = i.n(m);
            let h = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    m = (0, s.useRef)(null),
                    { formatMessage: h } = (0, l.A)();
                (0, s.useEffect)(() => {
                    var e;
                    null == (e = m.current) || e.focus();
                }, []);
                let p = (0, s.useMemo)(
                    () =>
                        (0, r.jsxs)('div', {
                            className: _().message,
                            children: [
                                (0, r.jsx)(c.HL, {
                                    className: _().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, r.jsx)(o.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, r.jsx)(n.$, {
                                    ref: m,
                                    className: _().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': h({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, r.jsx)(d.I, { variant: 'reset', size: 'xxs', className: _().icon }),
                                }),
                            ],
                        }),
                    [h, t],
                );
                return (0, r.jsx)(u.$, { className: (0, a.$)(_().root, _().important), message: p, closeToast: i });
            };
        },
        10079: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => Z });
            var r = i(88800),
                a = i(65724),
                s = i(84961),
                l = i(53548),
                o = i(2058),
                n = i(97234),
                d = i(91177),
                c = i(70598),
                u = i(46482),
                m = i(17392),
                _ = i(18593),
                h = i(61691),
                p = i(29993),
                b = i(79070),
                A = i(29832),
                x = i(52300),
                v = i(7555),
                g = i(29504),
                C = i(60757),
                N = i(29008),
                y = i(92966),
                k = i(56651),
                L = i(13946),
                f = i(43443),
                S = i(5407),
                j = i(57934),
                T = i(84384),
                R = i(4795),
                w = i(87762),
                P = i(32414),
                I = i(78940),
                B = i(55693),
                M = i(39079),
                E = i(72288),
                O = i(52726),
                D = i(86298),
                z = i(81877),
                U = i(90224),
                K = i(49738),
                F = i(91292),
                V = i(56862),
                W = i(16704),
                H = i(56446),
                $ = i(36207),
                q = i(41918);
            let Y = { mainAxis: -26, alignmentAxis: -16 },
                G = { isEnabled: !0, width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' };
            var X = i(95756),
                J = i(28304),
                Q = i.n(J);
            let Z = (0, s.PA)((e) => {
                let {
                        className: t,
                        children: i,
                        album: s,
                        contentLinesCount: J,
                        withLikesCount: Z,
                        withChart: ee,
                        withAddition: et = !0,
                        withArtistName: ei = !0,
                        releaseDateFormatter: er = P.s,
                    } = e,
                    ea = (0, d.D)(),
                    {
                        user: es,
                        trailer: el,
                        settings: { isMobile: eo },
                        albumCPA: { isPlusCPAEnabled: en },
                        paywall: { modal: ed },
                    } = (0, E.g)(),
                    { from: ec, utmLink: eu } = (0, T.f)({ contextId: s.id, contextType: _.K.Album, utmForPageIds: s.artistIds }),
                    { formatMessage: em, formatDate: e_ } = (0, o.A)(),
                    { sendLikeSearchFeedback: eh, sendNavigateSearchFeedback: ep, sendPlaySearchFeedback: eb } = (0, B.z)(),
                    [eA, ex] = (0, l.useState)(!1),
                    [ev, eg] = (0, l.useState)(!1),
                    [eC, eN] = (0, l.useState)(!1),
                    ey = (0, c.S)(),
                    ek = (0, u.g)(),
                    eL = (0, y.K)(s),
                    ef = (0, k.A)(s),
                    eS = (0, I.Z)(s.url),
                    [ej, eT] = (0, l.useState)(!1),
                    eR = (0, j.F)(),
                    [ew, eP] = (0, l.useState)(!1),
                    eI = (0, S.P)(),
                    { pageAlbumId: eB } = (0, w.T)(),
                    eM = en({ pageAlbumId: eB, albumId: s.id, isNonMusic: s.isNonMusic }),
                    eE = (0, R.N)(),
                    eO = s.isAvailableOnlyForPlus && !s.isUnsafeLegal && !s.isLegalRejected,
                    eD = eO && !eo,
                    ez = s.isAvailable || eD || s.isAudiobook,
                    eU = (0, p.c)((e) => {
                        if ((e.stopPropagation(), eI())) return void e.preventDefault();
                        (el.openAlbumTrailer(s.id), eR(n.DomainObjectType.Album, String(s.id)));
                    }),
                    eK = s.type === h._.SINGLE ? em({ id: 'entity-names.single' }) : void 0,
                    eF = s.releaseDate ? e_(s.releaseDate, er()) : void 0,
                    eV = ((e) => {
                        let t = e.filter((e) => !!e).join(' \xb7 ');
                        return 0 === t.length ? null : t;
                    })([null != eF ? eF : s.year, eK]),
                    eW = (0, N.r)(s.type),
                    eH = (0, l.useMemo)(() => {
                        var e;
                        let t = s.isLiked ? em({ id: 'entity-names.has-your-like' }) : '';
                        return ''
                            .concat(eW, ' ')
                            .concat(s.title, ' ')
                            .concat(null != (e = s.version) ? e : '', ' ')
                            .concat(t);
                    }, [eW, em, s.title, s.isLiked, s.version]),
                    { isPlaying: e$, togglePlay: eq } = (0, M.D)({
                        playContextParams: { contextData: { type: _.K.Album, meta: { id: s.id }, from: ec, utmLink: eu }, loadContextMeta: !0 },
                    }),
                    eY = (0, C.c)({ album: s, callback: eS }),
                    eG = (0, C.c)({ album: s, callback: eq }),
                    eX = (0, p.c)((e) => {
                        (ey({ to: n.AppScreen.AlbumScreen }), null == ep || ep(), eY(e));
                    }),
                    eJ = (0, p.c)(() => {
                        if (!eI()) {
                            if (eE) return void ed.open();
                            (ev || e$ || (eg(!0), null == eb || eb()), eG(), e$ || ek());
                        }
                    }),
                    eQ = (0, p.c)(() => {
                        (eA || s.isLiked || (ex(!0), null == eh || eh()), eL());
                    }),
                    eZ = (0, p.c)((e) => {
                        (eN(e), eT(e));
                    }),
                    e0 = (0, l.useMemo)(() => {
                        var e;
                        return (0, r.jsxs)(g.HL, {
                            className: (0, a.$)(Q().title, { [Q().title_withVersion]: s.version, [Q().title_withChart]: ee }),
                            variant: 'div',
                            type: 'entity',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 2,
                            'aria-hidden': !0,
                            'data-test-id': m.Kq.album.ALBUM_TITLE,
                            children: [
                                (0, r.jsx)(F.N, {
                                    'aria-label': ''.concat(s.title, ' ').concat(null != (e = s.version) ? e : ''),
                                    className: Q().titleLink,
                                    href: s.url,
                                    tabIndex: -1,
                                    onClick: eX,
                                    'data-test-id': m.Kq.album.ALBUM_TITLE_LINK,
                                    children: s.title,
                                }),
                                s.version &&
                                    (0, r.jsx)(g.HL, {
                                        className: Q().version,
                                        variant: 'span',
                                        'data-test-id': m.Kq.album.ALBUM_VERSION,
                                        children: ' '.concat(s.version),
                                    }),
                            ],
                        });
                    }, [s.title, s.url, s.version, eX, ee]),
                    e8 = (0, l.useMemo)(() => {
                        var e;
                        return (0, r.jsx)(F.N, {
                            className: Q().srTitleLink,
                            href: s.url,
                            onClick: eX,
                            children: ''.concat(s.title, ' ').concat(null != (e = s.version) ? e : ''),
                        });
                    }, [s.title, s.url, s.version, eX]),
                    e9 = (0, l.useMemo)(() => {
                        var e;
                        if (null == s || null == (e = s.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                $.n,
                                {
                                    children: (0, r.jsx)(
                                        H.k,
                                        { className: (0, a.$)(Q().trailerButton, Q().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eU },
                                        s.getKey('TrailerButton'),
                                    ),
                                },
                                s.getKey('AlbumCardTrailerTooltip'),
                            );
                    }, [s, eU]),
                    e4 = (0, l.useMemo)(
                        () =>
                            (0, r.jsx)(
                                X.x,
                                {
                                    album: s,
                                    onOpenChange: eZ,
                                    open: eC,
                                    className: (0, a.$)(Q().menuButton, Q().control),
                                    icon: (0, r.jsx)(x.I, { size: 'xxs', variant: 'more' }),
                                    size: 's',
                                    variant: q.z.CARD,
                                    'data-test-id': m.Kq.album.ALBUM_CONTEXT_MENU_BUTTON,
                                },
                                s.getKey('AlbumContextMenu'),
                            ),
                        [s, eZ, eC],
                    ),
                    e2 = (0, l.useCallback)(
                        () =>
                            (0, r.jsx)(
                                W.D,
                                {
                                    className: (0, a.$)(Q().playButton, Q().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                    onClick: eJ,
                                    isPlaying: e$,
                                    disabled: eD,
                                },
                                s.getKey('PlayButton'),
                            ),
                        [eD, s, e$, eJ],
                    ),
                    e1 = (0, l.useMemo)(
                        () =>
                            eD
                                ? (0, r.jsx)(O.S, {
                                      className: Q().buyPlusPopover,
                                      buttonText: em({ id: 'interface-actions.more-details' }),
                                      isNested: !0,
                                      placement: 'top-start',
                                      isOpened: ew,
                                      onOpenChange: eP,
                                      textVariant: 'album',
                                      albumTextVariant: s.type,
                                      arrowProps: G,
                                      offsetOptions: Y,
                                      renderChildren: e2,
                                  })
                                : e2(),
                        [eD, ew, eP, em, e2, s.type],
                    ),
                    e5 = (0, b.L)(() => {
                        if (eD) return;
                        let e = !eM && !es.isAuthorized;
                        return (0, r.jsx)(
                            K.c,
                            {
                                className: (0, a.$)(Q().likeButton, Q().control),
                                isLiked: s.isLiked,
                                onClick: eQ,
                                variant: 'default',
                                size: 's',
                                iconSize: 'xxs',
                                disabled: e,
                            },
                            s.getKey('LikeButton'),
                        );
                    }),
                    e6 = (0, l.useMemo)(() => {
                        if (!eD)
                            return (0, r.jsx)(
                                V.O,
                                { onClick: ef, isPinned: s.isPinned, className: (0, a.$)(Q().pinButton, Q().control), withRipple: !1, isDisabled: eD },
                                s.getKey('PinButton'),
                            );
                    }, [s, eD, ef]),
                    e7 = (0, l.useMemo)(() => {
                        if (s.isAvailable || eD)
                            return (0, r.jsx)(A.hg, {
                                isVisible: eC || ej || ew,
                                className: Q().controls,
                                playControl: e1,
                                likeControl: e5,
                                menuControl: e4,
                                pinControl: e6,
                                trailerControl: e9,
                            });
                    }, [s, eC, ej, e4, e9, ew, e1, e5, e6, eD]),
                    e3 = (0, l.useMemo)(
                        () =>
                            (0, r.jsx)(v.t, {
                                className: Q().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': m.Kq.album.ALBUM_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: Q().coverBlock,
                                    onClick: eX,
                                    children: [
                                        (0, r.jsx)(z.B, {
                                            className: Q().image,
                                            src: s.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eH,
                                            withAvatarReplace: !0,
                                            isAvailable: ez,
                                            'aria-hidden': !0,
                                        }),
                                        eO && (0, r.jsx)(x.I, { variant: 'plusBadge', className: Q().plusBadge }),
                                        e7,
                                    ],
                                }),
                            }),
                        [eX, s.coverUri, ez, eH, e7, eO],
                    );
                return (0, r.jsxs)(A.MN, {
                    ref: ea,
                    className: (0, a.$)(Q().root, { [Q().root_withChart]: ee }, t),
                    'aria-label': eH,
                    explicitMarkComponent:
                        s.explicitDisclaimer &&
                        (0, r.jsx)(
                            U.N,
                            { className: Q().explicitMark, getDescriptionTexts: s.getDescriptionTexts, variant: s.explicitDisclaimer },
                            s.getKey('AlbumCardExplicitMarkIcon'),
                        ),
                    title: e0,
                    srTitle: e8,
                    contentLinesCount: J,
                    view: e3,
                    description:
                        ei &&
                        (0, r.jsx)(
                            L.i,
                            { className: Q().artists, artists: s.artists, lineClamp: 1, linkClassName: Q().artistLink, captionSize: 's' },
                            s.getKey('description'),
                        ),
                    chart:
                        ee &&
                        s.chart &&
                        (0, r.jsx)(f.t, { withIcon: !0, className: Q().chart, position: s.chart.position, progress: s.chart.progress }, s.getKey('chart')),
                    'data-test-id': m.Kq.album.ALBUM_ITEM,
                    children: [
                        et &&
                            eV &&
                            (0, r.jsx)(g.HL, { className: Q().addition, variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: eV }),
                        Z &&
                            !!s.actualLikesCount &&
                            (0, r.jsx)(D.x, {
                                className: Q().likeTextButton,
                                ariaLabel: em({ id: 'entity-names.likes-counter' }, { counter: s.actualLikesCount }),
                                likesCount: s.actualLikesCount,
                                isLiked: s.isLiked,
                                handleLikeClick: eL,
                            }),
                        i,
                    ],
                });
            });
        },
        13607: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { _: () => r }),
                (function (e) {
                    ((e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new'));
                })(r || (r = {})));
        },
        14912: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => a });
            var r = i(53548);
            let a = () =>
                (0, r.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
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
        25883: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => o });
            var r = i(88800),
                a = i(84961),
                s = i(33719),
                l = i(5048);
            let o = (0, a.PA)((e) => {
                let { album: t, closeToast: i } = e,
                    a = (0, l.b)(t.type);
                return (0, r.jsx)(s.k, {
                    closeToast: i,
                    entityVariant: a,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.title,
                    isPinned: t.isPinned,
                    radius: 's',
                });
            });
        },
        28304: (e) => {
            e.exports = {
                controls: 'AlbumCard_controls__yuO40',
                cover: 'AlbumCard_cover__zXmdl',
                root: 'AlbumCard_root__vP6k4',
                srTitleLink: 'AlbumCard_srTitleLink__TxBNz',
                root_withChart: 'AlbumCard_root_withChart__J2SZv',
                artists: 'AlbumCard_artists__phKco',
                likeTextButton: 'AlbumCard_likeTextButton__2AQd9',
                coverBlock: 'AlbumCard_coverBlock__94ZzY',
                image: 'AlbumCard_image__Mm55s',
                titleLink: 'AlbumCard_titleLink__u_WLG',
                title: 'AlbumCard_title__8YvhT',
                title_withVersion: 'AlbumCard_title_withVersion__NClAp',
                title_withChart: 'AlbumCard_title_withChart__PVOiJ',
                chart: 'AlbumCard_chart__gASdj',
                version: 'AlbumCard_version__h2aJz',
                artistLink: 'AlbumCard_artistLink__uPR_2',
                playButton: 'AlbumCard_playButton__mYK9R',
                likeButton: 'AlbumCard_likeButton__9B9C0',
                menuButton: 'AlbumCard_menuButton__pxkA6',
                pinButton: 'AlbumCard_pinButton__Mdi_E',
                trailerButton: 'AlbumCard_trailerButton__typHh',
                control: 'AlbumCard_control__qx7Xh',
                plusBadge: 'AlbumCard_plusBadge__i0FkP',
                buyPlusPopover: 'AlbumCard_buyPlusPopover__Kb79C',
            };
        },
        29008: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => l, r: () => o });
            var r = i(53548),
                a = i(2058),
                s = i(61691),
                l = (function (e) {
                    return ((e.PIN = 'pin'), e);
                })({});
            let o = (e, t) => {
                let { formatMessage: i } = (0, a.A)();
                return (0, r.useMemo)(() => {
                    switch (e) {
                        case s._.SINGLE:
                            return i({ id: 'entity-names.single' });
                        case s._.PODCAST:
                            return i({ id: 'entity-names.podcast' });
                        case s._.AUDIOBOOK:
                            if ('pin' === t) return i({ id: 'entity-names.book' });
                            return i({ id: 'entity-names.audio' });
                        case s._.FAIRY_TALE:
                            return i({ id: 'entity-names.fairy-tale' });
                        default:
                            return i({ id: 'entity-names.album' });
                    }
                }, [e, i, t]);
            };
        },
        29044: (e) => {
            e.exports = {
                root: 'LabelAlbumsPage_root__xyWi4',
                scrollContainer: 'LabelAlbumsPage_scrollContainer__zRUlM',
                important: 'LabelAlbumsPage_important__s18oL',
                shimmerScrollContainer: 'LabelAlbumsPage_shimmerScrollContainer__v_um_',
                footer: 'LabelAlbumsPage_footer__dcXFk',
                item: 'LabelAlbumsPage_item__Qjz9F',
                content: 'LabelAlbumsPage_content__jOWKZ',
                shimmerTitle: 'LabelAlbumsPage_shimmerTitle__jbYXl',
                shimmerSortDropdown: 'LabelAlbumsPage_shimmerSortDropdown__LKtgF',
            };
        },
        29645: (e) => {
            e.exports = {
                root: 'SortDropdown_root__d1JmQ',
                button: 'SortDropdown_button__SjTI7',
                header: 'SortDropdown_header__kj8yV',
                container: 'SortDropdown_container__dyVF_',
            };
        },
        31661: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => a });
            var r = i(63565);
            let a = (e) => !!e && (e === r.g.RATING || e === r.g.YEAR);
        },
        32414: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => r });
            let r = () => ({ year: 'numeric', month: 'long', day: 'numeric' });
        },
        34303: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => r });
            var r = (function (e) {
                return (
                    (e.TAB = 'tab'),
                    (e.URL = 'url'),
                    (e.ACTIVE_TAB = 'activeTab'),
                    (e.BLOCK = 'block'),
                    (e.IDS = 'ids'),
                    (e.ACTIVE_INDEX = 'activeIndex'),
                    (e.SORT = 'sort'),
                    (e.OPEN_TRAILER = 'openTrailer'),
                    (e.DEEPLINK = 'deeplink'),
                    (e.SEEDS = 'seeds'),
                    (e.STATION_ID = 'stationId'),
                    (e.OPEN_PLAYER = 'openPlayer'),
                    (e.SCREEN = 'screen'),
                    (e.CLID = 'clid'),
                    (e.UTM_SOURCE = 'utm_source'),
                    (e.YCLID = 'yclid'),
                    (e.UTM_CAMPAIGN = 'utm_campaign'),
                    (e.UTM_MEDIUM = 'utm_medium'),
                    (e.REF_ID = 'ref_id'),
                    (e.LUMEN_AWAKE_PARAM = 'shouldAwakeLumen'),
                    (e.BEST_PLAY = 'bestPlay'),
                    (e.TEXT = 'text'),
                    e
                );
            })({});
        },
        41918: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => r });
            var r = (function (e) {
                return ((e.PAGE = 'PAGE'), (e.CARD = 'CARD'), e);
            })({});
        },
        43443: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => h });
            var r = i(88800),
                a = i(65724),
                s = i(84961),
                l = i(53548),
                o = i(2058),
                n = i(17392),
                d = i(13607),
                c = i(52300),
                u = i(29504),
                m = i(3099),
                _ = i.n(m);
            let h = (0, s.PA)((e) => {
                let {
                        progress: t,
                        withIcon: i,
                        withCrownIcon: s,
                        position: m,
                        weight: h = 'normal',
                        isDisliked: p,
                        isDisabled: b,
                        className: A,
                        positionClassName: x,
                    } = e,
                    { formatMessage: v } = (0, o.A)(),
                    g = t || i,
                    C = (0, l.useMemo)(() => {
                        if (s) return 'crown';
                        switch (t) {
                            case d._.UP:
                                return 'chartUp';
                            case d._.DOWN:
                                return 'chartDown';
                            case d._.NEW:
                                return 'chartNew';
                            default:
                                return 'chartSame';
                        }
                    }, [t, s]),
                    N = (0, l.useMemo)(() => {
                        switch (t) {
                            case d._.UP:
                                return v({ id: 'entity-names.chart-up' });
                            case d._.DOWN:
                                return v({ id: 'entity-names.chart-down' });
                            case d._.NEW:
                                return v({ id: 'entity-names.chart-new' });
                            default:
                                return v({ id: 'entity-names.chart-same' });
                        }
                    }, [v, t]),
                    y = s ? 'crown' : t;
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(_().root, A),
                    'data-test-id': n.OA.chart.CHART_PROGRESS,
                    children: [
                        (0, r.jsx)(u.HL, {
                            variant: 'div',
                            weight: h,
                            type: 'entity',
                            size: 'm',
                            className: (0, a.$)(_().position, x, { [_().position_disliked]: p, [_().position_disabled]: b }),
                            'data-test-id': n.OA.chart.CHART_PROGRESS_POSITION,
                            children: m,
                        }),
                        g &&
                            (0, r.jsx)(c.I, {
                                variant: C,
                                size: 'xxs',
                                'aria-label': N,
                                className: (0, a.$)(_().progress, _()['progress_'.concat(y)], { [_().progress_disliked]: p, [_().progress_disabled]: b }),
                                'data-test-id': n.OA.chart.CHART_PROGRESS_ICON,
                            }),
                    ],
                });
            });
        },
        44440: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => r });
            let r = (e, t) => {
                let i = new URL(window.location.href),
                    r = i.searchParams;
                return (r.set(e, t), (i.search = r.toString()), i.toString());
            };
        },
        54320: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => c });
            var r = i(88800),
                a = i(53548),
                s = i(29993),
                l = i(9492),
                o = i(29595),
                n = i(74965),
                d = i(74773);
            let c = (e, t) => {
                let { notify: i, dismiss: c } = (0, n.l)(),
                    u = (0, a.useRef)(void 0),
                    m = (0, s.c)(() => {
                        var i;
                        (c({ notificationId: u.current }), (u.current = 0));
                        let r = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === d.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            r.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, a.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, r.jsx)(l.L, { reloadBlocks: m }), { containerId: o.u.ERROR, autoClose: !1 }));
                }, [c, m, i, e.rejectedPagesCount]);
            };
        },
        56651: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var r = i(88800),
                a = i(96706),
                s = i(53548),
                l = i(2058),
                o = i(29595),
                n = i(74965),
                d = i(72288),
                c = i(66943),
                u = i(25883);
            let m = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, n.l)(),
                    { formatMessage: m } = (0, l.A)(),
                    [_, h] = (0, s.useState)(!1);
                return (0, s.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, r.jsx)(c.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (_) return;
                    let s = { ...(0, a.HO)(e), url: e.url, isPinned: !e.isPinned };
                    h(!0);
                    let l = await e.togglePin();
                    (h(!1),
                        l
                            ? i((0, r.jsx)(u.l, { album: s }), { containerId: o.u.INFO })
                            : i((0, r.jsx)(c.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, m, i, _, t.isAuthorized]);
            };
        },
        60757: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => a });
            var r = i(58217);
            let a = (e) => {
                let { album: t, callback: i, shouldHistoryBack: a } = e;
                return (0, r.l)({ entity: t, callback: i, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        62216: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 568));
        },
        63565: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { g: () => r }),
                (function (e) {
                    ((e.RATING = 'rating'), (e.YEAR = 'year'));
                })(r || (r = {})));
        },
        79418: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => b });
            var r = i(88800),
                a = i(65724),
                s = i(61013),
                l = i(53548);
            let o = (e) => {
                    let { style: t, forwardRef: i, context: a, ...s } = e,
                        l = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        o = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: o, 'aria-label': l, style: { ...t }, ref: i, ...s });
                },
                n = (0, l.forwardRef)((e, t) => (0, r.jsx)(o, { forwardRef: t, ...e }));
            var d = i(16434),
                c = i.n(d);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: s, withHeader: l, withForceScroll: o, ...n } = e;
                    return (0, r.jsx)('div', {
                        className: (0, a.$)(c().scroller, { [c().scroller_withFooter]: s, [c().scroller_withHeader]: l, [c().scroller_withForceScroll]: o }),
                        style: { ...t },
                        ref: i,
                        ...n,
                        tabIndex: -1,
                    });
                },
                m = (0, l.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
            var _ = i(55482),
                h = i(75151);
            let p = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: a,
                            debounceDurationInMs: s = 100,
                            totalCount: o = 0,
                            shouldTriggerRangeChangedOn: n = [],
                            endReached: d,
                            virtuosoRef: c,
                            ...u
                        } = e,
                        [m, p] = (0, l.useState)(null),
                        b = (0, l.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == a || a(e), n.length > 0 && p(e), t && i)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            a = Math.floor(e.startIndex / t);
                                        for (let e = a; e < r; e++) i(e);
                                    }
                                }, s),
                            [s, a, t, i, n],
                        );
                    (0, l.useEffect)(() => {
                        n.length > 0 && m && b(m);
                    }, n);
                    let A = (0, l.useMemo)(() => {
                        if (d)
                            return (0, _.A)((e) => {
                                d(e);
                            }, s);
                    }, [d, s]);
                    return (0, r.jsx)(h.sN, { ref: c, rangeChanged: b, totalCount: o, endReached: A, ...u });
                },
                b = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: o,
                            onGetDataByRange: d,
                            itemClassName: u,
                            itemContentCallback: _,
                            listClassName: h,
                            overscan: b = 700,
                            pageSize: A = 20,
                            totalCount: x,
                            totalRequests: v,
                            debounceDurationInMs: g,
                            initialItemCount: C,
                            minInitialItemCount: N = 20,
                            handleRef: y,
                            alwaysShowScrollbar: k = !1,
                            testId: L,
                            isMobileLayout: f = !1,
                            shouldTriggerRangeChangedOn: S,
                            ...j
                        } = e,
                        [T, R] = (0, l.useState)(!1),
                        w = (0, l.useMemo)(
                            () =>
                                (0, s.A)((e) => {
                                    R(e);
                                }, 100),
                            [],
                        ),
                        P = (0, l.useMemo)(() => {
                            var e, t;
                            return f
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : n,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : n,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, v, f]),
                        I = C ? Math.min(C, N) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(c().root, { [c().root_scrolling]: T || k, [c().root_notScrolling]: !T && !k }, t),
                        'data-test-id': L,
                        children: [
                            f && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, r.jsx)(p, {
                                overscan: b,
                                components: P,
                                listClassName: h,
                                itemClassName: u,
                                isScrolling: w,
                                itemContent: _,
                                scrollerRef: y,
                                totalCount: x,
                                pageSize: A,
                                onPageHandler: o,
                                onRangeHandler: d,
                                debounceDurationInMs: g,
                                initialItemCount: I,
                                shouldTriggerRangeChangedOn: S,
                                ...j,
                            }),
                            f && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        84218: (e) => {
            e.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        86298: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => m });
            var r = i(88800),
                a = i(65724),
                s = i(2058),
                l = i(17392),
                o = i(96817),
                n = i(52300),
                d = i(29504),
                c = i(84218),
                u = i.n(c);
            let m = (e) => {
                let { className: t, isLiked: i, likesCount: c, handleLikeClick: m, ariaLabel: _ } = e,
                    { formatNumber: h } = (0, s.A)();
                return (0, r.jsx)(o.$, {
                    className: (0, a.$)(u().root, t),
                    onClick: m,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, r.jsx)(n.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': _,
                    'data-test-id': l.S7.CARD_LIKES,
                    children: (0, r.jsx)(d.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: h(c) }),
                });
            };
        },
        95756: (e, t, i) => {
            'use strict';

            i.d(t, { x: () => $ });
            // for PulseSync WebHost: BEGIN imports for native addon context menu items
            var pulseSyncMenuJsx = i(88800),
                pulseSyncMenuItems = i(19934),
                pulseSyncMenuIcons = i(52300);
            // for PulseSync WebHost: END imports for native addon context menu items
            var r = i(88800),
                a = i(84961),
                s = i(53548),
                l = i(2058),
                o = i(97234),
                n = i(17392),
                d = i(18593),
                c = i(29993),
                u = i(19934),
                m = i(18143),
                _ = i(29595),
                h = i(74965),
                p = i(72288),
                b = i(66943),
                A = i(92966),
                x = i(56651),
                v = i(48749),
                g = i(22505),
                C = i(5407),
                N = i(64284),
                y = i(98427),
                k = i(57934),
                L = i(84384),
                f = i(9618),
                S = i(87762),
                j = i(95210),
                T = i(47964),
                R = i(46936),
                w = i(97956),
                P = i(98953),
                I = i(32721),
                B = i(18130),
                M = i(88969),
                E = i(52300);
            let O = (0, a.PA)((e) => {
                let { isFinished: t, onClick: i, className: a } = e,
                    { user: l } = (0, p.g)(),
                    o = (0, s.useMemo)(
                        () => (t ? (0, r.jsx)(M.A, { id: 'interface-actions.mark-all-non-listened' }) : (0, r.jsx)(M.A, { id: 'interface-actions.mark-all-listened' })),
                        [t],
                    );
                return (0, r.jsx)(u.Dr, {
                    className: a,
                    onClick: i,
                    icon: (0, r.jsx)(E.I, { variant: 'check', size: 'xxs' }),
                    disabled: !l.isAuthorized,
                    'data-test-id': n.S7.CONTEXT_MENU_MARK_ALL_LISTENED_BUTTON,
                    children: o,
                });
            });
            var D = i(93091),
                z = i(27817),
                U = i(74064),
                K = i(44988),
                F = i(15425),
                V = i(81066),
                W = i(18278),
                H = i(41918);
            // for PulseSync: BEGIN download-to-file action in the album context menu
            var pulseSyncMst = i(5120);
            let pulseSyncDownloadAlbumToFile = (0, a.PA)((e) => {
                let { album: t } = e,
                    i = (0, s.useCallback)(async () => {
                        try {
                            let { albumResource: e, modelActionsLogger: i } = (0, pulseSyncMst._$)(t),
                                r = await e.getAlbumWithTracksIds({
                                    albumId: t.id,
                                    resumeStream: !1,
                                }),
                                s = (r?.volumes || [])
                                    .flat()
                                    .map((e) => (e?.id ? ''.concat(e.id, ':').concat(t.id) : null))
                                    .filter(Boolean),
                                a = Array.isArray(t.artists)
                                    ? t.artists
                                          .map((e) => e.name)
                                          .filter(Boolean)
                                          .join(', ')
                                    : t.artistName,
                                n = [t.title];
                            (['album', 'single'].includes(t.type ?? 'album') && a && n.unshift(a),
                                s.length && window.musicDesktop?.pulsesync.downloads.tracks?.(s, t.type ?? 'album', n.join(' — ')));
                        } catch (e) {
                            try {
                                (0, pulseSyncMst._$)(t).modelActionsLogger.error(e);
                            } catch {}
                        }
                    }, [t]);
                return (0, r.jsx)(u.Dr, {
                    onClick: i,
                    disabled: !t?.id,
                    icon: (0, r.jsx)(E.I, {
                        variant: 'download',
                        size: 'xxs',
                    }),
                    children: 'Скачать в файл',
                });
            });
            // for PulseSync: END download-to-file action in the album context menu
            let $ = (0, a.PA)((e) => {
                // for PulseSync WebHost: BEGIN refresh the album menu when native addon slots change
                let [, pulseSyncSetAlbumMenuRevision] = (0, s.useState)(0);
                (0, s.useEffect)(() => {
                    const onNativeSlotChange = (event) => {
                        if (event.detail === 'albumContextMenu') pulseSyncSetAlbumMenuRevision((revision) => revision + 1);
                    };
                    document.addEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                    pulseSyncSetAlbumMenuRevision((revision) => revision + 1);
                    return () => document.removeEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                }, []);
                // for PulseSync WebHost: END refresh the album menu when native addon slots change
                var t, i;
                let { album: a, children: M, onOpenChange: E, open: $, wrapperClassName: q, variant: Y, ...G } = e,
                    { shouldShowBuySubscriptionModal: X, showBuySubscriptionModal: J } = (0, f.q)(),
                    {
                        settings: { isMobile: Q },
                        trailer: Z,
                        user: ee,
                        experiments: et,
                        albumCPA: { isPlusCPAEnabled: ei, isPlusCPAPlayerBarEnabled: er },
                    } = (0, p.g)(),
                    ea = (0, A.K)(a),
                    es = (0, x.A)(a),
                    el = (0, k.F)(),
                    eo = ''.concat(N.U.ALBUM, '-').concat(a.id),
                    en = a.isNonMusic && Y === H.z.PAGE,
                    ed = et.checkExperiment(w.z.WebEditorsFeatures, 'on'),
                    ec = !a.isNonMusic && !et.checkExperiment(w.z.WebNextProductWithoutRecommendation, 'on'),
                    { formatMessage: eu } = (0, l.A)(),
                    em = (0, C.P)(),
                    { pageAlbumId: e_ } = (0, S.T)(),
                    eh = ei({ pageAlbumId: e_, albumId: a.id, isNonMusic: a.isNonMusic }),
                    ep = er(a.id, a.isNonMusic),
                    eb = (() => {
                        let { user: e, album: t, fullscreenPlayer: i } = (0, p.g)(),
                            { notify: a } = (0, h.l)(),
                            { formatMessage: o } = (0, l.A)();
                        return (0, s.useCallback)(async () => {
                            var s, l;
                            if (!t) return;
                            let n = i.modal.isOpened ? _.u.FULLSCREEN_ERROR : _.u.ERROR;
                            return e.isAuthorized
                                ? (await t.setListeningFinishedStatus()) !== m.T.OK
                                    ? void a((0, r.jsx)(b.h, { error: o({ id: 'error-messages.error-during-action' }) }), { containerId: n })
                                    : void (null == (l = t.meta) || l.updateFinished(!(null == (s = t.meta) ? void 0 : s.listeningFinished)))
                                : void a((0, r.jsx)(b.h, { error: o({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n });
                        }, [o, a, t, e.isAuthorized, i.modal.isOpened]);
                    })(),
                    { shareLink: eA, pathname: ex } = (0, B.b)('/album/:albumId', { params: { albumId: a.id } }),
                    ev = (0, v.A)({ entityVariant: R.D.ALBUM, urlParams: { id: a.id } }),
                    { isPlaying: eg, togglePlay: eC } = (0, T.B)({
                        seeds: null != (i = null == a ? void 0 : a.seeds) ? i : [],
                        pageIdForFrom: y.b.RADIO,
                        blockIdForFrom: eo,
                        parentContextId: a.id,
                    }),
                    { utmLink: eN } = (0, L.f)({ blockId: N.U.ALBUM, contextType: d.K.Album, contextId: null == a ? void 0 : a.id }),
                    ey = (0, c.c)(() => {
                        if (X && ee.isAuthorized) return void J();
                        !em() && (eg || eC());
                    }),
                    ek = (0, c.c)(() => {
                        if (X && !ep) return void J();
                        em() || (Z.setUtmLink(eN), Z.openAlbumTrailer(a.id), el(o.DomainObjectType.Album, String(a.id)));
                    });
                (0, j.N)($);
                let eL = (0, s.useMemo)(() => {
                        if (!Q) return (0, r.jsx)(z.L, { onClick: es, isPinned: a.isPinned });
                    }, [a.isPinned, es, Q]),
                    ef = (0, s.useMemo)(() => {
                        let e = !eh && !ee.isAuthorized;
                        return a.isNonMusic
                            ? (0, r.jsx)(K.U, { onClick: ea, isLiked: a.isLiked, albumType: a.type })
                            : (0, r.jsx)(D.T, { onClick: ea, isLiked: a.isLiked, disabled: e });
                    }, [a.isLiked, a.type, ea, a.isNonMusic, ee.isAuthorized, eh]),
                    eS = (0, s.useMemo)(() => {
                        var e;
                        if (!a.isNonMusic && (null == (e = a.trailer) ? void 0 : e.isAvailable)) return (0, r.jsx)(F.N, { onClick: ek, disabled: !a.isAvailable });
                    }, [a.isAvailable, null == (t = a.trailer) ? void 0 : t.isAvailable, a.isNonMusic, ek]),
                    ej = (0, s.useMemo)(() => {
                        if (ec) return (0, r.jsx)(V.C, { onClick: ey, disabled: !a.isAvailable || (ep && Q), variant: I.I.ALBUM, onOpenMenuChange: E });
                    }, [a.isAvailable, ey, ec, E, ep, Q]),
                    eT = { variant: P.Y.ALBUM, id: a.id, title: a.title, path: ex, albumArtistName: a.artistName, albumArtistId: a.artistId };
                // for PulseSync WebHost: BEGIN album context and native addon menu item rendering
                let pulseSyncInjectAlbumMenuItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('albumContextMenu', items, {
                        eventDetail: {
                            id: String(a.id),
                            url: ex,
                            ...(a.title
                                ? {
                                      title: String(a.title),
                                  }
                                : {}),
                        },
                        renderItem: ({ key, payload, activate }) => {
                            const label = String(payload?.label ?? '').trim(),
                                icon = String(payload?.icon ?? '').trim();
                            if (!label || !icon) return null;
                            return (0, pulseSyncMenuJsx.jsx)(
                                pulseSyncMenuItems.Dr,
                                {
                                    icon: (0, pulseSyncMenuJsx.jsx)(pulseSyncMenuIcons.I, {
                                        variant: icon,
                                        size: 'xxs',
                                    }),
                                    onClick: () => {
                                        (activate(), E(!1));
                                    },
                                    children: label,
                                    'data-pulsesync-addon-menu-item': '',
                                },
                                key,
                            );
                        },
                    }) ?? items;
                // for PulseSync WebHost: END album context and native addon menu item rendering
                return (0, r.jsxs)(u.W1, {
                    isMobile: Q,
                    offsetOptions: 10,
                    open: $,
                    onOpenChange: E,
                    ariaLabel: eu({ id: 'interface-actions.context-menu' }),
                    wrapperClassName: q,
                    containerDataTestId: n.Kq.album.ALBUM_CONTEXT_MENU,
                    ...G,
                    // for PulseSync WebHost: BEGIN inject native addon items into the album context menu
                    children: pulseSyncInjectAlbumMenuItems([
                        Q && (0, r.jsx)(W.C, { getDescriptionTexts: a.getDescriptionTexts, entityId: a.id }),
                        ed && (0, r.jsx)(g.d, { entityVariant: R.D.ARTIST, adminUrl: ev }),
                        eL,
                        ef,
                        eS,
                        ej,
                        // for PulseSync: BEGIN insert the album download-to-file menu action
                        (0, r.jsx)(pulseSyncDownloadAlbumToFile, { album: a }),
                        // for PulseSync: END insert the album download-to-file menu action
                        M,
                        en && (0, r.jsx)(O, { onClick: eb, isFinished: a.listeningFinished }),
                        (0, r.jsx)(U.H, { shareLink: eA, entityMeta: eT }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the album context menu
                });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                9904, 7191, 3078, 1833, 8194, 1191, 8655, 949, 6706, 4771, 1311, 2662, 6904, 1898, 2058, 3578, 8628, 4378, 9780, 8283, 9332, 5151, 2837, 9202, 4732, 9087,
                3979, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 6374, 2088, 8979, 2288, 8466, 763, 2670, 7358,
            ],
            () => e((e.s = 62216)),
        ),
            (_N_E = e.O()));
    },
]);
