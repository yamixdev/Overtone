(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6363, 8583],
    {
        4370: (e, t, s) => {
            'use strict';
            s.d(t, { Z: () => r });
            var i = s(67174);
            let r = {
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
        6322: (e, t, s) => {
            'use strict';
            s.d(t, { l: () => o });
            var i = s(88800),
                r = s(15077),
                l = s(33719);
            let o = (e) => {
                let { playlist: t, closeToast: s } = e;
                return (0, i.jsx)(l.k, {
                    closeToast: s,
                    entityVariant: r.c.PLAYLIST,
                    entityUrl: t.url,
                    coverUri: t.coverUri,
                    entityTitle: t.title,
                    isPinned: t.isPinned,
                    radius: 's',
                });
            };
        },
        6688: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { S: () => i }),
                (function (e) {
                    ((e.MUSIC = 'music'), (e.CHILDREN = 'children'));
                })(i || (i = {})));
        },
        7628: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => h });
            var i = s(88800),
                r = s(88969),
                l = s(58390),
                o = s(17392),
                a = s(29993),
                n = s(96817),
                c = s(29504),
                d = s(99890),
                u = s(4086),
                p = s(41928);
            let h = (e) => {
                let { size: t = 'm', variant: s = 'default', color: h = 'primary', withRipple: m = !0, buttonText: _, isBlock: v, key: y, className: g } = e,
                    x = (0, l.useRouter)(),
                    k = (0, p.N)().get(u.QG),
                    C = (0, a.c)(() => {
                        k.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), x.push(k.authorizationUrl));
                    });
                return (0, i.jsx)(
                    n.$,
                    {
                        onClick: C,
                        className: g,
                        isBlock: v,
                        color: h,
                        variant: s,
                        size: t,
                        radius: 'xxxl',
                        withRipple: m,
                        'data-test-id': o.S7.UNAUTHORIZED_BUTTON,
                        children: _ || (0, i.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(r.A, { id: 'authorization.enter-button' }) }),
                    },
                    y,
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
        13946: (e, t, s) => {
            'use strict';
            s.d(t, { i: () => q });
            var i = s(88800),
                r = s(65724),
                l = s(84961),
                o = s(53548),
                a = s(79070),
                n = s(17610),
                c = s(24548),
                d = s(29993),
                u = s(72288),
                p = s(35994);
            let h = (e, t) => {
                let { withLink: s, separator: i } = t,
                    r = s && !e.various ? (0, p.R)(e.id) : null;
                return { artist: e, name: e.name, separator: i, link: r };
            };
            var m = s(21010),
                _ = s.n(m),
                v = s(17392),
                y = s(29504),
                g = s(91292),
                x = s(2058),
                k = s(97234),
                C = s(70598),
                f = s(78940),
                A = s(55693),
                E = s(58217);
            let T = (0, l.PA)((e) => {
                    let { item: t, linkClassName: s, captionClassName: r, captionSize: l = 'm', allArtistsTitle: o, withCustomTooltip: a, hoverSettings: c } = e,
                        {
                            name: p,
                            link: h,
                            title: m,
                            ariaLabel: _,
                            tooltipText: T,
                            isTooltipEnabled: N,
                            handleNavigate: S,
                        } = ((e) => {
                            var t, s;
                            let { item: i, allArtistsTitle: r, withCustomTooltip: l } = e,
                                { formatMessage: o } = (0, x.A)(),
                                a = ((e, t) => {
                                    let { item: s, allArtistsTitle: i, withCustomTooltip: r } = e,
                                        l = i || s.name;
                                    return {
                                        ...s,
                                        title: r ? void 0 : l,
                                        ariaLabel: s.link ? t({ id: 'entity-names.artist-name' }, { artistName: s.name }) : void 0,
                                        tooltipText: l,
                                        isTooltipEnabled: !i && r,
                                    };
                                })({ item: i, allArtistsTitle: r, withCustomTooltip: l }, o),
                                {
                                    track: n,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                p = (0, f.Z)(null != (s = null == (t = a.link) ? void 0 : t.href) ? s : a.artist.url),
                                { sendNavigateSearchFeedback: h } = (0, A.z)(),
                                m = (0, C.S)(),
                                _ = (0, d.c)((e) => {
                                    (c && n.isOpened && n.close(), p(e));
                                }),
                                v = ((e) => {
                                    let { artist: t, callback: s } = e,
                                        { currentTrackInfo: i, fullscreenPlayer: r, fullscreenVideoPlayer: l } = (0, u.g)(),
                                        { modal: o } = i;
                                    return (0, E.l)({
                                        entity: t,
                                        callback: s,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), o.isOpened && (i.reset(), o.close()), r.modal.isOpened && r.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            l.modal.isOpened && (l.modal.close(), l.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: a.artist, callback: _ }),
                                y = (0, d.c)((e) => {
                                    (m({ to: k.AppScreen.ArtistScreen }), null == h || h(), v(e));
                                });
                            return { ...a, handleNavigate: y };
                        })({ item: t, allArtistsTitle: o, withCustomTooltip: a });
                    return h
                        ? (0, i.jsx)(g.N, {
                              ...h,
                              'aria-label': _,
                              className: s,
                              onClick: S,
                              title: m,
                              'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, i.jsx)(n.m_, {
                                  enabled: N,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: T,
                                  hoverSettings: c,
                                  children: (0, i.jsx)(y.HL, { variant: 'span', type: 'entity', size: l, weight: 'medium', className: r, children: p }),
                              }),
                          })
                        : (0, i.jsx)(n.m_, {
                              enabled: N,
                              offsetOptions: 4,
                              placement: 'top',
                              text: T,
                              hoverSettings: c,
                              children: (0, i.jsx)(y.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: l,
                                  weight: 'medium',
                                  className: r,
                                  title: m,
                                  'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: p,
                              }),
                          });
                }),
                N = (e) => {
                    let { group: t, linkClassName: s, captionClassName: r, captionSize: l, allArtistsTitle: a, withCustomTooltip: n, hoverSettings: c } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, i.jsx)(T, {
                                item: t.primary,
                                linkClassName: s,
                                captionClassName: r,
                                captionSize: l,
                                allArtistsTitle: a,
                                withCustomTooltip: n,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, i.jsxs)(
                                    o.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, i.jsx)(T, {
                                                item: e,
                                                linkClassName: s,
                                                captionClassName: r,
                                                captionSize: l,
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
            var S = s(88969),
                O = s(65453);
            let L = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: s, handleOnSpoilerClick: l } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        ' ',
                        (0, i.jsx)(O.N, {
                            role: 'button',
                            href: '',
                            className: (0, r.$)(_().spoiler, s),
                            onClick: l,
                            rel: 'nofollow',
                            'data-test-id': v.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, i.jsx)(S.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var j = s(61013),
                P = s(87819),
                R = s(40634),
                b = s(48468),
                I = s.n(b);
            let w = (0, l.PA)((e) => {
                    let { label: t, artists: s, forwardRef: r } = e;
                    return (0, i.jsxs)(n.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, P.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, i.jsx)('div', { ref: r, children: t }),
                            (0, i.jsx)(n.ZI, { className: I().tooltipContent, children: s.map((e) => (0, i.jsx)(R.V, { artist: e, className: I().artistItem }, e.id)) }),
                        ],
                    });
                }),
                D = (0, o.forwardRef)((e, t) => (0, i.jsx)(w, { forwardRef: t, ...e }));
            var H = s(19934),
                M = s(70396),
                z = s.n(M);
            let F = (0, l.PA)((e) => {
                    let { label: t, artists: s } = e,
                        { formatMessage: l } = (0, x.A)();
                    return (0, i.jsx)(H.W1, {
                        isMobile: !0,
                        className: (0, r.$)(z().root, z().important),
                        label: t,
                        ariaLabel: l({ id: 'interface-actions.context-menu-artists' }),
                        children: s.map((e) => (0, i.jsx)(R.V, { artist: e }, e.id)),
                    });
                }),
                U = (0, l.PA)((e) => {
                    let { artists: t = [], label: s, labelRef: r } = e,
                        [l, n] = (0, o.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        p = (0, d.c)(() => {
                            let e = r.current;
                            e && n(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        h = (0, a.L)(() =>
                            (0, j.A)(() => {
                                p();
                            }, 100),
                        );
                    if (
                        ((0, o.useEffect)(
                            () => (
                                window.addEventListener('resize', h),
                                p(),
                                () => {
                                    window.removeEventListener('resize', h);
                                }
                            ),
                            [h, p],
                        ),
                        (0, o.useEffect)(() => {
                            p();
                        }, [t, p]),
                        0 !== t.length)
                    )
                        return (l || c) && (!c || 1 !== t.length) ? (c ? (0, i.jsx)(F, { artists: t, label: s }) : (0, i.jsx)(D, { artists: t, label: s })) : s;
                }),
                q = (0, l.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: s,
                            spoilerClassName: l,
                            linkClassName: p,
                            captionClassName: m,
                            captionSize: v,
                            variant: y = 'breakAll',
                            spoilerComponent: g,
                            ...x
                        } = e,
                        k = ((e) => {
                            var t, s, i;
                            let { separator: r, visibleArtistsCount: l, withLink: a, withComposer: n, artistIdWithoutLink: c, withContextMenu: p } = e,
                                m = null != (t = e.artists) ? t : [],
                                _ = null == (s = e.withAllArtistsTitle) || s,
                                v = null == (i = e.withCustomTooltip) || i,
                                y = (0, o.useRef)(null),
                                [g, x] = (0, o.useState)(!1),
                                {
                                    settings: { isMobile: k },
                                } = (0, u.g)(),
                                C = ((!k || 1 === m.length) && p) || !p,
                                f = ((e, t) => {
                                    var s, i, r;
                                    let l = null == (s = null == t ? void 0 : t.withComposer) || s,
                                        o = null == (i = null == t ? void 0 : t.withLink) || i,
                                        a = null != (r = null == t ? void 0 : t.separator) ? r : ', ',
                                        n = e
                                            .flatMap((e) => {
                                                var t;
                                                let s = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...s];
                                            })
                                            .join(a),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((e, t) => {
                                            let { visibleArtistsCount: s, withComposer: i } = t;
                                            return {
                                                visibleArtists: (s ? e.slice(0, s) : e).filter((e) => i || !e.isComposer),
                                                hiddenArtistsCount: s && s < e.length ? e.length - s : 0,
                                            };
                                        })(e, { withComposer: l, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, s) =>
                                            ((e, t) => {
                                                var s;
                                                let { withLink: i, separator: r, isFirst: l } = t;
                                                return {
                                                    primary: h(e, { withLink: i, separator: l ? void 0 : r }),
                                                    decomposed: (null != (s = e.decomposed) ? s : []).map((e) => {
                                                        let t = r ? e.separator : '';
                                                        return h(e, { withLink: i, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: o && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: a, isFirst: 0 === s }),
                                        ),
                                        allArtistsTitle: n,
                                        hiddenArtistsCount: d,
                                    };
                                })(m, { separator: r, visibleArtistsCount: g ? void 0 : l, withComposer: n, withLink: !!C && a, artistIdWithoutLink: c }),
                                A = _ ? f.allArtistsTitle : '',
                                E = (0, d.c)((e) => {
                                    (x(!0), e.preventDefault());
                                });
                            return {
                                artists: m,
                                groups: f.groups,
                                hiddenArtistsCount: f.hiddenArtistsCount,
                                allArtistsTitle: A,
                                withCustomTooltip: v,
                                withContextMenu: p,
                                labelRef: y,
                                handleOnSpoilerClick: E,
                                isTooltipEnabled: !!A && v && !p && !k,
                                title: !A || v || p ? void 0 : A,
                            };
                        })(x),
                        C = (0, a.L)(() =>
                            k.hiddenArtistsCount <= 0
                                ? null
                                : (0, o.isValidElement)(g)
                                  ? g
                                  : (0, i.jsx)(L, { spoilerClassName: l, spoilerArtistsCount: k.hiddenArtistsCount, handleOnSpoilerClick: k.handleOnSpoilerClick }),
                        ),
                        f = (0, i.jsx)(n.m_, {
                            referenceRef: k.labelRef,
                            enabled: k.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: k.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, i.jsxs)('div', {
                                style: s ? { WebkitLineClamp: s } : void 0,
                                className: (0, r.$)(_().root, _()['root_variant_'.concat(y)], { [_().root_clamp]: s && s > 0, [_().ellipsis]: !s }, t),
                                title: k.title,
                                children: [
                                    k.groups.map((e) =>
                                        (0, i.jsx)(
                                            N,
                                            {
                                                group: e,
                                                linkClassName: p,
                                                captionClassName: m,
                                                captionSize: v,
                                                allArtistsTitle: k.allArtistsTitle,
                                                withCustomTooltip: k.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    C,
                                ],
                            }),
                        });
                    return k.withContextMenu ? (0, i.jsx)(U, { labelRef: k.labelRef, artists: k.artists, label: f }) : f;
                });
        },
        15656: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { x: () => i }),
                (function (e) {
                    ((e.ASC = 'asc'), (e.DESC = 'desc'));
                })(i || (i = {})));
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
        17017: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { Z: () => i }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(i || (i = {})));
        },
        17657: (e) => {
            e.exports = {
                root: 'PlaylistCard_root__i3pR4',
                srTitleLink: 'PlaylistCard_srTitleLink__Gg2Dy',
                controls: 'PlaylistCard_controls__Ej8Rz',
                cover: 'PlaylistCard_cover__tpK5L',
                coverBlock: 'PlaylistCard_coverBlock__1slsN',
                image: 'PlaylistCard_image__Li6oy',
                titleLink: 'PlaylistCard_titleLink__H8qEc',
                artists: 'PlaylistCard_artists__HtVIF',
                artistLink: 'PlaylistCard_artistLink__jx3KB',
                playButton: 'PlaylistCard_playButton__eaduk',
                likeButton: 'PlaylistCard_likeButton__RYXJz',
                menuButton: 'PlaylistCard_menuButton__jFcWr',
                pinButton: 'PlaylistCard_pinButton__jhWnL',
                trailerButton: 'PlaylistCard_trailerButton__Qjg_U',
                control: 'PlaylistCard_control__73YUq',
            };
        },
        19840: (e, t, s) => {
            'use strict';
            (s.d(t, { G: () => r }), s(46606));
            var i = s(91136);
            class r extends i.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        21010: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        24460: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => p });
            var i = s(88800),
                r = s(96706),
                l = s(53548),
                o = s(2058),
                a = s(29595),
                n = s(74965),
                c = s(72288),
                d = s(66943),
                u = s(6322);
            let p = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: s } = (0, n.l)(),
                    { formatMessage: p } = (0, o.A)(),
                    [h, m] = (0, l.useState)(!1);
                return (0, l.useCallback)(async () => {
                    if (!t.isAuthorized) return void s((0, i.jsx)(d.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: a.u.ERROR });
                    if (h) return;
                    let l = { ...(0, r.HO)(e), url: e.url, isPinned: !e.isPinned };
                    m(!0);
                    let o = await e.togglePin();
                    (m(!1),
                        o
                            ? s((0, i.jsx)(u.l, { playlist: l }), { containerId: a.u.INFO })
                            : s((0, i.jsx)(d.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: a.u.ERROR }));
                }, [t.isAuthorized, h, e, s, p]);
            };
        },
        24548: (e, t, s) => {
            'use strict';
            s.d(t, { V: () => i });
            let i = { delay: { open: 1e3, close: 0 } };
        },
        30832: (e, t, s) => {
            'use strict';
            s.d(t, { T: () => o });
            var i = s(88800),
                r = s(15077),
                l = s(42729);
            let o = (e) => {
                let { playlist: t, closeToast: s } = e;
                return (0, i.jsx)(l.O, {
                    entityVariant: r.c.PLAYLIST,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    closeToast: s,
                    coverUri: t.coverUri,
                });
            };
        },
        35994: (e, t, s) => {
            'use strict';
            s.d(t, { R: () => r });
            var i = s(67174);
            let r = (e) => (0, i.u)('/artist/:artistId', { params: { artistId: e } });
        },
        40634: (e, t, s) => {
            'use strict';
            s.d(t, { V: () => x });
            var i = s(88800),
                r = s(65724),
                l = s(84961),
                o = s(53548),
                a = s(97234),
                n = s(70598),
                c = s(17392),
                d = s(29993),
                u = s(90688),
                p = s(19934),
                h = s(7555),
                m = s(29504),
                _ = s(78940),
                v = s(72288),
                y = s(80932),
                g = s.n(y);
            let x = (0, l.PA)((e) => {
                let { artist: t, className: s } = e,
                    { fullscreenPlayer: l } = (0, v.g)(),
                    y = (0, _.Z)(t.url),
                    k = (0, n.S)(),
                    C = (0, o.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, i.jsx)(x, { artist: t, className: s }, t.id)), e), []))
                        );
                    }, [t, s]),
                    f = (0, d.c)((e) => {
                        (l.modal.isOpened && l.modal.close(), k({ to: a.AppScreen.ArtistScreen }), y(e));
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(p.Dr, {
                            className: (0, r.$)(g().root, s),
                            onClick: f,
                            'data-test-id': c.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, i.jsx)(h.t, {
                                    radius: 'round',
                                    className: g().cover,
                                    children: (0, i.jsx)(u._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: g().image }),
                                }),
                                (0, i.jsx)(m.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        C,
                    ],
                });
            });
        },
        41911: (e, t, s) => {
            'use strict';
// for PulseSync: BEGIN import the download icon for playlist menu actions

            var pulseSyncPlaylistDownloadIcons = s(52300);
// for PulseSync: END import the download icon for playlist menu actions
            s.d(t, { B: () => Q });
            // for PulseSync WebHost: BEGIN imports for native addon context menu items
            var pulseSyncMenuJsx = s(88800),
                pulseSyncMenuItems = s(19934),
                pulseSyncMenuIcons = s(52300);
            // for PulseSync WebHost: END imports for native addon context menu items
            var i = s(88800),
                r = s(65724),
                l = s(84961),
                o = s(53548),
                a = s(2058),
                n = s(97234),
                c = s(91177),
                d = s(70598),
                u = s(46482),
                p = s(17392),
                h = s(18593),
                m = s(29993),
                _ = s(79070),
                v = s(29832),
                y = s(52300),
                g = s(7555),
                x = s(29504),
                k = s(13946),
                C = s(85902),
                f = s(24460),
                A = s(5407),
                E = s(57934),
                T = s(84384),
                N = s(4795),
                S = s(78940),
                O = s(55693),
                L = s(39079),
                j = s(72288),
                P = s(86298),
                R = s(81877),
                b = s(49738),
                I = s(91292),
                w = s(56862),
                D = s(16704),
                H = s(56446),
                M = s(36207),
                z = s(47513),
                F = s(19934),
                U = s(48749),
                q = s(22505),
                Y = s(9618),
                B = s(95210),
                V = s(46936),
                K = s(97956),
                X = s(93091),
                W = s(27817),
                $ = s(15425);
            let G = (0, l.PA)((e) => {
                var t;
                let { playlist: s, onOpenChange: r, open: l, ...o } = e,
                    { shouldShowBuySubscriptionModal: c, showBuySubscriptionModal: d } = (0, Y.q)(),
                    {
                        experiments: u,
                        settings: { isMobile: h },
                        trailer: _,
                        user: v,
                    } = (0, j.g)(),
                    y = (0, C.K)(s),
                    g = (0, f.A)(s),
                    x = (0, E.F)(),
                    { formatMessage: k } = (0, a.A)(),
                    T = (0, A.P)(),
                    N = u.checkExperiment(K.z.WebEditorsFeatures, 'on'),
                    S = (0, U.A)({ entityVariant: V.D.PLAYLIST, urlParams: { id: s.uid, kind: s.kind } });
                (0, B.N)(l);
                let O = (0, m.c)(() => {
                    if (c) return void d();
                    T() || (_.openPlaylistTrailer(s.id), x(n.DomainObjectType.Playlist, s.id));
                });
                // for PulseSync WebHost: BEGIN playlist context and native addon menu item rendering
                let pulseSyncInjectPlaylistMenuItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('playlistContextMenu', items, {
                        eventDetail: {
                            id: String(s.kind ?? s.id),
                            uuid: String(s.uuid ?? ''),
                            url: String(s.url ?? ''),
                            ...(s.title
                                ? {
                                      title: String(s.title),
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
                                        (activate(), r?.(!1));
                                    },
                                    children: label,
                                    'data-pulsesync-addon-menu-item': '',
                                },
                                key,
                            );
                        },
                    }) ?? items;
                // for PulseSync WebHost: END playlist context and native addon menu item rendering
                return (0, i.jsxs)(F.W1, {
                    title: s.title,
                    onOpenChange: r,
                    open: l,
                    offsetOptions: 10,
                    isMobile: h,
                    ariaLabel: k({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: p.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...o,
                    // for PulseSync WebHost: BEGIN inject native addon items into the playlist context menu
                    children: pulseSyncInjectPlaylistMenuItems([
                        N && (0, i.jsx)(q.d, { entityVariant: V.D.PLAYLIST, adminUrl: s.isFavouritePlaylist ? void 0 : S }),
                        !h && (0, i.jsx)(W.L, { onClick: g, isPinned: s.isPinned }),
                        !s.isFavouritePlaylist && (0, i.jsx)(X.T, { onClick: y, isLiked: s.isLiked, disabled: !v.isAuthorized }),
                        // for PulseSync: BEGIN download-to-file action in the playlist context menu
                        (s.tracksCount ?? 1) > 0 &&
                            (0, i.jsx)(F.Dr, {
                                onClick: s.downloadToFile,
                                icon: (0, i.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        // for PulseSync: END download-to-file action in the playlist context menu
                        (null == (t = s.trailer) ? void 0 : t.isAvailable) && (0, i.jsx)($.N, { onClick: O, disabled: !s.isAvailable }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the playlist context menu
                });
            });
            var J = s(17657),
                Z = s.n(J);
            let Q = (0, l.PA)((e) => {
                let { className: t, playlist: s, children: l, contentLinesCount: F, customDescription: U, onCoverMouseDown: q } = e,
                    Y = (0, c.D)(),
                    {
                        trailer: B,
                        user: V,
                        paywall: { modal: K },
                    } = (0, j.g)(),
                    { from: X, utmLink: W } = (0, T.f)({ contextId: s.uuid, contextType: h.K.Playlist }),
                    { formatMessage: $ } = (0, a.A)(),
                    { sendLikeSearchFeedback: J, sendNavigateSearchFeedback: Q, sendPlaySearchFeedback: ee } = (0, O.z)(),
                    [et, es] = (0, o.useState)(!1),
                    [ei, er] = (0, o.useState)(!1),
                    [el, eo] = (0, o.useState)(!1),
                    ea = (0, z.r)(s),
                    en = (0, C.K)(s),
                    ec = (0, f.A)(s),
                    ed = (0, d.S)(),
                    eu = (0, u.g)(),
                    ep = (0, S.Z)(s.url),
                    eh = (0, E.F)(),
                    em = (0, A.P)(),
                    e_ = (0, m.c)((e) => {
                        if ((e.stopPropagation(), em())) return void e.preventDefault();
                        (B.setUtmLink(W), B.openPlaylistTrailer(s.id), eh(n.DomainObjectType.Playlist, s.id));
                    }),
                    [ev, ey] = (0, o.useState)(!1),
                    { isPlaying: eg, togglePlay: ex } = (0, L.D)({
                        playContextParams: { contextData: { type: h.K.Playlist, meta: { id: s.id, uuid: s.uuid }, from: X, utmLink: W }, loadContextMeta: !0 },
                    }),
                    ek = (0, m.c)(() => {
                        (ed({ to: n.AppScreen.PlaylistScreen }), null == Q || Q());
                    }),
                    eC = (0, m.c)((e) => {
                        (ek(), ep(e));
                    }),
                    ef = (0, N.N)(),
                    eA = (0, m.c)(() => {
                        if (!em()) {
                            if (ef) return void K.open();
                            (et || eg || (es(!0), null == ee || ee()), ex(), eg || eu());
                        }
                    }),
                    eE = (0, m.c)(() => {
                        (ei || s.isLiked || (er(!0), null == J || J()), en());
                    }),
                    eT = (0, m.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eN = (0, m.c)((e) => {
                        (eo(e), ey(e));
                    }),
                    eS = (0, o.useMemo)(() => {
                        var e;
                        return U
                            ? (0, i.jsx)(x.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: U }, s.getKey('description'))
                            : (null == (e = s.artists) ? void 0 : e.length)
                              ? (0, i.jsx)(
                                    k.i,
                                    { className: Z().artists, artists: s.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                                    s.getKey('description'),
                                )
                              : void 0;
                    }, [U, s]),
                    eO = (0, _.L)(() => {
                        if (!s.isFavouritePlaylist)
                            return (0, i.jsx)(
                                b.c,
                                {
                                    className: (0, r.$)(Z().likeButton, Z().control),
                                    isLiked: s.isLiked,
                                    onClick: eE,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !V.isAuthorized,
                                },
                                s.getKey('LikeButton'),
                            );
                    }),
                    eL = (0, o.useMemo)(() => {
                        var e;
                        if (null == s || null == (e = s.trailer) ? void 0 : e.isAvailable)
                            return (0, i.jsx)(
                                M.n,
                                {
                                    children: (0, i.jsx)(
                                        H.k,
                                        { className: (0, r.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: e_ },
                                        s.getKey('TrailerButton'),
                                    ),
                                },
                                s.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [e_, s]),
                    ej = (0, o.useMemo)(
                        () =>
                            (0, i.jsx)(
                                w.O,
                                { onClick: ec, isPinned: s.isPinned, className: (0, r.$)(Z().pinButton, Z().control), withRipple: !1 },
                                s.getKey('PinButton'),
                            ),
                        [ec, s],
                    ),
                    eP = (0, o.useMemo)(
                        () =>
                            (0, i.jsx)(g.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': p.Kq.playlist.PLAYLIST_CARD,
                                children: (0, i.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: eC,
                                    onMouseDown: q,
                                    children: [
                                        (0, i.jsx)(R.B, {
                                            className: Z().image,
                                            src: s.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: ea,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, i.jsx)(v.hg, {
                                            isVisible: el || ev,
                                            className: Z().controls,
                                            playControl: (0, i.jsx)(
                                                D.D,
                                                {
                                                    className: (0, r.$)(Z().playButton, Z().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: eA,
                                                    isPlaying: eg,
                                                    disabled: !s.isAvailable,
                                                },
                                                s.getKey('PlayButton'),
                                            ),
                                            likeControl: eO,
                                            menuControl: (0, i.jsx)(
                                                G,
                                                {
                                                    playlist: s,
                                                    onOpenChange: eN,
                                                    open: el,
                                                    onClick: eT,
                                                    className: (0, r.$)(Z().menuButton, Z().control),
                                                    icon: (0, i.jsx)(y.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': p.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                s.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: ej,
                                            trailerControl: eL,
                                        }),
                                    ],
                                }),
                            }),
                        [eC, q, s, ea, el, ev, eA, eg, eO, eN, eT, ej, eL],
                    ),
                    eR = !!s.actualLikesCount && !s.isLikesCountHidden;
                return (0, i.jsxs)(v.MN, {
                    ref: Y,
                    'aria-label': ea,
                    className: (0, r.$)(Z().root, t),
                    title: (0, i.jsx)(x.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': p.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, i.jsx)(I.N, { className: Z().titleLink, href: s.url, tabIndex: -1, onClick: ek, children: s.title }),
                    }),
                    srTitle: (0, i.jsx)(I.N, { className: Z().srTitleLink, href: s.url, onClick: ek, children: s.title }),
                    contentLinesCount: F,
                    view: eP,
                    description: eS,
                    'data-test-id': p.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eR &&
                            (0, i.jsx)(P.x, {
                                ariaLabel: $({ id: 'entity-names.likes-counter' }, { counter: s.actualLikesCount }),
                                likesCount: s.actualLikesCount,
                                isLiked: s.isLiked,
                                handleLikeClick: en,
                            }),
                        l,
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
        46606: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { X: () => i }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(i || (i = {})));
        },
        47513: (e, t, s) => {
            'use strict';
            s.d(t, { r: () => l });
            var i = s(53548),
                r = s(2058);
            let l = (e) => {
                let { formatMessage: t } = (0, r.A)();
                return (0, i.useMemo)(() => {
                    let s = '';
                    e.isLiked && !e.actualLikesCount
                        ? (s = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (s =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let i = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(i, ' ').concat(s);
                }, [t, e]);
            };
        },
        48468: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        57328: (e, t, s) => {
            'use strict';
            s.d(t, { WithAuth: () => _ });
            var i = s(88800),
                r = s(84961),
                l = s(58390),
                o = s(65724),
                a = s(88969),
                n = s(29504),
                c = s(7628),
                d = s(42674),
                u = s.n(d);
            let p = (0, r.PA)(() =>
                (0, i.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, i.jsx)(n.DZ, {
                            className: (0, o.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, i.jsx)(a.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, i.jsx)(n.HL, {
                            className: (0, o.$)(u().text, u().important),
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
            var h = s(4370),
                m = s(72288);
            let _ = (0, r.PA)((e) => {
                let { children: t, withRedirectToMainPage: s } = e,
                    { user: r } = (0, m.g)();
                return r.isAuthorized ? t : (s && (0, l.redirect)(h.Z.main.href), (0, i.jsx)(p, {}));
            });
        },
        59724: (e, t, s) => {
            'use strict';
            s.d(t, { a: () => u });
            var i = s(88800),
                r = s(53548),
                l = s(8383),
                o = s(24709),
                a = s(88966);
            let n = new WeakMap();
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
                    let s =
                        n.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                s = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                i = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                s();
                                            } finally {
                                                ((t = !1), e.length > 0 && i());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (s(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), i());
                                },
                            };
                        })();
                    (n.set(t, s), (this.queue = s));
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
            var d = s(97234);
            let u = (0, o.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let s = (0, a.N)(),
                        o = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === d.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [n, u] = (0, r.useState)(() => {
                            let e = new c(s.createScreenSession().screenViewUuid, s);
                            return { client: s, input: t, isReady: o, scope: o ? s.createScreenScope(t, e) : null, session: e };
                        });
                    if (n.client !== s || n.input.pageId !== t.pageId || n.input.skeletonId !== t.skeletonId) {
                        let r = new c(s.createScreenSession().screenViewUuid, s),
                            a = { client: s, input: t, isReady: o, scope: o ? s.createScreenScope(t, r) : null, session: r };
                        return (u(a), (0, i.jsx)(l.k, { value: a, children: e }));
                    }
                    if (
                        n.isReady !== o ||
                        n.input.mainObjectType !== t.mainObjectType ||
                        n.input.mainObjectId !== t.mainObjectId ||
                        n.input.displayReasonId !== t.displayReasonId ||
                        n.input.pageIdForFrom !== t.pageIdForFrom ||
                        n.input.pagePlacement !== t.pagePlacement ||
                        n.input.pageStyle !== t.pageStyle
                    ) {
                        let r = { ...n, input: t, isReady: o, scope: o ? s.createScreenScope(t, n.session) : null };
                        return (u(r), (0, i.jsx)(l.k, { value: r, children: e }));
                    }
                    return (0, i.jsx)(l.k, { value: n, children: e });
                },
            );
        },
        60266: (e, t, s) => {
            'use strict';
            s.d(t, { A: () => o });
            var i = s(88800);
            s(30282);
            var r = s(11006),
                l = s.n(r);
            let o = (e) => {
                let { children: t } = e;
                return (0, i.jsx)('footer', { className: l().empty });
            };
        },
        62293: (e, t, s) => {
            'use strict';
            s.d(t, { v: () => r });
            var i = s(97956);
            let r = (e) => {
                let { checkExperiment: t, getDisclaimerContent: s, getExplicitContent: r, userRegion: l } = e;
                return 'ru' === l && t(i.z.WebNextFooterDisclaimer, 'on') ? s() : r();
            };
        },
        66363: (e, t, s) => {
            'use strict';
            s.d(t, { NS: () => l, Nh: () => r, xW: () => o });
            var i = s(9519);
            let r = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
            class l {
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
                            let s = e.cause;
                            if (r(s)) {
                                var i, l, o, a, n, c, d, u, p, h, m, _, v, y;
                                let r = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (i = s.request) ? void 0 : i.method) || (null == (l = s.options) ? void 0 : l.method),
                                        url: (null == (o = s.request) ? void 0 : o.url) || (null == (a = s.options) ? void 0 : a.url),
                                        headers: this.getHeaders((null == (n = s.request) ? void 0 : n.headers) || (null == (c = s.options) ? void 0 : c.headers)),
                                        body: (null == (d = s.request) ? void 0 : d.json) || (null == (u = s.options) ? void 0 : u.json),
                                        retries: t,
                                    },
                                };
                                void 0 !== s.response &&
                                    (r.response = {
                                        statusCode: s.response.statusCode,
                                        headers: this.getHeaders(s.response.headers),
                                        time: null == (y = s.response.timings) || null == (v = y.phases) ? void 0 : v.total,
                                    });
                                let g = this.getUrl((null == (p = s.request) ? void 0 : p.url) || (null == (h = s.options) ? void 0 : h.url));
                                this.logger.warn(
                                    '[Resource] Retry request '
                                        .concat((null == (m = s.request) ? void 0 : m.method) || (null == (_ = s.options) ? void 0 : _.method), ' ')
                                        .concat(g.origin, ' ')
                                        .concat(g.pathname)
                                        .concat(g.search),
                                    r,
                                );
                            } else
                                this.logger.warn('[Resource] Retry request (unknown)', {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                });
                        }),
                        (0, i._)(this, 'afterResponseHook', (e) => {
                            if ((e.statusCode || e.status) >= 200 && 299 >= (e.statusCode || e.status)) {
                                var t, s;
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
                                            time: null == (s = e.timings) || null == (t = s.phases) ? void 0 : t.total,
                                        },
                                    },
                                );
                            }
                            return e;
                        }),
                        (0, i._)(this, 'beforeErrorHook', (e) => {
                            let t = e.cause;
                            if (r(t)) {
                                var s, i, l, o, a, n, c, d, u, p, h, m, _, v;
                                let r = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (s = t.request) ? void 0 : s.method) || (null == (i = t.options) ? void 0 : i.method),
                                        url: (null == (l = t.request) ? void 0 : l.url) || (null == (o = t.options) ? void 0 : o.url),
                                        headers: this.getHeaders((null == (a = t.request) ? void 0 : a.headers) || (null == (n = t.options) ? void 0 : n.headers)),
                                        body: (null == (c = t.request) ? void 0 : c.json) || (null == (d = t.options) ? void 0 : d.json),
                                    },
                                };
                                void 0 !== t.response &&
                                    (r.response = {
                                        statusCode: t.response.statusCode || t.response.status,
                                        headers: this.getHeaders(t.response.headers),
                                        time: null == (v = t.response.timings) || null == (_ = v.phases) ? void 0 : _.total,
                                    });
                                let y = this.getUrl((null == (u = t.request) ? void 0 : u.url) || (null == (p = t.options) ? void 0 : p.url));
                                this.logger.error(
                                    '[Resource] Request failed '
                                        .concat((null == (h = t.request) ? void 0 : h.method) || (null == (m = t.options) ? void 0 : m.method), ' ')
                                        .concat(y.origin, ' ')
                                        .concat(y.pathname)
                                        .concat(y.search, ', reason: ')
                                        .concat(e.name),
                                    r,
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
            (s(35412), s(69629));
            let o = [
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
        66610: (e, t, s) => {
            'use strict';
            s.d(t, { D: () => n });
            var i = s(53548),
                r = s(24709),
                l = s(88966),
                o = s(87138),
                a = s(46457);
            let n = (0, r.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, l.N)(),
                    t = (0, o.w)(),
                    s = (0, i.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, a.c)((e) => {
                    t?.object && s && s.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        69629: (e) => {
            var t = Object.prototype.hasOwnProperty;
            function s(e) {
                return '[Throws: ' + (e ? e.message : '?') + ']';
            }
            function i(e) {
                var i = [];
                return (function e(r) {
                    if (null === r || 'object' != typeof r) return r;
                    if (-1 !== i.indexOf(r)) return '[Circular]';
                    if ((i.push(r), 'function' == typeof r.toJSON))
                        try {
                            var l = e(r.toJSON());
                            return (i.pop(), l);
                        } catch (e) {
                            return s(e);
                        }
                    if (Array.isArray(r)) {
                        var o = r.map(e);
                        return (i.pop(), o);
                    }
                    var a = Object.keys(r).reduce(function (i, l) {
                        return (
                            (i[l] = e(
                                (function (e, i) {
                                    if (t.call(e, i))
                                        try {
                                            return e[i];
                                        } catch (e) {
                                            return s(e);
                                        }
                                    return e[i];
                                })(r, l),
                            )),
                            i
                        );
                    }, {});
                    return (i.pop(), a);
                })(e);
            }
            ((e.exports = function (e, t, s) {
                return JSON.stringify(i(e), t, s);
            }),
                (e.exports.ensureProperties = i));
        },
        70396: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        79418: (e, t, s) => {
            'use strict';
            s.d(t, { $: () => v });
            var i = s(88800),
                r = s(65724),
                l = s(61013),
                o = s(53548);
            let a = (e) => {
                    let { style: t, forwardRef: s, context: r, ...l } = e,
                        o = (null == r ? void 0 : r.listAriaLabel) || void 0,
                        a = (null == r ? void 0 : r.listRole) || 'region';
                    return (0, i.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: a, 'aria-label': o, style: { ...t }, ref: s, ...l });
                },
                n = (0, o.forwardRef)((e, t) => (0, i.jsx)(a, { forwardRef: t, ...e }));
            var c = s(16434),
                d = s.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: s, withFooter: l, withHeader: o, withForceScroll: a, ...n } = e;
                    return (0, i.jsx)('div', {
                        className: (0, r.$)(d().scroller, { [d().scroller_withFooter]: l, [d().scroller_withHeader]: o, [d().scroller_withForceScroll]: a }),
                        style: { ...t },
                        ref: s,
                        ...n,
                        tabIndex: -1,
                    });
                },
                p = (0, o.forwardRef)((e, t) => (0, i.jsx)(u, { forwardRef: t, ...e }));
            var h = s(55482),
                m = s(75151);
            let _ = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: s,
                            onRangeHandler: r,
                            debounceDurationInMs: l = 100,
                            totalCount: a = 0,
                            shouldTriggerRangeChangedOn: n = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [p, _] = (0, o.useState)(null),
                        v = (0, o.useMemo)(
                            () =>
                                (0, h.A)((e) => {
                                    if ((null == r || r(e), n.length > 0 && _(e), t && s)) {
                                        let i = Math.floor(e.endIndex / t) + 1,
                                            r = Math.floor(e.startIndex / t);
                                        for (let e = r; e < i; e++) s(e);
                                    }
                                }, l),
                            [l, r, t, s, n],
                        );
                    (0, o.useEffect)(() => {
                        n.length > 0 && p && v(p);
                    }, n);
                    let y = (0, o.useMemo)(() => {
                        if (c)
                            return (0, h.A)((e) => {
                                c(e);
                            }, l);
                    }, [c, l]);
                    return (0, i.jsx)(m.sN, { ref: d, rangeChanged: v, totalCount: a, endReached: y, ...u });
                },
                v = (e) => {
                    let {
                            className: t,
                            customComponents: s,
                            onGetDataByPage: a,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: h,
                            listClassName: m,
                            overscan: v = 700,
                            pageSize: y = 20,
                            totalCount: g,
                            totalRequests: x,
                            debounceDurationInMs: k,
                            initialItemCount: C,
                            minInitialItemCount: f = 20,
                            handleRef: A,
                            alwaysShowScrollbar: E = !1,
                            testId: T,
                            isMobileLayout: N = !1,
                            shouldTriggerRangeChangedOn: S,
                            ...O
                        } = e,
                        [L, j] = (0, o.useState)(!1),
                        P = (0, o.useMemo)(
                            () =>
                                (0, l.A)((e) => {
                                    j(e);
                                }, 100),
                            [],
                        ),
                        R = (0, o.useMemo)(() => {
                            var e, t;
                            return N
                                ? {
                                      Scroller: p,
                                      List: null != (e = null == s ? void 0 : s.List) ? e : n,
                                      Item: null == s ? void 0 : s.Item,
                                      ScrollSeekPlaceholder: null == s ? void 0 : s.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: p,
                                      List: null != (t = null == s ? void 0 : s.List) ? t : n,
                                      Item: null == s ? void 0 : s.Item,
                                      Header: null == s ? void 0 : s.Header,
                                      Footer: null == s ? void 0 : s.Footer,
                                      ScrollSeekPlaceholder: null == s ? void 0 : s.ScrollSeekPlaceholder,
                                  };
                        }, [s, x, N]),
                        b = C ? Math.min(C, f) : void 0;
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(d().root, { [d().root_scrolling]: L || E, [d().root_notScrolling]: !L && !E }, t),
                        'data-test-id': T,
                        children: [
                            N && (null == s ? void 0 : s.Header) && s.Header(),
                            (0, i.jsx)(_, {
                                overscan: v,
                                components: R,
                                listClassName: m,
                                itemClassName: u,
                                isScrolling: P,
                                itemContent: h,
                                scrollerRef: A,
                                totalCount: g,
                                pageSize: y,
                                onPageHandler: a,
                                onRangeHandler: c,
                                debounceDurationInMs: k,
                                initialItemCount: b,
                                shouldTriggerRangeChangedOn: S,
                                ...O,
                            }),
                            N && (null == s ? void 0 : s.Footer) && s.Footer(),
                        ],
                    });
                };
        },
        80932: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        84218: (e) => {
            e.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        85902: (e, t, s) => {
            'use strict';
            s.d(t, { K: () => h });
            var i = s(88800),
                r = s(96706),
                l = s(53548),
                o = s(2058),
                a = s(79390),
                n = s(29595),
                c = s(74965),
                d = s(72288),
                u = s(66943),
                p = s(30832);
            let h = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: s } = (0, c.l)(),
                    [h, m] = (0, l.useState)(!1),
                    { formatMessage: _ } = (0, o.A)();
                return (0, l.useCallback)(async () => {
                    if (!t.isAuthorized) return void s((0, i.jsx)(u.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                    if (h) return;
                    let l = { ...(0, r.HO)(e), url: e.url, isLiked: !e.isLiked };
                    m(!0);
                    let o = await e.toggleLike();
                    (m(!1),
                        o === a.f.OK
                            ? s((0, i.jsx)(p.T, { playlist: l }), { containerId: n.u.INFO })
                            : s((0, i.jsx)(u.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                }, [t.isAuthorized, h, e, _, s]);
            };
        },
        86298: (e, t, s) => {
            'use strict';
            s.d(t, { x: () => p });
            var i = s(88800),
                r = s(65724),
                l = s(2058),
                o = s(17392),
                a = s(96817),
                n = s(52300),
                c = s(29504),
                d = s(84218),
                u = s.n(d);
            let p = (e) => {
                let { className: t, isLiked: s, likesCount: d, handleLikeClick: p, ariaLabel: h } = e,
                    { formatNumber: m } = (0, l.A)();
                return (0, i.jsx)(a.$, {
                    className: (0, r.$)(u().root, t),
                    onClick: p,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, i.jsx)(n.I, { variant: s ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': h,
                    'data-test-id': o.S7.CARD_LIKES,
                    children: (0, i.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: m(d) }),
                });
            };
        },
        86790: (e, t, s) => {
            'use strict';
            s.d(t, { w: () => T });
            var i = s(88800),
                r = s(65724),
                l = s(84961),
                o = s(2058),
                a = s(30282),
                n = s(94144),
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
            let d = (e, t, s) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(s);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(s);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(s);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(s);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(s);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: s, tld: i, year: r } = e;
                    return {
                        year: r,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, i, s) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, i, s) },
                    };
                };
            var p = s(62293),
                h = s(99839);
            let m = (e) => e(new Date(), (0, h.m)());
            var _ = s(51611),
                v = s(72288),
                y = s(11006),
                g = s.n(y),
                x = s(17392),
                k = s(29504),
                C = s(91292);
            let f = (e) => {
                    let { className: t, data: s } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(g().copyrights, t),
                        'data-test-id': x.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(k.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: g().text,
                                children: [
                                    '\xa9 ',
                                    s.year,
                                    ' \xa0',
                                    (0, i.jsx)(C.N, {
                                        target: '_blank',
                                        href: s.yandexMusic.url,
                                        className: (0, r.$)(g().copyrightLink, g().yandexMusicLink),
                                        'data-test-id': x.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: s.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(k.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(C.N, {
                                target: '_blank',
                                href: s.yandexProjects.url,
                                className: g().copyrightLink,
                                'data-test-id': x.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: s.yandexProjects.title,
                            }),
                        ],
                    });
                },
                A = (e) => {
                    let { disclaimer: t, links: s } = e;
                    return (0, i.jsxs)('div', {
                        className: g().links,
                        children: [
                            (0, i.jsx)('ol', {
                                className: g().list,
                                'data-test-id': x.S7.FOOTER_LINKS_LIST,
                                children: s.map((e) => {
                                    let { id: t, title: s, url: r } = e;
                                    return (0, i.jsx)(
                                        'li',
                                        {
                                            className: g().item,
                                            children: (0, i.jsx)(C.N, { target: '_blank', href: r, className: g().link, 'data-test-id': x.S7.FOOTER_LINK, children: s }),
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
                                className: g().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': x.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                E = (e) => {
                    let { className: t, data: s } = e;
                    return (0, i.jsxs)('footer', {
                        className: (0, r.$)(g().root, g().important, t),
                        'data-test-id': x.S7.FOOTER,
                        children: [(0, i.jsx)(A, { links: s.links, disclaimer: s.disclaimer }), (0, i.jsx)(f, { data: s.copyrights })],
                    });
                };
            (0, l.PA)((e) => {
                let { className: t } = e,
                    { location: s } = (0, v.g)(),
                    { formatDate: r, formatMessage: l } = (0, o.A)(),
                    { language: a } = (0, _.h)(),
                    n = u({ formatMessage: l, language: a, tld: s.tld, year: m(r) });
                return (0, i.jsx)(f, { className: t, data: n });
            });
            let T = (0, l.PA)((e) => {
                var t;
                let { className: s } = e,
                    { experiments: l, location: h, user: y } = (0, v.g)(),
                    { formatDate: x, formatMessage: k } = (0, o.A)(),
                    { isEnabled: C } = null != (t = (0, n.P)()) ? t : {},
                    { language: f } = (0, _.h)(),
                    A = ((e) => {
                        let { checkExperiment: t, formatMessage: s, isWebApplication: i, language: r, tld: l, userRegion: o, year: a } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: s, tld: i, language: r, userRegion: l } = e,
                                    o = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, i, r) },
                                    a = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, i, r) },
                                    n = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, i, r) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, i, r) },
                                    p = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, i, r) },
                                    h = [o, n, u];
                                return (s && 'ru' === l && h.push(a), h.push(p), h);
                            })({ formatMessage: s, isWebApplication: i, language: r, tld: l, userRegion: o }),
                            disclaimer: (0, p.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => s({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => s({ id: 'footer.explicit-content' }),
                                userRegion: o,
                            }),
                            copyrights: u({ formatMessage: s, language: r, tld: l, year: a }),
                        };
                    })({
                        checkExperiment: (e, t) => l.checkExperiment(e, t),
                        formatMessage: k,
                        isWebApplication: a.$3,
                        tld: h.tld,
                        language: f,
                        userRegion: y.account.data.userSessionRegionIso,
                        year: m(x),
                    });
                return (0, i.jsx)(E, { className: (0, r.$)({ [g().root_withOffsetForDeeplink]: C }, s), data: A });
            });
        },
        89916: (e, t, s) => {
            'use strict';
            s.d(t, { GX: () => l.G, X1: () => i.X, m5: () => r.m });
            var i = s(46606),
                r = s(91136),
                l = s(19840);
            s(17017);
        },
        91136: (e, t, s) => {
            'use strict';
            s.d(t, { m: () => r });
            class i extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: s = 'E_INTERNAL', data: r = {}, ...l } = t,
                        o = e || 'Internal error';
                    (super(o, l), (this.message = o), (this.code = s), (this.data = r), (this.stack = Error(o).stack), Object.setPrototypeOf(this, i.prototype));
                }
            }
            class r extends i {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...s } = {}) {
                    (super(e, { code: t, ...s }), Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        94144: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => r, P: () => l });
            var i = s(53548);
            let r = (0, i.createContext)(null),
                l = () => (0, i.useContext)(r);
        },
        99839: (e, t, s) => {
            'use strict';
            s.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
        99890: (e, t, s) => {
            'use strict';
            s.d(t, { C8: () => l, UC: () => o, dM: () => a, uV: () => n });
            var i = s(89916),
                r = s(66363);
            let l = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                o = (e) => (e.uid ? 'authorized' : 'no-uid'),
                a = (e) => {
                    if (!(e instanceof i.m5) || !(0, r.Nh)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, r.Nh)(e.cause)) return;
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
]);
