(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [453],
    {
        4370: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => l });
            var s = i(67174);
            let l = {
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
        6322: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => n });
            var s = i(88800),
                l = i(15077),
                r = i(33719);
            let n = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, s.jsx)(r.k, {
                    closeToast: i,
                    entityVariant: l.c.PLAYLIST,
                    entityUrl: t.url,
                    coverUri: t.coverUri,
                    entityTitle: t.title,
                    isPinned: t.isPinned,
                    radius: 's',
                });
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
        11882: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionKidsPlaylistsPage: () => j });
            var s = i(88800),
                l = i(65724),
                r = i(84961),
                n = i(53548),
                a = i(2058),
                o = i(88969),
                c = i(97234),
                d = i(59724),
                u = i(17392),
                p = i(29504),
                m = i(32596),
                _ = i(69630),
                h = i(41911),
                y = i(98427),
                C = i(46422),
                x = i(44230),
                E = i(37670),
                k = i(72288),
                A = i(54320),
                g = i(86790),
                v = i(60266),
                T = i(93317),
                O = i(37770),
                P = i(79418),
                N = i(71104),
                L = i(45654),
                S = i(87110),
                f = i.n(S);
            let j = (0, r.PA)(() => {
                let {
                        settings: { isMobile: e },
                        collection: {
                            kids: { playlists: t },
                        },
                    } = (0, k.g)(),
                    { contentScrollRef: i, setContentScrollRef: r } = (0, x.g)(),
                    S = (0, C.W)(),
                    { formatMessage: j } = (0, a.A)(),
                    b = (0, n.useCallback)(
                        (e) => {
                            t.getData({ page: e, pageSize: N.c });
                        },
                        [t],
                    );
                (0, A.X)(t.pagesLoader, b);
                let I = (0, n.useMemo)(() => ({ Footer: () => (0, s.jsx)(v.A, { children: (0, s.jsx)(g.w, { className: f().footer }) }) }), []),
                    R = t.isShimmerVisible ? 20 : t.items.length;
                return ((0, n.useEffect)(
                    () => () => {
                        t.reset();
                    },
                    [t],
                ),
                (0, E.J)(t.isResolved),
                t.isNeededToLoad && (0, n.use)(t.getData({ pageSize: N.c })),
                t.isRejected)
                    ? (0, s.jsx)(m.SomethingWentWrong, {})
                    : t.isEmpty
                      ? (0, s.jsx)(L.i, { title: j({ id: 'entity-names.artist-playlist' }) })
                      : (0, s.jsx)(d.a, {
                            pageId: c.AppScreen.CollectionKidsPlaylists,
                            pageIdForFrom: y.b.COLLECTION_KIDS_PLAYLISTS,
                            children: (0, s.jsx)(_.h, {
                                scrollElement: i,
                                outerTitle: j({ id: 'entity-names.artist-playlist' }),
                                children: (0, s.jsxs)('div', {
                                    className: f().root,
                                    'data-test-id': u.Xk.collection.COLLECTION_KIDS_PLAYLISTS_PAGE,
                                    children: [
                                        (0, s.jsx)(T.Y, {
                                            variant: T.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: S.canBack,
                                            children: (0, s.jsx)(p.DZ, {
                                                variant: 'h2',
                                                weight: 'bold',
                                                size: 'xl',
                                                lineClamp: 1,
                                                children: (0, s.jsx)(o.A, { id: 'entity-names.artist-playlist' }),
                                            }),
                                        }),
                                        (0, s.jsx)(P.$, {
                                            className: (0, l.$)(f().scrollContainer, f().important),
                                            customComponents: I,
                                            itemContentCallback: (e) => {
                                                let i = t.items[e],
                                                    l = j({ id: 'loading-messages.entity-is-loading' }, { entityName: j({ id: 'entity-names.album' }) });
                                                return i
                                                    ? (0, s.jsx)(h.B, { playlist: i, contentLinesCount: 3 }, i.id)
                                                    : (0, s.jsx)(O.V, { 'aria-label': l, linesCount: 3 });
                                            },
                                            initialItemCount: R,
                                            totalCount: R,
                                            onGetDataByPage: b,
                                            totalRequests: t.requestsCount,
                                            pageSize: N.c,
                                            listClassName: f().content,
                                            itemClassName: f().item,
                                            handleRef: r,
                                            context: { listAriaLabel: j({ id: 'entity-names.albums' }) },
                                            isMobileLayout: e,
                                            useWindowScroll: e,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
        },
        13946: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => B });
            var s = i(88800),
                l = i(65724),
                r = i(84961),
                n = i(53548),
                a = i(79070),
                o = i(17610),
                c = i(24548),
                d = i(29993),
                u = i(72288),
                p = i(35994);
            let m = (e, t) => {
                let { withLink: i, separator: s } = t,
                    l = i && !e.various ? (0, p.R)(e.id) : null;
                return { artist: e, name: e.name, separator: s, link: l };
            };
            var _ = i(21010),
                h = i.n(_),
                y = i(17392),
                C = i(29504),
                x = i(91292),
                E = i(2058),
                k = i(97234),
                A = i(70598),
                g = i(78940),
                v = i(55693),
                T = i(58217);
            let O = (0, r.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: l, captionSize: r = 'm', allArtistsTitle: n, withCustomTooltip: a, hoverSettings: c } = e,
                        {
                            name: p,
                            link: m,
                            title: _,
                            ariaLabel: h,
                            tooltipText: O,
                            isTooltipEnabled: P,
                            handleNavigate: N,
                        } = ((e) => {
                            var t, i;
                            let { item: s, allArtistsTitle: l, withCustomTooltip: r } = e,
                                { formatMessage: n } = (0, E.A)(),
                                a = ((e, t) => {
                                    let { item: i, allArtistsTitle: s, withCustomTooltip: l } = e,
                                        r = s || i.name;
                                    return {
                                        ...i,
                                        title: l ? void 0 : r,
                                        ariaLabel: i.link ? t({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: r,
                                        isTooltipEnabled: !s && l,
                                    };
                                })({ item: s, allArtistsTitle: l, withCustomTooltip: r }, n),
                                {
                                    track: o,
                                    settings: { isMobile: c },
                                } = (0, u.g)(),
                                p = (0, g.Z)(null != (i = null == (t = a.link) ? void 0 : t.href) ? i : a.artist.url),
                                { sendNavigateSearchFeedback: m } = (0, v.z)(),
                                _ = (0, A.S)(),
                                h = (0, d.c)((e) => {
                                    (c && o.isOpened && o.close(), p(e));
                                }),
                                y = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: s, fullscreenPlayer: l, fullscreenVideoPlayer: r } = (0, u.g)(),
                                        { modal: n } = s;
                                    return (0, T.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), n.isOpened && (s.reset(), n.close()), l.modal.isOpened && l.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            r.modal.isOpened && (r.modal.close(), r.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: a.artist, callback: h }),
                                C = (0, d.c)((e) => {
                                    (_({ to: k.AppScreen.ArtistScreen }), null == m || m(), y(e));
                                });
                            return { ...a, handleNavigate: C };
                        })({ item: t, allArtistsTitle: n, withCustomTooltip: a });
                    return m
                        ? (0, s.jsx)(x.N, {
                              ...m,
                              'aria-label': h,
                              className: i,
                              onClick: N,
                              title: _,
                              'data-test-id': y.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(o.m_, {
                                  enabled: P,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: O,
                                  hoverSettings: c,
                                  children: (0, s.jsx)(C.HL, { variant: 'span', type: 'entity', size: r, weight: 'medium', className: l, children: p }),
                              }),
                          })
                        : (0, s.jsx)(o.m_, {
                              enabled: P,
                              offsetOptions: 4,
                              placement: 'top',
                              text: O,
                              hoverSettings: c,
                              children: (0, s.jsx)(C.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: r,
                                  weight: 'medium',
                                  className: l,
                                  title: _,
                                  'data-test-id': y.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: p,
                              }),
                          });
                }),
                P = (e) => {
                    let { group: t, linkClassName: i, captionClassName: l, captionSize: r, allArtistsTitle: a, withCustomTooltip: o, hoverSettings: c } = e;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, s.jsx)(O, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: l,
                                captionSize: r,
                                allArtistsTitle: a,
                                withCustomTooltip: o,
                                hoverSettings: c,
                            }),
                            t.decomposed.map((e) =>
                                (0, s.jsxs)(
                                    n.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, s.jsx)(O, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: l,
                                                captionSize: r,
                                                allArtistsTitle: a,
                                                withCustomTooltip: o,
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
            var N = i(88969),
                L = i(65453);
            let S = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: r } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(L.N, {
                            role: 'button',
                            href: '',
                            className: (0, l.$)(h().spoiler, i),
                            onClick: r,
                            rel: 'nofollow',
                            'data-test-id': y.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(N.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var f = i(61013),
                j = i(87819),
                b = i(40634),
                I = i(48468),
                R = i.n(I);
            let D = (0, r.PA)((e) => {
                    let { label: t, artists: i, forwardRef: l } = e;
                    return (0, s.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, j.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: l, children: t }),
                            (0, s.jsx)(o.ZI, { className: R().tooltipContent, children: i.map((e) => (0, s.jsx)(b.V, { artist: e, className: R().artistItem }, e.id)) }),
                        ],
                    });
                }),
                w = (0, n.forwardRef)((e, t) => (0, s.jsx)(D, { forwardRef: t, ...e }));
            var M = i(19934),
                F = i(70396),
                z = i.n(F);
            let H = (0, r.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: r } = (0, E.A)();
                    return (0, s.jsx)(M.W1, {
                        isMobile: !0,
                        className: (0, l.$)(z().root, z().important),
                        label: t,
                        ariaLabel: r({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, s.jsx)(b.V, { artist: e }, e.id)),
                    });
                }),
                Y = (0, r.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: l } = e,
                        [r, o] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        p = (0, d.c)(() => {
                            let e = l.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        m = (0, a.L)(() =>
                            (0, f.A)(() => {
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
                        }, [t, p]),
                        0 !== t.length)
                    )
                        return (r || c) && (!c || 1 !== t.length) ? (c ? (0, s.jsx)(H, { artists: t, label: i }) : (0, s.jsx)(w, { artists: t, label: i })) : i;
                }),
                B = (0, r.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: r,
                            linkClassName: p,
                            captionClassName: _,
                            captionSize: y,
                            variant: C = 'breakAll',
                            spoilerComponent: x,
                            ...E
                        } = e,
                        k = ((e) => {
                            var t, i, s;
                            let { separator: l, visibleArtistsCount: r, withLink: a, withComposer: o, artistIdWithoutLink: c, withContextMenu: p } = e,
                                _ = null != (t = e.artists) ? t : [],
                                h = null == (i = e.withAllArtistsTitle) || i,
                                y = null == (s = e.withCustomTooltip) || s,
                                C = (0, n.useRef)(null),
                                [x, E] = (0, n.useState)(!1),
                                {
                                    settings: { isMobile: k },
                                } = (0, u.g)(),
                                A = ((!k || 1 === _.length) && p) || !p,
                                g = ((e, t) => {
                                    var i, s, l;
                                    let r = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        n = null == (s = null == t ? void 0 : t.withLink) || s,
                                        a = null != (l = null == t ? void 0 : t.separator) ? l : ', ',
                                        o = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(a),
                                        { visibleArtists: c, hiddenArtistsCount: d } = ((e, t) => {
                                            let { visibleArtistsCount: i, withComposer: s } = t;
                                            return {
                                                visibleArtists: (i ? e.slice(0, i) : e).filter((e) => s || !e.isComposer),
                                                hiddenArtistsCount: i && i < e.length ? e.length - i : 0,
                                            };
                                        })(e, { withComposer: r, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: c.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: s, separator: l, isFirst: r } = t;
                                                return {
                                                    primary: m(e, { withLink: s, separator: r ? void 0 : l }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = l ? e.separator : '';
                                                        return m(e, { withLink: s, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: n && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: a, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: o,
                                        hiddenArtistsCount: d,
                                    };
                                })(_, { separator: l, visibleArtistsCount: x ? void 0 : r, withComposer: o, withLink: !!A && a, artistIdWithoutLink: c }),
                                v = h ? g.allArtistsTitle : '',
                                T = (0, d.c)((e) => {
                                    (E(!0), e.preventDefault());
                                });
                            return {
                                artists: _,
                                groups: g.groups,
                                hiddenArtistsCount: g.hiddenArtistsCount,
                                allArtistsTitle: v,
                                withCustomTooltip: y,
                                withContextMenu: p,
                                labelRef: C,
                                handleOnSpoilerClick: T,
                                isTooltipEnabled: !!v && y && !p && !k,
                                title: !v || y || p ? void 0 : v,
                            };
                        })(E),
                        A = (0, a.L)(() =>
                            k.hiddenArtistsCount <= 0
                                ? null
                                : (0, n.isValidElement)(x)
                                  ? x
                                  : (0, s.jsx)(S, { spoilerClassName: r, spoilerArtistsCount: k.hiddenArtistsCount, handleOnSpoilerClick: k.handleOnSpoilerClick }),
                        ),
                        g = (0, s.jsx)(o.m_, {
                            referenceRef: k.labelRef,
                            enabled: k.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: k.allArtistsTitle,
                            hoverSettings: c.V,
                            children: (0, s.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, l.$)(h().root, h()['root_variant_'.concat(C)], { [h().root_clamp]: i && i > 0, [h().ellipsis]: !i }, t),
                                title: k.title,
                                children: [
                                    k.groups.map((e) =>
                                        (0, s.jsx)(
                                            P,
                                            {
                                                group: e,
                                                linkClassName: p,
                                                captionClassName: _,
                                                captionSize: y,
                                                allArtistsTitle: k.allArtistsTitle,
                                                withCustomTooltip: k.withCustomTooltip,
                                                hoverSettings: c.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    A,
                                ],
                            }),
                        });
                    return k.withContextMenu ? (0, s.jsx)(Y, { labelRef: k.labelRef, artists: k.artists, label: g }) : g;
                });
        },
        17017: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { Z: () => s }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(s || (s = {})));
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
        19840: (e, t, i) => {
            'use strict';
            (i.d(t, { G: () => l }), i(46606));
            var s = i(91136);
            class l extends s.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, l.prototype));
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
        24460: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => p });
            var s = i(88800),
                l = i(96706),
                r = i(53548),
                n = i(2058),
                a = i(29595),
                o = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(6322);
            let p = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: p } = (0, n.A)(),
                    [m, _] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, s.jsx)(d.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: a.u.ERROR });
                    if (m) return;
                    let r = { ...(0, l.HO)(e), url: e.url, isPinned: !e.isPinned };
                    _(!0);
                    let n = await e.togglePin();
                    (_(!1),
                        n
                            ? i((0, s.jsx)(u.l, { playlist: r }), { containerId: a.u.INFO })
                            : i((0, s.jsx)(d.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: a.u.ERROR }));
                }, [t.isAuthorized, m, e, i, p]);
            };
        },
        24548: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => s });
            let s = { delay: { open: 1e3, close: 0 } };
        },
        30832: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => n });
            var s = i(88800),
                l = i(15077),
                r = i(42729);
            let n = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, s.jsx)(r.O, {
                    entityVariant: l.c.PLAYLIST,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    closeToast: i,
                    coverUri: t.coverUri,
                });
            };
        },
        35994: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => l });
            var s = i(67174);
            let l = (e) => (0, s.u)('/artist/:artistId', { params: { artistId: e } });
        },
        40634: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => E });
            var s = i(88800),
                l = i(65724),
                r = i(84961),
                n = i(53548),
                a = i(97234),
                o = i(70598),
                c = i(17392),
                d = i(29993),
                u = i(90688),
                p = i(19934),
                m = i(7555),
                _ = i(29504),
                h = i(78940),
                y = i(72288),
                C = i(80932),
                x = i.n(C);
            let E = (0, r.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: r } = (0, y.g)(),
                    C = (0, h.Z)(t.url),
                    k = (0, o.S)(),
                    A = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, s.jsx)(E, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    g = (0, d.c)((e) => {
                        (r.modal.isOpened && r.modal.close(), k({ to: a.AppScreen.ArtistScreen }), C(e));
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(p.Dr, {
                            className: (0, l.$)(x().root, i),
                            onClick: g,
                            'data-test-id': c.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(m.t, {
                                    radius: 'round',
                                    className: x().cover,
                                    children: (0, s.jsx)(u._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: x().image }),
                                }),
                                (0, s.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        A,
                    ],
                });
            });
        },
        41911: (e, t, i) => {
            'use strict';
// for PulseSync: BEGIN import the download icon for playlist menu actions

            var pulseSyncPlaylistDownloadIcons = i(52300);
// for PulseSync: END import the download icon for playlist menu actions
            i.d(t, { B: () => Z });
            // for PulseSync WebHost: BEGIN imports for native addon context menu items
            var pulseSyncMenuJsx = i(88800),
                pulseSyncMenuItems = i(19934),
                pulseSyncMenuIcons = i(52300);
            // for PulseSync WebHost: END imports for native addon context menu items
            var s = i(88800),
                l = i(65724),
                r = i(84961),
                n = i(53548),
                a = i(2058),
                o = i(97234),
                c = i(91177),
                d = i(70598),
                u = i(46482),
                p = i(17392),
                m = i(18593),
                _ = i(29993),
                h = i(79070),
                y = i(29832),
                C = i(52300),
                x = i(7555),
                E = i(29504),
                k = i(13946),
                A = i(85902),
                g = i(24460),
                v = i(5407),
                T = i(57934),
                O = i(84384),
                P = i(4795),
                N = i(78940),
                L = i(55693),
                S = i(39079),
                f = i(72288),
                j = i(86298),
                b = i(81877),
                I = i(49738),
                R = i(91292),
                D = i(56862),
                w = i(16704),
                M = i(56446),
                F = i(36207),
                z = i(47513),
                H = i(19934),
                Y = i(48749),
                B = i(22505),
                U = i(9618),
                K = i(95210),
                V = i(46936),
                X = i(97956),
                W = i(93091),
                q = i(27817),
                $ = i(15425);
            let G = (0, r.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: l, open: r, ...n } = e,
                    { shouldShowBuySubscriptionModal: c, showBuySubscriptionModal: d } = (0, U.q)(),
                    {
                        experiments: u,
                        settings: { isMobile: m },
                        trailer: h,
                        user: y,
                    } = (0, f.g)(),
                    C = (0, A.K)(i),
                    x = (0, g.A)(i),
                    E = (0, T.F)(),
                    { formatMessage: k } = (0, a.A)(),
                    O = (0, v.P)(),
                    P = u.checkExperiment(X.z.WebEditorsFeatures, 'on'),
                    N = (0, Y.A)({ entityVariant: V.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, K.N)(r);
                let L = (0, _.c)(() => {
                    if (c) return void d();
                    O() || (h.openPlaylistTrailer(i.id), E(o.DomainObjectType.Playlist, i.id));
                });
                // for PulseSync WebHost: BEGIN playlist context and native addon menu item rendering
                let pulseSyncInjectPlaylistMenuItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('playlistContextMenu', items, {
                        eventDetail: {
                            id: String(i.kind ?? i.id),
                            uuid: String(i.uuid ?? ''),
                            url: String(i.url ?? ''),
                            ...(i.title
                                ? {
                                      title: String(i.title),
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
                                        (activate(), l?.(!1));
                                    },
                                    children: label,
                                    'data-pulsesync-addon-menu-item': '',
                                },
                                key,
                            );
                        },
                    }) ?? items;
                // for PulseSync WebHost: END playlist context and native addon menu item rendering
                return (0, s.jsxs)(H.W1, {
                    title: i.title,
                    onOpenChange: l,
                    open: r,
                    offsetOptions: 10,
                    isMobile: m,
                    ariaLabel: k({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: p.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...n,
                    // for PulseSync WebHost: BEGIN inject native addon items into the playlist context menu
                    children: pulseSyncInjectPlaylistMenuItems([
                        P && (0, s.jsx)(B.d, { entityVariant: V.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : N }),
                        !m && (0, s.jsx)(q.L, { onClick: x, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, s.jsx)(W.T, { onClick: C, isLiked: i.isLiked, disabled: !y.isAuthorized }),
                        // for PulseSync: BEGIN download-to-file action in the playlist context menu
                        (i.tracksCount ?? 1) > 0 &&
                            (0, s.jsx)(H.Dr, {
                                onClick: i.downloadToFile,
                                icon: (0, s.jsx)(pulseSyncPlaylistDownloadIcons.I, { variant: 'download', size: 'xxs' }),
                                children: 'Скачать в файл',
                            }),
                        // for PulseSync: END download-to-file action in the playlist context menu
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, s.jsx)($.N, { onClick: L, disabled: !i.isAvailable }),
                    ]),
                    // for PulseSync WebHost: END inject native addon items into the playlist context menu
                });
            });
            var J = i(17657),
                Q = i.n(J);
            let Z = (0, r.PA)((e) => {
                let { className: t, playlist: i, children: r, contentLinesCount: H, customDescription: Y, onCoverMouseDown: B } = e,
                    U = (0, c.D)(),
                    {
                        trailer: K,
                        user: V,
                        paywall: { modal: X },
                    } = (0, f.g)(),
                    { from: W, utmLink: q } = (0, O.f)({ contextId: i.uuid, contextType: m.K.Playlist }),
                    { formatMessage: $ } = (0, a.A)(),
                    { sendLikeSearchFeedback: J, sendNavigateSearchFeedback: Z, sendPlaySearchFeedback: ee } = (0, L.z)(),
                    [et, ei] = (0, n.useState)(!1),
                    [es, el] = (0, n.useState)(!1),
                    [er, en] = (0, n.useState)(!1),
                    ea = (0, z.r)(i),
                    eo = (0, A.K)(i),
                    ec = (0, g.A)(i),
                    ed = (0, d.S)(),
                    eu = (0, u.g)(),
                    ep = (0, N.Z)(i.url),
                    em = (0, T.F)(),
                    e_ = (0, v.P)(),
                    eh = (0, _.c)((e) => {
                        if ((e.stopPropagation(), e_())) return void e.preventDefault();
                        (K.setUtmLink(q), K.openPlaylistTrailer(i.id), em(o.DomainObjectType.Playlist, i.id));
                    }),
                    [ey, eC] = (0, n.useState)(!1),
                    { isPlaying: ex, togglePlay: eE } = (0, S.D)({
                        playContextParams: { contextData: { type: m.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: W, utmLink: q }, loadContextMeta: !0 },
                    }),
                    ek = (0, _.c)(() => {
                        (ed({ to: o.AppScreen.PlaylistScreen }), null == Z || Z());
                    }),
                    eA = (0, _.c)((e) => {
                        (ek(), ep(e));
                    }),
                    eg = (0, P.N)(),
                    ev = (0, _.c)(() => {
                        if (!e_()) {
                            if (eg) return void X.open();
                            (et || ex || (ei(!0), null == ee || ee()), eE(), ex || eu());
                        }
                    }),
                    eT = (0, _.c)(() => {
                        (es || i.isLiked || (el(!0), null == J || J()), eo());
                    }),
                    eO = (0, _.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eP = (0, _.c)((e) => {
                        (en(e), eC(e));
                    }),
                    eN = (0, n.useMemo)(() => {
                        var e;
                        return Y
                            ? (0, s.jsx)(E.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: Y }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, s.jsx)(
                                    k.i,
                                    { className: Q().artists, artists: i.artists, lineClamp: 1, linkClassName: Q().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [Y, i]),
                    eL = (0, h.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, s.jsx)(
                                I.c,
                                {
                                    className: (0, l.$)(Q().likeButton, Q().control),
                                    isLiked: i.isLiked,
                                    onClick: eT,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !V.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eS = (0, n.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, s.jsx)(
                                F.n,
                                {
                                    children: (0, s.jsx)(
                                        M.k,
                                        { className: (0, l.$)(Q().trailerButton, Q().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eh },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [eh, i]),
                    ef = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(
                                D.O,
                                { onClick: ec, isPinned: i.isPinned, className: (0, l.$)(Q().pinButton, Q().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ec, i],
                    ),
                    ej = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(x.t, {
                                className: Q().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': p.Kq.playlist.PLAYLIST_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: Q().coverBlock,
                                    onClick: eA,
                                    onMouseDown: B,
                                    children: [
                                        (0, s.jsx)(b.B, {
                                            className: Q().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: ea,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, s.jsx)(y.hg, {
                                            isVisible: er || ey,
                                            className: Q().controls,
                                            playControl: (0, s.jsx)(
                                                w.D,
                                                {
                                                    className: (0, l.$)(Q().playButton, Q().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: ev,
                                                    isPlaying: ex,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eL,
                                            menuControl: (0, s.jsx)(
                                                G,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eP,
                                                    open: er,
                                                    onClick: eO,
                                                    className: (0, l.$)(Q().menuButton, Q().control),
                                                    icon: (0, s.jsx)(C.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': p.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: ef,
                                            trailerControl: eS,
                                        }),
                                    ],
                                }),
                            }),
                        [eA, B, i, ea, er, ey, ev, ex, eL, eP, eO, ef, eS],
                    ),
                    eb = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, s.jsxs)(y.MN, {
                    ref: U,
                    'aria-label': ea,
                    className: (0, l.$)(Q().root, t),
                    title: (0, s.jsx)(E.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'aria-hidden': !0,
                        'data-test-id': p.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, s.jsx)(R.N, { className: Q().titleLink, href: i.url, tabIndex: -1, onClick: ek, children: i.title }),
                    }),
                    srTitle: (0, s.jsx)(R.N, { className: Q().srTitleLink, href: i.url, onClick: ek, children: i.title }),
                    contentLinesCount: H,
                    view: ej,
                    description: eN,
                    'data-test-id': p.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eb &&
                            (0, s.jsx)(j.x, {
                                ariaLabel: $({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: eo,
                            }),
                        r,
                    ],
                });
            });
        },
        46606: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { X: () => s }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(s || (s = {})));
        },
        47513: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => r });
            var s = i(53548),
                l = i(2058);
            let r = (e) => {
                let { formatMessage: t } = (0, l.A)();
                return (0, s.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let s = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(s, ' ').concat(i);
                }, [t, e]);
            };
        },
        48468: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        59724: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => u });
            var s = i(88800),
                l = i(53548),
                r = i(8383),
                n = i(24709),
                a = i(88966);
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
            let u = (0, n.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let i = (0, a.N)(),
                        n = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === d.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [o, u] = (0, l.useState)(() => {
                            let e = new c(i.createScreenSession().screenViewUuid, i);
                            return { client: i, input: t, isReady: n, scope: n ? i.createScreenScope(t, e) : null, session: e };
                        });
                    if (o.client !== i || o.input.pageId !== t.pageId || o.input.skeletonId !== t.skeletonId) {
                        let l = new c(i.createScreenSession().screenViewUuid, i),
                            a = { client: i, input: t, isReady: n, scope: n ? i.createScreenScope(t, l) : null, session: l };
                        return (u(a), (0, s.jsx)(r.k, { value: a, children: e }));
                    }
                    if (
                        o.isReady !== n ||
                        o.input.mainObjectType !== t.mainObjectType ||
                        o.input.mainObjectId !== t.mainObjectId ||
                        o.input.displayReasonId !== t.displayReasonId ||
                        o.input.pageIdForFrom !== t.pageIdForFrom ||
                        o.input.pagePlacement !== t.pagePlacement ||
                        o.input.pageStyle !== t.pageStyle
                    ) {
                        let l = { ...o, input: t, isReady: n, scope: n ? i.createScreenScope(t, o.session) : null };
                        return (u(l), (0, s.jsx)(r.k, { value: l, children: e }));
                    }
                    return (0, s.jsx)(r.k, { value: o, children: e });
                },
            );
        },
        60266: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => n });
            var s = i(88800);
            i(30282);
            var l = i(11006),
                r = i.n(l);
            let n = (e) => {
                let { children: t } = e;
                return (0, s.jsx)('footer', { className: r().empty });
            };
        },
        62293: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => l });
            var s = i(97956);
            let l = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: l, userRegion: r } = e;
                return 'ru' === r && t(s.z.WebNextFooterDisclaimer, 'on') ? i() : l();
            };
        },
        66610: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => o });
            var s = i(53548),
                l = i(24709),
                r = i(88966),
                n = i(87138),
                a = i(46457);
            let o = (0, l.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, r.N)(),
                    t = (0, n.w)(),
                    i = (0, s.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, a.c)((e) => {
                    t?.object && i && i.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        69629: (e) => {
            var t = Object.prototype.hasOwnProperty;
            function i(e) {
                return '[Throws: ' + (e ? e.message : '?') + ']';
            }
            function s(e) {
                var s = [];
                return (function e(l) {
                    if (null === l || 'object' != typeof l) return l;
                    if (-1 !== s.indexOf(l)) return '[Circular]';
                    if ((s.push(l), 'function' == typeof l.toJSON))
                        try {
                            var r = e(l.toJSON());
                            return (s.pop(), r);
                        } catch (e) {
                            return i(e);
                        }
                    if (Array.isArray(l)) {
                        var n = l.map(e);
                        return (s.pop(), n);
                    }
                    var a = Object.keys(l).reduce(function (s, r) {
                        return (
                            (s[r] = e(
                                (function (e, s) {
                                    if (t.call(e, s))
                                        try {
                                            return e[s];
                                        } catch (e) {
                                            return i(e);
                                        }
                                    return e[s];
                                })(l, r),
                            )),
                            s
                        );
                    }, {});
                    return (s.pop(), a);
                })(e);
            }
            ((e.exports = function (e, t, i) {
                return JSON.stringify(s(e), t, i);
            }),
                (e.exports.ensureProperties = s));
        },
        70396: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        79567: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 57328)), Promise.resolve().then(i.bind(i, 11882)));
        },
        80932: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        84218: (e) => {
            e.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        85902: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => m });
            var s = i(88800),
                l = i(96706),
                r = i(53548),
                n = i(2058),
                a = i(79390),
                o = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                p = i(30832);
            let m = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [m, _] = (0, r.useState)(!1),
                    { formatMessage: h } = (0, n.A)();
                return (0, r.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, s.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let r = { ...(0, l.HO)(e), url: e.url, isLiked: !e.isLiked };
                    _(!0);
                    let n = await e.toggleLike();
                    (_(!1),
                        n === a.f.OK
                            ? i((0, s.jsx)(p.T, { playlist: r }), { containerId: o.u.INFO })
                            : i((0, s.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [t.isAuthorized, m, e, h, i]);
            };
        },
        86298: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => p });
            var s = i(88800),
                l = i(65724),
                r = i(2058),
                n = i(17392),
                a = i(96817),
                o = i(52300),
                c = i(29504),
                d = i(84218),
                u = i.n(d);
            let p = (e) => {
                let { className: t, isLiked: i, likesCount: d, handleLikeClick: p, ariaLabel: m } = e,
                    { formatNumber: _ } = (0, r.A)();
                return (0, s.jsx)(a.$, {
                    className: (0, l.$)(u().root, t),
                    onClick: p,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, s.jsx)(o.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': m,
                    'data-test-id': n.S7.CARD_LIKES,
                    children: (0, s.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: _(d) }),
                });
            };
        },
        86790: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => O });
            var s = i(88800),
                l = i(65724),
                r = i(84961),
                n = i(2058),
                a = i(30282),
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
                    let { formatMessage: t, language: i, tld: s, year: l } = e;
                    return {
                        year: l,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, s, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, s, i) },
                    };
                };
            var p = i(62293),
                m = i(99839);
            let _ = (e) => e(new Date(), (0, m.m)());
            var h = i(51611),
                y = i(72288),
                C = i(11006),
                x = i.n(C),
                E = i(17392),
                k = i(29504),
                A = i(91292);
            let g = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('div', {
                        className: (0, l.$)(x().copyrights, t),
                        'data-test-id': E.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, s.jsxs)(k.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: x().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, s.jsx)(A.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, l.$)(x().copyrightLink, x().yandexMusicLink),
                                        'data-test-id': E.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(k.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, s.jsx)(A.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: x().copyrightLink,
                                'data-test-id': E.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                v = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, s.jsxs)('div', {
                        className: x().links,
                        children: [
                            (0, s.jsx)('ol', {
                                className: x().list,
                                'data-test-id': E.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: l } = e;
                                    return (0, s.jsx)(
                                        'li',
                                        {
                                            className: x().item,
                                            children: (0, s.jsx)(A.N, { target: '_blank', href: l, className: x().link, 'data-test-id': E.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, s.jsx)(k.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: x().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': E.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                T = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('footer', {
                        className: (0, l.$)(x().root, x().important, t),
                        'data-test-id': E.S7.FOOTER,
                        children: [(0, s.jsx)(v, { links: i.links, disclaimer: i.disclaimer }), (0, s.jsx)(g, { data: i.copyrights })],
                    });
                };
            (0, r.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, y.g)(),
                    { formatDate: l, formatMessage: r } = (0, n.A)(),
                    { language: a } = (0, h.h)(),
                    o = u({ formatMessage: r, language: a, tld: i.tld, year: _(l) });
                return (0, s.jsx)(g, { className: t, data: o });
            });
            let O = (0, r.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: r, location: m, user: C } = (0, y.g)(),
                    { formatDate: E, formatMessage: k } = (0, n.A)(),
                    { isEnabled: A } = null != (t = (0, o.P)()) ? t : {},
                    { language: g } = (0, h.h)(),
                    v = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: s, language: l, tld: r, userRegion: n, year: a } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: s, language: l, userRegion: r } = e,
                                    n = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, s, l) },
                                    a = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, s, l) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, s, l) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, s, l) },
                                    p = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, s, l) },
                                    m = [n, o, u];
                                return (i && 'ru' === r && m.push(a), m.push(p), m);
                            })({ formatMessage: i, isWebApplication: s, language: l, tld: r, userRegion: n }),
                            disclaimer: (0, p.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: n,
                            }),
                            copyrights: u({ formatMessage: i, language: l, tld: r, year: a }),
                        };
                    })({
                        checkExperiment: (e, t) => r.checkExperiment(e, t),
                        formatMessage: k,
                        isWebApplication: a.$3,
                        tld: m.tld,
                        language: g,
                        userRegion: C.account.data.userSessionRegionIso,
                        year: _(E),
                    });
                return (0, s.jsx)(T, { className: (0, l.$)({ [x().root_withOffsetForDeeplink]: A }, i), data: v });
            });
        },
        87110: (e) => {
            e.exports = {
                root: 'CollectionKidsPlaylistsPage_root__RXH06',
                scrollContainer: 'CollectionKidsPlaylistsPage_scrollContainer__F_oj2',
                important: 'CollectionKidsPlaylistsPage_important__5V_zc',
                footer: 'CollectionKidsPlaylistsPage_footer__R41Ol',
                item: 'CollectionKidsPlaylistsPage_item__ht83l',
                content: 'CollectionKidsPlaylistsPage_content__6Oo1m',
            };
        },
        89916: (e, t, i) => {
            'use strict';
            i.d(t, { GX: () => r.G, X1: () => s.X, m5: () => l.m });
            var s = i(46606),
                l = i(91136),
                r = i(19840);
            i(17017);
        },
        91136: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => l });
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: l = {}, ...r } = t,
                        n = e || 'Internal error';
                    (super(n, r), (this.message = n), (this.code = i), (this.data = l), (this.stack = Error(n).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
            class l extends s {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(e, { code: t, ...i }), Object.setPrototypeOf(this, l.prototype));
                }
            }
        },
        94144: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => l, P: () => r });
            var s = i(53548);
            let l = (0, s.createContext)(null),
                r = () => (0, s.useContext)(l);
        },
        99839: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => s });
            let s = () => ({ year: 'numeric' });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7191, 9904, 3078, 8194, 1191, 8655, 8767, 983, 6706, 4771, 2662, 6904, 1898, 2058, 3578, 8628, 4378, 9780, 8283, 9332, 5151, 4732, 9087, 3979, 6719, 1928,
                9091, 9124, 900, 9934, 2470, 7670, 4441, 2088, 6317, 763, 2670, 7358,
            ],
            () => e((e.s = 79567)),
        ),
            (_N_E = e.O()));
    },
]);
