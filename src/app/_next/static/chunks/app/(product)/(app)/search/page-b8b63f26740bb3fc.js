(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2839, 6363],
    {
        597: (e) => {
            e.exports = {
                viewport: 'AnimatedSearchInputText_viewport__u75Lt',
                phrase: 'AnimatedSearchInputText_phrase__4UX_G',
                phrase_last: 'AnimatedSearchInputText_phrase_last__UEo_B',
                phraseContent: 'AnimatedSearchInputText_phraseContent__GDAaa',
                text: 'AnimatedSearchInputText_text__Yinjg',
                base: 'AnimatedSearchInputText_base__49jn_',
                gradient: 'AnimatedSearchInputText_gradient__ET9p_',
                'animated-search-input-text-gradient': 'AnimatedSearchInputText_animated-search-input-text-gradient__u_iqf',
                gradientStop: 'AnimatedSearchInputText_gradientStop___ehIy',
                gradientStop_start: 'AnimatedSearchInputText_gradientStop_start__y1iyr',
                gradientStop_middle: 'AnimatedSearchInputText_gradientStop_middle__7Ojsx',
                gradientStop_end: 'AnimatedSearchInputText_gradientStop_end__suNEa',
                root: 'AnimatedSearchInputText_root__3H8oP',
                'animated-search-input-text-phrase': 'AnimatedSearchInputText_animated-search-input-text-phrase__xxBCh',
                'animated-search-input-text-phrase-last': 'AnimatedSearchInputText_animated-search-input-text-phrase-last__zII_U',
                root_active: 'AnimatedSearchInputText_root_active__mXt1h',
                root_safari: 'AnimatedSearchInputText_root_safari__OMxq_',
                'animated-search-input-text-phrase-safari': 'AnimatedSearchInputText_animated-search-input-text-phrase-safari__93BWx',
                'animated-search-input-text-phrase-last-safari': 'AnimatedSearchInputText_animated-search-input-text-phrase-last-safari__rGLqU',
                'animated-search-input-text-content-safari': 'AnimatedSearchInputText_animated-search-input-text-content-safari__XtJjl',
            };
        },
        3448: (e) => {
            e.exports = { root: 'SearchBestResultsPlaylistBlock_root__HLU50' };
        },
        5818: (e) => {
            e.exports = {
                coverBlock: 'ArtistCard_coverBlock__YCSus',
                like: 'ArtistCard_like__jmlKc',
                root: 'ArtistCard_root__F4RfA',
                root_selected: 'ArtistCard_root_selected__9Djbq',
                cover: 'ArtistCard_cover__RSTvK',
                image: 'ArtistCard_image__Uab5w',
                name: 'ArtistCard_name__IF9yZ',
                icon: 'ArtistCard_icon__PjbJI',
            };
        },
        5885: (e) => {
            e.exports = {
                root: 'MixedEntitiesBlock_root__Zs8l2',
                controls: 'MixedEntitiesBlock_controls__mOhq7',
                item: 'MixedEntitiesBlock_item__uRvxc',
                item_withMultipleColumns: 'MixedEntitiesBlock_item_withMultipleColumns__ziUqI',
                column: 'MixedEntitiesBlock_column__sHpUC',
            };
        },
        6424: (e) => {
            e.exports = { cover: 'SearchBestResultsClipBlock_cover___5Wwj' };
        },
        6668: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => i });
            var r = a(53548),
                s = a(29993);
            let i = () => {
                let e = (0, r.useRef)(new Map());
                return (
                    (0, r.useLayoutEffect)(
                        () => (
                            e.current.size > 0 && e.current.clear(),
                            () => {
                                e.current.clear();
                            }
                        ),
                        [],
                    ),
                    (0, s.c)((t, a) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, a), a)))
                );
            };
        },
        7628: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => h });
            var r = a(88800),
                s = a(88969),
                i = a(58390),
                o = a(17392),
                n = a(29993),
                l = a(96817),
                c = a(29504),
                d = a(99890),
                u = a(4086),
                m = a(41928);
            let h = (e) => {
                let { size: t = 'm', variant: a = 'default', color: h = 'primary', withRipple: _ = !0, buttonText: p, isBlock: x, key: b, className: v } = e,
                    S = (0, i.useRouter)(),
                    j = (0, m.N)().get(u.QG),
                    C = (0, n.c)(() => {
                        j.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), S.push(j.authorizationUrl));
                    });
                return (0, r.jsx)(
                    l.$,
                    {
                        onClick: C,
                        className: v,
                        isBlock: x,
                        color: h,
                        variant: a,
                        size: t,
                        radius: 'xxxl',
                        withRipple: _,
                        'data-test-id': o.S7.UNAUTHORIZED_BUTTON,
                        children: p || (0, r.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, r.jsx)(s.A, { id: 'authorization.enter-button' }) }),
                    },
                    b,
                );
            };
        },
        12360: (e) => {
            e.exports = { root: 'SearchBestResultsAlbumBlock_root__j7nJ4' };
        },
        14661: (e, t, a) => {
            'use strict';
            var r;
            (a.d(t, { n: () => r }),
                (function (e) {
                    ((e.ALL = 'all'),
                        (e.TRACK = 'track'),
                        (e.ALBUM = 'album'),
                        (e.ARTIST = 'artist'),
                        (e.PLAYLIST = 'playlist'),
                        (e.WAVE = 'wave'),
                        (e.GENRE = 'genre'),
                        (e.USER = 'user'),
                        (e.UGC_TRACK = 'ugc_track'),
                        (e.PODCAST = 'podcast'),
                        (e.PODCAST_EPISODE = 'podcast_episode'),
                        (e.VIDEO = 'video'),
                        (e.LYRICS = 'lyrics'),
                        (e.CLIP = 'clip'),
                        (e.BOOK = 'book'),
                        (e.CONCERT = 'concert'));
                })(r || (r = {})));
        },
        15324: (e) => {
            e.exports = { root: 'VirtualGrid_root__nSEzJ', column: 'VirtualGrid_column__P8hJp', row: 'VirtualGrid_row__PL5V_' };
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
        17071: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => r });
            var r = (function (e) {
                return (
                    (e.MAIN = 'MAIN'),
                    (e.TRAILER = 'TRAILER'),
                    (e.VIDEO_PLAYER = 'VIDEO_PLAYER'),
                    (e.IMAGE_SLIDER = 'IMAGE_SLIDER'),
                    (e.PROMO_LANDING = 'PROMO_LANDING'),
                    e
                );
            })({});
        },
        20129: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => G });
            var r = a(88800),
                s = a(65724),
                i = a(84961),
                o = a(53548),
                n = a(2058),
                l = a(88969),
                c = a(17392),
                d = a(50408),
                u = a(96817),
                m = a(11372),
                h = a(98225),
                _ = a(29504),
                p = a(32353),
                x = a(29595),
                b = a(74965),
                v = a(51318),
                S = a(17071),
                j = a(38860),
                C = a(72288),
                A = a(27506),
                g = a(97956),
                y = a(74773),
                I = a(66943),
                T = a(94058),
                f = a(37770),
                k = a(87366),
                E = a(76099),
                P = a(79418),
                R = a(91177),
                N = a(29832),
                L = a(52300),
                B = a(7555),
                O = a(81877),
                w = a(60978),
                D = a(5818),
                M = a.n(D);
            let z = (0, i.PA)((e) => {
                let { className: t, artist: a } = e,
                    i = (0, R.D)(),
                    {
                        wizard: { toggleArtistLike: n, isArtistLiked: l },
                    } = (0, C.g)(),
                    { id: d, name: m, coverUri: h } = a,
                    p = (0, o.useCallback)(() => {
                        n(d);
                    }, [n, d]),
                    x = l(d),
                    b = (0, o.useMemo)(
                        () =>
                            (0, r.jsx)(B.t, {
                                className: M().cover,
                                radius: 'round',
                                'data-test-id': c.e8.wizard.ARTIST_CARD,
                                children: (0, r.jsxs)(u.$, {
                                    radius: 'round',
                                    className: M().coverBlock,
                                    variant: 'default',
                                    onClick: p,
                                    withRipple: !1,
                                    withHover: !1,
                                    'aria-pressed': x,
                                    'aria-label': m,
                                    'data-test-id': c.e8.wizard.ARTIST_CARD_BUTTON,
                                    children: [
                                        (0, r.jsx)(O.B, { className: M().image, src: h || w.A.src, fit: 'cover', alt: m, withAvatarReplace: !!h, 'aria-hidden': !0 }),
                                        (0, r.jsx)('div', {
                                            className: (0, s.$)(M().like),
                                            children: (0, r.jsx)(L.I, { variant: 'likedVariant', size: 's', className: M().icon }),
                                        }),
                                    ],
                                }),
                            }),
                        [x, h, m, p],
                    );
                return (0, r.jsx)(N.MN, {
                    ref: i,
                    className: (0, s.$)(M().root, { [M().root_selected]: x }, t),
                    textPosition: 'center',
                    title: (0, r.jsx)(_.HL, {
                        'aria-hidden': !0,
                        className: M().name,
                        variant: 'div',
                        type: 'entity',
                        size: 'l',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.e8.wizard.ARTIST_CARD_NAME,
                        children: m,
                    }),
                    view: b,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                });
            });
            var H = a(63442),
                U = a.n(H);
            let V = { [p.u.Desktop]: { start: 40, end: 40 }, [p.u.Mobile]: { start: 40, end: 40 } },
                G = (0, i.PA)((e) => {
                    let { onFinishSuccess: t } = e,
                        { formatMessage: a } = (0, n.A)(),
                        {
                            wizard: i,
                            settings: { isMobile: p, isWindowsApplication: R, isLinuxApplication: N },
                            experiments: L,
                            user: B,
                        } = (0, C.g)(),
                        { notify: O } = (0, b.l)(),
                        w = (0, j.z)(),
                        [D, M] = (0, d.d)(),
                        H = (0, o.useRef)(!1),
                        G = L.checkExperiment(g.z.WebNextWizard3, 'on'),
                        W = (0, h.zb)(0),
                        F = (0, o.useMemo)(
                            () => (e) => {
                                var t;
                                if (!W.onTabChange || e === W.value) return;
                                W.onTabChange(e);
                                let a = null == (t = i.genres[e]) ? void 0 : t.id;
                                (i.setFilter(a), null == D || D.scrollTo({ top: 0 }));
                            },
                            [i, W, D],
                        ),
                        $ = (0, o.useMemo)(() => {
                            switch (i.remainingLikesToFinish) {
                                case 0:
                                    return a({ id: 'wizard.button-done' });
                                case 1:
                                    return a({ id: 'wizard.button-one-more' });
                                default:
                                    return 0 === i.selectedArtistsQuantity ? a({ id: 'wizard.button-tune' }) : a({ id: 'wizard.button-little-more' });
                            }
                        }, [i.remainingLikesToFinish, i.selectedArtistsQuantity, a]),
                        q = (0, o.useMemo)(
                            () =>
                                (0, r.jsx)(E.wI, {
                                    className: U().tabCarousel,
                                    ...W,
                                    onTabChange: F,
                                    isShimmerVisible: i.loadingState === y.G.PENDING,
                                    shimmer: (0, r.jsx)(E.zr, { isActive: !0, className: U().tabCarousel, count: p ? 2 : 3 }),
                                    children: i.genres.map((e, t) =>
                                        (0, r.jsx)(
                                            k.o,
                                            {
                                                className: (0, s.$)(U().filter, { [U().filter_selected]: t === W.value }),
                                                titleClassName: U().tabTitle,
                                                title: e.title,
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [i.genres, W, F, i.loadingState, p],
                        ),
                        Y = (0, o.useCallback)(() => {
                            i.loadArtists(60);
                        }, [i]);
                    (0, o.useEffect)(() => {
                        i.filter && Y();
                    }, [i.filter, Y]);
                    let X = (0, o.useCallback)(async () => {
                        (await i.loadGenres(), Y());
                    }, [i, Y]);
                    ((0, o.useEffect)(() => {
                        i.modal.isOpened && X();
                    }, [i, i.modal.isOpened, X]),
                        (0, o.useEffect)(() => {
                            i.loadingState === y.G.REJECT &&
                                (i.modal.close(), O((0, r.jsx)(I.h, { error: a({ id: 'error-messages.error-load-wizard' }) }), { containerId: x.u.ERROR }));
                        }, [i, i.loadGenres, i.loadingState, a, O]));
                    let K = (0, o.useMemo)(
                            () =>
                                (0, r.jsx)(_.DZ, {
                                    className: U().title,
                                    weight: 'bold',
                                    variant: 'h1',
                                    size: 'l',
                                    'data-test-id': c.e8.wizard.WIZARD_MODAL_TITLE,
                                    children: (0, r.jsx)(l.A, { id: 'wizard.modal-title' }),
                                }),
                            [],
                        ),
                        Z = (0, o.useCallback)(async () => {
                            if (!H.current) {
                                H.current = !0;
                                try {
                                    ((await i.finish()) === A.F.OK && (await B.getSettings(), await (null == t ? void 0 : t())), i.modal.close());
                                } finally {
                                    H.current = !1;
                                }
                            }
                        }, [t, B, i]);
                    return (
                        (0, o.useEffect)(
                            () => (
                                null == w ||
                                    w.addShortcutsListener(S.M.MAIN, v.l.CLOSE, () => {
                                        i.modal.isOpened && Z();
                                    }),
                                () => {
                                    null == w || w.removeShortcutsListener(S.M.MAIN, v.l.CLOSE);
                                }
                            ),
                            [Z, i.modal.isOpened, w],
                        ),
                        (0, r.jsxs)(m.a, {
                            className: (0, s.$)(U().root, { [U().root_withCustomControls]: R || N }),
                            headerClassName: U().modalHeader,
                            contentClassName: U().modalContent,
                            open: i.modal.isOpened,
                            onOpenChange: i.modal.onOpenChange,
                            onClose: Z,
                            size: 'fullscreen',
                            placement: 'center',
                            labelClose: a({ id: 'interface-actions.close' }),
                            closeButtonDataTestId: c.e8.wizard.WIZARD_MODAL_CLOSE_BUTTON,
                            'data-test-id': c.e8.wizard.WIZARD_MODAL,
                            header: p && K,
                            escapeKey: !1,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: U().wrapper,
                                    children: [
                                        !p && K,
                                        (0, r.jsx)(_.HL, {
                                            className: U().text,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_TEXT,
                                            children: (0, r.jsx)(l.A, { id: 'wizard.modal-text' }),
                                        }),
                                        G &&
                                            (0, r.jsx)('div', {
                                                className: U().progress,
                                                children: (0, r.jsx)(_.HL, {
                                                    variant: 'div',
                                                    size: 'm',
                                                    weight: 'normal',
                                                    lineClamp: 2,
                                                    'data-test-id': c.e8.wizard.WIZARD_MODAL_PROGRESS_TEXT,
                                                    children: i.progressText,
                                                }),
                                            }),
                                        (0, r.jsx)(u.$, {
                                            className: (0, s.$)(U().button, { [U().button_withProgress]: G }),
                                            size: p ? 'm' : 'l',
                                            iconPosition: 'right',
                                            radius: 'xxxl',
                                            color: 'primary',
                                            onClick: Z,
                                            disabled: !i.canFinish,
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_BUTTON,
                                            children: (0, r.jsx)(_.HL, { variant: 'div', size: 'm', weight: 'medium', children: $ }),
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)('div', {
                                    className: U().mainContainer,
                                    children: [
                                        (0, r.jsx)(T.F, { className: U().carousel, carouselElement: q, scrollPadding: V }),
                                        (0, r.jsx)(P.$, {
                                            withFooter: !1,
                                            className: (0, s.$)(U().scrollContainer, U().important),
                                            itemContentCallback: (e) => {
                                                let t = i.artistsByGenre[e];
                                                if (!t) {
                                                    let e = a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.artist' }) });
                                                    return (0, r.jsx)(f.V, { 'aria-label': e, round: !0, centered: !0 });
                                                }
                                                return (0, r.jsx)(z, { artist: t }, t.id);
                                            },
                                            data: i.artistsByGenre,
                                            endReached: Y,
                                            listClassName: U().content,
                                            itemClassName: U().item,
                                            pageSize: 60,
                                            handleRef: M,
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_ARTISTS_GRID,
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
        },
        20445: (e) => {
            e.exports = {
                root: 'AnimatedSearchInput_root__9y1dF',
                root_introActive: 'AnimatedSearchInput_root_introActive__NzQ59',
                searchInput: 'AnimatedSearchInput_searchInput__fhfbv',
                searchInputContent: 'AnimatedSearchInput_searchInputContent___J4zD',
                mirrorViewport: 'AnimatedSearchInput_mirrorViewport__1S69P',
                mirrorContent: 'AnimatedSearchInput_mirrorContent__fjXLS',
                haze: 'AnimatedSearchInput_haze__q7hJQ',
                haze_visible: 'AnimatedSearchInput_haze_visible__qw91M',
            };
        },
        21576: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => u });
            var r = a(88800),
                s = a(84961),
                i = a(53548),
                o = a(50408),
                n = a(47969),
                l = a(53360),
                c = a(15324),
                d = a.n(c);
            let u = (0, s.PA)((e) => {
                let {
                        count: t,
                        rowGap: a,
                        columnGap: s,
                        getEstimateRowSize: c,
                        minColumnCount: u = 2,
                        minColumnWidth: m,
                        maxColumnWidth: h,
                        maxColumnCount: _,
                        renderItemByIndex: p,
                        onChangeRange: x,
                    } = e,
                    [b, v] = (0, o.d)(),
                    {
                        virtualizer: S,
                        rowResizeObserver: j,
                        columnCount: C,
                        indices: A,
                    } = (0, n.L)({
                        count: t,
                        rowGap: a,
                        columnGap: s,
                        getEstimateRowSize: c,
                        minColumnCount: u,
                        minColumnWidth: m,
                        maxColumnWidth: h,
                        maxColumnCount: _,
                        containerRef: b,
                    });
                (0, i.useEffect)(() => {
                    !S.isScrolling && S.range && (null == x || x(S.range, C));
                }, [x, S.isScrolling, S.range, C]);
                let g = { '--virtual-grid-height': ''.concat(S.getTotalSize(), 'px'), '--virtual-grid-column-count': C, '--virtual-grid-column-gap': ''.concat(s, 'px') };
                return (0, r.jsx)('div', {
                    ref: v,
                    style: g,
                    className: d().root,
                    children: S.getVirtualItems().map((e) =>
                        (0, r.jsx)(
                            l.U,
                            {
                                className: d().row,
                                columnClassName: d().column,
                                virtualItem: e,
                                resizeObserver: j,
                                indices: A,
                                renderItemByIndex: p,
                                scrollMargin: S.options.scrollMargin,
                            },
                            e.key,
                        ),
                    ),
                });
            });
        },
        22549: (e) => {
            e.exports = {
                root: 'SearchEntities_root__OHn_e',
                container: 'SearchEntities_container__mT8FY',
                queryToVibe: 'SearchEntities_queryToVibe__F4lY_',
                correctedTextBlock: 'SearchEntities_correctedTextBlock__B4b8e',
                footer: 'SearchEntities_footer__AUX9I',
                block: 'SearchEntities_block__yLWMc',
                video: 'SearchEntities_video__ndT3a',
                concertShimmer: 'SearchEntities_concertShimmer__QR0OC',
                entityCardShimmer: 'SearchEntities_entityCardShimmer__MSRgj',
            };
        },
        28777: (e) => {
            e.exports = { root: 'SearchBestResults_root__12Tlp', root_withSingleResult: 'SearchBestResults_root_withSingleResult__qAMCB' };
        },
        33301: (e) => {
            e.exports = {
                button: 'SearchHistoryBlockMobile_button__Wh_Q6',
                header: 'SearchHistoryBlockMobile_header__Lx4On',
                mixedEntitiesBlock: 'SearchHistoryBlockMobile_mixedEntitiesBlock__cJ3o_',
                buttonContainer: 'SearchHistoryBlockMobile_buttonContainer__IppED',
            };
        },
        34232: (e, t, a) => {
            'use strict';
            a.d(t, { y: () => r });
            let r = (e) => (e ? e.replace('-', '_') : null);
        },
        35786: (e) => {
            e.exports = {
                root: 'SearchBestResultsPodcastEpisodeBlock_root__YHMZ5',
                cover: 'SearchBestResultsPodcastEpisodeBlock_cover__QuzER',
                podcastMeta: 'SearchBestResultsPodcastEpisodeBlock_podcastMeta__u2dSw',
                important: 'SearchBestResultsPodcastEpisodeBlock_important__qJ_Ej',
                titleContainer: 'SearchBestResultsPodcastEpisodeBlock_titleContainer__MNogD',
                text: 'SearchBestResultsPodcastEpisodeBlock_text__uJpwJ',
                progress: 'SearchBestResultsPodcastEpisodeBlock_progress__ftBpc',
            };
        },
        35948: (e, t, a) => {
            'use strict';
            a.d(t, { x: () => r, y: () => s });
            let r = '(prefers-reduced-motion: reduce)',
                s = () => window.matchMedia(r).matches;
        },
        37717: (e, t, a) => {
            'use strict';
            a.d(t, { t: () => p });
            var r = a(88800),
                s = a(53548),
                i = a(2058),
                o = a(88969),
                n = a(58390),
                l = a(29993),
                c = a(29595),
                d = a(74965),
                u = a(4370),
                m = a(72288),
                h = a(59304),
                _ = a(66943);
            let p = (e) => {
                let { user: t, search: a } = (0, m.g)(),
                    { formatMessage: p } = (0, i.A)(),
                    { notify: x } = (0, d.l)(),
                    b = (0, n.useRouter)();
                return (
                    (0, s.useEffect)(() => {
                        a.isEmptyHistory && b.push(u.Z.search.href);
                    }, [a.isEmptyHistory, b]),
                    (0, l.c)(() => {
                        try {
                            (t.account.data.uid && a.clearHistory({ userId: t.account.data.uid }),
                                x((0, r.jsx)(h.$, { message: (0, r.jsx)(o.A, { id: 'search.cleared-history' }) }), { containerId: c.u.INFO }),
                                e && e(),
                                b.push(u.Z.search.href));
                        } catch (e) {
                            x((0, r.jsx)(_.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: c.u.ERROR });
                        }
                    })
                );
            };
        },
        41427: (e, t, a) => {
            'use strict';
            var r;
            (a.d(t, { $: () => r }),
                (function (e) {
                    ((e.TOP = 'top'),
                        (e.TRACK = 'track'),
                        (e.CLIP = 'clip'),
                        (e.ALBUM = 'album'),
                        (e.ARTIST = 'artist'),
                        (e.PLAYLIST = 'playlist'),
                        (e.KIDS_MUSIC = 'kids-music'),
                        (e.KIDS_PLAYLIST = 'kids-playlist'),
                        (e.SPOKEN_PLAYLIST = 'spoken-playlist'),
                        (e.PODCAST = 'podcast'),
                        (e.BOOK = 'book'),
                        (e.KIDS_PODCAST = 'kids-podcast'),
                        (e.KIDS_BOOK = 'kids-book'),
                        (e.WAVES = 'waves'),
                        (e.CONCERT = 'concert'));
                })(r || (r = {})));
        },
        45923: (e, t, a) => {
            'use strict';
            var r;
            (a.d(t, { r: () => r }),
                (function (e) {
                    ((e.TRACK = 'best_result_track'),
                        (e.ARTIST = 'best_result_artist'),
                        (e.CONCERT = 'best_result_concert'),
                        (e.RECENT_RELEASE = 'best_result_recent_release'),
                        (e.ALBUM = 'best_result_album'),
                        (e.WAVE = 'best_result_wave'),
                        (e.ARTISTS_RELATED = 'best_result_artists_related'),
                        (e.OVERVIEW = 'best_result_overview'),
                        (e.PODCAST = 'best_result_podcast'),
                        (e.PODCAST_EPISODE = 'best_result_podcast_episode'),
                        (e.NON_MUSIC = 'best_result_non_music'),
                        (e.CLIP = 'best_result_clip'),
                        (e.UPCOMING = 'best_result_upcoming'),
                        (e.PLAYLIST = 'best_result_playlist'),
                        (e.BOOK_CHAPTER = 'best_result_book_chapter'));
                })(r || (r = {})));
        },
        47969: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => c });
            var r = a(35802),
                s = a(79070),
                i = a(61013),
                o = a(53548);
            let n = (e) => {
                let { minColumnWidth: t, maxColumnWidth: a, containerWidth: r, totalCount: s, columnGap: i, minColumnCount: o, maxColumnCount: n } = e,
                    l = Math.max(1, Math.floor((r + i) / (t + i))),
                    c = Math.max(o, Math.floor((r + i) / ((a + t) * 0.5 + i)));
                for (let e = o; e <= l; e++) {
                    let s = (r - (e - 1) * i) / e;
                    if (s >= t && s <= a) {
                        c = e;
                        break;
                    }
                }
                return { rowCount: Math.ceil(s / (c = n ? Math.min(c, n) : c)), columnCount: c };
            };
            var l = a(10270);
            let c = (e) => {
                let {
                        count: t,
                        getEstimateRowSize: a,
                        rowGap: c,
                        columnGap: d,
                        minColumnWidth: u,
                        maxColumnWidth: m,
                        minColumnCount: h,
                        maxColumnCount: _,
                        containerRef: p,
                    } = e,
                    { rowCount: x, columnCount: b } = ((e) => {
                        let { containerRef: t, minColumnCount: a, maxColumnWidth: r, minColumnWidth: s, totalCount: l, columnGap: c, maxColumnCount: d } = e,
                            [u, m] = (0, o.useState)({ rowCount: 0, columnCount: 0 }),
                            h = (0, o.useRef)(null),
                            _ = (0, o.useMemo)(
                                () =>
                                    (0, i.A)(
                                        (e) => {
                                            m(
                                                n({
                                                    minColumnWidth: s,
                                                    maxColumnWidth: r,
                                                    containerWidth: e.contentRect.width,
                                                    totalCount: l,
                                                    columnGap: c,
                                                    minColumnCount: a,
                                                    maxColumnCount: d,
                                                }),
                                            );
                                        },
                                        100,
                                        { trailing: !0 },
                                    ),
                                [c, d, r, a, s, l],
                            );
                        return (
                            (0, o.useLayoutEffect)(
                                () => (
                                    h.current && h.current.disconnect(),
                                    (h.current = new ResizeObserver((e) => {
                                        e.forEach(_);
                                    })),
                                    t &&
                                        (m(
                                            n({
                                                minColumnWidth: s,
                                                maxColumnWidth: r,
                                                containerWidth: t.getBoundingClientRect().width,
                                                totalCount: l,
                                                columnGap: c,
                                                minColumnCount: a,
                                                maxColumnCount: d,
                                            }),
                                        ),
                                        h.current.observe(t)),
                                    () => {
                                        var e;
                                        null == (e = h.current) || e.disconnect();
                                    }
                                ),
                                [c, t, _, d, r, a, s, l],
                            ),
                            u
                        );
                    })({ totalCount: t, columnGap: null != d ? d : 0, minColumnCount: h, maxColumnWidth: m, minColumnWidth: u, maxColumnCount: _, containerRef: p }),
                    { virtualizer: v, resizeObserver: S } = (0, l.r)({ count: x, getEstimateSize: a, gap: c, containerRef: p, useVirtualizerMeasurement: !1 }),
                    j = (0, r.A)(
                        Array.from({ length: t }, (e, t) => t),
                        b,
                    ),
                    C = (0, s.L)(() => {
                        var e, t;
                        if (!v.range) return null;
                        let a = null == (e = j[v.range.startIndex]) ? void 0 : e.at(0),
                            r = null == (t = j[v.range.endIndex]) ? void 0 : t.at(-1);
                        return void 0 !== a && void 0 !== r ? { startIndex: a, endIndex: r } : null;
                    });
                return { virtualizer: v, rowResizeObserver: S, indices: j, columnCount: b, visibleRange: C };
            };
        },
        48704: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => _ });
            var r = a(88800),
                s = a(65724),
                i = a(84961),
                o = a(53548),
                n = a(88969),
                l = a(17392),
                c = a(29504),
                d = a(84273),
                u = a(1698),
                m = a(70662),
                h = a.n(m);
            let _ = (0, i.PA)((e) => {
                let { isShimmerVisible: t, isShimmerActive: a, withTitle: i, mixes: m, shimmerCount: _ = 5, className: p } = e,
                    x = (0, o.useMemo)(
                        () =>
                            t
                                ? (0, r.jsx)(u.e, { isActive: a, round: !1, centered: !1, withInfo: !1, count: _ })
                                : m.map((e) => (0, r.jsx)(d.N, { title: e.title, weblink: e.weblink, covers: e.covers, imagesLayoutType: e.imagesLayoutType }, e.id)),
                        [a, t, m, _],
                    );
                return (0, r.jsxs)('div', {
                    'data-test-id': l.e8.mixes.MIXES_GRID_CONTAINER,
                    children: [
                        i &&
                            (0, r.jsx)(c.DZ, {
                                className: h().mixesTitle,
                                size: 's',
                                weight: 'bold',
                                variant: 'h3',
                                'data-test-id': l.e8.mixes.MIXES_GRID_HEADER,
                                children: (0, r.jsx)(n.A, { id: 'entity-names.mixes' }),
                            }),
                        (0, r.jsx)('div', { className: (0, s.$)(h().mixesGrid, p), children: x }),
                    ],
                });
            });
        },
        48864: (e) => {
            e.exports = {
                root: 'SearchBestResultsUpcomingBlock_root__baVsK',
                important: 'SearchBestResultsUpcomingBlock_important__v_XW8',
                cover: 'SearchBestResultsUpcomingBlock_cover__c45Xf',
                coverImage: 'SearchBestResultsUpcomingBlock_coverImage___mLf5',
                lockIcon: 'SearchBestResultsUpcomingBlock_lockIcon__yaBf_',
                likeButton: 'SearchBestResultsUpcomingBlock_likeButton__Srh_v',
            };
        },
        48937: (e) => {
            e.exports = {
                root: 'SearchBestResultsShimmer_root__xMCOZ',
                container: 'SearchBestResultsShimmer_container__Je48X',
                entity: 'SearchBestResultsShimmer_entity____sr1',
                important: 'SearchBestResultsShimmer_important__vbFUa',
                cover: 'SearchBestResultsShimmer_cover__rzY5m',
                meta: 'SearchBestResultsShimmer_meta__GlLPe',
                title: 'SearchBestResultsShimmer_title__AXYX8',
                subtitle: 'SearchBestResultsShimmer_subtitle__IULSY',
            };
        },
        50392: (e) => {
            e.exports = { root: 'SearchBestResultsNonMusicBlock_root__YagzT' };
        },
        51318: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => r });
            var r = (function (e) {
                return (
                    (e.TOGGLE_PLAY = 'TOGGLE_PLAY'),
                    (e.TOGGLE_MUTE = 'TOGGLE_MUTE'),
                    (e.INCREASE_VOLUME = 'INCREASE_VOLUME'),
                    (e.DECREASE_VOLUME = 'DECREASE_VOLUME'),
                    (e.LIKE = 'LIKE'),
                    (e.DISLIKE = 'DISLIKE'),
                    (e.MOVE_FORWARD = 'MOVE_FORWARD'),
                    (e.MOVE_BACKWARD = 'MOVE_BACKWARD'),
                    (e.SLIDE_FORWARD = 'SLIDE_FORWARD'),
                    (e.SLIDE_BACKWARD = 'SLIDE_BACKWARD'),
                    (e.TOGGLE_REPEAT = 'TOGGLE_REPEAT'),
                    (e.TOGGLE_SHUFFLE = 'TOGGLE_SHUFFLE'),
                    (e.TOGGLE_FULLSCREEN_PLAYER = 'TOGGLE_FULLSCREEN_PLAYER'),
                    (e.CLOSE = 'CLOSE'),
                    e
                );
            })({});
        },
        51516: (e) => {
            e.exports = { root: 'VirtualGridRow_root___UfbI' };
        },
        53360: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => c });
            var r = a(88800),
                s = a(65724),
                i = a(84961),
                o = a(53548),
                n = a(51516),
                l = a.n(n);
            let c = (0, i.PA)((e) => {
                let { indices: t, virtualItem: a, renderItemByIndex: i, columnClassName: n, className: c, resizeObserver: d, scrollMargin: u } = e,
                    m = (0, o.useRef)(null),
                    h = t[a.index],
                    _ = { '--virtual-grid-row-vertical-offset': ''.concat(a.start - u, 'px') };
                return (
                    (0, o.useEffect)(() => {
                        let e = m.current;
                        if (e)
                            return (
                                null == d || d.observe(e),
                                () => {
                                    null == d || d.unobserve(e);
                                }
                            );
                    }, [d]),
                    (0, r.jsx)('div', {
                        'data-index': a.index,
                        ref: m,
                        style: _,
                        className: (0, s.$)(l().root, c),
                        children: null == h ? void 0 : h.map((e, t) => (0, r.jsx)('div', { className: n, children: i(e, a.index, t) }, ''.concat(a.key, '_').concat(e))),
                    })
                );
            });
        },
        57074: (e, t, a) => {
            'use strict';
            a.d(t, { YK: () => u });
            var r,
                s,
                i = a(88092),
                o = a(53548),
                n = a(2058);
            (!(function (e) {
                ((e.formatDate = 'FormattedDate'),
                    (e.formatTime = 'FormattedTime'),
                    (e.formatNumber = 'FormattedNumber'),
                    (e.formatList = 'FormattedList'),
                    (e.formatDisplayName = 'FormattedDisplayName'));
            })(r || (r = {})),
                (function (e) {
                    ((e.formatDate = 'FormattedDateParts'),
                        (e.formatTime = 'FormattedTimeParts'),
                        (e.formatNumber = 'FormattedNumberParts'),
                        (e.formatList = 'FormattedListParts'));
                })(s || (s = {})));
            var l = function (e) {
                var t = (0, n.A)(),
                    a = e.value,
                    r = e.children,
                    s = (0, i.__rest)(e, ['value', 'children']);
                return r(t.formatNumberToParts(a, s));
            };
            function c(e) {
                var t = function (t) {
                    var a = (0, n.A)(),
                        r = t.value,
                        s = t.children,
                        o = (0, i.__rest)(t, ['value', 'children']),
                        l = 'string' == typeof r ? new Date(r || 0) : r;
                    return s('formatDate' === e ? a.formatDateToParts(l, o) : a.formatTimeToParts(l, o));
                };
                return ((t.displayName = s[e]), t);
            }
            function d(e) {
                var t = function (t) {
                    var a = (0, n.A)(),
                        r = t.value,
                        s = t.children,
                        l = (0, i.__rest)(t, ['value', 'children']),
                        c = a[e](r, l);
                    if ('function' == typeof s) return s(c);
                    var d = a.textComponent || o.Fragment;
                    return o.createElement(d, null, c);
                };
                return ((t.displayName = r[e]), t);
            }
            function u(e) {
                return e;
            }
            ((l.displayName = 'FormattedNumberParts'),
                (l.displayName = 'FormattedNumberParts'),
                d('formatDate'),
                d('formatTime'),
                d('formatNumber'),
                d('formatList'),
                d('formatDisplayName'),
                c('formatDate'),
                c('formatTime'));
        },
        58373: (e) => {
            e.exports = {
                root: 'SearchColumnShimmer_root__PDf3Y',
                infoContainer: 'SearchColumnShimmer_infoContainer__cQ8_H',
                textContainer: 'SearchColumnShimmer_textContainer__IekgL',
                title: 'SearchColumnShimmer_title__IorPg',
                description: 'SearchColumnShimmer_description__nNupy',
                cover: 'SearchColumnShimmer_cover__58jV8',
                action: 'SearchColumnShimmer_action__JbJGl',
            };
        },
        61084: (e) => {
            e.exports = { root: 'SearchBestResultsRecentReleaseBlock_root___1Eoa' };
        },
        61909: (e) => {
            e.exports = { root: 'SearchCorrectedText_root__ZM2f2', link: 'SearchCorrectedText_link__eORMG', text: 'SearchCorrectedText_text__HKgvL' };
        },
        61956: (e) => {
            e.exports = { root: 'VirtualListItem_root__j_Qqv' };
        },
        62297: (e) => {
            e.exports = {
                root: 'SearchHistoryBlockDesktop_root__jKICZ',
                controls: 'SearchHistoryBlockDesktop_controls__5JPBt',
                header: 'SearchHistoryBlockDesktop_header__zOALK',
                clearButton: 'SearchHistoryBlockDesktop_clearButton__kN4Nk',
                content: 'SearchHistoryBlockDesktop_content__doQsC',
            };
        },
        62586: (e) => {
            e.exports = {
                carouselBlock: 'MixesCarousel_carouselBlock__ZpMU2',
                carouselHeader: 'MixesCarousel_carouselHeader__6mMHX',
                mixItem: 'MixesCarousel_mixItem__YNSsB',
            };
        },
        63442: (e) => {
            e.exports = {
                content: 'WizardModal_content__mLcxg',
                modalHeader: 'WizardModal_modalHeader__BbNjx',
                root: 'WizardModal_root__mrF2y',
                root_withCustomControls: 'WizardModal_root_withCustomControls__t7Kjv',
                modalContent: 'WizardModal_modalContent__OifZs',
                wrapper: 'WizardModal_wrapper__2_8ft',
                title: 'WizardModal_title__fPGJr',
                text: 'WizardModal_text__ntEON',
                progress: 'WizardModal_progress__rOEBz',
                button: 'WizardModal_button__e8bCS',
                button_withProgress: 'WizardModal_button_withProgress__SstpE',
                mainContainer: 'WizardModal_mainContainer__fbjpt',
                carousel: 'WizardModal_carousel__uVcYS',
                scrollContainer: 'WizardModal_scrollContainer__tDrP6',
                important: 'WizardModal_important__7uymQ',
                tabCarousel: 'WizardModal_tabCarousel__AclIV',
                tabTitle: 'WizardModal_tabTitle__7ZAaF',
                filter: 'WizardModal_filter__o2wpn',
                filter_selected: 'WizardModal_filter_selected__qdlMf',
                item: 'WizardModal_item__wUHVg',
            };
        },
        63865: (e) => {
            e.exports = { root: 'SearchConcert_root__1DJPQ' };
        },
        63955: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => u });
            var r = a(88800),
                s = a(53548),
                i = a(2058),
                o = a(17392),
                n = a(29504),
                l = a(32721),
                c = a(12876),
                d = a(7628);
            let u = (e) => {
                let { textVariant: t, vibeTextVariant: a, ...u } = e,
                    m = (0, s.useId)(),
                    { formatMessage: h } = (0, i.A)(),
                    _ = (0, s.useMemo)(() => {
                        switch (a) {
                            case l.I.ALBUM:
                                return h({ id: 'onboarding.authorize-to-listen-vibe-by-album' }, { br: '\n', nbsp: ' ' });
                            case l.I.ARTIST:
                                return h({ id: 'onboarding.authorize-to-listen-vibe-by-artist' }, { br: '\n', nbsp: ' ' });
                            case l.I.PLAYLIST:
                                return h({ id: 'onboarding.authorize-to-listen-vibe-by-playlist' }, { br: '\n', nbsp: ' ' });
                            case l.I.TRACK:
                                return h({ id: 'onboarding.authorize-to-listen-vibe-by-track' }, { br: '\n', nbsp: ' ' });
                            case l.I.GENRE:
                            case l.I.MICRO_GENRE:
                                return h({ id: 'onboarding.authorize-to-listen-vibe-by-genre' }, { br: '\n', nbsp: ' ' });
                            case l.I.MOOD:
                                return h({ id: 'onboarding.authorize-to-listen-vibe-by-mood' }, { br: '\n', nbsp: ' ' });
                            case l.I.ACTIVITY:
                                return h({ id: 'onboarding.authorize-to-listen-vibe-by-activity' }, { br: '\n', nbsp: ' ' });
                            default:
                                return h({ id: 'onboarding.authorize-to-listen-vibe' }, { br: '\n', nbsp: ' ' });
                        }
                    }, [a, h]),
                    p = (0, s.useMemo)(() => {
                        switch (t) {
                            case 'fullTracks':
                                return h({ id: 'onboarding.authorize-to-listen-full' }, { br: '\n', nbsp: ' ' });
                            case 'changeQuality':
                                return h({ id: 'onboarding.authorize-to-change-quality' }, { br: '\n', nbsp: ' ' });
                            case 'addToCollection':
                                return h({ id: 'onboarding.authorize-to-add-to-collection' }, { br: '\n', nbsp: ' ' });
                            case 'openQueue':
                                return h({ id: 'onboarding.authorize-to-open-queue' }, { br: '\n', nbsp: ' ' });
                            case 'addToQueue':
                                return h({ id: 'onboarding.authorize-to-add-track-to-queue' }, { br: '\n', nbsp: ' ' });
                            case 'like':
                                return h({ id: 'onboarding.authorize-to-like' }, { br: '\n', nbsp: ' ' });
                            case 'dislike':
                                return h({ id: 'onboarding.authorize-to-dislike' }, { br: '\n', nbsp: ' ' });
                            case 'pin':
                                return h({ id: 'onboarding.authorize-to-pin' }, { br: '\n', nbsp: ' ' });
                            case 'sync-lyrics':
                                return h({ id: 'onboarding.authorize-to-view-sync-lyrics' }, { br: '\n', nbsp: ' ' });
                            case 'vibe':
                                return _;
                            default:
                                return '';
                        }
                    }, [h, t, _]);
                return (0, r.jsx)(c.z, {
                    contentElement: (0, r.jsx)(n.HL, { variant: 'div', size: 'l', weight: 'bold', children: p }),
                    buttons: [(0, r.jsx)(d.H, { size: 'xxs' }, m)],
                    renderChildrenText: p,
                    contentDataTestId: o.S7.LOGIN_POPOVER,
                    ...u,
                });
            };
        },
        64916: (e) => {
            e.exports = {
                root: 'SearchBestResultsVibeBlock_root__KmJ3e',
                important: 'SearchBestResultsVibeBlock_important__Zez1s',
                coverClassName: 'SearchBestResultsVibeBlock_coverClassName__jv0_I',
            };
        },
        66363: (e, t, a) => {
            'use strict';
            a.d(t, { NS: () => i, Nh: () => s, xW: () => o });
            var r = a(9519);
            let s = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
            class i {
                getHeaders(e) {
                    return e instanceof Headers ? Object.fromEntries(e.entries()) : e;
                }
                getUrl(e) {
                    return new URL(e || 'https://unknown');
                }
                constructor(e) {
                    ((0, r._)(this, 'logger', void 0),
                        (0, r._)(this, 'beforeRequestHook', (e) => {
                            let t = this.getUrl(e.url);
                            this.logger.info('[Resource] Request started '.concat(e.method, ' ').concat(t.origin, ' ').concat(t.pathname).concat(t.search), {
                                request: { method: e.method, url: e.url, headers: this.getHeaders(e.headers), body: e.json },
                            });
                        }),
                        (0, r._)(this, 'beforeRetryHook', (e, t) => {
                            let a = e.cause;
                            if (s(a)) {
                                var r, i, o, n, l, c, d, u, m, h, _, p, x, b;
                                let s = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (r = a.request) ? void 0 : r.method) || (null == (i = a.options) ? void 0 : i.method),
                                        url: (null == (o = a.request) ? void 0 : o.url) || (null == (n = a.options) ? void 0 : n.url),
                                        headers: this.getHeaders((null == (l = a.request) ? void 0 : l.headers) || (null == (c = a.options) ? void 0 : c.headers)),
                                        body: (null == (d = a.request) ? void 0 : d.json) || (null == (u = a.options) ? void 0 : u.json),
                                        retries: t,
                                    },
                                };
                                void 0 !== a.response &&
                                    (s.response = {
                                        statusCode: a.response.statusCode,
                                        headers: this.getHeaders(a.response.headers),
                                        time: null == (b = a.response.timings) || null == (x = b.phases) ? void 0 : x.total,
                                    });
                                let v = this.getUrl((null == (m = a.request) ? void 0 : m.url) || (null == (h = a.options) ? void 0 : h.url));
                                this.logger.warn(
                                    '[Resource] Retry request '
                                        .concat((null == (_ = a.request) ? void 0 : _.method) || (null == (p = a.options) ? void 0 : p.method), ' ')
                                        .concat(v.origin, ' ')
                                        .concat(v.pathname)
                                        .concat(v.search),
                                    s,
                                );
                            } else
                                this.logger.warn('[Resource] Retry request (unknown)', {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                });
                        }),
                        (0, r._)(this, 'afterResponseHook', (e) => {
                            if ((e.statusCode || e.status) >= 200 && 299 >= (e.statusCode || e.status)) {
                                var t, a;
                                let r = this.getUrl(e.url);
                                this.logger.info(
                                    '[Resource] Request resolved '
                                        .concat(e.statusCode, ' ')
                                        .concat(e.request.method, ' ')
                                        .concat(r.origin, ' ')
                                        .concat(r.pathname)
                                        .concat(r.search),
                                    {
                                        request: { method: e.request.method, url: e.url, headers: this.getHeaders(e.request.headers), body: e.request.body },
                                        response: {
                                            statusCode: e.statusCode || e.status,
                                            headers: this.getHeaders(e.headers),
                                            time: null == (a = e.timings) || null == (t = a.phases) ? void 0 : t.total,
                                        },
                                    },
                                );
                            }
                            return e;
                        }),
                        (0, r._)(this, 'beforeErrorHook', (e) => {
                            let t = e.cause;
                            if (s(t)) {
                                var a, r, i, o, n, l, c, d, u, m, h, _, p, x;
                                let s = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (a = t.request) ? void 0 : a.method) || (null == (r = t.options) ? void 0 : r.method),
                                        url: (null == (i = t.request) ? void 0 : i.url) || (null == (o = t.options) ? void 0 : o.url),
                                        headers: this.getHeaders((null == (n = t.request) ? void 0 : n.headers) || (null == (l = t.options) ? void 0 : l.headers)),
                                        body: (null == (c = t.request) ? void 0 : c.json) || (null == (d = t.options) ? void 0 : d.json),
                                    },
                                };
                                void 0 !== t.response &&
                                    (s.response = {
                                        statusCode: t.response.statusCode || t.response.status,
                                        headers: this.getHeaders(t.response.headers),
                                        time: null == (x = t.response.timings) || null == (p = x.phases) ? void 0 : p.total,
                                    });
                                let b = this.getUrl((null == (u = t.request) ? void 0 : u.url) || (null == (m = t.options) ? void 0 : m.url));
                                this.logger.error(
                                    '[Resource] Request failed '
                                        .concat((null == (h = t.request) ? void 0 : h.method) || (null == (_ = t.options) ? void 0 : _.method), ' ')
                                        .concat(b.origin, ' ')
                                        .concat(b.pathname)
                                        .concat(b.search, ', reason: ')
                                        .concat(e.name),
                                    s,
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
            (a(35412), a(69629));
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
        66564: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => r });
            let r = 36;
        },
        67090: (e, t, a) => {
            'use strict';
            a.d(t, { SearchPage: () => rL });
            var r = a(88800),
                s = a(65724),
                i = a(84961),
                o = a(53548),
                n = a(2058),
                l = a(58390),
                c = a(97234),
                d = a(81862),
                u = a(46384),
                m = a(59724),
                h = a(17392),
                _ = a(41427),
                p = a(14661),
                x = a(46312),
                b = a(29993),
                v = a(79070),
                S = a(23237),
                j = a(98225),
                C = a(78275),
                A = a(23311),
                g = a(35948),
                y = a(72288);
            let I = (e) => {
                let t = 1200 + 1600 * e;
                return { phaseDelay: ''.concat(t / 1e3, 's'), gradientAnimationBegin: ''.concat((t + 160) / 1e3, 's') };
            };
            var T = a(76245),
                f = a.n(T);
            let k = [0, 1, 2, 3],
                E = (0, i.PA)((e) => {
                    var t;
                    let { isActive: a, size: i = 'xxxs' } = e,
                        { settings: n } = (0, y.g)(),
                        l = !!(null == (t = n.browserInfo) ? void 0 : t.isSafari),
                        c = (0, o.useId)(),
                        d = ''.concat(c, '-ring-mask'),
                        u = ''.concat(c, '-reveal-mask'),
                        m = ''.concat(c, '-glow-gradient'),
                        h = ''.concat(c, '-stroke-gradient'),
                        _ = ''.concat(c, '-reveal-gradient'),
                        p = ''.concat(c, '-soft-blur'),
                        x = ''.concat(c, '-hard-blur');
                    return (0, r.jsx)('div', {
                        className: (0, s.$)(f().root, { [f().root_active]: a, [f().root_safari]: l, [f().root_size_xxs]: 'xxs' === i }),
                        'aria-hidden': !0,
                        children: (0, r.jsxs)('svg', {
                            className: f().gradient,
                            focusable: 'false',
                            children: [
                                (0, r.jsxs)('defs', {
                                    children: [
                                        (0, r.jsxs)('linearGradient', {
                                            id: m,
                                            x1: '46.34%',
                                            y1: '115.24%',
                                            x2: '54.62%',
                                            y2: '-6.1%',
                                            children: [(0, r.jsx)('stop', { stopColor: '#9100df' }), (0, r.jsx)('stop', { offset: '1', stopColor: '#b900b7' })],
                                        }),
                                        (0, r.jsxs)('linearGradient', {
                                            id: h,
                                            x1: '12.43%',
                                            y1: '117.71%',
                                            x2: '81.08%',
                                            y2: '-25%',
                                            children: [
                                                (0, r.jsx)('stop', { stopColor: '#da95ff' }),
                                                (0, r.jsx)('stop', { offset: '0.711542', stopColor: '#f44dbb' }),
                                                (0, r.jsx)('stop', { offset: '1', stopColor: '#ff309f', stopOpacity: '0' }),
                                            ],
                                        }),
                                        (0, r.jsxs)('radialGradient', {
                                            id: _,
                                            children: [
                                                (0, r.jsx)('stop', { offset: '0', stopColor: '#fff' }),
                                                (0, r.jsx)('stop', { offset: '0.45', stopColor: '#fff', stopOpacity: '0.9' }),
                                                (0, r.jsx)('stop', { offset: '1', stopColor: '#fff', stopOpacity: '0' }),
                                            ],
                                        }),
                                        (0, r.jsx)('filter', {
                                            id: p,
                                            x: '-100%',
                                            y: '-1000%',
                                            width: '300%',
                                            height: '2100%',
                                            children: (0, r.jsx)('feGaussianBlur', { stdDeviation: 'xxs' === i ? 22.25 : 18.54 }),
                                        }),
                                        (0, r.jsx)('filter', {
                                            id: x,
                                            x: '-100%',
                                            y: '-1000%',
                                            width: '300%',
                                            height: '2100%',
                                            children: (0, r.jsx)('feGaussianBlur', { stdDeviation: 'xxs' === i ? 5.5 : 4.58 }),
                                        }),
                                        (0, r.jsxs)('mask', {
                                            className: f().ringMask,
                                            id: d,
                                            x: '-100%',
                                            y: '-1000%',
                                            width: '300%',
                                            height: '2100%',
                                            maskUnits: 'userSpaceOnUse',
                                            children: [
                                                (0, r.jsx)('rect', { className: f().ringOuter, fill: '#fff' }),
                                                (0, r.jsx)('rect', { className: f().ringHole, fill: '#000', rx: 'xxs' === i ? 22 : 18.33 }),
                                            ],
                                        }),
                                        (0, r.jsx)('mask', {
                                            className: f().revealMask,
                                            id: u,
                                            x: '-100%',
                                            y: '-1000%',
                                            width: '300%',
                                            height: '2100%',
                                            maskUnits: 'userSpaceOnUse',
                                            maskContentUnits: 'userSpaceOnUse',
                                            children: k.map((e) => {
                                                let { phaseDelay: t } = I(e);
                                                return (0, r.jsx)(
                                                    'g',
                                                    {
                                                        className: f().revealBlur,
                                                        style: { '--animated-search-input-gradient-mask-phase-delay': t },
                                                        children: (0, r.jsx)('rect', { className: f().revealPass, fill: l ? 'url(#'.concat(_, ')') : '#fff' }),
                                                    },
                                                    t,
                                                );
                                            }),
                                        }),
                                    ],
                                }),
                                (0, r.jsxs)('g', {
                                    mask: 'url(#'.concat(u, ')'),
                                    children: [
                                        (0, r.jsx)('g', {
                                            className: f().softGlow,
                                            children: (0, r.jsx)('g', {
                                                filter: l ? 'url(#'.concat(p, ')') : void 0,
                                                children: (0, r.jsx)('rect', { className: f().ringOuter, fill: 'url(#'.concat(m, ')'), mask: 'url(#'.concat(d, ')') }),
                                            }),
                                        }),
                                        (0, r.jsx)('g', {
                                            className: f().hardGlow,
                                            children: (0, r.jsx)('g', {
                                                filter: l ? 'url(#'.concat(x, ')') : void 0,
                                                children: (0, r.jsx)('rect', { className: f().ringOuter, fill: 'url(#'.concat(m, ')'), mask: 'url(#'.concat(d, ')') }),
                                            }),
                                        }),
                                        (0, r.jsx)('rect', {
                                            className: f().stroke,
                                            fill: 'none',
                                            rx: 'xxs' === i ? 23.63 : 19.69,
                                            stroke: 'url(#'.concat(h, ')'),
                                            strokeWidth: 'xxs' === i ? 0.75 : 0.63,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    });
                });
            var P = a(59047),
                R = a(57074),
                N = a(88626),
                L = a(597),
                B = a.n(L);
            let O = 'animated-search-input-text',
                w = '[data-animation-target="'.concat(O, '"]'),
                D = [
                    { attributeName: 'x1', dur: '1.87s', from: '-416', to: '143' },
                    { attributeName: 'y1', dur: '1.87s', from: '-32', to: '29' },
                    { attributeName: 'x2', dur: '1.5s', from: '80', to: '507' },
                    { attributeName: 'y2', dur: '1.5s', from: '21', to: '-14' },
                ],
                M = (0, R.YK)({
                    cheerfulNotTooMuch: { id: 'search.q2v-input-placeholder-cheerful-not-too-much' },
                    favoriteArtist: { id: 'search.q2v-input-placeholder-favorite-artist' },
                    collectionTrack: { id: 'search.q2v-input-placeholder-collection-track' },
                    melodicAndDanceable: { id: 'search.q2v-input-placeholder-melodic-and-danceable' },
                }),
                z = [M.cheerfulNotTooMuch, M.favoriteArtist, M.collectionTrack, M.melodicAndDanceable],
                H = (0, i.PA)((e) => {
                    var t, a;
                    let { isActive: i, onAnimationEnd: l } = e,
                        { settings: c } = (0, y.g)(),
                        d = !!((null == (t = c.browserInfo) ? void 0 : t.isSafari) || (null == (a = c.browserInfo) ? void 0 : a.OSFamily) === N.j.IOS),
                        { formatMessage: u } = (0, n.A)(),
                        m = (0, o.useId)(),
                        h = (0, o.useRef)(null),
                        [_, p] = (0, o.useState)(z),
                        x = (0, b.c)((e) => {
                            e.currentTarget === e.target && l();
                        });
                    return (
                        (0, o.useEffect)(() => {
                            var e;
                            i ||
                                null == (e = h.current) ||
                                e.querySelectorAll(w).forEach((e) => {
                                    e.pauseAnimations();
                                });
                        }, [i]),
                        (0, o.useEffect)(() => {
                            p((0, P.A)(z));
                        }, []),
                        (0, r.jsx)('div', {
                            className: (0, s.$)(B().root, { [B().root_active]: i, [B().root_safari]: d }),
                            ref: h,
                            'aria-hidden': !0,
                            children: (0, r.jsx)('div', {
                                className: B().viewport,
                                children: _.map((e, t) => {
                                    let a = t === _.length - 1,
                                        i = u(e),
                                        { phaseDelay: o, gradientAnimationBegin: n } = I(t);
                                    return (0, r.jsx)(
                                        'span',
                                        {
                                            className: (0, s.$)(B().phrase, { [B().phrase_last]: a }),
                                            onAnimationEnd: a ? x : void 0,
                                            style: { '--animated-search-input-text-phase-delay': o },
                                            children: (0, r.jsx)('div', {
                                                className: B().phraseContent,
                                                children: (0, r.jsxs)('svg', {
                                                    className: B().text,
                                                    'data-animation-target': O,
                                                    focusable: 'false',
                                                    children: [
                                                        (0, r.jsx)('defs', {
                                                            children: (0, r.jsxs)('linearGradient', {
                                                                id: ''.concat(m, '-text-gradient-').concat(t),
                                                                x1: '-416',
                                                                y1: '-32',
                                                                x2: '80',
                                                                y2: '21',
                                                                gradientUnits: 'userSpaceOnUse',
                                                                children: [
                                                                    (0, r.jsx)('stop', {
                                                                        className: (0, s.$)(B().gradientStop, B().gradientStop_start),
                                                                        stopColor: 'var(--q2v-accent-color)',
                                                                        stopOpacity: '0',
                                                                    }),
                                                                    (0, r.jsx)('stop', {
                                                                        className: (0, s.$)(B().gradientStop, B().gradientStop_middle),
                                                                        offset: '0.2',
                                                                        stopColor: 'var(--q2v-accent-color)',
                                                                    }),
                                                                    (0, r.jsx)('stop', {
                                                                        className: (0, s.$)(B().gradientStop, B().gradientStop_end),
                                                                        offset: '1',
                                                                        stopColor: 'var(--q2v-accent-color)',
                                                                        stopOpacity: '0',
                                                                    }),
                                                                    D.map((e) => {
                                                                        let { attributeName: t, dur: a, from: s, to: i } = e;
                                                                        return (0, r.jsx)(
                                                                            'animate',
                                                                            { attributeName: t, begin: n, dur: a, from: s, to: i, fill: 'freeze' },
                                                                            t,
                                                                        );
                                                                    }),
                                                                ],
                                                            }),
                                                        }),
                                                        (0, r.jsx)('text', { className: B().base, x: '0', y: '50%', children: i }),
                                                        (0, r.jsx)('text', {
                                                            className: B().gradient,
                                                            x: '0',
                                                            y: '50%',
                                                            fill: 'url(#'.concat(m, '-text-gradient-').concat(t, ')'),
                                                            children: i,
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        },
                                        e.id,
                                    );
                                }),
                            }),
                        })
                    );
                });
            var U = a(20445),
                V = a.n(U);
            let G = (e) => {
                let {
                        lumenColor: t,
                        initialValue: a = '',
                        correctedValue: i,
                        className: n,
                        autoFocus: l,
                        onResetClick: c,
                        innerInputProps: d,
                        searchIconProps: u,
                        ...m
                    } = e,
                    h = 0 === a.length,
                    [_, p] = (0, o.useState)(a),
                    [x, j] = (0, o.useState)(0),
                    [y, I] = (0, o.useState)(!1),
                    { state: T, toggleFalse: f } = (0, C.e)(h),
                    k = (0, o.useRef)(null),
                    P = (0, o.useRef)(!!(l && h)),
                    R = (0, b.c)(() => {
                        null !== k.current && (window.clearTimeout(k.current), (k.current = null));
                    }),
                    N = (0, b.c)(() => {
                        (R(), I(!1));
                    }),
                    L = (0, b.c)((e) => {
                        var t;
                        let a = null != (t = e.selectionStart) ? t : e.value.length;
                        (p(e.value.slice(0, a)), j(e.scrollLeft));
                    }),
                    B = (0, b.c)((e) => {
                        var t;
                        let a = e.currentTarget;
                        (f(),
                            L(a),
                            R(),
                            0 === a.value.length
                                ? I(!1)
                                : (I(!0),
                                  (k.current = window.setTimeout(() => {
                                      (I(!1), (k.current = null));
                                  }, 1e3))),
                            null == d || null == (t = d.onInput) || t.call(d, e));
                    }),
                    O = (0, b.c)((e) => {
                        var t;
                        (P.current || f(), null == d || null == (t = d.onFocus) || t.call(d, e));
                    }),
                    w = (0, b.c)((e) => {
                        var t;
                        ((P.current = !1), null == d || null == (t = d.onBlur) || t.call(d, e));
                    }),
                    D = (0, b.c)((e) => {
                        var t;
                        (L(e.currentTarget), null == d || null == (t = d.onSelect) || t.call(d, e));
                    }),
                    M = (0, b.c)((e) => {
                        var t;
                        (j(e.currentTarget.scrollLeft), null == d || null == (t = d.onScroll) || t.call(d, e));
                    }),
                    z = (0, b.c)(() => {
                        (p(''), j(0), N(), null == c || c());
                    });
                ((0, o.useEffect)(() => {
                    i &&
                        (f(),
                        p(i),
                        j(0),
                        R(),
                        I(!0),
                        (k.current = window.setTimeout(() => {
                            (I(!1), (k.current = null));
                        }, 1e3)));
                }, [R, i, f]),
                    (0, o.useEffect)(() => R, [R]),
                    (0, o.useEffect)(() => {
                        h && (0, g.y)() && f();
                    }, [h, f]));
                let U = (0, v.L)(() => {
                        let { actionsClassName: e, icon: t, inputClassName: a, ...r } = null != d ? d : {},
                            i = {
                                ...r,
                                actionsClassName: (0, s.$)(V().searchInputContent, e),
                                inputClassName: (0, s.$)(V().searchInputContent, a),
                                onBlur: w,
                                onFocus: O,
                                onInput: B,
                                onSelect: D,
                                onScroll: M,
                            };
                        return void 0 === t
                            ? i
                            : null === t
                              ? { ...i, icon: t }
                              : { ...i, icon: (0, o.cloneElement)(t, { className: (0, s.$)(V().searchInputContent, t.props.className) }) };
                    }),
                    G = { ...u, className: (0, s.$)(V().searchInputContent, null == u ? void 0 : u.className) };
                return (0, r.jsxs)('div', {
                    className: (0, s.$)(V().root, n, { [V().root_introActive]: T }),
                    onPointerDownCapture: f,
                    style: { '--animated-search-input-scroll-offset': ''.concat(-x, 'px'), '--q2v-accent-color': t },
                    children: [
                        (0, r.jsx)(S.D, {
                            ...m,
                            autoFocus: l,
                            className: V().searchInput,
                            initialValue: a,
                            correctedValue: i,
                            innerInputProps: U,
                            onResetClick: z,
                            searchIconProps: G,
                        }),
                        h && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(E, { isActive: T, size: m.size }), (0, r.jsx)(H, { isActive: T, onAnimationEnd: f })] }),
                        (0, r.jsx)('div', {
                            className: V().mirrorViewport,
                            'aria-hidden': !0,
                            children: (0, r.jsxs)('div', {
                                className: V().mirrorContent,
                                children: [(0, r.jsx)('span', { children: _ }), (0, r.jsx)(A.e, { className: (0, s.$)(V().haze, { [V().haze_visible]: y }) })],
                            }),
                        }),
                    ],
                });
            };
            var W = a(88969),
                F = a(96817),
                $ = a(29504),
                q = a(61909),
                Y = a.n(q);
            let X = (e) => {
                let { onCorrectText: t, searchCorrectedText: a } = e,
                    s = (0, o.useMemo)(
                        () => ({
                            text: (0, r.jsx)(F.$, {
                                'aria-label': a,
                                variant: 'text',
                                radius: 'xs',
                                onClick: t,
                                'data-test-id': h.e8.search.SEARCH_CORRECTED_TEXT_BUTTON,
                                children: (0, r.jsx)($.HL, {
                                    className: Y().link,
                                    variant: 'span',
                                    size: 'm',
                                    type: 'text',
                                    'data-test-id': h.e8.search.SEARCH_CORRECTED_TEXT_BUTTON_TEXT,
                                    children: a,
                                }),
                            }),
                        }),
                        [a, t],
                    );
                return (0, r.jsx)('div', {
                    className: Y().root,
                    'data-test-id': h.e8.search.SEARCH_CORRECTED_TEXT,
                    children: (0, r.jsx)($.HL, {
                        className: Y().text,
                        variant: 'span',
                        size: 'm',
                        type: 'text',
                        'data-test-id': h.e8.search.SEARCH_CORRECTED_TEXT_TEXT,
                        children: (0, r.jsx)(W.A, { id: 'search.corrected-text', values: s }),
                    }),
                });
            };
            var K = a(52300),
                Z = a(66719),
                Q = a(86790),
                J = a(60266),
                ee = a(98969),
                et = a.n(ee);
            let ea = (e) => {
                    let { forwardRef: t, className: a, searchCorrectedText: i } = e,
                        { formatMessage: o } = (0, n.A)();
                    return (0, r.jsxs)(Z.N, {
                        className: (0, s.$)(et().root, a),
                        containerClassName: et().container,
                        ref: t,
                        children: [
                            (0, r.jsxs)('div', {
                                className: et().content,
                                'data-test-id': h.e8.search.SEARCH_EMPTY_CONTAINER,
                                children: [
                                    i && (0, r.jsx)('div', { className: et().correctedTextBlock, children: i }),
                                    (0, r.jsx)(K.I, { className: et().icon, variant: 'search', size: 'xxl', 'data-test-id': h.e8.search.SEARCH_EMPTY_ICON }),
                                    (0, r.jsx)($.DZ, {
                                        className: et().title,
                                        size: 's',
                                        weight: 'bold',
                                        variant: 'h3',
                                        'data-test-id': h.e8.search.SEARCH_EMPTY_HEADER,
                                        children: o({ id: 'search-results.not-found-title' }),
                                    }),
                                    (0, r.jsx)($.HL, {
                                        className: et().subtitle,
                                        variant: 'div',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        'data-test-id': h.e8.search.SEARCH_EMPTY_DESCRIPTION,
                                        children: o({ id: 'search-results.not-found-description' }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(J.A, { children: (0, r.jsx)(Q.w, { className: et().footer }) }),
                        ],
                    });
                },
                er = (0, o.forwardRef)((e, t) => (0, r.jsx)(ea, { forwardRef: t, ...e }));
            var es = a(35412),
                ei = a(90852),
                eo = a(18593),
                en = a(59758),
                el = a(63765),
                ec = a(10079),
                ed = a(46811),
                eu = a(21256),
                em = a(69323),
                eh = a(41911),
                e_ = a(58378),
                ep = a(84200),
                ex = a(21576),
                eb = a(50408),
                ev = a(10270),
                eS = a(61956),
                ej = a.n(eS);
            let eC = (e) => {
                let { item: t, scrollMargin: a, resizeObserver: s, renderItemByIndex: i } = e,
                    [n, l] = (0, eb.d)();
                (0, o.useEffect)(
                    () => (
                        n && s && s.observe(n),
                        () => {
                            n && s && s.unobserve(n);
                        }
                    ),
                    [n, s],
                );
                let c = { transform: 'translate3d(0, '.concat(t.start - a, 'px, 0)') };
                return (0, r.jsx)('div', { 'data-index': t.index, className: ej().root, ref: l, style: c, children: i(t.index) }, t.key);
            };
            var eA = a(73436),
                eg = a.n(eA);
            let ey = (e) => {
                let { count: t, getEstimateRowSize: a, renderItemByIndex: s, onChangeRange: i } = e,
                    [n, l] = (0, eb.d)(),
                    { virtualizer: c, resizeObserver: d } = (0, ev.r)({ count: t, getEstimateSize: a, containerRef: n, overscan: 3, useVirtualizerMeasurement: !1 });
                (0, o.useEffect)(() => {
                    !c.isScrolling && c.range && i && i(c.range);
                }, [i, c.isScrolling, c.range]);
                let u = c.getTotalSize(),
                    m = c.getVirtualItems(),
                    h = c.options.scrollMargin;
                return (0, r.jsx)('div', {
                    className: eg().root,
                    style: { height: ''.concat(u, 'px') },
                    ref: l,
                    children: m.map((e) => (0, r.jsx)(eC, { item: e, scrollMargin: h, resizeObserver: d, renderItemByIndex: s }, e.key)),
                });
            };
            var eI = a(28119);
            a(30282);
            var eT = a(93940),
                ef = a(46482),
                ek = a(29832),
                eE = a(7555),
                eP = a(5407),
                eR = a(55693),
                eN = a(47964),
                eL = a(52726),
                eB = a(81877),
                eO = a(63955),
                ew = a(16704),
                eD = a(34945),
                eM = a(87475),
                ez = a.n(eM);
            let eH = (0, i.PA)((e) => {
                let { vibe: t, children: a, className: i } = e,
                    { screen: n } = (0, eT.j)(),
                    l = null == n ? void 0 : n.pageIdForFrom,
                    [c, d] = (0, o.useState)(!1),
                    { block: u } = (0, eT.j)(),
                    m = null == u ? void 0 : u.blockIdForFrom,
                    {
                        settings: { isMobile: h },
                        user: _,
                        freeAccess: p,
                    } = (0, y.g)(),
                    { sendPlaySearchFeedback: x } = (0, eR.z)(),
                    v = (0, ef.g)(),
                    { isPlaying: S, isPaused: j, togglePlay: C } = (0, eN.B)({ seeds: t.seeds, pageIdForFrom: l, blockIdForFrom: m }),
                    A = (0, eP.P)(),
                    g = S || j,
                    I = (0, o.useCallback)(() => {
                        h && (c || S || (d(!0), null == x || x()), C());
                    }, [h, S, c, x, C]),
                    T = (0, b.c)(() => {
                        A() || (!p.isVibeStartRestricted && (c || S || (d(!0), null == x || x()), C(), S || v()));
                    }),
                    f = (0, o.useCallback)(
                        () =>
                            (0, r.jsx)(
                                ew.D,
                                {
                                    isPlaying: S,
                                    onClick: T,
                                    className: (0, s.$)(ez().playButton, ez().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                },
                                t.getKey('PlayButton'),
                            ),
                        [S, T, t],
                    ),
                    k = (0, o.useMemo)(() => {
                        let e = !_.hasPlus && p.isFreePlaybackDisabled;
                        return _.isAuthorized
                            ? (0, r.jsx)(
                                  eL.S,
                                  {
                                      isEnabled: e && p.isVibeStartRestricted,
                                      placement: 'bottom',
                                      textVariant: 'vibe',
                                      vibeTextVariant: t.stationType,
                                      renderChildren: f,
                                  },
                                  t.getKey('BuyPlusPopover'),
                              )
                            : (0, r.jsx)(eO.Z, { isEnabled: e, placement: 'bottom', textVariant: 'vibe', vibeTextVariant: t.stationType, renderChildren: f });
                    }, [_.hasPlus, _.isAuthorized, t, f, p.isVibeStartRestricted, p.isFreePlaybackDisabled]),
                    E = (0, o.useMemo)(
                        () =>
                            (0, r.jsxs)(eE.t, {
                                className: ez().cover,
                                radius: 'round',
                                withShadow: !0,
                                onClick: I,
                                children: [
                                    (0, r.jsx)(eB.B, {
                                        size: 200,
                                        fit: 'cover',
                                        className: ez().image,
                                        style: { backgroundColor: t.backgroundColor },
                                        src: t.imageUrl,
                                        alt: t.title,
                                        withAvatarReplace: !0,
                                    }),
                                    g && (0, r.jsx)(eD.P, { stopAnimation: j, className: ez().playingAnimation }),
                                    (0, r.jsx)(ek.hg, {
                                        className: (0, s.$)(ez().controls, { [ez().controls_isPlaying]: g }, ez().important),
                                        bottomContainerClassName: ez().playControl,
                                        radius: 'round',
                                        playControl: k,
                                    }),
                                ],
                            }),
                        [I, t.backgroundColor, t.imageUrl, t.title, g, j, k],
                    );
                return (0, r.jsx)(ek.MN, {
                    className: (0, s.$)(ez().root, i),
                    textPosition: 'center',
                    title: (0, r.jsx)($.HL, { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: t.title }, t.getKey('Description')),
                    description: (0, r.jsx)(
                        $.HL,
                        { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: t.description },
                        t.getKey('Description'),
                    ),
                    view: E,
                    children: a,
                });
            });
            var eU = a(98427),
                eV = a(84384),
                eG = a(91087),
                eW = a(6668),
                eF = a(97956),
                e$ = a(98644),
                eq = a(68594),
                eY = a(37770),
                eX = a(93015),
                eK = a(66564);
            let eZ = {
                    entity: { rowGap: 16, columnGap: 16, estimateRowSize: 275, minColumnWidth: 170, maxColumnWidth: 270, minColumnCount: 2, maxColumnCount: 7 },
                    clip: { rowGap: 16, columnGap: 16, estimateRowSize: 235, minColumnWidth: 200, maxColumnWidth: 400, minColumnCount: 1, maxColumnCount: 6 },
                    concert: { rowGap: 16, columnGap: 16, estimateRowSize: 371, minColumnWidth: 170, maxColumnWidth: 227, minColumnCount: 1, maxColumnCount: 2 },
                },
                eQ = (e, t) => {
                    let [a, r] = (0, o.useState)(t || e.length > 0),
                        [s, i] = (0, o.useState)(e.length > 0 ? e[0] : void 0),
                        n = (0, o.useRef)(void 0),
                        l = (0, o.useRef)(t),
                        c = (0, o.useRef)(t ? Date.now() : void 0),
                        d = (0, b.c)((e) => {
                            let t = Math.max(0, 2e3 - (void 0 !== c.current ? Date.now() - c.current : 2e3));
                            0 === t ? e() : (n.current = setTimeout(e, t));
                        });
                    return (
                        (0, o.useEffect)(() => {
                            let a = t && !l.current,
                                s = !t && l.current;
                            return (
                                (l.current = t),
                                a && (clearTimeout(n.current), (c.current = Date.now()), r(!0), i(void 0)),
                                s && (clearTimeout(n.current), e.length > 0 ? d(() => i(e[0])) : d(() => r(!1))),
                                () => clearTimeout(n.current)
                            );
                        }, [t, e, d]),
                        { isVisible: a, vibe: s }
                    );
                };
            var eJ = a(54020),
                e0 = a(48911),
                e1 = a(52018),
                e8 = a(95960),
                e2 = a.n(e8);
            let e9 = (0, i.PA)((e) => {
                let { id: t, concert: a } = e;
                return (0, r.jsxs)('div', {
                    className: e2().root,
                    id: t,
                    children: [
                        (0, r.jsx)($.HL, { variant: 'div', size: 'm', weight: 'medium', className: e2().city, lineClamp: 1, children: null == a ? void 0 : a.title }),
                        (0, r.jsx)($.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: null == a ? void 0 : a.city }),
                        (0, r.jsx)($.HL, { variant: 'span', size: 'm', weight: 'medium', children: null == a ? void 0 : a.contentRating }),
                    ],
                });
            });
            var e6 = a(63865),
                e3 = a.n(e6);
            let e4 = (0, i.PA)((e) => {
                let { concert: t } = e,
                    a = (0, o.useRef)(String((0, eJ.A)())),
                    s = t.isIdentityExperimentEnabled ? e1.M : e9;
                return (0, r.jsx)(e0.V, {
                    artistId: null,
                    viewUuid: a.current,
                    concert: t,
                    radius: 's',
                    className: e3().root,
                    meta: (0, r.jsx)(s, { concert: t }),
                    shouldSendAnalyticsOnHide: !0,
                    shouldShowMask: !0,
                });
            });
            var e7 = a(8655),
                e5 = a(44378);
            let te = {
                    [e7.S.Dark]: 'https://music-custom-wave-media.music.yandex.net/dark_q2v_search.lottie',
                    [e7.S.Light]: 'https://music-custom-wave-media.music.yandex.net/light_q2v_search.lottie',
                },
                tt = {
                    loading: { loop: !0, markerId: 'loading' },
                    idle: { markerId: 'success' },
                    playing: { markerId: 'playing' },
                    paused: { markerId: 'playing', mode: 'reverse' },
                },
                ta = (e) => (0, r.jsx)(e5.D, { animationByTheme: te, animationConfig: tt, ...e });
            var tr = a(79285),
                ts = a.n(tr);
            let ti = (0, i.PA)((e) => {
                var t;
                let { className: a, requestAwakeLumenModal: i, sendSearchFeedback: o, vibe: n } = e,
                    l = (0, v.L)(() => (n ? { sendSearchFeedback: o, id: n.seedsId, type: el.o.WAVE, blockPosition: 0, position: 0 } : null));
                return (0, r.jsx)('div', {
                    className: (0, s.$)(ts().root, a),
                    children: (0, r.jsx)(u.F, {
                        blockId: c.EntityTypes.Q2vWave,
                        blockType: c.EntityTypes.Q2vWave,
                        blockPosX: 1,
                        blockPosY: 1,
                        objectsCount: 1,
                        children: (0, r.jsx)(ei.B, {
                            objectPosX: 1,
                            objectPosY: 1,
                            objectType: c.DomainObjectType.Wave,
                            objectId: null != (t = null == n ? void 0 : n.stationId) ? t : '',
                            children: (0, r.jsx)(eG.N.Provider, { value: l, children: (0, r.jsx)(ta, { requestAwakeLumenModal: i, vibe: n }) }),
                        }),
                    }),
                });
            });
            var to = a(22549),
                tn = a.n(to);
            let tl = (0, i.PA)((e) => {
                    let {
                            forwardRef: t,
                            className: a,
                            results: i,
                            filter: n,
                            variant: l = 'grid',
                            sendSearchFeedback: d,
                            searchCorrectedText: u,
                            isShimmerVisible: m,
                            getDataByRange: h,
                            requestsCount: _,
                            q2vResults: x,
                            isShimmerActive: S,
                            requestAwakeLumenModal: j,
                            ...C
                        } = e,
                        { experiments: A } = (0, y.g)(),
                        g = (0, eI.f)(),
                        { isVisible: I, vibe: T } = eQ(x, S),
                        f = g && I && n === p.n.WAVE,
                        k = ((e) => (e === p.n.CLIP ? eZ.clip : e === p.n.CONCERT ? eZ.concert : eZ.entity))(n),
                        E = (0, b.c)(() => 56),
                        P = (0, b.c)(() => k.estimateRowSize),
                        R = (0, eW.w)(),
                        N = (() => {
                            let e = (0, o.useRef)(new Map());
                            return (
                                (0, o.useLayoutEffect)(
                                    () => (
                                        e.current.size > 0 && e.current.clear(),
                                        () => {
                                            e.current.clear();
                                        }
                                    ),
                                    [],
                                ),
                                (0, b.c)((t, a) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, a), a)))
                            );
                        })(),
                        { from: L } = (0, eV.f)({ pageId: eU.b.SEARCH }),
                        B = (0, o.useCallback)(
                            (e) => {
                                let t = i[e];
                                if (!t)
                                    return 'list' === l
                                        ? (0, r.jsx)(eX.D, { variant: e$.X.PLAYLIST, isActive: !0 })
                                        : n === p.n.CONCERT
                                          ? (0, r.jsx)(eq.W, { isShimmerActive: !0, className: tn().concertShimmer })
                                          : n === p.n.ARTIST
                                            ? (0, r.jsx)(eY.V, { linesCount: 2, round: !0, centered: !0, isActive: !0 })
                                            : n === p.n.WAVE
                                              ? A.checkExperiment(eF.z.WebNextWaveAgentExperiment, 'on')
                                                  ? (0, r.jsx)(eY.V, { linesCount: 3, centered: !0, isActive: !0 })
                                                  : (0, r.jsx)(eY.V, { linesCount: 2, round: !0, centered: !0, isActive: !0 })
                                              : n === p.n.PLAYLIST
                                                ? (0, r.jsx)(eY.V, { linesCount: 2, isActive: !0 })
                                                : n === p.n.CLIP
                                                  ? (0, r.jsx)(eY.V, { linesCount: 2, shimmerClassName: tn().video, isActive: !0 })
                                                  : (0, r.jsx)(eY.V, { className: tn().entityCardShimmer, isActive: !0, shimmerClassName: n === p.n.CLIP && tn().video });
                                switch (t.type) {
                                    case p.n.ALBUM:
                                        return (0, r.jsx)(
                                            eG.N.Provider,
                                            {
                                                value: N(t.data.id, { sendSearchFeedback: d, id: t.data.id, type: el.o.ALBUM, blockPosition: 0, position: e }),
                                                children: (0, r.jsx)(ec.a, { album: t.data }),
                                            },
                                            t.data.id,
                                        );
                                    case p.n.PLAYLIST:
                                        return (0, r.jsx)(
                                            eG.N.Provider,
                                            {
                                                value: N(t.data.id, { sendSearchFeedback: d, id: t.data.id, type: el.o.PLAYLIST, blockPosition: 0, position: e }),
                                                children: (0, r.jsx)(eh.B, { playlist: t.data }),
                                            },
                                            t.data.id,
                                        );
                                    case p.n.ARTIST:
                                        return (0, r.jsx)(
                                            eG.N.Provider,
                                            {
                                                value: N(t.data.id, { sendSearchFeedback: d, id: t.data.id, type: el.o.ARTIST, blockPosition: 0, position: e }),
                                                children: (0, r.jsx)(eu.a, { artist: t.data }),
                                            },
                                            t.data.id,
                                        );
                                    case p.n.PODCAST:
                                        return (0, r.jsx)(
                                            ei.B,
                                            {
                                                objectType: c.DomainObjectType.Podcast,
                                                objectId: String(t.data.id),
                                                objectPosX: e + 1,
                                                objectPosY: 1,
                                                children: (0, r.jsx)(eG.N.Provider, {
                                                    value: N(t.data.id, { sendSearchFeedback: d, id: t.data.id, type: el.o.PODCAST, blockPosition: 0, position: e }),
                                                    children: (0, r.jsx)(ed.M, { album: t.data }),
                                                }),
                                            },
                                            t.data.id,
                                        );
                                    case p.n.CLIP:
                                        return (0, r.jsx)(
                                            eG.N.Provider,
                                            {
                                                value: N(t.data.clipId, { sendSearchFeedback: d, id: t.data.clipId, type: el.o.CLIP, blockPosition: 0, position: e }),
                                                children: (0, r.jsx)(em.F, { clip: t.data }),
                                            },
                                            t.data.clipId,
                                        );
                                    case p.n.WAVE:
                                        if (!A.checkExperiment(eF.z.WebNextWaveAgentExperiment, 'on'))
                                            return (0, r.jsx)(
                                                ei.B,
                                                {
                                                    objectType: c.DomainObjectType.Wave,
                                                    objectId: t.data.seedsId,
                                                    objectPosX: e + 1,
                                                    objectPosY: 1,
                                                    children: (0, r.jsx)(eG.N.Provider, {
                                                        value: N(t.data.stationId, {
                                                            sendSearchFeedback: d,
                                                            id: t.data.stationId,
                                                            type: el.o.WAVE,
                                                            blockPosition: 0,
                                                            position: e,
                                                        }),
                                                        children: (0, r.jsx)(eH, { vibe: t.data }),
                                                    }),
                                                },
                                                t.data.stationId,
                                            );
                                        return (0, r.jsx)(
                                            eG.N.Provider,
                                            {
                                                value: N(t.data.stationId, {
                                                    sendSearchFeedback: d,
                                                    id: t.data.stationId,
                                                    type: el.o.WAVE,
                                                    blockPosition: 0,
                                                    position: e,
                                                }),
                                                children: (0, r.jsx)(ei.B, {
                                                    objectType: c.DomainObjectType.Wave,
                                                    objectId: t.data.seedsId,
                                                    objectPosX: e + 1,
                                                    objectPosY: 1,
                                                    children: (0, r.jsx)(ep.y, { vibe: t.data }),
                                                }),
                                            },
                                            t.data.stationId,
                                        );
                                    case p.n.CONCERT:
                                        return (0, r.jsx)(
                                            ei.B,
                                            {
                                                objectType: c.DomainObjectType.Concert,
                                                objectId: t.data.id,
                                                objectPosX: e + 1,
                                                objectPosY: 1,
                                                children: (0, r.jsx)(e4, { concert: t.data }),
                                            },
                                            t.data.id,
                                        );
                                    case p.n.TRACK:
                                    case p.n.UGC_TRACK:
                                        return (0, r.jsx)(
                                            ei.B,
                                            {
                                                objectType: c.DomainObjectType.Track,
                                                objectId: t.data.id,
                                                objectPosX: 1,
                                                objectPosY: e + 1,
                                                children: (0, r.jsx)(eG.N.Provider, {
                                                    value: N(t.data.entityId, {
                                                        sendSearchFeedback: d,
                                                        id: t.data.entityId,
                                                        type: el.o.TRACK,
                                                        blockPosition: 0,
                                                        position: e,
                                                    }),
                                                    children: (0, r.jsx)(e_.c, {
                                                        track: t.data,
                                                        playContextParams: R(t.data.entityId, {
                                                            contextData: { type: eo.K.Various, meta: { id: t.data.entityId }, from: L, overrideContextType: en.b.Search },
                                                            queueParams: { index: e, entityId: t.data.id },
                                                            loadContextMeta: !0,
                                                        }),
                                                    }),
                                                }),
                                            },
                                            t.data.id,
                                        );
                                    case p.n.PODCAST_EPISODE:
                                        return (0, r.jsx)(
                                            ei.B,
                                            {
                                                objectType: c.DomainObjectType.PodcastEpisode,
                                                objectId: t.data.id,
                                                objectPosX: e + 1,
                                                objectPosY: 1,
                                                children: (0, r.jsx)(e_.c, {
                                                    track: t.data,
                                                    playContextParams: R(t.data.entityId, {
                                                        contextData: { type: eo.K.Various, meta: { id: t.data.entityId }, from: L, overrideContextType: en.b.Search },
                                                        queueParams: { index: e, entityId: t.data.id },
                                                        loadContextMeta: !0,
                                                    }),
                                                }),
                                            },
                                            t.data.id,
                                        );
                                }
                            },
                            [i, l, n, A, N, d, R, L, _],
                        ),
                        O = (0, v.L)(() => (m ? i.length + eK.k : i.length)),
                        w = (0, v.L)(() =>
                            'list' === l
                                ? (0, r.jsx)(ey, { count: O, getEstimateRowSize: E, renderItemByIndex: B, onChangeRange: h })
                                : (0, r.jsx)(ex.Q, {
                                      count: O,
                                      rowGap: k.rowGap,
                                      columnGap: k.columnGap,
                                      getEstimateRowSize: P,
                                      minColumnCount: k.minColumnCount,
                                      minColumnWidth: k.minColumnWidth,
                                      maxColumnWidth: k.maxColumnWidth,
                                      maxColumnCount: k.maxColumnCount,
                                      renderItemByIndex: B,
                                      onChangeRange: h,
                                  }),
                        );
                    return (0, r.jsxs)(Z.N, {
                        className: (0, s.$)(tn().root, a),
                        containerClassName: tn().container,
                        ref: t,
                        ...(0, es.OZ)(C),
                        children: [
                            (0, r.jsxs)('div', {
                                children: [
                                    u && (0, r.jsx)('div', { className: tn().correctedTextBlock, children: u }),
                                    f && (0, r.jsx)(ti, { className: tn().queryToVibe, requestAwakeLumenModal: j, sendSearchFeedback: d, vibe: T }),
                                    w,
                                ],
                            }),
                            (0, r.jsx)(J.A, { children: (0, r.jsx)(Q.w, { className: tn().footer }) }),
                        ],
                    });
                }),
                tc = (0, o.forwardRef)((e, t) => (0, r.jsx)(tl, { forwardRef: t, ...e }));
            var td = a(45923),
                tu = a(39631),
                tm = a(86535),
                th = a(48483),
                t_ = a(71344),
                tp = a(35802),
                tx = a(53323),
                tb = a(18486),
                tv = a(31764),
                tS = a(19994),
                tj = a(58373),
                tC = a.n(tj);
            let tA = (e) => {
                let { className: t, ariaLabel: a, isShimmerActive: i } = e;
                return (0, r.jsxs)('div', {
                    tabIndex: 0,
                    'aria-label': a,
                    'aria-live': 'polite',
                    'aria-busy': !0,
                    className: (0, s.$)(tC().root, t),
                    children: [
                        (0, r.jsxs)('div', {
                            className: tC().infoContainer,
                            children: [
                                (0, r.jsx)(tS.W, { className: tC().cover, radius: 's', isActive: i }),
                                (0, r.jsxs)('div', {
                                    className: tC().textContainer,
                                    children: [
                                        (0, r.jsx)(tS.W, { className: tC().title, radius: 's', isActive: i }),
                                        (0, r.jsx)(tS.W, { className: tC().description, radius: 's', isActive: i }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)(tS.W, { className: tC().action, radius: 's', isActive: i }),
                    ],
                });
            };
            var tg = a(74481),
                ty = a.n(tg);
            let tI = (e) => {
                let { shimmersCount: t = 3, isShimmerActive: a = !0 } = e,
                    { formatMessage: s } = (0, n.A)();
                return Array.from({ length: t }, (e, t) =>
                    (0, r.jsx)(
                        tA,
                        {
                            className: ty().root,
                            ariaLabel: s({ id: 'loading-messages.entity-is-loading' }, { entityName: s({ id: 'search.history' }) }),
                            isShimmerActive: a,
                        },
                        t,
                    ),
                );
            };
            var tT = a(5885),
                tf = a.n(tT);
            let tk = (e) => {
                    let {
                            forwardRef: t,
                            title: a,
                            description: i,
                            viewAllAction: n,
                            coverUrl: l,
                            children: c,
                            className: d,
                            maxColumns: u = 2,
                            itemsPerColumn: m = 3,
                            containerClassName: _,
                            headerClassName: p,
                            titleSize: x,
                            showControls: b,
                            isShimmerVisible: v,
                            isShimmerActive: S,
                        } = e,
                        j = (0, o.useRef)(null),
                        C = (0, o.useId)(),
                        { items: A, columnLength: g } = (0, o.useMemo)(() => {
                            if (v)
                                return {
                                    columnLength: u,
                                    items: Array.from({ length: u }, (e, t) =>
                                        (0, r.jsx)('div', { className: tf().column, children: (0, r.jsx)(tI, { shimmersCount: 3, isShimmerActive: S }) }, t),
                                    ),
                                };
                            let e = (0, tp.A)(c, m).slice(0, (null == c ? void 0 : c.length) ? Math.ceil(c.length / m) : u);
                            return { items: e.map((e, t) => (0, r.jsx)('div', { className: tf().column, children: e }, t)), columnLength: e.length };
                        }, [c, S, v, m, u]);
                    return (0, r.jsxs)('section', {
                        ref: t,
                        className: (0, s.$)(d, tf().root),
                        'data-test-id': h.e8.search.MIXED_ENTITIES_BLOCK,
                        children: [
                            (0, r.jsx)(tb.T, {
                                className: p,
                                labeledForId: C,
                                title: a,
                                description: i,
                                coverUrl: l,
                                viewAllActionLink: n,
                                titleSize: x,
                                controls: b && (0, r.jsx)(tv.X, { className: tf().controls, carouselRef: j }),
                                withDescription: !!i,
                            }),
                            (0, r.jsx)(tx.F, {
                                className: _,
                                ref: j,
                                itemClassName: (0, s.$)(tf().item, { [tf().item_withMultipleColumns]: g > 1 }),
                                'aria-labelledby': C,
                                role: 'group',
                                children: A,
                            }),
                        ],
                    });
                },
                tE = (0, o.forwardRef)((e, t) => (0, r.jsx)(tk, { forwardRef: t, ...e }));
            var tP = a(64310),
                tR = a(48937),
                tN = a.n(tR);
            let tL = (e) => {
                let { isShimmerActive: t } = e;
                return (0, r.jsxs)('div', {
                    className: tN().root,
                    children: [
                        (0, r.jsxs)('div', {
                            className: tN().container,
                            children: [
                                (0, r.jsx)(eY.V, {
                                    className: (0, s.$)(tN().entity, tN().important),
                                    shimmerClassName: (0, s.$)(tN().cover, tN().important),
                                    round: !0,
                                    withInfo: !1,
                                    isActive: t,
                                }),
                                (0, r.jsxs)('div', {
                                    className: tN().meta,
                                    children: [
                                        (0, r.jsx)(tP.n, { textClassName: (0, s.$)(tN().title, tN().important), isActive: t }),
                                        (0, r.jsx)(tP.n, { textClassName: (0, s.$)(tN().subtitle, tN().important), isActive: t }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)('div', {
                            className: tN().container,
                            children: [
                                (0, r.jsx)(eY.V, {
                                    className: (0, s.$)(tN().entity, tN().important),
                                    shimmerClassName: (0, s.$)(tN().cover, tN().important),
                                    withInfo: !1,
                                    isActive: t,
                                    radius: 'xs',
                                }),
                                (0, r.jsxs)('div', {
                                    className: tN().meta,
                                    children: [
                                        (0, r.jsx)(tP.n, { textClassName: (0, s.$)(tN().title, tN().important), isActive: t }),
                                        (0, r.jsx)(tP.n, { textClassName: (0, s.$)(tN().subtitle, tN().important), isActive: t }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            };
            var tB = a(28777),
                tO = a.n(tB),
                tw = a(71506),
                tD = a.n(tw),
                tM = a(12360),
                tz = a.n(tM);
            let tH = (0, i.PA)((e) => {
                let { album: t } = e;
                return (0, r.jsx)(ed.M, {
                    album: t,
                    className: (0, s.$)(tD().block, tz().root),
                    coverClassName: tD().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                });
            });
            var tU = a(27639),
                tV = a(91802),
                tG = a.n(tV);
            let tW = (0, i.PA)((e) => {
                let { artist: t } = e;
                return (0, r.jsx)(tU.c, {
                    artist: t,
                    className: (0, s.$)(tD().block, tG().root),
                    coverClassName: tD().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                    pageId: eU.b.SEARCH,
                });
            });
            var tF = a(85463),
                t$ = a(73805),
                tq = a(56712),
                tY = a(13946),
                tX = a(34232),
                tK = a(39079),
                tZ = a(85587),
                tQ = a(62270),
                tJ = a.n(tQ),
                t0 = a(76816),
                t1 = a(91292),
                t8 = a(39267),
                t2 = a(80624),
                t9 = a.n(t2);
            let t6 = (0, i.PA)((e) => {
                var t;
                let { track: a } = e,
                    { from: i } = (0, eV.f)(),
                    { formatMessage: l } = (0, n.A)(),
                    c = { contextData: { type: eo.K.Various, meta: { id: a.entityId }, from: i }, queueParams: { index: 0, entityId: a.id }, loadContextMeta: !0 },
                    d = (0, tK.D)({ playContextParams: c, entityId: a.entityId }),
                    u = (0, o.useCallback)(
                        (e) =>
                            (0, r.jsx)(t8.q, {
                                isAvailable: a.isAvailable,
                                isDisliked: a.isDisliked,
                                coverUri: a.coverUri,
                                title: a.title,
                                className: (0, s.$)(tD().cover, t9().cover),
                                alt: l({ id: 'entity-names.track-name-by-type' }, { type: (0, tX.y)(a.type), name: a.title }),
                                radius: 'xs',
                                ...e,
                            }),
                        [l, a.coverUri, a.isAvailable, a.isDisliked, a.title, a.type],
                    ),
                    m = (0, tF.O)({ track: a, entityType: tZ.n.AUDIOBOOK }),
                    h = (0, v.L)(() =>
                        a.url && a.isAvailable
                            ? (0, r.jsx)(t1.N, { className: (0, s.$)(tJ().text, tJ().titleLink), href: a.url, onClick: m, children: a.title })
                            : (0, r.jsx)($.HL, { className: (0, s.$)(tJ().text, tJ().titleText), size: 'm', variant: 'div', type: 'text', children: a.title }),
                    ),
                    _ = (0, o.useCallback)(
                        (e, t) => {
                            var s;
                            return (null == (s = a.artists) ? void 0 : s.length)
                                ? (0, r.jsx)(tY.i, { linkClassName: e, captionClassName: t, artists: a.artists, lineClamp: 1, withLink: a.isAvailable })
                                : null;
                        },
                        [a.artists, a.isAvailable],
                    );
                return (0, r.jsx)(tq.C, {
                    className: (0, s.$)(tD().block, t9().root, tJ().root, { [tJ().root_disabled]: !a.isAvailable }),
                    track: a,
                    meta: (0, r.jsx)(t0.r, {
                        isDisabled: !a.isAvailable,
                        version: a.version,
                        title: h,
                        artistsComponent: _,
                        getDescriptionTexts: a.getDescriptionTexts,
                        explicitMarkVariant: a.explicitDisclaimer,
                        releaseYear: (null == (t = a.mainAlbum) ? void 0 : t.isNonMusic) ? a.mainAlbum.year : void 0,
                    }),
                    playButtonCellRender: u,
                    playButtonIconSize: 'l',
                    controls: (0, r.jsx)(t$.Q, { track: a, utmLink: c.contextData.utmLink, likeIconSize: 'xs' }),
                    ...d,
                });
            });
            var t3 = a(91289),
                t4 = a(38501),
                t7 = a(6424),
                t5 = a.n(t7);
            let ae = (0, i.PA)((e) => {
                    let { clip: t } = e,
                        a = (0, t4.d)(),
                        s = (0, o.useRef)(String((0, eJ.A)()));
                    return a
                        ? (0, r.jsx)(t3.N, {
                              clip: t,
                              viewUuid: s.current,
                              className: tD().block,
                              coverClassName: t5().cover,
                              playButtonIconSize: 'l',
                              likeIconSize: 'xs',
                              shouldShowTimecode: !0,
                          })
                        : null;
                }),
                at = (0, i.PA)((e) => {
                    let { id: t, concert: a } = e,
                        s = [],
                        i = (0, r.jsx)($.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                    return (
                        (null == a ? void 0 : a.city) && s.push((0, r.jsx)($.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: a.city })),
                        (null == a ? void 0 : a.contentRating) &&
                            s.push(i, (0, r.jsx)($.HL, { variant: 'span', size: 'm', weight: 'medium', children: a.contentRating })),
                        (0, r.jsxs)('div', {
                            className: e2().root,
                            id: t,
                            children: [
                                (0, r.jsx)($.HL, {
                                    variant: 'div',
                                    size: 'm',
                                    weight: 'medium',
                                    className: e2().city,
                                    lineClamp: 1,
                                    children: null == a ? void 0 : a.title,
                                }),
                                (0, r.jsx)('div', { className: e2().info, children: s.map((e, t) => (0, o.cloneElement)(e, { key: t })) }),
                            ],
                        })
                    );
                });
            var aa = a(89592),
                ar = a.n(aa);
            let as = (0, i.PA)((e) => {
                let { concert: t } = e,
                    a = (0, o.useRef)(String((0, eJ.A)())),
                    s = t.isIdentityExperimentEnabled ? e1.M : at;
                return (0, r.jsx)(e0.V, {
                    artistId: null,
                    viewUuid: a.current,
                    concert: t,
                    radius: 's',
                    className: ar().root,
                    meta: (0, r.jsx)(s, { concert: t }),
                    shouldSendAnalyticsOnHide: !0,
                    shouldShowMask: !0,
                });
            });
            var ai = a(50392),
                ao = a.n(ai);
            let an = (0, i.PA)((e) => {
                let { album: t } = e;
                return (0, r.jsx)(ed.M, {
                    album: t,
                    className: (0, s.$)(tD().block, ao().root),
                    coverClassName: tD().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                    shouldShowReleaseYear: !0,
                });
            });
            var al = a(32506),
                ac = a(94698),
                ad = a.n(ac);
            let au = (0, i.PA)((e) => {
                let { data: t } = e,
                    { formatMessage: a } = (0, n.A)();
                return (0, r.jsx)('div', {
                    className: ad().root,
                    children: (0, r.jsx)(al.F, { textButton: a({ id: 'interface-actions.further' }), meta: t, buttonClassName: (0, s.$)(ad().button, ad().important) }),
                });
            });
            var am = a(4196),
                ah = a(3448),
                a_ = a.n(ah);
            let ap = (0, i.PA)((e) => {
                let { playlist: t } = e;
                return (0, r.jsx)(am.v, {
                    playlist: t,
                    className: (0, s.$)(tD().block, a_().root),
                    coverClassName: tD().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                });
            });
            var ax = a(48215),
                ab = a(35786),
                av = a.n(ab);
            let aS = (0, i.PA)((e) => {
                let { track: t } = e,
                    { from: a } = (0, eV.f)(),
                    { formatMessage: i } = (0, n.A)(),
                    {
                        settings: { isMobile: l },
                    } = (0, y.g)(),
                    c = { contextData: { type: eo.K.Various, meta: { id: t.entityId }, from: a }, queueParams: { index: 0, entityId: t.id }, loadContextMeta: !0 },
                    d = (0, tK.D)({ playContextParams: c, entityId: t.entityId }),
                    u = (0, o.useCallback)(
                        (e) =>
                            (0, r.jsx)(t8.q, {
                                isAvailable: t.isAvailable,
                                isDisliked: t.isDisliked,
                                coverUri: t.coverUri,
                                title: t.title,
                                className: (0, s.$)(tD().cover, av().cover),
                                alt: i({ id: 'entity-names.track-name-by-type' }, { type: (0, tX.y)(t.type), name: t.title }),
                                radius: 'xs',
                                ...e,
                            }),
                        [i, t.coverUri, t.isAvailable, t.isDisliked, t.title, t.type],
                    );
                return (0, r.jsx)(tq.C, {
                    className: (0, s.$)(tD().block, av().root),
                    track: t,
                    meta: (0, r.jsx)(ax.w, {
                        podcastMetaClassName: (0, s.$)(av().podcastMeta, av().important),
                        titleContainerClassName: (0, s.$)(av().titleContainer, av().important),
                        textClassName: (0, s.$)(av().text, av().important),
                        progressClassName: (0, s.$)(av().progress, av().important),
                        track: t,
                        playContextParams: c,
                        withListeningProgress: !0,
                        explicitSize: 'xxxs',
                        titleLineClamp: 2,
                        withAlbumTitleLink: !l,
                    }),
                    playButtonCellRender: u,
                    playButtonIconSize: 'l',
                    controls: (0, r.jsx)(t$.Q, { track: t, utmLink: c.contextData.utmLink, likeIconSize: 'xs' }),
                    ...d,
                    'data-test-id': h.Kq.track.TRACK_PODCAST,
                });
            });
            var aj = a(61084),
                aC = a.n(aj);
            let aA = (0, i.PA)((e) => {
                let { album: t } = e;
                return (0, r.jsx)(ed.M, {
                    album: t,
                    className: (0, s.$)(tD().block, aC().root),
                    coverClassName: tD().cover,
                    playButtonIconSize: 'l',
                    likeIconSize: 'xs',
                    description: (0, r.jsx)(W.A, { id: 'entity-names.recently-release' }),
                });
            });
            var ag = a(15232),
                ay = a(72936),
                aI = a.n(ay);
            let aT = (0, i.PA)((e) => {
                let { track: t } = e,
                    { from: a } = (0, eV.f)(),
                    {
                        settings: { isMobile: i },
                    } = (0, y.g)(),
                    n = { contextData: { type: eo.K.Various, meta: { id: t.entityId }, from: a }, queueParams: { index: 0, entityId: t.id }, loadContextMeta: !0 },
                    l = (0, tK.D)({ playContextParams: n, entityId: t.entityId }),
                    c = (0, o.useCallback)(
                        (e) =>
                            (0, r.jsx)(t8.q, {
                                isAvailable: t.isAvailable,
                                isDisliked: t.isDisliked,
                                coverUri: t.coverUri,
                                title: t.title,
                                className: (0, s.$)(tD().cover, aI().cover),
                                radius: 'xs',
                                ...e,
                            }),
                        [t.coverUri, t.isAvailable, t.isDisliked, t.title],
                    );
                return (0, r.jsx)(tq.C, {
                    className: (0, s.$)(tD().block, aI().root),
                    track: t,
                    meta: (0, r.jsx)(ag.j, { withArtistLink: !i, track: t }),
                    playButtonCellRender: c,
                    playButtonIconSize: 'l',
                    controls: (0, r.jsx)(t$.Q, { track: t, utmLink: n.contextData.utmLink, likeIconSize: 'xs' }),
                    ...l,
                    'data-test-id': h.Kq.track.SEARCH_TRACK_CARD,
                });
            });
            var af = a(91177),
                ak = a(25596),
                aE = a(32414),
                aP = a(8990),
                aR = a(49738),
                aN = a(64546),
                aL = a(48864),
                aB = a.n(aL);
            let aO = (0, i.PA)((e) => {
                let { upcomingAlbum: t } = e,
                    a = (0, af.D)(),
                    { user: i } = (0, y.g)(),
                    { formatMessage: l, formatDate: c } = (0, n.A)(),
                    d = (0, ak.P)(t),
                    u = (0, v.L)(() => {
                        let e = l({ id: 'entity-names.upcoming-album-name' }, { upcomingAlbumName: t.title }),
                            a = t.isPresave ? l({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(a);
                    }),
                    m = (0, o.useCallback)(
                        (e, a) => {
                            var s;
                            return (null == (s = t.artists) ? void 0 : s.length)
                                ? (0, r.jsx)(tY.i, { linkClassName: e, captionClassName: a, artists: t.artists, lineClamp: 1 })
                                : null;
                        },
                        [t.artists],
                    );
                return (0, r.jsxs)(aP.C, {
                    ref: a,
                    className: (0, s.$)(tD().block, tJ().root, aB().root, aB().important),
                    'aria-label': u,
                    children: [
                        (0, r.jsxs)(eE.t, {
                            className: aB().cover,
                            radius: 'xs',
                            children: [
                                (0, r.jsx)(eB.B, {
                                    className: aB().coverImage,
                                    src: t.coverUri,
                                    size: 100,
                                    alt: l({ id: 'entity-names.upcoming-album-name' }, { upcomingAlbumName: t.title }),
                                    fit: 'cover',
                                    withAvatarReplace: !0,
                                    fallbackIconSize: 'm',
                                    fallbackIconVariant: 'lock',
                                }),
                                t.coverUri && (0, r.jsx)(K.I, { className: aB().lockIcon, variant: 'lock', size: 'xs' }),
                            ],
                        }),
                        (0, r.jsx)(t0.r, {
                            title: (0, r.jsx)($.HL, { className: (0, s.$)(tJ().text, tJ().titleText), size: 'l', variant: 'div', type: 'text', children: t.title }),
                            description: (0, r.jsx)($.HL, {
                                className: aB().releaseDate,
                                variant: 'div',
                                type: 'entity',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 1,
                                children: (0, r.jsx)(W.A, { id: 'entity-names.upcoming-album-date', values: { releaseDate: c(t.releaseDate, (0, aE.s)()) } }),
                            }),
                            artistsComponent: m,
                            getDescriptionTexts: t.getDescriptionTexts,
                            explicitMarkVariant: t.explicitDisclaimer,
                        }),
                        (0, r.jsx)(aN.WithOffline, {
                            fallback: (0, r.jsx)(aR.c, {
                                size: 'xs',
                                iconSize: 'xs',
                                className: aB().likeButton,
                                isLiked: t.isPresave,
                                onClick: d,
                                disabled: !i.isAuthorized,
                            }),
                        }),
                    ],
                });
            });
            var aw = a(5120),
                aD = a(91198),
                aM = a(67665),
                az = a(64916),
                aH = a.n(az);
            let aU = (0, i.PA)((e) => {
                    var t;
                    let { vibe: a } = e,
                        i = (0, tu._)();
                    return (0, r.jsx)(aM.H, {
                        className: (0, s.$)(aH().root, aH().important),
                        coverClassName: (0, s.$)(aH().coverClassName, aH().important),
                        playButtonIconSize: 'l',
                        vibe: a,
                        controls: i(a),
                        cover: (0, aw.wg)({ uri: a.backgroundImageUrl, color: null == (t = a.colors) ? void 0 : t.average }),
                        description: a.description,
                        agentVariant: aD.h.LARGE,
                    });
                }),
                aV = (0, i.PA)((e) => {
                    let { results: t, isShimmerVisible: a, isShimmerActive: i, blockPosition: l, sendSearchFeedback: d } = e,
                        { formatMessage: m } = (0, n.A)(),
                        _ = (0, o.useCallback)(
                            (e, t) => {
                                switch (e.type) {
                                    case td.r.ALBUM:
                                        return (0, r.jsx)(
                                            ei.B,
                                            {
                                                objectType: c.DomainObjectType.Album,
                                                objectId: String(e.data.id),
                                                objectPosX: t + 1,
                                                objectPosY: 1,
                                                children: (0, r.jsx)(eG.N.Provider, {
                                                    value: { sendSearchFeedback: d, id: e.data.id, type: el.o.ALBUM, blockPosition: l, position: t },
                                                    children: (0, r.jsx)(tH, { album: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case td.r.PLAYLIST:
                                        return (0, r.jsx)(
                                            ei.B,
                                            {
                                                objectType: c.DomainObjectType.Playlist,
                                                objectId: e.data.id,
                                                objectPosX: t + 1,
                                                objectPosY: 1,
                                                children: (0, r.jsx)(eG.N.Provider, {
                                                    value: { sendSearchFeedback: d, id: e.data.id, type: el.o.PLAYLIST, blockPosition: l, position: t },
                                                    children: (0, r.jsx)(ap, { playlist: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case td.r.RECENT_RELEASE:
                                        return (0, r.jsx)(
                                            ei.B,
                                            {
                                                objectType: c.DomainObjectType.Album,
                                                objectId: String(e.data.id),
                                                objectPosX: t + 1,
                                                objectPosY: 1,
                                                children: (0, r.jsx)(eG.N.Provider, {
                                                    value: { sendSearchFeedback: d, id: e.data.id, type: el.o.ALBUM, blockPosition: l, position: t },
                                                    children: (0, r.jsx)(aA, { album: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case td.r.WAVE:
                                        return (0, r.jsx)(
                                            ei.B,
                                            {
                                                objectType: c.DomainObjectType.Wave,
                                                objectId: e.data.stationId,
                                                objectPosX: t + 1,
                                                objectPosY: 1,
                                                children: (0, r.jsx)(eG.N.Provider, {
                                                    value: { sendSearchFeedback: d, id: e.data.seedsId, type: el.o.WAVE, blockPosition: l, position: t },
                                                    children: (0, r.jsx)(aU, { vibe: e.data }),
                                                }),
                                            },
                                            e.data.stationId,
                                        );
                                    case td.r.ARTIST:
                                        return (0, r.jsx)(
                                            ei.B,
                                            {
                                                objectType: c.DomainObjectType.Artist,
                                                objectId: e.data.id,
                                                objectPosX: t + 1,
                                                objectPosY: 1,
                                                children: (0, r.jsx)(eG.N.Provider, {
                                                    value: { sendSearchFeedback: d, id: e.data.id, type: el.o.ARTIST, blockPosition: l, position: t },
                                                    children: (0, r.jsx)(tW, { artist: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case td.r.UPCOMING:
                                        return (0, r.jsx)(
                                            ei.B,
                                            {
                                                objectType: c.DomainObjectType.UpcomingAlbum,
                                                objectId: String(e.data.id),
                                                objectPosX: t + 1,
                                                objectPosY: 1,
                                                children: (0, r.jsx)(aO, { upcomingAlbum: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    case td.r.CONCERT:
                                        return (0, r.jsx)(
                                            ei.B,
                                            {
                                                objectType: c.DomainObjectType.Concert,
                                                objectId: e.data.id,
                                                objectPosX: t + 1,
                                                objectPosY: 1,
                                                children: (0, r.jsx)(as, { concert: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    case td.r.PODCAST:
                                        return (0, r.jsx)(
                                            ei.B,
                                            {
                                                objectType: c.DomainObjectType.Podcast,
                                                objectId: String(e.data.id),
                                                objectPosX: t + 1,
                                                objectPosY: 1,
                                                children: (0, r.jsx)(eG.N.Provider, {
                                                    value: { sendSearchFeedback: d, id: e.data.id, type: el.o.ALBUM, blockPosition: l, position: t },
                                                    children: (0, r.jsx)(an, { album: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case td.r.NON_MUSIC:
                                        return (0, r.jsx)(
                                            ei.B,
                                            {
                                                objectType: c.DomainObjectType.Audiobook,
                                                objectId: String(e.data.id),
                                                objectPosX: t + 1,
                                                objectPosY: 1,
                                                children: (0, r.jsx)(an, { album: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    case td.r.PODCAST_EPISODE:
                                        return (0, r.jsx)(
                                            ei.B,
                                            {
                                                objectType: c.DomainObjectType.PodcastEpisode,
                                                objectId: e.data.id,
                                                objectPosX: t + 1,
                                                objectPosY: 1,
                                                children: (0, r.jsx)(aS, { track: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    case td.r.OVERVIEW:
                                        return (0, r.jsx)(au, { data: e.data }, e.type);
                                    case td.r.TRACK:
                                        return (0, r.jsx)(
                                            ei.B,
                                            {
                                                objectType: c.DomainObjectType.Track,
                                                objectId: e.data.id,
                                                objectPosX: t + 1,
                                                objectPosY: 1,
                                                children: (0, r.jsx)(eG.N.Provider, {
                                                    value: { sendSearchFeedback: d, id: e.data.entityId, type: el.o.TRACK, blockPosition: l, position: t },
                                                    children: (0, r.jsx)(aT, { track: e.data }),
                                                }),
                                            },
                                            e.data.id,
                                        );
                                    case td.r.CLIP:
                                        return (0, r.jsx)(
                                            ei.B,
                                            {
                                                objectType: c.DomainObjectType.Video,
                                                objectId: String(e.data.clipId),
                                                objectPosX: t + 1,
                                                objectPosY: 1,
                                                children: (0, r.jsx)(eG.N.Provider, {
                                                    value: { sendSearchFeedback: d, id: e.data.clipId, type: el.o.CLIP, blockPosition: l, position: t },
                                                    children: (0, r.jsx)(ae, { clip: e.data }),
                                                }),
                                            },
                                            e.data.clipId,
                                        );
                                    case td.r.BOOK_CHAPTER:
                                        return (0, r.jsx)(
                                            ei.B,
                                            {
                                                objectType: c.DomainObjectType.AudiobookChapter,
                                                objectId: String(e.data.id),
                                                objectPosX: t + 1,
                                                objectPosY: 1,
                                                children: (0, r.jsx)(t6, { track: e.data }),
                                            },
                                            e.data.id,
                                        );
                                    default:
                                        return null;
                                }
                            },
                            [l, d],
                        ),
                        p = (0, o.useMemo)(() => t.map((e, t) => _(e, t)).filter((e) => (0, o.isValidElement)(e)), [_, t, t.length]);
                    return a
                        ? (0, r.jsx)(tL, { isShimmerActive: i })
                        : p.length
                          ? (0, r.jsx)(u.F, {
                                blockId: tm.h.SEARCH_BEST_RESULTS,
                                blockType: tm.h.SEARCH_BEST_RESULTS,
                                blockPosX: 1,
                                blockPosY: 1,
                                objectsCount: p.length,
                                children: (0, r.jsx)('div', {
                                    className: (0, s.$)(tO().root, { [tO().root_withSingleResult]: 1 === p.length }),
                                    role: 'group',
                                    'aria-label': m({ id: 'search-results.best' }),
                                    'data-test-id': h.e8.search.SEARCH_BEST_RESULTS,
                                    children: p,
                                }),
                            })
                          : null;
                });
            var aG = a(63766),
                aW = a(47934);
            let aF = (0, i.PA)((e) => {
                    let {
                            forwardRef: t,
                            items: a = [],
                            title: s,
                            sendSearchFeedback: i,
                            blockPosition: o = 0,
                            containerClassName: n,
                            headerClassName: l,
                            className: d,
                            itemClassName: u,
                            isShimmerVisible: m,
                            isShimmerActive: h,
                            isClipBlock: _,
                            ...x
                        } = e,
                        b = (0, tu._)(),
                        { search: v } = (0, y.g)(),
                        S = (0, t4.d)(),
                        j = a.filter((e) => e.type !== p.n.PODCAST_EPISODE);
                    return (v.isResolved && 0 === j.length) || (_ && !S)
                        ? null
                        : (0, r.jsx)(aW.O, {
                              isShimmerVisible: m,
                              isShimmerActive: h,
                              className: d,
                              containerClassName: n,
                              headerClassName: l,
                              showHeaderShimmer: !0,
                              title: s,
                              ref: t,
                              ...(0, es.OZ)(x),
                              itemClassName: u,
                              children: j.map((e, t) => {
                                  switch (e.type) {
                                      case p.n.ALBUM:
                                          return (0, r.jsx)(
                                              eG.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: i, id: e.data.id, type: el.o.ALBUM, blockPosition: o, position: t },
                                                  children: (0, r.jsx)(ec.a, { album: e.data, contentLinesCount: 3 }),
                                              },
                                              e.data.id,
                                          );
                                      case p.n.ARTIST:
                                          return (0, r.jsx)(
                                              eG.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: i, id: e.data.id, type: el.o.ARTIST, blockPosition: o, position: t },
                                                  children: (0, r.jsx)(eu.a, { artist: e.data, contentLinesCount: 3 }),
                                              },
                                              e.data.id,
                                          );
                                      case p.n.PLAYLIST:
                                          return (0, r.jsx)(
                                              eG.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: i, id: e.data.id, type: el.o.PLAYLIST, blockPosition: o, position: t },
                                                  children: (0, r.jsx)(eh.B, { playlist: e.data, contentLinesCount: 3 }),
                                              },
                                              e.data.key,
                                          );
                                      case p.n.UGC_TRACK:
                                      case p.n.TRACK:
                                          return (0, r.jsx)(
                                              eG.N.Provider,
                                              {
                                                  value: {
                                                      sendSearchFeedback: i,
                                                      id: e.data.albumId ? ''.concat(e.data.id, ':').concat(e.data.albumId) : e.data.id,
                                                      type: el.o.TRACK,
                                                      blockPosition: o,
                                                      position: t,
                                                  },
                                                  children: (0, r.jsx)(aG.w, { track: e.data, overrideContextType: en.b.Search }),
                                              },
                                              e.data.id,
                                          );
                                      case p.n.CLIP:
                                          return (0, r.jsx)(
                                              eG.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: i, id: e.data.clipId, type: el.o.WAVE, blockPosition: o, position: t },
                                                  children: (0, r.jsx)(em.F, { clip: e.data }),
                                              },
                                              e.data.clipId,
                                          );
                                      case p.n.PODCAST:
                                          return (0, r.jsx)(
                                              eG.N.Provider,
                                              {
                                                  value: { sendSearchFeedback: i, id: e.data.id, type: el.o.PODCAST, blockPosition: o, position: t },
                                                  children: (0, r.jsx)(ec.a, { album: e.data, contentLinesCount: 3, withLikesCount: !0, withAddition: !1 }),
                                              },
                                              e.data.id,
                                          );
                                      case p.n.WAVE:
                                          return (0, r.jsx)(
                                              ei.B,
                                              {
                                                  objectType: c.DomainObjectType.Wave,
                                                  objectId: e.data.seedsId,
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  children: (0, r.jsx)(eG.N.Provider, {
                                                      value: { sendSearchFeedback: i, id: e.data.stationId, type: el.o.WAVE, blockPosition: 0, position: t },
                                                      children: (0, r.jsx)(aM.H, {
                                                          vibe: e.data,
                                                          controls: b(e.data),
                                                          cover: e.data.cover,
                                                          description: e.data.description,
                                                          agentVariant: aD.h.SMALL,
                                                      }),
                                                  }),
                                              },
                                              e.data.stationId,
                                          );
                                  }
                              }),
                          });
                }),
                a$ = (0, o.forwardRef)((e, t) => (0, r.jsx)(aF, { forwardRef: t, ...e }));
            var aq = a(97893),
                aY = a.n(aq);
            let aX = (0, i.PA)((e) => {
                    let {
                            forwardRef: t,
                            className: a,
                            results: i,
                            bestResults: l,
                            sendSearchFeedback: c,
                            searchCorrectedText: m,
                            isShimmerVisible: x,
                            isShimmerActive: b,
                            q2vResults: S,
                            requestAwakeLumenModal: j,
                            ...C
                        } = e,
                        A = (0, tu._)(),
                        { formatMessage: g } = (0, n.A)(),
                        y = (0, eI.f)(),
                        { isVisible: I, vibe: T } = eQ(S, b),
                        f = (0, v.L)(() => {
                            let e = {
                                [p.n.ALL]: { message: g({ id: 'search-results.best' }), type: p.n.ALL, items: [] },
                                [p.n.ARTIST]: { message: g({ id: 'search-results.artist' }), type: p.n.ARTIST, items: [] },
                                [p.n.PODCAST]: { message: g({ id: 'search-results.podcasts-and-books' }), type: p.n.PODCAST, items: [] },
                                [p.n.ALBUM]: { message: g({ id: 'search-results.album' }), type: p.n.ALBUM, items: [] },
                                [p.n.PLAYLIST]: { message: g({ id: 'search-results.playlist' }), type: p.n.PLAYLIST, items: [] },
                                [p.n.CLIP]: { message: g({ id: 'search-results.clip' }), type: p.n.CLIP, items: [] },
                            };
                            i.filter((e) => !!e).forEach((t) => {
                                if (t) {
                                    var a, r;
                                    (null == (a = e[t.type]) || a.items.push(t), null == (r = e[p.n.ALL]) || r.items.push(t));
                                }
                            });
                            let t = {
                                [p.n.ARTIST]: h.e8.search.SEARCH_MIXED_ARTIST,
                                [p.n.PODCAST]: h.e8.search.SEARCH_MIXED_PODCAST,
                                [p.n.ALBUM]: h.e8.search.SEARCH_MIXED_ALBUM,
                                [p.n.PLAYLIST]: h.e8.search.SEARCH_MIXED_PLAYLIST,
                                [p.n.CLIP]: h.e8.search.SEARCH_MIXED_CLIP,
                                [td.r.PODCAST]: h.e8.search.SEARCH_MIXED_BEST_PODCAST,
                                [td.r.OVERVIEW]: h.e8.search.SEARCH_MIXED_BEST_OVERVIEW,
                                [td.r.PODCAST_EPISODE]: h.e8.search.SEARCH_MIXED_BEST_PODCAST_EPISODE,
                                [td.r.NON_MUSIC]: h.e8.search.SEARCH_MIXED_BEST_NON_MUSIC,
                            };
                            return Object.getOwnPropertyNames(e).map((a, s) => {
                                let i = e[a],
                                    n = i.type === p.n.CLIP;
                                if (i.type === p.n.ALL) {
                                    let e = i.items
                                        .map((e, t) => {
                                            let {
                                                objectPosX: a,
                                                objectPosY: r,
                                                objectsCount: o,
                                            } = (0, th.$)({ index: t, count: i.items.length, itemsCountPerColumn: 3, showedItemsCountInBlock: 6 });
                                            return (0, t_.G)({
                                                renderVibeControls: A,
                                                item: e,
                                                index: t,
                                                sendSearchFeedback: c,
                                                blockPosition: s,
                                                objectPosX: a,
                                                objectPosY: r,
                                                objectsCount: o,
                                            });
                                        })
                                        .filter((e) => (0, o.isValidElement)(e));
                                    return (0, r.jsxs)(
                                        o.Fragment,
                                        {
                                            children: [
                                                (0, r.jsx)(aV, { results: l, isShimmerVisible: x, isShimmerActive: b, blockPosition: s, sendSearchFeedback: c }),
                                                (0, r.jsx)(u.F, {
                                                    blockId: tm.h.SEARCH_OPEN_BEST_RESULTS,
                                                    blockType: tm.h.SEARCH_OPEN_BEST_RESULTS,
                                                    blockPosX: 1,
                                                    blockPosY: 1,
                                                    objectsCount: e.length,
                                                    children: (0, r.jsx)(tE, {
                                                        containerClassName: aY().blockMixed,
                                                        className: aY().block,
                                                        maxColumns: 2,
                                                        itemsPerColumn: 3,
                                                        showControls: !0,
                                                        'aria-label': g({ id: 'search-results.other-results' }),
                                                        isShimmerVisible: x,
                                                        isShimmerActive: b,
                                                        children: e,
                                                    }),
                                                }),
                                            ],
                                        },
                                        s,
                                    );
                                }
                                let d = t[i.type];
                                return (0, r.jsx)(
                                    a$,
                                    {
                                        className: aY().block,
                                        headerClassName: aY().blockHeader,
                                        containerClassName: aY().blockCarousel,
                                        blockPosition: s,
                                        items: i.items,
                                        title: i.message,
                                        sendSearchFeedback: c,
                                        isShimmerVisible: x,
                                        isShimmerActive: b,
                                        isClipBlock: n,
                                        ...(d ? { 'data-test-id': d } : {}),
                                    },
                                    s,
                                );
                            });
                        });
                    return (0, r.jsxs)(Z.N, {
                        className: (0, s.$)(aY().root, a),
                        containerClassName: aY().container,
                        ref: t,
                        ...(0, es.OZ)(C),
                        children: [
                            (0, r.jsxs)('div', {
                                className: aY().content,
                                children: [
                                    m && (0, r.jsx)('div', { className: aY().correctedTextBlock, children: m }),
                                    (0, r.jsxs)(d.h, {
                                        tabId: _.$.TOP,
                                        tabPos: 1,
                                        isTabSelectedByDefault: !0,
                                        children: [
                                            y && I && (0, r.jsx)(ti, { requestAwakeLumenModal: j, sendSearchFeedback: c, vibe: T }),
                                            (0, r.jsx)('div', { className: aY().items, children: f }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsx)(J.A, { children: (0, r.jsx)(Q.w, { className: aY().footer }) }),
                        ],
                    });
                }),
                aK = (0, o.forwardRef)((e, t) => (0, r.jsx)(aX, { forwardRef: t, ...e }));
            var aZ = a(20129),
                aQ = a(90233),
                aJ = a(23192),
                a0 = a(64284),
                a1 = a(44230),
                a8 = a(37670),
                a2 = a(4370),
                a9 = a(60628),
                a6 = a(74773),
                a3 = a(34303),
                a4 = a(14912),
                a7 = a(94058),
                a5 = a(87366),
                re = a(76099);
            let rt = Math.floor(eK.k / 3);
            var ra = a(96966),
                rr = a.n(ra),
                rs = a(25772),
                ri = a(84273),
                ro = a(35962),
                rn = a(62586),
                rl = a.n(rn);
            let rc = (0, i.PA)((e) => {
                let { isShimmerVisible: t, isShimmerActive: a, mixes: s } = e,
                    { formatMessage: i } = (0, n.A)(),
                    l = (0, o.useMemo)(
                        () =>
                            t
                                ? (0, ro.k)({ isActive: a, withInfo: !1 })
                                : s.map((e) =>
                                      (0, r.jsx)(
                                          ri.N,
                                          { title: e.title, weblink: e.weblink, covers: e.covers, coverSize: 80, imagesLayoutType: e.imagesLayoutType },
                                          e.id,
                                      ),
                                  ),
                        [a, t, s],
                    );
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(tb.T, { className: rl().carouselHeader, title: i({ id: 'entity-names.mixes' }), titleSize: 'xs', viewAllActionLink: a2.Z.mixes.href }),
                        (0, r.jsx)(tx.F, { className: rl().carouselBlock, itemClassName: rl().mixItem, children: l }),
                    ],
                });
            });
            var rd = a(48704);
            let ru = (0, i.PA)((e) => {
                let { className: t } = e,
                    {
                        settings: { isMobile: a },
                        search: s,
                    } = (0, y.g)();
                return (s.mixes.loadingState === a6.G.IDLE && (0, o.use)(s.mixes.getMixes(!1)), a)
                    ? (0, r.jsx)(rc, { isShimmerVisible: s.mixes.isLoading || s.mixes.isRejected, isShimmerActive: s.mixes.isLoading, mixes: s.mixes.items })
                    : (0, r.jsx)(rd.n, {
                          isShimmerVisible: s.mixes.isLoading || s.mixes.isRejected,
                          isShimmerActive: s.mixes.isLoading,
                          mixes: s.mixes.items,
                          className: t,
                          withTitle: !0,
                      });
            });
            var rm = a(62297),
                rh = a.n(rm);
            let r_ = (0, i.PA)(() => {
                let e = (0, tu._)(),
                    { search: t, user: a } = (0, y.g)(),
                    { formatMessage: s } = (0, n.A)(),
                    i = t.historyPage.items;
                if (
                    ((0, o.useEffect)(
                        () => () => {
                            var e;
                            (null == (e = location) ? void 0 : e.pathname) !== a2.Z.searchHistory.href && t.resetHistoryStateRequest();
                        },
                        [t],
                    ),
                    t.isHistoryReady && a.account.data.uid && (0, o.use)(t.getHistory({ userId: a.account.data.uid })),
                    0 === i.length)
                )
                    return null;
                let l = i.reduce((t, a, r) => {
                    let { objectPosX: s, objectPosY: n } = (0, th.$)({ index: t.length, count: i.length, itemsCountPerColumn: 4 }),
                        l = (0, t_.G)({ item: a, index: r, pageId: eU.b.SEARCH, objectPosX: s, objectPosY: n, renderVibeControls: e });
                    return ((0, o.isValidElement)(l) && t.push(l), t);
                }, []);
                return (0, r.jsx)('section', {
                    className: rh().root,
                    children: (0, r.jsx)(tE, {
                        headerClassName: rh().header,
                        containerClassName: rh().content,
                        isShimmerVisible: t.isHistoryShimmerVisible,
                        isShimmerActive: t.isHistoryLoading,
                        title: s({ id: 'search.history' }),
                        viewAllAction: a2.Z.searchHistory.href,
                        maxColumns: 2,
                        itemsPerColumn: 4,
                        showControls: !0,
                        children: l,
                    }),
                });
            });
            var rp = a(37717),
                rx = a(33301),
                rb = a.n(rx);
            let rv = (0, i.PA)(() => {
                    let e = (0, tu._)(),
                        { search: t, user: a } = (0, y.g)(),
                        { formatMessage: s } = (0, n.A)(),
                        i = (0, rp.t)(t.resetHistoryItems),
                        l = t.historyPage.items;
                    if (
                        ((0, o.useEffect)(
                            () => () => {
                                var e;
                                (null == (e = location) ? void 0 : e.pathname) !== a2.Z.searchHistory.href && t.resetHistoryStateRequest();
                            },
                            [t],
                        ),
                        t.isHistoryReady && a.account.data.uid && (0, o.use)(t.getHistory({ userId: a.account.data.uid })),
                        0 === l.length)
                    )
                        return null;
                    let c = l.reduce((t, a, r) => {
                        let { objectPosX: s, objectPosY: i } = (0, th.$)({ index: t.length, count: l.length, itemsCountPerColumn: 3 }),
                            n = (0, t_.G)({ item: a, index: r, pageId: eU.b.SEARCH, objectPosX: s, objectPosY: i, renderVibeControls: e });
                        return ((0, o.isValidElement)(n) && t.push(n), t);
                    }, []);
                    return (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(tE, {
                                headerClassName: rb().header,
                                containerClassName: rb().mixedEntitiesBlock,
                                isShimmerVisible: t.isHistoryShimmerVisible,
                                isShimmerActive: t.isHistoryLoading,
                                title: s({ id: 'search.history' }),
                                viewAllAction: a2.Z.searchHistory.href,
                                titleSize: 'xs',
                                itemsPerColumn: 3,
                                children: c,
                            }),
                            (0, r.jsx)('div', {
                                className: rb().buttonContainer,
                                children: (0, r.jsx)(F.$, {
                                    className: rb().button,
                                    'aria-label': s({ id: 'search.clear-history' }),
                                    disabled: !l.length,
                                    size: 'default',
                                    radius: 'xxxl',
                                    onClick: i,
                                    children: (0, r.jsx)($.HL, { variant: 'span', size: 'm', type: 'text', children: (0, r.jsx)(W.A, { id: 'search.clear-history' }) }),
                                }),
                            }),
                        ],
                    });
                }),
                rS = (0, i.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, y.g)();
                    return e ? (0, r.jsx)(rv, {}) : (0, r.jsx)(r_, {});
                });
            var rj = a(32596),
                rC = a(69630),
                rA = a(59714),
                rg = a(24709),
                ry = a(23480),
                rI = a(94126),
                rT = a(18117),
                rf = a(46457);
            let rk = (0, rg.n)({ event: 'Screen.Started', kind: 'hook', requiredScopes: ['screen'] }, (e) => {
                let t = (0, o.useContext)(ry.I),
                    { hash: a } = (0, rT.g)(),
                    { screen: r, tab: s } = (0, eT.j)();
                return (0, rf.c)(() => {
                    t &&
                        r &&
                        void 0 !== a &&
                        (0, rA.BP)(t, {
                            ...e,
                            hash: a,
                            pageId: r.pageId,
                            pageStyle: r.pageStyle,
                            pagePlacement: r.pagePlacement,
                            skeletonId: r.skeletonId,
                            mainObjectType: r.mainObjectType,
                            mainObjectId: r.mainObjectId,
                            ...(s ?? rI.Ve),
                        });
                });
            });
            var rE = a(76168);
            let rP = [a3.K.BEST_PLAY, a3.K.SEEDS];
            var rR = a(93317);
            let rN = (0, i.PA)((e) => {
                    let { autoPlaySearchText: t, searchResults: a, setContentScrollRef: i, contentScrollRef: n, hasSearchText: d } = e,
                        {
                            lumen: m,
                            user: _,
                            search: p,
                            settings: { isMobile: x },
                        } = (0, y.g)(),
                        [b, v] = (0, eb.d)(),
                        S = (0, o.useRef)(t),
                        j = t !== S.current,
                        C = m.isTriedToLoadData && !m.isAwakened;
                    ((e) => {
                        let { isEnabled: t, shouldCancel: a } = e,
                            { sonataState: r, vibe: s } = (0, y.g)(),
                            { screen: i } = (0, eT.j)(),
                            n = null == i ? void 0 : i.pageIdForFrom,
                            d = (0, l.useSearchParams)(),
                            u = (0, rE.z)(),
                            m = rk({
                                entityId: c.EntityTypes.Deeplink,
                                entityType: c.EntityTypes.Deeplink,
                                objectId: c.DomainObjectType.NonApplicable,
                                objectType: c.DomainObjectType.NonApplicable,
                                playbackActionId: '',
                            }),
                            h = (0, o.useRef)(!1),
                            _ = d.get(a3.K.BEST_PLAY),
                            p = d.get(a3.K.SEEDS),
                            x = 'true' === _ && p,
                            b = (null !== _ || null !== p) && !x,
                            v = (0, o.useRef)(x ? x.split(',') : []).current,
                            S = v.length > 0,
                            { isPlaying: j, togglePlay: C } = (0, eN.B)({ blockIdForFrom: c.EntityTypes.Q2vWave, pageIdForFrom: n, seeds: v });
                        ((0, o.useEffect)(() => {
                            b && u(rP);
                        }, [b, u]),
                            (0, o.useEffect)(() => {
                                let e = !a && !t;
                                !h.current && S && !e && ((h.current = !0), a || j || s.isApplying || (r.setShouldApplyYnisonState(!1), C(), u(rP), m()));
                            }, [S, t, j, u, m, a, r, C, s.isApplying]));
                    })({ isEnabled: m.isAwakened, shouldCancel: j || C });
                    let A = p.landing.hasUpperBlocks,
                        g = x || A,
                        I = !x && A;
                    return d
                        ? a
                        : _.isAuthorized
                          ? (0, r.jsx)(rC.h, {
                                scrollElement: I ? null : n,
                                headerElement: b,
                                children: (0, r.jsxs)(Z.N, {
                                    className: (0, s.$)(rr().scrollableContent, { [rr().scrollableContent_withUpperBlocks]: A }),
                                    containerClassName: rr().main,
                                    ref: i,
                                    'data-test-id': h.Xk.search.SEARCH_PAGE_CONTENT,
                                    children: [
                                        (0, r.jsx)(rs.E, {
                                            containerClassName: (0, s.$)(rr().skeletonContainer, { [rr().skeletonContainer_withUpperBlocks]: A }),
                                            headerClassName: I ? (0, s.$)(rr().skeletonHeaderWithUpperBlocks, rr().important) : void 0,
                                            stickyHeaderClassName: I
                                                ? (0, s.$)(rr().skeletonStickyHeaderWithUpperBlocks, rr().important)
                                                : (0, s.$)(rr().skeletonStickyHeader, rr().important),
                                            stickyHeaderTabIndex: g ? null : 0,
                                            headerConcealerComponent: (0, r.jsx)('div', { ref: v }),
                                            landing: p.landing,
                                            errorComponent: (0, r.jsx)(rj.SomethingWentWrong, { className: rr().error, withBackwardControl: !1 }),
                                            headerVariant: g ? rR.V.COMPOSITE : rR.V.STICKY,
                                        }),
                                        (0, r.jsx)(J.A, { children: (0, r.jsx)(Q.w, { className: rr().footer }) }),
                                    ],
                                }),
                            })
                          : (0, r.jsxs)(Z.N, {
                                className: rr().scrollableContent,
                                containerClassName: rr().main,
                                ref: i,
                                children: [
                                    (0, r.jsx)(o.Suspense, {
                                        children: (0, r.jsx)(u.F, {
                                            blockId: tm.h.SEARCH_HISTORY,
                                            blockType: tm.h.SEARCH_HISTORY,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            blockIdForFrom: tm.h.SEARCH_HISTORY,
                                            objectsCount: p.historyPage.items.length,
                                            children: (0, r.jsx)(rS, {}),
                                        }),
                                    }),
                                    (0, r.jsx)(o.Suspense, { children: (0, r.jsx)(ru, { className: rr().mixes }) }),
                                    (0, r.jsx)(J.A, { children: (0, r.jsx)(Q.w, { className: rr().footer }) }),
                                ],
                            });
                }),
                rL = (0, i.PA)(() => {
                    var e;
                    let t = (0, eI.f)(),
                        { awakeLumenModal: a, requestAwakeLumenModal: i } = (0, aQ.z)(),
                        C = (0, j.zb)(0),
                        [A, g] = (0, o.useState)(_.$.TOP),
                        [I, T] = (0, o.useState)(!1),
                        [f, k] = (0, o.useState)(null),
                        { formatMessage: E } = (0, n.A)(),
                        { search: P, experiments: R, location: N, lumen: L, user: B, settings: O } = (0, y.g)(),
                        { isMobile: w } = O,
                        D = R.checkExperiment(eF.z.WebNextQueryToVibeInputAnimation, 'on'),
                        { contentScrollRef: M, setContentScrollRef: z } = (0, a1.g)(),
                        H = ((e) => {
                            let { formatMessage: t } = (0, n.A)(),
                                a = (0, t4.d)(),
                                { experiments: r } = (0, y.g)(),
                                s = !r.checkExperiment(eF.z.WebNextProductWithoutRecommendation, 'on'),
                                i = r.checkExperiment(eF.z.WebNextSearchConcerts, 'on');
                            return e
                                ? [{ id: _.$.TOP, displayName: t({ id: 'search-filters.top' }) }, ...e].filter((e) => {
                                      if ((e.id !== _.$.CLIP || a) && (e.id !== _.$.CONCERT || i) && (e.id !== _.$.WAVES || s)) return e;
                                  })
                                : [{ id: _.$.TOP, displayName: t({ id: 'search-filters.top' }) }];
                        })(P.filters),
                        U = (0, a4.X)(),
                        [V, W] = (0, o.useState)(() => {
                            var e;
                            return decodeURIComponent(null != (e = new URLSearchParams(N.searchParams).get(a3.K.TEXT)) ? e : '');
                        }),
                        F = (0, o.useRef)(V),
                        $ = V.length > 0,
                        q = I && null != (e = P.searchCorrectedText) ? e : V;
                    (R.checkExperiment(eF.z.WebNextDisableSearch, 'on') && (0, l.redirect)(a2.Z.main.href),
                        (0, a8.J)(P.landing.loadingState === a6.G.RESOLVE),
                        (0, o.useEffect)(
                            () => () => {
                                (P.reset(), B.isAuthorized && P.landing.reset());
                            },
                            [B.isAuthorized, R, P],
                        ),
                        (0, o.useEffect)(() => {
                            L.isEnabled && L.getData();
                        }, [L]));
                    let Y = (0, b.c)((e, t) => {
                            (P.resetResults(), 0 !== e.length && P.getSearchResults({ text: decodeURIComponent(e), filter: t }));
                        }),
                        K = (0, b.c)(() => {
                            T(!0);
                        }),
                        Z = (0, b.c)((e) => {
                            e.trim() && k(e);
                        }),
                        Q = (0, b.c)((e) => {
                            var t, a;
                            if (!C.onTabChange || e === C.value) return;
                            C.onTabChange(e);
                            let r = null != (a = null == (t = H[e]) ? void 0 : t.id) ? a : _.$.TOP;
                            (Object.values(_.$).includes(r) && (g(r), Y(F.current, r)), M && (M.scrollTop = 0));
                        }),
                        J = (0, b.c)((e) => {
                            let t = e.trim(),
                                a = encodeURIComponent(t);
                            (W(a),
                                (F.current = a),
                                0 !== C.value && Q(0),
                                Y(a, _.$.TOP),
                                P.history.setShouldUpdateHistory(!0),
                                P.resetSearchCorrectedText(),
                                T(!1),
                                k(null));
                            let r = new URL(window.location.href);
                            (r.searchParams.set(a3.K.TEXT, t), U(String(r)));
                        }),
                        ee = (0, b.c)((e) => {
                            var t, a;
                            let { id: r, type: s, blockPosition: i, position: o, feedbackType: n } = e;
                            P.sendFeedback({
                                blockType: s,
                                entityId: ''.concat(s, ':').concat(r),
                                timestamp: new Date().toISOString(),
                                searchRequestId: P.searchRequestId,
                                query: F.current,
                                clickType: n,
                                blockPosition: i,
                                position: o,
                                page: null != (a = null == (t = P.pagesLoader.pager) ? void 0 : t.page) ? a : 0,
                            });
                        }),
                        et = ((e) => {
                            let { search: t, searchText: a, searchFilter: r } = e;
                            return (0, o.useCallback)(
                                function (e) {
                                    var s, i;
                                    let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                                        n = t.pagesLoader.pager;
                                    if (!n) return;
                                    let l = null != (i = null == (s = t.pagesLoader.items) ? void 0 : s.length) ? i : 0,
                                        c = e.endIndex * o;
                                    if (l > 0 && c >= l - rt) {
                                        if (!t.pagesLoader.hasMorePages) return;
                                        let e = Math.ceil(l / n.perPage);
                                        t.pagesLoader.isPageNeedToLoad(e) && t.getSearchResults({ text: decodeURIComponent(a), filter: r, page: e });
                                    }
                                },
                                [t, a, r],
                            );
                        })({ search: P, searchText: F.current, searchFilter: A }),
                        ea = (0, o.useMemo)(
                            () => (P.searchCorrectedText ? (0, r.jsx)(X, { searchCorrectedText: P.searchCorrectedText, onCorrectText: K }) : null),
                            [K, P.searchCorrectedText],
                        ),
                        es = (0, v.L)(() => {
                            var e, t;
                            if (P.isEmpty) return (0, r.jsx)(er, { searchCorrectedText: ea });
                            let a = null != (e = P.pagesLoader.items) ? e : [],
                                s = {
                                    className: rr().searchResults,
                                    isShimmerVisible: P.isShimmerVisible,
                                    isShimmerActive: P.isLoading,
                                    results: null != (t = P.pagesLoader.items) ? t : [],
                                    requestsCount: P.pagesLoader.requestsCount,
                                    bestResults: P.bestResults,
                                    q2vResults: P.q2vResults,
                                    sendSearchFeedback: ee,
                                    searchCorrectedText: ea,
                                    getDataByRange: et,
                                    ref: z,
                                    requestAwakeLumenModal: i,
                                };
                            switch (A) {
                                case _.$.TOP:
                                    return (0, r.jsx)(d.h, {
                                        tabId: A,
                                        tabPos: P.filterPosition(A),
                                        isTabSelectedByDefault: !1,
                                        children: (0, r.jsx)(aK, { ...s, 'data-test-id': h.Xk.search.SEARCH_PAGE_RESULTS_TOP }),
                                    });
                                case _.$.TRACK:
                                    return (0, r.jsx)(d.h, {
                                        tabId: A,
                                        tabPos: P.filterPosition(A),
                                        isTabSelectedByDefault: !1,
                                        children: (0, r.jsx)(u.F, {
                                            blockId: a0.U.SEARCH,
                                            blockType: c.EntityTypes.Tracks,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            objectsCount: a.length,
                                            children: (0, r.jsx)(tc, { ...s, filter: A, variant: 'list', 'data-test-id': h.Xk.search.SEARCH_PAGE_RESULTS_TRACK }),
                                        }),
                                    });
                                case _.$.ALBUM:
                                    return (0, r.jsx)(tc, { ...s, filter: p.n.ALBUM, 'data-test-id': h.Xk.search.SEARCH_PAGE_RESULTS_ALBUM });
                                case _.$.PLAYLIST:
                                    return (0, r.jsx)(tc, { ...s, filter: p.n.PLAYLIST, 'data-test-id': h.Xk.search.SEARCH_PAGE_RESULTS_PLAYLIST });
                                case _.$.ARTIST:
                                    return (0, r.jsx)(tc, { ...s, filter: p.n.ARTIST, 'data-test-id': h.Xk.search.SEARCH_PAGE_RESULTS_ARTIST });
                                case _.$.PODCAST:
                                    return (0, r.jsx)(d.h, {
                                        tabId: A,
                                        tabPos: P.filterPosition(A),
                                        isTabSelectedByDefault: !1,
                                        children: (0, r.jsx)(u.F, {
                                            blockId: a0.U.SEARCH,
                                            blockType: c.EntityTypes.Podcasts,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            objectsCount: a.length,
                                            children: (0, r.jsx)(tc, {
                                                ...s,
                                                filter: p.n.PODCAST,
                                                variant: 'list',
                                                'data-test-id': h.Xk.search.SEARCH_PAGE_RESULTS_PODCAST,
                                            }),
                                        }),
                                    });
                                case _.$.BOOK:
                                    return (0, r.jsx)(d.h, {
                                        tabId: A,
                                        tabPos: P.filterPosition(A),
                                        isTabSelectedByDefault: !1,
                                        children: (0, r.jsx)(u.F, {
                                            blockId: a0.U.SEARCH,
                                            blockType: c.EntityTypes.Podcasts,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            objectsCount: a.length,
                                            children: (0, r.jsx)(tc, { ...s, filter: p.n.BOOK, variant: 'list', 'data-test-id': h.Xk.search.SEARCH_PAGE_RESULTS_BOOK }),
                                        }),
                                    });
                                case _.$.CLIP:
                                    return (0, r.jsx)(tc, { ...s, filter: p.n.CLIP, 'data-test-id': h.Xk.search.SEARCH_PAGE_RESULTS_CLIP });
                                case _.$.WAVES:
                                    return (0, r.jsx)(d.h, {
                                        tabId: A,
                                        tabPos: P.filterPosition(A),
                                        isTabSelectedByDefault: !1,
                                        children: (0, r.jsx)(u.F, {
                                            blockId: a0.U.SEARCH,
                                            blockType: p.n.WAVE,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            objectsCount: a.length,
                                            children: (0, r.jsx)(tc, { ...s, filter: p.n.WAVE, 'data-test-id': h.Xk.search.SEARCH_PAGE_RESULTS_WAVES }),
                                        }),
                                    });
                                case _.$.CONCERT:
                                    return (0, r.jsx)(d.h, {
                                        tabId: A,
                                        tabPos: P.filterPosition(A),
                                        isTabSelectedByDefault: !1,
                                        children: (0, r.jsx)(u.F, {
                                            blockId: a0.U.SEARCH,
                                            blockType: c.EntityTypes.Concerts,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            objectsCount: a.length,
                                            children: (0, r.jsx)(tc, { ...s, filter: p.n.CONCERT, 'data-test-id': h.Xk.search.SEARCH_PAGE_RESULTS_CONCERT }),
                                        }),
                                    });
                                default:
                                    return ea;
                            }
                        }),
                        ei = (0, o.useMemo)(() => {
                            if ($)
                                return (0, r.jsx)(a7.F, {
                                    className: rr().carousel,
                                    carouselElement: (0, r.jsx)(re.wI, {
                                        className: rr().tabs,
                                        ...C,
                                        onTabChange: Q,
                                        children: H.map((e, t) =>
                                            (0, r.jsx)(
                                                a5.o,
                                                { className: (0, s.$)(rr().tab, { [rr().tab_selected]: t === C.value }), title: e.displayName, value: t },
                                                t,
                                            ),
                                        ),
                                    }),
                                });
                        }, [H, Q, C, $]),
                        eo = (0, v.L)(() => {
                            let e = t ? E({ id: 'search.input-placeholder-q2v' }) : E({ id: 'search.input-placeholder' }),
                                a = {
                                    className: rr().input,
                                    autoFocus: !0,
                                    initialValue: F.current,
                                    placeholder: e,
                                    onChange: J,
                                    resetButtonAriaLabel: E({ id: 'interface-actions.reset-search-input' }),
                                    correctedValue: null != f ? f : I ? P.searchCorrectedText : null,
                                    innerInputProps: { 'data-test-id': h.Xk.search.SEARCH_PAGE_SEARCH_INPUT },
                                    resetButtonProps: { 'data-test-id': h.Xk.search.SEARCH_PAGE_SEARCH_INPUT_RESET_BUTTON },
                                    searchIconProps: { 'data-test-id': h.Xk.search.SEARCH_PAGE_SEARCH_INPUT_ICON },
                                };
                            return D ? (0, r.jsx)(G, { ...a, lumenColor: aJ.R }) : (0, r.jsx)(S.D, { ...a });
                        }),
                        en = (0, b.c)(() => {
                            if (P.landing.isLoaded) return P.landing.getSkeleton({ id: x.p.SEARCH, showWizard: B.settings.showWizard }, { preloadBlocksCount: 2 });
                        });
                    return (
                        P.isNeededToLoad && $ && (0, o.use)(P.getSearchResults({ text: decodeURIComponent(V), filter: A })),
                        B.isAuthorized &&
                            P.landing.isNeededToLoad &&
                            !$ &&
                            (0, o.use)(P.landing.getSkeleton({ id: x.p.SEARCH, showWizard: B.settings.showWizard }, { preloadBlocksCount: 2 })),
                        (0, r.jsxs)(m.a, {
                            pageId: c.AppScreen.SearchScreen,
                            pageIdForFrom: eU.b.SEARCH,
                            skeletonId: x.p.SEARCH,
                            displayReasonId: P.searchRequestId,
                            children: [
                                a,
                                (0, r.jsx)(a9.m.Provider, {
                                    value: Z,
                                    children: (0, r.jsxs)('div', {
                                        className: (0, s.$)(rr().root, { [rr().root_showFilters]: $, [rr().root_mobile]: w }),
                                        'data-test-id': h.Xk.search.SEARCH_PAGE,
                                        children: [
                                            (0, r.jsxs)('div', { className: rr().header, 'data-test-id': h.Xk.search.SEARCH_PAGE_HEADER_CONTAINER, children: [eo, ei] }),
                                            (0, r.jsx)('div', {
                                                className: rr().content,
                                                children: (0, r.jsx)(rN, {
                                                    autoPlaySearchText: q,
                                                    hasSearchText: $,
                                                    contentScrollRef: M,
                                                    setContentScrollRef: z,
                                                    searchResults: es,
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, r.jsx)(aZ.p, { onFinishSuccess: en }),
                            ],
                        })
                    );
                });
        },
        69629: (e) => {
            var t = Object.prototype.hasOwnProperty;
            function a(e) {
                return '[Throws: ' + (e ? e.message : '?') + ']';
            }
            function r(e) {
                var r = [];
                return (function e(s) {
                    if (null === s || 'object' != typeof s) return s;
                    if (-1 !== r.indexOf(s)) return '[Circular]';
                    if ((r.push(s), 'function' == typeof s.toJSON))
                        try {
                            var i = e(s.toJSON());
                            return (r.pop(), i);
                        } catch (e) {
                            return a(e);
                        }
                    if (Array.isArray(s)) {
                        var o = s.map(e);
                        return (r.pop(), o);
                    }
                    var n = Object.keys(s).reduce(function (r, i) {
                        return (
                            (r[i] = e(
                                (function (e, r) {
                                    if (t.call(e, r))
                                        try {
                                            return e[r];
                                        } catch (e) {
                                            return a(e);
                                        }
                                    return e[r];
                                })(s, i),
                            )),
                            r
                        );
                    }, {});
                    return (r.pop(), n);
                })(e);
            }
            ((e.exports = function (e, t, a) {
                return JSON.stringify(r(e), t, a);
            }),
                (e.exports.ensureProperties = r));
        },
        70662: (e) => {
            e.exports = { mixesTitle: 'MixesGrid_mixesTitle__QawnL', mixesGrid: 'MixesGrid_mixesGrid__uZQtt' };
        },
        71344: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => p });
            var r = a(88800),
                s = a(97234),
                i = a(90852),
                o = a(14661),
                n = a(63765),
                l = a(46811),
                c = a(27639),
                d = a(4196),
                u = a(58378),
                m = a(91198),
                h = a(67665),
                _ = a(91087);
            let p = (e) => {
                let { renderVibeControls: t, item: a, index: p, pageId: x, sendSearchFeedback: b, blockPosition: v = 0, objectPosX: S, objectPosY: j } = e;
                switch (a.type) {
                    case o.n.PODCAST_EPISODE:
                        return (0, r.jsx)(
                            i.B,
                            {
                                objectType: s.DomainObjectType.PodcastEpisode,
                                objectId: a.data.id,
                                objectPosX: S,
                                objectPosY: j,
                                children: (0, r.jsx)(u.c, { pageId: x, track: a.data }),
                            },
                            a.data.id,
                        );
                    case o.n.UGC_TRACK:
                        return (0, r.jsx)(u.c, { pageId: x, track: a.data });
                    case o.n.TRACK:
                        return (0, r.jsx)(
                            i.B,
                            {
                                objectType: s.DomainObjectType.Track,
                                objectId: a.data.id,
                                objectPosX: S,
                                objectPosY: j,
                                children: (0, r.jsx)(_.N.Provider, {
                                    value: { sendSearchFeedback: b, id: a.data.entityId, type: n.o.TRACK, blockPosition: v, position: p },
                                    children: (0, r.jsx)(u.c, { pageId: x, track: a.data }),
                                }),
                            },
                            a.data.id,
                        );
                    case o.n.ARTIST:
                        return (0, r.jsx)(
                            i.B,
                            {
                                objectType: s.DomainObjectType.Artist,
                                objectId: a.data.id,
                                objectPosX: S,
                                objectPosY: j,
                                children: (0, r.jsx)(_.N.Provider, {
                                    value: { sendSearchFeedback: b, id: a.data.id, type: n.o.ARTIST, blockPosition: v, position: p },
                                    children: (0, r.jsx)(c.c, { pageId: x, artist: a.data }),
                                }),
                            },
                            a.data.id,
                        );
                    case o.n.PLAYLIST:
                        return (0, r.jsx)(
                            i.B,
                            {
                                objectType: s.DomainObjectType.Playlist,
                                objectId: a.data.id,
                                objectPosX: S,
                                objectPosY: j,
                                children: (0, r.jsx)(_.N.Provider, {
                                    value: { sendSearchFeedback: b, id: a.data.id, type: n.o.PLAYLIST, blockPosition: v, position: p },
                                    children: (0, r.jsx)(d.v, { pageId: x, playlist: a.data }),
                                }),
                            },
                            a.data.id,
                        );
                    case o.n.PODCAST:
                        return (0, r.jsx)(
                            i.B,
                            {
                                objectType: s.DomainObjectType.Podcast,
                                objectId: String(a.data.id),
                                objectPosX: S,
                                objectPosY: j,
                                children: (0, r.jsx)(
                                    _.N.Provider,
                                    {
                                        value: { sendSearchFeedback: b, id: a.data.id, type: n.o.PODCAST, blockPosition: v, position: p },
                                        children: (0, r.jsx)(l.M, { pageId: x, album: a.data }),
                                    },
                                    a.data.id,
                                ),
                            },
                            a.data.id,
                        );
                    case o.n.ALBUM:
                        return (0, r.jsx)(
                            i.B,
                            {
                                objectType: s.DomainObjectType.Album,
                                objectId: String(a.data.id),
                                objectPosX: S,
                                objectPosY: j,
                                children: (0, r.jsx)(
                                    _.N.Provider,
                                    {
                                        value: { sendSearchFeedback: b, id: a.data.id, type: n.o.ALBUM, blockPosition: v, position: p },
                                        children: (0, r.jsx)(l.M, { pageId: x, album: a.data }),
                                    },
                                    a.data.id,
                                ),
                            },
                            a.data.id,
                        );
                    case o.n.WAVE: {
                        let e = a.data;
                        return (0, r.jsx)(
                            i.B,
                            {
                                objectType: s.DomainObjectType.Wave,
                                objectId: e.stationId,
                                objectPosX: S,
                                objectPosY: j,
                                children: (0, r.jsx)(_.N.Provider, {
                                    value: { sendSearchFeedback: b, id: e.seedsId, type: n.o.WAVE, blockPosition: v, position: p },
                                    children: (0, r.jsx)(h.H, { vibe: e, controls: t(e), cover: e.cover, description: e.description, agentVariant: m.h.SMALL }),
                                }),
                            },
                            e.stationId,
                        );
                    }
                    default:
                        return null;
                }
            };
        },
        71506: (e) => {
            e.exports = { block: 'SearchBestResultsCommon_block__v11At', cover: 'SearchBestResultsCommon_cover__ZHlYo' };
        },
        72936: (e) => {
            e.exports = { root: 'SearchBestResultsTrackBlock_root__Qsh_f', cover: 'SearchBestResultsTrackBlock_cover__aCixO' };
        },
        73436: (e) => {
            e.exports = { root: 'VirtualList_root__kEvf_' };
        },
        74481: (e) => {
            e.exports = { root: 'EntitiesListShimmer_root__Mq_tK' };
        },
        76245: (e) => {
            e.exports = {
                root: 'AnimatedSearchInputGradient_root__RCZ_L',
                'animated-search-input-gradient-soft-blur': 'AnimatedSearchInputGradient_animated-search-input-gradient-soft-blur__sl4Vj',
                'animated-search-input-gradient-mask-blur': 'AnimatedSearchInputGradient_animated-search-input-gradient-mask-blur__6VngZ',
                root_active: 'AnimatedSearchInputGradient_root_active__xjLMk',
                root_safari: 'AnimatedSearchInputGradient_root_safari__Ji6uj',
                root_size_xxs: 'AnimatedSearchInputGradient_root_size_xxs__umHrV',
                gradient: 'AnimatedSearchInputGradient_gradient__pMdqx',
                ringMask: 'AnimatedSearchInputGradient_ringMask__0hjLD',
                ringOuter: 'AnimatedSearchInputGradient_ringOuter__uNAfw',
                ringHole: 'AnimatedSearchInputGradient_ringHole__AXkf4',
                softGlow: 'AnimatedSearchInputGradient_softGlow__UDn1M',
                hardGlow: 'AnimatedSearchInputGradient_hardGlow__nLxz_',
                stroke: 'AnimatedSearchInputGradient_stroke__kujhk',
                revealMask: 'AnimatedSearchInputGradient_revealMask__PcVQv',
                revealBlur: 'AnimatedSearchInputGradient_revealBlur__k9fMh',
                'animated-search-input-gradient-mask-opacity': 'AnimatedSearchInputGradient_animated-search-input-gradient-mask-opacity__p6uRU',
                revealPass: 'AnimatedSearchInputGradient_revealPass__r6c29',
                'animated-search-input-gradient-mask-inline-motion': 'AnimatedSearchInputGradient_animated-search-input-gradient-mask-inline-motion__qC86w',
                'animated-search-input-gradient-mask-shape-motion': 'AnimatedSearchInputGradient_animated-search-input-gradient-mask-shape-motion__u8huB',
            };
        },
        77771: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 67090));
        },
        79285: (e) => {
            e.exports = { root: 'SearchQueryToVibeResults_root__fsXQh' };
        },
        79418: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => x });
            var r = a(88800),
                s = a(65724),
                i = a(61013),
                o = a(53548);
            let n = (e) => {
                    let { style: t, forwardRef: a, context: s, ...i } = e,
                        o = (null == s ? void 0 : s.listAriaLabel) || void 0,
                        n = (null == s ? void 0 : s.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: n, 'aria-label': o, style: { ...t }, ref: a, ...i });
                },
                l = (0, o.forwardRef)((e, t) => (0, r.jsx)(n, { forwardRef: t, ...e }));
            var c = a(16434),
                d = a.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: a, withFooter: i, withHeader: o, withForceScroll: n, ...l } = e;
                    return (0, r.jsx)('div', {
                        className: (0, s.$)(d().scroller, { [d().scroller_withFooter]: i, [d().scroller_withHeader]: o, [d().scroller_withForceScroll]: n }),
                        style: { ...t },
                        ref: a,
                        ...l,
                        tabIndex: -1,
                    });
                },
                m = (0, o.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
            var h = a(55482),
                _ = a(75151);
            let p = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: a,
                            onRangeHandler: s,
                            debounceDurationInMs: i = 100,
                            totalCount: n = 0,
                            shouldTriggerRangeChangedOn: l = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [m, p] = (0, o.useState)(null),
                        x = (0, o.useMemo)(
                            () =>
                                (0, h.A)((e) => {
                                    if ((null == s || s(e), l.length > 0 && p(e), t && a)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            s = Math.floor(e.startIndex / t);
                                        for (let e = s; e < r; e++) a(e);
                                    }
                                }, i),
                            [i, s, t, a, l],
                        );
                    (0, o.useEffect)(() => {
                        l.length > 0 && m && x(m);
                    }, l);
                    let b = (0, o.useMemo)(() => {
                        if (c)
                            return (0, h.A)((e) => {
                                c(e);
                            }, i);
                    }, [c, i]);
                    return (0, r.jsx)(_.sN, { ref: d, rangeChanged: x, totalCount: n, endReached: b, ...u });
                },
                x = (e) => {
                    let {
                            className: t,
                            customComponents: a,
                            onGetDataByPage: n,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: h,
                            listClassName: _,
                            overscan: x = 700,
                            pageSize: b = 20,
                            totalCount: v,
                            totalRequests: S,
                            debounceDurationInMs: j,
                            initialItemCount: C,
                            minInitialItemCount: A = 20,
                            handleRef: g,
                            alwaysShowScrollbar: y = !1,
                            testId: I,
                            isMobileLayout: T = !1,
                            shouldTriggerRangeChangedOn: f,
                            ...k
                        } = e,
                        [E, P] = (0, o.useState)(!1),
                        R = (0, o.useMemo)(
                            () =>
                                (0, i.A)((e) => {
                                    P(e);
                                }, 100),
                            [],
                        ),
                        N = (0, o.useMemo)(() => {
                            var e, t;
                            return T
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == a ? void 0 : a.List) ? e : l,
                                      Item: null == a ? void 0 : a.Item,
                                      ScrollSeekPlaceholder: null == a ? void 0 : a.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == a ? void 0 : a.List) ? t : l,
                                      Item: null == a ? void 0 : a.Item,
                                      Header: null == a ? void 0 : a.Header,
                                      Footer: null == a ? void 0 : a.Footer,
                                      ScrollSeekPlaceholder: null == a ? void 0 : a.ScrollSeekPlaceholder,
                                  };
                        }, [a, S, T]),
                        L = C ? Math.min(C, A) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, s.$)(d().root, { [d().root_scrolling]: E || y, [d().root_notScrolling]: !E && !y }, t),
                        'data-test-id': I,
                        children: [
                            T && (null == a ? void 0 : a.Header) && a.Header(),
                            (0, r.jsx)(p, {
                                overscan: x,
                                components: N,
                                listClassName: _,
                                itemClassName: u,
                                isScrolling: R,
                                itemContent: h,
                                scrollerRef: g,
                                totalCount: v,
                                pageSize: b,
                                onPageHandler: n,
                                onRangeHandler: c,
                                debounceDurationInMs: j,
                                initialItemCount: L,
                                shouldTriggerRangeChangedOn: f,
                                ...k,
                            }),
                            T && (null == a ? void 0 : a.Footer) && a.Footer(),
                        ],
                    });
                };
        },
        80624: (e) => {
            e.exports = { root: 'SearchBestResultsBookChapterBlock_root__2JjcF', cover: 'SearchBestResultsBookChapterBlock_cover__I2CYO' };
        },
        87475: (e) => {
            e.exports = {
                root: 'VibeCard_root__9TDjP',
                playingAnimation: 'VibeCard_playingAnimation__iRgvh',
                cover: 'VibeCard_cover__LbX93',
                image: 'VibeCard_image__luolD',
                controls: 'VibeCard_controls__CcEVx',
                controls_isPlaying: 'VibeCard_controls_isPlaying__1_Ass',
                important: 'VibeCard_important__WPWqc',
                control: 'VibeCard_control__SM3H4',
                playControl: 'VibeCard_playControl__pZxq5',
                playButton: 'VibeCard_playButton__LWepP',
            };
        },
        88626: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => r });
            var r = (function (e) {
                return ((e.ANDROID = 'Android'), (e.IOS = 'iOS'), (e.MACOS = 'MacOS'), (e.WINDOWS = 'Windows'), e);
            })({});
        },
        89592: (e) => {
            e.exports = { root: 'SearchBestResultsConcertBlock_root__JDy_y' };
        },
        91802: (e) => {
            e.exports = { root: 'SearchBestResultsArtistBlock_root__ZLcy4' };
        },
        94698: (e) => {
            e.exports = {
                root: 'SearchBestResultsOverviewBlock_root__m1nKx',
                button: 'SearchBestResultsOverviewBlock_button__F2FaR',
                important: 'SearchBestResultsOverviewBlock_important__oLQCU',
            };
        },
        96966: (e) => {
            e.exports = {
                header: 'SearchPage_header__T2OUM',
                root: 'SearchPage_root__TtwTi',
                root_showFilters: 'SearchPage_root_showFilters__pb2o1',
                input: 'SearchPage_input__7L7wS',
                root_mobile: 'SearchPage_root_mobile__caKC9',
                content: 'SearchPage_content__Ax9D6',
                scrollableContent: 'SearchPage_scrollableContent__qdrWa',
                scrollableContent_withUpperBlocks: 'SearchPage_scrollableContent_withUpperBlocks___Tx_d',
                main: 'SearchPage_main__FDQGD',
                carousel: 'SearchPage_carousel__7jwGp',
                tabs: 'SearchPage_tabs__tlwgh',
                tab: 'SearchPage_tab__2yIDQ',
                tab_selected: 'SearchPage_tab_selected__Z7lYv',
                compilations: 'SearchPage_compilations__ZHEUr',
                footer: 'SearchPage_footer__uQN_X',
                error: 'SearchPage_error__WSxpu',
                skeletonStickyHeader: 'SearchPage_skeletonStickyHeader__SQqeV',
                important: 'SearchPage_important__z3aCa',
                skeletonHeaderWithUpperBlocks: 'SearchPage_skeletonHeaderWithUpperBlocks__LArR6',
                skeletonStickyHeaderWithUpperBlocks: 'SearchPage_skeletonStickyHeaderWithUpperBlocks__I1NoV',
                skeletonContainer: 'SearchPage_skeletonContainer__phbvK',
                skeletonContainer_withUpperBlocks: 'SearchPage_skeletonContainer_withUpperBlocks__J4934',
                mixes: 'SearchPage_mixes__yusZB',
            };
        },
        97893: (e) => {
            e.exports = {
                root: 'SearchMixed_root__RR4QT',
                container: 'SearchMixed_container__KIfE1',
                correctedTextBlock: 'SearchMixed_correctedTextBlock___1rfE',
                block: 'SearchMixed_block__SasiH',
                blockCarousel: 'SearchMixed_blockCarousel__IQjJA',
                blockHeader: 'SearchMixed_blockHeader__L0FSh',
                blockMixed: 'SearchMixed_blockMixed__udOYV',
                footer: 'SearchMixed_footer__INQFP',
                item: 'SearchMixed_item__aTIrG',
                important: 'SearchMixed_important__1ncD8',
            };
        },
        98969: (e) => {
            e.exports = {
                root: 'SearchEmpty_root__Yz53B',
                container: 'SearchEmpty_container__6WP_o',
                content: 'SearchEmpty_content__OdVMa',
                correctedTextBlock: 'SearchEmpty_correctedTextBlock__wR4Hh',
                icon: 'SearchEmpty_icon__NYKMM',
                title: 'SearchEmpty_title__C77x5',
                subtitle: 'SearchEmpty_subtitle__2TlGa',
                footer: 'SearchEmpty_footer__WP03G',
            };
        },
        99890: (e, t, a) => {
            'use strict';
            a.d(t, { C8: () => i, UC: () => o, dM: () => n, uV: () => l });
            var r = a(89916),
                s = a(66363);
            let i = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                o = (e) => (e.uid ? 'authorized' : 'no-uid'),
                n = (e) => {
                    if (!(e instanceof r.m5) || !(0, s.Nh)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, s.Nh)(e.cause)) return;
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
                6925, 8655, 9904, 3078, 7191, 1833, 8194, 1191, 918, 1041, 2803, 4520, 7627, 3130, 917, 1881, 4716, 6582, 9192, 1639, 4863, 1635, 2218, 1138, 893, 6252,
                727, 6706, 4771, 1311, 5201, 3075, 2662, 6904, 1898, 2058, 3578, 8628, 9780, 8283, 9332, 5151, 1223, 9027, 146, 9907, 4732, 9087, 3979, 6719, 1928, 9091,
                9124, 900, 9934, 2470, 7670, 4441, 6374, 2088, 8979, 818, 7053, 4322, 3300, 1372, 5823, 6820, 4244, 1960, 1401, 4394, 5772, 763, 2670, 7358,
            ],
            () => e((e.s = 77771)),
        ),
            (_N_E = e.O()));
    },
]);
