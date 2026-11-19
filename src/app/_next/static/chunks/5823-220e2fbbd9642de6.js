(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5823],
    {
        202: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => a });
            var r = i(39499),
                n = i(29993);
            let a = (e) => {
                let { format: t, onSuccess: i, onError: a } = e;
                return {
                    startClipboardWrite: (0, n.c)(() => {
                        let e = () => void 0,
                            n = () => void 0,
                            o = !1,
                            s = new Promise((t, i) => {
                                ((e = t), (n = i));
                            }),
                            l = (async (e) => {
                                try {
                                    (await window.navigator.clipboard.write([e]), null == i || i());
                                } catch (e) {
                                    o || null == a || a(e);
                                }
                            })(new ClipboardItem({ 'text/plain': (async () => new Blob([await s], { type: 'text/plain' }))() }));
                        return {
                            copy: (i) => (e(t(i)), l),
                            cancel: () => {
                                ((o = !0), n(new r.t('Clipboard write cancelled')));
                            },
                        };
                    }),
                };
            };
        },
        1401: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => c });
            var r = i(88800),
                n = i(52300),
                a = i(15077),
                o = i(42729),
                s = i(14307),
                l = i.n(s);
            let c = (e) => {
                let { vibe: t, closeToast: i } = e;
                return (0, r.jsx)(o.O, {
                    className: l().root,
                    closeToast: i,
                    entityVariant: a.c.VIBE,
                    customCover: (0, r.jsx)(n.I, { variant: 'vibe', size: 'xxs' }),
                    collectionUrl: '/collection',
                    isLiked: t.isLiked,
                });
            };
        },
        2147: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => c });
            var r = i(88800),
                n = i(79390),
                a = i(29993),
                o = i(25555),
                s = i(72288),
                l = i(1401);
            let c = function (e) {
                let { showNotificationOnMobile: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { user: i, paywall: c } = (0, s.g)(),
                    u = (0, o.I)({
                        action: async () => (await (null == e ? void 0 : e.toggleLike())) === n.f.OK,
                        notification: (0, r.jsx)(l.T, { vibe: { isLiked: !(null == e ? void 0 : e.isLiked) } }),
                        showNotificationOnMobile: t,
                    });
                return (0, a.c)(async () => {
                    if (e) {
                        if (i.isAuthorized && !i.hasPlus && !e.isLiked) return void c.openModal();
                        await u();
                    }
                });
            };
        },
        4609: (e) => {
            e.exports = {
                root: 'VibeAgentCard_root__NfyBA',
                root_withContextMenu: 'VibeAgentCard_root_withContextMenu__DqPEk',
                root_withVibeActions: 'VibeAgentCard_root_withVibeActions__RS3od',
                cover: 'VibeAgentCard_cover__cEIXN',
                controls: 'VibeAgentCard_controls__zIX5Z',
                controls_menuOpen: 'VibeAgentCard_controls_menuOpen__0Woi1',
                touchMenu: 'VibeAgentCard_touchMenu__BtT87',
                additionals_hide: 'VibeAgentCard_additionals_hide__DkEhr',
                control: 'VibeAgentCard_control__sc7Nx',
                playButton: 'VibeAgentCard_playButton__kwX21',
                likeButton: 'VibeAgentCard_likeButton__VZyfO',
                pinButton: 'VibeAgentCard_pinButton__KR74R',
            };
        },
        7665: (e) => {
            e.exports = { ndaLabel: 'ShareVibeMenuItem_ndaLabel__LZvFN' };
        },
        8655: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => r });
            var r = (function (e) {
                return ((e.Dark = 'dark'), (e.Light = 'light'), e);
            })({});
        },
        14307: (e) => {
            e.exports = { root: 'NotificationLike_root__DM13k' };
        },
        14329: (e) => {
            e.exports = {
                root: 'NotificationPin_root__DBEub',
                view: 'NotificationPin_view__daGc_',
                image: 'NotificationPin_image__o5F7B',
                multivibeContainer: 'NotificationPin_multivibeContainer__ZbXhn',
                multivibeCover: 'NotificationPin_multivibeCover__n_5EZ',
                multivibeAvatar: 'NotificationPin_multivibeAvatar__4P5gm',
                multivibeControl: 'NotificationPin_multivibeControl__iOOyQ',
            };
        },
        16112: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => A });
            var r = i(88800),
                n = i(96706),
                a = i(53548),
                o = i(2058),
                s = i(42078),
                l = i(29595),
                c = i(74965),
                u = i(72288),
                d = i(66943),
                _ = i(65724),
                v = i(84961),
                g = i(17392),
                m = i(79070),
                p = i(90688),
                b = i(97956),
                f = i(90420),
                h = i(15077),
                x = i(33719),
                C = i(55211),
                y = i(14329),
                T = i.n(y);
            let I = (0, v.PA)((e) => {
                let { vibe: t, closeToast: i } = e,
                    { experiments: n } = (0, u.g)(),
                    a = n.checkExperiment(b.z.WebNextWaveAgentExperiment, 'on'),
                    o = t.type === f.q7,
                    s = (0, m.L)(() => {
                        var e;
                        return a && t.agent
                            ? (0, r.jsx)(C.n, {
                                  agent: t.agent,
                                  shouldShowControl: !1,
                                  className: (0, _.$)(T().view, { [T().multivibeContainer]: o }),
                                  coverClassName: (0, _.$)({ [T().multivibeCover]: o }),
                                  entityCoverClassName: (0, _.$)({ [T().multivibeAvatar]: o }),
                                  controlClassName: (0, _.$)({ [T().multivibeControl]: o }),
                              })
                            : (0, r.jsx)(p._V, {
                                  className: T().image,
                                  src: t.backgroundImageUrl,
                                  size: 100,
                                  fit: 'cover',
                                  withAvatarReplace: !0,
                                  'aria-hidden': !0,
                                  style: { backgroundColor: null == (e = t.colors) ? void 0 : e.average },
                                  withLoadingIndicator: !1,
                                  'data-test-id': g.S7.BASE_NOTIFICATION_PIN_VIBE_COVER,
                              });
                    }),
                    l = a && t.agent ? void 0 : 'round';
                return (0, r.jsx)(x.k, {
                    closeToast: i,
                    entityVariant: h.c.VIBE,
                    entityTitle: t.title,
                    entityDescription: t.getDescription(),
                    isPinned: t.isPinned,
                    customCover: s,
                    radius: l,
                    className: T().root,
                });
            });
            var E = i(93512);
            let A = (e) => {
                let { user: t, pinsCollection: i } = (0, u.g)(),
                    { notify: _ } = (0, c.l)(),
                    { formatMessage: v } = (0, o.A)(),
                    [g, m] = (0, a.useState)(!1);
                return (0, a.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void _((0, r.jsx)(d.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (g) return;
                    let a = { ...(0, n.HO)(e), isPinned: !e.isPinned, getDescription: e.getDescription },
                        o = (0, n.HO)(i.get(e.pinId));
                    m(!0);
                    let c = await e.togglePin();
                    (m(!1),
                        o &&
                            o.type === s._.WAVE_ITEM &&
                            o.data.backgroundImageUrl &&
                            ((a.backgroundImageUrl = o.data.backgroundImageUrl), (a.colors = o.data.colors), (a.agent = o.data.agent)),
                        c &&
                            'object' == typeof c &&
                            'data' in c &&
                            (c.data.backgroundImageUrl && (a.backgroundImageUrl = c.data.backgroundImageUrl),
                            c.data.colors && (a.colors = { average: c.data.colors.average, waveText: c.data.colors.waveText }),
                            c.data.agent && (a.agent = (0, E.K)(c.data.agent))),
                        c
                            ? _((0, r.jsx)(I, { vibe: a }), { containerId: l.u.INFO })
                            : _((0, r.jsx)(d.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [v, _, g, i, t.isAuthorized, e]);
            };
        },
        21284: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { h: () => r }),
                (function (e) {
                    ((e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), (e.ARTIST = 'artist'));
                })(r || (r = {})));
        },
        21869: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => g });
            var r = i(88800),
                n = i(65724),
                a = i(84961),
                o = i(97234),
                s = i(91177),
                l = i(66610),
                c = i(29993),
                u = i(72288),
                d = i(93091),
                _ = i(27817),
                v = i(16112);
            let g = (0, a.PA)((e) => {
                let { vibe: t, onLikeClick: i, className: a, iconClassName: g, likeActiveClassName: m } = e,
                    {
                        user: p,
                        settings: { isMobile: b },
                    } = (0, u.g)(),
                    f = (0, s.D)(),
                    h = (0, l.D)(),
                    x = (0, v.A)(t),
                    C = (0, c.c)(() => {
                        (h({ actionType: t.isLiked ? o.ActionType.Unlike : o.ActionType.Like, userInteractionType: o.UserInteractionType.Tap }), i());
                    });
                return (0, r.jsxs)('div', {
                    ref: f,
                    children: [
                        !b && (0, r.jsx)(_.L, { className: a, iconClassName: g, onClick: x, isPinned: t.isPinned }),
                        (0, r.jsx)(d.T, { className: (0, n.$)(a, t.isLiked && m), iconClassName: g, onClick: C, isLiked: t.isLiked, disabled: !p.isAuthorized }),
                    ],
                });
            });
        },
        23192: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => r });
            let r = '#b239f3';
        },
        25555: (e, t, i) => {
            'use strict';
            i.d(t, { I: () => d });
            var r = i(88800),
                n = i(53548),
                a = i(2058),
                o = i(29993),
                s = i(66943),
                l = i(29595),
                c = i(74965),
                u = i(72288);
            let d = (e) => {
                let { action: t, notification: i, showNotificationOnMobile: d = !1 } = e,
                    {
                        user: _,
                        settings: { isMobile: v },
                    } = (0, u.g)(),
                    { formatMessage: g } = (0, a.A)(),
                    { notify: m } = (0, c.l)(),
                    p = (0, n.useRef)(!1);
                return (0, o.c)(async () => {
                    if (!_.isAuthorized) return void m((0, r.jsx)(s.h, { error: g({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (!p.current) {
                        p.current = !0;
                        try {
                            (await t())
                                ? (!v || d) && m(i, { containerId: l.u.INFO })
                                : m((0, r.jsx)(s.h, { error: g({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR });
                        } finally {
                            p.current = !1;
                        }
                    }
                });
            };
        },
        31510: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => r });
            let r = (e) => ({ uri: e.uri, color: e.color });
        },
        33786: (e) => {
            e.exports = { root: 'NdaLabel_root__WeDgT', root_small: 'NdaLabel_root_small__1vy_B', text: 'NdaLabel_text__sfQ_Y' };
        },
        34970: (e) => {
            e.exports = { root: 'TextField_root__RO2Hk', root_textarea: 'TextField_root_textarea__N0PF_', root_outline: 'TextField_root_outline__8JfQF' };
        },
        35402: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => s });
            var r = i(13758),
                n = i(57249),
                a = i(6087),
                o = i(49124);
            let s = a.default.default(
                () =>
                    Promise.resolve()
                        .then(i.bind(i, 13758))
                        .then((e) => e.DotLottieWorkerReact),
                { ssr: !1 },
            );
            {
                let e = o.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/undefined/music/vundefined' : window.location.origin;
                (0, r.setWasmUrl)(new URL(n, e).href);
            }
        },
        36509: (e) => {
            e.exports = { root: 'Q2vCardView_root__yJM3K', image: 'Q2vCardView_image__GBloF' };
        },
        42078: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { _: () => r }),
                (function (e) {
                    ((e.ALBUM_ITEM = 'album_item'),
                        (e.ARTIST_ITEM = 'artist_item'),
                        (e.PLAYLIST_ITEM = 'playlist_item'),
                        (e.TRACK_ITEM = 'track_item'),
                        (e.LIKED_PLAYLIST_ITEM = 'liked_playlist_item'),
                        (e.PERSONAL_PLAYLIST_ITEM = 'personal_playlist_item'),
                        (e.WAVE_ITEM = 'wave_item'),
                        (e.WAVE_AGENT_ITEM = 'wave_agent_item'),
                        (e.MIX = 'mix'),
                        (e.MIX_CARD_ITEM = 'mix_card_item'),
                        (e.LIKED_ALBUM_ITEM = 'liked_album_item'),
                        (e.PRESAVED_ALBUM_ITEM = 'presaved_album_item'),
                        (e.CHART_ALBUM_ITEM = 'chart_album_item'),
                        (e.NON_MUSIC_ALBUM_ITEM = 'non_music_album_item'),
                        (e.MENU_ITEM = 'menu_item'),
                        (e.DONATION_ITEM = 'donation_item'),
                        (e.CLIP = 'clip'),
                        (e.CLIP_ITEM = 'clip_item'),
                        (e.CONCERT_ITEM = 'concert_item'),
                        (e.QUERY_TO_VIBE_ITEM = 'q2v_item'));
                })(r || (r = {})));
        },
        43966: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => c });
            var r = i(88800),
                n = i(65724),
                a = i(88969),
                o = i(29504),
                s = i(33786),
                l = i.n(s);
            let c = (e) => {
                let { className: t, size: i = 'm' } = e;
                return (0, r.jsx)('span', {
                    className: (0, n.$)(l().root, { [l().root_small]: 's' === i }, t),
                    children: (0, r.jsx)(o.HL, {
                        variant: 'span',
                        size: 's' === i ? 'xs' : 'm',
                        weight: 'bold',
                        className: l().text,
                        children: (0, r.jsx)(a.A, { id: 'multivibe.nda' }),
                    }),
                });
            };
        },
        45347: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => y });
            var r = i(88800),
                n = i(65724),
                a = i(84961),
                o = i(53548),
                s = i(17392),
                l = i(21284),
                c = i(29993),
                u = i(79070),
                d = i(78275),
                _ = i(90688),
                v = i(19994),
                g = i(69704),
                m = i(35402),
                p = i(35412);
            let b = (e, t, i) => {
                let r = (r) => {
                    let n = (r + e / 30) % 12,
                        a = t * Math.min(i, 1 - i);
                    return i - a * Math.max(-1, Math.min(n - 3, 9 - n, 1));
                };
                return [r(0), r(8), r(4)];
            };
            var f = i(8655);
            let h = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
                return Math.min(i, Math.max(t, e)) / 100;
            };
            var x = i(68817),
                C = i.n(x);
            let y = (0, a.PA)((e) => {
                let { agent: t, isPlaying: i, className: a } = e,
                    [x, y] = (0, o.useState)(null),
                    { state: T, toggleTrue: I } = (0, d.e)(!1),
                    { state: E, toggleTrue: A, toggleFalse: N } = (0, d.e)(!1),
                    { theme: w } = (0, g.W)(),
                    L = (0, o.useRef)(null),
                    k = t.entityType === l.h.ARTIST,
                    V = t.entityType === l.h.ALBUM || t.entityType === l.h.TRACK || t.entityType === l.h.PLAYLIST,
                    j = t.cover.color,
                    M = t.cover.uri,
                    P = (0, c.c)(async () => {
                        if (T) {
                            if (!j) return void A();
                            if (w) {
                                N();
                                let {
                                        color: e,
                                        glow1: i,
                                        glow2: r,
                                    } = ((e) => {
                                        let { averageColor: t, theme: i, custom: r } = e,
                                            { h: n, s: a, l: o } = (0, p.g8)(t);
                                        if (r) {
                                            if (i === f.S.Dark) {
                                                let e = h(a + 5, 50, 100);
                                                return { color: b(n, e, h(o - 40, 12, 25)), glow1: b(n, e, h(o - 5, 45, 60)), glow2: b(n, e, h(o + 35, 80, 90)) };
                                            }
                                            let e = h(a - 2, 50, 100);
                                            return { color: b(n, e, h(o + 43, 80, 95)), glow1: b(n, e, h(o + 5, 45, 75)), glow2: b(n, e, h(o, 35, 55)) };
                                        }
                                        return { color: b(n, (a > 25 ? Math.min(a + 25, 60) : a) / 100, (o > 20 ? Math.min(o + 15, 60) : o) / 100) };
                                    })({ averageColor: j, theme: w, custom: !t.entityType }),
                                    n = JSON.stringify({
                                        rules: [
                                            { id: 'color', type: 'Color', value: e },
                                            { id: 'glow_1', type: 'Color', value: i },
                                            { id: 'glow_2', type: 'Color', value: r },
                                        ],
                                    });
                                (await (null == x ? void 0 : x.setThemeData(n)), A());
                            }
                        }
                    }),
                    R = (0, c.c)(() => {
                        (I(), P());
                    });
                ((0, o.useEffect)(() => {
                    i ? null == x || x.play() : null == x || x.pause();
                }, [x, i]),
                    (0, o.useEffect)(() => {
                        P();
                    }, [j, P, w, T]),
                    (0, o.useEffect)(() => {
                        if (x)
                            return (
                                x.setUseFrameInterpolation(!1),
                                x.setRenderConfig({ devicePixelRatio: 0.1 }),
                                x.addEventListener('load', R),
                                () => {
                                    x.removeEventListener('load', R);
                                }
                            );
                    }, [x, R]));
                let O = !T || !E,
                    S = (0, u.L)(() => {
                        if (!L.current) return;
                        let e = k ? 0.029 : 0.036;
                        return { '--blur-size': ''.concat(L.current.clientWidth * e, 'px') };
                    });
                return (0, r.jsxs)('div', {
                    ref: L,
                    className: (0, n.$)(C().root, a, { [C().root_loading]: O }),
                    style: S,
                    'data-test-id': O ? s.OA.vibe.VIBE_AGENT_LOADING_CARD : void 0,
                    children: [
                        (0, r.jsxs)('div', {
                            className: (0, n.$)(C().cover, { [C().cover_round]: k, [C().cover_square]: V, [C().cover_loading]: O }),
                            children: [
                                t.entityType &&
                                    M &&
                                    (0, r.jsx)(_._V, { src: M, size: 200, fit: 'cover', withAvatarReplace: !0, className: C().image, withLoadingIndicator: !1 }),
                                (0, r.jsx)(m.j, { src: t.animationUri, loop: !0, dotLottieRefCallback: y, className: C().animation }),
                            ],
                        }),
                        (0, r.jsx)(v.W, { className: (0, n.$)(C().shimmer, { [C().shimmer_loading]: O }), isActive: !0, radius: k ? 'round' : 'm' }),
                    ],
                });
            });
        },
        51105: (e) => {
            e.exports = { message: 'ShareVibeSuccessNotification_message__edF4z', icon: 'ShareVibeSuccessNotification_icon__zjcuv' };
        },
        51231: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => a });
            var r = i(5120),
                n = i(31510);
            let a = (e) => {
                let t = (0, n.e)(e);
                return (0, r.wg)(t);
            };
        },
        54488: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => u });
            var r,
                n = i(87819),
                a = i(53548),
                o = {
                    792: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useCallbackRef = void 0));
                        let r = i(810);
                        t.useCallbackRef = function (e) {
                            let t = (0, r.useRef)({
                                stableFn: function () {
                                    for (var e = arguments.length, i = Array(e), r = 0; r < e; r++) i[r] = arguments[r];
                                    return t.current.callback(...i);
                                },
                                callback: e,
                            });
                            return (
                                (0, r.useInsertionEffect)(() => {
                                    t.current.callback = e;
                                }),
                                t.current.stableFn
                            );
                        };
                    },
                    3940: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useForceUpdateRef = void 0));
                        let r = i(810);
                        t.useForceUpdateRef = () => {
                            let [e, t] = (0, r.useState)(null);
                            return [
                                e,
                                (0, r.useCallback)((e) => {
                                    t((t) => (t !== e ? e : t));
                                }, []),
                            ];
                        };
                    },
                    4012: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useMergeRefs = void 0));
                        var r = i(1964);
                        Object.defineProperty(t, 'useMergeRefs', {
                            enumerable: !0,
                            get: function () {
                                return r.useMergeRefs;
                            },
                        });
                    },
                    1964: (e) => {
                        e.exports = n;
                    },
                    810: (e) => {
                        e.exports = r || (r = i.t(a, 2));
                    },
                },
                s = {};
            function l(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var i = (s[e] = { exports: {} });
                return (o[e](i, i.exports, l), i.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, '__esModule', { value: !0 }), (c.useLongPress = void 0));
                let e = l(810),
                    t = l(792),
                    i = l(3940),
                    r = l(4012);
                c.useLongPress = function () {
                    let {
                            ref: n,
                            onLongPress: a,
                            delay: o = 500,
                            movementThreshold: s = 10,
                            disabled: l = !1,
                            allowMouse: c = !1,
                            scale: u,
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        [d, _] = (0, i.useForceUpdateRef)(),
                        v = (0, r.useMergeRefs)([_, n]),
                        [g, m] = (0, e.useState)(!1),
                        [p, b] = (0, e.useState)(!1),
                        f = (0, e.useRef)(void 0),
                        h = (0, t.useCallbackRef)((e, t) => (null == a ? void 0 : a(e, t))),
                        x = (0, t.useCallbackRef)(() => {
                            var e;
                            (null == (e = f.current) || e.call(f), b(!1));
                        });
                    return (
                        (0, e.useEffect)(() => {
                            let e, t, i, r;
                            if (!d || l) return;
                            let n = d.ownerDocument,
                                a = n.defaultView;
                            if (!a) return;
                            let _ = new AbortController();
                            function v() {
                                (a.clearTimeout(i), (i = void 0), null == r || r.cancel(), (r = void 0), (e = void 0), m(!1), null == t || t.abort(), (t = void 0));
                            }
                            function g(t) {
                                e && t.pointerId === e.pointerId && Math.hypot(t.clientX - e.clientX, t.clientY - e.clientY) > s && v();
                            }
                            function p(t) {
                                t.pointerId === (null == e ? void 0 : e.pointerId) && v();
                            }
                            function x(t) {
                                t.pointerId !== (null == e ? void 0 : e.pointerId) && v();
                            }
                            function C() {
                                'hidden' === n.visibilityState && v();
                            }
                            return (
                                (f.current = v),
                                d.addEventListener(
                                    'pointerdown',
                                    (s) => {
                                        var l;
                                        let _ = 'touch' === s.pointerType || 'pen' === s.pointerType || (c && 'mouse' === s.pointerType);
                                        if (e || !s.isPrimary || 0 !== s.button || !_) return;
                                        ((e = s),
                                            (t = new AbortController()),
                                            m(!0),
                                            b(!1),
                                            void 0 !== u &&
                                                u > 0 &&
                                                Number.isFinite(u) &&
                                                !(null == (l = a.matchMedia) ? void 0 : l.call(a, '(prefers-reduced-motion: reduce)').matches) &&
                                                d.animate &&
                                                (r = d.animate([{ transform: 'scale(1)' }, { transform: 'scale('.concat(u, ')') }], {
                                                    duration: 150,
                                                    easing: 'ease-out',
                                                    fill: 'forwards',
                                                    composite: 'add',
                                                })));
                                        let f = t.signal;
                                        (n.addEventListener('pointermove', g, { capture: !0, passive: !0, signal: f }),
                                            n.addEventListener('pointerup', p, { capture: !0, signal: f }),
                                            n.addEventListener('pointercancel', p, { capture: !0, signal: f }),
                                            n.addEventListener('lostpointercapture', p, { capture: !0, signal: f }),
                                            n.addEventListener('pointerdown', x, { capture: !0, signal: f }),
                                            n.addEventListener('scroll', v, { capture: !0, passive: !0, signal: f }),
                                            n.addEventListener('visibilitychange', C, { signal: f }),
                                            a.addEventListener('scroll', v, { passive: !0, signal: f }),
                                            a.addEventListener('blur', v, { signal: f }),
                                            (i = a.setTimeout(() => {
                                                if (((i = void 0), !d.isConnected)) return void v();
                                                (((e, t) => {
                                                    let i,
                                                        r = e.ownerDocument,
                                                        n = r.defaultView;
                                                    if (!n) return;
                                                    let a = new AbortController(),
                                                        o = !1;
                                                    function s() {
                                                        (n.clearTimeout(i), a.abort());
                                                    }
                                                    function l(e) {
                                                        e.pointerId === t.pointerId && ((o = !0), n.clearTimeout(i), (i = n.setTimeout(s, 750)));
                                                    }
                                                    i = n.setTimeout(s, 6e4);
                                                    let c = a.signal;
                                                    (r.addEventListener(
                                                        'click',
                                                        function (i) {
                                                            let r = 'pointerId' in i ? i.pointerId === t.pointerId : i.composedPath().includes(e);
                                                            0 !== i.detail && r && (i.preventDefault(), i.stopPropagation(), s());
                                                        },
                                                        { capture: !0, signal: c },
                                                    ),
                                                        r.addEventListener(
                                                            'pointerdown',
                                                            function () {
                                                                o && s();
                                                            },
                                                            { capture: !0, signal: c },
                                                        ),
                                                        r.addEventListener(
                                                            'contextmenu',
                                                            function (i) {
                                                                'mouse' !== t.pointerType && i.composedPath().includes(e) && i.preventDefault();
                                                            },
                                                            { capture: !0, signal: c },
                                                        ),
                                                        r.addEventListener('pointerup', l, { capture: !0, signal: c }),
                                                        r.addEventListener('pointercancel', l, { capture: !0, signal: c }),
                                                        n.addEventListener('blur', s, { signal: c }));
                                                })(d, s),
                                                    b(!0),
                                                    h(s, d));
                                            }, o)));
                                    },
                                    { passive: !0, signal: _.signal },
                                ),
                                d.addEventListener(
                                    'contextmenu',
                                    (t) => {
                                        e && 'mouse' !== e.pointerType && t.preventDefault();
                                    },
                                    { signal: _.signal },
                                ),
                                () => {
                                    (v(), (f.current = void 0), _.abort());
                                }
                            );
                        }, [d, l, o, s, c, u, h]),
                        { ref: v, isPressing: g, isLongPressed: p, reset: x }
                    );
                };
            })(),
                c.__esModule);
            var u = c.useLongPress;
        },
        55211: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => u });
            var r = i(88800),
                n = i(65724),
                a = i(21284),
                o = i(79070),
                s = i(39267),
                l = i(85925),
                c = i.n(l);
            let u = (e) => {
                let {
                        agent: t,
                        isPlaying: i,
                        isCurrent: l,
                        onPlayButtonClick: u,
                        shouldShowControl: d = !0,
                        playButtonIconSize: _,
                        alt: v,
                        className: g,
                        coverClassName: m,
                        entityCoverClassName: p,
                        controlClassName: b,
                        fallbackIconSize: f,
                    } = e,
                    h = (0, o.L)(() => {
                        if (t.entityType) return t.entityType === a.h.ARTIST ? 'round' : 'xs';
                    });
                return (0, r.jsx)(s.q, {
                    isAvailable: !0,
                    coverUri: t.cover.uri,
                    className: (0, n.$)(c().root, c()['root_radius_'.concat(h)], { [c().root_withShadow]: !!t.entityType }, g),
                    radius: h,
                    onPlayButtonClick: u,
                    isPlaying: i,
                    isCurrent: l,
                    alt: v,
                    withLoadingIndicator: !1,
                    shouldShowControl: d,
                    playButtonIconSize: _,
                    fallbackIconSize: f,
                    coverClassName: m,
                    entityCoverClassName: p,
                    controlClassName: b,
                });
            };
        },
        57448: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => a });
            var r = i(4086),
                n = i(41928);
            let a = () => {
                let e = (0, n.N)(),
                    t = e.get(r.$I),
                    i = e.get(r.EN),
                    a = e.get(r.N1),
                    o = e.get(r._1),
                    s = e.get(r.V3),
                    l = e.get(r.Lb),
                    c = e.get(r.wK),
                    u = e.get(r.tz),
                    d = e.get(r.$8),
                    _ = e.get(r.Oo),
                    v = e.get(r.X4),
                    g = e.get(r.O9),
                    m = e.get(r.E),
                    p = e.get(r.wH),
                    b = e.get(r.ok),
                    f = e.get(r.X8),
                    h = e.get(r.yq),
                    x = e.get(r.NN),
                    C = e.get(r.qN),
                    y = e.get(r.ro),
                    T = e.get(r.nM),
                    I = e.get(r.Ut),
                    E = e.get(r.K1),
                    A = e.get(r.eu),
                    N = e.get(r.SD),
                    w = e.get(r.aE),
                    L = e.get(r.ki),
                    k = e.get(r.c9),
                    V = e.get(r.en),
                    j = e.get(r.jQ),
                    M = e.get(r.cZ),
                    P = e.get(r.Zl),
                    R = e.get(r.CN),
                    O = e.get(r.P1),
                    S = e.get(r.zj),
                    D = e.get(r.re),
                    B = e.get(r.JM),
                    U = e.get(r.Lk),
                    z = e.get(r.$$),
                    F = e.get(r.sv),
                    W = e.get(r.gd),
                    $ = e.get(r.Ez),
                    K = e.get(r.u2),
                    X = e.get(r.TD),
                    H = e.get(r.dh),
                    Y = e.get(r.LC),
                    q = e.get(r.PL),
                    G = e.get(r.DT);
                return {
                    accountResource: t,
                    afterTrackResource: i,
                    disclaimersResource: a,
                    usersResource: o,
                    landingResource: s,
                    landing3Resource: l,
                    landingBlocksResource: c,
                    albumResource: u,
                    libraryResource: d,
                    tracksResource: _,
                    topResource: v,
                    artistsResource: g,
                    slidesResource: m,
                    redAlertResource: p,
                    rotorResource: b,
                    waveResource: f,
                    searchResource: h,
                    searchPlaylistResource: x,
                    playlistResource: C,
                    playlistsResource: y,
                    pinResource: T,
                    metatagsResource: I,
                    tagResource: E,
                    feedResource: A,
                    wizard3Resource: N,
                    pinsResource: w,
                    musicHistoryResource: L,
                    dynamicPagesResource: k,
                    chartResource: V,
                    clipsResource: j,
                    lyricViewsResource: M,
                    nonMusicResource: P,
                    donationResource: R,
                    loaderResource: O,
                    lumenResource: S,
                    prefixlessResource: D,
                    streamsResource: B,
                    filtersResource: U,
                    ugcResource: z,
                    collectionResource: F,
                    adsResource: W,
                    personalResource: $,
                    familyResource: K,
                    childrenLandingResource: X,
                    promoResource: H,
                    telemetryResource: Y,
                    labelsResource: q,
                    concertsResource: G,
                    wordsResource: e.get(r.dA),
                    wheelResource: e.get(r.$Y),
                };
            };
        },
        59378: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => c });
            var r = i(88800),
                n = i(65724),
                a = i(84961),
                o = i(53548),
                s = i(34970),
                l = i.n(s);
            let c = (0, a.PA)((e) => {
                let {
                        className: t,
                        text: i = '',
                        maxTextLength: a,
                        minTextLength: s,
                        variant: c = 'input',
                        shouldFinishOnKeyPress: u = !1,
                        placeholder: d,
                        onChangeFinish: _,
                        withOutline: v = !1,
                        readOnly: g = !1,
                        'aria-label': m,
                        'data-test-id': p,
                    } = e,
                    [b, f] = (0, o.useState)(i),
                    h = (0, o.useRef)(!1),
                    x = (0, o.useRef)(null),
                    C = (0, o.useCallback)((e) => {
                        f(e.target.value);
                    }, []),
                    y = (0, o.useCallback)(
                        (e) => {
                            if (u && ['Enter', 'Escape'].includes(e.key)) {
                                var t;
                                ('Escape' === e.key && (h.current = !0), null == (t = e.currentTarget) || t.blur());
                            }
                        },
                        [u],
                    ),
                    T = (0, o.useCallback)(() => {
                        let e = b.trim();
                        h.current || (s && e.length < s) ? ((h.current = !1), null == _ || _(i)) : null == _ || _(e);
                    }, [b, h, s, _, i]);
                ((0, o.useEffect)(() => {
                    x.current && ((x.current.selectionStart = x.current.value.length), (x.current.selectionEnd = x.current.value.length));
                }, []),
                    (0, o.useLayoutEffect)(() => {
                        let e = x.current;
                        if (e) {
                            e.style.height = '0px';
                            let t = e.scrollHeight;
                            e.style.height = ''.concat(t, 'px');
                        }
                    }, [x, b]));
                let I = (0, o.useMemo)(() => ('textarea' === c ? (e) => (0, r.jsx)('textarea', { ref: x, rows: 6, ...e }) : (e) => (0, r.jsx)('input', { ...e })), [c]);
                return (0, r.jsx)(I, {
                    className: (0, n.$)(l().root, t, { [l().root_textarea]: 'textarea' === c, [l().root_outline]: v }),
                    type: 'text',
                    value: b,
                    readOnly: g,
                    maxLength: a,
                    onBlur: T,
                    onChange: C,
                    onKeyDown: y,
                    placeholder: d,
                    'aria-label': m,
                    autoFocus: !0,
                    'data-test-id': p,
                });
            });
        },
        65523: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => s });
            var r = i(4086),
                n = i(41928),
                a = i(44084);
            let o = new WeakMap(),
                s = () =>
                    ((e) => {
                        if (e instanceof a.r) return e;
                        let t = o.get(e);
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
                        return (o.set(e, i), i);
                    })((0, n.N)().get(r.Zf));
        },
        68817: (e) => {
            e.exports = {
                root: 'VibeCardView_root__bt_Xt',
                root_loading: 'VibeCardView_root_loading__J8fOe',
                cover: 'VibeCardView_cover__fBDH_',
                cover_round: 'VibeCardView_cover_round__LPs63',
                cover_square: 'VibeCardView_cover_square__C45qF',
                cover_loading: 'VibeCardView_cover_loading__kpdrp',
                shimmer: 'VibeCardView_shimmer__Rp6yh',
                shimmer_loading: 'VibeCardView_shimmer_loading__74dZm',
                animation: 'VibeCardView_animation__x3VEI',
                image: 'VibeCardView_image__5fXOh',
            };
        },
        69413: (e) => {
            e.exports = {
                root: 'VibeAgentContextMenu_root__yaXWX',
                menu: 'VibeAgentContextMenu_menu____sN1',
                menuItem: 'VibeAgentContextMenu_menuItem__FB1F1',
                touchAnchor: 'VibeAgentContextMenu_touchAnchor__uuOj9',
                touchTrigger: 'VibeAgentContextMenu_touchTrigger__e8jWW',
            };
        },
        69704: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => n, W: () => a });
            var r = i(53548);
            let n = (0, r.createContext)({ theme: null, setTheme: () => {} }),
                a = () => (0, r.useContext)(n);
        },
        70134: (e, t, i) => {
            'use strict';
            i.d(t, { u: () => P });
            var r = i(88800),
                n = i(84961),
                a = i(88969),
                o = i(17392),
                s = i(52300),
                l = i(19934),
                c = i(72288),
                u = i(43966),
                d = i(53548),
                _ = i(2058),
                v = i(35412),
                g = i(97234),
                m = i(66610),
                p = i(39499),
                b = i(29993),
                f = i(4086),
                h = i(41928),
                x = i(65523),
                C = i(29595),
                y = i(74965),
                T = i(57448),
                I = i(72131),
                E = i(202),
                A = i(66943),
                N = i(29504),
                w = i(59304),
                L = i(51105),
                k = i.n(L);
            let V = (e) => {
                let { closeToast: t } = e;
                return (0, r.jsx)(w.$, {
                    closeToast: t,
                    cover: (0, r.jsx)(s.I, { className: k().icon, size: 'xs', variant: 'chain' }),
                    coverRadius: 's',
                    message: (0, r.jsx)(N.HL, {
                        className: k().message,
                        variant: 'div',
                        type: 'controls',
                        size: 'm',
                        children: (0, r.jsx)(a.A, { id: 'shared-vibe.link-successfully-copied', values: { b: (e) => (0, r.jsx)('b', { children: e }) } }),
                    }),
                });
            };
            var j = i(7665),
                M = i.n(j);
            let P = (0, n.PA)((e) => {
                let { vibe: t, className: i, iconClassName: n } = e,
                    { sharedVibe: N } = (0, c.g)(),
                    { shareVibe: w } = ((e) => {
                        let { vibe: t } = e,
                            { user: i, paywall: n, slam: a } = (0, c.g)(),
                            { waveResource: o } = (0, T.f)(),
                            { notify: s } = (0, y.l)(),
                            { formatMessage: l } = (0, _.A)(),
                            u = (0, x.U)(),
                            N = (0, h.N)().get(f.V4),
                            w = (0, I._)(N.webHost),
                            L = (0, d.useRef)(!1),
                            k = (0, m.D)(),
                            j = (0, b.c)((e) => {
                                (e && u.error(new p.t('Failed to share a vibe', { cause: e })),
                                    s((0, r.jsx)(A.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: C.u.ERROR }));
                            }),
                            { startClipboardWrite: M } = (0, E.$)({
                                format: (e) => (0, v.no)('/myvibe/:shareId', { params: { shareId: e }, options: { host: 'https://'.concat(w) } }).href,
                                onSuccess: () => {
                                    s((0, r.jsx)(V, {}), { containerId: C.u.INFO });
                                },
                                onError: j,
                            });
                        return {
                            shareVibe: (0, b.c)(async () => {
                                let e;
                                if (!L.current) {
                                    if (!i.isAuthorized)
                                        return void s((0, r.jsx)(A.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: C.u.ERROR });
                                    if (!i.hasPlus) return void n.openModal();
                                    if (a.networkStatus.isOffline || a.isOfflineModeEnabled) return void j();
                                    ((L.current = !0), k({ actionType: g.ActionType.Share, userInteractionType: g.UserInteractionType.Tap }));
                                    try {
                                        e = M();
                                        let { shareId: i } = await o.createShare({ seeds: [...t.seeds] });
                                        await e.copy(i);
                                    } catch (t) {
                                        (null == e || e.cancel(), j(t));
                                    } finally {
                                        L.current = !1;
                                    }
                                }
                            }),
                        };
                    })({ vibe: t });
                return t.isShareEnabled
                    ? (0, r.jsxs)(l.Dr, {
                          className: i,
                          icon: (0, r.jsx)(s.I, { className: n, variant: 'share', size: 'xxs' }),
                          onClick: w,
                          'data-test-id': o.S7.CONTEXT_MENU_SHARE_BUTTON,
                          children: [(0, r.jsx)(a.A, { id: 'interface-actions.share' }), N.isNdaLabelEnabled && (0, r.jsx)(u.g, { className: M().ndaLabel, size: 's' })],
                      })
                    : null;
            });
        },
        78275: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => l });
            var r,
                n = i(53548),
                a = {
                    810: (e) => {
                        e.exports = r || (r = i.t(n, 2));
                    },
                },
                o = {},
                s = {};
            ((() => {
                (Object.defineProperty(s, '__esModule', { value: !0 }), (s.useToggle = void 0));
                let e = (function e(t) {
                    var i = o[t];
                    if (void 0 !== i) return i.exports;
                    var r = (o[t] = { exports: {} });
                    return (a[t](r, r.exports, e), r.exports);
                })(810);
                s.useToggle = (t) => {
                    let [i, r] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        r(t);
                    }, [t]);
                    let n = (0, e.useCallback)(() => {
                            r((e) => !e);
                        }, []),
                        a = (0, e.useCallback)(() => {
                            r(!0);
                        }, []),
                        o = (0, e.useCallback)(() => {
                            r(!1);
                        }, []);
                    return { state: i, toggle: n, setState: r, toggleTrue: a, toggleFalse: o };
                };
            })(),
                s.__esModule);
            var l = s.useToggle;
        },
        81438: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => o });
            var r = i(72288),
                n = i(8655),
                a = i(69704);
            let o = () => {
                var e, t, i, o, s, l;
                let { lumen: c } = (0, r.g)(),
                    { theme: u } = (0, a.W)(),
                    d = null != u ? u : n.S.Dark,
                    _ = null == (e = c.themes) ? void 0 : e[d],
                    v = c.getFallbackImage()[d],
                    g = null != (o = null == _ ? void 0 : _.cover.uri) ? o : v;
                return {
                    cover: g,
                    fullCover: null != (s = null == _ || null == (t = _.fullCover) ? void 0 : t.uri) ? s : g,
                    faceCover: null != (l = null == _ || null == (i = _.faceCover) ? void 0 : i.uri) ? l : g,
                    solidColor: null == _ ? void 0 : _.solidColor,
                    fallbackImage: v,
                };
            };
        },
        84200: (e, t, i) => {
            'use strict';
            i.d(t, { y: () => Y });
            var r = i(88800),
                n = i(65724),
                a = i(84961),
                o = i(53548),
                s = i(97234),
                l = i(93940),
                c = i(91177),
                u = i(46482),
                d = i(46384),
                _ = i(90852),
                v = i(17392),
                g = i(29993),
                m = i(54488),
                p = i(79070),
                b = i(29832),
                f = i(29504),
                h = i(16112),
                x = i(90688),
                C = i(81438),
                y = i(72288),
                T = i(23192),
                I = i(36509),
                E = i.n(I);
            let A = (0, a.PA)(() => {
                let { lumen: e } = (0, y.g)(),
                    { cover: t, fallbackImage: i, solidColor: n } = (0, C.x)(),
                    a = e.isEnabled ? t : i;
                return (
                    (0, o.useEffect)(() => {
                        e.isEnabled && !e.themes && e.getData();
                    }, [e]),
                    (0, r.jsx)('div', {
                        className: E().root,
                        style: { '--glow-color': n || T.R },
                        children: (0, r.jsx)(x._V, {
                            alt: '',
                            className: E().image,
                            src: a,
                            fit: 'contain',
                            draggable: !1,
                            withAvatarReplace: !0,
                            withFallback: !1,
                            withLoadingIndicator: !1,
                            'data-test-id': v.OA.vibe.Q2V_CARD_IMAGE,
                        }),
                    })
                );
            });
            var N = i(2147),
                w = i(45347),
                L = i(64284),
                k = i(47964),
                V = i(97956),
                j = i(90420),
                M = i(52726),
                P = i(49738),
                R = i(56862),
                O = i(16704),
                S = i(64546),
                D = i(2058),
                B = i(52300),
                U = i(19934),
                z = i(21869),
                F = i(70134),
                W = i(69413),
                $ = i.n(W);
            let K = (0, a.PA)((e) => {
                let { vibe: t, open: i, onOpenChange: n } = e,
                    {
                        settings: { isMobile: a },
                    } = (0, y.g)(),
                    { formatMessage: o } = (0, D.A)(),
                    s = (0, N.K)(t, { showNotificationOnMobile: !0 }),
                    l = (0, g.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    c = o({ id: 'interface-actions.context-menu' });
                return (0, r.jsxs)(U.W1, {
                    className: a ? $().touchTrigger : $().root,
                    wrapperClassName: a ? $().touchAnchor : void 0,
                    menuClassName: $().menu,
                    isMobile: !1,
                    open: i,
                    onOpenChange: n,
                    onClick: l,
                    icon: a ? null : (0, r.jsx)(B.I, { size: 'xxs', variant: 'more' }),
                    size: 's',
                    offsetOptions: a ? 4 : 10,
                    shiftPadding: 8,
                    transition: a ? { duration: 0 } : void 0,
                    disabled: a,
                    'aria-hidden': a || void 0,
                    tabIndex: a ? -1 : void 0,
                    ariaLabel: c,
                    submenuProps: { 'aria-label': c, 'aria-labelledby': void 0 },
                    containerDataTestId: v.OA.vibe.VIBE_AGENT_CONTEXT_MENU,
                    'data-test-id': v.OA.vibe.VIBE_AGENT_CONTEXT_MENU_BUTTON,
                    children: [
                        (0, r.jsx)(S.WithOffline, { fallback: (0, r.jsx)(z.S, { vibe: t, className: $().menuItem, onLikeClick: s }) }),
                        (0, r.jsx)(F.u, { vibe: t, className: $().menuItem }),
                    ],
                });
            });
            var X = i(4609),
                H = i.n(X);
            let Y = (0, a.PA)((e) => {
                let { vibe: t, shouldShowPlayButton: i = !0, shouldShowAdditionals: a = !0, additionalsLinesCount: x = 3, className: C } = e,
                    { screen: T, block: I } = (0, l.j)(),
                    E = null == T ? void 0 : T.pageIdForFrom,
                    D = null == I ? void 0 : I.blockIdForFrom,
                    B = (0, c.D)(),
                    {
                        freeAccess: U,
                        experiments: z,
                        user: F,
                        settings: { isMobile: W },
                    } = (0, y.g)(),
                    $ = z.checkExperiment(V.z.WebNextWaveLikesAndShares, 'on') && t.isLikeEnabled && t.stationType !== j.q7,
                    X = $ && F.isAuthorized,
                    [Y, q] = (0, o.useState)(!1),
                    G = X && Y,
                    Q = (0, g.c)(() => q(!0)),
                    { ref: Z } = (0, m.H)({ ref: B, disabled: !X || !W, onLongPress: Q }),
                    [J, ee] = (0, o.useState)(!1),
                    et = (0, h.A)(t),
                    ei = (0, N.K)(t, { showNotificationOnMobile: !0 }),
                    er = (0, g.c)((e) => e.stopPropagation()),
                    { isPlaying: en, togglePlay: ea } = (0, k.B)({ seeds: t.seeds, pageIdForFrom: E, blockIdForFrom: D }),
                    eo = (0, u.g)(),
                    es = (0, o.useCallback)(() => {
                        !U.isVibeStartRestricted && (ea(), en || eo());
                    }, [U.isVibeStartRestricted, ea, en, eo]),
                    el = (0, o.useCallback)(
                        () =>
                            (0, r.jsx)(
                                O.D,
                                {
                                    className: (0, n.$)(H().playButton, H().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                    onClick: es,
                                    isPlaying: en,
                                },
                                t.getKey('PlayButton'),
                            ),
                        [t, es, en],
                    ),
                    ec = (0, p.L)(() =>
                        (0, r.jsx)(
                            M.S,
                            {
                                isEnabled: U.isVibeStartRestricted,
                                isOpened: J,
                                onOpenChange: ee,
                                placement: 'top',
                                textVariant: 'vibe',
                                vibeTextVariant: t.stationType,
                                renderChildren: el,
                            },
                            t.getKey('BuyPlusPopover'),
                        ),
                    ),
                    eu = (0, p.L)(() =>
                        (0, r.jsx)(R.O, { onClick: et, isPinned: t.isPinned, className: (0, n.$)(H().pinButton, H().control), withRipple: !1 }, t.getKey('PinButton')),
                    ),
                    ed = (0, p.L)(() => {
                        if ($)
                            return (0, r.jsx)(S.WithOffline, {
                                fallback: (0, r.jsx)(P.c, {
                                    className: (0, n.$)(H().likeButton, H().control),
                                    isLiked: t.isLiked,
                                    onClick: ei,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !F.isAuthorized,
                                }),
                            });
                    }),
                    e_ = (0, p.L)(() => {
                        if (X)
                            return (0, r.jsx)(d.F, {
                                blockId: L.U.VIBE_CONTEXT_MENU,
                                blockType: L.U.VIBE_CONTEXT_MENU,
                                blockPosX: 1,
                                blockPosY: 1,
                                objectsCount: 1,
                                children: (0, r.jsx)(_.B, {
                                    objectType: s.DomainObjectType.Wave,
                                    objectId: t.seedsId,
                                    objectPosX: 1,
                                    objectPosY: 1,
                                    children: (0, r.jsx)(K, { vibe: t, open: G, onOpenChange: q }),
                                }),
                            });
                    }),
                    ev = (0, p.L)(() => {
                        if (W && X)
                            return (0, r.jsx)('div', {
                                className: H().touchMenu,
                                onClick: er,
                                onPointerDown: er,
                                onTouchStart: er,
                                onTouchMove: er,
                                onWheel: er,
                                children: e_,
                            });
                    }),
                    eg = (0, p.L)(() => (t.isQ2V ? (0, r.jsx)(A, {}) : t.agent ? (0, r.jsx)(w.s, { agent: t.agent, isPlaying: en }) : null)),
                    em = (0, p.L)(() =>
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)('div', {
                                    className: H().cover,
                                    onClick: es,
                                    children: [
                                        eg,
                                        (0, r.jsx)(b.hg, {
                                            isVisible: J || G,
                                            className: (0, n.$)(H().controls, { [H().controls_menuOpen]: G }),
                                            playControl: i ? ec : void 0,
                                            pinControl: eu,
                                            likeControl: ed,
                                            menuControl: W ? void 0 : e_,
                                        }),
                                    ],
                                }),
                                ev,
                            ],
                        }),
                    );
                return (0, r.jsx)(b.MN, {
                    ref: Z,
                    className: (0, n.$)(H().root, C, { [H().root_withVibeActions]: $, [H().root_withContextMenu]: X }),
                    contentLinesCount: x,
                    view: em,
                    textPosition: 'center',
                    wrapperClassName: (0, n.$)({ [H().additionals_hide]: !a }),
                    title: (0, r.jsx)(f.HL, { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: t.title }, t.getKey('Title')),
                    description: (0, r.jsx)(
                        f.HL,
                        { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: t.description },
                        t.getKey('Description'),
                    ),
                    'data-test-id': v.OA.vibe.VIBE_AGENT_CARD,
                });
            });
        },
        85925: (e) => {
            e.exports = {
                root: 'VibeSmallView_root__6IYFM',
                root_radius_xs: 'VibeSmallView_root_radius_xs__hrEG3',
                root_radius_round: 'VibeSmallView_root_radius_round__t4uAR',
                root_withShadow: 'VibeSmallView_root_withShadow__HU7NP',
            };
        },
        93512: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => n });
            var r = i(51231);
            let n = (e) => {
                var t;
                if (e) return { animationUri: e.animationUri, cover: (0, r.p)(e.cover), entityType: null == (t = e.entity) ? void 0 : t.type };
            };
        },
    },
]);
