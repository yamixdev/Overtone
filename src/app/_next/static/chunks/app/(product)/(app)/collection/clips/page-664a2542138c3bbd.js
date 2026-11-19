(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6363, 9923],
    {
        4370: (e, t, r) => {
            'use strict';
            r.d(t, { Z: () => o });
            var i = r(67174);
            let o = {
                main: (0, i.u)('/'),
                chart: (0, i.u)('/chart'),
                chartPodcasts: (0, i.u)('/chart/podcasts'),
                collection: (0, i.u)('/collection'),
                collectionAlbums: (0, i.u)('/collection/albums'),
                collectionArtists: (0, i.u)('/collection/artists'),
                collectionClips: (0, i.u)('/collection/clips'),
                collectionDislikes: (0, i.u)('/collection/dislikes'),
                collectionKids: (0, i.u)('/collection/kids'),
                collectionKidsAlbums: (0, i.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, i.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, i.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, i.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, i.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, i.u)('/collection/multivibes'),
                collectionVibes: (0, i.u)('/collection/vibes'),
                collectionPlaylists: (0, i.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, i.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, i.u)('/collection/playlists/liked'),
                collectionShelf: (0, i.u)('/collection/shelf'),
                collectionShelfLiked: (0, i.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, i.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, i.u)('/collection/shelf/recently-played'),
                concerts: (0, i.u)('/concerts'),
                kids: (0, i.u)('/kids'),
                mixes: (0, i.u)('/mixes'),
                musicHistory: (0, i.u)('/music-history'),
                muzmarket: (0, i.u)('/muzmarket'),
                mymusic: (0, i.u)('/mymusic'),
                mymusicDownloadsTracks: (0, i.u)('/mymusic/downloads/tracks'),
                multivibe: (0, i.u)('/multivibe'),
                nonMusic: (0, i.u)('/non-music'),
                pay: (0, i.u)('/pay'),
                userSlides: (0, i.u)('/slides/user'),
                search: (0, i.u)('/search'),
                searchHistory: (0, i.u)('/search/history'),
                settings: (0, i.u)('/settings'),
                video: (0, i.u)('/video'),
            };
        },
        7555: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => c });
            var i,
                o = r(53548),
                s = {
                    5881: (e, t, r) => {
                        function i() {
                            for (var e, t, r = 0, i = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            i,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (i = e(t[r])) && (o && (o += ' '), (o += i));
                                            else for (r in t) t[r] && (o && (o += ' '), (o += r));
                                        return o;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (r.r(t), r.d(t, { clsx: () => i, default: () => o }));
                        let o = i;
                    },
                    2095: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
                            root: 'qaIScXjx1qyXuaIHXQIo',
                            root_radius_xs: 'wdE2qVRIlWUesuBfzCis',
                            root_radius_s: '_7gw1qGE6BeUAdSMbhRx',
                            root_radius_m: 'emVxQKB1wJc9FwuIBG8o',
                            root_radius_l: 'NFJAa_h_EAjwQVY7bU5J',
                            root_radius_xl: 'SRpgu5IgfEGM_VHllm_6',
                            root_radius_round: 'QIWoHHDozGGG5w2JYImt',
                            root_withShadow: 'gtfPudKIIbfkwmuOBzwI',
                            root_variant_default: 'ZcpulvHgF_wsgzB8Hye9',
                            root_variant_outline: 'kPFFrHHxF3SOjiETAE6Q',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var o = null;
                            if ((void 0 !== i && (o = '' + i), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var s in ((i = {}), t)) 'key' !== s && (i[s] = t[s]);
                            else i = t;
                            return { $$typeof: r, type: e, key: o, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    6009: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Paper = void 0));
                        let o = r(4377),
                            s = r(5881),
                            l = r(810),
                            a = i(r(2095)),
                            n = (e) => {
                                let { forwardRef: t, radius: r, variant: i = 'default', children: l, className: n, withShadow: c, style: d, ...u } = e;
                                return (0, o.jsx)('div', {
                                    className: (0, s.clsx)(
                                        a.default.root,
                                        a.default['root_radius_'.concat(r)],
                                        a.default['root_variant_'.concat(i)],
                                        { [a.default.root_withShadow]: c },
                                        n,
                                    ),
                                    style: d,
                                    ref: t,
                                    ...u,
                                    children: l,
                                });
                            };
                        t.Paper = (0, l.forwardRef)((e, t) => (0, o.jsx)(n, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(o, 2));
                    },
                },
                l = {};
            function a(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var r = (l[e] = { exports: {} });
                return (s[e].call(r.exports, r, r.exports, a), r.exports);
            }
            ((a.d = (e, t) => {
                for (var r in t) a.o(t, r) && !a.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (a.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var n = {};
            (() => {
                (Object.defineProperty(n, 'U', { value: !0 }), (n.X = void 0));
                var e = a(6009);
                Object.defineProperty(n, 'X', {
                    enumerable: !0,
                    get: function () {
                        return e.Paper;
                    },
                });
            })();
            var c = n.X;
            n.U;
        },
        7628: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => p });
            var i = r(88800),
                o = r(88969),
                s = r(58390),
                l = r(17392),
                a = r(29993),
                n = r(96817),
                c = r(29504),
                d = r(99890),
                u = r(4086),
                _ = r(41928);
            let p = (e) => {
                let { size: t = 'm', variant: r = 'default', color: p = 'primary', withRipple: m = !0, buttonText: h, isBlock: f, key: v, className: C } = e,
                    x = (0, s.useRouter)(),
                    g = (0, _.N)().get(u.QG),
                    b = (0, a.c)(() => {
                        g.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), x.push(g.authorizationUrl));
                    });
                return (0, i.jsx)(
                    n.$,
                    {
                        onClick: b,
                        className: C,
                        isBlock: f,
                        color: p,
                        variant: r,
                        size: t,
                        radius: 'xxxl',
                        withRipple: m,
                        'data-test-id': l.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, i.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(o.A, { id: 'authorization.enter-button' }) }),
                    },
                    v,
                );
            };
        },
        7857: (e) => {
            e.exports = { root: 'ClipsCarousel_root__r1mGp', controls: 'ClipsCarousel_controls__nZB6r' };
        },
        8299: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => o });
            var i = r(58217);
            let o = (e) => {
                let { clip: t, callback: r, disclaimerRejectHandler: o } = e;
                return (0, i.l)({ entity: t, callback: r, onReject: o, modalBehavior: { closeOnOutside: !1, closeOnEscape: !1 }, preventDefaultWhenSafe: !0 });
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
        10270: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => c });
            var i = r(56949),
                o = r(53548),
                s = r(29993),
                l = r(44230),
                a = r(72288);
            let n = { width: 400, height: 400 },
                c = (e) => {
                    let { count: t, getEstimateSize: r, getItemKey: c, gap: d, containerRef: u, overscan: _ = 2, useVirtualizerMeasurement: p } = e,
                        {
                            settings: { isMobile: m },
                        } = (0, a.g)(),
                        { contentScrollRef: h } = (0, l.g)(),
                        f = (0, o.useRef)(new Map()),
                        v = (0, o.useRef)(void 0),
                        C = {
                            count: t,
                            gap: d,
                            getItemKey: c,
                            estimateSize: (e) => {
                                let t = f.current.get(String(e));
                                return null != t ? t : r(e);
                            },
                            overscan: _,
                            initialRect: n,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, r, i) => {
                                if (!t) return 0;
                                let o = t.getBoundingClientRect().top;
                                return e && 1 ? o + window.scrollY : !e && r ? o - (i ? r.getBoundingClientRect().top + r.clientTop : 0) + r.scrollTop : 0;
                            })(m, u, h, p),
                        },
                        x = (0, i.XW)(C),
                        g = (0, i.Te)({ ...C, getScrollElement: () => h, initialOffset: null == h ? void 0 : h.scrollTop }),
                        b = m ? x : g;
                    p &&
                        (b.shouldAdjustScrollPositionOnItemSizeChange = (e) => {
                            let { scrollElement: t } = b;
                            if (!t) return !1;
                            let r = 'scrollY' in t ? t.scrollY : t.scrollTop;
                            return e.start < r && e.end <= r;
                        });
                    let S = (0, s.c)(() => {
                        b.measure();
                    });
                    return (
                        (0, o.useEffect)(() => {
                            p ||
                                v.current ||
                                (v.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    (e.forEach((e) => {
                                        let r = e.target.getAttribute('data-index');
                                        if (e.target && r) {
                                            let i = e.contentRect.height;
                                            i && i !== f.current.get(r) && (f.current.set(r, e.contentRect.height), (t = !0));
                                        }
                                    }),
                                        t && S());
                                }));
                        }, [S, p]),
                        { virtualizer: b, resizeObserver: v.current }
                    );
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
        12816: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => s, x: () => o });
            var i = r(98427);
            let o = [
                    i.b.HOME,
                    i.b.SIDEBAR,
                    i.b.OWN_COLLECTION,
                    i.b.LANDING,
                    i.b.OWN_ARTISTS,
                    i.b.ARTIST,
                    i.b.ARTIST_CONCERTS,
                    i.b.NON_MUSIC,
                    i.b.PLAYLIST,
                    i.b.SEARCH,
                    i.b.VIDEO_PLAYER,
                    i.b.LABEL,
                    i.b.CONCERTS,
                    i.b.CONCERT,
                    i.b.CONCERT_LOCATION_SELECTOR,
                    i.b.ALBUM,
                    i.b.PLAYLIST,
                    i.b.SLIDES_SCREEN,
                    i.b.PROMOLANDING_ALBUM,
                    i.b.WAVE_LANDING_SCREEN,
                    i.b.FACT_SCREEN,
                    i.b.LUMEN_FACT_SCREEN,
                    i.b.LUMEN_AWAKENING_SCREEN,
                    i.b.COLLECTION_VIBE_ROOMS,
                    i.b.MULTIVIBE_SENDING_INVITATION_SCREEN,
                    i.b.MULTIVIBE_ACTION_SCREEN,
                    i.b.MULTIVIBE_UNIFIED_SCREEN,
                ],
                s = [i.b.HOME, i.b.LANDING, i.b.NON_MUSIC, i.b.OWN_COLLECTION, i.b.SEARCH, i.b.ARTIST, i.b.CONCERTS, i.b.CONCERT, i.b.ALBUM, i.b.PLAYLIST];
        },
        13946: (e, t, r) => {
            'use strict';
            r.d(t, { i: () => z });
            var i = r(88800),
                o = r(65724),
                s = r(84961),
                l = r(53548),
                a = r(79070),
                n = r(17610),
                c = r(24548),
                d = r(29993),
                u = r(72288),
                _ = r(35994);
            let p = (e, t) => {
                let { withLink: r, separator: i } = t,
                    o = r && !e.various ? (0, _.R)(e.id) : null;
                return { artist: e, name: e.name, separator: i, link: o };
            };
            var m = r(21010),
                h = r.n(m),
                f = r(17392),
                v = r(29504),
                C = r(91292),
                x = r(2058),
                g = r(97234),
                b = r(70598),
                S = r(78940),
                y = r(55693),
                E = r(58217);
            let A = (0, s.PA)((e) => {
                    let { item: t, linkClassName: r, captionClassName: o, captionSize: s = 'm', allArtistsTitle: l, withCustomTooltip: a, hoverSettings: c } = e,
                        {
                            name: _,
                            link: p,
                            title: m,
                            ariaLabel: h,
                            tooltipText: A,
                            isTooltipEnabled: I,
                            handleNavigate: L,
                        } = ((e) => {
                            var t, r;
                            let { item: i, allArtistsTitle: o, withCustomTooltip: s } = e,
                                { formatMessage: l } = (0, x.A)(),
                                a = ((e, t) => {
                                    let { item: r, allArtistsTitle: i, withCustomTooltip: o } = e,
                                        s = i || r.name;
                                    return {
                                        ...r,
                                        title: o ? void 0 : s,
                                        ariaLabel: r.link ? t({ id: 'entity-names.artist-name' }, { artistName: r.name }) : void 0,
                                        tooltipText: s,
                                        isTooltipEnabled: !i && o,
                                    };
                                })({ item: i, allArtistsTitle: o, withCustomTooltip: s }, l),
                                {
                                    track: n,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                _ = (0, S.Z)(null != (r = null == (t = a.link) ? void 0 : t.href) ? r : a.artist.url),
                                { sendNavigateSearchFeedback: p } = (0, y.z)(),
                                m = (0, b.S)(),
                                h = (0, d.c)((e) => {
                                    (c && n.isOpened && n.close(), _(e));
                                }),
                                f = ((e) => {
                                    let { artist: t, callback: r } = e,
                                        { currentTrackInfo: i, fullscreenPlayer: o, fullscreenVideoPlayer: s } = (0, u.g)(),
                                        { modal: l } = i;
                                    return (0, E.l)({
                                        entity: t,
                                        callback: r,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), l.isOpened && (i.reset(), l.close()), o.modal.isOpened && o.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            s.modal.isOpened && (s.modal.close(), s.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: a.artist, callback: h }),
                                v = (0, d.c)((e) => {
                                    (m({ to: g.AppScreen.ArtistScreen }), null == p || p(), f(e));
                                });
                            return { ...a, handleNavigate: v };
                        })({ item: t, allArtistsTitle: l, withCustomTooltip: a });
                    return p
                        ? (0, i.jsx)(C.N, {
                              ...p,
                              'aria-label': h,
                              className: r,
                              onClick: L,
                              title: m,
                              'data-test-id': f.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, i.jsx)(n.m_, {
                                  enabled: I,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: A,
                                  hoverSettings: c,
                                  children: (0, i.jsx)(v.HL, { variant: 'span', type: 'entity', size: s, weight: 'medium', className: o, children: _ }),
                              }),
                          })
                        : (0, i.jsx)(n.m_, {
                              enabled: I,
                              offsetOptions: 4,
                              placement: 'top',
                              text: A,
                              hoverSettings: c,
                              children: (0, i.jsx)(v.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: s,
                                  weight: 'medium',
                                  className: o,
                                  title: m,
                                  'data-test-id': f.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: _,
                              }),
                          });
                }),
                I = (e) => {
                    let { group: t, linkClassName: r, captionClassName: o, captionSize: s, allArtistsTitle: a, withCustomTooltip: n, hoverSettings: c } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, i.jsx)(A, {
                                item: t.primary,
                                linkClassName: r,
                                captionClassName: o,
                                captionSize: s,
                                allArtistsTitle: a,
                                withCustomTooltip: n,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, i.jsxs)(
                                    l.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, i.jsx)(A, {
                                                item: e,
                                                linkClassName: r,
                                                captionClassName: o,
                                                captionSize: s,
                                                allArtistsTitle: a,
                                                withCustomTooltip: n,
                                                hoverSettings: c,
                                            }),
                                        ],
                                    },
                                    e.artist.id,
                                ),
                            ),
                        ],
                    });
                };
            var L = r(88969),
                R = r(65453);
            let j = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: r, handleOnSpoilerClick: s } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        ' ',
                        (0, i.jsx)(R.N, {
                            role: 'button',
                            href: '',
                            className: (0, o.$)(h().spoiler, r),
                            onClick: s,
                            rel: 'nofollow',
                            'data-test-id': f.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, i.jsx)(L.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var k = r(61013),
                N = r(87819),
                T = r(40634),
                O = r(48468),
                P = r.n(O);
            let w = (0, s.PA)((e) => {
                    let { label: t, artists: r, forwardRef: o } = e;
                    return (0, i.jsxs)(n.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, N.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, i.jsx)('div', { ref: o, children: t }),
                            (0, i.jsx)(n.ZI, { className: P().tooltipContent, children: r.map((e) => (0, i.jsx)(T.V, { artist: e, className: P().artistItem }, e.id)) }),
                        ],
                    });
                }),
                M = (0, l.forwardRef)((e, t) => (0, i.jsx)(w, { forwardRef: t, ...e }));
            var D = r(19934),
                U = r(70396),
                H = r.n(U);
            let B = (0, s.PA)((e) => {
                    let { label: t, artists: r } = e,
                        { formatMessage: s } = (0, x.A)();
                    return (0, i.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, o.$)(H().root, H().important),
                        label: t,
                        ariaLabel: s({ id: 'interface-actions.context-menu-artists' }),
                        children: r.map((e) => (0, i.jsx)(T.V, { artist: e }, e.id)),
                    });
                }),
                W = (0, s.PA)((e) => {
                    let { artists: t = [], label: r, labelRef: o } = e,
                        [s, n] = (0, l.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        _ = (0, d.c)(() => {
                            let e = o.current;
                            e && n(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        p = (0, a.L)(() =>
                            (0, k.A)(() => {
                                _();
                            }, 100),
                        );
                    if (
                        ((0, l.useEffect)(
                            () => (
                                window.addEventListener('resize', p),
                                _(),
                                () => {
                                    window.removeEventListener('resize', p);
                                }
                            ),
                            [p, _],
                        ),
                        (0, l.useEffect)(() => {
                            _();
                        }, [t, _]),
                        0 !== t.length)
                    )
                        return (s || c) && (!c || 1 !== t.length) ? (c ? (0, i.jsx)(B, { artists: t, label: r }) : (0, i.jsx)(M, { artists: t, label: r })) : r;
                }),
                z = (0, s.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: r,
                            spoilerClassName: s,
                            linkClassName: _,
                            captionClassName: m,
                            captionSize: f,
                            variant: v = 'breakAll',
                            spoilerComponent: C,
                            ...x
                        } = e,
                        g = ((e) => {
                            var t, r, i;
                            let { separator: o, visibleArtistsCount: s, withLink: a, withComposer: n, artistIdWithoutLink: c, withContextMenu: _ } = e,
                                m = null != (t = e.artists) ? t : [],
                                h = null == (r = e.withAllArtistsTitle) || r,
                                f = null == (i = e.withCustomTooltip) || i,
                                v = (0, l.useRef)(null),
                                [C, x] = (0, l.useState)(!1),
                                {
                                    settings: { isMobile: g },
                                } = (0, u.g)(),
                                b = ((!g || 1 === m.length) && _) || !_,
                                S = ((e, t) => {
                                    var r, i, o;
                                    let s = null == (r = null == t ? void 0 : t.withComposer) || r,
                                        l = null == (i = null == t ? void 0 : t.withLink) || i,
                                        a = null != (o = null == t ? void 0 : t.separator) ? o : ', ',
                                        n = e
                                            .flatMap((e) => {
                                                var t;
                                                let r = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...r];
                                            })
                                            .join(a),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((e, t) => {
                                            let { visibleArtistsCount: r, withComposer: i } = t;
                                            return {
                                                visibleArtists: (r ? e.slice(0, r) : e).filter((e) => i || !e.isComposer),
                                                hiddenArtistsCount: r && r < e.length ? e.length - r : 0,
                                            };
                                        })(e, { withComposer: s, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, r) =>
                                            ((e, t) => {
                                                var r;
                                                let { withLink: i, separator: o, isFirst: s } = t;
                                                return {
                                                    primary: p(e, { withLink: i, separator: s ? void 0 : o }),
                                                    decomposed: (null != (r = e.decomposed) ? r : []).map((e) => {
                                                        let t = o ? e.separator : '';
                                                        return p(e, { withLink: i, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: l && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: a, isFirst: 0 === r }),
                                        ),
                                        allArtistsTitle: n,
                                        hiddenArtistsCount: d,
                                    };
                                })(m, { separator: o, visibleArtistsCount: C ? void 0 : s, withComposer: n, withLink: !!b && a, artistIdWithoutLink: c }),
                                y = h ? S.allArtistsTitle : '',
                                E = (0, d.c)((e) => {
                                    (x(!0), e.preventDefault());
                                });
                            return {
                                artists: m,
                                groups: S.groups,
                                hiddenArtistsCount: S.hiddenArtistsCount,
                                allArtistsTitle: y,
                                withCustomTooltip: f,
                                withContextMenu: _,
                                labelRef: v,
                                handleOnSpoilerClick: E,
                                isTooltipEnabled: !!y && f && !_ && !g,
                                title: !y || f || _ ? void 0 : y,
                            };
                        })(x),
                        b = (0, a.L)(() =>
                            g.hiddenArtistsCount <= 0
                                ? null
                                : (0, l.isValidElement)(C)
                                  ? C
                                  : (0, i.jsx)(j, { spoilerClassName: s, spoilerArtistsCount: g.hiddenArtistsCount, handleOnSpoilerClick: g.handleOnSpoilerClick }),
                        ),
                        S = (0, i.jsx)(n.m_, {
                            referenceRef: g.labelRef,
                            enabled: g.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: g.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, i.jsxs)('div', {
                                style: r ? { WebkitLineClamp: r } : void 0,
                                className: (0, o.$)(h().root, h()['root_variant_'.concat(v)], { [h().root_clamp]: r && r > 0, [h().ellipsis]: !r }, t),
                                title: g.title,
                                children: [
                                    g.groups.map((e) =>
                                        (0, i.jsx)(
                                            I,
                                            {
                                                group: e,
                                                linkClassName: _,
                                                captionClassName: m,
                                                captionSize: f,
                                                allArtistsTitle: g.allArtistsTitle,
                                                withCustomTooltip: g.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    b,
                                ],
                            }),
                        });
                    return g.withContextMenu ? (0, i.jsx)(W, { labelRef: g.labelRef, artists: g.artists, label: S }) : S;
                });
        },
        16717: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => l });
            var i = r(4370),
                o = r(34303),
                s = r(67174);
            let l = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    { href: r } = (0, s.u)(i.Z.video.href, { query: { [o.K.IDS]: e.join(','), [o.K.ACTIVE_INDEX]: String(t) } });
                return r;
            };
        },
        16782: (e) => {
            e.exports = {
                root: 'BlockHeader_root__j3mbg',
                titleIcon: 'BlockHeader_titleIcon__GQFEK',
                start: 'BlockHeader_start__ZrGP5',
                coverContainer: 'BlockHeader_coverContainer__lATZT',
                cover: 'BlockHeader_cover__koOXq',
                textContainer: 'BlockHeader_textContainer___2wn9',
                title: 'BlockHeader_title__5xlx6',
                description: 'BlockHeader_description__hAk9D',
                description_widthLimit: 'BlockHeader_description_widthLimit__CXxK1',
                linkContainer: 'BlockHeader_linkContainer__EuW_L',
                linkText: 'BlockHeader_linkText__Or6VB',
                heading: 'BlockHeader_heading__4iqvS',
                heading_notAvailable: 'BlockHeader_heading_notAvailable__r_dm1',
                shimmerCover: 'BlockHeader_shimmerCover__m2PJl',
                textShimmerContainer: 'BlockHeader_textShimmerContainer__hT_Zo',
                shimmerTitle: 'BlockHeader_shimmerTitle__kAkgm',
                shimmerDescription: 'BlockHeader_shimmerDescription__Bya4z',
            };
        },
        17332: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        18486: (e, t, r) => {
            'use strict';
            r.d(t, { T: () => x });
            var i = r(88800),
                o = r(65724),
                s = r(53548),
                l = r(97234),
                a = r(42592),
                n = r(70598),
                c = r(17392),
                d = r(52300),
                u = r(90688),
                _ = r(7555),
                p = r(19994),
                m = r(29504),
                h = r(91292),
                f = r(16782),
                v = r.n(f);
            let C = (e) => {
                    let {
                        className: t,
                        coverUrl: r,
                        labeledForId: f,
                        subTitle: C,
                        title: x,
                        description: g,
                        viewAllActionLink: b,
                        controls: S,
                        titleSize: y = 'm',
                        coverBackgroundColor: E,
                        coverRadius: A = 's',
                        titleClassName: I,
                        titleLineClamp: L,
                        fallbackIconVariant: R,
                        available: j = !0,
                        onViewAllAction: k,
                        titleChildren: N,
                        children: T,
                        headingRef: O,
                        coverContainerClassName: P,
                        headingVariant: w = 'h3',
                        withDescriptionWidthLimit: M = !0,
                        isShimmerVisible: D,
                        isShimmerActive: U,
                        withCover: H,
                        withDescription: B,
                        forwardRef: W,
                        shimmerCoverClassName: z,
                        shouldSendAnalyticsOnLoaded: Y,
                        ...F
                    } = e;
                    (0, a.W)({ enabled: !!Y });
                    let V = (0, s.useRef)(null),
                        q = r || H,
                        K = g || B,
                        X = (0, s.useCallback)(() => {
                            V.current && 'focus' in V.current && V.current.focus();
                        }, []),
                        Z = (0, n.S)(),
                        G = (0, s.useCallback)(() => {
                            k ? k() : Z({ to: l.AppScreen.Link });
                        }, [Z, k]),
                        J = (0, s.useMemo)(
                            () =>
                                x && b && j
                                    ? (0, i.jsxs)(h.N, {
                                          className: v().title,
                                          containerClassName: v().linkContainer,
                                          textClassName: v().linkText,
                                          icon: (0, i.jsx)(d.I, { className: v().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: b,
                                          onClick: G,
                                          'data-test-id': c.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, i.jsx)(m.DZ, {
                                                  id: f,
                                                  className: (0, o.$)(v().heading, I),
                                                  variant: w,
                                                  size: y,
                                                  weight: 'bold',
                                                  lineClamp: L,
                                                  ref: O,
                                                  children: x,
                                              }),
                                              N,
                                          ],
                                      })
                                    : (0, i.jsxs)('div', {
                                          className: v().title,
                                          children: [
                                              (0, i.jsx)(m.DZ, {
                                                  id: f,
                                                  className: (0, o.$)(v().heading, I, { [v().heading_notAvailable]: !j }),
                                                  variant: w,
                                                  size: y,
                                                  weight: 'bold',
                                                  lineClamp: L,
                                                  ref: O,
                                                  'data-test-id': c.S7.BLOCK_HEADER_TITLE,
                                                  children: x,
                                              }),
                                              N,
                                          ],
                                      }),
                            [j, G, O, w, f, x, I, L, y, b, N],
                        ),
                        $ = (0, s.useMemo)(() => (B && D ? (0, i.jsx)(p.W, { isActive: U, className: v().shimmerDescription }) : g), [B, D, g, U]),
                        Q = (0, s.useMemo)(
                            () =>
                                H && D
                                    ? (0, i.jsx)(p.W, { isActive: U, className: (0, o.$)(v().shimmerCover, z), radius: 's' })
                                    : (0, i.jsx)(u._V, {
                                          src: r,
                                          fallbackIconVariant: R,
                                          style: { backgroundColor: E },
                                          className: v().cover,
                                          ref: V,
                                          onClick: X,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': c.S7.BLOCK_HEADER_COVER,
                                      }),
                            [E, r, R, X, U, D, z, H],
                        );
                    return (0, i.jsxs)('div', {
                        className: (0, o.$)(v().root, t),
                        ref: W,
                        ...F,
                        'data-test-id': c.S7.BLOCK_HEADER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: v().start,
                                children: [
                                    q && (0, i.jsx)(_.t, { radius: A, className: (0, o.$)(v().coverContainer, P), children: Q }),
                                    (0, i.jsxs)('div', {
                                        className: v().textContainer,
                                        children: [
                                            C,
                                            J,
                                            K &&
                                                (0, i.jsx)(m.HL, {
                                                    id: ''.concat(f, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: M ? 2 : void 0,
                                                    className: (0, o.$)(v().description, { [v().description_widthLimit]: M }),
                                                    'data-test-id': c.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: $,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            S || T,
                        ],
                    });
                },
                x = (0, s.forwardRef)((e, t) => (0, i.jsx)(C, { forwardRef: t, ...e }));
        },
        18610: (e, t, r) => {
            'use strict';
            r.d(t, { p: () => o });
            var i = r(53548);
            let o = () =>
                (0, i.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.pushState(t, '', e);
                    }
                }, []);
        },
        20585: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => i });
            var i = (function (e) {
                return ((e.TRAILER = 'TRAILER'), (e.ADVERT = 'ADVERT'), (e.CLIP = 'CLIP'), (e.PROMO_LANDING = 'PROMO_LANDING'), e);
            })({});
        },
        21010: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        23471: (e) => {
            e.exports = {
                root: 'CollectionClipsPageClips_root__uB8s_',
                virtualScroll: 'CollectionClipsPageClips_virtualScroll__o3uWm',
                virtualItem: 'CollectionClipsPageClips_virtualItem__UDzx8',
                virtualItemRow: 'CollectionClipsPageClips_virtualItemRow__RPIOY',
                virtualItemRow_withTopBorder: 'CollectionClipsPageClips_virtualItemRow_withTopBorder__Q6k2l',
                virtualItemRow_withBottomBorder: 'CollectionClipsPageClips_virtualItemRow_withBottomBorder__D5Dep',
                clipsWillLike: 'CollectionClipsPageClips_clipsWillLike__IhK8Q',
            };
        },
        24548: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => i });
            let i = { delay: { open: 1e3, close: 0 } };
        },
        29831: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => o });
            var i = r(48987);
            let o = (e, t) => {
                let { seconds: r, hours: o, minutes: s } = (0, i.e)(e);
                return t({ id: 'time.hours-minutes-seconds' }, { hours: o, minutes: s, seconds: r });
            };
        },
        29832: (e, t, r) => {
            'use strict';
            r.d(t, { MN: () => d, hg: () => c });
            var i,
                o = r(53548),
                s = {
                    5881: (e, t, r) => {
                        function i() {
                            for (var e, t, r = 0, i = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            i,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (i = e(t[r])) && (o && (o += ' '), (o += i));
                                            else for (r in t) t[r] && (o && (o += ' '), (o += r));
                                        return o;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (r.r(t), r.d(t, { clsx: () => i, default: () => o }));
                        let o = i;
                    },
                    8765: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
                            root: 'KL50tMDvfAdw_9MzcVht',
                            bottom: 'bL0wE1Bui8zpIZbvMVL3',
                            top: 'P6gOmyFtXyetUz0dqhF3',
                            bottom_left: 'RvWjZle1erRBXzJEF9Zj',
                            bottom_right: 'bBh7lvgdfF7bqNqlK78Q',
                            label: 'FgncHYHPDU14dLddn0wF',
                            controls: 'PBhQ1krUFiAybu_BS2YE',
                            controls_radius_default: 'cSCPJSa6Lx6OnpM4ljX9',
                            controls_radius_round: 'kHUOlGxOaBwL4P3jEBXU',
                            controls_visible: 'QZC5vQL9p11QsEkdkTtZ',
                        };
                    },
                    3550: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
                            root: 'laBJlJAaqEVS0i_4Ot3l',
                            titleContainer: 'LmhA6nlLyzxwYIX31gYa',
                            wrapper: 'IO4kvpDGNI2J0CHwcKSf',
                            content: 'l8SktNpJd30JWp1owp_b',
                            content_left: 'Mb33JzAWx9EjbQAeScFt',
                            description: 'kbcBH9meMfY6Du_xQNnI',
                            content_center: 'Dp41JRuLGzwV3MHBYHMC',
                            content_right: 'eOsuNCgUirwAw16iUKLu',
                            title: 'FAmeEGy52GX1k0xZuPDn',
                            content_linesCount_1: 'Cfj1Wkh1bvQMCfk1mZwK',
                            content_linesCount_2: 'lV4OXsCTURC5K1s9Q5mx',
                            content_linesCount_3: 'PVBDIXF2RTUThmbNT9sV',
                            content_linesCount_4: 'ND4XIwkIYtNoU89EOISr',
                        };
                    },
                    4353: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = { root: 'LizdJ2L0HW7JWOvPrfly' };
                    },
                    7319: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    1246: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
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
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
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
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var o = null;
                            if ((void 0 !== i && (o = '' + i), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var s in ((i = {}), t)) 'key' !== s && (i[s] = t[s]);
                            else i = t;
                            return { $$typeof: r, type: e, key: o, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    7742: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CardControls = void 0));
                        let o = r(4377),
                            s = r(5881),
                            l = r(8532),
                            a = i(r(8765));
                        t.CardControls = (e) => {
                            let {
                                    className: t,
                                    playControl: r,
                                    likeControl: i,
                                    menuControl: n,
                                    pinControl: c,
                                    trailerControl: d,
                                    isVisible: u,
                                    radius: _ = 'default',
                                    bottomContainerClassName: p,
                                    labelText: m,
                                } = e,
                                h = d || r,
                                f = n || i;
                            return (0, o.jsxs)('div', {
                                className: (0, s.clsx)(
                                    a.default.root,
                                    a.default.controls,
                                    { [a.default.controls_visible]: u },
                                    a.default['controls_radius_'.concat(_)],
                                    t,
                                ),
                                children: [
                                    (0, o.jsx)('div', { className: a.default.top, children: c }),
                                    (0, o.jsxs)('div', {
                                        className: (0, s.clsx)(a.default.bottom, p),
                                        children: [
                                            h && (0, o.jsxs)('div', { className: a.default.bottom_left, children: [d, r] }),
                                            f && (0, o.jsxs)('div', { className: a.default.bottom_right, children: [n, i] }),
                                        ],
                                    }),
                                    !!m && (0, o.jsx)(l.Label, { className: a.default.label, children: m }),
                                ],
                            });
                        };
                    },
                    7093: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.EntityCard = void 0));
                        let o = r(4377),
                            s = r(810),
                            l = r(5881),
                            a = r(8903),
                            n = r(6530),
                            c = i(r(3550)),
                            d = (e) => {
                                let {
                                    forwardRef: t,
                                    view: r,
                                    className: i,
                                    textPosition: s = 'left',
                                    contentLinesCount: d = 2,
                                    title: u,
                                    description: _,
                                    explicitMarkComponent: p,
                                    chart: m,
                                    children: h,
                                    srTitle: f,
                                    wrapperClassName: v,
                                    ...C
                                } = e;
                                return (0, o.jsxs)('div', {
                                    className: (0, l.clsx)(c.default.root, i),
                                    ref: t,
                                    ...C,
                                    children: [
                                        (0, o.jsx)(n.SROnly, { children: null != f ? f : u }),
                                        (0, o.jsx)('div', { className: c.default.viewContainer, children: r }),
                                        (0, o.jsxs)('div', {
                                            className: (0, l.clsx)(c.default.wrapper, v),
                                            children: [
                                                m,
                                                (0, o.jsxs)('div', {
                                                    className: (0, l.clsx)(
                                                        c.default.content,
                                                        c.default['content_'.concat(s)],
                                                        c.default['content_linesCount_'.concat(d)],
                                                    ),
                                                    children: [
                                                        u &&
                                                            (0, o.jsxs)('div', {
                                                                className: c.default.titleContainer,
                                                                children: [
                                                                    (0, o.jsx)(a.Caption, {
                                                                        className: c.default.title,
                                                                        variant: 'div',
                                                                        type: 'entity',
                                                                        size: 's',
                                                                        weight: 'medium',
                                                                        lineClamp: 2,
                                                                        children: u,
                                                                    }),
                                                                    p,
                                                                ],
                                                            }),
                                                        _,
                                                        h,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                });
                            };
                        t.EntityCard = (0, s.forwardRef)((e, t) => (0, o.jsx)(d, { forwardRef: t, ...e }));
                    },
                    2018: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        let o = r(4377),
                            s = r(5881),
                            l = r(8903),
                            a = i(r(4353));
                        t.Label = (e) => {
                            let { children: t, className: r, size: i = 's', ...n } = e;
                            return (0, o.jsx)(l.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: i,
                                lineClamp: 1,
                                className: (0, s.clsx)(a.default.root, r),
                                ...n,
                                children: t,
                            });
                        };
                    },
                    8532: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        var i = r(2018);
                        Object.defineProperty(t, 'Label', {
                            enumerable: !0,
                            get: function () {
                                return i.Label;
                            },
                        });
                    },
                    5531: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let o = r(4377),
                            s = r(5881),
                            l = r(810),
                            a = i(r(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: r, children: i, ...n } = e,
                                c = (0, s.clsx)(a.default.root, { [a.default.focusable]: r }, t);
                            return (0, l.isValidElement)(i)
                                ? (0, l.cloneElement)(i, { ...n, className: (0, s.clsx)(c, i.props.className) })
                                : (0, o.jsx)('span', { className: c, ...n, children: i });
                        };
                    },
                    6530: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        var i = r(5531);
                        Object.defineProperty(t, 'SROnly', {
                            enumerable: !0,
                            get: function () {
                                return i.SROnly;
                            },
                        });
                    },
                    3412: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let o = r(4377),
                            s = r(5881),
                            l = r(810),
                            a = r(5987),
                            n = i(r(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: r, type: i = 'text', size: l = 's', className: c, children: d, weight: u = 'medium', ..._ } = e;
                            return (0, o.jsx)(a.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, s.clsx)(n.default.root, n.default['root_'.concat(i, '_').concat(l)], n.default['root_weight_'.concat(u)], c),
                                ..._,
                                children: d,
                            });
                        }),
                            (t.Caption = (0, l.forwardRef)((e, r) => (0, o.jsx)(t.CaptionComponent, { forwardRef: r, ...e }))));
                    },
                    1641: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0));
                        let o = r(4377),
                            s = r(5881),
                            l = r(810),
                            a = r(5987),
                            n = i(r(2445));
                        ((t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: r, weight: i = 'bold', size: l = 's', className: c, children: d, ...u } = e;
                            return (0, o.jsx)(a.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, s.clsx)(n.default.root, n.default['root_size_'.concat(l)], n.default['root_weight_'.concat(i)], c),
                                ...u,
                                children: d,
                            });
                        }),
                            (t.Heading = (0, l.forwardRef)((e, r) => (0, o.jsx)(t.HeadingComponent, { forwardRef: r, ...e }))));
                    },
                    5987: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let o = r(4377),
                            s = r(5881),
                            l = r(810),
                            a = i(r(61));
                        function n(e) {
                            let { forwardRef: t, style: r, className: i, children: l, variant: n, lineClamp: c, ...d } = e,
                                u = c && 'string' == typeof l ? l : void 0;
                            return (0, o.jsx)(n, {
                                style: { ...r, WebkitLineClamp: c },
                                ref: t,
                                title: u,
                                className: (0, s.clsx)(
                                    a.default.root,
                                    { [a.default.root_clamp]: c && c > 0, [a.default.root_clamp_oneline]: c && 1 === c, [a.default.root_clamp_multiline]: c && c > 1 },
                                    i,
                                ),
                                ...d,
                                children: l,
                            });
                        }
                        ((t.TypographyComponent = n), (t.Typography = (0, l.forwardRef)((e, t) => (0, o.jsx)(n, { forwardRef: t, ...e }))));
                    },
                    8903: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.Caption = void 0));
                        var i = r(3412);
                        Object.defineProperty(t, 'Caption', {
                            enumerable: !0,
                            get: function () {
                                return i.Caption;
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
                        e.exports = i || (i = r.t(o, 2));
                    },
                },
                l = {};
            function a(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var r = (l[e] = { exports: {} });
                return (s[e].call(r.exports, r, r.exports, a), r.exports);
            }
            ((a.d = (e, t) => {
                for (var r in t) a.o(t, r) && !a.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (a.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var n = {};
            (() => {
                (Object.defineProperty(n, 'X$', { value: !0 }), (n.kk = n.m7 = void 0));
                var e = a(7093);
                Object.defineProperty(n, 'm7', {
                    enumerable: !0,
                    get: function () {
                        return e.EntityCard;
                    },
                });
                var t = a(7742);
                Object.defineProperty(n, 'kk', {
                    enumerable: !0,
                    get: function () {
                        return t.CardControls;
                    },
                });
            })();
            var c = n.kk,
                d = n.m7;
            n.X$;
        },
        31764: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => _ });
            var i = r(88800),
                o = r(65724),
                s = r(53548),
                l = r(17392),
                a = r(88021),
                n = r(96817),
                c = r(52300),
                d = r(89544),
                u = r.n(d);
            let _ = (e) => {
                let {
                        carouselRef: t,
                        backwardControlClassName: r,
                        forwardControlClassName: d,
                        className: _,
                        withSecondaryColor: p,
                        buttonSize: m = 'xxxs',
                        buttonVariant: h = 'outline',
                    } = e,
                    { swipeBackward: f, swipeForward: v, shouldBackwardButtonBeDisabled: C, shouldForwardButtonBeDisabled: x, shouldHideControls: g } = (0, a.Y)(t),
                    b = (0, s.useCallback)(
                        (e) => {
                            (f(), e.stopPropagation());
                        },
                        [f],
                    ),
                    S = (0, s.useCallback)(
                        (e) => {
                            (v(), e.stopPropagation());
                        },
                        [v],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, o.$)(u().root, _),
                    'data-test-id': l.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, i.jsx)(n.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, o.$)(u().control, r, { [u().control_hidden]: g, [u().control_withSecondaryColor]: p }),
                            onClick: b,
                            size: m,
                            radius: 'round',
                            variant: h,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: C,
                            'data-test-id': l.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, i.jsx)(n.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, o.$)(u().control, d, { [u().control_hidden]: g, [u().control_withSecondaryColor]: p }),
                            onClick: S,
                            size: m,
                            radius: 'round',
                            variant: h,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: x,
                            'data-test-id': l.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        32596: (e, t, r) => {
            'use strict';
            r.d(t, { SomethingWentWrong: () => O });
            var i = r(88800),
                o = r(65724),
                s = r(84961),
                l = r(53548),
                a = r(2058),
                n = r(88969);
            r(30282);
            var c = r(96817),
                d = r(52300),
                u = r(29504),
                _ = r(97234),
                p = r(59714),
                m = r(43054),
                h = r(18117),
                f = r(93940),
                v = r(24709);
            let C = (0, v.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, m.s)()) ? void 0 : e.evgenInstance,
                        { hash: r } = (0, h.g)(),
                        { screen: i } = (0, f.j)();
                    return {
                        sendRefreshEvent: (0, l.useCallback)(() => {
                            if (!t || !r || !(null == i ? void 0 : i.pageId)) return;
                            let e = {
                                actionType: _.ActionType.Refresh,
                                userInteractionType: _.UserInteractionType.Tap,
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                hash: r,
                                pageId: i.pageId,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, p.bv)(t, e);
                        }, [t, r, null == i ? void 0 : i.pageId]),
                    };
                }),
                x = (0, v.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let r = null == (t = (0, m.s)()) ? void 0 : t.evgenInstance,
                        { hash: i } = (0, h.g)(),
                        { screen: o } = (0, f.j)();
                    (0, l.useEffect)(() => {
                        if (!r || !i || !(null == o ? void 0 : o.pageId)) return;
                        let t = {
                            entityType: _.EntityTypes.Error,
                            entityId: _.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: i,
                            pageId: o.pageId,
                            pageStyle: _.PageStyles.Fullscreen,
                            pagePlacement: _.PagePlacements.Fullscreen,
                            mainObjectType: _.DomainObjectType.NonApplicable,
                            mainObjectId: _.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, p.z5)(r, t);
                    }, [r, e, i, null == o ? void 0 : o.pageId]);
                });
            var g = r(44230),
                b = r(4370),
                S = r(72288),
                y = r(97956),
                E = r(56248),
                A = r(90688),
                I = r(78940);
            let L = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var R = r(96856),
                j = r.n(R);
            let k = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: r = !0, onBack: s } = e,
                    { slam: l } = (0, S.g)(),
                    { contentRef: a } = (0, g.g)(),
                    d = (0, I.Z)(b.Z.mymusicDownloadsTracks.href);
                return (0, i.jsxs)('div', {
                    className: (0, o.$)(j().root, t),
                    children: [
                        r &&
                            (0, i.jsx)(E.L, {
                                withBackwardFallback: '/',
                                className: (0, o.$)(j().navigation, { [j().navigation_desktop]: !a }),
                                withForwardControl: !1,
                                onBackwardClick: s,
                            }),
                        (0, i.jsxs)('div', {
                            className: (0, o.$)(j().content, { [j().content_shrink]: !r }),
                            children: [
                                (0, i.jsx)(A._V, { className: j().image, src: L.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, i.jsxs)('div', {
                                    className: j().message,
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            className: j().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, i.jsx)(n.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            className: j().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, i.jsx)(n.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                l.hasDownloadedTracks &&
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
                                            children: (0, i.jsx)(n.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var N = r(9184),
                T = r.n(N);
            let O = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: r = !0, onBack: s } = e,
                    { formatMessage: _ } = (0, a.A)(),
                    p = (0, l.useContext)(S.P),
                    m = null == p ? void 0 : p.experiments.checkExperiment(y.z.WebNextUnstableMusicScreen, 'on'),
                    h = _(m ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                x(h);
                let { sendRefreshEvent: f } = C(),
                    v = (0, l.useCallback)(() => {
                        (f(), (window.location.href = b.Z.main.href));
                    }, [f]),
                    { contentRef: A } = (0, g.g)();
                return m
                    ? (0, i.jsx)(k, { className: t, withBackwardControl: r, onBack: s })
                    : (0, i.jsxs)('div', {
                          className: (0, o.$)(T().root, t),
                          children: [
                              r &&
                                  (0, i.jsx)(E.L, {
                                      withBackwardFallback: '/',
                                      className: (0, o.$)(T().navigation, { [T().navigation_desktop]: !A }),
                                      withForwardControl: !1,
                                      onBackwardClick: s,
                                  }),
                              (0, i.jsxs)('div', {
                                  className: (0, o.$)(T().content, { [T().content_shrink]: !r }),
                                  children: [
                                      (0, i.jsx)(d.I, { className: T().icon, variant: 'attention', size: 'xxl' }),
                                      (0, i.jsx)(u.DZ, { className: (0, o.$)(T().title, T().important), variant: 'h3', size: 'xs', children: h }),
                                      (0, i.jsxs)(u.HL, {
                                          className: (0, o.$)(T().text, T().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, i.jsx)(n.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, i.jsx)(c.$, {
                                          onClick: v,
                                          className: T().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, i.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, i.jsx)(n.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        34303: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => i });
            var i = (function (e) {
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
        35994: (e, t, r) => {
            'use strict';
            r.d(t, { R: () => o });
            var i = r(67174);
            let o = (e) => (0, i.u)('/artist/:artistId', { params: { artistId: e } });
        },
        37438: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        37670: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => s });
            var i = r(53548);
            r(30282);
            var o = r(58390);
            let s = (e) => {
                let t = (0, o.usePathname)(),
                    [r, s] = (0, i.useState)(!1);
                ((0, i.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, i.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !r && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), s(!0));
                    }, [e, r, t]));
            };
        },
        38501: (e, t, r) => {
            'use strict';
            r.d(t, { d: () => o });
            var i = r(72288);
            let o = () => {
                let {
                    settings: { isMobile: e },
                } = (0, i.g)();
                return !e;
            };
        },
        40634: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => x });
            var i = r(88800),
                o = r(65724),
                s = r(84961),
                l = r(53548),
                a = r(97234),
                n = r(70598),
                c = r(17392),
                d = r(29993),
                u = r(90688),
                _ = r(19934),
                p = r(7555),
                m = r(29504),
                h = r(78940),
                f = r(72288),
                v = r(80932),
                C = r.n(v);
            let x = (0, s.PA)((e) => {
                let { artist: t, className: r } = e,
                    { fullscreenPlayer: s } = (0, f.g)(),
                    v = (0, h.Z)(t.url),
                    g = (0, n.S)(),
                    b = (0, l.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, i.jsx)(x, { artist: t, className: r }, t.id)), e), []))
                        );
                    }, [t, r]),
                    S = (0, d.c)((e) => {
                        (s.modal.isOpened && s.modal.close(), g({ to: a.AppScreen.ArtistScreen }), v(e));
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(_.Dr, {
                            className: (0, o.$)(C().root, r),
                            onClick: S,
                            'data-test-id': c.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, i.jsx)(p.t, {
                                    radius: 'round',
                                    className: C().cover,
                                    children: (0, i.jsx)(u._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: C().image }),
                                }),
                                (0, i.jsx)(m.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        b,
                    ],
                });
            });
        },
        42674: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        44318: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => a });
            var i = r(29993),
                o = r(72288),
                s = r(18610),
                l = r(16717);
            let a = () => {
                let { fullscreenVideoPlayer: e } = (0, o.g)(),
                    t = (0, s.p)();
                return (0, i.c)(function (r) {
                    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    (e.setIds(r), e.setClipIndex(i), t((0, l.J)(r, i)), e.modal.open());
                });
            };
        },
        44599: (e, t, r) => {
            'use strict';
            r.d(t, { _: () => u });
            var i = r(97234),
                o = r(58255),
                s = r(43054),
                l = r(18117),
                a = r(93940),
                n = r(24709),
                c = r(29993),
                d = r(12816);
            let u = (0, n.n)({ event: 'LandingBlock.Navigated', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, (e) => {
                let t = (0, s.s)(),
                    { hash: r } = (0, l.g)(),
                    { screen: n, block: u, object: _, tab: p } = (0, a.j)();
                return (0, c.c)(() => {
                    let s = null == n ? void 0 : n.pageIdForFrom;
                    if (!t || !n || !u || !_ || void 0 === _.objectId || !s || !d.x.includes(s) || void 0 === r || !e) return;
                    let l = n.pageId;
                    if (void 0 === l) return;
                    let a = {
                        hash: r,
                        pageId: s,
                        entityType: u.blockType,
                        entityId: u.blockId,
                        entityPosX: u.blockPosX,
                        entityPosY: u.blockPosY,
                        objectId: _.objectId,
                        objectType: _.objectType,
                        objectPosX: _.objectPosX,
                        objectPosY: _.objectPosY,
                        objectsCount: u.objectsCount,
                        from: l,
                        to: i.AppScreen.VideoScreen,
                    };
                    (d.q.some((e) => e === s) &&
                        ((a.tabId = null == p ? void 0 : p.tabId),
                        (a.tabPos = null == p ? void 0 : p.tabPos),
                        (a.isTabSelectedByDefault = null == p ? void 0 : p.isTabSelectedByDefault)),
                        n.skeletonId && (a.skeletonId = n.skeletonId),
                        n.mainObjectType && (a.mainObjectType = n.mainObjectType),
                        n.mainObjectId && (a.mainObjectId = n.mainObjectId),
                        Object.values(a).some((e) => void 0 === e) || (0, o.QS)(t.evgenInstance, a));
                });
            });
        },
        48082: (e) => {
            e.exports = { root: 'TextShimmer_root__qqWug', text: 'TextShimmer_text__z8oN9' };
        },
        48468: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        48987: (e, t, r) => {
            'use strict';
            r.d(t, { e: () => i });
            let i = (e) => {
                let t = Math.round(e);
                return { hours: Math.floor(t / 3600), minutes: Math.floor((t % 3600) / 60), seconds: t % 60 };
            };
        },
        53323: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => d });
            var i,
                o = r(87819),
                s = r(53548),
                l = {
                    5881: (e, t, r) => {
                        function i() {
                            for (var e, t, r = 0, i = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            i,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (i = e(t[r])) && (o && (o += ' '), (o += i));
                                            else for (r in t) t[r] && (o && (o += ' '), (o += r));
                                        return o;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (r.r(t), r.d(t, { clsx: () => i, default: () => o }));
                        let o = i;
                    },
                    2876: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => i }));
                        let i = { root: 'IZnFMW4gXBshJODnvB1P', item: 'VJ9IexhAEuYSCyGiMfN4' };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var o = null;
                            if ((void 0 !== i && (o = '' + i), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var s in ((i = {}), t)) 'key' !== s && (i[s] = t[s]);
                            else i = t;
                            return { $$typeof: r, type: e, key: o, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    792: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useCallbackRef = void 0));
                        let i = r(810);
                        t.useCallbackRef = function (e) {
                            let t = (0, i.useRef)({
                                stableFn: function () {
                                    for (var e = arguments.length, r = Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                                    return t.current.callback(...r);
                                },
                                callback: e,
                            });
                            return (
                                (0, i.useInsertionEffect)(() => {
                                    t.current.callback = e;
                                }),
                                t.current.stableFn
                            );
                        };
                    },
                    597: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useIntersectionObserver = t.createIntersectionObserver = t.getElementNameByDataAttribute = t.isInViewportNow = t.defaultOptions = void 0));
                        let i = r(810),
                            { innerWidth: o = 0, innerHeight: s = 0 } = window;
                        function l(e) {
                            let { top: t, right: r, bottom: i, left: l } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= s) || (i >= 0 && i <= s)) && ((l >= 0 && l <= o) || (r >= 0 && r <= o));
                        }
                        function a(e) {
                            var t, r;
                            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (r = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, i)) ? r : e.attributes[0];
                        }
                        function n(e, t) {
                            let r = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, r);
                                });
                            }, t);
                            return r;
                        }
                        ((t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = l),
                            (t.getElementNameByDataAttribute = a),
                            (t.createIntersectionObserver = n),
                            (t.useIntersectionObserver = function (e, r, o) {
                                let [{ freezeOnceVisible: s, preflightCheck: c, ...d }, u = !1] =
                                        'boolean' == typeof r || void 0 === r ? [t.defaultOptions, r] : [{ ...t.defaultOptions, ...r }, o],
                                    [_, p] = (0, i.useState)({}),
                                    m = (0, i.useRef)(new Set()),
                                    h = (0, i.useMemo)(
                                        () =>
                                            u
                                                ? null
                                                : n((e) => {
                                                      let t = a(e.target);
                                                      if (t && h) {
                                                          if (m.current.has(t)) return;
                                                          (p((r) => ({ ...r, [t]: { isIntersecting: e.isIntersecting } })),
                                                              s && e.isIntersecting && (m.current.add(t), h.unobserve(e.target)));
                                                      }
                                                  }, d),
                                        [u],
                                    );
                                return (
                                    (0, i.useLayoutEffect)(
                                        () => (
                                            h &&
                                                !u &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let t = !1;
                                                        if (c && (t = l(e.current))) {
                                                            let t = a(e.current);
                                                            p((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                                                        }
                                                        t || h.observe(e.current);
                                                    }
                                                }),
                                            () => {
                                                h && h.disconnect();
                                            }
                                        ),
                                        [u, h, e.length],
                                    ),
                                    _
                                );
                            }));
                    },
                    4012: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useMergeRefs = void 0));
                        var i = r(1964);
                        Object.defineProperty(t, 'useMergeRefs', {
                            enumerable: !0,
                            get: function () {
                                return i.useMergeRefs;
                            },
                        });
                    },
                    1676: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useToggle = void 0));
                        let i = r(810);
                        t.useToggle = (e) => {
                            let [t, r] = (0, i.useState)(e);
                            (0, i.useEffect)(() => {
                                r(e);
                            }, [e]);
                            let o = (0, i.useCallback)(() => {
                                    r((e) => !e);
                                }, []),
                                s = (0, i.useCallback)(() => {
                                    r(!0);
                                }, []),
                                l = (0, i.useCallback)(() => {
                                    r(!1);
                                }, []);
                            return { state: t, toggle: o, setState: r, toggleTrue: s, toggleFalse: l };
                        };
                    },
                    1258: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.AutoScrollCarousel = void 0));
                        let i = r(4377),
                            o = r(810),
                            s = r(792),
                            l = r(597),
                            a = r(4012),
                            n = r(1676),
                            c = r(7962),
                            d = r(2134),
                            u = r(7262);
                        t.AutoScrollCarousel = (e) => {
                            let {
                                    ref: t,
                                    children: r,
                                    autoplay: { enabled: _, delay: p, stopOnMouseEnter: m, stopOnFocusIn: h, stopOnInteraction: f },
                                    onPointerEnter: v,
                                    onPointerLeave: C,
                                    onPointerDown: x,
                                    onPointerUp: g,
                                    onPointerCancel: b,
                                    onFocus: S,
                                    onBlur: y,
                                    onScroll: E,
                                    onScrollEnd: A,
                                    ...I
                                } = e,
                                { state: L, toggleTrue: R, toggleFalse: j } = (0, n.useToggle)(!1),
                                { state: k, toggleTrue: N, toggleFalse: T } = (0, n.useToggle)(!1),
                                { state: O, setState: P, toggleFalse: w } = (0, n.useToggle)(!1),
                                { state: M, setState: D } = (0, n.useToggle)(!1),
                                { state: U, setState: H } = (0, n.useToggle)(!1),
                                { state: B, toggleTrue: W, toggleFalse: z } = (0, n.useToggle)(!1),
                                { state: Y, toggleTrue: F } = (0, n.useToggle)(!1),
                                { state: V, setState: q } = (0, n.useToggle)(!1),
                                K = (0, o.useRef)(null),
                                X = (0, a.useMergeRefs)([K, t]),
                                Z = (0, u.useScrollEndFallback)(z),
                                G = o.Children.count(r),
                                J = _ && G > 1 && M && U && !V && !((m && O) || (h && L) || (f && Y) || k || B),
                                $ = (0, s.useCallbackRef)((e) => {
                                    (P('mouse' === e.pointerType), null == v || v(e));
                                }),
                                Q = (0, s.useCallbackRef)((e) => {
                                    (w(), T(), null == C || C(e));
                                }),
                                ee = (0, s.useCallbackRef)((e) => {
                                    (N(), F(), null == x || x(e));
                                }),
                                et = (0, s.useCallbackRef)((e) => {
                                    (T(), null == g || g(e));
                                }),
                                er = (0, s.useCallbackRef)((e) => {
                                    (T(), null == b || b(e));
                                }),
                                ei = (0, s.useCallbackRef)((e) => {
                                    (k || R(), null == S || S(e));
                                }),
                                eo = (0, s.useCallbackRef)((e) => {
                                    (e.currentTarget.contains(e.relatedTarget) || j(), null == y || y(e));
                                }),
                                es = (0, s.useCallbackRef)((e) => {
                                    (W(), Z(e.currentTarget), null == E || E(e));
                                }),
                                el = (0, s.useCallbackRef)((e) => {
                                    (z(), null == A || A(e));
                                });
                            return (
                                (0, o.useEffect)(() => {
                                    let e = matchMedia('(prefers-reduced-motion: reduce)'),
                                        t = () => q(e.matches);
                                    return (t(), e.addEventListener('change', t), () => e.removeEventListener('change', t));
                                }, [q]),
                                (0, o.useEffect)(() => {
                                    let e = K.current;
                                    if (!e) return;
                                    let t = (0, l.createIntersectionObserver)((e) => {
                                        D(e.isIntersecting && e.intersectionRatio > 0);
                                    });
                                    return (t.observe(e), () => t.disconnect());
                                }, [K, D]),
                                (0, o.useEffect)(() => {
                                    let e = () => H('visible' === document.visibilityState);
                                    return (document.addEventListener('visibilitychange', e), e(), () => document.removeEventListener('visibilitychange', e));
                                }, [H]),
                                (0, o.useEffect)(() => {
                                    let e = K.current;
                                    if (!e || !J) return;
                                    let t = setInterval(() => {
                                        let r = (0, d.getNextCarouselScrollPosition)(e);
                                        void 0 !== r && (clearInterval(t), W(), e.scrollTo({ left: r, behavior: 'smooth' }));
                                    }, p);
                                    return () => clearInterval(t);
                                }, [K, p, J, G, W]),
                                (0, i.jsx)(c.CarouselBase, {
                                    ref: X,
                                    ...I,
                                    onPointerEnter: $,
                                    onPointerLeave: Q,
                                    onPointerDown: ee,
                                    onPointerUp: et,
                                    onPointerCancel: er,
                                    onFocus: ei,
                                    onBlur: eo,
                                    onScroll: es,
                                    onScrollEnd: el,
                                    children: r,
                                })
                            );
                        };
                    },
                    2134: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getNextCarouselScrollPosition = void 0),
                            (t.getNextCarouselScrollPosition = (e) => {
                                let t = e.scrollWidth - e.clientWidth;
                                if (t <= 1) return;
                                let r = getComputedStyle(e),
                                    i = parseFloat(r.scrollPaddingLeft) || 0,
                                    o = parseFloat(r.scrollPaddingRight) || 0,
                                    s = e.getBoundingClientRect().left + e.clientLeft,
                                    l = 0;
                                for (let r of e.children) {
                                    let a = r.getBoundingClientRect(),
                                        n = getComputedStyle(r).scrollSnapAlign,
                                        c = a.left - s + e.scrollLeft,
                                        d = Math.max(0, Math.min(t, 'center' === n ? c + a.width / 2 - (e.clientWidth + i - o) / 2 : c - i));
                                    if (d > e.scrollLeft + 1) {
                                        l = d;
                                        break;
                                    }
                                }
                                if (!(1 >= Math.abs(l - e.scrollLeft))) return l;
                            }));
                    },
                    7262: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useScrollEndFallback = void 0));
                        let i = r(810),
                            o = r(792);
                        t.useScrollEndFallback = (e) => {
                            let t = (0, i.useRef)(void 0),
                                r = (0, o.useCallbackRef)(e);
                            return (
                                (0, i.useEffect)(() => () => clearTimeout(t.current), []),
                                (0, o.useCallbackRef)((e) => {
                                    'onscrollend' in e || (clearTimeout(t.current), (t.current = setTimeout(r, 200)));
                                })
                            );
                        };
                    },
                    4014: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Carousel = void 0));
                        let i = r(4377),
                            o = r(1258),
                            s = r(7962);
                        t.Carousel = (e) => {
                            let { autoplay: t, ...r } = e;
                            return t ? (0, i.jsx)(o.AutoScrollCarousel, { ...r, autoplay: t }) : (0, i.jsx)(s.CarouselBase, { ...r });
                        };
                    },
                    7962: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CarouselBase = void 0));
                        let o = r(4377),
                            s = r(5881),
                            l = r(810),
                            a = i(r(2876));
                        t.CarouselBase = (e) => {
                            let { className: t, itemClassName: r, children: i, ref: n, role: c, ...d } = e;
                            return (0, o.jsx)('ol', {
                                ref: n,
                                className: (0, s.clsx)(a.default.root, t),
                                ...d,
                                role: null != c ? c : 'list',
                                children: l.Children.map(i, (e) => (0, o.jsx)('li', { className: (0, s.clsx)(a.default.item, r), children: e })),
                            });
                        };
                    },
                    1964: (e) => {
                        e.exports = o;
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(s, 2));
                    },
                },
                a = {};
            function n(e) {
                var t = a[e];
                if (void 0 !== t) return t.exports;
                var r = (a[e] = { exports: {} });
                return (l[e].call(r.exports, r, r.exports, n), r.exports);
            }
            ((n.d = (e, t) => {
                for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (n.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var c = {};
            (() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                var e = n(4014);
                Object.defineProperty(c, 'l', {
                    enumerable: !0,
                    get: function () {
                        return e.Carousel;
                    },
                });
            })();
            var d = c.l;
            c.X;
        },
        54965: (e, t, r) => {
            'use strict';
            r.d(t, { E: () => o });
            let i = (e, t) => (t > 0 ? Math.floor(e / t) : 0),
                o = (e, t) => {
                    let r = i(e, 3600),
                        o = i(e - 3600 * r, 60),
                        s = e - 3600 * r - 60 * o,
                        l = i(t || e, 3600) > 0,
                        a = [o, s];
                    return (l && a.unshift(r), a.map((e) => String(e).padStart(2, '0')).join(':'));
                };
        },
        55737: (e) => {
            e.exports = {
                itemCounter_3: 'ClipsCarouselContent_itemCounter_3__c_H3V',
                item: 'ClipsCarouselContent_item__Yy7_P',
                important: 'ClipsCarouselContent_important__nZYA0',
                itemCounter_5: 'ClipsCarouselContent_itemCounter_5__QeQd_',
            };
        },
        56265: (e) => {
            e.exports = {
                root: 'CollectionClipsPageClipsWillLike_root__uS0_8',
                carouselItem: 'CollectionClipsPageClipsWillLike_carouselItem__0C0_W',
                important: 'CollectionClipsPageClipsWillLike_important__U_2ET',
                carouselBlockHeader: 'CollectionClipsPageClipsWillLike_carouselBlockHeader__wDnJp',
                carouselBlock: 'CollectionClipsPageClipsWillLike_carouselBlock__La_8Q',
            };
        },
        57072: (e, t) => {
            'use strict';
            t.f = Object.freeze({ xxxxs: 320, xxxs: 480, xxs: 768, xs: 960, s: 1060, m: 1280, l: 1366, xl: 1920, xxl: 2560, xxxl: 3840, tablet: 1024 });
        },
        57328: (e, t, r) => {
            'use strict';
            r.d(t, { WithAuth: () => h });
            var i = r(88800),
                o = r(84961),
                s = r(58390),
                l = r(65724),
                a = r(88969),
                n = r(29504),
                c = r(7628),
                d = r(42674),
                u = r.n(d);
            let _ = (0, o.PA)(() =>
                (0, i.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, i.jsx)(n.DZ, {
                            className: (0, l.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, i.jsx)(a.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, i.jsx)(n.HL, {
                            className: (0, l.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, i.jsx)(a.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, i.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var p = r(4370),
                m = r(72288);
            let h = (0, o.PA)((e) => {
                let { children: t, withRedirectToMainPage: r } = e,
                    { user: o } = (0, m.g)();
                return o.isAuthorized ? t : (r && (0, s.redirect)(p.Z.main.href), (0, i.jsx)(_, {}));
            });
        },
        60266: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => l });
            var i = r(88800);
            r(30282);
            var o = r(11006),
                s = r.n(o);
            let l = (e) => {
                let { children: t } = e;
                return (0, i.jsx)('footer', { className: s().empty });
            };
        },
        62293: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => o });
            var i = r(97956);
            let o = (e) => {
                let { checkExperiment: t, getDisclaimerContent: r, getExplicitContent: o, userRegion: s } = e;
                return 'ru' === s && t(i.z.WebNextFooterDisclaimer, 'on') ? r() : o();
            };
        },
        64310: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => n });
            var i = r(88800),
                o = r(65724),
                s = r(19994),
                l = r(48082),
                a = r.n(l);
            let n = (e) => {
                let { className: t, textClassName: r, isActive: l } = e;
                return (0, i.jsx)('div', { className: (0, o.$)(a().root, t), children: (0, i.jsx)(s.W, { className: (0, o.$)(a().text, r), isActive: l, radius: 's' }) });
            };
        },
        66363: (e, t, r) => {
            'use strict';
            r.d(t, { NS: () => s, Nh: () => o, xW: () => l });
            var i = r(9519);
            let o = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
            class s {
                getHeaders(e) {
                    return e instanceof Headers ? Object.fromEntries(e.entries()) : e;
                }
                getUrl(e) {
                    return new URL(e || 'https://unknown');
                }
                constructor(e) {
                    ((0, i._)(this, 'logger', void 0),
                        (0, i._)(this, 'beforeRequestHook', (e) => {
                            let t = this.getUrl(e.url);
                            this.logger.info('[Resource] Request started '.concat(e.method, ' ').concat(t.origin, ' ').concat(t.pathname).concat(t.search), {
                                request: { method: e.method, url: e.url, headers: this.getHeaders(e.headers), body: e.json },
                            });
                        }),
                        (0, i._)(this, 'beforeRetryHook', (e, t) => {
                            let r = e.cause;
                            if (o(r)) {
                                var i, s, l, a, n, c, d, u, _, p, m, h, f, v;
                                let o = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (i = r.request) ? void 0 : i.method) || (null == (s = r.options) ? void 0 : s.method),
                                        url: (null == (l = r.request) ? void 0 : l.url) || (null == (a = r.options) ? void 0 : a.url),
                                        headers: this.getHeaders((null == (n = r.request) ? void 0 : n.headers) || (null == (c = r.options) ? void 0 : c.headers)),
                                        body: (null == (d = r.request) ? void 0 : d.json) || (null == (u = r.options) ? void 0 : u.json),
                                        retries: t,
                                    },
                                };
                                void 0 !== r.response &&
                                    (o.response = {
                                        statusCode: r.response.statusCode,
                                        headers: this.getHeaders(r.response.headers),
                                        time: null == (v = r.response.timings) || null == (f = v.phases) ? void 0 : f.total,
                                    });
                                let C = this.getUrl((null == (_ = r.request) ? void 0 : _.url) || (null == (p = r.options) ? void 0 : p.url));
                                this.logger.warn(
                                    '[Resource] Retry request '
                                        .concat((null == (m = r.request) ? void 0 : m.method) || (null == (h = r.options) ? void 0 : h.method), ' ')
                                        .concat(C.origin, ' ')
                                        .concat(C.pathname)
                                        .concat(C.search),
                                    o,
                                );
                            } else
                                this.logger.warn('[Resource] Retry request (unknown)', {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                });
                        }),
                        (0, i._)(this, 'afterResponseHook', (e) => {
                            if ((e.statusCode || e.status) >= 200 && 299 >= (e.statusCode || e.status)) {
                                var t, r;
                                let i = this.getUrl(e.url);
                                this.logger.info(
                                    '[Resource] Request resolved '
                                        .concat(e.statusCode, ' ')
                                        .concat(e.request.method, ' ')
                                        .concat(i.origin, ' ')
                                        .concat(i.pathname)
                                        .concat(i.search),
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
                        (0, i._)(this, 'beforeErrorHook', (e) => {
                            let t = e.cause;
                            if (o(t)) {
                                var r, i, s, l, a, n, c, d, u, _, p, m, h, f;
                                let o = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (r = t.request) ? void 0 : r.method) || (null == (i = t.options) ? void 0 : i.method),
                                        url: (null == (s = t.request) ? void 0 : s.url) || (null == (l = t.options) ? void 0 : l.url),
                                        headers: this.getHeaders((null == (a = t.request) ? void 0 : a.headers) || (null == (n = t.options) ? void 0 : n.headers)),
                                        body: (null == (c = t.request) ? void 0 : c.json) || (null == (d = t.options) ? void 0 : d.json),
                                    },
                                };
                                void 0 !== t.response &&
                                    (o.response = {
                                        statusCode: t.response.statusCode || t.response.status,
                                        headers: this.getHeaders(t.response.headers),
                                        time: null == (f = t.response.timings) || null == (h = f.phases) ? void 0 : h.total,
                                    });
                                let v = this.getUrl((null == (u = t.request) ? void 0 : u.url) || (null == (_ = t.options) ? void 0 : _.url));
                                this.logger.error(
                                    '[Resource] Request failed '
                                        .concat((null == (p = t.request) ? void 0 : p.method) || (null == (m = t.options) ? void 0 : m.method), ' ')
                                        .concat(v.origin, ' ')
                                        .concat(v.pathname)
                                        .concat(v.search, ', reason: ')
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
            let l = [
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
        68142: (e) => {
            e.exports = {
                root: 'CollectionClipsPage_root__Z1yh9',
                content: 'CollectionClipsPage_content__68gZ1',
                scrollContent: 'CollectionClipsPage_scrollContent__6F_37',
                header: 'CollectionClipsPage_header__L_hq2',
                footer: 'CollectionClipsPage_footer__0IfmB',
            };
        },
        69323: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => D });
            var i = r(88800),
                o = r(65724),
                s = r(55482),
                l = r(84961),
                a = r(53548),
                n = r(2058),
                c = r(35412),
                d = r(91177),
                u = r(17392),
                _ = r(18593),
                p = r(29993),
                m = r(29832),
                h = r(90688),
                f = r(7555),
                v = r(29504),
                C = r(13946),
                x = r(44599),
                g = r(16717),
                b = r(44318),
                S = r(64284),
                y = r(98427),
                E = r(84384),
                A = r(54965),
                I = r(97361),
                L = r(99313),
                R = r(20585),
                j = r(39079),
                k = r(72288),
                N = r(90224),
                T = r(91292),
                O = r(16704),
                P = r(8299),
                w = r(90865),
                M = r.n(w);
            let D = (0, l.PA)((e) => {
                var t;
                let {
                        titleClassName: r,
                        artistLinkClassName: l,
                        clip: w,
                        withVideo: D = !0,
                        artistIdWithoutLink: U,
                        viewUuid: H,
                        shouldOpenModalOnCardClick: B = !0,
                    } = e,
                    { fullscreenVideoPlayer: W } = (0, k.g)(),
                    { formatMessage: z } = (0, n.A)(),
                    Y = (0, b.C)(),
                    { from: F } = (0, E.f)({ pageId: y.b.VIDEO_PLAYER, contextId: W.state.contextId, contextType: _.K.Various, blockId: S.U.CLIPS }),
                    V = (0, I.P)(null != (t = w.duration) ? t : 0),
                    q = (0, x._)(H),
                    K = (0, d.D)(),
                    X = (0, a.useRef)(null),
                    Z = D && w.previewUrl,
                    G = (0, p.c)(() => {
                        X.current && ((X.current.currentTime = 0), X.current.play());
                    }),
                    J = (0, a.useMemo)(() => (0, s.A)(G, 500), [G]),
                    $ = (0, p.c)(() => {
                        var e;
                        null == (e = X.current) || e.pause();
                    }),
                    Q = (0, a.useMemo)(() => W.ids.indexOf(w.clipId), [W, w.clipId]),
                    { isPlaying: ee, togglePlay: et } = (0, j.D)({
                        playContextParams: {
                            contextData: { type: _.K.Various, meta: { id: L.H.VARIOUS_CLIP_CONTEXT }, from: F },
                            queueParams: { index: Q },
                            entitiesData: W.entitiesData,
                            loadContextMeta: !1,
                        },
                        entityId: String(w.clipId),
                        sonataState: W.state,
                        playbackId: R.V.CLIP,
                    }),
                    er = B ? w.url : (0, g.J)(W.ids, Q),
                    ei = (0, p.c)(() => {
                        B ? (Y([w.clipId]), q()) : ee || et();
                    }),
                    eo = (0, P.X)({ clip: w, callback: ei }),
                    es = z({ id: 'entity-names.clip-name' }, { clipName: w.title }),
                    el = (0, a.useMemo)(
                        () =>
                            w.isAvailable
                                ? (0, i.jsxs)(f.t, {
                                      radius: 'm',
                                      className: (0, o.$)(M().view, M().cover),
                                      onMouseEnter: J,
                                      onMouseLeave: $,
                                      onClick: eo,
                                      children: [
                                          Z &&
                                              (0, i.jsx)('video', {
                                                  className: M().media,
                                                  ref: X,
                                                  poster: w.thumbnail && (0, c.oZ)(w.thumbnail, 1280),
                                                  playsInline: !0,
                                                  muted: !0,
                                                  loop: !0,
                                                  'aria-hidden': !0,
                                                  children: (0, i.jsx)('source', { src: w.previewUrl, type: 'video/mp4' }),
                                              }),
                                          w.thumbnail &&
                                              (0, i.jsx)(h._V, {
                                                  className: M().image,
                                                  'aria-hidden': !0,
                                                  src: w.thumbnail,
                                                  fit: 'cover',
                                                  withAvatarReplace: !0,
                                                  size: 1280,
                                                  createUrlReplacer: c.oZ,
                                              }),
                                          void 0 !== w.duration &&
                                              (0, i.jsx)(v.HL, {
                                                  role: 'text',
                                                  'aria-label': V,
                                                  variant: 'span',
                                                  className: M().duration,
                                                  type: 'entity',
                                                  size: 'xs',
                                                  weight: 'medium',
                                                  children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: (0, A.E)(w.duration, w.duration) }),
                                              }),
                                          (0, i.jsx)(O.D, { variant: 'filled', className: M().playButton, onClick: eo, iconSize: 'xl' }),
                                      ],
                                  })
                                : (0, i.jsx)(f.t, {
                                      radius: 'm',
                                      className: M().unavailableCover,
                                      children: (0, i.jsx)(h.Ab, { className: M().image, iconVariant: 'unavailable', 'data-test-id': u.S7.ENTITY_COVER_FALLBACK_IMAGE }),
                                  }),
                        [V, w.isAvailable, w.thumbnail, w.previewUrl, w.duration, J, $, eo, Z],
                    ),
                    ea = (0, a.useMemo)(
                        () =>
                            w.hasArtists
                                ? (0, i.jsx)(
                                      C.i,
                                      { linkClassName: (0, o.$)(M().artistLink, l), artists: w.artists, lineClamp: 1, withAllArtistsTitle: !0, artistIdWithoutLink: U },
                                      w.getKey('SeparatedArtists'),
                                  )
                                : null,
                        [U, w, l],
                    );
                return (0, i.jsx)(m.MN, {
                    ref: K,
                    className: M().root,
                    explicitMarkComponent:
                        w.explicitDisclaimer &&
                        (0, i.jsx)(N.N, { getDescriptionTexts: w.getDescriptionTexts, variant: w.explicitDisclaimer, size: 'xxs' }, w.getKey('ExplicitMarkIcon')),
                    'aria-label': es,
                    srTitle: (0, i.jsx)(T.N, { className: M().srTitleLink, href: er, onClick: eo, children: es }),
                    title: (0, i.jsxs)(
                        v.HL,
                        {
                            className: (0, o.$)(M().title, r),
                            variant: 'div',
                            type: 'entity',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            'aria-hidden': !0,
                            children: [
                                (0, i.jsx)(T.N, {
                                    className: M().titleLink,
                                    href: er,
                                    tabIndex: -1,
                                    'aria-label': es,
                                    onClick: eo,
                                    'data-test-id': u.Kq.clip.CLIP_META_TITLE,
                                    children: w.title,
                                }),
                                w.version && (0, i.jsx)(v.HL, { className: M().version, variant: 'span', children: ' '.concat(w.version) }),
                            ],
                        },
                        w.getKey('Title'),
                    ),
                    view: el,
                    description: ea,
                    'data-test-id': u.Kq.clip.CLIP_CARD,
                });
            });
        },
        70396: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        70938: (e, t, r) => {
            'use strict';
            r.d(t, { CollectionClipsPage: () => J });
            var i = r(88800),
                o = r(84961),
                s = r(53548),
                l = r(2058),
                a = r(88969),
                n = r(58390),
                c = r(97234),
                d = r(59724),
                u = r(17392),
                _ = r(44236),
                p = r(29504),
                m = r(32596),
                h = r(69630),
                f = r(38501),
                v = r(98427),
                C = r(46422),
                x = r(44230),
                g = r(37670),
                b = r(4370),
                S = r(72288),
                y = r(86790),
                E = r(60266),
                A = r(93317),
                I = r(68142),
                L = r.n(I),
                R = r(65724),
                j = r(61013),
                k = r(29993),
                N = r(50408),
                T = r(69323),
                O = r(77605),
                P = r(10270),
                w = r(57072);
            let M = () => (window.innerWidth > w.f.xl ? 4 : window.innerWidth > 1200 ? 3 : 2);
            var D = r(46384),
                U = r(79939),
                H = r(86535),
                B = r(56265),
                W = r.n(B);
            let z = (0, o.PA)((e) => {
                var t, r;
                let { className: o } = e,
                    { formatMessage: a } = (0, l.A)(),
                    { clipsWillLike: n } = (0, S.g)().collection.clips;
                return (
                    n.isNeededToLoad && (0, s.use)(n.getData()),
                    (0, i.jsx)(D.F, {
                        blockId: H.h.CLIPS_CAROUSEL,
                        blockType: H.h.CLIPS_CAROUSEL,
                        blockPosX: 1,
                        blockPosY: 7,
                        objectsCount: null != (r = null == (t = n.clips) ? void 0 : t.length) ? r : 0,
                        children: (0, i.jsx)(U.K, {
                            className: (0, R.$)(W().root, o),
                            containerClassName: W().carouselBlock,
                            carouselItemClassName: (0, R.$)(W().carouselItem, W().important),
                            headerClassName: (0, R.$)(W().carouselBlockHeader, W().carouselBlock),
                            isShimmerVisible: n.isLoading,
                            isShimmerActive: !0,
                            title: a({ id: 'entity-names.clips-will-like' }),
                            clips: n.clips || [],
                            headingVariant: 'h2',
                            'data-test-id': u.Kq.clip.CLIPS_CAROUSEL,
                        }),
                    })
                );
            });
            var Y = r(52300),
                F = r(71811),
                V = r.n(F);
            let q = (0, o.PA)(() => {
                let {
                        collection: {
                            clips: { clipsWillLike: e },
                        },
                    } = (0, S.g)(),
                    t = !e.isEmpty && !e.isRejected;
                return (0, i.jsxs)('div', {
                    className: V().root,
                    children: [
                        (0, i.jsxs)('div', {
                            className: V().content,
                            children: [
                                (0, i.jsx)(Y.I, { className: V().icon, size: 'xl', variant: 'clip' }),
                                (0, i.jsx)(p.DZ, {
                                    className: V().title,
                                    variant: 'h3',
                                    size: 'xs',
                                    'data-test-id': u.e8.landing.COLLECTION_CLIPS_BLOCK_LIKED_EMPTY_BLOCK_TITLE,
                                    children: (0, i.jsx)(a.A, { id: 'error-messages.empty-collection-clips-title' }),
                                }),
                                (0, i.jsx)(p.HL, {
                                    className: V().text,
                                    variant: 'span',
                                    type: 'controls',
                                    size: 'l',
                                    weight: 'normal',
                                    'data-test-id': u.e8.landing.COLLECTION_CLIPS_BLOCK_LIKED_EMPTY_BLOCK_TEXT,
                                    children: (0, i.jsx)(a.A, { id: 'error-messages.empty-collection-clips-text' }),
                                }),
                            ],
                        }),
                        t && (0, i.jsx)(z, {}),
                    ],
                });
            });
            var K = r(23471),
                X = r.n(K);
            let Z = (0, o.PA)((e) => {
                    let { virtualItem: t, resizeObserver: r, columns: o } = e,
                        [a, n] = (0, N.d)(),
                        { formatMessage: c } = (0, l.A)(),
                        {
                            collection: { clips: d },
                        } = (0, S.g)();
                    (0, s.useEffect)(
                        () => (
                            a && r && r.observe(a),
                            () => {
                                a && r && r.unobserve(a);
                            }
                        ),
                        [a, r],
                    );
                    let u = d.items.slice(t.index * o, t.index * o + o),
                        _ = d.pager && d.pager.total <= o ? 0 : 1,
                        p = !d.clipsWillLike.isEmpty && !d.clipsWillLike.isRejected;
                    return (0, i.jsxs)(
                        'div',
                        {
                            ref: n,
                            'data-index': t.index,
                            className: X().virtualItem,
                            style: { transform: 'translateY('.concat(t.start, 'px)') },
                            children: [
                                (0, i.jsx)('div', {
                                    style: { gridTemplateColumns: 'repeat('.concat(o, ', minmax(0, 1fr))') },
                                    className: (0, R.$)(X().virtualItemRow, {
                                        [X().virtualItemRow_withTopBorder]: t.index === _ + 1 && p,
                                        [X().virtualItemRow_withBottomBorder]: t.index === _ && p,
                                    }),
                                    children:
                                        null == u
                                            ? void 0
                                            : u.map((e, t) => {
                                                  if (!e) {
                                                      let e = c({ id: 'loading-messages.entity-is-loading' }, { entityName: c({ id: 'entity-names.clip' }) });
                                                      return (0, i.jsx)(O.k, { 'aria-label': e }, t);
                                                  }
                                                  return (0, i.jsx)(T.F, { clip: e }, e.clipId);
                                              }),
                                }),
                                t.index === _ && p && (0, i.jsx)(z, { className: X().clipsWillLike }),
                            ],
                        },
                        t.key,
                    );
                }),
                G = (0, o.PA)((e) => {
                    var t;
                    let { contentScrollRef: r } = e,
                        {
                            collection: { clips: o },
                            user: l,
                        } = (0, S.g)(),
                        [a, n] = (0, s.useState)(M),
                        [c, d] = (0, N.d)(),
                        _ = o.pager && o.pager.total <= a ? 0 : 1,
                        { virtualizer: p, resizeObserver: h } = (0, P.r)({
                            gap: 24,
                            count: o.pager ? Math.ceil((null == (t = o.pager) ? void 0 : t.total) / a) : 5,
                            getEstimateSize: (e) => (e === _ ? 800 : 400),
                            containerRef: c,
                            useVirtualizerMeasurement: !1,
                        }),
                        f = (0, k.c)((e) => {
                            l.account.data.uid && o.getData({ userId: l.account.data.uid, page: e, pageSize: 20 });
                        }),
                        v = p.getTotalSize(),
                        C = p.getVirtualItems(),
                        x = (0, k.c)((e) => {
                            let t = Math.floor((e.startIndex * a) / 20),
                                r = Math.ceil((e.endIndex * a) / 20);
                            for (let e = t; e <= r; e++) f(e);
                        });
                    ((0, s.useEffect)(() => {
                        o.isNeededToLoad && (null == r || r.scrollTo({ top: 0, behavior: 'instant' }), o.setInitialShimmer(), f());
                    }, [o, o.isNeededToLoad, f, r]),
                        (0, s.useEffect)(() => {
                            !p.isScrolling && p.range && x(p.range);
                        }, [x, p.range, p.isScrolling]));
                    let g = (0, j.A)(() => {
                        n(M);
                    }, 100);
                    return ((0, s.useEffect)(
                        () => (
                            g(),
                            window.addEventListener('resize', g),
                            () => {
                                window.removeEventListener('resize', g);
                            }
                        ),
                        [g],
                    ),
                    o.isEmpty)
                        ? (0, i.jsx)(q, {})
                        : o.isRejected
                          ? (0, i.jsx)(m.SomethingWentWrong, {})
                          : (0, i.jsx)('div', {
                                className: X().virtualScroll,
                                style: { height: ''.concat(v, 'px') },
                                ref: d,
                                'data-test-id': u.Kq.clip.COLLECTION_LIKED_CLIPS_BLOCK,
                                children: C.map((e) => (0, i.jsx)(Z, { virtualItem: e, resizeObserver: h, columns: a }, e.index)),
                            });
                }),
                J = (0, o.PA)(() => {
                    let {
                            collection: { clips: e },
                        } = (0, S.g)(),
                        { formatMessage: t } = (0, l.A)(),
                        r = (0, C.W)(),
                        o = (0, f.d)(),
                        { contentScrollRef: I, setContentScrollRef: R } = (0, x.g)();
                    return (!o && e.isLoaded && (0, n.redirect)(b.Z.collection.href),
                    (0, g.J)(e.isResolved),
                    (0, s.useEffect)(
                        () => () => {
                            e.reset();
                        },
                        [e],
                    ),
                    e.isRejected)
                        ? (0, i.jsx)(m.SomethingWentWrong, {})
                        : (0, i.jsx)(d.a, {
                              pageId: c.AppScreen.OwnClips,
                              pageIdForFrom: v.b.OWN_CLIPS,
                              children: (0, i.jsxs)(h.h, {
                                  scrollElement: I,
                                  outerTitle: t({ id: 'entity-names.clips' }),
                                  children: [
                                      (0, i.jsx)(A.Y, {
                                          variant: A.V.TEXT,
                                          withForwardControl: !1,
                                          withBackwardControl: r.canBack,
                                          children: (0, i.jsx)(p.DZ, {
                                              id: 'collection-artists-header',
                                              variant: 'h1',
                                              weight: 'bold',
                                              size: 'xl',
                                              lineClamp: 1,
                                              children: (0, i.jsx)(a.A, { id: 'entity-names.clips' }),
                                          }),
                                      }),
                                      (0, i.jsxs)(_.C, {
                                          scrollableContainerRef: R,
                                          className: L().root,
                                          containerClassName: L().content,
                                          scrollContentClassName: L().scrollContent,
                                          'data-test-id': u.Xk.collection.COLLECTION_CLIPS_PAGE,
                                          children: [(0, i.jsx)(G, { contentScrollRef: I }), (0, i.jsx)(E.A, { children: (0, i.jsx)(y.w, { className: L().footer }) })],
                                      }),
                                  ],
                              }),
                          });
                });
        },
        71811: (e) => {
            e.exports = {
                root: 'CollectionClipsPageEmpty_root__P29ns',
                content: 'CollectionClipsPageEmpty_content__gIM_C',
                icon: 'CollectionClipsPageEmpty_icon__jDAZP',
                title: 'CollectionClipsPageEmpty_title__DKJ_3',
                text: 'CollectionClipsPageEmpty_text__F_Too',
            };
        },
        76827: (e) => {
            e.exports = {
                root: 'ClipCardShimmer_root__sIvNr',
                cover: 'ClipCardShimmer_cover__yA4jz',
                title: 'ClipCardShimmer_title__MCApK',
                text: 'ClipCardShimmer_text__ajZGv',
            };
        },
        77605: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => n });
            var i = r(88800),
                o = r(19994),
                s = r(64310),
                l = r(76827),
                a = r.n(l);
            let n = (e) => {
                let { isActive: t } = e;
                return (0, i.jsxs)('div', {
                    className: a().root,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    children: [
                        (0, i.jsx)(o.W, { isActive: t, className: a().cover, radius: 'l' }),
                        (0, i.jsx)(s.n, { isActive: t, className: a().title }),
                        (0, i.jsx)(s.n, { isActive: t, className: a().text }),
                    ],
                });
            };
        },
        79939: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => m });
            var i = r(88800),
                o = r(65724),
                s = r(84961),
                l = r(53548),
                a = r(35412),
                n = r(18486),
                c = r(31764),
                d = r(7857),
                u = r.n(d),
                _ = r(93671);
            let p = (0, s.PA)((e) => {
                    let {
                            clipCardTitleClassName: t,
                            clipCardArtistLinkClassName: r,
                            carouselItemClassName: s,
                            forwardRef: d,
                            isShimmerVisible: p,
                            isShimmerActive: m,
                            title: h,
                            description: f,
                            containerClassName: v,
                            headerClassName: C,
                            viewAllActionLink: x,
                            artistIdWithoutLink: g,
                            withVideo: b = !0,
                            clips: S,
                            headingVariant: y,
                            className: E,
                            shouldOpenModalOnCardClick: A = !0,
                            itemCounter: I,
                            ...L
                        } = e,
                        R = (0, l.useId)(),
                        j = (0, l.useRef)(null);
                    return (0, i.jsxs)('section', {
                        className: (0, o.$)(u().root, E),
                        ref: d,
                        ...(0, a.OZ)(L),
                        children: [
                            (0, i.jsx)(n.T, {
                                className: C,
                                labeledForId: R,
                                title: h,
                                description: f,
                                viewAllActionLink: x,
                                controls: (0, i.jsx)(c.X, { className: u().controls, carouselRef: j }),
                                headingVariant: y,
                                withDescription: !!f,
                            }),
                            (0, i.jsx)(_.t, {
                                clipCardTitleClassName: t,
                                clipCardArtistLinkClassName: r,
                                carouselItemClassName: s,
                                isShimmerVisible: p,
                                isShimmerActive: m,
                                containerClassName: v,
                                artistIdWithoutLink: g,
                                withVideo: b,
                                clips: S,
                                shouldOpenModalOnCardClick: A,
                                itemCounter: I,
                                ref: j,
                                'aria-labelledby': R,
                            }),
                        ],
                    });
                }),
                m = (0, l.forwardRef)((e, t) => (0, i.jsx)(p, { forwardRef: t, ...e }));
        },
        80932: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        86535: (e, t, r) => {
            'use strict';
            r.d(t, { h: () => o });
            var i = r(64284),
                o = (function (e) {
                    return (
                        (e[(e.RUP_MAIN_RADIO = ''.concat(i.U.RUP, '_').concat(i.U.MAIN, '-').concat(i.U.RADIO))] = 'RUP_MAIN_RADIO'),
                        (e[(e.DISCOGRAPHY_CAROUSEL = ''.concat(i.U.DISCOGRAPHY, '_').concat(i.U.CAROUSEL))] = 'DISCOGRAPHY_CAROUSEL'),
                        (e[(e.ALBUMS_CAROUSEL = ''.concat(i.U.ALBUMS, '_').concat(i.U.CAROUSEL))] = 'ALBUMS_CAROUSEL'),
                        (e[(e.COMPILATIONS_CAROUSEL = ''.concat(i.U.COMPILATIONS, '_').concat(i.U.CAROUSEL))] = 'COMPILATIONS_CAROUSEL'),
                        (e[(e.PLAYLISTS_CAROUSEL = ''.concat(i.U.PLAYLISTS, '_').concat(i.U.CAROUSEL))] = 'PLAYLISTS_CAROUSEL'),
                        (e[(e.ARTISTS_CAROUSEL = ''.concat(i.U.ARTISTS, '_').concat(i.U.CAROUSEL))] = 'ARTISTS_CAROUSEL'),
                        (e[(e.CLIPS_CAROUSEL = ''.concat(i.U.CLIPS, '_').concat(i.U.CAROUSEL))] = 'CLIPS_CAROUSEL'),
                        (e[(e.DISCOVERY_BLOCK = ''.concat(i.U.DISCOVERY, '_').concat(i.U.BLOCK))] = 'DISCOVERY_BLOCK'),
                        (e[(e.PLAYLISTS_SIMILAR = ''.concat(i.U.PLAYLISTS, '_').concat(i.U.SIMILAR))] = 'PLAYLISTS_SIMILAR'),
                        (e[(e.SEARCH_HISTORY = ''.concat(i.U.SEARCH, '_').concat(i.U.HISTORY))] = 'SEARCH_HISTORY'),
                        (e[(e.PLAYLISTS_SIMILAR_PLAYLIST = ''.concat(i.U.PLAYLISTS, '_').concat(i.U.SIMILAR, '_').concat(i.U.PLAYLIST))] = 'PLAYLISTS_SIMILAR_PLAYLIST'),
                        (e[(e.SEARCH_BEST_RESULTS = ''.concat(i.U.SEARCH, '_').concat(i.U.BEST_RESULTS))] = 'SEARCH_BEST_RESULTS'),
                        (e[(e.SEARCH_OPEN_BEST_RESULTS = ''.concat(i.U.SEARCH, '_').concat(i.U.OPEN_BEST_RESULTS))] = 'SEARCH_OPEN_BEST_RESULTS'),
                        e
                    );
                })({});
        },
        86790: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => A });
            var i = r(88800),
                o = r(65724),
                s = r(84961),
                l = r(2058),
                a = r(30282),
                n = r(94144),
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
            let d = (e, t, r) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(r);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(r);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(r);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(r);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(r);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: r, tld: i, year: o } = e;
                    return {
                        year: o,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, i, r) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, i, r) },
                    };
                };
            var _ = r(62293),
                p = r(99839);
            let m = (e) => e(new Date(), (0, p.m)());
            var h = r(51611),
                f = r(72288),
                v = r(11006),
                C = r.n(v),
                x = r(17392),
                g = r(29504),
                b = r(91292);
            let S = (e) => {
                    let { className: t, data: r } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, o.$)(C().copyrights, t),
                        'data-test-id': x.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(g.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: C().text,
                                children: [
                                    '\xa9 ',
                                    r.year,
                                    ' \xa0',
                                    (0, i.jsx)(b.N, {
                                        target: '_blank',
                                        href: r.yandexMusic.url,
                                        className: (0, o.$)(C().copyrightLink, C().yandexMusicLink),
                                        'data-test-id': x.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: r.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(g.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(b.N, {
                                target: '_blank',
                                href: r.yandexProjects.url,
                                className: C().copyrightLink,
                                'data-test-id': x.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: r.yandexProjects.title,
                            }),
                        ],
                    });
                },
                y = (e) => {
                    let { disclaimer: t, links: r } = e;
                    return (0, i.jsxs)('div', {
                        className: C().links,
                        children: [
                            (0, i.jsx)('ol', {
                                className: C().list,
                                'data-test-id': x.S7.FOOTER_LINKS_LIST,
                                children: r.map((e) => {
                                    let { id: t, title: r, url: o } = e;
                                    return (0, i.jsx)(
                                        'li',
                                        {
                                            className: C().item,
                                            children: (0, i.jsx)(b.N, { target: '_blank', href: o, className: C().link, 'data-test-id': x.S7.FOOTER_LINK, children: r }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, i.jsx)(g.HL, {
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
                E = (e) => {
                    let { className: t, data: r } = e;
                    return (0, i.jsxs)('footer', {
                        className: (0, o.$)(C().root, C().important, t),
                        'data-test-id': x.S7.FOOTER,
                        children: [(0, i.jsx)(y, { links: r.links, disclaimer: r.disclaimer }), (0, i.jsx)(S, { data: r.copyrights })],
                    });
                };
            (0, s.PA)((e) => {
                let { className: t } = e,
                    { location: r } = (0, f.g)(),
                    { formatDate: o, formatMessage: s } = (0, l.A)(),
                    { language: a } = (0, h.h)(),
                    n = u({ formatMessage: s, language: a, tld: r.tld, year: m(o) });
                return (0, i.jsx)(S, { className: t, data: n });
            });
            let A = (0, s.PA)((e) => {
                var t;
                let { className: r } = e,
                    { experiments: s, location: p, user: v } = (0, f.g)(),
                    { formatDate: x, formatMessage: g } = (0, l.A)(),
                    { isEnabled: b } = null != (t = (0, n.P)()) ? t : {},
                    { language: S } = (0, h.h)(),
                    y = ((e) => {
                        let { checkExperiment: t, formatMessage: r, isWebApplication: i, language: o, tld: s, userRegion: l, year: a } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: r, tld: i, language: o, userRegion: s } = e,
                                    l = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, i, o) },
                                    a = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, i, o) },
                                    n = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, i, o) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, i, o) },
                                    _ = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, i, o) },
                                    p = [l, n, u];
                                return (r && 'ru' === s && p.push(a), p.push(_), p);
                            })({ formatMessage: r, isWebApplication: i, language: o, tld: s, userRegion: l }),
                            disclaimer: (0, _.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => r({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => r({ id: 'footer.explicit-content' }),
                                userRegion: l,
                            }),
                            copyrights: u({ formatMessage: r, language: o, tld: s, year: a }),
                        };
                    })({
                        checkExperiment: (e, t) => s.checkExperiment(e, t),
                        formatMessage: g,
                        isWebApplication: a.$3,
                        tld: p.tld,
                        language: S,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: m(x),
                    });
                return (0, i.jsx)(E, { className: (0, o.$)({ [C().root_withOffsetForDeeplink]: b }, r), data: y });
            });
        },
        88021: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => d });
            var i,
                o = r(14022),
                s = r(53548),
                l = {
                    352: (e) => {
                        e.exports = o;
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(s, 2));
                    },
                },
                a = {};
            function n(e) {
                var t = a[e];
                if (void 0 !== t) return t.exports;
                var r = (a[e] = { exports: {} });
                return (l[e](r, r.exports, n), r.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                let e = n(810),
                    t = n(352);
                c.l = (r) => {
                    let [i, o] = (0, e.useState)(!0),
                        [s, l] = (0, e.useState)(!0),
                        a = () => {
                            let e = null == r ? void 0 : r.current;
                            e && (o(0 === e.scrollLeft), l(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    ((0, e.useEffect)(() => {
                        a();
                    }, [r, a]),
                        (0, e.useEffect)(() => {
                            let e = null == r ? void 0 : r.current;
                            return (
                                null == e || e.addEventListener('scroll', a),
                                window.addEventListener('resize', a),
                                () => {
                                    (null == e || e.removeEventListener('scroll', a), window.removeEventListener('resize', a));
                                }
                            );
                        }, [r, a]));
                    let n = (0, e.useMemo)(
                        () =>
                            (0, t.throttle)(
                                () => {
                                    r && r.current && (r.current.scrollLeft += r.current.offsetWidth / 2);
                                },
                                420,
                                { trailing: !1 },
                            ),
                        [r],
                    );
                    return {
                        swipeBackward: (0, e.useMemo)(
                            () =>
                                (0, t.throttle)(
                                    () => {
                                        r && r.current && (r.current.scrollLeft -= r.current.offsetWidth / 2);
                                    },
                                    420,
                                    { trailing: !1 },
                                ),
                            [r],
                        ),
                        swipeForward: n,
                        shouldBackwardButtonBeDisabled: i,
                        shouldForwardButtonBeDisabled: s,
                        shouldHideControls: i && s,
                    };
                };
            })(),
                c.X);
            var d = c.l;
        },
        89544: (e) => {
            e.exports = {
                root: 'CarouselControls_root__E_hwc',
                control: 'CarouselControls_control__L8t4i',
                control_hidden: 'CarouselControls_control_hidden__pLrn6',
                control_withSecondaryColor: 'CarouselControls_control_withSecondaryColor__KqSEN',
            };
        },
        90224: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => h });
            var i = r(88800),
                o = r(65724),
                s = r(84961),
                l = r(53548),
                a = r(2058),
                n = r(17392),
                c = r(52300),
                d = r(62837),
                u = r(72288),
                _ = r(94398),
                p = r(17332),
                m = r.n(p);
            let h = (0, s.PA)((e) => {
                let { className: t, getDescriptionTexts: r, trackId: s, containerClassName: p, variant: h, iconVariant: iconOverride, size: f = 'xxxs', ...v } = e,
                    { formatMessage: C } = (0, a.A)(),
                    {
                        settings: { isMobile: x },
                    } = (0, u.g)(),
                    [g, b] = (0, l.useState)(null);
                (0, l.useEffect)(() => {
                    r && r().then(b);
                }, [r, s]);
                let {
                    iconVariant: S,
                    descriptionText: y,
                    isTooltipEnabled: E,
                    ariaLabel: A,
                } = ((e, t) => {
                    let { variant: r, descriptionTexts: i, isMobile: o } = e,
                        s = (null == i ? void 0 : i.join('\n')) || '';
                    return {
                        iconVariant: ((e) => {
                            switch (e) {
                                case d.JU.E:
                                    return 'explicit';
                                case d.JU.AGE_12:
                                case d.JU.AGE_16:
                                case d.JU.AGE_18:
                                    return 'adult';
                                case d.JU.EXCLAMATION:
                            }
                            return 'exclamation';
                        })(r),
                        descriptionText: s,
                        isTooltipEnabled: !!(null == i ? void 0 : i.length) && !o,
                        ariaLabel: s.length > 0 ? s : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: h, descriptionTexts: g, isMobile: x }, C);
                return (0, i.jsx)(_.k, {
                    description: y,
                    placement: 'bottom-start',
                    enabled: E,
                    children: (0, i.jsx)('span', {
                        className: p,
                        children:
                        // for PulseSync: BEGIN render substituted-track badges and custom native disclaimer icons
                        h === d.JU.SUBSTITUTED ? (0, i.jsxs)('svg', {
                            className: (0, o.$)(m().explicitMark, t),
                            viewBox: '0 0 16 16',
                            role: 'img',
                            'aria-label': A,
                            style: { width: 'var(--ym-icon-size-'.concat(f, ')'), height: 'var(--ym-icon-size-'.concat(f, ')') },
                            ...v,
                            'data-test-id': n.S7.EXPLICIT_MARK_ICON,
                            children: [
                                (0, i.jsx)('circle', { cx: '8', cy: '8', r: '5.5', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }),
                                (0, i.jsx)('text', {
                                    x: '8', y: '9', fill: 'currentColor', fontSize: '7', fontWeight: '700', textAnchor: 'middle', dominantBaseline: 'middle', children: 'S',
                                }),
                            ],
                        }) : (0, i.jsx)(c.I, {
                            className: (0, o.$)(m().explicitMark, t),
                            'aria-label': A,
                            variant: iconOverride ? c.resolveIcon(iconOverride)?.variant ?? 'exclamation' : S,
                            size: iconOverride ? c.resolveIcon(iconOverride)?.size ?? f : f,
                            style: iconOverride ? { width: `var(--ym-icon-size-${f})`, height: `var(--ym-icon-size-${f})` } : undefined,
                            ...v,
                            'data-test-id': n.S7.EXPLICIT_MARK_ICON,
                        }),
                        // for PulseSync: END render substituted-track badges and custom native disclaimer icons
                    }),
                });
            });
        },
        90865: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                view: 'ClipCard_view__MYSwA',
                playButton: 'ClipCard_playButton__0Wyss',
                duration: 'ClipCard_duration__89ZCx',
                image: 'ClipCard_image__hSUud',
                media: 'ClipCard_media__dU4RM',
                unavailableCover: 'ClipCard_unavailableCover__Zd9jl',
                cover: 'ClipCard_cover__ztEok',
                cover_withoutOffset: 'ClipCard_cover_withoutOffset__aasE2',
                root: 'ClipCard_root__kzWjg',
                srTitleLink: 'ClipCard_srTitleLink__0tQdz',
                title: 'ClipCard_title__I1s7Q',
                artistLink: 'ClipCard_artistLink__t6oPP',
                titleLink: 'ClipCard_titleLink__g3HDM',
                version: 'ClipCard_version__w9PM7',
            };
        },
        93671: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => f });
            var i = r(88800),
                o = r(65724),
                s = r(84961),
                l = r(53548),
                a = r(54020),
                n = r(97234),
                c = r(90852),
                d = r(53323),
                u = r(69323),
                _ = r(77605),
                p = r(55737),
                m = r.n(p);
            let h = (0, s.PA)((e) => {
                    let {
                            forwardRef: t,
                            clipCardTitleClassName: r,
                            clipCardArtistLinkClassName: s,
                            carouselItemClassName: p,
                            isShimmerVisible: h,
                            isShimmerActive: f,
                            containerClassName: v,
                            artistIdWithoutLink: C,
                            withVideo: x = !0,
                            clips: g,
                            shouldOpenModalOnCardClick: b = !0,
                            itemCounter: S,
                        } = e,
                        y = (0, l.useId)(),
                        E = (0, l.useRef)(String((0, a.A)())),
                        A = (0, l.useMemo)(() => {
                            if (h) return Array.from({ length: 5 }, (e, t) => (0, i.jsx)(_.k, { isActive: f }, t));
                            return null == g
                                ? void 0
                                : g.map((e, t) =>
                                      (0, i.jsx)(
                                          c.B,
                                          {
                                              objectType: n.DomainObjectType.Video,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectId: String(e.clipId),
                                              children: (0, i.jsx)(u.F, {
                                                  titleClassName: r,
                                                  artistLinkClassName: s,
                                                  clip: e,
                                                  withVideo: x,
                                                  artistIdWithoutLink: C,
                                                  viewUuid: E.current,
                                                  shouldOpenModalOnCardClick: b,
                                              }),
                                          },
                                          e.clipId,
                                      ),
                                  );
                        }, [r, s, h, f, C, x, g, b]);
                    return (0, i.jsx)(d.F, {
                        className: (0, o.$)(m().itemCounter, { [m()['itemCounter_'.concat(S)]]: S }, v),
                        ref: t,
                        itemClassName: (0, o.$)(m().item, m().important, p),
                        'aria-labelledby': y,
                        children: A,
                    });
                }),
                f = (0, l.forwardRef)((e, t) => (0, i.jsx)(h, { forwardRef: t, ...e }));
        },
        94144: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => o, P: () => s });
            var i = r(53548);
            let o = (0, i.createContext)(null),
                s = () => (0, i.useContext)(o);
        },
        94398: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => d });
            var i = r(88800),
                o = r(17392),
                s = r(17610),
                l = r(29504),
                a = r(37438),
                n = r.n(a);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: r, title: a, placement: d = 'top', children: u } = e;
                    return (0, i.jsxs)(s.m_, {
                        enabled: r,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, i.jsx)(s.ZI, {
                                className: n().root,
                                'data-test-id': o.S7.TOOLTIP_WITH_TITLE,
                                children: (0, i.jsxs)('div', {
                                    className: n().text,
                                    children: [
                                        a && (0, i.jsx)(l.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: a }),
                                        (0, i.jsx)(l.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: n().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        96056: (e, t, r) => {
            (Promise.resolve().then(r.bind(r, 57328)), Promise.resolve().then(r.bind(r, 70938)));
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
        97361: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => s });
            var i = r(2058),
                o = r(29831);
            let s = (e) => {
                let { formatMessage: t } = (0, i.A)();
                return (0, o.j)(e, t);
            };
        },
        99313: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => i });
            var i = (function (e) {
                return ((e.VARIOUS_CLIP_CONTEXT = 'various-clip-context'), e);
            })({});
        },
        99839: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
        99890: (e, t, r) => {
            'use strict';
            r.d(t, { C8: () => s, UC: () => l, dM: () => a, uV: () => n });
            var i = r(89916),
                o = r(66363);
            let s = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                l = (e) => (e.uid ? 'authorized' : 'no-uid'),
                a = (e) => {
                    if (!(e instanceof i.m5) || !(0, o.Nh)(e.cause)) return 'unexpected';
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
                n = (e) => {
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
                7191, 9904, 8655, 9967, 3078, 1833, 917, 3266, 6706, 4771, 2662, 6904, 1898, 2058, 3578, 8628, 4378, 9780, 8283, 9332, 2837, 6816, 4732, 9087, 3979, 1928,
                9091, 900, 9934, 2470, 7670, 4236, 763, 2670, 7358,
            ],
            () => e((e.s = 96056)),
        ),
            (_N_E = e.O()));
    },
]);
