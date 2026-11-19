(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8979],
    {
        108: (t, e, i) => {
            'use strict';
            i.d(e, { $: () => r });
            var s = i(2058),
                a = i(61691);
            let r = (t, e) => {
                let { formatMessage: i } = (0, s.A)();
                if (t)
                    switch (e) {
                        case a._.AUDIOBOOK:
                            return i({ id: 'non-music.shelf-unsubscribe' });
                        case a._.FAIRY_TALE:
                            return i({ id: 'interface-actions.do-not-like' });
                        default:
                            return i({ id: 'interface-actions.subscribed' });
                    }
                switch (e) {
                    case a._.AUDIOBOOK:
                        return i({ id: 'non-music.shelf-subscribe' });
                    case a._.FAIRY_TALE:
                        return i({ id: 'interface-actions.like' });
                    default:
                        return i({ id: 'interface-actions.subscribe' });
                }
            };
        },
        5048: (t, e, i) => {
            'use strict';
            i.d(e, { b: () => r });
            var s = i(61691),
                a = i(15077);
            let r = (t) => {
                switch (t) {
                    case s._.PODCAST:
                        return a.c.PODCAST;
                    case s._.AUDIOBOOK:
                        return a.c.AUDIOBOOK;
                    case s._.FAIRY_TALE:
                        return a.c.FAIRY_TALE;
                    default:
                        return a.c.ALBUM;
                }
            };
        },
        13946: (t, e, i) => {
            'use strict';
            i.d(e, { i: () => W });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                n = i(53548),
                l = i(79070),
                o = i(17610),
                c = i(24548),
                d = i(29993),
                u = i(72288),
                p = i(35994);
            let m = (t, e) => {
                let { withLink: i, separator: s } = e,
                    a = i && !t.various ? (0, p.R)(t.id) : null;
                return { artist: t, name: t.name, separator: s, link: a };
            };
            var _ = i(21010),
                x = i.n(_),
                h = i(17392),
                A = i(29504),
                v = i(91292),
                T = i(2058),
                f = i(97234),
                b = i(70598),
                C = i(78940),
                j = i(55693),
                N = i(58217);
            let E = (0, r.PA)((t) => {
                    let { item: e, linkClassName: i, captionClassName: a, captionSize: r = 'm', allArtistsTitle: n, withCustomTooltip: l, hoverSettings: c } = t,
                        {
                            name: p,
                            link: m,
                            title: _,
                            ariaLabel: x,
                            tooltipText: E,
                            isTooltipEnabled: S,
                            handleNavigate: g,
                        } = ((t) => {
                            var e, i;
                            let { item: s, allArtistsTitle: a, withCustomTooltip: r } = t,
                                { formatMessage: n } = (0, T.A)(),
                                l = ((t, e) => {
                                    let { item: i, allArtistsTitle: s, withCustomTooltip: a } = t,
                                        r = s || i.name;
                                    return {
                                        ...i,
                                        title: a ? void 0 : r,
                                        ariaLabel: i.link ? e({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: r,
                                        isTooltipEnabled: !s && a,
                                    };
                                })({ item: s, allArtistsTitle: a, withCustomTooltip: r }, n),
                                {
                                    track: o,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                p = (0, C.Z)(null != (i = null == (e = l.link) ? void 0 : e.href) ? i : l.artist.url),
                                { sendNavigateSearchFeedback: m } = (0, j.z)(),
                                _ = (0, b.S)(),
                                x = (0, d.c)((t) => {
                                    (c && o.isOpened && o.close(), p(t));
                                }),
                                h = ((t) => {
                                    let { artist: e, callback: i } = t,
                                        { currentTrackInfo: s, fullscreenPlayer: a, fullscreenVideoPlayer: r } = (0, u.g)(),
                                        { modal: n } = s;
                                    return (0, N.l)({
                                        entity: e,
                                        callback: i,
                                        onBeforeHandle: (t) => {
                                            (null == t || t.stopPropagation(), n.isOpened && (s.reset(), n.close()), a.modal.isOpened && a.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            r.modal.isOpened && (r.modal.close(), r.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: l.artist, callback: x }),
                                A = (0, d.c)((t) => {
                                    (_({ to: f.AppScreen.ArtistScreen }), null == m || m(), h(t));
                                });
                            return { ...l, handleNavigate: A };
                        })({ item: e, allArtistsTitle: n, withCustomTooltip: l });
                    return m
                        ? (0, s.jsx)(v.N, {
                              ...m,
                              'aria-label': x,
                              className: i,
                              onClick: g,
                              title: _,
                              'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(o.m_, {
                                  enabled: S,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: E,
                                  hoverSettings: c,
                                  children: (0, s.jsx)(A.HL, { variant: 'span', type: 'entity', size: r, weight: 'medium', className: a, children: p }),
                              }),
                          })
                        : (0, s.jsx)(o.m_, {
                              enabled: S,
                              offsetOptions: 4,
                              placement: 'top',
                              text: E,
                              hoverSettings: c,
                              children: (0, s.jsx)(A.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: r,
                                  weight: 'medium',
                                  className: a,
                                  title: _,
                                  'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: p,
                              }),
                          });
                }),
                S = (t) => {
                    let { group: e, linkClassName: i, captionClassName: a, captionSize: r, allArtistsTitle: l, withCustomTooltip: o, hoverSettings: c } = t;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            e.primary.separator,
                            (0, s.jsx)(E, {
                                item: e.primary,
                                linkClassName: i,
                                captionClassName: a,
                                captionSize: r,
                                allArtistsTitle: l,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            e.decomposed.map((t) =>
                                (0, s.jsxs)(
                                    n.Fragment,
                                    {
                                        children: [
                                            t.separator,
                                            (0, s.jsx)(E, {
                                                item: t,
                                                linkClassName: i,
                                                captionClassName: a,
                                                captionSize: r,
                                                allArtistsTitle: l,
                                                withCustomTooltip: o,
                                                hoverSettings: c,
                                            }),
                                        ],
                                    },
                                    t.artist.id,
                                ),
                            ),
                        ],
                    });
                };
            var g = i(88969),
                k = i(65453);
            let O = (t) => {
                let { spoilerArtistsCount: e, spoilerClassName: i, handleOnSpoilerClick: r } = t;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(k.N, {
                            role: 'button',
                            href: '',
                            className: (0, a.$)(x().spoiler, i),
                            onClick: r,
                            rel: 'nofollow',
                            'data-test-id': h.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(g.A, { id: 'entity-names.number-of-more-artists', values: { counter: e } }),
                        }),
                    ],
                });
            };
            var I = i(61013),
                R = i(87819),
                L = i(40634),
                y = i(48468),
                w = i.n(y);
            let M = (0, r.PA)((t) => {
                    let { label: e, artists: i, forwardRef: a } = t;
                    return (0, s.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, R.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: a, children: e }),
                            (0, s.jsx)(o.ZI, { className: w().tooltipContent, children: i.map((t) => (0, s.jsx)(L.V, { artist: t, className: w().artistItem }, t.id)) }),
                        ],
                    });
                }),
                U = (0, n.forwardRef)((t, e) => (0, s.jsx)(M, { forwardRef: e, ...t }));
            var z = i(19934),
                P = i(70396),
                D = i.n(P);
            let H = (0, r.PA)((t) => {
                    let { label: e, artists: i } = t,
                        { formatMessage: r } = (0, T.A)();
                    return (0, s.jsx)(z.W1, {
                        isMobile: !0,
                        className: (0, a.$)(D().root, D().important),
                        label: e,
                        ariaLabel: r({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((t) => (0, s.jsx)(L.V, { artist: t }, t.id)),
                    });
                }),
                F = (0, r.PA)((t) => {
                    let { artists: e = [], label: i, labelRef: a } = t,
                        [r, o] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        p = (0, d.c)(() => {
                            let t = a.current;
                            t && o(t.scrollHeight > t.clientHeight || t.scrollWidth > t.clientWidth);
                        }),
                        m = (0, l.L)(() =>
                            (0, I.A)(() => {
                                p();
                            }, 100),
                        );
                    if (
                        ((0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', m),
                                p(),
                                () => {
                                    window.removeEventListener('resize', m);
                                }
                            ),
                            [m, p],
                        ),
                        (0, n.useEffect)(() => {
                            p();
                        }, [e, p]),
                        0 !== e.length)
                    )
                        return (r || c) && (!c || 1 !== e.length) ? (c ? (0, s.jsx)(H, { artists: e, label: i }) : (0, s.jsx)(U, { artists: e, label: i })) : i;
                }),
                W = (0, r.PA)((t) => {
                    let {
                            className: e,
                            lineClamp: i,
                            spoilerClassName: r,
                            linkClassName: p,
                            captionClassName: _,
                            captionSize: h,
                            variant: A = 'breakAll',
                            spoilerComponent: v,
                            ...T
                        } = t,
                        f = ((t) => {
                            var e, i, s;
                            let { separator: a, visibleArtistsCount: r, withLink: l, withComposer: o, artistIdWithoutLink: c, withContextMenu: p } = t,
                                _ = null != (e = t.artists) ? e : [],
                                x = null == (i = t.withAllArtistsTitle) || i,
                                h = null == (s = t.withCustomTooltip) || s,
                                A = (0, n.useRef)(null),
                                [v, T] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: f },
                                } = (0, u.g)(),
                                b = ((!f || 1 === _.length) && p) || !p,
                                C = ((t, e) => {
                                    var i, s, a;
                                    let r = null == (i = null == e ? void 0 : e.withComposer) || i,
                                        n = null == (s = null == e ? void 0 : e.withLink) || s,
                                        l = null != (a = null == e ? void 0 : e.separator) ? a : ', ',
                                        o = t
                                            .flatMap((t) => {
                                                var e;
                                                let i = (null != (e = t.decomposed) ? e : []).map((t) => t.name);
                                                return [t.name, ...i];
                                            })
                                            .join(l),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((t, e) => {
                                            let { visibleArtistsCount: i, withComposer: s } = e;
                                            return {
                                                visibleArtists: (i ? t.slice(0, i) : t).filter((t) => s || !t.isComposer),
                                                hiddenArtistsCount: i && i < t.length ? t.length - i : 0,
                                            };
                                        })(t, { withComposer: r, visibleArtistsCount: null == e ? void 0 : e.visibleArtistsCount });
                                    return {
                                        groups: c.map((t, i) =>
                                            ((t, e) => {
                                                var i;
                                                let { withLink: s, separator: a, isFirst: r } = e;
                                                return {
                                                    primary: m(t, { withLink: s, separator: r ? void 0 : a }),
                                                    decomposed: (null != (i = t.decomposed) ? i : []).map((t) => {
                                                        let e = a ? t.separator : '';
                                                        return m(t, { withLink: s, separator: e });
                                                    }),
                                                };
                                            })(t, { withLink: n && t.id !== (null == e ? void 0 : e.artistIdWithoutLink), separator: l, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: d,
                                    };
                                })(_, { separator: a, visibleArtistsCount: v ? void 0 : r, withComposer: o, withLink: !!b && l, artistIdWithoutLink: c }),
                                j = x ? C.allArtistsTitle : '',
                                N = (0, d.c)((t) => {
                                    (T(!0), t.preventDefault());
                                });
                            return {
                                artists: _,
                                groups: C.groups,
                                hiddenArtistsCount: C.hiddenArtistsCount,
                                allArtistsTitle: j,
                                withCustomTooltip: h,
                                withContextMenu: p,
                                labelRef: A,
                                handleOnSpoilerClick: N,
                                isTooltipEnabled: !!j && h && !p && !f,
                                title: !j || h || p ? void 0 : j,
                            };
                        })(T),
                        b = (0, l.L)(() =>
                            f.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(v)
                                  ? v
                                  : (0, s.jsx)(O, { spoilerClassName: r, spoilerArtistsCount: f.hiddenArtistsCount, handleOnSpoilerClick: f.handleOnSpoilerClick }),
                        ),
                        C = (0, s.jsx)(o.m_, {
                            referenceRef: f.labelRef,
                            enabled: f.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: f.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, s.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, a.$)(x().root, x()['root_variant_'.concat(A)], { [x().root_clamp]: i && i > 0, [x().ellipsis]: !i }, e),
                                title: f.title,
                                children: [
                                    f.groups.map((t) =>
                                        (0, s.jsx)(
                                            S,
                                            {
                                                group: t,
                                                linkClassName: p,
                                                captionClassName: _,
                                                captionSize: h,
                                                allArtistsTitle: f.allArtistsTitle,
                                                withCustomTooltip: f.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            t.primary.artist.key,
                                        ),
                                    ),
                                    b,
                                ],
                            }),
                        });
                    return f.withContextMenu ? (0, s.jsx)(F, { labelRef: f.labelRef, artists: f.artists, label: C }) : C;
                });
        },
        15526: (t) => {
            t.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        17332: (t) => {
            t.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        18130: (t, e, i) => {
            'use strict';
            (i.d(e, { b: () => c }), i(30282));
            var s = i(35412),
                a = i(4086),
                r = i(41928),
                n = i(72131),
                l = (function (t) {
                    return ((t.SOURCE = 'utm_source'), (t.MEDIUM = 'utm_medium'), t);
                })(l || {});
            let o = { utm_source: 'desktop', utm_medium: 'copy_link' },
                c = function (t) {
                    for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), l = 1; l < e; l++) i[l - 1] = arguments[l];
                    let [c] = i,
                        { params: d } = null != c ? c : {},
                        u = { ...o, ...(null == c ? void 0 : c.query) },
                        p = (0, r.N)().get(a.V4),
                        m = (0, n._)(p.webHost),
                        { href: _ } = (0, s.no)(String(t), { params: d, query: u, options: { host: 'https://'.concat(m) } }),
                        { href: x } = (0, s.no)(String(t), { params: d, query: u });
                    return { shareLink: _, pathname: x };
                };
        },
        18143: (t, e, i) => {
            'use strict';
            var s;
            (i.d(e, { T: () => s }),
                (function (t) {
                    ((t.OK = 'ok'), (t.ERROR = 'error'));
                })(s || (s = {})));
        },
        18278: (t, e, i) => {
            'use strict';
            i.d(e, { C: () => c });
            var s = i(88800),
                a = i(53548),
                r = i(17392),
                n = i(29504),
                l = i(15526),
                o = i.n(l);
            let c = (t) => {
                let { getDescriptionTexts: e, entityId: i } = t,
                    [l, c] = (0, a.useState)(null);
                if (
                    ((0, a.useEffect)(() => {
                        e && e().then(c);
                    }, [e]),
                    l)
                )
                    return l.map((t, e) =>
                        (0, s.jsx)(
                            n.HL,
                            {
                                className: o().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': r.S7.DESCRIPTION_TEXT,
                                children: t,
                            },
                            ''.concat(i, '-descpription-text-').concat(e),
                        ),
                    );
            };
        },
        21010: (t) => {
            t.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        24548: (t, e, i) => {
            'use strict';
            i.d(e, { V: () => s });
            let s = { delay: { open: 1e3, close: 0 } };
        },
        35994: (t, e, i) => {
            'use strict';
            i.d(e, { R: () => a });
            var s = i(67174);
            let a = (t) => (0, s.u)('/artist/:artistId', { params: { artistId: t } });
        },
        37438: (t) => {
            t.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        40634: (t, e, i) => {
            'use strict';
            i.d(e, { V: () => T });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                n = i(53548),
                l = i(97234),
                o = i(70598),
                c = i(17392),
                d = i(29993),
                u = i(90688),
                p = i(19934),
                m = i(7555),
                _ = i(29504),
                x = i(78940),
                h = i(72288),
                A = i(80932),
                v = i.n(A);
            let T = (0, r.PA)((t) => {
                let { artist: e, className: i } = t,
                    { fullscreenPlayer: r } = (0, h.g)(),
                    A = (0, x.Z)(e.url),
                    f = (0, o.S)(),
                    b = (0, n.useMemo)(() => {
                        var t;
                        return (
                            'decomposed' in e &&
                            (null == (t = e.decomposed) ? void 0 : t.reduce((t, e) => (t.push((0, s.jsx)(T, { artist: e, className: i }, e.id)), t), []))
                        );
                    }, [e, i]),
                    C = (0, d.c)((t) => {
                        (r.modal.isOpened && r.modal.close(), f({ to: l.AppScreen.ArtistScreen }), A(t));
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(p.Dr, {
                            className: (0, a.$)(v().root, i),
                            onClick: C,
                            'data-test-id': c.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(m.t, {
                                    radius: 'round',
                                    className: v().cover,
                                    children: (0, s.jsx)(u._V, { withAvatarReplace: !0, src: e.coverUri, size: 100, fit: 'contain', className: v().image }),
                                }),
                                (0, s.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: e.name }),
                            ],
                        }),
                        b,
                    ],
                });
            });
        },
        44988: (t, e, i) => {
            'use strict';
            i.d(e, { U: () => d });
            var s = i(88800),
                a = i(84961),
                r = i(17392),
                n = i(52300),
                l = i(19934),
                o = i(108),
                c = i(72288);
            let d = (0, a.PA)((t) => {
                let { isLiked: e, onClick: i, className: a, iconClassName: d, albumType: u, disabled: p } = t,
                    { user: m } = (0, c.g)(),
                    _ = e ? 'liked' : 'like',
                    x = (0, o.$)(e, u);
                return (0, s.jsx)(l.Dr, {
                    className: a,
                    onClick: i,
                    icon: (0, s.jsx)(n.I, { className: d, variant: _, size: 'xxs' }),
                    'aria-pressed': e,
                    disabled: p || !m.isAuthorized,
                    'data-test-id': r.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: x,
                });
            });
        },
        48468: (t) => {
            t.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        49343: (t, e, i) => {
            'use strict';
            i.d(e, { D: () => p });
            var s = i(88800),
                a = i(53548),
                r = i(88969),
                n = i(52300),
                l = i(29504),
                o = i(59304),
                c = i(57585),
                d = i.n(c);
            let u = {
                    track: (0, s.jsx)(r.A, { id: 'notifications-info.track-link' }),
                    artist: (0, s.jsx)(r.A, { id: 'notifications-info.artist-link' }),
                    album: (0, s.jsx)(r.A, { id: 'notifications-info.album-link' }),
                    playlist: (0, s.jsx)(r.A, { id: 'notifications-info.playlist-link' }),
                    clip: (0, s.jsx)(r.A, { id: 'notifications-info.clip-link' }),
                    label: (0, s.jsx)(r.A, { id: 'notifications-info.label-link' }),
                    concert: (0, s.jsx)(r.A, { id: 'notifications-info.concert-link' }),
                },
                p = (t) => {
                    let { entityVariant: e, entityTitle: i, closeToast: c } = t,
                        p = (0, a.useMemo)(
                            () =>
                                (0, s.jsxs)(l.HL, {
                                    className: d().message,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: [
                                        u[e],
                                        '\xa0',
                                        (0, s.jsx)(l.HL, { className: d().title, variant: 'span', type: 'controls', size: 'm', lineClamp: 1, children: i }),
                                        '\xa0',
                                        (0, s.jsx)(r.A, { id: 'notifications-info.copied' }),
                                    ],
                                }),
                            [e, i],
                        );
                    return (0, s.jsx)(o.$, {
                        closeToast: c,
                        cover: (0, s.jsx)(n.I, { className: d().icon, size: 'xs', variant: 'chain' }),
                        message: p,
                        coverRadius: 's',
                    });
                };
        },
        52150: (t, e, i) => {
            'use strict';
            i.d(e, { H: () => s });
            let s = (0, i(53548).createContext)({ pageAlbumId: void 0 });
        },
        57585: (t) => {
            t.exports = { message: 'NotificationCopy_message__zVlYi', icon: 'NotificationCopy_icon__FTmM9', title: 'NotificationCopy_title__UEiU0' };
        },
        70396: (t) => {
            t.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        74064: (t, e, i) => {
            'use strict';
            i.d(e, { H: () => h });
            var s = i(88800),
                a = i(2058),
                r = i(88969),
                n = i(17392),
                l = i(29993),
                o = i(52300),
                c = i(19934),
                d = i(29595),
                u = i(74965),
                p = i(72288),
                m = i(98953),
                _ = i(64546),
                x = i(49343);
            let h = (t) => {
                let { shareLink: e, entityMeta: i, disabled: h, className: A, iconClassName: v, menuClassName: T, withSubmenu: f = !0, withNotification: b = !0 } = t,
                    { settings: C, shareIframe: j, fullscreenPlayer: N, fullscreenVideoPlayer: E } = (0, p.g)(),
                    { formatMessage: S } = (0, a.A)(),
                    { notify: g } = (0, u.l)(),
                    k = (0, l.c)(async () => {
                        if ((await window.navigator.clipboard.writeText(e), b)) {
                            let t = N.modal.isOpened || (!C.isMobile && E.modal.isOpened);
                            g((0, s.jsx)(x.D, { entityVariant: i.variant, entityTitle: i.title }), { containerId: t ? d.u.FULLSCREEN_INFO : d.u.INFO });
                        }
                    }),
                    O = (0, l.c)(() => {
                        i.id && j.openModal(i);
                    }),
                    I = i.id && i.variant !== m.Y.ARTIST && i.variant !== m.Y.CLIP;
                return f
                    ? (0, s.jsxs)(c.W1, {
                          offsetOptions: 3,
                          isMobile: C.isMobile,
                          className: A,
                          menuClassName: T,
                          label: S({ id: 'interface-actions.share' }),
                          icon: (0, s.jsx)(o.I, { className: v, variant: 'share', size: 'xxs' }),
                          disabled: h,
                          submenuProps: { 'data-test-id': n.S7.CONTEXT_MENU_SHARE },
                          'data-test-id': n.S7.CONTEXT_MENU_SHARE_BUTTON,
                          children: [
                              (0, s.jsx)(c.Dr, {
                                  onClick: k,
                                  icon: (0, s.jsx)(o.I, { variant: 'chain', size: 'xxs' }),
                                  'data-test-id': n.S7.CONTEXT_MENU_SHARE_COPY_LINK_BUTTON,
                                  children: (0, s.jsx)(r.A, { id: 'interface-actions.copy-link' }),
                              }),
                              I &&
                                  (0, s.jsx)(_.WithOffline, {
                                      fallback: (0, s.jsx)(c.Dr, {
                                          onClick: O,
                                          icon: (0, s.jsx)(o.I, { variant: 'code', size: 'xxs' }),
                                          'data-test-id': n.S7.CONTEXT_MENU_SHARE_IFRAME_BUTTON,
                                          children: (0, s.jsx)(r.A, { id: 'interface-actions.copy-iframe' }),
                                      }),
                                  }),
                          ],
                      })
                    : (0, s.jsx)(c.Dr, {
                          className: A,
                          onClick: k,
                          icon: (0, s.jsx)(o.I, { className: v, variant: 'share', size: 'xxs' }),
                          disabled: h,
                          'data-test-id': n.S7.CONTEXT_MENU_SHARE_BUTTON,
                          children: (0, s.jsx)(r.A, { id: 'interface-actions.share' }),
                      });
            };
        },
        80932: (t) => {
            t.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        81066: (t, e, i) => {
            'use strict';
            i.d(e, { C: () => _ });
            var s = i(88800),
                a = i(84961),
                r = i(53548),
                n = i(88969),
                l = i(17392),
                o = i(52300),
                c = i(19934),
                d = i(73170),
                u = i(72288),
                p = i(52726);
            let m = {
                    album: (0, s.jsx)(n.A, { id: 'vibe-actions.vibe-by-album' }),
                    artist: (0, s.jsx)(n.A, { id: 'vibe-actions.vibe-by-artist' }),
                    playlist: (0, s.jsx)(n.A, { id: 'vibe-actions.vibe-by-playlist' }),
                    track: (0, s.jsx)(n.A, { id: 'vibe-actions.vibe-by-track' }),
                },
                _ = (0, a.PA)((t) => {
                    let { variant: e, className: i, onClick: a, disabled: n, onOpenMenuChange: _ } = t,
                        {
                            settings: { isMobile: x },
                            user: h,
                            freeAccess: A,
                        } = (0, u.g)(),
                        v = A.isVibeStartRestricted && !x,
                        T = (0, r.useCallback)(
                            (t) => {
                                let { isPopoverEnabled: r, popoverText: u } = t;
                                return (0, s.jsxs)(c.Dr, {
                                    onClick: a,
                                    disabled: n || r || !h.isAuthorized,
                                    className: i,
                                    icon: (0, s.jsx)(o.I, { variant: 'vibe', size: 'xxs' }),
                                    'data-test-id': l.S7.CONTEXT_MENU_VIBE_BUTTON,
                                    children: [m[e], ' ', (0, s.jsx)(d.q, { children: u })],
                                });
                            },
                            [a, n, i, e, h.isAuthorized],
                        );
                    return (0, s.jsx)(p.S, {
                        isNested: !0,
                        isEnabled: v,
                        placement: 'right',
                        textVariant: 'vibe',
                        vibeTextVariant: e,
                        renderChildren: T,
                        onOpenMenuChange: _,
                    });
                });
        },
        87762: (t, e, i) => {
            'use strict';
            i.d(e, { T: () => r });
            var s = i(53548),
                a = i(52150);
            function r() {
                return (0, s.useContext)(a.H);
            }
        },
        90224: (t, e, i) => {
            'use strict';
            i.d(e, { N: () => x });
            var s = i(88800),
                a = i(65724),
                r = i(84961),
                n = i(53548),
                l = i(2058),
                o = i(17392),
                c = i(52300),
                d = i(62837),
                u = i(72288),
                p = i(94398),
                m = i(17332),
                _ = i.n(m);
            let x = (0, r.PA)((t) => {
                let { className: e, getDescriptionTexts: i, trackId: r, containerClassName: m, variant: x, iconVariant: iconOverride, size: h = 'xxxs', ...A } = t,
                    { formatMessage: v } = (0, l.A)(),
                    {
                        settings: { isMobile: T },
                    } = (0, u.g)(),
                    [f, b] = (0, n.useState)(null);
                (0, n.useEffect)(() => {
                    i && i().then(b);
                }, [i, r]);
                let {
                    iconVariant: C,
                    descriptionText: j,
                    isTooltipEnabled: N,
                    ariaLabel: E,
                } = ((t, e) => {
                    let { variant: i, descriptionTexts: s, isMobile: a } = t,
                        r = (null == s ? void 0 : s.join('\n')) || '';
                    return {
                        iconVariant: ((t) => {
                            switch (t) {
                                case d.JU.E:
                                    return 'explicit';
                                case d.JU.AGE_12:
                                case d.JU.AGE_16:
                                case d.JU.AGE_18:
                                    return 'adult';
                                case d.JU.EXCLAMATION:
                            }
                            return 'exclamation';
                        })(i),
                        descriptionText: r,
                        isTooltipEnabled: !!(null == s ? void 0 : s.length) && !a,
                        ariaLabel: r.length > 0 ? r : e({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: x, descriptionTexts: f, isMobile: T }, v);
                return (0, s.jsx)(p.k, {
                    description: j,
                    placement: 'bottom-start',
                    enabled: N,
                    children: (0, s.jsx)('span', {
                        className: m,
                        children:
                        // for PulseSync: BEGIN render substituted-track badges and custom native disclaimer icons
                        x === d.JU.SUBSTITUTED ? (0, s.jsxs)('svg', {
                            className: (0, a.$)(_().explicitMark, e),
                            viewBox: '0 0 16 16',
                            role: 'img',
                            'aria-label': E,
                            style: { width: 'var(--ym-icon-size-'.concat(h, ')'), height: 'var(--ym-icon-size-'.concat(h, ')') },
                            ...A,
                            'data-test-id': o.S7.EXPLICIT_MARK_ICON,
                            children: [
                                (0, s.jsx)('circle', { cx: '8', cy: '8', r: '5.5', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }),
                                (0, s.jsx)('text', {
                                    x: '8', y: '9', fill: 'currentColor', fontSize: '7', fontWeight: '700', textAnchor: 'middle', dominantBaseline: 'middle', children: 'S',
                                }),
                            ],
                        }) : (0, s.jsx)(c.I, {
                            className: (0, a.$)(_().explicitMark, e),
                            'aria-label': E,
                            variant: iconOverride ? c.resolveIcon(iconOverride)?.variant ?? 'exclamation' : C,
                            size: iconOverride ? c.resolveIcon(iconOverride)?.size ?? h : h,
                            style: iconOverride ? { width: `var(--ym-icon-size-${h})`, height: `var(--ym-icon-size-${h})` } : undefined,
                            ...A,
                            'data-test-id': o.S7.EXPLICIT_MARK_ICON,
                        }),
                        // for PulseSync: END render substituted-track badges and custom native disclaimer icons
                    }),
                });
            });
        },
        92966: (t, e, i) => {
            'use strict';
            i.d(e, { K: () => x });
            var s = i(88800),
                a = i(2058),
                r = i(29993),
                n = i(87762),
                l = i(29595),
                o = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(96706),
                p = i(53548),
                m = i(79390),
                _ = i(96295);
            let x = (t) => {
                let {
                        user: e,
                        paywall: i,
                        albumCPA: { isPlusCPAEnabled: x },
                    } = (0, c.g)(),
                    { formatMessage: h } = (0, a.A)(),
                    { notify: A } = (0, o.l)(),
                    v = (() => {
                        let { notify: t } = (0, o.l)(),
                            { fullscreenPlayer: e } = (0, c.g)(),
                            [i, n] = (0, p.useState)(!1),
                            { formatMessage: x } = (0, a.A)();
                        return (0, r.c)(async (a) => {
                            let { album: r, withLink: o = !0, withNotification: c = !0 } = a;
                            if (i) return;
                            let p = { ...(0, u.HO)(r), url: r.url, isLiked: !r.isLiked };
                            n(!0);
                            let h = await r.toggleLike();
                            if ((n(!1), !c)) return;
                            let A = e.modal.isOpened;
                            h === m.f.OK
                                ? t((0, s.jsx)(_.T, { withLink: o, album: p }), { containerId: A ? l.u.FULLSCREEN_INFO : l.u.INFO })
                                : t((0, s.jsx)(d.h, { error: x({ id: 'error-messages.error-during-action' }) }), { containerId: A ? l.u.FULLSCREEN_ERROR : l.u.ERROR });
                        });
                    })(),
                    { pageAlbumId: T } = (0, n.T)();
                return (0, r.c)(async () => {
                    if (t)
                        return x({ pageAlbumId: T, albumId: t.id, isNonMusic: t.isNonMusic })
                            ? void i.openModal()
                            : e.isAuthorized
                              ? v({ album: t })
                              : void A((0, s.jsx)(d.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                });
            };
        },
        94398: (t, e, i) => {
            'use strict';
            i.d(e, { k: () => d });
            var s = i(88800),
                a = i(17392),
                r = i(17610),
                n = i(29504),
                l = i(37438),
                o = i.n(l);
            let c = { padding: 8 },
                d = (t) => {
                    let { description: e, enabled: i, title: l, placement: d = 'top', children: u } = t;
                    return (0, s.jsxs)(r.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, s.jsx)(r.ZI, {
                                className: o().root,
                                'data-test-id': a.S7.TOOLTIP_WITH_TITLE,
                                children: (0, s.jsxs)('div', {
                                    className: o().text,
                                    children: [
                                        l && (0, s.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: l }),
                                        (0, s.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: e }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        96295: (t, e, i) => {
            'use strict';
            i.d(e, { T: () => l });
            var s = i(88800),
                a = i(84961),
                r = i(42729),
                n = i(5048);
            let l = (0, a.PA)((t) => {
                let { album: e, closeToast: i, withLink: a } = t,
                    l = (0, n.b)(e.type);
                return (0, s.jsx)(r.O, {
                    closeToast: i,
                    entityVariant: l,
                    coverUri: e.coverUri,
                    entityUrl: e.url,
                    collectionUrl: '/collection',
                    entityTitle: e.title,
                    isLiked: e.isLiked,
                    withLink: a,
                });
            });
        },
        98953: (t, e, i) => {
            'use strict';
            i.d(e, { Y: () => s });
            var s = (function (t) {
                return (
                    (t.ALBUM = 'album'),
                    (t.ARTIST = 'artist'),
                    (t.PLAYLIST = 'playlist'),
                    (t.TRACK = 'track'),
                    (t.CLIP = 'clip'),
                    (t.LABEL = 'label'),
                    (t.CONCERT = 'concert'),
                    t
                );
            })({});
        },
    },
]);
