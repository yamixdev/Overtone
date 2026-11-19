(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1960],
    {
        3150: (e) => {
            e.exports = {
                root: 'VibeRoomCardShimmer_root__lG3e3',
                root_mobile: 'VibeRoomCardShimmer_root_mobile__A462e',
                coverContainer: 'VibeRoomCardShimmer_coverContainer__dBb9G',
                coverContainer_mobile: 'VibeRoomCardShimmer_coverContainer_mobile__fcRcH',
                avatarShimmer: 'VibeRoomCardShimmer_avatarShimmer__ZHbcX',
                infoContainer: 'VibeRoomCardShimmer_infoContainer__WxMcd',
                infoContainer_mobile: 'VibeRoomCardShimmer_infoContainer_mobile__DJYX6',
                title: 'VibeRoomCardShimmer_title__X_5k3',
                title_mobile: 'VibeRoomCardShimmer_title_mobile___I56b',
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
        10270: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => c });
            var o = i(56949),
                a = i(53548),
                n = i(29993),
                r = i(44230),
                s = i(72288);
            let l = { width: 400, height: 400 },
                c = (e) => {
                    let { count: t, getEstimateSize: i, getItemKey: c, gap: _, containerRef: m, overscan: d = 2, useVirtualizerMeasurement: b } = e,
                        {
                            settings: { isMobile: u },
                        } = (0, s.g)(),
                        { contentScrollRef: p } = (0, r.g)(),
                        v = (0, a.useRef)(new Map()),
                        g = (0, a.useRef)(void 0),
                        x = {
                            count: t,
                            gap: _,
                            getItemKey: c,
                            estimateSize: (e) => {
                                let t = v.current.get(String(e));
                                return null != t ? t : i(e);
                            },
                            overscan: d,
                            initialRect: l,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, i, o) => {
                                if (!t) return 0;
                                let a = t.getBoundingClientRect().top;
                                return e && 1 ? a + window.scrollY : !e && i ? a - (o ? i.getBoundingClientRect().top + i.clientTop : 0) + i.scrollTop : 0;
                            })(u, m, p, b),
                        },
                        h = (0, o.XW)(x),
                        C = (0, o.Te)({ ...x, getScrollElement: () => p, initialOffset: null == p ? void 0 : p.scrollTop }),
                        S = u ? h : C;
                    b &&
                        (S.shouldAdjustScrollPositionOnItemSizeChange = (e) => {
                            let { scrollElement: t } = S;
                            if (!t) return !1;
                            let i = 'scrollY' in t ? t.scrollY : t.scrollTop;
                            return e.start < i && e.end <= i;
                        });
                    let R = (0, n.c)(() => {
                        S.measure();
                    });
                    return (
                        (0, a.useEffect)(() => {
                            b ||
                                g.current ||
                                (g.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    (e.forEach((e) => {
                                        let i = e.target.getAttribute('data-index');
                                        if (e.target && i) {
                                            let o = e.contentRect.height;
                                            o && o !== v.current.get(i) && (v.current.set(i, e.contentRect.height), (t = !0));
                                        }
                                    }),
                                        t && R());
                                }));
                        }, [R, b]),
                        { virtualizer: S, resizeObserver: g.current }
                    );
                };
        },
        32596: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => P });
            var o = i(88800),
                a = i(65724),
                n = i(84961),
                r = i(53548),
                s = i(2058),
                l = i(88969);
            i(30282);
            var c = i(96817),
                _ = i(52300),
                m = i(29504),
                d = i(97234),
                b = i(59714),
                u = i(43054),
                p = i(18117),
                v = i(93940),
                g = i(24709);
            let x = (0, g.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, u.s)()) ? void 0 : e.evgenInstance,
                        { hash: i } = (0, p.g)(),
                        { screen: o } = (0, v.j)();
                    return {
                        sendRefreshEvent: (0, r.useCallback)(() => {
                            if (!t || !i || !(null == o ? void 0 : o.pageId)) return;
                            let e = {
                                actionType: d.ActionType.Refresh,
                                userInteractionType: d.UserInteractionType.Tap,
                                entityType: d.EntityTypes.Error,
                                entityId: d.EntityTypes.SomethingWrong,
                                hash: i,
                                pageId: o.pageId,
                                pageStyle: d.PageStyles.Fullscreen,
                                pagePlacement: d.PagePlacements.Fullscreen,
                                mainObjectType: d.DomainObjectType.NonApplicable,
                                mainObjectId: d.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, b.bv)(t, e);
                        }, [t, i, null == o ? void 0 : o.pageId]),
                    };
                }),
                h = (0, g.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let i = null == (t = (0, u.s)()) ? void 0 : t.evgenInstance,
                        { hash: o } = (0, p.g)(),
                        { screen: a } = (0, v.j)();
                    (0, r.useEffect)(() => {
                        if (!i || !o || !(null == a ? void 0 : a.pageId)) return;
                        let t = {
                            entityType: d.EntityTypes.Error,
                            entityId: d.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: o,
                            pageId: a.pageId,
                            pageStyle: d.PageStyles.Fullscreen,
                            pagePlacement: d.PagePlacements.Fullscreen,
                            mainObjectType: d.DomainObjectType.NonApplicable,
                            mainObjectId: d.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, b.z5)(i, t);
                    }, [i, e, o, null == a ? void 0 : a.pageId]);
                });
            var C = i(44230),
                S = i(4370),
                R = i(72288),
                y = i(97956),
                N = i(56248),
                j = i(90688),
                M = i(78940);
            let A = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var f = i(96856),
                T = i.n(f);
            let I = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: n } = e,
                    { slam: r } = (0, R.g)(),
                    { contentRef: s } = (0, C.g)(),
                    _ = (0, M.Z)(S.Z.mymusicDownloadsTracks.href);
                return (0, o.jsxs)('div', {
                    className: (0, a.$)(T().root, t),
                    children: [
                        i &&
                            (0, o.jsx)(N.L, {
                                withBackwardFallback: '/',
                                className: (0, a.$)(T().navigation, { [T().navigation_desktop]: !s }),
                                withForwardControl: !1,
                                onBackwardClick: n,
                            }),
                        (0, o.jsxs)('div', {
                            className: (0, a.$)(T().content, { [T().content_shrink]: !i }),
                            children: [
                                (0, o.jsx)(j._V, { className: T().image, src: A.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, o.jsxs)('div', {
                                    className: T().message,
                                    children: [
                                        (0, o.jsx)(m.DZ, {
                                            className: T().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, o.jsx)(l.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, o.jsx)(m.HL, {
                                            className: T().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, o.jsx)(l.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                r.hasDownloadedTracks &&
                                    (0, o.jsx)(c.$, {
                                        className: T().button,
                                        onClick: _,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, o.jsx)(m.HL, {
                                            className: T().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, o.jsx)(l.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var w = i(9184),
                k = i.n(w);
            let P = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: n } = e,
                    { formatMessage: d } = (0, s.A)(),
                    b = (0, r.useContext)(R.P),
                    u = null == b ? void 0 : b.experiments.checkExperiment(y.z.WebNextUnstableMusicScreen, 'on'),
                    p = d(u ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                h(p);
                let { sendRefreshEvent: v } = x(),
                    g = (0, r.useCallback)(() => {
                        (v(), (window.location.href = S.Z.main.href));
                    }, [v]),
                    { contentRef: j } = (0, C.g)();
                return u
                    ? (0, o.jsx)(I, { className: t, withBackwardControl: i, onBack: n })
                    : (0, o.jsxs)('div', {
                          className: (0, a.$)(k().root, t),
                          children: [
                              i &&
                                  (0, o.jsx)(N.L, {
                                      withBackwardFallback: '/',
                                      className: (0, a.$)(k().navigation, { [k().navigation_desktop]: !j }),
                                      withForwardControl: !1,
                                      onBackwardClick: n,
                                  }),
                              (0, o.jsxs)('div', {
                                  className: (0, a.$)(k().content, { [k().content_shrink]: !i }),
                                  children: [
                                      (0, o.jsx)(_.I, { className: k().icon, variant: 'attention', size: 'xxl' }),
                                      (0, o.jsx)(m.DZ, { className: (0, a.$)(k().title, k().important), variant: 'h3', size: 'xs', children: p }),
                                      (0, o.jsxs)(m.HL, {
                                          className: (0, a.$)(k().text, k().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, o.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, o.jsx)(c.$, {
                                          onClick: g,
                                          className: k().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, o.jsxs)(m.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, o.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        40887: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => m });
            var o = i(88800),
                a = i(53548),
                n = i(2058),
                r = i(29993),
                s = i(29595),
                l = i(74965),
                c = i(27506),
                _ = i(66943);
            let m = (e) => {
                let { room: t, onRoomSuccessExit: i } = e,
                    [m, d] = (0, a.useState)(!1),
                    { notify: b } = (0, l.l)(),
                    u = (0, a.useRef)(!1),
                    { formatMessage: p } = (0, n.A)();
                return {
                    exitVibeRoom: (0, r.c)(async () => {
                        t &&
                            !u.current &&
                            (d(!0),
                            (u.current = !0),
                            (await t.exitRoom({ roomId: t.id })) === c.F.ERROR
                                ? b((0, o.jsx)(_.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: s.u.ERROR })
                                : i(t.id),
                            d(!1),
                            (u.current = !1));
                    }),
                    isPending: m,
                };
            };
        },
        41153: (e) => {
            e.exports = { root_mobile: 'VibeRoomContextMenu_root_mobile__mH0PT' };
        },
        42789: (e) => {
            e.exports = {
                root: 'VibeRoomCard_root__5_iia',
                root_mobile: 'VibeRoomCard_root_mobile__v2PVq',
                cardWrapper: 'VibeRoomCard_cardWrapper__SjvtK',
                cardWrapper_mobile: 'VibeRoomCard_cardWrapper_mobile__Zq5mQ',
                roomInfo: 'VibeRoomCard_roomInfo__OH814',
                roomInfo_mobile: 'VibeRoomCard_roomInfo_mobile__q49k2',
                unavailableStatus: 'VibeRoomCard_unavailableStatus___TRYU',
                unavailableStatusDot: 'VibeRoomCard_unavailableStatusDot__HhbgW',
                roomName: 'VibeRoomCard_roomName__vMTor',
                roomName_disabled: 'VibeRoomCard_roomName_disabled__ADQ3G',
                roomName_mobile: 'VibeRoomCard_roomName_mobile__AcCl_',
                textField: 'VibeRoomCard_textField__SZ7Nw',
                avatarsWrapper: 'VibeRoomCard_avatarsWrapper__y7_Rm',
                avatarsWrapper_mobile: 'VibeRoomCard_avatarsWrapper_mobile__jGyAN',
                avatarsWrapper_visible: 'VibeRoomCard_avatarsWrapper_visible__RCg1b',
                avatarsWrapper_disabled: 'VibeRoomCard_avatarsWrapper_disabled__P_0ea',
                playingAnimation: 'VibeRoomCard_playingAnimation__biX8D',
                cardControls: 'VibeRoomCard_cardControls__ffMym',
                control: 'VibeRoomCard_control__QKRAh',
                playControl: 'VibeRoomCard_playControl__DnQ9O',
                menuControl: 'VibeRoomCard_menuControl__KwpDi',
                pinControl: 'VibeRoomCard_pinControl__C3epe',
                menuControl_mobile: 'VibeRoomCard_menuControl_mobile__VsaOD',
                pinControl_mobile: 'VibeRoomCard_pinControl_mobile__5gVK6',
            };
        },
        43378: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => _ });
            var o = i(88800),
                a = i(65724),
                n = i(19994),
                r = i(72288),
                s = i(76524),
                l = i(3150),
                c = i.n(l);
            let _ = (e) => {
                let { isActive: t, className: i, 'aria-label': l, withMobileLayout: _ = !1 } = e,
                    {
                        settings: { isMobile: m },
                    } = (0, r.g)(),
                    d = _ && m;
                return (0, o.jsxs)('div', {
                    'aria-label': l,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, a.$)(c().root, { [c().root_mobile]: d }, i),
                    children: [
                        (0, o.jsxs)('div', {
                            className: (0, a.$)(c().coverContainer, { [c().coverContainer_mobile]: d }),
                            children: [
                                (0, o.jsx)(s.b, { align: 'back', children: (0, o.jsx)(n.W, { isActive: t, className: c().avatarShimmer, radius: 'round' }) }),
                                (0, o.jsx)(s.b, { align: 'front', children: (0, o.jsx)(n.W, { isActive: t, className: c().avatarShimmer, radius: 'round' }) }),
                            ],
                        }),
                        (0, o.jsx)('div', {
                            className: (0, a.$)(c().infoContainer, { [c().infoContainer_mobile]: d }),
                            children: (0, o.jsx)(n.W, { isActive: t, className: (0, a.$)(c().title, { [c().title_mobile]: d }), radius: 's' }),
                        }),
                    ],
                });
            };
        },
        47674: (e) => {
            e.exports = {
                root: 'MultivibeShowPromoModalButton_root__IVPw7',
                root_mobile: 'MultivibeShowPromoModalButton_root_mobile__WRav6',
                button: 'MultivibeShowPromoModalButton_button__FIPMr',
                button_mobile: 'MultivibeShowPromoModalButton_button_mobile__27mpZ',
                surface: 'MultivibeShowPromoModalButton_surface__moFgc',
                icon: 'MultivibeShowPromoModalButton_icon__Sq7Vg',
                title: 'MultivibeShowPromoModalButton_title__0ZG_f',
                titleWrapper: 'MultivibeShowPromoModalButton_titleWrapper__GNMdJ',
                title_mobile: 'MultivibeShowPromoModalButton_title_mobile__qZ_tH',
                content_linesCount_1: 'MultivibeShowPromoModalButton_content_linesCount_1__YfsBl',
                content_linesCount_2: 'MultivibeShowPromoModalButton_content_linesCount_2__AC_t8',
                content_linesCount_3: 'MultivibeShowPromoModalButton_content_linesCount_3___wDV_',
                content_linesCount_4: 'MultivibeShowPromoModalButton_content_linesCount_4__BuNw_',
            };
        },
        49176: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => o });
            var o = (function (e) {
                return ((e.SPACE = 'Space'), (e.ENTER = 'Enter'), (e.ESCAPE = 'Escape'), e);
            })({});
        },
        56475: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => m });
            var o = i(88800),
                a = i(53548),
                n = i(2058),
                r = i(29993),
                s = i(29595),
                l = i(74965),
                c = i(27506),
                _ = i(66943);
            let m = (e) => {
                let [t, i] = (0, a.useState)(!1),
                    { notify: m } = (0, l.l)(),
                    d = (0, a.useRef)(!1),
                    { formatMessage: b } = (0, n.A)();
                return {
                    editVibeRoom: (0, r.c)(async (t) => {
                        e &&
                            !d.current &&
                            (i(!0),
                            (d.current = !0),
                            (await e.editRoom({ roomId: e.id, name: t })) === c.F.ERROR &&
                                m((0, o.jsx)(_.h, { error: b({ id: 'error-messages.error-during-action' }) }), { containerId: s.u.ERROR }),
                            i(!1),
                            (d.current = !1));
                    }),
                    isPending: t,
                };
            };
        },
        63087: (e) => {
            e.exports = { surface: 'VibeRoomMemberAvatar_surface__L4WU2', overlay: 'VibeRoomMemberAvatar_overlay__9adN4', image: 'VibeRoomMemberAvatar_image__g4AsX' };
        },
        76524: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => s });
            var o = i(88800),
                a = i(65724),
                n = i(82892),
                r = i.n(n);
            let s = (e) => {
                let { align: t, children: i, overlay: n, isDisabled: s = !1, className: l, surfaceClassName: c, overlayClassName: _ } = e,
                    m = 'back' === t;
                return (0, o.jsxs)('span', {
                    className: (0, a.$)(r().root, m ? r().root_back : r().root_front, l),
                    children: [
                        (0, o.jsxs)('span', {
                            className: (0, a.$)(r().circle, { [r().circle_back]: m, [r().circle_disabled]: s }),
                            children: [(0, o.jsx)('span', { className: (0, a.$)(r().surface, c), children: i }), _ && (0, o.jsx)('span', { className: _ })],
                        }),
                        n,
                    ],
                });
            };
        },
        76830: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => h });
            var o = i(88800),
                a = i(65724),
                n = i(84961),
                r = i(2058),
                s = i(88969),
                l = i(97234),
                c = i(70598),
                _ = i(17392),
                m = i(29993),
                d = i(96817),
                b = i(52300),
                u = i(29504),
                p = i(72288),
                v = i(76524),
                g = i(47674),
                x = i.n(g);
            let h = (0, n.PA)((e) => {
                let { withMobileLayout: t } = e,
                    {
                        settings: { isMobile: i },
                        multivibe: n,
                    } = (0, p.g)(),
                    { formatMessage: g } = (0, r.A)(),
                    h = (0, c.S)(),
                    C = t && i,
                    S = (0, m.c)(() => {
                        (h({ to: l.AppScreen.MultivibeSendingInvitationScreen }), n.promoModal.open());
                    });
                return (0, o.jsxs)('div', {
                    className: (0, a.$)(x().root, { [x().root_mobile]: C }),
                    'data-test-id': _.Kq.multivibe.MULTIVIBE_SHOW_PROMO_MODAL_CARD,
                    children: [
                        (0, o.jsxs)(d.$, {
                            className: (0, a.$)(x().button, { [x().button_mobile]: C }),
                            'aria-label': g({ id: 'interface-actions.create' }),
                            onClick: S,
                            variant: 'text',
                            isBlock: !0,
                            withRipple: !1,
                            withHover: !1,
                            'data-test-id': _.Kq.multivibe.MULTIVIBE_SHOW_PROMO_MODAL_BUTTON,
                            children: [
                                (0, o.jsx)(v.b, { align: 'back', surfaceClassName: x().surface }),
                                (0, o.jsx)(v.b, {
                                    align: 'front',
                                    surfaceClassName: x().surface,
                                    children: (0, o.jsx)(b.I, { variant: 'add', size: C ? 'xxxs' : 'l', className: x().icon }),
                                }),
                            ],
                        }),
                        (0, o.jsx)('div', {
                            className: x().titleWrapper,
                            children: (0, o.jsx)(u.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                className: (0, a.$)(x().title, { [x().title_mobile]: C }),
                                children: (0, o.jsx)(s.A, { id: 'interface-actions.create' }),
                            }),
                        }),
                    ],
                });
            });
        },
        82892: (e) => {
            e.exports = {
                root: 'VibeRoomMemberAvatarSlot_root__0id8R',
                root_back: 'VibeRoomMemberAvatarSlot_root_back__whzaT',
                root_front: 'VibeRoomMemberAvatarSlot_root_front__ZAlv_',
                surface: 'VibeRoomMemberAvatarSlot_surface__Ylq3t',
                circle: 'VibeRoomMemberAvatarSlot_circle__N0n0t',
                circle_back: 'VibeRoomMemberAvatarSlot_circle_back__XNqs4',
                circle_disabled: 'VibeRoomMemberAvatarSlot_circle_disabled__KTcAv',
            };
        },
        88102: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => Y });
            var o = i(88800),
                a = i(65724),
                n = i(84961),
                r = i(53548),
                s = i(2058),
                l = i(88969),
                c = i(97234),
                _ = i(93940),
                m = i(91177),
                d = i(46482),
                b = i(66610),
                u = i(70598),
                p = i(17392),
                v = i(29993),
                g = i(79070),
                x = i(78275),
                h = i(29832),
                C = i(29504),
                S = i(5407),
                R = i(55693),
                y = i(47964),
                N = i(72288),
                j = i(49176),
                M = i(56862),
                A = i(16704),
                f = i(34945),
                T = i(59378),
                I = i(56475),
                w = i(16112),
                k = i(59724),
                P = i(52300),
                V = i(19934),
                O = i(98427),
                E = i(95210),
                W = i(40887),
                B = i(41153),
                D = i.n(B),
                U = i(36740),
                L = i(89718);
            let F = (0, n.PA)((e) => {
                    let { room: t, isRenamePending: i, onRenameClick: a, onPinClick: n, onExitClick: r, isExitPending: s } = e,
                        l = (0, b.D)();
                    (0, U.u)();
                    let _ = (0, v.c)(async () => {
                            (l({ actionType: c.ActionType.Pin, userInteractionType: c.UserInteractionType.Tap }), await n());
                        }),
                        m = (0, v.c)(async () => {
                            (l({ actionType: c.ActionType.Remove, userInteractionType: c.UserInteractionType.Tap }), await r());
                        });
                    return (0, o.jsx)(L.J, { room: t, onRenameClick: a, isRenamePending: i, onPinClick: _, onExitClick: m, isExitPending: s });
                }),
                z = (0, n.PA)((e) => {
                    let { room: t, onOpenChange: i, onRenameClick: n, isRenamePending: r, onRoomSuccessExit: l, open: _, className: m, ...d } = e,
                        {
                            settings: { isMobile: b },
                        } = (0, N.g)(),
                        { formatMessage: u } = (0, s.A)(),
                        v = (0, w.A)(t.wave),
                        { exitVibeRoom: g, isPending: x } = (0, W.J)({ room: t, onRoomSuccessExit: l });
                    return (
                        (0, E.N)(_),
                        (0, o.jsx)(V.W1, {
                            ...d,
                            isMobile: b,
                            offsetOptions: 10,
                            open: _,
                            onOpenChange: i,
                            ariaLabel: u({ id: 'interface-actions.context-menu' }),
                            containerDataTestId: p.OA.vibe.VIBE_ROOM_CONTEXT_MENU,
                            size: 's',
                            icon: (0, o.jsx)(P.I, { size: 'xxs', variant: 'more' }),
                            color: 'secondary',
                            variant: 'default',
                            className: m,
                            menuClassName: (0, a.$)(D().root, { [D().root_mobile]: b }),
                            children: (0, o.jsx)(k.a, {
                                pageId: c.AppScreen.MultivibeActionScreen,
                                pageIdForFrom: O.b.MULTIVIBE_ACTION_SCREEN,
                                pageStyle: c.PageStyles.Sheet,
                                pagePlacement: c.PagePlacements.Bottom,
                                children: (0, o.jsx)(F, { room: t, onRenameClick: n, isRenamePending: r, onPinClick: v, onExitClick: g, isExitPending: x }),
                            }),
                        })
                    );
                });
            var $ = i(81877),
                H = i(76524),
                K = i(63087),
                X = i.n(K);
            let Z = (e) => {
                let { align: t, controls: i, src: a, isDisabled: n = !1, isMobileLayout: r = !1 } = e;
                return (0, o.jsx)(H.b, {
                    align: t,
                    isDisabled: n,
                    overlay: i,
                    surfaceClassName: X().surface,
                    overlayClassName: X().overlay,
                    children: (0, o.jsx)($.B, {
                        size: 200,
                        fit: 'cover',
                        className: X().image,
                        src: a,
                        withSrcSet: !1,
                        alt: '',
                        withAvatarReplace: !0,
                        fallbackIconSize: r ? 'xxxs' : 'l',
                    }),
                });
            };
            var q = i(42789),
                G = i.n(q);
            let Y = (0, n.PA)((e) => {
                var t, i, n, k;
                let { room: P, contentLinesCount: V = 3, className: O, withMobileLayout: E = !1, onRoomSuccessExit: W } = e,
                    { screen: B } = (0, _.j)(),
                    D = null == B ? void 0 : B.pageIdForFrom,
                    U = (0, m.D)(),
                    {
                        settings: { isMobile: L },
                        multivibe: F,
                        user: $,
                        freeAccess: H,
                    } = (0, N.g)(),
                    K = (0, S.P)(),
                    { sendPlaySearchFeedback: X } = (0, R.z)(),
                    [q, Y] = (0, r.useState)(!1),
                    J = (0, w.A)(P.wave),
                    Q = (0, d.g)(),
                    ee = (0, b.D)(),
                    et = (0, u.S)(),
                    { state: ei, setState: eo } = (0, x.e)(!1),
                    { state: ea, setState: en } = (0, x.e)(!1),
                    { state: er, toggleTrue: es, toggleFalse: el } = (0, x.e)(!1),
                    { formatMessage: ec } = (0, s.A)(),
                    { editVibeRoom: e_, isPending: em } = (0, I.h)(P),
                    ed = E && L,
                    eb = (er || ei || ea) && !L,
                    {
                        isPlaying: eu,
                        isPaused: ep,
                        togglePlay: ev,
                    } = (0, y.B)({ seeds: null != (k = null == (t = P.wave) ? void 0 : t.seeds) ? k : [], pageIdForFrom: D, blockIdForFrom: c.EntityTypes.Multiwave }),
                    eg = ed && !P.isDisabled && (eu || ep),
                    ex = (0, v.c)(() => {
                        !(P.isDisabled || K()) &&
                            (H.isVibeStartRestricted ||
                                (q || eu || (Y(!0), null == X || X()),
                                ev(),
                                eu || Q(),
                                ee({ actionType: eu ? c.ActionType.Pause : c.ActionType.Play, userInteractionType: c.UserInteractionType.Tap })));
                    }),
                    eh = (0, v.c)(async () => {
                        (ee({ actionType: c.ActionType.Pin, userInteractionType: c.UserInteractionType.Tap }), await J());
                    }),
                    eC = (0, v.c)(() => {
                        if (P.isDisabled) {
                            (F.setDisabledRoomId(P.id), F.disabledRoomInfoModal.open(), et({ to: c.AppScreen.MultivibeUnifiedScreen }));
                            return;
                        }
                        L && ex();
                    }),
                    eS = (0, v.c)((e) => {
                        (e && et({ to: c.AppScreen.MultivibeActionScreen, objectType: c.DomainObjectType.Link }), eo(e), en(e));
                    }),
                    eR = (0, v.c)((e) => {
                        e.target === e.currentTarget && (e.code === j.v.SPACE || e.code === j.v.ENTER) && (e.preventDefault(), eC());
                    }),
                    [ey, eN] = (0, r.useState)(!1),
                    ej = (0, r.useCallback)(
                        (e) => {
                            (eN(!1), e_(e), ee({ actionType: c.ActionType.Rename, userInteractionType: c.UserInteractionType.Tap }));
                        },
                        [e_, ee, eN],
                    ),
                    eM = (0, r.useCallback)(() => {
                        (eN(!0), et({ to: c.AppScreen.MultivibeRenameScreen }));
                    }, [et, eN]),
                    eA = (0, g.L)(() =>
                        (0, o.jsx)(
                            z,
                            {
                                room: P,
                                onOpenChange: eS,
                                open: ei,
                                isRenamePending: em,
                                onRenameClick: eM,
                                returnFocus: !ey,
                                className: (0, a.$)(G().menuControl, G().control, { [G().menuControl_mobile]: ed }),
                                onRoomSuccessExit: W,
                                'data-test-id': p.OA.vibe.VIBE_ROOM_CONTEXT_MENU_BUTTON,
                            },
                            P.getKey('VibeRoomContextMenu'),
                        ),
                    ),
                    ef = (0, g.L)(() => {
                        if (!P.isDisabled)
                            return (0, o.jsx)(
                                A.D,
                                {
                                    isPlaying: eu,
                                    onClick: ex,
                                    className: (0, a.$)(G().playControl, G().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                },
                                P.getKey('PlayButton'),
                            );
                    }),
                    eT = (0, g.L)(() => {
                        var e;
                        if (!P.isDisabled)
                            return (0, o.jsx)(
                                M.O,
                                {
                                    isPinned: null == (e = P.wave) ? void 0 : e.isPinned,
                                    onClick: eh,
                                    className: (0, a.$)(G().pinControl, G().control, { [G().pinControl_mobile]: ed }),
                                    withRipple: !1,
                                },
                                P.getKey('PinButton'),
                            );
                    }),
                    eI = P.isDisabled ? ec({ id: 'multivibe.room-status-disabled' }) : ec({ id: 'multivibe.room-status-enabled' }),
                    ew = ec({ id: 'entity-names.vibe-room-name' }, { name: P.name, status: eI }),
                    ek = P.owner.cover.uri,
                    eP = null == (i = P.members[0]) ? void 0 : i.cover.uri,
                    eV = (null == (n = P.owner) ? void 0 : n.uid) && P.owner.uid === $.puid,
                    eO = eV ? ek : eP,
                    eE = eV ? eP : ek,
                    eW = (0, g.L)(() =>
                        (0, o.jsxs)('div', {
                            className: (0, a.$)(G().avatarsWrapper, {
                                [G().avatarsWrapper_mobile]: ed,
                                [G().avatarsWrapper_disabled]: P.isDisabled,
                                [G().avatarsWrapper_visible]: eb,
                            }),
                            children: [
                                (0, o.jsx)(Z, {
                                    align: 'back',
                                    isDisabled: P.isDisabled,
                                    isMobileLayout: ed,
                                    src: eO,
                                    controls: (0, o.jsx)(h.hg, { isVisible: eb, className: G().cardControls, radius: 'round', pinControl: eT }),
                                }),
                                (0, o.jsx)(Z, {
                                    align: 'front',
                                    isDisabled: P.isDisabled,
                                    isMobileLayout: ed,
                                    src: eE,
                                    controls: (0, o.jsx)(h.hg, { isVisible: eb, className: G().cardControls, radius: 'round', playControl: ef, menuControl: eA }),
                                }),
                                eg && (0, o.jsx)(f.P, { stopAnimation: ep, className: G().playingAnimation }),
                            ],
                        }),
                    ),
                    eB = (0, g.L)(() =>
                        P.isDisabled
                            ? (0, o.jsxs)('span', {
                                  className: G().unavailableStatus,
                                  'data-test-id': p.OA.vibe.VIBE_ROOM_UNAVAILABLE_STATUS,
                                  children: [
                                      (0, o.jsx)('span', { className: G().unavailableStatusDot }),
                                      (0, o.jsx)(C.HL, {
                                          variant: 'div',
                                          type: 'entity',
                                          size: 'xs',
                                          weight: 'medium',
                                          lineClamp: 1,
                                          children: (0, o.jsx)(l.A, { id: 'multivibe.room-unavailable' }),
                                      }),
                                  ],
                              })
                            : null,
                    ),
                    eD = (0, g.L)(() =>
                        ey
                            ? (0, o.jsx)('div', {
                                  className: G().textFieldContainer,
                                  children: (0, o.jsx)(T.A, {
                                      text: P.name,
                                      className: G().textField,
                                      onChangeFinish: ej,
                                      maxTextLength: 200,
                                      minTextLength: 1,
                                      placeholder: ec({ id: 'vibe-actions.enter-title' }),
                                      shouldFinishOnKeyPress: !0,
                                      'data-test-id': p.OA.vibe.VIBE_ROOM_RENAME_INPUT,
                                  }),
                              })
                            : (0, o.jsx)(C.HL, {
                                  variant: 'div',
                                  type: 'entity',
                                  size: 'm',
                                  weight: 'medium',
                                  lineClamp: P.isDisabled ? 1 : 2,
                                  className: (0, a.$)(G().roomName, { [G().roomName_disabled]: P.isDisabled, [G().roomName_mobile]: ed }),
                                  'data-test-id': p.OA.vibe.VIBE_ROOM_NAME,
                                  children: P.name,
                              }),
                    );
                return (0, o.jsxs)(h.MN, {
                    ref: U,
                    className: (0, a.$)(G().root, { [G().root_mobile]: ed }, O),
                    contentLinesCount: ed ? 2 : V,
                    textPosition: ed ? 'left' : 'center',
                    wrapperClassName: (0, a.$)(G().cardWrapper, { [G().cardWrapper_mobile]: ed }),
                    view: eW,
                    'aria-label': ew,
                    tabIndex: 0,
                    onClick: eC,
                    onKeyDown: eR,
                    onFocus: es,
                    onMouseEnter: es,
                    onMouseLeave: el,
                    onBlur: el,
                    'data-test-id': p.OA.vibe.VIBE_ROOM_CARD,
                    children: [(0, o.jsxs)('div', { className: (0, a.$)(G().roomInfo, { [G().roomInfo_mobile]: ed }), 'aria-hidden': !0, children: [eD, eB] }), ed && eA],
                });
            });
        },
        89718: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => d });
            var o = i(88800),
                a = i(84961),
                n = i(88969),
                r = i(17392),
                s = i(52300),
                l = i(19934),
                c = i(21416),
                _ = i(72288),
                m = i(27817);
            let d = (0, a.PA)((e) => {
                var t;
                let { room: i, onRenameClick: a, isRenamePending: d, onPinClick: b, onExitClick: u, isExitPending: p, className: v } = e,
                    {
                        settings: { isMobile: g },
                    } = (0, _.g)(),
                    x = !(null == i ? void 0 : i.isDisabled) && !g,
                    h = !(null == i ? void 0 : i.isDisabled) && !g;
                return (0, o.jsxs)(o.Fragment, {
                    children: [
                        x && (0, o.jsx)(m.L, { className: v, onClick: b, isPinned: null == (t = i.wave) ? void 0 : t.isPinned }),
                        h &&
                            (0, o.jsx)(l.Dr, {
                                className: v,
                                icon: (0, o.jsx)(s.I, { variant: 'edit', size: 'xxs' }),
                                onClick: a,
                                disabled: d,
                                spinner: d ? (0, o.jsx)(c.y, { size: 'xs' }) : void 0,
                                'data-test-id': r.OA.vibe.VIBE_ROOM_CONTEXT_MENU_RENAME_BUTTON,
                                children: (0, o.jsx)(n.A, { id: 'interface-actions.rename' }),
                            }),
                        (0, o.jsx)(l.Dr, {
                            className: v,
                            icon: (0, o.jsx)(s.I, { variant: 'bucket', size: 'xxs' }),
                            onClick: u,
                            disabled: p,
                            spinner: p ? (0, o.jsx)(c.y, { size: 'xs' }) : void 0,
                            'data-test-id': r.OA.vibe.VIBE_ROOM_CONTEXT_MENU_EXIT_BUTTON,
                            children: (0, o.jsx)(n.A, { id: 'interface-actions.delete-multivibe' }),
                        }),
                    ],
                });
            });
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
    },
]);
