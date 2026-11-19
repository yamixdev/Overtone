(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3413],
    {
        1698: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => a });
            var s = i(88800),
                n = i(37770);
            let a = (e) => {
                let {
                    isActive: t,
                    itemClassName: i,
                    round: a,
                    centered: l,
                    withInfo: o,
                    count: r = 10,
                    shimmerClassName: c,
                    linesCount: d,
                    'aria-label': u,
                    withSubcover: m,
                } = e;
                return Array.from(Array(r).keys()).map((e) =>
                    (0, s.jsx)(
                        n.V,
                        { isActive: t, linesCount: d, className: i, round: a, centered: l, withInfo: o, withSubcover: m, 'aria-label': u, shimmerClassName: c },
                        e,
                    ),
                );
            };
        },
        4370: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => n });
            var s = i(67174);
            let n = {
                main: (0, s.u)('/'),
                chart: (0, s.u)('/chart'),
                chartPodcasts: (0, s.u)('/chart/podcasts'),
                collection: (0, s.u)('/collection'),
                collectionAlbums: (0, s.u)('/collection/albums'),
                collectionArtists: (0, s.u)('/collection/artists'),
                collectionClips: (0, s.u)('/collection/clips'),
                collectionDislikes: (0, s.u)('/collection/dislikes'),
                collectionKids: (0, s.u)('/collection/kids'),
                collectionKidsAlbums: (0, s.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, s.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, s.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, s.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, s.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, s.u)('/collection/multivibes'),
                collectionVibes: (0, s.u)('/collection/vibes'),
                collectionPlaylists: (0, s.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, s.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, s.u)('/collection/playlists/liked'),
                collectionShelf: (0, s.u)('/collection/shelf'),
                collectionShelfLiked: (0, s.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, s.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, s.u)('/collection/shelf/recently-played'),
                concerts: (0, s.u)('/concerts'),
                kids: (0, s.u)('/kids'),
                mixes: (0, s.u)('/mixes'),
                musicHistory: (0, s.u)('/music-history'),
                muzmarket: (0, s.u)('/muzmarket'),
                mymusic: (0, s.u)('/mymusic'),
                mymusicDownloadsTracks: (0, s.u)('/mymusic/downloads/tracks'),
                multivibe: (0, s.u)('/multivibe'),
                nonMusic: (0, s.u)('/non-music'),
                pay: (0, s.u)('/pay'),
                userSlides: (0, s.u)('/slides/user'),
                search: (0, s.u)('/search'),
                searchHistory: (0, s.u)('/search/history'),
                settings: (0, s.u)('/settings'),
                video: (0, s.u)('/video'),
            };
        },
        10079: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => Q });
            var s = i(88800),
                n = i(65724),
                a = i(84961),
                l = i(53548),
                o = i(2058),
                r = i(97234),
                c = i(91177),
                d = i(70598),
                u = i(46482),
                m = i(17392),
                h = i(18593),
                p = i(61691),
                C = i(29993),
                b = i(79070),
                g = i(29832),
                v = i(52300),
                A = i(7555),
                x = i(29504),
                _ = i(60757),
                k = i(29008),
                y = i(92966),
                f = i(56651),
                N = i(13946),
                T = i(43443),
                j = i(5407),
                L = i(57934),
                P = i(84384),
                O = i(4795),
                R = i(87762),
                S = i(32414),
                I = i(78940),
                w = i(55693),
                M = i(39079),
                B = i(72288),
                E = i(52726),
                D = i(86298),
                U = i(81877),
                z = i(90224),
                F = i(49738),
                K = i(91292),
                V = i(56862),
                W = i(16704),
                G = i(56446),
                q = i(36207),
                H = i(41918);
            let $ = { mainAxis: -26, alignmentAxis: -16 },
                Y = { isEnabled: !0, width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' };
            var X = i(95756),
                J = i(28304),
                Z = i.n(J);
            let Q = (0, a.PA)((e) => {
                let {
                        className: t,
                        children: i,
                        album: a,
                        contentLinesCount: J,
                        withLikesCount: Q,
                        withChart: ee,
                        withAddition: et = !0,
                        withArtistName: ei = !0,
                        releaseDateFormatter: es = S.s,
                    } = e,
                    en = (0, c.D)(),
                    {
                        user: ea,
                        trailer: el,
                        settings: { isMobile: eo },
                        albumCPA: { isPlusCPAEnabled: er },
                        paywall: { modal: ec },
                    } = (0, B.g)(),
                    { from: ed, utmLink: eu } = (0, P.f)({ contextId: a.id, contextType: h.K.Album, utmForPageIds: a.artistIds }),
                    { formatMessage: em, formatDate: eh } = (0, o.A)(),
                    { sendLikeSearchFeedback: ep, sendNavigateSearchFeedback: eC, sendPlaySearchFeedback: eb } = (0, w.z)(),
                    [eg, ev] = (0, l.useState)(!1),
                    [eA, ex] = (0, l.useState)(!1),
                    [e_, ek] = (0, l.useState)(!1),
                    ey = (0, d.S)(),
                    ef = (0, u.g)(),
                    eN = (0, y.K)(a),
                    eT = (0, f.A)(a),
                    ej = (0, I.Z)(a.url),
                    [eL, eP] = (0, l.useState)(!1),
                    eO = (0, L.F)(),
                    [eR, eS] = (0, l.useState)(!1),
                    eI = (0, j.P)(),
                    { pageAlbumId: ew } = (0, R.T)(),
                    eM = er({ pageAlbumId: ew, albumId: a.id, isNonMusic: a.isNonMusic }),
                    eB = (0, O.N)(),
                    eE = a.isAvailableOnlyForPlus && !a.isUnsafeLegal && !a.isLegalRejected,
                    eD = eE && !eo,
                    eU = a.isAvailable || eD || a.isAudiobook,
                    ez = (0, C.c)((e) => {
                        if ((e.stopPropagation(), eI())) return void e.preventDefault();
                        (el.openAlbumTrailer(a.id), eO(r.DomainObjectType.Album, String(a.id)));
                    }),
                    eF = a.type === p._.SINGLE ? em({ id: 'entity-names.single' }) : void 0,
                    eK = a.releaseDate ? eh(a.releaseDate, es()) : void 0,
                    eV = ((e) => {
                        let t = e.filter((e) => !!e).join(' \xb7 ');
                        return 0 === t.length ? null : t;
                    })([null != eK ? eK : a.year, eF]),
                    eW = (0, k.r)(a.type),
                    eG = (0, l.useMemo)(() => {
                        var e;
                        let t = a.isLiked ? em({ id: 'entity-names.has-your-like' }) : '';
                        return ''
                            .concat(eW, ' ')
                            .concat(a.title, ' ')
                            .concat(null != (e = a.version) ? e : '', ' ')
                            .concat(t);
                    }, [eW, em, a.title, a.isLiked, a.version]),
                    { isPlaying: eq, togglePlay: eH } = (0, M.D)({
                        playContextParams: { contextData: { type: h.K.Album, meta: { id: a.id }, from: ed, utmLink: eu }, loadContextMeta: !0 },
                    }),
                    e$ = (0, _.c)({ album: a, callback: ej }),
                    eY = (0, _.c)({ album: a, callback: eH }),
                    eX = (0, C.c)((e) => {
                        (ey({ to: r.AppScreen.AlbumScreen }), null == eC || eC(), e$(e));
                    }),
                    eJ = (0, C.c)(() => {
                        if (!eI()) {
                            if (eB) return void ec.open();
                            (eA || eq || (ex(!0), null == eb || eb()), eY(), eq || ef());
                        }
                    }),
                    eZ = (0, C.c)(() => {
                        (eg || a.isLiked || (ev(!0), null == ep || ep()), eN());
                    }),
                    eQ = (0, C.c)((e) => {
                        (ek(e), eP(e));
                    }),
                    e0 = (0, l.useMemo)(() => {
                        var e;
                        return (0, s.jsxs)(x.HL, {
                            className: (0, n.$)(Z().title, { [Z().title_withVersion]: a.version, [Z().title_withChart]: ee }),
                            variant: 'div',
                            type: 'entity',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 2,
                            'aria-hidden': !0,
                            'data-test-id': m.Kq.album.ALBUM_TITLE,
                            children: [
                                (0, s.jsx)(K.N, {
                                    'aria-label': ''.concat(a.title, ' ').concat(null != (e = a.version) ? e : ''),
                                    className: Z().titleLink,
                                    href: a.url,
                                    tabIndex: -1,
                                    onClick: eX,
                                    'data-test-id': m.Kq.album.ALBUM_TITLE_LINK,
                                    children: a.title,
                                }),
                                a.version &&
                                    (0, s.jsx)(x.HL, {
                                        className: Z().version,
                                        variant: 'span',
                                        'data-test-id': m.Kq.album.ALBUM_VERSION,
                                        children: ' '.concat(a.version),
                                    }),
                            ],
                        });
                    }, [a.title, a.url, a.version, eX, ee]),
                    e8 = (0, l.useMemo)(() => {
                        var e;
                        return (0, s.jsx)(K.N, {
                            className: Z().srTitleLink,
                            href: a.url,
                            onClick: eX,
                            children: ''.concat(a.title, ' ').concat(null != (e = a.version) ? e : ''),
                        });
                    }, [a.title, a.url, a.version, eX]),
                    e9 = (0, l.useMemo)(() => {
                        var e;
                        if (null == a || null == (e = a.trailer) ? void 0 : e.isAvailable)
                            return (0, s.jsx)(
                                q.n,
                                {
                                    children: (0, s.jsx)(
                                        G.k,
                                        { className: (0, n.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: ez },
                                        a.getKey('TrailerButton'),
                                    ),
                                },
                                a.getKey('AlbumCardTrailerTooltip'),
                            );
                    }, [a, ez]),
                    e4 = (0, l.useMemo)(
                        () =>
                            (0, s.jsx)(
                                X.x,
                                {
                                    album: a,
                                    onOpenChange: eQ,
                                    open: e_,
                                    className: (0, n.$)(Z().menuButton, Z().control),
                                    icon: (0, s.jsx)(v.I, { size: 'xxs', variant: 'more' }),
                                    size: 's',
                                    variant: H.z.CARD,
                                    'data-test-id': m.Kq.album.ALBUM_CONTEXT_MENU_BUTTON,
                                },
                                a.getKey('AlbumContextMenu'),
                            ),
                        [a, eQ, e_],
                    ),
                    e2 = (0, l.useCallback)(
                        () =>
                            (0, s.jsx)(
                                W.D,
                                {
                                    className: (0, n.$)(Z().playButton, Z().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                    onClick: eJ,
                                    isPlaying: eq,
                                    disabled: eD,
                                },
                                a.getKey('PlayButton'),
                            ),
                        [eD, a, eq, eJ],
                    ),
                    e7 = (0, l.useMemo)(
                        () =>
                            eD
                                ? (0, s.jsx)(E.S, {
                                      className: Z().buyPlusPopover,
                                      buttonText: em({ id: 'interface-actions.more-details' }),
                                      isNested: !0,
                                      placement: 'top-start',
                                      isOpened: eR,
                                      onOpenChange: eS,
                                      textVariant: 'album',
                                      albumTextVariant: a.type,
                                      arrowProps: Y,
                                      offsetOptions: $,
                                      renderChildren: e2,
                                  })
                                : e2(),
                        [eD, eR, eS, em, e2, a.type],
                    ),
                    e1 = (0, b.L)(() => {
                        if (eD) return;
                        let e = !eM && !ea.isAuthorized;
                        return (0, s.jsx)(
                            F.c,
                            {
                                className: (0, n.$)(Z().likeButton, Z().control),
                                isLiked: a.isLiked,
                                onClick: eZ,
                                variant: 'default',
                                size: 's',
                                iconSize: 'xxs',
                                disabled: e,
                            },
                            a.getKey('LikeButton'),
                        );
                    }),
                    e6 = (0, l.useMemo)(() => {
                        if (!eD)
                            return (0, s.jsx)(
                                V.O,
                                { onClick: eT, isPinned: a.isPinned, className: (0, n.$)(Z().pinButton, Z().control), withRipple: !1, isDisabled: eD },
                                a.getKey('PinButton'),
                            );
                    }, [a, eD, eT]),
                    e5 = (0, l.useMemo)(() => {
                        if (a.isAvailable || eD)
                            return (0, s.jsx)(g.hg, {
                                isVisible: e_ || eL || eR,
                                className: Z().controls,
                                playControl: e7,
                                likeControl: e1,
                                menuControl: e4,
                                pinControl: e6,
                                trailerControl: e9,
                            });
                    }, [a, e_, eL, e4, e9, eR, e7, e1, e6, eD]),
                    e3 = (0, l.useMemo)(
                        () =>
                            (0, s.jsx)(A.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': m.Kq.album.ALBUM_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: eX,
                                    children: [
                                        (0, s.jsx)(U.B, {
                                            className: Z().image,
                                            src: a.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eG,
                                            withAvatarReplace: !0,
                                            isAvailable: eU,
                                            'aria-hidden': !0,
                                        }),
                                        eE && (0, s.jsx)(v.I, { variant: 'plusBadge', className: Z().plusBadge }),
                                        e5,
                                    ],
                                }),
                            }),
                        [eX, a.coverUri, eU, eG, e5, eE],
                    );
                return (0, s.jsxs)(g.MN, {
                    ref: en,
                    className: (0, n.$)(Z().root, { [Z().root_withChart]: ee }, t),
                    'aria-label': eG,
                    explicitMarkComponent:
                        a.explicitDisclaimer &&
                        (0, s.jsx)(
                            z.N,
                            { className: Z().explicitMark, getDescriptionTexts: a.getDescriptionTexts, variant: a.explicitDisclaimer },
                            a.getKey('AlbumCardExplicitMarkIcon'),
                        ),
                    title: e0,
                    srTitle: e8,
                    contentLinesCount: J,
                    view: e3,
                    description:
                        ei &&
                        (0, s.jsx)(
                            N.i,
                            { className: Z().artists, artists: a.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                            a.getKey('description'),
                        ),
                    chart:
                        ee &&
                        a.chart &&
                        (0, s.jsx)(T.t, { withIcon: !0, className: Z().chart, position: a.chart.position, progress: a.chart.progress }, a.getKey('chart')),
                    'data-test-id': m.Kq.album.ALBUM_ITEM,
                    children: [
                        et &&
                            eV &&
                            (0, s.jsx)(x.HL, { className: Z().addition, variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: eV }),
                        Q &&
                            !!a.actualLikesCount &&
                            (0, s.jsx)(D.x, {
                                className: Z().likeTextButton,
                                ariaLabel: em({ id: 'entity-names.likes-counter' }, { counter: a.actualLikesCount }),
                                likesCount: a.actualLikesCount,
                                isLiked: a.isLiked,
                                handleLikeClick: eN,
                            }),
                        i,
                    ],
                });
            });
        },
        14567: (e, t) => {
            (e.exports = function (e, t, s, n) {
                return JSON.stringify(e, i(t, n), s);
            }).getSerialize = i;
            function i(e, t) {
                var i = [],
                    s = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return i[0] === t ? '[Circular ~]' : '[Circular ~.' + s.slice(0, i.indexOf(t)).join('.') + ']';
                        }),
                    function (n, a) {
                        if (i.length > 0) {
                            var l = i.indexOf(this);
                            (~l ? i.splice(l + 1) : i.push(this), ~l ? s.splice(l, 1 / 0, n) : s.push(n), ~i.indexOf(a) && (a = t.call(this, n, a)));
                        } else i.push(a);
                        return null == e ? a : e.call(this, n, a);
                    }
                );
            }
        },
        23877: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { Q: () => n, c: () => s }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(s || (s = {})));
            let n = { [s.ERROR]: 'error', [s.WARNING]: 'warn', [s.INFO]: 'info', [s.DEBUG]: 'debug', [s.TRACE]: 'trace' };
        },
        25883: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => o });
            var s = i(88800),
                n = i(84961),
                a = i(33719),
                l = i(5048);
            let o = (0, n.PA)((e) => {
                let { album: t, closeToast: i } = e,
                    n = (0, l.b)(t.type);
                return (0, s.jsx)(a.k, {
                    closeToast: i,
                    entityVariant: n,
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
            var s = i(53548),
                n = i(2058),
                a = i(61691),
                l = (function (e) {
                    return ((e.PIN = 'pin'), e);
                })({});
            let o = (e, t) => {
                let { formatMessage: i } = (0, n.A)();
                return (0, s.useMemo)(() => {
                    switch (e) {
                        case a._.SINGLE:
                            return i({ id: 'entity-names.single' });
                        case a._.PODCAST:
                            return i({ id: 'entity-names.podcast' });
                        case a._.AUDIOBOOK:
                            if ('pin' === t) return i({ id: 'entity-names.book' });
                            return i({ id: 'entity-names.audio' });
                        case a._.FAIRY_TALE:
                            return i({ id: 'entity-names.fairy-tale' });
                        default:
                            return i({ id: 'entity-names.album' });
                    }
                }, [e, i, t]);
            };
        },
        32414: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => s });
            let s = () => ({ year: 'numeric', month: 'long', day: 'numeric' });
        },
        41918: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => s });
            var s = (function (e) {
                return ((e.PAGE = 'PAGE'), (e.CARD = 'CARD'), e);
            })({});
        },
        44084: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => a });
            var s = i(23877),
                n = i(74021);
            class a extends n.q {
                disableLogToConsole;
                constructor(e) {
                    (super(e), (this.disableLogToConsole = e.disableLogToConsole));
                }
                info(e, t) {
                    this.maxLogLevel >= s.c.INFO && this.logToConsole(s.c.INFO, e, t);
                }
                debug(e, t) {
                    this.maxLogLevel >= s.c.DEBUG && this.logToConsole(s.c.DEBUG, e, t);
                }
                trace(e, t) {
                    this.maxLogLevel >= s.c.TRACE && this.logToConsole(s.c.TRACE, e, t);
                }
                warn(e, t) {
                    (this.maxLogLevel >= s.c.WARNING && this.logToConsole(s.c.WARNING, e, t), this.sendToErrorBooster(s.c.WARNING, e, t));
                }
                error(e, t) {
                    (this.maxLogLevel >= s.c.ERROR && this.logToConsole(s.c.ERROR, e, t), this.sendToErrorBooster(s.c.ERROR, e, t));
                }
                log(e, t) {
                    this.logToConsole(s.c.INFO, e, t);
                }
                logToConsole(e, t, i) {
                    if (this.disableLogToConsole) return;
                    let n = s.Q[e];
                    console[n](...this.formatMessage(e, t, i));
                }
                sendToErrorBooster(e, t, i) {
                    window.Ya.Rum.logError({ message: t, level: e, additional: { data: i ? this.obfuscateData({ ...this.additionalData, ...i }) : {} } });
                }
            }
        },
        56651: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var s = i(88800),
                n = i(96706),
                a = i(53548),
                l = i(2058),
                o = i(29595),
                r = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(25883);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, r.l)(),
                    { formatMessage: m } = (0, l.A)(),
                    [h, p] = (0, a.useState)(!1);
                return (0, a.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, s.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (h) return;
                    let a = { ...(0, n.HO)(e), url: e.url, isPinned: !e.isPinned };
                    p(!0);
                    let l = await e.togglePin();
                    (p(!1),
                        l
                            ? i((0, s.jsx)(u.l, { album: a }), { containerId: o.u.INFO })
                            : i((0, s.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, m, i, h, t.isAuthorized]);
            };
        },
        59724: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => u });
            var s = i(88800),
                n = i(53548),
                a = i(8383),
                l = i(24709),
                o = i(88966);
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
                    let i =
                        r.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                i = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                s = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                i();
                                            } finally {
                                                ((t = !1), e.length > 0 && s());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (i(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), s());
                                },
                            };
                        })();
                    (r.set(t, i), (this.queue = i));
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
                    let i = (0, o.N)(),
                        l = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === d.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [r, u] = (0, n.useState)(() => {
                            let e = new c(i.createScreenSession().screenViewUuid, i);
                            return { client: i, input: t, isReady: l, scope: l ? i.createScreenScope(t, e) : null, session: e };
                        });
                    if (r.client !== i || r.input.pageId !== t.pageId || r.input.skeletonId !== t.skeletonId) {
                        let n = new c(i.createScreenSession().screenViewUuid, i),
                            o = { client: i, input: t, isReady: l, scope: l ? i.createScreenScope(t, n) : null, session: n };
                        return (u(o), (0, s.jsx)(a.k, { value: o, children: e }));
                    }
                    if (
                        r.isReady !== l ||
                        r.input.mainObjectType !== t.mainObjectType ||
                        r.input.mainObjectId !== t.mainObjectId ||
                        r.input.displayReasonId !== t.displayReasonId ||
                        r.input.pageIdForFrom !== t.pageIdForFrom ||
                        r.input.pagePlacement !== t.pagePlacement ||
                        r.input.pageStyle !== t.pageStyle
                    ) {
                        let n = { ...r, input: t, isReady: l, scope: l ? i.createScreenScope(t, r.session) : null };
                        return (u(n), (0, s.jsx)(a.k, { value: n, children: e }));
                    }
                    return (0, s.jsx)(a.k, { value: r, children: e });
                },
            );
        },
        60757: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => n });
            var s = i(58217);
            let n = (e) => {
                let { album: t, callback: i, shouldHistoryBack: n } = e;
                return (0, s.l)({ entity: t, callback: i, modalBehavior: void 0 === n ? void 0 : { shouldHistoryBack: n }, preventDefaultWhenSafe: !0 });
            };
        },
        66610: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => r });
            var s = i(53548),
                n = i(24709),
                a = i(88966),
                l = i(87138),
                o = i(46457);
            let r = (0, n.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, a.N)(),
                    t = (0, l.w)(),
                    i = (0, s.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, o.c)((e) => {
                    t?.object && i && i.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        70236: (e, t, i) => {
            'use strict';
            i.d(t, { ChartPodcastsPage: () => S });
            var s = i(88800),
                n = i(65724),
                a = i(84961),
                l = i(53548),
                o = i(2058),
                r = i(58390),
                c = i(97234),
                d = i(59724),
                u = i(17392),
                m = i(19994),
                h = i(29504),
                p = i(32596),
                C = i(10079),
                b = i(69630),
                g = i(98427),
                v = i(46422),
                A = i(44230),
                x = i(37670),
                _ = i(34961),
                k = i(53892),
                y = i(72288),
                f = i(86790),
                N = i(60266),
                T = i(93317),
                j = i(37770),
                L = i(79418),
                P = i(76541),
                O = i(70638),
                R = i.n(O);
            let S = (0, a.PA)((e) => {
                let { categoryId: t } = e,
                    { podcastsSubPage: i } = (0, _.s)(k.n.CHART),
                    {
                        settings: { isMobile: a },
                    } = (0, y.g)(),
                    { contentScrollRef: O, setContentScrollRef: S } = (0, A.g)(),
                    { formatMessage: I } = (0, o.A)(),
                    w = (0, v.W)(),
                    M = (0, l.useMemo)(() => ({ Footer: () => (0, s.jsx)(N.A, { children: (0, s.jsx)(f.w, { className: R().footer }) }) }), []),
                    B = (0, l.useMemo)(
                        () =>
                            i.title
                                ? (0, s.jsx)(h.DZ, { id: 'collection-artists-header', variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: i.title })
                                : (0, s.jsx)(m.W, { className: R().shimmerTitle, radius: 'l' }),
                        [i.title],
                    );
                if (
                    ((0, x.J)(i.isResolved),
                    i.isNotFound && (0, r.notFound)(),
                    (0, l.useEffect)(
                        () => () => {
                            i.reset();
                        },
                        [i],
                    ),
                    i.isNeededToLoad && (0, l.use)(i.getData(t)),
                    i.isSomethingWrong)
                )
                    return (0, s.jsx)(p.SomethingWentWrong, {});
                let E = i.isShimmerVisible ? P.w : i.itemsCount;
                return (0, s.jsx)(d.a, {
                    pageId: t ? c.AppScreen.ChartPodcastsCategory : c.AppScreen.ChartPodcasts,
                    pageIdForFrom: t ? g.b.CHART_PODCASTS_CATEGORY : g.b.CHART_PODCASTS,
                    children: (0, s.jsx)(b.h, {
                        scrollElement: O,
                        outerTitle: i.title,
                        children: (0, s.jsxs)('div', {
                            className: R().root,
                            'data-test-id': u.Xk.chart.CHART_PODCASTS,
                            children: [
                                (0, s.jsx)(T.Y, { variant: T.V.TEXT, withForwardControl: !1, withBackwardControl: w.canBack, children: B }),
                                (0, s.jsx)(L.$, {
                                    className: (0, n.$)(R().scrollContainer, R().important),
                                    listClassName: R().content,
                                    customComponents: M,
                                    itemContentCallback: (e) => {
                                        let t = i.items[e],
                                            n = I({ id: 'loading-messages.entity-is-loading' }, { entityName: I({ id: 'entity-names.album' }) });
                                        return !t || i.isShimmerVisible
                                            ? (0, s.jsx)(j.V, { 'aria-label': n })
                                            : (0, s.jsx)(C.a, { album: t, contentLinesCount: 3, withLikesCount: !0, withChart: !0, withAddition: !1 });
                                    },
                                    handleRef: S,
                                    initialItemCount: E,
                                    totalCount: E,
                                    isMobileLayout: a,
                                    useWindowScroll: a,
                                    context: { listAriaLabel: I({ id: 'entity-names.chart-podcasts-list' }) },
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        70638: (e) => {
            e.exports = {
                root: 'ChartPodcastsPage_root__J5lnx',
                scrollContainer: 'ChartPodcastsPage_scrollContainer__WQTf7',
                important: 'ChartPodcastsPage_important__fW45m',
                shimmerScrollContainer: 'ChartPodcastsPage_shimmerScrollContainer__nOO43',
                footer: 'ChartPodcastsPage_footer__7ytrT',
                item: 'ChartPodcastsPage_item__vGRt8',
                content: 'ChartPodcastsPage_content__NcV4M',
                shimmerTitle: 'ChartPodcastsPage_shimmerTitle__Missw',
            };
        },
        74021: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => r });
            var s = i(14567),
                n = i(243),
                a = i(62151),
                l = i(33396);
            let o = () => 'SECRET';
            class r {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: i }) {
                    ((this.maxLogLevel = t), (this.secureFields = i), (this.additionalData = e));
                }
                formatMessage(e, t, i = {}, n) {
                    let a,
                        o = String(t instanceof Error && t.stack ? t.stack : t),
                        r = (0, l.A)({ ...this.additionalData, ...i });
                    return (Object.keys(r).length && (a = this.obfuscateData(r)), n) ? `${o} ${s(a)}` : [o, a];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, n.A)(e, t) && (0, a.A)(e, t, o());
                    return e;
                }
            }
        },
        77451: (e, t, i) => {
            'use strict';
            i.d(t, { Jt: () => a, TF: () => o, hZ: () => l });
            var s = function () {
                return (s =
                    Object.assign ||
                    function (e) {
                        for (var t, i = 1, s = arguments.length; i < s; i++)
                            for (var n in (t = arguments[i])) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        return e;
                    }).apply(this, arguments);
            };
            function n(e, t) {
                if (!t) return '';
                var i = '; ' + e;
                return !0 === t ? i : i + '=' + t;
            }
            function a(e) {
                return (function (e) {
                    for (var t = {}, i = e ? e.split('; ') : [], s = 0; s < i.length; s++) {
                        var n = i[s].split('='),
                            a = n.slice(1).join('=');
                        '"' === a[0] && (a = a.slice(1, -1));
                        try {
                            t[decodeURIComponent(n[0])] = a.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function l(e, t, i) {
                var a;
                document.cookie =
                    ((a = s({ path: '/' }, i)),
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
                                n('Expires', e.expires ? e.expires.toUTCString() : '') +
                                n('Domain', e.domain) +
                                n('Path', e.path) +
                                n('Secure', e.secure) +
                                n('SameSite', e.sameSite)
                            );
                        })(a));
            }
            function o(e, t) {
                l(e, '', s(s({}, t), { expires: -1 }));
            }
        },
        84218: (e) => {
            e.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        86298: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => m });
            var s = i(88800),
                n = i(65724),
                a = i(2058),
                l = i(17392),
                o = i(96817),
                r = i(52300),
                c = i(29504),
                d = i(84218),
                u = i.n(d);
            let m = (e) => {
                let { className: t, isLiked: i, likesCount: d, handleLikeClick: m, ariaLabel: h } = e,
                    { formatNumber: p } = (0, a.A)();
                return (0, s.jsx)(o.$, {
                    className: (0, n.$)(u().root, t),
                    onClick: m,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, s.jsx)(r.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': h,
                    'data-test-id': l.S7.CARD_LIKES,
                    children: (0, s.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: p(d) }),
                });
            };
        },
        92677: (e, t, i) => {
            'use strict';
            i.d(t, { ChartPodcastsPageSuspenseLoader: () => p });
            var s = i(88800),
                n = i(65724),
                a = i(2058),
                l = i(19994),
                o = i(69630),
                r = i(46422),
                c = i(93317),
                d = i(1698),
                u = i(76541),
                m = i(70638),
                h = i.n(m);
            let p = () => {
                let e = (0, r.W)(),
                    { formatMessage: t } = (0, a.A)(),
                    i = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.album' }) });
                return (0, s.jsx)(o.h, {
                    scrollElement: null,
                    children: (0, s.jsxs)('div', {
                        className: h().root,
                        children: [
                            (0, s.jsx)(c.Y, {
                                variant: c.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: e.canBack,
                                children: (0, s.jsx)(l.W, { className: h().shimmerTitle, radius: 'l' }),
                            }),
                            (0, s.jsx)('div', {
                                className: (0, n.$)(h().scrollContainer, h().important, h().shimmerScrollContainer),
                                children: (0, s.jsx)('div', {
                                    className: h().content,
                                    children: (0, s.jsx)(d.e, { isActive: !0, itemClassName: h().item, 'aria-label': i, count: u.w }),
                                }),
                            }),
                        ],
                    }),
                });
            };
        },
        95756: (e, t, i) => {
            'use strict';

            i.d(t, { x: () => q });
            // for PulseSync WebHost: BEGIN imports for native addon context menu items
            var pulseSyncMenuJsx = i(88800),
                pulseSyncMenuItems = i(19934),
                pulseSyncMenuIcons = i(52300);
            // for PulseSync WebHost: END imports for native addon context menu items
            var s = i(88800),
                n = i(84961),
                a = i(53548),
                l = i(2058),
                o = i(97234),
                r = i(17392),
                c = i(18593),
                d = i(29993),
                u = i(19934),
                m = i(18143),
                h = i(29595),
                p = i(74965),
                C = i(72288),
                b = i(66943),
                g = i(92966),
                v = i(56651),
                A = i(48749),
                x = i(22505),
                _ = i(5407),
                k = i(64284),
                y = i(98427),
                f = i(57934),
                N = i(84384),
                T = i(9618),
                j = i(87762),
                L = i(95210),
                P = i(47964),
                O = i(46936),
                R = i(97956),
                S = i(98953),
                I = i(32721),
                w = i(18130),
                M = i(88969),
                B = i(52300);
            let E = (0, n.PA)((e) => {
                let { isFinished: t, onClick: i, className: n } = e,
                    { user: l } = (0, C.g)(),
                    o = (0, a.useMemo)(
                        () => (t ? (0, s.jsx)(M.A, { id: 'interface-actions.mark-all-non-listened' }) : (0, s.jsx)(M.A, { id: 'interface-actions.mark-all-listened' })),
                        [t],
                    );
                return (0, s.jsx)(u.Dr, {
                    className: n,
                    onClick: i,
                    icon: (0, s.jsx)(B.I, { variant: 'check', size: 'xxs' }),
                    disabled: !l.isAuthorized,
                    'data-test-id': r.S7.CONTEXT_MENU_MARK_ALL_LISTENED_BUTTON,
                    children: o,
                });
            });
            var D = i(93091),
                U = i(27817),
                z = i(74064),
                F = i(44988),
                K = i(15425),
                V = i(81066),
                W = i(18278),
                G = i(41918);
            // for PulseSync: BEGIN download-to-file action in the album context menu
            var pulseSyncMst = i(5120);
            let pulseSyncDownloadAlbumToFile = (0, n.PA)((e) => {
                let { album: t } = e,
                    i = (0, a.useCallback)(async () => {
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
                return (0, s.jsx)(u.Dr, {
                    onClick: i,
                    disabled: !t?.id,
                    icon: (0, s.jsx)(B.I, {
                        variant: 'download',
                        size: 'xxs',
                    }),
                    children: 'Скачать в файл',
                });
            });
            // for PulseSync: END download-to-file action in the album context menu
            let q = (0, n.PA)((e) => {
                // for PulseSync WebHost: BEGIN refresh the album menu when native addon slots change
                let [, pulseSyncSetAlbumMenuRevision] = (0, a.useState)(0);
                (0, a.useEffect)(() => {
                    const onNativeSlotChange = (event) => {
                        if (event.detail === 'albumContextMenu') pulseSyncSetAlbumMenuRevision((revision) => revision + 1);
                    };
                    document.addEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                    pulseSyncSetAlbumMenuRevision((revision) => revision + 1);
                    return () => document.removeEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                }, []);
                // for PulseSync WebHost: END refresh the album menu when native addon slots change
                var t, i;
                let { album: n, children: M, onOpenChange: B, open: q, wrapperClassName: H, variant: $, ...Y } = e,
                    { shouldShowBuySubscriptionModal: X, showBuySubscriptionModal: J } = (0, T.q)(),
                    {
                        settings: { isMobile: Z },
                        trailer: Q,
                        user: ee,
                        experiments: et,
                        albumCPA: { isPlusCPAEnabled: ei, isPlusCPAPlayerBarEnabled: es },
                    } = (0, C.g)(),
                    en = (0, g.K)(n),
                    ea = (0, v.A)(n),
                    el = (0, f.F)(),
                    eo = ''.concat(k.U.ALBUM, '-').concat(n.id),
                    er = n.isNonMusic && $ === G.z.PAGE,
                    ec = et.checkExperiment(R.z.WebEditorsFeatures, 'on'),
                    ed = !n.isNonMusic && !et.checkExperiment(R.z.WebNextProductWithoutRecommendation, 'on'),
                    { formatMessage: eu } = (0, l.A)(),
                    em = (0, _.P)(),
                    { pageAlbumId: eh } = (0, j.T)(),
                    ep = ei({ pageAlbumId: eh, albumId: n.id, isNonMusic: n.isNonMusic }),
                    eC = es(n.id, n.isNonMusic),
                    eb = (() => {
                        let { user: e, album: t, fullscreenPlayer: i } = (0, C.g)(),
                            { notify: n } = (0, p.l)(),
                            { formatMessage: o } = (0, l.A)();
                        return (0, a.useCallback)(async () => {
                            var a, l;
                            if (!t) return;
                            let r = i.modal.isOpened ? h.u.FULLSCREEN_ERROR : h.u.ERROR;
                            return e.isAuthorized
                                ? (await t.setListeningFinishedStatus()) !== m.T.OK
                                    ? void n((0, s.jsx)(b.h, { error: o({ id: 'error-messages.error-during-action' }) }), { containerId: r })
                                    : void (null == (l = t.meta) || l.updateFinished(!(null == (a = t.meta) ? void 0 : a.listeningFinished)))
                                : void n((0, s.jsx)(b.h, { error: o({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: r });
                        }, [o, n, t, e.isAuthorized, i.modal.isOpened]);
                    })(),
                    { shareLink: eg, pathname: ev } = (0, w.b)('/album/:albumId', { params: { albumId: n.id } }),
                    eA = (0, A.A)({ entityVariant: O.D.ALBUM, urlParams: { id: n.id } }),
                    { isPlaying: ex, togglePlay: e_ } = (0, P.B)({
                        seeds: null != (i = null == n ? void 0 : n.seeds) ? i : [],
                        pageIdForFrom: y.b.RADIO,
                        blockIdForFrom: eo,
                        parentContextId: n.id,
                    }),
                    { utmLink: ek } = (0, N.f)({ blockId: k.U.ALBUM, contextType: c.K.Album, contextId: null == n ? void 0 : n.id }),
                    ey = (0, d.c)(() => {
                        if (X && ee.isAuthorized) return void J();
                        !em() && (ex || e_());
                    }),
                    ef = (0, d.c)(() => {
                        if (X && !eC) return void J();
                        em() || (Q.setUtmLink(ek), Q.openAlbumTrailer(n.id), el(o.DomainObjectType.Album, String(n.id)));
                    });
                (0, L.N)(q);
                let eN = (0, a.useMemo)(() => {
                        if (!Z) return (0, s.jsx)(U.L, { onClick: ea, isPinned: n.isPinned });
                    }, [n.isPinned, ea, Z]),
                    eT = (0, a.useMemo)(() => {
                        let e = !ep && !ee.isAuthorized;
                        return n.isNonMusic
                            ? (0, s.jsx)(F.U, { onClick: en, isLiked: n.isLiked, albumType: n.type })
                            : (0, s.jsx)(D.T, { onClick: en, isLiked: n.isLiked, disabled: e });
                    }, [n.isLiked, n.type, en, n.isNonMusic, ee.isAuthorized, ep]),
                    ej = (0, a.useMemo)(() => {
                        var e;
                        if (!n.isNonMusic && (null == (e = n.trailer) ? void 0 : e.isAvailable)) return (0, s.jsx)(K.N, { onClick: ef, disabled: !n.isAvailable });
                    }, [n.isAvailable, null == (t = n.trailer) ? void 0 : t.isAvailable, n.isNonMusic, ef]),
                    eL = (0, a.useMemo)(() => {
                        if (ed) return (0, s.jsx)(V.C, { onClick: ey, disabled: !n.isAvailable || (eC && Z), variant: I.I.ALBUM, onOpenMenuChange: B });
                    }, [n.isAvailable, ey, ed, B, eC, Z]),
                    eP = { variant: S.Y.ALBUM, id: n.id, title: n.title, path: ev, albumArtistName: n.artistName, albumArtistId: n.artistId };
                // for PulseSync WebHost: BEGIN album context and native addon menu item rendering
                let pulseSyncInjectAlbumMenuItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('albumContextMenu', items, {
                        eventDetail: {
                            id: String(n.id),
                            url: ev,
                            ...(n.title
                                ? {
                                      title: String(n.title),
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
                                        (activate(), B(!1));
                                    },
                                    children: label,
                                    'data-pulsesync-addon-menu-item': '',
                                },
                                key,
                            );
                        },
                    }) ?? items;
                // for PulseSync WebHost: END album context and native addon menu item rendering
                return (0, s.jsxs)(u.W1, {
                    isMobile: Z,
                    offsetOptions: 10,
                    open: q,
                    onOpenChange: B,
                    ariaLabel: eu({ id: 'interface-actions.context-menu' }),
                    wrapperClassName: H,
                    containerDataTestId: r.Kq.album.ALBUM_CONTEXT_MENU,
                    ...Y,
                    // for PulseSync WebHost: BEGIN inject native addon items into the album context menu
                    children: pulseSyncInjectAlbumMenuItems([
                        Z && (0, s.jsx)(W.C, { getDescriptionTexts: n.getDescriptionTexts, entityId: n.id }),
                        ec && (0, s.jsx)(x.d, { entityVariant: O.D.ARTIST, adminUrl: eA }),
                        eN,
                        eT,
                        ej,
                        eL,
                        // for PulseSync: BEGIN insert the album download-to-file menu action
                        (0, s.jsx)(pulseSyncDownloadAlbumToFile, { album: n }),
                        // for PulseSync: END insert the album download-to-file menu action
                        M,
                        er && (0, s.jsx)(E, { onClick: eb, isFinished: n.listeningFinished }),
                        (0, s.jsx)(z.H, { shareLink: eg, entityMeta: eP }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the album context menu
                });
            });
        },
    },
]);
