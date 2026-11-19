(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3763],
    {
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
                    withInfo: n,
                    count: o = 10,
                    shimmerClassName: c,
                    linesCount: d,
                    'aria-label': u,
                    withSubcover: m,
                } = e;
                return Array.from(Array(o).keys()).map((e) =>
                    (0, r.jsx)(
                        a.V,
                        { isActive: t, linesCount: d, className: i, round: s, centered: l, withInfo: n, withSubcover: m, 'aria-label': u, shimmerClassName: c },
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
            i.d(t, { L: () => _ });
            var r = i(88800),
                a = i(65724),
                s = i(53548),
                l = i(2058),
                n = i(88969),
                o = i(96817),
                c = i(52300),
                d = i(29504),
                u = i(59304),
                m = i(4044),
                p = i.n(m);
            let _ = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    m = (0, s.useRef)(null),
                    { formatMessage: _ } = (0, l.A)();
                (0, s.useEffect)(() => {
                    var e;
                    null == (e = m.current) || e.focus();
                }, []);
                let h = (0, s.useMemo)(
                    () =>
                        (0, r.jsxs)('div', {
                            className: p().message,
                            children: [
                                (0, r.jsx)(d.HL, {
                                    className: p().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, r.jsx)(n.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, r.jsx)(o.$, {
                                    ref: m,
                                    className: p().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': _({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, r.jsx)(c.I, { variant: 'reset', size: 'xxs', className: p().icon }),
                                }),
                            ],
                        }),
                    [_, t],
                );
                return (0, r.jsx)(u.$, { className: (0, a.$)(p().root, p().important), message: h, closeToast: i });
            };
        },
        10079: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => Z });
            var r = i(88800),
                a = i(65724),
                s = i(84961),
                l = i(53548),
                n = i(2058),
                o = i(97234),
                c = i(91177),
                d = i(70598),
                u = i(46482),
                m = i(17392),
                p = i(18593),
                _ = i(61691),
                h = i(29993),
                g = i(79070),
                v = i(29832),
                C = i(52300),
                x = i(7555),
                b = i(29504),
                A = i(60757),
                N = i(29008),
                f = i(92966),
                k = i(56651),
                y = i(13946),
                R = i(43443),
                E = i(5407),
                T = i(57934),
                I = i(84384),
                O = i(4795),
                L = i(87762),
                j = i(32414),
                S = i(78940),
                P = i(55693),
                w = i(39079),
                M = i(72288),
                D = i(52726),
                F = i(86298),
                B = i(81877),
                U = i(90224),
                z = i(49738),
                G = i(91292),
                H = i(56862),
                Y = i(16704),
                K = i(56446),
                V = i(36207),
                W = i(41918);
            let X = { mainAxis: -26, alignmentAxis: -16 },
                $ = { isEnabled: !0, width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' };
            var q = i(95756),
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
                        releaseDateFormatter: er = j.s,
                    } = e,
                    ea = (0, c.D)(),
                    {
                        user: es,
                        trailer: el,
                        settings: { isMobile: en },
                        albumCPA: { isPlusCPAEnabled: eo },
                        paywall: { modal: ec },
                    } = (0, M.g)(),
                    { from: ed, utmLink: eu } = (0, I.f)({ contextId: s.id, contextType: p.K.Album, utmForPageIds: s.artistIds }),
                    { formatMessage: em, formatDate: ep } = (0, n.A)(),
                    { sendLikeSearchFeedback: e_, sendNavigateSearchFeedback: eh, sendPlaySearchFeedback: eg } = (0, P.z)(),
                    [ev, eC] = (0, l.useState)(!1),
                    [ex, eb] = (0, l.useState)(!1),
                    [eA, eN] = (0, l.useState)(!1),
                    ef = (0, d.S)(),
                    ek = (0, u.g)(),
                    ey = (0, f.K)(s),
                    eR = (0, k.A)(s),
                    eE = (0, S.Z)(s.url),
                    [eT, eI] = (0, l.useState)(!1),
                    eO = (0, T.F)(),
                    [eL, ej] = (0, l.useState)(!1),
                    eS = (0, E.P)(),
                    { pageAlbumId: eP } = (0, L.T)(),
                    ew = eo({ pageAlbumId: eP, albumId: s.id, isNonMusic: s.isNonMusic }),
                    eM = (0, O.N)(),
                    eD = s.isAvailableOnlyForPlus && !s.isUnsafeLegal && !s.isLegalRejected,
                    eF = eD && !en,
                    eB = s.isAvailable || eF || s.isAudiobook,
                    eU = (0, h.c)((e) => {
                        if ((e.stopPropagation(), eS())) return void e.preventDefault();
                        (el.openAlbumTrailer(s.id), eO(o.DomainObjectType.Album, String(s.id)));
                    }),
                    ez = s.type === _._.SINGLE ? em({ id: 'entity-names.single' }) : void 0,
                    eG = s.releaseDate ? ep(s.releaseDate, er()) : void 0,
                    eH = ((e) => {
                        let t = e.filter((e) => !!e).join(' \xb7 ');
                        return 0 === t.length ? null : t;
                    })([null != eG ? eG : s.year, ez]),
                    eY = (0, N.r)(s.type),
                    eK = (0, l.useMemo)(() => {
                        var e;
                        let t = s.isLiked ? em({ id: 'entity-names.has-your-like' }) : '';
                        return ''
                            .concat(eY, ' ')
                            .concat(s.title, ' ')
                            .concat(null != (e = s.version) ? e : '', ' ')
                            .concat(t);
                    }, [eY, em, s.title, s.isLiked, s.version]),
                    { isPlaying: eV, togglePlay: eW } = (0, w.D)({
                        playContextParams: { contextData: { type: p.K.Album, meta: { id: s.id }, from: ed, utmLink: eu }, loadContextMeta: !0 },
                    }),
                    eX = (0, A.c)({ album: s, callback: eE }),
                    e$ = (0, A.c)({ album: s, callback: eW }),
                    eq = (0, h.c)((e) => {
                        (ef({ to: o.AppScreen.AlbumScreen }), null == eh || eh(), eX(e));
                    }),
                    eJ = (0, h.c)(() => {
                        if (!eS()) {
                            if (eM) return void ec.open();
                            (ex || eV || (eb(!0), null == eg || eg()), e$(), eV || ek());
                        }
                    }),
                    eQ = (0, h.c)(() => {
                        (ev || s.isLiked || (eC(!0), null == e_ || e_()), ey());
                    }),
                    eZ = (0, h.c)((e) => {
                        (eN(e), eI(e));
                    }),
                    e0 = (0, l.useMemo)(() => {
                        var e;
                        return (0, r.jsxs)(b.HL, {
                            className: (0, a.$)(Q().title, { [Q().title_withVersion]: s.version, [Q().title_withChart]: ee }),
                            variant: 'div',
                            type: 'entity',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 2,
                            'aria-hidden': !0,
                            'data-test-id': m.Kq.album.ALBUM_TITLE,
                            children: [
                                (0, r.jsx)(G.N, {
                                    'aria-label': ''.concat(s.title, ' ').concat(null != (e = s.version) ? e : ''),
                                    className: Q().titleLink,
                                    href: s.url,
                                    tabIndex: -1,
                                    onClick: eq,
                                    'data-test-id': m.Kq.album.ALBUM_TITLE_LINK,
                                    children: s.title,
                                }),
                                s.version &&
                                    (0, r.jsx)(b.HL, {
                                        className: Q().version,
                                        variant: 'span',
                                        'data-test-id': m.Kq.album.ALBUM_VERSION,
                                        children: ' '.concat(s.version),
                                    }),
                            ],
                        });
                    }, [s.title, s.url, s.version, eq, ee]),
                    e8 = (0, l.useMemo)(() => {
                        var e;
                        return (0, r.jsx)(G.N, {
                            className: Q().srTitleLink,
                            href: s.url,
                            onClick: eq,
                            children: ''.concat(s.title, ' ').concat(null != (e = s.version) ? e : ''),
                        });
                    }, [s.title, s.url, s.version, eq]),
                    e1 = (0, l.useMemo)(() => {
                        var e;
                        if (null == s || null == (e = s.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                V.n,
                                {
                                    children: (0, r.jsx)(
                                        K.k,
                                        { className: (0, a.$)(Q().trailerButton, Q().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eU },
                                        s.getKey('TrailerButton'),
                                    ),
                                },
                                s.getKey('AlbumCardTrailerTooltip'),
                            );
                    }, [s, eU]),
                    e9 = (0, l.useMemo)(
                        () =>
                            (0, r.jsx)(
                                q.x,
                                {
                                    album: s,
                                    onOpenChange: eZ,
                                    open: eA,
                                    className: (0, a.$)(Q().menuButton, Q().control),
                                    icon: (0, r.jsx)(C.I, { size: 'xxs', variant: 'more' }),
                                    size: 's',
                                    variant: W.z.CARD,
                                    'data-test-id': m.Kq.album.ALBUM_CONTEXT_MENU_BUTTON,
                                },
                                s.getKey('AlbumContextMenu'),
                            ),
                        [s, eZ, eA],
                    ),
                    e2 = (0, l.useCallback)(
                        () =>
                            (0, r.jsx)(
                                Y.D,
                                {
                                    className: (0, a.$)(Q().playButton, Q().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                    onClick: eJ,
                                    isPlaying: eV,
                                    disabled: eF,
                                },
                                s.getKey('PlayButton'),
                            ),
                        [eF, s, eV, eJ],
                    ),
                    e4 = (0, l.useMemo)(
                        () =>
                            eF
                                ? (0, r.jsx)(D.S, {
                                      className: Q().buyPlusPopover,
                                      buttonText: em({ id: 'interface-actions.more-details' }),
                                      isNested: !0,
                                      placement: 'top-start',
                                      isOpened: eL,
                                      onOpenChange: ej,
                                      textVariant: 'album',
                                      albumTextVariant: s.type,
                                      arrowProps: $,
                                      offsetOptions: X,
                                      renderChildren: e2,
                                  })
                                : e2(),
                        [eF, eL, ej, em, e2, s.type],
                    ),
                    e7 = (0, g.L)(() => {
                        if (eF) return;
                        let e = !ew && !es.isAuthorized;
                        return (0, r.jsx)(
                            z.c,
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
                    e5 = (0, l.useMemo)(() => {
                        if (!eF)
                            return (0, r.jsx)(
                                H.O,
                                { onClick: eR, isPinned: s.isPinned, className: (0, a.$)(Q().pinButton, Q().control), withRipple: !1, isDisabled: eF },
                                s.getKey('PinButton'),
                            );
                    }, [s, eF, eR]),
                    e6 = (0, l.useMemo)(() => {
                        if (s.isAvailable || eF)
                            return (0, r.jsx)(v.hg, {
                                isVisible: eA || eT || eL,
                                className: Q().controls,
                                playControl: e4,
                                likeControl: e7,
                                menuControl: e9,
                                pinControl: e5,
                                trailerControl: e1,
                            });
                    }, [s, eA, eT, e9, e1, eL, e4, e7, e5, eF]),
                    e3 = (0, l.useMemo)(
                        () =>
                            (0, r.jsx)(x.t, {
                                className: Q().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': m.Kq.album.ALBUM_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: Q().coverBlock,
                                    onClick: eq,
                                    children: [
                                        (0, r.jsx)(B.B, {
                                            className: Q().image,
                                            src: s.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eK,
                                            withAvatarReplace: !0,
                                            isAvailable: eB,
                                            'aria-hidden': !0,
                                        }),
                                        eD && (0, r.jsx)(C.I, { variant: 'plusBadge', className: Q().plusBadge }),
                                        e6,
                                    ],
                                }),
                            }),
                        [eq, s.coverUri, eB, eK, e6, eD],
                    );
                return (0, r.jsxs)(v.MN, {
                    ref: ea,
                    className: (0, a.$)(Q().root, { [Q().root_withChart]: ee }, t),
                    'aria-label': eK,
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
                            y.i,
                            { className: Q().artists, artists: s.artists, lineClamp: 1, linkClassName: Q().artistLink, captionSize: 's' },
                            s.getKey('description'),
                        ),
                    chart:
                        ee &&
                        s.chart &&
                        (0, r.jsx)(R.t, { withIcon: !0, className: Q().chart, position: s.chart.position, progress: s.chart.progress }, s.getKey('chart')),
                    'data-test-id': m.Kq.album.ALBUM_ITEM,
                    children: [
                        et &&
                            eH &&
                            (0, r.jsx)(b.HL, { className: Q().addition, variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: eH }),
                        Z &&
                            !!s.actualLikesCount &&
                            (0, r.jsx)(F.x, {
                                className: Q().likeTextButton,
                                ariaLabel: em({ id: 'entity-names.likes-counter' }, { counter: s.actualLikesCount }),
                                likesCount: s.actualLikesCount,
                                isLiked: s.isLiked,
                                handleLikeClick: ey,
                            }),
                        i,
                    ],
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
        13607: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { _: () => r }),
                (function (e) {
                    ((e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new'));
                })(r || (r = {})));
        },
        14567: (e, t) => {
            (e.exports = function (e, t, r, a) {
                return JSON.stringify(e, i(t, a), r);
            }).getSerialize = i;
            function i(e, t) {
                var i = [],
                    r = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return i[0] === t ? '[Circular ~]' : '[Circular ~.' + r.slice(0, i.indexOf(t)).join('.') + ']';
                        }),
                    function (a, s) {
                        if (i.length > 0) {
                            var l = i.indexOf(this);
                            (~l ? i.splice(l + 1) : i.push(this), ~l ? r.splice(l, 1 / 0, a) : r.push(a), ~i.indexOf(s) && (s = t.call(this, a, s)));
                        } else i.push(s);
                        return null == e ? s : e.call(this, a, s);
                    }
                );
            }
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
        23877: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { Q: () => a, c: () => r }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(r || (r = {})));
            let a = { [r.ERROR]: 'error', [r.WARNING]: 'warn', [r.INFO]: 'info', [r.DEBUG]: 'debug', [r.TRACE]: 'trace' };
        },
        25354: (e, t, i) => {
            'use strict';
            i.d(t, { El: () => n, I7: () => o, K$: () => l, cM: () => d, fZ: () => a, tA: () => s, vX: () => r, xi: () => c });
            let r = 16,
                a = 16,
                s = 315,
                l = 170,
                n = 270,
                o = 7,
                c = 30,
                d = 30;
        },
        25883: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => n });
            var r = i(88800),
                a = i(84961),
                s = i(33719),
                l = i(5048);
            let n = (0, a.PA)((e) => {
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
            i.d(t, { c: () => l, r: () => n });
            var r = i(53548),
                a = i(2058),
                s = i(61691),
                l = (function (e) {
                    return ((e.PIN = 'pin'), e);
                })({});
            let n = (e, t) => {
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
        29201: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a });
            var r = i(35396);
            let a = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, r.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        32414: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => r });
            let r = () => ({ year: 'numeric', month: 'long', day: 'numeric' });
        },
        35396: (e, t, i) => {
            'use strict';
            var r;
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
                })(r || (r = {})));
            let a = new Set(Object.values(r)),
                s = (e) => 'string' == typeof e && a.has(e);
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
            i.d(t, { t: () => _ });
            var r = i(88800),
                a = i(65724),
                s = i(84961),
                l = i(53548),
                n = i(2058),
                o = i(17392),
                c = i(13607),
                d = i(52300),
                u = i(29504),
                m = i(3099),
                p = i.n(m);
            let _ = (0, s.PA)((e) => {
                let {
                        progress: t,
                        withIcon: i,
                        withCrownIcon: s,
                        position: m,
                        weight: _ = 'normal',
                        isDisliked: h,
                        isDisabled: g,
                        className: v,
                        positionClassName: C,
                    } = e,
                    { formatMessage: x } = (0, n.A)(),
                    b = t || i,
                    A = (0, l.useMemo)(() => {
                        if (s) return 'crown';
                        switch (t) {
                            case c._.UP:
                                return 'chartUp';
                            case c._.DOWN:
                                return 'chartDown';
                            case c._.NEW:
                                return 'chartNew';
                            default:
                                return 'chartSame';
                        }
                    }, [t, s]),
                    N = (0, l.useMemo)(() => {
                        switch (t) {
                            case c._.UP:
                                return x({ id: 'entity-names.chart-up' });
                            case c._.DOWN:
                                return x({ id: 'entity-names.chart-down' });
                            case c._.NEW:
                                return x({ id: 'entity-names.chart-new' });
                            default:
                                return x({ id: 'entity-names.chart-same' });
                        }
                    }, [x, t]),
                    f = s ? 'crown' : t;
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(p().root, v),
                    'data-test-id': o.OA.chart.CHART_PROGRESS,
                    children: [
                        (0, r.jsx)(u.HL, {
                            variant: 'div',
                            weight: _,
                            type: 'entity',
                            size: 'm',
                            className: (0, a.$)(p().position, C, { [p().position_disliked]: h, [p().position_disabled]: g }),
                            'data-test-id': o.OA.chart.CHART_PROGRESS_POSITION,
                            children: m,
                        }),
                        b &&
                            (0, r.jsx)(d.I, {
                                variant: A,
                                size: 'xxs',
                                'aria-label': N,
                                className: (0, a.$)(p().progress, p()['progress_'.concat(f)], { [p().progress_disliked]: h, [p().progress_disabled]: g }),
                                'data-test-id': o.OA.chart.CHART_PROGRESS_ICON,
                            }),
                    ],
                });
            });
        },
        44084: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => s });
            var r = i(23877),
                a = i(74021);
            class s extends a.q {
                disableLogToConsole;
                constructor(e) {
                    (super(e), (this.disableLogToConsole = e.disableLogToConsole));
                }
                info(e, t) {
                    this.maxLogLevel >= r.c.INFO && this.logToConsole(r.c.INFO, e, t);
                }
                debug(e, t) {
                    this.maxLogLevel >= r.c.DEBUG && this.logToConsole(r.c.DEBUG, e, t);
                }
                trace(e, t) {
                    this.maxLogLevel >= r.c.TRACE && this.logToConsole(r.c.TRACE, e, t);
                }
                warn(e, t) {
                    (this.maxLogLevel >= r.c.WARNING && this.logToConsole(r.c.WARNING, e, t), this.sendToErrorBooster(r.c.WARNING, e, t));
                }
                error(e, t) {
                    (this.maxLogLevel >= r.c.ERROR && this.logToConsole(r.c.ERROR, e, t), this.sendToErrorBooster(r.c.ERROR, e, t));
                }
                log(e, t) {
                    this.logToConsole(r.c.INFO, e, t);
                }
                logToConsole(e, t, i) {
                    if (this.disableLogToConsole) return;
                    let a = r.Q[e];
                    console[a](...this.formatMessage(e, t, i));
                }
                sendToErrorBooster(e, t, i) {
                    window.Ya.Rum.logError({ message: t, level: e, additional: { data: i ? this.obfuscateData({ ...this.additionalData, ...i }) : {} } });
                }
            }
        },
        54320: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => d });
            var r = i(88800),
                a = i(53548),
                s = i(29993),
                l = i(9492),
                n = i(29595),
                o = i(74965),
                c = i(74773);
            let d = (e, t) => {
                let { notify: i, dismiss: d } = (0, o.l)(),
                    u = (0, a.useRef)(void 0),
                    m = (0, s.c)(() => {
                        var i;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let r = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            r.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, a.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, r.jsx)(l.L, { reloadBlocks: m }), { containerId: n.u.ERROR, autoClose: !1 }));
                }, [d, m, i, e.rejectedPagesCount]);
            };
        },
        55761: (e) => {
            e.exports = {
                root: 'GenreAlbumsPage_root__r_Sts',
                scrollContainer: 'GenreAlbumsPage_scrollContainer__K_v_b',
                important: 'GenreAlbumsPage_important__r3P2T',
                shimmerScrollContainer: 'GenreAlbumsPage_shimmerScrollContainer__IpQeU',
                footer: 'GenreAlbumsPage_footer__vmCiR',
                item: 'GenreAlbumsPage_item__zRzB0',
                content: 'GenreAlbumsPage_content__PRJUm',
                shimmerTitle: 'GenreAlbumsPage_shimmerTitle__UW_D5',
            };
        },
        56651: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var r = i(88800),
                a = i(96706),
                s = i(53548),
                l = i(2058),
                n = i(29595),
                o = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(25883);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: m } = (0, l.A)(),
                    [p, _] = (0, s.useState)(!1);
                return (0, s.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, r.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (p) return;
                    let s = { ...(0, a.HO)(e), url: e.url, isPinned: !e.isPinned };
                    _(!0);
                    let l = await e.togglePin();
                    (_(!1),
                        l
                            ? i((0, r.jsx)(u.l, { album: s }), { containerId: n.u.INFO })
                            : i((0, r.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [e, m, i, p, t.isAuthorized]);
            };
        },
        59724: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => u });
            var r = i(88800),
                a = i(53548),
                s = i(8383),
                l = i(24709),
                n = i(88966);
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
                                r = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                i();
                                            } finally {
                                                ((t = !1), e.length > 0 && r());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (i(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), r());
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
            let u = (0, l.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let i = (0, n.N)(),
                        l = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === d.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [o, u] = (0, a.useState)(() => {
                            let e = new c(i.createScreenSession().screenViewUuid, i);
                            return { client: i, input: t, isReady: l, scope: l ? i.createScreenScope(t, e) : null, session: e };
                        });
                    if (o.client !== i || o.input.pageId !== t.pageId || o.input.skeletonId !== t.skeletonId) {
                        let a = new c(i.createScreenSession().screenViewUuid, i),
                            n = { client: i, input: t, isReady: l, scope: l ? i.createScreenScope(t, a) : null, session: a };
                        return (u(n), (0, r.jsx)(s.k, { value: n, children: e }));
                    }
                    if (
                        o.isReady !== l ||
                        o.input.mainObjectType !== t.mainObjectType ||
                        o.input.mainObjectId !== t.mainObjectId ||
                        o.input.displayReasonId !== t.displayReasonId ||
                        o.input.pageIdForFrom !== t.pageIdForFrom ||
                        o.input.pagePlacement !== t.pagePlacement ||
                        o.input.pageStyle !== t.pageStyle
                    ) {
                        let a = { ...o, input: t, isReady: l, scope: l ? i.createScreenScope(t, o.session) : null };
                        return (u(a), (0, r.jsx)(s.k, { value: a, children: e }));
                    }
                    return (0, r.jsx)(s.k, { value: o, children: e });
                },
            );
        },
        59918: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => s });
            var r = i(27169),
                a = i(29201);
            let s = (e) => {
                var t, i, s, l, n;
                return e
                    ? {
                          id: e.id,
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
                          cover: { uri: e.coverUri || '', type: r.Q.PIC, prefix: '', custom: !1 },
                          ogImage: '',
                          derivedColors: { accent: '', average: e.averageColor || '', miniPlayer: '', waveText: '' },
                          available: e.isAvailable,
                          disclaimers: (0, a.H)(e.disclaimers),
                          counts: {
                              directAlbums: (null == (i = e.counts) ? void 0 : i.albums) || 0,
                              alsoAlbums: (null == (s = e.counts) ? void 0 : s.compilations) || 0,
                              tracks: (null == (l = e.counts) ? void 0 : l.tracks) || 0,
                              alsoTracks: 0,
                          },
                          trailer: { available: !!(null == (n = e.trailer) ? void 0 : n.isAvailable) },
                          hasPromotions: !1,
                          genres: [],
                          links: [],
                          ticketsAvailable: !1,
                          ratings: { week: 0, month: 0, day: 0 },
                          composer: e.isComposer || !1,
                          various: e.various || !1,
                      }
                    : {
                          id: '',
                          name: '',
                          various: !1,
                          composer: !1,
                          decomposed: [],
                          ogImage: '',
                          hasPromotions: !1,
                          genres: [],
                          ticketsAvailable: !1,
                          links: [],
                          ratings: { week: 0, month: 0, day: 0 },
                          counts: { directAlbums: 0, alsoAlbums: 0, tracks: 0, alsoTracks: 0 },
                          available: !1,
                          disclaimers: [],
                      };
            };
        },
        60266: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => l });
            var r = i(88800);
            i(30282);
            var a = i(11006),
                s = i.n(a);
            let l = (e) => {
                let { children: t } = e;
                return (0, r.jsx)('footer', { className: s().empty });
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
        62293: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => a });
            var r = i(97956);
            let a = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: a, userRegion: s } = e;
                return 'ru' === s && t(r.z.WebNextFooterDisclaimer, 'on') ? i() : a();
            };
        },
        66610: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => o });
            var r = i(53548),
                a = i(24709),
                s = i(88966),
                l = i(87138),
                n = i(46457);
            let o = (0, a.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, s.N)(),
                    t = (0, l.w)(),
                    i = (0, r.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, n.c)((e) => {
                    t?.object && i && i.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        70278: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => a });
            var r = i(59918);
            let a = (e) => {
                var t;
                if (!e)
                    return {
                        id: 0,
                        title: '',
                        availableForOptions: [],
                        availableForPremiumUsers: !0,
                        artists: [],
                        volumes: [],
                        ogImage: '',
                        availablePartially: !1,
                        trackCount: 0,
                        recent: !1,
                        veryImportant: !1,
                        labels: [],
                        metaType: '',
                        availableForMobile: !0,
                    };
                let i = (null == (t = e.artists) ? void 0 : t.map(r.N)) || [];
                return {
                    id: e.id,
                    title: e.title,
                    type: e.type,
                    coverUri: e.coverUri,
                    year: e.year,
                    version: e.version,
                    availableForOptions: e.availableForOptions || [],
                    availableForPremiumUsers: e.availableForPremiumUsers || !0,
                    artists: i,
                    volumes: [],
                    ogImage: e.coverUri || '',
                    availablePartially: !1,
                    trackCount: e.trackCount || 0,
                    recent: !1,
                    veryImportant: !1,
                    labels: [],
                    metaType: '',
                    availableForMobile: !0,
                };
            };
        },
        74021: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => o });
            var r = i(14567),
                a = i(243),
                s = i(62151),
                l = i(33396);
            let n = () => 'SECRET';
            class o {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: i }) {
                    ((this.maxLogLevel = t), (this.secureFields = i), (this.additionalData = e));
                }
                formatMessage(e, t, i = {}, a) {
                    let s,
                        n = String(t instanceof Error && t.stack ? t.stack : t),
                        o = (0, l.A)({ ...this.additionalData, ...i });
                    return (Object.keys(o).length && (s = this.obfuscateData(o)), a) ? `${n} ${r(s)}` : [n, s];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, a.A)(e, t) && (0, s.A)(e, t, n());
                    return e;
                }
            }
        },
        77451: (e, t, i) => {
            'use strict';
            i.d(t, { Jt: () => s, TF: () => n, hZ: () => l });
            var r = function () {
                return (r =
                    Object.assign ||
                    function (e) {
                        for (var t, i = 1, r = arguments.length; i < r; i++)
                            for (var a in (t = arguments[i])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e;
                    }).apply(this, arguments);
            };
            function a(e, t) {
                if (!t) return '';
                var i = '; ' + e;
                return !0 === t ? i : i + '=' + t;
            }
            function s(e) {
                return (function (e) {
                    for (var t = {}, i = e ? e.split('; ') : [], r = 0; r < i.length; r++) {
                        var a = i[r].split('='),
                            s = a.slice(1).join('=');
                        '"' === s[0] && (s = s.slice(1, -1));
                        try {
                            t[decodeURIComponent(a[0])] = s.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function l(e, t, i) {
                var s;
                document.cookie =
                    ((s = r({ path: '/' }, i)),
                    encodeURIComponent(e)
                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                        .replace(/\(/g, '%28')
                        .replace(/\)/g, '%29') +
                        '=' +
                        encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) +
                        (function (e) {
                            if ('number' == typeof e.expires) {
                                var t = new Date();
                                (t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires), (e.expires = t));
                            }
                            return (
                                a('Expires', e.expires ? e.expires.toUTCString() : '') +
                                a('Domain', e.domain) +
                                a('Path', e.path) +
                                a('Secure', e.secure) +
                                a('SameSite', e.sameSite)
                            );
                        })(s));
            }
            function n(e, t) {
                l(e, '', r(r({}, t), { expires: -1 }));
            }
        },
        79418: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => g });
            var r = i(88800),
                a = i(65724),
                s = i(61013),
                l = i(53548);
            let n = (e) => {
                    let { style: t, forwardRef: i, context: a, ...s } = e,
                        l = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        n = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: n, 'aria-label': l, style: { ...t }, ref: i, ...s });
                },
                o = (0, l.forwardRef)((e, t) => (0, r.jsx)(n, { forwardRef: t, ...e }));
            var c = i(16434),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: s, withHeader: l, withForceScroll: n, ...o } = e;
                    return (0, r.jsx)('div', {
                        className: (0, a.$)(d().scroller, { [d().scroller_withFooter]: s, [d().scroller_withHeader]: l, [d().scroller_withForceScroll]: n }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                m = (0, l.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
            var p = i(55482),
                _ = i(75151);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: a,
                            debounceDurationInMs: s = 100,
                            totalCount: n = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [m, h] = (0, l.useState)(null),
                        g = (0, l.useMemo)(
                            () =>
                                (0, p.A)((e) => {
                                    if ((null == a || a(e), o.length > 0 && h(e), t && i)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            a = Math.floor(e.startIndex / t);
                                        for (let e = a; e < r; e++) i(e);
                                    }
                                }, s),
                            [s, a, t, i, o],
                        );
                    (0, l.useEffect)(() => {
                        o.length > 0 && m && g(m);
                    }, o);
                    let v = (0, l.useMemo)(() => {
                        if (c)
                            return (0, p.A)((e) => {
                                c(e);
                            }, s);
                    }, [c, s]);
                    return (0, r.jsx)(_.sN, { ref: d, rangeChanged: g, totalCount: n, endReached: v, ...u });
                },
                g = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: n,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: p,
                            listClassName: _,
                            overscan: g = 700,
                            pageSize: v = 20,
                            totalCount: C,
                            totalRequests: x,
                            debounceDurationInMs: b,
                            initialItemCount: A,
                            minInitialItemCount: N = 20,
                            handleRef: f,
                            alwaysShowScrollbar: k = !1,
                            testId: y,
                            isMobileLayout: R = !1,
                            shouldTriggerRangeChangedOn: E,
                            ...T
                        } = e,
                        [I, O] = (0, l.useState)(!1),
                        L = (0, l.useMemo)(
                            () =>
                                (0, s.A)((e) => {
                                    O(e);
                                }, 100),
                            [],
                        ),
                        j = (0, l.useMemo)(() => {
                            var e, t;
                            return R
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : o,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : o,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, x, R]),
                        S = A ? Math.min(A, N) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(d().root, { [d().root_scrolling]: I || k, [d().root_notScrolling]: !I && !k }, t),
                        'data-test-id': y,
                        children: [
                            R && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, r.jsx)(h, {
                                overscan: g,
                                components: j,
                                listClassName: _,
                                itemClassName: u,
                                isScrolling: L,
                                itemContent: p,
                                scrollerRef: f,
                                totalCount: C,
                                pageSize: v,
                                onPageHandler: n,
                                onRangeHandler: c,
                                debounceDurationInMs: b,
                                initialItemCount: S,
                                shouldTriggerRangeChangedOn: E,
                                ...T,
                            }),
                            R && (null == i ? void 0 : i.Footer) && i.Footer(),
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
                n = i(96817),
                o = i(52300),
                c = i(29504),
                d = i(84218),
                u = i.n(d);
            let m = (e) => {
                let { className: t, isLiked: i, likesCount: d, handleLikeClick: m, ariaLabel: p } = e,
                    { formatNumber: _ } = (0, s.A)();
                return (0, r.jsx)(n.$, {
                    className: (0, a.$)(u().root, t),
                    onClick: m,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, r.jsx)(o.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': p,
                    'data-test-id': l.S7.CARD_LIKES,
                    children: (0, r.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: _(d) }),
                });
            };
        },
        86790: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => y });
            var r = i(88800),
                a = i(65724),
                s = i(84961),
                l = i(2058),
                n = i(30282),
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
                    let { formatMessage: t, language: i, tld: r, year: a } = e;
                    return {
                        year: a,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, r, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, r, i) },
                    };
                };
            var m = i(62293),
                p = i(99839);
            let _ = (e) => e(new Date(), (0, p.m)());
            var h = i(51611),
                g = i(72288),
                v = i(11006),
                C = i.n(v),
                x = i(17392),
                b = i(29504),
                A = i(91292);
            let N = (e) => {
                    let { className: t, data: i } = e;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(C().copyrights, t),
                        'data-test-id': x.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, r.jsxs)(b.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: C().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, r.jsx)(A.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, a.$)(C().copyrightLink, C().yandexMusicLink),
                                        'data-test-id': x.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(b.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, r.jsx)(A.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: C().copyrightLink,
                                'data-test-id': x.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                f = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, r.jsxs)('div', {
                        className: C().links,
                        children: [
                            (0, r.jsx)('ol', {
                                className: C().list,
                                'data-test-id': x.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: a } = e;
                                    return (0, r.jsx)(
                                        'li',
                                        {
                                            className: C().item,
                                            children: (0, r.jsx)(A.N, { target: '_blank', href: a, className: C().link, 'data-test-id': x.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, r.jsx)(b.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: C().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': x.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                k = (e) => {
                    let { className: t, data: i } = e;
                    return (0, r.jsxs)('footer', {
                        className: (0, a.$)(C().root, C().important, t),
                        'data-test-id': x.S7.FOOTER,
                        children: [(0, r.jsx)(f, { links: i.links, disclaimer: i.disclaimer }), (0, r.jsx)(N, { data: i.copyrights })],
                    });
                };
            (0, s.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, g.g)(),
                    { formatDate: a, formatMessage: s } = (0, l.A)(),
                    { language: n } = (0, h.h)(),
                    o = u({ formatMessage: s, language: n, tld: i.tld, year: _(a) });
                return (0, r.jsx)(N, { className: t, data: o });
            });
            let y = (0, s.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: s, location: p, user: v } = (0, g.g)(),
                    { formatDate: x, formatMessage: b } = (0, l.A)(),
                    { isEnabled: A } = null != (t = (0, o.P)()) ? t : {},
                    { language: N } = (0, h.h)(),
                    f = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: r, language: a, tld: s, userRegion: l, year: n } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: r, language: a, userRegion: s } = e,
                                    l = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, r, a) },
                                    n = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, r, a) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, r, a) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, r, a) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, r, a) },
                                    p = [l, o, u];
                                return (i && 'ru' === s && p.push(n), p.push(m), p);
                            })({ formatMessage: i, isWebApplication: r, language: a, tld: s, userRegion: l }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: l,
                            }),
                            copyrights: u({ formatMessage: i, language: a, tld: s, year: n }),
                        };
                    })({
                        checkExperiment: (e, t) => s.checkExperiment(e, t),
                        formatMessage: b,
                        isWebApplication: n.$3,
                        tld: p.tld,
                        language: N,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: _(x),
                    });
                return (0, r.jsx)(k, { className: (0, a.$)({ [C().root_withOffsetForDeeplink]: A }, i), data: f });
            });
        },
        87545: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 96994));
        },
        94144: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a, P: () => s });
            var r = i(53548);
            let a = (0, r.createContext)(null),
                s = () => (0, r.useContext)(a);
        },
        95756: (e, t, i) => {
            'use strict';

            i.d(t, { x: () => V });
            // for PulseSync WebHost: BEGIN imports for native addon context menu items
            var pulseSyncMenuJsx = i(88800),
                pulseSyncMenuItems = i(19934),
                pulseSyncMenuIcons = i(52300);
            // for PulseSync WebHost: END imports for native addon context menu items
            var r = i(88800),
                a = i(84961),
                s = i(53548),
                l = i(2058),
                n = i(97234),
                o = i(17392),
                c = i(18593),
                d = i(29993),
                u = i(19934),
                m = i(18143),
                p = i(29595),
                _ = i(74965),
                h = i(72288),
                g = i(66943),
                v = i(92966),
                C = i(56651),
                x = i(48749),
                b = i(22505),
                A = i(5407),
                N = i(64284),
                f = i(98427),
                k = i(57934),
                y = i(84384),
                R = i(9618),
                E = i(87762),
                T = i(95210),
                I = i(47964),
                O = i(46936),
                L = i(97956),
                j = i(98953),
                S = i(32721),
                P = i(18130),
                w = i(88969),
                M = i(52300);
            let D = (0, a.PA)((e) => {
                let { isFinished: t, onClick: i, className: a } = e,
                    { user: l } = (0, h.g)(),
                    n = (0, s.useMemo)(
                        () => (t ? (0, r.jsx)(w.A, { id: 'interface-actions.mark-all-non-listened' }) : (0, r.jsx)(w.A, { id: 'interface-actions.mark-all-listened' })),
                        [t],
                    );
                return (0, r.jsx)(u.Dr, {
                    className: a,
                    onClick: i,
                    icon: (0, r.jsx)(M.I, { variant: 'check', size: 'xxs' }),
                    disabled: !l.isAuthorized,
                    'data-test-id': o.S7.CONTEXT_MENU_MARK_ALL_LISTENED_BUTTON,
                    children: n,
                });
            });
            var F = i(93091),
                B = i(27817),
                U = i(74064),
                z = i(44988),
                G = i(15425),
                H = i(81066),
                Y = i(18278),
                K = i(41918);
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
                    icon: (0, r.jsx)(M.I, {
                        variant: 'download',
                        size: 'xxs',
                    }),
                    children: 'Скачать в файл',
                });
            });
            // for PulseSync: END download-to-file action in the album context menu
            let V = (0, a.PA)((e) => {
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
                let { album: a, children: w, onOpenChange: M, open: V, wrapperClassName: W, variant: X, ...$ } = e,
                    { shouldShowBuySubscriptionModal: q, showBuySubscriptionModal: J } = (0, R.q)(),
                    {
                        settings: { isMobile: Q },
                        trailer: Z,
                        user: ee,
                        experiments: et,
                        albumCPA: { isPlusCPAEnabled: ei, isPlusCPAPlayerBarEnabled: er },
                    } = (0, h.g)(),
                    ea = (0, v.K)(a),
                    es = (0, C.A)(a),
                    el = (0, k.F)(),
                    en = ''.concat(N.U.ALBUM, '-').concat(a.id),
                    eo = a.isNonMusic && X === K.z.PAGE,
                    ec = et.checkExperiment(L.z.WebEditorsFeatures, 'on'),
                    ed = !a.isNonMusic && !et.checkExperiment(L.z.WebNextProductWithoutRecommendation, 'on'),
                    { formatMessage: eu } = (0, l.A)(),
                    em = (0, A.P)(),
                    { pageAlbumId: ep } = (0, E.T)(),
                    e_ = ei({ pageAlbumId: ep, albumId: a.id, isNonMusic: a.isNonMusic }),
                    eh = er(a.id, a.isNonMusic),
                    eg = (() => {
                        let { user: e, album: t, fullscreenPlayer: i } = (0, h.g)(),
                            { notify: a } = (0, _.l)(),
                            { formatMessage: n } = (0, l.A)();
                        return (0, s.useCallback)(async () => {
                            var s, l;
                            if (!t) return;
                            let o = i.modal.isOpened ? p.u.FULLSCREEN_ERROR : p.u.ERROR;
                            return e.isAuthorized
                                ? (await t.setListeningFinishedStatus()) !== m.T.OK
                                    ? void a((0, r.jsx)(g.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: o })
                                    : void (null == (l = t.meta) || l.updateFinished(!(null == (s = t.meta) ? void 0 : s.listeningFinished)))
                                : void a((0, r.jsx)(g.h, { error: n({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o });
                        }, [n, a, t, e.isAuthorized, i.modal.isOpened]);
                    })(),
                    { shareLink: ev, pathname: eC } = (0, P.b)('/album/:albumId', { params: { albumId: a.id } }),
                    ex = (0, x.A)({ entityVariant: O.D.ALBUM, urlParams: { id: a.id } }),
                    { isPlaying: eb, togglePlay: eA } = (0, I.B)({
                        seeds: null != (i = null == a ? void 0 : a.seeds) ? i : [],
                        pageIdForFrom: f.b.RADIO,
                        blockIdForFrom: en,
                        parentContextId: a.id,
                    }),
                    { utmLink: eN } = (0, y.f)({ blockId: N.U.ALBUM, contextType: c.K.Album, contextId: null == a ? void 0 : a.id }),
                    ef = (0, d.c)(() => {
                        if (q && ee.isAuthorized) return void J();
                        !em() && (eb || eA());
                    }),
                    ek = (0, d.c)(() => {
                        if (q && !eh) return void J();
                        em() || (Z.setUtmLink(eN), Z.openAlbumTrailer(a.id), el(n.DomainObjectType.Album, String(a.id)));
                    });
                (0, T.N)(V);
                let ey = (0, s.useMemo)(() => {
                        if (!Q) return (0, r.jsx)(B.L, { onClick: es, isPinned: a.isPinned });
                    }, [a.isPinned, es, Q]),
                    eR = (0, s.useMemo)(() => {
                        let e = !e_ && !ee.isAuthorized;
                        return a.isNonMusic
                            ? (0, r.jsx)(z.U, { onClick: ea, isLiked: a.isLiked, albumType: a.type })
                            : (0, r.jsx)(F.T, { onClick: ea, isLiked: a.isLiked, disabled: e });
                    }, [a.isLiked, a.type, ea, a.isNonMusic, ee.isAuthorized, e_]),
                    eE = (0, s.useMemo)(() => {
                        var e;
                        if (!a.isNonMusic && (null == (e = a.trailer) ? void 0 : e.isAvailable)) return (0, r.jsx)(G.N, { onClick: ek, disabled: !a.isAvailable });
                    }, [a.isAvailable, null == (t = a.trailer) ? void 0 : t.isAvailable, a.isNonMusic, ek]),
                    eT = (0, s.useMemo)(() => {
                        if (ed) return (0, r.jsx)(H.C, { onClick: ef, disabled: !a.isAvailable || (eh && Q), variant: S.I.ALBUM, onOpenMenuChange: M });
                    }, [a.isAvailable, ef, ed, M, eh, Q]),
                    eI = { variant: j.Y.ALBUM, id: a.id, title: a.title, path: eC, albumArtistName: a.artistName, albumArtistId: a.artistId };
                // for PulseSync WebHost: BEGIN album context and native addon menu item rendering
                let pulseSyncInjectAlbumMenuItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('albumContextMenu', items, {
                        eventDetail: {
                            id: String(a.id),
                            url: eC,
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
                                        (activate(), M(!1));
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
                    open: V,
                    onOpenChange: M,
                    ariaLabel: eu({ id: 'interface-actions.context-menu' }),
                    wrapperClassName: W,
                    containerDataTestId: o.Kq.album.ALBUM_CONTEXT_MENU,
                    ...$,
                    // for PulseSync WebHost: BEGIN inject native addon items into the album context menu
                    children: pulseSyncInjectAlbumMenuItems([
                        Q && (0, r.jsx)(Y.C, { getDescriptionTexts: a.getDescriptionTexts, entityId: a.id }),
                        ec && (0, r.jsx)(b.d, { entityVariant: O.D.ARTIST, adminUrl: ex }),
                        ey,
                        eR,
                        eE,
                        eT,
                        // for PulseSync: BEGIN insert the album download-to-file menu action
                        (0, r.jsx)(pulseSyncDownloadAlbumToFile, { album: a }),
                        // for PulseSync: END insert the album download-to-file menu action
                        w,
                        eo && (0, r.jsx)(D, { onClick: eg, isFinished: a.listeningFinished }),
                        (0, r.jsx)(U.H, { shareLink: ev, entityMeta: eI }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the album context menu
                });
            });
        },
        96994: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => W }));
            var r = i(88800),
                a = i(53548),
                s = i(58390),
                l = i(65724),
                n = i(84961),
                o = i(2058),
                c = i(97234),
                d = i(59724),
                u = i(17392),
                m = i(29504),
                p = i(32596),
                _ = i(10079),
                h = i(69630),
                g = i(98427),
                v = i(46422),
                C = i(44230),
                x = i(37670),
                b = i(34961),
                A = i(53892),
                N = i(72288),
                f = i(54320),
                k = i(86790),
                y = i(60266),
                R = i(93317),
                E = i(37770),
                T = i(79418),
                I = i(25354),
                O = i(30144),
                L = i(324),
                j = i(46511),
                S = i(13012),
                P = i(57297),
                w = i(2218),
                M = i(77863),
                D = i(45383),
                F = i(40883);
            async function B(e, t) {
                let { locale: i, fullUrl: r, url: a, tld: s, host: l } = t,
                    n = await (0, j.W)(i),
                    o = e.title.fullTitle,
                    c = n({ id: 'metadata.genre-title' }, { genreTitle: o }),
                    d = (0, F.f)({ genreTitle: o, messageFormatter: n }),
                    u = new URL(''.concat('', '/meta/og-image.png'), 'https://'.concat(l)).href;
                return {
                    title: c,
                    description: d,
                    openGraph: (0, P.i)({
                        ogTitle: (0, S.N)(o),
                        ogDescription: d,
                        fullUrl: null != r ? r : '',
                        locale: i,
                        siteName: n({ id: 'metadata.yandex-music' }),
                        ogImage: u,
                    }),
                    twitter: (0, w.H)({ cardType: M.W.APP, title: c, url: null != a ? a : '', appName: n({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, L.X)({
                        additional: { tld: s, url: null != a ? a : '', fullUrl: null != r ? r : '', host: l },
                        appName: n({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, D.S)('/genre/:metatagId/albums', t.tld, { params: { metatagId: e.id } }),
                };
            }
            var U = i(70278),
                z = i(55761),
                G = i.n(z);
            let H = (0, n.PA)((e) => {
                let { metatagId: t, preloadedMeta: i } = e,
                    { albumsSubpage: n } = (0, b.s)(A.n.GENRE),
                    {
                        settings: { isMobile: L },
                    } = (0, N.g)(),
                    { formatMessage: j } = (0, o.A)(),
                    { contentScrollRef: S, setContentScrollRef: P } = (0, C.g)(),
                    w = (0, v.W)(),
                    M = (0, a.useCallback)(
                        (e) => {
                            t && n.getData({ metatagId: t, page: e, pageSize: I.cM });
                        },
                        [n, t],
                    );
                ((0, f.X)(n.pagesLoader, M),
                    (0, a.useEffect)(
                        () => () => {
                            n.reset();
                        },
                        [n],
                    ),
                    n.isNotFound && (0, s.notFound)(),
                    (0, x.J)(n.isResolved),
                    ((e) => {
                        let { fullscreenVideoPlayer: t } = (0, N.g)(),
                            i = null == e ? void 0 : e.fullTitle,
                            r = null == e ? void 0 : e.isResolved,
                            s = null == e ? void 0 : e.pagesLoader.isInitialRequestRejected,
                            l = (0, a.useCallback)(
                                (t) =>
                                    s
                                        ? {}
                                        : e && r && i
                                          ? B(
                                                ((e) => {
                                                    var t, i, r;
                                                    return {
                                                        id: '',
                                                        title: { title: '', fullTitle: e.fullTitle || '' },
                                                        albums: e.items.map(U.f),
                                                        pager: {
                                                            page: (null == (t = e.pagesLoader.pager) ? void 0 : t.page) || 0,
                                                            perPage: (null == (i = e.pagesLoader.pager) ? void 0 : i.perPage) || 0,
                                                            total: (null == (r = e.pagesLoader.pager) ? void 0 : r.total) || 0,
                                                        },
                                                    };
                                                })(e),
                                                t,
                                            )
                                          : void 0,
                                [e, i, r, s],
                            );
                        (0, O.C)(t.modal.isOpened ? null : l);
                    })(n));
                let D = (0, a.useMemo)(() => ({ Footer: () => (0, r.jsx)(y.A, { children: (0, r.jsx)(k.w, { className: G().footer }) }) }), []);
                if ((t && n.isNeededToLoad && (0, a.use)(n.getData({ preloadedMeta: i, metatagId: t, page: 0, pageSize: I.cM })), n.isSomethingWrong))
                    return (0, r.jsx)(p.SomethingWentWrong, {});
                let F = n.isShimmerVisible ? 20 : n.totalCount;
                return (0, r.jsx)(d.a, {
                    pageId: c.AppScreen.GenreAlbums,
                    pageIdForFrom: g.b.GENRE_ALBUMS,
                    children: (0, r.jsx)(h.h, {
                        scrollElement: S,
                        outerTitle: n.fullTitle,
                        children: (0, r.jsxs)('div', {
                            className: G().root,
                            'data-test-id': u.Xk.genre.GENRE_ALBUMS_PAGE,
                            children: [
                                (0, r.jsx)(R.Y, {
                                    variant: R.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: w.canBack,
                                    children: (0, r.jsx)(m.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: n.fullTitle }),
                                }),
                                (0, r.jsx)(T.$, {
                                    className: (0, l.$)(G().scrollContainer, G().important),
                                    customComponents: D,
                                    itemContentCallback: (e) => {
                                        let t = n.items[e],
                                            i = j({ id: 'loading-messages.entity-is-loading' }, { entityName: j({ id: 'entity-names.album' }) });
                                        return t ? (0, r.jsx)(_.a, { album: t, contentLinesCount: 4 }, t.id) : (0, r.jsx)(E.V, { 'aria-label': i, linesCount: 4 });
                                    },
                                    totalCount: F,
                                    initialItemCount: F,
                                    onGetDataByPage: M,
                                    pageSize: I.cM,
                                    totalRequests: n.requestsCount,
                                    listClassName: G().content,
                                    itemClassName: G().item,
                                    handleRef: P,
                                    context: { listAriaLabel: j({ id: 'mixes.albums-list' }, { genreName: n.fullTitle || '' }) },
                                    isMobileLayout: L,
                                    useWindowScroll: L,
                                }),
                            ],
                        }),
                    }),
                });
            });
            var Y = i(19994),
                K = i(1698);
            let V = () => {
                    let e = (0, v.W)(),
                        { formatMessage: t } = (0, o.A)(),
                        i = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.album' }) });
                    return (0, r.jsx)(h.h, {
                        scrollElement: null,
                        children: (0, r.jsxs)('div', {
                            className: G().root,
                            children: [
                                (0, r.jsx)(R.Y, {
                                    variant: R.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, r.jsx)(Y.W, { className: G().shimmerTitle, radius: 'l' }),
                                }),
                                (0, r.jsx)('div', {
                                    className: (0, l.$)(G().scrollContainer, G().important, G().shimmerScrollContainer),
                                    children: (0, r.jsx)('div', {
                                        className: G().content,
                                        children: (0, r.jsx)(K.e, { isActive: !0, itemClassName: G().item, 'aria-label': i, linesCount: 4, count: 20 }),
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                W = () => {
                    let e = (0, s.useSearchParams)().get('metatagId');
                    return (e || (0, s.notFound)(), (0, r.jsx)(a.Suspense, { fallback: (0, r.jsx)(V, {}), children: (0, r.jsx)(H, { metatagId: e }) }));
                };
        },
        99839: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => r });
            let r = () => ({ year: 'numeric' });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                9904, 7191, 3078, 1833, 8194, 1191, 8655, 1568, 6706, 4771, 1311, 2662, 6904, 1898, 2058, 3578, 8628, 4378, 9780, 8283, 9332, 5151, 2837, 9202, 4732,
                9087, 3979, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 6374, 2088, 8979, 9269, 763, 2670, 7358,
            ],
            () => e((e.s = 87545)),
        ),
            (_N_E = e.O()));
    },
]);
