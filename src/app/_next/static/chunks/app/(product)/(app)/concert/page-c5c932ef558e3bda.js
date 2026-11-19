(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6363, 7167],
    {
        886: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => eb }));
            var a = r(88800),
                o = r(58390),
                n = r(84961),
                i = r(53548),
                s = r(97234),
                l = r(36740),
                d = r(90852),
                c = r(81862),
                u = r(46384),
                _ = r(59724),
                m = r(17392),
                v = r(46312),
                g = r(29993),
                p = r(58105),
                h = r(79070),
                f = r(66719),
                x = r(25772),
                b = r(88894),
                C = r(65724),
                j = r(2058),
                y = r(88969),
                k = r(91177),
                P = r(78275),
                N = r(96817),
                T = r(29504),
                H = r(32506),
                w = r(76484),
                E = r(44167),
                I = r(13060),
                O = r(72876),
                R = r(38053),
                B = r(26756),
                L = r(98953),
                S = r(67174),
                A = r(18130),
                D = r(52300),
                M = r(29595),
                W = r(74965),
                q = r(49343);
            let z = (0, n.PA)((e) => {
                let { className: t, size: r = 's', iconSize: o = 'xxs', withRipple: n, isDisabled: i, entityMeta: s, shareLink: l, onClick: d } = e,
                    { formatMessage: c } = (0, j.A)(),
                    { notify: u } = (0, W.l)(),
                    _ = (0, g.c)(async () => {
                        (null == d || d(),
                            await window.navigator.clipboard.writeText(l),
                            u((0, a.jsx)(q.D, { entityVariant: s.variant, entityTitle: s.title }), { containerId: M.u.INFO }));
                    });
                return (0, a.jsx)(N.$, {
                    className: t,
                    variant: 'default',
                    color: 'secondary',
                    onClick: _,
                    'aria-label': c({ id: 'interface-actions.share' }),
                    size: r,
                    withRipple: n,
                    radius: 'round',
                    disabled: i,
                    icon: (0, a.jsx)(D.I, { variant: 'share', size: o }),
                    'data-test-id': m.S7.SHARE_BUTTON,
                });
            });
            var U = r(58255),
                F = r(43054),
                Y = r(18117),
                V = r(93940),
                $ = r(24709),
                K = r(41617);
            let G = (0, $.n)({ event: 'LandingBlock.Navigated', kind: 'hook', requiredScopes: ['screen', 'block', 'object', 'tab'] }, () => {
                    let e = (0, F.s)(),
                        { hash: t } = (0, Y.g)(),
                        { screen: r, block: a, object: o, tab: n } = (0, V.j)(),
                        { offsetBlockPosY: s } = (0, i.useContext)(K.E);
                    return (0, g.c)((i) => {
                        let { to: l, objectId: d, objectType: c, deepLink: u } = i,
                            _ = null == r ? void 0 : r.pageIdForFrom,
                            m = null != d ? d : null == o ? void 0 : o.objectId,
                            v = null != c ? c : null == o ? void 0 : o.objectType;
                        if (!e || !r || !a || !o || !_ || void 0 === t || void 0 === m || void 0 === v) return;
                        let g = void 0 !== s && void 0 !== a.blockPosY ? s + a.blockPosY : a.blockPosY,
                            p = {
                                hash: t,
                                pageId: _,
                                entityType: a.blockType,
                                entityId: a.blockId,
                                entityPosX: a.blockPosX,
                                entityPosY: g,
                                objectId: m,
                                objectType: v,
                                objectPosX: o.objectPosX,
                                objectPosY: o.objectPosY,
                                objectsCount: a.objectsCount,
                                from: _,
                                to: l,
                                mainObjectType: r.mainObjectType,
                                mainObjectId: r.mainObjectId,
                                tabId: null == n ? void 0 : n.tabId,
                                tabPos: null == n ? void 0 : n.tabPos,
                                isTabSelectedByDefault: null == n ? void 0 : n.isTabSelectedByDefault,
                            };
                        (u && (p.deepLink = u), Object.values(p).some((e) => void 0 === e) || (0, U.iF)(e.evgenInstance, p));
                    });
                }),
                X = (0, $.n)({ event: 'LandingBlock.Loaded', kind: 'hook', requiredScopes: ['screen', 'block', 'tab'] }, () => {
                    let e = (0, F.s)(),
                        { hash: t } = (0, Y.g)(),
                        { screen: r, block: a, tab: o } = (0, V.j)();
                    return (0, g.c)(() => {
                        let n = null == r ? void 0 : r.pageId;
                        if (!e || !r || !a || !n || void 0 === t) return;
                        let i = {
                            hash: t,
                            pageId: n,
                            tabId: null == o ? void 0 : o.tabId,
                            tabPos: null == o ? void 0 : o.tabPos,
                            entityType: a.blockType,
                            mainObjectType: r.mainObjectType,
                            mainObjectId: r.mainObjectId,
                            entityId: a.blockId,
                            entityPosX: a.blockPosX,
                            entityPosY: a.blockPosY,
                            isTabSelectedByDefault: null == o ? void 0 : o.isTabSelectedByDefault,
                            objectsCount: a.objectsCount,
                            pagePlacement: s.PagePlacements.Fullscreen,
                            pageStyle: s.PageStyles.Fullscreen,
                        };
                        Object.values(i).some((e) => void 0 === e) || (0, U.es)(e.evgenInstance, i);
                    });
                });
            var Z = r(61097),
                J = r(60902),
                Q = r(65315),
                ee = r.n(Q);
            let et = (0, n.PA)((e) => {
                    var t;
                    let { className: r, forwardRef: o, onCoverClick: n, concert: l, leadArtistId: d, cover: c, description: u } = e,
                        { formatMessage: _, formatDate: v } = (0, j.A)(),
                        { state: p, toggleTrue: f, toggleFalse: x } = (0, P.e)(!1),
                        b = G(),
                        D = (0, k.D)(),
                        M = X(),
                        W = (0, i.useRef)(!1),
                        q = (0, w.Y)()(l);
                    (0, i.useEffect)(() => {
                        W.current || (M(), (W.current = !0));
                    }, [M]);
                    let U = (0, g.c)((e) => {
                            (f(), null == e || e.stopPropagation());
                        }),
                        F = (0, g.c)((e) => {
                            (b({ to: s.AppScreen.ConcertPurchaseScreen }), U(e), e.preventDefault());
                        }),
                        Y = (0, g.c)(() => {
                            b({ to: s.AppScreen.ShareScreen });
                        }),
                        V = (0, g.c)(() => {
                            b({ to: s.AppScreen.ArtistScreen });
                        }),
                        { shareLink: $, pathname: K } = (0, A.b)('/concert/:concertId', { params: { concertId: l.id } }),
                        Q = { variant: L.Y.CONCERT, id: l.id, title: null != (t = l.title) ? t : '', path: K },
                        et = (0, h.L)(() =>
                            l.isIdentityExperimentEnabled
                                ? (0, a.jsxs)('div', {
                                      children: [
                                          (0, a.jsx)(T.HL, { className: ee().buttonPrice, variant: 'div', size: 'l', weight: 'medium', children: q }),
                                          l.cashbackValuePercent &&
                                              (0, a.jsx)(T.HL, {
                                                  className: ee().buttonCashback,
                                                  variant: 'div',
                                                  size: 'xs',
                                                  weight: 'medium',
                                                  children: (0, a.jsx)(y.A, { id: 'entity-names.cashback-percent', values: { value: l.cashbackValuePercent } }),
                                              }),
                                      ],
                                  })
                                : q,
                        ),
                        er = (0, h.L)(() => {
                            let e = l.isIdentityExperimentEnabled ? 'l' : 's',
                                t = l.isIdentityExperimentEnabled ? 'm' : 'xxs';
                            return (0, a.jsxs)('div', {
                                className: ee().controls,
                                children: [
                                    (0, a.jsx)(N.$, {
                                        'aria-hidden': !0,
                                        tabIndex: -1,
                                        radius: 'xxxl',
                                        className: (0, C.$)(ee().button, { [ee().button_redesigned]: l.isIdentityExperimentEnabled }),
                                        size: 's',
                                        variant: 'default',
                                        color: 'primary',
                                        onClick: F,
                                        'data-test-id': m.e8.pageHeader.CONCERT_BUY_TICKET_BUTTON,
                                        children: et,
                                    }),
                                    (0, a.jsx)(z, { onClick: Y, shareLink: $, entityMeta: Q, size: e, iconSize: t }),
                                ],
                            });
                        }),
                        ea = (0, i.useMemo)(() => {
                            var e;
                            return [
                                l.city,
                                l.place,
                                v(new Date(null != (e = l.datetime) ? e : ''), { day: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric' }),
                                l.contentRating,
                            ]
                                .filter(Boolean)
                                .join(' • ');
                        }, [l.city, l.place, l.datetime, l.contentRating, v]),
                        eo = (0, h.L)(() => {
                            if (!u) return;
                            let e = {
                                    title:
                                        l.isIdentityExperimentEnabled && l.eventKind
                                            ? _({ id: 'concerts.about-event-kind' }, { kind: l.eventKind })
                                            : _({ id: 'track-modal.concert-title' }),
                                    message: u.text,
                                    isExpandable: !0,
                                    visibleLinesCount: 3,
                                },
                                t = (0, h.L)(() => {
                                    if (!u.genre) return;
                                    let e = (0, a.jsx)(B.D, { children: u.genre });
                                    return (0, a.jsx)(R.O, {
                                        title: _({ id: 'track-modal.genre' }),
                                        infoDescription: e,
                                        'data-test-id': m.e8.pageHeader.CONCERT_GENRE_INFO_BLOCK,
                                    });
                                }),
                                r = (0, h.L)(() => {
                                    if (!l.contentRating) return;
                                    let e = (0, a.jsx)(B.D, { children: l.contentRating });
                                    return (0, a.jsx)(R.O, {
                                        title: _({ id: 'track-modal.content-rating' }),
                                        infoDescription: e,
                                        'data-test-id': m.e8.pageHeader.CONCERT_CONTENT_RATING_INFO_BLOCK,
                                    });
                                }),
                                o = (0, h.L)(() => {
                                    if (!u.source) return;
                                    let e = (0, a.jsx)(B.D, { children: u.source });
                                    return (0, a.jsx)(R.O, {
                                        title: _({ id: 'track-modal.source' }),
                                        infoDescription: e,
                                        'data-test-id': m.e8.pageHeader.CONCERT_SOURCE_INFO_BLOCK,
                                    });
                                }),
                                n = (0, a.jsxs)('div', { className: ee().bottomContent, children: [t, r, o] });
                            return (0, a.jsx)('div', {
                                className: ee().overview,
                                'data-test-id': m.e8.landing.OVERVIEW,
                                children: (0, a.jsx)(H.F, {
                                    modalClassName: (0, C.$)(ee().overviewModal, ee().important),
                                    textButton: _({ id: 'interface-actions.more-details' }),
                                    buttonClassName: (0, C.$)(ee().overviewButton, ee().important),
                                    messageModalClassName: ee().overviewMessageModal,
                                    messageClassName: ee().overviewMessage,
                                    creditsModal: n,
                                    meta: e,
                                    withShowButton: !0,
                                }),
                            });
                        }),
                        en = (0, i.useMemo)(
                            () =>
                                (0, a.jsxs)('div', {
                                    className: ee().meta,
                                    children: [
                                        ea &&
                                            (0, a.jsx)(T.HL, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'm',
                                                weight: 'medium',
                                                'data-test-id': m.e8.pageHeader.CONCERT_META_INFO,
                                                children: ea,
                                            }),
                                        !l.isIdentityExperimentEnabled && l.cashbackTitle && (0, a.jsx)(I.m, { className: ee().cashbackBadge, title: l.cashbackTitle }),
                                        eo,
                                    ],
                                }),
                            [l.cashbackTitle, l.isIdentityExperimentEnabled, ea, eo],
                        ),
                        ei = (0, h.L)(() => {
                            if (!d) return;
                            let { href: e } = (0, S.u)('/artist/:artistId', { params: { artistId: d } });
                            return e;
                        }),
                        es = l.isIdentityExperimentEnabled && l.eventKind ? _({ id: 'concerts.event-kind' }, { kind: l.eventKind }) : '';
                    return (0, a.jsxs)('div', {
                        ref: D,
                        className: (0, C.$)(ee().root, ee().important),
                        children: [
                            (0, a.jsx)(Z.k, {
                                onTitleLinkClick: V,
                                linkTitle: ei,
                                ref: o,
                                className: (0, C.$)(r, ee().root, ee().important),
                                infoClassName: ee().info,
                                titleClassName: ee().title,
                                entityName: es,
                                title: l.title || '',
                                meta: en,
                                coverCellClassName: (0, C.$)(ee().coverCell, ee().important),
                                cover: (0, a.jsx)(J.I, {
                                    buttonClassName: (0, C.$)(ee().coverButton, ee().important),
                                    className: ee().cover,
                                    onClick: n,
                                    'aria-label': n ? _({ id: 'slider.view-concert-covers' }) : void 0,
                                    customCover: (0, a.jsx)(O.W, {
                                        datetime: l.datetime,
                                        coverColor: null == c ? void 0 : c.color,
                                        uri: null == c ? void 0 : c.uri,
                                        withMask: !0,
                                    }),
                                }),
                                controls: er,
                                headingVariant: 'h1',
                            }),
                            (0, a.jsx)(E.h, { dataSessionId: l.dataSessionId, isOpened: p, onOpen: f, onClose: x }),
                        ],
                    });
                }),
                er = (0, i.forwardRef)((e, t) => (0, a.jsx)(et, { forwardRef: t, ...e }));
            var ea = r(32596),
                eo = r(3685),
                en = r(69630),
                ei = r(98427),
                es = r(27054),
                el = r(50327),
                ed = r(44230),
                ec = r(37670),
                eu = r(72288),
                e_ = r(97956),
                em = r(86790),
                ev = r(60266),
                eg = r(93317),
                ep = r(6474),
                eh = r.n(ep);
            let ef = (0, n.PA)((e) => {
                    var t, r;
                    let { concertId: n } = e,
                        {
                            experiments: _,
                            concert: C,
                            modals: { imageSliderModal: j },
                        } = (0, eu.g)();
                    (0, l.u)();
                    let { setContentScrollRef: y, contentScrollRef: k } = (0, ed.g)(),
                        { forceUpdateRefCallback: P, offsetY: N } = (0, p.G)(k),
                        T = (0, el.y)(null == (r = C.covers) || null == (t = r[0]) ? void 0 : t.color),
                        { topColorStyle: H, headerStyle: w } = (0, eo.Q)(T, N),
                        E = (0, g.c)(() => {
                            C.coversUri.length > 0 && j.openImages({ images: C.coversUri, sizeImage: 800, withAspectRatio: !1 });
                        }),
                        I = _.checkExperiment(e_.z.WebNextConcertPage, 'on');
                    ((0, es.A)(),
                        (0, i.useEffect)(
                            () => () => {
                                C.reset();
                            },
                            [C, n],
                        ),
                        (0, ec.J)(C.isResolved));
                    let O = [];
                    if (
                        (C.isNeededToLoad && O.push(C.getInfo({ concertId: n })),
                        C.landing.isNeededToLoad && O.push(C.landing.getConcertSkeleton({ concertId: n, skeletonId: v.p.CONCERT_PAGE }, { preloadBlocksCount: 2 })),
                        O.length && (0, i.use)(Promise.allSettled(O)),
                        (!I || C.isNotFound) && (0, o.notFound)(),
                        C.isRejected)
                    )
                        return (0, a.jsx)(ea.SomethingWentWrong, {});
                    let R = (0, h.L)(() => {
                        var e, t;
                        return C.isLoading || !C.meta || C.isRejected
                            ? (0, a.jsx)(b.c, { className: eh().header, isActive: !0 })
                            : (0, a.jsx)(d.B, {
                                  objectType: s.DomainObjectType.Concert,
                                  objectId: null == (e = C.meta) ? void 0 : e.id,
                                  objectPosX: 1,
                                  objectPosY: 1,
                                  children: (0, a.jsx)(er, {
                                      description: C.description,
                                      onCoverClick: E,
                                      leadArtistId: C.leadArtistId,
                                      ref: P,
                                      className: eh().header,
                                      concert: C.meta,
                                      cover: null == (t = C.covers) ? void 0 : t[0],
                                  }),
                              });
                    });
                    return (0, a.jsxs)(en.h, {
                        scrollElement: k,
                        children: [
                            (0, a.jsx)(eg.Y, { style: w, variant: eg.V.INNER, showControls: !1 }),
                            (0, a.jsx)('div', { className: eh().averageColorBackground, style: H }),
                            (0, a.jsxs)(f.N, {
                                ref: y,
                                className: eh().root,
                                containerClassName: eh().container,
                                'data-test-id': m.Xk.concert.CONCERT_PAGE,
                                children: [
                                    (0, a.jsxs)('div', {
                                        children: [
                                            (0, a.jsx)(c.h, {
                                                tabId: '',
                                                tabPos: 0,
                                                isTabSelectedByDefault: !1,
                                                children: (0, a.jsx)(u.F, {
                                                    blockId: s.EntityTypes.ConcertHeader,
                                                    blockType: s.EntityTypes.ConcertHeader,
                                                    blockPosX: 1,
                                                    blockPosY: 1,
                                                    objectsCount: 1,
                                                    children: R,
                                                }),
                                            }),
                                            (0, a.jsx)(x.E, {
                                                containerClassName: eh().skeleton,
                                                landing: C.landing,
                                                errorComponent: (0, a.jsx)(ea.SomethingWentWrong, { className: eh().error, withBackwardControl: !1 }),
                                            }),
                                        ],
                                    }),
                                    (0, a.jsx)(ev.A, { children: (0, a.jsx)(em.w, { className: eh().footer }) }),
                                ],
                            }),
                        ],
                    });
                }),
                ex = (0, n.PA)((e) =>
                    (0, a.jsx)(_.a, {
                        pageId: s.AppScreen.ConcertScreen,
                        pageIdForFrom: ei.b.CONCERT,
                        mainObjectId: e.concertId,
                        mainObjectType: s.DomainObjectType.Concert,
                        children: (0, a.jsx)(ef, { ...e }),
                    }),
                ),
                eb = () => {
                    let e = (0, o.useSearchParams)().get('concertId');
                    return (e || (0, o.notFound)(), (0, a.jsx)(ex, { concertId: e }));
                };
        },
        3685: (e, t, r) => {
            'use strict';
            r.d(t, { Q: () => o });
            var a = r(53548);
            let o = (e, t) => ({
                topColorStyle: (0, a.useMemo)(() => {
                    if (void 0 === t) return;
                    let r = t - 17;
                    return { '--average-color-background': e, transform: 'translateY('.concat(t >= 17 ? 0 : r, 'px)'), opacity: 1 };
                }, [t, e]),
                headerStyle: (0, a.useMemo)(() => ({ '--average-color-background': e }), [e]),
            });
        },
        6474: (e) => {
            e.exports = {
                root: 'ConcertPage_root__pqTvU',
                averageColorBackground: 'ConcertPage_averageColorBackground__wj67a',
                header: 'ConcertPage_header__FxHk1',
                container: 'ConcertPage_container__ca9h4',
                footer: 'ConcertPage_footer____Dnb',
                skeleton: 'ConcertPage_skeleton__8aWkf',
                error: 'ConcertPage_error__gcEp_',
            };
        },
        7628: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => m });
            var a = r(88800),
                o = r(88969),
                n = r(58390),
                i = r(17392),
                s = r(29993),
                l = r(96817),
                d = r(29504),
                c = r(99890),
                u = r(4086),
                _ = r(41928);
            let m = (e) => {
                let { size: t = 'm', variant: r = 'default', color: m = 'primary', withRipple: v = !0, buttonText: g, isBlock: p, key: h, className: f } = e,
                    x = (0, n.useRouter)(),
                    b = (0, _.N)().get(u.QG),
                    C = (0, s.c)(() => {
                        b.authorizationUrl && ((0, c.uV)({ stage: 'attempt-start', trigger: 'user' }), x.push(b.authorizationUrl));
                    });
                return (0, a.jsx)(
                    l.$,
                    {
                        onClick: C,
                        className: f,
                        isBlock: p,
                        color: m,
                        variant: r,
                        size: t,
                        radius: 'xxxl',
                        withRipple: v,
                        'data-test-id': i.S7.UNAUTHORIZED_BUTTON,
                        children: g || (0, a.jsx)(d.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, a.jsx)(o.A, { id: 'authorization.enter-button' }) }),
                    },
                    h,
                );
            };
        },
        12479: (e) => {
            e.exports = { root: 'InfoBlock_root__2D2Mj', infoTitle: 'InfoBlock_infoTitle___At72', link: 'InfoBlock_link__iA21Q' };
        },
        16472: (e) => {
            e.exports = {
                root: 'PageHeaderShimmer_root__kqSwa',
                cover: 'PageHeaderShimmer_cover__ay2cr',
                content: 'PageHeaderShimmer_content__SdBKK',
                info: 'PageHeaderShimmer_info__cZkS2',
                entityName: 'PageHeaderShimmer_entityName__tlWnA',
                title: 'PageHeaderShimmer_title__xKG4e',
                meta: 'PageHeaderShimmer_meta__YWx0m',
                controls: 'PageHeaderShimmer_controls__gPErM',
                desktopPlayButton: 'PageHeaderShimmer_desktopPlayButton__R7EmH',
                button: 'PageHeaderShimmer_button__13qrG',
            };
        },
        26756: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => c });
            var a = r(88800),
                o = r(84961),
                n = r(29504),
                i = r(72288),
                s = r(91292),
                l = r(12479),
                d = r.n(l);
            let c = (0, o.PA)((e) => {
                let { children: t, href: r, className: o } = e,
                    {
                        currentTrackInfo: { modal: l },
                    } = (0, i.g)();
                return r
                    ? (0, a.jsx)(s.N, {
                          className: d().link,
                          href: r,
                          onClick: l.close,
                          children: (0, a.jsx)(n.HL, { className: o, variant: 'div', size: 'l', children: t }),
                      })
                    : (0, a.jsx)(n.HL, { className: o, variant: 'div', size: 'l', children: t });
            });
        },
        27054: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => u });
            var a = r(53548),
                o = r(97234),
                n = r(59714),
                i = r(43054),
                s = r(18117),
                l = r(93940),
                d = r(24709),
                c = r(29993);
            let u = (0, d.n)({ event: 'Screen.Navigated', kind: 'hook', requiredScopes: ['screen'] }, function () {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { autoSend: r = !0 } = t,
                    d = null == (e = (0, i.s)()) ? void 0 : e.evgenInstance,
                    { hash: u } = (0, s.g)(),
                    { screen: _ } = (0, l.j)(),
                    m = null == _ ? void 0 : _.pageId,
                    v = (0, c.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (
                            !d ||
                            !m ||
                            !u ||
                            !(() => {
                                for (let [e, t] of new URLSearchParams(window.location.search))
                                    if ((e.startsWith('utm_') || 'ref_id' === e) && '' !== t.trim()) return !0;
                                return !1;
                            })()
                        )
                            return;
                        let t = {
                            hash: u,
                            pageId: o.AppScreen.Link,
                            entityType: o.EntityTypes.Deeplink,
                            entityId: o.EntityTypes.Deeplink,
                            from: o.AppScreen.Link,
                            to: m,
                            deepLink: null != e ? e : window.location.href,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, n.ID)(d, t);
                    });
                return (
                    (0, a.useEffect)(() => {
                        r && v();
                    }, [r, v]),
                    (0, c.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        r || v({ deepLink: e });
                    })
                );
            });
        },
        33169: (e, t, r) => {
            'use strict';
            r.d(t, { R: () => j });
            // for PulseSync WebHost: BEGIN imports for native addon header title items
            var pulseSyncHeaderReact = r(53548),
                pulseSyncHeaderJsx = r(88800),
                pulseSyncHeaderText = r(29504),
                pulseSyncHeaderIcon = r(52300);

            // for PulseSync WebHost: END imports for native addon header title items
            var a = r(88800),
                o = r(65724),
                n = r(84961),
                i = r(53548),
                s = r(2058),
                l = r(17392),
                d = r(29993),
                c = r(79070),
                u = r(96817),
                _ = r(52300),
                m = r(29504),
                v = r(63807);
            let g = (e) => {
                let { children: t, title: r, className: o } = e,
                    { setTitleElement: n, setTitle: s } = (0, i.useContext)(v.B),
                    l = (0, i.useRef)(null);
                return (
                    (0, i.useEffect)(() => {
                        ((null == l ? void 0 : l.current) && n(l), r && s(r));
                    }, [l, r, n, s]),
                    (0, i.useEffect)(
                        () => () => {
                            s('');
                        },
                        [s],
                    ),
                    (0, a.jsx)('div', { ref: l, className: o, children: t })
                );
            };
            var p = r(78940),
                h = r(72288),
                f = r(91292),
                x = r(59378),
                b = r(48100),
                C = r.n(b);
            let j = (0, n.PA)((e) => {
                // for PulseSync WebHost: BEGIN refresh header titles when native addon slots change
                let [, pulseSyncSetHeaderSlotRevision] = (0, pulseSyncHeaderReact.useState)(0);
                (0, pulseSyncHeaderReact.useEffect)(() => {
                    const onNativeSlotChange = (e) => {
                        if (e.detail === 'headerTitleItems') pulseSyncSetHeaderSlotRevision((e) => e + 1);
                    };
                    document.addEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                    return () => document.removeEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                }, []);

                // for PulseSync WebHost: END refresh header titles when native addon slots change
                let {
                        title: t = '',
                        'aria-labelledby': r,
                        canChange: n = !1,
                        onChange: v,
                        maxTitleLength: b,
                        version: j = '',
                        onVersionClick: y,
                        className: k,
                        headingVariant: P = 'h2',
                        withHeadingClamp: N = !0,
                        link: T,
                        onTitleLinkClick: H,
                    } = e,
                    {
                        settings: { isMobile: w },
                    } = (0, h.g)(),
                    { formatMessage: E } = (0, s.A)(),
                    [I, O] = (0, i.useState)(!1),
                    R = (0, i.useRef)(null),
                    B = t.length + j.length > 25,
                    L = (0, p.Z)(null != T ? T : ''),
                    S = (0, d.c)((e) => {
                        (null == H || H(), L(e));
                    }),
                    A = (0, i.useMemo)(
                        () =>
                            w
                                ? { font: C().font_mobile, iconLink: C().arrowWrapper_mobile }
                                : B
                                  ? { font: C().font_long, iconLink: C().arrowWrapper_long }
                                  : { font: C().font_short, iconLink: C().arrowWrapper_short },
                        [w, B],
                    ),
                    D = !w && n && I,
                    M = (0, i.useCallback)(() => {
                        var e;
                        (O(!0), null == (e = R.current) || e.focus());
                    }, []),
                    W = (0, i.useCallback)(
                        (e) => {
                            (O(!1), null == v || v(e));
                        },
                        [v],
                    ),
                    q = (0, c.L)(() =>
                        (0, a.jsx)('span', {
                            className: (0, o.$)(C().arrowWrapper, A.iconLink),
                            children: (0, a.jsx)(_.I, { className: C().titleWithLinkIcon, size: 'xs', variant: 'arrowRight' }),
                        }),
                    ),
                    z = (0, c.L)(() =>
                        (0, a.jsxs)(m.DZ, {
                            variant: P,
                            id: r,
                            lineClamp: w && N ? 2 : void 0,
                            className: (0, o.$)(C().heading, { [C().heading_withVersion]: j }),
                            'data-test-id': l.e8.pageHeader.ENTITY_TITLE,
                            children: [
                                (0, a.jsx)(m.HL, { className: (0, o.$)(C().font, A.font, C().title), variant: 'span', children: t }),
                                j &&
                                    (0, a.jsx)(m.HL, {
                                        onClick: y,
                                        className: (0, o.$)(C().font, A.font, C().version, { [C().version_withOtherVersions]: y }),
                                        variant: 'span',
                                        'data-test-id': l.e8.pageHeader.ENTITY_VERSION,
                                        children: ' '.concat(j),
                                    }),
                                T && !w && q,
                            ],
                        }),
                    ),
                    U = (0, c.L)(() =>
                        T
                            ? (0, a.jsxs)(f.N, {
                                  className: C().titleWithLink,
                                  containerClassName: C().linkContainer,
                                  textClassName: C().linkText,
                                  href: T,
                                  onClick: S,
                                  children: [z, w && q],
                              })
                            : z,
                    );
                // for PulseSync WebHost: BEGIN render native addon items beside header titles
                const pulseSyncInjectHeaderTitleItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('headerTitleItems', items, {
                        eventDetail: null,
                        renderItem: ({ key, payload, positionIndex }) => {
                            const text = String(payload?.text ?? '').trim(),
                                icon = String(payload?.icon ?? '').trim(),
                                label = String(payload?.label ?? text).trim();
                            if (!text && !icon) return null;
                            return (0, pulseSyncHeaderJsx.jsxs)(
                                pulseSyncHeaderText.HL,
                                {
                                    variant: 'span',
                                    type: 'text',
                                    size: 's',
                                    weight: 'medium',
                                    ...(label
                                        ? {
                                              'aria-label': label,
                                          }
                                        : {}),
                                    'data-pulsesync-addon-header-item': 'title',
                                    children: [
                                        icon &&
                                            (0, pulseSyncHeaderJsx.jsx)(pulseSyncHeaderIcon.I, {
                                                variant: icon,
                                                size: 'xxs',
                                            }),
                                        text,
                                    ],
                                },
                                key,
                            );
                        },
                    }) ?? items;
                // for PulseSync WebHost: END render native addon items beside header titles
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        !D &&
                            (0, a.jsxs)('div', {
                                className: (0, o.$)(C().root, k),
                                // for PulseSync WebHost: BEGIN inject native addon items into the header title
                                children: pulseSyncInjectHeaderTitleItems([
                                    (0, a.jsx)(g, { title: t, className: C().stickyTitle, children: U }),
                                    n &&
                                        (0, a.jsx)('div', {
                                            className: (0, o.$)(C().editButton, { [C().editButton_centered]: !B && !w }),
                                            children: (0, a.jsx)(u.$, {
                                                onClick: M,
                                                'aria-label': E({ id: 'playlist-actions.change-title' }),
                                                icon: (0, a.jsx)(_.I, { size: 'xxs', variant: 'pencil' }),
                                                size: 's',
                                                radius: 'round',
                                                'data-test-id': l.e8.pageHeader.EDIT_TITLE_BUTTON,
                                            }),
                                        }),
                                ]),
                                // for PulseSync WebHost: END inject native addon items into the header title
                            }),
                        D &&
                            (0, a.jsx)('div', {
                                className: C().textFieldContainer,
                                children: (0, a.jsx)(x.A, {
                                    text: t,
                                    className: (0, o.$)(C().font, A.font, C().textField, C().title, { [C().textField_long]: B && !w }),
                                    onChangeFinish: W,
                                    maxTextLength: b,
                                    minTextLength: 1,
                                    placeholder: E({ id: 'playlist-actions.enter-title' }),
                                    shouldFinishOnKeyPress: !0,
                                    withOutline: !0,
                                }),
                            }),
                    ],
                });
            });
        },
        36232: (e) => {
            e.exports = {
                root_hoverable: 'PageHeaderCover_root_hoverable__WF_BH',
                coverImage: 'PageHeaderCover_coverImage__i0wBv',
                coverImage_hoverable: 'PageHeaderCover_coverImage_hoverable__9XZK7',
                coverButton: 'PageHeaderCover_coverButton__3zeub',
                coverButton_hoverable: 'PageHeaderCover_coverButton_hoverable__hS1Gq',
                plusBadge: 'PageHeaderCover_plusBadge__O09t4',
            };
        },
        38053: (e, t, r) => {
            'use strict';
            r.d(t, { O: () => d });
            var a = r(88800),
                o = r(65724),
                n = r(35412),
                i = r(29504),
                s = r(12479),
                l = r.n(s);
            let d = (e) => {
                let { title: t, className: r, titleClassName: s, infoDescription: d, ...c } = e;
                return (0, a.jsxs)('div', {
                    className: (0, o.$)(l().root, r),
                    ...(0, n.OZ)(c),
                    children: [t && (0, a.jsx)(i.DZ, { variant: 'h4', className: (0, o.$)(l().infoTitle, s), children: t }), d],
                });
            };
        },
        41617: (e, t, r) => {
            'use strict';
            r.d(t, { E: () => a });
            let a = (0, r(53548).createContext)({ offsetBlockPosY: void 0 });
        },
        48100: (e) => {
            e.exports = {
                root: 'PageHeaderTitle_root__ESu2q',
                editButton: 'PageHeaderTitle_editButton__KF4eh',
                editButton_centered: 'PageHeaderTitle_editButton_centered__W9EwU',
                textField: 'PageHeaderTitle_textField__LXJ3X',
                textField_long: 'PageHeaderTitle_textField_long__ReeJz',
                title: 'PageHeaderTitle_title__caKyB',
                version: 'PageHeaderTitle_version__g5BeO',
                version_withOtherVersions: 'PageHeaderTitle_version_withOtherVersions__Amfwk',
                heading: 'PageHeaderTitle_heading__UADXi',
                heading_withVersion: 'PageHeaderTitle_heading_withVersion__jw12r',
                textFieldContainer: 'PageHeaderTitle_textFieldContainer__FSD_B',
                font_long: 'PageHeaderTitle_font_long__q9Leq',
                font_short: 'PageHeaderTitle_font_short__76VRG',
                font_mobile: 'PageHeaderTitle_font_mobile__M1__v',
                stickyTitle: 'PageHeaderTitle_stickyTitle__CL1m4',
                titleWithLinkIcon: 'PageHeaderTitle_titleWithLinkIcon__mBP_B',
                titleWithLink: 'PageHeaderTitle_titleWithLink__pJZN5',
                linkContainer: 'PageHeaderTitle_linkContainer__KUyIF',
                linkText: 'PageHeaderTitle_linkText__rSUmw',
                arrowWrapper: 'PageHeaderTitle_arrowWrapper__cadS3',
                arrowWrapper_long: 'PageHeaderTitle_arrowWrapper_long__xhAjB',
                arrowWrapper_short: 'PageHeaderTitle_arrowWrapper_short__45ema',
                arrowWrapper_mobile: 'PageHeaderTitle_arrowWrapper_mobile__iYnjq',
            };
        },
        50327: (e, t, r) => {
            'use strict';
            r.d(t, { y: () => i });
            var a = r(35412),
                o = r(8655),
                n = r(69704);
            let i = (e) => {
                let { theme: t } = (0, n.W)();
                if (e) {
                    let { r, g: n, b: i } = (0, a.E2)(e),
                        s = t === o.S.Light ? 0.15 : 0.7;
                    return 'rgba('.concat(r, ', ').concat(n, ', ').concat(i, ', ').concat(s, ')');
                }
            };
        },
        58105: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => c });
            var a,
                o = r(14022),
                n = r(53548),
                i = {
                    8612: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0));
                        let a = r(352),
                            o = r(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: r, throttleTimeout: n } = e,
                                i = (0, o.useRef)(null),
                                [s, l] = (0, o.useState)(!!r),
                                d = (0, o.useMemo)(
                                    () =>
                                        (0, a.throttle)(() => {
                                            (l(!r),
                                                i.current && window.clearTimeout(i.current),
                                                (i.current = window.setTimeout(() => {
                                                    l(!!r);
                                                }, t)));
                                        }, n),
                                    [t, r, n],
                                ),
                                c = (0, o.useCallback)(() => {
                                    (l(!!r), i.current && window.clearTimeout(i.current));
                                }, [r]);
                            return (
                                (0, o.useEffect)(
                                    () => () => {
                                        i.current && window.clearTimeout(i.current);
                                    },
                                    [],
                                ),
                                { state: s, handleDebouncedToggle: d, reset: c }
                            );
                        };
                    },
                    3940: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useForceUpdateRef = void 0));
                        let a = r(810);
                        t.useForceUpdateRef = () => {
                            let [e, t] = (0, a.useState)(null);
                            return [
                                e,
                                (0, a.useCallback)((e) => {
                                    t((t) => (t !== e ? e : t));
                                }, []),
                            ];
                        };
                    },
                    3830: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useScroll = void 0));
                        let a = r(810),
                            o = r(1848),
                            n = r(8612);
                        t.useScroll = (e) => {
                            let { onScroll: t, listenIsScrolling: r, elementRef: i } = e,
                                { state: s, handleDebouncedToggle: l } = (0, n.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                                d = (0, a.useCallback)(() => {
                                    (r && l(), null == t || t());
                                }, [r, l, t]);
                            return (
                                (0, a.useEffect)(() => {
                                    let e = (0, o.getElementFromRefOrElement)(i);
                                    if (null === e) return;
                                    let t = null != e ? e : window,
                                        r = { capture: !0, passive: !0 };
                                    return (t.addEventListener('scroll', d, r), () => t.removeEventListener('scroll', d, r));
                                }, [i, d]),
                                s
                            );
                        };
                    },
                    1848: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            }));
                    },
                    352: (e) => {
                        e.exports = o;
                    },
                    810: (e) => {
                        e.exports = a || (a = r.t(n, 2));
                    },
                },
                s = {};
            function l(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var r = (s[e] = { exports: {} });
                return (i[e](r, r.exports, l), r.exports);
            }
            var d = {};
            ((() => {
                (Object.defineProperty(d, '__esModule', { value: !0 }), (d.useElementOffsetY = void 0));
                let e = l(810),
                    t = l(3830),
                    r = l(3940);
                d.useElementOffsetY = (a) => {
                    let [o, n] = (0, r.useForceUpdateRef)(),
                        [i, s] = (0, e.useState)(),
                        l = (0, e.useCallback)(() => {
                            let e = null == o ? void 0 : o.getBoundingClientRect();
                            e && s(e.y);
                        }, [o]);
                    return ((0, e.useLayoutEffect)(l), (0, t.useScroll)({ onScroll: l, elementRef: a }), { forceUpdateRefCallback: n, offsetY: i });
                };
            })(),
                d.__esModule);
            var c = d.useElementOffsetY;
        },
        60902: (e, t, r) => {
            'use strict';
            r.d(t, { I: () => _ });
            var a = r(88800),
                o = r(65724),
                n = r(17392),
                i = r(96817),
                s = r(52300),
                l = r(7555),
                d = r(81877),
                c = r(36232),
                u = r.n(c);
            let _ = (e) => {
                let { coverVariant: t, coverUri: r, isAvailable: c, className: _, withPlusBadge: m, onClick: v, 'aria-label': g, customCover: p, buttonClassName: h } = e;
                return (0, a.jsxs)(l.t, {
                    radius: 'round' === t ? 'round' : 'm',
                    className: (0, o.$)(u().root, _, { [u().root_hoverable]: !!v }),
                    children: [
                        (0, a.jsx)(i.$, {
                            className: (0, o.$)(u().coverButton, h),
                            onClick: v,
                            'aria-label': g,
                            tabIndex: v ? 0 : -1,
                            disabled: !v,
                            'data-test-id': n.S7.ENTITY_COVER_BUTTON,
                            children: p || (0, a.jsx)(d.B, { fit: 'cover', src: r, size: 300, className: u().coverImage, withAvatarReplace: !0, isAvailable: c }),
                        }),
                        m && (0, a.jsx)(s.I, { variant: 'plusBadge', className: u().plusBadge }),
                    ],
                });
            };
        },
        61097: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => w });
            // for PulseSync WebHost: BEGIN imports for native addon header action buttons and tooltips
            var pulseSyncHeaderReact = r(53548),
                pulseSyncHeaderJsx = r(88800),
                pulseSyncHeaderText = r(29504),
                pulseSyncHeaderIcon = r(52300),
                pulseSyncHeaderButton = r(96817),
                pulseSyncHeaderTooltip = r(94398);

            // for PulseSync WebHost: END imports for native addon header action buttons and tooltips
            var a = r(88800),
                o = r(65724),
                n = r(84961),
                i = r(53548),
                s = r.t(i, 2),
                l = r(88969),
                d = r(17392),
                c = r(50408),
                u = r(52300),
                _ = {
                    5881: (e, t, r) => {
                        function a() {
                            for (var e, t, r = 0, a = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            a,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (a = e(t[r])) && (o && (o += ' '), (o += a));
                                            else for (r in t) t[r] && (o && (o += ' '), (o += r));
                                        return o;
                                    })(e)) &&
                                    (a && (a += ' '), (a += t));
                            return a;
                        }
                        (r.r(t), r.d(t, { clsx: () => a, default: () => o }));
                        let o = a;
                    },
                    4353: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => a }));
                        let a = { root: 'LizdJ2L0HW7JWOvPrfly' };
                    },
                    1246: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => a }));
                        let a = {
                            root_controls_xxs: 'tRaaBpDMg9Qu8v6gKjtn',
                            root_entity_xxs: 'M9zvtlcpLUVn6DKdcHhj',
                            root_text_xxs: 'ln0PYYwDmFnfYxCDJsFU',
                            root_controls_xs: 'n5AeWEsJC3_AYXcbK4Lt',
                            root_entity_xs: '__hrMKGmNbw54T54IUyh',
                            root_text_xs: 'SehSa7OyRpC2nzYTVb2Q',
                            root_controls_s: '_oBLf5gprWsKjCw4Ce58',
                            root_entity_s: 'mxSPe5xpZnie9gpIqacd',
                            root_text_s: 'Ai2iRN9elHpk_u5splD6',
                            root_controls_m: 'tk7ahHRDYXJMMB879KUA',
                            root_entity_m: 'Z_WIr2W8JU4MPQek3hgR',
                            root_text_m: 'g3qWNP6xl__7qxNmtrvd',
                            root_controls_l: 'grvxapJE3vGArOKDWf6n',
                            root_entity_l: 'Esj5A1UeSi4xV4tZ839D',
                            root_text_l: 'V3WU123oO65AxsprotU9',
                            root_weight_normal: 'ZYV27jeWd30QDXu4GhaH',
                            root_weight_medium: '_3_Mxw7Si7j2g4kWjlpR',
                            root_weight_bold: 'Vi7Rd0SZWqD17F0872TB',
                        };
                    },
                    2445: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => a }));
                        let a = {
                            root_size_xs: 'qJJ288377iHlWN_RXeEE',
                            root_size_s: '_sd8Q9d_Ttn0Ufe4ISWS',
                            root_size_m: 'Ctk8dbecq31Qh7isOJPQ',
                            root_size_l: 'M_Djh6ppIkCO3A2k_BTA',
                            root_size_xl: 'dtxlzGQMPAbM2MEndXWX',
                            root_size_xxl: 'IUb9XLplTAoZqne9rNUL',
                            root_size_xxxl: 'ZYZamUwql_rfFR4RpI2B',
                            root_size_xxxxl: 'ZBZyxow5njdq8z5dnRPY',
                            root_size_xxxxxl: 'WdvQQNwdDNCdRSwRkAtT',
                            root_weight_bold: 'nSU6fV9y80WrZEfafvww',
                            root_weight_black: 'KBeGPPK4DinQzAP41Y_N',
                        };
                    },
                    61: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => a }));
                        let a = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function a(e, t, a) {
                            var o = null;
                            if ((void 0 !== a && (o = '' + a), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var n in ((a = {}), t)) 'key' !== n && (a[n] = t[n]);
                            else a = t;
                            return { $$typeof: r, type: e, key: o, ref: void 0 !== (t = a.ref) ? t : null, props: a };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = a), (t.jsxs = a));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    2018: function (e, t, r) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        let o = r(4377),
                            n = r(5881),
                            i = r(8903),
                            s = a(r(4353));
                        t.Label = (e) => {
                            let { children: t, className: r, size: a = 's', ...l } = e;
                            return (0, o.jsx)(i.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: a,
                                lineClamp: 1,
                                className: (0, n.clsx)(s.default.root, r),
                                ...l,
                                children: t,
                            });
                        };
                    },
                    3412: function (e, t, r) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let o = r(4377),
                            n = r(5881),
                            i = r(810),
                            s = r(5987),
                            l = a(r(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: r, type: a = 'text', size: i = 's', className: d, children: c, weight: u = 'medium', ..._ } = e;
                            return (0, o.jsx)(s.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, n.clsx)(l.default.root, l.default['root_'.concat(a, '_').concat(i)], l.default['root_weight_'.concat(u)], d),
                                ..._,
                                children: c,
                            });
                        }),
                            (t.Caption = (0, i.forwardRef)((e, r) => (0, o.jsx)(t.CaptionComponent, { forwardRef: r, ...e }))));
                    },
                    1641: function (e, t, r) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0));
                        let o = r(4377),
                            n = r(5881),
                            i = r(810),
                            s = r(5987),
                            l = a(r(2445));
                        ((t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: r, weight: a = 'bold', size: i = 's', className: d, children: c, ...u } = e;
                            return (0, o.jsx)(s.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, n.clsx)(l.default.root, l.default['root_size_'.concat(i)], l.default['root_weight_'.concat(a)], d),
                                ...u,
                                children: c,
                            });
                        }),
                            (t.Heading = (0, i.forwardRef)((e, r) => (0, o.jsx)(t.HeadingComponent, { forwardRef: r, ...e }))));
                    },
                    5987: function (e, t, r) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let o = r(4377),
                            n = r(5881),
                            i = r(810),
                            s = a(r(61));
                        function l(e) {
                            let { forwardRef: t, style: r, className: a, children: i, variant: l, lineClamp: d, ...c } = e,
                                u = d && 'string' == typeof i ? i : void 0;
                            return (0, o.jsx)(l, {
                                style: { ...r, WebkitLineClamp: d },
                                ref: t,
                                title: u,
                                className: (0, n.clsx)(
                                    s.default.root,
                                    { [s.default.root_clamp]: d && d > 0, [s.default.root_clamp_oneline]: d && 1 === d, [s.default.root_clamp_multiline]: d && d > 1 },
                                    a,
                                ),
                                ...c,
                                children: i,
                            });
                        }
                        ((t.TypographyComponent = l), (t.Typography = (0, i.forwardRef)((e, t) => (0, o.jsx)(l, { forwardRef: t, ...e }))));
                    },
                    8903: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.Caption = void 0));
                        var a = r(3412);
                        Object.defineProperty(t, 'Caption', {
                            enumerable: !0,
                            get: function () {
                                return a.Caption;
                            },
                        });
                        var o = r(1641);
                        Object.defineProperty(t, 'Heading', {
                            enumerable: !0,
                            get: function () {
                                return o.Heading;
                            },
                        });
                    },
                    810: (e) => {
                        e.exports = s;
                    },
                },
                m = {};
            function v(e) {
                var t = m[e];
                if (void 0 !== t) return t.exports;
                var r = (m[e] = { exports: {} });
                return (_[e].call(r.exports, r, r.exports, v), r.exports);
            }
            ((v.d = (e, t) => {
                for (var r in t) v.o(t, r) && !v.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (v.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (v.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var g = {};
            (() => {
                (Object.defineProperty(g, '__esModule', { value: !0 }), (g.Label = void 0));
                var e = v(2018);
                Object.defineProperty(g, 'Label', {
                    enumerable: !0,
                    get: function () {
                        return e.Label;
                    },
                });
            })();
            var p = g.Label;
            g.__esModule;
            var h = r(29504),
                f = r(44450),
                x = r(26e3),
                b = r(40210),
                C = r(86462),
                j = r(91051),
                y = r(7628),
                k = r(85904),
                P = r.n(k),
                N = r(33169);
            let T = 'entity-header-block-controls',
                H = (0, n.PA)((e) => {
                    // for PulseSync WebHost: BEGIN refresh header action buttons when native addon slots change
                    let [, pulseSyncSetHeaderSlotRevision] = (0, pulseSyncHeaderReact.useState)(0);
                    (0, pulseSyncHeaderReact.useEffect)(() => {
                        const onNativeSlotChange = (e) => {
                            if (e.detail === 'headerActions') pulseSyncSetHeaderSlotRevision((e) => e + 1);
                        };
                        document.addEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                        return () => document.removeEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                    }, []);

                    // for PulseSync WebHost: END refresh header action buttons when native addon slots change
                    let {
                            'aria-labelledby': t,
                            entityName: r,
                            title: n,
                            meta: s,
                            controls: _,
                            className: m,
                            forwardRef: v,
                            canChangeTitle: g = !1,
                            maxTitleLength: f,
                            onTitleChange: x,
                            cover: b,
                            version: k,
                            onVersionClick: H,
                            disclaimerLabel: w,
                            entityNameIcon: E,
                            headingVariant: I,
                            titleClassName: O,
                            metaClassName: R,
                            contentClassName: B,
                            withHeadingClamp: L,
                            entityNameClassName: S,
                            logo: A,
                            coverCellClassName: D,
                            infoClassName: M,
                            linkTitle: W,
                            onTitleLinkClick: q,
                            showMobileLoginButton: z,
                            showMobileSubscriptionButton: U,
                        } = e,
                        [F, Y] = (0, c.d)(),
                        {
                            openPaymentWidgetModal: V,
                            mainText: $,
                            mainTextA11y: K,
                            isShimmerActive: G,
                            isShimmerVisible: X,
                            oneClickAvailable: Z,
                            oneClickDisclaimerText: J,
                            oneClickDisclaimerTextA11y: Q,
                        } = (0, C.D)({ storeName: 'music', isEnabled: !!U, offerElement: { element: F, intersectionPropertyId: T } }),
                        ee = (0, i.useMemo)(
                            () =>
                                w
                                    ? (0, a.jsx)('div', {
                                          className: P().entityContainer,
                                          children: (0, a.jsx)(p, {
                                              size: 'm',
                                              className: P().disclaimerLabel,
                                              'data-test-id': d.e8.pageHeader.DISCLAIMER_LABEL,
                                              children: w,
                                          }),
                                      })
                                    : (0, a.jsxs)(h.HL, {
                                          variant: 'div',
                                          type: 'text',
                                          size: 'm',
                                          weight: 'medium',
                                          className: (0, o.$)(P().entityName, S),
                                          'data-test-id': d.e8.pageHeader.ENTITY_NAME,
                                          children: [r, E],
                                      }),
                            [w, r, S, E],
                        );
                    // for PulseSync WebHost: BEGIN render native addon header action buttons
                    const pulseSyncInjectHeaderActionsItems = (items) =>
                        window.pulsesyncApi?.injectNativeSlotItems?.('headerActions', items, {
                            eventDetail: null,
                            renderItem: ({ key, payload, activate }) => {
                                const label = String(payload?.label ?? '').trim(),
                                    description = String(payload?.description ?? '').trim(),
                                    icon = String(payload?.icon ?? '').trim();
                                if (!label || !icon) return null;
                                return (0, pulseSyncHeaderJsx.jsx)(
                                    pulseSyncHeaderTooltip.k,
                                    {
                                        title: label,
                                        ...(description
                                            ? {
                                                  description,
                                              }
                                            : {}),
                                        children: (0, pulseSyncHeaderJsx.jsx)(pulseSyncHeaderButton.$, {
                                            radius: 'round',
                                            size: 'xs',
                                            variant: 'text',
                                            withRipple: !1,
                                            'aria-label': label,
                                            icon: (0, pulseSyncHeaderJsx.jsx)(pulseSyncHeaderIcon.I, {
                                                variant: icon,
                                                size: 'xxs',
                                            }),
                                            onClick: activate,
                                            'data-pulsesync-addon-header-action': '',
                                        }),
                                    },
                                    key,
                                );
                            },
                        }) ?? items;
                    // for PulseSync WebHost: END render native addon header action buttons
                    return (0, a.jsxs)('div', {
                        className: (0, o.$)(
                            P().root,
                            { [P().root_withCover]: (0, i.isValidElement)(b), [P().root_withCoverAndLogo]: (0, i.isValidElement)(A) && (0, i.isValidElement)(b) },
                            m,
                        ),
                        ref: v,
                        'data-test-id': d.e8.pageHeader.ENTITY_HEADER,
                        children: [
                            b && (0, a.jsx)('div', { className: (0, o.$)(P().coverCell, D), children: b }),
                            (0, a.jsxs)('div', {
                                className: (0, o.$)(P().content, B),
                                children: [
                                    (0, a.jsxs)('div', {
                                        className: (0, o.$)(P().info, M),
                                        children: [
                                            ee,
                                            (0, a.jsx)(N.R, {
                                                onTitleLinkClick: q,
                                                link: W,
                                                className: (0, o.$)(P().title, O, { [P().title_withDisclaimerLabel]: !!w }),
                                                title: n,
                                                'aria-labelledby': t,
                                                canChange: g,
                                                maxTitleLength: f,
                                                onChange: x,
                                                version: k,
                                                onVersionClick: H,
                                                headingVariant: I,
                                                withHeadingClamp: L,
                                            }),
                                            !!s && (0, a.jsx)('div', { className: (0, o.$)(P().meta, { [P().meta_withDisclaimerLabel]: !!w }, R), children: s }),
                                        ],
                                    }),
                                    // for PulseSync WebHost: BEGIN inject native addon items into the header action group
                                    (0, a.jsx)('div', {
                                        className: P().controls,
                                        'data-test-id': d.e8.pageHeader.BASE_PAGE_HEADER_CONTROLS,
                                        children: pulseSyncInjectHeaderActionsItems(Array.isArray(_) ? _ : [_]),
                                    }),
                                    // for PulseSync WebHost: END inject native addon items into the header action group
                                    z &&
                                        (0, a.jsxs)('div', {
                                            className: P().buttonContainer,
                                            children: [
                                                (0, a.jsx)(y.H, {
                                                    size: 'l',
                                                    variant: 'default',
                                                    buttonText: (0, a.jsx)(l.A, { id: 'authorization.enter-and-listen-button' }),
                                                    className: P().loginButton,
                                                    'data-test-id': d.e8.pageHeader.UNAUTHORIZED_BUTTON,
                                                }),
                                                (0, a.jsxs)(h.HL, {
                                                    variant: 'div',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    className: P().bonusText,
                                                    children: [
                                                        (0, a.jsx)(u.I, { variant: 'gift', size: 'xxs', className: P().giftIcon }),
                                                        (0, a.jsx)(l.A, { id: 'payment.learn-personal-bonus' }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    U &&
                                        (0, a.jsxs)('div', {
                                            className: P().buttonContainer,
                                            children: [
                                                (0, a.jsx)(j.b, {
                                                    mainText: $,
                                                    ariaLabel: K,
                                                    mainTextFontSize: 'm',
                                                    ref: Y,
                                                    onClick: V,
                                                    isShimmerActive: G,
                                                    isShimmerVisible: X,
                                                    color: 'primary',
                                                    className: P().button,
                                                    'data-intersection-property-id': T,
                                                    'data-test-id': d.e8.pageHeader.FREEMIUM_BUTTON,
                                                }),
                                                Z &&
                                                    (0, a.jsx)(h.HL, {
                                                        variant: 'div',
                                                        size: 's',
                                                        weight: 'normal',
                                                        'aria-label': Q,
                                                        className: P().oneClickDisclaimerText,
                                                        'data-test-id': d.e8.pageHeader.DISCLAIMER_TEXT,
                                                        children: J,
                                                    }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, i.isValidElement)(A) && (0, a.jsx)('div', { className: P().logo, children: A }),
                        ],
                    });
                }),
                w = (0, i.forwardRef)((e, t) =>
                    (0, a.jsx)(f.r, { page: x.l.ENTITY_HEADER, places: [b.R.BOTTOM_BUTTON], children: (0, a.jsx)(H, { forwardRef: t, ...e }) }),
                );
        },
        65315: (e) => {
            e.exports = {
                root: 'PageHeaderConcert_root__zghAY',
                important: 'PageHeaderConcert_important__rx2pp',
                coverCell: 'PageHeaderConcert_coverCell__0ppUT',
                cover: 'PageHeaderConcert_cover__mJ4ml',
                controls: 'PageHeaderConcert_controls__7Ggou',
                button: 'PageHeaderConcert_button__zLikp',
                button_redesigned: 'PageHeaderConcert_button_redesigned__L2DSA',
                buttonCashback: 'PageHeaderConcert_buttonCashback__v8U65',
                buttonPrice: 'PageHeaderConcert_buttonPrice__z3YGF',
                meta: 'PageHeaderConcert_meta__5G1EX',
                cashbackBadge: 'PageHeaderConcert_cashbackBadge__HL7QW',
                info: 'PageHeaderConcert_info__wct3b',
                title: 'PageHeaderConcert_title__MoRyD',
                coverButton: 'PageHeaderConcert_coverButton__r79DU',
                bottomContent: 'PageHeaderConcert_bottomContent__d5YKQ',
                overview: 'PageHeaderConcert_overview__vbGCy',
                overviewButton: 'PageHeaderConcert_overviewButton__sXecu',
                overviewMessage: 'PageHeaderConcert_overviewMessage__q95AL',
                overviewMessageModal: 'PageHeaderConcert_overviewMessageModal__OlUO6',
                overviewModal: 'PageHeaderConcert_overviewModal__6Ubd0',
            };
        },
        66363: (e, t, r) => {
            'use strict';
            r.d(t, { NS: () => n, Nh: () => o, xW: () => i });
            var a = r(9519);
            let o = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
            class n {
                getHeaders(e) {
                    return e instanceof Headers ? Object.fromEntries(e.entries()) : e;
                }
                getUrl(e) {
                    return new URL(e || 'https://unknown');
                }
                constructor(e) {
                    ((0, a._)(this, 'logger', void 0),
                        (0, a._)(this, 'beforeRequestHook', (e) => {
                            let t = this.getUrl(e.url);
                            this.logger.info('[Resource] Request started '.concat(e.method, ' ').concat(t.origin, ' ').concat(t.pathname).concat(t.search), {
                                request: { method: e.method, url: e.url, headers: this.getHeaders(e.headers), body: e.json },
                            });
                        }),
                        (0, a._)(this, 'beforeRetryHook', (e, t) => {
                            let r = e.cause;
                            if (o(r)) {
                                var a, n, i, s, l, d, c, u, _, m, v, g, p, h;
                                let o = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (a = r.request) ? void 0 : a.method) || (null == (n = r.options) ? void 0 : n.method),
                                        url: (null == (i = r.request) ? void 0 : i.url) || (null == (s = r.options) ? void 0 : s.url),
                                        headers: this.getHeaders((null == (l = r.request) ? void 0 : l.headers) || (null == (d = r.options) ? void 0 : d.headers)),
                                        body: (null == (c = r.request) ? void 0 : c.json) || (null == (u = r.options) ? void 0 : u.json),
                                        retries: t,
                                    },
                                };
                                void 0 !== r.response &&
                                    (o.response = {
                                        statusCode: r.response.statusCode,
                                        headers: this.getHeaders(r.response.headers),
                                        time: null == (h = r.response.timings) || null == (p = h.phases) ? void 0 : p.total,
                                    });
                                let f = this.getUrl((null == (_ = r.request) ? void 0 : _.url) || (null == (m = r.options) ? void 0 : m.url));
                                this.logger.warn(
                                    '[Resource] Retry request '
                                        .concat((null == (v = r.request) ? void 0 : v.method) || (null == (g = r.options) ? void 0 : g.method), ' ')
                                        .concat(f.origin, ' ')
                                        .concat(f.pathname)
                                        .concat(f.search),
                                    o,
                                );
                            } else
                                this.logger.warn('[Resource] Retry request (unknown)', {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                });
                        }),
                        (0, a._)(this, 'afterResponseHook', (e) => {
                            if ((e.statusCode || e.status) >= 200 && 299 >= (e.statusCode || e.status)) {
                                var t, r;
                                let a = this.getUrl(e.url);
                                this.logger.info(
                                    '[Resource] Request resolved '
                                        .concat(e.statusCode, ' ')
                                        .concat(e.request.method, ' ')
                                        .concat(a.origin, ' ')
                                        .concat(a.pathname)
                                        .concat(a.search),
                                    {
                                        request: { method: e.request.method, url: e.url, headers: this.getHeaders(e.request.headers), body: e.request.body },
                                        response: {
                                            statusCode: e.statusCode || e.status,
                                            headers: this.getHeaders(e.headers),
                                            time: null == (r = e.timings) || null == (t = r.phases) ? void 0 : t.total,
                                        },
                                    },
                                );
                            }
                            return e;
                        }),
                        (0, a._)(this, 'beforeErrorHook', (e) => {
                            let t = e.cause;
                            if (o(t)) {
                                var r, a, n, i, s, l, d, c, u, _, m, v, g, p;
                                let o = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (r = t.request) ? void 0 : r.method) || (null == (a = t.options) ? void 0 : a.method),
                                        url: (null == (n = t.request) ? void 0 : n.url) || (null == (i = t.options) ? void 0 : i.url),
                                        headers: this.getHeaders((null == (s = t.request) ? void 0 : s.headers) || (null == (l = t.options) ? void 0 : l.headers)),
                                        body: (null == (d = t.request) ? void 0 : d.json) || (null == (c = t.options) ? void 0 : c.json),
                                    },
                                };
                                void 0 !== t.response &&
                                    (o.response = {
                                        statusCode: t.response.statusCode || t.response.status,
                                        headers: this.getHeaders(t.response.headers),
                                        time: null == (p = t.response.timings) || null == (g = p.phases) ? void 0 : g.total,
                                    });
                                let h = this.getUrl((null == (u = t.request) ? void 0 : u.url) || (null == (_ = t.options) ? void 0 : _.url));
                                this.logger.error(
                                    '[Resource] Request failed '
                                        .concat((null == (m = t.request) ? void 0 : m.method) || (null == (v = t.options) ? void 0 : v.method), ' ')
                                        .concat(h.origin, ' ')
                                        .concat(h.pathname)
                                        .concat(h.search, ', reason: ')
                                        .concat(e.name),
                                    o,
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
            (r(35412), r(69629));
            let i = [
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
        69629: (e) => {
            var t = Object.prototype.hasOwnProperty;
            function r(e) {
                return '[Throws: ' + (e ? e.message : '?') + ']';
            }
            function a(e) {
                var a = [];
                return (function e(o) {
                    if (null === o || 'object' != typeof o) return o;
                    if (-1 !== a.indexOf(o)) return '[Circular]';
                    if ((a.push(o), 'function' == typeof o.toJSON))
                        try {
                            var n = e(o.toJSON());
                            return (a.pop(), n);
                        } catch (e) {
                            return r(e);
                        }
                    if (Array.isArray(o)) {
                        var i = o.map(e);
                        return (a.pop(), i);
                    }
                    var s = Object.keys(o).reduce(function (a, n) {
                        return (
                            (a[n] = e(
                                (function (e, a) {
                                    if (t.call(e, a))
                                        try {
                                            return e[a];
                                        } catch (e) {
                                            return r(e);
                                        }
                                    return e[a];
                                })(o, n),
                            )),
                            a
                        );
                    }, {});
                    return (a.pop(), s);
                })(e);
            }
            ((e.exports = function (e, t, r) {
                return JSON.stringify(a(e), t, r);
            }),
                (e.exports.ensureProperties = a));
        },
        73419: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 886));
        },
        85904: (e) => {
            e.exports = {
                root: 'PageHeaderBase_root__xMIBu',
                root_withCover: 'PageHeaderBase_root_withCover__JIKxy',
                root_withCoverAndLogo: 'PageHeaderBase_root_withCoverAndLogo__nsTU2',
                logo: 'PageHeaderBase_logo__pD3fg',
                coverCell: 'PageHeaderBase_coverCell__nBx4c',
                content: 'PageHeaderBase_content___DNyv',
                info: 'PageHeaderBase_info__GRcah',
                entityContainer: 'PageHeaderBase_entityContainer__BDwxT',
                title_withDisclaimerLabel: 'PageHeaderBase_title_withDisclaimerLabel__Apuhc',
                entityName: 'PageHeaderBase_entityName__9Sj_Q',
                disclaimerLabel: 'PageHeaderBase_disclaimerLabel___2wo6',
                meta: 'PageHeaderBase_meta__bMvfR',
                meta_withDisclaimerLabel: 'PageHeaderBase_meta_withDisclaimerLabel__nxckS',
                controls: 'PageHeaderBase_controls__HzGgE',
                buttonContainer: 'PageHeaderBase_buttonContainer__Ad8ha',
                button: 'PageHeaderBase_button__lCrTR',
                bonusText: 'PageHeaderBase_bonusText__I43It',
                giftIcon: 'PageHeaderBase_giftIcon__uDQIG',
                oneClickDisclaimerText: 'PageHeaderBase_oneClickDisclaimerText__TGbFd',
            };
        },
        88894: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => u });
            var a = r(88800),
                o = r(65724),
                n = r(84961),
                i = r(53548),
                s = r(19994),
                l = r(72288),
                d = r(16472),
                c = r.n(d);
            let u = (0, n.PA)((e) => {
                let { className: t, coverRadius: r = 'm', isActive: n } = e,
                    {
                        settings: { isMobile: d },
                    } = (0, l.g)(),
                    u = (0, i.useMemo)(
                        () =>
                            d
                                ? (0, a.jsxs)('div', {
                                      className: c().controls,
                                      children: [
                                          (0, a.jsx)(s.W, { className: c().button, radius: 'round', isActive: n }),
                                          (0, a.jsx)(s.W, { className: c().button, radius: 'round', isActive: n }),
                                          (0, a.jsx)(s.W, { className: c().button, radius: 'round', isActive: n }),
                                      ],
                                  })
                                : (0, a.jsxs)('div', {
                                      className: c().controls,
                                      children: [
                                          (0, a.jsx)(s.W, { className: c().desktopPlayButton, isActive: n }),
                                          (0, a.jsx)(s.W, { className: c().button, radius: 'round', isActive: n }),
                                          (0, a.jsx)(s.W, { className: c().button, radius: 'round', isActive: n }),
                                          (0, a.jsx)(s.W, { className: c().button, radius: 'round', isActive: n }),
                                      ],
                                  }),
                        [n, d],
                    );
                return (0, a.jsxs)('div', {
                    className: (0, o.$)(c().root, t),
                    children: [
                        (0, a.jsx)(s.W, { className: c().cover, radius: r, isActive: n }),
                        (0, a.jsxs)('div', {
                            className: c().content,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: c().info,
                                    children: [
                                        (0, a.jsx)(s.W, { className: c().entityName, radius: 's', isActive: n }),
                                        (0, a.jsx)(s.W, { className: c().title, radius: 'xl', isActive: n }),
                                        (0, a.jsx)(s.W, { className: c().meta, radius: 's', isActive: n }),
                                    ],
                                }),
                                u,
                            ],
                        }),
                    ],
                });
            });
        },
        99890: (e, t, r) => {
            'use strict';
            r.d(t, { C8: () => n, UC: () => i, dM: () => s, uV: () => l });
            var a = r(89916),
                o = r(66363);
            let n = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                i = (e) => (e.uid ? 'authorized' : 'no-uid'),
                s = (e) => {
                    if (!(e instanceof a.m5) || !(0, o.Nh)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, o.Nh)(e.cause)) return;
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
    (e) => {
        (e.O(
            0,
            [
                9904, 6582, 7191, 3078, 918, 1833, 1191, 1041, 8194, 917, 4863, 1635, 2803, 2218, 1138, 893, 6252, 9192, 727, 3005, 8655, 7683, 6706, 4771, 1311, 5201,
                3075, 2662, 6904, 1898, 2058, 3578, 8628, 9780, 8283, 9332, 1223, 9027, 146, 9907, 4732, 9087, 3979, 6719, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441,
                6374, 2088, 8979, 818, 7053, 4322, 3300, 1372, 5823, 6820, 4244, 1960, 1401, 4394, 5772, 763, 2670, 7358,
            ],
            () => e((e.s = 73419)),
        ),
            (_N_E = e.O()));
    },
]);
